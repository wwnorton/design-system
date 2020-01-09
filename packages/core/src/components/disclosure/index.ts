import debounce from 'lodash.debounce';

/**
 * Check if an element has a CSS transition. Returns true if _any_ transition on
 * the element has a duration greater than 0s.
 */
export const hasTransition = (element: HTMLElement | null): boolean => {
	if (element) {
		const styles = window.getComputedStyle(element);
		const durations = styles.getPropertyValue('transition-duration').split(/,\s*/);
		return durations.some((v) => Number(v.replace('s', '')) > 0);
	}
	return false;
};

type DisclosureState = 'open' | 'closed' | 'opening' | 'closing';
type DisclosureEvent = 'closestart' | 'closecancel' | 'closeend' | 'openstart' | 'opencancel' | 'openend';
const instances = new Set<Disclosure>();

export interface DisclosureOptions {
	/**
	 * The contents will be placed inside a container that has its `height` set
	 */
	containerClass: string;
	/**
	 * The class that will be applied to the contents of the details. If an
	 * element already has this class, it will be treated as the contents.
	 */
	contentsClass: string;
	/** A class or element that will be treated as the details marker. */
	markerClass: string | HTMLElement;
	/** Whether resizing the window should trigger a height calculation update. */
	updateOnResize: boolean;
	/** A class that will be applied to the bound element while opening. */
	closingClass: string;
	/** A class that will be applied to the bound element while closing. */
	openingClass: string;
}

export default class Disclosure {
	public static foo = 'foo';
	public details: HTMLDetailsElement;
	public container: HTMLDivElement = document.createElement('div');
	public contents: HTMLElement | null = null;
	public contentsHeight = 0;
	public options: DisclosureOptions;
	public enabled = false;
	public bindings: [DisclosureEvent, EventListener][] = [];

	private initialContainerStyle?: string;
	private internalState: DisclosureState = 'closed';

	public static customEvents: DisclosureEvent[] = [
		'closestart',
		'closecancel',
		'closeend',
		'openstart',
		'opencancel',
		'openend',
	]

	public static defaultOptions: DisclosureOptions = {
		containerClass: 'disclosure__container',
		contentsClass: 'disclosure__contents',
		markerClass: 'details-marker',
		updateOnResize: true,
		openingClass: 'opening',
		closingClass: 'closing',
	}

	/**
	 * The time in milliseconds to delay when recalculating the contents height
	 * due to a window resize. Only applies if `updateOnResize` is `true`.
	*/
	public static RESIZE_DEBOUNCE_DELAY = 150;

	constructor(details: HTMLDetailsElement, options?: Partial<DisclosureOptions>) {
		this.details = details;
		this.options = { ...Disclosure.defaultOptions, ...options };
		this.enabled = false;
		this.bindings = [];

		instances.add(this);
	}

	private emit(name: string): void {
		this.details.dispatchEvent(new CustomEvent(name, { detail: this }));
	}

	private async setHeight(height: number): Promise<void> {
		const newHeight = `${height}px`;
		if (this.container.style.height === newHeight) return;
		this.container.style.height = newHeight;
		await new Promise((resolve) => requestAnimationFrame(resolve));
	}

	private removeHeight(): this {
		if (this.initialContainerStyle) {
			this.container.setAttribute('style', this.initialContainerStyle);
		} else {
			this.container.removeAttribute('style');
		}
		return this;
	}

	private findHeight(): number {
		const isClosed = !this.isOpen;
		if (isClosed) this.details.setAttribute('open', 'open');
		const height = this.container.clientHeight;
		if (isClosed) this.details.removeAttribute('open');
		return height;
	}

	/**
	 * The `<summary>` click handler.
	 *
	 * As soon as a `<details>` element no longer has the `open` attribute,
	 * its inner contents disappear. To prevent this, we transition the height
	 * of the contents via its outer container, delaying the removal of the
	 * `open` attribute until the `transitionend` event triggers.
	 */
	private onSummaryClick = async (e: MouseEvent): Promise<void> => {
		if (hasTransition(this.container)) {
			if (this.isOpen) {
				e.preventDefault();
				switch (this.state) {
					// clicked while opening -> cancel open
					case 'opening':
						await this.setState('closing');
						this.emit('opencancel');
						break;
					// clicked while closing -> cancel close
					case 'closing':
						await this.setState('opening');
						this.emit('closecancel');
						break;
					// clicked while fully open -> begin closing
					case 'open':
						await this.setState('closing');
						this.emit('closestart');
						break;
					default:
				}
			// clicked while fully closed -> begin opening
			} else {
				await this.setState('opening');
				this.emit('openstart');
			}
		}
	}

	private onTransitionend = async (): Promise<void> => {
		// was closing -> finish close
		if (this.state === 'closing') {
			await this.setState('closed');
			this.emit('closeend');
		}
		// was opening -> finish open
		if (this.state === 'opening') {
			await this.setState('open');
			this.emit('openend');
		}
	}

	private onToggle = (): void => {
		if (this.isOpen && this.state === 'closed') this.setState('opening');
		if (!this.isOpen && this.state !== 'closed') this.setState('closed');
	}

	private onWindowresize = debounce(() => {
		this.removeHeight();
		this.contentsHeight = this.findHeight();
		if (this.state === 'opening') {
			this.setHeight(this.contentsHeight);
		}
		if (this.state === 'closing') {
			this.setHeight(0);
		}
	}, Disclosure.RESIZE_DEBOUNCE_DELAY)

	public get isOpen(): HTMLDetailsElement['open'] {
		return this.details.open;
	}

	public get state(): DisclosureState {
		return this.internalState;
	}

	public async setState(val: DisclosureState): Promise<void> {
		this.internalState = val;
		switch (val) {
			case 'opening':
				this.details.classList.remove(this.options.closingClass);
				this.details.classList.add(this.options.openingClass);
				await this.setHeight(this.contentsHeight);
				break;
			case 'closing':
				this.details.classList.remove(this.options.openingClass);
				this.details.classList.add(this.options.closingClass);
				await this.setHeight(0);
				break;
			case 'open':
				this.details.classList.remove(this.options.openingClass);
				break;
			case 'closed':
				this.details.classList.remove(this.options.closingClass);
				this.details.removeAttribute('open');
				break;
			default:
		}
	}

	get summary(): HTMLElement | null {
		return this.details.querySelector('summary');
	}

	private getContents(startingNode: HTMLElement): HTMLElement {
		const existingContents = this.contents
			|| this.details.querySelector<HTMLElement>(`.${this.options.contentsClass}`);
		if (existingContents) return existingContents;
		const contents: Node[] = [];
		let current: Node = startingNode;
		while (current.nextSibling) {
			contents.push(current.nextSibling);
			current = current.nextSibling;
		}
		const el: HTMLDivElement = document.createElement('div');
		el.classList.add(this.options.contentsClass);
		contents.forEach((node) => el.appendChild(node));
		return el;
	}

	public addEventListener(
		/* eslint-disable @typescript-eslint/no-explicit-any */
		type: any,
		listener: (this: HTMLDetailsElement, ev: any) => any,
		options?: boolean | AddEventListenerOptions | undefined,
		/* eslint-enable @typescript-eslint/no-explicit-any */
	): this {
		this.details.addEventListener(type, listener, options);
		return this;
	}

	/**
	 * Enable the disclosure's progressive enhancement effects.
	 */
	public enable(): this {
		if (this.enabled) return this;

		if (!this.summary) {
			// eslint-disable-next-line no-console
			console.warn('No <summary> found in', this.details);
			return this;
		}

		// create the contents structure:
		// details > summary + .disclosure__container > .disclosure__contents > { user content }
		this.container.classList.add(this.options.containerClass);
		this.contents = this.getContents(this.summary);
		this.container.appendChild(this.contents);
		this.details.appendChild(this.container);

		this.contentsHeight = this.findHeight();
		this.internalState = (this.isOpen) ? 'open' : 'closed';
		this.setHeight((this.isOpen) ? this.contentsHeight : 0);

		this.details.addEventListener('toggle', this.onToggle);
		this.summary.addEventListener('click', this.onSummaryClick);
		this.container.addEventListener('transitionend', this.onTransitionend);
		if (this.options.updateOnResize) window.addEventListener('resize', this.onWindowresize);

		this.enabled = true;
		return this;
	}

	/**
	 * Disable the disclosure's progressive enhancement effects. Re-enable the
	 * effects with the `.enable()` method.
	 */
	public disable(): this {
		if (!this.enabled) return this;

		this.removeHeight();

		this.details.removeEventListener('toggle', this.onToggle);
		if (this.summary) this.summary.removeEventListener('click', this.onSummaryClick);
		this.container.removeEventListener('transitionend', this.onTransitionend);
		if (this.options.updateOnResize) window.removeEventListener('resize', this.onWindowresize);

		this.enabled = false;
		return this;
	}

	/** Destroy the instance entirely. Re-enabling will require re-instantiation. */
	public destroy(): void {
		this.disable();
		instances.delete(this);
	}

	static get instances(): Disclosure[] {
		return Array.from(instances);
	}

	static enhance(details: HTMLDetailsElement, options?: Partial<DisclosureOptions>): Disclosure {
		const instance = new Disclosure(details, options);
		instance.enable();
		return instance;
	}

	static enhanceAll(
		/** A CSS selector for the elements that should be enhanced. */
		selector = 'details',
		options?: Partial<DisclosureOptions>,
	): Disclosure[] {
		document.querySelectorAll(selector).forEach((el) => {
			if (el.tagName.toUpperCase() === 'DETAILS') {
				Disclosure.enhance(el as HTMLDetailsElement, options);
			} else {
				console.warn('Disclosures must be a `<details>` element.');
			}
		});
		return Disclosure.instances;
	}

	static destroyAll(): void {
		Disclosure.instances.forEach((d) => d.destroy());
	}
}

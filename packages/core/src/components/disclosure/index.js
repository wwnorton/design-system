import debounce from 'lodash.debounce';

// gets height of container on load
const getHeight = (el) => {
	const { display, maxHeight } = window.getComputedStyle(el);

	if (display !== 'none' && parseInt(maxHeight, 10)) {
		return el.clientHeight;
	}

	/* eslint-disable no-param-reassign */
	el.style.visibility = 'hidden';
	el.style.display = 'block';

	const { clientHeight } = el;
	el.removeAttribute('style');
	return clientHeight;
};

// toggle classnames
const classToggler = (el, className) => () => {
	el.classList.toggle(className);
};

// PRIVATE methods stored externally from the class

function emitEvent(eventName, eventDetail) {
	const eventInit = (eventDetail) ? { detail: eventDetail } : null;
	this.details.dispatchEvent(new CustomEvent(eventName, eventInit));
}

/**
 * <summary> click handler
 * As soon as a <details> element no longer has the [open] attribute,
 * its inner contents disappear.
 * To prevent this, we transition the height of the contents, delaying the
 * removal of the [open] attribute until the 'transitionend' event triggers
 */
function summaryClickHandler(e) {
	if (this.open) {
		e.preventDefault();
		if (this.opening) {
			this.opening = false;
			emitEvent.call(this, 'opencancel');
			if (this.onopencancel) this.onopencancel();
		}
		if (this.closing) {
			this.closing = false;
			this.panel.style.height = `${this.panelHeight}px`;
			emitEvent.call(this, 'closecancel');
			if (this.onclosecancel) this.onclosecancel();
		} else {
			this.closing = true;
			this.panel.style.height = 0;
			emitEvent.call(this, 'closestart');
			if (this.onclosestart) this.onclosestart();
		}
	} else {
		this.opening = true;
		emitEvent.call(this, 'openstart');
		if (this.onopenstart) this.onopenstart();
	}
}

function updatePanelStyle() {
	if (this.open) {
		this.panel.style.height = `${this.panelHeight}px`;
	} else {
		this.panel.style.height = 0;
	}
}

function panelTransitionendHandler() {
	if (this.closing) {
		this.closing = false;
		this.details.removeAttribute('open');
		emitEvent.call(this, 'closeend');
		if (this.oncloseend) this.oncloseend();
	}
	if (this.opening) {
		this.opening = false;
		emitEvent.call(this, 'openend');
		if (this.onopenend) this.onopenend();
	}
}

function getDetailsPanelHeight() {
	let height = getHeight(this.panel);
	if (!this.open) {
		this.details.setAttribute('open', 'open');
		height = getHeight(this.panel);
		this.details.removeAttribute('open');
	}
	return height;
}

const instances = new Set();
const noop = () => {};

export default class Disclosure {
	constructor(details) {
		this.details = details;
		this.enabled = false;
		this.closing = false;
		this.opening = false;
		this.bindings = [];

		this.onclick = summaryClickHandler.bind(this);
		this.ontoggle = updatePanelStyle.bind(this);
		this.ontransitionend = panelTransitionendHandler.bind(this);
		this.onwindowresize = debounce(this.updatePanelHeight.bind(this), 150);

		Disclosure.customEvents.forEach((eventName) => {
			this[`on${eventName}`] = noop;
		});

		instances.add(this);
	}

	get open() {
		return this.details.open;
	}

	get summary() {
		return this.details.querySelector('summary');
	}

	get panel() {
		return this.summary.nextElementSibling;
	}

	/**
	 * Enable
	 */
	enable() {
		if (this.enabled) return this;
		/* eslint-disable no-console */
		if (!this.summary) {
			return console.warn('No <summary> button found in', this.details);
		}

		if (!this.panel) {
			return console.warn('No contents found in', this.details);
		}

		this.updatePanelHeight();

		this.summary.addEventListener('click', this.onclick);
		this.details.addEventListener('toggle', this.ontoggle);
		this.panel.addEventListener('transitionend', this.ontransitionend);
		window.addEventListener('resize', this.onwindowresize);
		this.enabled = true;
		return this;
	}

	/**
	 * Disable
	 */
	disable() {
		if (this.enabled) {
			this.summary.removeEventListener('click', this.onclick);
			this.details.removeEventListener('toggle', this.ontoggle);
			this.panel.removeEventListener('transitionend', this.ontransitionend);
			window.removeEventListener('resize', this.onwindowresize);

			this.unbind();

			this.enabled = false;
		}
		return this;
	}

	/**
	 * Destroy
	 */
	destroy() {
		this.disable();
		instances.delete(this);
		return this;
	}

	/**
	 * Bind opening/closing states to another element via class toggling
	 * Toggles the opening/closing classes on that element when appropriate
	 */
	bindTo(element, { closing, opening } = { closing: 'closing', opening: 'opening' }) {
		const el = (typeof element === 'string')
			? this.details.querySelector(element)
			: element;

		if (el) {
			const closeToggler = classToggler(el, closing);
			const openToggler = classToggler(el, opening);

			Disclosure.customEvents.forEach((eventName) => {
				const listener = (eventName.startsWith('close')) ? closeToggler : openToggler;
				this.details.addEventListener(eventName, listener);
				this.bindings.push([eventName, listener]);
			});
		}
		return this;
	}

	/**
	 * Unbind
	 */
	unbind() {
		this.bindings.reduceRight((acc, [eventName, listener]) => {
			this.details.removeEventListener(eventName, listener);
			return acc;
		}, []);
		return this;
	}

	/**
	 * Update the height of the panel element
	 */
	updatePanelHeight() {
		this.panel.removeAttribute('style');
		this.panelHeight = getDetailsPanelHeight.call(this);
		updatePanelStyle.call(this);
		return this;
	}

	static get customEvents() {
		return [
			'closestart',
			'closecancel',
			'closeend',
			'openstart',
			'opencancel',
			'openend',
		];
	}

	static get instances() {
		return instances;
	}

	static enhance(details) {
		const instance = new Disclosure(details);
		instance.enable();
		return instance;
	}

	static enhanceAll(selector = 'details', bindToDetailsMarker = '.details-marker') {
		document.querySelectorAll(selector).forEach((el) => {
			const d = Disclosure.enhance(el);
			if (bindToDetailsMarker) {
				d.bindTo(bindToDetailsMarker);
			}
		});
		return Disclosure.instances;
	}
}

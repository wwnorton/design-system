/**
 * Implements Tab keyboard navigation as specified
 * in [WAI-ARIA Tab pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#keyboardinteraction)
 */
export class TabKeyboardNavigation {
	static ENABLED_TAB_MATCHER = '[role="tab"]:not([disabled])';

	private tabsCache: HTMLElement[] = [];

	private tabList: HTMLElement;

	constructor(tabList: HTMLElement) {
		this.tabList = tabList;
	}

	attachListener() {
		this.tabList.addEventListener('keydown', this.handleKeyDown);
	}

	detachListener() {
		this.tabList.removeEventListener('keydown', this.handleKeyDown);
	}

	/**
	 * Focuses the first enabled tab in the list.
	 */
	focusFirstTab() {
		const tabs = this.getEnabledTabs();
		tabs[0].focus();
	}

	/**
	 * Focuses the last enabled tab in the list.
	 */
	focusLastTab() {
		const tabs = this.getEnabledTabs();
		tabs[tabs.length - 1].focus();
	}

	/**
	 * Focuses on the next enabled tab in the list.
	 */
	focusNextTab() {
		const nextIdx = this.getNextIdx();
		if (nextIdx === -1) {
			this.focusFirstTab();
			return;
		}

		this.tabsCache[nextIdx].focus();
	}

	/**
	 * Focuses on the previous enabled tab in the list.
	 */
	focusPreviousTab() {
		const prevIdx = this.getPrevIdx();
		if (prevIdx === -1) {
			this.focusLastTab();
			return;
		}

		this.tabsCache[prevIdx].focus();
	}

	private handleKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'ArrowLeft':
				this.focusPreviousTab();
				break;
			case 'ArrowRight':
				this.focusNextTab();
				break;
			case 'Home':
				this.focusFirstTab();
				break;
			case 'End':
				this.focusLastTab();
				break;
			default:
		}
	};

	private getNextIdx() {
		const tabs = this.getEnabledTabs();
		const activeElement = this.getActiveElement();
		const currentIdx = tabs.findIndex((tab) => tab === activeElement);
		if (currentIdx === -1) {
			return currentIdx;
		}

		const nextIdx = currentIdx + 1;
		return nextIdx >= tabs.length ? 0 : nextIdx;
	}

	private getPrevIdx() {
		const tabs = this.getEnabledTabs();
		const activeElement = this.getActiveElement();
		const currentIdx = tabs.findIndex((tab) => tab === activeElement);
		if (currentIdx === -1) {
			return currentIdx;
		}

		const prevIdx = currentIdx - 1;
		return prevIdx < 0 ? tabs.length - 1 : prevIdx;
	}

	private getActiveElement() {
		return this.tabList.ownerDocument.activeElement;
	}

	private getEnabledTabs(): HTMLElement[] {
		this.tabsCache = Array.from(
			this.tabList.querySelectorAll(TabKeyboardNavigation.ENABLED_TAB_MATCHER),
		);
		return this.tabsCache;
	}
}

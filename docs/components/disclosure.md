# Disclosure

> A disclosure allows the user to show and hide additional content.

## Anatomy

A disclosure includes:

An expandable button with

1. A text label
2. An icon
3. Content

## Examples

The default disclosure looks very similar to the default [details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details), with a caret on the left-hand side.
The caret points right when the disclosure is closed and down when it is open.

<details class="disclosure">
  <summary class="disclosure__summary">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon--caret-right disclosure__marker" aria-hidden="true" focusable="false" role="img">
      <!-- https://material.io/resources/icons/?icon=arrow_right&amp;style=baseline -->
      <path fill="currentColor" d="M10 17l5-5-5-5v10z" />
    </svg>
    Default disclosure
  </summary>
  <div class="disclosure__contents">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</details>

The panel variant looks like a full-width button with a chevron on the right-hand-side.
The chevron points down when the disclosure is closed and up when it is open.

<details class="disclosure disclosure--panel">
  <summary class="disclosure__summary">
    Panel disclosure
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon--chevron-down disclosure__marker" aria-hidden="true" focusable="false" role="img">
      <!-- https://material.io/resources/icons/?icon=expand_more&style=baseline -->
      <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>
  </summary>
  <div class="disclosure__contents">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</details>

## Usage

- A disclosure has two states: collapsed and expanded. A disclosure is collapsed by default.
- A disclosure should include an icon that conveys that it can be activated for more information.
- A disclosure’s label should clearly and succinctly describe its hidden content, so that the user can choose to expand it.
- `Accessibility` When a disclosure has focus, <kbd>Enter</kbd> and <kbd>Space</kbd> activate the disclosure and toggle the visibility of content.
- `Accessibility` All focusable elements inside a disclosure are included in the tab order, if the disclosure is expanded.

::: tip Dos

- Do use a disclosure to make the page easier to scan, and hide lower-priority information that only some users will need.
- Do ensure that the entire expandable button (label and icon) is clickable.
- Do display the expanded content directly after the expandable button.

:::

::: danger Don’ts

- Don’t use a disclosure if most or all users need to see the content. When content is hidden, users may ignore that information.
- Don’t display a disabled disclosure if there is no content to reveal. Instead, do not display the disclosure at all, or include a message explaining why there is no content when the user activates it.
- Don’t use an icon that has multiple meanings within the same system.

:::

::: warning Caution

- If there is only one section of content, then use a disclosure.
- If there are multiple sections of content, then use an accordion or tabs.

:::

<style lang="scss">
@import '@nds/core/src/components/disclosure/index';

.disclosure__contents p {
	margin: 0;
}
</style>

<!-- <script>
import { Disclosure } from '@nds/core';
Disclosure.enhanceAll();
</script> -->

# Toggle

> A toggle allows a user to immediately turn an option on or off.

## Anatomy

A toggle includes:

1. A Toggle Control
2. A Label

## Style

The standard toggle has two states: "on" and "off," which are conveyed by a toggle control moving right and left.

<button class="button button-toggle" type="button" role="switch" aria-checked="true">Toggle Button</button>
<button class="button button-toggle" type="button" role="switch" aria-checked="false">Toggle Button</button>

### Textual State

By including a `.toggle-state` inside your toggle, you can make the "on" and "off" explicit.
This is highly recommended to remove any ambiguity about which state is on and which is off.

<button class="button button-toggle" type="button" role="switch" aria-checked="true">
  <div class="toggle-state"></div>
  Toggle Button
</button>
<button class="button button-toggle" type="button" role="switch" aria-checked="false">
  <div class="toggle-state"></div>
  Toggle Button
</button>

## Usage

- When a user switches a toggle, its corresponding action takes effect right away.
- A toggle has two mutually exclusive states&mdash;on and off.

::: tip Dos:

- Do use a toggle to mimic a physical on/off switch in the interface.
- Do allow users to select the toggle by clicking the control or its text label.
- Do position the toggle to the left of its text label by default.

:::

::: danger Don’ts:

- Don’t use the words “on/off” in the toggle’s text label. The option that the toggle controls should be clear from its label. A tooltip/title attribute may be added to convey the on/off state.
- Don’t use a toggle if the option is part of a larger flow, with a final confirmation step or Submit button. Use a checkbox instead.
- Don’t use a toggle if users can select multiple options from a list. Use checkboxes instead.

:::

<style lang="scss">
@import '~@nds/core/src/components/button/index';
</style>

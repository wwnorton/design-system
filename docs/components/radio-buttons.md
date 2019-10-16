# Radio Buttons

> Radio buttons allow a user to select one option from a list.

## Anatomy

A group of radio buttons includes:

1. A Group Label
2. Two or more Radio Button Controls and their Labels

## Usage

- Use radio buttons to allow a user to select exactly one option from a set of options, and display all available options.
- Radio buttons must appear in a group of two or more options.
- The options in a group of radio buttons must be mutually exclusive.
- `Accessibility` Arrow keys move focus within the group, uncheck the previously focused button, and check the newly focused button.
- `Accessibility` <kbd>Space</kbd> selects the focused radio button if it is not already selected.

::: tip Dos

- Do separate groups of options with group labels.
- Do allow users to select an option by clicking the radio button or its label.
- Do position the radio button to the left of its label.
- Do display options in a vertical layout, by default, for easier scanning.

:::

::: danger Don’ts

- Don’t use radio buttons if a user could select zero or multiple options. Use checkboxes instead.
- Don’t use radio buttons if an action will take immediate effect when the user selects or deselects it. Add a Submit button to confirm, or use a toggle instead.

:::

::: warning Caution: Dropdowns and Checkboxes

- If there are only two mutually exclusive options, consider combining them into a single checkbox or toggle.
- If a user can select from many options and you have limited space, consider using a dropdown. But use caution: it is more intuitive for a user to select from a group of radio buttons, so avoid dropdowns if possible.

:::

::: warning Caution: Option Defaults

- If all radio buttons are in an unselected state on load, a user may need to select one of the radio buttons before proceeding.
- Once a user has selected a radio button, they cannot go back to having no options selected without refreshing their browser window. Consider including “None of the above” or “I don’t know” if those are valid options.
- Consider the most logical order to list options. Options may be listed alphabetically, by popularity, or some other ordered system that is clear to the user.

:::

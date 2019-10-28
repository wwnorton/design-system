# Dropdown

> A dropdown allows a user to select one option from a list, and collapse the other options.

## Anatomy

A dropdown includes:

1. A Text Label
2. A Selected Option Area + Icon
3. A List of Options

A dropdown can also include:

4. Placeholder Text

## Usage

- Use a dropdown to select one option from a collapsed set of available options.
- By default, dropdown options are mutually exclusive.
- When an option is selected, the selected option area updates to display that item.
- `Accessibility` <kbd>Down Arrow</kbd>/<kbd>Up Arrow</kbd> moves focus to the next/previous options, respectively. Selection may also move with focus. <kbd>Home</kbd> and <kbd>End</kbd> moves focus to the first/last options, respectively.

::: tip Dos

- Do keep dropdown options very concise to avoid text wrapping within the list box. If long options are unavoidable, consider using radio buttons instead.
- Do ensure that the clickable area includes the entire selected option area and the icon.

:::

::: danger Don’ts

- Don’t use a dropdown for two options. Use radio buttons, a checkbox or a toggle instead.

:::

::: warning Caution: Dropdowns

- It is more intuitive for a user to select from a group of radio buttons, where all options are visible, so avoid dropdowns if possible.
- If it is not absolutely necessary for a user to choose from a predefined set of options, then consider a text field for users to type their own information.
- If there are a lot of options, consider whether you can reduce those options, and use radio buttons instead.
- A dropdown may have empty state text to guide the user to select an option, but the empty state text should not contain the dropdown select’s text label.
- `Accessibility` Don’t use very long option names or start options with the same word or phrase. This makes it difficult for screen reader users to scroll through the list of options.

:::

::: warning Caution: Dropdown Defaults

- Set default options with caution, as pre-selecting an option makes it more likely that users will miss making a conscious choice and submit the wrong option.
- Consider the most logical order to list options. Options may be listed alphabetically, by popularity, or some other ordered system that is clear to the user.

:::

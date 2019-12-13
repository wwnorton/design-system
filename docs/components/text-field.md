# Text Field

> A text field allows a user to enter and edit text.

## Anatomy

![A diagram of the text field's various pieces, defined below.](/assets/images/comp_text-field.png)

A text field includes:

1. Label
2. Container
3. Optional Field Indicator (optional)
4. Help Text (optional)
5. Icon - Left (optional)
6. Text
7. Icon/Control - Right (optional)
   - An icon or control can go in this space. A text field can have multiple right-side icons/controls
8. Error Text (optional)
9. Character count (optional)

## Usage

- A text field allows a user to freeform type or paste their own response to a prompt.
- A text field has a label that describes what the user should type.
- A text field’s label must be visible at all times.
- `Accessibility` A text field’s label must be associated with its input. To associate a label with an input, either use the [for attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for) or wrap the input in the label element.

::: tip Dos

- Do let the size of the input area indicate the amount of content you expect the user to enter.
  - By default, the text field should be full width, defined by the size of its containe.
  - Only use a fixed-width input area if the text entry has a specific, known length. The width should remain fixed unless it is wider than its container&mdash;then shrink width to fit.

:::

::: danger Don’ts

- Don’t use labels that are too long. Labels should be very concise.
- Don’t include instructions in a label&mdash;use help text instead.
- Don’t disable the user’s ability to select, copy or paste.
- Don’t require users to write paragraphs of text in a single-line text field.

:::

::: warning Caution: Character Counter

- A text field may have a character counter, but it is not an intuitive way for users to understand content length.
- Use a character counter only if it is important for users to know how long their text entry can be, or to clarify if the user surpasses the character limit.
- By default, a text field does not have a character limit. If necessary, set a limit higher than most users will need.
- Allow users to enter more than the character limit, and then display an error. This lets a user type or copy and paste their full text entry, then edit it down.
- `Accessibility` The character count should be announced to assistive technology users after they stop typing.

:::

::: warning Caution: Placeholder Text

- A text field may have placeholder text to provide hints or examples, but placeholder text should not contain important information.
- Don’t use placeholder text in place of a label, because it will disappear once the user starts typing in the field.
- `Accessibility` Set an accessible color for placeholder text. Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio.

:::

::: warning Caution: Required Text Fields

- By default, a text field should be optional unless there is a significant reason to mark it as required.
- If using both required and optional text fields in a form, include a clear signifier to differentiate required fields from optional fields.

:::

::: warning Caution: Error Validation

- By default, display error validation on a text field as soon as the user has moved to the next field.
- Use caution if displaying error validation before the user has finished entering text.
- Use caution if displaying error validation on Save or Submit, especially if the text field will not be visible on screen when Save or Submit is activated.

:::

## Types

Text field types are based on the [HTML input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) that do not require a separate interface for entry, such as a date picker.
Where possible, they should be implemented with their corresponding `<input>` type.

### Number

- Allows the user to enter a number, and can display step arrows on focus.
- Includes built-in validation to reject non-numeric text entry.
- The default step value is 1, but can be set with more or less granularity, including decimal values.
- Allow users to use the up and down arrows on their keyboard to adjust the value typed into the field.

### Email

- Allows the user to enter an email address or list of email addresses.
- Includes built-in validation to ensure text entry is a properly formatted email address.
- Some devices may display an email-specific keyboard for easier entry.
- Can allow the user's browser to automatically fill out the field, if enabled.

### Password

- Allows the user to securely enter a password by obscuring the text entry.
- Can allow the user’s browser or password manager to automatically fill out the field.

### URL

- Allows the user to enter a URL.
- Includes built-in validation to ensure text entry is a properly formatted URL.
- Some devices may display a URL keyboard for easier entry.

### Tel

- Allows the user to enter a telephone number.
- The text entry is not automatically validated, because telephone numbers vary around the world.
- Some devices may display a telephone keyboard for easier entry.

## Text Wrapping Variants

If the user inputs text that cannot fit inside the visible text field container, the text must either wrap or the container must scroll with the text.
Three options are provided to address this need.

### Single line text field

- A single-line text field displays only one line of text.
- As the cursor reaches the right edge of the input area, text longer than the input area automatically scrolls left.
- Use single-line text fields for: Number, Email, Password, and Tel inputs.

### Multi-line text field

- A multi-line text field grows to accommodate multiple lines of text and show all text entry at once.
- Text longer than the input area wraps to a new line. The input area expands vertically and shifts any screen elements below it.
- Multi-line text fields initially appear as single-line fields, which is useful for compact layouts that need to accommodate large amounts of text.
- Use multi-line text fields for: free response input and URL.

### Text area text field

- A text area text field has a fixed height.
- Text longer than the input area wraps onto a new line, and scrolls vertically when the cursor reaches the bottom of the input area.
- The large size of the input area indicates that longer responses are possible and encouraged.
- Use text area text fields for: free response inputs with additional formatting capabilities.

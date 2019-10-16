# Layout Grid

> The Layout Grid allows us to create responsive page layouts at every screen size.

## Anatomy

A Layout Grid includes:

1. Columns
2. Gutters
3. Margins
4. Breakpoint Ranges

## Usage

- Columns set the widths of page regions and align content to consistent guides. All columns are of equal width.
- Gutters are the spaces between columns that help separate content. All gutters are of equal width.
- Margins are the spaces between the content and the left/right edges of the screen. Left and right margins should be the same width.
- Margins can be adjusted to ensure appropriate line length at each breakpoint range.
  Gutters and margins can be different widths.
- A Breakpoint Range is a range of screen sizes that have the same layout. At each breakpoint, the layout may adjust to better fit the screen size.
- The number of columns and the width of the margins and gutters is determined by each breakpoint range.

::: tip Dos

- Do align major content areas or regions of the page to the layout grid.
- Do design layouts for the smallest screen sizes first.
- Do set a maximum width for the layout grid or content areas within the grid, to avoid long line lengths.

:::

::: danger Don’ts

- Don’t set margins so large that there isn’t enough room for content.
- Don’t include fixed-width sidebars in the layout grid.
- `Accessibility` Don’t visually reorder columns independently from their position in the markup.

:::

## Types

### Fluid Grid

- By default, use a fluid grid so that content areas flexibly scale to fit any screen width.
- Column widths are set as percentages of the overall screen width.
- Margins and gutters have a fixed width at each breakpoint range.

### Fixed Grid

- Use a fixed grid if it is important for the width of the content area to be static within a breakpoint range.
- Gutters and column widths have a fixed width at each breakpoint range, so the content only changes at each breakpoint.
- Margins scale fluidly as the overall screen width changes.

# Components

The following [Mermaid flowchart](https://mermaid-js.github.io/mermaid/#/flowchart) is a graph of the design system's components.

- Arrows represent a dependency relationship where `[A]-->[B]` means that `[B]` uses `[A]` in some way.
- Dotted arrows represent an optional relationship where `[A]-.->[B]` means that `[B]` _can_ use `[A]` in some way.
- Text inside an arrow represents a more specific relationship.

```mermaid
graph LR
  subgraph Key
  private[private - done]
  public[public - done]
  private-ic[private - incomplete]
  public-ic[public - incomplete]
  end

  BaseButton
  BaseDetails
  BaseDialog
  BaseInput
  BaseListbox
  BaseListOption
  BasePopper
  BaseRange
  BaseSummary
  BaseSVG
  BaseTable
  BaseTextarea

  Accordion
  Button
  Callout
  Checkbox
  Choice
  ComboBox
  DatePicker
  Disclosure
  Dropdown
  Icon
  IconButton
  Menu
  MenuButton
  MenuItem
  Modal
  MultipleChoice
  Popover
  Progressbar
  Radio
  Slider
  Switch
  Table
  Tablist
  TextField
  TimePicker
  Tooltip

  BaseButton --> Button
  BaseButton --> Dropdown
  BaseButton --> Switch
  BaseButton --> Tablist
  BaseDetails --> Disclosure
  BaseDialog --> DatePicker
  BaseDialog --> Modal
  BaseDialog --> Popover
  BaseInput --> Checkbox
  BaseInput --> ComboBox
  BaseInput --> Radio
  BaseInput --> TextField
  BaseInput -. type=date .-> DatePicker
  BaseInput -. type=range .-> Slider
  BaseInput -. type=time .-> TimePicker
  BaseListbox --> Dropdown
  BaseListOption --> BaseListbox
  BasePopper --> Tooltip
  BaseRange --> Progressbar
  BaseRange -.-> Slider
  BaseSummary --> Disclosure
  BaseSVG --> Icon
  BaseTable --> Table
  BaseTextarea --> TextField
  Button --> DatePicker
  Button --> MenuButton
  Button -. "close" .-> Modal
  Button -. "dismiss" .-> Callout
  Button -.-> Choice
  Button --> IconButton
  Checkbox -.-> Choice
  Choice --> MultipleChoice
  Disclosure --> Accordion
  Icon --> Checkbox
  Icon --> DatePicker
  Icon --> Disclosure
  Icon --> Dropdown
  Icon -.-> Button
  Menu --> MenuButton
  MenuItem --> Menu
  Radio -.-> Choice
  Table --> DatePicker
  Tooltip -. icon-only .->Button

  classDef exports fill:#fed8a4,stroke:#e24329;
  classDef incomplete stroke-dasharray: 5, 5;

  class public,public-ic,Accordion,Button,Callout,Checkbox,Choice,ComboBox,DatePicker,Disclosure,Dropdown,Icon,IconButton,Menu,MenuButton,Modal,MultipleChoice,Popover,Progressbar,Slider,Switch,Table,Tablist,TimePicker,TextField,Tooltip exports;

  class private-ic,public-ic,BaseTable,BaseTextarea,Accordion,Callout,ComboBox,DatePicker,Menu,MenuButton,MenuItem,Popover,Progressbar,Slider,Table,Tablist,TimePicker incomplete;
```

---
group: Card
title: CheckCard Multi-select Card
order: 1
atomId: CheckCard
---

# CheckCard - Multi-select Card

The CheckCard is a card that can contain various related descriptive information and can be selected. Features:

- ① Can contain various related descriptive information, such as title, description, image, labels, etc.
- ② Has a clear boundary.
- ③ Has a clear selected state.

## When to use

- When you need to display multiple descriptive information of selected objects.
- When the number of selected objects is not large.

## Code Demo

### Basic Usage

The most commonly used example of a card, including avatar, title, description, etc., and can be selected.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/basic.tsx
	- thumbnail: 

- [外部示例代码]
	- description: When there are multiple options, you can use the `CheckCard.Group` to group them. The default option card component is in single selection mode.
	- src: /card/CheckCard/single.tsx
	- thumbnail: https://gw.alipayobjects.com/zos/bmw-prod/be0fcade-afae-4e85-95ef-a3cc90f6d4b3/kc60kq47_w1362_h412.jpeg

- [外部示例代码]
	- description: Set the `multiple` property of `CheckCard.Group` to enable multiple selection. Note that in multiple selection mode, the form item returns an array.
	- src: /card/CheckCard/multiple.tsx
	- thumbnail: https://gw.alipayobjects.com/zos/bmw-prod/06963ad4-ba2b-4733-a1c5-778e7f696ac1/kc61xhvk_w1364_h280.jpeg

### Different Sizes

Configure the `size` property to change the size of the card. Currently available options are `large`, `default`, and `small`, with only the width being different.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/size.tsx
	- thumbnail: 

Of course, you can also customize the size of the card using the `style` or `className` properties.

### Custom Size

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/custom.tsx
	- thumbnail: 

### Using in Form

CheckCard can be used together with form components. Here is an example.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/form.tsx
	- thumbnail: https://gw.alipayobjects.com/zos/bmw-prod/c8fa2080-5a46-4f50-ae99-846b1804f56d/kc62b0ug_w1360_h656.jpeg

### Composing Styles

The avatar, title, and description areas can be freely combined or presented separately. The component will adjust the alignment for you.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/compose.tsx
	- thumbnail: 

### Custom Avatar

You can customize the avatar area using the `avatar` property.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/avatar.tsx
	- thumbnail: 

### Custom Title

You can customize the title area using the `title` property.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/title.tsx
	- thumbnail: 

### Custom Description

The description area can be customized using the `description` property with a React node.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/description.tsx
	- thumbnail: 

### Default Checked

Set the `defaultChecked` property to `true` to specify that the option is checked by default.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/defaultChecked.tsx
	- thumbnail: 

### Action Area

Use the `extra` property to add an action area to the card.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/extra.tsx
	- thumbnail: 

### Loading State

Set the `loading` property to `true` to indicate that the content is still loading.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/loading.tsx
	- thumbnail: 

### Image Only Option

By only setting the `cover` property, you can create an image-only option.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/image.tsx
	- thumbnail: 

### Disabled Option

Set the `disabled` property to disable an option.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/disabled.tsx
	- thumbnail: 

### Option List

`CheckCard.Group` supports listing multiple options using the `options` property.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/group.tsx
	- thumbnail: 

### Application List Example

Here is an example of using CheckCard to select image algorithms in the actual AiDesk.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/list.tsx
	- thumbnail: 

### Layout

`CheckCard.Group` can be used together with `CheckCard` and `Grid` components to achieve more flexible layouts.

- [外部示例代码]
	- description: 
	- src: /card/CheckCard/grid.tsx
	- thumbnail: 

## API

### CheckCard

| Property       | Description                                                                                                          | Type                                               | Default   | Version |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | --------- | ------- |
| checked        | Specifies whether the option is selected                                                                             | boolean                                            | false     |         |
| bordered       | Whether to display the border                                                                                        | boolean                                            | true      | 1.20.0  |
| value          | Value of the option                                                                                                  | string                                             | -         |         |
| defaultChecked | Specifies whether the option is initially selected                                                                   | boolean                                            | false     |         |
| disabled       | Disabled state                                                                                                       | boolean                                            | false     |         |
| size           | Size of the checkbox, options: `large`, `small`                                                                      | string                                             | `default` |         |
| onChange       | Callback function when the value changes                                                                             | Function(checked)                                  | -         |         |
| loading        | When the card content is still loading, you can use loading to show a placeholder                                    | boolean                                            | false     |         |
| title          | Title                                                                                                                | string \| ReactNode                                | -         |         |
| description    | Description                                                                                                          | ReactNode                                          | -         |         |
| avatar         | Image URL of the option element                                                                                      | link \| ReactNode                                  | -         |         |
| extra          | Action area                                                                                                          | Extra operations area on the top right of the card | -         |         |
| cover          | Background image of the card. Note that when using this option, `title`, `description`, and `avatar` will be ignored | ReactNode                                          | -         |         |

### CheckCard.Group

| Property     | Description                                                                             | Type                                                                                                                                               | Default   | Version |
| ------------ | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| multiple     | Multiple selection                                                                      | boolean                                                                                                                                            | false     |         |
| bordered     | Whether to display the border                                                           | boolean                                                                                                                                            | true      | 1.20.0  |
| defaultValue | Default selected options                                                                | string \| string\[]                                                                                                                                | -         |         |
| disabled     | Disable the entire group                                                                | boolean                                                                                                                                            | false     |         |
| loading      | When the card group content is still loading, you can use loading to show a placeholder | boolean                                                                                                                                            | false     |         |
| options      | Specify the options                                                                     | string\[] \| Array<{ title: ReactNode, value: string, description?: ReactNode, avatar?: link or ReactNode, cover?:ReactNode, disabled?: boolean }> | \[]       |         |
| value        | Specify the selected options                                                            | string \| string\[]                                                                                                                                | -         |         |
| size         | Size of the checkbox, options: `large`, `small`                                         | string                                                                                                                                             | `default` |         |
| onChange     | Callback function when the value changes                                                | Function(checkedValue)                                                                                                                             | -         |         |

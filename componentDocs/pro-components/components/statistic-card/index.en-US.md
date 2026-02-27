---
group: Card
title: StatisticCard Indicator Card
order: 1
atomId: StatisticCard
---

# StatisticCard - Indicator Card

The Indicator Card combines statistical values to display the core indicators of a certain topic. It integrates with [Ant Design Charts](https://charts.ant.design/) to enrich the numerical content and meet the requirements of most data display scenarios.

> Note: All chart examples in the demo can be found on the official website of charts. Here, only images are used instead of actual code examples, so there is no related interaction.

> If the content of the card is expanded, please set the content width to 100% or set a fixed width.

## When to use

- 1. Display important information in important positions within a page;
- 2. Display system functions on overview pages.

## Code Demo

### Basic Usage

Use the `statistic` and `chart` properties to configure the numerical statistics and chart to create a basic indicator card.

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/basic.tsx
	- thumbnail: 

### Chart Only

When the chart is displayed alone in the card.

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/chart.tsx
	- thumbnail: 

### Extra Indicators

- The `footer` property is used to set the area for displaying additional indicators.
- You can set the `layout` property of the `Statistic` component to `horizontal` to display the indicators horizontally.

### Total Score/Primary and Secondary Relationship

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/total.tsx
	- thumbnail: 

### Total Score/Performance Target

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/total-layout.tsx
	- thumbnail: 

### Grouped Indicators

You can nest indicator card components to group indicators, and use the `Divider` component to separate these indicators.

### Grouped Indicators with Chart

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/group-chart.tsx
	- thumbnail: 

### Formula Calculation Indicator

The `Operation` component can accept child elements, allowing you to implement various formula calculation indicators.

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/fomula.tsx
	- thumbnail: 

### Status Display

You can set the `status` property for each numerical statistic to display its status.

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/status.tsx
	- thumbnail: 

### Icon Display

You can set the `icon` property for each numerical statistic to display its icon.

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/icon.tsx
	- thumbnail: 

### Card Layout

By using the card splitting capability of `ProCard`, you can achieve complex card layouts.

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/layout.tsx
	- thumbnail: 

### Chart on the Right

Set the `chartPlacement` property to `right` to specify that the chart should be on the right side of the numerical statistic. The default is top-bottom layout.

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/horizontal.tsx
	- thumbnail: 

### Chart on the Left

Set the `chartPlacement` property to `left` to specify that the chart should be on the left side of the numerical statistic.

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/horizontal-left.tsx
	- thumbnail: 

### Linked Indicator Tabs

By combining with `Statistic`, you can create tabs with indicator statistics.

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/tabs-statistic.tsx
	- thumbnail: 

### Sequential Trend

You can use the `Statistic` component with the `layout` property set to `inline` and the `trend` property to display the sequential trend.

- [外部示例代码]
	- description: 
	- src: /card/StatisticCard/trend.tsx
	- thumbnail: 

## API

### StatisticCard

| Property       | Description                                                                                    | Type                      | Default |
| -------------- | ---------------------------------------------------------------------------------------------- | ------------------------- | ------- |
| title          | Title of the card                                                                              | `string\|ReactNode`       | -       |
| extra          | Extra operations area on the top right of the card                                             | `string\|ReactNode`       | -       |
| loading        | Whether the card content is still loading, can be used to show a placeholder with loading icon | boolean                   | false   |
| bordered       | Whether the card has a border                                                                  | boolean                   | true    |
| chart          | Chart component                                                                                | ReactNode                 | -       |
| statistic      | Configuration for numerical statistics, default layout is `vertical`                           | See Statistic below       | -       |
| chartPlacement | Position of the chart relative to the statistic                                                | `left \| right \| bottom` | -       |
| footer         | Extra area for displaying additional indicators                                                | `ReactNode`               | -       |

Refer to `ProCard` for more details, supports all APIs of `ProCard`.

### Statistic

| Property    | Description                         | Type                                                            | Default  |
| ----------- | ----------------------------------- | --------------------------------------------------------------- | -------- |
| prefix      | Prefix of the value                 | string \| ReactNode                                             | -        |
| suffix      | Suffix of the value                 | string \| ReactNode                                             | -        |
| title       | Title of the value                  | string \| ReactNode                                             | -        |
| tip         | Tooltip of the title                | string\| ReactNode                                              | -        |
| value       | Content of the value                | string \| number                                                | -        |
| icon        | Icon                                | ReactNode                                                       | -        |
| status      | Status dot, same as Badge component | `Enum{ 'success', 'processing, 'default', 'error', 'warning' }` | -        |
| valueStyle  | Style of the value                  | style                                                           | -        |
| description | Description label                   | React.ReactNode \| () => React.ReactNode                        | -        |
| layout      | Layout                              | `horizontal \| vertical \| inline`                              | `inline` |
| trend       | Trend                               | `up \| down \|`                                                 | -        |

Refer to [Statistic](https://ant.design/components/statistic/) for more APIs, supports all APIs of `Statistic`.

### Divider

Used to separate numerical statistics when grouping.

| Property | Description         | Type                     | Default |
| -------- | ------------------- | ------------------------ | ------- |
| type     | Type of the divider | `horizontal \| vertical` | -       |

### Operation

Used for rendering operators.

### Group

Same properties as `StatisticCard`, but cancels the content margin of the card, used to group multiple cards.

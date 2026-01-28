---
group: Field
title: ProField 原子组件
---

# ProField

> 该组件为内部组件，请勿直接使用。

原子信息组件，统一 ProForm、ProTable、ProList、Filter 等组件里面的字段定义。

## DEMO

- [外部示例代码]
	- description: 
	- src: /field/base.tsx
	- thumbnail: 

- [外部示例代码]
	- description: 
	- src: /field/base_test.tsx
	- thumbnail: 

- [外部示例代码]
	- description: 
	- src: /field/search-value.tsx
	- thumbnail: 

- [外部示例代码]
	- description: 
	- src: /field/search-value-autoClearSearchValue.tsx
	- thumbnail: 

- [外部示例代码]
	- description: 
	- src: /field/tree-select-search-value.tsx
	- thumbnail: 

- [外部示例代码]
	- description: 
	- src: /field/select-request.tsx
	- thumbnail: 

## API

```typescript | pure
import   Field from '@ant-design/pro-field';

return <Field text="100" valueType="money" mode={state} />;
```

### 参数

| 参数           | 说明                                                           | 类型                                    | 默认值 |
| -------------- | -------------------------------------------------------------- | --------------------------------------- | ------ |
| text           | 需要格式化的值                                                 | any                                     | -      |
| valueType      | 格式化的类型                                                   | ValueType                               | -      |
| mode           | 组件的模式                                                     | `read` \| `edit` \| `update`            | `read` |
| plain          | 精简模式                                                       | boolean                                 | false  |
| formItemRender | 自定义 `mode=update \| edit` 下的 dom 表现，一般用于渲染编辑框 | `(item: any, config: any) => ReactNode` | -      |
| render         | 自定义 `mode=read` 下的 dom 表现，只是单纯的表现形式           | `(item: any, config: any) => ReactNode` | -      |

---
group: Table
title: DragSortTable 拖动排序表格
atomId: DragSortTable
---

# DragSortTable - 拖动排序表格

`DragSortTable`排序采用的[dnd-kit](https://dndkit.com/)，需要提供`rowKey`来确定数据的唯一值，否则不能正常工作。

## Demo

### 拖拽排序

- [外部示例代码]
	- description: 
	- src: /table/DragSortTable/drag.tsx
	- thumbnail: 

### 拖拽排序编辑表格

- 可编辑表格[外部示例代码]
	- description: 
	- src: /table/DragSortTable/drag-sort-table.tsx
	- thumbnail: 

## DragSortTable

| 属性                  | 描述                                                                                 | 类型                                                                                     | 默认值                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| dragSortKey           | 如配置此参数，则会在该 key 对应的行显示拖拽排序把手，允许拖拽排序                    | `string`                                                                                 | -                                                                                              |
| dragSortHandlerRender | 渲染自定义拖动排序把手的函数 如配置了 dragSortKey 但未配置此参数，则使用默认把手图标 | `(rowData: T, idx: number) => React.ReactNode`                                           | `<MenuOutlined className="dragSortDefaultHandle" style={{ cursor: 'grab', color: '#999' }} />` |
| onDragSortEnd         | 拖动排序完成回调                                                                     | `(beforeIndex: number, afterIndex: number, newDataSource: T[]) => Promise<void> \| void` | -                                                                                              |

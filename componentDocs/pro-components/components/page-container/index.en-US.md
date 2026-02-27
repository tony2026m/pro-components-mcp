---
group: PageContainer
title: PageContainer Page Container
atomId: PageContainer
---

# PageContainer - Page Container

PageContainer is a page container component that provides a unified page layout structure. It includes standardized page elements such as page title, breadcrumb navigation, and page operation area, allowing you to quickly build pages with consistent layouts.

- Automatically handles page title and breadcrumb navigation
- Supports page-level operation buttons and toolbars
- Provides standardized page layout structure
- Supports advanced features like watermarks and loading states

## When to Use

- When you need unified page title and breadcrumb navigation
- When you need page-level operation buttons
- When you need standardized page layout
- When you need page-level loading states
- When you need page watermark functionality

## Code Demo

- Basic Usage[外部示例代码]
	- description: PageContainer provides standard page layout structure
	- src: /layout/PageContainer/basic.tsx
	- thumbnail: 

- Fixed Header[外部示例代码]
	- description: You can fix the page header to keep it visible when content scrolls
	- src: /layout/PageContainer/fixHeader.tsx
	- thumbnail: 

- Hide Breadcrumb[外部示例代码]
	- description: You can hide breadcrumb navigation to simplify page structure
	- src: /layout/PageContainer/hideBreadMenu.tsx
	- thumbnail: 

## API

### PageContainer

| Parameter        | Description                 | Type                                       | Default |
| ---------------- | --------------------------- | ------------------------------------------ | ------- |
| title            | Page title                  | `ReactNode`                                | -       |
| subTitle         | Page subtitle               | `ReactNode`                                | -       |
| extra            | Page operation area         | `ReactNode`                                | -       |
| content          | Page content                | `ReactNode`                                | -       |
| loading          | Loading state               | `boolean \| SpinProps`                     | false   |
| header           | Header configuration        | `PageHeaderProps`                          | -       |
| breadcrumb       | Breadcrumb configuration    | `BreadcrumbProps`                          | -       |
| breadcrumbRender | Custom breadcrumb rendering | `(props: PageContainerProps) => ReactNode` | -       |
| waterMarkProps   | Watermark configuration     | `WatermarkProps`                           | -       |
| children         | Children                    | `ReactNode`                                | -       |

### PageHeaderProps

| Parameter  | Description    | Type              | Default |
| ---------- | -------------- | ----------------- | ------- |
| title      | Title          | `ReactNode`       | -       |
| subTitle   | Subtitle       | `ReactNode`       | -       |
| extra      | Operation area | `ReactNode`       | -       |
| breadcrumb | Breadcrumb     | `BreadcrumbProps` | -       |
| tags       | Tags           | `TagProps[]`      | -       |
| avatar     | Avatar         | `AvatarProps`     | -       |
| backIcon   | Back icon      | `ReactNode`       | -       |
| onBack     | Back event     | `() => void`      | -       |

## Design Guidelines

PageContainer provides standardized page layout, ensuring consistency in page structure across the entire application. It follows Ant Design design guidelines, providing a consistent user experience.

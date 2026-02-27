---
group: PageHeader
category: Components
type: Navigation
title: PageHeader Page Header
cols: 1
subtitle:
cover: https://gw.alipayobjects.com/zos/alicdn/6bKE0Cq0R/PageHeader.svg
---

A header with common actions and design elements built in.

## When To Use

PageHeader can be used to highlight the page topic, display important information about the page, and carry the action items related to the current page (including page-level operations, inter-page navigation, etc.) It can also be used as inter-page navigation.

## PageHeader

| Param            | Description                                                    | Type                                       | Default value  | Version |
| ---------------- | -------------------------------------------------------------- | ------------------------------------------ | -------------- | ------- |
| avatar           | Avatar next to the title bar                                   | [AvatarProps](/components/avatar/)         | -              |         |
| backIcon         | Custom back icon, if false, the back icon will not be rendered | ReactNode \| boolean                       | `<ArrowLeft/>` |         |
| breadcrumb       | Breadcrumb configuration                                       | [BreadcrumbProps](/components/breadcrumb/) | -              |         |
| extra            | Operating area, at the end of the line of the title            | ReactNode                                  | -              |         |
| ghost            | PageHeader type, will change background color                  | boolean                                    | true           |         |
| subTitle         | Custom subtitle text                                           | ReactNode                                  | -              |         |
| tags             | Tag list next to title                                         | [TagProps](/components/tag/)[]             | -              |         |
| title            | Custom title text                                              | ReactNode                                  | -              |         |
| onBack           | Back button click event                                        | () => void                                 | -              |         |
| footer           | PageHeader footer, generally used to render TabBar             | ReactNode                                  | -              |         |
| breadcrumbRender | Custom breadcrumb area content                                 | (props, originBreadcrumb) => ReactNode     | -              |         |

## Code Examples

- Basic Page Header[外部示例代码]
	- description: Standard header, suitable for use in scenarios that require a brief description
	- src: /layout/PageHeader/basic.tsx
	- thumbnail: 

- white background mode[外部示例代码]
	- description: The default PageHeader is a transparent background. In some cases, PageHeader needs its own background color
	- src: /layout/PageHeader/ghost.tsx
	- thumbnail: 

- Use with breadcrumbs[外部示例代码]
	- description: With breadcrumbs, it is suitable for deeper pages, allowing users to navigate quickly
	- src: /layout/PageHeader/breadcrumb.tsx
	- thumbnail: 

## white background mode

The default PageHeader is a transparent background. In some cases, PageHeader needs its own background color.

```tsx
import { Button, Descriptions } from 'antd';
import React from 'react';
import { PageHeader } from '@ant-design/pro-components';

const App: React.FC = () => (
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Title"
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
);

export default App;
```

```css
.site-page-header-ghost-wrapper {
  padding: 24px;
  background-color: #f5f5f5;
}
```

## Use with breadcrumbs

With breadcrumbs, it is suitable for deeper pages, allowing users to navigate quickly.

```tsx
import { PageHeader } from '@ant-design/pro-components';
import React from 'react';

const items = [
  {
    path: 'index',
    title: 'First-level Menu',
  },
  {
    path: 'first',
    title: 'Second-level Menu',
  },
  {
    path: 'second',
    title: 'Third-level Menu',
  },
];

const App: React.FC = () => (
  <PageHeader
    className="site-page-header"
    title="Title"
    breadcrumb={{ items }}
    subTitle="This is a subtitle"
  />
);

export default App;
```

## Basic Page Header

Standard header, suitable for use in scenarios that require a brief description.

```tsx
import { PageHeader } from '@ant-design/pro-components';
import React from 'react';

const App: React.FC = () => (
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />
);

export default App;
```

```css
.site-page-header {
  border: 1px solid rgb(235, 237, 240);
}
```



import { PageHeader } from '@ant-design/pro-components';
import { Button, Descriptions } from 'antd';
import React from 'react';

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

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

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

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

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

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

import { PageHeader } from '@ant-design/pro-components';
import { Button, Descriptions } from 'antd';
import React from 'react';

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

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

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

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

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

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

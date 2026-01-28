

import { EllipsisOutlined } from '@ant-design/icons';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Dropdown } from 'antd';

const Demo = () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      token={{
        paddingBlockPageContainerContent: 24,
        paddingInlinePageContainerContent: 60,
      }}
      header={{
        title: 'Page Title',
        ghost: true,
        breadcrumb: {
          items: [
            {
              path: '',
              title: 'Primary page',
            },
            {
              path: '',
              title: 'Secondary page',
            },
            {
              path: '',
              title: 'Current page',
            },
          ],
        },
        extra: [
          <Button key="1">Secondary button</Button>,
          <Button key="2">Secondary button</Button>,
          <Button key="3" type="primary">
            Primary button
          </Button>,
          <Dropdown
            key="dropdown"
            trigger={['click']}
            menu={{
              items: [
                {
                  label: 'Dropdown menu',
                  key: '1',
                },
                {
                  label: 'Dropdown menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown menu 3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="4" style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
    >
      <ProTable search={false} />
    </PageContainer>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Descriptions } from 'antd';

const Demo = () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      ghost
      header={{
        title: 'Page Title',
        breadcrumb: {},
      }}
      content={
        <Descriptions column={2} style={{ marginBlockEnd: -16 }}>
          <Descriptions.Item label="Creator">曲丽丽</Descriptions.Item>
          <Descriptions.Item label="Associated form">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Creation Date">
            2017-01-10
          </Descriptions.Item>
          <Descriptions.Item label="Document remarks">
            浙江省杭州市西湖区工专路
          </Descriptions.Item>
        </Descriptions>
      }
    >
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard style={{ height: 200 }} />
        <ProCard gutter={16} ghost style={{ height: 200 }}>
          <ProCard colSpan={16} />
          <ProCard colSpan={8} />
        </ProCard>
      </ProCard>
    </PageContainer>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';

export default () => {
  const customLoadingDom = useMemo(
    () => (
      <div style={{ color: 'red', padding: '30px', textAlign: 'center' }}>
        Custom loading...
      </div>
    ),
    [],
  );
  const [customLoading, setCustomLoading] = useState<React.ReactNode | boolean>(
    customLoadingDom,
  );

  useEffect(() => {
    if (process.env.NODE_ENV?.toLocaleLowerCase() === 'test') {
      return;
    }
    setTimeout(() => {
      setCustomLoading(false);
    }, 3000);
  }, []);

  return (
    <div
      style={{
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
        minHeight: '100vh',
        background: '#F5F7FA',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        padding: 24,
      }}
    >
      <Card>
        <PageContainer
          ghost
          loading
          header={{
            title: 'Default loading',
            breadcrumb: {
              items: [
                {
                  path: '',
                  title: 'Primary page',
                },
                {
                  path: '',
                  title: 'Secondary page',
                },
                {
                  path: '',
                  title: 'Current page',
                },
              ],
            },
          }}
        >
          <div
            style={{
              height: '100vh',
            }}
          >
            If in loading state, this content will not be displayed
          </div>
        </PageContainer>
      </Card>
      <Card>
        <PageContainer
          ghost
          loading={{
            spinning: true,
            className: 'customClassName',
            tip: 'Loading relentlessly...',
          }}
          header={{
            title: 'Custom loading property',
            breadcrumb: {
              items: [
                {
                  path: '',
                  title: 'Primary page',
                },
                {
                  path: '',
                  title: 'Secondary page',
                },
                {
                  path: '',
                  title: 'Current page',
                },
              ],
            },
          }}
        >
          <div
            style={{
              height: '100vh',
            }}
          >
            If in loading state, this content will not be displayed
          </div>
        </PageContainer>
      </Card>
      <Card>
        <PageContainer
          ghost
          loading={customLoading}
          header={{
            title: 'Custom loading, display content after 3 seconds',
            breadcrumb: {
              items: [
                {
                  path: '',
                  title: 'Primary page',
                },
                {
                  path: '',
                  title: 'Secondary page',
                },
                {
                  path: '',
                  title: 'Current page',
                },
              ],
            },
          }}
        >
          <div
            style={{
              height: '100vh',
            }}
          >
            If in loading state, this content will not be displayed
          </div>
        </PageContainer>
      </Card>
    </div>
  );
};

import { EllipsisOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button, Dropdown } from 'antd';

const Demo = () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      header={{
        title: 'Page Title',
        ghost: true,
        breadcrumb: {
          items: [
            {
              path: '',
              title: 'Primary page',
            },
            {
              path: '',
              title: 'Secondary page',
            },
            {
              path: '',
              title: 'Current page',
            },
          ],
        },
        extra: [
          <Button key="1">Secondary button</Button>,
          <Button key="2">Secondary button</Button>,
          <Button key="3" type="primary">
            Primary button
          </Button>,
          <Dropdown
            key="dropdown"
            trigger={['click']}
            menu={{
              items: [
                {
                  label: 'Dropdown menu',
                  key: '1',
                },
                {
                  label: 'Dropdown menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown menu 3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="4" style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
      tabBarExtraContent="Test tabBarExtraContent"
      tabList={[
        {
          tab: 'Basic information',
          key: 'base',
          closable: false,
        },
        {
          tab: 'Detailed information',
          key: 'info',
        },
      ]}
      tabProps={{
        type: 'editable-card',
        hideAdd: true,
        onEdit: (e, action) => console.log(e, action),
      }}
      footer={[
        <Button key="3">Reset</Button>,
        <Button key="2" type="primary">
          Submit
        </Button>,
      ]}
    >
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard style={{ height: 200 }} />
        <ProCard gutter={16} ghost style={{ height: 200 }}>
          <ProCard colSpan={16} />
          <ProCard colSpan={8} />
        </ProCard>
      </ProCard>
    </PageContainer>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProCard } from '@ant-design/pro-components';

const Demo = () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      fixedHeader
      header={{
        title: 'Page Title',
        breadcrumb: {
          items: [
            {
              path: '',
              title: 'Primary page',
            },
            {
              path: '',
              title: 'Secondary page',
            },
            {
              path: '',
              title: 'Current page',
            },
          ],
        },
      }}
      tabList={[
        {
          tab: 'Selected',
          key: '1',
        },
        {
          tab: 'Clickable',
          key: '2',
        },
        {
          tab: 'Disabled',
          key: '3',
          disabled: true,
        },
      ]}
    >
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard style={{ height: 200 }} />
        <ProCard gutter={16} ghost>
          <ProCard colSpan={16} style={{ height: 200 }} />
          <ProCard colSpan={8} style={{ height: 200 }} />
        </ProCard>
        <ProCard gutter={16} ghost>
          <ProCard colSpan={8} style={{ height: 200 }} />
          <ProCard colSpan={16} style={{ height: 200 }} />
        </ProCard>
      </ProCard>
    </PageContainer>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Dropdown } from 'antd';

const Demo = () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      token={{
        paddingBlockPageContainerContent: 24,
        paddingInlinePageContainerContent: 60,
      }}
      header={{
        title: 'Page Title',
        ghost: true,
        breadcrumb: {
          items: [
            {
              path: '',
              title: 'Primary page',
            },
            {
              path: '',
              title: 'Secondary page',
            },
            {
              path: '',
              title: 'Current page',
            },
          ],
        },
        extra: [
          <Button key="1">Secondary button</Button>,
          <Button key="2">Secondary button</Button>,
          <Button key="3" type="primary">
            Primary button
          </Button>,
          <Dropdown
            key="dropdown"
            trigger={['click']}
            menu={{
              items: [
                {
                  label: 'Dropdown menu',
                  key: '1',
                },
                {
                  label: 'Dropdown menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown menu 3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="4" style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
    >
      <ProTable search={false} />
    </PageContainer>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Descriptions } from 'antd';

const Demo = () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      ghost
      header={{
        title: 'Page Title',
        breadcrumb: {},
      }}
      content={
        <Descriptions column={2} style={{ marginBlockEnd: -16 }}>
          <Descriptions.Item label="Creator">曲丽丽</Descriptions.Item>
          <Descriptions.Item label="Associated form">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Creation Date">
            2017-01-10
          </Descriptions.Item>
          <Descriptions.Item label="Document remarks">
            浙江省杭州市西湖区工专路
          </Descriptions.Item>
        </Descriptions>
      }
    >
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard style={{ height: 200 }} />
        <ProCard gutter={16} ghost style={{ height: 200 }}>
          <ProCard colSpan={16} />
          <ProCard colSpan={8} />
        </ProCard>
      </ProCard>
    </PageContainer>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';

export default () => {
  const customLoadingDom = useMemo(
    () => (
      <div style={{ color: 'red', padding: '30px', textAlign: 'center' }}>
        Custom loading...
      </div>
    ),
    [],
  );
  const [customLoading, setCustomLoading] = useState<React.ReactNode | boolean>(
    customLoadingDom,
  );

  useEffect(() => {
    if (process.env.NODE_ENV?.toLocaleLowerCase() === 'test') {
      return;
    }
    setTimeout(() => {
      setCustomLoading(false);
    }, 3000);
  }, []);

  return (
    <div
      style={{
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
        minHeight: '100vh',
        background: '#F5F7FA',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        padding: 24,
      }}
    >
      <Card>
        <PageContainer
          ghost
          loading
          header={{
            title: 'Default loading',
            breadcrumb: {
              items: [
                {
                  path: '',
                  title: 'Primary page',
                },
                {
                  path: '',
                  title: 'Secondary page',
                },
                {
                  path: '',
                  title: 'Current page',
                },
              ],
            },
          }}
        >
          <div
            style={{
              height: '100vh',
            }}
          >
            If in loading state, this content will not be displayed
          </div>
        </PageContainer>
      </Card>
      <Card>
        <PageContainer
          ghost
          loading={{
            spinning: true,
            className: 'customClassName',
            tip: 'Loading relentlessly...',
          }}
          header={{
            title: 'Custom loading property',
            breadcrumb: {
              items: [
                {
                  path: '',
                  title: 'Primary page',
                },
                {
                  path: '',
                  title: 'Secondary page',
                },
                {
                  path: '',
                  title: 'Current page',
                },
              ],
            },
          }}
        >
          <div
            style={{
              height: '100vh',
            }}
          >
            If in loading state, this content will not be displayed
          </div>
        </PageContainer>
      </Card>
      <Card>
        <PageContainer
          ghost
          loading={customLoading}
          header={{
            title: 'Custom loading, display content after 3 seconds',
            breadcrumb: {
              items: [
                {
                  path: '',
                  title: 'Primary page',
                },
                {
                  path: '',
                  title: 'Secondary page',
                },
                {
                  path: '',
                  title: 'Current page',
                },
              ],
            },
          }}
        >
          <div
            style={{
              height: '100vh',
            }}
          >
            If in loading state, this content will not be displayed
          </div>
        </PageContainer>
      </Card>
    </div>
  );
};

import { EllipsisOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button, Dropdown } from 'antd';

const Demo = () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      header={{
        title: 'Page Title',
        ghost: true,
        breadcrumb: {
          items: [
            {
              path: '',
              title: 'Primary page',
            },
            {
              path: '',
              title: 'Secondary page',
            },
            {
              path: '',
              title: 'Current page',
            },
          ],
        },
        extra: [
          <Button key="1">Secondary button</Button>,
          <Button key="2">Secondary button</Button>,
          <Button key="3" type="primary">
            Primary button
          </Button>,
          <Dropdown
            key="dropdown"
            trigger={['click']}
            menu={{
              items: [
                {
                  label: 'Dropdown menu',
                  key: '1',
                },
                {
                  label: 'Dropdown menu 2',
                  key: '2',
                },
                {
                  label: 'Dropdown menu 3',
                  key: '3',
                },
              ],
            }}
          >
            <Button key="4" style={{ padding: '0 8px' }}>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ],
      }}
      tabBarExtraContent="Test tabBarExtraContent"
      tabList={[
        {
          tab: 'Basic information',
          key: 'base',
          closable: false,
        },
        {
          tab: 'Detailed information',
          key: 'info',
        },
      ]}
      tabProps={{
        type: 'editable-card',
        hideAdd: true,
        onEdit: (e, action) => console.log(e, action),
      }}
      footer={[
        <Button key="3">Reset</Button>,
        <Button key="2" type="primary">
          Submit
        </Button>,
      ]}
    >
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard style={{ height: 200 }} />
        <ProCard gutter={16} ghost style={{ height: 200 }}>
          <ProCard colSpan={16} />
          <ProCard colSpan={8} />
        </ProCard>
      </ProCard>
    </PageContainer>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProCard } from '@ant-design/pro-components';

const Demo = () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      fixedHeader
      header={{
        title: 'Page Title',
        breadcrumb: {
          items: [
            {
              path: '',
              title: 'Primary page',
            },
            {
              path: '',
              title: 'Secondary page',
            },
            {
              path: '',
              title: 'Current page',
            },
          ],
        },
      }}
      tabList={[
        {
          tab: 'Selected',
          key: '1',
        },
        {
          tab: 'Clickable',
          key: '2',
        },
        {
          tab: 'Disabled',
          key: '3',
          disabled: true,
        },
      ]}
    >
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard style={{ height: 200 }} />
        <ProCard gutter={16} ghost>
          <ProCard colSpan={16} style={{ height: 200 }} />
          <ProCard colSpan={8} style={{ height: 200 }} />
        </ProCard>
        <ProCard gutter={16} ghost>
          <ProCard colSpan={8} style={{ height: 200 }} />
          <ProCard colSpan={16} style={{ height: 200 }} />
        </ProCard>
      </ProCard>
    </PageContainer>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);



import { ProList } from '@ant-design/pro-components';
import { Space, Tag } from 'antd';
import { useState } from 'react';

const defaultData = [
  {
    id: '1',
    name: '语雀的天空',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '2',
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '3',
    name: '蚂蚁金服体验科技',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '4',
    name: 'TechUI',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
];

type DataItem = (typeof defaultData)[number];

const Demo = () => {
  const [dataSource, setDataSource] = useState<DataItem[]>(defaultData);
  return (
    <ProList<DataItem>
      rowKey="id"
      headerTitle="基础列表"
      dataSource={dataSource}
      showActions="hover"
      editable={{
        onSave: async (key, record, originRow) => {
          console.log(key, record, originRow);
          return true;
        },
      }}
      onDataSourceChange={setDataSource}
      metas={{
        title: {
          dataIndex: 'name',
        },
        avatar: {
          dataIndex: 'image',
          editable: false,
        },
        description: {
          dataIndex: 'desc',
        },
        subTitle: {
          render: () => {
            return (
              <Space size={0}>
                <Tag color="blue">Ant Design</Tag>
                <Tag color="#5BD8A6">TechUI</Tag>
              </Space>
            );
          },
        },
        actions: {
          render: (text, row, index, action) => [
            <a
              onClick={() => {
                action?.startEditable(row.id);
              }}
              key="link"
            >
              编辑
            </a>,
          ],
        },
      }}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProList } from '@ant-design/pro-components';
import { Button, Progress, Select } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';

const dataSource = [
  {
    title: '语雀的天空',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'Ant Design',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: '蚂蚁金服体验科技',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'TechUI',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
];

const Demo = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly Key[]>([]);
  const [size, setSize] = useState<'small' | 'default' | 'large' | undefined>(
    'default',
  );
  const [split, setSplit] = useState<0 | 1>(1);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: Key[]) => setSelectedRowKeys(keys),
  };

  return (
    <>
      大小：
      <Select<string>
        value={size}
        onChange={(value) => setSize(value as any)}
        options={['small', 'default', 'large'].map((selectSize) => ({
          value: selectSize,
          label: selectSize,
        }))}
      />{' '}
      分割线：
      <Select<0 | 1>
        value={split}
        onChange={(value) => setSplit(value)}
        options={[
          {
            value: 1,
            label: '有',
          },
          {
            value: 0,
            label: '无',
          },
        ]}
      />{' '}
      <br />
      <br />
      <ProList<{ title: string }>
        size={size}
        split={split === 1}
        toolBarRender={() => {
          return [
            <Button key="3" type="primary">
              新建
            </Button>,
          ];
        }}
        metas={{
          title: {},
          description: {
            render: () => {
              return 'Ant Design, a design language for background applications, is refined by Ant UED Team';
            },
          },
          avatar: {},
          content: {
            render: () => (
              <div
                style={{
                  minWidth: 200,
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  style={{
                    width: '200px',
                  }}
                >
                  <div>发布中</div>
                  <Progress percent={80} />
                </div>
              </div>
            ),
          },
          actions: {
            render: () => {
              return [<a key="init">邀请</a>];
            },
          },
        }}
        expandable={{
          expandedRowKeys,
          defaultExpandAllRows: false,
          onExpandedRowsChange: setExpandedRowKeys,
        }}
        rowKey="title"
        headerTitle="大小和分割线"
        rowSelection={rowSelection}
        dataSource={dataSource}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProList } from '@ant-design/pro-components';
import { Button, Progress, Space, Tag } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';

const dataSource = [
  {
    title: '语雀的天空',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'Ant Design',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: '蚂蚁金服体验科技',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'TechUI',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
];

const Demo = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly Key[]>([]);

  return (
    <ProList<{ title: string }>
      rowKey="title"
      headerTitle="支持展开的列表"
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            新建
          </Button>,
        ];
      }}
      expandable={{ expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys }}
      dataSource={dataSource}
      metas={{
        title: {},
        subTitle: {
          render: () => {
            return (
              <Space size={0}>
                <Tag color="blue">Ant Design</Tag>
                <Tag color="#5BD8A6">TechUI</Tag>
              </Space>
            );
          },
        },
        description: {
          render: () => {
            return 'Ant Design, a design language for background applications, is refined by Ant UED Team';
          },
        },
        avatar: {},
        content: {
          render: () => (
            <div
              style={{
                minWidth: 200,
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  width: '200px',
                }}
              >
                <div>发布中</div>
                <Progress percent={80} />
              </div>
            </div>
          ),
        },
        actions: {
          render: () => {
            return <a key="invite">邀请</a>;
          },
        },
      }}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProList } from '@ant-design/pro-components';
import { ConfigProvider, Progress } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';

const dataSource = [
  {
    title: '语雀的天空',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
];

const Demo = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: Key[]) => setSelectedRowKeys(keys),
  };

  return (
    <ConfigProvider prefixCls="qixian">
      <ProList<{ title: string }>
        metas={{
          title: {},
          description: {
            render: () => {
              return 'Ant Design, a design language for background applications, is refined by Ant UED Team';
            },
          },
          avatar: {},
          extra: {
            render: () => (
              <div
                style={{
                  minWidth: 200,
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  style={{
                    width: '200px',
                  }}
                >
                  <div>发布中</div>
                  <Progress percent={80} />
                </div>
              </div>
            ),
          },
          actions: {
            render: () => {
              return [<a key="init">邀请</a>, '发布'];
            },
          },
        }}
        rowKey="title"
        headerTitle="支持选中的列表"
        rowSelection={rowSelection}
        dataSource={dataSource}
      />
    </ConfigProvider>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Progress, Tag } from 'antd';

const data = [
  '语雀的天空',
  'Ant Design',
  '蚂蚁金服体验科技',
  'TechUI',
  'TechUI 2.0',
  'Bigfish',
  'Umi',
].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
  actions: [
    <a key="invite">邀请</a>,
    <a key="operate">操作</a>,
    <a key="rest">
      <EllipsisOutlined />
    </a>,
  ],
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          width: 200,
        }}
      >
        <div>发布中</div>
        <Progress percent={80} />
      </div>
    </div>
  ),
}));

const Demo = () => {
  return (
    <ProList<any>
      pagination={{
        defaultPageSize: 5,
        showSizeChanger: true,
      }}
      metas={{
        title: {},
        subTitle: {},
        type: {},
        avatar: {},
        content: {},
        actions: {},
      }}
      headerTitle="翻页"
      dataSource={data}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProList } from '@ant-design/pro-components';
import { Button, Progress } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';

const dataSource = [
  {
    title: '语雀的天空',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'Ant Design',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: '蚂蚁金服体验科技',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'TechUI',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
];

const Demo = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: Key[]) => setSelectedRowKeys(keys),
  };

  return (
    <ProList<{ title: string }>
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            新建
          </Button>,
        ];
      }}
      metas={{
        title: {},
        description: {
          render: () => {
            return 'Ant Design, a design language for background applications, is refined by Ant UED Team';
          },
        },
        avatar: {},
        extra: {
          render: () => (
            <div
              style={{
                minWidth: 200,
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  width: '200px',
                }}
              >
                <div>发布中</div>
                <Progress percent={80} />
              </div>
            </div>
          ),
        },
        actions: {
          render: () => {
            return [<a key="init">邀请</a>, '发布'];
          },
        },
      }}
      rowKey="title"
      headerTitle="支持选中的列表"
      rowSelection={rowSelection}
      dataSource={dataSource}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ActionType } from '@ant-design/pro-components';
import { ProList } from '@ant-design/pro-components';
import { Badge, Button } from 'antd';
import React, { useRef, useState } from 'react';

const dataSource = [
  {
    name: '实验名称1',
    desc: '系统性的沉淀B端知识体系',
    content: [
      {
        label: '模型数',
        value: 2903,
      },
      {
        label: '指标数',
        value: 3720,
      },
      {
        label: '实验状态',
        value: '成功',
        status: 'success',
      },
    ],
  },
  {
    name: '实验名称2',
    desc: '系统性的沉淀B端知识体系',
    content: [
      {
        label: '模型数',
        value: 2904,
      },
      {
        label: '指标数',
        value: 3721,
      },
      {
        label: '实验状态',
        value: '成功',
        status: 'success',
      },
    ],
  },
  {
    name: '实验名称3',
    desc: '系统性的沉淀B端知识体系',
    content: [
      {
        label: '模型数',
        value: 2905,
      },
      {
        label: '指标数',
        value: 3722,
      },
      {
        label: '实验状态',
        value: '成功',
        status: 'success',
      },
    ],
  },
];

const renderBadge = (count: number, active = false) => {
  return (
    <Badge
      count={count}
      style={{
        marginBlockStart: -2,
        marginInlineStart: 4,
        color: active ? '#1890FF' : '#999',
        backgroundColor: active ? '#E6F7FF' : '#eee',
      }}
    />
  );
};

const Demo = () => {
  const [activeKey, setActiveKey] = useState<React.Key | undefined>('tab1');
  const action = useRef<ActionType>();
  return (
    <ProList<any>
      rowKey="name"
      actionRef={action}
      dataSource={dataSource}
      editable={{}}
      metas={{
        title: {
          dataIndex: 'name',
          valueType: 'select',
          fieldProps: {
            showSearch: true,
            placement: 'bottomRight',
            options: [
              {
                label: '实验名称1',
                value: '实验名称1',
              },
            ],
          },
        },
        description: {
          key: 'desc',
        },
        content: {
          dataIndex: 'content',
          render: (text) => (
            <div
              key="label"
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              {(text as any[]).map((t) => (
                <div key={t.label}>
                  <div>{t.label}</div>
                  <div>
                    {t.status === 'success' && (
                      <span
                        style={{
                          display: 'inline-block',
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: '#52c41a',
                          marginInlineEnd: 8,
                        }}
                      />
                    )}
                    {t.value}
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        actions: {
          render: (text, row) => [
            <a
              href={row.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key="link"
              onClick={() => {
                action.current?.startEditable(row.name);
              }}
            >
              编辑
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="warning">
              复制
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="view">
              删除
            </a>,
          ],
        },
      }}
      toolbar={{
        menu: {
          activeKey,
          items: [
            {
              key: 'tab1',
              label: (
                <span>全部实验室{renderBadge(99, activeKey === 'tab1')}</span>
              ),
            },
            {
              key: 'tab2',
              label: (
                <span>
                  我创建的实验室{renderBadge(32, activeKey === 'tab2')}
                </span>
              ),
            },
          ],
          onChange(key) {
            setActiveKey(key);
          },
        },
        search: {
          onSearch: (value: string) => {
            alert(value);
          },
        },
        actions: [
          <Button type="primary" key="primary">
            新建实验
          </Button>,
        ],
      }}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProList } from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';
import request from 'umi-request';

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const Demo = () => (
  <ProList<GithubIssueItem>
    toolBarRender={() => {
      return [
        <Button key="3" type="primary">
          新建
        </Button>,
      ];
    }}
    search={{}}
    rowKey="name"
    headerTitle="基础列表"
    request={async (params = {} as Record<string, any>) =>
      request<{
        data: GithubIssueItem[];
      }>('https://proapi.azurewebsites.net/github/issues', {
        params,
      })
    }
    pagination={{
      pageSize: 5,
    }}
    showActions="hover"
    metas={{
      title: {
        dataIndex: 'user',
        title: '用户',
      },
      avatar: {
        dataIndex: 'avatar',
        search: false,
      },
      description: {
        dataIndex: 'title',
        search: false,
      },
      subTitle: {
        dataIndex: 'labels',
        render: (_, row) => {
          return (
            <Space size={0}>
              {row.labels?.map((label: { name: string }) => (
                <Tag color="blue" key={label.name}>
                  {label.name}
                </Tag>
              ))}
            </Space>
          );
        },
        search: false,
      },
      actions: {
        render: (text, row) => [
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="link"
          >
            链路
          </a>,
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="warning"
          >
            报警
          </a>,
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="view"
          >
            查看
          </a>,
        ],
        search: false,
      },
      status: {
        // 自己扩展的字段，主要用于筛选，不在列表中显示
        title: '状态',
        valueType: 'select',
        valueEnum: {
          all: { text: '全部', status: 'Default' },
          open: {
            text: '未解决',
            status: 'Error',
          },
          closed: {
            text: '已解决',
            status: 'Success',
          },
          processing: {
            text: '解决中',
            status: 'Processing',
          },
        },
      },
    }}
  />
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProCard,
  ProForm,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <ProForm
      layout="horizontal"
      onFinish={async (values) => {
        console.log(values);
        return true;
      }}
    >
      <ProFormText
        style={{ padding: 0 }}
        width="md"
        name="name"
        label="规格名"
      />
      <ProFormList
        name="attributes"
        label="规格"
        creatorButtonProps={{
          creatorButtonText: '添加规格项',
        }}
        min={1}
        copyIconProps={false}
        itemRender={({ listDom, action }, { index }) => (
          <ProCard
            variant="outlined"
            style={{ marginBlockEnd: 8 }}
            title={`规格${index + 1}`}
            extra={action}
            styles={{ body: { paddingBlockEnd: 0 } }}
          >
            {listDom}
          </ProCard>
        )}
        creatorRecord={{ name: '', items: [{ name: '' }] }}
        initialValue={[
          { name: '颜色', items: [{ name: '红' }, { name: '黄' }] },
        ]}
      >
        <ProFormText
          style={{ padding: 0 }}
          width="md"
          name="name"
          label="规格名"
        />
        <ProForm.Item isListField style={{ marginBlockEnd: 0 }} label="规格值">
          <ProFormList
            name="items"
            creatorButtonProps={{
              creatorButtonText: '新建',
              icon: false,
              type: 'link',
              style: { width: 'unset' },
            }}
            min={1}
            copyIconProps={false}
            deleteIconProps={{ tooltipText: '删除' }}
            itemRender={({ listDom, action }) => (
              <div
                style={{
                  display: 'inline-flex',
                  marginInlineEnd: 25,
                }}
              >
                {listDom}
                {action}
              </div>
            )}
          >
            <ProFormText allowClear={false} width="xs" name={['name']} />
          </ProFormList>
        </ProForm.Item>
      </ProFormList>
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProList } from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';
import request from 'umi-request';

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const Demo = () => (
  <ProList<GithubIssueItem>
    toolBarRender={() => {
      return [
        <Button key="3" type="primary">
          新建
        </Button>,
      ];
    }}
    search={{
      filterType: 'light',
    }}
    rowKey="name"
    headerTitle="基础列表"
    request={async (params = {} as Record<string, any>) =>
      request<{
        data: GithubIssueItem[];
      }>('https://proapi.azurewebsites.net/github/issues', {
        params,
      })
    }
    pagination={{
      pageSize: 5,
    }}
    showActions="hover"
    metas={{
      title: {
        dataIndex: 'user',
        title: '用户',
      },
      avatar: {
        dataIndex: 'avatar',
        search: false,
      },
      description: {
        dataIndex: 'title',
        search: false,
      },
      subTitle: {
        dataIndex: 'labels',
        render: (_, row) => {
          return (
            <Space size={0}>
              {row.labels?.map((label: { name: string }) => (
                <Tag color="blue" key={label.name}>
                  {label.name}
                </Tag>
              ))}
            </Space>
          );
        },
        search: false,
      },
      actions: {
        render: (text, row) => [
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="link"
          >
            链路
          </a>,
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="warning"
          >
            报警
          </a>,
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="view"
          >
            查看
          </a>,
        ],
        search: false,
      },
      status: {
        // 自己扩展的字段，主要用于筛选，不在列表中显示
        title: '状态',
        valueType: 'select',
        valueEnum: {
          all: { text: '全部', status: 'Default' },
          open: {
            text: '未解决',
            status: 'Error',
          },
          closed: {
            text: '已解决',
            status: 'Success',
          },
          processing: {
            text: '解决中',
            status: 'Processing',
          },
        },
      },
    }}
  />
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Button, Tag } from 'antd';
import React from 'react';

const IconText = ({ icon, text }: { icon: any; text: string }) => (
  <span>
    {React.createElement(icon, { style: { marginInlineEnd: 8 } })}
    {text}
  </span>
);

const dataSource = [
  {
    title: '语雀的天空',
  },
  {
    title: 'Ant Design',
  },
  {
    title: '蚂蚁金服体验科技',
  },
  {
    title: 'TechUI',
  },
];

const Demo = () => {
  return (
    <ProList<{ title: string }>
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            新建
          </Button>,
        ];
      }}
      itemLayout="vertical"
      rowKey="id"
      headerTitle="竖排样式"
      dataSource={dataSource}
      metas={{
        title: {},
        description: {
          render: () => (
            <>
              <Tag>语雀专栏</Tag>
              <Tag>设计语言</Tag>
              <Tag>蚂蚁金服</Tag>
            </>
          ),
        },
        actions: {
          render: () => [
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ],
        },
        extra: {
          render: () => (
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          ),
        },
        content: {
          render: () => {
            return (
              <div>
                段落示意：蚂蚁金服设计平台
                design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
                design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态提供跨越设计与开发的体验解决方案。
              </div>
            );
          },
        },
      }}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Button, Progress, Tag } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';

const types = ['top', 'inline', 'new'];
const data = [
  '语雀的天空（top）',
  'Ant Design（inline）',
  '蚂蚁金服体验科技（new）',
  'TechUI',
].map((item, index) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
  actions: [
    <a key="invite">邀请</a>,
    <a key="operate">操作</a>,
    <a key="rest">
      <EllipsisOutlined />
    </a>,
  ],
  description: (
    <div>
      <div>top 会有小角标</div>
      <div>inline 标题字体是 normal</div>
      <div>new 会有一个入场动画</div>
    </div>
  ),
  type: types[index],
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          width: 200,
        }}
      >
        <div>发布中</div>
        <Progress percent={80} />
      </div>
    </div>
  ),
}));

const Demo = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly Key[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: Key[]) => setSelectedRowKeys(keys),
  };
  const [dataSource, setDataSource] = useState<any[]>([...data] as any[]);

  return (
    <>
      <ProList<{
        title: string;
        subTitle: JSX.Element;
        actions: JSX.Element[];
        description: JSX.Element;
        type?: 'top' | 'inline' | 'new';
        avatar: string;
        children: JSX.Element;
      }>
        metas={{
          title: {},
          subTitle: {},
          type: {},
          description: {},
          avatar: {},
          content: {},
          actions: {},
        }}
        toolBarRender={() => [
          <Button
            key="3"
            type="primary"
            onClick={() => {
              setDataSource([...data.map((item) => ({ ...item }))]);
              setTimeout(() => {
                const list = [...data.map((item) => ({ ...item }))];
                list[1].type = 'new';
                setDataSource(list);
              }, 0);
            }}
          >
            刷新
          </Button>,
        ]}
        rowKey="id"
        headerTitle="预设的列状态"
        rowSelection={rowSelection}
        dataSource={dataSource}
        expandable={{
          expandedRowKeys,
          onExpandedRowsChange: setExpandedRowKeys,
        }}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProFormRadio,
  ProFormSwitch,
  ProList,
} from '@ant-design/pro-components';
import { Progress, Tag } from 'antd';
import { useState } from 'react';

const data = [
  '语雀的天空',
  'Ant Design',
  '蚂蚁金服体验科技',
  'TechUI',
  'TechUI 2.0',
  'Bigfish',
  'Umi',
  'Ant Design Pro',
].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
  actions: [<a key="run">邀请</a>, <a key="delete">删除</a>],
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        style={{
          width: 200,
        }}
      >
        <div>发布中</div>
        <Progress percent={80} />
      </div>
    </div>
  ),
}));

export default () => {
  const [cardActionProps, setCardActionProps] = useState<'actions' | 'extra'>(
    'extra',
  );

  const [ghost, setGhost] = useState<boolean>(false);
  return (
    <div
      style={{
        backgroundColor: '#eee',
        margin: -24,
        padding: 24,
      }}
    >
      <ProFormRadio.Group
        label="actions 放置的地方"
        options={[
          {
            label: '设置为 action',
            value: 'actions',
          },
          {
            label: '设置为 extra',
            value: 'extra',
          },
        ]}
        fieldProps={{
          value: cardActionProps,
          onChange: (e) => setCardActionProps(e.target.value),
        }}
      />
      <ProFormSwitch
        label="幽灵模式"
        fieldProps={{
          checked: ghost,
          onChange: (e) => setGhost(e),
        }}
      />
      <ProList<any>
        ghost={ghost}
        itemCardProps={{
          ghost,
        }}
        pagination={{
          defaultPageSize: 8,
          showSizeChanger: false,
        }}
        showActions="hover"
        rowSelection={{}}
        grid={{ gutter: 16, column: 2 }}
        onItem={(record: any) => {
          return {
            onMouseEnter: () => {
              console.log(record);
            },
            onClick: () => {
              console.log(record);
            },
          };
        }}
        metas={{
          title: {},
          subTitle: {},
          type: {},
          avatar: {},
          content: {},
          actions: {
            cardActionProps,
          },
        }}
        headerTitle="卡片列表展示"
        dataSource={data}
      />
    </div>
  );
};

import { ProList } from '@ant-design/pro-components';
import { Space, Tag } from 'antd';
import { useState } from 'react';

const defaultData = [
  {
    id: '1',
    name: '语雀的天空',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '2',
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '3',
    name: '蚂蚁金服体验科技',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '4',
    name: 'TechUI',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
];

type DataItem = (typeof defaultData)[number];

const Demo = () => {
  const [dataSource, setDataSource] = useState<DataItem[]>(defaultData);
  return (
    <ProList<DataItem>
      rowKey="id"
      headerTitle="基础列表"
      dataSource={dataSource}
      showActions="hover"
      editable={{
        onSave: async (key, record, originRow) => {
          console.log(key, record, originRow);
          return true;
        },
      }}
      onDataSourceChange={setDataSource}
      metas={{
        title: {
          dataIndex: 'name',
        },
        avatar: {
          dataIndex: 'image',
          editable: false,
        },
        description: {
          dataIndex: 'desc',
        },
        subTitle: {
          render: () => {
            return (
              <Space size={0}>
                <Tag color="blue">Ant Design</Tag>
                <Tag color="#5BD8A6">TechUI</Tag>
              </Space>
            );
          },
        },
        actions: {
          render: (text, row, index, action) => [
            <a
              onClick={() => {
                action?.startEditable(row.id);
              }}
              key="link"
            >
              编辑
            </a>,
          ],
        },
      }}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProList } from '@ant-design/pro-components';
import { Button, Progress, Select } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';

const dataSource = [
  {
    title: '语雀的天空',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'Ant Design',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: '蚂蚁金服体验科技',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'TechUI',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
];

const Demo = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly Key[]>([]);
  const [size, setSize] = useState<'small' | 'default' | 'large' | undefined>(
    'default',
  );
  const [split, setSplit] = useState<0 | 1>(1);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: Key[]) => setSelectedRowKeys(keys),
  };

  return (
    <>
      大小：
      <Select<string>
        value={size}
        onChange={(value) => setSize(value as any)}
        options={['small', 'default', 'large'].map((selectSize) => ({
          value: selectSize,
          label: selectSize,
        }))}
      />{' '}
      分割线：
      <Select<0 | 1>
        value={split}
        onChange={(value) => setSplit(value)}
        options={[
          {
            value: 1,
            label: '有',
          },
          {
            value: 0,
            label: '无',
          },
        ]}
      />{' '}
      <br />
      <br />
      <ProList<{ title: string }>
        size={size}
        split={split === 1}
        toolBarRender={() => {
          return [
            <Button key="3" type="primary">
              新建
            </Button>,
          ];
        }}
        metas={{
          title: {},
          description: {
            render: () => {
              return 'Ant Design, a design language for background applications, is refined by Ant UED Team';
            },
          },
          avatar: {},
          content: {
            render: () => (
              <div
                style={{
                  minWidth: 200,
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  style={{
                    width: '200px',
                  }}
                >
                  <div>发布中</div>
                  <Progress percent={80} />
                </div>
              </div>
            ),
          },
          actions: {
            render: () => {
              return [<a key="init">邀请</a>];
            },
          },
        }}
        expandable={{
          expandedRowKeys,
          defaultExpandAllRows: false,
          onExpandedRowsChange: setExpandedRowKeys,
        }}
        rowKey="title"
        headerTitle="大小和分割线"
        rowSelection={rowSelection}
        dataSource={dataSource}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProList } from '@ant-design/pro-components';
import { Button, Progress, Space, Tag } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';

const dataSource = [
  {
    title: '语雀的天空',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'Ant Design',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: '蚂蚁金服体验科技',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'TechUI',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
];

const Demo = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly Key[]>([]);

  return (
    <ProList<{ title: string }>
      rowKey="title"
      headerTitle="支持展开的列表"
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            新建
          </Button>,
        ];
      }}
      expandable={{ expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys }}
      dataSource={dataSource}
      metas={{
        title: {},
        subTitle: {
          render: () => {
            return (
              <Space size={0}>
                <Tag color="blue">Ant Design</Tag>
                <Tag color="#5BD8A6">TechUI</Tag>
              </Space>
            );
          },
        },
        description: {
          render: () => {
            return 'Ant Design, a design language for background applications, is refined by Ant UED Team';
          },
        },
        avatar: {},
        content: {
          render: () => (
            <div
              style={{
                minWidth: 200,
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  width: '200px',
                }}
              >
                <div>发布中</div>
                <Progress percent={80} />
              </div>
            </div>
          ),
        },
        actions: {
          render: () => {
            return <a key="invite">邀请</a>;
          },
        },
      }}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProList } from '@ant-design/pro-components';
import { ConfigProvider, Progress } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';

const dataSource = [
  {
    title: '语雀的天空',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
];

const Demo = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: Key[]) => setSelectedRowKeys(keys),
  };

  return (
    <ConfigProvider prefixCls="qixian">
      <ProList<{ title: string }>
        metas={{
          title: {},
          description: {
            render: () => {
              return 'Ant Design, a design language for background applications, is refined by Ant UED Team';
            },
          },
          avatar: {},
          extra: {
            render: () => (
              <div
                style={{
                  minWidth: 200,
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  style={{
                    width: '200px',
                  }}
                >
                  <div>发布中</div>
                  <Progress percent={80} />
                </div>
              </div>
            ),
          },
          actions: {
            render: () => {
              return [<a key="init">邀请</a>, '发布'];
            },
          },
        }}
        rowKey="title"
        headerTitle="支持选中的列表"
        rowSelection={rowSelection}
        dataSource={dataSource}
      />
    </ConfigProvider>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Progress, Tag } from 'antd';

const data = [
  '语雀的天空',
  'Ant Design',
  '蚂蚁金服体验科技',
  'TechUI',
  'TechUI 2.0',
  'Bigfish',
  'Umi',
].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
  actions: [
    <a key="invite">邀请</a>,
    <a key="operate">操作</a>,
    <a key="rest">
      <EllipsisOutlined />
    </a>,
  ],
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          width: 200,
        }}
      >
        <div>发布中</div>
        <Progress percent={80} />
      </div>
    </div>
  ),
}));

const Demo = () => {
  return (
    <ProList<any>
      pagination={{
        defaultPageSize: 5,
        showSizeChanger: true,
      }}
      metas={{
        title: {},
        subTitle: {},
        type: {},
        avatar: {},
        content: {},
        actions: {},
      }}
      headerTitle="翻页"
      dataSource={data}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProList } from '@ant-design/pro-components';
import { Button, Progress } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';

const dataSource = [
  {
    title: '语雀的天空',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'Ant Design',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: '蚂蚁金服体验科技',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
  {
    title: 'TechUI',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  },
];

const Demo = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: Key[]) => setSelectedRowKeys(keys),
  };

  return (
    <ProList<{ title: string }>
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            新建
          </Button>,
        ];
      }}
      metas={{
        title: {},
        description: {
          render: () => {
            return 'Ant Design, a design language for background applications, is refined by Ant UED Team';
          },
        },
        avatar: {},
        extra: {
          render: () => (
            <div
              style={{
                minWidth: 200,
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  width: '200px',
                }}
              >
                <div>发布中</div>
                <Progress percent={80} />
              </div>
            </div>
          ),
        },
        actions: {
          render: () => {
            return [<a key="init">邀请</a>, '发布'];
          },
        },
      }}
      rowKey="title"
      headerTitle="支持选中的列表"
      rowSelection={rowSelection}
      dataSource={dataSource}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ActionType } from '@ant-design/pro-components';
import { ProList } from '@ant-design/pro-components';
import { Badge, Button } from 'antd';
import React, { useRef, useState } from 'react';

const dataSource = [
  {
    name: '实验名称1',
    desc: '系统性的沉淀B端知识体系',
    content: [
      {
        label: '模型数',
        value: 2903,
      },
      {
        label: '指标数',
        value: 3720,
      },
      {
        label: '实验状态',
        value: '成功',
        status: 'success',
      },
    ],
  },
  {
    name: '实验名称2',
    desc: '系统性的沉淀B端知识体系',
    content: [
      {
        label: '模型数',
        value: 2904,
      },
      {
        label: '指标数',
        value: 3721,
      },
      {
        label: '实验状态',
        value: '成功',
        status: 'success',
      },
    ],
  },
  {
    name: '实验名称3',
    desc: '系统性的沉淀B端知识体系',
    content: [
      {
        label: '模型数',
        value: 2905,
      },
      {
        label: '指标数',
        value: 3722,
      },
      {
        label: '实验状态',
        value: '成功',
        status: 'success',
      },
    ],
  },
];

const renderBadge = (count: number, active = false) => {
  return (
    <Badge
      count={count}
      style={{
        marginBlockStart: -2,
        marginInlineStart: 4,
        color: active ? '#1890FF' : '#999',
        backgroundColor: active ? '#E6F7FF' : '#eee',
      }}
    />
  );
};

const Demo = () => {
  const [activeKey, setActiveKey] = useState<React.Key | undefined>('tab1');
  const action = useRef<ActionType>();
  return (
    <ProList<any>
      rowKey="name"
      actionRef={action}
      dataSource={dataSource}
      editable={{}}
      metas={{
        title: {
          dataIndex: 'name',
          valueType: 'select',
          fieldProps: {
            showSearch: true,
            placement: 'bottomRight',
            options: [
              {
                label: '实验名称1',
                value: '实验名称1',
              },
            ],
          },
        },
        description: {
          key: 'desc',
        },
        content: {
          dataIndex: 'content',
          render: (text) => (
            <div
              key="label"
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              {(text as any[]).map((t) => (
                <div key={t.label}>
                  <div>{t.label}</div>
                  <div>
                    {t.status === 'success' && (
                      <span
                        style={{
                          display: 'inline-block',
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: '#52c41a',
                          marginInlineEnd: 8,
                        }}
                      />
                    )}
                    {t.value}
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        actions: {
          render: (text, row) => [
            <a
              href={row.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key="link"
              onClick={() => {
                action.current?.startEditable(row.name);
              }}
            >
              编辑
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="warning">
              复制
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="view">
              删除
            </a>,
          ],
        },
      }}
      toolbar={{
        menu: {
          activeKey,
          items: [
            {
              key: 'tab1',
              label: (
                <span>全部实验室{renderBadge(99, activeKey === 'tab1')}</span>
              ),
            },
            {
              key: 'tab2',
              label: (
                <span>
                  我创建的实验室{renderBadge(32, activeKey === 'tab2')}
                </span>
              ),
            },
          ],
          onChange(key) {
            setActiveKey(key);
          },
        },
        search: {
          onSearch: (value: string) => {
            alert(value);
          },
        },
        actions: [
          <Button type="primary" key="primary">
            新建实验
          </Button>,
        ],
      }}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProList } from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';
import request from 'umi-request';

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const Demo = () => (
  <ProList<GithubIssueItem>
    toolBarRender={() => {
      return [
        <Button key="3" type="primary">
          新建
        </Button>,
      ];
    }}
    search={{}}
    rowKey="name"
    headerTitle="基础列表"
    request={async (params = {} as Record<string, any>) =>
      request<{
        data: GithubIssueItem[];
      }>('https://proapi.azurewebsites.net/github/issues', {
        params,
      })
    }
    pagination={{
      pageSize: 5,
    }}
    showActions="hover"
    metas={{
      title: {
        dataIndex: 'user',
        title: '用户',
      },
      avatar: {
        dataIndex: 'avatar',
        search: false,
      },
      description: {
        dataIndex: 'title',
        search: false,
      },
      subTitle: {
        dataIndex: 'labels',
        render: (_, row) => {
          return (
            <Space size={0}>
              {row.labels?.map((label: { name: string }) => (
                <Tag color="blue" key={label.name}>
                  {label.name}
                </Tag>
              ))}
            </Space>
          );
        },
        search: false,
      },
      actions: {
        render: (text, row) => [
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="link"
          >
            链路
          </a>,
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="warning"
          >
            报警
          </a>,
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="view"
          >
            查看
          </a>,
        ],
        search: false,
      },
      status: {
        // 自己扩展的字段，主要用于筛选，不在列表中显示
        title: '状态',
        valueType: 'select',
        valueEnum: {
          all: { text: '全部', status: 'Default' },
          open: {
            text: '未解决',
            status: 'Error',
          },
          closed: {
            text: '已解决',
            status: 'Success',
          },
          processing: {
            text: '解决中',
            status: 'Processing',
          },
        },
      },
    }}
  />
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProCard,
  ProForm,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <ProForm
      layout="horizontal"
      onFinish={async (values) => {
        console.log(values);
        return true;
      }}
    >
      <ProFormText
        style={{ padding: 0 }}
        width="md"
        name="name"
        label="规格名"
      />
      <ProFormList
        name="attributes"
        label="规格"
        creatorButtonProps={{
          creatorButtonText: '添加规格项',
        }}
        min={1}
        copyIconProps={false}
        itemRender={({ listDom, action }, { index }) => (
          <ProCard
            variant="outlined"
            style={{ marginBlockEnd: 8 }}
            title={`规格${index + 1}`}
            extra={action}
            styles={{ body: { paddingBlockEnd: 0 } }}
          >
            {listDom}
          </ProCard>
        )}
        creatorRecord={{ name: '', items: [{ name: '' }] }}
        initialValue={[
          { name: '颜色', items: [{ name: '红' }, { name: '黄' }] },
        ]}
      >
        <ProFormText
          style={{ padding: 0 }}
          width="md"
          name="name"
          label="规格名"
        />
        <ProForm.Item isListField style={{ marginBlockEnd: 0 }} label="规格值">
          <ProFormList
            name="items"
            creatorButtonProps={{
              creatorButtonText: '新建',
              icon: false,
              type: 'link',
              style: { width: 'unset' },
            }}
            min={1}
            copyIconProps={false}
            deleteIconProps={{ tooltipText: '删除' }}
            itemRender={({ listDom, action }) => (
              <div
                style={{
                  display: 'inline-flex',
                  marginInlineEnd: 25,
                }}
              >
                {listDom}
                {action}
              </div>
            )}
          >
            <ProFormText allowClear={false} width="xs" name={['name']} />
          </ProFormList>
        </ProForm.Item>
      </ProFormList>
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProList } from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';
import request from 'umi-request';

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const Demo = () => (
  <ProList<GithubIssueItem>
    toolBarRender={() => {
      return [
        <Button key="3" type="primary">
          新建
        </Button>,
      ];
    }}
    search={{
      filterType: 'light',
    }}
    rowKey="name"
    headerTitle="基础列表"
    request={async (params = {} as Record<string, any>) =>
      request<{
        data: GithubIssueItem[];
      }>('https://proapi.azurewebsites.net/github/issues', {
        params,
      })
    }
    pagination={{
      pageSize: 5,
    }}
    showActions="hover"
    metas={{
      title: {
        dataIndex: 'user',
        title: '用户',
      },
      avatar: {
        dataIndex: 'avatar',
        search: false,
      },
      description: {
        dataIndex: 'title',
        search: false,
      },
      subTitle: {
        dataIndex: 'labels',
        render: (_, row) => {
          return (
            <Space size={0}>
              {row.labels?.map((label: { name: string }) => (
                <Tag color="blue" key={label.name}>
                  {label.name}
                </Tag>
              ))}
            </Space>
          );
        },
        search: false,
      },
      actions: {
        render: (text, row) => [
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="link"
          >
            链路
          </a>,
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="warning"
          >
            报警
          </a>,
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="view"
          >
            查看
          </a>,
        ],
        search: false,
      },
      status: {
        // 自己扩展的字段，主要用于筛选，不在列表中显示
        title: '状态',
        valueType: 'select',
        valueEnum: {
          all: { text: '全部', status: 'Default' },
          open: {
            text: '未解决',
            status: 'Error',
          },
          closed: {
            text: '已解决',
            status: 'Success',
          },
          processing: {
            text: '解决中',
            status: 'Processing',
          },
        },
      },
    }}
  />
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Button, Tag } from 'antd';
import React from 'react';

const IconText = ({ icon, text }: { icon: any; text: string }) => (
  <span>
    {React.createElement(icon, { style: { marginInlineEnd: 8 } })}
    {text}
  </span>
);

const dataSource = [
  {
    title: '语雀的天空',
  },
  {
    title: 'Ant Design',
  },
  {
    title: '蚂蚁金服体验科技',
  },
  {
    title: 'TechUI',
  },
];

const Demo = () => {
  return (
    <ProList<{ title: string }>
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            新建
          </Button>,
        ];
      }}
      itemLayout="vertical"
      rowKey="id"
      headerTitle="竖排样式"
      dataSource={dataSource}
      metas={{
        title: {},
        description: {
          render: () => (
            <>
              <Tag>语雀专栏</Tag>
              <Tag>设计语言</Tag>
              <Tag>蚂蚁金服</Tag>
            </>
          ),
        },
        actions: {
          render: () => [
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ],
        },
        extra: {
          render: () => (
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          ),
        },
        content: {
          render: () => {
            return (
              <div>
                段落示意：蚂蚁金服设计平台
                design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
                design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态提供跨越设计与开发的体验解决方案。
              </div>
            );
          },
        },
      }}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Button, Progress, Tag } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';

const types = ['top', 'inline', 'new'];
const data = [
  '语雀的天空（top）',
  'Ant Design（inline）',
  '蚂蚁金服体验科技（new）',
  'TechUI',
].map((item, index) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
  actions: [
    <a key="invite">邀请</a>,
    <a key="operate">操作</a>,
    <a key="rest">
      <EllipsisOutlined />
    </a>,
  ],
  description: (
    <div>
      <div>top 会有小角标</div>
      <div>inline 标题字体是 normal</div>
      <div>new 会有一个入场动画</div>
    </div>
  ),
  type: types[index],
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          width: 200,
        }}
      >
        <div>发布中</div>
        <Progress percent={80} />
      </div>
    </div>
  ),
}));

const Demo = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly Key[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: Key[]) => setSelectedRowKeys(keys),
  };
  const [dataSource, setDataSource] = useState<any[]>([...data] as any[]);

  return (
    <>
      <ProList<{
        title: string;
        subTitle: JSX.Element;
        actions: JSX.Element[];
        description: JSX.Element;
        type?: 'top' | 'inline' | 'new';
        avatar: string;
        children: JSX.Element;
      }>
        metas={{
          title: {},
          subTitle: {},
          type: {},
          description: {},
          avatar: {},
          content: {},
          actions: {},
        }}
        toolBarRender={() => [
          <Button
            key="3"
            type="primary"
            onClick={() => {
              setDataSource([...data.map((item) => ({ ...item }))]);
              setTimeout(() => {
                const list = [...data.map((item) => ({ ...item }))];
                list[1].type = 'new';
                setDataSource(list);
              }, 0);
            }}
          >
            刷新
          </Button>,
        ]}
        rowKey="id"
        headerTitle="预设的列状态"
        rowSelection={rowSelection}
        dataSource={dataSource}
        expandable={{
          expandedRowKeys,
          onExpandedRowsChange: setExpandedRowKeys,
        }}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProFormRadio,
  ProFormSwitch,
  ProList,
} from '@ant-design/pro-components';
import { Progress, Tag } from 'antd';
import { useState } from 'react';

const data = [
  '语雀的天空',
  'Ant Design',
  '蚂蚁金服体验科技',
  'TechUI',
  'TechUI 2.0',
  'Bigfish',
  'Umi',
  'Ant Design Pro',
].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
  actions: [<a key="run">邀请</a>, <a key="delete">删除</a>],
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        style={{
          width: 200,
        }}
      >
        <div>发布中</div>
        <Progress percent={80} />
      </div>
    </div>
  ),
}));

export default () => {
  const [cardActionProps, setCardActionProps] = useState<'actions' | 'extra'>(
    'extra',
  );

  const [ghost, setGhost] = useState<boolean>(false);
  return (
    <div
      style={{
        backgroundColor: '#eee',
        margin: -24,
        padding: 24,
      }}
    >
      <ProFormRadio.Group
        label="actions 放置的地方"
        options={[
          {
            label: '设置为 action',
            value: 'actions',
          },
          {
            label: '设置为 extra',
            value: 'extra',
          },
        ]}
        fieldProps={{
          value: cardActionProps,
          onChange: (e) => setCardActionProps(e.target.value),
        }}
      />
      <ProFormSwitch
        label="幽灵模式"
        fieldProps={{
          checked: ghost,
          onChange: (e) => setGhost(e),
        }}
      />
      <ProList<any>
        ghost={ghost}
        itemCardProps={{
          ghost,
        }}
        pagination={{
          defaultPageSize: 8,
          showSizeChanger: false,
        }}
        showActions="hover"
        rowSelection={{}}
        grid={{ gutter: 16, column: 2 }}
        onItem={(record: any) => {
          return {
            onMouseEnter: () => {
              console.log(record);
            },
            onClick: () => {
              console.log(record);
            },
          };
        }}
        metas={{
          title: {},
          subTitle: {},
          type: {},
          avatar: {},
          content: {},
          actions: {
            cardActionProps,
          },
        }}
        headerTitle="卡片列表展示"
        dataSource={data}
      />
    </div>
  );
};

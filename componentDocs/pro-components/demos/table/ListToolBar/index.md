

import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
import { useState } from 'react';

export type TableListItem = {
  key: number;
  name: string;
  status: number;
  containers: number;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

const valueEnum = {
  all: { text: '全部' },
  付小小: { text: '付小小' },
  曲丽丽: { text: '曲丽丽' },
  林东东: { text: '林东东' },
  陈帅帅: { text: '陈帅帅' },
  兼某某: { text: '兼某某' },
};

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    status: Math.floor(Math.random() * 2),
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columnsMap: Record<string, ProColumns<TableListItem>[]> = {
  tab1: [
    {
      title: '名称',
      dataIndex: 'name',
      render: (_) => <a>{_}</a>,
    },
    {
      title: '状态',
      key: 'status1',
      dataIndex: 'status',
      valueType: 'select',
      request: () =>
        Promise.resolve([
          {
            label: '成功',
            value: 1,
          },
          {
            label: '失败',
            value: 0,
          },
        ]),
    },
    {
      title: '容器数量',
      dataIndex: 'containers',
      align: 'right',
      sorter: (a, b) => a.containers - b.containers,
    },
    {
      title: '创建人',
      dataIndex: 'creator',
      valueType: 'select',
      valueEnum,
    },
    {
      title: '操作',
      key: 'option',
      valueType: 'option',
      width: 120,
      render: () => [
        <a key="link">链路</a>,
        <a key="warn">报警</a>,
        <a key="more">
          <EllipsisOutlined />
        </a>,
      ],
    },
  ],
  tab2: [
    {
      title: '应用名称',
      dataIndex: 'name',
      render: (_) => <a>{_}</a>,
    },
    {
      title: '状态',
      key: 'status2',
      dataIndex: 'status',
      valueType: 'select',
      request: () =>
        Promise.resolve([
          {
            label: '启用',
            value: 1,
          },
          {
            label: '停用',
            value: 0,
          },
        ]),
    },
    {
      title: '创建者',
      dataIndex: 'creator',
      valueType: 'select',
      valueEnum,
    },
    {
      title: '操作',
      key: 'option',
      valueType: 'option',
      width: 120,
      render: () => [
        <a key="link">链路</a>,
        <a key="warn">报警</a>,
        <a key="more">
          <EllipsisOutlined />
        </a>,
      ],
    },
  ],
};

const Demo = () => {
  const [activeKey, setActiveKey] = useState<string>('tab1');

  return (
    <ProTable<TableListItem>
      columns={columnsMap[activeKey]}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      toolbar={{
        title: '标签',
        multipleLine: true,
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        tabs: {
          activeKey,
          onChange: (key) => setActiveKey(key as string),
          items: [
            {
              key: 'tab1',
              tab: '标签一',
            },
            {
              key: 'tab2',
              tab: '标签二',
            },
          ],
        },
      }}
      rowKey="key"
      search={false}
    />
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 标签工具栏 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>LightFilter</strong>: 轻量过滤器组件
      </li>
      <li>
        <strong>ProFormDatePicker</strong>: 专业表单日期选择器组件
      </li>
      <li>
        <strong>标签工具栏</strong>: 展示标签工具栏功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>标签工具栏特点：</h4>
    <ul>
      <li>
        <strong>标签切换</strong>: 支持标签切换
      </li>
      <li>
        <strong>多行布局</strong>: 支持多行布局
      </li>
      <li>
        <strong>过滤器</strong>: 支持过滤器
      </li>
      <li>
        <strong>动态列</strong>: 支持动态列配置
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>分类展示</strong>: 分类展示需求
      </li>
      <li>
        <strong>多视图切换</strong>: 多视图切换功能
      </li>
      <li>
        <strong>数据分组</strong>: 数据分组管理
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Dropdown } from 'antd';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
  {
    title: '操作',
    key: 'option',
    valueType: 'option',
    width: 120,
    render: () => [
      <a key="link">链路</a>,
      <a key="warn">报警</a>,
      <a key="more">
        <EllipsisOutlined />
      </a>,
    ],
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      headerTitle="两行的情况"
      toolbar={{
        multipleLine: true,
        search: {
          onSearch: (value: string) => {
            alert(value);
          },
        },
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        actions: [
          <Dropdown
            key="overlay"
            menu={{
              items: [
                {
                  label: '菜单',
                  key: '1',
                },
                {
                  label: '列表',
                  key: '2',
                },
                {
                  label: '表单',
                  key: '3',
                },
              ],
              onClick: () => alert('menu click'),
            }}
          >
            <Button>
              移动自
              <DownOutlined
                style={{
                  marginInlineStart: 8,
                }}
              />
            </Button>
          </Dropdown>,
          <Button
            key="add"
            type="primary"
            onClick={() => {
              alert('add');
            }}
          >
            添加
          </Button>,
        ],
      }}
      rowKey="key"
      search={false}
    />
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 多行工具栏 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>LightFilter</strong>: 轻量过滤器组件
      </li>
      <li>
        <strong>ProFormDatePicker</strong>: 专业表单日期选择器组件
      </li>
      <li>
        <strong>Dropdown</strong>: 下拉菜单组件
      </li>
      <li>
        <strong>多行工具栏</strong>: 展示多行工具栏功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>多行工具栏特点：</h4>
    <ul>
      <li>
        <strong>多行布局</strong>: 支持多行布局
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>过滤器</strong>: 支持过滤器
      </li>
      <li>
        <strong>下拉菜单</strong>: 支持下拉菜单
      </li>
      <li>
        <strong>操作按钮</strong>: 支持操作按钮
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>复杂操作</strong>: 复杂操作需求
      </li>
      <li>
        <strong>空间利用</strong>: 空间利用优化
      </li>
      <li>
        <strong>功能丰富</strong>: 功能丰富的表格
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
import { Button } from 'antd';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
  {
    title: '操作',
    key: 'option',
    valueType: 'option',
    width: 120,
    render: () => [
      <a key="link">链路</a>,
      <a key="warn">报警</a>,
      <a key="more">
        <EllipsisOutlined />
      </a>,
    ],
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      toolbar={{
        search: {
          onSearch: (value) => {
            alert(value);
          },
        },
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        actions: [
          <Button
            key="primary"
            type="primary"
            onClick={() => {
              alert('add');
            }}
          >
            添加
          </Button>,
        ],
        menu: {
          type: 'tab',
          items: [
            {
              label: '全部事项',
              key: 'all',
            },
            {
              label: '已办事项',
              key: 'done',
            },
            {
              key: 'tab1',
              label: <span>应用</span>,
            },
            {
              key: 'tab2',
              label: <span>项目</span>,
            },
            {
              key: 'tab3',
              label: <span>文章</span>,
            },
            {
              key: 'tab4',
              label: <span>文章1</span>,
            },
            {
              key: 'tab5',
              label: <span>文章2</span>,
            },
            {
              key: 'tab6',
              label: <span>文章3</span>,
            },
          ],
          onChange: (activeKey) => {
            console.log('activeKey', activeKey);
          },
        },
      }}
      rowKey="key"
      search={false}
    />
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 菜单工具栏 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>LightFilter</strong>: 轻量过滤器组件
      </li>
      <li>
        <strong>ProFormDatePicker</strong>: 专业表单日期选择器组件
      </li>
      <li>
        <strong>菜单工具栏</strong>: 展示菜单工具栏功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>菜单工具栏特点：</h4>
    <ul>
      <li>
        <strong>标签菜单</strong>: 支持标签菜单
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>过滤器</strong>: 支持过滤器
      </li>
      <li>
        <strong>操作按钮</strong>: 支持操作按钮
      </li>
      <li>
        <strong>菜单切换</strong>: 支持菜单切换
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>分类管理</strong>: 分类管理系统
      </li>
      <li>
        <strong>标签切换</strong>: 标签切换功能
      </li>
      <li>
        <strong>多视图展示</strong>: 多视图展示需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  EllipsisOutlined,
  FullscreenOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
import { Button } from 'antd';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: () => [
      <a key="link">链路</a>,
      <a key="warn">报警</a>,
      <a key="more">
        <EllipsisOutlined />
      </a>,
    ],
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      toolbar={{
        title: '这里是标题',
        subTitle: '这里是子标题',
        tooltip: '这是一个段描述',
        search: {
          onSearch: (value: string) => {
            alert(value);
          },
        },
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        actions: [
          <Button
            key="key"
            type="primary"
            onClick={() => {
              alert('add');
            }}
          >
            添加
          </Button>,
        ],
        settings: [
          {
            icon: <SettingOutlined />,
            tooltip: '设置',
          },
          {
            icon: <FullscreenOutlined />,
            tooltip: '全屏',
          },
        ],
      }}
      rowKey="key"
      search={false}
    />
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 基础工具栏 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>LightFilter</strong>: 轻量过滤器组件
      </li>
      <li>
        <strong>ProFormDatePicker</strong>: 专业表单日期选择器组件
      </li>
      <li>
        <strong>基础工具栏</strong>: 展示基础工具栏功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>基础工具栏特点：</h4>
    <ul>
      <li>
        <strong>标题和子标题</strong>: 支持标题和子标题
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>过滤器</strong>: 支持过滤器
      </li>
      <li>
        <strong>操作按钮</strong>: 支持操作按钮
      </li>
      <li>
        <strong>设置选项</strong>: 支持设置选项
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>数据管理</strong>: 数据管理系统
      </li>
      <li>
        <strong>列表展示</strong>: 列表展示功能
      </li>
      <li>
        <strong>操作工具</strong>: 操作工具集合
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
import { Button } from 'antd';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: () => [
      <a key="link">链路</a>,
      <a key="warn">报警</a>,
      <a key="more">
        <EllipsisOutlined />
      </a>,
    ],
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      toolbar={{
        search: {
          onSearch: (value: string) => {
            alert(value);
          },
        },
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        actions: [
          <Button
            key="primary"
            type="primary"
            onClick={() => {
              alert('add');
            }}
          >
            添加
          </Button>,
        ],
      }}
      rowKey="key"
      search={false}
    />
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 无标题工具栏 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>LightFilter</strong>: 轻量过滤器组件
      </li>
      <li>
        <strong>ProFormDatePicker</strong>: 专业表单日期选择器组件
      </li>
      <li>
        <strong>无标题工具栏</strong>: 展示无标题工具栏功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>无标题工具栏特点：</h4>
    <ul>
      <li>
        <strong>简洁布局</strong>: 简洁的布局设计
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>过滤器</strong>: 支持过滤器
      </li>
      <li>
        <strong>操作按钮</strong>: 支持操作按钮
      </li>
      <li>
        <strong>无标题</strong>: 无标题显示
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>简洁界面</strong>: 简洁界面需求
      </li>
      <li>
        <strong>嵌入式表格</strong>: 嵌入式表格展示
      </li>
      <li>
        <strong>空间节省</strong>: 空间节省需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
import { useState } from 'react';

export type TableListItem = {
  key: number;
  name: string;
  status: number;
  containers: number;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

const valueEnum = {
  all: { text: '全部' },
  付小小: { text: '付小小' },
  曲丽丽: { text: '曲丽丽' },
  林东东: { text: '林东东' },
  陈帅帅: { text: '陈帅帅' },
  兼某某: { text: '兼某某' },
};

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    status: Math.floor(Math.random() * 2),
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columnsMap: Record<string, ProColumns<TableListItem>[]> = {
  tab1: [
    {
      title: '名称',
      dataIndex: 'name',
      render: (_) => <a>{_}</a>,
    },
    {
      title: '状态',
      key: 'status1',
      dataIndex: 'status',
      valueType: 'select',
      request: () =>
        Promise.resolve([
          {
            label: '成功',
            value: 1,
          },
          {
            label: '失败',
            value: 0,
          },
        ]),
    },
    {
      title: '容器数量',
      dataIndex: 'containers',
      align: 'right',
      sorter: (a, b) => a.containers - b.containers,
    },
    {
      title: '创建人',
      dataIndex: 'creator',
      valueType: 'select',
      valueEnum,
    },
    {
      title: '操作',
      key: 'option',
      valueType: 'option',
      width: 120,
      render: () => [
        <a key="link">链路</a>,
        <a key="warn">报警</a>,
        <a key="more">
          <EllipsisOutlined />
        </a>,
      ],
    },
  ],
  tab2: [
    {
      title: '应用名称',
      dataIndex: 'name',
      render: (_) => <a>{_}</a>,
    },
    {
      title: '状态',
      key: 'status2',
      dataIndex: 'status',
      valueType: 'select',
      request: () =>
        Promise.resolve([
          {
            label: '启用',
            value: 1,
          },
          {
            label: '停用',
            value: 0,
          },
        ]),
    },
    {
      title: '创建者',
      dataIndex: 'creator',
      valueType: 'select',
      valueEnum,
    },
    {
      title: '操作',
      key: 'option',
      valueType: 'option',
      width: 120,
      render: () => [
        <a key="link">链路</a>,
        <a key="warn">报警</a>,
        <a key="more">
          <EllipsisOutlined />
        </a>,
      ],
    },
  ],
};

const Demo = () => {
  const [activeKey, setActiveKey] = useState<string>('tab1');

  return (
    <ProTable<TableListItem>
      columns={columnsMap[activeKey]}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      toolbar={{
        title: '标签',
        multipleLine: true,
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        tabs: {
          activeKey,
          onChange: (key) => setActiveKey(key as string),
          items: [
            {
              key: 'tab1',
              tab: '标签一',
            },
            {
              key: 'tab2',
              tab: '标签二',
            },
          ],
        },
      }}
      rowKey="key"
      search={false}
    />
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 标签工具栏 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>LightFilter</strong>: 轻量过滤器组件
      </li>
      <li>
        <strong>ProFormDatePicker</strong>: 专业表单日期选择器组件
      </li>
      <li>
        <strong>标签工具栏</strong>: 展示标签工具栏功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>标签工具栏特点：</h4>
    <ul>
      <li>
        <strong>标签切换</strong>: 支持标签切换
      </li>
      <li>
        <strong>多行布局</strong>: 支持多行布局
      </li>
      <li>
        <strong>过滤器</strong>: 支持过滤器
      </li>
      <li>
        <strong>动态列</strong>: 支持动态列配置
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>分类展示</strong>: 分类展示需求
      </li>
      <li>
        <strong>多视图切换</strong>: 多视图切换功能
      </li>
      <li>
        <strong>数据分组</strong>: 数据分组管理
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Dropdown } from 'antd';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
  {
    title: '操作',
    key: 'option',
    valueType: 'option',
    width: 120,
    render: () => [
      <a key="link">链路</a>,
      <a key="warn">报警</a>,
      <a key="more">
        <EllipsisOutlined />
      </a>,
    ],
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      headerTitle="两行的情况"
      toolbar={{
        multipleLine: true,
        search: {
          onSearch: (value: string) => {
            alert(value);
          },
        },
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        actions: [
          <Dropdown
            key="overlay"
            menu={{
              items: [
                {
                  label: '菜单',
                  key: '1',
                },
                {
                  label: '列表',
                  key: '2',
                },
                {
                  label: '表单',
                  key: '3',
                },
              ],
              onClick: () => alert('menu click'),
            }}
          >
            <Button>
              移动自
              <DownOutlined
                style={{
                  marginInlineStart: 8,
                }}
              />
            </Button>
          </Dropdown>,
          <Button
            key="add"
            type="primary"
            onClick={() => {
              alert('add');
            }}
          >
            添加
          </Button>,
        ],
      }}
      rowKey="key"
      search={false}
    />
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 多行工具栏 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>LightFilter</strong>: 轻量过滤器组件
      </li>
      <li>
        <strong>ProFormDatePicker</strong>: 专业表单日期选择器组件
      </li>
      <li>
        <strong>Dropdown</strong>: 下拉菜单组件
      </li>
      <li>
        <strong>多行工具栏</strong>: 展示多行工具栏功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>多行工具栏特点：</h4>
    <ul>
      <li>
        <strong>多行布局</strong>: 支持多行布局
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>过滤器</strong>: 支持过滤器
      </li>
      <li>
        <strong>下拉菜单</strong>: 支持下拉菜单
      </li>
      <li>
        <strong>操作按钮</strong>: 支持操作按钮
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>复杂操作</strong>: 复杂操作需求
      </li>
      <li>
        <strong>空间利用</strong>: 空间利用优化
      </li>
      <li>
        <strong>功能丰富</strong>: 功能丰富的表格
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
import { Button } from 'antd';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
  {
    title: '操作',
    key: 'option',
    valueType: 'option',
    width: 120,
    render: () => [
      <a key="link">链路</a>,
      <a key="warn">报警</a>,
      <a key="more">
        <EllipsisOutlined />
      </a>,
    ],
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      toolbar={{
        search: {
          onSearch: (value) => {
            alert(value);
          },
        },
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        actions: [
          <Button
            key="primary"
            type="primary"
            onClick={() => {
              alert('add');
            }}
          >
            添加
          </Button>,
        ],
        menu: {
          type: 'tab',
          items: [
            {
              label: '全部事项',
              key: 'all',
            },
            {
              label: '已办事项',
              key: 'done',
            },
            {
              key: 'tab1',
              label: <span>应用</span>,
            },
            {
              key: 'tab2',
              label: <span>项目</span>,
            },
            {
              key: 'tab3',
              label: <span>文章</span>,
            },
            {
              key: 'tab4',
              label: <span>文章1</span>,
            },
            {
              key: 'tab5',
              label: <span>文章2</span>,
            },
            {
              key: 'tab6',
              label: <span>文章3</span>,
            },
          ],
          onChange: (activeKey) => {
            console.log('activeKey', activeKey);
          },
        },
      }}
      rowKey="key"
      search={false}
    />
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 菜单工具栏 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>LightFilter</strong>: 轻量过滤器组件
      </li>
      <li>
        <strong>ProFormDatePicker</strong>: 专业表单日期选择器组件
      </li>
      <li>
        <strong>菜单工具栏</strong>: 展示菜单工具栏功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>菜单工具栏特点：</h4>
    <ul>
      <li>
        <strong>标签菜单</strong>: 支持标签菜单
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>过滤器</strong>: 支持过滤器
      </li>
      <li>
        <strong>操作按钮</strong>: 支持操作按钮
      </li>
      <li>
        <strong>菜单切换</strong>: 支持菜单切换
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>分类管理</strong>: 分类管理系统
      </li>
      <li>
        <strong>标签切换</strong>: 标签切换功能
      </li>
      <li>
        <strong>多视图展示</strong>: 多视图展示需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  EllipsisOutlined,
  FullscreenOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
import { Button } from 'antd';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: () => [
      <a key="link">链路</a>,
      <a key="warn">报警</a>,
      <a key="more">
        <EllipsisOutlined />
      </a>,
    ],
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      toolbar={{
        title: '这里是标题',
        subTitle: '这里是子标题',
        tooltip: '这是一个段描述',
        search: {
          onSearch: (value: string) => {
            alert(value);
          },
        },
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        actions: [
          <Button
            key="key"
            type="primary"
            onClick={() => {
              alert('add');
            }}
          >
            添加
          </Button>,
        ],
        settings: [
          {
            icon: <SettingOutlined />,
            tooltip: '设置',
          },
          {
            icon: <FullscreenOutlined />,
            tooltip: '全屏',
          },
        ],
      }}
      rowKey="key"
      search={false}
    />
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 基础工具栏 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>LightFilter</strong>: 轻量过滤器组件
      </li>
      <li>
        <strong>ProFormDatePicker</strong>: 专业表单日期选择器组件
      </li>
      <li>
        <strong>基础工具栏</strong>: 展示基础工具栏功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>基础工具栏特点：</h4>
    <ul>
      <li>
        <strong>标题和子标题</strong>: 支持标题和子标题
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>过滤器</strong>: 支持过滤器
      </li>
      <li>
        <strong>操作按钮</strong>: 支持操作按钮
      </li>
      <li>
        <strong>设置选项</strong>: 支持设置选项
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>数据管理</strong>: 数据管理系统
      </li>
      <li>
        <strong>列表展示</strong>: 列表展示功能
      </li>
      <li>
        <strong>操作工具</strong>: 操作工具集合
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
import { Button } from 'antd';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: () => [
      <a key="link">链路</a>,
      <a key="warn">报警</a>,
      <a key="more">
        <EllipsisOutlined />
      </a>,
    ],
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      toolbar={{
        search: {
          onSearch: (value: string) => {
            alert(value);
          },
        },
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        actions: [
          <Button
            key="primary"
            type="primary"
            onClick={() => {
              alert('add');
            }}
          >
            添加
          </Button>,
        ],
      }}
      rowKey="key"
      search={false}
    />
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 无标题工具栏 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>LightFilter</strong>: 轻量过滤器组件
      </li>
      <li>
        <strong>ProFormDatePicker</strong>: 专业表单日期选择器组件
      </li>
      <li>
        <strong>无标题工具栏</strong>: 展示无标题工具栏功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>无标题工具栏特点：</h4>
    <ul>
      <li>
        <strong>简洁布局</strong>: 简洁的布局设计
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>过滤器</strong>: 支持过滤器
      </li>
      <li>
        <strong>操作按钮</strong>: 支持操作按钮
      </li>
      <li>
        <strong>无标题</strong>: 无标题显示
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>简洁界面</strong>: 简洁界面需求
      </li>
      <li>
        <strong>嵌入式表格</strong>: 嵌入式表格展示
      </li>
      <li>
        <strong>空间节省</strong>: 空间节省需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

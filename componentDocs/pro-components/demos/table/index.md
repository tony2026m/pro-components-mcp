

import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, ConfigProvider, Space, Tag } from 'antd';
import arEGIntl from 'antd/lib/locale/ar_EG';
import { useRef } from 'react';
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

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'العنوان',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tooltip: 'سيتم تقليص العنوان في حال كان طويل جدًا',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'هذا الحقل مطلوب',
        },
      ],
    },
    width: '30%',
    search: false,
  },
  {
    title: 'الحالة',
    dataIndex: 'state',
    initialValue: 'open',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: 'الكل', status: 'Default' },
      open: {
        text: 'غير محلولة',
        status: 'Error',
      },
      closed: {
        text: 'تم حلها',
        status: 'Success',
      },
      processing: {
        text: 'نعمل عليها',
        status: 'Processing',
      },
    },
  },
  {
    title: 'التسمية',
    dataIndex: 'labels',
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: 'التشغيل',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="link">
        رابط
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: 'نسخ' },
          { key: 'delete', name: 'حذف' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();

  return (
    <ConfigProvider locale={arEGIntl} direction="rtl">
      <ProTable<GithubIssueItem>
        columns={columns}
        actionRef={actionRef}
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
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        dateFormatter="string"
        headerTitle="نموذج احترافي"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            جديد
          </Button>,
        ]}
      />
    </ConfigProvider>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable RTL 表格 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>ConfigProvider</strong>: 配置提供者组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>RTL表格</strong>: 展示RTL表格功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>RTL表格特点：</h4>
    <ul>
      <li>
        <strong>RTL支持</strong>: 支持RTL布局
      </li>
      <li>
        <strong>阿拉伯语</strong>: 支持阿拉伯语
      </li>
      <li>
        <strong>国际化</strong>: 支持国际化
      </li>
      <li>
        <strong>方向控制</strong>: 支持方向控制
      </li>
      <li>
        <strong>本地化</strong>: 支持本地化
      </li>
      <li>
        <strong>多语言</strong>: 支持多语言
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>阿拉伯语应用</strong>: 阿拉伯语应用需求
      </li>
      <li>
        <strong>RTL布局</strong>: RTL布局需求
      </li>
      <li>
        <strong>国际化系统</strong>: 国际化系统
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { LoadingOutlined, ReloadOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  status: string;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
  });
}

const timeAwait = (waitTime: number): Promise<void> =>
  new Promise((res) =>
    window.setTimeout(() => {
      res();
    }, waitTime),
  );

const columns: ProColumns<TableListItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
    width: 80,
  },
  {
    title: '状态',
    dataIndex: 'status',
    initialValue: 'all',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '进度',
    key: 'progress',
    dataIndex: 'progress',
    valueType: (item) => ({
      type: 'progress',
      status: item.status !== 'error' ? 'active' : 'exception',
    }),
  },
  {
    title: '时间',
    key: 'since',
    children: [
      {
        title: '创建时间',
        key: 'createdAt',
        dataIndex: 'createdAt',
        valueType: 'date',
      },
      {
        title: '更新时间',
        key: 'updatedAt',
        dataIndex: 'updatedAt',
        valueType: 'date',
      },
    ],
  },
];

const Demo = () => {
  const [time, setTime] = useState(() => Date.now());
  const [polling, setPolling] = useState<number>(2000);
  return (
    <ProTable<TableListItem>
      columns={columns}
      rowKey="key"
      pagination={{
        showSizeChanger: true,
      }}
      polling={polling}
      request={async () => {
        await timeAwait(2000);
        setTime(Date.now());
        return {
          data: tableListDataSource,
          success: true,
          total: tableListDataSource.length,
        };
      }}
      dateFormatter="string"
      headerTitle={`上次更新时间：${dayjs(time).format('HH:mm:ss')}`}
      toolBarRender={() => [
        <Button
          key="3"
          type="primary"
          onClick={() => {
            if (polling) {
              setPolling(0);
              return;
            }
            setPolling(2000);
          }}
        >
          {polling ? <LoadingOutlined /> : <ReloadOutlined />}
          {polling ? '停止轮询' : '开始轮询'}
        </Button>,
      ]}
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
    <h4>ProTable 轮询 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>轮询</strong>: 展示轮询功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>polling</strong>: 轮询配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>轮询特点：</h4>
    <ul>
      <li>
        <strong>自动轮询</strong>: 支持自动轮询
      </li>
      <li>
        <strong>手动控制</strong>: 支持手动控制
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
      <li>
        <strong>进度显示</strong>: 支持进度显示
      </li>
      <li>
        <strong>时间更新</strong>: 支持时间更新
      </li>
      <li>
        <strong>动态配置</strong>: 支持动态配置
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>实时数据</strong>: 实时数据更新
      </li>
      <li>
        <strong>监控系统</strong>: 监控系统需求
      </li>
      <li>
        <strong>状态跟踪</strong>: 状态跟踪功能
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Result, Switch } from 'antd';
import type { ErrorInfo } from 'react';
import React, { useState } from 'react';

class CustomBoundary extends React.Component<
  Record<string, any>,
  { hasError: boolean; errorInfo: string }
> {
  state = { hasError: false, errorInfo: '' };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorInfo: error.message };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Result
          icon={
            <img
              width={256}
              src="https://gw.alipayobjects.com/zos/antfincdn/zIgkN%26mpMZ/shibaizhuangtaizuo.png"
            />
          }
          style={{
            height: '100%',
            background: '#fff',
          }}
          title="错误处理"
          extra={
            <>
              <div
                style={{
                  maxWidth: 620,
                  textAlign: 'start',
                  backgroundColor: 'rgba(255,229,100,0.3)',
                  borderInlineStartColor: '#ffe564',
                  borderInlineStartWidth: '9px',
                  borderInlineStartStyle: 'solid',
                  padding: '20px 45px 20px 26px',
                  margin: 'auto',
                  marginBlockEnd: '30px',
                  marginBlockStart: '20px',
                }}
              >
                <p>注意</p>
                <p>
                  错误边界<strong>无法</strong>捕获以下场景中产生的错误：
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                  }}
                >
                  <li>
                    事件处理（
                    <a href="https://zh-hans.reactjs.org/docs/error-boundaries.html#how-about-event-handlers#how-about-event-handlers">
                      了解更多
                    </a>
                    ）
                  </li>
                  <li>
                    异步代码（例如 <code>setTimeout</code> 或{' '}
                    <code>requestAnimationFrame</code> 回调函数）
                  </li>
                  <li>服务端渲染</li>
                  <li>它自身抛出来的错误（并非它的子组件）</li>
                </ul>
              </div>
              <Button
                danger
                type="primary"
                onClick={() => {
                  window.location.reload();
                }}
              >
                刷新页面
              </Button>
            </>
          }
        />
      );
    }
    return this.props.children;
  }
}

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

const ErrorTrigger = () => {
  // default to throw error for snapshot test
  const [error, setError] = useState<boolean>(true);
  if (error) throw new Error('渲染发生了错误');
  return (
    <Button
      danger
      type="primary"
      onClick={() => {
        setError(true);
      }}
    >
      触发错误
    </Button>
  );
};

const Demo = () => {
  const [custom, setCustom] = useState(true);
  return (
    <>
      <Switch
        checkedChildren="使用自定义错误边界"
        unCheckedChildren="使用默认错误边界"
        checked={custom}
        onChange={(checked) => setCustom(checked)}
      />
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
        ErrorBoundary={custom ? CustomBoundary : undefined}
        headerTitle={<ErrorTrigger />}
        rowKey="key"
        search={false}
      />
    </>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 错误边界 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Switch</strong>: 开关组件
      </li>
      <li>
        <strong>Result</strong>: 结果组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>错误边界</strong>: 展示错误边界功能
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
        <strong>ErrorBoundary</strong>: 错误边界配置
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>错误边界特点：</h4>
    <ul>
      <li>
        <strong>自定义边界</strong>: 支持自定义错误边界
      </li>
      <li>
        <strong>错误捕获</strong>: 支持错误捕获
      </li>
      <li>
        <strong>错误处理</strong>: 支持错误处理
      </li>
      <li>
        <strong>容错机制</strong>: 支持容错机制
      </li>
      <li>
        <strong>错误展示</strong>: 支持错误展示
      </li>
      <li>
        <strong>错误恢复</strong>: 支持错误恢复
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>错误处理</strong>: 错误处理需求
      </li>
      <li>
        <strong>稳定性保证</strong>: 稳定性保证
      </li>
      <li>
        <strong>用户体验</strong>: 用户体验优化
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DownOutlined } from '@ant-design/icons';
import type {
  ProColumnType,
  ProFormInstance,
} from '@ant-design/pro-components';
import {
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormDigit,
  ProFormGroup,
  ProFormList,
  ProFormRadio,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
  ProTable,
  useDebounceFn,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';

const valueTypeArray = [
  'password',
  'money',
  'textarea',
  'option',
  'date',
  'dateWeek',
  'dateMonth',
  'dateQuarter',
  'dateYear',
  'dateRange',
  'dateTimeRange',
  'dateTime',
  'time',
  'timeRange',
  'text',
  'select',
  'checkbox',
  'rate',
  'radio',
  'radioButton',
  'index',
  'indexBorder',
  'progress',
  'percent',
  'digit',
  'second',
  'avatar',
  'code',
  'switch',
  'fromNow',
  'image',
  'jsonCode',
];

type DataType = {
  age: number;
  address: string;
  name: string;
  time: number;
  key: number;
  description: string;
};

const columns: ProColumnType<DataType>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'time',
    dataIndex: 'time',
    valueType: 'date',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    valueType: 'select',
    filters: true,
    onFilter: true,
    valueEnum: {
      london: {
        text: '伦敦',
      },
      'New York': {
        text: '纽约',
      },
    },
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    valueType: 'option',
    render: () => [
      <a key="delete">Delete</a>,
      <a key="link" className="ant-dropdown-link">
        More actions <DownOutlined />
      </a>,
    ],
  },
];

const genData = (total: number) => {
  if (total < 1) {
    return [];
  }
  const data: DataType[] = [];
  for (let i = 1; i <= total; i += 1) {
    data.push({
      key: i,
      name: 'John Brown',
      age: i + 10,
      time: 1661136793649 + i * 1000,
      address: i % 2 === 0 ? 'london' : 'New York',
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
  }
  return data;
};

const initData = {
  bordered: true,
  loading: false,
  columns,
  pagination: {
    show: true,
    pageSize: 5,
    current: 1,
    total: 100,
  },
  size: 'small',
  expandable: false,
  headerTitle: '高级表格',
  tooltip: '高级表格 tooltip',
  showHeader: true,
  footer: true,
  rowSelection: {},
  scroll: false,
  hasData: true,
  tableLayout: undefined,
  toolBarRender: true,
  search: {
    show: true,
    span: 12,
    collapseRender: true,
    labelWidth: 80,
    filterType: 'query',
    layout: 'horizontal',
  },
  options: {
    show: true,
    density: true,
    fullScreen: true,
    setting: true,
  },
};

const DynamicSettings = () => {
  const ref = useRef<ProFormInstance>();

  const [config, setConfig] = useState<any>(initData);

  /** 去抖配置 */
  const updateConfig = useDebounceFn(async (state) => {
    setConfig(state);
  }, 20);

  const tableColumns = (config.columns || columns)?.map((item: any) => ({
    ...item,
    ellipsis: config.ellipsis,
  }));

  return (
    <ProCard
      split="vertical"
      variant="outlined"
      headerBordered
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <ProCard
        style={{
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <ProTable
          {...config}
          formRef={ref}
          pagination={
            config.pagination?.show
              ? config.pagination
              : {
                  pageSize: 5,
                }
          }
          search={config.search?.show ? config.search : {}}
          expandable={
            config.expandable && {
              expandedRowRender: (record: DataType) => (
                <p>{record.description}</p>
              ),
            }
          }
          options={config.options?.show ? config.options : false}
          toolBarRender={
            config?.toolBarRender
              ? () => [
                  <Button key="refresh" type="primary">
                    刷新
                  </Button>,
                ]
              : false
          }
          footer={config.footer ? () => 'Here is footer' : false}
          headerTitle={config.headerTitle}
          columns={tableColumns}
          dataSource={genData(config.pagination?.total || 10)}
          scroll={config.scroll}
        />
      </ProCard>
      <ProForm
        layout="inline"
        initialValues={initData}
        submitter={false}
        colon={false}
        onValuesChange={(_, values) => updateConfig.run(values)}
      >
        <ProCard
          colSpan="470px"
          style={{
            height: '100vh',
            overflow: 'auto',
            boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)',
            top: 0,
            right: 0,
            width: 470,
          }}
          tabs={{
            items: [
              {
                label: '基本配置',
                key: 'tab1',
                children: (
                  <>
                    <ProForm.Group
                      title="表格配置"
                      size={0}
                      collapsible
                      direction="horizontal"
                      labelLayout="twoLine"
                    >
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="边框"
                        tooltip="bordered"
                        name="bordered"
                      />
                      <ProFormRadio.Group
                        tooltip={`size="middle"`}
                        radioType="button"
                        fieldProps={{
                          size: 'small',
                        }}
                        label="尺寸"
                        options={[
                          {
                            label: '大',
                            value: 'default',
                          },
                          {
                            label: '中',
                            value: 'middle',
                          },
                          {
                            label: '小',
                            value: 'small',
                          },
                        ]}
                        name="size"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="加载中"
                        tooltip="loading"
                        name="loading"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="显示标题"
                        tooltip="showHeader"
                        name="showHeader"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="页脚"
                        tooltip="footer"
                        name="footer"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="支持展开"
                        tooltip="expandable"
                        name="expandable"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="行选择"
                        tooltip="rowSelection"
                        name="rowSelection"
                      />
                    </ProForm.Group>
                    <ProForm.Group
                      size={0}
                      collapsible
                      direction="horizontal"
                      labelLayout="twoLine"
                      tooltip="toolBarRender={false}"
                      title="工具栏"
                      extra={
                        <ProFormSwitch
                          fieldProps={{
                            size: 'small',
                          }}
                          noStyle
                          name="toolBarRender"
                        />
                      }
                    >
                      <ProFormText
                        fieldProps={{
                          size: 'small',
                        }}
                        label="表格标题"
                        name="headerTitle"
                        tooltip="headerTitle={false}"
                      />
                      <ProFormText
                        fieldProps={{
                          size: 'small',
                        }}
                        label="表格的tooltip"
                        name="tooltip"
                        tooltip="tooltip={false}"
                      />

                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="Icon 显示"
                        name={['options', 'show']}
                        tooltip="options={false}"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="密度 Icon"
                        name={['options', 'density']}
                        tooltip="options={{ density:false }}"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="keyWords"
                        name={['options', 'search']}
                        tooltip="options={{ search:'keyWords' }}"
                      />
                      <ProFormSwitch
                        label="全屏 Icon"
                        fieldProps={{
                          size: 'small',
                        }}
                        name={['options', 'fullScreen']}
                        tooltip="options={{ fullScreen:false }}"
                      />
                      <ProFormSwitch
                        label="列设置 Icon"
                        fieldProps={{
                          size: 'small',
                        }}
                        tooltip="options={{ setting:false }}"
                        name={['options', 'setting']}
                      />
                    </ProForm.Group>
                  </>
                ),
              },
              {
                label: '表单配置',
                key: 'tab3',
                children: (
                  <ProForm.Group
                    title="查询表单"
                    size={0}
                    collapsible
                    tooltip="search={false}"
                    direction="horizontal"
                    labelLayout="twoLine"
                    extra={
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        noStyle
                        name={['search', 'show']}
                      />
                    }
                  >
                    <ProFormText
                      label="查询按钮文案"
                      fieldProps={{
                        size: 'small',
                      }}
                      tooltip={`search={{searchText:"查询"}}`}
                      name={['search', 'searchText']}
                    />
                    <ProFormText
                      label="重置按钮文案"
                      fieldProps={{
                        size: 'small',
                      }}
                      tooltip={`search={{resetText:"重置"}}`}
                      name={['search', 'resetText']}
                    />
                    <ProFormSwitch
                      fieldProps={{
                        size: 'small',
                      }}
                      label="收起按钮"
                      tooltip={`search={{collapseRender:false}}`}
                      name={['search', 'collapseRender']}
                    />
                    <ProFormSwitch
                      fieldProps={{
                        size: 'small',
                      }}
                      label="表单收起"
                      name={['search', 'collapsed']}
                      tooltip={`search={{collapsed:false}}`}
                    />
                    <ProFormSelect
                      fieldProps={{
                        size: 'small',
                      }}
                      tooltip={`search={{span:8}}`}
                      options={[
                        {
                          label: '24',
                          value: 24,
                        },
                        {
                          label: '12',
                          value: 12,
                        },
                        {
                          label: '8',
                          value: 8,
                        },
                        {
                          label: '6',
                          value: 6,
                        },
                      ]}
                      label="表单栅格"
                      name={['search', 'span']}
                    />
                    <ProFormRadio.Group
                      radioType="button"
                      fieldProps={{
                        size: 'small',
                      }}
                      name={['search', 'layout']}
                      tooltip={`search={{layout:"${config.search?.layout}"}}`}
                      options={[
                        {
                          label: '垂直',
                          value: 'vertical',
                        },
                        {
                          label: '水平',
                          value: 'horizontal',
                        },
                      ]}
                      label="表单布局"
                    />
                    <ProFormRadio.Group
                      radioType="button"
                      fieldProps={{
                        size: 'small',
                      }}
                      name={['search', 'filterType']}
                      tooltip={`search={{filterType:"light"}}`}
                      options={[
                        {
                          label: '默认',
                          value: 'query',
                        },
                        {
                          label: '轻量',
                          value: 'light',
                        },
                      ]}
                      label="表单类型"
                    />
                  </ProForm.Group>
                ),
              },
              {
                label: '数据配置',
                key: 'tab2',
                children: (
                  <ProForm.Group
                    title="分页器"
                    size={0}
                    collapsible
                    tooltip="pagination={}"
                    direction="horizontal"
                    labelLayout="twoLine"
                    extra={
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        noStyle
                        name={['pagination', 'show']}
                      />
                    }
                  >
                    <ProFormRadio.Group
                      tooltip={`pagination={size:"middle"}`}
                      radioType="button"
                      fieldProps={{
                        size: 'small',
                      }}
                      label="尺寸"
                      options={[
                        {
                          label: '默认',
                          value: 'default',
                        },
                        {
                          label: '小',
                          value: 'small',
                        },
                      ]}
                      name={['pagination', 'size']}
                    />
                    <ProFormDigit
                      fieldProps={{
                        size: 'small',
                      }}
                      label="页码"
                      tooltip={`pagination={{ current:10 }}`}
                      name={['pagination', 'current']}
                    />
                    <ProFormDigit
                      fieldProps={{
                        size: 'small',
                      }}
                      label="每页数量"
                      tooltip={`pagination={{ pageSize:10 }}`}
                      name={['pagination', 'pageSize']}
                    />
                    <ProFormDigit
                      fieldProps={{
                        size: 'small',
                      }}
                      label="数据总数"
                      tooltip={`pagination={{ total:100 }}`}
                      name={['pagination', 'total']}
                    />
                  </ProForm.Group>
                ),
              },
              {
                label: '列配置',
                key: 'tab4',
                children: (
                  <ProFormList
                    name="columns"
                    itemRender={({ listDom, action }) => {
                      return (
                        <ProCard
                          variant="outlined"
                          style={{
                            marginBlockEnd: 8,
                            position: 'relative',
                          }}
                          styles={{
                            body: {
                              padding: 8,
                              paddingInlineEnd: 16,
                              paddingBlockStart: 16,
                            },
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              top: -4,
                              right: 2,
                            }}
                          >
                            {action}
                          </div>
                          {listDom}
                        </ProCard>
                      );
                    }}
                  >
                    <ProFormText
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      name="title"
                      label="标题"
                    />
                    <ProFormGroup
                      style={{
                        marginBlockStart: 8,
                      }}
                    >
                      <ProFormSwitch label="过长省略" name="ellipsis" />
                      <ProFormSwitch label="复制按钮" name="copyable" />
                    </ProFormGroup>
                    <ProFormGroup
                      style={{
                        marginBlockStart: 8,
                      }}
                      size={8}
                    >
                      <ProFormSelect
                        label="dataIndex"
                        width="xs"
                        name="dataIndex"
                        valueEnum={{
                          age: 'age',
                          address: 'address',
                          name: 'name',
                          time: 'time',
                          description: 'string',
                        }}
                      />
                      <ProFormSelect
                        width="xs"
                        label="值类型"
                        name="valueType"
                        fieldProps={{
                          onChange: () => {
                            ref.current?.resetFields();
                          },
                        }}
                        options={valueTypeArray.map((value) => ({
                          label: value,
                          value,
                        }))}
                      />
                    </ProFormGroup>
                    <ProFormGroup
                      style={{
                        marginBlockStart: 8,
                      }}
                      size={8}
                    >
                      <ProFormText width="xs" label="列提示" name="tooltip" />
                    </ProFormGroup>
                    <ProFormDependency name={['valueType', 'valueEnum']}>
                      {({ valueType, valueEnum }) => {
                        if (valueType !== 'select') {
                          return null;
                        }
                        return (
                          <ProFormTextArea
                            formItemProps={{
                              style: {
                                marginBlockStart: 8,
                              },
                            }}
                            fieldProps={{
                              value: JSON.stringify(valueEnum),
                            }}
                            normalize={(value) => {
                              return JSON.parse(value);
                            }}
                            label="数据枚举"
                            name="valueEnum"
                          />
                        );
                      }}
                    </ProFormDependency>
                  </ProFormList>
                ),
              },
            ],
          }}
        />
      </ProForm>
    </ProCard>
  );
};

const DynamicSettingsWithDocs = () => {
  return (
    <>
      <DynamicSettings />
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProTable 动态设置 Props 说明：</h4>
        <ul>
          <li>
            <strong>ProTable</strong>: 专业表格组件
          </li>
          <li>
            <strong>ProCard</strong>: 专业卡片组件
          </li>
          <li>
            <strong>ProForm</strong>: 专业表单组件
          </li>
          <li>
            <strong>ProFormList</strong>: 专业表单列表组件
          </li>
          <li>
            <strong>动态设置</strong>: 展示动态设置功能
          </li>
        </ul>
        <h4>ProTable 配置：</h4>
        <ul>
          <li>
            <strong>formRef</strong>: 表单引用
          </li>
          <li>
            <strong>pagination</strong>: 分页配置
          </li>
          <li>
            <strong>search</strong>: 搜索配置
          </li>
          <li>
            <strong>expandable</strong>: 展开配置
          </li>
          <li>
            <strong>options</strong>: 选项配置
          </li>
          <li>
            <strong>toolBarRender</strong>: 工具栏渲染
          </li>
          <li>
            <strong>footer</strong>: 页脚配置
          </li>
          <li>
            <strong>headerTitle</strong>: 表格标题
          </li>
          <li>
            <strong>columns</strong>: 列配置
          </li>
          <li>
            <strong>dataSource</strong>: 数据源
          </li>
          <li>
            <strong>scroll</strong>: 滚动配置
          </li>
        </ul>
        <h4>动态设置特点：</h4>
        <ul>
          <li>
            <strong>实时配置</strong>: 支持实时配置
          </li>
          <li>
            <strong>可视化配置</strong>: 支持可视化配置
          </li>
          <li>
            <strong>分组配置</strong>: 支持分组配置
          </li>
          <li>
            <strong>表单联动</strong>: 支持表单联动
          </li>
          <li>
            <strong>防抖处理</strong>: 支持防抖处理
          </li>
          <li>
            <strong>动态列</strong>: 支持动态列配置
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>配置工具</strong>: 配置工具开发
          </li>
          <li>
            <strong>表格定制</strong>: 表格定制需求
          </li>
          <li>
            <strong>开发调试</strong>: 开发调试工具
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <DynamicSettingsWithDocs />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';

type GithubIssueItem = {
  key: number;
  name: string;
  createdAt: number;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: '标题',
    dataIndex: 'name',
    search: false,
  },
];

const SearchTable = () => (
  <ProTable<GithubIssueItem>
    columns={columns}
    request={async (params) => {
      console.log(params);
      return {
        data: [
          {
            key: 1,
            name: `TradeCode ${1}`,
            createdAt: 1602572994055,
          },
        ],
        success: true,
      };
    }}
    search={false}
    rowKey="key"
    options={{
      search: true,
    }}
    headerTitle="toolbar 中搜索"
  />
);

const SearchTableWithDocs = () => {
  return (
    <>
      {SearchTable()}
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProTable 搜索 Props 说明：</h4>
        <ul>
          <li>
            <strong>ProTable</strong>: 专业表格组件
          </li>
          <li>
            <strong>搜索</strong>: 展示搜索功能
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
            <strong>search</strong>: 搜索配置
          </li>
          <li>
            <strong>rowKey</strong>: 行键
          </li>
          <li>
            <strong>options</strong>: 选项配置
          </li>
          <li>
            <strong>headerTitle</strong>: 表格标题
          </li>
        </ul>
        <h4>搜索特点：</h4>
        <ul>
          <li>
            <strong>工具栏搜索</strong>: 支持工具栏搜索
          </li>
          <li>
            <strong>禁用表单搜索</strong>: 支持禁用表单搜索
          </li>
          <li>
            <strong>序号显示</strong>: 支持序号显示
          </li>
          <li>
            <strong>搜索配置</strong>: 支持搜索配置
          </li>
          <li>
            <strong>简洁界面</strong>: 支持简洁界面
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>快速搜索</strong>: 快速搜索需求
          </li>
          <li>
            <strong>简单查询</strong>: 简单查询功能
          </li>
          <li>
            <strong>工具栏集成</strong>: 工具栏集成需求
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <SearchTableWithDocs />
  </div>
);

import { ProTable } from '@ant-design/pro-components';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  status: string;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
  percent: number | string;
  createdAtRange: number[];
  code: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    createdAtRange: [
      Date.now() - Math.floor(Math.random() * 2000),
      Date.now() - Math.floor(Math.random() * 2000),
    ],
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    percent:
      Math.random() > 0.5
        ? ((i + 1) * 10 + Math.random()).toFixed(3)
        : -((i + 1) * 10 + Math.random()).toFixed(2),
    code: `const getData = async params => {
  const data = await getData(params);
  return { list: data.data, ...data };
};`,
  });
}

const Demo = () => (
  <>
    <ProTable<TableListItem>
      columns={[
        {
          title: '创建时间',
          key: 'since',
          dataIndex: 'createdAt',
          valueType: 'dateTime',
        },
        {
          title: '日期区间',
          key: 'dateRange',
          dataIndex: 'createdAtRange',
          valueType: 'dateRange',
        },
        {
          title: '时间范围',
          key: 'dateTimeRangeCustom',
          dataIndex: 'dateTimeRange',
          hideInTable: true,
          valueType: 'dateTimeRange',
          fieldProps: {
            // placeholder: ['1', '2']
          },
          formItemRender: (_, { type, defaultRender }) => {
            if (type === 'form') {
              return null;
            }
            return defaultRender(_);
          },
        },
        {
          title: '时间区间',
          key: 'dateTimeRange',
          dataIndex: 'createdAtRange',
          valueType: 'dateTimeRange',
          search: {
            transform: (value: any) => ({
              startTime: value[0],
              endTime: value[1],
            }),
          },
        },
        {
          title: '更新时间',
          key: 'since2',
          dataIndex: 'createdAt',
          valueType: 'date',
        },
        {
          title: '更新时间',
          key: 'since4',
          dataIndex: 'createdAt',
          valueType: 'fromNow',
        },
        {
          title: '关闭时间',
          key: 'since3',
          dataIndex: 'updatedAt',
          valueType: 'time',
        },
        {
          title: '操作',
          key: 'option',
          width: 120,
          valueType: 'option',
          render: (_, row, index, action) => [
            <a
              key="a"
              onClick={() => {
                action?.startEditable(row.key);
              }}
            >
              编辑
            </a>,
          ],
        },
      ]}
      request={() => {
        return Promise.resolve({
          total: 200,
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      headerTitle="日期类"
    />
    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>ProTable 值类型日期 Props 说明：</h4>
      <ul>
        <li>
          <strong>ProTable</strong>: 专业表格组件
        </li>
        <li>
          <strong>值类型日期</strong>: 展示值类型日期功能
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
          <strong>rowKey</strong>: 行键
        </li>
        <li>
          <strong>headerTitle</strong>: 表格标题
        </li>
      </ul>
      <h4>值类型日期特点：</h4>
      <ul>
        <li>
          <strong>日期时间</strong>: 支持日期时间
        </li>
        <li>
          <strong>日期区间</strong>: 支持日期区间
        </li>
        <li>
          <strong>时间范围</strong>: 支持时间范围
        </li>
        <li>
          <strong>时间区间</strong>: 支持时间区间
        </li>
        <li>
          <strong>日期</strong>: 支持日期
        </li>
        <li>
          <strong>相对时间</strong>: 支持相对时间
        </li>
        <li>
          <strong>时间</strong>: 支持时间
        </li>
        <li>
          <strong>搜索转换</strong>: 支持搜索转换
        </li>
      </ul>
      <h4>使用场景：</h4>
      <ul>
        <li>
          <strong>日期类</strong>: 日期类数据展示
        </li>
        <li>
          <strong>时间筛选</strong>: 时间筛选功能
        </li>
        <li>
          <strong>时间范围</strong>: 时间范围查询
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, ConfigProvider, Select, Space } from 'antd';
import caESIntl from 'antd/lib/locale/ca_ES';
import enGBIntl from 'antd/lib/locale/en_GB';
import enUSIntl from 'antd/lib/locale/en_US';
import esESIntl from 'antd/lib/locale/es_ES';
import frFRIntl from 'antd/lib/locale/fr_FR';
import itITIntl from 'antd/lib/locale/it_IT';
import jaJPIntl from 'antd/lib/locale/ja_JP';
import msMYIntl from 'antd/lib/locale/ms_MY';
import ptBRIntl from 'antd/lib/locale/pt_BR';
import ruRUIntl from 'antd/lib/locale/ru_RU';
import srRSIntl from 'antd/lib/locale/sr_RS';
import thTHIntl from 'antd/lib/locale/th_TH';
import viVNIntl from 'antd/lib/locale/vi_VN';
import zhCNIntl from 'antd/lib/locale/zh_CN';
import zhTWIntl from 'antd/lib/locale/zh_TW';
import dayjs from 'dayjs';
import { useRef, useState } from 'react';

const intlMap = {
  zhCNIntl,
  enUSIntl,
  enGBIntl,
  viVNIntl,
  itITIntl,
  jaJPIntl,
  esESIntl,
  caESIntl,
  ruRUIntl,
  srRSIntl,
  msMYIntl,
  zhTWIntl,
  frFRIntl,
  ptBRIntl,
  thTHIntl,
};

type GithubIssueItem = {
  key: number;
  name: string;
  createdAt: number;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: 'index',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: 'Title',
    dataIndex: 'name',
  },
  {
    title: 'Money',
    dataIndex: 'title',
    width: 100,
    order: 1,
    valueType: 'money',
    renderText: () => (Math.random() * 100).toFixed(2),
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();
  const [intl, setIntl] = useState('zhCNIntl');
  return (
    <ConfigProvider locale={intlMap[intl as 'zhCNIntl']}>
      <ProTable<GithubIssueItem>
        columns={columns}
        actionRef={actionRef}
        request={async () => {
          return {
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: 1602572994055,
              },
            ],
            success: true,
          };
        }}
        rowKey="key"
        rowSelection={{}}
        search={{
          labelWidth: 'auto',
        }}
        dateFormatter="string"
        headerTitle={
          <Space>
            <span>Basic Table</span>
            <Select<string>
              variant="borderless"
              value={intl}
              onChange={(value) => {
                dayjs.locale(intlMap[value as 'zhCNIntl'].locale);
                setIntl(value);
              }}
              options={Object.keys(intlMap).map((value) => ({
                value,
                label: value,
              }))}
            />
          </Space>
        }
        toolBarRender={() => [
          <Button key="3" type="primary">
            <PlusOutlined />
            New
          </Button>,
        ]}
      />
    </ConfigProvider>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 国际化 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>ConfigProvider</strong>: 配置提供者组件
      </li>
      <li>
        <strong>Select</strong>: 选择器组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>国际化</strong>: 展示国际化功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>rowSelection</strong>: 行选择配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>国际化特点：</h4>
    <ul>
      <li>
        <strong>多语言支持</strong>: 支持多语言
      </li>
      <li>
        <strong>动态切换</strong>: 支持动态切换
      </li>
      <li>
        <strong>日期本地化</strong>: 支持日期本地化
      </li>
      <li>
        <strong>货币格式化</strong>: 支持货币格式化
      </li>
      <li>
        <strong>全局配置</strong>: 支持全局配置
      </li>
      <li>
        <strong>语言映射</strong>: 支持语言映射
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>多语言应用</strong>: 多语言应用需求
      </li>
      <li>
        <strong>国际化系统</strong>: 国际化系统
      </li>
      <li>
        <strong>本地化需求</strong>: 本地化需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, ConfigProvider, Input, Space, Tag } from 'antd';
import { useRef } from 'react';

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

const nestedColumns = [
  {
    title: 'col without dataIndex',
    key: 'expand',
  },
  {
    title: 'normal col',
    dataIndex: 'key',
  },
];

const nestedData = [
  {
    key: 1,
    children: [
      {
        key: 11,
      },
    ],
  },
];

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: '标题',
    dataIndex: 'title',
    fixed: 'left',
    order: 1,
    copyable: true,
    ellipsis: true,
    hideInForm: true,
    tooltip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: '30%',
  },
  {
    title: '状态',
    dataIndex: 'state',
    initialValue: 'all',
    copyable: true,
    ellipsis: true,
    onFilter: true,
    valueType: 'select',
    order: 2,
    fieldProps: {
      noStyle: true,
    },
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
    width: '10%',
  },
  {
    title: '动态表单',
    key: 'direction',
    hideInTable: true,
    dataIndex: 'direction',
    formItemProps: {
      noStyle: true,
    },
    ignoreFormItem: true,
    formItemRender: () => {
      return <Input />;
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: '10%',
    order: -1,
    colSize: 1.5,
    formItemProps: {
      noStyle: true,
    },
    formItemRender: (_, { defaultRender }) => defaultRender(_),
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
    width: '20%',
    copyable: true,
    ellipsis: true,
    render: (value) => {
      return {
        children: value,
        props: { colSpan: 2 },
      };
    },
  },
  {
    title: '创建时间',
    key: 'since',
    dataIndex: 'created_at',
    // @ts-ignore
    valueType: () => undefined,
    width: '20%',
  },
  {
    title: '操作',
    valueType: 'option',
    fixed: 'right',
    render: (text, record, _, action) => [
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();

  return (
    <ConfigProvider prefixCls="canvas">
      <ProTable<GithubIssueItem>
        columns={columns}
        pagination={{
          showQuickJumper: true,
        }}
        actionRef={actionRef}
        request={async () => ({
          data: [],
        })}
        type="form"
        rowKey="id"
        dateFormatter="string"
        headerTitle="高级表格"
        toolBarRender={() => [
          <Button key="3" type="primary">
            <PlusOutlined />
            新建
          </Button>,
        ]}
      />
      <ProTable columns={nestedColumns} dataSource={nestedData} />
      <ProTable<GithubIssueItem>
        columns={columns}
        actionRef={(ref) => console.log(ref)}
        dataSource={[
          {
            id: 624748504,
            number: 6689,
            title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
            labels: [{ name: 'bug', color: 'error' }],
            state: 'open',
            comments: 1,
            created_at: '2020-05-26T09:42:56Z',
            updated_at: '2020-05-26T10:03:02Z',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          },
          {
            id: 624691229,
            number: 6688,
            title: '🐛 [BUG]无法创建工程npm create umi',
            labels: [{ name: 'bug', color: 'error' }],
            state: 'open',
            comments: 0,
            created_at: '2020-05-26T08:19:22Z',
            updated_at: '2020-05-26T08:19:22Z',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          },
          {
            id: 624674790,
            number: 6685,
            title: '🧐 [问题] build 后还存在 es6 的代码（Umi@2.13.13）',
            labels: [{ name: 'question', color: 'success' }],
            state: 'open',
            comments: 0,
            created_at: '2020-05-26T07:54:25Z',
            updated_at: '2020-05-26T07:54:25Z',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          },
        ]}
        pagination={{
          pageSize: 5,
        }}
        rowKey="id"
        dateFormatter="string"
        headerTitle="高级表格"
        toolBarRender={() => [
          <Button key="3" type="primary">
            <PlusOutlined />
            新建
          </Button>,
        ]}
      />
    </ConfigProvider>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 单表格测试 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>ConfigProvider</strong>: 配置提供者组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>Input</strong>: 输入框组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>单表格测试</strong>: 展示单表格测试功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>type</strong>: 表格类型
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
      <li>
        <strong>dataSource</strong>: 数据源
      </li>
    </ul>
    <h4>单表格测试特点：</h4>
    <ul>
      <li>
        <strong>表单模式</strong>: 支持表单模式
      </li>
      <li>
        <strong>嵌套表格</strong>: 支持嵌套表格
      </li>
      <li>
        <strong>静态数据</strong>: 支持静态数据
      </li>
      <li>
        <strong>动态表单</strong>: 支持动态表单
      </li>
      <li>
        <strong>固定列</strong>: 支持固定列
      </li>
      <li>
        <strong>自定义渲染</strong>: 支持自定义渲染
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>测试验证</strong>: 测试验证需求
      </li>
      <li>
        <strong>复杂表单</strong>: 复杂表单功能
      </li>
      <li>
        <strong>开发调试</strong>: 开发调试工具
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
import { Badge, Button } from 'antd';
import React, { useState } from 'react';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  status: string;
  creator: string;
  createdAt: number;
};

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
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
    title: '状态',
    dataIndex: 'status',
    initialValue: 'all',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '待发布', status: 'Default' },
      running: { text: '发布中', status: 'Processing' },
      online: { text: '发布成功', status: 'Success' },
      error: { text: '发布失败', status: 'Error' },
    },
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: (_, record) => [
      record.status === 'close' && <a key="link">发布</a>,
      (record.status === 'running' || record.status === 'online') && (
        <a key="warn">停用</a>
      ),
      record.status === 'error' && <a key="republish">重新发布</a>,
      <a
        key="monitor"
        style={
          record.status === 'running'
            ? {
                color: 'rgba(0,0,0,.25)',
                cursor: 'not-allowed',
              }
            : {}
        }
      >
        监控
      </a>,
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
  const [activeKey, setActiveKey] = useState<React.Key>('tab1');

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
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        menu: {
          type: 'tab',
          activeKey: activeKey,
          items: [
            {
              key: 'tab1',
              label: <span>应用{renderBadge(99, activeKey === 'tab1')}</span>,
            },
            {
              key: 'tab2',
              label: <span>项目{renderBadge(30, activeKey === 'tab2')}</span>,
            },
            {
              key: 'tab3',
              label: <span>文章{renderBadge(30, activeKey === 'tab3')}</span>,
            },
          ],
          onChange: (key) => {
            setActiveKey(key as string);
          },
        },
        actions: [
          <Button key="primary" type="primary">
            新建应用
          </Button>,
        ],
      }}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      search={false}
      dateFormatter="string"
      options={{
        setting: {
          draggable: true,
          checkable: true,
          checkedReset: false,
          extra: [<a key="confirm">确认</a>],
        },
      }}
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
    <h4>ProTable 列表工具栏 Props 说明：</h4>
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
        <strong>Badge</strong>: 徽章组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>列表工具栏</strong>: 展示列表工具栏功能
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
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
    </ul>
    <h4>列表工具栏特点：</h4>
    <ul>
      <li>
        <strong>过滤器</strong>: 支持过滤器
      </li>
      <li>
        <strong>菜单切换</strong>: 支持菜单切换
      </li>
      <li>
        <strong>徽章显示</strong>: 支持徽章显示
      </li>
      <li>
        <strong>操作按钮</strong>: 支持操作按钮
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
      <li>
        <strong>列设置</strong>: 支持列设置
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>应用管理</strong>: 应用管理系统
      </li>
      <li>
        <strong>项目管理</strong>: 项目管理系统
      </li>
      <li>
        <strong>内容管理</strong>: 内容管理系统
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, ConfigProvider, Dropdown, Space, Tag, theme } from 'antd';
import { useRef } from 'react';
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

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tooltip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    disable: true,
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: 'select',
    valueEnum: {
      all: { text: '超长'.repeat(50) },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
        disabled: true,
      },
      processing: {
        text: '解决中',
        status: 'Processing',
      },
    },
  },
  {
    disable: true,
    title: '标签',
    dataIndex: 'labels',
    search: false,
    formItemRender: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    sorter: true,
    search: false,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();
  const themeConfig = {
    token: {
      colorPrimary: 'red',
      borderRadius: 4,
    },
    algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
  };
  return (
    <div
      style={{
        backgroundColor: 'hsl(218,22%,7%)',
      }}
    >
      <ConfigProvider theme={themeConfig}>
        <ProTable<GithubIssueItem>
          columns={columns}
          actionRef={actionRef}
          cardBordered
          request={async (params, sort, filter) => {
            console.log(sort, filter);
            return request<{
              data: GithubIssueItem[];
            }>('https://proapi.azurewebsites.net/github/issues', {
              params,
            });
          }}
          editable={{
            type: 'multiple',
          }}
          columnsState={{
            persistenceKey: 'pro-table-singe-demos',
            persistenceType: 'localStorage',
            onChange(value) {
              console.log('value: ', value);
            },
          }}
          rowKey="id"
          search={{
            labelWidth: 'auto',
          }}
          options={{
            setting: {
              listsHeight: 400,
            },
          }}
          form={{
            // 由于配置了 transform，提交的参数与定义的不同这里需要转化一下
            syncToUrl: (values, type) => {
              if (type === 'get') {
                return {
                  ...values,
                  created_at: [values.startTime, values.endTime],
                };
              }
              return values;
            },
          }}
          pagination={{
            pageSize: 5,
            onChange: (page) => console.log(page),
          }}
          dateFormatter="string"
          headerTitle="高级表格"
          toolBarRender={() => [
            <Button key="button" icon={<PlusOutlined />} type="primary">
              新建
            </Button>,
            <Dropdown
              key="menu"
              menu={{
                items: [
                  {
                    label: '1st item',
                    key: '1',
                  },
                  {
                    label: '2nd item',
                    key: '2',
                  },
                  {
                    label: '3rd item',
                    key: '3',
                  },
                ],
              }}
            >
              <Button>
                <EllipsisOutlined />
              </Button>
            </Dropdown>,
          ]}
        />
      </ConfigProvider>
    </div>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 主题 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>ConfigProvider</strong>: 配置提供者组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>Dropdown</strong>: 下拉菜单组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>theme</strong>: 主题配置
      </li>
      <li>
        <strong>主题</strong>: 展示主题功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>cardBordered</strong>: 卡片边框
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>editable</strong>: 可编辑配置
      </li>
      <li>
        <strong>columnsState</strong>: 列状态配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>form</strong>: 表单配置
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>主题特点：</h4>
    <ul>
      <li>
        <strong>暗色主题</strong>: 支持暗色主题
      </li>
      <li>
        <strong>紧凑算法</strong>: 支持紧凑算法
      </li>
      <li>
        <strong>自定义颜色</strong>: 支持自定义颜色
      </li>
      <li>
        <strong>主题配置</strong>: 支持主题配置
      </li>
      <li>
        <strong>算法组合</strong>: 支持算法组合
      </li>
      <li>
        <strong>背景色</strong>: 支持背景色
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>主题定制</strong>: 主题定制需求
      </li>
      <li>
        <strong>暗色模式</strong>: 暗色模式应用
      </li>
      <li>
        <strong>品牌定制</strong>: 品牌定制需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, ConfigProvider, Space, Tag } from 'antd';
import { useRef } from 'react';
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

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tooltip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: '30%',
    search: false,
  },
  {
    title: '状态',
    dataIndex: 'state',
    initialValue: 'open',
    filters: true,
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
    width: '10%',
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: '10%',
    render: (_, row) => (
      <Space>
        {row.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, row, _, action) => [
      <a href={row.url} target="_blank" rel="noopener noreferrer" key="link">
        链路
      </a>,
      <a href={row.url} target="_blank" rel="noopener noreferrer" key="warning">
        报警
      </a>,
      <a href={row.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();

  return (
    <ConfigProvider prefixCls="qixian">
      <ProTable<GithubIssueItem>
        columns={columns}
        pagination={{
          showQuickJumper: true,
        }}
        actionRef={actionRef}
        request={async (params = {} as Record<string, any>) =>
          request<{
            data: GithubIssueItem[];
          }>('https://proapi.azurewebsites.net/github/issues', {
            params,
          })
        }
        rowKey="id"
        dateFormatter="string"
        headerTitle="高级表格"
        toolBarRender={() => [
          <Button key="3" type="primary">
            <PlusOutlined />
            新建
          </Button>,
        ]}
      />
    </ConfigProvider>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable ConfigProvider Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>ConfigProvider</strong>: 配置提供者组件
      </li>
      <li>
        <strong>配置提供者</strong>: 展示配置提供者功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>配置提供者特点：</h4>
    <ul>
      <li>
        <strong>前缀定制</strong>: 支持前缀定制
      </li>
      <li>
        <strong>全局配置</strong>: 支持全局配置
      </li>
      <li>
        <strong>主题定制</strong>: 支持主题定制
      </li>
      <li>
        <strong>国际化</strong>: 支持国际化配置
      </li>
      <li>
        <strong>样式隔离</strong>: 支持样式隔离
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>多套主题</strong>: 多套主题系统
      </li>
      <li>
        <strong>样式隔离</strong>: 样式隔离需求
      </li>
      <li>
        <strong>全局配置</strong>: 全局配置管理
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import type {
  ProColumns,
  ProDescriptionsItemProps,
} from '@ant-design/pro-components';
import {
  ProCard,
  ProDescriptions,
  ProTable,
  TableDropdown,
} from '@ant-design/pro-components';
import { Button, Space, Tabs, Tag, message } from 'antd';
import { useState } from 'react';
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

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 64,
    valueType: 'indexBorder',
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    search: false,
  },
  {
    title: (_, type) => (type === 'table' ? '状态' : '列表状态'),
    dataIndex: 'state',
    initialValue: 'all',
    filters: true,
    onFilter: true,
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
    },
  },
  {
    title: '排序方式',
    key: 'direction',
    hideInTable: true,
    hideInDescriptions: true,
    dataIndex: 'direction',
    filters: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      asc: '正序',
      desc: '倒序',
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 120,
    render: (_, row) => (
      <Space>
        {row.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: 'option',
    valueType: 'option',
    dataIndex: 'id',
    render: (text, row) => [
      <a href={row.url} key="show" target="_blank" rel="noopener noreferrer">
        查看
      </a>,
      <TableDropdown
        key="more"
        onSelect={(key) => message.info(key)}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  const [type, setType] = useState('table');
  return (
    <ProCard>
      <Tabs
        activeKey={type}
        onChange={(e) => setType(e)}
        items={[
          { key: 'table', label: 'table' },
          { key: 'form', label: 'form' },
          { key: 'descriptions', label: 'descriptions' },
        ]}
      />
      {['table', 'form'].includes(type) && (
        <ProTable<GithubIssueItem>
          columns={columns}
          type={type as 'table'}
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
          rowKey="id"
          dateFormatter="string"
          headerTitle="查询 Table"
          toolBarRender={() => [
            <Button key="3" type="primary">
              <PlusOutlined />
              新建
            </Button>,
          ]}
        />
      )}
      {type === 'descriptions' && (
        <ProDescriptions
          style={{
            background: '#fff',
          }}
          columns={columns as ProDescriptionsItemProps<GithubIssueItem>[]}
          request={async (params) => {
            const msg = await request<{
              data: GithubIssueItem[];
            }>('https://proapi.azurewebsites.net/github/issues', {
              params,
            });
            return {
              ...msg,
              data: msg?.data[0],
            };
          }}
        />
      )}
    </ProCard>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable CRUD Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>ProCard</strong>: 专业卡片组件
      </li>
      <li>
        <strong>ProDescriptions</strong>: 专业描述组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>Tabs</strong>: 标签页组件
      </li>
      <li>
        <strong>CRUD操作</strong>: 展示增删改查功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>type</strong>: 表格类型
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>CRUD特点：</h4>
    <ul>
      <li>
        <strong>多视图切换</strong>: 支持表格、表单、描述视图
      </li>
      <li>
        <strong>动态列配置</strong>: 支持动态列配置
      </li>
      <li>
        <strong>标签过滤</strong>: 支持标签过滤
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
      <li>
        <strong>操作集成</strong>: 支持操作集成
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>数据管理</strong>: 数据管理系统
      </li>
      <li>
        <strong>内容管理</strong>: 内容管理平台
      </li>
      <li>
        <strong>后台管理</strong>: 后台管理系统
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { ProColumns, ProTable } from '@ant-design/pro-components';

type ContentWordsItem = {
  id: string;
  problemCause: string;
};

const getData = () => {
  const arr = Array.from({ length: 100 }).map((_, idx) => ({
    id: (idx + 1).toString(),
    problemCause: 'problemCause',
  }));
  return arr;
};

const Demo = () => {
  const columns: ProColumns<ContentWordsItem>[] = [
    {
      disable: true,
      title: '问题标注',
      dataIndex: 'problemCause',
      editable: false,
      onFilter: false,
      ellipsis: true,
      search: true,
      valueType: 'select',
      width: 180,
    },
  ];

  return (
    <div>
      <ProTable<ContentWordsItem>
        rowKey="id"
        columns={columns}
        request={async () => {
          const data = getData();
          return {
            data: data,
            total: data.length,
            success: true,
          };
        }}
      />
    </div>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 内容词项 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>内容词项</strong>: 展示内容词项功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
    </ul>
    <h4>列配置特点：</h4>
    <ul>
      <li>
        <strong>disable</strong>: 禁用状态
      </li>
      <li>
        <strong>title</strong>: 列标题
      </li>
      <li>
        <strong>dataIndex</strong>: 数据索引
      </li>
      <li>
        <strong>editable</strong>: 可编辑状态
      </li>
      <li>
        <strong>onFilter</strong>: 过滤功能
      </li>
      <li>
        <strong>ellipsis</strong>: 省略号显示
      </li>
      <li>
        <strong>search</strong>: 搜索功能
      </li>
      <li>
        <strong>valueType</strong>: 值类型
      </li>
      <li>
        <strong>width</strong>: 列宽度
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>内容管理</strong>: 内容管理系统
      </li>
      <li>
        <strong>词汇标注</strong>: 词汇标注功能
      </li>
      <li>
        <strong>数据展示</strong>: 数据展示需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProProvider, ProTable } from '@ant-design/pro-components';
import type { InputRef } from 'antd';
import { Input, Space, Tag } from 'antd';
import React, { useContext, useRef, useState } from 'react';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  status: {
    label: string | number;
    value: number;
  }[];
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: [
      {
        value: Math.floor(Math.random() * 10),
        label: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
      },
      {
        value: Math.floor(Math.random() * 10),
        label: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
      },
    ],
  });
}

const TagList: React.FC<{
  value?: {
    key: string;
    label: string;
  }[];
  onChange?: (
    value: {
      key: string;
      label: string;
    }[],
  ) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<InputRef | null>(null);
  const [newTags, setNewTags] = useState<
    {
      key: string;
      label: string;
    }[]
  >([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let tempsTags = [...(value || [])];
    if (
      inputValue &&
      tempsTags.filter((tag) => tag.label === inputValue).length === 0
    ) {
      tempsTags = [
        ...tempsTags,
        { key: `new-${tempsTags.length}`, label: inputValue },
      ];
    }
    onChange?.(tempsTags);
    setNewTags([]);
    setInputValue('');
  };

  return (
    <Space>
      {(value || []).concat(newTags).map((item) => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
      <Input
        ref={ref}
        type="text"
        size="small"
        style={{ width: 78 }}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputConfirm}
        onPressEnter={handleInputConfirm}
      />
    </Space>
  );
};

const columns: ProColumns<TableListItem, 'link' | 'tags'>[] = [
  {
    title: '链接',
    dataIndex: 'name',
    valueType: 'link',
  },
  {
    title: '标签',
    dataIndex: 'status',
    key: 'status',
    valueType: 'tags',
  },
  {
    title: '操作',
    key: 'option',
    valueType: 'option',
    render: (_, row, index, action) => [
      <a
        key="a"
        onClick={() => {
          action?.startEditable(row.key);
        }}
      >
        编辑
      </a>,
    ],
  },
];

const Demo = () => {
  const values = useContext(ProProvider);
  return (
    <ProProvider.Provider
      value={{
        ...values,
        valueTypeMap: {
          link: {
            render: (text) => <a>{text}</a>,
            formItemRender: (text, props) => (
              <Input placeholder="请输入链接" {...props?.fieldProps} />
            ),
          },
          tags: {
            render: (text) => {
              return (
                <>
                  {[text].flat(1).map((item) => (
                    <Tag key={item.value}>{item.label}</Tag>
                  ))}
                </>
              );
            },
            formItemRender: (text, props) => (
              <TagList {...props} {...props?.fieldProps} />
            ),
          },
        },
      }}
    >
      <ProTable<TableListItem, Record<string, any>, 'link' | 'tags'>
        columns={columns}
        request={() => {
          return Promise.resolve({
            total: 200,
            data: tableListDataSource,
            success: true,
          });
        }}
        rowKey="key"
        headerTitle="自定义 valueType"
      />
    </ProProvider.Provider>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 自定义值类型 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>ProProvider</strong>: 专业提供者组件
      </li>
      <li>
        <strong>Input</strong>: 输入框组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>自定义值类型</strong>: 展示自定义值类型功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
    </ul>
    <h4>自定义值类型特点：</h4>
    <ul>
      <li>
        <strong>valueTypeMap</strong>: 值类型映射
      </li>
      <li>
        <strong>自定义渲染</strong>: 支持自定义渲染
      </li>
      <li>
        <strong>表单项渲染</strong>: 支持表单项渲染
      </li>
      <li>
        <strong>链接类型</strong>: 支持链接类型
      </li>
      <li>
        <strong>标签类型</strong>: 支持标签类型
      </li>
      <li>
        <strong>可编辑</strong>: 支持可编辑功能
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>自定义展示</strong>: 自定义展示需求
      </li>
      <li>
        <strong>特殊数据类型</strong>: 特殊数据类型处理
      </li>
      <li>
        <strong>业务定制</strong>: 业务定制需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { MailOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Card, Descriptions, Menu } from 'antd';
import { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export type TableListItem = {
  key: number;
  name: string;
  createdAt: number;
  progress: number;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    progress: Math.ceil(Math.random() * 100) + 1,
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
    width: 80,
  },
  {
    title: '更新时间',
    key: 'since2',
    dataIndex: 'createdAt',
    valueType: 'date',
  },
  {
    title: '执行进度',
    dataIndex: 'progress',
    valueType: 'progress',
  },
];

const Demo = () => {
  const [key, setKey] = useState('1');

  return (
    <ProTable<TableListItem>
      columns={columns}
      rowKey="key"
      pagination={{
        showSizeChanger: true,
      }}
      tableRender={(_, dom) => (
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <Menu
            onSelect={(e) => setKey(e.key as string)}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={[
              {
                key: 'sub1',
                label: (
                  <span>
                    <MailOutlined />
                    <span>Navigation One</span>
                  </span>
                ),
                children: [
                  {
                    type: 'group',
                    key: 'g1',
                    label: 'Item 1',
                    children: [
                      {
                        key: '1',
                        label: 'Option 1',
                      },
                      {
                        key: '2',
                        label: 'Option 2',
                      },
                    ],
                  },
                  {
                    type: 'group',
                    key: 'g2',
                    label: 'Item 2',
                    children: [
                      {
                        key: '3',
                        label: 'Option 3',
                      },
                      {
                        key: '4',
                        label: 'Option 4',
                      },
                    ],
                  },
                ],
              },
            ]}
          />
          <div
            style={{
              flex: 1,
            }}
          >
            {dom}
          </div>
        </div>
      )}
      tableExtraRender={(_, data) => (
        <Card>
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Row">{data.length}</Descriptions.Item>
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Association">
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">
              2017-01-10
            </Descriptions.Item>
            <Descriptions.Item label="Effective Time">
              2017-10-10
            </Descriptions.Item>
          </Descriptions>
        </Card>
      )}
      params={{
        key,
      }}
      request={async () => {
        await waitTime(200);
        return {
          success: true,
          data: tableListDataSource,
        };
      }}
      dateFormatter="string"
      headerTitle="自定义表格主体"
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
    <h4>ProTable 渲染表格 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Card</strong>: 卡片组件
      </li>
      <li>
        <strong>Descriptions</strong>: 描述组件
      </li>
      <li>
        <strong>Menu</strong>: 菜单组件
      </li>
      <li>
        <strong>渲染表格</strong>: 展示渲染表格功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>tableRender</strong>: 表格渲染
      </li>
      <li>
        <strong>tableExtraRender</strong>: 表格额外渲染
      </li>
      <li>
        <strong>params</strong>: 参数配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
    </ul>
    <h4>渲染表格特点：</h4>
    <ul>
      <li>
        <strong>自定义渲染</strong>: 支持自定义渲染
      </li>
      <li>
        <strong>侧边菜单</strong>: 支持侧边菜单
      </li>
      <li>
        <strong>额外内容</strong>: 支持额外内容
      </li>
      <li>
        <strong>布局控制</strong>: 支持布局控制
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
      <li>
        <strong>参数传递</strong>: 支持参数传递
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>复杂布局</strong>: 复杂布局需求
      </li>
      <li>
        <strong>自定义界面</strong>: 自定义界面功能
      </li>
      <li>
        <strong>导航系统</strong>: 导航系统需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Space, Tag } from 'antd';

type GithubIssueItem = {
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: number;
  updated_at: number;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tooltip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: '30%',
  },
  {
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    valueType: 'select',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
        disabled: true,
      },
      processing: {
        text: '解决中',
        status: 'Processing',
      },
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    search: false,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    formItemRender: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    search: false,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
];

const Demo = () => {
  return (
    <>
      <ProTable<GithubIssueItem>
        columns={columns}
        request={async () => ({
          success: true,
          data: [
            {
              id: 624748504,
              number: 6689,
              title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
              labels: [
                {
                  name: 'bug',
                  color: 'error',
                },
              ],
              state: 'open',
              locked: false,
              comments: 1,
              created_at: 1590486176000,
              updated_at: 1590487382000,
              closed_at: null,
              author_association: 'NONE',
              user: 'chenshuai2144',
              avatar:
                'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
            },
          ],
        })}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        form={{
          ignoreRules: false,
        }}
        dateFormatter="string"
        headerTitle="高级表格"
      />
      <ProTable<GithubIssueItem>
        columns={columns}
        request={async () => ({
          success: true,
          data: [
            {
              id: 624748504,
              number: 6689,
              title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
              labels: [
                {
                  name: 'bug',
                  color: 'error',
                },
              ],
              state: 'open',
              locked: false,
              comments: 1,
              created_at: 1590486176000,
              updated_at: 1590487382000,
              closed_at: null,
              author_association: 'NONE',
              user: 'chenshuai2144',
              avatar:
                'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
            },
          ],
        })}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        dateFormatter="string"
        headerTitle="高级表格"
      />
    </>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 开放规则 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>开放规则</strong>: 展示开放规则功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>form</strong>: 表单配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
    </ul>
    <h4>开放规则特点：</h4>
    <ul>
      <li>
        <strong>表单验证</strong>: 支持表单验证
      </li>
      <li>
        <strong>必填校验</strong>: 支持必填校验
      </li>
      <li>
        <strong>标签显示</strong>: 支持标签显示
      </li>
      <li>
        <strong>复制功能</strong>: 支持复制功能
      </li>
      <li>
        <strong>省略号显示</strong>: 支持省略号显示
      </li>
      <li>
        <strong>状态过滤</strong>: 支持状态过滤
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>表单验证</strong>: 表单验证需求
      </li>
      <li>
        <strong>数据校验</strong>: 数据校验功能
      </li>
      <li>
        <strong>规则配置</strong>: 规则配置需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DownOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button } from 'antd';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    width: 80,
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
    title: '状态',
    width: 80,
    dataIndex: 'status',
    initialValue: 'all',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '创建者',
    width: 80,
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
    width: 180,
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="link">链路</a>,
      <a key="link2">报警</a>,
      <a key="link3">监控</a>,
      <TableDropdown
        key="actionGroup"
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      dataSource={tableListDataSource}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      columns={columns}
      search={false}
      dateFormatter="string"
      headerTitle="表格标题"
      toolBarRender={() => [
        <Button key="show">查看日志</Button>,
        <Button key="out">
          导出数据
          <DownOutlined />
        </Button>,
        <Button type="primary" key="primary">
          创建应用
        </Button>,
      ]}
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
    <h4>ProTable 普通表格 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>普通表格</strong>: 展示普通表格功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>dataSource</strong>: 数据源
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>普通表格特点：</h4>
    <ul>
      <li>
        <strong>静态数据</strong>: 支持静态数据
      </li>
      <li>
        <strong>排序功能</strong>: 支持排序功能
      </li>
      <li>
        <strong>状态过滤</strong>: 支持状态过滤
      </li>
      <li>
        <strong>操作按钮</strong>: 支持操作按钮
      </li>
      <li>
        <strong>下拉菜单</strong>: 支持下拉菜单
      </li>
      <li>
        <strong>工具栏</strong>: 支持工具栏
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>数据展示</strong>: 数据展示需求
      </li>
      <li>
        <strong>基础表格</strong>: 基础表格功能
      </li>
      <li>
        <strong>简单列表</strong>: 简单列表展示
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, DatePicker, Space, Table } from 'antd';

const { RangePicker } = DatePicker;

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

const ProcessMap = {
  close: 'normal',
  running: 'active',
  online: 'success',
  error: 'exception',
} as const;

export type TableListItem = {
  key: number;
  name: string;
  progress: number;
  containers: number;
  callNumber: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 50; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName-' + i,
    containers: Math.floor(Math.random() * 20),
    callNumber: Math.floor(Math.random() * 2000),
    progress: Math.ceil(Math.random() * 100) + 1,
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    width: 120,
    dataIndex: 'name',
    fixed: 'left',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    width: 120,
    dataIndex: 'containers',
    align: 'right',
    search: false,
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '调用次数',
    width: 120,
    align: 'right',
    dataIndex: 'callNumber',
  },
  {
    title: '执行进度',
    dataIndex: 'progress',
    valueType: (item) => ({
      type: 'progress',
      status: ProcessMap[item.status as 'close'],
    }),
  },
  {
    title: '创建者',
    width: 120,
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
    title: '创建时间',
    width: 140,
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
    formItemRender: () => {
      return <RangePicker />;
    },
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
    search: false,
  },
  {
    title: '操作',
    width: 80,
    key: 'option',
    valueType: 'option',
    fixed: 'right',
    render: () => [<a key="link">链路</a>],
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      rowSelection={{
        // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
        // 注释该行则默认不显示下拉选项
        selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
        defaultSelectedRowKeys: [1],
      }}
      tableAlertRender={({
        selectedRowKeys,
        selectedRows,
        onCleanSelected,
      }) => {
        console.log(selectedRowKeys, selectedRows);
        return (
          <Space size={24}>
            <span>
              已选 {selectedRowKeys.length} 项
              <a style={{ marginInlineStart: 8 }} onClick={onCleanSelected}>
                取消选择
              </a>
            </span>
            <span>{`容器数量: ${selectedRows.reduce(
              (pre, item) => pre + item.containers,
              0,
            )} 个`}</span>
            <span>{`调用量: ${selectedRows.reduce(
              (pre, item) => pre + item.callNumber,
              0,
            )} 次`}</span>
          </Space>
        );
      }}
      tableAlertOptionRender={() => {
        return (
          <Space size={16}>
            <a>批量删除</a>
            <a>导出数据</a>
          </Space>
        );
      }}
      dataSource={tableListDataSource}
      scroll={{ x: 1300 }}
      options={false}
      search={false}
      pagination={{
        pageSize: 5,
      }}
      rowKey="key"
      headerTitle="批量操作"
      toolBarRender={() => [<Button key="show">查看日志</Button>]}
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
    <h4>ProTable 批量操作 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>批量操作</strong>: 展示批量操作功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>rowSelection</strong>: 行选择配置
      </li>
      <li>
        <strong>tableAlertRender</strong>: 表格提醒渲染函数
      </li>
      <li>
        <strong>tableAlertOptionRender</strong>: 表格提醒操作渲染函数
      </li>
      <li>
        <strong>dataSource</strong>: 数据源
      </li>
      <li>
        <strong>scroll</strong>: 滚动配置
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染函数
      </li>
    </ul>
    <h4>批量操作特点：</h4>
    <ul>
      <li>
        <strong>行选择</strong>: 支持行选择功能
      </li>
      <li>
        <strong>批量提醒</strong>: 支持批量提醒
      </li>
      <li>
        <strong>批量操作</strong>: 支持批量操作
      </li>
      <li>
        <strong>统计信息</strong>: 支持统计信息展示
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>数据管理</strong>: 数据管理系统
      </li>
      <li>
        <strong>批量处理</strong>: 批量处理需求
      </li>
      <li>
        <strong>操作确认</strong>: 操作确认功能
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns, ProFormInstance } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useRef, useState } from 'react';

export type TableListItem = {
  key: number;
  name: string;
  createdAt: string;
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '标题',
    dataIndex: 'name',
    initialValue: 'TradeCode 1',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    valueType: 'date',
    initialValue: '2022-08-10',
  },
];

const Demo = () => {
  const ref = useRef<ProFormInstance>();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <ProTable<TableListItem>
        style={{
          margin: '16px',
        }}
        columns={columns}
        request={(params) => {
          console.log('-->', params);
          return Promise.resolve({
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: '2022-09-22',
              },
            ],
            success: true,
          });
        }}
        rowKey="key"
        pagination={{
          showSizeChanger: true,
        }}
        search={{
          collapsed,
          onCollapse: setCollapsed,
        }}
        formRef={ref}
        options={false}
        dateFormatter="string"
        headerTitle="日期格式化为字符串"
      />

      <ProTable<TableListItem>
        style={{
          margin: '16px',
        }}
        columns={columns}
        request={(params) => {
          console.log('-->', params);
          return Promise.resolve({
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: '2022-09-22',
              },
            ],
            success: true,
          });
        }}
        rowKey="key"
        pagination={{
          showSizeChanger: true,
        }}
        search={{
          collapsed,
          onCollapse: setCollapsed,
        }}
        formRef={ref}
        options={false}
        dateFormatter="number"
        headerTitle="日期格式化为数字"
      />
      <ProTable<TableListItem>
        style={{
          margin: '16px',
        }}
        columns={columns}
        request={(params) => {
          console.log('-->', params);
          return Promise.resolve({
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: '2022-09-22',
              },
            ],
            success: true,
          });
        }}
        rowKey="key"
        pagination={{
          showSizeChanger: true,
        }}
        search={{
          collapsed,
          onCollapse: setCollapsed,
        }}
        formRef={ref}
        options={false}
        dateFormatter={(value, valueType) => {
          console.log('====>', value, valueType);
          return value.format('YYYY-MM-DD HH:mm:ss');
        }}
        headerTitle="使用自定义函数进行日期格式化"
      />
    </>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 日期格式化 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>日期格式化</strong>: 展示日期格式化功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>formRef</strong>: 表单引用
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
    </ul>
    <h4>日期格式化特点：</h4>
    <ul>
      <li>
        <strong>字符串格式</strong>: 支持字符串格式化
      </li>
      <li>
        <strong>数字格式</strong>: 支持数字格式化
      </li>
      <li>
        <strong>自定义函数</strong>: 支持自定义格式化函数
      </li>
      <li>
        <strong>多种格式</strong>: 支持多种日期格式
      </li>
      <li>
        <strong>动态配置</strong>: 支持动态配置
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>日期展示</strong>: 日期展示需求
      </li>
      <li>
        <strong>时间格式</strong>: 时间格式统一
      </li>
      <li>
        <strong>国际化</strong>: 国际化日期处理
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { QuestionCircleOutlined, SearchOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Input, Tooltip } from 'antd';
import { useState } from 'react';

const valueEnum = {
  0: 'close',
  1: 'running',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  progress: number;
  money: number;
  memo: string;
  statusText: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[((Math.floor(Math.random() * 10) % 2) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
    statusText: '这是一段很随意的文字',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
    // 自定义筛选项功能具体实现请参考 https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input style={{ width: 188, marginBottom: 8, display: 'block' }} />
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
  },
  {
    title: '状态',
    dataIndex: 'status',
    initialValue: 'close',
    valueType: 'radioButton',
    valueEnum: {
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
    },
  },
  {
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),
    width: 140,
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'date',
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
  },
];

const Demo = () => {
  const [currentStatus, setCurrentStatus] = useState<string>('close');

  const closeColumns: ProColumns<TableListItem>[] = [
    {
      title: '排序',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '关闭时字段',
      dataIndex: 'statusText',
    },
    ...columns,
  ];

  const runningColumns: ProColumns<TableListItem>[] = [
    {
      title: '排序',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '运行时字段',
      dataIndex: 'statusText',
    },
    ...columns,
  ];
  return (
    <ProTable<TableListItem>
      columns={currentStatus === 'close' ? closeColumns : runningColumns}
      request={() => {
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      search={{
        layout: 'vertical',
        defaultCollapsed: false,
      }}
      onSubmit={({ status }) => {
        setCurrentStatus(status);
      }}
      columnsState={{
        persistenceKey: `table_dynamic_status_${currentStatus}`,
        persistenceType: 'sessionStorage',
      }}
      dateFormatter="string"
      toolbar={{
        title: '高级表格',
        tooltip: '动态列持久化',
      }}
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
    <h4>ProTable 动态列状态 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Tooltip</strong>: 提示组件
      </li>
      <li>
        <strong>动态列状态</strong>: 展示动态列状态功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>onSubmit</strong>: 提交事件
      </li>
      <li>
        <strong>columnsState</strong>: 列状态配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
    </ul>
    <h4>动态列状态特点：</h4>
    <ul>
      <li>
        <strong>状态持久化</strong>: 支持状态持久化
      </li>
      <li>
        <strong>动态列配置</strong>: 支持动态列配置
      </li>
      <li>
        <strong>条件渲染</strong>: 支持条件渲染
      </li>
      <li>
        <strong>自定义筛选</strong>: 支持自定义筛选
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
      <li>
        <strong>会话存储</strong>: 支持会话存储
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>个性化配置</strong>: 个性化配置需求
      </li>
      <li>
        <strong>状态保持</strong>: 状态保持功能
      </li>
      <li>
        <strong>用户体验</strong>: 用户体验优化
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

export type TableListItem = {
  id: number;
  name: string;
  lastName: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    id: i,
    name: `John ${i}`,
    lastName: `Doe ${i}`,
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: 'User First Name',
    dataIndex: 'name',
  },
  {
    title: 'User Last Name',
    dataIndex: 'surname',
  },
  {
    title: 'ID',
    dataIndex: 'id',
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={() => Promise.resolve(tableListDataSource)}
      options={{
        search: true,
        setting: {
          children: <HeartSvg />,
        },
      }}
      rowKey="id"
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
    <h4>ProTable 列设置自定义图标 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>列设置自定义图标</strong>: 展示列设置自定义图标功能
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
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>列设置自定义图标特点：</h4>
    <ul>
      <li>
        <strong>自定义图标</strong>: 支持自定义图标
      </li>
      <li>
        <strong>列设置</strong>: 支持列设置功能
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>SVG图标</strong>: 支持SVG图标
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>界面定制</strong>: 界面定制需求
      </li>
      <li>
        <strong>用户体验</strong>: 用户体验优化
      </li>
      <li>
        <strong>品牌展示</strong>: 品牌展示需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DownOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Dropdown, Popconfirm, Space } from 'antd';
import React from 'react';

export type Member = {
  avatar: string;
  realName: string;
  nickName: string;
  email: string;
  outUserNo: string;
  phone: string;
  role: RoleType;
  permission?: string[];
};

export type RoleMapType = Record<
  string,
  {
    name: string;
    desc: string;
  }
>;

export type RoleType = 'admin' | 'operator';

const RoleMap: RoleMapType = {
  admin: {
    name: '管理员',
    desc: '仅拥有指定项目的权限',
  },
  operator: {
    name: '操作员',
    desc: '拥有所有权限',
  },
};

const tableListDataSource: Member[] = [];

const realNames = ['马巴巴', '测试', '测试2', '测试3'];
const nickNames = ['巴巴', '测试', '测试2', '测试3'];
const emails = [
  'baba@antfin.com',
  'test@antfin.com',
  'test2@antfin.com',
  'test3@antfin.com',
];
const phones = ['12345678910', '10923456789', '109654446789', '109223346789'];
const permissions = [[], ['权限点名称1', '权限点名称4'], ['权限点名称1'], []];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    outUserNo: `${102047 + i}`,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    role: i === 0 ? 'admin' : 'operator',
    realName: realNames[i % 4],
    nickName: nickNames[i % 4],
    email: emails[i % 4],
    phone: phones[i % 4],
    permission: permissions[i % 4],
  });
}

const MemberList: React.FC = () => {
  const renderRemoveUser = (text: string) => (
    <Popconfirm
      key="popconfirm"
      title={`确认${text}吗?`}
      okText="是"
      cancelText="否"
    >
      <a>{text}</a>
    </Popconfirm>
  );

  const columns: ProColumns<Member>[] = [
    {
      dataIndex: 'avatar',
      title: '成员名称',
      valueType: 'avatar',
      width: 150,
      render: (dom, record) => (
        <Space>
          <span>{dom}</span>
          {record.nickName}
        </Space>
      ),
    },
    {
      dataIndex: 'email',
      title: '账号',
    },
    {
      dataIndex: 'role',
      title: '角色',
      render: (_, record) => (
        <Dropdown
          menu={{
            items: [
              {
                label: '管理员',
                key: 'admin',
              },
              {
                label: '操作员',
                key: 'operator',
              },
            ],
          }}
        >
          <a>
            {RoleMap[record.role || 'admin'].name} <DownOutlined />
          </a>
        </Dropdown>
      ),
    },
    {
      dataIndex: 'permission',
      title: '权限范围',
      render: (_, record) => {
        const { role, permission = [] } = record;
        if (role === 'admin') {
          return '所有权限';
        }
        return permission && permission.length > 0
          ? permission.join('、')
          : '无';
      },
    },
    {
      title: '操作',
      dataIndex: 'x',
      valueType: 'option',
      render: (_, record) => {
        let node = renderRemoveUser('退出');
        if (record.role === 'admin') {
          node = renderRemoveUser('移除');
        }
        return [<a key="edit">编辑</a>, node];
      },
    },
  ];

  return (
    <ProTable<Member>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="outUserNo"
      pagination={{
        showQuickJumper: true,
      }}
      toolBarRender={false}
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
    <h4>ProTable 无标题 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Dropdown</strong>: 下拉菜单组件
      </li>
      <li>
        <strong>Popconfirm</strong>: 气泡确认框组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>无标题</strong>: 展示无标题功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>无标题特点：</h4>
    <ul>
      <li>
        <strong>头像显示</strong>: 支持头像显示
      </li>
      <li>
        <strong>角色管理</strong>: 支持角色管理
      </li>
      <li>
        <strong>权限控制</strong>: 支持权限控制
      </li>
      <li>
        <strong>下拉菜单</strong>: 支持下拉菜单
      </li>
      <li>
        <strong>确认操作</strong>: 支持确认操作
      </li>
      <li>
        <strong>简洁布局</strong>: 支持简洁布局
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>成员管理</strong>: 成员管理系统
      </li>
      <li>
        <strong>权限管理</strong>: 权限管理功能
      </li>
      <li>
        <strong>用户列表</strong>: 用户列表展示
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <MemberList />
  </div>
);

import { DownOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Tag } from 'antd';

export type Status = {
  color: string;
  text: string;
};

const statusMap = {
  0: {
    color: 'blue',
    text: '进行中',
  },
  1: {
    color: 'green',
    text: '已完成',
  },
  2: {
    color: 'volcano',
    text: '警告',
  },
  3: {
    color: 'red',
    text: '失败',
  },
  4: {
    color: '',
    text: '未完成',
  },
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: Status;
  createdAt: number;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: statusMap[((Math.floor(Math.random() * 10) % 5) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    width: 120,
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '状态',
    width: 120,
    dataIndex: 'status',
    render: (_, record) => (
      <Tag color={record.status.color}>{record.status.text}</Tag>
    ),
  },
  {
    title: '容器数量',
    width: 120,
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },

  {
    title: '创建者',
    width: 120,
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
];

const expandedRowRender = () => {
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56',
    });
  }
  return (
    <ProTable
      columns={[
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Name', dataIndex: 'name', key: 'name' },

        { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          valueType: 'option',
          render: () => [<a key="Pause">Pause</a>, <a key="Stop">Stop</a>],
        },
      ]}
      headerTitle={false}
      search={false}
      options={false}
      dataSource={data}
      pagination={false}
    />
  );
};

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
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      expandable={{ expandedRowRender }}
      search={false}
      dateFormatter="string"
      headerTitle="嵌套表格"
      options={false}
      toolBarRender={() => [
        <Button key="show">查看日志</Button>,
        <Button key="out">
          导出数据
          <DownOutlined />
        </Button>,
        <Button key="primary" type="primary">
          创建应用
        </Button>,
      ]}
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
    <h4>ProTable 嵌套表格 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>嵌套表格</strong>: 展示嵌套表格功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>expandable</strong>: 展开配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>嵌套表格特点：</h4>
    <ul>
      <li>
        <strong>展开行</strong>: 支持展开行
      </li>
      <li>
        <strong>嵌套表格</strong>: 支持嵌套表格
      </li>
      <li>
        <strong>状态标签</strong>: 支持状态标签
      </li>
      <li>
        <strong>排序功能</strong>: 支持排序功能
      </li>
      <li>
        <strong>枚举值</strong>: 支持枚举值
      </li>
      <li>
        <strong>快速跳转</strong>: 支持快速跳转
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>层级数据</strong>: 层级数据展示
      </li>
      <li>
        <strong>详情展示</strong>: 详情展示需求
      </li>
      <li>
        <strong>复杂结构</strong>: 复杂结构数据
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProCard, ProTable } from '@ant-design/pro-components';
import type { BadgeProps } from 'antd';
import { Badge, Button } from 'antd';
import React, { useEffect, useState } from 'react';

type TableListItem = {
  createdAtRange?: number[];
  createdAt: number;
  code: string;
};

type DetailListProps = {
  ip: string;
};

const DetailList: React.FC<DetailListProps> = (props) => {
  const { ip } = props;
  const [tableListDataSource, setTableListDataSource] = useState<
    TableListItem[]
  >([]);

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '时间点',
      key: 'createdAt',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    {
      title: '代码',
      key: 'code',
      width: 80,
      dataIndex: 'code',
      valueType: 'code',
    },
    {
      title: '操作',
      key: 'option',
      width: 80,
      valueType: 'option',
      render: () => [<a key="a">预警</a>],
    },
  ];

  useEffect(() => {
    const source = [];
    for (let i = 0; i < 15; i += 1) {
      source.push({
        createdAt: Date.now() - Math.floor(Math.random() * 10000),
        code: `const getData = async params => {
          const data = await getData(params);
          return { list: data.data, ...data };
        };`,
        key: i,
      });
    }

    setTableListDataSource(source);
  }, [ip]);

  return (
    <ProTable<TableListItem>
      columns={columns}
      dataSource={tableListDataSource}
      pagination={{
        pageSize: 3,
        showSizeChanger: false,
      }}
      rowKey="key"
      toolBarRender={false}
      search={false}
    />
  );
};

type statusType = BadgeProps['status'];

const valueEnum: statusType[] = ['success', 'error', 'processing', 'default'];

export type IpListItem = {
  ip?: string;
  cpu?: number | string;
  mem?: number | string;
  disk?: number | string;
  status: statusType;
};

const ipListDataSource: IpListItem[] = [];

for (let i = 0; i < 10; i += 1) {
  ipListDataSource.push({
    ip: `106.14.98.1${i}4`,
    cpu: 10,
    mem: 20,
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    disk: 30,
  });
}

type IPListProps = {
  ip: string;
  onChange: (id: string) => void;
};

const IPList: React.FC<IPListProps> = (props) => {
  const { onChange } = props;

  const columns: ProColumns<IpListItem>[] = [
    {
      title: 'IP',
      key: 'ip',
      dataIndex: 'ip',
      render: (_, item) => {
        return <Badge status={item.status} text={item.ip} />;
      },
    },
    {
      title: 'CPU',
      key: 'cpu',
      dataIndex: 'cpu',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
    {
      title: 'Mem',
      key: 'mem',
      dataIndex: 'mem',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
    {
      title: 'Disk',
      key: 'disk',
      dataIndex: 'disk',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
  ];
  return (
    <ProTable<IpListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: ipListDataSource,
          success: true,
        });
      }}
      rowKey="ip"
      toolbar={{
        search: {
          onSearch: (value) => {
            alert(value);
          },
        },
        actions: [
          <Button key="list" type="primary">
            新建项目
          </Button>,
        ],
      }}
      options={false}
      pagination={false}
      search={false}
      onRow={(record) => {
        return {
          onClick: () => {
            if (record.ip) {
              onChange(record.ip);
            }
          },
        };
      }}
    />
  );
};

const Demo: React.FC = () => {
  const [ip, setIp] = useState('0.0.0.0');
  return (
    <ProCard split="vertical">
      <ProCard colSpan="384px" ghost>
        <IPList onChange={(cIp) => setIp(cIp)} ip={ip} />
      </ProCard>
      <ProCard title={ip}>
        <DetailList ip={ip} />
      </ProCard>
    </ProCard>
  );
};

const DemoWithDocs = () => {
  return (
    <>
      <Demo />
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProTable 分割表格 Props 说明：</h4>
        <ul>
          <li>
            <strong>ProTable</strong>: 专业表格组件
          </li>
          <li>
            <strong>ProCard</strong>: 专业卡片组件
          </li>
          <li>
            <strong>Badge</strong>: 徽章组件
          </li>
          <li>
            <strong>Button</strong>: 按钮组件
          </li>
          <li>
            <strong>分割表格</strong>: 展示分割表格功能
          </li>
        </ul>
        <h4>ProTable 配置：</h4>
        <ul>
          <li>
            <strong>columns</strong>: 列配置
          </li>
          <li>
            <strong>dataSource</strong>: 数据源
          </li>
          <li>
            <strong>pagination</strong>: 分页配置
          </li>
          <li>
            <strong>rowKey</strong>: 行键
          </li>
          <li>
            <strong>toolBarRender</strong>: 工具栏渲染
          </li>
          <li>
            <strong>options</strong>: 选项配置
          </li>
          <li>
            <strong>search</strong>: 搜索配置
          </li>
          <li>
            <strong>onRow</strong>: 行事件
          </li>
          <li>
            <strong>request</strong>: 请求函数
          </li>
          <li>
            <strong>toolbar</strong>: 工具栏配置
          </li>
        </ul>
        <h4>分割表格特点：</h4>
        <ul>
          <li>
            <strong>垂直分割</strong>: 支持垂直分割
          </li>
          <li>
            <strong>主从结构</strong>: 支持主从结构
          </li>
          <li>
            <strong>联动显示</strong>: 支持联动显示
          </li>
          <li>
            <strong>状态管理</strong>: 支持状态管理
          </li>
          <li>
            <strong>百分比显示</strong>: 支持百分比显示
          </li>
          <li>
            <strong>代码展示</strong>: 支持代码展示
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>监控系统</strong>: 监控系统需求
          </li>
          <li>
            <strong>详情展示</strong>: 详情展示功能
          </li>
          <li>
            <strong>主从界面</strong>: 主从界面需求
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <DemoWithDocs />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import dayjs from 'dayjs';

export type TableListItem = {
  key: number;
  name: string;
  creator: string;
  createdAt: number;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 1; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    creator: creators[Math.floor(Math.random() * creators.length)],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
    formItemProps: {
      lightProps: {
        labelFormatter: (value) => `app-${value}`,
      },
    },
  },
  {
    title: '日期范围',
    dataIndex: 'startTime',
    valueType: 'dateRange',
    hideInTable: true,
    initialValue: [dayjs(), dayjs().add(1, 'day')],
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
      headerTitle="Light Filter"
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      options={false}
      search={{
        filterType: 'light',
      }}
      dateFormatter="string"
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
    <h4>ProTable 轻量过滤器 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>轻量过滤器</strong>: 展示轻量过滤器功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
    </ul>
    <h4>轻量过滤器特点：</h4>
    <ul>
      <li>
        <strong>轻量设计</strong>: 轻量级设计
      </li>
      <li>
        <strong>标签格式化</strong>: 支持标签格式化
      </li>
      <li>
        <strong>日期范围</strong>: 支持日期范围
      </li>
      <li>
        <strong>选择器</strong>: 支持选择器
      </li>
      <li>
        <strong>初始值</strong>: 支持初始值
      </li>
      <li>
        <strong>隐藏列</strong>: 支持隐藏列
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>快速筛选</strong>: 快速筛选需求
      </li>
      <li>
        <strong>简洁界面</strong>: 简洁界面需求
      </li>
      <li>
        <strong>轻量应用</strong>: 轻量应用场景
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';

type GithubIssueItem = {
  key: number;
  name: string;
  createdAt: number;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: 'index',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: 'Title',
    dataIndex: 'name',
  },
  {
    title: 'Money',
    dataIndex: 'title',
    width: 100,
    valueType: 'money',
    renderText: () => (Math.random() * 100).toFixed(2),
  },
];

const SearchOptionTable = () => (
  <ProTable<GithubIssueItem>
    columns={columns}
    request={async () => {
      return {
        data: [
          {
            key: 1,
            name: `TradeCode ${1}`,
            createdAt: 1602572994055,
          },
        ],
        success: true,
      };
    }}
    rowKey="key"
    dateFormatter="string"
    headerTitle="查询 Table"
    search={{
      defaultCollapsed: false,
      labelWidth: 'auto',
      optionRender: (searchConfig, formProps, dom) => [
        ...dom.reverse(),
        <Button key="out" onClick={() => {}}>
          导出
        </Button>,
      ],
    }}
    toolBarRender={() => [
      <Button key="primary" type="primary">
        <PlusOutlined />
        新建
      </Button>,
    ]}
  />
);

const SearchOptionTableWithDocs = () => {
  return (
    <>
      {SearchOptionTable()}
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProTable 搜索选项 Props 说明：</h4>
        <ul>
          <li>
            <strong>ProTable</strong>: 专业表格组件
          </li>
          <li>
            <strong>Button</strong>: 按钮组件
          </li>
          <li>
            <strong>搜索选项</strong>: 展示搜索选项功能
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
            <strong>rowKey</strong>: 行键
          </li>
          <li>
            <strong>dateFormatter</strong>: 日期格式化
          </li>
          <li>
            <strong>headerTitle</strong>: 表格标题
          </li>
          <li>
            <strong>search</strong>: 搜索配置
          </li>
          <li>
            <strong>toolBarRender</strong>: 工具栏渲染
          </li>
        </ul>
        <h4>搜索选项特点：</h4>
        <ul>
          <li>
            <strong>自定义选项</strong>: 支持自定义选项
          </li>
          <li>
            <strong>选项渲染</strong>: 支持选项渲染
          </li>
          <li>
            <strong>默认展开</strong>: 支持默认展开
          </li>
          <li>
            <strong>标签宽度</strong>: 支持标签宽度
          </li>
          <li>
            <strong>导出功能</strong>: 支持导出功能
          </li>
          <li>
            <strong>货币类型</strong>: 支持货币类型
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>高级搜索</strong>: 高级搜索需求
          </li>
          <li>
            <strong>自定义操作</strong>: 自定义操作功能
          </li>
          <li>
            <strong>复杂查询</strong>: 复杂查询需求
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <SearchOptionTableWithDocs />
  </div>
);

import { ProTable } from '@ant-design/pro-components';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  status: string;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
  percent: number | string;
  createdAtRange: number[];
  code: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    createdAtRange: [
      Date.now() - Math.floor(Math.random() * 2000),
      Date.now() - Math.floor(Math.random() * 2000),
    ],
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    percent:
      Math.random() > 0.5
        ? ((i + 1) * 10 + Math.random()).toFixed(3)
        : -((i + 1) * 10 + Math.random()).toFixed(2),
    code: `const getData = async params => {
  const data = await getData(params);
  return { list: data.data, ...data };
};`,
  });
}

const ValueTypeNumberTable = () => (
  <ProTable<TableListItem>
    columns={[
      {
        title: '进度',
        key: 'progress',
        dataIndex: 'progress',
        valueType: (item) => ({
          type: 'progress',
          status: item.status !== 'error' ? 'active' : 'exception',
        }),
        width: 200,
      },
      {
        title: '金额',
        dataIndex: 'money',
        valueType: 'money',
        width: 150,
      },
      {
        title: '数字',
        dataIndex: 'money',
        key: 'digit',
        valueType: 'digit',
        width: 150,
      },
      {
        title: '数字',
        dataIndex: 'money',
        key: 'second',
        valueType: 'second',
        width: 150,
      },
      {
        title: '百分比',
        key: 'percent',
        width: 120,
        dataIndex: 'percent',
        valueType: () => ({
          type: 'percent',
        }),
      },
      {
        title: '操作',
        key: 'option',
        width: 120,
        valueType: 'option',
        render: (_, row, index, action) => [
          <a
            key="a"
            onClick={() => {
              action?.startEditable(row.key);
            }}
          >
            编辑
          </a>,
        ],
      },
    ]}
    request={() => {
      return Promise.resolve({
        total: 200,
        data: tableListDataSource,
        success: true,
      });
    }}
    rowKey="key"
    headerTitle="数字类"
  />
);

const ValueTypeNumberWithDocs = () => {
  return (
    <>
      {ValueTypeNumberTable()}
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProTable 值类型数字 Props 说明：</h4>
        <ul>
          <li>
            <strong>ProTable</strong>: 专业表格组件
          </li>
          <li>
            <strong>值类型数字</strong>: 展示值类型数字功能
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
            <strong>rowKey</strong>: 行键
          </li>
          <li>
            <strong>headerTitle</strong>: 表格标题
          </li>
        </ul>
        <h4>值类型数字特点：</h4>
        <ul>
          <li>
            <strong>进度条</strong>: 支持进度条
          </li>
          <li>
            <strong>金额</strong>: 支持金额
          </li>
          <li>
            <strong>数字</strong>: 支持数字
          </li>
          <li>
            <strong>秒数</strong>: 支持秒数
          </li>
          <li>
            <strong>百分比</strong>: 支持百分比
          </li>
          <li>
            <strong>动态状态</strong>: 支持动态状态
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数字类</strong>: 数字类数据展示
          </li>
          <li>
            <strong>统计展示</strong>: 统计展示功能
          </li>
          <li>
            <strong>进度监控</strong>: 进度监控需求
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <ValueTypeNumberWithDocs />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
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
      cardProps={{ title: '业务定制', variant: 'outlined' }}
      headerTitle={
        <Button
          key="primary"
          type="primary"
          onClick={() => {
            alert('add');
          }}
        >
          添加
        </Button>
      }
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
    <h4>ProTable 卡片标题 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>卡片标题</strong>: 展示卡片标题功能
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
        <strong>cardProps</strong>: 卡片属性配置
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>卡片标题特点：</h4>
    <ul>
      <li>
        <strong>卡片包装</strong>: 支持卡片包装
      </li>
      <li>
        <strong>自定义标题</strong>: 支持自定义标题
      </li>
      <li>
        <strong>请求处理</strong>: 支持请求处理
      </li>
      <li>
        <strong>简洁配置</strong>: 简洁的配置方式
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>业务定制</strong>: 业务定制需求
      </li>
      <li>
        <strong>卡片展示</strong>: 卡片展示功能
      </li>
      <li>
        <strong>数据管理</strong>: 数据管理系统
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';

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
      ErrorBoundary={false}
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
    <h4>ProTable 错误边界 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>错误边界</strong>: 展示错误边界功能
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
        <strong>ErrorBoundary</strong>: 错误边界配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>错误边界特点：</h4>
    <ul>
      <li>
        <strong>错误捕获</strong>: 支持错误捕获
      </li>
      <li>
        <strong>错误处理</strong>: 支持错误处理
      </li>
      <li>
        <strong>容错机制</strong>: 支持容错机制
      </li>
      <li>
        <strong>禁用边界</strong>: 支持禁用错误边界
      </li>
      <li>
        <strong>异常处理</strong>: 支持异常处理
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>错误处理</strong>: 错误处理需求
      </li>
      <li>
        <strong>稳定性保证</strong>: 稳定性保证
      </li>
      <li>
        <strong>用户体验</strong>: 用户体验优化
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DownOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    width: 80,
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
    title: '状态',
    width: 80,
    dataIndex: 'status',
    initialValue: 'all',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '创建时间',
    tooltip: '这是一段描述',
    width: 140,
    key: 'since',
    search: false,
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
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
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        optionRender: false,
        collapsed: false,
      }}
      dateFormatter="string"
      headerTitle="表格标题"
      toolBarRender={() => [
        <Button key="show">查看日志</Button>,
        <Button key="out">
          导出数据
          <DownOutlined />
        </Button>,
        <Button type="primary" key="primary">
          创建应用
        </Button>,
      ]}
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
    <h4>ProTable 无选项 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>无选项</strong>: 展示无选项功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>无选项特点：</h4>
    <ul>
      <li>
        <strong>optionRender</strong>: 禁用选项渲染
      </li>
      <li>
        <strong>折叠控制</strong>: 支持折叠控制
      </li>
      <li>
        <strong>工具栏操作</strong>: 支持工具栏操作
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>排序功能</strong>: 支持排序功能
      </li>
      <li>
        <strong>状态过滤</strong>: 支持状态过滤
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>简洁界面</strong>: 简洁界面需求
      </li>
      <li>
        <strong>只读展示</strong>: 只读展示功能
      </li>
      <li>
        <strong>数据查看</strong>: 数据查看需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Space, Tag } from 'antd';
import { useRef } from 'react';
import request from 'umi-request';
export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

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

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tooltip: 'The title will shrink automatically if it is too long',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'This field is required',
        },
      ],
    },
  },
  {
    disable: true,
    title: 'Status',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: 'select',
    valueEnum: {
      all: { text: 'Very Long'.repeat(50) },
      open: {
        text: 'Unresolved',
        status: 'Error',
      },
      closed: {
        text: 'Resolved',
        status: 'Success',
        disabled: true,
      },
      processing: {
        text: 'In Progress',
        status: 'Processing',
      },
    },
  },
  {
    disable: true,
    title: 'Labels',
    dataIndex: 'labels',
    search: false,
    formItemRender: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: 'Creation Time',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    sorter: true,
    search: false,
  },
  {
    title: 'Creation Time',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: 'Actions',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        Edit
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        View
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: 'Copy' },
          { key: 'delete', name: 'Delete' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params, sort, filter) => {
        console.log(sort, filter);
        await waitTime(2000);
        return request<{
          data: GithubIssueItem[];
        }>('https://proapi.azurewebsites.net/github/issues', {
          params,
        });
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        defaultValue: {
          option: { fixed: 'right', disable: true },
        },
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // Since transform is configured, the submitted parameters are different from the defined ones, so they need to be transformed here
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="Advanced Table"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef.current?.reload();
          }}
          type="primary"
        >
          New
        </Button>,
        <Dropdown
          key="menu"
          menu={{
            items: [
              {
                label: '1st item',
                key: '1',
              },
              {
                label: '2nd item',
                key: '2',
              },
              {
                label: '3rd item',
                key: '3',
              },
            ],
          }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
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
    <h4>ProTable 单表格 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>Dropdown</strong>: 下拉菜单组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>单表格</strong>: 展示单表格功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>cardBordered</strong>: 卡片边框
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>editable</strong>: 可编辑配置
      </li>
      <li>
        <strong>columnsState</strong>: 列状态配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>form</strong>: 表单配置
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>单表格特点：</h4>
    <ul>
      <li>
        <strong>多行编辑</strong>: 支持多行编辑
      </li>
      <li>
        <strong>列状态持久化</strong>: 支持列状态持久化
      </li>
      <li>
        <strong>URL同步</strong>: 支持URL同步
      </li>
      <li>
        <strong>高级搜索</strong>: 支持高级搜索
      </li>
      <li>
        <strong>列设置</strong>: 支持列设置
      </li>
      <li>
        <strong>卡片边框</strong>: 支持卡片边框
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>高级表格</strong>: 高级表格需求
      </li>
      <li>
        <strong>复杂数据</strong>: 复杂数据管理
      </li>
      <li>
        <strong>企业应用</strong>: 企业应用系统
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined, SearchOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Input } from 'antd';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  progress: number;
  money: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '排序',
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
    // 自定义筛选项功能具体实现请参考 https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input style={{ width: 188, marginBlockEnd: 8, display: 'block' }} />
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
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
    title: '状态',
    dataIndex: 'status',
    initialValue: 'all',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
  },
  {
    title: '操作',
    width: 180,
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="link">链路</a>,
      <a key="link2">报警</a>,
      <a key="link3">监控</a>,
      <TableDropdown
        key="actionGroup"
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
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
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        layout: 'vertical',
        defaultCollapsed: false,
      }}
      dateFormatter="string"
      toolbar={{
        title: '高级表格',
        tooltip: '这是一个标题提示',
      }}
      toolBarRender={() => [
        <Button key="danger" danger>
          危险按钮
        </Button>,
        <Button key="show">查看日志</Button>,
        <Button type="primary" key="primary">
          创建应用
        </Button>,

        <Dropdown
          key="menu"
          menu={{
            items: [
              {
                label: '1st item',
                key: '1',
              },
              {
                label: '2nd item',
                key: '2',
              },
              {
                label: '3rd item',
                key: '3',
              },
            ],
          }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
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
    <h4>ProTable 数据源 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>Dropdown</strong>: 下拉菜单组件
      </li>
      <li>
        <strong>数据源</strong>: 展示数据源功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>数据源特点：</h4>
    <ul>
      <li>
        <strong>自定义筛选</strong>: 支持自定义筛选
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>状态过滤</strong>: 支持状态过滤
      </li>
      <li>
        <strong>省略号显示</strong>: 支持省略号显示
      </li>
      <li>
        <strong>复制功能</strong>: 支持复制功能
      </li>
      <li>
        <strong>下拉操作</strong>: 支持下拉操作
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>数据展示</strong>: 数据展示系统
      </li>
      <li>
        <strong>内容管理</strong>: 内容管理平台
      </li>
      <li>
        <strong>应用管理</strong>: 应用管理系统
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Space } from 'antd';
import dayjs from 'dayjs';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  status: string | number;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
  percent: number | string;
  createdAtRange: number[];
  code: string;
  avatar: string;
  image: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    image:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    name: `TradeCode ${i}`,
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    updatedAt:
      dayjs('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 1000),
    createdAt:
      dayjs('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 2000),
    createdAtRange: [
      dayjs('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 2000),
      dayjs('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 2000),
    ],
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    percent:
      Math.random() > 0.5
        ? ((i + 1) * 10 + Math.random()).toFixed(3)
        : -((i + 1) * 10 + Math.random()).toFixed(2),
    code: `const getData = async params => {
  const data = await getData(params);
  return { list: data.data, ...data };
};`,
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
  },
  {
    title: 'border 序号',
    dataIndex: 'index',
    key: 'indexBorder',
    valueType: 'indexBorder',
  },
  {
    title: '代码',
    key: 'code',
    width: 120,
    dataIndex: 'code',
    valueType: 'code',
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    valueType: 'avatar',
    width: 150,
    render: (dom) => (
      <Space>
        <span>{dom}</span>
        <a
          href="https://github.com/chenshuai2144"
          target="_blank"
          rel="noopener noreferrer"
        >
          chenshuai2144
        </a>
      </Space>
    ),
  },
  {
    title: '图片',
    dataIndex: 'image',
    key: 'image',
    valueType: 'image',
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: (_, row, index, action) => [
      <a
        key="a"
        onClick={() => {
          action?.startEditable(row.key);
        }}
      >
        编辑
      </a>,
    ],
  },
];

const Demo = () => (
  <>
    <ProTable<TableListItem>
      columns={columns}
      request={() => {
        return Promise.resolve({
          total: 200,
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      headerTitle="样式类"
    />
    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>ProTable 值类型 Props 说明：</h4>
      <ul>
        <li>
          <strong>ProTable</strong>: 专业表格组件
        </li>
        <li>
          <strong>Space</strong>: 间距组件
        </li>
        <li>
          <strong>值类型</strong>: 展示值类型功能
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
          <strong>rowKey</strong>: 行键
        </li>
        <li>
          <strong>headerTitle</strong>: 表格标题
        </li>
      </ul>
      <h4>值类型特点：</h4>
      <ul>
        <li>
          <strong>序号</strong>: 支持序号
        </li>
        <li>
          <strong>边框序号</strong>: 支持边框序号
        </li>
        <li>
          <strong>代码</strong>: 支持代码
        </li>
        <li>
          <strong>头像</strong>: 支持头像
        </li>
        <li>
          <strong>图片</strong>: 支持图片
        </li>
        <li>
          <strong>自定义渲染</strong>: 支持自定义渲染
        </li>
      </ul>
      <h4>使用场景：</h4>
      <ul>
        <li>
          <strong>样式展示</strong>: 样式展示需求
        </li>
        <li>
          <strong>多媒体</strong>: 多媒体展示
        </li>
        <li>
          <strong>用户信息</strong>: 用户信息展示
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type {
  ActionType,
  EditableFormInstance,
  ProColumns,
  ProFormInstance,
} from '@ant-design/pro-components';
import { EditableProTable, ProCard, ProForm } from '@ant-design/pro-components';
import React, { useRef, useState } from 'react';

type DataSourceType = {
  id: React.Key;
  associate?: string;
};

const defaultData: DataSourceType[] = [];

const Demo = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const formRef = useRef<ProFormInstance<any>>();
  const actionRef = useRef<ActionType>();
  const editableFormRef = useRef<EditableFormInstance>();
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '关联题库',
      dataIndex: 'associate',
      valueType: 'text',
      ellipsis: true,
      formItemProps: {
        rules: [{ required: true, message: 'Required' }],
      },
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, row) => [
        <a
          key="delete"
          onClick={() => {
            const tableDataSource = formRef.current?.getFieldValue(
              'table',
            ) as DataSourceType[];
            formRef.current?.setFieldsValue({
              table: tableDataSource.filter((item) => item.id !== row?.id),
            });
          }}
        >
          移除
        </a>,
        <a
          key="edit"
          onClick={() => {
            actionRef.current?.startEditable(row.id);
          }}
        >
          编辑
        </a>,
      ],
    },
  ];

  return (
    <ProCard>
      <div
        style={{
          maxWidth: 800,
          margin: 'auto',
        }}
      >
        <ProForm<{
          table: DataSourceType[];
        }>
          formRef={formRef}
          initialValues={{
            table: defaultData,
          }}
        >
          <EditableProTable<DataSourceType>
            rowKey="id"
            scroll={{
              x: true,
            }}
            editableFormRef={editableFormRef}
            controlled
            actionRef={actionRef}
            formItemProps={{
              label: '题库编辑',
            }}
            maxLength={10}
            name="table"
            columns={columns}
            recordCreatorProps={{
              record: (index) => {
                return { id: index + 1 };
              },
            }}
            editable={{
              type: 'multiple',
              editableKeys,
              onChange: setEditableRowKeys,
            }}
          />
        </ProForm>
      </div>
    </ProCard>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>EditableProTable 规则 Props 说明：</h4>
    <ul>
      <li>
        <strong>EditableProTable</strong>: 可编辑专业表格组件
      </li>
      <li>
        <strong>ProCard</strong>: 专业卡片组件
      </li>
      <li>
        <strong>ProForm</strong>: 专业表单组件
      </li>
      <li>
        <strong>编辑规则</strong>: 展示编辑规则功能
      </li>
    </ul>
    <h4>EditableProTable 配置：</h4>
    <ul>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>scroll</strong>: 滚动配置
      </li>
      <li>
        <strong>editableFormRef</strong>: 可编辑表单引用
      </li>
      <li>
        <strong>controlled</strong>: 受控模式
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>formItemProps</strong>: 表单项属性
      </li>
      <li>
        <strong>maxLength</strong>: 最大长度
      </li>
      <li>
        <strong>name</strong>: 字段名称
      </li>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>recordCreatorProps</strong>: 记录创建属性
      </li>
      <li>
        <strong>editable</strong>: 可编辑配置
      </li>
    </ul>
    <h4>编辑规则特点：</h4>
    <ul>
      <li>
        <strong>表单验证</strong>: 支持表单验证
      </li>
      <li>
        <strong>必填校验</strong>: 支持必填校验
      </li>
      <li>
        <strong>多行编辑</strong>: 支持多行编辑
      </li>
      <li>
        <strong>动态添加</strong>: 支持动态添加
      </li>
      <li>
        <strong>行内编辑</strong>: 支持行内编辑
      </li>
      <li>
        <strong>数据控制</strong>: 支持数据控制
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>数据编辑</strong>: 数据编辑需求
      </li>
      <li>
        <strong>表单管理</strong>: 表单管理系统
      </li>
      <li>
        <strong>配置管理</strong>: 配置管理功能
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

/* eslint-disable no-console */ import { PlusOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';

type GithubIssueItem = {
  key: number;
  name: string;
  createdAt: number;
};

const MySelect: React.FC<{
  state: {
    type: number;
  };
  /** Value 和 onChange 会被自动注入 */
  value?: string;
  onChange?: (value: string) => void;
}> = (props) => {
  const { state } = props;

  const [innerOptions, setOptions] = useState<
    {
      label: React.ReactNode;
      value: number;
    }[]
  >([]);

  useEffect(() => {
    const { type } = state || {};
    if (type === 2) {
      setOptions([
        {
          label: '星期一',
          value: 1,
        },
        {
          label: '星期二',
          value: 2,
        },
      ]);
    } else {
      setOptions([
        {
          label: '一月',
          value: 1,
        },
        {
          label: '二月',
          value: 2,
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(state)]);

  return (
    <Select
      options={innerOptions}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

const Demo = () => {
  const columns: ProColumns<GithubIssueItem>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'indexBorder',
    },
    {
      title: '标题',
      dataIndex: 'name',
    },
    {
      title: '动态表单',
      key: 'direction',
      hideInTable: true,
      dataIndex: 'direction',
      formItemRender: (item, { type, defaultRender, ...rest }, form) => {
        if (type === 'form') {
          return null;
        }
        const stateType = form.getFieldValue('state');
        if (stateType === 3) {
          return <Input />;
        }
        if (stateType === 4) {
          return null;
        }
        return (
          <MySelect
            {...rest}
            state={{
              type: stateType,
            }}
          />
        );
      },
    },
    {
      title: '状态',
      dataIndex: 'state',
      initialValue: 1,
      valueType: 'select',
      request: async () => [
        {
          label: '月份',
          value: 1,
        },
        {
          label: '周',
          value: 2,
        },
        {
          label: '自定义',
          value: 3,
        },
        {
          label: '不展示',
          value: 4,
        },
      ],
    },
  ];

  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      request={async (params) => {
        console.log(`request params:`, params);
        return {
          data: [
            {
              key: 1,
              name: `TradeCode ${1}`,
              createdAt: 1602572994055,
              state: 'closed',
            },
          ],
          success: true,
        };
      }}
      rowKey="key"
      tableLayout="fixed"
      dateFormatter="string"
      headerTitle="动态自定义搜索栏"
      search={{
        defaultCollapsed: false,
        optionRender: (searchConfig, formProps, dom) => [
          ...dom.reverse(),
          <Button
            key="out"
            onClick={() => {
              const values = searchConfig?.form?.getFieldsValue();
              console.log(values);
            }}
          >
            导出
          </Button>,
        ],
      }}
      toolBarRender={() => [
        <Button key="3" type="primary">
          <PlusOutlined />
          新建
        </Button>,
      ]}
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
    <h4>ProTable 联动表单 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>Input</strong>: 输入框组件
      </li>
      <li>
        <strong>Select</strong>: 选择器组件
      </li>
      <li>
        <strong>联动表单</strong>: 展示联动表单功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>tableLayout</strong>: 表格布局
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>联动表单特点：</h4>
    <ul>
      <li>
        <strong>动态表单</strong>: 支持动态表单
      </li>
      <li>
        <strong>条件渲染</strong>: 支持条件渲染
      </li>
      <li>
        <strong>表单联动</strong>: 支持表单联动
      </li>
      <li>
        <strong>自定义组件</strong>: 支持自定义组件
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
      <li>
        <strong>选项渲染</strong>: 支持选项渲染
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>复杂表单</strong>: 复杂表单需求
      </li>
      <li>
        <strong>动态配置</strong>: 动态配置功能
      </li>
      <li>
        <strong>条件展示</strong>: 条件展示需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';

const cascaderOptions = [
  {
    field: 'front end',
    value: 'fe',
    language: [
      {
        field: 'Javascript',
        value: 'js',
      },
      {
        field: 'Typescript',
        value: 'ts',
      },
    ],
  },
  {
    field: 'back end',
    value: 'be',
    language: [
      {
        field: 'Java',
        value: 'java',
      },
      {
        field: 'Go',
        value: 'go',
      },
    ],
  },
];

const valueEnumMap = {
  0: 'running',
  1: 'online',
  2: 'error',
};

export type TableListItem = {
  key: number;
  status: string | number;
  cascader: string[];
  treeSelect: string[];
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    status: valueEnumMap[((Math.floor(Math.random() * 10) % 3) + '') as '0'],
    cascader: ['fe', 'js'],
    treeSelect: ['fe', 'js'],
  });
}

const valueEnum = {
  all: { text: '全部', status: 'Default' },
  running: { text: '运行中', status: 'Processing' },
  online: { text: '已上线', status: 'Success' },
  error: { text: '异常', status: 'Error' },
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '状态',
    valueType: 'select',
    dataIndex: 'status',
    initialValue: ['all'],
    width: 100,
    valueEnum,
  },
  {
    title: '单选状态',
    dataIndex: 'status',
    valueType: 'radio',
    initialValue: 'all',
    width: 100,
    valueEnum,
  },
  {
    title: '单选按钮状态',
    dataIndex: 'status',
    valueType: 'radioButton',
    initialValue: 'all',
    width: 100,
    valueEnum,
  },
  {
    title: '多选状态',
    dataIndex: 'status',
    initialValue: ['all'],
    width: 100,
    valueType: 'checkbox',
    valueEnum,
  },
  {
    title: '级联选择器',
    key: 'cascader',
    dataIndex: 'cascader',
    width: 100,
    fieldProps: {
      options: cascaderOptions,
      fieldNames: {
        children: 'language',
        label: 'field',
      },
    },
    valueType: 'cascader',
  },
  {
    title: '树形下拉框',
    key: 'treeSelect',
    dataIndex: 'treeSelect',
    width: 100,
    // request: async () => cascaderOptions,
    fieldProps: {
      options: cascaderOptions,
      fieldNames: {
        children: 'language',
        label: 'field',
      },
      showSearch: true,
      filterTreeNode: true,
      multiple: true,
      treeNodeFilterProp: 'field',
    },
    valueType: 'treeSelect',
  },
  {
    title: '时间范围',
    key: 'dateTimeRange',
    dataIndex: 'dateTimeRange',
    hideInTable: true,
    valueType: 'dateTimeRange',
    fieldProps: {
      // placeholder: []
    },
    formItemRender: (_, { type, defaultRender }) => {
      if (type === 'form') {
        return null;
      }

      return defaultRender(_);
    },
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: (_, row, index, action) => [
      <a
        key="a"
        onClick={() => {
          action?.startEditable(row.key);
        }}
      >
        编辑
      </a>,
    ],
  },
];

const Demo = () => (
  <>
    <ProTable<TableListItem>
      columns={columns}
      request={() => {
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      search={{
        defaultCollapsed: false,
        span: 12,
        labelWidth: 'auto',
      }}
      editable={{
        type: 'multiple',
      }}
      rowKey="key"
      headerTitle="样式类"
    />
    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>ProTable 值类型选择 Props 说明：</h4>
      <ul>
        <li>
          <strong>ProTable</strong>: 专业表格组件
        </li>
        <li>
          <strong>值类型选择</strong>: 展示值类型选择功能
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
          <strong>search</strong>: 搜索配置
        </li>
        <li>
          <strong>editable</strong>: 可编辑配置
        </li>
        <li>
          <strong>rowKey</strong>: 行键
        </li>
        <li>
          <strong>headerTitle</strong>: 表格标题
        </li>
      </ul>
      <h4>值类型选择特点：</h4>
      <ul>
        <li>
          <strong>选择器</strong>: 支持选择器
        </li>
        <li>
          <strong>单选按钮</strong>: 支持单选按钮
        </li>
        <li>
          <strong>多选框</strong>: 支持多选框
        </li>
        <li>
          <strong>级联选择</strong>: 支持级联选择
        </li>
        <li>
          <strong>树形选择</strong>: 支持树形选择
        </li>
        <li>
          <strong>时间范围</strong>: 支持时间范围
        </li>
        <li>
          <strong>多行编辑</strong>: 支持多行编辑
        </li>
      </ul>
      <h4>使用场景：</h4>
      <ul>
        <li>
          <strong>表单选择</strong>: 表单选择需求
        </li>
        <li>
          <strong>数据筛选</strong>: 数据筛选功能
        </li>
        <li>
          <strong>复杂选择</strong>: 复杂选择需求
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns, ProFormInstance } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';

export type TableListItem = {
  key: number;
  name: string;
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '创建时间',
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'date',
  },
];

const Demo = () => {
  const ref = useRef<ProFormInstance>();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ProTable<TableListItem>
      columns={columns}
      request={() =>
        Promise.resolve({
          data: [
            {
              key: 1,
              name: `TradeCode ${1}`,
              createdAt: 1602572994055,
            },
          ],
          success: true,
        })
      }
      rowKey="key"
      pagination={{
        showSizeChanger: true,
      }}
      search={{
        collapsed,
        onCollapse: setCollapsed,
      }}
      formRef={ref}
      toolBarRender={() => [
        <Button
          key="set"
          onClick={() => {
            if (ref.current) {
              ref.current.setFieldsValue({
                name: 'test-xxx',
              });
            }
          }}
        >
          赋值
        </Button>,
        <Button
          key="submit"
          onClick={() => {
            if (ref.current) {
              ref.current.submit();
            }
          }}
        >
          提交
        </Button>,
      ]}
      options={false}
      dateFormatter="string"
      headerTitle="表单赋值"
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
    <h4>ProTable 表单 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>表单</strong>: 展示表单功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>formRef</strong>: 表单引用
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
    </ul>
    <h4>表单特点：</h4>
    <ul>
      <li>
        <strong>表单引用</strong>: 支持表单引用
      </li>
      <li>
        <strong>字段赋值</strong>: 支持字段赋值
      </li>
      <li>
        <strong>表单提交</strong>: 支持表单提交
      </li>
      <li>
        <strong>折叠控制</strong>: 支持折叠控制
      </li>
      <li>
        <strong>工具栏操作</strong>: 支持工具栏操作
      </li>
      <li>
        <strong>表单控制</strong>: 支持表单控制
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>表单管理</strong>: 表单管理需求
      </li>
      <li>
        <strong>数据操作</strong>: 数据操作功能
      </li>
      <li>
        <strong>交互控制</strong>: 交互控制需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, ConfigProvider, Space, Tag } from 'antd';
import arEGIntl from 'antd/lib/locale/ar_EG';
import { useRef } from 'react';
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

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'العنوان',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tooltip: 'سيتم تقليص العنوان في حال كان طويل جدًا',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'هذا الحقل مطلوب',
        },
      ],
    },
    width: '30%',
    search: false,
  },
  {
    title: 'الحالة',
    dataIndex: 'state',
    initialValue: 'open',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: 'الكل', status: 'Default' },
      open: {
        text: 'غير محلولة',
        status: 'Error',
      },
      closed: {
        text: 'تم حلها',
        status: 'Success',
      },
      processing: {
        text: 'نعمل عليها',
        status: 'Processing',
      },
    },
  },
  {
    title: 'التسمية',
    dataIndex: 'labels',
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: 'التشغيل',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="link">
        رابط
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: 'نسخ' },
          { key: 'delete', name: 'حذف' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();

  return (
    <ConfigProvider locale={arEGIntl} direction="rtl">
      <ProTable<GithubIssueItem>
        columns={columns}
        actionRef={actionRef}
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
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        dateFormatter="string"
        headerTitle="نموذج احترافي"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            جديد
          </Button>,
        ]}
      />
    </ConfigProvider>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable RTL 表格 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>ConfigProvider</strong>: 配置提供者组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>RTL表格</strong>: 展示RTL表格功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>RTL表格特点：</h4>
    <ul>
      <li>
        <strong>RTL支持</strong>: 支持RTL布局
      </li>
      <li>
        <strong>阿拉伯语</strong>: 支持阿拉伯语
      </li>
      <li>
        <strong>国际化</strong>: 支持国际化
      </li>
      <li>
        <strong>方向控制</strong>: 支持方向控制
      </li>
      <li>
        <strong>本地化</strong>: 支持本地化
      </li>
      <li>
        <strong>多语言</strong>: 支持多语言
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>阿拉伯语应用</strong>: 阿拉伯语应用需求
      </li>
      <li>
        <strong>RTL布局</strong>: RTL布局需求
      </li>
      <li>
        <strong>国际化系统</strong>: 国际化系统
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { LoadingOutlined, ReloadOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  status: string;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
  });
}

const timeAwait = (waitTime: number): Promise<void> =>
  new Promise((res) =>
    window.setTimeout(() => {
      res();
    }, waitTime),
  );

const columns: ProColumns<TableListItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
    width: 80,
  },
  {
    title: '状态',
    dataIndex: 'status',
    initialValue: 'all',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '进度',
    key: 'progress',
    dataIndex: 'progress',
    valueType: (item) => ({
      type: 'progress',
      status: item.status !== 'error' ? 'active' : 'exception',
    }),
  },
  {
    title: '时间',
    key: 'since',
    children: [
      {
        title: '创建时间',
        key: 'createdAt',
        dataIndex: 'createdAt',
        valueType: 'date',
      },
      {
        title: '更新时间',
        key: 'updatedAt',
        dataIndex: 'updatedAt',
        valueType: 'date',
      },
    ],
  },
];

const Demo = () => {
  const [time, setTime] = useState(() => Date.now());
  const [polling, setPolling] = useState<number>(2000);
  return (
    <ProTable<TableListItem>
      columns={columns}
      rowKey="key"
      pagination={{
        showSizeChanger: true,
      }}
      polling={polling}
      request={async () => {
        await timeAwait(2000);
        setTime(Date.now());
        return {
          data: tableListDataSource,
          success: true,
          total: tableListDataSource.length,
        };
      }}
      dateFormatter="string"
      headerTitle={`上次更新时间：${dayjs(time).format('HH:mm:ss')}`}
      toolBarRender={() => [
        <Button
          key="3"
          type="primary"
          onClick={() => {
            if (polling) {
              setPolling(0);
              return;
            }
            setPolling(2000);
          }}
        >
          {polling ? <LoadingOutlined /> : <ReloadOutlined />}
          {polling ? '停止轮询' : '开始轮询'}
        </Button>,
      ]}
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
    <h4>ProTable 轮询 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>轮询</strong>: 展示轮询功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>polling</strong>: 轮询配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>轮询特点：</h4>
    <ul>
      <li>
        <strong>自动轮询</strong>: 支持自动轮询
      </li>
      <li>
        <strong>手动控制</strong>: 支持手动控制
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
      <li>
        <strong>进度显示</strong>: 支持进度显示
      </li>
      <li>
        <strong>时间更新</strong>: 支持时间更新
      </li>
      <li>
        <strong>动态配置</strong>: 支持动态配置
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>实时数据</strong>: 实时数据更新
      </li>
      <li>
        <strong>监控系统</strong>: 监控系统需求
      </li>
      <li>
        <strong>状态跟踪</strong>: 状态跟踪功能
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Result, Switch } from 'antd';
import type { ErrorInfo } from 'react';
import React, { useState } from 'react';

class CustomBoundary extends React.Component<
  Record<string, any>,
  { hasError: boolean; errorInfo: string }
> {
  state = { hasError: false, errorInfo: '' };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorInfo: error.message };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Result
          icon={
            <img
              width={256}
              src="https://gw.alipayobjects.com/zos/antfincdn/zIgkN%26mpMZ/shibaizhuangtaizuo.png"
            />
          }
          style={{
            height: '100%',
            background: '#fff',
          }}
          title="错误处理"
          extra={
            <>
              <div
                style={{
                  maxWidth: 620,
                  textAlign: 'start',
                  backgroundColor: 'rgba(255,229,100,0.3)',
                  borderInlineStartColor: '#ffe564',
                  borderInlineStartWidth: '9px',
                  borderInlineStartStyle: 'solid',
                  padding: '20px 45px 20px 26px',
                  margin: 'auto',
                  marginBlockEnd: '30px',
                  marginBlockStart: '20px',
                }}
              >
                <p>注意</p>
                <p>
                  错误边界<strong>无法</strong>捕获以下场景中产生的错误：
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                  }}
                >
                  <li>
                    事件处理（
                    <a href="https://zh-hans.reactjs.org/docs/error-boundaries.html#how-about-event-handlers#how-about-event-handlers">
                      了解更多
                    </a>
                    ）
                  </li>
                  <li>
                    异步代码（例如 <code>setTimeout</code> 或{' '}
                    <code>requestAnimationFrame</code> 回调函数）
                  </li>
                  <li>服务端渲染</li>
                  <li>它自身抛出来的错误（并非它的子组件）</li>
                </ul>
              </div>
              <Button
                danger
                type="primary"
                onClick={() => {
                  window.location.reload();
                }}
              >
                刷新页面
              </Button>
            </>
          }
        />
      );
    }
    return this.props.children;
  }
}

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

const ErrorTrigger = () => {
  // default to throw error for snapshot test
  const [error, setError] = useState<boolean>(true);
  if (error) throw new Error('渲染发生了错误');
  return (
    <Button
      danger
      type="primary"
      onClick={() => {
        setError(true);
      }}
    >
      触发错误
    </Button>
  );
};

const Demo = () => {
  const [custom, setCustom] = useState(true);
  return (
    <>
      <Switch
        checkedChildren="使用自定义错误边界"
        unCheckedChildren="使用默认错误边界"
        checked={custom}
        onChange={(checked) => setCustom(checked)}
      />
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
        ErrorBoundary={custom ? CustomBoundary : undefined}
        headerTitle={<ErrorTrigger />}
        rowKey="key"
        search={false}
      />
    </>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 错误边界 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Switch</strong>: 开关组件
      </li>
      <li>
        <strong>Result</strong>: 结果组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>错误边界</strong>: 展示错误边界功能
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
        <strong>ErrorBoundary</strong>: 错误边界配置
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>错误边界特点：</h4>
    <ul>
      <li>
        <strong>自定义边界</strong>: 支持自定义错误边界
      </li>
      <li>
        <strong>错误捕获</strong>: 支持错误捕获
      </li>
      <li>
        <strong>错误处理</strong>: 支持错误处理
      </li>
      <li>
        <strong>容错机制</strong>: 支持容错机制
      </li>
      <li>
        <strong>错误展示</strong>: 支持错误展示
      </li>
      <li>
        <strong>错误恢复</strong>: 支持错误恢复
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>错误处理</strong>: 错误处理需求
      </li>
      <li>
        <strong>稳定性保证</strong>: 稳定性保证
      </li>
      <li>
        <strong>用户体验</strong>: 用户体验优化
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DownOutlined } from '@ant-design/icons';
import type {
  ProColumnType,
  ProFormInstance,
} from '@ant-design/pro-components';
import {
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormDigit,
  ProFormGroup,
  ProFormList,
  ProFormRadio,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
  ProTable,
  useDebounceFn,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';

const valueTypeArray = [
  'password',
  'money',
  'textarea',
  'option',
  'date',
  'dateWeek',
  'dateMonth',
  'dateQuarter',
  'dateYear',
  'dateRange',
  'dateTimeRange',
  'dateTime',
  'time',
  'timeRange',
  'text',
  'select',
  'checkbox',
  'rate',
  'radio',
  'radioButton',
  'index',
  'indexBorder',
  'progress',
  'percent',
  'digit',
  'second',
  'avatar',
  'code',
  'switch',
  'fromNow',
  'image',
  'jsonCode',
];

type DataType = {
  age: number;
  address: string;
  name: string;
  time: number;
  key: number;
  description: string;
};

const columns: ProColumnType<DataType>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'time',
    dataIndex: 'time',
    valueType: 'date',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    valueType: 'select',
    filters: true,
    onFilter: true,
    valueEnum: {
      london: {
        text: '伦敦',
      },
      'New York': {
        text: '纽约',
      },
    },
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    valueType: 'option',
    render: () => [
      <a key="delete">Delete</a>,
      <a key="link" className="ant-dropdown-link">
        More actions <DownOutlined />
      </a>,
    ],
  },
];

const genData = (total: number) => {
  if (total < 1) {
    return [];
  }
  const data: DataType[] = [];
  for (let i = 1; i <= total; i += 1) {
    data.push({
      key: i,
      name: 'John Brown',
      age: i + 10,
      time: 1661136793649 + i * 1000,
      address: i % 2 === 0 ? 'london' : 'New York',
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
  }
  return data;
};

const initData = {
  bordered: true,
  loading: false,
  columns,
  pagination: {
    show: true,
    pageSize: 5,
    current: 1,
    total: 100,
  },
  size: 'small',
  expandable: false,
  headerTitle: '高级表格',
  tooltip: '高级表格 tooltip',
  showHeader: true,
  footer: true,
  rowSelection: {},
  scroll: false,
  hasData: true,
  tableLayout: undefined,
  toolBarRender: true,
  search: {
    show: true,
    span: 12,
    collapseRender: true,
    labelWidth: 80,
    filterType: 'query',
    layout: 'horizontal',
  },
  options: {
    show: true,
    density: true,
    fullScreen: true,
    setting: true,
  },
};

const DynamicSettings = () => {
  const ref = useRef<ProFormInstance>();

  const [config, setConfig] = useState<any>(initData);

  /** 去抖配置 */
  const updateConfig = useDebounceFn(async (state) => {
    setConfig(state);
  }, 20);

  const tableColumns = (config.columns || columns)?.map((item: any) => ({
    ...item,
    ellipsis: config.ellipsis,
  }));

  return (
    <ProCard
      split="vertical"
      variant="outlined"
      headerBordered
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <ProCard
        style={{
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <ProTable
          {...config}
          formRef={ref}
          pagination={
            config.pagination?.show
              ? config.pagination
              : {
                  pageSize: 5,
                }
          }
          search={config.search?.show ? config.search : {}}
          expandable={
            config.expandable && {
              expandedRowRender: (record: DataType) => (
                <p>{record.description}</p>
              ),
            }
          }
          options={config.options?.show ? config.options : false}
          toolBarRender={
            config?.toolBarRender
              ? () => [
                  <Button key="refresh" type="primary">
                    刷新
                  </Button>,
                ]
              : false
          }
          footer={config.footer ? () => 'Here is footer' : false}
          headerTitle={config.headerTitle}
          columns={tableColumns}
          dataSource={genData(config.pagination?.total || 10)}
          scroll={config.scroll}
        />
      </ProCard>
      <ProForm
        layout="inline"
        initialValues={initData}
        submitter={false}
        colon={false}
        onValuesChange={(_, values) => updateConfig.run(values)}
      >
        <ProCard
          colSpan="470px"
          style={{
            height: '100vh',
            overflow: 'auto',
            boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)',
            top: 0,
            right: 0,
            width: 470,
          }}
          tabs={{
            items: [
              {
                label: '基本配置',
                key: 'tab1',
                children: (
                  <>
                    <ProForm.Group
                      title="表格配置"
                      size={0}
                      collapsible
                      direction="horizontal"
                      labelLayout="twoLine"
                    >
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="边框"
                        tooltip="bordered"
                        name="bordered"
                      />
                      <ProFormRadio.Group
                        tooltip={`size="middle"`}
                        radioType="button"
                        fieldProps={{
                          size: 'small',
                        }}
                        label="尺寸"
                        options={[
                          {
                            label: '大',
                            value: 'default',
                          },
                          {
                            label: '中',
                            value: 'middle',
                          },
                          {
                            label: '小',
                            value: 'small',
                          },
                        ]}
                        name="size"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="加载中"
                        tooltip="loading"
                        name="loading"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="显示标题"
                        tooltip="showHeader"
                        name="showHeader"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="页脚"
                        tooltip="footer"
                        name="footer"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="支持展开"
                        tooltip="expandable"
                        name="expandable"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="行选择"
                        tooltip="rowSelection"
                        name="rowSelection"
                      />
                    </ProForm.Group>
                    <ProForm.Group
                      size={0}
                      collapsible
                      direction="horizontal"
                      labelLayout="twoLine"
                      tooltip="toolBarRender={false}"
                      title="工具栏"
                      extra={
                        <ProFormSwitch
                          fieldProps={{
                            size: 'small',
                          }}
                          noStyle
                          name="toolBarRender"
                        />
                      }
                    >
                      <ProFormText
                        fieldProps={{
                          size: 'small',
                        }}
                        label="表格标题"
                        name="headerTitle"
                        tooltip="headerTitle={false}"
                      />
                      <ProFormText
                        fieldProps={{
                          size: 'small',
                        }}
                        label="表格的tooltip"
                        name="tooltip"
                        tooltip="tooltip={false}"
                      />

                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="Icon 显示"
                        name={['options', 'show']}
                        tooltip="options={false}"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="密度 Icon"
                        name={['options', 'density']}
                        tooltip="options={{ density:false }}"
                      />
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        label="keyWords"
                        name={['options', 'search']}
                        tooltip="options={{ search:'keyWords' }}"
                      />
                      <ProFormSwitch
                        label="全屏 Icon"
                        fieldProps={{
                          size: 'small',
                        }}
                        name={['options', 'fullScreen']}
                        tooltip="options={{ fullScreen:false }}"
                      />
                      <ProFormSwitch
                        label="列设置 Icon"
                        fieldProps={{
                          size: 'small',
                        }}
                        tooltip="options={{ setting:false }}"
                        name={['options', 'setting']}
                      />
                    </ProForm.Group>
                  </>
                ),
              },
              {
                label: '表单配置',
                key: 'tab3',
                children: (
                  <ProForm.Group
                    title="查询表单"
                    size={0}
                    collapsible
                    tooltip="search={false}"
                    direction="horizontal"
                    labelLayout="twoLine"
                    extra={
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        noStyle
                        name={['search', 'show']}
                      />
                    }
                  >
                    <ProFormText
                      label="查询按钮文案"
                      fieldProps={{
                        size: 'small',
                      }}
                      tooltip={`search={{searchText:"查询"}}`}
                      name={['search', 'searchText']}
                    />
                    <ProFormText
                      label="重置按钮文案"
                      fieldProps={{
                        size: 'small',
                      }}
                      tooltip={`search={{resetText:"重置"}}`}
                      name={['search', 'resetText']}
                    />
                    <ProFormSwitch
                      fieldProps={{
                        size: 'small',
                      }}
                      label="收起按钮"
                      tooltip={`search={{collapseRender:false}}`}
                      name={['search', 'collapseRender']}
                    />
                    <ProFormSwitch
                      fieldProps={{
                        size: 'small',
                      }}
                      label="表单收起"
                      name={['search', 'collapsed']}
                      tooltip={`search={{collapsed:false}}`}
                    />
                    <ProFormSelect
                      fieldProps={{
                        size: 'small',
                      }}
                      tooltip={`search={{span:8}}`}
                      options={[
                        {
                          label: '24',
                          value: 24,
                        },
                        {
                          label: '12',
                          value: 12,
                        },
                        {
                          label: '8',
                          value: 8,
                        },
                        {
                          label: '6',
                          value: 6,
                        },
                      ]}
                      label="表单栅格"
                      name={['search', 'span']}
                    />
                    <ProFormRadio.Group
                      radioType="button"
                      fieldProps={{
                        size: 'small',
                      }}
                      name={['search', 'layout']}
                      tooltip={`search={{layout:"${config.search?.layout}"}}`}
                      options={[
                        {
                          label: '垂直',
                          value: 'vertical',
                        },
                        {
                          label: '水平',
                          value: 'horizontal',
                        },
                      ]}
                      label="表单布局"
                    />
                    <ProFormRadio.Group
                      radioType="button"
                      fieldProps={{
                        size: 'small',
                      }}
                      name={['search', 'filterType']}
                      tooltip={`search={{filterType:"light"}}`}
                      options={[
                        {
                          label: '默认',
                          value: 'query',
                        },
                        {
                          label: '轻量',
                          value: 'light',
                        },
                      ]}
                      label="表单类型"
                    />
                  </ProForm.Group>
                ),
              },
              {
                label: '数据配置',
                key: 'tab2',
                children: (
                  <ProForm.Group
                    title="分页器"
                    size={0}
                    collapsible
                    tooltip="pagination={}"
                    direction="horizontal"
                    labelLayout="twoLine"
                    extra={
                      <ProFormSwitch
                        fieldProps={{
                          size: 'small',
                        }}
                        noStyle
                        name={['pagination', 'show']}
                      />
                    }
                  >
                    <ProFormRadio.Group
                      tooltip={`pagination={size:"middle"}`}
                      radioType="button"
                      fieldProps={{
                        size: 'small',
                      }}
                      label="尺寸"
                      options={[
                        {
                          label: '默认',
                          value: 'default',
                        },
                        {
                          label: '小',
                          value: 'small',
                        },
                      ]}
                      name={['pagination', 'size']}
                    />
                    <ProFormDigit
                      fieldProps={{
                        size: 'small',
                      }}
                      label="页码"
                      tooltip={`pagination={{ current:10 }}`}
                      name={['pagination', 'current']}
                    />
                    <ProFormDigit
                      fieldProps={{
                        size: 'small',
                      }}
                      label="每页数量"
                      tooltip={`pagination={{ pageSize:10 }}`}
                      name={['pagination', 'pageSize']}
                    />
                    <ProFormDigit
                      fieldProps={{
                        size: 'small',
                      }}
                      label="数据总数"
                      tooltip={`pagination={{ total:100 }}`}
                      name={['pagination', 'total']}
                    />
                  </ProForm.Group>
                ),
              },
              {
                label: '列配置',
                key: 'tab4',
                children: (
                  <ProFormList
                    name="columns"
                    itemRender={({ listDom, action }) => {
                      return (
                        <ProCard
                          variant="outlined"
                          style={{
                            marginBlockEnd: 8,
                            position: 'relative',
                          }}
                          styles={{
                            body: {
                              padding: 8,
                              paddingInlineEnd: 16,
                              paddingBlockStart: 16,
                            },
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              top: -4,
                              right: 2,
                            }}
                          >
                            {action}
                          </div>
                          {listDom}
                        </ProCard>
                      );
                    }}
                  >
                    <ProFormText
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      name="title"
                      label="标题"
                    />
                    <ProFormGroup
                      style={{
                        marginBlockStart: 8,
                      }}
                    >
                      <ProFormSwitch label="过长省略" name="ellipsis" />
                      <ProFormSwitch label="复制按钮" name="copyable" />
                    </ProFormGroup>
                    <ProFormGroup
                      style={{
                        marginBlockStart: 8,
                      }}
                      size={8}
                    >
                      <ProFormSelect
                        label="dataIndex"
                        width="xs"
                        name="dataIndex"
                        valueEnum={{
                          age: 'age',
                          address: 'address',
                          name: 'name',
                          time: 'time',
                          description: 'string',
                        }}
                      />
                      <ProFormSelect
                        width="xs"
                        label="值类型"
                        name="valueType"
                        fieldProps={{
                          onChange: () => {
                            ref.current?.resetFields();
                          },
                        }}
                        options={valueTypeArray.map((value) => ({
                          label: value,
                          value,
                        }))}
                      />
                    </ProFormGroup>
                    <ProFormGroup
                      style={{
                        marginBlockStart: 8,
                      }}
                      size={8}
                    >
                      <ProFormText width="xs" label="列提示" name="tooltip" />
                    </ProFormGroup>
                    <ProFormDependency name={['valueType', 'valueEnum']}>
                      {({ valueType, valueEnum }) => {
                        if (valueType !== 'select') {
                          return null;
                        }
                        return (
                          <ProFormTextArea
                            formItemProps={{
                              style: {
                                marginBlockStart: 8,
                              },
                            }}
                            fieldProps={{
                              value: JSON.stringify(valueEnum),
                            }}
                            normalize={(value) => {
                              return JSON.parse(value);
                            }}
                            label="数据枚举"
                            name="valueEnum"
                          />
                        );
                      }}
                    </ProFormDependency>
                  </ProFormList>
                ),
              },
            ],
          }}
        />
      </ProForm>
    </ProCard>
  );
};

const DynamicSettingsWithDocs = () => {
  return (
    <>
      <DynamicSettings />
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProTable 动态设置 Props 说明：</h4>
        <ul>
          <li>
            <strong>ProTable</strong>: 专业表格组件
          </li>
          <li>
            <strong>ProCard</strong>: 专业卡片组件
          </li>
          <li>
            <strong>ProForm</strong>: 专业表单组件
          </li>
          <li>
            <strong>ProFormList</strong>: 专业表单列表组件
          </li>
          <li>
            <strong>动态设置</strong>: 展示动态设置功能
          </li>
        </ul>
        <h4>ProTable 配置：</h4>
        <ul>
          <li>
            <strong>formRef</strong>: 表单引用
          </li>
          <li>
            <strong>pagination</strong>: 分页配置
          </li>
          <li>
            <strong>search</strong>: 搜索配置
          </li>
          <li>
            <strong>expandable</strong>: 展开配置
          </li>
          <li>
            <strong>options</strong>: 选项配置
          </li>
          <li>
            <strong>toolBarRender</strong>: 工具栏渲染
          </li>
          <li>
            <strong>footer</strong>: 页脚配置
          </li>
          <li>
            <strong>headerTitle</strong>: 表格标题
          </li>
          <li>
            <strong>columns</strong>: 列配置
          </li>
          <li>
            <strong>dataSource</strong>: 数据源
          </li>
          <li>
            <strong>scroll</strong>: 滚动配置
          </li>
        </ul>
        <h4>动态设置特点：</h4>
        <ul>
          <li>
            <strong>实时配置</strong>: 支持实时配置
          </li>
          <li>
            <strong>可视化配置</strong>: 支持可视化配置
          </li>
          <li>
            <strong>分组配置</strong>: 支持分组配置
          </li>
          <li>
            <strong>表单联动</strong>: 支持表单联动
          </li>
          <li>
            <strong>防抖处理</strong>: 支持防抖处理
          </li>
          <li>
            <strong>动态列</strong>: 支持动态列配置
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>配置工具</strong>: 配置工具开发
          </li>
          <li>
            <strong>表格定制</strong>: 表格定制需求
          </li>
          <li>
            <strong>开发调试</strong>: 开发调试工具
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <DynamicSettingsWithDocs />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';

type GithubIssueItem = {
  key: number;
  name: string;
  createdAt: number;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: '标题',
    dataIndex: 'name',
    search: false,
  },
];

const SearchTable = () => (
  <ProTable<GithubIssueItem>
    columns={columns}
    request={async (params) => {
      console.log(params);
      return {
        data: [
          {
            key: 1,
            name: `TradeCode ${1}`,
            createdAt: 1602572994055,
          },
        ],
        success: true,
      };
    }}
    search={false}
    rowKey="key"
    options={{
      search: true,
    }}
    headerTitle="toolbar 中搜索"
  />
);

const SearchTableWithDocs = () => {
  return (
    <>
      {SearchTable()}
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProTable 搜索 Props 说明：</h4>
        <ul>
          <li>
            <strong>ProTable</strong>: 专业表格组件
          </li>
          <li>
            <strong>搜索</strong>: 展示搜索功能
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
            <strong>search</strong>: 搜索配置
          </li>
          <li>
            <strong>rowKey</strong>: 行键
          </li>
          <li>
            <strong>options</strong>: 选项配置
          </li>
          <li>
            <strong>headerTitle</strong>: 表格标题
          </li>
        </ul>
        <h4>搜索特点：</h4>
        <ul>
          <li>
            <strong>工具栏搜索</strong>: 支持工具栏搜索
          </li>
          <li>
            <strong>禁用表单搜索</strong>: 支持禁用表单搜索
          </li>
          <li>
            <strong>序号显示</strong>: 支持序号显示
          </li>
          <li>
            <strong>搜索配置</strong>: 支持搜索配置
          </li>
          <li>
            <strong>简洁界面</strong>: 支持简洁界面
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>快速搜索</strong>: 快速搜索需求
          </li>
          <li>
            <strong>简单查询</strong>: 简单查询功能
          </li>
          <li>
            <strong>工具栏集成</strong>: 工具栏集成需求
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <SearchTableWithDocs />
  </div>
);

import { ProTable } from '@ant-design/pro-components';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  status: string;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
  percent: number | string;
  createdAtRange: number[];
  code: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    createdAtRange: [
      Date.now() - Math.floor(Math.random() * 2000),
      Date.now() - Math.floor(Math.random() * 2000),
    ],
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    percent:
      Math.random() > 0.5
        ? ((i + 1) * 10 + Math.random()).toFixed(3)
        : -((i + 1) * 10 + Math.random()).toFixed(2),
    code: `const getData = async params => {
  const data = await getData(params);
  return { list: data.data, ...data };
};`,
  });
}

const Demo = () => (
  <>
    <ProTable<TableListItem>
      columns={[
        {
          title: '创建时间',
          key: 'since',
          dataIndex: 'createdAt',
          valueType: 'dateTime',
        },
        {
          title: '日期区间',
          key: 'dateRange',
          dataIndex: 'createdAtRange',
          valueType: 'dateRange',
        },
        {
          title: '时间范围',
          key: 'dateTimeRangeCustom',
          dataIndex: 'dateTimeRange',
          hideInTable: true,
          valueType: 'dateTimeRange',
          fieldProps: {
            // placeholder: ['1', '2']
          },
          formItemRender: (_, { type, defaultRender }) => {
            if (type === 'form') {
              return null;
            }
            return defaultRender(_);
          },
        },
        {
          title: '时间区间',
          key: 'dateTimeRange',
          dataIndex: 'createdAtRange',
          valueType: 'dateTimeRange',
          search: {
            transform: (value: any) => ({
              startTime: value[0],
              endTime: value[1],
            }),
          },
        },
        {
          title: '更新时间',
          key: 'since2',
          dataIndex: 'createdAt',
          valueType: 'date',
        },
        {
          title: '更新时间',
          key: 'since4',
          dataIndex: 'createdAt',
          valueType: 'fromNow',
        },
        {
          title: '关闭时间',
          key: 'since3',
          dataIndex: 'updatedAt',
          valueType: 'time',
        },
        {
          title: '操作',
          key: 'option',
          width: 120,
          valueType: 'option',
          render: (_, row, index, action) => [
            <a
              key="a"
              onClick={() => {
                action?.startEditable(row.key);
              }}
            >
              编辑
            </a>,
          ],
        },
      ]}
      request={() => {
        return Promise.resolve({
          total: 200,
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      headerTitle="日期类"
    />
    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>ProTable 值类型日期 Props 说明：</h4>
      <ul>
        <li>
          <strong>ProTable</strong>: 专业表格组件
        </li>
        <li>
          <strong>值类型日期</strong>: 展示值类型日期功能
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
          <strong>rowKey</strong>: 行键
        </li>
        <li>
          <strong>headerTitle</strong>: 表格标题
        </li>
      </ul>
      <h4>值类型日期特点：</h4>
      <ul>
        <li>
          <strong>日期时间</strong>: 支持日期时间
        </li>
        <li>
          <strong>日期区间</strong>: 支持日期区间
        </li>
        <li>
          <strong>时间范围</strong>: 支持时间范围
        </li>
        <li>
          <strong>时间区间</strong>: 支持时间区间
        </li>
        <li>
          <strong>日期</strong>: 支持日期
        </li>
        <li>
          <strong>相对时间</strong>: 支持相对时间
        </li>
        <li>
          <strong>时间</strong>: 支持时间
        </li>
        <li>
          <strong>搜索转换</strong>: 支持搜索转换
        </li>
      </ul>
      <h4>使用场景：</h4>
      <ul>
        <li>
          <strong>日期类</strong>: 日期类数据展示
        </li>
        <li>
          <strong>时间筛选</strong>: 时间筛选功能
        </li>
        <li>
          <strong>时间范围</strong>: 时间范围查询
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, ConfigProvider, Select, Space } from 'antd';
import caESIntl from 'antd/lib/locale/ca_ES';
import enGBIntl from 'antd/lib/locale/en_GB';
import enUSIntl from 'antd/lib/locale/en_US';
import esESIntl from 'antd/lib/locale/es_ES';
import frFRIntl from 'antd/lib/locale/fr_FR';
import itITIntl from 'antd/lib/locale/it_IT';
import jaJPIntl from 'antd/lib/locale/ja_JP';
import msMYIntl from 'antd/lib/locale/ms_MY';
import ptBRIntl from 'antd/lib/locale/pt_BR';
import ruRUIntl from 'antd/lib/locale/ru_RU';
import srRSIntl from 'antd/lib/locale/sr_RS';
import thTHIntl from 'antd/lib/locale/th_TH';
import viVNIntl from 'antd/lib/locale/vi_VN';
import zhCNIntl from 'antd/lib/locale/zh_CN';
import zhTWIntl from 'antd/lib/locale/zh_TW';
import dayjs from 'dayjs';
import { useRef, useState } from 'react';

const intlMap = {
  zhCNIntl,
  enUSIntl,
  enGBIntl,
  viVNIntl,
  itITIntl,
  jaJPIntl,
  esESIntl,
  caESIntl,
  ruRUIntl,
  srRSIntl,
  msMYIntl,
  zhTWIntl,
  frFRIntl,
  ptBRIntl,
  thTHIntl,
};

type GithubIssueItem = {
  key: number;
  name: string;
  createdAt: number;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: 'index',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: 'Title',
    dataIndex: 'name',
  },
  {
    title: 'Money',
    dataIndex: 'title',
    width: 100,
    order: 1,
    valueType: 'money',
    renderText: () => (Math.random() * 100).toFixed(2),
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();
  const [intl, setIntl] = useState('zhCNIntl');
  return (
    <ConfigProvider locale={intlMap[intl as 'zhCNIntl']}>
      <ProTable<GithubIssueItem>
        columns={columns}
        actionRef={actionRef}
        request={async () => {
          return {
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: 1602572994055,
              },
            ],
            success: true,
          };
        }}
        rowKey="key"
        rowSelection={{}}
        search={{
          labelWidth: 'auto',
        }}
        dateFormatter="string"
        headerTitle={
          <Space>
            <span>Basic Table</span>
            <Select<string>
              variant="borderless"
              value={intl}
              onChange={(value) => {
                dayjs.locale(intlMap[value as 'zhCNIntl'].locale);
                setIntl(value);
              }}
              options={Object.keys(intlMap).map((value) => ({
                value,
                label: value,
              }))}
            />
          </Space>
        }
        toolBarRender={() => [
          <Button key="3" type="primary">
            <PlusOutlined />
            New
          </Button>,
        ]}
      />
    </ConfigProvider>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 国际化 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>ConfigProvider</strong>: 配置提供者组件
      </li>
      <li>
        <strong>Select</strong>: 选择器组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>国际化</strong>: 展示国际化功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>rowSelection</strong>: 行选择配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>国际化特点：</h4>
    <ul>
      <li>
        <strong>多语言支持</strong>: 支持多语言
      </li>
      <li>
        <strong>动态切换</strong>: 支持动态切换
      </li>
      <li>
        <strong>日期本地化</strong>: 支持日期本地化
      </li>
      <li>
        <strong>货币格式化</strong>: 支持货币格式化
      </li>
      <li>
        <strong>全局配置</strong>: 支持全局配置
      </li>
      <li>
        <strong>语言映射</strong>: 支持语言映射
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>多语言应用</strong>: 多语言应用需求
      </li>
      <li>
        <strong>国际化系统</strong>: 国际化系统
      </li>
      <li>
        <strong>本地化需求</strong>: 本地化需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, ConfigProvider, Input, Space, Tag } from 'antd';
import { useRef } from 'react';

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

const nestedColumns = [
  {
    title: 'col without dataIndex',
    key: 'expand',
  },
  {
    title: 'normal col',
    dataIndex: 'key',
  },
];

const nestedData = [
  {
    key: 1,
    children: [
      {
        key: 11,
      },
    ],
  },
];

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: '标题',
    dataIndex: 'title',
    fixed: 'left',
    order: 1,
    copyable: true,
    ellipsis: true,
    hideInForm: true,
    tooltip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: '30%',
  },
  {
    title: '状态',
    dataIndex: 'state',
    initialValue: 'all',
    copyable: true,
    ellipsis: true,
    onFilter: true,
    valueType: 'select',
    order: 2,
    fieldProps: {
      noStyle: true,
    },
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
    width: '10%',
  },
  {
    title: '动态表单',
    key: 'direction',
    hideInTable: true,
    dataIndex: 'direction',
    formItemProps: {
      noStyle: true,
    },
    ignoreFormItem: true,
    formItemRender: () => {
      return <Input />;
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: '10%',
    order: -1,
    colSize: 1.5,
    formItemProps: {
      noStyle: true,
    },
    formItemRender: (_, { defaultRender }) => defaultRender(_),
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
    width: '20%',
    copyable: true,
    ellipsis: true,
    render: (value) => {
      return {
        children: value,
        props: { colSpan: 2 },
      };
    },
  },
  {
    title: '创建时间',
    key: 'since',
    dataIndex: 'created_at',
    // @ts-ignore
    valueType: () => undefined,
    width: '20%',
  },
  {
    title: '操作',
    valueType: 'option',
    fixed: 'right',
    render: (text, record, _, action) => [
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();

  return (
    <ConfigProvider prefixCls="canvas">
      <ProTable<GithubIssueItem>
        columns={columns}
        pagination={{
          showQuickJumper: true,
        }}
        actionRef={actionRef}
        request={async () => ({
          data: [],
        })}
        type="form"
        rowKey="id"
        dateFormatter="string"
        headerTitle="高级表格"
        toolBarRender={() => [
          <Button key="3" type="primary">
            <PlusOutlined />
            新建
          </Button>,
        ]}
      />
      <ProTable columns={nestedColumns} dataSource={nestedData} />
      <ProTable<GithubIssueItem>
        columns={columns}
        actionRef={(ref) => console.log(ref)}
        dataSource={[
          {
            id: 624748504,
            number: 6689,
            title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
            labels: [{ name: 'bug', color: 'error' }],
            state: 'open',
            comments: 1,
            created_at: '2020-05-26T09:42:56Z',
            updated_at: '2020-05-26T10:03:02Z',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          },
          {
            id: 624691229,
            number: 6688,
            title: '🐛 [BUG]无法创建工程npm create umi',
            labels: [{ name: 'bug', color: 'error' }],
            state: 'open',
            comments: 0,
            created_at: '2020-05-26T08:19:22Z',
            updated_at: '2020-05-26T08:19:22Z',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          },
          {
            id: 624674790,
            number: 6685,
            title: '🧐 [问题] build 后还存在 es6 的代码（Umi@2.13.13）',
            labels: [{ name: 'question', color: 'success' }],
            state: 'open',
            comments: 0,
            created_at: '2020-05-26T07:54:25Z',
            updated_at: '2020-05-26T07:54:25Z',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          },
        ]}
        pagination={{
          pageSize: 5,
        }}
        rowKey="id"
        dateFormatter="string"
        headerTitle="高级表格"
        toolBarRender={() => [
          <Button key="3" type="primary">
            <PlusOutlined />
            新建
          </Button>,
        ]}
      />
    </ConfigProvider>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 单表格测试 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>ConfigProvider</strong>: 配置提供者组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>Input</strong>: 输入框组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>单表格测试</strong>: 展示单表格测试功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>type</strong>: 表格类型
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
      <li>
        <strong>dataSource</strong>: 数据源
      </li>
    </ul>
    <h4>单表格测试特点：</h4>
    <ul>
      <li>
        <strong>表单模式</strong>: 支持表单模式
      </li>
      <li>
        <strong>嵌套表格</strong>: 支持嵌套表格
      </li>
      <li>
        <strong>静态数据</strong>: 支持静态数据
      </li>
      <li>
        <strong>动态表单</strong>: 支持动态表单
      </li>
      <li>
        <strong>固定列</strong>: 支持固定列
      </li>
      <li>
        <strong>自定义渲染</strong>: 支持自定义渲染
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>测试验证</strong>: 测试验证需求
      </li>
      <li>
        <strong>复杂表单</strong>: 复杂表单功能
      </li>
      <li>
        <strong>开发调试</strong>: 开发调试工具
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from '@ant-design/pro-components';
import { Badge, Button } from 'antd';
import React, { useState } from 'react';

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  status: string;
  creator: string;
  createdAt: number;
};

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
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
    title: '状态',
    dataIndex: 'status',
    initialValue: 'all',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '待发布', status: 'Default' },
      running: { text: '发布中', status: 'Processing' },
      online: { text: '发布成功', status: 'Success' },
      error: { text: '发布失败', status: 'Error' },
    },
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: (_, record) => [
      record.status === 'close' && <a key="link">发布</a>,
      (record.status === 'running' || record.status === 'online') && (
        <a key="warn">停用</a>
      ),
      record.status === 'error' && <a key="republish">重新发布</a>,
      <a
        key="monitor"
        style={
          record.status === 'running'
            ? {
                color: 'rgba(0,0,0,.25)',
                cursor: 'not-allowed',
              }
            : {}
        }
      >
        监控
      </a>,
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
  const [activeKey, setActiveKey] = useState<React.Key>('tab1');

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
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        menu: {
          type: 'tab',
          activeKey: activeKey,
          items: [
            {
              key: 'tab1',
              label: <span>应用{renderBadge(99, activeKey === 'tab1')}</span>,
            },
            {
              key: 'tab2',
              label: <span>项目{renderBadge(30, activeKey === 'tab2')}</span>,
            },
            {
              key: 'tab3',
              label: <span>文章{renderBadge(30, activeKey === 'tab3')}</span>,
            },
          ],
          onChange: (key) => {
            setActiveKey(key as string);
          },
        },
        actions: [
          <Button key="primary" type="primary">
            新建应用
          </Button>,
        ],
      }}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      search={false}
      dateFormatter="string"
      options={{
        setting: {
          draggable: true,
          checkable: true,
          checkedReset: false,
          extra: [<a key="confirm">确认</a>],
        },
      }}
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
    <h4>ProTable 列表工具栏 Props 说明：</h4>
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
        <strong>Badge</strong>: 徽章组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>列表工具栏</strong>: 展示列表工具栏功能
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
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
    </ul>
    <h4>列表工具栏特点：</h4>
    <ul>
      <li>
        <strong>过滤器</strong>: 支持过滤器
      </li>
      <li>
        <strong>菜单切换</strong>: 支持菜单切换
      </li>
      <li>
        <strong>徽章显示</strong>: 支持徽章显示
      </li>
      <li>
        <strong>操作按钮</strong>: 支持操作按钮
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
      <li>
        <strong>列设置</strong>: 支持列设置
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>应用管理</strong>: 应用管理系统
      </li>
      <li>
        <strong>项目管理</strong>: 项目管理系统
      </li>
      <li>
        <strong>内容管理</strong>: 内容管理系统
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, ConfigProvider, Dropdown, Space, Tag, theme } from 'antd';
import { useRef } from 'react';
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

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tooltip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    disable: true,
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: 'select',
    valueEnum: {
      all: { text: '超长'.repeat(50) },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
        disabled: true,
      },
      processing: {
        text: '解决中',
        status: 'Processing',
      },
    },
  },
  {
    disable: true,
    title: '标签',
    dataIndex: 'labels',
    search: false,
    formItemRender: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    sorter: true,
    search: false,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();
  const themeConfig = {
    token: {
      colorPrimary: 'red',
      borderRadius: 4,
    },
    algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
  };
  return (
    <div
      style={{
        backgroundColor: 'hsl(218,22%,7%)',
      }}
    >
      <ConfigProvider theme={themeConfig}>
        <ProTable<GithubIssueItem>
          columns={columns}
          actionRef={actionRef}
          cardBordered
          request={async (params, sort, filter) => {
            console.log(sort, filter);
            return request<{
              data: GithubIssueItem[];
            }>('https://proapi.azurewebsites.net/github/issues', {
              params,
            });
          }}
          editable={{
            type: 'multiple',
          }}
          columnsState={{
            persistenceKey: 'pro-table-singe-demos',
            persistenceType: 'localStorage',
            onChange(value) {
              console.log('value: ', value);
            },
          }}
          rowKey="id"
          search={{
            labelWidth: 'auto',
          }}
          options={{
            setting: {
              listsHeight: 400,
            },
          }}
          form={{
            // 由于配置了 transform，提交的参数与定义的不同这里需要转化一下
            syncToUrl: (values, type) => {
              if (type === 'get') {
                return {
                  ...values,
                  created_at: [values.startTime, values.endTime],
                };
              }
              return values;
            },
          }}
          pagination={{
            pageSize: 5,
            onChange: (page) => console.log(page),
          }}
          dateFormatter="string"
          headerTitle="高级表格"
          toolBarRender={() => [
            <Button key="button" icon={<PlusOutlined />} type="primary">
              新建
            </Button>,
            <Dropdown
              key="menu"
              menu={{
                items: [
                  {
                    label: '1st item',
                    key: '1',
                  },
                  {
                    label: '2nd item',
                    key: '2',
                  },
                  {
                    label: '3rd item',
                    key: '3',
                  },
                ],
              }}
            >
              <Button>
                <EllipsisOutlined />
              </Button>
            </Dropdown>,
          ]}
        />
      </ConfigProvider>
    </div>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 主题 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>ConfigProvider</strong>: 配置提供者组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>Dropdown</strong>: 下拉菜单组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>theme</strong>: 主题配置
      </li>
      <li>
        <strong>主题</strong>: 展示主题功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>cardBordered</strong>: 卡片边框
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>editable</strong>: 可编辑配置
      </li>
      <li>
        <strong>columnsState</strong>: 列状态配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>form</strong>: 表单配置
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>主题特点：</h4>
    <ul>
      <li>
        <strong>暗色主题</strong>: 支持暗色主题
      </li>
      <li>
        <strong>紧凑算法</strong>: 支持紧凑算法
      </li>
      <li>
        <strong>自定义颜色</strong>: 支持自定义颜色
      </li>
      <li>
        <strong>主题配置</strong>: 支持主题配置
      </li>
      <li>
        <strong>算法组合</strong>: 支持算法组合
      </li>
      <li>
        <strong>背景色</strong>: 支持背景色
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>主题定制</strong>: 主题定制需求
      </li>
      <li>
        <strong>暗色模式</strong>: 暗色模式应用
      </li>
      <li>
        <strong>品牌定制</strong>: 品牌定制需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, ConfigProvider, Space, Tag } from 'antd';
import { useRef } from 'react';
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

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tooltip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: '30%',
    search: false,
  },
  {
    title: '状态',
    dataIndex: 'state',
    initialValue: 'open',
    filters: true,
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
    width: '10%',
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: '10%',
    render: (_, row) => (
      <Space>
        {row.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, row, _, action) => [
      <a href={row.url} target="_blank" rel="noopener noreferrer" key="link">
        链路
      </a>,
      <a href={row.url} target="_blank" rel="noopener noreferrer" key="warning">
        报警
      </a>,
      <a href={row.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();

  return (
    <ConfigProvider prefixCls="qixian">
      <ProTable<GithubIssueItem>
        columns={columns}
        pagination={{
          showQuickJumper: true,
        }}
        actionRef={actionRef}
        request={async (params = {} as Record<string, any>) =>
          request<{
            data: GithubIssueItem[];
          }>('https://proapi.azurewebsites.net/github/issues', {
            params,
          })
        }
        rowKey="id"
        dateFormatter="string"
        headerTitle="高级表格"
        toolBarRender={() => [
          <Button key="3" type="primary">
            <PlusOutlined />
            新建
          </Button>,
        ]}
      />
    </ConfigProvider>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable ConfigProvider Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>ConfigProvider</strong>: 配置提供者组件
      </li>
      <li>
        <strong>配置提供者</strong>: 展示配置提供者功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>配置提供者特点：</h4>
    <ul>
      <li>
        <strong>前缀定制</strong>: 支持前缀定制
      </li>
      <li>
        <strong>全局配置</strong>: 支持全局配置
      </li>
      <li>
        <strong>主题定制</strong>: 支持主题定制
      </li>
      <li>
        <strong>国际化</strong>: 支持国际化配置
      </li>
      <li>
        <strong>样式隔离</strong>: 支持样式隔离
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>多套主题</strong>: 多套主题系统
      </li>
      <li>
        <strong>样式隔离</strong>: 样式隔离需求
      </li>
      <li>
        <strong>全局配置</strong>: 全局配置管理
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import type {
  ProColumns,
  ProDescriptionsItemProps,
} from '@ant-design/pro-components';
import {
  ProCard,
  ProDescriptions,
  ProTable,
  TableDropdown,
} from '@ant-design/pro-components';
import { Button, Space, Tabs, Tag, message } from 'antd';
import { useState } from 'react';
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

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 64,
    valueType: 'indexBorder',
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    search: false,
  },
  {
    title: (_, type) => (type === 'table' ? '状态' : '列表状态'),
    dataIndex: 'state',
    initialValue: 'all',
    filters: true,
    onFilter: true,
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
    },
  },
  {
    title: '排序方式',
    key: 'direction',
    hideInTable: true,
    hideInDescriptions: true,
    dataIndex: 'direction',
    filters: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      asc: '正序',
      desc: '倒序',
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 120,
    render: (_, row) => (
      <Space>
        {row.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: 'option',
    valueType: 'option',
    dataIndex: 'id',
    render: (text, row) => [
      <a href={row.url} key="show" target="_blank" rel="noopener noreferrer">
        查看
      </a>,
      <TableDropdown
        key="more"
        onSelect={(key) => message.info(key)}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  const [type, setType] = useState('table');
  return (
    <ProCard>
      <Tabs
        activeKey={type}
        onChange={(e) => setType(e)}
        items={[
          { key: 'table', label: 'table' },
          { key: 'form', label: 'form' },
          { key: 'descriptions', label: 'descriptions' },
        ]}
      />
      {['table', 'form'].includes(type) && (
        <ProTable<GithubIssueItem>
          columns={columns}
          type={type as 'table'}
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
          rowKey="id"
          dateFormatter="string"
          headerTitle="查询 Table"
          toolBarRender={() => [
            <Button key="3" type="primary">
              <PlusOutlined />
              新建
            </Button>,
          ]}
        />
      )}
      {type === 'descriptions' && (
        <ProDescriptions
          style={{
            background: '#fff',
          }}
          columns={columns as ProDescriptionsItemProps<GithubIssueItem>[]}
          request={async (params) => {
            const msg = await request<{
              data: GithubIssueItem[];
            }>('https://proapi.azurewebsites.net/github/issues', {
              params,
            });
            return {
              ...msg,
              data: msg?.data[0],
            };
          }}
        />
      )}
    </ProCard>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable CRUD Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>ProCard</strong>: 专业卡片组件
      </li>
      <li>
        <strong>ProDescriptions</strong>: 专业描述组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>Tabs</strong>: 标签页组件
      </li>
      <li>
        <strong>CRUD操作</strong>: 展示增删改查功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>type</strong>: 表格类型
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>CRUD特点：</h4>
    <ul>
      <li>
        <strong>多视图切换</strong>: 支持表格、表单、描述视图
      </li>
      <li>
        <strong>动态列配置</strong>: 支持动态列配置
      </li>
      <li>
        <strong>标签过滤</strong>: 支持标签过滤
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
      <li>
        <strong>操作集成</strong>: 支持操作集成
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>数据管理</strong>: 数据管理系统
      </li>
      <li>
        <strong>内容管理</strong>: 内容管理平台
      </li>
      <li>
        <strong>后台管理</strong>: 后台管理系统
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { ProColumns, ProTable } from '@ant-design/pro-components';

type ContentWordsItem = {
  id: string;
  problemCause: string;
};

const getData = () => {
  const arr = Array.from({ length: 100 }).map((_, idx) => ({
    id: (idx + 1).toString(),
    problemCause: 'problemCause',
  }));
  return arr;
};

const Demo = () => {
  const columns: ProColumns<ContentWordsItem>[] = [
    {
      disable: true,
      title: '问题标注',
      dataIndex: 'problemCause',
      editable: false,
      onFilter: false,
      ellipsis: true,
      search: true,
      valueType: 'select',
      width: 180,
    },
  ];

  return (
    <div>
      <ProTable<ContentWordsItem>
        rowKey="id"
        columns={columns}
        request={async () => {
          const data = getData();
          return {
            data: data,
            total: data.length,
            success: true,
          };
        }}
      />
    </div>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 内容词项 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>内容词项</strong>: 展示内容词项功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
    </ul>
    <h4>列配置特点：</h4>
    <ul>
      <li>
        <strong>disable</strong>: 禁用状态
      </li>
      <li>
        <strong>title</strong>: 列标题
      </li>
      <li>
        <strong>dataIndex</strong>: 数据索引
      </li>
      <li>
        <strong>editable</strong>: 可编辑状态
      </li>
      <li>
        <strong>onFilter</strong>: 过滤功能
      </li>
      <li>
        <strong>ellipsis</strong>: 省略号显示
      </li>
      <li>
        <strong>search</strong>: 搜索功能
      </li>
      <li>
        <strong>valueType</strong>: 值类型
      </li>
      <li>
        <strong>width</strong>: 列宽度
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>内容管理</strong>: 内容管理系统
      </li>
      <li>
        <strong>词汇标注</strong>: 词汇标注功能
      </li>
      <li>
        <strong>数据展示</strong>: 数据展示需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProProvider, ProTable } from '@ant-design/pro-components';
import type { InputRef } from 'antd';
import { Input, Space, Tag } from 'antd';
import React, { useContext, useRef, useState } from 'react';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  status: {
    label: string | number;
    value: number;
  }[];
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: [
      {
        value: Math.floor(Math.random() * 10),
        label: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
      },
      {
        value: Math.floor(Math.random() * 10),
        label: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
      },
    ],
  });
}

const TagList: React.FC<{
  value?: {
    key: string;
    label: string;
  }[];
  onChange?: (
    value: {
      key: string;
      label: string;
    }[],
  ) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<InputRef | null>(null);
  const [newTags, setNewTags] = useState<
    {
      key: string;
      label: string;
    }[]
  >([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let tempsTags = [...(value || [])];
    if (
      inputValue &&
      tempsTags.filter((tag) => tag.label === inputValue).length === 0
    ) {
      tempsTags = [
        ...tempsTags,
        { key: `new-${tempsTags.length}`, label: inputValue },
      ];
    }
    onChange?.(tempsTags);
    setNewTags([]);
    setInputValue('');
  };

  return (
    <Space>
      {(value || []).concat(newTags).map((item) => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
      <Input
        ref={ref}
        type="text"
        size="small"
        style={{ width: 78 }}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputConfirm}
        onPressEnter={handleInputConfirm}
      />
    </Space>
  );
};

const columns: ProColumns<TableListItem, 'link' | 'tags'>[] = [
  {
    title: '链接',
    dataIndex: 'name',
    valueType: 'link',
  },
  {
    title: '标签',
    dataIndex: 'status',
    key: 'status',
    valueType: 'tags',
  },
  {
    title: '操作',
    key: 'option',
    valueType: 'option',
    render: (_, row, index, action) => [
      <a
        key="a"
        onClick={() => {
          action?.startEditable(row.key);
        }}
      >
        编辑
      </a>,
    ],
  },
];

const Demo = () => {
  const values = useContext(ProProvider);
  return (
    <ProProvider.Provider
      value={{
        ...values,
        valueTypeMap: {
          link: {
            render: (text) => <a>{text}</a>,
            formItemRender: (text, props) => (
              <Input placeholder="请输入链接" {...props?.fieldProps} />
            ),
          },
          tags: {
            render: (text) => {
              return (
                <>
                  {[text].flat(1).map((item) => (
                    <Tag key={item.value}>{item.label}</Tag>
                  ))}
                </>
              );
            },
            formItemRender: (text, props) => (
              <TagList {...props} {...props?.fieldProps} />
            ),
          },
        },
      }}
    >
      <ProTable<TableListItem, Record<string, any>, 'link' | 'tags'>
        columns={columns}
        request={() => {
          return Promise.resolve({
            total: 200,
            data: tableListDataSource,
            success: true,
          });
        }}
        rowKey="key"
        headerTitle="自定义 valueType"
      />
    </ProProvider.Provider>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 自定义值类型 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>ProProvider</strong>: 专业提供者组件
      </li>
      <li>
        <strong>Input</strong>: 输入框组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>自定义值类型</strong>: 展示自定义值类型功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
    </ul>
    <h4>自定义值类型特点：</h4>
    <ul>
      <li>
        <strong>valueTypeMap</strong>: 值类型映射
      </li>
      <li>
        <strong>自定义渲染</strong>: 支持自定义渲染
      </li>
      <li>
        <strong>表单项渲染</strong>: 支持表单项渲染
      </li>
      <li>
        <strong>链接类型</strong>: 支持链接类型
      </li>
      <li>
        <strong>标签类型</strong>: 支持标签类型
      </li>
      <li>
        <strong>可编辑</strong>: 支持可编辑功能
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>自定义展示</strong>: 自定义展示需求
      </li>
      <li>
        <strong>特殊数据类型</strong>: 特殊数据类型处理
      </li>
      <li>
        <strong>业务定制</strong>: 业务定制需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { MailOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Card, Descriptions, Menu } from 'antd';
import { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export type TableListItem = {
  key: number;
  name: string;
  createdAt: number;
  progress: number;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    progress: Math.ceil(Math.random() * 100) + 1,
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
    width: 80,
  },
  {
    title: '更新时间',
    key: 'since2',
    dataIndex: 'createdAt',
    valueType: 'date',
  },
  {
    title: '执行进度',
    dataIndex: 'progress',
    valueType: 'progress',
  },
];

const Demo = () => {
  const [key, setKey] = useState('1');

  return (
    <ProTable<TableListItem>
      columns={columns}
      rowKey="key"
      pagination={{
        showSizeChanger: true,
      }}
      tableRender={(_, dom) => (
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <Menu
            onSelect={(e) => setKey(e.key as string)}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={[
              {
                key: 'sub1',
                label: (
                  <span>
                    <MailOutlined />
                    <span>Navigation One</span>
                  </span>
                ),
                children: [
                  {
                    type: 'group',
                    key: 'g1',
                    label: 'Item 1',
                    children: [
                      {
                        key: '1',
                        label: 'Option 1',
                      },
                      {
                        key: '2',
                        label: 'Option 2',
                      },
                    ],
                  },
                  {
                    type: 'group',
                    key: 'g2',
                    label: 'Item 2',
                    children: [
                      {
                        key: '3',
                        label: 'Option 3',
                      },
                      {
                        key: '4',
                        label: 'Option 4',
                      },
                    ],
                  },
                ],
              },
            ]}
          />
          <div
            style={{
              flex: 1,
            }}
          >
            {dom}
          </div>
        </div>
      )}
      tableExtraRender={(_, data) => (
        <Card>
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Row">{data.length}</Descriptions.Item>
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Association">
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">
              2017-01-10
            </Descriptions.Item>
            <Descriptions.Item label="Effective Time">
              2017-10-10
            </Descriptions.Item>
          </Descriptions>
        </Card>
      )}
      params={{
        key,
      }}
      request={async () => {
        await waitTime(200);
        return {
          success: true,
          data: tableListDataSource,
        };
      }}
      dateFormatter="string"
      headerTitle="自定义表格主体"
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
    <h4>ProTable 渲染表格 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Card</strong>: 卡片组件
      </li>
      <li>
        <strong>Descriptions</strong>: 描述组件
      </li>
      <li>
        <strong>Menu</strong>: 菜单组件
      </li>
      <li>
        <strong>渲染表格</strong>: 展示渲染表格功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>tableRender</strong>: 表格渲染
      </li>
      <li>
        <strong>tableExtraRender</strong>: 表格额外渲染
      </li>
      <li>
        <strong>params</strong>: 参数配置
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
    </ul>
    <h4>渲染表格特点：</h4>
    <ul>
      <li>
        <strong>自定义渲染</strong>: 支持自定义渲染
      </li>
      <li>
        <strong>侧边菜单</strong>: 支持侧边菜单
      </li>
      <li>
        <strong>额外内容</strong>: 支持额外内容
      </li>
      <li>
        <strong>布局控制</strong>: 支持布局控制
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
      <li>
        <strong>参数传递</strong>: 支持参数传递
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>复杂布局</strong>: 复杂布局需求
      </li>
      <li>
        <strong>自定义界面</strong>: 自定义界面功能
      </li>
      <li>
        <strong>导航系统</strong>: 导航系统需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Space, Tag } from 'antd';

type GithubIssueItem = {
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: number;
  updated_at: number;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tooltip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: '30%',
  },
  {
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    valueType: 'select',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
        disabled: true,
      },
      processing: {
        text: '解决中',
        status: 'Processing',
      },
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    search: false,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    formItemRender: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    search: false,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
];

const Demo = () => {
  return (
    <>
      <ProTable<GithubIssueItem>
        columns={columns}
        request={async () => ({
          success: true,
          data: [
            {
              id: 624748504,
              number: 6689,
              title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
              labels: [
                {
                  name: 'bug',
                  color: 'error',
                },
              ],
              state: 'open',
              locked: false,
              comments: 1,
              created_at: 1590486176000,
              updated_at: 1590487382000,
              closed_at: null,
              author_association: 'NONE',
              user: 'chenshuai2144',
              avatar:
                'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
            },
          ],
        })}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        form={{
          ignoreRules: false,
        }}
        dateFormatter="string"
        headerTitle="高级表格"
      />
      <ProTable<GithubIssueItem>
        columns={columns}
        request={async () => ({
          success: true,
          data: [
            {
              id: 624748504,
              number: 6689,
              title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
              labels: [
                {
                  name: 'bug',
                  color: 'error',
                },
              ],
              state: 'open',
              locked: false,
              comments: 1,
              created_at: 1590486176000,
              updated_at: 1590487382000,
              closed_at: null,
              author_association: 'NONE',
              user: 'chenshuai2144',
              avatar:
                'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
            },
          ],
        })}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        dateFormatter="string"
        headerTitle="高级表格"
      />
    </>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 开放规则 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>开放规则</strong>: 展示开放规则功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>form</strong>: 表单配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
    </ul>
    <h4>开放规则特点：</h4>
    <ul>
      <li>
        <strong>表单验证</strong>: 支持表单验证
      </li>
      <li>
        <strong>必填校验</strong>: 支持必填校验
      </li>
      <li>
        <strong>标签显示</strong>: 支持标签显示
      </li>
      <li>
        <strong>复制功能</strong>: 支持复制功能
      </li>
      <li>
        <strong>省略号显示</strong>: 支持省略号显示
      </li>
      <li>
        <strong>状态过滤</strong>: 支持状态过滤
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>表单验证</strong>: 表单验证需求
      </li>
      <li>
        <strong>数据校验</strong>: 数据校验功能
      </li>
      <li>
        <strong>规则配置</strong>: 规则配置需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DownOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button } from 'antd';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    width: 80,
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
    title: '状态',
    width: 80,
    dataIndex: 'status',
    initialValue: 'all',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '创建者',
    width: 80,
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
    width: 180,
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="link">链路</a>,
      <a key="link2">报警</a>,
      <a key="link3">监控</a>,
      <TableDropdown
        key="actionGroup"
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      dataSource={tableListDataSource}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      columns={columns}
      search={false}
      dateFormatter="string"
      headerTitle="表格标题"
      toolBarRender={() => [
        <Button key="show">查看日志</Button>,
        <Button key="out">
          导出数据
          <DownOutlined />
        </Button>,
        <Button type="primary" key="primary">
          创建应用
        </Button>,
      ]}
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
    <h4>ProTable 普通表格 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>普通表格</strong>: 展示普通表格功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>dataSource</strong>: 数据源
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>普通表格特点：</h4>
    <ul>
      <li>
        <strong>静态数据</strong>: 支持静态数据
      </li>
      <li>
        <strong>排序功能</strong>: 支持排序功能
      </li>
      <li>
        <strong>状态过滤</strong>: 支持状态过滤
      </li>
      <li>
        <strong>操作按钮</strong>: 支持操作按钮
      </li>
      <li>
        <strong>下拉菜单</strong>: 支持下拉菜单
      </li>
      <li>
        <strong>工具栏</strong>: 支持工具栏
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>数据展示</strong>: 数据展示需求
      </li>
      <li>
        <strong>基础表格</strong>: 基础表格功能
      </li>
      <li>
        <strong>简单列表</strong>: 简单列表展示
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, DatePicker, Space, Table } from 'antd';

const { RangePicker } = DatePicker;

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

const ProcessMap = {
  close: 'normal',
  running: 'active',
  online: 'success',
  error: 'exception',
} as const;

export type TableListItem = {
  key: number;
  name: string;
  progress: number;
  containers: number;
  callNumber: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 50; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName-' + i,
    containers: Math.floor(Math.random() * 20),
    callNumber: Math.floor(Math.random() * 2000),
    progress: Math.ceil(Math.random() * 100) + 1,
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    width: 120,
    dataIndex: 'name',
    fixed: 'left',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    width: 120,
    dataIndex: 'containers',
    align: 'right',
    search: false,
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '调用次数',
    width: 120,
    align: 'right',
    dataIndex: 'callNumber',
  },
  {
    title: '执行进度',
    dataIndex: 'progress',
    valueType: (item) => ({
      type: 'progress',
      status: ProcessMap[item.status as 'close'],
    }),
  },
  {
    title: '创建者',
    width: 120,
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
    title: '创建时间',
    width: 140,
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
    formItemRender: () => {
      return <RangePicker />;
    },
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
    search: false,
  },
  {
    title: '操作',
    width: 80,
    key: 'option',
    valueType: 'option',
    fixed: 'right',
    render: () => [<a key="link">链路</a>],
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      rowSelection={{
        // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
        // 注释该行则默认不显示下拉选项
        selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
        defaultSelectedRowKeys: [1],
      }}
      tableAlertRender={({
        selectedRowKeys,
        selectedRows,
        onCleanSelected,
      }) => {
        console.log(selectedRowKeys, selectedRows);
        return (
          <Space size={24}>
            <span>
              已选 {selectedRowKeys.length} 项
              <a style={{ marginInlineStart: 8 }} onClick={onCleanSelected}>
                取消选择
              </a>
            </span>
            <span>{`容器数量: ${selectedRows.reduce(
              (pre, item) => pre + item.containers,
              0,
            )} 个`}</span>
            <span>{`调用量: ${selectedRows.reduce(
              (pre, item) => pre + item.callNumber,
              0,
            )} 次`}</span>
          </Space>
        );
      }}
      tableAlertOptionRender={() => {
        return (
          <Space size={16}>
            <a>批量删除</a>
            <a>导出数据</a>
          </Space>
        );
      }}
      dataSource={tableListDataSource}
      scroll={{ x: 1300 }}
      options={false}
      search={false}
      pagination={{
        pageSize: 5,
      }}
      rowKey="key"
      headerTitle="批量操作"
      toolBarRender={() => [<Button key="show">查看日志</Button>]}
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
    <h4>ProTable 批量操作 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>批量操作</strong>: 展示批量操作功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>rowSelection</strong>: 行选择配置
      </li>
      <li>
        <strong>tableAlertRender</strong>: 表格提醒渲染函数
      </li>
      <li>
        <strong>tableAlertOptionRender</strong>: 表格提醒操作渲染函数
      </li>
      <li>
        <strong>dataSource</strong>: 数据源
      </li>
      <li>
        <strong>scroll</strong>: 滚动配置
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染函数
      </li>
    </ul>
    <h4>批量操作特点：</h4>
    <ul>
      <li>
        <strong>行选择</strong>: 支持行选择功能
      </li>
      <li>
        <strong>批量提醒</strong>: 支持批量提醒
      </li>
      <li>
        <strong>批量操作</strong>: 支持批量操作
      </li>
      <li>
        <strong>统计信息</strong>: 支持统计信息展示
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>数据管理</strong>: 数据管理系统
      </li>
      <li>
        <strong>批量处理</strong>: 批量处理需求
      </li>
      <li>
        <strong>操作确认</strong>: 操作确认功能
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns, ProFormInstance } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useRef, useState } from 'react';

export type TableListItem = {
  key: number;
  name: string;
  createdAt: string;
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '标题',
    dataIndex: 'name',
    initialValue: 'TradeCode 1',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    valueType: 'date',
    initialValue: '2022-08-10',
  },
];

const Demo = () => {
  const ref = useRef<ProFormInstance>();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <ProTable<TableListItem>
        style={{
          margin: '16px',
        }}
        columns={columns}
        request={(params) => {
          console.log('-->', params);
          return Promise.resolve({
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: '2022-09-22',
              },
            ],
            success: true,
          });
        }}
        rowKey="key"
        pagination={{
          showSizeChanger: true,
        }}
        search={{
          collapsed,
          onCollapse: setCollapsed,
        }}
        formRef={ref}
        options={false}
        dateFormatter="string"
        headerTitle="日期格式化为字符串"
      />

      <ProTable<TableListItem>
        style={{
          margin: '16px',
        }}
        columns={columns}
        request={(params) => {
          console.log('-->', params);
          return Promise.resolve({
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: '2022-09-22',
              },
            ],
            success: true,
          });
        }}
        rowKey="key"
        pagination={{
          showSizeChanger: true,
        }}
        search={{
          collapsed,
          onCollapse: setCollapsed,
        }}
        formRef={ref}
        options={false}
        dateFormatter="number"
        headerTitle="日期格式化为数字"
      />
      <ProTable<TableListItem>
        style={{
          margin: '16px',
        }}
        columns={columns}
        request={(params) => {
          console.log('-->', params);
          return Promise.resolve({
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: '2022-09-22',
              },
            ],
            success: true,
          });
        }}
        rowKey="key"
        pagination={{
          showSizeChanger: true,
        }}
        search={{
          collapsed,
          onCollapse: setCollapsed,
        }}
        formRef={ref}
        options={false}
        dateFormatter={(value, valueType) => {
          console.log('====>', value, valueType);
          return value.format('YYYY-MM-DD HH:mm:ss');
        }}
        headerTitle="使用自定义函数进行日期格式化"
      />
    </>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>ProTable 日期格式化 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>日期格式化</strong>: 展示日期格式化功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>formRef</strong>: 表单引用
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
    </ul>
    <h4>日期格式化特点：</h4>
    <ul>
      <li>
        <strong>字符串格式</strong>: 支持字符串格式化
      </li>
      <li>
        <strong>数字格式</strong>: 支持数字格式化
      </li>
      <li>
        <strong>自定义函数</strong>: 支持自定义格式化函数
      </li>
      <li>
        <strong>多种格式</strong>: 支持多种日期格式
      </li>
      <li>
        <strong>动态配置</strong>: 支持动态配置
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>日期展示</strong>: 日期展示需求
      </li>
      <li>
        <strong>时间格式</strong>: 时间格式统一
      </li>
      <li>
        <strong>国际化</strong>: 国际化日期处理
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { QuestionCircleOutlined, SearchOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Input, Tooltip } from 'antd';
import { useState } from 'react';

const valueEnum = {
  0: 'close',
  1: 'running',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  progress: number;
  money: number;
  memo: string;
  statusText: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[((Math.floor(Math.random() * 10) % 2) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
    statusText: '这是一段很随意的文字',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
    // 自定义筛选项功能具体实现请参考 https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input style={{ width: 188, marginBottom: 8, display: 'block' }} />
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
  },
  {
    title: '状态',
    dataIndex: 'status',
    initialValue: 'close',
    valueType: 'radioButton',
    valueEnum: {
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
    },
  },
  {
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),
    width: 140,
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'date',
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
  },
];

const Demo = () => {
  const [currentStatus, setCurrentStatus] = useState<string>('close');

  const closeColumns: ProColumns<TableListItem>[] = [
    {
      title: '排序',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '关闭时字段',
      dataIndex: 'statusText',
    },
    ...columns,
  ];

  const runningColumns: ProColumns<TableListItem>[] = [
    {
      title: '排序',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '运行时字段',
      dataIndex: 'statusText',
    },
    ...columns,
  ];
  return (
    <ProTable<TableListItem>
      columns={currentStatus === 'close' ? closeColumns : runningColumns}
      request={() => {
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      search={{
        layout: 'vertical',
        defaultCollapsed: false,
      }}
      onSubmit={({ status }) => {
        setCurrentStatus(status);
      }}
      columnsState={{
        persistenceKey: `table_dynamic_status_${currentStatus}`,
        persistenceType: 'sessionStorage',
      }}
      dateFormatter="string"
      toolbar={{
        title: '高级表格',
        tooltip: '动态列持久化',
      }}
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
    <h4>ProTable 动态列状态 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Tooltip</strong>: 提示组件
      </li>
      <li>
        <strong>动态列状态</strong>: 展示动态列状态功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>onSubmit</strong>: 提交事件
      </li>
      <li>
        <strong>columnsState</strong>: 列状态配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
    </ul>
    <h4>动态列状态特点：</h4>
    <ul>
      <li>
        <strong>状态持久化</strong>: 支持状态持久化
      </li>
      <li>
        <strong>动态列配置</strong>: 支持动态列配置
      </li>
      <li>
        <strong>条件渲染</strong>: 支持条件渲染
      </li>
      <li>
        <strong>自定义筛选</strong>: 支持自定义筛选
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
      <li>
        <strong>会话存储</strong>: 支持会话存储
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>个性化配置</strong>: 个性化配置需求
      </li>
      <li>
        <strong>状态保持</strong>: 状态保持功能
      </li>
      <li>
        <strong>用户体验</strong>: 用户体验优化
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

export type TableListItem = {
  id: number;
  name: string;
  lastName: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    id: i,
    name: `John ${i}`,
    lastName: `Doe ${i}`,
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: 'User First Name',
    dataIndex: 'name',
  },
  {
    title: 'User Last Name',
    dataIndex: 'surname',
  },
  {
    title: 'ID',
    dataIndex: 'id',
  },
];

const Demo = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={() => Promise.resolve(tableListDataSource)}
      options={{
        search: true,
        setting: {
          children: <HeartSvg />,
        },
      }}
      rowKey="id"
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
    <h4>ProTable 列设置自定义图标 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>列设置自定义图标</strong>: 展示列设置自定义图标功能
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
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>列设置自定义图标特点：</h4>
    <ul>
      <li>
        <strong>自定义图标</strong>: 支持自定义图标
      </li>
      <li>
        <strong>列设置</strong>: 支持列设置功能
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>SVG图标</strong>: 支持SVG图标
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>界面定制</strong>: 界面定制需求
      </li>
      <li>
        <strong>用户体验</strong>: 用户体验优化
      </li>
      <li>
        <strong>品牌展示</strong>: 品牌展示需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DownOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Dropdown, Popconfirm, Space } from 'antd';
import React from 'react';

export type Member = {
  avatar: string;
  realName: string;
  nickName: string;
  email: string;
  outUserNo: string;
  phone: string;
  role: RoleType;
  permission?: string[];
};

export type RoleMapType = Record<
  string,
  {
    name: string;
    desc: string;
  }
>;

export type RoleType = 'admin' | 'operator';

const RoleMap: RoleMapType = {
  admin: {
    name: '管理员',
    desc: '仅拥有指定项目的权限',
  },
  operator: {
    name: '操作员',
    desc: '拥有所有权限',
  },
};

const tableListDataSource: Member[] = [];

const realNames = ['马巴巴', '测试', '测试2', '测试3'];
const nickNames = ['巴巴', '测试', '测试2', '测试3'];
const emails = [
  'baba@antfin.com',
  'test@antfin.com',
  'test2@antfin.com',
  'test3@antfin.com',
];
const phones = ['12345678910', '10923456789', '109654446789', '109223346789'];
const permissions = [[], ['权限点名称1', '权限点名称4'], ['权限点名称1'], []];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    outUserNo: `${102047 + i}`,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    role: i === 0 ? 'admin' : 'operator',
    realName: realNames[i % 4],
    nickName: nickNames[i % 4],
    email: emails[i % 4],
    phone: phones[i % 4],
    permission: permissions[i % 4],
  });
}

const MemberList: React.FC = () => {
  const renderRemoveUser = (text: string) => (
    <Popconfirm
      key="popconfirm"
      title={`确认${text}吗?`}
      okText="是"
      cancelText="否"
    >
      <a>{text}</a>
    </Popconfirm>
  );

  const columns: ProColumns<Member>[] = [
    {
      dataIndex: 'avatar',
      title: '成员名称',
      valueType: 'avatar',
      width: 150,
      render: (dom, record) => (
        <Space>
          <span>{dom}</span>
          {record.nickName}
        </Space>
      ),
    },
    {
      dataIndex: 'email',
      title: '账号',
    },
    {
      dataIndex: 'role',
      title: '角色',
      render: (_, record) => (
        <Dropdown
          menu={{
            items: [
              {
                label: '管理员',
                key: 'admin',
              },
              {
                label: '操作员',
                key: 'operator',
              },
            ],
          }}
        >
          <a>
            {RoleMap[record.role || 'admin'].name} <DownOutlined />
          </a>
        </Dropdown>
      ),
    },
    {
      dataIndex: 'permission',
      title: '权限范围',
      render: (_, record) => {
        const { role, permission = [] } = record;
        if (role === 'admin') {
          return '所有权限';
        }
        return permission && permission.length > 0
          ? permission.join('、')
          : '无';
      },
    },
    {
      title: '操作',
      dataIndex: 'x',
      valueType: 'option',
      render: (_, record) => {
        let node = renderRemoveUser('退出');
        if (record.role === 'admin') {
          node = renderRemoveUser('移除');
        }
        return [<a key="edit">编辑</a>, node];
      },
    },
  ];

  return (
    <ProTable<Member>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="outUserNo"
      pagination={{
        showQuickJumper: true,
      }}
      toolBarRender={false}
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
    <h4>ProTable 无标题 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Dropdown</strong>: 下拉菜单组件
      </li>
      <li>
        <strong>Popconfirm</strong>: 气泡确认框组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>无标题</strong>: 展示无标题功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>无标题特点：</h4>
    <ul>
      <li>
        <strong>头像显示</strong>: 支持头像显示
      </li>
      <li>
        <strong>角色管理</strong>: 支持角色管理
      </li>
      <li>
        <strong>权限控制</strong>: 支持权限控制
      </li>
      <li>
        <strong>下拉菜单</strong>: 支持下拉菜单
      </li>
      <li>
        <strong>确认操作</strong>: 支持确认操作
      </li>
      <li>
        <strong>简洁布局</strong>: 支持简洁布局
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>成员管理</strong>: 成员管理系统
      </li>
      <li>
        <strong>权限管理</strong>: 权限管理功能
      </li>
      <li>
        <strong>用户列表</strong>: 用户列表展示
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <MemberList />
  </div>
);

import { DownOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Tag } from 'antd';

export type Status = {
  color: string;
  text: string;
};

const statusMap = {
  0: {
    color: 'blue',
    text: '进行中',
  },
  1: {
    color: 'green',
    text: '已完成',
  },
  2: {
    color: 'volcano',
    text: '警告',
  },
  3: {
    color: 'red',
    text: '失败',
  },
  4: {
    color: '',
    text: '未完成',
  },
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: Status;
  createdAt: number;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: statusMap[((Math.floor(Math.random() * 10) % 5) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    width: 120,
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '状态',
    width: 120,
    dataIndex: 'status',
    render: (_, record) => (
      <Tag color={record.status.color}>{record.status.text}</Tag>
    ),
  },
  {
    title: '容器数量',
    width: 120,
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },

  {
    title: '创建者',
    width: 120,
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
];

const expandedRowRender = () => {
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56',
    });
  }
  return (
    <ProTable
      columns={[
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Name', dataIndex: 'name', key: 'name' },

        { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          valueType: 'option',
          render: () => [<a key="Pause">Pause</a>, <a key="Stop">Stop</a>],
        },
      ]}
      headerTitle={false}
      search={false}
      options={false}
      dataSource={data}
      pagination={false}
    />
  );
};

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
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      expandable={{ expandedRowRender }}
      search={false}
      dateFormatter="string"
      headerTitle="嵌套表格"
      options={false}
      toolBarRender={() => [
        <Button key="show">查看日志</Button>,
        <Button key="out">
          导出数据
          <DownOutlined />
        </Button>,
        <Button key="primary" type="primary">
          创建应用
        </Button>,
      ]}
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
    <h4>ProTable 嵌套表格 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>嵌套表格</strong>: 展示嵌套表格功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>expandable</strong>: 展开配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>嵌套表格特点：</h4>
    <ul>
      <li>
        <strong>展开行</strong>: 支持展开行
      </li>
      <li>
        <strong>嵌套表格</strong>: 支持嵌套表格
      </li>
      <li>
        <strong>状态标签</strong>: 支持状态标签
      </li>
      <li>
        <strong>排序功能</strong>: 支持排序功能
      </li>
      <li>
        <strong>枚举值</strong>: 支持枚举值
      </li>
      <li>
        <strong>快速跳转</strong>: 支持快速跳转
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>层级数据</strong>: 层级数据展示
      </li>
      <li>
        <strong>详情展示</strong>: 详情展示需求
      </li>
      <li>
        <strong>复杂结构</strong>: 复杂结构数据
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProCard, ProTable } from '@ant-design/pro-components';
import type { BadgeProps } from 'antd';
import { Badge, Button } from 'antd';
import React, { useEffect, useState } from 'react';

type TableListItem = {
  createdAtRange?: number[];
  createdAt: number;
  code: string;
};

type DetailListProps = {
  ip: string;
};

const DetailList: React.FC<DetailListProps> = (props) => {
  const { ip } = props;
  const [tableListDataSource, setTableListDataSource] = useState<
    TableListItem[]
  >([]);

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '时间点',
      key: 'createdAt',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    {
      title: '代码',
      key: 'code',
      width: 80,
      dataIndex: 'code',
      valueType: 'code',
    },
    {
      title: '操作',
      key: 'option',
      width: 80,
      valueType: 'option',
      render: () => [<a key="a">预警</a>],
    },
  ];

  useEffect(() => {
    const source = [];
    for (let i = 0; i < 15; i += 1) {
      source.push({
        createdAt: Date.now() - Math.floor(Math.random() * 10000),
        code: `const getData = async params => {
          const data = await getData(params);
          return { list: data.data, ...data };
        };`,
        key: i,
      });
    }

    setTableListDataSource(source);
  }, [ip]);

  return (
    <ProTable<TableListItem>
      columns={columns}
      dataSource={tableListDataSource}
      pagination={{
        pageSize: 3,
        showSizeChanger: false,
      }}
      rowKey="key"
      toolBarRender={false}
      search={false}
    />
  );
};

type statusType = BadgeProps['status'];

const valueEnum: statusType[] = ['success', 'error', 'processing', 'default'];

export type IpListItem = {
  ip?: string;
  cpu?: number | string;
  mem?: number | string;
  disk?: number | string;
  status: statusType;
};

const ipListDataSource: IpListItem[] = [];

for (let i = 0; i < 10; i += 1) {
  ipListDataSource.push({
    ip: `106.14.98.1${i}4`,
    cpu: 10,
    mem: 20,
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    disk: 30,
  });
}

type IPListProps = {
  ip: string;
  onChange: (id: string) => void;
};

const IPList: React.FC<IPListProps> = (props) => {
  const { onChange } = props;

  const columns: ProColumns<IpListItem>[] = [
    {
      title: 'IP',
      key: 'ip',
      dataIndex: 'ip',
      render: (_, item) => {
        return <Badge status={item.status} text={item.ip} />;
      },
    },
    {
      title: 'CPU',
      key: 'cpu',
      dataIndex: 'cpu',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
    {
      title: 'Mem',
      key: 'mem',
      dataIndex: 'mem',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
    {
      title: 'Disk',
      key: 'disk',
      dataIndex: 'disk',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
  ];
  return (
    <ProTable<IpListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: ipListDataSource,
          success: true,
        });
      }}
      rowKey="ip"
      toolbar={{
        search: {
          onSearch: (value) => {
            alert(value);
          },
        },
        actions: [
          <Button key="list" type="primary">
            新建项目
          </Button>,
        ],
      }}
      options={false}
      pagination={false}
      search={false}
      onRow={(record) => {
        return {
          onClick: () => {
            if (record.ip) {
              onChange(record.ip);
            }
          },
        };
      }}
    />
  );
};

const Demo: React.FC = () => {
  const [ip, setIp] = useState('0.0.0.0');
  return (
    <ProCard split="vertical">
      <ProCard colSpan="384px" ghost>
        <IPList onChange={(cIp) => setIp(cIp)} ip={ip} />
      </ProCard>
      <ProCard title={ip}>
        <DetailList ip={ip} />
      </ProCard>
    </ProCard>
  );
};

const DemoWithDocs = () => {
  return (
    <>
      <Demo />
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProTable 分割表格 Props 说明：</h4>
        <ul>
          <li>
            <strong>ProTable</strong>: 专业表格组件
          </li>
          <li>
            <strong>ProCard</strong>: 专业卡片组件
          </li>
          <li>
            <strong>Badge</strong>: 徽章组件
          </li>
          <li>
            <strong>Button</strong>: 按钮组件
          </li>
          <li>
            <strong>分割表格</strong>: 展示分割表格功能
          </li>
        </ul>
        <h4>ProTable 配置：</h4>
        <ul>
          <li>
            <strong>columns</strong>: 列配置
          </li>
          <li>
            <strong>dataSource</strong>: 数据源
          </li>
          <li>
            <strong>pagination</strong>: 分页配置
          </li>
          <li>
            <strong>rowKey</strong>: 行键
          </li>
          <li>
            <strong>toolBarRender</strong>: 工具栏渲染
          </li>
          <li>
            <strong>options</strong>: 选项配置
          </li>
          <li>
            <strong>search</strong>: 搜索配置
          </li>
          <li>
            <strong>onRow</strong>: 行事件
          </li>
          <li>
            <strong>request</strong>: 请求函数
          </li>
          <li>
            <strong>toolbar</strong>: 工具栏配置
          </li>
        </ul>
        <h4>分割表格特点：</h4>
        <ul>
          <li>
            <strong>垂直分割</strong>: 支持垂直分割
          </li>
          <li>
            <strong>主从结构</strong>: 支持主从结构
          </li>
          <li>
            <strong>联动显示</strong>: 支持联动显示
          </li>
          <li>
            <strong>状态管理</strong>: 支持状态管理
          </li>
          <li>
            <strong>百分比显示</strong>: 支持百分比显示
          </li>
          <li>
            <strong>代码展示</strong>: 支持代码展示
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>监控系统</strong>: 监控系统需求
          </li>
          <li>
            <strong>详情展示</strong>: 详情展示功能
          </li>
          <li>
            <strong>主从界面</strong>: 主从界面需求
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <DemoWithDocs />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import dayjs from 'dayjs';

export type TableListItem = {
  key: number;
  name: string;
  creator: string;
  createdAt: number;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 1; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    creator: creators[Math.floor(Math.random() * creators.length)],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
    formItemProps: {
      lightProps: {
        labelFormatter: (value) => `app-${value}`,
      },
    },
  },
  {
    title: '日期范围',
    dataIndex: 'startTime',
    valueType: 'dateRange',
    hideInTable: true,
    initialValue: [dayjs(), dayjs().add(1, 'day')],
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
      headerTitle="Light Filter"
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      options={false}
      search={{
        filterType: 'light',
      }}
      dateFormatter="string"
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
    <h4>ProTable 轻量过滤器 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>轻量过滤器</strong>: 展示轻量过滤器功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
    </ul>
    <h4>轻量过滤器特点：</h4>
    <ul>
      <li>
        <strong>轻量设计</strong>: 轻量级设计
      </li>
      <li>
        <strong>标签格式化</strong>: 支持标签格式化
      </li>
      <li>
        <strong>日期范围</strong>: 支持日期范围
      </li>
      <li>
        <strong>选择器</strong>: 支持选择器
      </li>
      <li>
        <strong>初始值</strong>: 支持初始值
      </li>
      <li>
        <strong>隐藏列</strong>: 支持隐藏列
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>快速筛选</strong>: 快速筛选需求
      </li>
      <li>
        <strong>简洁界面</strong>: 简洁界面需求
      </li>
      <li>
        <strong>轻量应用</strong>: 轻量应用场景
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';

type GithubIssueItem = {
  key: number;
  name: string;
  createdAt: number;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: 'index',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: 'Title',
    dataIndex: 'name',
  },
  {
    title: 'Money',
    dataIndex: 'title',
    width: 100,
    valueType: 'money',
    renderText: () => (Math.random() * 100).toFixed(2),
  },
];

const SearchOptionTable = () => (
  <ProTable<GithubIssueItem>
    columns={columns}
    request={async () => {
      return {
        data: [
          {
            key: 1,
            name: `TradeCode ${1}`,
            createdAt: 1602572994055,
          },
        ],
        success: true,
      };
    }}
    rowKey="key"
    dateFormatter="string"
    headerTitle="查询 Table"
    search={{
      defaultCollapsed: false,
      labelWidth: 'auto',
      optionRender: (searchConfig, formProps, dom) => [
        ...dom.reverse(),
        <Button key="out" onClick={() => {}}>
          导出
        </Button>,
      ],
    }}
    toolBarRender={() => [
      <Button key="primary" type="primary">
        <PlusOutlined />
        新建
      </Button>,
    ]}
  />
);

const SearchOptionTableWithDocs = () => {
  return (
    <>
      {SearchOptionTable()}
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProTable 搜索选项 Props 说明：</h4>
        <ul>
          <li>
            <strong>ProTable</strong>: 专业表格组件
          </li>
          <li>
            <strong>Button</strong>: 按钮组件
          </li>
          <li>
            <strong>搜索选项</strong>: 展示搜索选项功能
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
            <strong>rowKey</strong>: 行键
          </li>
          <li>
            <strong>dateFormatter</strong>: 日期格式化
          </li>
          <li>
            <strong>headerTitle</strong>: 表格标题
          </li>
          <li>
            <strong>search</strong>: 搜索配置
          </li>
          <li>
            <strong>toolBarRender</strong>: 工具栏渲染
          </li>
        </ul>
        <h4>搜索选项特点：</h4>
        <ul>
          <li>
            <strong>自定义选项</strong>: 支持自定义选项
          </li>
          <li>
            <strong>选项渲染</strong>: 支持选项渲染
          </li>
          <li>
            <strong>默认展开</strong>: 支持默认展开
          </li>
          <li>
            <strong>标签宽度</strong>: 支持标签宽度
          </li>
          <li>
            <strong>导出功能</strong>: 支持导出功能
          </li>
          <li>
            <strong>货币类型</strong>: 支持货币类型
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>高级搜索</strong>: 高级搜索需求
          </li>
          <li>
            <strong>自定义操作</strong>: 自定义操作功能
          </li>
          <li>
            <strong>复杂查询</strong>: 复杂查询需求
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <SearchOptionTableWithDocs />
  </div>
);

import { ProTable } from '@ant-design/pro-components';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  status: string;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
  percent: number | string;
  createdAtRange: number[];
  code: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    createdAtRange: [
      Date.now() - Math.floor(Math.random() * 2000),
      Date.now() - Math.floor(Math.random() * 2000),
    ],
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    percent:
      Math.random() > 0.5
        ? ((i + 1) * 10 + Math.random()).toFixed(3)
        : -((i + 1) * 10 + Math.random()).toFixed(2),
    code: `const getData = async params => {
  const data = await getData(params);
  return { list: data.data, ...data };
};`,
  });
}

const ValueTypeNumberTable = () => (
  <ProTable<TableListItem>
    columns={[
      {
        title: '进度',
        key: 'progress',
        dataIndex: 'progress',
        valueType: (item) => ({
          type: 'progress',
          status: item.status !== 'error' ? 'active' : 'exception',
        }),
        width: 200,
      },
      {
        title: '金额',
        dataIndex: 'money',
        valueType: 'money',
        width: 150,
      },
      {
        title: '数字',
        dataIndex: 'money',
        key: 'digit',
        valueType: 'digit',
        width: 150,
      },
      {
        title: '数字',
        dataIndex: 'money',
        key: 'second',
        valueType: 'second',
        width: 150,
      },
      {
        title: '百分比',
        key: 'percent',
        width: 120,
        dataIndex: 'percent',
        valueType: () => ({
          type: 'percent',
        }),
      },
      {
        title: '操作',
        key: 'option',
        width: 120,
        valueType: 'option',
        render: (_, row, index, action) => [
          <a
            key="a"
            onClick={() => {
              action?.startEditable(row.key);
            }}
          >
            编辑
          </a>,
        ],
      },
    ]}
    request={() => {
      return Promise.resolve({
        total: 200,
        data: tableListDataSource,
        success: true,
      });
    }}
    rowKey="key"
    headerTitle="数字类"
  />
);

const ValueTypeNumberWithDocs = () => {
  return (
    <>
      {ValueTypeNumberTable()}
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProTable 值类型数字 Props 说明：</h4>
        <ul>
          <li>
            <strong>ProTable</strong>: 专业表格组件
          </li>
          <li>
            <strong>值类型数字</strong>: 展示值类型数字功能
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
            <strong>rowKey</strong>: 行键
          </li>
          <li>
            <strong>headerTitle</strong>: 表格标题
          </li>
        </ul>
        <h4>值类型数字特点：</h4>
        <ul>
          <li>
            <strong>进度条</strong>: 支持进度条
          </li>
          <li>
            <strong>金额</strong>: 支持金额
          </li>
          <li>
            <strong>数字</strong>: 支持数字
          </li>
          <li>
            <strong>秒数</strong>: 支持秒数
          </li>
          <li>
            <strong>百分比</strong>: 支持百分比
          </li>
          <li>
            <strong>动态状态</strong>: 支持动态状态
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数字类</strong>: 数字类数据展示
          </li>
          <li>
            <strong>统计展示</strong>: 统计展示功能
          </li>
          <li>
            <strong>进度监控</strong>: 进度监控需求
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <ValueTypeNumberWithDocs />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
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
      cardProps={{ title: '业务定制', variant: 'outlined' }}
      headerTitle={
        <Button
          key="primary"
          type="primary"
          onClick={() => {
            alert('add');
          }}
        >
          添加
        </Button>
      }
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
    <h4>ProTable 卡片标题 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>卡片标题</strong>: 展示卡片标题功能
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
        <strong>cardProps</strong>: 卡片属性配置
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>卡片标题特点：</h4>
    <ul>
      <li>
        <strong>卡片包装</strong>: 支持卡片包装
      </li>
      <li>
        <strong>自定义标题</strong>: 支持自定义标题
      </li>
      <li>
        <strong>请求处理</strong>: 支持请求处理
      </li>
      <li>
        <strong>简洁配置</strong>: 简洁的配置方式
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>业务定制</strong>: 业务定制需求
      </li>
      <li>
        <strong>卡片展示</strong>: 卡片展示功能
      </li>
      <li>
        <strong>数据管理</strong>: 数据管理系统
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';

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
      ErrorBoundary={false}
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
    <h4>ProTable 错误边界 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>错误边界</strong>: 展示错误边界功能
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
        <strong>ErrorBoundary</strong>: 错误边界配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
    </ul>
    <h4>错误边界特点：</h4>
    <ul>
      <li>
        <strong>错误捕获</strong>: 支持错误捕获
      </li>
      <li>
        <strong>错误处理</strong>: 支持错误处理
      </li>
      <li>
        <strong>容错机制</strong>: 支持容错机制
      </li>
      <li>
        <strong>禁用边界</strong>: 支持禁用错误边界
      </li>
      <li>
        <strong>异常处理</strong>: 支持异常处理
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>错误处理</strong>: 错误处理需求
      </li>
      <li>
        <strong>稳定性保证</strong>: 稳定性保证
      </li>
      <li>
        <strong>用户体验</strong>: 用户体验优化
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DownOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    width: 80,
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
    title: '状态',
    width: 80,
    dataIndex: 'status',
    initialValue: 'all',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '创建时间',
    tooltip: '这是一段描述',
    width: 140,
    key: 'since',
    search: false,
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
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
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        optionRender: false,
        collapsed: false,
      }}
      dateFormatter="string"
      headerTitle="表格标题"
      toolBarRender={() => [
        <Button key="show">查看日志</Button>,
        <Button key="out">
          导出数据
          <DownOutlined />
        </Button>,
        <Button type="primary" key="primary">
          创建应用
        </Button>,
      ]}
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
    <h4>ProTable 无选项 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>无选项</strong>: 展示无选项功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>无选项特点：</h4>
    <ul>
      <li>
        <strong>optionRender</strong>: 禁用选项渲染
      </li>
      <li>
        <strong>折叠控制</strong>: 支持折叠控制
      </li>
      <li>
        <strong>工具栏操作</strong>: 支持工具栏操作
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>排序功能</strong>: 支持排序功能
      </li>
      <li>
        <strong>状态过滤</strong>: 支持状态过滤
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>简洁界面</strong>: 简洁界面需求
      </li>
      <li>
        <strong>只读展示</strong>: 只读展示功能
      </li>
      <li>
        <strong>数据查看</strong>: 数据查看需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Space, Tag } from 'antd';
import { useRef } from 'react';
import request from 'umi-request';
export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

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

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tooltip: 'The title will shrink automatically if it is too long',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'This field is required',
        },
      ],
    },
  },
  {
    disable: true,
    title: 'Status',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: 'select',
    valueEnum: {
      all: { text: 'Very Long'.repeat(50) },
      open: {
        text: 'Unresolved',
        status: 'Error',
      },
      closed: {
        text: 'Resolved',
        status: 'Success',
        disabled: true,
      },
      processing: {
        text: 'In Progress',
        status: 'Processing',
      },
    },
  },
  {
    disable: true,
    title: 'Labels',
    dataIndex: 'labels',
    search: false,
    formItemRender: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: 'Creation Time',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    sorter: true,
    search: false,
  },
  {
    title: 'Creation Time',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: 'Actions',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        Edit
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        View
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: 'Copy' },
          { key: 'delete', name: 'Delete' },
        ]}
      />,
    ],
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params, sort, filter) => {
        console.log(sort, filter);
        await waitTime(2000);
        return request<{
          data: GithubIssueItem[];
        }>('https://proapi.azurewebsites.net/github/issues', {
          params,
        });
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        defaultValue: {
          option: { fixed: 'right', disable: true },
        },
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // Since transform is configured, the submitted parameters are different from the defined ones, so they need to be transformed here
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="Advanced Table"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef.current?.reload();
          }}
          type="primary"
        >
          New
        </Button>,
        <Dropdown
          key="menu"
          menu={{
            items: [
              {
                label: '1st item',
                key: '1',
              },
              {
                label: '2nd item',
                key: '2',
              },
              {
                label: '3rd item',
                key: '3',
              },
            ],
          }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
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
    <h4>ProTable 单表格 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>Dropdown</strong>: 下拉菜单组件
      </li>
      <li>
        <strong>Space</strong>: 间距组件
      </li>
      <li>
        <strong>Tag</strong>: 标签组件
      </li>
      <li>
        <strong>单表格</strong>: 展示单表格功能
      </li>
    </ul>
    <h4>ProTable 配置：</h4>
    <ul>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>cardBordered</strong>: 卡片边框
      </li>
      <li>
        <strong>request</strong>: 请求函数
      </li>
      <li>
        <strong>editable</strong>: 可编辑配置
      </li>
      <li>
        <strong>columnsState</strong>: 列状态配置
      </li>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>form</strong>: 表单配置
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>单表格特点：</h4>
    <ul>
      <li>
        <strong>多行编辑</strong>: 支持多行编辑
      </li>
      <li>
        <strong>列状态持久化</strong>: 支持列状态持久化
      </li>
      <li>
        <strong>URL同步</strong>: 支持URL同步
      </li>
      <li>
        <strong>高级搜索</strong>: 支持高级搜索
      </li>
      <li>
        <strong>列设置</strong>: 支持列设置
      </li>
      <li>
        <strong>卡片边框</strong>: 支持卡片边框
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>高级表格</strong>: 高级表格需求
      </li>
      <li>
        <strong>复杂数据</strong>: 复杂数据管理
      </li>
      <li>
        <strong>企业应用</strong>: 企业应用系统
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined, SearchOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Input } from 'antd';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  progress: number;
  money: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '排序',
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
    // 自定义筛选项功能具体实现请参考 https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input style={{ width: 188, marginBlockEnd: 8, display: 'block' }} />
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
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
    title: '状态',
    dataIndex: 'status',
    initialValue: 'all',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
  },
  {
    title: '操作',
    width: 180,
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="link">链路</a>,
      <a key="link2">报警</a>,
      <a key="link3">监控</a>,
      <TableDropdown
        key="actionGroup"
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
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
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        layout: 'vertical',
        defaultCollapsed: false,
      }}
      dateFormatter="string"
      toolbar={{
        title: '高级表格',
        tooltip: '这是一个标题提示',
      }}
      toolBarRender={() => [
        <Button key="danger" danger>
          危险按钮
        </Button>,
        <Button key="show">查看日志</Button>,
        <Button type="primary" key="primary">
          创建应用
        </Button>,

        <Dropdown
          key="menu"
          menu={{
            items: [
              {
                label: '1st item',
                key: '1',
              },
              {
                label: '2nd item',
                key: '2',
              },
              {
                label: '3rd item',
                key: '3',
              },
            ],
          }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
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
    <h4>ProTable 数据源 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>TableDropdown</strong>: 表格下拉菜单组件
      </li>
      <li>
        <strong>Dropdown</strong>: 下拉菜单组件
      </li>
      <li>
        <strong>数据源</strong>: 展示数据源功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>toolbar</strong>: 工具栏配置
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>数据源特点：</h4>
    <ul>
      <li>
        <strong>自定义筛选</strong>: 支持自定义筛选
      </li>
      <li>
        <strong>搜索功能</strong>: 支持搜索功能
      </li>
      <li>
        <strong>状态过滤</strong>: 支持状态过滤
      </li>
      <li>
        <strong>省略号显示</strong>: 支持省略号显示
      </li>
      <li>
        <strong>复制功能</strong>: 支持复制功能
      </li>
      <li>
        <strong>下拉操作</strong>: 支持下拉操作
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>数据展示</strong>: 数据展示系统
      </li>
      <li>
        <strong>内容管理</strong>: 内容管理平台
      </li>
      <li>
        <strong>应用管理</strong>: 应用管理系统
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Space } from 'antd';
import dayjs from 'dayjs';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  status: string | number;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
  percent: number | string;
  createdAtRange: number[];
  code: string;
  avatar: string;
  image: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    image:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    name: `TradeCode ${i}`,
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    updatedAt:
      dayjs('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 1000),
    createdAt:
      dayjs('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 2000),
    createdAtRange: [
      dayjs('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 2000),
      dayjs('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 2000),
    ],
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    percent:
      Math.random() > 0.5
        ? ((i + 1) * 10 + Math.random()).toFixed(3)
        : -((i + 1) * 10 + Math.random()).toFixed(2),
    code: `const getData = async params => {
  const data = await getData(params);
  return { list: data.data, ...data };
};`,
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
  },
  {
    title: 'border 序号',
    dataIndex: 'index',
    key: 'indexBorder',
    valueType: 'indexBorder',
  },
  {
    title: '代码',
    key: 'code',
    width: 120,
    dataIndex: 'code',
    valueType: 'code',
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    valueType: 'avatar',
    width: 150,
    render: (dom) => (
      <Space>
        <span>{dom}</span>
        <a
          href="https://github.com/chenshuai2144"
          target="_blank"
          rel="noopener noreferrer"
        >
          chenshuai2144
        </a>
      </Space>
    ),
  },
  {
    title: '图片',
    dataIndex: 'image',
    key: 'image',
    valueType: 'image',
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: (_, row, index, action) => [
      <a
        key="a"
        onClick={() => {
          action?.startEditable(row.key);
        }}
      >
        编辑
      </a>,
    ],
  },
];

const Demo = () => (
  <>
    <ProTable<TableListItem>
      columns={columns}
      request={() => {
        return Promise.resolve({
          total: 200,
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      headerTitle="样式类"
    />
    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>ProTable 值类型 Props 说明：</h4>
      <ul>
        <li>
          <strong>ProTable</strong>: 专业表格组件
        </li>
        <li>
          <strong>Space</strong>: 间距组件
        </li>
        <li>
          <strong>值类型</strong>: 展示值类型功能
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
          <strong>rowKey</strong>: 行键
        </li>
        <li>
          <strong>headerTitle</strong>: 表格标题
        </li>
      </ul>
      <h4>值类型特点：</h4>
      <ul>
        <li>
          <strong>序号</strong>: 支持序号
        </li>
        <li>
          <strong>边框序号</strong>: 支持边框序号
        </li>
        <li>
          <strong>代码</strong>: 支持代码
        </li>
        <li>
          <strong>头像</strong>: 支持头像
        </li>
        <li>
          <strong>图片</strong>: 支持图片
        </li>
        <li>
          <strong>自定义渲染</strong>: 支持自定义渲染
        </li>
      </ul>
      <h4>使用场景：</h4>
      <ul>
        <li>
          <strong>样式展示</strong>: 样式展示需求
        </li>
        <li>
          <strong>多媒体</strong>: 多媒体展示
        </li>
        <li>
          <strong>用户信息</strong>: 用户信息展示
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type {
  ActionType,
  EditableFormInstance,
  ProColumns,
  ProFormInstance,
} from '@ant-design/pro-components';
import { EditableProTable, ProCard, ProForm } from '@ant-design/pro-components';
import React, { useRef, useState } from 'react';

type DataSourceType = {
  id: React.Key;
  associate?: string;
};

const defaultData: DataSourceType[] = [];

const Demo = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const formRef = useRef<ProFormInstance<any>>();
  const actionRef = useRef<ActionType>();
  const editableFormRef = useRef<EditableFormInstance>();
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '关联题库',
      dataIndex: 'associate',
      valueType: 'text',
      ellipsis: true,
      formItemProps: {
        rules: [{ required: true, message: 'Required' }],
      },
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, row) => [
        <a
          key="delete"
          onClick={() => {
            const tableDataSource = formRef.current?.getFieldValue(
              'table',
            ) as DataSourceType[];
            formRef.current?.setFieldsValue({
              table: tableDataSource.filter((item) => item.id !== row?.id),
            });
          }}
        >
          移除
        </a>,
        <a
          key="edit"
          onClick={() => {
            actionRef.current?.startEditable(row.id);
          }}
        >
          编辑
        </a>,
      ],
    },
  ];

  return (
    <ProCard>
      <div
        style={{
          maxWidth: 800,
          margin: 'auto',
        }}
      >
        <ProForm<{
          table: DataSourceType[];
        }>
          formRef={formRef}
          initialValues={{
            table: defaultData,
          }}
        >
          <EditableProTable<DataSourceType>
            rowKey="id"
            scroll={{
              x: true,
            }}
            editableFormRef={editableFormRef}
            controlled
            actionRef={actionRef}
            formItemProps={{
              label: '题库编辑',
            }}
            maxLength={10}
            name="table"
            columns={columns}
            recordCreatorProps={{
              record: (index) => {
                return { id: index + 1 };
              },
            }}
            editable={{
              type: 'multiple',
              editableKeys,
              onChange: setEditableRowKeys,
            }}
          />
        </ProForm>
      </div>
    </ProCard>
  );

  <div
    style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '6px',
    }}
  >
    <h4>EditableProTable 规则 Props 说明：</h4>
    <ul>
      <li>
        <strong>EditableProTable</strong>: 可编辑专业表格组件
      </li>
      <li>
        <strong>ProCard</strong>: 专业卡片组件
      </li>
      <li>
        <strong>ProForm</strong>: 专业表单组件
      </li>
      <li>
        <strong>编辑规则</strong>: 展示编辑规则功能
      </li>
    </ul>
    <h4>EditableProTable 配置：</h4>
    <ul>
      <li>
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>scroll</strong>: 滚动配置
      </li>
      <li>
        <strong>editableFormRef</strong>: 可编辑表单引用
      </li>
      <li>
        <strong>controlled</strong>: 受控模式
      </li>
      <li>
        <strong>actionRef</strong>: 操作引用
      </li>
      <li>
        <strong>formItemProps</strong>: 表单项属性
      </li>
      <li>
        <strong>maxLength</strong>: 最大长度
      </li>
      <li>
        <strong>name</strong>: 字段名称
      </li>
      <li>
        <strong>columns</strong>: 列配置
      </li>
      <li>
        <strong>recordCreatorProps</strong>: 记录创建属性
      </li>
      <li>
        <strong>editable</strong>: 可编辑配置
      </li>
    </ul>
    <h4>编辑规则特点：</h4>
    <ul>
      <li>
        <strong>表单验证</strong>: 支持表单验证
      </li>
      <li>
        <strong>必填校验</strong>: 支持必填校验
      </li>
      <li>
        <strong>多行编辑</strong>: 支持多行编辑
      </li>
      <li>
        <strong>动态添加</strong>: 支持动态添加
      </li>
      <li>
        <strong>行内编辑</strong>: 支持行内编辑
      </li>
      <li>
        <strong>数据控制</strong>: 支持数据控制
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>数据编辑</strong>: 数据编辑需求
      </li>
      <li>
        <strong>表单管理</strong>: 表单管理系统
      </li>
      <li>
        <strong>配置管理</strong>: 配置管理功能
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

/* eslint-disable no-console */ import { PlusOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';

type GithubIssueItem = {
  key: number;
  name: string;
  createdAt: number;
};

const MySelect: React.FC<{
  state: {
    type: number;
  };
  /** Value 和 onChange 会被自动注入 */
  value?: string;
  onChange?: (value: string) => void;
}> = (props) => {
  const { state } = props;

  const [innerOptions, setOptions] = useState<
    {
      label: React.ReactNode;
      value: number;
    }[]
  >([]);

  useEffect(() => {
    const { type } = state || {};
    if (type === 2) {
      setOptions([
        {
          label: '星期一',
          value: 1,
        },
        {
          label: '星期二',
          value: 2,
        },
      ]);
    } else {
      setOptions([
        {
          label: '一月',
          value: 1,
        },
        {
          label: '二月',
          value: 2,
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(state)]);

  return (
    <Select
      options={innerOptions}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

const Demo = () => {
  const columns: ProColumns<GithubIssueItem>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'indexBorder',
    },
    {
      title: '标题',
      dataIndex: 'name',
    },
    {
      title: '动态表单',
      key: 'direction',
      hideInTable: true,
      dataIndex: 'direction',
      formItemRender: (item, { type, defaultRender, ...rest }, form) => {
        if (type === 'form') {
          return null;
        }
        const stateType = form.getFieldValue('state');
        if (stateType === 3) {
          return <Input />;
        }
        if (stateType === 4) {
          return null;
        }
        return (
          <MySelect
            {...rest}
            state={{
              type: stateType,
            }}
          />
        );
      },
    },
    {
      title: '状态',
      dataIndex: 'state',
      initialValue: 1,
      valueType: 'select',
      request: async () => [
        {
          label: '月份',
          value: 1,
        },
        {
          label: '周',
          value: 2,
        },
        {
          label: '自定义',
          value: 3,
        },
        {
          label: '不展示',
          value: 4,
        },
      ],
    },
  ];

  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      request={async (params) => {
        console.log(`request params:`, params);
        return {
          data: [
            {
              key: 1,
              name: `TradeCode ${1}`,
              createdAt: 1602572994055,
              state: 'closed',
            },
          ],
          success: true,
        };
      }}
      rowKey="key"
      tableLayout="fixed"
      dateFormatter="string"
      headerTitle="动态自定义搜索栏"
      search={{
        defaultCollapsed: false,
        optionRender: (searchConfig, formProps, dom) => [
          ...dom.reverse(),
          <Button
            key="out"
            onClick={() => {
              const values = searchConfig?.form?.getFieldsValue();
              console.log(values);
            }}
          >
            导出
          </Button>,
        ],
      }}
      toolBarRender={() => [
        <Button key="3" type="primary">
          <PlusOutlined />
          新建
        </Button>,
      ]}
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
    <h4>ProTable 联动表单 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>Input</strong>: 输入框组件
      </li>
      <li>
        <strong>Select</strong>: 选择器组件
      </li>
      <li>
        <strong>联动表单</strong>: 展示联动表单功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>tableLayout</strong>: 表格布局
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
    </ul>
    <h4>联动表单特点：</h4>
    <ul>
      <li>
        <strong>动态表单</strong>: 支持动态表单
      </li>
      <li>
        <strong>条件渲染</strong>: 支持条件渲染
      </li>
      <li>
        <strong>表单联动</strong>: 支持表单联动
      </li>
      <li>
        <strong>自定义组件</strong>: 支持自定义组件
      </li>
      <li>
        <strong>状态管理</strong>: 支持状态管理
      </li>
      <li>
        <strong>选项渲染</strong>: 支持选项渲染
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>复杂表单</strong>: 复杂表单需求
      </li>
      <li>
        <strong>动态配置</strong>: 动态配置功能
      </li>
      <li>
        <strong>条件展示</strong>: 条件展示需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';

const cascaderOptions = [
  {
    field: 'front end',
    value: 'fe',
    language: [
      {
        field: 'Javascript',
        value: 'js',
      },
      {
        field: 'Typescript',
        value: 'ts',
      },
    ],
  },
  {
    field: 'back end',
    value: 'be',
    language: [
      {
        field: 'Java',
        value: 'java',
      },
      {
        field: 'Go',
        value: 'go',
      },
    ],
  },
];

const valueEnumMap = {
  0: 'running',
  1: 'online',
  2: 'error',
};

export type TableListItem = {
  key: number;
  status: string | number;
  cascader: string[];
  treeSelect: string[];
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    status: valueEnumMap[((Math.floor(Math.random() * 10) % 3) + '') as '0'],
    cascader: ['fe', 'js'],
    treeSelect: ['fe', 'js'],
  });
}

const valueEnum = {
  all: { text: '全部', status: 'Default' },
  running: { text: '运行中', status: 'Processing' },
  online: { text: '已上线', status: 'Success' },
  error: { text: '异常', status: 'Error' },
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '状态',
    valueType: 'select',
    dataIndex: 'status',
    initialValue: ['all'],
    width: 100,
    valueEnum,
  },
  {
    title: '单选状态',
    dataIndex: 'status',
    valueType: 'radio',
    initialValue: 'all',
    width: 100,
    valueEnum,
  },
  {
    title: '单选按钮状态',
    dataIndex: 'status',
    valueType: 'radioButton',
    initialValue: 'all',
    width: 100,
    valueEnum,
  },
  {
    title: '多选状态',
    dataIndex: 'status',
    initialValue: ['all'],
    width: 100,
    valueType: 'checkbox',
    valueEnum,
  },
  {
    title: '级联选择器',
    key: 'cascader',
    dataIndex: 'cascader',
    width: 100,
    fieldProps: {
      options: cascaderOptions,
      fieldNames: {
        children: 'language',
        label: 'field',
      },
    },
    valueType: 'cascader',
  },
  {
    title: '树形下拉框',
    key: 'treeSelect',
    dataIndex: 'treeSelect',
    width: 100,
    // request: async () => cascaderOptions,
    fieldProps: {
      options: cascaderOptions,
      fieldNames: {
        children: 'language',
        label: 'field',
      },
      showSearch: true,
      filterTreeNode: true,
      multiple: true,
      treeNodeFilterProp: 'field',
    },
    valueType: 'treeSelect',
  },
  {
    title: '时间范围',
    key: 'dateTimeRange',
    dataIndex: 'dateTimeRange',
    hideInTable: true,
    valueType: 'dateTimeRange',
    fieldProps: {
      // placeholder: []
    },
    formItemRender: (_, { type, defaultRender }) => {
      if (type === 'form') {
        return null;
      }

      return defaultRender(_);
    },
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: (_, row, index, action) => [
      <a
        key="a"
        onClick={() => {
          action?.startEditable(row.key);
        }}
      >
        编辑
      </a>,
    ],
  },
];

const Demo = () => (
  <>
    <ProTable<TableListItem>
      columns={columns}
      request={() => {
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      search={{
        defaultCollapsed: false,
        span: 12,
        labelWidth: 'auto',
      }}
      editable={{
        type: 'multiple',
      }}
      rowKey="key"
      headerTitle="样式类"
    />
    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>ProTable 值类型选择 Props 说明：</h4>
      <ul>
        <li>
          <strong>ProTable</strong>: 专业表格组件
        </li>
        <li>
          <strong>值类型选择</strong>: 展示值类型选择功能
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
          <strong>search</strong>: 搜索配置
        </li>
        <li>
          <strong>editable</strong>: 可编辑配置
        </li>
        <li>
          <strong>rowKey</strong>: 行键
        </li>
        <li>
          <strong>headerTitle</strong>: 表格标题
        </li>
      </ul>
      <h4>值类型选择特点：</h4>
      <ul>
        <li>
          <strong>选择器</strong>: 支持选择器
        </li>
        <li>
          <strong>单选按钮</strong>: 支持单选按钮
        </li>
        <li>
          <strong>多选框</strong>: 支持多选框
        </li>
        <li>
          <strong>级联选择</strong>: 支持级联选择
        </li>
        <li>
          <strong>树形选择</strong>: 支持树形选择
        </li>
        <li>
          <strong>时间范围</strong>: 支持时间范围
        </li>
        <li>
          <strong>多行编辑</strong>: 支持多行编辑
        </li>
      </ul>
      <h4>使用场景：</h4>
      <ul>
        <li>
          <strong>表单选择</strong>: 表单选择需求
        </li>
        <li>
          <strong>数据筛选</strong>: 数据筛选功能
        </li>
        <li>
          <strong>复杂选择</strong>: 复杂选择需求
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns, ProFormInstance } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';

export type TableListItem = {
  key: number;
  name: string;
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '创建时间',
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'date',
  },
];

const Demo = () => {
  const ref = useRef<ProFormInstance>();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ProTable<TableListItem>
      columns={columns}
      request={() =>
        Promise.resolve({
          data: [
            {
              key: 1,
              name: `TradeCode ${1}`,
              createdAt: 1602572994055,
            },
          ],
          success: true,
        })
      }
      rowKey="key"
      pagination={{
        showSizeChanger: true,
      }}
      search={{
        collapsed,
        onCollapse: setCollapsed,
      }}
      formRef={ref}
      toolBarRender={() => [
        <Button
          key="set"
          onClick={() => {
            if (ref.current) {
              ref.current.setFieldsValue({
                name: 'test-xxx',
              });
            }
          }}
        >
          赋值
        </Button>,
        <Button
          key="submit"
          onClick={() => {
            if (ref.current) {
              ref.current.submit();
            }
          }}
        >
          提交
        </Button>,
      ]}
      options={false}
      dateFormatter="string"
      headerTitle="表单赋值"
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
    <h4>ProTable 表单 Props 说明：</h4>
    <ul>
      <li>
        <strong>ProTable</strong>: 专业表格组件
      </li>
      <li>
        <strong>Button</strong>: 按钮组件
      </li>
      <li>
        <strong>表单</strong>: 展示表单功能
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
        <strong>rowKey</strong>: 行键
      </li>
      <li>
        <strong>pagination</strong>: 分页配置
      </li>
      <li>
        <strong>search</strong>: 搜索配置
      </li>
      <li>
        <strong>formRef</strong>: 表单引用
      </li>
      <li>
        <strong>toolBarRender</strong>: 工具栏渲染
      </li>
      <li>
        <strong>options</strong>: 选项配置
      </li>
      <li>
        <strong>dateFormatter</strong>: 日期格式化
      </li>
      <li>
        <strong>headerTitle</strong>: 表格标题
      </li>
    </ul>
    <h4>表单特点：</h4>
    <ul>
      <li>
        <strong>表单引用</strong>: 支持表单引用
      </li>
      <li>
        <strong>字段赋值</strong>: 支持字段赋值
      </li>
      <li>
        <strong>表单提交</strong>: 支持表单提交
      </li>
      <li>
        <strong>折叠控制</strong>: 支持折叠控制
      </li>
      <li>
        <strong>工具栏操作</strong>: 支持工具栏操作
      </li>
      <li>
        <strong>表单控制</strong>: 支持表单控制
      </li>
    </ul>
    <h4>使用场景：</h4>
    <ul>
      <li>
        <strong>表单管理</strong>: 表单管理需求
      </li>
      <li>
        <strong>数据操作</strong>: 数据操作功能
      </li>
      <li>
        <strong>交互控制</strong>: 交互控制需求
      </li>
    </ul>
  </div>;
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

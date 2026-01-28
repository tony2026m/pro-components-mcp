

import type { ProFormColumnsType } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { Input } from 'antd';

const valueEnum = {
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
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    initialValue: '必填',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'm',
  },
  {
    title: '必填但没显示*',
    dataIndex: 'list',
    valueType: 'formList',
    formItemProps: {
      rules: [{ required: true, message: '请填写列表' }],
    },
    columns: [
      {
        dataIndex: 'isSettlement',
        valueType: 'switch',
        formItemProps: {
          rules: [{ required: true, message: '请填写1' }],
        },
      },
    ],
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'm',
    tooltip: '当title为disabled时状态无法选择',
    dependencies: ['title'],
    fieldProps: (form) => {
      if (form.getFieldValue('title') === 'disabled') {
        return {
          disabled: true,
          placeholder: 'disabled',
        };
      } else {
        return {
          placeholder: 'normal',
        };
      }
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 'm',
    tooltip: '当title为必填时此项将为必填',
    dependencies: ['title'],
    formItemProps(form) {
      if (form.getFieldValue('title') === '必填') {
        return {
          rules: [
            {
              required: true,
            },
          ],
        };
      } else {
        return {};
      }
    },
  },
  {
    valueType: 'dependency',
    name: ['title'],
    columns: ({ title }) => {
      return title !== 'hidden'
        ? [
            {
              title: 'title为hidden时隐藏',
              dataIndex: 'hidden',
              valueType: 'date',
              formItemRender: () => {
                return <Input />;
              },
            },
          ]
        : [];
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'createName',
    valueType: 'date',
  },
  {
    valueType: 'divider',
  },
];

const Demo = () => {
  return (
    <>
      <BetaSchemaForm<DataItem>
        shouldUpdate={false}
        layoutType="Form"
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProFormColumnsType } from '@ant-design/pro-components';
import { BetaSchemaForm, ProForm } from '@ant-design/pro-components';

const valueEnum = {
  money: { text: '按金额' },
  discount: { text: '按折扣' },
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '优惠方式',
    dataIndex: 'type',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    valueType: 'select',
    valueEnum,
    width: 'm',
  },
  {
    valueType: 'dependency',
    name: ['type'],
    columns: ({ type }) => {
      if (type === 'money') {
        return [
          {
            dataIndex: 'money',
            title: '优惠金额',
            width: 'm',
            valueType: 'money',
          },
        ];
      }

      if (type === 'discount') {
        return [
          {
            dataIndex: 'discount',
            title: '折扣',
            valueType: 'digit',
            width: 'm',
            fieldProps: {
              precision: 2,
            },
          },
        ];
      }

      return [];
    },
  },
];

const Demo = () => {
  return (
    <>
      <h1>普通json表单</h1>
      <BetaSchemaForm<DataItem>
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
      <h1>嵌套json表单</h1>
      <ProForm
        initialValues={{
          type: 'money',
        }}
      >
        <BetaSchemaForm<DataItem>
          layoutType="Embed"
          onFinish={async (values) => {
            console.log(values);
          }}
          columns={columns}
        />
      </ProForm>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProFormColumnsType } from '@ant-design/pro-components';
import { BetaSchemaForm, ProProvider } from '@ant-design/pro-components';
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

const columns: ProFormColumnsType<TableListItem, 'link' | 'tags'>[] = [
  {
    title: '标签',
    valueType: 'group',
    columns: [
      {
        title: '只读链接',
        readonly: true,
        dataIndex: 'name',
        valueType: 'link',
      },
      {
        title: '链接',
        dataIndex: 'name',
        valueType: 'link',
      },
    ],
  },
  {
    title: '路径',
    valueType: 'group',
    columns: [
      {
        title: '标签',
        dataIndex: 'status',
        key: 'status',
        valueType: 'tags',
      },
      {
        title: '只读标签',
        readonly: true,
        dataIndex: 'status',
        key: 'status',
        valueType: 'tags',
      },
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
      <BetaSchemaForm<TableListItem, 'link' | 'tags'>
        initialValues={{
          key: 1,
          name: `TradeCode 1`,
          status: [
            {
              value: Math.floor(Math.random() * 10),
              label:
                valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '1'],
            },
            {
              value: Math.floor(Math.random() * 10),
              label:
                valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '1'],
            },
          ],
        }}
        columns={columns}
        title="自定义 valueType"
      />
    </ProProvider.Provider>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProFormColumnsType } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { Input } from 'antd';

const valueEnum = {
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
};

type DataItem = {
  name: string;
  state: string;
  title: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    initialValue: '必填',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'm',
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'm',
    tooltip: '当title为disabled时状态无法选择',
    fieldProps: (form) => {
      if (form.getFieldValue('title') === 'disabled') {
        return {
          disabled: true,
          placeholder: 'disabled',
        };
      } else {
        return {
          placeholder: 'normal',
        };
      }
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 'm',
    tooltip: '当title为必填时此项将为必填',
    dependencies: ['title'],
    formItemProps(form) {
      if (form.getFieldValue('title') === '必填') {
        return {
          rules: [
            {
              required: true,
            },
          ],
        };
      } else {
        return {};
      }
    },
  },
  {
    valueType: 'dependency',
    name: ['title'],
    columns: ({ title }) => {
      return title !== 'hidden'
        ? [
            {
              title: 'title为hidden时隐藏',
              dataIndex: 'hidden',
              valueType: 'date',
              formItemRender: () => {
                return <Input />;
              },
            },
          ]
        : [];
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'createName',
    valueType: 'date',
  },
];

const Demo = () => {
  return (
    <>
      <BetaSchemaForm<DataItem>
        shouldUpdate={(newValues, oldValues) => {
          if (newValues.title !== oldValues?.title) {
            return true;
          }
          return false;
        }}
        layoutType="Form"
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProFormLayoutType } from '@ant-design/pro-components';
import { BetaSchemaForm, ProFormSelect } from '@ant-design/pro-components';
import { Alert, Button, Space } from 'antd';
import { useState } from 'react';

type DataItem = {
  name: string;
  state: string;
};

const Demo = () => {
  const [layoutType, setLayoutType] = useState<ProFormLayoutType>('ModalForm');
  return (
    <>
      <Space
        style={{
          width: '100%',
        }}
        orientation="vertical"
      >
        <Alert
          type="warning"
          title="QueryFilter 和 lightFilter 暂不支持grid模式"
          style={{
            marginBlockEnd: 24,
          }}
        />
        <ProFormSelect
          label="布局方式"
          options={['ModalForm', 'DrawerForm']}
          fieldProps={{
            value: layoutType,
            onChange: (e) => setLayoutType(e),
          }}
        />
      </Space>
      <BetaSchemaForm<DataItem>
        trigger={<Button>点击我</Button>}
        layoutType={layoutType as 'ModalForm'}
        onFinish={async (values) => {
          console.log(values);
        }}
        {...(layoutType === 'ModalForm'
          ? {
              modalProps: { destroyOnHidden: true },
            }
          : {
              drawerProps: { destroyOnHidden: true },
            })}
        columns={[
          {
            title: '标题',
            dataIndex: 'title',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '此项为必填项',
                },
              ],
            },
            width: 'md',
          },
        ]}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProFormColumnsType } from '@ant-design/pro-components';
import {
  BetaSchemaForm,
  ProForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

const valueEnum = {
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
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'm',
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'm',
  },
];

const Demo = () => {
  return (
    <ProForm>
      <h1>ProForm </h1>
      <ProFormText name="username" />
      <ProFormSelect
        name="select-multiple"
        label="多选"
        valueEnum={{
          red: 'Red',
          green: 'Green',
          blue: 'Blue',
        }}
        fieldProps={{
          mode: 'multiple',
        }}
        placeholder="Please select favorite colors"
        rules={[
          {
            required: true,
            message: 'Please select your favorite colors!',
            type: 'array',
          },
        ]}
      />
      <h1>表单1 </h1>
      <BetaSchemaForm<DataItem> layoutType="Embed" columns={columns} />
      <h1>表单2</h1>
      <BetaSchemaForm<DataItem>
        layoutType="Embed"
        columns={[
          {
            title: '创建时间',
            key: 'showTime',
            dataIndex: 'createName',
            valueType: 'date',
          },
          {
            title: '分组',
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'groupState',
                valueType: 'select',
                width: 'xs',
                valueEnum,
              },
              {
                title: '标题',
                width: 'md',
                dataIndex: 'groupTitle',
                formItemProps: {
                  rules: [
                    {
                      required: true,
                      message: '此项为必填项',
                    },
                  ],
                },
              },
            ],
          },
        ]}
      />
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type {
  ProFormColumnsType,
  ProFormInstance,
} from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { message } from 'antd';
import { useRef } from 'react';

const valueEnum = {
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
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[][] = [
  [
    {
      title: '标题',
      dataIndex: 'title',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
      width: 'm',
    },
    {
      title: '状态',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum,
      width: 'm',
    },
  ],
  [
    {
      title: '标签',
      dataIndex: 'labels',
      width: 'm',
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'createName',
      valueType: 'date',
    },
    {
      title: '分组',
      valueType: 'group',
      columns: [
        {
          title: '状态',
          dataIndex: 'groupState',
          valueType: 'select',
          width: 'xs',
          valueEnum,
        },
        {
          title: '标题',
          width: 'md',
          dataIndex: 'groupTitle',
          formItemProps: {
            rules: [
              {
                required: true,
                message: '此项为必填项',
              },
            ],
          },
        },
      ],
    },
  ],
  [
    {
      title: '列表',
      valueType: 'formList',
      dataIndex: 'list',
      initialValue: [{ state: 'all', title: '标题' }],
      columns: [
        {
          valueType: 'group',
          columns: [
            {
              title: '状态',
              dataIndex: 'state',
              valueType: 'select',
              width: 'xs',
              valueEnum,
            },
            {
              title: '标题',
              dataIndex: 'title',
              formItemProps: {
                rules: [
                  {
                    required: true,
                    message: '此项为必填项',
                  },
                ],
              },
              width: 'm',
            },
          ],
        },
      ],
    },
    {
      title: 'FormSet',
      valueType: 'formSet',
      dataIndex: 'formSet',
      columns: [
        {
          title: '状态',
          dataIndex: 'groupState',
          valueType: 'select',
          width: 'xs',
          valueEnum,
        },
        {
          title: '标题',
          dataIndex: 'groupTitle',
          tooltip: '标题过长会自动收缩',
          formItemProps: {
            rules: [
              {
                required: true,
                message: '此项为必填项',
              },
            ],
          },
          width: 'm',
        },
      ],
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      valueType: 'dateRange',
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  ],
];

const Demo = () => {
  const formRef = useRef<ProFormInstance>();

  return (
    <BetaSchemaForm<DataItem>
      layoutType="StepsForm"
      steps={[
        {
          title: '第一步',
        },
        {
          title: '第二步',
        },
        {
          title: '第三步',
        },
      ]}
      onCurrentChange={(current) => {
        console.log('current: ', current);
      }}
      formRef={formRef}
      onFinish={async (values) => {
        return new Promise((resolve) => {
          console.log(values);
          message.success('提交成功');
          setTimeout(() => {
            resolve(true);
            formRef.current?.resetFields();
          }, 2000);
        });
      }}
      columns={columns}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProFieldValueType } from '@ant-design/pro-components';
import { BetaSchemaForm, ProFormSelect } from '@ant-design/pro-components';
import { useState } from 'react';

const valueEnum = {
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
};

const options = [
  { value: `password`, label: `密码输入框`, initialValue: '123456' },
  { value: `money`, label: `金额输入`, initialValue: '123456' },
  { value: `textarea`, label: `文本域`, initialValue: '123456\n121212' },
  { value: `date`, label: `日期`, initialValue: Date.now() },
  { value: `dateTime`, label: `日期时间`, initialValue: Date.now() },
  { value: `dateWeek`, label: `周`, initialValue: Date.now() },
  { value: `dateMonth`, label: `月`, initialValue: Date.now() },
  { value: `dateQuarter`, label: `季度输入`, initialValue: Date.now() },
  { value: `dateYear`, label: `年份输入`, initialValue: Date.now() },
  {
    value: `dateRange`,
    label: `日期区间`,
    initialValue: [Date.now(), Date.now()],
  },
  {
    value: `dateTimeRange`,
    label: `日期时间区间`,
    initialValue: [Date.now(), Date.now()],
  },
  { value: `time`, label: `时间`, initialValue: Date.now() },
  {
    value: `timeRange`,
    label: `时间区间`,
    initialValue: [Date.now(), Date.now()],
  },
  { value: `text`, label: `文本框`, initialValue: '123456' },
  { value: `select`, label: `下拉框`, initialValue: 'open' },
  { value: `checkbox`, label: `多选框`, initialValue: 'open' },
  { value: `rate`, label: `星级组件`, initialValue: '' },
  { value: `radio`, label: `单选框`, initialValue: 'open' },
  { value: `radioButton`, label: `按钮单选框`, initialValue: 'open' },
  { value: `progress`, label: `进度条`, initialValue: '10' },
  { value: `percent`, label: `百分比组件`, initialValue: '20' },
  { value: `digit`, label: `数字输入框`, initialValue: '200000' },
  { value: `second`, label: `秒格式化`, initialValue: 20000 },
  {
    value: `avatar`,
    label: `头像`,
    initialValue:
      'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  { value: `code`, label: `代码框`, initialValue: '# 2121' },
  { value: `switch`, label: `开关`, initialValue: 'open' },
  { value: `fromNow`, label: `相对于当前时间`, initialValue: Date.now() },
  {
    value: `image`,
    label: `图片`,
    initialValue:
      'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  {
    value: `jsonCode`,
    label: `JSON代码框`,
    initialValue: '{ "name":"qixian" }',
  },
  {
    value: `color`,
    label: `颜色选择器`,
    initialValue: '#1890ff',
  },
];

type DataItem = {
  name: string;
  state: string;
};

const Demo = () => {
  const [valueType, setValueType] = useState<ProFieldValueType>('text');
  return (
    <>
      <ProFormSelect.SearchSelect
        label="valueType 选择"
        options={options}
        width={200}
        mode="single"
        fieldProps={{
          labelInValue: false,
          value: valueType,
          onChange: (value) => setValueType(value),
        }}
      />
      <BetaSchemaForm<DataItem>
        layoutType="Form"
        onFinish={async (values) => {
          console.log(values);
        }}
        initialValues={options.reduce((pre, item) => {
          return {
            ...pre,
            [item.value]: item.initialValue,
          };
        }, {})}
        columns={[
          {
            title: '分组',
            valueType: 'group',
            columns: [
              {
                valueType,
                title: '编辑器',
                dataIndex: valueType || 'text',
                valueEnum,
                formItemProps: {
                  rules: [
                    {
                      required: true,
                      message: '此项为必填项',
                    },
                  ],
                },
                width: 'm',
              },
              {
                valueType,
                title: '只读',
                dataIndex: valueType || 'text',
                valueEnum,
                readonly: true,
                width: 'm',
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type {
  ProFormColumnsType,
  ProFormLayoutType,
} from '@ant-design/pro-components';
import { BetaSchemaForm, ProFormSelect } from '@ant-design/pro-components';
import { Alert, DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

const valueEnum = {
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
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
    initialValue: '默认值',
    convertValue: (value) => {
      return `标题：${value}`;
    },
    transform: (value) => {
      return {
        title: `${value}-转换`,
      };
    },
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 'md',
    colProps: {
      xs: 12,
      md: 4,
    },
  },
  {
    valueType: 'switch',
    title: '开关',
    dataIndex: 'Switch',
    fieldProps: {
      style: {
        width: '200px',
      },
    },
    width: 'md',
    colProps: {
      xs: 12,
      md: 20,
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    valueType: 'dateRange',
    dataIndex: 'createName',
    initialValue: [dayjs().add(-1, 'm'), dayjs()],
    formItemRender: () => <DatePicker.RangePicker />,
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
  },
  {
    title: '更新时间',
    dataIndex: 'updateName',
    valueType: 'dateRange',
    initialValue: [dayjs().add(-1, 'm'), dayjs()],
    formItemRender: () => <DatePicker.RangePicker />,
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
  },
  {
    title: '分组',
    valueType: 'group',
    columns: [
      {
        title: '状态',
        dataIndex: 'groupState',
        valueType: 'select',
        width: 'xs',
        colProps: {
          xs: 12,
        },
        valueEnum,
      },
      {
        title: '标题',
        width: 'md',
        dataIndex: 'groupTitle',
        colProps: {
          xs: 12,
        },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '此项为必填项',
            },
          ],
        },
      },
    ],
  },
  {
    title: '列表',
    valueType: 'formList',
    dataIndex: 'list',
    initialValue: [{ state: 'all', title: '标题' }],
    colProps: {
      xs: 24,
      sm: 12,
    },
    columns: [
      {
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'state',
            valueType: 'select',
            colProps: {
              xs: 24,
              sm: 12,
            },
            width: 'xs',
            valueEnum,
          },
          {
            title: '标题',
            dataIndex: 'title',
            width: 'md',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '此项为必填项',
                },
              ],
            },
            colProps: {
              xs: 24,
              sm: 12,
            },
          },
        ],
      },
      {
        valueType: 'dateTime',
        initialValue: new Date(),
        dataIndex: 'currentTime',
        width: 'md',
      },
    ],
  },
  {
    title: 'FormSet',
    valueType: 'formSet',
    dataIndex: 'formSet',
    colProps: {
      xs: 24,
      sm: 12,
    },
    rowProps: {
      gutter: [16, 0],
    },
    columns: [
      {
        title: '状态',
        dataIndex: 'groupState',
        valueType: 'select',
        width: 'md',
        valueEnum,
      },
      {
        width: 'xs',
        title: '标题',
        dataIndex: 'groupTitle',
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
    ],
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    width: 'md',
    colProps: {
      span: 24,
    },
    transform: (value) => {
      return {
        startTime: value[0],
        endTime: value[1],
      };
    },
  },
];

const Demo = () => {
  const [layoutType, setLayoutType] = useState<ProFormLayoutType>('Form');
  return (
    <>
      <Space
        style={{
          width: '100%',
        }}
        orientation="vertical"
      >
        <Alert
          type="warning"
          title="QueryFilter 和 lightFilter 暂不支持grid模式"
          style={{
            marginBlockEnd: 24,
          }}
        />
        <ProFormSelect
          label="布局方式"
          options={[
            'Form',
            'ModalForm',
            'DrawerForm',
            'LightFilter',
            'QueryFilter',
            'StepsForm',
            'StepForm',
            'Embed',
          ]}
          fieldProps={{
            value: layoutType,
            onChange: (e) => setLayoutType(e),
          }}
        />
      </Space>
      <BetaSchemaForm<DataItem>
        trigger={<a>点击我</a>}
        layoutType={layoutType}
        steps={[
          {
            title: 'ProComponent',
          },
        ]}
        rowProps={{
          gutter: [16, 16],
        }}
        colProps={{
          span: 12,
        }}
        grid={layoutType !== 'LightFilter' && layoutType !== 'QueryFilter'}
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={(layoutType === 'StepsForm' ? [columns] : columns) as any}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProFormColumnsType } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { Input } from 'antd';

const valueEnum = {
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
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    initialValue: '必填',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'm',
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'm',
    tooltip: '当title为disabled时状态无法选择',
    dependencies: ['title'],
    fieldProps: (form) => {
      if (form.getFieldValue('title') === 'disabled') {
        return {
          disabled: true,
          placeholder: 'disabled',
        };
      } else {
        return {
          placeholder: 'normal',
        };
      }
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 'm',
    tooltip: '当title为必填时此项将为必填',
    dependencies: ['title'],
    formItemProps(form) {
      if (form.getFieldValue('title') === '必填') {
        return {
          rules: [
            {
              required: true,
            },
          ],
        };
      } else {
        return {};
      }
    },
  },
  {
    valueType: 'dependency',
    name: ['title'],
    columns: ({ title }) => {
      return title !== 'hidden'
        ? [
            {
              title: 'title为hidden时隐藏',
              dataIndex: 'hidden',
              valueType: 'date',
              formItemRender: () => {
                return <Input />;
              },
            },
          ]
        : [];
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'createName',
    valueType: 'date',
  },
  {
    valueType: 'divider',
  },
];

const Demo = () => {
  return (
    <>
      <BetaSchemaForm<DataItem>
        shouldUpdate={false}
        layoutType="Form"
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProFormColumnsType } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { Input } from 'antd';

const valueEnum = {
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
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    initialValue: '必填',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'm',
  },
  {
    title: '必填但没显示*',
    dataIndex: 'list',
    valueType: 'formList',
    formItemProps: {
      rules: [{ required: true, message: '请填写列表' }],
    },
    columns: [
      {
        dataIndex: 'isSettlement',
        valueType: 'switch',
        formItemProps: {
          rules: [{ required: true, message: '请填写1' }],
        },
      },
    ],
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'm',
    tooltip: '当title为disabled时状态无法选择',
    dependencies: ['title'],
    fieldProps: (form) => {
      if (form.getFieldValue('title') === 'disabled') {
        return {
          disabled: true,
          placeholder: 'disabled',
        };
      } else {
        return {
          placeholder: 'normal',
        };
      }
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 'm',
    tooltip: '当title为必填时此项将为必填',
    dependencies: ['title'],
    formItemProps(form) {
      if (form.getFieldValue('title') === '必填') {
        return {
          rules: [
            {
              required: true,
            },
          ],
        };
      } else {
        return {};
      }
    },
  },
  {
    valueType: 'dependency',
    name: ['title'],
    columns: ({ title }) => {
      return title !== 'hidden'
        ? [
            {
              title: 'title为hidden时隐藏',
              dataIndex: 'hidden',
              valueType: 'date',
              formItemRender: () => {
                return <Input />;
              },
            },
          ]
        : [];
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'createName',
    valueType: 'date',
  },
  {
    valueType: 'divider',
  },
];

const Demo = () => {
  return (
    <>
      <BetaSchemaForm<DataItem>
        shouldUpdate={false}
        layoutType="Form"
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProFormColumnsType } from '@ant-design/pro-components';
import { BetaSchemaForm, ProForm } from '@ant-design/pro-components';

const valueEnum = {
  money: { text: '按金额' },
  discount: { text: '按折扣' },
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '优惠方式',
    dataIndex: 'type',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    valueType: 'select',
    valueEnum,
    width: 'm',
  },
  {
    valueType: 'dependency',
    name: ['type'],
    columns: ({ type }) => {
      if (type === 'money') {
        return [
          {
            dataIndex: 'money',
            title: '优惠金额',
            width: 'm',
            valueType: 'money',
          },
        ];
      }

      if (type === 'discount') {
        return [
          {
            dataIndex: 'discount',
            title: '折扣',
            valueType: 'digit',
            width: 'm',
            fieldProps: {
              precision: 2,
            },
          },
        ];
      }

      return [];
    },
  },
];

const Demo = () => {
  return (
    <>
      <h1>普通json表单</h1>
      <BetaSchemaForm<DataItem>
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
      <h1>嵌套json表单</h1>
      <ProForm
        initialValues={{
          type: 'money',
        }}
      >
        <BetaSchemaForm<DataItem>
          layoutType="Embed"
          onFinish={async (values) => {
            console.log(values);
          }}
          columns={columns}
        />
      </ProForm>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProFormColumnsType } from '@ant-design/pro-components';
import { BetaSchemaForm, ProProvider } from '@ant-design/pro-components';
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

const columns: ProFormColumnsType<TableListItem, 'link' | 'tags'>[] = [
  {
    title: '标签',
    valueType: 'group',
    columns: [
      {
        title: '只读链接',
        readonly: true,
        dataIndex: 'name',
        valueType: 'link',
      },
      {
        title: '链接',
        dataIndex: 'name',
        valueType: 'link',
      },
    ],
  },
  {
    title: '路径',
    valueType: 'group',
    columns: [
      {
        title: '标签',
        dataIndex: 'status',
        key: 'status',
        valueType: 'tags',
      },
      {
        title: '只读标签',
        readonly: true,
        dataIndex: 'status',
        key: 'status',
        valueType: 'tags',
      },
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
      <BetaSchemaForm<TableListItem, 'link' | 'tags'>
        initialValues={{
          key: 1,
          name: `TradeCode 1`,
          status: [
            {
              value: Math.floor(Math.random() * 10),
              label:
                valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '1'],
            },
            {
              value: Math.floor(Math.random() * 10),
              label:
                valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '1'],
            },
          ],
        }}
        columns={columns}
        title="自定义 valueType"
      />
    </ProProvider.Provider>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProFormColumnsType } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { Input } from 'antd';

const valueEnum = {
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
};

type DataItem = {
  name: string;
  state: string;
  title: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    initialValue: '必填',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'm',
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'm',
    tooltip: '当title为disabled时状态无法选择',
    fieldProps: (form) => {
      if (form.getFieldValue('title') === 'disabled') {
        return {
          disabled: true,
          placeholder: 'disabled',
        };
      } else {
        return {
          placeholder: 'normal',
        };
      }
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 'm',
    tooltip: '当title为必填时此项将为必填',
    dependencies: ['title'],
    formItemProps(form) {
      if (form.getFieldValue('title') === '必填') {
        return {
          rules: [
            {
              required: true,
            },
          ],
        };
      } else {
        return {};
      }
    },
  },
  {
    valueType: 'dependency',
    name: ['title'],
    columns: ({ title }) => {
      return title !== 'hidden'
        ? [
            {
              title: 'title为hidden时隐藏',
              dataIndex: 'hidden',
              valueType: 'date',
              formItemRender: () => {
                return <Input />;
              },
            },
          ]
        : [];
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'createName',
    valueType: 'date',
  },
];

const Demo = () => {
  return (
    <>
      <BetaSchemaForm<DataItem>
        shouldUpdate={(newValues, oldValues) => {
          if (newValues.title !== oldValues?.title) {
            return true;
          }
          return false;
        }}
        layoutType="Form"
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProFormLayoutType } from '@ant-design/pro-components';
import { BetaSchemaForm, ProFormSelect } from '@ant-design/pro-components';
import { Alert, Button, Space } from 'antd';
import { useState } from 'react';

type DataItem = {
  name: string;
  state: string;
};

const Demo = () => {
  const [layoutType, setLayoutType] = useState<ProFormLayoutType>('ModalForm');
  return (
    <>
      <Space
        style={{
          width: '100%',
        }}
        orientation="vertical"
      >
        <Alert
          type="warning"
          title="QueryFilter 和 lightFilter 暂不支持grid模式"
          style={{
            marginBlockEnd: 24,
          }}
        />
        <ProFormSelect
          label="布局方式"
          options={['ModalForm', 'DrawerForm']}
          fieldProps={{
            value: layoutType,
            onChange: (e) => setLayoutType(e),
          }}
        />
      </Space>
      <BetaSchemaForm<DataItem>
        trigger={<Button>点击我</Button>}
        layoutType={layoutType as 'ModalForm'}
        onFinish={async (values) => {
          console.log(values);
        }}
        {...(layoutType === 'ModalForm'
          ? {
              modalProps: { destroyOnHidden: true },
            }
          : {
              drawerProps: { destroyOnHidden: true },
            })}
        columns={[
          {
            title: '标题',
            dataIndex: 'title',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '此项为必填项',
                },
              ],
            },
            width: 'md',
          },
        ]}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProFormColumnsType } from '@ant-design/pro-components';
import {
  BetaSchemaForm,
  ProForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

const valueEnum = {
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
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'm',
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'm',
  },
];

const Demo = () => {
  return (
    <ProForm>
      <h1>ProForm </h1>
      <ProFormText name="username" />
      <ProFormSelect
        name="select-multiple"
        label="多选"
        valueEnum={{
          red: 'Red',
          green: 'Green',
          blue: 'Blue',
        }}
        fieldProps={{
          mode: 'multiple',
        }}
        placeholder="Please select favorite colors"
        rules={[
          {
            required: true,
            message: 'Please select your favorite colors!',
            type: 'array',
          },
        ]}
      />
      <h1>表单1 </h1>
      <BetaSchemaForm<DataItem> layoutType="Embed" columns={columns} />
      <h1>表单2</h1>
      <BetaSchemaForm<DataItem>
        layoutType="Embed"
        columns={[
          {
            title: '创建时间',
            key: 'showTime',
            dataIndex: 'createName',
            valueType: 'date',
          },
          {
            title: '分组',
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'groupState',
                valueType: 'select',
                width: 'xs',
                valueEnum,
              },
              {
                title: '标题',
                width: 'md',
                dataIndex: 'groupTitle',
                formItemProps: {
                  rules: [
                    {
                      required: true,
                      message: '此项为必填项',
                    },
                  ],
                },
              },
            ],
          },
        ]}
      />
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type {
  ProFormColumnsType,
  ProFormInstance,
} from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { message } from 'antd';
import { useRef } from 'react';

const valueEnum = {
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
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[][] = [
  [
    {
      title: '标题',
      dataIndex: 'title',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
      width: 'm',
    },
    {
      title: '状态',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum,
      width: 'm',
    },
  ],
  [
    {
      title: '标签',
      dataIndex: 'labels',
      width: 'm',
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'createName',
      valueType: 'date',
    },
    {
      title: '分组',
      valueType: 'group',
      columns: [
        {
          title: '状态',
          dataIndex: 'groupState',
          valueType: 'select',
          width: 'xs',
          valueEnum,
        },
        {
          title: '标题',
          width: 'md',
          dataIndex: 'groupTitle',
          formItemProps: {
            rules: [
              {
                required: true,
                message: '此项为必填项',
              },
            ],
          },
        },
      ],
    },
  ],
  [
    {
      title: '列表',
      valueType: 'formList',
      dataIndex: 'list',
      initialValue: [{ state: 'all', title: '标题' }],
      columns: [
        {
          valueType: 'group',
          columns: [
            {
              title: '状态',
              dataIndex: 'state',
              valueType: 'select',
              width: 'xs',
              valueEnum,
            },
            {
              title: '标题',
              dataIndex: 'title',
              formItemProps: {
                rules: [
                  {
                    required: true,
                    message: '此项为必填项',
                  },
                ],
              },
              width: 'm',
            },
          ],
        },
      ],
    },
    {
      title: 'FormSet',
      valueType: 'formSet',
      dataIndex: 'formSet',
      columns: [
        {
          title: '状态',
          dataIndex: 'groupState',
          valueType: 'select',
          width: 'xs',
          valueEnum,
        },
        {
          title: '标题',
          dataIndex: 'groupTitle',
          tooltip: '标题过长会自动收缩',
          formItemProps: {
            rules: [
              {
                required: true,
                message: '此项为必填项',
              },
            ],
          },
          width: 'm',
        },
      ],
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      valueType: 'dateRange',
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  ],
];

const Demo = () => {
  const formRef = useRef<ProFormInstance>();

  return (
    <BetaSchemaForm<DataItem>
      layoutType="StepsForm"
      steps={[
        {
          title: '第一步',
        },
        {
          title: '第二步',
        },
        {
          title: '第三步',
        },
      ]}
      onCurrentChange={(current) => {
        console.log('current: ', current);
      }}
      formRef={formRef}
      onFinish={async (values) => {
        return new Promise((resolve) => {
          console.log(values);
          message.success('提交成功');
          setTimeout(() => {
            resolve(true);
            formRef.current?.resetFields();
          }, 2000);
        });
      }}
      columns={columns}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProFieldValueType } from '@ant-design/pro-components';
import { BetaSchemaForm, ProFormSelect } from '@ant-design/pro-components';
import { useState } from 'react';

const valueEnum = {
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
};

const options = [
  { value: `password`, label: `密码输入框`, initialValue: '123456' },
  { value: `money`, label: `金额输入`, initialValue: '123456' },
  { value: `textarea`, label: `文本域`, initialValue: '123456\n121212' },
  { value: `date`, label: `日期`, initialValue: Date.now() },
  { value: `dateTime`, label: `日期时间`, initialValue: Date.now() },
  { value: `dateWeek`, label: `周`, initialValue: Date.now() },
  { value: `dateMonth`, label: `月`, initialValue: Date.now() },
  { value: `dateQuarter`, label: `季度输入`, initialValue: Date.now() },
  { value: `dateYear`, label: `年份输入`, initialValue: Date.now() },
  {
    value: `dateRange`,
    label: `日期区间`,
    initialValue: [Date.now(), Date.now()],
  },
  {
    value: `dateTimeRange`,
    label: `日期时间区间`,
    initialValue: [Date.now(), Date.now()],
  },
  { value: `time`, label: `时间`, initialValue: Date.now() },
  {
    value: `timeRange`,
    label: `时间区间`,
    initialValue: [Date.now(), Date.now()],
  },
  { value: `text`, label: `文本框`, initialValue: '123456' },
  { value: `select`, label: `下拉框`, initialValue: 'open' },
  { value: `checkbox`, label: `多选框`, initialValue: 'open' },
  { value: `rate`, label: `星级组件`, initialValue: '' },
  { value: `radio`, label: `单选框`, initialValue: 'open' },
  { value: `radioButton`, label: `按钮单选框`, initialValue: 'open' },
  { value: `progress`, label: `进度条`, initialValue: '10' },
  { value: `percent`, label: `百分比组件`, initialValue: '20' },
  { value: `digit`, label: `数字输入框`, initialValue: '200000' },
  { value: `second`, label: `秒格式化`, initialValue: 20000 },
  {
    value: `avatar`,
    label: `头像`,
    initialValue:
      'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  { value: `code`, label: `代码框`, initialValue: '# 2121' },
  { value: `switch`, label: `开关`, initialValue: 'open' },
  { value: `fromNow`, label: `相对于当前时间`, initialValue: Date.now() },
  {
    value: `image`,
    label: `图片`,
    initialValue:
      'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  {
    value: `jsonCode`,
    label: `JSON代码框`,
    initialValue: '{ "name":"qixian" }',
  },
  {
    value: `color`,
    label: `颜色选择器`,
    initialValue: '#1890ff',
  },
];

type DataItem = {
  name: string;
  state: string;
};

const Demo = () => {
  const [valueType, setValueType] = useState<ProFieldValueType>('text');
  return (
    <>
      <ProFormSelect.SearchSelect
        label="valueType 选择"
        options={options}
        width={200}
        mode="single"
        fieldProps={{
          labelInValue: false,
          value: valueType,
          onChange: (value) => setValueType(value),
        }}
      />
      <BetaSchemaForm<DataItem>
        layoutType="Form"
        onFinish={async (values) => {
          console.log(values);
        }}
        initialValues={options.reduce((pre, item) => {
          return {
            ...pre,
            [item.value]: item.initialValue,
          };
        }, {})}
        columns={[
          {
            title: '分组',
            valueType: 'group',
            columns: [
              {
                valueType,
                title: '编辑器',
                dataIndex: valueType || 'text',
                valueEnum,
                formItemProps: {
                  rules: [
                    {
                      required: true,
                      message: '此项为必填项',
                    },
                  ],
                },
                width: 'm',
              },
              {
                valueType,
                title: '只读',
                dataIndex: valueType || 'text',
                valueEnum,
                readonly: true,
                width: 'm',
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type {
  ProFormColumnsType,
  ProFormLayoutType,
} from '@ant-design/pro-components';
import { BetaSchemaForm, ProFormSelect } from '@ant-design/pro-components';
import { Alert, DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

const valueEnum = {
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
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
    initialValue: '默认值',
    convertValue: (value) => {
      return `标题：${value}`;
    },
    transform: (value) => {
      return {
        title: `${value}-转换`,
      };
    },
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 'md',
    colProps: {
      xs: 12,
      md: 4,
    },
  },
  {
    valueType: 'switch',
    title: '开关',
    dataIndex: 'Switch',
    fieldProps: {
      style: {
        width: '200px',
      },
    },
    width: 'md',
    colProps: {
      xs: 12,
      md: 20,
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    valueType: 'dateRange',
    dataIndex: 'createName',
    initialValue: [dayjs().add(-1, 'm'), dayjs()],
    formItemRender: () => <DatePicker.RangePicker />,
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
  },
  {
    title: '更新时间',
    dataIndex: 'updateName',
    valueType: 'dateRange',
    initialValue: [dayjs().add(-1, 'm'), dayjs()],
    formItemRender: () => <DatePicker.RangePicker />,
    width: 'md',
    colProps: {
      xs: 24,
      md: 12,
    },
  },
  {
    title: '分组',
    valueType: 'group',
    columns: [
      {
        title: '状态',
        dataIndex: 'groupState',
        valueType: 'select',
        width: 'xs',
        colProps: {
          xs: 12,
        },
        valueEnum,
      },
      {
        title: '标题',
        width: 'md',
        dataIndex: 'groupTitle',
        colProps: {
          xs: 12,
        },
        formItemProps: {
          rules: [
            {
              required: true,
              message: '此项为必填项',
            },
          ],
        },
      },
    ],
  },
  {
    title: '列表',
    valueType: 'formList',
    dataIndex: 'list',
    initialValue: [{ state: 'all', title: '标题' }],
    colProps: {
      xs: 24,
      sm: 12,
    },
    columns: [
      {
        valueType: 'group',
        columns: [
          {
            title: '状态',
            dataIndex: 'state',
            valueType: 'select',
            colProps: {
              xs: 24,
              sm: 12,
            },
            width: 'xs',
            valueEnum,
          },
          {
            title: '标题',
            dataIndex: 'title',
            width: 'md',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '此项为必填项',
                },
              ],
            },
            colProps: {
              xs: 24,
              sm: 12,
            },
          },
        ],
      },
      {
        valueType: 'dateTime',
        initialValue: new Date(),
        dataIndex: 'currentTime',
        width: 'md',
      },
    ],
  },
  {
    title: 'FormSet',
    valueType: 'formSet',
    dataIndex: 'formSet',
    colProps: {
      xs: 24,
      sm: 12,
    },
    rowProps: {
      gutter: [16, 0],
    },
    columns: [
      {
        title: '状态',
        dataIndex: 'groupState',
        valueType: 'select',
        width: 'md',
        valueEnum,
      },
      {
        width: 'xs',
        title: '标题',
        dataIndex: 'groupTitle',
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
    ],
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    width: 'md',
    colProps: {
      span: 24,
    },
    transform: (value) => {
      return {
        startTime: value[0],
        endTime: value[1],
      };
    },
  },
];

const Demo = () => {
  const [layoutType, setLayoutType] = useState<ProFormLayoutType>('Form');
  return (
    <>
      <Space
        style={{
          width: '100%',
        }}
        orientation="vertical"
      >
        <Alert
          type="warning"
          title="QueryFilter 和 lightFilter 暂不支持grid模式"
          style={{
            marginBlockEnd: 24,
          }}
        />
        <ProFormSelect
          label="布局方式"
          options={[
            'Form',
            'ModalForm',
            'DrawerForm',
            'LightFilter',
            'QueryFilter',
            'StepsForm',
            'StepForm',
            'Embed',
          ]}
          fieldProps={{
            value: layoutType,
            onChange: (e) => setLayoutType(e),
          }}
        />
      </Space>
      <BetaSchemaForm<DataItem>
        trigger={<a>点击我</a>}
        layoutType={layoutType}
        steps={[
          {
            title: 'ProComponent',
          },
        ]}
        rowProps={{
          gutter: [16, 16],
        }}
        colProps={{
          span: 12,
        }}
        grid={layoutType !== 'LightFilter' && layoutType !== 'QueryFilter'}
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={(layoutType === 'StepsForm' ? [columns] : columns) as any}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProFormColumnsType } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { Input } from 'antd';

const valueEnum = {
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
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    initialValue: '必填',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: 'm',
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
    width: 'm',
    tooltip: '当title为disabled时状态无法选择',
    dependencies: ['title'],
    fieldProps: (form) => {
      if (form.getFieldValue('title') === 'disabled') {
        return {
          disabled: true,
          placeholder: 'disabled',
        };
      } else {
        return {
          placeholder: 'normal',
        };
      }
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 'm',
    tooltip: '当title为必填时此项将为必填',
    dependencies: ['title'],
    formItemProps(form) {
      if (form.getFieldValue('title') === '必填') {
        return {
          rules: [
            {
              required: true,
            },
          ],
        };
      } else {
        return {};
      }
    },
  },
  {
    valueType: 'dependency',
    name: ['title'],
    columns: ({ title }) => {
      return title !== 'hidden'
        ? [
            {
              title: 'title为hidden时隐藏',
              dataIndex: 'hidden',
              valueType: 'date',
              formItemRender: () => {
                return <Input />;
              },
            },
          ]
        : [];
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'createName',
    valueType: 'date',
  },
  {
    valueType: 'divider',
  },
];

const Demo = () => {
  return (
    <>
      <BetaSchemaForm<DataItem>
        shouldUpdate={false}
        layoutType="Form"
        onFinish={async (values) => {
          console.log(values);
        }}
        columns={columns}
      />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

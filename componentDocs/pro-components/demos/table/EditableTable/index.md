

import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import type { InputRef } from 'antd';
import { Button, Form, Input, Space, Tag } from 'antd';
import React, { useRef, useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
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

type DataSourceType = {
  id: React.Key;
  title?: string;
  labels?: {
    key: string;
    label: string;
  }[];
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    labels: [{ key: 'woman', label: '川妹子' }],
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: 624691229,
    title: '活动名称二',
    labels: [{ key: 'man', label: '西北汉子' }],
    state: 'closed',
    created_at: 1590481162000,
  },
];

const columns: ProColumns<DataSourceType>[] = [
  {
    title: '活动名称',
    dataIndex: 'title',
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
    key: 'state',
    dataIndex: 'state',
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
    title: '标签',
    dataIndex: 'labels',
    width: '20%',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    formItemRender: (_, { isEditable }) => {
      return isEditable ? <TagList /> : <Input />;
    },
    render: (_, row) =>
      row?.labels?.map((item) => <Tag key={item.key}>{item.label}</Tag>),
  },
  {
    title: '操作',
    valueType: 'option',
    width: 250,
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <EditableProTable.RecordCreator
        key="copy"
        record={{
          ...record,
          id: (Math.random() * 1000000).toFixed(0),
        }}
      >
        <a>复制此项到末尾</a>
      </EditableProTable.RecordCreator>,
    ],
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>([]);
  const [form] = Form.useForm();
  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            actionRef.current?.addEditRecord?.({
              id: (Math.random() * 1000000).toFixed(0),
              title: '新的一行',
            });
          }}
          icon={<PlusOutlined />}
        >
          新建一行
        </Button>
        <Button
          key="rest"
          onClick={() => {
            form.resetFields();
          }}
        >
          重置表单
        </Button>
      </Space>

      <EditableProTable<DataSourceType>
        rowKey="id"
        scroll={{
          x: 960,
        }}
        actionRef={actionRef}
        headerTitle="可编辑表格"
        maxLength={5}
        // 关闭默认的新建按钮
        recordCreatorProps={false}
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: 3,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          form,
          editableKeys,
          onSave: async () => {
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
          actionRender: (row, config, dom) => [dom.save, dom.cancel],
        }}
      />
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProColumns } from '@ant-design/pro-components';
import { CellEditorTable } from '@ant-design/pro-components';
import React, { useState } from 'react';

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = new Array(5).fill(1).map((_, index) => {
  return {
    id: (Date.now() + index).toString(),
    title: `活动名称${index}`,
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  };
});

const Demo = () => {
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData,
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      width: '30%',
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
          {
            message: '必须包含数字',
            pattern: /[0-9]/,
          },
          {
            max: 16,
            whitespace: true,
            message: '最长为 16 位',
          },
          {
            min: 6,
            whitespace: true,
            message: '最小为 6 位',
          },
        ],
      },
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
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
      title: '描述',
      dataIndex: 'decs',
    },
  ];

  return (
    <>
      <CellEditorTable<DataSourceType>
        headerTitle="可编辑表格"
        columns={columns}
        rowKey="id"
        scroll={{
          x: 960,
        }}
        value={dataSource}
        onChange={setDataSource}
        recordCreatorProps={{
          newRecordType: 'dataSource',
          record: () => ({
            id: Date.now(),
          }),
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

import type { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
  useRefFunction,
} from '@ant-design/pro-components';
import React, { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type DataSourceType = {
  id?: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  update_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
    update_at: 1590486176000,
    children: [
      {
        id: 6246912293,
        title: '活动名称二',
        decs: '这个活动真好玩',
        state: 'closed',
        created_at: 1590481162000,
        update_at: 1590481162000,
      },
    ],
  },
  {
    id: 624691229,
    title: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: 1590481162000,
    update_at: 1590481162000,
  },
];

const loopDataSourceFilter = (
  data: readonly DataSourceType[],
  id: React.Key | undefined,
): DataSourceType[] => {
  return data
    .map((item) => {
      if (item.id !== id) {
        if (item.children) {
          const newChildren = loopDataSourceFilter(item.children, id);
          return {
            ...item,
            children: newChildren.length > 0 ? newChildren : undefined,
          };
        }
        return item;
      }
      return null;
    })
    .filter(Boolean) as DataSourceType[];
};

const Demo = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData,
  );

  const removeRow = useRefFunction((record: DataSourceType) => {
    setDataSource(loopDataSourceFilter(dataSource, record.id));
  });
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules:
            rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
        };
      },
      width: '30%',
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
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
      title: '描述',
      dataIndex: 'decs',
      fieldProps: (form, { rowKey, rowIndex }) => {
        if (form.getFieldValue([rowKey || '', 'title']) === '不好玩') {
          return {
            disabled: true,
          };
        }
        if (rowIndex > 9) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },
    {
      title: '活动时间',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record) => [
        <a
          key="delete"
          onClick={() => {
            removeRow(record);
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <>
      <EditableProTable<DataSourceType>
        expandable={{
          // 使用 request 请求数据时无效
          defaultExpandAllRows: true,
        }}
        scroll={{
          x: 960,
        }}
        rowKey="id"
        headerTitle="可编辑表格"
        maxLength={5}
        recordCreatorProps={{
          position: 'bottom',
          newRecordType: 'dataSource',
          parentKey: () => 624748504,
          record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
        }}
        columns={columns}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type {
  EditableFormInstance,
  ProColumns,
  ProFormInstance,
} from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormField,
  ProFormSegmented,
  ProFormSwitch,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useRef, useState } from 'react';

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  update_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: '624748504',
    title: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
    update_at: 1590486176000,
  },
  {
    id: '624691229',
    title: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: 1590481162000,
    update_at: 1590481162000,
  },
];

let i = 0;

const Demo = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>(
    'bottom',
  );
  const [controlled, setControlled] = useState<boolean>(false);
  const formRef = useRef<ProFormInstance<any>>();
  const editorFormRef = useRef<EditableFormInstance<DataSourceType>>();
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
      width: '30%',
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
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
      title: '描述',
      dataIndex: 'decs',
    },
    {
      title: '活动时间',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id, record);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            const tableDataSource = formRef.current?.getFieldValue(
              'table',
            ) as DataSourceType[];
            formRef.current?.setFieldsValue({
              table: tableDataSource.filter((item) => item.id !== record.id),
            });
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <ProForm<{
      table: DataSourceType[];
    }>
      formRef={formRef}
      initialValues={{
        table: defaultData,
      }}
      validateTrigger="onBlur"
    >
      <EditableProTable<DataSourceType>
        rowKey="id"
        scroll={{
          x: 960,
        }}
        editableFormRef={editorFormRef}
        headerTitle="可编辑表格"
        maxLength={5}
        name="table"
        controlled={controlled}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: position as 'top',
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
              }
            : false
        }
        toolBarRender={() => [
          <ProFormSwitch
            key="render"
            fieldProps={{
              style: {
                marginBlockEnd: 0,
              },
              checked: controlled,
              onChange: (value) => {
                setControlled(value);
              },
            }}
            checkedChildren="数据更新通知 Form"
            unCheckedChildren="保存后通知 Form"
            noStyle
          />,
          <ProFormSegmented
            key="render"
            fieldProps={{
              style: {
                marginBlockEnd: 0,
              },
              value: position,
              onChange: (value) => {
                setPosition(value as 'top');
              },
            }}
            noStyle
            request={async () => [
              {
                label: '添加到顶部',
                value: 'top',
              },
              {
                label: '添加到底部',
                value: 'bottom',
              },
              {
                label: '隐藏',
                value: 'hidden',
              },
            ]}
          />,
          <Button
            key="rows"
            onClick={() => {
              const rows = editorFormRef.current?.getRowsData?.();
              console.log(rows);
            }}
          >
            获取 table 的数据
          </Button>,
        ]}
        columns={columns}
        editable={{
          type: 'multiple',
          editableKeys,
          onChange: setEditableRowKeys,
          actionRender: (row, config, defaultDom) => {
            return [
              defaultDom.save,
              defaultDom.delete,
              defaultDom.cancel,
              <a
                key="set"
                onClick={() => {
                  console.log(config.index);
                  i++;
                  editorFormRef.current?.setRowData?.(config.index!, {
                    title: '动态设置的title' + i,
                  });
                }}
              >
                动态设置此项
              </a>,
            ];
          },
        }}
      />
      <ProForm.Item>
        <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
          <ProFormDependency name={['table']}>
            {({ table }) => {
              return (
                <ProFormField
                  ignoreFormItem
                  fieldProps={{
                    style: {
                      width: '100%',
                    },
                  }}
                  mode="read"
                  valueType="jsonCode"
                  text={JSON.stringify(table)}
                />
              );
            }}
          </ProFormDependency>
        </ProCard>
      </ProForm.Item>
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProColumns } from '@ant-design/pro-components';
import { RowEditorTable } from '@ant-design/pro-components';
import React, { useState } from 'react';

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = new Array(5).fill(1).map((_, index) => {
  return {
    id: (Date.now() + index).toString(),
    title: `活动名称${index}`,
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  };
});
const Demo = () => {
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData,
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      width: '30%',
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
          {
            message: '必须包含数字',
            pattern: /[0-9]/,
          },
          {
            max: 16,
            whitespace: true,
            message: '最长为 16 位',
          },
          {
            min: 6,
            whitespace: true,
            message: '最小为 6 位',
          },
        ],
      },
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
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
      title: '描述',
      dataIndex: 'decs',
    },
  ];

  return (
    <>
      <RowEditorTable<DataSourceType>
        headerTitle="可编辑表格"
        columns={columns}
        rowKey="id"
        scroll={{
          x: 960,
        }}
        value={dataSource}
        onChange={setDataSource}
        recordCreatorProps={{
          newRecordType: 'dataSource',
          record: () => ({
            id: Date.now(),
          }),
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

import type { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useState } from 'react';

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = new Array(20).fill(1).map((_, index) => {
  return {
    id: (Date.now() + index).toString(),
    title: `活动名称${index}`,
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  };
});

const Demo = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id),
  );
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData,
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      width: '30%',
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
          {
            message: '必须包含数字',
            pattern: /[0-9]/,
          },
          {
            max: 16,
            whitespace: true,
            message: '最长为 16 位',
          },
          {
            min: 6,
            whitespace: true,
            message: '最小为 6 位',
          },
        ],
      },
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
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
      title: '描述',
      dataIndex: 'decs',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 250,
      render: () => {
        return null;
      },
    },
  ];

  return (
    <>
      <EditableProTable<DataSourceType>
        headerTitle="可编辑表格"
        columns={columns}
        rowKey="id"
        scroll={{
          x: 960,
        }}
        value={dataSource}
        onChange={setDataSource}
        recordCreatorProps={{
          newRecordType: 'dataSource',
          record: () => ({
            id: Date.now(),
          }),
        }}
        toolBarRender={() => {
          return [
            <Button
              type="primary"
              key="save"
              onClick={() => {
                // dataSource 就是当前数据，可以调用 api 将其保存
                console.log(dataSource);
              }}
            >
              保存数据
            </Button>,
          ];
        }}
        editable={{
          type: 'multiple',
          editableKeys,
          actionRender: (row, config, defaultDoms) => {
            return [defaultDoms.delete];
          },
          onValuesChange: (record, recordList) => {
            setDataSource(recordList);
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type {
  ActionType,
  EditableFormInstance,
  ProColumns,
  ProFormInstance,
} from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormDigit,
} from '@ant-design/pro-components';
import React, { useRef, useState } from 'react';

type DataSourceType = {
  id: React.Key;
  associate?: string;
  questionsNum?: number;
  type?: string;
  fraction?: number;
  scoringMethod?: string;
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    associate: '题库名称一',
    questionsNum: 10,
    type: 'multiple',
    scoringMethod: 'continuous',
    fraction: 20,
  },
  {
    id: 624691229,
    associate: '题库名称二',
    questionsNum: 10,
    scoringMethod: 'continuous',
    type: 'radio',
    fraction: 20,
  },
  {
    id: 624748503,
    associate: '题库名称三',
    questionsNum: 10,
    type: 'judge',
    scoringMethod: 'continuous',
    fraction: 20,
  },
  {
    id: 624691220,
    associate: '题库名称四',
    questionsNum: 10,
    scoringMethod: 'continuous',
    type: 'vacant',
    fraction: 20,
  },
];

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
    },
    {
      title: '题型',
      key: 'type',
      dataIndex: 'type',
      valueType: 'select',
      valueEnum: {
        multiple: { text: '多选题', status: 'Default' },
        radio: { text: '单选题', status: 'Warning' },
        vacant: {
          text: '填空题',
          status: 'Error',
        },
        judge: {
          text: '判断题',
          status: 'Success',
        },
      },
    },
    {
      title: '题数',
      dataIndex: 'questionsNum',
      valueType: 'digit',
    },
    {
      title: '计分方式',
      dataIndex: 'scoringMethod',
      valueType: 'select',
      request: async () => [
        {
          value: 'discrete',
          label: '离散型',
        },
        {
          value: 'continuous',
          label: '连续型',
        },
      ],
      fieldProps: (_, { rowIndex }) => {
        return {
          onSelect: () => {
            // 每次选中重置参数
            editableFormRef.current?.setRowData?.(rowIndex, { fraction: [] });
          },
        };
      },
    },
    {
      title: '分值',
      width: 150,
      dataIndex: 'fraction',
      valueType: (record) => {
        const scoringMethod = record?.scoringMethod;
        if (scoringMethod === 'discrete') return 'select';
        return 'digit';
      },
      fieldProps: {
        mode: 'multiple',
      },
      request: async () =>
        ['A', 'B', 'D', 'E', 'F'].map((item, index) => ({
          label: item,
          value: index,
        })),
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
          <ProFormDependency name={['table']}>
            {({ table }) => {
              const info = (table as DataSourceType[]).reduce(
                (pre, item) => {
                  return {
                    totalScore:
                      pre.totalScore +
                      parseInt((item?.fraction || 0).toString(), 10),
                    questions:
                      pre.questions +
                      parseInt((item?.questionsNum || 0).toString(), 10),
                  };
                },
                { totalScore: 0, questions: 0 },
              );
              return (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    paddingBlockEnd: 16,
                  }}
                >
                  <div style={{ flex: 1 }}>总分：{info.totalScore}</div>
                  <div style={{ flex: 1 }}>题数：{info.questions}</div>
                  <div style={{ flex: 2 }}>
                    <ProFormDigit label="及格分" />
                  </div>
                  <div style={{ flex: 2 }}>
                    <ProFormDigit label="考试时间(分钟)" />
                  </div>
                </div>
              );
            }}
          </ProFormDependency>
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
              rules: [
                {
                  validator: async (_, value) => {
                    if (value.length < 1) {
                      throw new Error('请至少添加一个题库');
                    }

                    if (value.length > 5) {
                      throw new Error('最多可以设置五个题库');
                    }
                  },
                },
              ],
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
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
  ProFormRadio,
} from '@ant-design/pro-components';
import React, { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type DataSourceType = {
  id: React.Key;
  title?: string;
  readonly?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  update_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    readonly: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
    update_at: 1590486176000,
  },
  {
    id: 624691229,
    title: '活动名称二',
    readonly: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: 1590481162000,
    update_at: 1590481162000,
  },
];

const Demo = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>([]);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>(
    'bottom',
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      tooltip: '只读，使用form.getFieldValue获取不到值',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules:
            rowIndex > 1 ? [{ required: true, message: '此项为必填项' }] : [],
        };
      },
      // 第一行不允许编辑
      editable: (text, record, index) => {
        return index !== 0;
      },
      width: '15%',
    },
    {
      title: '活动名称二',
      dataIndex: 'readonly',
      tooltip: '只读，使用form.getFieldValue可以获取到值',
      readonly: true,
      width: '15%',
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
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
      title: '描述',
      dataIndex: 'decs',
      fieldProps: (form, { rowKey, rowIndex }) => {
        if (form.getFieldValue([rowKey || '', 'title']) === '不好玩') {
          return {
            disabled: true,
          };
        }
        if (rowIndex > 9) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },
    {
      title: '活动时间',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <>
      <EditableProTable<DataSourceType>
        rowKey="id"
        headerTitle="可编辑表格"
        maxLength={5}
        scroll={{
          x: 960,
        }}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: position as 'top',
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
                newRecordType: 'dataSource',
              }
            : false
        }
        loading={false}
        toolBarRender={() => [
          <ProFormRadio.Group
            key="render"
            fieldProps={{
              value: position,
              onChange: (e) => setPosition(e.target.value),
            }}
            options={[
              {
                label: '添加到顶部',
                value: 'top',
              },
              {
                label: '添加到底部',
                value: 'bottom',
              },
              {
                label: '隐藏',
                value: 'hidden',
              },
            ]}
          />,
        ]}
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: 3,
          success: true,
        })}
        value={dataSource}
        onChange={(value) => {
          setDataSource((data) => {
            const newMap = new Map(value.map((item) => [item.id, item]));
            const merged = data.map((item) => {
              return newMap.get(item.id) || item;
            });
            value.forEach((item) => {
              if (!data.find((old) => old.id === item.id)) {
                merged.push(item);
              }
            });
            return merged;
          });
        }}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormField,
  ProTable,
} from '@ant-design/pro-components';
import { FormInstance, Input, Tabs } from 'antd';
import { useRef } from 'react';

const defaultData = [
  {
    name: 'company_total',
    value: {
      schemaName: 'namespace_e0d8926c7cd51a4ce3ca3675ee370478',
      tableName: 'company_total',
    },
    columnsInfo: [
      {
        name: 'auto_id_by_system',
        dataType: 'bigint',
        description: '系统自动生成-自增主键',
        supplementComment: '系统自动生成-自增主键',
      },
      {
        name: 'project_name',
        dataType: 'text',
        description:
          'project; 保险项目名称，包括赔款支出、保险金额、总资产、责任险、农业保险、原保险保费收入、健康险、意外险等。',
        supplementComment:
          'project; 保险项目名称，包括赔款支出、保险金额、总资产、责任险、农业保险、原保险保费收入、健康险、意外险等。',
      },
      {
        name: 'amount',
        dataType: 'numeric(24,5)',
        description: 'amount; 数值金额，代表各种保险项目的金额。',
        supplementComment: 'amount; 数值金额，代表各种保险项目的金额。',
      },
    ],
    description: '7月财产险公司经营情况表',
  },
  {
    name: 'part_compay_info',
    value: {
      schemaName: 'namespace_e0d8926c7cd51a4ce3ca3675ee370478',
      tableName: 'part_compay_info',
    },
    columnsInfo: [
      {
        name: 'auto_id_by_system',
        dataType: 'bigint',
        description: '系统自动生成-自增主键',
        supplementComment: '系统自动生成-自增主键',
      },
      {
        name: 'mct_one_id',
        dataType: 'text',
        description: 'mct_one_id; 唯一标识符',
        supplementComment: 'mct_one_id; 唯一标识符',
      },
      {
        name: 'list_type',
        dataType: 'text',
        description: 'list_type; 上市板块类型',
        supplementComment: 'list_type; 上市板块类型',
      },
      {
        name: 'report_year',
        dataType: 'numeric(24,5)',
        description: 'report_year; 报告年份',
        supplementComment: 'report_year; 报告年份',
      },
      {
        name: 'org_name',
        dataType: 'text',
        description: 'org_name; 公司名称',
        supplementComment: 'org_name; 公司名称',
      },
      {
        name: 'total_assets',
        dataType: 'numeric(24,5)',
        description: 'total_assets; 总资产',
        supplementComment: 'total_assets; 总资产',
      },
      {
        name: 'total_liability',
        dataType: 'numeric(24,5)',
        description: 'total_liability; 总负债',
        supplementComment: 'total_liability; 总负债',
      },
      {
        name: 'equity',
        dataType: 'numeric(24,5)',
        description: 'equity; 股东权益',
        supplementComment: 'equity; 股东权益',
      },
      {
        name: 'total_profit',
        dataType: 'numeric(24,5)',
        description: 'total_profit; 总利润',
        supplementComment: 'total_profit; 总利润',
      },
      {
        name: 'net_profit',
        dataType: 'numeric(24,5)',
        description: 'net_profit; 净利润',
        supplementComment: 'net_profit; 净利润',
      },
      {
        name: 'tax',
        dataType: 'numeric(24,5)',
        description: 'tax; 税额',
        supplementComment: 'tax; 税额',
      },
    ],
    description: '企业年报',
  },
];

const Demo = () => {
  const formRef = useRef<FormInstance>();
  return (
    <ProForm
      formRef={formRef}
      onValuesChange={(_, e) => {
        console.log(e);
      }}
      initialValues={{ columnsInfo: defaultData, table: defaultData }}
    >
      <ProFormDependency name={['columnsInfo']}>
        {({ columnsInfo }) => {
          const list = (columnsInfo || []) as any[];
          return (
            <Tabs
              style={{
                padding: '0 8px',
                maxWidth: '100%',
              }}
              items={list.map((item: any, index) => {
                return {
                  key: item.name || '',
                  tab: (
                    <div
                      style={{
                        padding: 4,
                      }}
                    >
                      {item.name}
                    </div>
                  ),
                  label: (
                    <div
                      style={{
                        padding: 4,
                      }}
                    >
                      {item.name}
                    </div>
                  ),
                  children: (
                    <div
                      style={{
                        display: 'flex',
                        maxWidth: '1024px',
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                          overflow: 'auto',
                        }}
                      >
                        <ProTable
                          scroll={{ x: 'max-content' }}
                          size="small"
                          pagination={false}
                          search={false}
                          editable={{
                            editableKeys: item?.columnsInfo?.map(
                              (row: any) => row.name || '',
                            ),
                          }}
                          rowKey="name"
                          name={['table', index, 'columnsInfo']}
                          columns={[
                            {
                              title: '字段名称',
                              dataIndex: 'name',
                              editable: false,
                            },
                            {
                              title: '字段类型',
                              dataIndex: 'dataType',
                              editable: false,
                            },
                            {
                              title: '字段别名',
                              dataIndex: 'description',
                              editable: false,
                              width: 140,
                              render: (text, record) => {
                                return (
                                  <div
                                    style={{
                                      WebkitLineClamp: 2,
                                      maxHeight: 40,
                                      lineHeight: '20px',
                                      textOverflow: 'ellipsis',
                                      overflow: 'hidden',
                                      display: '-webkit-box',
                                      WebkitBoxOrient: 'vertical',
                                      wordBreak: 'break-all',
                                    }}
                                  >
                                    {record.description
                                      ? record.description
                                      : '-'}
                                  </div>
                                );
                              },
                            },
                            {
                              title: '补充说明',
                              dataIndex: 'supplementComment',
                              formItemRender: () => {
                                return (
                                  <Input.TextArea
                                    placeholder="请输入补充说明"
                                    maxLength={200}
                                  />
                                );
                              },
                            },
                          ]}
                          toolBarRender={false}
                          request={async () => {
                            return {
                              data: item.columnsInfo,
                            };
                          }}
                        />
                      </div>
                    </div>
                  ),
                };
              })}
            />
          );
        }}
      </ProFormDependency>

      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormDependency name={['table']}>
          {({ table }) => {
            return (
              <ProFormField
                ignoreFormItem
                fieldProps={{
                  style: {
                    width: '100%',
                  },
                }}
                mode="read"
                valueType="jsonCode"
                text={JSON.stringify(table, null, 2)}
              />
            );
          }}
        </ProFormDependency>
      </ProCard>
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import type { InputRef } from 'antd';
import { Button, Form, Input, Space, Tag } from 'antd';
import React, { useRef, useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
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

type DataSourceType = {
  id: React.Key;
  title?: string;
  labels?: {
    key: string;
    label: string;
  }[];
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    labels: [{ key: 'woman', label: '川妹子' }],
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: 624691229,
    title: '活动名称二',
    labels: [{ key: 'man', label: '西北汉子' }],
    state: 'closed',
    created_at: 1590481162000,
  },
];

const columns: ProColumns<DataSourceType>[] = [
  {
    title: '活动名称',
    dataIndex: 'title',
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
    key: 'state',
    dataIndex: 'state',
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
    title: '标签',
    dataIndex: 'labels',
    width: '20%',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    formItemRender: (_, { isEditable }) => {
      return isEditable ? <TagList /> : <Input />;
    },
    render: (_, row) =>
      row?.labels?.map((item) => <Tag key={item.key}>{item.label}</Tag>),
  },
  {
    title: '操作',
    valueType: 'option',
    width: 250,
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <EditableProTable.RecordCreator
        key="copy"
        record={{
          ...record,
          id: (Math.random() * 1000000).toFixed(0),
        }}
      >
        <a>复制此项到末尾</a>
      </EditableProTable.RecordCreator>,
    ],
  },
];

const Demo = () => {
  const actionRef = useRef<ActionType>();
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>([]);
  const [form] = Form.useForm();
  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            actionRef.current?.addEditRecord?.({
              id: (Math.random() * 1000000).toFixed(0),
              title: '新的一行',
            });
          }}
          icon={<PlusOutlined />}
        >
          新建一行
        </Button>
        <Button
          key="rest"
          onClick={() => {
            form.resetFields();
          }}
        >
          重置表单
        </Button>
      </Space>

      <EditableProTable<DataSourceType>
        rowKey="id"
        scroll={{
          x: 960,
        }}
        actionRef={actionRef}
        headerTitle="可编辑表格"
        maxLength={5}
        // 关闭默认的新建按钮
        recordCreatorProps={false}
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: 3,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          form,
          editableKeys,
          onSave: async () => {
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
          actionRender: (row, config, dom) => [dom.save, dom.cancel],
        }}
      />
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProColumns } from '@ant-design/pro-components';
import { CellEditorTable } from '@ant-design/pro-components';
import React, { useState } from 'react';

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = new Array(5).fill(1).map((_, index) => {
  return {
    id: (Date.now() + index).toString(),
    title: `活动名称${index}`,
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  };
});

const Demo = () => {
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData,
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      width: '30%',
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
          {
            message: '必须包含数字',
            pattern: /[0-9]/,
          },
          {
            max: 16,
            whitespace: true,
            message: '最长为 16 位',
          },
          {
            min: 6,
            whitespace: true,
            message: '最小为 6 位',
          },
        ],
      },
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
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
      title: '描述',
      dataIndex: 'decs',
    },
  ];

  return (
    <>
      <CellEditorTable<DataSourceType>
        headerTitle="可编辑表格"
        columns={columns}
        rowKey="id"
        scroll={{
          x: 960,
        }}
        value={dataSource}
        onChange={setDataSource}
        recordCreatorProps={{
          newRecordType: 'dataSource',
          record: () => ({
            id: Date.now(),
          }),
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

import type { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
  useRefFunction,
} from '@ant-design/pro-components';
import React, { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type DataSourceType = {
  id?: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  update_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
    update_at: 1590486176000,
    children: [
      {
        id: 6246912293,
        title: '活动名称二',
        decs: '这个活动真好玩',
        state: 'closed',
        created_at: 1590481162000,
        update_at: 1590481162000,
      },
    ],
  },
  {
    id: 624691229,
    title: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: 1590481162000,
    update_at: 1590481162000,
  },
];

const loopDataSourceFilter = (
  data: readonly DataSourceType[],
  id: React.Key | undefined,
): DataSourceType[] => {
  return data
    .map((item) => {
      if (item.id !== id) {
        if (item.children) {
          const newChildren = loopDataSourceFilter(item.children, id);
          return {
            ...item,
            children: newChildren.length > 0 ? newChildren : undefined,
          };
        }
        return item;
      }
      return null;
    })
    .filter(Boolean) as DataSourceType[];
};

const Demo = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData,
  );

  const removeRow = useRefFunction((record: DataSourceType) => {
    setDataSource(loopDataSourceFilter(dataSource, record.id));
  });
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules:
            rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
        };
      },
      width: '30%',
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
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
      title: '描述',
      dataIndex: 'decs',
      fieldProps: (form, { rowKey, rowIndex }) => {
        if (form.getFieldValue([rowKey || '', 'title']) === '不好玩') {
          return {
            disabled: true,
          };
        }
        if (rowIndex > 9) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },
    {
      title: '活动时间',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record) => [
        <a
          key="delete"
          onClick={() => {
            removeRow(record);
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <>
      <EditableProTable<DataSourceType>
        expandable={{
          // 使用 request 请求数据时无效
          defaultExpandAllRows: true,
        }}
        scroll={{
          x: 960,
        }}
        rowKey="id"
        headerTitle="可编辑表格"
        maxLength={5}
        recordCreatorProps={{
          position: 'bottom',
          newRecordType: 'dataSource',
          parentKey: () => 624748504,
          record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
        }}
        columns={columns}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type {
  EditableFormInstance,
  ProColumns,
  ProFormInstance,
} from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormField,
  ProFormSegmented,
  ProFormSwitch,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useRef, useState } from 'react';

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  update_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: '624748504',
    title: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
    update_at: 1590486176000,
  },
  {
    id: '624691229',
    title: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: 1590481162000,
    update_at: 1590481162000,
  },
];

let i = 0;

const Demo = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>(
    'bottom',
  );
  const [controlled, setControlled] = useState<boolean>(false);
  const formRef = useRef<ProFormInstance<any>>();
  const editorFormRef = useRef<EditableFormInstance<DataSourceType>>();
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
      width: '30%',
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
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
      title: '描述',
      dataIndex: 'decs',
    },
    {
      title: '活动时间',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id, record);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            const tableDataSource = formRef.current?.getFieldValue(
              'table',
            ) as DataSourceType[];
            formRef.current?.setFieldsValue({
              table: tableDataSource.filter((item) => item.id !== record.id),
            });
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <ProForm<{
      table: DataSourceType[];
    }>
      formRef={formRef}
      initialValues={{
        table: defaultData,
      }}
      validateTrigger="onBlur"
    >
      <EditableProTable<DataSourceType>
        rowKey="id"
        scroll={{
          x: 960,
        }}
        editableFormRef={editorFormRef}
        headerTitle="可编辑表格"
        maxLength={5}
        name="table"
        controlled={controlled}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: position as 'top',
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
              }
            : false
        }
        toolBarRender={() => [
          <ProFormSwitch
            key="render"
            fieldProps={{
              style: {
                marginBlockEnd: 0,
              },
              checked: controlled,
              onChange: (value) => {
                setControlled(value);
              },
            }}
            checkedChildren="数据更新通知 Form"
            unCheckedChildren="保存后通知 Form"
            noStyle
          />,
          <ProFormSegmented
            key="render"
            fieldProps={{
              style: {
                marginBlockEnd: 0,
              },
              value: position,
              onChange: (value) => {
                setPosition(value as 'top');
              },
            }}
            noStyle
            request={async () => [
              {
                label: '添加到顶部',
                value: 'top',
              },
              {
                label: '添加到底部',
                value: 'bottom',
              },
              {
                label: '隐藏',
                value: 'hidden',
              },
            ]}
          />,
          <Button
            key="rows"
            onClick={() => {
              const rows = editorFormRef.current?.getRowsData?.();
              console.log(rows);
            }}
          >
            获取 table 的数据
          </Button>,
        ]}
        columns={columns}
        editable={{
          type: 'multiple',
          editableKeys,
          onChange: setEditableRowKeys,
          actionRender: (row, config, defaultDom) => {
            return [
              defaultDom.save,
              defaultDom.delete,
              defaultDom.cancel,
              <a
                key="set"
                onClick={() => {
                  console.log(config.index);
                  i++;
                  editorFormRef.current?.setRowData?.(config.index!, {
                    title: '动态设置的title' + i,
                  });
                }}
              >
                动态设置此项
              </a>,
            ];
          },
        }}
      />
      <ProForm.Item>
        <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
          <ProFormDependency name={['table']}>
            {({ table }) => {
              return (
                <ProFormField
                  ignoreFormItem
                  fieldProps={{
                    style: {
                      width: '100%',
                    },
                  }}
                  mode="read"
                  valueType="jsonCode"
                  text={JSON.stringify(table)}
                />
              );
            }}
          </ProFormDependency>
        </ProCard>
      </ProForm.Item>
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProColumns } from '@ant-design/pro-components';
import { RowEditorTable } from '@ant-design/pro-components';
import React, { useState } from 'react';

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = new Array(5).fill(1).map((_, index) => {
  return {
    id: (Date.now() + index).toString(),
    title: `活动名称${index}`,
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  };
});
const Demo = () => {
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData,
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      width: '30%',
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
          {
            message: '必须包含数字',
            pattern: /[0-9]/,
          },
          {
            max: 16,
            whitespace: true,
            message: '最长为 16 位',
          },
          {
            min: 6,
            whitespace: true,
            message: '最小为 6 位',
          },
        ],
      },
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
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
      title: '描述',
      dataIndex: 'decs',
    },
  ];

  return (
    <>
      <RowEditorTable<DataSourceType>
        headerTitle="可编辑表格"
        columns={columns}
        rowKey="id"
        scroll={{
          x: 960,
        }}
        value={dataSource}
        onChange={setDataSource}
        recordCreatorProps={{
          newRecordType: 'dataSource',
          record: () => ({
            id: Date.now(),
          }),
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

import type { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useState } from 'react';

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = new Array(20).fill(1).map((_, index) => {
  return {
    id: (Date.now() + index).toString(),
    title: `活动名称${index}`,
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  };
});

const Demo = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id),
  );
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData,
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      width: '30%',
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
          {
            message: '必须包含数字',
            pattern: /[0-9]/,
          },
          {
            max: 16,
            whitespace: true,
            message: '最长为 16 位',
          },
          {
            min: 6,
            whitespace: true,
            message: '最小为 6 位',
          },
        ],
      },
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
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
      title: '描述',
      dataIndex: 'decs',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 250,
      render: () => {
        return null;
      },
    },
  ];

  return (
    <>
      <EditableProTable<DataSourceType>
        headerTitle="可编辑表格"
        columns={columns}
        rowKey="id"
        scroll={{
          x: 960,
        }}
        value={dataSource}
        onChange={setDataSource}
        recordCreatorProps={{
          newRecordType: 'dataSource',
          record: () => ({
            id: Date.now(),
          }),
        }}
        toolBarRender={() => {
          return [
            <Button
              type="primary"
              key="save"
              onClick={() => {
                // dataSource 就是当前数据，可以调用 api 将其保存
                console.log(dataSource);
              }}
            >
              保存数据
            </Button>,
          ];
        }}
        editable={{
          type: 'multiple',
          editableKeys,
          actionRender: (row, config, defaultDoms) => {
            return [defaultDoms.delete];
          },
          onValuesChange: (record, recordList) => {
            setDataSource(recordList);
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type {
  ActionType,
  EditableFormInstance,
  ProColumns,
  ProFormInstance,
} from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormDigit,
} from '@ant-design/pro-components';
import React, { useRef, useState } from 'react';

type DataSourceType = {
  id: React.Key;
  associate?: string;
  questionsNum?: number;
  type?: string;
  fraction?: number;
  scoringMethod?: string;
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    associate: '题库名称一',
    questionsNum: 10,
    type: 'multiple',
    scoringMethod: 'continuous',
    fraction: 20,
  },
  {
    id: 624691229,
    associate: '题库名称二',
    questionsNum: 10,
    scoringMethod: 'continuous',
    type: 'radio',
    fraction: 20,
  },
  {
    id: 624748503,
    associate: '题库名称三',
    questionsNum: 10,
    type: 'judge',
    scoringMethod: 'continuous',
    fraction: 20,
  },
  {
    id: 624691220,
    associate: '题库名称四',
    questionsNum: 10,
    scoringMethod: 'continuous',
    type: 'vacant',
    fraction: 20,
  },
];

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
    },
    {
      title: '题型',
      key: 'type',
      dataIndex: 'type',
      valueType: 'select',
      valueEnum: {
        multiple: { text: '多选题', status: 'Default' },
        radio: { text: '单选题', status: 'Warning' },
        vacant: {
          text: '填空题',
          status: 'Error',
        },
        judge: {
          text: '判断题',
          status: 'Success',
        },
      },
    },
    {
      title: '题数',
      dataIndex: 'questionsNum',
      valueType: 'digit',
    },
    {
      title: '计分方式',
      dataIndex: 'scoringMethod',
      valueType: 'select',
      request: async () => [
        {
          value: 'discrete',
          label: '离散型',
        },
        {
          value: 'continuous',
          label: '连续型',
        },
      ],
      fieldProps: (_, { rowIndex }) => {
        return {
          onSelect: () => {
            // 每次选中重置参数
            editableFormRef.current?.setRowData?.(rowIndex, { fraction: [] });
          },
        };
      },
    },
    {
      title: '分值',
      width: 150,
      dataIndex: 'fraction',
      valueType: (record) => {
        const scoringMethod = record?.scoringMethod;
        if (scoringMethod === 'discrete') return 'select';
        return 'digit';
      },
      fieldProps: {
        mode: 'multiple',
      },
      request: async () =>
        ['A', 'B', 'D', 'E', 'F'].map((item, index) => ({
          label: item,
          value: index,
        })),
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
          <ProFormDependency name={['table']}>
            {({ table }) => {
              const info = (table as DataSourceType[]).reduce(
                (pre, item) => {
                  return {
                    totalScore:
                      pre.totalScore +
                      parseInt((item?.fraction || 0).toString(), 10),
                    questions:
                      pre.questions +
                      parseInt((item?.questionsNum || 0).toString(), 10),
                  };
                },
                { totalScore: 0, questions: 0 },
              );
              return (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    paddingBlockEnd: 16,
                  }}
                >
                  <div style={{ flex: 1 }}>总分：{info.totalScore}</div>
                  <div style={{ flex: 1 }}>题数：{info.questions}</div>
                  <div style={{ flex: 2 }}>
                    <ProFormDigit label="及格分" />
                  </div>
                  <div style={{ flex: 2 }}>
                    <ProFormDigit label="考试时间(分钟)" />
                  </div>
                </div>
              );
            }}
          </ProFormDependency>
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
              rules: [
                {
                  validator: async (_, value) => {
                    if (value.length < 1) {
                      throw new Error('请至少添加一个题库');
                    }

                    if (value.length > 5) {
                      throw new Error('最多可以设置五个题库');
                    }
                  },
                },
              ],
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
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
  ProFormRadio,
} from '@ant-design/pro-components';
import React, { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type DataSourceType = {
  id: React.Key;
  title?: string;
  readonly?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  update_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    readonly: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
    update_at: 1590486176000,
  },
  {
    id: 624691229,
    title: '活动名称二',
    readonly: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: 1590481162000,
    update_at: 1590481162000,
  },
];

const Demo = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>([]);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>(
    'bottom',
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      tooltip: '只读，使用form.getFieldValue获取不到值',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules:
            rowIndex > 1 ? [{ required: true, message: '此项为必填项' }] : [],
        };
      },
      // 第一行不允许编辑
      editable: (text, record, index) => {
        return index !== 0;
      },
      width: '15%',
    },
    {
      title: '活动名称二',
      dataIndex: 'readonly',
      tooltip: '只读，使用form.getFieldValue可以获取到值',
      readonly: true,
      width: '15%',
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
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
      title: '描述',
      dataIndex: 'decs',
      fieldProps: (form, { rowKey, rowIndex }) => {
        if (form.getFieldValue([rowKey || '', 'title']) === '不好玩') {
          return {
            disabled: true,
          };
        }
        if (rowIndex > 9) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },
    {
      title: '活动时间',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <>
      <EditableProTable<DataSourceType>
        rowKey="id"
        headerTitle="可编辑表格"
        maxLength={5}
        scroll={{
          x: 960,
        }}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: position as 'top',
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
                newRecordType: 'dataSource',
              }
            : false
        }
        loading={false}
        toolBarRender={() => [
          <ProFormRadio.Group
            key="render"
            fieldProps={{
              value: position,
              onChange: (e) => setPosition(e.target.value),
            }}
            options={[
              {
                label: '添加到顶部',
                value: 'top',
              },
              {
                label: '添加到底部',
                value: 'bottom',
              },
              {
                label: '隐藏',
                value: 'hidden',
              },
            ]}
          />,
        ]}
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: 3,
          success: true,
        })}
        value={dataSource}
        onChange={(value) => {
          setDataSource((data) => {
            const newMap = new Map(value.map((item) => [item.id, item]));
            const merged = data.map((item) => {
              return newMap.get(item.id) || item;
            });
            value.forEach((item) => {
              if (!data.find((old) => old.id === item.id)) {
                merged.push(item);
              }
            });
            return merged;
          });
        }}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormField,
  ProTable,
} from '@ant-design/pro-components';
import { FormInstance, Input, Tabs } from 'antd';
import { useRef } from 'react';

const defaultData = [
  {
    name: 'company_total',
    value: {
      schemaName: 'namespace_e0d8926c7cd51a4ce3ca3675ee370478',
      tableName: 'company_total',
    },
    columnsInfo: [
      {
        name: 'auto_id_by_system',
        dataType: 'bigint',
        description: '系统自动生成-自增主键',
        supplementComment: '系统自动生成-自增主键',
      },
      {
        name: 'project_name',
        dataType: 'text',
        description:
          'project; 保险项目名称，包括赔款支出、保险金额、总资产、责任险、农业保险、原保险保费收入、健康险、意外险等。',
        supplementComment:
          'project; 保险项目名称，包括赔款支出、保险金额、总资产、责任险、农业保险、原保险保费收入、健康险、意外险等。',
      },
      {
        name: 'amount',
        dataType: 'numeric(24,5)',
        description: 'amount; 数值金额，代表各种保险项目的金额。',
        supplementComment: 'amount; 数值金额，代表各种保险项目的金额。',
      },
    ],
    description: '7月财产险公司经营情况表',
  },
  {
    name: 'part_compay_info',
    value: {
      schemaName: 'namespace_e0d8926c7cd51a4ce3ca3675ee370478',
      tableName: 'part_compay_info',
    },
    columnsInfo: [
      {
        name: 'auto_id_by_system',
        dataType: 'bigint',
        description: '系统自动生成-自增主键',
        supplementComment: '系统自动生成-自增主键',
      },
      {
        name: 'mct_one_id',
        dataType: 'text',
        description: 'mct_one_id; 唯一标识符',
        supplementComment: 'mct_one_id; 唯一标识符',
      },
      {
        name: 'list_type',
        dataType: 'text',
        description: 'list_type; 上市板块类型',
        supplementComment: 'list_type; 上市板块类型',
      },
      {
        name: 'report_year',
        dataType: 'numeric(24,5)',
        description: 'report_year; 报告年份',
        supplementComment: 'report_year; 报告年份',
      },
      {
        name: 'org_name',
        dataType: 'text',
        description: 'org_name; 公司名称',
        supplementComment: 'org_name; 公司名称',
      },
      {
        name: 'total_assets',
        dataType: 'numeric(24,5)',
        description: 'total_assets; 总资产',
        supplementComment: 'total_assets; 总资产',
      },
      {
        name: 'total_liability',
        dataType: 'numeric(24,5)',
        description: 'total_liability; 总负债',
        supplementComment: 'total_liability; 总负债',
      },
      {
        name: 'equity',
        dataType: 'numeric(24,5)',
        description: 'equity; 股东权益',
        supplementComment: 'equity; 股东权益',
      },
      {
        name: 'total_profit',
        dataType: 'numeric(24,5)',
        description: 'total_profit; 总利润',
        supplementComment: 'total_profit; 总利润',
      },
      {
        name: 'net_profit',
        dataType: 'numeric(24,5)',
        description: 'net_profit; 净利润',
        supplementComment: 'net_profit; 净利润',
      },
      {
        name: 'tax',
        dataType: 'numeric(24,5)',
        description: 'tax; 税额',
        supplementComment: 'tax; 税额',
      },
    ],
    description: '企业年报',
  },
];

const Demo = () => {
  const formRef = useRef<FormInstance>();
  return (
    <ProForm
      formRef={formRef}
      onValuesChange={(_, e) => {
        console.log(e);
      }}
      initialValues={{ columnsInfo: defaultData, table: defaultData }}
    >
      <ProFormDependency name={['columnsInfo']}>
        {({ columnsInfo }) => {
          const list = (columnsInfo || []) as any[];
          return (
            <Tabs
              style={{
                padding: '0 8px',
                maxWidth: '100%',
              }}
              items={list.map((item: any, index) => {
                return {
                  key: item.name || '',
                  tab: (
                    <div
                      style={{
                        padding: 4,
                      }}
                    >
                      {item.name}
                    </div>
                  ),
                  label: (
                    <div
                      style={{
                        padding: 4,
                      }}
                    >
                      {item.name}
                    </div>
                  ),
                  children: (
                    <div
                      style={{
                        display: 'flex',
                        maxWidth: '1024px',
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                          overflow: 'auto',
                        }}
                      >
                        <ProTable
                          scroll={{ x: 'max-content' }}
                          size="small"
                          pagination={false}
                          search={false}
                          editable={{
                            editableKeys: item?.columnsInfo?.map(
                              (row: any) => row.name || '',
                            ),
                          }}
                          rowKey="name"
                          name={['table', index, 'columnsInfo']}
                          columns={[
                            {
                              title: '字段名称',
                              dataIndex: 'name',
                              editable: false,
                            },
                            {
                              title: '字段类型',
                              dataIndex: 'dataType',
                              editable: false,
                            },
                            {
                              title: '字段别名',
                              dataIndex: 'description',
                              editable: false,
                              width: 140,
                              render: (text, record) => {
                                return (
                                  <div
                                    style={{
                                      WebkitLineClamp: 2,
                                      maxHeight: 40,
                                      lineHeight: '20px',
                                      textOverflow: 'ellipsis',
                                      overflow: 'hidden',
                                      display: '-webkit-box',
                                      WebkitBoxOrient: 'vertical',
                                      wordBreak: 'break-all',
                                    }}
                                  >
                                    {record.description
                                      ? record.description
                                      : '-'}
                                  </div>
                                );
                              },
                            },
                            {
                              title: '补充说明',
                              dataIndex: 'supplementComment',
                              formItemRender: () => {
                                return (
                                  <Input.TextArea
                                    placeholder="请输入补充说明"
                                    maxLength={200}
                                  />
                                );
                              },
                            },
                          ]}
                          toolBarRender={false}
                          request={async () => {
                            return {
                              data: item.columnsInfo,
                            };
                          }}
                        />
                      </div>
                    </div>
                  ),
                };
              })}
            />
          );
        }}
      </ProFormDependency>

      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormDependency name={['table']}>
          {({ table }) => {
            return (
              <ProFormField
                ignoreFormItem
                fieldProps={{
                  style: {
                    width: '100%',
                  },
                }}
                mode="read"
                valueType="jsonCode"
                text={JSON.stringify(table, null, 2)}
              />
            );
          }}
        </ProFormDependency>
      </ProCard>
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

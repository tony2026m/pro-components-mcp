

import {
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormRadio,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <QueryFilter layout="vertical">
      <ProFormText name="name" label="这是一个超级超级长的名称" />
      <ProFormDatePicker name="birth" label="创建时间" />
      <ProFormText name="sex" label="应用状态" />
      <ProFormRadio.Group
        name="freq"
        label="查询频度"
        options={[
          {
            value: 'weekly',
            label: '每周',
          },
          {
            value: 'quarterly',
            label: '每季度',
          },
          {
            value: 'monthly',
            label: '每月',
          },
          {
            value: 'yearly',
            label: '每年',
          },
        ]}
      />
      <ProFormCheckbox.Group
        name="checkbox"
        label="行业分布"
        options={['农业', '制造业', '互联网']}
      />
    </QueryFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DownOutlined, UpOutlined } from '@ant-design/icons';
import {
  ProForm,
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';
import { Input, Tabs } from 'antd';
import React, { useState } from 'react';

type AdvancedSearchProps = {
  onFilterChange?: (allValues: any) => void;
  onSearch?: (text: string) => void;
  onTypeChange?: (type: string) => void;
  defaultType?: string;
};

const AdvancedSearch: React.FC<AdvancedSearchProps> = (props) => {
  const {
    onSearch,
    onTypeChange,
    defaultType = 'articles',
    onFilterChange,
  } = props;
  const [searchText, setSearchText] = useState<string>();
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const quickSearch = ['小程序开发', '入驻', 'ISV 权限'];
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <Input.Search
          placeholder="请输入"
          enterButton="搜索"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onSearch={onSearch}
          style={{ maxWidth: 522, width: '100%' }}
        />
        <div
          style={{
            display: 'flex',
            gap: 12,
          }}
        >
          {quickSearch.map((text) => (
            <a
              key={text}
              onClick={() => {
                setSearchText(text);
                if (onSearch) {
                  onSearch(text);
                }
              }}
            >
              {text}
            </a>
          ))}
        </div>
      </div>

      <Tabs
        defaultActiveKey={defaultType}
        onChange={onTypeChange}
        tabBarExtraContent={
          <a
            style={{
              display: 'flex',
              gap: 4,
            }}
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            高级筛选 {showFilter ? <UpOutlined /> : <DownOutlined />}
          </a>
        }
        items={[
          {
            key: 'articles',
            label: '文章',
          },
          {
            key: 'projects',
            label: '项目',
          },
          {
            key: 'applications',
            label: '应用',
          },
        ]}
      />

      {showFilter ? (
        <QueryFilter
          submitter={false}
          span={24}
          labelWidth="auto"
          split
          onChange={onFilterChange}
        >
          <ProForm.Group title="姓名">
            <ProFormText name="name" />
          </ProForm.Group>
          <ProForm.Group title="详情">
            <ProFormText name="age" label="年龄" />
            <ProFormDatePicker name="birth" label="生日" />
          </ProForm.Group>
        </QueryFilter>
      ) : null}
    </div>
  );
};

export default AdvancedSearch;

import {
  ProFormDateTimePicker,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <QueryFilter>
      <ProFormDateTimePicker
        label="下单时间"
        colProps={{ xl: 12 }}
        name="orderTime"
        required
      />
      <ProFormText disabled colProps={{ xl: 12 }} name="pay" label="支付方式" />
    </QueryFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProForm,
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';
import { Input } from 'antd';

const Demo = () => {
  const formProps = {
    defaultColsNumber: 6,
  };
  return (
    <>
      <>
        <QueryFilter {...formProps}>
          <ProFormDatePicker
            // key={i}
            colSize={4}
            name="test"
            label="test"
          />
          {[...Array(10).keys()].map((i) => (
            <ProFormDatePicker
              key={i}
              name={`startdate${i + 1}`}
              label={`Date${i + 1}`}
            />
          ))}
        </QueryFilter>
        <pre>{JSON.stringify(formProps, null, 2)}</pre>
      </>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={6}
        defaultCollapsed={false}
      >
        <ProForm.Item name="name" label="test">
          <Input />
        </ProForm.Item>
        <ProFormText
          name="name"
          label="应用名称"
          rules={[{ required: true }]}
        />
        <ProFormText name="sex" label="性别" />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={6}
        defaultCollapsed={false}
      >
        <ProFormText
          name="name"
          label="应用名称"
          rules={[{ required: true }]}
        />
        <ProFormText name="creater" label="创建人" />
        <ProFormText name="sex" label="性别" />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        defaultCollapsed={false}
      >
        <ProFormText
          name="name"
          label="应用名称"
          rules={[{ required: true }]}
        />
        <ProFormText name="creater" label="创建人" />
        <ProFormText name="sex" label="性别" />
        <ProFormText name="status" label="应用状态" />
        <ProFormText name="startdate" label="响应日期" />
        <ProFormText name="create" label="创建时间" />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={12}
        defaultCollapsed={false}
      >
        <ProFormText
          name="name"
          label="应用名称"
          rules={[{ required: true }]}
        />
        <ProFormText name="creater" label="创建人" />
        <ProFormText name="sex" label="性别" />
        <ProFormText name="status" label="应用状态" />
        <ProFormText name="startdate" label="响应日期" />
        <ProFormText name="create" label="创建时间" colSize={3} />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={8}
        defaultCollapsed={false}
      >
        <ProFormText
          name="name"
          label="应用名称"
          rules={[{ required: true }]}
        />
        <ProFormText name="creater" label="创建人" />
        <ProFormText name="sex" label="性别" />
        <ProFormText name="status" label="应用状态" />
        <ProFormText name="startdate" label="响应日期" />
        <ProFormText name="create" label="创建时间" colSize={3} />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={4}
        submitterColSpanProps={{ span: 12 }}
        defaultColsNumber={1}
        defaultCollapsed={false}
      >
        <ProFormText
          name="name"
          label="应用名称"
          rules={[{ required: true }]}
        />
        <ProFormText name="creater" label="创建人" />
        <ProFormText name="sex" label="性别" />
        <ProFormText name="status" label="应用状态" />
        <ProFormText name="startdate" label="响应日期" />
        <ProFormText name="create" label="创建时间" colSize={3} />
      </QueryFilter>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  LightFilter,
  ProFormCascader,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDigit,
  ProFormFieldSet,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormTimePicker,
  ProFormTreeSelect,
} from '@ant-design/pro-components';
import { Radio, TreeSelect } from 'antd';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import dayjs from 'dayjs';
import React from 'react';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const Demo = () => {
  const [size, setSize] = React.useState<SizeType>('middle');
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      >
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <LightFilter<{
        sex: string;
      }>
        initialValues={{
          name1: 'yutingzhao1991',
          name3: '2020-08-19',
          range: [20, 80],
          slider: 20,
          sex: [
            {
              value: 'open1',
              label: '打开',
            },
            {
              value: 'closed2',
              label: '关闭',
            },
          ],
          datetimeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
          timeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
        }}
        size={size}
        onFinish={async (values) => console.log(values.sex)}
      >
        <ProFormSelect
          name="sex"
          label="性别"
          showSearch
          allowClear={false}
          fieldProps={{
            labelInValue: true,
          }}
          valueEnum={{
            man: '男',
            woman: '女',
          }}
        />
        <ProFormSelect
          name="area"
          label="地区"
          mode="multiple"
          valueEnum={{
            beijing: '北京',
            shanghai: '上海',
            hangzhou: '杭州',
            long: '这是一个很长的用来测试溢出的项目',
          }}
        />
        <ProFormCheckbox.Group
          name="checkbox-group"
          label="Checkbox.Group"
          options={['A', 'B', 'C', 'D', 'E', 'F']}
        />
        <ProFormTreeSelect
          initialValue={['0-0', '0-1']}
          label="树形下拉选择器"
          fieldProps={{
            fieldNames: {
              label: 'title',
            },
            treeData,
            treeCheckable: true,
            showCheckedStrategy: TreeSelect.SHOW_PARENT,
            placeholder: 'Please select',
          }}
          name="treeSelect"
        />
        <ProFormCascader
          width="md"
          request={async () => [
            {
              value: 'zhejiang',
              label: '浙江',
              children: [
                {
                  value: 'hangzhou',
                  label: '杭州',
                  children: [
                    {
                      value: 'xihu',
                      label: '西湖',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ]}
          name="area"
          label="区域"
          initialValue={['zhejiang', 'hangzhou', 'xihu']}
        />
        <ProFormSwitch name="open" label="开关" />
        <ProFormDigit name="count" label="数量" />
        <ProFormSlider name="range" label="范围" range />
        <ProFormSlider name="slider" label="范围" />
        <ProFormText name="name1" label="名称" />
        <ProFormSwitch name="open" label="开关" secondary />
        <ProFormText name="name2" label="地址" secondary />
        <ProFormDatePicker
          name="name3"
          label="不能清空的日期"
          allowClear={false}
        />
        <ProFormDateRangePicker name="date" label="日期范围" />
        <ProFormDateTimePicker name="datetime" label="日期时间" />
        <ProFormDateTimeRangePicker
          name="datetimeRanger"
          label="日期时间范围"
        />
        <ProFormTimePicker name="time" label="时间" />
        <ProFormTimePicker.RangePicker name="timeRanger" label="时间范围" />
        <ProFormFieldSet name="name" label="姓名">
          <ProFormText />
          <ProFormText />
        </ProFormFieldSet>
      </LightFilter>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  LightFilter,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDigit,
  ProFormFieldSet,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormTimePicker,
} from '@ant-design/pro-components';
import { Radio } from 'antd';
import React from 'react';

const Demo = () => {
  const [mode, setMode] = React.useState<any>('topLeft');
  return (
    <div>
      <Radio.Group
        value={mode}
        onChange={(e) => {
          setMode(e.target.value);
        }}
      >
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <LightFilter
        placement={mode}
        style={{
          marginBlockStart: '40px',
        }}
      >
        <ProFormSelect
          name="sex"
          label="性别"
          showSearch
          allowClear={false}
          fieldProps={{
            labelInValue: true,
          }}
          valueEnum={{
            man: '男',
            woman: '女',
          }}
        />
        <ProFormSelect
          name="area"
          label="地区"
          mode="multiple"
          valueEnum={{
            beijing: '北京',
            shanghai: '上海',
            hangzhou: '杭州',
            long: '这是一个很长的用来测试溢出的项目',
          }}
        />
        <ProFormDigit name="count" label="数量" />
        <ProFormSlider name="range" label="范围" range />
        <ProFormSlider name="slider" label="范围" />
        <ProFormText name="name1" label="名称" />
        <ProFormSwitch name="open" label="开关" secondary />
        <ProFormText name="name2" label="地址" secondary />
        <ProFormDatePicker
          name="name3"
          label="不能清空的日期"
          allowClear={false}
        />
        <ProFormDateRangePicker name="date" label="日期范围" />
        <ProFormDateTimePicker name="datetime" label="日期时间" />
        <ProFormDateTimeRangePicker
          name="datetimeRanger"
          label="日期时间范围"
        />
        <ProFormTimePicker name="time" label="时间" />
        <ProFormTimePicker.RangePicker name="timeRanger" label="时间范围" />
        <ProFormFieldSet name="name" label="姓名">
          <ProFormText />
          <ProFormText />
        </ProFormFieldSet>
      </LightFilter>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <QueryFilter defaultCollapsed split>
      <ProFormText name="name" label="应用名称" />
      <ProFormDatePicker name="createDate" label="创建时间" />
      <ProFormText name="status" label="应用状态" />
      <ProFormDatePicker name="replyDate" label="响应日期" />
      <ProFormDatePicker name="startDate" label="创建时间" />
      <ProFormDatePicker name="endDate" label="结束时间" />
    </QueryFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  LightFilter,
  ProForm,
  ProFormDigit,
  ProFormSelect,
  ProFormSlider,
  ProFormText,
} from '@ant-design/pro-components';
import { Radio } from 'antd';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import dayjs from 'dayjs';
import React from 'react';

const Demo = () => {
  const [size, setSize] = React.useState<SizeType>('middle');
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      >
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <LightFilter<{
        sex: string;
      }>
        initialValues={{
          name1: 'yutingzhao1991',
          name3: '2020-08-19',
          range: [20, 80],
          slider: 20,
          sex: [
            {
              value: 'open1',
              label: '打开',
            },
            {
              value: 'closed2',
              label: '关闭',
            },
          ],
          datetimeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
          timeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
        }}
        size={size}
        onFinish={async (values) => console.log(values.sex)}
      >
        <ProFormSelect
          name="sex"
          label="性别"
          showSearch
          allowClear={false}
          fieldProps={{
            labelInValue: true,
          }}
          valueEnum={{
            man: '男',
            woman: '女',
          }}
        />
        <ProFormSelect
          name="area"
          label="地区"
          mode="multiple"
          valueEnum={{
            beijing: '北京',
            shanghai: '上海',
            hangzhou: '杭州',
            long: '这是一个很长的用来测试溢出的项目',
          }}
        />
        <ProForm.Group label="范围组">
          <ProFormDigit name="count" label="数量" />
          <ProFormSlider name="range" label="范围" range />
          <ProFormSlider name="slider" label="范围" />
        </ProForm.Group>
        <ProFormText name="name1" label="名称" />
      </LightFilter>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { LightFilter, ProFormText } from '@ant-design/pro-components';
import { Button, Radio, Space } from 'antd';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import React from 'react';

const Demo = () => {
  const [size, setSize] = React.useState<SizeType>('middle');
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      >
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>

      <br />
      <br />

      <Space orientation="vertical">
        <LightFilter
          size={size}
          initialValues={{
            name: 'Jack2',
          }}
        >
          <ProFormText
            name="name"
            label="名称"
            footerRender={(_, onClear) => (
              <Button
                onClick={() => {
                  onClear?.();
                }}
              >
                自定义footer
              </Button>
            )}
          />
        </LightFilter>

        <LightFilter
          size={size}
          initialValues={{
            name: 'Jack2',
          }}
        >
          <ProFormText name="name" label="名称" footerRender={false} />
        </LightFilter>

        <LightFilter
          size={size}
          initialValues={{
            name: 'Jack2',
          }}
          collapse
          collapseLabel="footer为false"
          footerRender={false}
        >
          <ProFormText name="name" label="名称" />
        </LightFilter>

        <LightFilter
          size={size}
          initialValues={{
            name: 'Jack2',
          }}
          collapse
          collapseLabel="自定义footer"
          footerRender={(_, onClear) => (
            <Button
              onClick={() => {
                onClear?.();
              }}
            >
              自定义footer
            </Button>
          )}
        >
          <ProFormText name="name" label="名称" />
        </LightFilter>
      </Space>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <QueryFilter defaultCollapsed split defaultColsNumber={6}>
      <ProFormText name="name" label="应用名称" />
      <ProFormDatePicker name="createDate" label="创建时间" />
      <ProFormText name="status" label="应用状态" />
      <ProFormDatePicker name="replyDate" label="响应日期" />
      <ProFormDatePicker name="startDate" label="创建时间" />
      <ProFormDatePicker name="endDate" label="结束时间" />
    </QueryFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { FilterOutlined } from '@ant-design/icons';
import {
  LightFilter,
  ProFormCascader,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormTreeSelect,
} from '@ant-design/pro-components';
import { TreeSelect } from 'antd';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const Demo = () => {
  return (
    <LightFilter
      initialValues={{
        sex: 'man',
      }}
      variant="outlined"
      collapseLabel={<FilterOutlined />}
      onFinish={async (values) => console.log(values)}
    >
      <ProFormSelect
        name="sex"
        showSearch
        valueEnum={{
          man: '男',
          woman: '女',
        }}
        placeholder="性别"
      />
      <ProFormRadio.Group
        name="radio"
        radioType="button"
        options={[
          {
            value: 'weekly',
            label: '每周',
          },
          {
            value: 'quarterly',
            label: '每季度',
          },
          {
            value: 'monthly',
            label: '每月',
          },
          {
            value: 'yearly',
            label: '每年',
          },
        ]}
      />
      <ProFormDatePicker name="time" placeholder="日期" />
      <ProFormTreeSelect
        request={async () => treeData}
        fieldProps={{
          fieldNames: {
            label: 'title',
          },
          treeCheckable: true,
          showCheckedStrategy: TreeSelect.SHOW_PARENT,
          placeholder: 'Please select',
        }}
        name="treeSelect"
      />
      <ProFormCheckbox.Group
        name="checkbox"
        label="迁移类型"
        width="lg"
        options={['结构迁移', '全量迁移', '增量迁移', '全量校验']}
      />
      <ProFormCascader
        request={async () => [
          {
            value: 'zhejiang',
            label: '浙江',
            children: [
              {
                value: 'hangzhou',
                label: '杭州',
                children: [
                  {
                    value: 'xihu',
                    label: '西湖',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ]}
        name="area"
      />
    </LightFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <QueryFilter defaultCollapsed split defaultFormItemsNumber={5}>
      <ProFormText name="name" label="应用名称" />
      <ProFormDatePicker name="createDate" label="创建时间" />
      <ProFormText name="status" label="应用状态" />
      <ProFormDatePicker name="replyDate" label="响应日期" />
      <ProFormDatePicker name="startDate" label="创建时间" />
      <ProFormDatePicker name="endDate" label="结束时间" />
    </QueryFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  LightFilter,
  ProFormDateTimePicker,
  ProFormSelect,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <LightFilter
      initialValues={{
        sex: 'man',
      }}
      collapse
      onFinish={async (values) => console.log(values)}
    >
      <ProFormSelect
        name="sex"
        label="性别"
        showSearch
        valueEnum={{
          man: '男',
          woman: '女',
        }}
      />
      <ProFormDateTimePicker name="time" label="时间" />
    </LightFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormRadio,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <QueryFilter layout="vertical">
      <ProFormText name="name" label="这是一个超级超级长的名称" />
      <ProFormDatePicker name="birth" label="创建时间" />
      <ProFormText name="sex" label="应用状态" />
      <ProFormRadio.Group
        name="freq"
        label="查询频度"
        options={[
          {
            value: 'weekly',
            label: '每周',
          },
          {
            value: 'quarterly',
            label: '每季度',
          },
          {
            value: 'monthly',
            label: '每月',
          },
          {
            value: 'yearly',
            label: '每年',
          },
        ]}
      />
      <ProFormCheckbox.Group
        name="checkbox"
        label="行业分布"
        options={['农业', '制造业', '互联网']}
      />
    </QueryFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DownOutlined, UpOutlined } from '@ant-design/icons';
import {
  ProForm,
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';
import { Input, Tabs } from 'antd';
import React, { useState } from 'react';

type AdvancedSearchProps = {
  onFilterChange?: (allValues: any) => void;
  onSearch?: (text: string) => void;
  onTypeChange?: (type: string) => void;
  defaultType?: string;
};

const AdvancedSearch: React.FC<AdvancedSearchProps> = (props) => {
  const {
    onSearch,
    onTypeChange,
    defaultType = 'articles',
    onFilterChange,
  } = props;
  const [searchText, setSearchText] = useState<string>();
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const quickSearch = ['小程序开发', '入驻', 'ISV 权限'];
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <Input.Search
          placeholder="请输入"
          enterButton="搜索"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onSearch={onSearch}
          style={{ maxWidth: 522, width: '100%' }}
        />
        <div
          style={{
            display: 'flex',
            gap: 12,
          }}
        >
          {quickSearch.map((text) => (
            <a
              key={text}
              onClick={() => {
                setSearchText(text);
                if (onSearch) {
                  onSearch(text);
                }
              }}
            >
              {text}
            </a>
          ))}
        </div>
      </div>

      <Tabs
        defaultActiveKey={defaultType}
        onChange={onTypeChange}
        tabBarExtraContent={
          <a
            style={{
              display: 'flex',
              gap: 4,
            }}
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            高级筛选 {showFilter ? <UpOutlined /> : <DownOutlined />}
          </a>
        }
        items={[
          {
            key: 'articles',
            label: '文章',
          },
          {
            key: 'projects',
            label: '项目',
          },
          {
            key: 'applications',
            label: '应用',
          },
        ]}
      />

      {showFilter ? (
        <QueryFilter
          submitter={false}
          span={24}
          labelWidth="auto"
          split
          onChange={onFilterChange}
        >
          <ProForm.Group title="姓名">
            <ProFormText name="name" />
          </ProForm.Group>
          <ProForm.Group title="详情">
            <ProFormText name="age" label="年龄" />
            <ProFormDatePicker name="birth" label="生日" />
          </ProForm.Group>
        </QueryFilter>
      ) : null}
    </div>
  );
};

export default AdvancedSearch;

import {
  ProFormDateTimePicker,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <QueryFilter>
      <ProFormDateTimePicker
        label="下单时间"
        colProps={{ xl: 12 }}
        name="orderTime"
        required
      />
      <ProFormText disabled colProps={{ xl: 12 }} name="pay" label="支付方式" />
    </QueryFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProForm,
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';
import { Input } from 'antd';

const Demo = () => {
  const formProps = {
    defaultColsNumber: 6,
  };
  return (
    <>
      <>
        <QueryFilter {...formProps}>
          <ProFormDatePicker
            // key={i}
            colSize={4}
            name="test"
            label="test"
          />
          {[...Array(10).keys()].map((i) => (
            <ProFormDatePicker
              key={i}
              name={`startdate${i + 1}`}
              label={`Date${i + 1}`}
            />
          ))}
        </QueryFilter>
        <pre>{JSON.stringify(formProps, null, 2)}</pre>
      </>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={6}
        defaultCollapsed={false}
      >
        <ProForm.Item name="name" label="test">
          <Input />
        </ProForm.Item>
        <ProFormText
          name="name"
          label="应用名称"
          rules={[{ required: true }]}
        />
        <ProFormText name="sex" label="性别" />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={6}
        defaultCollapsed={false}
      >
        <ProFormText
          name="name"
          label="应用名称"
          rules={[{ required: true }]}
        />
        <ProFormText name="creater" label="创建人" />
        <ProFormText name="sex" label="性别" />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        defaultCollapsed={false}
      >
        <ProFormText
          name="name"
          label="应用名称"
          rules={[{ required: true }]}
        />
        <ProFormText name="creater" label="创建人" />
        <ProFormText name="sex" label="性别" />
        <ProFormText name="status" label="应用状态" />
        <ProFormText name="startdate" label="响应日期" />
        <ProFormText name="create" label="创建时间" />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={12}
        defaultCollapsed={false}
      >
        <ProFormText
          name="name"
          label="应用名称"
          rules={[{ required: true }]}
        />
        <ProFormText name="creater" label="创建人" />
        <ProFormText name="sex" label="性别" />
        <ProFormText name="status" label="应用状态" />
        <ProFormText name="startdate" label="响应日期" />
        <ProFormText name="create" label="创建时间" colSize={3} />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={8}
        defaultCollapsed={false}
      >
        <ProFormText
          name="name"
          label="应用名称"
          rules={[{ required: true }]}
        />
        <ProFormText name="creater" label="创建人" />
        <ProFormText name="sex" label="性别" />
        <ProFormText name="status" label="应用状态" />
        <ProFormText name="startdate" label="响应日期" />
        <ProFormText name="create" label="创建时间" colSize={3} />
      </QueryFilter>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={async (values) => {
          console.log(values.name);
        }}
        span={4}
        submitterColSpanProps={{ span: 12 }}
        defaultColsNumber={1}
        defaultCollapsed={false}
      >
        <ProFormText
          name="name"
          label="应用名称"
          rules={[{ required: true }]}
        />
        <ProFormText name="creater" label="创建人" />
        <ProFormText name="sex" label="性别" />
        <ProFormText name="status" label="应用状态" />
        <ProFormText name="startdate" label="响应日期" />
        <ProFormText name="create" label="创建时间" colSize={3} />
      </QueryFilter>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  LightFilter,
  ProFormCascader,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDigit,
  ProFormFieldSet,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormTimePicker,
  ProFormTreeSelect,
} from '@ant-design/pro-components';
import { Radio, TreeSelect } from 'antd';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import dayjs from 'dayjs';
import React from 'react';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const Demo = () => {
  const [size, setSize] = React.useState<SizeType>('middle');
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      >
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <LightFilter<{
        sex: string;
      }>
        initialValues={{
          name1: 'yutingzhao1991',
          name3: '2020-08-19',
          range: [20, 80],
          slider: 20,
          sex: [
            {
              value: 'open1',
              label: '打开',
            },
            {
              value: 'closed2',
              label: '关闭',
            },
          ],
          datetimeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
          timeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
        }}
        size={size}
        onFinish={async (values) => console.log(values.sex)}
      >
        <ProFormSelect
          name="sex"
          label="性别"
          showSearch
          allowClear={false}
          fieldProps={{
            labelInValue: true,
          }}
          valueEnum={{
            man: '男',
            woman: '女',
          }}
        />
        <ProFormSelect
          name="area"
          label="地区"
          mode="multiple"
          valueEnum={{
            beijing: '北京',
            shanghai: '上海',
            hangzhou: '杭州',
            long: '这是一个很长的用来测试溢出的项目',
          }}
        />
        <ProFormCheckbox.Group
          name="checkbox-group"
          label="Checkbox.Group"
          options={['A', 'B', 'C', 'D', 'E', 'F']}
        />
        <ProFormTreeSelect
          initialValue={['0-0', '0-1']}
          label="树形下拉选择器"
          fieldProps={{
            fieldNames: {
              label: 'title',
            },
            treeData,
            treeCheckable: true,
            showCheckedStrategy: TreeSelect.SHOW_PARENT,
            placeholder: 'Please select',
          }}
          name="treeSelect"
        />
        <ProFormCascader
          width="md"
          request={async () => [
            {
              value: 'zhejiang',
              label: '浙江',
              children: [
                {
                  value: 'hangzhou',
                  label: '杭州',
                  children: [
                    {
                      value: 'xihu',
                      label: '西湖',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ]}
          name="area"
          label="区域"
          initialValue={['zhejiang', 'hangzhou', 'xihu']}
        />
        <ProFormSwitch name="open" label="开关" />
        <ProFormDigit name="count" label="数量" />
        <ProFormSlider name="range" label="范围" range />
        <ProFormSlider name="slider" label="范围" />
        <ProFormText name="name1" label="名称" />
        <ProFormSwitch name="open" label="开关" secondary />
        <ProFormText name="name2" label="地址" secondary />
        <ProFormDatePicker
          name="name3"
          label="不能清空的日期"
          allowClear={false}
        />
        <ProFormDateRangePicker name="date" label="日期范围" />
        <ProFormDateTimePicker name="datetime" label="日期时间" />
        <ProFormDateTimeRangePicker
          name="datetimeRanger"
          label="日期时间范围"
        />
        <ProFormTimePicker name="time" label="时间" />
        <ProFormTimePicker.RangePicker name="timeRanger" label="时间范围" />
        <ProFormFieldSet name="name" label="姓名">
          <ProFormText />
          <ProFormText />
        </ProFormFieldSet>
      </LightFilter>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  LightFilter,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDigit,
  ProFormFieldSet,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormTimePicker,
} from '@ant-design/pro-components';
import { Radio } from 'antd';
import React from 'react';

const Demo = () => {
  const [mode, setMode] = React.useState<any>('topLeft');
  return (
    <div>
      <Radio.Group
        value={mode}
        onChange={(e) => {
          setMode(e.target.value);
        }}
      >
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <LightFilter
        placement={mode}
        style={{
          marginBlockStart: '40px',
        }}
      >
        <ProFormSelect
          name="sex"
          label="性别"
          showSearch
          allowClear={false}
          fieldProps={{
            labelInValue: true,
          }}
          valueEnum={{
            man: '男',
            woman: '女',
          }}
        />
        <ProFormSelect
          name="area"
          label="地区"
          mode="multiple"
          valueEnum={{
            beijing: '北京',
            shanghai: '上海',
            hangzhou: '杭州',
            long: '这是一个很长的用来测试溢出的项目',
          }}
        />
        <ProFormDigit name="count" label="数量" />
        <ProFormSlider name="range" label="范围" range />
        <ProFormSlider name="slider" label="范围" />
        <ProFormText name="name1" label="名称" />
        <ProFormSwitch name="open" label="开关" secondary />
        <ProFormText name="name2" label="地址" secondary />
        <ProFormDatePicker
          name="name3"
          label="不能清空的日期"
          allowClear={false}
        />
        <ProFormDateRangePicker name="date" label="日期范围" />
        <ProFormDateTimePicker name="datetime" label="日期时间" />
        <ProFormDateTimeRangePicker
          name="datetimeRanger"
          label="日期时间范围"
        />
        <ProFormTimePicker name="time" label="时间" />
        <ProFormTimePicker.RangePicker name="timeRanger" label="时间范围" />
        <ProFormFieldSet name="name" label="姓名">
          <ProFormText />
          <ProFormText />
        </ProFormFieldSet>
      </LightFilter>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <QueryFilter defaultCollapsed split>
      <ProFormText name="name" label="应用名称" />
      <ProFormDatePicker name="createDate" label="创建时间" />
      <ProFormText name="status" label="应用状态" />
      <ProFormDatePicker name="replyDate" label="响应日期" />
      <ProFormDatePicker name="startDate" label="创建时间" />
      <ProFormDatePicker name="endDate" label="结束时间" />
    </QueryFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  LightFilter,
  ProForm,
  ProFormDigit,
  ProFormSelect,
  ProFormSlider,
  ProFormText,
} from '@ant-design/pro-components';
import { Radio } from 'antd';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import dayjs from 'dayjs';
import React from 'react';

const Demo = () => {
  const [size, setSize] = React.useState<SizeType>('middle');
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      >
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <LightFilter<{
        sex: string;
      }>
        initialValues={{
          name1: 'yutingzhao1991',
          name3: '2020-08-19',
          range: [20, 80],
          slider: 20,
          sex: [
            {
              value: 'open1',
              label: '打开',
            },
            {
              value: 'closed2',
              label: '关闭',
            },
          ],
          datetimeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
          timeRanger: [
            dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
            dayjs('2019-11-16 12:50:26').valueOf(),
          ],
        }}
        size={size}
        onFinish={async (values) => console.log(values.sex)}
      >
        <ProFormSelect
          name="sex"
          label="性别"
          showSearch
          allowClear={false}
          fieldProps={{
            labelInValue: true,
          }}
          valueEnum={{
            man: '男',
            woman: '女',
          }}
        />
        <ProFormSelect
          name="area"
          label="地区"
          mode="multiple"
          valueEnum={{
            beijing: '北京',
            shanghai: '上海',
            hangzhou: '杭州',
            long: '这是一个很长的用来测试溢出的项目',
          }}
        />
        <ProForm.Group label="范围组">
          <ProFormDigit name="count" label="数量" />
          <ProFormSlider name="range" label="范围" range />
          <ProFormSlider name="slider" label="范围" />
        </ProForm.Group>
        <ProFormText name="name1" label="名称" />
      </LightFilter>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { LightFilter, ProFormText } from '@ant-design/pro-components';
import { Button, Radio, Space } from 'antd';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import React from 'react';

const Demo = () => {
  const [size, setSize] = React.useState<SizeType>('middle');
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      >
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>

      <br />
      <br />

      <Space orientation="vertical">
        <LightFilter
          size={size}
          initialValues={{
            name: 'Jack2',
          }}
        >
          <ProFormText
            name="name"
            label="名称"
            footerRender={(_, onClear) => (
              <Button
                onClick={() => {
                  onClear?.();
                }}
              >
                自定义footer
              </Button>
            )}
          />
        </LightFilter>

        <LightFilter
          size={size}
          initialValues={{
            name: 'Jack2',
          }}
        >
          <ProFormText name="name" label="名称" footerRender={false} />
        </LightFilter>

        <LightFilter
          size={size}
          initialValues={{
            name: 'Jack2',
          }}
          collapse
          collapseLabel="footer为false"
          footerRender={false}
        >
          <ProFormText name="name" label="名称" />
        </LightFilter>

        <LightFilter
          size={size}
          initialValues={{
            name: 'Jack2',
          }}
          collapse
          collapseLabel="自定义footer"
          footerRender={(_, onClear) => (
            <Button
              onClick={() => {
                onClear?.();
              }}
            >
              自定义footer
            </Button>
          )}
        >
          <ProFormText name="name" label="名称" />
        </LightFilter>
      </Space>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <QueryFilter defaultCollapsed split defaultColsNumber={6}>
      <ProFormText name="name" label="应用名称" />
      <ProFormDatePicker name="createDate" label="创建时间" />
      <ProFormText name="status" label="应用状态" />
      <ProFormDatePicker name="replyDate" label="响应日期" />
      <ProFormDatePicker name="startDate" label="创建时间" />
      <ProFormDatePicker name="endDate" label="结束时间" />
    </QueryFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { FilterOutlined } from '@ant-design/icons';
import {
  LightFilter,
  ProFormCascader,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormTreeSelect,
} from '@ant-design/pro-components';
import { TreeSelect } from 'antd';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const Demo = () => {
  return (
    <LightFilter
      initialValues={{
        sex: 'man',
      }}
      variant="outlined"
      collapseLabel={<FilterOutlined />}
      onFinish={async (values) => console.log(values)}
    >
      <ProFormSelect
        name="sex"
        showSearch
        valueEnum={{
          man: '男',
          woman: '女',
        }}
        placeholder="性别"
      />
      <ProFormRadio.Group
        name="radio"
        radioType="button"
        options={[
          {
            value: 'weekly',
            label: '每周',
          },
          {
            value: 'quarterly',
            label: '每季度',
          },
          {
            value: 'monthly',
            label: '每月',
          },
          {
            value: 'yearly',
            label: '每年',
          },
        ]}
      />
      <ProFormDatePicker name="time" placeholder="日期" />
      <ProFormTreeSelect
        request={async () => treeData}
        fieldProps={{
          fieldNames: {
            label: 'title',
          },
          treeCheckable: true,
          showCheckedStrategy: TreeSelect.SHOW_PARENT,
          placeholder: 'Please select',
        }}
        name="treeSelect"
      />
      <ProFormCheckbox.Group
        name="checkbox"
        label="迁移类型"
        width="lg"
        options={['结构迁移', '全量迁移', '增量迁移', '全量校验']}
      />
      <ProFormCascader
        request={async () => [
          {
            value: 'zhejiang',
            label: '浙江',
            children: [
              {
                value: 'hangzhou',
                label: '杭州',
                children: [
                  {
                    value: 'xihu',
                    label: '西湖',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ]}
        name="area"
      />
    </LightFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProFormDatePicker,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <QueryFilter defaultCollapsed split defaultFormItemsNumber={5}>
      <ProFormText name="name" label="应用名称" />
      <ProFormDatePicker name="createDate" label="创建时间" />
      <ProFormText name="status" label="应用状态" />
      <ProFormDatePicker name="replyDate" label="响应日期" />
      <ProFormDatePicker name="startDate" label="创建时间" />
      <ProFormDatePicker name="endDate" label="结束时间" />
    </QueryFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  LightFilter,
  ProFormDateTimePicker,
  ProFormSelect,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <LightFilter
      initialValues={{
        sex: 'man',
      }}
      collapse
      onFinish={async (values) => console.log(values)}
    >
      <ProFormSelect
        name="sex"
        label="性别"
        showSearch
        valueEnum={{
          man: '男',
          woman: '女',
        }}
      />
      <ProFormDateTimePicker name="time" label="时间" />
    </LightFilter>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

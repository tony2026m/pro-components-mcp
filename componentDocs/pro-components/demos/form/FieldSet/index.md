

﻿import {
  ProForm,
  ProFormDependency,
  ProFormFieldSet,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Switch } from 'antd';
import { useState } from 'react';

export default () => {
  const [readonly, setReadonly] = useState(false);
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <Switch
        style={{
          marginBlockEnd: 16,
        }}
        checked={readonly}
        checkedChildren="编辑"
        unCheckedChildren="只读"
        onChange={setReadonly}
      />
      <ProForm
        readonly={readonly}
        initialValues={{
          list: ['1', '2', '3'],
        }}
      >
        <ProForm.Item label="互相依赖的表单">
          <ProFormDependency name={['list']}>
            {({ list }) => {
              return <div>{JSON.stringify(list, null, 2)}</div>;
            }}
          </ProFormDependency>
        </ProForm.Item>
        <ProFormFieldSet name="list" label="组件列表">
          <ProFormText width="md" />
          <ProFormSelect
            width="md"
            request={async () => [
              { label: '全部', value: 'all' },
              { label: '未解决', value: 'open' },
              { label: '已解决', value: 'closed' },
              { label: '解决中', value: 'processing' },
            ]}
            name="useMode"
            label="合同约定生效方式"
          />
          <ProFormText width="md" />
        </ProFormFieldSet>

        <ProFormFieldSet
          name="list"
          label="组件列表- Input.Group"
          type="group"
          rules={[
            {
              validator: (_, value) => {
                const [name, name1, name2] = value || [];
                if (!name) {
                  throw new Error('第一个值不能为空');
                }
                if (!name1) {
                  throw new Error('第二个值不能为空');
                }
                if (!name2) {
                  throw new Error('第三个值不能为空');
                }
              },
            },
          ]}
          transform={(value: any) => ({
            list: value,
            startTime: value[0],
            endTime: value[1],
          })}
        >
          <ProFormText width="md" />
          <ProFormText width="md" />
          <ProFormText width="md" />
        </ProFormFieldSet>

        <ProFormFieldSet
          name="list"
          label="组件列表"
          transform={(value: any) => ({
            list: value,
            startTime: value[0],
            endTime: value[1],
          })}
        >
          <ProFormText width="md" readonly />
          -
          <ProFormText width="md" readonly />
          -
          <ProFormText width="md" readonly />
        </ProFormFieldSet>
      </ProForm>
    </div>
  );
};

﻿import { ProForm, ProFormSelect } from '@ant-design/pro-components';
import { Switch } from 'antd';
import { useState } from 'react';

export default () => {
  const [readonly, setReadonly] = useState(false);
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <Switch
        style={{
          marginBlockEnd: 16,
        }}
        checked={readonly}
        checkedChildren="Edit"
        unCheckedChildren="Read Only"
        onChange={setReadonly}
      />
      <ProForm readonly={readonly}>
        <ProForm.Group>
          <ProFormSelect.SearchSelect
            name="userQuery"
            label="Query Selector - request"
            fieldProps={{
              labelInValue: true,
              style: {
                minWidth: 140,
              },
            }}
            debounceTime={300}
            request={async ({ keyWords = '' }) => {
              return [
                { label: 'All', value: 'all' },
                { label: 'Unresolved', value: 'open' },
                { label: 'Unresolved (Assigned)', value: 'assignees' },
                { label: 'Resolved', value: 'closed' },
                { label: 'In Progress', value: 'processing' },
              ].filter(({ value, label }) => {
                return value.includes(keyWords) || label.includes(keyWords);
              });
            }}
          />
          <ProFormSelect.SearchSelect
            name="userQuery2"
            label="Query Selector - valueEnum"
            fieldProps={{
              style: {
                minWidth: 140,
              },
            }}
            valueEnum={{
              all: { text: 'All', status: 'Default' },
              open: {
                text: 'Unresolved',
                status: 'Error',
              },
              closed: {
                text: 'Resolved',
                status: 'Success',
              },
              processing: {
                text: 'In Progress',
                status: 'Processing',
              },
            }}
          />
          <ProFormSelect.SearchSelect
            name="userQuery3"
            label="Query Selector - options"
            fieldProps={{
              labelInValue: false,
              style: {
                minWidth: 140,
              },
            }}
            options={[
              { label: 'All', value: 'all' },
              { label: 'Unresolved', value: 'open' },
              { label: 'Resolved', value: 'closed' },
              { label: 'In Progress', value: 'processing' },
            ]}
          />
        </ProForm.Group>
      </ProForm>
    </div>
  );
};

import {
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormFieldSet,
  ProFormList,
  ProFormRadio,
  ProFormRate,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormTimePicker,
  ProFormUploadButton,
  ProFormUploadDragger,
} from '@ant-design/pro-components';

const options = [
  {
    id: 1,
    label: '测试测试1',
    value: 1,
  },
  {
    id: 2,
    label: '测试测试2',
    value: 2,
  },
  {
    id: 3,
    label: '测试测试3',
    value: 3,
  },
  {
    id: 4,
    label: '测试测试4',
    value: 4,
  },
  {
    id: 5,
    label: '测试测试5',
    value: 5,
  },
  {
    id: 6,
    label: '测试测试6',
    value: 6,
  },
  {
    id: 7,
    label: '测试测试7',
    value: 7,
  },
  {
    id: 8,
    label: '测试测试8',
    value: 8,
  },
  {
    id: 9,
    label: '测试测试9',
    value: 9,
  },
  {
    id: 10,
    label: '测试测试10',
    value: 10,
  },
  {
    id: 11,
    label: '测试测试11',
    value: 11,
  },
  {
    id: 12,
    label: '测试测试12',
    value: 12,
  },
];

const Demo = () => (
  <div
    style={{
      padding: 24,
    }}
  >
    <ProForm
      readonly
      name="validate_other"
      initialValues={{
        'select-multiple': ['red', 'green'],
        'select-multiple2': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        useMode: 'all',
        switch: true,
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
        name: '蚂蚁金服有限公司',
        radio: 'a',
        list: ['1', '2', '3'],
        list2: ['1', '2', '5', '5'],
        select: 'china',
        'radio-button': 'a',
        dragger: [
          {
            uid: '1',
            name: 'xxx.png',
            status: 'done',
            response: 'Server Error 500', // custom error message to show
            url: 'https://gw.alipayobjects.com/zos/antfincdn/7%24YOiS6YIm/huaban.png',
          },
          {
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/7%24YOiS6YIm/huaban.png',
          },
          {
            uid: '3',
            name: 'zzz.png',
            status: 'error',
            response: 'Server Error 500', // custom error message to show
            url: 'https://gw.alipayobjects.com/zos/antfincdn/7%24YOiS6YIm/huaban.png',
          },
        ],
        upload: [
          {
            uid: '1',
            name: 'xxx.png',
            status: 'done',
            response: 'Server Error 500', // custom error message to show
            url: 'https://gw.alipayobjects.com/zos/antfincdn/7%24YOiS6YIm/huaban.png',
          },
          {
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/7%24YOiS6YIm/huaban.png',
          },
          {
            uid: '3',
            name: 'zzz.png',
            status: 'error',
            response: 'Server Error 500', // custom error message to show
            url: 'https://gw.alipayobjects.com/zos/antfincdn/7%24YOiS6YIm/huaban.png',
          },
        ],
        date: Date.now(),
        dateWeek: Date.now(),
        dateMonth: Date.now(),
        dateQuarter: Date.now(),
        dateYear: Date.now(),
        dateTime: Date.now(),
        time: '00:01:05',
        timeRange: ['05:00:00', '11:00:00'],
        dateTimeRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
        dateRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
      }}
      onValuesChange={(_, values) => {
        console.log(values);
      }}
      onFinish={async (value) => console.log(value)}
    >
      <ProForm.Group title="基础数据">
        <ProFormText
          width="md"
          name="name"
          label="name"
          fieldProps={{
            prefix: 'prefix',
            suffix: 'suffix',
          }}
        />
        <ProFormSelect
          name="select"
          label="Select"
          valueEnum={{
            china: 'China',
            usa: 'U.S.A',
          }}
          placeholder="Please select a country"
          rules={[{ required: true, message: 'Please select your country!' }]}
        />
        <ProFormSelect
          width="md"
          request={async () => [
            { label: '全部', value: 'all' },
            { label: '未解决', value: 'open' },
            { label: '已解决', value: 'closed' },
            { label: '解决中', value: 'processing' },
          ]}
          name="useMode"
          label="合同约定生效方式"
        />
        <ProFormSelect
          name="select-multiple"
          label="Select[multiple]"
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
        <ProFormSelect
          name="select-multiple2"
          label="Select[multiple]"
          options={options}
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
        <ProFormDigit
          label="InputNumber"
          name="input-number"
          min={1}
          max={10}
        />
        <ProFormSwitch
          name="switch"
          label="Switch"
          unCheckedChildren="不同意"
          checkedChildren="同意"
        />
        <ProFormSlider
          name="slider"
          label="Slider"
          marks={{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }}
        />
      </ProForm.Group>
      <ProFormRadio.Group
        name="radio"
        label="Radio.Group"
        options={[
          {
            label: 'item 1',
            value: 'a',
          },
          {
            label: 'item 2',
            value: 'b',
          },
          {
            label: 'item 3',
            value: 'c',
          },
        ]}
      />
      <ProForm.Group>
        <ProFormText hidden label="text1" />
        <ProFormText label="text2" />
      </ProForm.Group>
      <ProFormRadio.Group
        name="radio-button"
        label="Radio.Button"
        radioType="button"
        options={[
          {
            label: 'item 1',
            value: 'a',
          },
          {
            label: 'item 2',
            value: 'b',
          },
          {
            label: 'item 3',
            value: 'c',
          },
        ]}
      />
      <ProFormCheckbox.Group
        name="checkbox-group"
        label="Checkbox.Group"
        options={['A', 'B', 'C', 'D', 'E', 'F']}
      />
      <ProFormRate name="rate" label="Rate" />
      <ProFormUploadButton
        name="upload"
        label="Upload"
        max={2}
        action="/upload.do"
        extra="longgggggggggggggggggggggggggggggggggg"
      />
      <ProFormList
        name="textList"
        label="地址列表"
        initialValue={[
          {
            name: '张三',
            addr: '地址1',
          },
          {
            name: '李四',
            addr: '地址2',
          },
        ]}
      >
        <ProFormText name="name" label="姓名" />
        <ProFormText name="addr" label="地址" />
      </ProFormList>
      <ProFormFieldSet
        name="list"
        label="组件列表"
        transform={(value: any) => ({ startTime: value[0], endTime: value[1] })}
      >
        <ProFormText width="md" />
        -
        <ProFormText width="md" />
        -
        <ProFormText width="md" />
      </ProFormFieldSet>

      <ProFormFieldSet
        name="list2"
        label="组件列表自动增加"
        transform={(value: any) => ({ startTime: value[0], endTime: value[1] })}
      >
        {(value) => {
          return value?.map((e, index) => {
            return (
              <ProFormText
                key={index}
                width="md"
                fieldProps={{
                  value: e,
                }}
              />
            );
          });
        }}
      </ProFormFieldSet>
      <ProFormUploadDragger max={4} label="Dragger" name="dragger" />

      <ProForm.Group title="日期相关分组">
        <ProFormDatePicker name="date" label="日期" />
        <ProFormDatePicker
          name="date"
          fieldProps={{
            format: 'YY-MM',
          }}
          label="年月"
        />
        <ProFormTimePicker name="time" label="时间" />
        <ProFormTimePicker.RangePicker name="timeRange" label="时间区间" />
        <ProFormDatePicker.Week name="dateWeek" label="周" />
        <ProFormDatePicker.Month name="dateMonth" label="月" />
        <ProFormDatePicker.Quarter name="dateQuarter" label="季度" />
        <ProFormDatePicker.Year name="dateYear" label="年" />
        <ProFormDateTimePicker
          name="dateTime"
          label="日期时间"
          fieldProps={{
            format: (value) => value.format('YYYY-MM-DD'),
          }}
        />
        <ProFormDateRangePicker name="dateRange" label="日期区间" />
        <ProFormDateTimeRangePicker name="dateTimeRange" label="日期时间区间" />
      </ProForm.Group>
      <ProForm.Group title="其他相关分组">
        <ProForm.Item label="互相依赖的表单">
          <ProFormDependency name={['list']}>
            {({ list }) => {
              return <div>{JSON.stringify(list, null, 2)}</div>;
            }}
          </ProFormDependency>
        </ProForm.Item>
        <ProFormFieldSet name="list" label="组件列表">
          <ProFormText width="md" />
          <ProFormSelect
            width="md"
            request={async () => [
              { label: '全部', value: 'all' },
              { label: '未解决', value: 'open' },
              { label: '已解决', value: 'closed' },
              { label: '解决中', value: 'processing' },
            ]}
            name="useMode"
            label="合同约定生效方式"
          />
          <ProFormText width="md" />
        </ProFormFieldSet>

        <ProFormFieldSet
          name="list"
          label="组件列表- Input.Group"
          type="group"
          rules={[
            {
              validator: (_, value) => {
                const [name, name1, name2] = value || [];
                if (!name) {
                  throw new Error('第一个值不能为空');
                }
                if (!name1) {
                  throw new Error('第二个值不能为空');
                }
                if (!name2) {
                  throw new Error('第三个值不能为空');
                }
              },
            },
          ]}
          transform={(value: any) => ({
            list: value,
            startTime: value[0],
            endTime: value[1],
          })}
        >
          <ProFormText width="md" />
          <ProFormText width="md" />
          <ProFormText width="md" />
        </ProFormFieldSet>

        <ProFormFieldSet
          name="list"
          label="组件列表"
          transform={(value: any) => ({
            list: value,
            startTime: value[0],
            endTime: value[1],
          })}
        >
          <ProFormText width="md" />
          -
          <ProFormText width="md" />
          -
          <ProFormText width="md" />
        </ProFormFieldSet>
      </ProForm.Group>
    </ProForm>
  </div>
);

export default Demo;

import type { CaptFieldRef } from '@ant-design/pro-components';
import { ProForm, ProFormCaptcha } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const captchaRef = useRef<CaptFieldRef | null | undefined>();
  const inputRef = useRef();

  return (
    <ProForm
      title="新建表单"
      submitter={{
        render: (props, doms) => {
          return [
            ...doms,
            <Button
              htmlType="button"
              onClick={() => {
                captchaRef.current?.startTiming();
              }}
              key="edit"
            >
              手动开始计数
            </Button>,
            <Button
              htmlType="button"
              onClick={() => {
                captchaRef.current?.endTiming();
              }}
              key="edit"
            >
              手动结束计数
            </Button>,
          ];
        },
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('提交成功');
        return true;
      }}
    >
      <ProFormCaptcha
        onGetCaptcha={() => {
          // dosomething()
          return new Promise((resolve, reject) => {
            reject();
          });
        }}
        onTiming={(count) => {
          console.log('timing:', count);
        }}
        fieldRef={captchaRef}
        fieldProps={{ ref: inputRef }}
        name="code"
      />
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProForm, ProFormCaptcha } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const captchaRef = useRef();
  const inputRef = useRef();

  return (
    <ProForm
      title="新建表单"
      submitter={{
        render: (props, doms) => {
          return [
            ...doms,
            <Button
              htmlType="button"
              onClick={() => {
                // @ts-ignore
                captchaRef.current?.startTiming();
              }}
              key="edit"
            >
              手动开始计数
            </Button>,
            <Button
              htmlType="button"
              onClick={() => {
                // @ts-ignore
                captchaRef.current?.endTiming();
              }}
              key="edit2"
            >
              手动结束计数
            </Button>,
          ];
        },
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('提交成功');
        return true;
      }}
    >
      <ProFormCaptcha
        onGetCaptcha={() => {
          // dosomething()
          return new Promise((resolve, reject) => {
            reject();
          });
        }}
        fieldRef={captchaRef}
        fieldProps={{ ref: inputRef }}
        name="code"
      />
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import {
  ProForm,
  ProFormUploadButton,
  ProFormUploadDragger,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <ProForm>
      <ProFormUploadButton
        title="上传按钮的文本变啦"
        name="upload"
        label="Upload"
        max={2}
        fieldProps={{
          name: 'file',
        }}
        action="/upload.do"
        extra="extra"
      />
      <ProFormUploadButton
        name="upload"
        label="Upload"
        max={2}
        fieldProps={{
          name: 'file',
          listType: 'picture-card',
        }}
        action="/upload.do"
        extra="extra"
      />
      <ProFormUploadDragger max={4} label="Dragger" name="dragger" />
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import {
  LightFilter,
  ProFormFieldSet,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

export function App() {
  return (
    <div className="App">
      <LightFilter
        initialValues={{
          name: [
            {
              label: '包含',
              value: 'Like',
            },
            '123',
          ],
        }}
        placement={'bottomLeft'}
      >
        <ProFormFieldSet
          label="筛选"
          name={'name'}
          lightProps={{
            labelFormatter: (value) => {
              return value.join(' ');
            },
          }}
          transform={(value: any) => {
            return {
              filter: [
                {
                  operator: value[0],
                  value: value[1],
                },
              ],
            };
          }}
        >
          <ProFormSelect
            fieldProps={{
              labelInValue: true,
            }}
            valueEnum={{
              Like: '包合',
              NotLike: '不包合',
              Eq: '等于',
              NotEq: '不等于',
            }}
          />
          <ProFormText placeholder="请输入" />
        </ProFormFieldSet>
      </LightFilter>
    </div>
  );
}

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

﻿import {
  ProForm,
  ProFormDateMonthRangePicker,
  ProFormDatePicker,
  ProFormDateQuarterRangePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDateWeekRangePicker,
  ProFormDateYearRangePicker,
  ProFormTimePicker,
} from '@ant-design/pro-components';
import { Switch } from 'antd';
import { useState } from 'react';

export default () => {
  const [readonly, setReadonly] = useState(false);
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <Switch
        style={{
          marginBlockEnd: 16,
        }}
        checked={readonly}
        checkedChildren="Edit"
        unCheckedChildren="Read Only"
        onChange={setReadonly}
      />
      <ProForm
        readonly={readonly}
        initialValues={{
          date: Date.now(),
          dateWeek: Date.now(),
          dateMonth: Date.now(),
          dateQuarter: Date.now(),
          dateYear: Date.now(),
          dateTime: Date.now(),
          time: '00:01:05',
          timeRange: ['05:00:00', '11:00:00'],
          dateTimeRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
          dateRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
        }}
        onFinish={async (values) => {
          console.log(values);
        }}
      >
        <ProForm.Group title="Date Related Group">
          <ProFormDatePicker name="date" label="Date" />
          <ProFormDatePicker
            name="date"
            fieldProps={{
              format: 'YY-MM',
            }}
            label="Year-Month"
          />
          <ProFormTimePicker name="time" label="Time" />
          <ProFormTimePicker.RangePicker name="timeRange" label="Time Range" />
          <ProFormDatePicker.Week name="dateWeek" label="Week" />
          <ProFormDateWeekRangePicker name="dateWeekRange" label="Week Range" />
          <ProFormDatePicker.Month name="dateMonth" label="Month" />
          <ProFormDateMonthRangePicker
            name="dateMonthRange"
            label="Month Range"
          />
          <ProFormDatePicker.Quarter name="dateQuarter" label="Quarter" />
          <ProFormDateQuarterRangePicker
            name="dateQuarterRange"
            label="Quarter Range"
          />
          <ProFormDatePicker.Year name="dateYear" label="Year" />
          <ProFormDateYearRangePicker name="dateYearRange" label="Year Range" />
          <ProFormDateTimePicker
            name="dateTime"
            label="Date Time"
            fieldProps={{
              format: (value) => value.format('YYYY-MM-DD'),
            }}
          />
          <ProFormDateRangePicker name="dateRange" label="Date Range" />
          <ProFormDateTimeRangePicker
            name="dateTimeRange"
            label="Date Time Range"
          />
        </ProForm.Group>
      </ProForm>
    </div>
  );
};

import {
  ProForm,
  ProFormCascader,
  ProFormCheckbox,
  ProFormColorPicker,
  ProFormDigit,
  ProFormDigitRange,
  ProFormGroup,
  ProFormRadio,
  ProFormRate,
  ProFormSegmented,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormUploadButton,
  ProFormUploadDragger,
} from '@ant-design/pro-components';
import { Switch } from 'antd';
import Mock from 'mockjs';
import { useState } from 'react';

export const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [readonly, setReadonly] = useState(false);
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <Switch
        style={{
          marginBlockEnd: 16,
        }}
        checked={readonly}
        checkedChildren="Edit"
        unCheckedChildren="Read Only"
        onChange={setReadonly}
      />
      <ProForm
        readonly={readonly}
        name="validate_other"
        initialValues={{
          name: 'qixian',
          password: '1ixian',
          select: 'china',
          select2: '520000201604258831',
          useMode: { label: 'Unresolved', value: 'open', key: 'open' },
          'select-multiple': ['green', 'blue'],
          radio: 'a',
          'radio-vertical': 'b',
          'radio-button': 'b',
          'checkbox-group': ['A', 'B', 'C'],
          'input-number-range': [2, 4],
          'input-number': 3,
          switch: true,
          slider: 66,
          rate: 3.5,
          segmented: 'open',
          segmented2: 'open',
        }}
        onValuesChange={(_, values) => {
          console.log(values);
        }}
        onFinish={async (value) => console.log(value)}
      >
        <ProFormGroup title="Text Types">
          <ProFormText width="md" name="name" label="Name" />
          <ProFormText.Password width="md" name="password" label="Password" />
        </ProFormGroup>
        <ProFormGroup
          title="Selection Types"
          collapsible
          style={{
            gap: '0 32px',
          }}
        >
          <ProFormSelect
            name="select"
            label="Select"
            valueEnum={{
              china: 'China',
              usa: 'U.S.A',
            }}
            placeholder="Please select a country"
            rules={[{ required: true, message: 'Please select your country!' }]}
          />
          <ProFormSelect
            name="select2"
            label="Select with Search"
            showSearch
            debounceTime={300}
            request={async ({ keyWords }) => {
              await waitTime(100);
              console.log(
                Mock.mock({
                  'data|1-10': [
                    {
                      value: '@id',
                      label: '@name',
                    },
                  ],
                }).data.concat({
                  value: keyWords,
                  label: 'Target',
                }),
              );
              return Mock.mock({
                'data|1-10': [
                  {
                    value: '@id',
                    label: '@name',
                  },
                ],
              }).data.concat([
                {
                  value: keyWords,
                  label: 'Target',
                },
                { value: '520000201604258831', label: 'Patricia Lopez' },
                { value: '520000198509222123', label: 'Jose Martinez' },
                { value: '210000200811194757', label: 'Elizabeth Thomas' },
                { value: '530000198808222758', label: 'Scott Anderson' },
                { value: '500000198703236285', label: 'George Jackson' },
                { value: '610000199906148074', label: 'Linda Hernandez' },
                { value: '150000197210168659', label: 'Sandra Hall' },
                { label: 'Target' },
              ]);
            }}
            placeholder="Please select a country"
            rules={[{ required: true, message: 'Please select your country!' }]}
          />
          <ProFormSelect
            width="md"
            fieldProps={{
              labelInValue: true,
            }}
            request={async () => [
              { label: 'All', value: 'all' },
              { label: 'Unresolved', value: 'open' },
              { label: 'Resolved', value: 'closed' },
              { label: 'In Progress', value: 'processing' },
            ]}
            name="useMode"
            label="Contract Agreed Effective Method"
          />
          <ProFormSelect
            name="select-multiple"
            label="Select[multiple]"
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
          <ProFormCascader
            label="Address"
            request={async () => [
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        label: 'West Lake',
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
            fieldProps={{
              changeOnSelect: true,
            }}
            name="area"
          />

          <ProFormRadio.Group
            name="radio"
            label="Radio.Group"
            options={[
              {
                label: 'item 1',
                value: 'a',
              },
              {
                label: 'item 2',
                value: 'b',
              },
              {
                label: 'item 3',
                value: 'c',
              },
            ]}
          />
          <ProFormRadio.Group
            name="radio-vertical"
            layout="vertical"
            label="Radio.Group"
            options={[
              {
                label: 'item 1',
                value: 'a',
              },
              {
                label: 'item 2',
                value: 'b',
              },
              {
                label: 'item 3',
                value: 'c',
              },
            ]}
          />
          <ProFormRadio.Group
            name="radio-button"
            label="Radio.Button"
            radioType="button"
            options={[
              {
                label: 'item 1',
                value: 'a',
              },
              {
                label: 'item 2',
                value: 'b',
              },
              {
                label: 'item 3',
                value: 'c',
              },
            ]}
          />
          <ProFormCheckbox.Group
            name="checkbox-group"
            label="Checkbox.Group"
            options={['A', 'B', 'C', 'D', 'E', 'F']}
          />
          <ProFormColorPicker label="Color Picker" name="color" />
        </ProFormGroup>
        <ProFormGroup label="Number Types">
          <ProFormDigitRange
            label="InputNumberRange"
            name="input-number-range"
            separator="-"
            placeholder={['Min', 'Max']}
            separatorWidth={60}
          />
          <ProFormDigit
            label="InputNumber"
            name="input-number"
            width="sm"
            min={1}
            max={10}
          />
          <ProFormSwitch name="switch" label="Switch" />
          <ProFormSlider
            name="slider"
            label="Slider"
            width="lg"
            marks={{
              0: 'A',
              20: 'B',
              40: 'C',
              60: 'D',
              80: 'E',
              100: 'F',
            }}
          />
          <ProFormRate name="rate" label="Rate" />
          <ProFormUploadButton name="pic" label="Upload" />
          <ProFormUploadDragger name="drag-pic" label="Drag and Drop Upload" />
          <ProFormSegmented
            name="segmented"
            label="Segmented Control"
            valueEnum={{
              open: 'Unresolved',
              closed: 'Resolved',
            }}
          />
          <ProFormSegmented
            name="segmented2"
            label="Segmented Control - Remote Data"
            request={async () => [
              { label: 'All', value: 'all' },
              { label: 'Unresolved', value: 'open' },
              { label: 'Resolved', value: 'closed' },
              { label: 'In Progress', value: 'processing' },
            ]}
          />
        </ProFormGroup>
      </ProForm>
    </div>
  );
};

export default Demo;

﻿import {
  ProForm,
  ProFormDependency,
  ProFormFieldSet,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Switch } from 'antd';
import { useState } from 'react';

export default () => {
  const [readonly, setReadonly] = useState(false);
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <Switch
        style={{
          marginBlockEnd: 16,
        }}
        checked={readonly}
        checkedChildren="编辑"
        unCheckedChildren="只读"
        onChange={setReadonly}
      />
      <ProForm
        readonly={readonly}
        initialValues={{
          list: ['1', '2', '3'],
        }}
      >
        <ProForm.Item label="互相依赖的表单">
          <ProFormDependency name={['list']}>
            {({ list }) => {
              return <div>{JSON.stringify(list, null, 2)}</div>;
            }}
          </ProFormDependency>
        </ProForm.Item>
        <ProFormFieldSet name="list" label="组件列表">
          <ProFormText width="md" />
          <ProFormSelect
            width="md"
            request={async () => [
              { label: '全部', value: 'all' },
              { label: '未解决', value: 'open' },
              { label: '已解决', value: 'closed' },
              { label: '解决中', value: 'processing' },
            ]}
            name="useMode"
            label="合同约定生效方式"
          />
          <ProFormText width="md" />
        </ProFormFieldSet>

        <ProFormFieldSet
          name="list"
          label="组件列表- Input.Group"
          type="group"
          rules={[
            {
              validator: (_, value) => {
                const [name, name1, name2] = value || [];
                if (!name) {
                  throw new Error('第一个值不能为空');
                }
                if (!name1) {
                  throw new Error('第二个值不能为空');
                }
                if (!name2) {
                  throw new Error('第三个值不能为空');
                }
              },
            },
          ]}
          transform={(value: any) => ({
            list: value,
            startTime: value[0],
            endTime: value[1],
          })}
        >
          <ProFormText width="md" />
          <ProFormText width="md" />
          <ProFormText width="md" />
        </ProFormFieldSet>

        <ProFormFieldSet
          name="list"
          label="组件列表"
          transform={(value: any) => ({
            list: value,
            startTime: value[0],
            endTime: value[1],
          })}
        >
          <ProFormText width="md" readonly />
          -
          <ProFormText width="md" readonly />
          -
          <ProFormText width="md" readonly />
        </ProFormFieldSet>
      </ProForm>
    </div>
  );
};

﻿import { ProForm, ProFormSelect } from '@ant-design/pro-components';
import { Switch } from 'antd';
import { useState } from 'react';

export default () => {
  const [readonly, setReadonly] = useState(false);
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <Switch
        style={{
          marginBlockEnd: 16,
        }}
        checked={readonly}
        checkedChildren="Edit"
        unCheckedChildren="Read Only"
        onChange={setReadonly}
      />
      <ProForm readonly={readonly}>
        <ProForm.Group>
          <ProFormSelect.SearchSelect
            name="userQuery"
            label="Query Selector - request"
            fieldProps={{
              labelInValue: true,
              style: {
                minWidth: 140,
              },
            }}
            debounceTime={300}
            request={async ({ keyWords = '' }) => {
              return [
                { label: 'All', value: 'all' },
                { label: 'Unresolved', value: 'open' },
                { label: 'Unresolved (Assigned)', value: 'assignees' },
                { label: 'Resolved', value: 'closed' },
                { label: 'In Progress', value: 'processing' },
              ].filter(({ value, label }) => {
                return value.includes(keyWords) || label.includes(keyWords);
              });
            }}
          />
          <ProFormSelect.SearchSelect
            name="userQuery2"
            label="Query Selector - valueEnum"
            fieldProps={{
              style: {
                minWidth: 140,
              },
            }}
            valueEnum={{
              all: { text: 'All', status: 'Default' },
              open: {
                text: 'Unresolved',
                status: 'Error',
              },
              closed: {
                text: 'Resolved',
                status: 'Success',
              },
              processing: {
                text: 'In Progress',
                status: 'Processing',
              },
            }}
          />
          <ProFormSelect.SearchSelect
            name="userQuery3"
            label="Query Selector - options"
            fieldProps={{
              labelInValue: false,
              style: {
                minWidth: 140,
              },
            }}
            options={[
              { label: 'All', value: 'all' },
              { label: 'Unresolved', value: 'open' },
              { label: 'Resolved', value: 'closed' },
              { label: 'In Progress', value: 'processing' },
            ]}
          />
        </ProForm.Group>
      </ProForm>
    </div>
  );
};

import {
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormFieldSet,
  ProFormList,
  ProFormRadio,
  ProFormRate,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormTimePicker,
  ProFormUploadButton,
  ProFormUploadDragger,
} from '@ant-design/pro-components';

const options = [
  {
    id: 1,
    label: '测试测试1',
    value: 1,
  },
  {
    id: 2,
    label: '测试测试2',
    value: 2,
  },
  {
    id: 3,
    label: '测试测试3',
    value: 3,
  },
  {
    id: 4,
    label: '测试测试4',
    value: 4,
  },
  {
    id: 5,
    label: '测试测试5',
    value: 5,
  },
  {
    id: 6,
    label: '测试测试6',
    value: 6,
  },
  {
    id: 7,
    label: '测试测试7',
    value: 7,
  },
  {
    id: 8,
    label: '测试测试8',
    value: 8,
  },
  {
    id: 9,
    label: '测试测试9',
    value: 9,
  },
  {
    id: 10,
    label: '测试测试10',
    value: 10,
  },
  {
    id: 11,
    label: '测试测试11',
    value: 11,
  },
  {
    id: 12,
    label: '测试测试12',
    value: 12,
  },
];

const Demo = () => (
  <div
    style={{
      padding: 24,
    }}
  >
    <ProForm
      readonly
      name="validate_other"
      initialValues={{
        'select-multiple': ['red', 'green'],
        'select-multiple2': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        useMode: 'all',
        switch: true,
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
        name: '蚂蚁金服有限公司',
        radio: 'a',
        list: ['1', '2', '3'],
        list2: ['1', '2', '5', '5'],
        select: 'china',
        'radio-button': 'a',
        dragger: [
          {
            uid: '1',
            name: 'xxx.png',
            status: 'done',
            response: 'Server Error 500', // custom error message to show
            url: 'https://gw.alipayobjects.com/zos/antfincdn/7%24YOiS6YIm/huaban.png',
          },
          {
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/7%24YOiS6YIm/huaban.png',
          },
          {
            uid: '3',
            name: 'zzz.png',
            status: 'error',
            response: 'Server Error 500', // custom error message to show
            url: 'https://gw.alipayobjects.com/zos/antfincdn/7%24YOiS6YIm/huaban.png',
          },
        ],
        upload: [
          {
            uid: '1',
            name: 'xxx.png',
            status: 'done',
            response: 'Server Error 500', // custom error message to show
            url: 'https://gw.alipayobjects.com/zos/antfincdn/7%24YOiS6YIm/huaban.png',
          },
          {
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/7%24YOiS6YIm/huaban.png',
          },
          {
            uid: '3',
            name: 'zzz.png',
            status: 'error',
            response: 'Server Error 500', // custom error message to show
            url: 'https://gw.alipayobjects.com/zos/antfincdn/7%24YOiS6YIm/huaban.png',
          },
        ],
        date: Date.now(),
        dateWeek: Date.now(),
        dateMonth: Date.now(),
        dateQuarter: Date.now(),
        dateYear: Date.now(),
        dateTime: Date.now(),
        time: '00:01:05',
        timeRange: ['05:00:00', '11:00:00'],
        dateTimeRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
        dateRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
      }}
      onValuesChange={(_, values) => {
        console.log(values);
      }}
      onFinish={async (value) => console.log(value)}
    >
      <ProForm.Group title="基础数据">
        <ProFormText
          width="md"
          name="name"
          label="name"
          fieldProps={{
            prefix: 'prefix',
            suffix: 'suffix',
          }}
        />
        <ProFormSelect
          name="select"
          label="Select"
          valueEnum={{
            china: 'China',
            usa: 'U.S.A',
          }}
          placeholder="Please select a country"
          rules={[{ required: true, message: 'Please select your country!' }]}
        />
        <ProFormSelect
          width="md"
          request={async () => [
            { label: '全部', value: 'all' },
            { label: '未解决', value: 'open' },
            { label: '已解决', value: 'closed' },
            { label: '解决中', value: 'processing' },
          ]}
          name="useMode"
          label="合同约定生效方式"
        />
        <ProFormSelect
          name="select-multiple"
          label="Select[multiple]"
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
        <ProFormSelect
          name="select-multiple2"
          label="Select[multiple]"
          options={options}
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
        <ProFormDigit
          label="InputNumber"
          name="input-number"
          min={1}
          max={10}
        />
        <ProFormSwitch
          name="switch"
          label="Switch"
          unCheckedChildren="不同意"
          checkedChildren="同意"
        />
        <ProFormSlider
          name="slider"
          label="Slider"
          marks={{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }}
        />
      </ProForm.Group>
      <ProFormRadio.Group
        name="radio"
        label="Radio.Group"
        options={[
          {
            label: 'item 1',
            value: 'a',
          },
          {
            label: 'item 2',
            value: 'b',
          },
          {
            label: 'item 3',
            value: 'c',
          },
        ]}
      />
      <ProForm.Group>
        <ProFormText hidden label="text1" />
        <ProFormText label="text2" />
      </ProForm.Group>
      <ProFormRadio.Group
        name="radio-button"
        label="Radio.Button"
        radioType="button"
        options={[
          {
            label: 'item 1',
            value: 'a',
          },
          {
            label: 'item 2',
            value: 'b',
          },
          {
            label: 'item 3',
            value: 'c',
          },
        ]}
      />
      <ProFormCheckbox.Group
        name="checkbox-group"
        label="Checkbox.Group"
        options={['A', 'B', 'C', 'D', 'E', 'F']}
      />
      <ProFormRate name="rate" label="Rate" />
      <ProFormUploadButton
        name="upload"
        label="Upload"
        max={2}
        action="/upload.do"
        extra="longgggggggggggggggggggggggggggggggggg"
      />
      <ProFormList
        name="textList"
        label="地址列表"
        initialValue={[
          {
            name: '张三',
            addr: '地址1',
          },
          {
            name: '李四',
            addr: '地址2',
          },
        ]}
      >
        <ProFormText name="name" label="姓名" />
        <ProFormText name="addr" label="地址" />
      </ProFormList>
      <ProFormFieldSet
        name="list"
        label="组件列表"
        transform={(value: any) => ({ startTime: value[0], endTime: value[1] })}
      >
        <ProFormText width="md" />
        -
        <ProFormText width="md" />
        -
        <ProFormText width="md" />
      </ProFormFieldSet>

      <ProFormFieldSet
        name="list2"
        label="组件列表自动增加"
        transform={(value: any) => ({ startTime: value[0], endTime: value[1] })}
      >
        {(value) => {
          return value?.map((e, index) => {
            return (
              <ProFormText
                key={index}
                width="md"
                fieldProps={{
                  value: e,
                }}
              />
            );
          });
        }}
      </ProFormFieldSet>
      <ProFormUploadDragger max={4} label="Dragger" name="dragger" />

      <ProForm.Group title="日期相关分组">
        <ProFormDatePicker name="date" label="日期" />
        <ProFormDatePicker
          name="date"
          fieldProps={{
            format: 'YY-MM',
          }}
          label="年月"
        />
        <ProFormTimePicker name="time" label="时间" />
        <ProFormTimePicker.RangePicker name="timeRange" label="时间区间" />
        <ProFormDatePicker.Week name="dateWeek" label="周" />
        <ProFormDatePicker.Month name="dateMonth" label="月" />
        <ProFormDatePicker.Quarter name="dateQuarter" label="季度" />
        <ProFormDatePicker.Year name="dateYear" label="年" />
        <ProFormDateTimePicker
          name="dateTime"
          label="日期时间"
          fieldProps={{
            format: (value) => value.format('YYYY-MM-DD'),
          }}
        />
        <ProFormDateRangePicker name="dateRange" label="日期区间" />
        <ProFormDateTimeRangePicker name="dateTimeRange" label="日期时间区间" />
      </ProForm.Group>
      <ProForm.Group title="其他相关分组">
        <ProForm.Item label="互相依赖的表单">
          <ProFormDependency name={['list']}>
            {({ list }) => {
              return <div>{JSON.stringify(list, null, 2)}</div>;
            }}
          </ProFormDependency>
        </ProForm.Item>
        <ProFormFieldSet name="list" label="组件列表">
          <ProFormText width="md" />
          <ProFormSelect
            width="md"
            request={async () => [
              { label: '全部', value: 'all' },
              { label: '未解决', value: 'open' },
              { label: '已解决', value: 'closed' },
              { label: '解决中', value: 'processing' },
            ]}
            name="useMode"
            label="合同约定生效方式"
          />
          <ProFormText width="md" />
        </ProFormFieldSet>

        <ProFormFieldSet
          name="list"
          label="组件列表- Input.Group"
          type="group"
          rules={[
            {
              validator: (_, value) => {
                const [name, name1, name2] = value || [];
                if (!name) {
                  throw new Error('第一个值不能为空');
                }
                if (!name1) {
                  throw new Error('第二个值不能为空');
                }
                if (!name2) {
                  throw new Error('第三个值不能为空');
                }
              },
            },
          ]}
          transform={(value: any) => ({
            list: value,
            startTime: value[0],
            endTime: value[1],
          })}
        >
          <ProFormText width="md" />
          <ProFormText width="md" />
          <ProFormText width="md" />
        </ProFormFieldSet>

        <ProFormFieldSet
          name="list"
          label="组件列表"
          transform={(value: any) => ({
            list: value,
            startTime: value[0],
            endTime: value[1],
          })}
        >
          <ProFormText width="md" />
          -
          <ProFormText width="md" />
          -
          <ProFormText width="md" />
        </ProFormFieldSet>
      </ProForm.Group>
    </ProForm>
  </div>
);

export default Demo;

import type { CaptFieldRef } from '@ant-design/pro-components';
import { ProForm, ProFormCaptcha } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const captchaRef = useRef<CaptFieldRef | null | undefined>();
  const inputRef = useRef();

  return (
    <ProForm
      title="新建表单"
      submitter={{
        render: (props, doms) => {
          return [
            ...doms,
            <Button
              htmlType="button"
              onClick={() => {
                captchaRef.current?.startTiming();
              }}
              key="edit"
            >
              手动开始计数
            </Button>,
            <Button
              htmlType="button"
              onClick={() => {
                captchaRef.current?.endTiming();
              }}
              key="edit"
            >
              手动结束计数
            </Button>,
          ];
        },
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('提交成功');
        return true;
      }}
    >
      <ProFormCaptcha
        onGetCaptcha={() => {
          // dosomething()
          return new Promise((resolve, reject) => {
            reject();
          });
        }}
        onTiming={(count) => {
          console.log('timing:', count);
        }}
        fieldRef={captchaRef}
        fieldProps={{ ref: inputRef }}
        name="code"
      />
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProForm, ProFormCaptcha } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const captchaRef = useRef();
  const inputRef = useRef();

  return (
    <ProForm
      title="新建表单"
      submitter={{
        render: (props, doms) => {
          return [
            ...doms,
            <Button
              htmlType="button"
              onClick={() => {
                // @ts-ignore
                captchaRef.current?.startTiming();
              }}
              key="edit"
            >
              手动开始计数
            </Button>,
            <Button
              htmlType="button"
              onClick={() => {
                // @ts-ignore
                captchaRef.current?.endTiming();
              }}
              key="edit2"
            >
              手动结束计数
            </Button>,
          ];
        },
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('提交成功');
        return true;
      }}
    >
      <ProFormCaptcha
        onGetCaptcha={() => {
          // dosomething()
          return new Promise((resolve, reject) => {
            reject();
          });
        }}
        fieldRef={captchaRef}
        fieldProps={{ ref: inputRef }}
        name="code"
      />
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import {
  ProForm,
  ProFormUploadButton,
  ProFormUploadDragger,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <ProForm>
      <ProFormUploadButton
        title="上传按钮的文本变啦"
        name="upload"
        label="Upload"
        max={2}
        fieldProps={{
          name: 'file',
        }}
        action="/upload.do"
        extra="extra"
      />
      <ProFormUploadButton
        name="upload"
        label="Upload"
        max={2}
        fieldProps={{
          name: 'file',
          listType: 'picture-card',
        }}
        action="/upload.do"
        extra="extra"
      />
      <ProFormUploadDragger max={4} label="Dragger" name="dragger" />
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import {
  LightFilter,
  ProFormFieldSet,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

export function App() {
  return (
    <div className="App">
      <LightFilter
        initialValues={{
          name: [
            {
              label: '包含',
              value: 'Like',
            },
            '123',
          ],
        }}
        placement={'bottomLeft'}
      >
        <ProFormFieldSet
          label="筛选"
          name={'name'}
          lightProps={{
            labelFormatter: (value) => {
              return value.join(' ');
            },
          }}
          transform={(value: any) => {
            return {
              filter: [
                {
                  operator: value[0],
                  value: value[1],
                },
              ],
            };
          }}
        >
          <ProFormSelect
            fieldProps={{
              labelInValue: true,
            }}
            valueEnum={{
              Like: '包合',
              NotLike: '不包合',
              Eq: '等于',
              NotEq: '不等于',
            }}
          />
          <ProFormText placeholder="请输入" />
        </ProFormFieldSet>
      </LightFilter>
    </div>
  );
}

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

﻿import {
  ProForm,
  ProFormDateMonthRangePicker,
  ProFormDatePicker,
  ProFormDateQuarterRangePicker,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormDateWeekRangePicker,
  ProFormDateYearRangePicker,
  ProFormTimePicker,
} from '@ant-design/pro-components';
import { Switch } from 'antd';
import { useState } from 'react';

export default () => {
  const [readonly, setReadonly] = useState(false);
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <Switch
        style={{
          marginBlockEnd: 16,
        }}
        checked={readonly}
        checkedChildren="Edit"
        unCheckedChildren="Read Only"
        onChange={setReadonly}
      />
      <ProForm
        readonly={readonly}
        initialValues={{
          date: Date.now(),
          dateWeek: Date.now(),
          dateMonth: Date.now(),
          dateQuarter: Date.now(),
          dateYear: Date.now(),
          dateTime: Date.now(),
          time: '00:01:05',
          timeRange: ['05:00:00', '11:00:00'],
          dateTimeRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
          dateRange: [Date.now(), Date.now() - 1000 * 60 * 60 * 24],
        }}
        onFinish={async (values) => {
          console.log(values);
        }}
      >
        <ProForm.Group title="Date Related Group">
          <ProFormDatePicker name="date" label="Date" />
          <ProFormDatePicker
            name="date"
            fieldProps={{
              format: 'YY-MM',
            }}
            label="Year-Month"
          />
          <ProFormTimePicker name="time" label="Time" />
          <ProFormTimePicker.RangePicker name="timeRange" label="Time Range" />
          <ProFormDatePicker.Week name="dateWeek" label="Week" />
          <ProFormDateWeekRangePicker name="dateWeekRange" label="Week Range" />
          <ProFormDatePicker.Month name="dateMonth" label="Month" />
          <ProFormDateMonthRangePicker
            name="dateMonthRange"
            label="Month Range"
          />
          <ProFormDatePicker.Quarter name="dateQuarter" label="Quarter" />
          <ProFormDateQuarterRangePicker
            name="dateQuarterRange"
            label="Quarter Range"
          />
          <ProFormDatePicker.Year name="dateYear" label="Year" />
          <ProFormDateYearRangePicker name="dateYearRange" label="Year Range" />
          <ProFormDateTimePicker
            name="dateTime"
            label="Date Time"
            fieldProps={{
              format: (value) => value.format('YYYY-MM-DD'),
            }}
          />
          <ProFormDateRangePicker name="dateRange" label="Date Range" />
          <ProFormDateTimeRangePicker
            name="dateTimeRange"
            label="Date Time Range"
          />
        </ProForm.Group>
      </ProForm>
    </div>
  );
};

import {
  ProForm,
  ProFormCascader,
  ProFormCheckbox,
  ProFormColorPicker,
  ProFormDigit,
  ProFormDigitRange,
  ProFormGroup,
  ProFormRadio,
  ProFormRate,
  ProFormSegmented,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormUploadButton,
  ProFormUploadDragger,
} from '@ant-design/pro-components';
import { Switch } from 'antd';
import Mock from 'mockjs';
import { useState } from 'react';

export const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [readonly, setReadonly] = useState(false);
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <Switch
        style={{
          marginBlockEnd: 16,
        }}
        checked={readonly}
        checkedChildren="Edit"
        unCheckedChildren="Read Only"
        onChange={setReadonly}
      />
      <ProForm
        readonly={readonly}
        name="validate_other"
        initialValues={{
          name: 'qixian',
          password: '1ixian',
          select: 'china',
          select2: '520000201604258831',
          useMode: { label: 'Unresolved', value: 'open', key: 'open' },
          'select-multiple': ['green', 'blue'],
          radio: 'a',
          'radio-vertical': 'b',
          'radio-button': 'b',
          'checkbox-group': ['A', 'B', 'C'],
          'input-number-range': [2, 4],
          'input-number': 3,
          switch: true,
          slider: 66,
          rate: 3.5,
          segmented: 'open',
          segmented2: 'open',
        }}
        onValuesChange={(_, values) => {
          console.log(values);
        }}
        onFinish={async (value) => console.log(value)}
      >
        <ProFormGroup title="Text Types">
          <ProFormText width="md" name="name" label="Name" />
          <ProFormText.Password width="md" name="password" label="Password" />
        </ProFormGroup>
        <ProFormGroup
          title="Selection Types"
          collapsible
          style={{
            gap: '0 32px',
          }}
        >
          <ProFormSelect
            name="select"
            label="Select"
            valueEnum={{
              china: 'China',
              usa: 'U.S.A',
            }}
            placeholder="Please select a country"
            rules={[{ required: true, message: 'Please select your country!' }]}
          />
          <ProFormSelect
            name="select2"
            label="Select with Search"
            showSearch
            debounceTime={300}
            request={async ({ keyWords }) => {
              await waitTime(100);
              console.log(
                Mock.mock({
                  'data|1-10': [
                    {
                      value: '@id',
                      label: '@name',
                    },
                  ],
                }).data.concat({
                  value: keyWords,
                  label: 'Target',
                }),
              );
              return Mock.mock({
                'data|1-10': [
                  {
                    value: '@id',
                    label: '@name',
                  },
                ],
              }).data.concat([
                {
                  value: keyWords,
                  label: 'Target',
                },
                { value: '520000201604258831', label: 'Patricia Lopez' },
                { value: '520000198509222123', label: 'Jose Martinez' },
                { value: '210000200811194757', label: 'Elizabeth Thomas' },
                { value: '530000198808222758', label: 'Scott Anderson' },
                { value: '500000198703236285', label: 'George Jackson' },
                { value: '610000199906148074', label: 'Linda Hernandez' },
                { value: '150000197210168659', label: 'Sandra Hall' },
                { label: 'Target' },
              ]);
            }}
            placeholder="Please select a country"
            rules={[{ required: true, message: 'Please select your country!' }]}
          />
          <ProFormSelect
            width="md"
            fieldProps={{
              labelInValue: true,
            }}
            request={async () => [
              { label: 'All', value: 'all' },
              { label: 'Unresolved', value: 'open' },
              { label: 'Resolved', value: 'closed' },
              { label: 'In Progress', value: 'processing' },
            ]}
            name="useMode"
            label="Contract Agreed Effective Method"
          />
          <ProFormSelect
            name="select-multiple"
            label="Select[multiple]"
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
          <ProFormCascader
            label="Address"
            request={async () => [
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        label: 'West Lake',
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
            fieldProps={{
              changeOnSelect: true,
            }}
            name="area"
          />

          <ProFormRadio.Group
            name="radio"
            label="Radio.Group"
            options={[
              {
                label: 'item 1',
                value: 'a',
              },
              {
                label: 'item 2',
                value: 'b',
              },
              {
                label: 'item 3',
                value: 'c',
              },
            ]}
          />
          <ProFormRadio.Group
            name="radio-vertical"
            layout="vertical"
            label="Radio.Group"
            options={[
              {
                label: 'item 1',
                value: 'a',
              },
              {
                label: 'item 2',
                value: 'b',
              },
              {
                label: 'item 3',
                value: 'c',
              },
            ]}
          />
          <ProFormRadio.Group
            name="radio-button"
            label="Radio.Button"
            radioType="button"
            options={[
              {
                label: 'item 1',
                value: 'a',
              },
              {
                label: 'item 2',
                value: 'b',
              },
              {
                label: 'item 3',
                value: 'c',
              },
            ]}
          />
          <ProFormCheckbox.Group
            name="checkbox-group"
            label="Checkbox.Group"
            options={['A', 'B', 'C', 'D', 'E', 'F']}
          />
          <ProFormColorPicker label="Color Picker" name="color" />
        </ProFormGroup>
        <ProFormGroup label="Number Types">
          <ProFormDigitRange
            label="InputNumberRange"
            name="input-number-range"
            separator="-"
            placeholder={['Min', 'Max']}
            separatorWidth={60}
          />
          <ProFormDigit
            label="InputNumber"
            name="input-number"
            width="sm"
            min={1}
            max={10}
          />
          <ProFormSwitch name="switch" label="Switch" />
          <ProFormSlider
            name="slider"
            label="Slider"
            width="lg"
            marks={{
              0: 'A',
              20: 'B',
              40: 'C',
              60: 'D',
              80: 'E',
              100: 'F',
            }}
          />
          <ProFormRate name="rate" label="Rate" />
          <ProFormUploadButton name="pic" label="Upload" />
          <ProFormUploadDragger name="drag-pic" label="Drag and Drop Upload" />
          <ProFormSegmented
            name="segmented"
            label="Segmented Control"
            valueEnum={{
              open: 'Unresolved',
              closed: 'Resolved',
            }}
          />
          <ProFormSegmented
            name="segmented2"
            label="Segmented Control - Remote Data"
            request={async () => [
              { label: 'All', value: 'all' },
              { label: 'Unresolved', value: 'open' },
              { label: 'Resolved', value: 'closed' },
              { label: 'In Progress', value: 'processing' },
            ]}
          />
        </ProFormGroup>
      </ProForm>
    </div>
  );
};

export default Demo;

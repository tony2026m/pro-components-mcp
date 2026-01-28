

﻿import { BetaSchemaForm } from '@ant-design/pro-components';
import { useEffect, useRef, useState } from 'react';

const Demo = () => {
  const targetRef = useRef();

  const [requestLibData, setRequestLibData] = useState(0);
  useEffect(() => {
    // 更新requestLibData，并引发reRender
    setTimeout(() => {
      setRequestLibData(1);
    });
  }, []);
  // 查看reRender后的ref标记
  useEffect(() => console.log('targetRef.current1', targetRef.current));
  // 查看reRender后的ref标记
  useEffect(() => {
    setTimeout(() => {
      console.log('targetRef.current1', targetRef.current);
    }, 1000);
  });
  return (
    <BetaSchemaForm
      request={async () => ({})}
      params={{ requestLibData }}
      columns={[
        {
          title: 'money',
          dataIndex: 'money',
          valueType: 'money',
        },
      ]}
      formRef={targetRef}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProForm, ProFormRadio, ProFormText } from '@ant-design/pro-components';
import { Col, Row, Space, message } from 'antd';
import { useState } from 'react';

type LayoutType = Parameters<typeof ProForm>[0]['layout'];
const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [formLayoutType, setFormLayoutType] = useState<LayoutType>(
    LAYOUT_TYPE_HORIZONTAL,
  );

  const formItemLayout =
    formLayoutType === LAYOUT_TYPE_HORIZONTAL
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      {...formItemLayout}
      layout={formLayoutType}
      submitter={{
        render: (props, doms) => {
          return formLayoutType === LAYOUT_TYPE_HORIZONTAL ? (
            <Row>
              <Col span={14} offset={4}>
                <Space>{doms}</Space>
              </Col>
            </Row>
          ) : (
            doms
          );
        },
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('Submission successful');
      }}
      params={{}}
      request={async () => {
        await waitTime(100);
        return {
          name: 'Ant Design Co., Ltd.',
          useMode: 'chapter',
        };
      }}
    >
      <ProFormRadio.Group
        style={{
          margin: 16,
        }}
        label="Label Layout"
        radioType="button"
        fieldProps={{
          value: formLayoutType,
          onChange: (e) => setFormLayoutType(e.target.value),
        }}
        options={['horizontal', 'vertical', 'inline']}
      />
      <ProFormText
        width="md"
        name="name"
        label="Contract Customer Name"
        tooltip="Up to 24 characters"
        placeholder="Please enter a name"
      />
      <ProFormText
        width="md"
        name="company"
        label="Our Company Name"
        placeholder="Please enter a name"
      />
      <ProFormText
        name={['contract', 'name']}
        width="md"
        label="Contract Name"
        placeholder="Please enter a name"
      />
    </ProForm>
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
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { Input, message } from 'antd';
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
  decs?: string;
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: 624691229,
    title: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: 1590481162000,
  },
];

const columns: ProColumns<DataSourceType>[] = [
  {
    title: '活动名称',
    dataIndex: 'title',
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
    formItemRender: (_, { record }) => {
      console.log('----===>', record);
      return <Input addonBefore={(record as any)?.addonBefore} />;
    },
  },
  {
    title: '操作',
    valueType: 'option',
  },
];

const Demo = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id),
  );
  return (
    <ProForm<{
      name: string;
      company: string;
    }>
      grid
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('提交成功');
      }}
      initialValues={{
        name: '蚂蚁设计有限公司',
        useMode: 'chapter',
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
        />
        <ProFormText
          width="md"
          name="company"
          label="我方公司名称"
          placeholder="请输入名称"
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="主合同编号" />
      <ProForm.Item
        label="数组数据"
        name="dataSource"
        initialValue={defaultData}
        trigger="onValuesChange"
      >
        <EditableProTable<DataSourceType>
          rowKey="id"
          toolBarRender={false}
          columns={columns}
          recordCreatorProps={{
            newRecordType: 'dataSource',
            position: 'top',
            record: () => ({
              id: Date.now(),
              addonBefore: 'ccccccc',
              decs: 'testdesc',
            }),
          }}
          editable={{
            type: 'multiple',
            editableKeys,
            onChange: setEditableRowKeys,
            actionRender: (row, _, dom) => {
              return [dom.delete];
            },
          }}
        />
      </ProForm.Item>
    </ProForm>
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
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Col, Row, Space, message } from 'antd';
import type { FormLayout } from 'antd/lib/form/Form';
import { useState } from 'react';

const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [formLayoutType, setFormLayoutType] = useState<FormLayout>(
    LAYOUT_TYPE_HORIZONTAL,
  );

  const [grid, setGrid] = useState(true);

  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      layout={formLayoutType}
      grid={grid}
      rowProps={{
        gutter: [16, formLayoutType === 'inline' ? 16 : 0],
      }}
      submitter={{
        render: (props, doms) => {
          return formLayoutType === LAYOUT_TYPE_HORIZONTAL ? (
            <Row>
              <Col span={14} offset={4}>
                <Space>{doms}</Space>
              </Col>
            </Row>
          ) : (
            doms
          );
        },
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('Submission successful');
      }}
      params={{}}
      request={async () => {
        await waitTime(100);
        return {
          name: 'Ant Design Co., Ltd.',
          useMode: 'chapter',
        };
      }}
    >
      <ProFormRadio.Group
        label="Label Layout"
        radioType="button"
        fieldProps={{
          value: formLayoutType,
          onChange: (e) => setFormLayoutType(e.target.value),
        }}
        colProps={{
          span: 20,
        }}
        options={['horizontal', 'vertical', 'inline']}
      />
      <ProFormSwitch
        colProps={{
          span: 4,
        }}
        fieldProps={{
          onChange: setGrid,
        }}
        initialValue={true}
        label="Grid Switch"
        name="grid"
      />
      <ProFormText
        name="name"
        label="Title"
        tooltip="Up to 24 characters"
        placeholder="Please enter a name"
      />
      <ProFormText colProps={{ md: 12, xl: 8 }} name="company" label="Name" />
      <ProFormDigit colProps={{ md: 12, xl: 8 }} name="phone" label="Phone" />
      <ProFormText colProps={{ md: 12, xl: 8 }} name="email" label="Email" />
      <ProFormTextArea
        colProps={{ span: 24 }}
        name="address"
        label="Detailed Work Address or Home Address"
      />
      <ProFormDatePicker
        colProps={{ xl: 8, md: 12 }}
        label="Entry Date"
        name="date"
      />
      <ProFormDateRangePicker
        colProps={{ xl: 8, md: 12 }}
        label="Work Period"
        name="dateRange"
      />
      <ProFormSelect
        colProps={{ xl: 8, md: 12 }}
        label="Position"
        name="level"
        valueEnum={{
          1: 'Front End',
          2: 'Back End',
          3: 'Full Stack',
        }}
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
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormGroup,
  ProFormList,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <ProForm onFinish={async (e) => console.log(e)}>
      <ProFormText name="name" label="姓名" />
      <ProFormList
        name="users"
        label="用户信息"
        initialValue={[
          {
            name: '1111',
          },
        ]}
        itemRender={({ listDom, action }, { record }) => {
          return (
            <ProCard
              variant="outlined"
              extra={action}
              title={record?.name}
              style={{
                marginBlockEnd: 8,
              }}
            >
              {listDom}
            </ProCard>
          );
        }}
      >
        <ProFormGroup>
          <ProFormText name="name" label="姓名" />
        </ProFormGroup>
        <ProFormList
          name="labels"
          label="用户信息"
          initialValue={[
            {
              value: '333',
              label: '333',
            },
          ]}
          copyIconProps={{
            tooltipText: '复制此项到末尾',
          }}
          deleteIconProps={{
            tooltipText: '不需要这行了',
          }}
        >
          <ProFormGroup>
            <ProFormSwitch name="is_show" label="显示名称" />
          </ProFormGroup>
          <ProFormDependency name={['is_show']}>
            {({ is_show }) => {
              console.log(is_show);
              if (!is_show) return null;
              return (
                <ProFormList
                  name="labels"
                  label="用户信息"
                  initialValue={[
                    {
                      value: '333',
                      label: '333',
                    },
                  ]}
                  copyIconProps={{
                    tooltipText: '复制此项到末尾',
                  }}
                  deleteIconProps={{
                    tooltipText: '不需要这行了',
                  }}
                >
                  <ProFormGroup>
                    <ProFormText name="value" label="值" />
                    <ProFormSwitch name="is_show" label="显示名称" />
                  </ProFormGroup>
                </ProFormList>
              );
            }}
          </ProFormDependency>
        </ProFormList>
      </ProFormList>
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProForm,
  ProFormDependency,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  return (
    <ProForm
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('Submission successful');
      }}
      initialValues={{
        name: 'Ant Design Co., Ltd.',
        name2: 'Ant Design Group',
        useMode: 'chapter',
      }}
    >
      <ProFormText
        width="md"
        name="name"
        label="Contract Customer Name"
        tooltip="Up to 24 characters"
        placeholder="Please enter a name"
      />
      <ProFormText
        width="md"
        name={['name2', 'text']}
        label="Contract Customer Name"
        tooltip="Up to 24 characters"
        placeholder="Please enter a name"
      />
      {/* ProFormDependency will automatically inject and perform shouldUpdate comparison */}
      <ProFormDependency name={['name', ['name2', 'text']]}>
        {({ name, name2 }) => {
          return (
            <ProFormSelect
              options={[
                {
                  value: 'chapter',
                  label: 'Effective after stamping',
                },
              ]}
              width="md"
              name="useMode"
              label={`Effective method agreed in the contract with "${name || ''}" and "${name2?.text || ''}"`}
            />
          );
        }}
      </ProFormDependency>
      {/* noStyle shouldUpdate is required, writing name will invalidate it */}
      <ProForm.Item noStyle shouldUpdate>
        {(form) => {
          return (
            <ProFormSelect
              options={[
                {
                  value: 'chapter',
                  label: 'Effective after stamping',
                },
              ]}
              width="md"
              name="useMode"
              label={`Effective method agreed in the contract with "${form.getFieldValue('name')}"`}
            />
          );
        }}
      </ProForm.Item>
    </ProForm>
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
  ProFormDateRangePicker,
  ProFormSelect,
} from '@ant-design/pro-components';
import { message } from 'antd';

const Demo = () => {
  return (
    <ProForm
      onFinish={async () => {
        message.success('Submission successful');
      }}
      syncToUrl={(values, type) => {
        if (type === 'get') {
          // To cooperate with transform
          // startTime and endTime are combined into createTimeRanger
          return {
            ...values,
            createTimeRanger:
              values.startTime || values.endTime
                ? [values.startTime, values.endTime]
                : undefined,
          };
        }
        // expirationTime is not synchronized to the URL
        return {
          ...values,
          expirationTime: undefined,
        };
      }}
      initialValues={{
        name: 'Ant Design Co., Ltd.',
        useMode: 'chapter',
      }}
      autoFocusFirstInput
    >
      <ProFormSelect
        options={[
          {
            value: 'chapter',
            label: 'Effective after stamping',
          },
        ]}
        width="sm"
        name="useMode"
        label="Contract Agreed Effective Method"
      />
      <ProFormDateRangePicker
        transform={(values) => {
          return {
            startTime: values ? values[0] : undefined,
            endTime: values ? values[1] : undefined,
          };
        }}
        width="md"
        name="createTimeRanger"
        label="Contract Effective Time"
      />
      <ProFormDatePicker
        width="md"
        name="expirationTime"
        label="Contract Expiration Time"
      />
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { SmileOutlined } from '@ant-design/icons';
import {
  FooterToolbar,
  PageContainer,
  ProForm,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
  ProLayout,
} from '@ant-design/pro-components';
import { Card } from 'antd';

const Demo = () => {
  return (
    <ProLayout
      fixSiderbar
      fixedHeader
      breakpoint={false}
      defaultCollapsed
      pageTitleRender={false}
      menuDataRender={() => [
        {
          path: '/one',
          icon: <SmileOutlined />,
          name: 'Level One Name',
          children: [
            {
              path: 'two',
              name: 'Level Two Name',
            },
          ],
        },
      ]}
      layout="mix"
      location={{
        pathname: '/one/two',
      }}
    >
      <PageContainer title="Input Form">
        <Card>
          <ProForm
            submitter={{
              render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
            }}
            onFinish={async (values) => console.log(values)}
          >
            <ProForm.Group>
              <ProFormText
                name="name"
                label="Contract Customer Name"
                tooltip="Up to 24 characters"
                placeholder="Please enter a name"
              />
              <ProFormText
                width="md"
                name="company"
                label="Our Company Name"
                placeholder="Please enter a name"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText
                name={['contract', 'name']}
                label="Contract Name"
                placeholder="Please enter a name"
              />
              <ProFormDateRangePicker
                name={['contract', 'createTime']}
                label="Contract Effective Time"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormSelect
                options={[
                  {
                    value: 'chapter',
                    label: 'Effective after stamping',
                  },
                ]}
                width="xs"
                name="chapter"
                label="Contract Agreed Effective Method"
              />
              <ProFormSelect
                width="xs"
                options={[
                  {
                    value: 'time',
                    label: 'Terminate after performance',
                  },
                ]}
                name="unusedMode"
                label="Contract Agreed Invalid Method"
              />
            </ProForm.Group>
            <ProFormText width="sm" name="id" label="Main Contract Number" />
            <ProFormText
              name="project"
              disabled
              label="Project Name"
              initialValue="xxxx Project"
            />
            <ProFormText
              width="xs"
              name="mangerName"
              disabled
              label="Business Manager"
              initialValue="Qitu"
            />
            <ProForm.Group>
              <ProFormSelect
                initialValue="money"
                options={[
                  {
                    value: 'money',
                    label: 'Confirm Amount',
                  },
                ]}
                width="xs"
                name="useMode"
                label="Amount Type"
              />
              <ProFormSelect
                options={[
                  {
                    value: '6',
                    label: '6%',
                  },
                  {
                    value: '12',
                    label: '12%',
                  },
                ]}
                initialValue="6"
                width="xs"
                name="taxRate"
                label="Tax Rate"
              />
              <ProFormRadio.Group
                label="Invoice Type"
                name="invoiceType"
                initialValue="Invoice"
                options={['Invoice', 'General Invoice', 'No Invoice']}
              />
            </ProForm.Group>
            <ProFormUploadButton
              extra="Supported extensions: .jpg .zip .doc .wps"
              label="Retroactive Report Attachment"
              name="file"
              title="Upload File"
            />
            <ProFormDigit
              width="xs"
              name="num"
              label="Number of Copies"
              initialValue={5}
            />
            <ProFormTextArea
              width="xl"
              label="Contract Remarks"
              name="remark"
            />
          </ProForm>
        </Card>
      </PageContainer>
    </ProLayout>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

declare module '*.module.less';

interface Window {
  DarkReader: any;
}

import { SmileOutlined } from '@ant-design/icons';
import {
  LightWrapper,
  ProForm,
  ProFormCheckbox,
  ProFormField,
  ProFormRadio,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormUploadButton,
  ProFormUploadDragger,
  StepsForm,
} from '@ant-design/pro-components';
import { ConfigProvider, Input } from 'antd';
import enUS from 'antd/lib/locale/en_US';

const Demo = () => (
  <ConfigProvider locale={enUS}>
    <StepsForm>
      <StepsForm.StepForm title="新建">
        <ProFormText name="name" />
      </StepsForm.StepForm>
    </StepsForm>

    <ProForm
      name="validate_other"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
        range: 5,
        name: 'qixian',
      }}
      onFinish={async (value) => console.log(value)}
    >
      <ProFormUploadButton
        name="upload"
        icon={<SmileOutlined />}
        label="Upload"
        title="点击上传"
        action="/upload.do"
        extra="longgggggggggggggggggggggggggggggggggg"
      />
      <ProFormRadio name="test" />
      <ProFormCheckbox name="test2" />
      <ProFormSwitch width="lg" label="是否打开" />
      <ProFormUploadDragger
        title="拖动上传"
        icon={<SmileOutlined />}
        description="支持 text"
        label="Dragger"
        name="dragger"
        fieldProps={{
          showUploadList: true,
        }}
      />
      <LightWrapper valuePropName="value">test</LightWrapper>
      <LightWrapper valuePropName="value">test</LightWrapper>
      <ProFormSlider name="range" label="范围" />
      <ProFormField>test</ProFormField>
      <ProFormField>
        <Input />
      </ProFormField>
    </ProForm>
  </ConfigProvider>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormMoney,
  ProFormSwitch,
} from '@ant-design/pro-components';
import { message } from 'antd';
import { useRef, useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();

  const [readonly, setReadonly] = useState(false);
  return (
    <>
      <ProFormSwitch
        checkedChildren="On"
        unCheckedChildren="Off"
        label="Read Only"
        fieldProps={{
          onChange: setReadonly,
        }}
      />
      <ProForm<{
        name: string;
        company?: string;
        useMode?: string;
      }>
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          const val1 = await formRef.current?.validateFields();
          console.log('validateFields:', val1);
          const val2 =
            await formRef.current?.validateFieldsReturnFormatValue?.();
          console.log('validateFieldsReturnFormatValue:', val2);
          message.success('Submission successful');
        }}
        formRef={formRef}
        params={{ id: '100' }}
        formKey="base-form-use-demo"
        readonly={readonly}
        request={async () => {
          await waitTime(100);
          return {
            name: 'Ant Design Co., Ltd.',
            useMode: 'chapter',
          };
        }}
        autoFocusFirstInput
      >
        <ProFormMoney
          label="No Symbol"
          name="amount0"
          fieldProps={{
            moneySymbol: false,
          }}
          locale="en-US"
          initialValue={22.22}
          min={0}
          width="lg"
        />
        <ProFormMoney
          label="Width"
          name="amount1"
          locale="en-US"
          initialValue={22.22}
          min={0}
          width="lg"
        />
        <ProFormMoney
          label="Minimum Amount 0"
          name="amount2"
          locale="en-US"
          initialValue={22.22}
          min={0}
          trigger="onBlur"
        />
        <ProFormMoney
          label="No Limit"
          name="amount3"
          locale="en-GB"
          initialValue={22.22}
        />
        <ProFormMoney
          label="Follow Global Locale"
          name="amount4"
          initialValue={22.22}
        />
        <ProFormMoney
          label="Locale ms-MY"
          name="amount-ms-My"
          locale="ms-MY"
          initialValue={-22.22}
        />
        <ProFormMoney
          label="Locale zh-TW"
          name="amount-zh-TW"
          locale="zh-TW"
          initialValue={22.22}
        />
        <ProFormMoney
          label="Custom Symbol"
          name="amount5"
          initialValue={22.22}
          customSymbol="💰"
        />
        <ProFormMoney
          label="Precision"
          name="amount6"
          initialValue={2222222222.222222}
          fieldProps={{ precision: 2 }}
          customSymbol="💰"
        />
        <ProFormMoney
          label="Precision 0"
          name="amount6"
          initialValue={2222222222.222222}
          fieldProps={{ precision: 0 }}
          customSymbol="💰"
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

import {
  FormControlRender,
  pickControlPropsWithId,
} from '@ant-design/pro-components';
import { Button, Checkbox, Form } from 'antd';
import React, { useEffect } from 'react';

const App: React.FC = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.validateFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form form={form} onFinish={console.log}>
      <Form.Item
        name={'text1'}
        label="文本框（没错误边框）"
        rules={[{ required: true }]}
      >
        <textarea />
      </Form.Item>
      <Form.Item
        name="text2"
        label="文本框（添加自定义的错误边框）"
        rules={[{ required: true }]}
      >
        <FormControlRender>
          {(itemProps) => {
            return (
              <textarea
                style={{
                  borderColor: itemProps.status === 'error' ? 'red' : undefined,
                }}
                {...pickControlPropsWithId(itemProps)}
              />
            );
          }}
        </FormControlRender>
      </Form.Item>
      <Form.Item
        valuePropName="checked"
        name="check"
        label="复选框"
        rules={[{ required: true }]}
      >
        <Checkbox>是否</Checkbox>
      </Form.Item>
      <Form.Item
        valuePropName="checked"
        name="check2"
        label="复选框"
        rules={[{ required: true }]}
      >
        <FormControlRender>
          {(itemProps) => {
            return (
              <Checkbox
                {...itemProps}
                style={{
                  color: itemProps.status === 'error' ? 'red' : undefined,
                }}
              >
                是否
              </Checkbox>
            );
          }}
        </FormControlRender>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormCascader,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormList,
  ProFormMoney,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormTreeSelect,
} from '@ant-design/pro-components';
import { TreeSelect, message } from 'antd';
import moment from 'dayjs';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

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
  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();
  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        const val1 = await formRef.current?.validateFields();
        console.log('validateFields:', val1);
        const val2 = await formRef.current?.validateFieldsReturnFormatValue?.();
        console.log('validateFieldsReturnFormatValue:', val2);
        message.success('Submission successful');
      }}
      formRef={formRef}
      params={{ id: '100' }}
      formKey="base-form-use-demo"
      dateFormatter={(value, valueType) => {
        console.log('---->', value, valueType);
        return value.format('YYYY/MM/DD HH:mm:ss');
      }}
      request={async () => {
        await waitTime(1500);
        return {
          name: 'Ant Design Co., Ltd.',
          useMode: 'chapter',
        };
      }}
      autoFocusFirstInput
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          required
          dependencies={[['contract', 'name']]}
          addonBefore={<a>How to get the customer name?</a>}
          addonAfter={<a>Click to see more</a>}
          label="Contract Customer Name"
          tooltip="Up to 24 characters"
          placeholder="Please enter a name"
          rules={[{ required: true, message: 'This is a required field' }]}
        />
        <ProFormText
          width="md"
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDigit name="count" label="Number of People" width="lg" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name={['contract', 'name']}
          width="md"
          label="Contract Name"
          placeholder="Please enter a name"
        />
        <ProFormDateRangePicker
          width="md"
          name={['contract', 'createTime']}
          label="Contract Effective Time"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          options={[
            {
              value: 'chapter',
              label: 'Effective after stamping',
            },
          ]}
          readonly
          width="xs"
          cacheForSwr
          name="useMode"
          label="Contract Agreed Effective Method"
        />
        <ProFormSelect.SearchSelect
          width="xs"
          options={[
            {
              value: 'time',
              label: 'Terminate after performance',
              type: 'time',
              options: [
                {
                  value: 'time1',
                  label: 'Terminate after performance 1',
                },
                {
                  value: 'time2',
                  label: 'Terminate after performance 2',
                },
              ],
            },
          ]}
          name="unusedMode"
          label="Contract Agreed Invalid Method"
        />
        <ProFormMoney
          width="md"
          name="money"
          label="Contract Agreed Amount"
          fieldProps={{
            numberPopoverRender: true,
          }}
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="Main Contract Number" />
      <ProFormText
        name="project"
        width="md"
        disabled
        label="Project Name"
        initialValue="xxxx Project"
      />
      <ProFormTextArea
        colProps={{ span: 24 }}
        name="address"
        label="Detailed Work Address or Home Address"
      />
      <ProFormText
        width="xs"
        name="mangerName"
        disabled
        label="Business Manager"
        initialValue="Qitu"
      />
      <ProFormCascader
        width="md"
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
        name="areaList"
        label="Area"
        initialValue={['zhejiang', 'hangzhou', 'xihu']}
        addonAfter={'qixian'}
      />
      <ProFormTreeSelect
        initialValue={['0-0-0']}
        label="Tree Select"
        width={600}
        fieldProps={{
          fieldNames: {
            label: 'title',
          },
          treeData,
          treeCheckable: true,
          showCheckedStrategy: TreeSelect.SHOW_PARENT,
          placeholder: 'Please select',
        }}
      />
      <ProFormDatePicker
        name="date"
        transform={(value) => {
          return {
            date: moment(value).unix(),
          };
        }}
      />
      <ProFormList name="datas">
        {() => {
          return (
            <>
              <ProFormDatePicker
                name="date"
                transform={(value) => {
                  return {
                    date: moment(value).unix(),
                  };
                }}
              />

              <ProFormList name="innerDatas">
                {() => {
                  return (
                    <>
                      <ProFormDatePicker
                        name="date"
                        transform={(value) => {
                          return {
                            date: moment(value).unix(),
                          };
                        }}
                      />
                      <ProFormList name="innerDatas">
                        {() => {
                          return (
                            <>
                              <ProFormDatePicker
                                name="date"
                                transform={(value) => {
                                  return {
                                    date: moment(value).unix(),
                                  };
                                }}
                              />
                              <ProFormList name="innerDatas">
                                {() => {
                                  return (
                                    <>
                                      <ProFormDatePicker
                                        name="date"
                                        transform={(value) => {
                                          return {
                                            date: moment(value).unix(),
                                          };
                                        }}
                                      />
                                    </>
                                  );
                                }}
                              </ProFormList>
                            </>
                          );
                        }}
                      </ProFormList>
                    </>
                  );
                }}
              </ProFormList>
            </>
          );
        }}
      </ProFormList>
    </ProForm>
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
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [loading, setLoading] = useState(false);
  return (
    <ProCard>
      <StepsForm
        onFinish={async () => {
          setLoading(true);
          await waitTime(1000);
          message.success('Submission successful');
          setLoading(false);
        }}
        submitter={{
          render: ({ form, onSubmit, step, onPre }) => {
            return [
              <Button
                key="rest"
                onClick={() => {
                  form?.resetFields();
                }}
              >
                Reset
              </Button>,
              step > 0 && (
                <Button
                  key="pre"
                  onClick={() => {
                    onPre?.();
                  }}
                >
                  Previous
                </Button>
              ),
              <Button
                key="next"
                loading={loading}
                type="primary"
                onClick={() => {
                  onSubmit?.();
                }}
              >
                Next
              </Button>,
            ];
          },
        }}
        formProps={{
          validateMessages: {
            required: 'This field is required',
          },
        }}
      >
        <StepsForm.StepForm
          name="base"
          title="Create Experiment"
          onFinish={async () => {
            setLoading(true);
            await waitTime(2000);
            setLoading(false);
            return true;
          }}
        >
          <ProFormText
            name="name"
            label="Experiment Name"
            width="md"
            tooltip="Up to 24 characters, used as a unique id"
            placeholder="Please enter a name"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date" label="Date" />
          <ProFormDateRangePicker name="dateTime" label="Time Range" />
          <ProFormTextArea
            name="remark"
            label="Remarks"
            width="lg"
            placeholder="Please enter remarks"
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm name="checkbox" title="Set Parameters">
          <ProFormCheckbox.Group
            name="checkbox"
            label="Migration Type"
            width="lg"
            options={[
              'Structural Migration',
              'Full Migration',
              'Incremental Migration',
              'Full Verification',
            ]}
          />
          <ProForm.Group>
            <ProFormText name="dbName" label="Business DB Username" />
            <ProFormDatePicker
              name="datetime"
              label="Record Retention Time"
              width="sm"
            />
          </ProForm.Group>
          <ProFormDependency name={['dbName']}>
            {({ dbName }) => {
              return (
                <ProFormCheckbox.Group
                  name="checkbox"
                  label="Migration Type"
                  options={
                    dbName
                      ? ['Complete LOB', 'Do Not Sync LOB', 'Restricted LOB']
                      : ['Complete LOB']
                  }
                />
              );
            }}
          </ProFormDependency>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="Publish Experiment">
          <ProFormCheckbox.Group
            name="checkbox"
            label="Deployment Units"
            rules={[
              {
                required: true,
              },
            ]}
            options={[
              'Deployment Unit 1',
              'Deployment Unit 2',
              'Deployment Unit 3',
            ]}
          />
          <ProFormSelect
            label="Deployment Group Strategy"
            name="remark"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue="1"
            width="md"
            options={[
              {
                value: '1',
                label: 'Strategy One',
              },
              { value: '2', label: 'Strategy Two' },
            ]}
          />
          <ProFormSelect
            label="Pod Scheduling Strategy"
            name="remark2"
            initialValue="2"
            width="md"
            options={[
              {
                value: '1',
                label: 'Strategy One',
              },
              { value: '2', label: 'Strategy Two' },
            ]}
          />
        </StepsForm.StepForm>
      </StepsForm>
    </ProCard>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  AlipayCircleOutlined,
  LockOutlined,
  PlusOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  DrawerForm,
  LightFilter,
  LoginForm,
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  QueryFilter,
  StepsForm,
} from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';
import { useState } from 'react';

const iconStyles = {
  marginInlineStart: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const Components = {
    ProForm,
    ModalForm,
    DrawerForm,
    QueryFilter,
    LightFilter,
    StepsForm,
    LoginForm,
  };
  const [type, setType] = useState<keyof typeof Components>('ProForm');

  if (type === 'StepsForm') {
    return (
      <>
        <ProFormRadio.Group
          style={{
            margin: 16,
          }}
          radioType="button"
          fieldProps={{
            value: type,
            onChange: (e) => setType(e.target.value),
          }}
          options={[
            'LightFilter',
            'ProForm',
            'ModalForm',
            'DrawerForm',
            'QueryFilter',
            'StepsForm',
            'LoginForm',
          ]}
        />
        <StepsForm
          onFinish={async (values: any) => {
            await waitTime(2000);
            console.log(values);
            message.success('Submission successful');
          }}
        >
          <StepsForm.StepForm title="Step One">
            <ProForm.Group>
              <ProFormText
                width="md"
                name="name"
                label="Contract Customer Name"
                tooltip="Up to 24 characters"
                placeholder="Please enter a name"
              />
              <ProFormText
                width="md"
                name="company"
                label="Our Company Name"
                placeholder="Please enter a name"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText
                name={['contract', 'name']}
                width="md"
                label="Contract Name"
                placeholder="Please enter a name"
              />
              <ProFormDateRangePicker
                width="md"
                name={['contract', 'createTime']}
                label="Contract Effective Time"
              />
            </ProForm.Group>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="Step Two">
            <ProForm.Group>
              <ProFormSelect
                options={[
                  {
                    value: 'chapter',
                    label: 'Effective after stamping',
                  },
                ]}
                readonly
                width="xs"
                name="useMode"
                label="Contract Agreed Effective Method"
              />
              <ProFormSelect
                width="xs"
                options={[
                  {
                    value: 'time',
                    label: 'Terminate after performance',
                  },
                ]}
                name="unusedMode"
                label="Contract Agreed Invalid Method"
              />
            </ProForm.Group>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="Step Three">
            <ProFormText width="sm" name="id" label="Main Contract Number" />
            <ProFormText
              name="project"
              width="md"
              disabled
              label="Project Name"
              initialValue="xxxx Project"
            />
            <ProFormText
              width="xs"
              name="mangerName"
              disabled
              label="Business Manager"
              initialValue="Qitu"
            />
          </StepsForm.StepForm>
        </StepsForm>
      </>
    );
  }

  const FormComponents = Components[type as 'LoginForm'];

  if (type === 'LoginForm') {
    return (
      <>
        <ProFormRadio.Group
          style={{
            margin: 16,
          }}
          radioType="button"
          fieldProps={{
            value: type,
            onChange: (e) => setType(e.target.value),
          }}
          options={[
            'LightFilter',
            'ProForm',
            'ModalForm',
            'DrawerForm',
            'QueryFilter',
            'StepsForm',
            'LoginForm',
          ]}
        />
        <FormComponents
          title="Github"
          subTitle="The world's largest code hosting platform"
          actions={
            <Space>
              Other login methods
              <AlipayCircleOutlined style={iconStyles} />
              <TaobaoCircleOutlined style={iconStyles} />
              <WeiboCircleOutlined style={iconStyles} />
            </Space>
          }
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'Username: admin or user'}
            rules={[
              {
                required: true,
                message: 'Please enter your username!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'Password: ant.design'}
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
            ]}
          />
        </FormComponents>
      </>
    );
  }

  return (
    <>
      <ProFormRadio.Group
        style={{
          margin: 16,
        }}
        radioType="button"
        fieldProps={{
          value: type,
          onChange: (e) => setType(e.target.value),
        }}
        options={[
          'LightFilter',
          'ProForm',
          'ModalForm',
          'DrawerForm',
          'QueryFilter',
          'StepsForm',
          'LoginForm',
        ]}
      />
      <div
        style={{
          margin: 24,
        }}
      >
        <FormComponents
          // @ts-ignore
          labelWidth="auto"
          trigger={
            <Button type="primary">
              <PlusOutlined />
              New Form
            </Button>
          }
          onFinish={async (values: any) => {
            await waitTime(2000);
            console.log(values);
            message.success('Submission successful');
          }}
          initialValues={{
            name: 'Ant Design Co., Ltd.',
            useMode: 'chapter',
          }}
        >
          <ProForm.Group>
            <ProFormText
              width="md"
              name="name"
              label="Contract Customer Name"
              tooltip="Up to 24 characters"
              placeholder="Please enter a name"
            />
            <ProFormText
              width="md"
              name="company"
              label="Our Company Name"
              placeholder="Please enter a name"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              name={['contract', 'name']}
              width="md"
              label="Contract Name"
              placeholder="Please enter a name"
            />
            <ProFormDateRangePicker
              width="md"
              name={['contract', 'createTime']}
              label="Contract Effective Time"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              options={[
                {
                  value: 'chapter',
                  label: 'Effective after stamping',
                },
              ]}
              readonly
              width="xs"
              name="useMode"
              label="Contract Agreed Effective Method"
            />
            <ProFormSelect
              width="xs"
              options={[
                {
                  value: 'time',
                  label: 'Terminate after performance',
                },
              ]}
              name="unusedMode"
              label="Contract Agreed Invalid Method"
            />
          </ProForm.Group>
          <ProFormText width="sm" name="id" label="Main Contract Number" />
          <ProFormText
            name="project"
            width="md"
            disabled
            label="Project Name"
            initialValue="xxxx Project"
          />
          <ProFormText
            width="xs"
            name="mangerName"
            disabled
            label="Business Manager"
            initialValue="Qitu"
          />
        </FormComponents>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormDatePicker,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, message, Space } from 'antd';
import dayjs from 'dayjs';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const formRef = useRef<ProFormInstance>();
  const onFill = () => {
    formRef?.current?.setFieldsValue({
      name: '张三',
      company: '蚂蚁金服',
    });
  };

  const getCompanyName = () => {
    message.info(`公司名称为 "${formRef?.current?.getFieldValue('company')}"`);
  };

  const getFormatValues = () => {
    console.log(
      '格式化后的所有数据：',
      formRef.current?.getFieldsFormatValue?.(),
    );
  };

  const validateAndGetFormatValue = () => {
    formRef.current?.validateFieldsReturnFormatValue?.().then((values) => {
      console.log('校验表单并返回格式化后的所有数据：', values);
    });
  };

  return (
    <ProForm
      title="新建表单"
      formRef={formRef}
      submitter={{
        render: (props, doms) => {
          return [
            ...doms,
            <Button htmlType="button" onClick={onFill} key="edit">
              一键填写
            </Button>,
            <Button htmlType="button" onClick={getCompanyName} key="read">
              读取公司
            </Button>,
            <Space.Compact key="refs" style={{ display: 'block' }}>
              <Button htmlType="button" onClick={getFormatValues} key="format">
                获取格式化后的所有数据
              </Button>
              <Button
                htmlType="button"
                onClick={validateAndGetFormatValue}
                key="format2"
              >
                校验表单并返回格式化后的所有数据
              </Button>
            </Space.Compact>,
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
      <ProFormText
        width="md"
        name="name"
        label="签约客户名称"
        tooltip="最长为 24 位"
        placeholder="请输入名称"
      />

      <ProFormText
        width="md"
        name="company"
        label="我方公司名称"
        placeholder="请输入名称"
      />
      <ProFormDatePicker name="date" initialValue={dayjs('2021-08-09')} />
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProCard,
  ProForm,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';

// 弹窗表单
const FormModal = () => {
  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title="新建表单"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          新建表单
        </Button>
      }
      onFinish={async (values) => {
        console.log(values);
        alert(JSON.stringify(values));
        return true;
      }}
    >
      <ProFormText width="sm" name="id" label="主合同编号" />
    </ModalForm>
  );
};

const Demo = () => {
  return (
    <div>
      <div>
        在form外边可以
        <FormModal />
      </div>
      <div>
        在form里面可以
        <ProForm layout="horizontal">
          <FormModal />
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
            initialValue={[{ name: '颜色', items: [{ name: '红' }] }]}
          >
            <ProFormText
              style={{ padding: 0 }}
              width="md"
              name="name"
              label="规格名"
            />
            <ProForm.Item
              isListField
              style={{ marginBlockEnd: 0 }}
              label="规格值"
            >
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
                <div>
                  在内层formlist拿不到
                  <FormModal />
                </div>
              </ProFormList>
            </ProForm.Item>
            <div>
              在外层formlist拿不到
              <FormModal />
            </div>
          </ProFormList>
        </ProForm>
      </div>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormCascader,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormList,
  ProFormMoney,
  ProFormSelect,
  ProFormText,
  ProFormTreeSelect,
} from '@ant-design/pro-components';
import { TreeSelect } from 'antd';
import dayjs from 'dayjs';
import { useRef } from 'react';

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
  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();
  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      formRef={formRef}
      params={{ id: '100' }}
      formKey="base-form-use-demo"
      dateFormatter={(value, valueType) => {
        console.log('---->', value, valueType);
        return value.format('YYYY/MM/DD HH:mm:ss');
      }}
      autoFocusFirstInput
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          required
          dependencies={[['contract', 'name']]}
          addonBefore={<a>客户名称应该怎么获得？</a>}
          addonAfter={<a>点击查看更多</a>}
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
          rules={[{ required: true, message: '这是必填项' }]}
        />
        <ProFormText
          width="md"
          name="company"
          label="我方公司名称"
          placeholder="请输入名称"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDigit name="count" label="人数" width="lg" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name={['contract', 'name']}
          width="md"
          label="合同名称"
          placeholder="请输入名称"
        />
        <ProFormDateRangePicker
          width="md"
          name={['contract', 'createTime']}
          label="合同生效时间"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          options={[
            {
              value: 'chapter',
              label: '盖章后生效',
            },
          ]}
          readonly
          width="xs"
          cacheForSwr
          name="useMode"
          label="合同约定生效方式"
        />
        <ProFormSelect.SearchSelect
          width="xs"
          options={[
            {
              value: 'time',
              label: '履行完终止',
              type: 'time',
              options: [
                {
                  value: 'time1',
                  label: '履行完终止1',
                },
                {
                  value: 'time2',
                  label: '履行完终止2',
                },
              ],
            },
          ]}
          name="unusedMode"
          label="合同约定失效方式"
        />
        <ProFormMoney
          width="md"
          name="money"
          label="合同约定金额"
          fieldProps={{
            numberPopoverRender: true,
          }}
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="主合同编号" />
      <ProFormText
        name="project"
        width="md"
        disabled
        label="项目名称"
        initialValue="xxxx项目"
      />
      <ProFormText
        width="xs"
        name="mangerName"
        disabled
        label="商务经理"
        initialValue="启途"
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
        name="areaList"
        label="区域"
        initialValue={['zhejiang', 'hangzhou', 'xihu']}
        addonAfter={'qixian'}
      />
      <ProFormTreeSelect
        initialValue={['0-0-0']}
        label="树形下拉选择器"
        width={600}
        request={async () => treeData}
        fieldProps={{
          fieldNames: {
            label: 'title',
          },
          treeCheckable: true,
          showCheckedStrategy: TreeSelect.SHOW_PARENT,
          placeholder: 'Please select',
        }}
      />
      <ProFormDatePicker
        name="date"
        transform={(value) => {
          return {
            date: dayjs(value).unix(),
          };
        }}
      />
      <ProFormList
        name="datas"
        initialValue={[{ date: '2022-10-12 10:00:00' }]}
      >
        {() => {
          return (
            <ProFormDatePicker
              name="date"
              transform={(value) => {
                return {
                  date: dayjs(value).unix(),
                };
              }}
            />
          );
        }}
      </ProFormList>
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { SmileOutlined } from '@ant-design/icons';
import {
  ProForm,
  ProFormCheckbox,
  ProFormField,
  ProFormRadio,
  ProFormSlider,
  ProFormSwitch,
  ProFormUploadButton,
  ProFormUploadDragger,
} from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useRef } from 'react';

const Demo = () => {
  const formRef = useRef();
  return (
    <ProForm
      name="validate_other"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
        range: 5,
        name: 'qixian',
      }}
      formRef={formRef}
      onFinish={async (value) => console.log(value)}
    >
      <ProFormUploadButton
        name="upload"
        icon={<SmileOutlined />}
        label="Upload"
        title="点击上传"
        action="/upload.do"
        extra="longgggggggggggggggggggggggggggggggggg"
      />
      <ProFormRadio name="test" />
      <ProFormCheckbox name="test2" />
      <ProFormSwitch width="lg" label="是否打开" />
      <ProFormUploadDragger
        title="拖动上传"
        icon={<SmileOutlined />}
        description="支持 text"
        label="Dragger"
        name="dragger"
        fieldProps={{
          showUploadList: true,
        }}
      />
      <ProFormSlider name="range" label="范围" />
      <ProFormField>test</ProFormField>
      <ProFormField>
        <Input />
      </ProFormField>
      <ProForm.Item>
        <Button>查看记录数</Button>
        <span>共有200条</span>
      </ProForm.Item>
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  FormControlFC,
  FormItemRender,
  ProForm,
  ProFormItemRender,
  WithControlPropsType,
  pickControlProps,
  pickControlPropsWithId,
  useControlModel,
} from '@ant-design/pro-components';
import { Checkbox, Input, Select } from 'antd';

const SingletonA = (
  props: WithControlPropsType<{
    title: string;
  }>,
) => {
  const model = useControlModel(props);
  return (
    <>
      <span>{props.title}</span>
      <Input {...model} placeholder="直接使用useControlModel" />
    </>
  );
};
const SingletonB = (
  props: WithControlPropsType<{
    title: string;
  }>,
) => {
  const model = useControlModel(props);
  return (
    <>
      <span>{props.title}</span>
      <Select
        {...model}
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
        ]}
      />
    </>
  );
};

const CustomInput = (
  props: WithControlPropsType<{
    title: string;
    description: string;
  }>,
) => {
  const model = useControlModel(props, [
    {
      name: 'a',
      valuePropName: 'checked',
    },
    {
      name: 'b',
    },
  ]);

  return (
    <div>
      <div>title: {props.title}</div>
      <Checkbox {...model.a} />
      <div>description: {props.description}</div>
      <Input
        {...model.b}
        placeholder="可以通过第二个参数达到使用多个实例的情况"
      />
    </div>
  );
};

const CustomInput2: FormControlFC<{
  title: string;
}> = (props) => {
  const model = useControlModel(props, ['a', 'b']);
  return (
    <div>
      <div>{props.title}</div>
      <Input {...model.a} />
    </div>
  );
};

const Demo = () => {
  const [form] = ProForm.useForm();

  return (
    <div>
      <ProForm
        form={form}
        onValuesChange={console.log}
        onFinish={async (values) => {
          console.log(values);
          return;
        }}
      >
        <ProForm.Item name={'SingletonA'}>
          <SingletonA title="单实例A" />
        </ProForm.Item>
        <ProForm.Item name={'SingletonB'}>
          <SingletonB title="单实例B" />
        </ProForm.Item>
        <ProForm.Item name={'customInput'} label="多实例">
          <CustomInput
            title="customInput-title"
            description="customInput-desc"
          />
        </ProForm.Item>
        <ProForm.Item name={'FormControlFC'} label="使用FormControlFC类型定义">
          <CustomInput2 title="FormControlFC title" />
        </ProForm.Item>
        <ProFormItemRender name={'inputA'}>
          {(itemProps) => {
            return (
              <div id={itemProps.id}>
                <h3>使用pickControlProps提取表单项属性</h3>
                <Input {...pickControlProps(itemProps)} />
              </div>
            );
          }}
        </ProFormItemRender>
        <ProFormItemRender name={'inputB'}>
          {(itemProps) => {
            return (
              <div>
                <h3>使用pickControlPropsWithId提取表单项属性（包括id）</h3>
                <Input {...pickControlPropsWithId(itemProps)} />
              </div>
            );
          }}
        </ProFormItemRender>
        <ProFormItemRender name={'selectA'}>
          {(itemProps) => {
            return (
              <div>
                <h3>自定义标题：</h3>
                <Select
                  {...pickControlProps(itemProps)}
                  options={[{ label: 'A', value: 'a' }]}
                />
              </div>
            );
          }}
        </ProFormItemRender>
        <FormItemRender
          label="FormItemRender"
          name={'selectB'}
          initialValue={'xxx'}
        >
          {(itemProps) => {
            return (
              <div>
                <Input {...pickControlPropsWithId(itemProps)} />
              </div>
            );
          }}
        </FormItemRender>
      </ProForm>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import {
  ProForm,
  ProFormCheckbox,
  ProFormRadio,
  ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = () => {
  return (
    <>
      <ProForm
        {...layout}
        layout="horizontal"
        submitter={false}
        name="basic"
        initialValues={{ remember: true }}
      >
        <ProFormText label="Name" name="name" />

        <ProFormText.Password
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        />
        <ProFormCheckbox name="remember" {...tailLayout}>
          Remember me
        </ProFormCheckbox>
        <ProFormRadio name="remember" {...tailLayout}>
          Remember me
        </ProFormRadio>
        <ProForm.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </ProForm.Item>
      </ProForm>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { Button, Form, Input, Select, Space } from 'antd';
import React from 'react';

export function PriceInput() {
  return (
    <Space size={0}>
      <Form.Item noStyle name={['price', 'number']}>
        <Input type="text" style={{ width: 100 }} />
      </Form.Item>
      <Form.Item noStyle name={['price', 'currency']}>
        <Select style={{ width: 80, margin: '0 8px' }}>
          <Select.Option value="rmb">RMB</Select.Option>
          <Select.Option value="dollar">Dollar</Select.Option>
        </Select>
      </Form.Item>
    </Space>
  );
}

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

  const checkPrice = (_: any, value: { number: number }) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Price must be greater than zero!'));
  };

  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb',
        },
      }}
    >
      <Form.Item name="price" label="Price" rules={[{ validator: checkPrice }]}>
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

import {
  WithControlPropsType,
  useControlModel,
} from '@ant-design/pro-components';
import { Button, Form, Input, Select } from 'antd';
import React from 'react';

export function PriceInput(
  props: WithControlPropsType<{
    // other props...
  }>,
) {
  const model = useControlModel(props, ['number', 'currency']);

  return (
    <span>
      <Input type="text" {...model.number} style={{ width: 100 }} />
      <Select {...model.currency} style={{ width: 80, margin: '0 8px' }}>
        <Select.Option value="rmb">RMB</Select.Option>
        <Select.Option value="dollar">Dollar</Select.Option>
      </Select>
    </span>
  );
}

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

  const checkPrice = (_: any, value: { number: number }) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Price must be greater than zero!'));
  };

  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb',
        },
      }}
    >
      <Form.Item name="price" label="Price" rules={[{ validator: checkPrice }]}>
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

import { ProForm, ProFormSelect } from '@ant-design/pro-components';
import { message } from 'antd';

const Demo = () => {
  return (
    <ProForm
      onFinish={async () => {
        message.success('提交成功');
      }}
      onValuesChange={(v) => console.log(v)}
    >
      <ProFormSelect
        options={[
          {
            value: 'chapter',
            label: '盖章后生效',
          },
        ]}
        width="sm"
        name="useMode"
        label="合同约定生效方式"
        fieldProps={{
          labelInValue: true,
        }}
        rules={[
          {
            required: true,
            message: '请选择',
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

import { Button, Form, Input, Select } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

type Currency = 'rmb' | 'dollar';

interface PriceValue {
  number?: number;
  currency?: Currency;
}

interface PriceInputProps {
  value?: PriceValue;
  onChange?: (value: PriceValue) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState<Currency>('rmb');

  const triggerChange = (changedValue: {
    number?: number;
    currency?: Currency;
  }) => {
    onChange?.({ number, currency, ...value, ...changedValue });
  };

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(e.target.value || '0', 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!('number' in value)) {
      setNumber(newNumber);
    }
    triggerChange({ number: newNumber });
  };

  const onCurrencyChange = (newCurrency: Currency) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({ currency: newCurrency });
  };

  return (
    <span>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{ width: 100 }}
      />
      <Select
        value={value.currency || currency}
        style={{ width: 80, margin: '0 8px' }}
        onChange={onCurrencyChange}
      >
        <Option value="rmb">RMB</Option>
        <Option value="dollar">Dollar</Option>
      </Select>
    </span>
  );
};

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

  const checkPrice = (_: any, value: { number: number }) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Price must be greater than zero!'));
  };

  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb',
        },
      }}
    >
      <Form.Item name="price" label="Price" rules={[{ validator: checkPrice }]}>
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

﻿import { BetaSchemaForm } from '@ant-design/pro-components';
import { useEffect, useRef, useState } from 'react';

const Demo = () => {
  const targetRef = useRef();

  const [requestLibData, setRequestLibData] = useState(0);
  useEffect(() => {
    // 更新requestLibData，并引发reRender
    setTimeout(() => {
      setRequestLibData(1);
    });
  }, []);
  // 查看reRender后的ref标记
  useEffect(() => console.log('targetRef.current1', targetRef.current));
  // 查看reRender后的ref标记
  useEffect(() => {
    setTimeout(() => {
      console.log('targetRef.current1', targetRef.current);
    }, 1000);
  });
  return (
    <BetaSchemaForm
      request={async () => ({})}
      params={{ requestLibData }}
      columns={[
        {
          title: 'money',
          dataIndex: 'money',
          valueType: 'money',
        },
      ]}
      formRef={targetRef}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProForm, ProFormRadio, ProFormText } from '@ant-design/pro-components';
import { Col, Row, Space, message } from 'antd';
import { useState } from 'react';

type LayoutType = Parameters<typeof ProForm>[0]['layout'];
const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [formLayoutType, setFormLayoutType] = useState<LayoutType>(
    LAYOUT_TYPE_HORIZONTAL,
  );

  const formItemLayout =
    formLayoutType === LAYOUT_TYPE_HORIZONTAL
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      {...formItemLayout}
      layout={formLayoutType}
      submitter={{
        render: (props, doms) => {
          return formLayoutType === LAYOUT_TYPE_HORIZONTAL ? (
            <Row>
              <Col span={14} offset={4}>
                <Space>{doms}</Space>
              </Col>
            </Row>
          ) : (
            doms
          );
        },
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('Submission successful');
      }}
      params={{}}
      request={async () => {
        await waitTime(100);
        return {
          name: 'Ant Design Co., Ltd.',
          useMode: 'chapter',
        };
      }}
    >
      <ProFormRadio.Group
        style={{
          margin: 16,
        }}
        label="Label Layout"
        radioType="button"
        fieldProps={{
          value: formLayoutType,
          onChange: (e) => setFormLayoutType(e.target.value),
        }}
        options={['horizontal', 'vertical', 'inline']}
      />
      <ProFormText
        width="md"
        name="name"
        label="Contract Customer Name"
        tooltip="Up to 24 characters"
        placeholder="Please enter a name"
      />
      <ProFormText
        width="md"
        name="company"
        label="Our Company Name"
        placeholder="Please enter a name"
      />
      <ProFormText
        name={['contract', 'name']}
        width="md"
        label="Contract Name"
        placeholder="Please enter a name"
      />
    </ProForm>
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
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { Input, message } from 'antd';
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
  decs?: string;
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: 624691229,
    title: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: 1590481162000,
  },
];

const columns: ProColumns<DataSourceType>[] = [
  {
    title: '活动名称',
    dataIndex: 'title',
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
    formItemRender: (_, { record }) => {
      console.log('----===>', record);
      return <Input addonBefore={(record as any)?.addonBefore} />;
    },
  },
  {
    title: '操作',
    valueType: 'option',
  },
];

const Demo = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id),
  );
  return (
    <ProForm<{
      name: string;
      company: string;
    }>
      grid
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('提交成功');
      }}
      initialValues={{
        name: '蚂蚁设计有限公司',
        useMode: 'chapter',
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
        />
        <ProFormText
          width="md"
          name="company"
          label="我方公司名称"
          placeholder="请输入名称"
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="主合同编号" />
      <ProForm.Item
        label="数组数据"
        name="dataSource"
        initialValue={defaultData}
        trigger="onValuesChange"
      >
        <EditableProTable<DataSourceType>
          rowKey="id"
          toolBarRender={false}
          columns={columns}
          recordCreatorProps={{
            newRecordType: 'dataSource',
            position: 'top',
            record: () => ({
              id: Date.now(),
              addonBefore: 'ccccccc',
              decs: 'testdesc',
            }),
          }}
          editable={{
            type: 'multiple',
            editableKeys,
            onChange: setEditableRowKeys,
            actionRender: (row, _, dom) => {
              return [dom.delete];
            },
          }}
        />
      </ProForm.Item>
    </ProForm>
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
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Col, Row, Space, message } from 'antd';
import type { FormLayout } from 'antd/lib/form/Form';
import { useState } from 'react';

const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [formLayoutType, setFormLayoutType] = useState<FormLayout>(
    LAYOUT_TYPE_HORIZONTAL,
  );

  const [grid, setGrid] = useState(true);

  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      layout={formLayoutType}
      grid={grid}
      rowProps={{
        gutter: [16, formLayoutType === 'inline' ? 16 : 0],
      }}
      submitter={{
        render: (props, doms) => {
          return formLayoutType === LAYOUT_TYPE_HORIZONTAL ? (
            <Row>
              <Col span={14} offset={4}>
                <Space>{doms}</Space>
              </Col>
            </Row>
          ) : (
            doms
          );
        },
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('Submission successful');
      }}
      params={{}}
      request={async () => {
        await waitTime(100);
        return {
          name: 'Ant Design Co., Ltd.',
          useMode: 'chapter',
        };
      }}
    >
      <ProFormRadio.Group
        label="Label Layout"
        radioType="button"
        fieldProps={{
          value: formLayoutType,
          onChange: (e) => setFormLayoutType(e.target.value),
        }}
        colProps={{
          span: 20,
        }}
        options={['horizontal', 'vertical', 'inline']}
      />
      <ProFormSwitch
        colProps={{
          span: 4,
        }}
        fieldProps={{
          onChange: setGrid,
        }}
        initialValue={true}
        label="Grid Switch"
        name="grid"
      />
      <ProFormText
        name="name"
        label="Title"
        tooltip="Up to 24 characters"
        placeholder="Please enter a name"
      />
      <ProFormText colProps={{ md: 12, xl: 8 }} name="company" label="Name" />
      <ProFormDigit colProps={{ md: 12, xl: 8 }} name="phone" label="Phone" />
      <ProFormText colProps={{ md: 12, xl: 8 }} name="email" label="Email" />
      <ProFormTextArea
        colProps={{ span: 24 }}
        name="address"
        label="Detailed Work Address or Home Address"
      />
      <ProFormDatePicker
        colProps={{ xl: 8, md: 12 }}
        label="Entry Date"
        name="date"
      />
      <ProFormDateRangePicker
        colProps={{ xl: 8, md: 12 }}
        label="Work Period"
        name="dateRange"
      />
      <ProFormSelect
        colProps={{ xl: 8, md: 12 }}
        label="Position"
        name="level"
        valueEnum={{
          1: 'Front End',
          2: 'Back End',
          3: 'Full Stack',
        }}
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
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormGroup,
  ProFormList,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <ProForm onFinish={async (e) => console.log(e)}>
      <ProFormText name="name" label="姓名" />
      <ProFormList
        name="users"
        label="用户信息"
        initialValue={[
          {
            name: '1111',
          },
        ]}
        itemRender={({ listDom, action }, { record }) => {
          return (
            <ProCard
              variant="outlined"
              extra={action}
              title={record?.name}
              style={{
                marginBlockEnd: 8,
              }}
            >
              {listDom}
            </ProCard>
          );
        }}
      >
        <ProFormGroup>
          <ProFormText name="name" label="姓名" />
        </ProFormGroup>
        <ProFormList
          name="labels"
          label="用户信息"
          initialValue={[
            {
              value: '333',
              label: '333',
            },
          ]}
          copyIconProps={{
            tooltipText: '复制此项到末尾',
          }}
          deleteIconProps={{
            tooltipText: '不需要这行了',
          }}
        >
          <ProFormGroup>
            <ProFormSwitch name="is_show" label="显示名称" />
          </ProFormGroup>
          <ProFormDependency name={['is_show']}>
            {({ is_show }) => {
              console.log(is_show);
              if (!is_show) return null;
              return (
                <ProFormList
                  name="labels"
                  label="用户信息"
                  initialValue={[
                    {
                      value: '333',
                      label: '333',
                    },
                  ]}
                  copyIconProps={{
                    tooltipText: '复制此项到末尾',
                  }}
                  deleteIconProps={{
                    tooltipText: '不需要这行了',
                  }}
                >
                  <ProFormGroup>
                    <ProFormText name="value" label="值" />
                    <ProFormSwitch name="is_show" label="显示名称" />
                  </ProFormGroup>
                </ProFormList>
              );
            }}
          </ProFormDependency>
        </ProFormList>
      </ProFormList>
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ProForm,
  ProFormDependency,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  return (
    <ProForm
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('Submission successful');
      }}
      initialValues={{
        name: 'Ant Design Co., Ltd.',
        name2: 'Ant Design Group',
        useMode: 'chapter',
      }}
    >
      <ProFormText
        width="md"
        name="name"
        label="Contract Customer Name"
        tooltip="Up to 24 characters"
        placeholder="Please enter a name"
      />
      <ProFormText
        width="md"
        name={['name2', 'text']}
        label="Contract Customer Name"
        tooltip="Up to 24 characters"
        placeholder="Please enter a name"
      />
      {/* ProFormDependency will automatically inject and perform shouldUpdate comparison */}
      <ProFormDependency name={['name', ['name2', 'text']]}>
        {({ name, name2 }) => {
          return (
            <ProFormSelect
              options={[
                {
                  value: 'chapter',
                  label: 'Effective after stamping',
                },
              ]}
              width="md"
              name="useMode"
              label={`Effective method agreed in the contract with "${name || ''}" and "${name2?.text || ''}"`}
            />
          );
        }}
      </ProFormDependency>
      {/* noStyle shouldUpdate is required, writing name will invalidate it */}
      <ProForm.Item noStyle shouldUpdate>
        {(form) => {
          return (
            <ProFormSelect
              options={[
                {
                  value: 'chapter',
                  label: 'Effective after stamping',
                },
              ]}
              width="md"
              name="useMode"
              label={`Effective method agreed in the contract with "${form.getFieldValue('name')}"`}
            />
          );
        }}
      </ProForm.Item>
    </ProForm>
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
  ProFormDateRangePicker,
  ProFormSelect,
} from '@ant-design/pro-components';
import { message } from 'antd';

const Demo = () => {
  return (
    <ProForm
      onFinish={async () => {
        message.success('Submission successful');
      }}
      syncToUrl={(values, type) => {
        if (type === 'get') {
          // To cooperate with transform
          // startTime and endTime are combined into createTimeRanger
          return {
            ...values,
            createTimeRanger:
              values.startTime || values.endTime
                ? [values.startTime, values.endTime]
                : undefined,
          };
        }
        // expirationTime is not synchronized to the URL
        return {
          ...values,
          expirationTime: undefined,
        };
      }}
      initialValues={{
        name: 'Ant Design Co., Ltd.',
        useMode: 'chapter',
      }}
      autoFocusFirstInput
    >
      <ProFormSelect
        options={[
          {
            value: 'chapter',
            label: 'Effective after stamping',
          },
        ]}
        width="sm"
        name="useMode"
        label="Contract Agreed Effective Method"
      />
      <ProFormDateRangePicker
        transform={(values) => {
          return {
            startTime: values ? values[0] : undefined,
            endTime: values ? values[1] : undefined,
          };
        }}
        width="md"
        name="createTimeRanger"
        label="Contract Effective Time"
      />
      <ProFormDatePicker
        width="md"
        name="expirationTime"
        label="Contract Expiration Time"
      />
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { SmileOutlined } from '@ant-design/icons';
import {
  FooterToolbar,
  PageContainer,
  ProForm,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
  ProLayout,
} from '@ant-design/pro-components';
import { Card } from 'antd';

const Demo = () => {
  return (
    <ProLayout
      fixSiderbar
      fixedHeader
      breakpoint={false}
      defaultCollapsed
      pageTitleRender={false}
      menuDataRender={() => [
        {
          path: '/one',
          icon: <SmileOutlined />,
          name: 'Level One Name',
          children: [
            {
              path: 'two',
              name: 'Level Two Name',
            },
          ],
        },
      ]}
      layout="mix"
      location={{
        pathname: '/one/two',
      }}
    >
      <PageContainer title="Input Form">
        <Card>
          <ProForm
            submitter={{
              render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
            }}
            onFinish={async (values) => console.log(values)}
          >
            <ProForm.Group>
              <ProFormText
                name="name"
                label="Contract Customer Name"
                tooltip="Up to 24 characters"
                placeholder="Please enter a name"
              />
              <ProFormText
                width="md"
                name="company"
                label="Our Company Name"
                placeholder="Please enter a name"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText
                name={['contract', 'name']}
                label="Contract Name"
                placeholder="Please enter a name"
              />
              <ProFormDateRangePicker
                name={['contract', 'createTime']}
                label="Contract Effective Time"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormSelect
                options={[
                  {
                    value: 'chapter',
                    label: 'Effective after stamping',
                  },
                ]}
                width="xs"
                name="chapter"
                label="Contract Agreed Effective Method"
              />
              <ProFormSelect
                width="xs"
                options={[
                  {
                    value: 'time',
                    label: 'Terminate after performance',
                  },
                ]}
                name="unusedMode"
                label="Contract Agreed Invalid Method"
              />
            </ProForm.Group>
            <ProFormText width="sm" name="id" label="Main Contract Number" />
            <ProFormText
              name="project"
              disabled
              label="Project Name"
              initialValue="xxxx Project"
            />
            <ProFormText
              width="xs"
              name="mangerName"
              disabled
              label="Business Manager"
              initialValue="Qitu"
            />
            <ProForm.Group>
              <ProFormSelect
                initialValue="money"
                options={[
                  {
                    value: 'money',
                    label: 'Confirm Amount',
                  },
                ]}
                width="xs"
                name="useMode"
                label="Amount Type"
              />
              <ProFormSelect
                options={[
                  {
                    value: '6',
                    label: '6%',
                  },
                  {
                    value: '12',
                    label: '12%',
                  },
                ]}
                initialValue="6"
                width="xs"
                name="taxRate"
                label="Tax Rate"
              />
              <ProFormRadio.Group
                label="Invoice Type"
                name="invoiceType"
                initialValue="Invoice"
                options={['Invoice', 'General Invoice', 'No Invoice']}
              />
            </ProForm.Group>
            <ProFormUploadButton
              extra="Supported extensions: .jpg .zip .doc .wps"
              label="Retroactive Report Attachment"
              name="file"
              title="Upload File"
            />
            <ProFormDigit
              width="xs"
              name="num"
              label="Number of Copies"
              initialValue={5}
            />
            <ProFormTextArea
              width="xl"
              label="Contract Remarks"
              name="remark"
            />
          </ProForm>
        </Card>
      </PageContainer>
    </ProLayout>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

declare module '*.module.less';

interface Window {
  DarkReader: any;
}

import { SmileOutlined } from '@ant-design/icons';
import {
  LightWrapper,
  ProForm,
  ProFormCheckbox,
  ProFormField,
  ProFormRadio,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormUploadButton,
  ProFormUploadDragger,
  StepsForm,
} from '@ant-design/pro-components';
import { ConfigProvider, Input } from 'antd';
import enUS from 'antd/lib/locale/en_US';

const Demo = () => (
  <ConfigProvider locale={enUS}>
    <StepsForm>
      <StepsForm.StepForm title="新建">
        <ProFormText name="name" />
      </StepsForm.StepForm>
    </StepsForm>

    <ProForm
      name="validate_other"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
        range: 5,
        name: 'qixian',
      }}
      onFinish={async (value) => console.log(value)}
    >
      <ProFormUploadButton
        name="upload"
        icon={<SmileOutlined />}
        label="Upload"
        title="点击上传"
        action="/upload.do"
        extra="longgggggggggggggggggggggggggggggggggg"
      />
      <ProFormRadio name="test" />
      <ProFormCheckbox name="test2" />
      <ProFormSwitch width="lg" label="是否打开" />
      <ProFormUploadDragger
        title="拖动上传"
        icon={<SmileOutlined />}
        description="支持 text"
        label="Dragger"
        name="dragger"
        fieldProps={{
          showUploadList: true,
        }}
      />
      <LightWrapper valuePropName="value">test</LightWrapper>
      <LightWrapper valuePropName="value">test</LightWrapper>
      <ProFormSlider name="range" label="范围" />
      <ProFormField>test</ProFormField>
      <ProFormField>
        <Input />
      </ProFormField>
    </ProForm>
  </ConfigProvider>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormMoney,
  ProFormSwitch,
} from '@ant-design/pro-components';
import { message } from 'antd';
import { useRef, useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();

  const [readonly, setReadonly] = useState(false);
  return (
    <>
      <ProFormSwitch
        checkedChildren="On"
        unCheckedChildren="Off"
        label="Read Only"
        fieldProps={{
          onChange: setReadonly,
        }}
      />
      <ProForm<{
        name: string;
        company?: string;
        useMode?: string;
      }>
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          const val1 = await formRef.current?.validateFields();
          console.log('validateFields:', val1);
          const val2 =
            await formRef.current?.validateFieldsReturnFormatValue?.();
          console.log('validateFieldsReturnFormatValue:', val2);
          message.success('Submission successful');
        }}
        formRef={formRef}
        params={{ id: '100' }}
        formKey="base-form-use-demo"
        readonly={readonly}
        request={async () => {
          await waitTime(100);
          return {
            name: 'Ant Design Co., Ltd.',
            useMode: 'chapter',
          };
        }}
        autoFocusFirstInput
      >
        <ProFormMoney
          label="No Symbol"
          name="amount0"
          fieldProps={{
            moneySymbol: false,
          }}
          locale="en-US"
          initialValue={22.22}
          min={0}
          width="lg"
        />
        <ProFormMoney
          label="Width"
          name="amount1"
          locale="en-US"
          initialValue={22.22}
          min={0}
          width="lg"
        />
        <ProFormMoney
          label="Minimum Amount 0"
          name="amount2"
          locale="en-US"
          initialValue={22.22}
          min={0}
          trigger="onBlur"
        />
        <ProFormMoney
          label="No Limit"
          name="amount3"
          locale="en-GB"
          initialValue={22.22}
        />
        <ProFormMoney
          label="Follow Global Locale"
          name="amount4"
          initialValue={22.22}
        />
        <ProFormMoney
          label="Locale ms-MY"
          name="amount-ms-My"
          locale="ms-MY"
          initialValue={-22.22}
        />
        <ProFormMoney
          label="Locale zh-TW"
          name="amount-zh-TW"
          locale="zh-TW"
          initialValue={22.22}
        />
        <ProFormMoney
          label="Custom Symbol"
          name="amount5"
          initialValue={22.22}
          customSymbol="💰"
        />
        <ProFormMoney
          label="Precision"
          name="amount6"
          initialValue={2222222222.222222}
          fieldProps={{ precision: 2 }}
          customSymbol="💰"
        />
        <ProFormMoney
          label="Precision 0"
          name="amount6"
          initialValue={2222222222.222222}
          fieldProps={{ precision: 0 }}
          customSymbol="💰"
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

import {
  FormControlRender,
  pickControlPropsWithId,
} from '@ant-design/pro-components';
import { Button, Checkbox, Form } from 'antd';
import React, { useEffect } from 'react';

const App: React.FC = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.validateFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form form={form} onFinish={console.log}>
      <Form.Item
        name={'text1'}
        label="文本框（没错误边框）"
        rules={[{ required: true }]}
      >
        <textarea />
      </Form.Item>
      <Form.Item
        name="text2"
        label="文本框（添加自定义的错误边框）"
        rules={[{ required: true }]}
      >
        <FormControlRender>
          {(itemProps) => {
            return (
              <textarea
                style={{
                  borderColor: itemProps.status === 'error' ? 'red' : undefined,
                }}
                {...pickControlPropsWithId(itemProps)}
              />
            );
          }}
        </FormControlRender>
      </Form.Item>
      <Form.Item
        valuePropName="checked"
        name="check"
        label="复选框"
        rules={[{ required: true }]}
      >
        <Checkbox>是否</Checkbox>
      </Form.Item>
      <Form.Item
        valuePropName="checked"
        name="check2"
        label="复选框"
        rules={[{ required: true }]}
      >
        <FormControlRender>
          {(itemProps) => {
            return (
              <Checkbox
                {...itemProps}
                style={{
                  color: itemProps.status === 'error' ? 'red' : undefined,
                }}
              >
                是否
              </Checkbox>
            );
          }}
        </FormControlRender>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormCascader,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormList,
  ProFormMoney,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormTreeSelect,
} from '@ant-design/pro-components';
import { TreeSelect, message } from 'antd';
import moment from 'dayjs';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

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
  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();
  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        const val1 = await formRef.current?.validateFields();
        console.log('validateFields:', val1);
        const val2 = await formRef.current?.validateFieldsReturnFormatValue?.();
        console.log('validateFieldsReturnFormatValue:', val2);
        message.success('Submission successful');
      }}
      formRef={formRef}
      params={{ id: '100' }}
      formKey="base-form-use-demo"
      dateFormatter={(value, valueType) => {
        console.log('---->', value, valueType);
        return value.format('YYYY/MM/DD HH:mm:ss');
      }}
      request={async () => {
        await waitTime(1500);
        return {
          name: 'Ant Design Co., Ltd.',
          useMode: 'chapter',
        };
      }}
      autoFocusFirstInput
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          required
          dependencies={[['contract', 'name']]}
          addonBefore={<a>How to get the customer name?</a>}
          addonAfter={<a>Click to see more</a>}
          label="Contract Customer Name"
          tooltip="Up to 24 characters"
          placeholder="Please enter a name"
          rules={[{ required: true, message: 'This is a required field' }]}
        />
        <ProFormText
          width="md"
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDigit name="count" label="Number of People" width="lg" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name={['contract', 'name']}
          width="md"
          label="Contract Name"
          placeholder="Please enter a name"
        />
        <ProFormDateRangePicker
          width="md"
          name={['contract', 'createTime']}
          label="Contract Effective Time"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          options={[
            {
              value: 'chapter',
              label: 'Effective after stamping',
            },
          ]}
          readonly
          width="xs"
          cacheForSwr
          name="useMode"
          label="Contract Agreed Effective Method"
        />
        <ProFormSelect.SearchSelect
          width="xs"
          options={[
            {
              value: 'time',
              label: 'Terminate after performance',
              type: 'time',
              options: [
                {
                  value: 'time1',
                  label: 'Terminate after performance 1',
                },
                {
                  value: 'time2',
                  label: 'Terminate after performance 2',
                },
              ],
            },
          ]}
          name="unusedMode"
          label="Contract Agreed Invalid Method"
        />
        <ProFormMoney
          width="md"
          name="money"
          label="Contract Agreed Amount"
          fieldProps={{
            numberPopoverRender: true,
          }}
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="Main Contract Number" />
      <ProFormText
        name="project"
        width="md"
        disabled
        label="Project Name"
        initialValue="xxxx Project"
      />
      <ProFormTextArea
        colProps={{ span: 24 }}
        name="address"
        label="Detailed Work Address or Home Address"
      />
      <ProFormText
        width="xs"
        name="mangerName"
        disabled
        label="Business Manager"
        initialValue="Qitu"
      />
      <ProFormCascader
        width="md"
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
        name="areaList"
        label="Area"
        initialValue={['zhejiang', 'hangzhou', 'xihu']}
        addonAfter={'qixian'}
      />
      <ProFormTreeSelect
        initialValue={['0-0-0']}
        label="Tree Select"
        width={600}
        fieldProps={{
          fieldNames: {
            label: 'title',
          },
          treeData,
          treeCheckable: true,
          showCheckedStrategy: TreeSelect.SHOW_PARENT,
          placeholder: 'Please select',
        }}
      />
      <ProFormDatePicker
        name="date"
        transform={(value) => {
          return {
            date: moment(value).unix(),
          };
        }}
      />
      <ProFormList name="datas">
        {() => {
          return (
            <>
              <ProFormDatePicker
                name="date"
                transform={(value) => {
                  return {
                    date: moment(value).unix(),
                  };
                }}
              />

              <ProFormList name="innerDatas">
                {() => {
                  return (
                    <>
                      <ProFormDatePicker
                        name="date"
                        transform={(value) => {
                          return {
                            date: moment(value).unix(),
                          };
                        }}
                      />
                      <ProFormList name="innerDatas">
                        {() => {
                          return (
                            <>
                              <ProFormDatePicker
                                name="date"
                                transform={(value) => {
                                  return {
                                    date: moment(value).unix(),
                                  };
                                }}
                              />
                              <ProFormList name="innerDatas">
                                {() => {
                                  return (
                                    <>
                                      <ProFormDatePicker
                                        name="date"
                                        transform={(value) => {
                                          return {
                                            date: moment(value).unix(),
                                          };
                                        }}
                                      />
                                    </>
                                  );
                                }}
                              </ProFormList>
                            </>
                          );
                        }}
                      </ProFormList>
                    </>
                  );
                }}
              </ProFormList>
            </>
          );
        }}
      </ProFormList>
    </ProForm>
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
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [loading, setLoading] = useState(false);
  return (
    <ProCard>
      <StepsForm
        onFinish={async () => {
          setLoading(true);
          await waitTime(1000);
          message.success('Submission successful');
          setLoading(false);
        }}
        submitter={{
          render: ({ form, onSubmit, step, onPre }) => {
            return [
              <Button
                key="rest"
                onClick={() => {
                  form?.resetFields();
                }}
              >
                Reset
              </Button>,
              step > 0 && (
                <Button
                  key="pre"
                  onClick={() => {
                    onPre?.();
                  }}
                >
                  Previous
                </Button>
              ),
              <Button
                key="next"
                loading={loading}
                type="primary"
                onClick={() => {
                  onSubmit?.();
                }}
              >
                Next
              </Button>,
            ];
          },
        }}
        formProps={{
          validateMessages: {
            required: 'This field is required',
          },
        }}
      >
        <StepsForm.StepForm
          name="base"
          title="Create Experiment"
          onFinish={async () => {
            setLoading(true);
            await waitTime(2000);
            setLoading(false);
            return true;
          }}
        >
          <ProFormText
            name="name"
            label="Experiment Name"
            width="md"
            tooltip="Up to 24 characters, used as a unique id"
            placeholder="Please enter a name"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date" label="Date" />
          <ProFormDateRangePicker name="dateTime" label="Time Range" />
          <ProFormTextArea
            name="remark"
            label="Remarks"
            width="lg"
            placeholder="Please enter remarks"
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm name="checkbox" title="Set Parameters">
          <ProFormCheckbox.Group
            name="checkbox"
            label="Migration Type"
            width="lg"
            options={[
              'Structural Migration',
              'Full Migration',
              'Incremental Migration',
              'Full Verification',
            ]}
          />
          <ProForm.Group>
            <ProFormText name="dbName" label="Business DB Username" />
            <ProFormDatePicker
              name="datetime"
              label="Record Retention Time"
              width="sm"
            />
          </ProForm.Group>
          <ProFormDependency name={['dbName']}>
            {({ dbName }) => {
              return (
                <ProFormCheckbox.Group
                  name="checkbox"
                  label="Migration Type"
                  options={
                    dbName
                      ? ['Complete LOB', 'Do Not Sync LOB', 'Restricted LOB']
                      : ['Complete LOB']
                  }
                />
              );
            }}
          </ProFormDependency>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="Publish Experiment">
          <ProFormCheckbox.Group
            name="checkbox"
            label="Deployment Units"
            rules={[
              {
                required: true,
              },
            ]}
            options={[
              'Deployment Unit 1',
              'Deployment Unit 2',
              'Deployment Unit 3',
            ]}
          />
          <ProFormSelect
            label="Deployment Group Strategy"
            name="remark"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue="1"
            width="md"
            options={[
              {
                value: '1',
                label: 'Strategy One',
              },
              { value: '2', label: 'Strategy Two' },
            ]}
          />
          <ProFormSelect
            label="Pod Scheduling Strategy"
            name="remark2"
            initialValue="2"
            width="md"
            options={[
              {
                value: '1',
                label: 'Strategy One',
              },
              { value: '2', label: 'Strategy Two' },
            ]}
          />
        </StepsForm.StepForm>
      </StepsForm>
    </ProCard>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  AlipayCircleOutlined,
  LockOutlined,
  PlusOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  DrawerForm,
  LightFilter,
  LoginForm,
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  QueryFilter,
  StepsForm,
} from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';
import { useState } from 'react';

const iconStyles = {
  marginInlineStart: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const Components = {
    ProForm,
    ModalForm,
    DrawerForm,
    QueryFilter,
    LightFilter,
    StepsForm,
    LoginForm,
  };
  const [type, setType] = useState<keyof typeof Components>('ProForm');

  if (type === 'StepsForm') {
    return (
      <>
        <ProFormRadio.Group
          style={{
            margin: 16,
          }}
          radioType="button"
          fieldProps={{
            value: type,
            onChange: (e) => setType(e.target.value),
          }}
          options={[
            'LightFilter',
            'ProForm',
            'ModalForm',
            'DrawerForm',
            'QueryFilter',
            'StepsForm',
            'LoginForm',
          ]}
        />
        <StepsForm
          onFinish={async (values: any) => {
            await waitTime(2000);
            console.log(values);
            message.success('Submission successful');
          }}
        >
          <StepsForm.StepForm title="Step One">
            <ProForm.Group>
              <ProFormText
                width="md"
                name="name"
                label="Contract Customer Name"
                tooltip="Up to 24 characters"
                placeholder="Please enter a name"
              />
              <ProFormText
                width="md"
                name="company"
                label="Our Company Name"
                placeholder="Please enter a name"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText
                name={['contract', 'name']}
                width="md"
                label="Contract Name"
                placeholder="Please enter a name"
              />
              <ProFormDateRangePicker
                width="md"
                name={['contract', 'createTime']}
                label="Contract Effective Time"
              />
            </ProForm.Group>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="Step Two">
            <ProForm.Group>
              <ProFormSelect
                options={[
                  {
                    value: 'chapter',
                    label: 'Effective after stamping',
                  },
                ]}
                readonly
                width="xs"
                name="useMode"
                label="Contract Agreed Effective Method"
              />
              <ProFormSelect
                width="xs"
                options={[
                  {
                    value: 'time',
                    label: 'Terminate after performance',
                  },
                ]}
                name="unusedMode"
                label="Contract Agreed Invalid Method"
              />
            </ProForm.Group>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="Step Three">
            <ProFormText width="sm" name="id" label="Main Contract Number" />
            <ProFormText
              name="project"
              width="md"
              disabled
              label="Project Name"
              initialValue="xxxx Project"
            />
            <ProFormText
              width="xs"
              name="mangerName"
              disabled
              label="Business Manager"
              initialValue="Qitu"
            />
          </StepsForm.StepForm>
        </StepsForm>
      </>
    );
  }

  const FormComponents = Components[type as 'LoginForm'];

  if (type === 'LoginForm') {
    return (
      <>
        <ProFormRadio.Group
          style={{
            margin: 16,
          }}
          radioType="button"
          fieldProps={{
            value: type,
            onChange: (e) => setType(e.target.value),
          }}
          options={[
            'LightFilter',
            'ProForm',
            'ModalForm',
            'DrawerForm',
            'QueryFilter',
            'StepsForm',
            'LoginForm',
          ]}
        />
        <FormComponents
          title="Github"
          subTitle="The world's largest code hosting platform"
          actions={
            <Space>
              Other login methods
              <AlipayCircleOutlined style={iconStyles} />
              <TaobaoCircleOutlined style={iconStyles} />
              <WeiboCircleOutlined style={iconStyles} />
            </Space>
          }
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'Username: admin or user'}
            rules={[
              {
                required: true,
                message: 'Please enter your username!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'Password: ant.design'}
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
            ]}
          />
        </FormComponents>
      </>
    );
  }

  return (
    <>
      <ProFormRadio.Group
        style={{
          margin: 16,
        }}
        radioType="button"
        fieldProps={{
          value: type,
          onChange: (e) => setType(e.target.value),
        }}
        options={[
          'LightFilter',
          'ProForm',
          'ModalForm',
          'DrawerForm',
          'QueryFilter',
          'StepsForm',
          'LoginForm',
        ]}
      />
      <div
        style={{
          margin: 24,
        }}
      >
        <FormComponents
          // @ts-ignore
          labelWidth="auto"
          trigger={
            <Button type="primary">
              <PlusOutlined />
              New Form
            </Button>
          }
          onFinish={async (values: any) => {
            await waitTime(2000);
            console.log(values);
            message.success('Submission successful');
          }}
          initialValues={{
            name: 'Ant Design Co., Ltd.',
            useMode: 'chapter',
          }}
        >
          <ProForm.Group>
            <ProFormText
              width="md"
              name="name"
              label="Contract Customer Name"
              tooltip="Up to 24 characters"
              placeholder="Please enter a name"
            />
            <ProFormText
              width="md"
              name="company"
              label="Our Company Name"
              placeholder="Please enter a name"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              name={['contract', 'name']}
              width="md"
              label="Contract Name"
              placeholder="Please enter a name"
            />
            <ProFormDateRangePicker
              width="md"
              name={['contract', 'createTime']}
              label="Contract Effective Time"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              options={[
                {
                  value: 'chapter',
                  label: 'Effective after stamping',
                },
              ]}
              readonly
              width="xs"
              name="useMode"
              label="Contract Agreed Effective Method"
            />
            <ProFormSelect
              width="xs"
              options={[
                {
                  value: 'time',
                  label: 'Terminate after performance',
                },
              ]}
              name="unusedMode"
              label="Contract Agreed Invalid Method"
            />
          </ProForm.Group>
          <ProFormText width="sm" name="id" label="Main Contract Number" />
          <ProFormText
            name="project"
            width="md"
            disabled
            label="Project Name"
            initialValue="xxxx Project"
          />
          <ProFormText
            width="xs"
            name="mangerName"
            disabled
            label="Business Manager"
            initialValue="Qitu"
          />
        </FormComponents>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormDatePicker,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, message, Space } from 'antd';
import dayjs from 'dayjs';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const formRef = useRef<ProFormInstance>();
  const onFill = () => {
    formRef?.current?.setFieldsValue({
      name: '张三',
      company: '蚂蚁金服',
    });
  };

  const getCompanyName = () => {
    message.info(`公司名称为 "${formRef?.current?.getFieldValue('company')}"`);
  };

  const getFormatValues = () => {
    console.log(
      '格式化后的所有数据：',
      formRef.current?.getFieldsFormatValue?.(),
    );
  };

  const validateAndGetFormatValue = () => {
    formRef.current?.validateFieldsReturnFormatValue?.().then((values) => {
      console.log('校验表单并返回格式化后的所有数据：', values);
    });
  };

  return (
    <ProForm
      title="新建表单"
      formRef={formRef}
      submitter={{
        render: (props, doms) => {
          return [
            ...doms,
            <Button htmlType="button" onClick={onFill} key="edit">
              一键填写
            </Button>,
            <Button htmlType="button" onClick={getCompanyName} key="read">
              读取公司
            </Button>,
            <Space.Compact key="refs" style={{ display: 'block' }}>
              <Button htmlType="button" onClick={getFormatValues} key="format">
                获取格式化后的所有数据
              </Button>
              <Button
                htmlType="button"
                onClick={validateAndGetFormatValue}
                key="format2"
              >
                校验表单并返回格式化后的所有数据
              </Button>
            </Space.Compact>,
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
      <ProFormText
        width="md"
        name="name"
        label="签约客户名称"
        tooltip="最长为 24 位"
        placeholder="请输入名称"
      />

      <ProFormText
        width="md"
        name="company"
        label="我方公司名称"
        placeholder="请输入名称"
      />
      <ProFormDatePicker name="date" initialValue={dayjs('2021-08-09')} />
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProCard,
  ProForm,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';

// 弹窗表单
const FormModal = () => {
  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title="新建表单"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          新建表单
        </Button>
      }
      onFinish={async (values) => {
        console.log(values);
        alert(JSON.stringify(values));
        return true;
      }}
    >
      <ProFormText width="sm" name="id" label="主合同编号" />
    </ModalForm>
  );
};

const Demo = () => {
  return (
    <div>
      <div>
        在form外边可以
        <FormModal />
      </div>
      <div>
        在form里面可以
        <ProForm layout="horizontal">
          <FormModal />
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
            initialValue={[{ name: '颜色', items: [{ name: '红' }] }]}
          >
            <ProFormText
              style={{ padding: 0 }}
              width="md"
              name="name"
              label="规格名"
            />
            <ProForm.Item
              isListField
              style={{ marginBlockEnd: 0 }}
              label="规格值"
            >
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
                <div>
                  在内层formlist拿不到
                  <FormModal />
                </div>
              </ProFormList>
            </ProForm.Item>
            <div>
              在外层formlist拿不到
              <FormModal />
            </div>
          </ProFormList>
        </ProForm>
      </div>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormCascader,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormList,
  ProFormMoney,
  ProFormSelect,
  ProFormText,
  ProFormTreeSelect,
} from '@ant-design/pro-components';
import { TreeSelect } from 'antd';
import dayjs from 'dayjs';
import { useRef } from 'react';

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
  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();
  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      formRef={formRef}
      params={{ id: '100' }}
      formKey="base-form-use-demo"
      dateFormatter={(value, valueType) => {
        console.log('---->', value, valueType);
        return value.format('YYYY/MM/DD HH:mm:ss');
      }}
      autoFocusFirstInput
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          required
          dependencies={[['contract', 'name']]}
          addonBefore={<a>客户名称应该怎么获得？</a>}
          addonAfter={<a>点击查看更多</a>}
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
          rules={[{ required: true, message: '这是必填项' }]}
        />
        <ProFormText
          width="md"
          name="company"
          label="我方公司名称"
          placeholder="请输入名称"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDigit name="count" label="人数" width="lg" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name={['contract', 'name']}
          width="md"
          label="合同名称"
          placeholder="请输入名称"
        />
        <ProFormDateRangePicker
          width="md"
          name={['contract', 'createTime']}
          label="合同生效时间"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          options={[
            {
              value: 'chapter',
              label: '盖章后生效',
            },
          ]}
          readonly
          width="xs"
          cacheForSwr
          name="useMode"
          label="合同约定生效方式"
        />
        <ProFormSelect.SearchSelect
          width="xs"
          options={[
            {
              value: 'time',
              label: '履行完终止',
              type: 'time',
              options: [
                {
                  value: 'time1',
                  label: '履行完终止1',
                },
                {
                  value: 'time2',
                  label: '履行完终止2',
                },
              ],
            },
          ]}
          name="unusedMode"
          label="合同约定失效方式"
        />
        <ProFormMoney
          width="md"
          name="money"
          label="合同约定金额"
          fieldProps={{
            numberPopoverRender: true,
          }}
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="主合同编号" />
      <ProFormText
        name="project"
        width="md"
        disabled
        label="项目名称"
        initialValue="xxxx项目"
      />
      <ProFormText
        width="xs"
        name="mangerName"
        disabled
        label="商务经理"
        initialValue="启途"
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
        name="areaList"
        label="区域"
        initialValue={['zhejiang', 'hangzhou', 'xihu']}
        addonAfter={'qixian'}
      />
      <ProFormTreeSelect
        initialValue={['0-0-0']}
        label="树形下拉选择器"
        width={600}
        request={async () => treeData}
        fieldProps={{
          fieldNames: {
            label: 'title',
          },
          treeCheckable: true,
          showCheckedStrategy: TreeSelect.SHOW_PARENT,
          placeholder: 'Please select',
        }}
      />
      <ProFormDatePicker
        name="date"
        transform={(value) => {
          return {
            date: dayjs(value).unix(),
          };
        }}
      />
      <ProFormList
        name="datas"
        initialValue={[{ date: '2022-10-12 10:00:00' }]}
      >
        {() => {
          return (
            <ProFormDatePicker
              name="date"
              transform={(value) => {
                return {
                  date: dayjs(value).unix(),
                };
              }}
            />
          );
        }}
      </ProFormList>
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { SmileOutlined } from '@ant-design/icons';
import {
  ProForm,
  ProFormCheckbox,
  ProFormField,
  ProFormRadio,
  ProFormSlider,
  ProFormSwitch,
  ProFormUploadButton,
  ProFormUploadDragger,
} from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useRef } from 'react';

const Demo = () => {
  const formRef = useRef();
  return (
    <ProForm
      name="validate_other"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
        range: 5,
        name: 'qixian',
      }}
      formRef={formRef}
      onFinish={async (value) => console.log(value)}
    >
      <ProFormUploadButton
        name="upload"
        icon={<SmileOutlined />}
        label="Upload"
        title="点击上传"
        action="/upload.do"
        extra="longgggggggggggggggggggggggggggggggggg"
      />
      <ProFormRadio name="test" />
      <ProFormCheckbox name="test2" />
      <ProFormSwitch width="lg" label="是否打开" />
      <ProFormUploadDragger
        title="拖动上传"
        icon={<SmileOutlined />}
        description="支持 text"
        label="Dragger"
        name="dragger"
        fieldProps={{
          showUploadList: true,
        }}
      />
      <ProFormSlider name="range" label="范围" />
      <ProFormField>test</ProFormField>
      <ProFormField>
        <Input />
      </ProFormField>
      <ProForm.Item>
        <Button>查看记录数</Button>
        <span>共有200条</span>
      </ProForm.Item>
    </ProForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  FormControlFC,
  FormItemRender,
  ProForm,
  ProFormItemRender,
  WithControlPropsType,
  pickControlProps,
  pickControlPropsWithId,
  useControlModel,
} from '@ant-design/pro-components';
import { Checkbox, Input, Select } from 'antd';

const SingletonA = (
  props: WithControlPropsType<{
    title: string;
  }>,
) => {
  const model = useControlModel(props);
  return (
    <>
      <span>{props.title}</span>
      <Input {...model} placeholder="直接使用useControlModel" />
    </>
  );
};
const SingletonB = (
  props: WithControlPropsType<{
    title: string;
  }>,
) => {
  const model = useControlModel(props);
  return (
    <>
      <span>{props.title}</span>
      <Select
        {...model}
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
        ]}
      />
    </>
  );
};

const CustomInput = (
  props: WithControlPropsType<{
    title: string;
    description: string;
  }>,
) => {
  const model = useControlModel(props, [
    {
      name: 'a',
      valuePropName: 'checked',
    },
    {
      name: 'b',
    },
  ]);

  return (
    <div>
      <div>title: {props.title}</div>
      <Checkbox {...model.a} />
      <div>description: {props.description}</div>
      <Input
        {...model.b}
        placeholder="可以通过第二个参数达到使用多个实例的情况"
      />
    </div>
  );
};

const CustomInput2: FormControlFC<{
  title: string;
}> = (props) => {
  const model = useControlModel(props, ['a', 'b']);
  return (
    <div>
      <div>{props.title}</div>
      <Input {...model.a} />
    </div>
  );
};

const Demo = () => {
  const [form] = ProForm.useForm();

  return (
    <div>
      <ProForm
        form={form}
        onValuesChange={console.log}
        onFinish={async (values) => {
          console.log(values);
          return;
        }}
      >
        <ProForm.Item name={'SingletonA'}>
          <SingletonA title="单实例A" />
        </ProForm.Item>
        <ProForm.Item name={'SingletonB'}>
          <SingletonB title="单实例B" />
        </ProForm.Item>
        <ProForm.Item name={'customInput'} label="多实例">
          <CustomInput
            title="customInput-title"
            description="customInput-desc"
          />
        </ProForm.Item>
        <ProForm.Item name={'FormControlFC'} label="使用FormControlFC类型定义">
          <CustomInput2 title="FormControlFC title" />
        </ProForm.Item>
        <ProFormItemRender name={'inputA'}>
          {(itemProps) => {
            return (
              <div id={itemProps.id}>
                <h3>使用pickControlProps提取表单项属性</h3>
                <Input {...pickControlProps(itemProps)} />
              </div>
            );
          }}
        </ProFormItemRender>
        <ProFormItemRender name={'inputB'}>
          {(itemProps) => {
            return (
              <div>
                <h3>使用pickControlPropsWithId提取表单项属性（包括id）</h3>
                <Input {...pickControlPropsWithId(itemProps)} />
              </div>
            );
          }}
        </ProFormItemRender>
        <ProFormItemRender name={'selectA'}>
          {(itemProps) => {
            return (
              <div>
                <h3>自定义标题：</h3>
                <Select
                  {...pickControlProps(itemProps)}
                  options={[{ label: 'A', value: 'a' }]}
                />
              </div>
            );
          }}
        </ProFormItemRender>
        <FormItemRender
          label="FormItemRender"
          name={'selectB'}
          initialValue={'xxx'}
        >
          {(itemProps) => {
            return (
              <div>
                <Input {...pickControlPropsWithId(itemProps)} />
              </div>
            );
          }}
        </FormItemRender>
      </ProForm>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import {
  ProForm,
  ProFormCheckbox,
  ProFormRadio,
  ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = () => {
  return (
    <>
      <ProForm
        {...layout}
        layout="horizontal"
        submitter={false}
        name="basic"
        initialValues={{ remember: true }}
      >
        <ProFormText label="Name" name="name" />

        <ProFormText.Password
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        />
        <ProFormCheckbox name="remember" {...tailLayout}>
          Remember me
        </ProFormCheckbox>
        <ProFormRadio name="remember" {...tailLayout}>
          Remember me
        </ProFormRadio>
        <ProForm.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </ProForm.Item>
      </ProForm>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { Button, Form, Input, Select, Space } from 'antd';
import React from 'react';

export function PriceInput() {
  return (
    <Space size={0}>
      <Form.Item noStyle name={['price', 'number']}>
        <Input type="text" style={{ width: 100 }} />
      </Form.Item>
      <Form.Item noStyle name={['price', 'currency']}>
        <Select style={{ width: 80, margin: '0 8px' }}>
          <Select.Option value="rmb">RMB</Select.Option>
          <Select.Option value="dollar">Dollar</Select.Option>
        </Select>
      </Form.Item>
    </Space>
  );
}

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

  const checkPrice = (_: any, value: { number: number }) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Price must be greater than zero!'));
  };

  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb',
        },
      }}
    >
      <Form.Item name="price" label="Price" rules={[{ validator: checkPrice }]}>
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

import {
  WithControlPropsType,
  useControlModel,
} from '@ant-design/pro-components';
import { Button, Form, Input, Select } from 'antd';
import React from 'react';

export function PriceInput(
  props: WithControlPropsType<{
    // other props...
  }>,
) {
  const model = useControlModel(props, ['number', 'currency']);

  return (
    <span>
      <Input type="text" {...model.number} style={{ width: 100 }} />
      <Select {...model.currency} style={{ width: 80, margin: '0 8px' }}>
        <Select.Option value="rmb">RMB</Select.Option>
        <Select.Option value="dollar">Dollar</Select.Option>
      </Select>
    </span>
  );
}

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

  const checkPrice = (_: any, value: { number: number }) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Price must be greater than zero!'));
  };

  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb',
        },
      }}
    >
      <Form.Item name="price" label="Price" rules={[{ validator: checkPrice }]}>
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

import { ProForm, ProFormSelect } from '@ant-design/pro-components';
import { message } from 'antd';

const Demo = () => {
  return (
    <ProForm
      onFinish={async () => {
        message.success('提交成功');
      }}
      onValuesChange={(v) => console.log(v)}
    >
      <ProFormSelect
        options={[
          {
            value: 'chapter',
            label: '盖章后生效',
          },
        ]}
        width="sm"
        name="useMode"
        label="合同约定生效方式"
        fieldProps={{
          labelInValue: true,
        }}
        rules={[
          {
            required: true,
            message: '请选择',
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

import { Button, Form, Input, Select } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

type Currency = 'rmb' | 'dollar';

interface PriceValue {
  number?: number;
  currency?: Currency;
}

interface PriceInputProps {
  value?: PriceValue;
  onChange?: (value: PriceValue) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState<Currency>('rmb');

  const triggerChange = (changedValue: {
    number?: number;
    currency?: Currency;
  }) => {
    onChange?.({ number, currency, ...value, ...changedValue });
  };

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(e.target.value || '0', 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!('number' in value)) {
      setNumber(newNumber);
    }
    triggerChange({ number: newNumber });
  };

  const onCurrencyChange = (newCurrency: Currency) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({ currency: newCurrency });
  };

  return (
    <span>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{ width: 100 }}
      />
      <Select
        value={value.currency || currency}
        style={{ width: 80, margin: '0 8px' }}
        onChange={onCurrencyChange}
      >
        <Option value="rmb">RMB</Option>
        <Option value="dollar">Dollar</Option>
      </Select>
    </span>
  );
};

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

  const checkPrice = (_: any, value: { number: number }) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Price must be greater than zero!'));
  };

  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb',
        },
      }}
    >
      <Form.Item name="price" label="Price" rules={[{ validator: checkPrice }]}>
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

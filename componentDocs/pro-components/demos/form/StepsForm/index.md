

import {
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  return (
    <ProCard>
      <StepsForm<{
        name: string;
      }>
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          message.success('提交成功');
        }}
        formProps={{
          validateMessages: {
            required: '此项为必填项',
          },
        }}
        submitter={{
          render: (props) => {
            if (props.step === 0) {
              return (
                <Button type="primary" onClick={() => props.onSubmit?.()}>
                  去第二步 {'>'}
                </Button>
              );
            }

            if (props.step === 1) {
              return [
                <Button key="pre" onClick={() => props.onPre?.()}>
                  返回第一步
                </Button>,
                <Button
                  type="primary"
                  key="goToTree"
                  onClick={() => props.onSubmit?.()}
                >
                  去第三步 {'>'}
                </Button>,
              ];
            }

            return [
              <Button key="gotoTwo" onClick={() => props.onPre?.()}>
                {'<'} 返回第二步
              </Button>,
              <Button
                type="primary"
                key="goToTree"
                onClick={() => props.onSubmit?.()}
              >
                提交 √
              </Button>,
            ];
          },
        }}
      >
        <StepsForm.StepForm<{
          name: string;
        }>
          name="base"
          title="创建实验"
          onFinish={async ({ name }) => {
            console.log(name);
            await waitTime(2000);
            return true;
          }}
        >
          <ProFormText
            name="name"
            label="实验名称"
            width="md"
            tooltip="最长为 24 位，用于标定的唯一 id"
            placeholder="请输入名称"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date" label="日期" />
          <ProFormDateRangePicker name="dateTime" label="时间区间" />
          <ProFormTextArea
            name="remark"
            label="备注"
            width="lg"
            placeholder="请输入备注"
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="checkbox"
          title="设置参数"
        >
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            width="lg"
            options={['结构迁移', '全量迁移', '增量迁移', '全量校验']}
          />
          <ProForm.Group>
            <ProFormText name="dbname" label="业务 DB 用户名" />
            <ProFormDatePicker
              name="datetime"
              label="记录保存时间"
              width="sm"
            />
            <ProFormCheckbox.Group
              name="checkbox"
              label="迁移类型"
              options={['完整 LOB', '不同步 LOB', '受限制 LOB']}
            />
          </ProForm.Group>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="发布实验">
          <ProFormCheckbox.Group
            name="checkbox"
            label="部署单元"
            rules={[
              {
                required: true,
              },
            ]}
            options={['部署单元1', '部署单元2', '部署单元3']}
          />
          <ProFormSelect
            label="部署分组策略"
            name="remark"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue="1"
            options={[
              {
                value: '1',
                label: '策略一',
              },
              { value: '2', label: '策略二' },
            ]}
          />
          <ProFormSelect
            label="Pod 调度策略"
            name="remark2"
            initialValue="2"
            options={[
              {
                value: '1',
                label: '策略一',
              },
              { value: '2', label: '策略二' },
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

// Mainly handles the scenarios of creating and editing
import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  StepsForm,
} from '@ant-design/pro-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React, { useEffect, useRef } from 'react';

type FormValue = {
  jobInfo: {
    name: string;
    type: number;
  };
  syncTableInfo: {
    timeRange: [Dayjs, Dayjs];
    title: string;
  };
};
const formValue: FormValue = {
  jobInfo: {
    name: 'normal job',
    type: 1,
  },
  syncTableInfo: {
    timeRange: [dayjs().subtract(1, 'm'), dayjs()],
    title: 'example table title',
  },
};
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(formValue);
    }, time);
  });
};
const jobType = [
  {
    value: 1,
    label: 'State-owned enterprise',
  },
  {
    value: 2,
    label: 'Private enterprise',
  },
];
const EditExample = () => {
  const formMapRef = useRef<
    React.MutableRefObject<ProFormInstance<any> | undefined>[]
  >([]);
  useEffect(() => {
    waitTime(1000).then(() => {
      // In the editing scenario, you need to use formMapRef to loop through and set formData
      formMapRef?.current?.forEach((formInstanceRef) => {
        formInstanceRef?.current?.setFieldsValue(formValue);
      });
    });
  }, []);

  return (
    <StepsForm
      formMapRef={formMapRef}
      onFinish={(values) => {
        console.log(values);
        return Promise.resolve(true);
      }}
    >
      <StepsForm.StepForm name="step1" title="Job Information">
        <ProFormText label="Name" name={['jobInfo', 'name']} />
        <ProFormSelect
          label="Job Type"
          name={['jobInfo', 'type']}
          options={jobType}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm name="step2" title={'Sync Table Information'}>
        <ProFormDateRangePicker
          label="Time Range"
          name={['syncTableInfo', 'timeRange']}
        />
        <ProFormText label="Title" name={['syncTableInfo', 'title']} />
      </StepsForm.StepForm>
    </StepsForm>
  );
};
export default () => (
  <div style={{ padding: 24 }}>
    <EditExample />
  </div>
);

﻿import { PlusOutlined } from '@ant-design/icons';
import {
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateTimePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Button, Modal, message } from 'antd';
import { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        <PlusOutlined />
        分步表单新建
      </Button>
      <StepsForm
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          setVisible(false);
          message.success('提交成功');
        }}
        formProps={{
          validateMessages: {
            required: '此项为必填项',
          },
        }}
        stepsFormRender={(dom, submitter) => {
          return (
            <Modal
              title="分步表单"
              width={800}
              onCancel={() => setVisible(false)}
              open={visible}
              footer={submitter}
              destroyOnHidden
            >
              {dom}
            </Modal>
          );
        }}
      >
        <StepsForm.StepForm
          name="base"
          title="创建实验"
          onFinish={async () => {
            await waitTime(2000);
            return true;
          }}
        >
          <ProFormText
            name="name"
            width="md"
            label="实验名称"
            tooltip="最长为 24 位，用于标定的唯一 id"
            placeholder="请输入名称"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date" label="日期" />
          <ProForm.Group title="时间选择">
            <ProFormDateTimePicker name="dateTime" label="开始时间" />
            <ProFormDatePicker name="date" label="结束时间" />
          </ProForm.Group>
          <ProFormTextArea
            name="remark"
            label="备注"
            width="lg"
            placeholder="请输入备注"
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm name="checkbox" title="设置参数">
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            width="lg"
            options={['结构迁移', '全量迁移', '增量迁移', '全量校验']}
          />
          <ProForm.Group>
            <ProFormText width="md" name="dbname" label="业务 DB 用户名" />
            <ProFormDatePicker
              name="datetime"
              label="记录保存时间"
              width="sm"
            />
            <ProFormCheckbox.Group
              name="checkbox"
              label="迁移类型"
              options={['完整 LOB', '不同步 LOB', '受限制 LOB']}
            />
          </ProForm.Group>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="发布实验">
          <ProFormCheckbox.Group
            name="checkbox"
            label="部署单元"
            rules={[
              {
                required: true,
              },
            ]}
            options={['部署单元1', '部署单元2', '部署单元3']}
          />
          <ProFormSelect
            label="部署分组策略"
            name="remark"
            rules={[
              {
                required: true,
              },
            ]}
            width="md"
            initialValue="1"
            options={[
              {
                value: '1',
                label: '策略一',
              },
              { value: '2', label: '策略二' },
            ]}
          />
          <ProFormSelect
            label="Pod 调度策略"
            name="remark2"
            width="md"
            initialValue="2"
            options={[
              {
                value: '1',
                label: '策略一',
              },
              { value: '2', label: '策略二' },
            ]}
          />
        </StepsForm.StepForm>
      </StepsForm>
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
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { message } from 'antd';
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

  return (
    <ProCard>
      <StepsForm<{
        name: string;
      }>
        formRef={formRef}
        onFinish={async () => {
          await waitTime(1000);
          message.success('Submission successful');
        }}
        formProps={{
          validateMessages: {
            required: 'This field is required',
          },
        }}
      >
        <StepsForm.StepForm<{
          name: string;
        }>
          name="base"
          title="Create Experiment"
          stepProps={{
            content: 'All basic information is filled in here',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            await waitTime(2000);
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
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="checkbox"
          title="Set Parameters"
          stepProps={{
            content: 'Fill in the operation parameters here',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            return true;
          }}
        >
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
            <ProFormText name="dbname" label="Business DB Username" />
            <ProFormDatePicker
              name="datetime"
              label="Record Retention Time"
              width="sm"
            />
            <ProFormCheckbox.Group
              name="checkbox"
              label="Migration Type"
              options={['Complete LOB', 'Do Not Sync LOB', 'Restricted LOB']}
            />
          </ProForm.Group>
        </StepsForm.StepForm>
        <StepsForm.StepForm
          name="time"
          title="Publish Experiment"
          stepProps={{
            content: 'Fill in the release criteria here',
          }}
        >
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

import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { message } from 'antd';
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

  return (
    <ProCard>
      <StepsForm<{
        name: string;
      }>
        stepsProps={{
          direction: 'vertical',
        }}
        formRef={formRef}
        onFinish={async () => {
          await waitTime(1000);
          message.success('提交成功');
        }}
        formProps={{
          validateMessages: {
            required: '此项为必填项',
          },
        }}
      >
        <StepsForm.StepForm<{
          name: string;
        }>
          name="base"
          title="创建实验"
          stepProps={{
            description: '这里填入的都是基本信息',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            await waitTime(2000);
            return true;
          }}
        >
          <ProFormText
            name="name"
            label="实验名称"
            width="md"
            tooltip="最长为 24 位，用于标定的唯一 id"
            placeholder="请输入名称"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date" label="日期" />
          <ProFormDateRangePicker name="dateTime" label="时间区间" />
          <ProFormTextArea
            name="remark"
            label="备注"
            width="lg"
            placeholder="请输入备注"
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="checkbox"
          title="设置参数"
          stepProps={{
            description: '这里填入运维参数',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            return true;
          }}
        >
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            width="lg"
            options={[
              '结构迁移',
              '全量迁移',
              '增量迁移',
              '全量校验',
              '增量校验',
              '全量替换',
              '增量替换',
            ]}
          />
          <ProForm.Group>
            <ProFormText name="dbname" label="业务 DB 用户名" />
            <ProFormDatePicker
              name="datetime"
              label="记录保存时间"
              width="sm"
            />
          </ProForm.Group>
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            options={['完整 LOB', '不同步 LOB', '受限制 LOB']}
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="step3"
          title="第三步"
          stepProps={{
            description: '这里填入运维参数',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            return true;
          }}
        >
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            width="lg"
            options={['结构迁移', '全量迁移', '全量校验', '增量替换']}
          />
          <ProForm.Group>
            <ProFormText name="dbname" label="业务 DB 用户名" />
            <ProFormDatePicker
              name="datetime"
              label="记录保存时间"
              width="sm"
            />
          </ProForm.Group>
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            options={['完整 LOB', '不同步 LOB', '受限制 LOB']}
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

﻿import {
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  StepsForm,
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
    <>
      <StepsForm
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          message.success('Submission successful');
        }}
        formProps={{
          validateMessages: {
            required: 'This field is required',
          },
        }}
      >
        <StepsForm.StepForm
          name="base"
          title="First Step"
          onFinish={async () => {
            await waitTime(2000);
            return true;
          }}
        >
          <ProCard
            title="Source and Target"
            variant="outlined"
            headerBordered
            collapsible
            style={{
              marginBlockEnd: 16,
              minWidth: 800,
              maxWidth: '100%',
            }}
          >
            <ProFormText
              name="name"
              width="md"
              label="Migration Task Name"
              tooltip="Up to 24 characters, used as a unique id"
              placeholder="Please enter a name"
              rules={[{ required: true }]}
            />
            <ProForm.Group title="Nodes" size={8}>
              <ProFormSelect
                width="sm"
                name="source"
                placeholder="Select Source Node"
              />
              <ProFormSelect
                width="sm"
                name="target"
                placeholder="Select Target Node"
              />
            </ProForm.Group>
          </ProCard>

          <ProCard
            title="Top Alignment"
            variant="outlined"
            headerBordered
            collapsible
            style={{
              minWidth: 800,
              marginBlockEnd: 16,
            }}
          >
            <ProFormDigit
              name="xs"
              label="XS Form"
              initialValue={9999}
              tooltip="Tooltip that appears on hover."
              placeholder="Please enter a name"
              width="xs"
            />
            <ProFormText
              name="s"
              label="S Form"
              placeholder="Please enter a name"
              width="sm"
            />
            <ProFormDateRangePicker name="m" label="M Form" />
            <ProFormSelect
              name="l"
              label="L Form"
              fieldProps={{
                mode: 'tags',
              }}
              width="lg"
              initialValue={['Wu Jiahao', 'Zhou Xingxing']}
              options={['Wu Jiahao', 'Zhou Xingxing', 'Chen Lafeng'].map(
                (item) => ({
                  label: item,
                  value: item,
                }),
              )}
            />
          </ProCard>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="checkbox" title="Second Step">
          <ProCard
            style={{
              minWidth: 800,
              marginBlockEnd: 16,
              maxWidth: '100%',
            }}
          >
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
              <ProFormText name="dbname" label="Business DB Username" />
              <ProFormDatePicker
                name="datetime"
                label="Record Retention Time"
                width="sm"
              />
            </ProForm.Group>
            <ProFormCheckbox.Group
              name="checkbox"
              label="Migration Type"
              options={['Complete LOB', 'Do Not Sync LOB', 'Restricted LOB']}
            />
          </ProCard>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="Third Step">
          <ProCard
            style={{
              marginBlockEnd: 16,
              minWidth: 800,
              maxWidth: '100%',
            }}
          >
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
              width="md"
              initialValue="1"
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
              width="md"
              initialValue="2"
              options={[
                {
                  value: '1',
                  label: 'Strategy One',
                },
                { value: '2', label: 'Strategy Two' },
              ]}
            />
          </ProCard>
        </StepsForm.StepForm>
      </StepsForm>
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
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  return (
    <ProCard>
      <StepsForm<{
        name: string;
      }>
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          message.success('提交成功');
        }}
        formProps={{
          validateMessages: {
            required: '此项为必填项',
          },
        }}
        submitter={{
          render: (props) => {
            if (props.step === 0) {
              return (
                <Button type="primary" onClick={() => props.onSubmit?.()}>
                  去第二步 {'>'}
                </Button>
              );
            }

            if (props.step === 1) {
              return [
                <Button key="pre" onClick={() => props.onPre?.()}>
                  返回第一步
                </Button>,
                <Button
                  type="primary"
                  key="goToTree"
                  onClick={() => props.onSubmit?.()}
                >
                  去第三步 {'>'}
                </Button>,
              ];
            }

            return [
              <Button key="gotoTwo" onClick={() => props.onPre?.()}>
                {'<'} 返回第二步
              </Button>,
              <Button
                type="primary"
                key="goToTree"
                onClick={() => props.onSubmit?.()}
              >
                提交 √
              </Button>,
            ];
          },
        }}
      >
        <StepsForm.StepForm<{
          name: string;
        }>
          name="base"
          title="创建实验"
          onFinish={async ({ name }) => {
            console.log(name);
            await waitTime(2000);
            return true;
          }}
        >
          <ProFormText
            name="name"
            label="实验名称"
            width="md"
            tooltip="最长为 24 位，用于标定的唯一 id"
            placeholder="请输入名称"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date" label="日期" />
          <ProFormDateRangePicker name="dateTime" label="时间区间" />
          <ProFormTextArea
            name="remark"
            label="备注"
            width="lg"
            placeholder="请输入备注"
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="checkbox"
          title="设置参数"
        >
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            width="lg"
            options={['结构迁移', '全量迁移', '增量迁移', '全量校验']}
          />
          <ProForm.Group>
            <ProFormText name="dbname" label="业务 DB 用户名" />
            <ProFormDatePicker
              name="datetime"
              label="记录保存时间"
              width="sm"
            />
            <ProFormCheckbox.Group
              name="checkbox"
              label="迁移类型"
              options={['完整 LOB', '不同步 LOB', '受限制 LOB']}
            />
          </ProForm.Group>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="发布实验">
          <ProFormCheckbox.Group
            name="checkbox"
            label="部署单元"
            rules={[
              {
                required: true,
              },
            ]}
            options={['部署单元1', '部署单元2', '部署单元3']}
          />
          <ProFormSelect
            label="部署分组策略"
            name="remark"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue="1"
            options={[
              {
                value: '1',
                label: '策略一',
              },
              { value: '2', label: '策略二' },
            ]}
          />
          <ProFormSelect
            label="Pod 调度策略"
            name="remark2"
            initialValue="2"
            options={[
              {
                value: '1',
                label: '策略一',
              },
              { value: '2', label: '策略二' },
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

// Mainly handles the scenarios of creating and editing
import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  StepsForm,
} from '@ant-design/pro-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React, { useEffect, useRef } from 'react';

type FormValue = {
  jobInfo: {
    name: string;
    type: number;
  };
  syncTableInfo: {
    timeRange: [Dayjs, Dayjs];
    title: string;
  };
};
const formValue: FormValue = {
  jobInfo: {
    name: 'normal job',
    type: 1,
  },
  syncTableInfo: {
    timeRange: [dayjs().subtract(1, 'm'), dayjs()],
    title: 'example table title',
  },
};
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(formValue);
    }, time);
  });
};
const jobType = [
  {
    value: 1,
    label: 'State-owned enterprise',
  },
  {
    value: 2,
    label: 'Private enterprise',
  },
];
const EditExample = () => {
  const formMapRef = useRef<
    React.MutableRefObject<ProFormInstance<any> | undefined>[]
  >([]);
  useEffect(() => {
    waitTime(1000).then(() => {
      // In the editing scenario, you need to use formMapRef to loop through and set formData
      formMapRef?.current?.forEach((formInstanceRef) => {
        formInstanceRef?.current?.setFieldsValue(formValue);
      });
    });
  }, []);

  return (
    <StepsForm
      formMapRef={formMapRef}
      onFinish={(values) => {
        console.log(values);
        return Promise.resolve(true);
      }}
    >
      <StepsForm.StepForm name="step1" title="Job Information">
        <ProFormText label="Name" name={['jobInfo', 'name']} />
        <ProFormSelect
          label="Job Type"
          name={['jobInfo', 'type']}
          options={jobType}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm name="step2" title={'Sync Table Information'}>
        <ProFormDateRangePicker
          label="Time Range"
          name={['syncTableInfo', 'timeRange']}
        />
        <ProFormText label="Title" name={['syncTableInfo', 'title']} />
      </StepsForm.StepForm>
    </StepsForm>
  );
};
export default () => (
  <div style={{ padding: 24 }}>
    <EditExample />
  </div>
);

﻿import { PlusOutlined } from '@ant-design/icons';
import {
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateTimePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Button, Modal, message } from 'antd';
import { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        <PlusOutlined />
        分步表单新建
      </Button>
      <StepsForm
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          setVisible(false);
          message.success('提交成功');
        }}
        formProps={{
          validateMessages: {
            required: '此项为必填项',
          },
        }}
        stepsFormRender={(dom, submitter) => {
          return (
            <Modal
              title="分步表单"
              width={800}
              onCancel={() => setVisible(false)}
              open={visible}
              footer={submitter}
              destroyOnHidden
            >
              {dom}
            </Modal>
          );
        }}
      >
        <StepsForm.StepForm
          name="base"
          title="创建实验"
          onFinish={async () => {
            await waitTime(2000);
            return true;
          }}
        >
          <ProFormText
            name="name"
            width="md"
            label="实验名称"
            tooltip="最长为 24 位，用于标定的唯一 id"
            placeholder="请输入名称"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date" label="日期" />
          <ProForm.Group title="时间选择">
            <ProFormDateTimePicker name="dateTime" label="开始时间" />
            <ProFormDatePicker name="date" label="结束时间" />
          </ProForm.Group>
          <ProFormTextArea
            name="remark"
            label="备注"
            width="lg"
            placeholder="请输入备注"
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm name="checkbox" title="设置参数">
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            width="lg"
            options={['结构迁移', '全量迁移', '增量迁移', '全量校验']}
          />
          <ProForm.Group>
            <ProFormText width="md" name="dbname" label="业务 DB 用户名" />
            <ProFormDatePicker
              name="datetime"
              label="记录保存时间"
              width="sm"
            />
            <ProFormCheckbox.Group
              name="checkbox"
              label="迁移类型"
              options={['完整 LOB', '不同步 LOB', '受限制 LOB']}
            />
          </ProForm.Group>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="发布实验">
          <ProFormCheckbox.Group
            name="checkbox"
            label="部署单元"
            rules={[
              {
                required: true,
              },
            ]}
            options={['部署单元1', '部署单元2', '部署单元3']}
          />
          <ProFormSelect
            label="部署分组策略"
            name="remark"
            rules={[
              {
                required: true,
              },
            ]}
            width="md"
            initialValue="1"
            options={[
              {
                value: '1',
                label: '策略一',
              },
              { value: '2', label: '策略二' },
            ]}
          />
          <ProFormSelect
            label="Pod 调度策略"
            name="remark2"
            width="md"
            initialValue="2"
            options={[
              {
                value: '1',
                label: '策略一',
              },
              { value: '2', label: '策略二' },
            ]}
          />
        </StepsForm.StepForm>
      </StepsForm>
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
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { message } from 'antd';
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

  return (
    <ProCard>
      <StepsForm<{
        name: string;
      }>
        formRef={formRef}
        onFinish={async () => {
          await waitTime(1000);
          message.success('Submission successful');
        }}
        formProps={{
          validateMessages: {
            required: 'This field is required',
          },
        }}
      >
        <StepsForm.StepForm<{
          name: string;
        }>
          name="base"
          title="Create Experiment"
          stepProps={{
            content: 'All basic information is filled in here',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            await waitTime(2000);
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
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="checkbox"
          title="Set Parameters"
          stepProps={{
            content: 'Fill in the operation parameters here',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            return true;
          }}
        >
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
            <ProFormText name="dbname" label="Business DB Username" />
            <ProFormDatePicker
              name="datetime"
              label="Record Retention Time"
              width="sm"
            />
            <ProFormCheckbox.Group
              name="checkbox"
              label="Migration Type"
              options={['Complete LOB', 'Do Not Sync LOB', 'Restricted LOB']}
            />
          </ProForm.Group>
        </StepsForm.StepForm>
        <StepsForm.StepForm
          name="time"
          title="Publish Experiment"
          stepProps={{
            content: 'Fill in the release criteria here',
          }}
        >
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

import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { message } from 'antd';
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

  return (
    <ProCard>
      <StepsForm<{
        name: string;
      }>
        stepsProps={{
          direction: 'vertical',
        }}
        formRef={formRef}
        onFinish={async () => {
          await waitTime(1000);
          message.success('提交成功');
        }}
        formProps={{
          validateMessages: {
            required: '此项为必填项',
          },
        }}
      >
        <StepsForm.StepForm<{
          name: string;
        }>
          name="base"
          title="创建实验"
          stepProps={{
            description: '这里填入的都是基本信息',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            await waitTime(2000);
            return true;
          }}
        >
          <ProFormText
            name="name"
            label="实验名称"
            width="md"
            tooltip="最长为 24 位，用于标定的唯一 id"
            placeholder="请输入名称"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date" label="日期" />
          <ProFormDateRangePicker name="dateTime" label="时间区间" />
          <ProFormTextArea
            name="remark"
            label="备注"
            width="lg"
            placeholder="请输入备注"
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="checkbox"
          title="设置参数"
          stepProps={{
            description: '这里填入运维参数',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            return true;
          }}
        >
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            width="lg"
            options={[
              '结构迁移',
              '全量迁移',
              '增量迁移',
              '全量校验',
              '增量校验',
              '全量替换',
              '增量替换',
            ]}
          />
          <ProForm.Group>
            <ProFormText name="dbname" label="业务 DB 用户名" />
            <ProFormDatePicker
              name="datetime"
              label="记录保存时间"
              width="sm"
            />
          </ProForm.Group>
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            options={['完整 LOB', '不同步 LOB', '受限制 LOB']}
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm<{
          checkbox: string;
        }>
          name="step3"
          title="第三步"
          stepProps={{
            description: '这里填入运维参数',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            return true;
          }}
        >
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            width="lg"
            options={['结构迁移', '全量迁移', '全量校验', '增量替换']}
          />
          <ProForm.Group>
            <ProFormText name="dbname" label="业务 DB 用户名" />
            <ProFormDatePicker
              name="datetime"
              label="记录保存时间"
              width="sm"
            />
          </ProForm.Group>
          <ProFormCheckbox.Group
            name="checkbox"
            label="迁移类型"
            options={['完整 LOB', '不同步 LOB', '受限制 LOB']}
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

﻿import {
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  StepsForm,
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
    <>
      <StepsForm
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          message.success('Submission successful');
        }}
        formProps={{
          validateMessages: {
            required: 'This field is required',
          },
        }}
      >
        <StepsForm.StepForm
          name="base"
          title="First Step"
          onFinish={async () => {
            await waitTime(2000);
            return true;
          }}
        >
          <ProCard
            title="Source and Target"
            variant="outlined"
            headerBordered
            collapsible
            style={{
              marginBlockEnd: 16,
              minWidth: 800,
              maxWidth: '100%',
            }}
          >
            <ProFormText
              name="name"
              width="md"
              label="Migration Task Name"
              tooltip="Up to 24 characters, used as a unique id"
              placeholder="Please enter a name"
              rules={[{ required: true }]}
            />
            <ProForm.Group title="Nodes" size={8}>
              <ProFormSelect
                width="sm"
                name="source"
                placeholder="Select Source Node"
              />
              <ProFormSelect
                width="sm"
                name="target"
                placeholder="Select Target Node"
              />
            </ProForm.Group>
          </ProCard>

          <ProCard
            title="Top Alignment"
            variant="outlined"
            headerBordered
            collapsible
            style={{
              minWidth: 800,
              marginBlockEnd: 16,
            }}
          >
            <ProFormDigit
              name="xs"
              label="XS Form"
              initialValue={9999}
              tooltip="Tooltip that appears on hover."
              placeholder="Please enter a name"
              width="xs"
            />
            <ProFormText
              name="s"
              label="S Form"
              placeholder="Please enter a name"
              width="sm"
            />
            <ProFormDateRangePicker name="m" label="M Form" />
            <ProFormSelect
              name="l"
              label="L Form"
              fieldProps={{
                mode: 'tags',
              }}
              width="lg"
              initialValue={['Wu Jiahao', 'Zhou Xingxing']}
              options={['Wu Jiahao', 'Zhou Xingxing', 'Chen Lafeng'].map(
                (item) => ({
                  label: item,
                  value: item,
                }),
              )}
            />
          </ProCard>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="checkbox" title="Second Step">
          <ProCard
            style={{
              minWidth: 800,
              marginBlockEnd: 16,
              maxWidth: '100%',
            }}
          >
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
              <ProFormText name="dbname" label="Business DB Username" />
              <ProFormDatePicker
                name="datetime"
                label="Record Retention Time"
                width="sm"
              />
            </ProForm.Group>
            <ProFormCheckbox.Group
              name="checkbox"
              label="Migration Type"
              options={['Complete LOB', 'Do Not Sync LOB', 'Restricted LOB']}
            />
          </ProCard>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="Third Step">
          <ProCard
            style={{
              marginBlockEnd: 16,
              minWidth: 800,
              maxWidth: '100%',
            }}
          >
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
              width="md"
              initialValue="1"
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
              width="md"
              initialValue="2"
              options={[
                {
                  value: '1',
                  label: 'Strategy One',
                },
                { value: '2', label: 'Strategy Two' },
              ]}
            />
          </ProCard>
        </StepsForm.StepForm>
      </StepsForm>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);



import { DrawerForm, ModalForm, ProFormText } from '@ant-design/pro-components';
import { Button, message } from 'antd';

const wait = (time: number = 300) =>
  new Promise((resolve) => setTimeout(resolve, time));

const Demo = () => {
  return (
    <>
      <ModalForm
        title="Debug: destroyOnHidden + request"
        trigger={<Button type="primary">Open (Debug)</Button>}
        modalProps={{ destroyOnHidden: true }}
        // Simulate async data loading
        request={async () => {
          await wait(3000);
          return { name: 'loaded' } as any;
        }}
        onFinish={async () => {
          message.success('Submission successful');
          return true;
        }}
      >
        <ProFormText
          name="name"
          label="Name"
          placeholder="Close quickly while loading to test"
        />
      </ModalForm>
      <div style={{ height: 16 }} />
      <DrawerForm
        title="Debug: destroyOnHidden + request (Drawer)"
        trigger={<Button type="primary">Open Drawer (Debug)</Button>}
        drawerProps={{ destroyOnHidden: true }}
        // Simulate async data loading
        request={async () => {
          await wait(3000);
          return { name: 'loaded' } as any;
        }}
        onFinish={async () => {
          message.success('Submission successful');
          return true;
        }}
      >
        <ProFormText
          name="name"
          label="Name"
          placeholder="Close quickly while loading to test"
        />
      </DrawerForm>
    </>
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
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [form] = Form.useForm<{ name: string; company: string }>();
  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title="Create New Form"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          Create New Form
        </Button>
      }
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnHidden: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
        message.success('Submission successful');
        return true;
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
          width="md"
          name="contract"
          label="Contract Name"
          placeholder="Please enter a name"
        />
        <ProFormDateRangePicker
          name="contractTime"
          label="Contract Effective Time"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          request={async () => [
            {
              value: 'chapter',
              label: 'Effective after stamping',
            },
          ]}
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
    </ModalForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

export { default } from './modal-form-request-destroy-debug';

import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';
import { useRef, useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const restFormRef = useRef<ProFormInstance>();
  const formRef = useRef<ProFormInstance>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <Space>
      <ModalForm
        title="Create New Form"
        formRef={restFormRef}
        open={modalVisible}
        trigger={
          <Button
            type="primary"
            onClick={() => {
              setModalVisible(true);
            }}
          >
            Reset via formRef
          </Button>
        }
        onOpenChange={setModalVisible}
        submitter={{
          searchConfig: {
            resetText: 'Reset',
          },
          resetButtonProps: {
            onClick: () => {
              restFormRef.current?.resetFields();
              //   setModalVisible(false);
            },
          },
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('Submission successful');
          return true;
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
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ModalForm>
      <ModalForm
        title="Create New Form"
        formRef={formRef}
        trigger={<Button type="primary">Reset via custom footer button</Button>}
        submitter={{
          render: (props, defaultDoms) => {
            return [
              ...defaultDoms,
              <Button
                key="extra-reset"
                onClick={() => {
                  props.reset();
                }}
              >
                Reset
              </Button>,
            ];
          },
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('Submission successful');
          return true;
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
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ModalForm>
    </Space>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [modalVisit, setModalVisit] = useState(false);
  const [drawerVisit, setDrawerVisit] = useState(false);

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setModalVisit(true);
          }}
        >
          <PlusOutlined />
          Show Modal
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setDrawerVisit(true);
          }}
        >
          <PlusOutlined />
          Show Drawer
        </Button>
      </Space>
      <ModalForm
        title="Create New Form"
        open={modalVisit}
        onFinish={async () => {
          message.success('Submission successful');
          return true;
        }}
        onOpenChange={setModalVisit}
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
            width="md"
            name="contract"
            label="Contract Name"
            placeholder="Please enter a name"
          />
          <ProFormDateRangePicker
            name="contractTime"
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
      </ModalForm>
      <DrawerForm
        onOpenChange={setDrawerVisit}
        title="Create New Form"
        open={drawerVisit}
        onFinish={async () => {
          message.success('Submission successful');
          return true;
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
            width="md"
            name="contract"
            label="Contract Name"
            placeholder="Please enter a name"
          />
          <ProFormDateRangePicker
            name="contractTime"
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
      </DrawerForm>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [form] = Form.useForm<{ name: string; company: string }>();

  return (
    <DrawerForm<{
      name: string;
      company: string;
    }>
      title="Create New Form"
      resize={{
        onResize() {
          console.log('resize!');
        },
        maxWidth: window.innerWidth * 0.8,
        minWidth: 300,
      }}
      form={form}
      trigger={
        <Button type="primary">
          <PlusOutlined />
          Create New Form
        </Button>
      }
      autoFocusFirstInput
      drawerProps={{
        destroyOnHidden: true,
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
        message.success('Submission successful');
        // Not returning will not close the modal
        return true;
      }}
    >
      <ProForm.Group>
        <ProFormText
          name="name"
          width="md"
          label="Contract Customer Name"
          tooltip="Up to 24 characters"
          placeholder="Please enter a name"
        />
        <ProFormText
          rules={[
            {
              required: true,
            },
          ]}
          width="md"
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="contract"
          label="Contract Name"
          placeholder="Please enter a name"
        />
        <ProFormDateRangePicker
          name="contractTime"
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
          formItemProps={{
            style: {
              margin: 0,
            },
          }}
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
    </DrawerForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  return (
    <Space>
      <ModalForm
        title="Create New Form"
        trigger={<Button type="primary">Custom Footer Buttons</Button>}
        submitter={{
          render: (props, defaultDoms) => {
            return [
              ...defaultDoms,
              <Button
                key="ok"
                onClick={() => {
                  props.submit();
                }}
              >
                ok
              </Button>,
            ];
          },
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('Submission successful');
          return true;
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
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ModalForm>
      <ModalForm
        title="Create New Form"
        trigger={<Button type="primary">Custom Text</Button>}
        submitter={{
          searchConfig: {
            submitText: 'Confirm',
            resetText: 'Cancel',
          },
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('Submission successful');
          return true;
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
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ModalForm>
      <ModalForm
        title="Create New Form"
        trigger={<Button type="primary">Hide or Modify Button Style</Button>}
        submitter={{
          resetButtonProps: {
            type: 'dashed',
          },
          submitButtonProps: {
            style: {
              display: 'none',
            },
          },
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('Submission successful');
          return true;
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
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ModalForm>
      <ModalForm
        title="Hide Footer"
        trigger={<Button type="primary">Hide Footer</Button>}
        submitter={false}
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
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ModalForm>
    </Space>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const formRef = useRef();
  return (
    <div
      style={{
        height: '325px',
      }}
    >
      <Space>
        <DrawerForm<{
          name: string;
          company: string;
        }>
          title="新建表单"
          formRef={formRef}
          width={600}
          trigger={
            <Button type="primary">
              <PlusOutlined />
              新建 Drawer 表单
            </Button>
          }
          drawerProps={{
            forceRender: true,
            destroyOnHidden: true,
          }}
          onFinish={async (values) => {
            await waitTime(2000);
            console.log(values.name);
            message.success('提交成功');
            // 不返回不会关闭弹框
            return true;
          }}
        >
          <DrawerForm<{
            name: string;
            company: string;
          }>
            title="新建表单"
            formRef={formRef}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建 Drawer 表单
              </Button>
            }
            drawerProps={{
              forceRender: true,
              destroyOnHidden: true,
            }}
            onFinish={async (values) => {
              await waitTime(2000);
              console.log(values.name);
              message.success('提交成功');
              // 不返回不会关闭弹框
              return true;
            }}
          >
            <ProForm.Group>
              <ProFormText
                name="name"
                width="md"
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
            <ProForm.Group>
              <ProFormText
                width="md"
                name="contract"
                label="合同名称"
                placeholder="请输入名称"
              />
              <ProFormDateRangePicker
                name="contractTime"
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
                width="xs"
                name="useMode"
                label="合同约定生效方式"
              />
              <ProFormSelect
                width="xs"
                options={[
                  {
                    value: 'time',
                    label: '履行完终止',
                  },
                ]}
                name="unusedMode"
                label="合同约定失效效方式"
              />
            </ProForm.Group>
            <ProFormText width="sm" name="id" label="主合同编号" />
            <ProFormText
              name="project"
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
          </DrawerForm>
        </DrawerForm>

        <ModalForm<{
          name: string;
          company: string;
        }>
          title="新建表单"
          formRef={formRef}
          trigger={
            <Button type="primary">
              <PlusOutlined />
              新建 Model 表单
            </Button>
          }
          modalProps={{
            forceRender: true,
            destroyOnHidden: true,
          }}
          onFinish={async (values) => {
            await waitTime(2000);
            console.log(values.name);
            message.success('提交成功');
            // 不返回不会关闭弹框
            return true;
          }}
        >
          <ModalForm<{
            name: string;
            company: string;
          }>
            title="新建表单"
            formRef={formRef}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建 Model 表单
              </Button>
            }
            modalProps={{
              forceRender: true,
              destroyOnHidden: true,
            }}
            onFinish={async (values) => {
              await waitTime(2000);
              console.log(values.name);
              message.success('提交成功');
              // 不返回不会关闭弹框
              return true;
            }}
          >
            <ProForm.Group>
              <ProFormText
                name="name"
                width="md"
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
            <ProForm.Group>
              <ProFormText
                width="md"
                name="contract"
                label="合同名称"
                placeholder="请输入名称"
              />
              <ProFormDateRangePicker
                name="contractTime"
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
                width="xs"
                name="useMode"
                label="合同约定生效方式"
              />
              <ProFormSelect
                width="xs"
                options={[
                  {
                    value: 'time',
                    label: '履行完终止',
                  },
                ]}
                name="unusedMode"
                label="合同约定失效效方式"
              />
            </ProForm.Group>
            <ProFormText width="sm" name="id" label="主合同编号" />
            <ProFormText
              name="project"
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
          </ModalForm>
        </ModalForm>
      </Space>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { DrawerForm, ModalForm, ProFormText } from '@ant-design/pro-components';
import { Button, message } from 'antd';

const wait = (time: number = 300) =>
  new Promise((resolve) => setTimeout(resolve, time));

const Demo = () => {
  return (
    <>
      <ModalForm
        title="Debug: destroyOnHidden + request"
        trigger={<Button type="primary">Open (Debug)</Button>}
        modalProps={{ destroyOnHidden: true }}
        // Simulate async data loading
        request={async () => {
          await wait(3000);
          return { name: 'loaded' } as any;
        }}
        onFinish={async () => {
          message.success('Submission successful');
          return true;
        }}
      >
        <ProFormText
          name="name"
          label="Name"
          placeholder="Close quickly while loading to test"
        />
      </ModalForm>
      <div style={{ height: 16 }} />
      <DrawerForm
        title="Debug: destroyOnHidden + request (Drawer)"
        trigger={<Button type="primary">Open Drawer (Debug)</Button>}
        drawerProps={{ destroyOnHidden: true }}
        // Simulate async data loading
        request={async () => {
          await wait(3000);
          return { name: 'loaded' } as any;
        }}
        onFinish={async () => {
          message.success('Submission successful');
          return true;
        }}
      >
        <ProFormText
          name="name"
          label="Name"
          placeholder="Close quickly while loading to test"
        />
      </DrawerForm>
    </>
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
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [form] = Form.useForm<{ name: string; company: string }>();
  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title="Create New Form"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          Create New Form
        </Button>
      }
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnHidden: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
        message.success('Submission successful');
        return true;
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
          width="md"
          name="contract"
          label="Contract Name"
          placeholder="Please enter a name"
        />
        <ProFormDateRangePicker
          name="contractTime"
          label="Contract Effective Time"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          request={async () => [
            {
              value: 'chapter',
              label: 'Effective after stamping',
            },
          ]}
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
    </ModalForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

export { default } from './modal-form-request-destroy-debug';

import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';
import { useRef, useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const restFormRef = useRef<ProFormInstance>();
  const formRef = useRef<ProFormInstance>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <Space>
      <ModalForm
        title="Create New Form"
        formRef={restFormRef}
        open={modalVisible}
        trigger={
          <Button
            type="primary"
            onClick={() => {
              setModalVisible(true);
            }}
          >
            Reset via formRef
          </Button>
        }
        onOpenChange={setModalVisible}
        submitter={{
          searchConfig: {
            resetText: 'Reset',
          },
          resetButtonProps: {
            onClick: () => {
              restFormRef.current?.resetFields();
              //   setModalVisible(false);
            },
          },
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('Submission successful');
          return true;
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
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ModalForm>
      <ModalForm
        title="Create New Form"
        formRef={formRef}
        trigger={<Button type="primary">Reset via custom footer button</Button>}
        submitter={{
          render: (props, defaultDoms) => {
            return [
              ...defaultDoms,
              <Button
                key="extra-reset"
                onClick={() => {
                  props.reset();
                }}
              >
                Reset
              </Button>,
            ];
          },
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('Submission successful');
          return true;
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
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ModalForm>
    </Space>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [modalVisit, setModalVisit] = useState(false);
  const [drawerVisit, setDrawerVisit] = useState(false);

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setModalVisit(true);
          }}
        >
          <PlusOutlined />
          Show Modal
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setDrawerVisit(true);
          }}
        >
          <PlusOutlined />
          Show Drawer
        </Button>
      </Space>
      <ModalForm
        title="Create New Form"
        open={modalVisit}
        onFinish={async () => {
          message.success('Submission successful');
          return true;
        }}
        onOpenChange={setModalVisit}
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
            width="md"
            name="contract"
            label="Contract Name"
            placeholder="Please enter a name"
          />
          <ProFormDateRangePicker
            name="contractTime"
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
      </ModalForm>
      <DrawerForm
        onOpenChange={setDrawerVisit}
        title="Create New Form"
        open={drawerVisit}
        onFinish={async () => {
          message.success('Submission successful');
          return true;
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
            width="md"
            name="contract"
            label="Contract Name"
            placeholder="Please enter a name"
          />
          <ProFormDateRangePicker
            name="contractTime"
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
      </DrawerForm>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const [form] = Form.useForm<{ name: string; company: string }>();

  return (
    <DrawerForm<{
      name: string;
      company: string;
    }>
      title="Create New Form"
      resize={{
        onResize() {
          console.log('resize!');
        },
        maxWidth: window.innerWidth * 0.8,
        minWidth: 300,
      }}
      form={form}
      trigger={
        <Button type="primary">
          <PlusOutlined />
          Create New Form
        </Button>
      }
      autoFocusFirstInput
      drawerProps={{
        destroyOnHidden: true,
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
        message.success('Submission successful');
        // Not returning will not close the modal
        return true;
      }}
    >
      <ProForm.Group>
        <ProFormText
          name="name"
          width="md"
          label="Contract Customer Name"
          tooltip="Up to 24 characters"
          placeholder="Please enter a name"
        />
        <ProFormText
          rules={[
            {
              required: true,
            },
          ]}
          width="md"
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="contract"
          label="Contract Name"
          placeholder="Please enter a name"
        />
        <ProFormDateRangePicker
          name="contractTime"
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
          formItemProps={{
            style: {
              margin: 0,
            },
          }}
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
    </DrawerForm>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  return (
    <Space>
      <ModalForm
        title="Create New Form"
        trigger={<Button type="primary">Custom Footer Buttons</Button>}
        submitter={{
          render: (props, defaultDoms) => {
            return [
              ...defaultDoms,
              <Button
                key="ok"
                onClick={() => {
                  props.submit();
                }}
              >
                ok
              </Button>,
            ];
          },
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('Submission successful');
          return true;
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
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ModalForm>
      <ModalForm
        title="Create New Form"
        trigger={<Button type="primary">Custom Text</Button>}
        submitter={{
          searchConfig: {
            submitText: 'Confirm',
            resetText: 'Cancel',
          },
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('Submission successful');
          return true;
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
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ModalForm>
      <ModalForm
        title="Create New Form"
        trigger={<Button type="primary">Hide or Modify Button Style</Button>}
        submitter={{
          resetButtonProps: {
            type: 'dashed',
          },
          submitButtonProps: {
            style: {
              display: 'none',
            },
          },
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('Submission successful');
          return true;
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
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ModalForm>
      <ModalForm
        title="Hide Footer"
        trigger={<Button type="primary">Hide Footer</Button>}
        submitter={false}
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
          name="company"
          label="Our Company Name"
          placeholder="Please enter a name"
        />
      </ModalForm>
    </Space>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  const formRef = useRef();
  return (
    <div
      style={{
        height: '325px',
      }}
    >
      <Space>
        <DrawerForm<{
          name: string;
          company: string;
        }>
          title="新建表单"
          formRef={formRef}
          width={600}
          trigger={
            <Button type="primary">
              <PlusOutlined />
              新建 Drawer 表单
            </Button>
          }
          drawerProps={{
            forceRender: true,
            destroyOnHidden: true,
          }}
          onFinish={async (values) => {
            await waitTime(2000);
            console.log(values.name);
            message.success('提交成功');
            // 不返回不会关闭弹框
            return true;
          }}
        >
          <DrawerForm<{
            name: string;
            company: string;
          }>
            title="新建表单"
            formRef={formRef}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建 Drawer 表单
              </Button>
            }
            drawerProps={{
              forceRender: true,
              destroyOnHidden: true,
            }}
            onFinish={async (values) => {
              await waitTime(2000);
              console.log(values.name);
              message.success('提交成功');
              // 不返回不会关闭弹框
              return true;
            }}
          >
            <ProForm.Group>
              <ProFormText
                name="name"
                width="md"
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
            <ProForm.Group>
              <ProFormText
                width="md"
                name="contract"
                label="合同名称"
                placeholder="请输入名称"
              />
              <ProFormDateRangePicker
                name="contractTime"
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
                width="xs"
                name="useMode"
                label="合同约定生效方式"
              />
              <ProFormSelect
                width="xs"
                options={[
                  {
                    value: 'time',
                    label: '履行完终止',
                  },
                ]}
                name="unusedMode"
                label="合同约定失效效方式"
              />
            </ProForm.Group>
            <ProFormText width="sm" name="id" label="主合同编号" />
            <ProFormText
              name="project"
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
          </DrawerForm>
        </DrawerForm>

        <ModalForm<{
          name: string;
          company: string;
        }>
          title="新建表单"
          formRef={formRef}
          trigger={
            <Button type="primary">
              <PlusOutlined />
              新建 Model 表单
            </Button>
          }
          modalProps={{
            forceRender: true,
            destroyOnHidden: true,
          }}
          onFinish={async (values) => {
            await waitTime(2000);
            console.log(values.name);
            message.success('提交成功');
            // 不返回不会关闭弹框
            return true;
          }}
        >
          <ModalForm<{
            name: string;
            company: string;
          }>
            title="新建表单"
            formRef={formRef}
            trigger={
              <Button type="primary">
                <PlusOutlined />
                新建 Model 表单
              </Button>
            }
            modalProps={{
              forceRender: true,
              destroyOnHidden: true,
            }}
            onFinish={async (values) => {
              await waitTime(2000);
              console.log(values.name);
              message.success('提交成功');
              // 不返回不会关闭弹框
              return true;
            }}
          >
            <ProForm.Group>
              <ProFormText
                name="name"
                width="md"
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
            <ProForm.Group>
              <ProFormText
                width="md"
                name="contract"
                label="合同名称"
                placeholder="请输入名称"
              />
              <ProFormDateRangePicker
                name="contractTime"
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
                width="xs"
                name="useMode"
                label="合同约定生效方式"
              />
              <ProFormSelect
                width="xs"
                options={[
                  {
                    value: 'time',
                    label: '履行完终止',
                  },
                ]}
                name="unusedMode"
                label="合同约定失效效方式"
              />
            </ProForm.Group>
            <ProFormText width="sm" name="id" label="主合同编号" />
            <ProFormText
              name="project"
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
          </ModalForm>
        </ModalForm>
      </Space>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

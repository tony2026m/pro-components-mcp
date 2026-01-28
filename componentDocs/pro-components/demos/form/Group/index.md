

﻿import {
  ProCard,
  ProForm,
  ProFormGroup,
  ProFormList,
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
          <ProFormText name="nickName" label="昵称" />
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
          <ProFormGroup key="group">
            <ProFormText name="value" label="值" />
            <ProFormText name="label" label="显示名称" />
          </ProFormGroup>
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

import { CloseOutlined, SnippetsOutlined } from '@ant-design/icons';
import type { FormListActionType } from '@ant-design/pro-components';
import { ProForm, ProFormList, ProFormText } from '@ant-design/pro-components';
import { useRef } from 'react';

const Demo = () => {
  const actionRef = useRef<
    FormListActionType<{
      name: string;
    }>
  >();
  return (
    <>
      <ProForm>
        <ProFormList
          copyIconProps={{
            Icon: SnippetsOutlined,
          }}
          deleteIconProps={{
            Icon: CloseOutlined,
          }}
          min={1}
          max={4}
          actionRef={actionRef}
          actionGuard={{
            beforeAddRow: async (defaultValue, insertIndex, count) => {
              return new Promise((resolve) => {
                console.log(defaultValue?.name, insertIndex, count);
                setTimeout(() => resolve(true), 1000);
              });
            },
            beforeRemoveRow: async (index, count) => {
              const row = actionRef.current?.get(index as number);
              console.log('--->', index, count, row);
              return new Promise((resolve) => {
                if (index === 0) {
                  resolve(false);
                  return;
                }
                setTimeout(() => resolve(true), 1000);
              });
            },
          }}
          name="users"
          label="用户信息"
          initialValue={[
            {
              name: '1111',
            },
          ]}
        >
          <ProFormText key="useMode" name="name" label="姓名" />
        </ProFormList>
      </ProForm>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import {
  ProForm,
  ProFormGroup,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <ProForm onFinish={async (e) => console.log(e)}>
        <ProFormText name="name" label="姓名" />

        <ProFormList
          name="labels"
          label="用户信息"
          initialValue={[
            {
              value: '111',
              label: '111',
            },
            {
              value: '222',
              label: '222',
            },
            {
              value: '333',
              label: '333',
            },
          ]}
          arrowSort={true}
          upIconProps={{ tooltipText: '' }}
        >
          <ProFormGroup key="group">
            <ProFormText name="value" label="值" />
            <ProFormText name="label" label="显示名称" />
          </ProFormGroup>
        </ProFormList>
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
  ProFormDependency,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';

const Demo = () => {
  return (
    <ProForm>
      <ProFormList
        name={['default', 'users']}
        label="用户信息"
        initialValue={[
          {
            name: '1111',
          },
        ]}
        itemContainerRender={(doms) => {
          return <ProForm.Group>{doms}</ProForm.Group>;
        }}
        alwaysShowItemLabel
      >
        {(f, index, action) => {
          console.log(f, index, action);
          return (
            <>
              <ProFormText
                initialValue={index}
                name="rowKey"
                label={`第 ${index} 配置`}
              />
              <ProFormText name="name" key="name" label="姓名" />
              <ProFormDependency key="remark" name={['name']}>
                {({ name }) => {
                  if (!name) {
                    return (
                      <span
                        style={{
                          lineHeight: '92px',
                        }}
                      >
                        输入姓名展示
                      </span>
                    );
                  }
                  return <ProFormText name="remark" label="昵称详情" />;
                }}
              </ProFormDependency>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '8px',
                  height: 60,
                }}
              >
                <Button
                  type="primary"
                  key="SET"
                  onClick={() => {
                    action.setCurrentRowData({
                      name: 'New Name' + index,
                      remark: 'New Remark' + index,
                    });
                  }}
                >
                  设置此项
                </Button>

                <Button
                  type="dashed"
                  key="clear"
                  onClick={() => {
                    action.setCurrentRowData({
                      name: undefined,
                      remark: undefined,
                    });
                  }}
                >
                  清空此项
                </Button>
              </div>
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

﻿import {
  ProForm,
  ProFormDatePicker,
  ProFormDigit,
  ProFormFieldSet,
  ProFormGroup,
  ProFormList,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [position, setPosition] = useState<'bottom' | 'top'>('bottom');
  return (
    <ConfigProvider componentSize="small">
      <ProFormRadio.Group
        fieldProps={{
          value: position,
          onChange: (e) => setPosition(e.target.value),
        }}
        options={[
          {
            label: '顶部',
            value: 'top',
          },
          {
            label: '底部',
            value: 'bottom',
          },
        ]}
      />
      <ProForm
        onFinish={async (values) => {
          console.log('Received values of form:', values);
        }}
      >
        <ProFormText width="sm" name="id" label="主合同编号" />
        <ProFormText
          name="project"
          width="md"
          label="项目名称"
          initialValue="xxxx项目"
        />
        <ProFormText
          width="xs"
          name="mangerName"
          label="商务经理"
          initialValue="启途"
        />
        <ProFormList
          name="users"
          label="用户信息"
          rules={[
            {
              required: true,
              validator: async (_, value) => {
                console.log(value);
                if (value && value.length > 0) {
                  return;
                }
                throw new Error('至少要有一项！');
              },
            },
          ]}
          creatorButtonProps={{
            position,
          }}
          creatorRecord={{
            name: 'test',
          }}
          initialValue={[
            {
              name: '1111',
              nickName: '1111',
              age: 111,
              birth: '2021-02-18',
              sex: 'man',
              addrList: [{ addr: ['taiyuan', 'changfeng'] }],
            },
          ]}
        >
          <ProFormGroup key="group">
            <ProFormText
              rules={[
                {
                  required: true,
                },
              ]}
              name="name"
              label="姓名"
            />
            <ProFormDigit name="age" label="年龄" width="sm" />
            <ProFormSelect
              label="性别"
              name="sex"
              width="xs"
              valueEnum={{
                man: '男性',
                woman: '女性',
              }}
            />
            <ProFormDatePicker name="birth" label="出生日期" />
            <ProFormFieldSet name="addr" label="地址">
              <ProFormSelect
                valueEnum={{
                  taiyuan: '山西',
                  hangzhou: '杭州',
                }}
              />
              <ProFormSelect
                valueEnum={{
                  changfeng: '长风街',
                  gongzhuan: '工专路',
                }}
              />
            </ProFormFieldSet>
          </ProFormGroup>
        </ProFormList>
      </ProForm>
    </ConfigProvider>
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
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <ProForm layout="horizontal">
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

﻿import {
  ProForm,
  ProFormDependency,
  ProFormList,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <ProForm>
      <ProFormList
        name={['default', 'users']}
        label="用户信息"
        initialValue={[
          {
            name: '我是姓名',
          },
        ]}
        itemContainerRender={(doms) => {
          return <ProForm.Group>{doms}</ProForm.Group>;
        }}
      >
        {(f, index, action) => {
          console.log(f, index, action);
          return (
            <>
              <ProFormText
                initialValue={index}
                name="rowKey"
                label={`第 ${index} 配置`}
              />
              <ProFormText name="name" label="姓名" />
              <ProFormDependency name={['name']}>
                {({ name }) => {
                  if (!name) {
                    return (
                      <span
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        输入姓名展示
                      </span>
                    );
                  }
                  return <ProFormText name="remark" label="昵称详情" />;
                }}
              </ProFormDependency>
              <ProFormSelect
                name="addr"
                width="md"
                label="与 name 联动的选择器"
                dependencies={['name']}
                request={async (params) => [
                  { label: params.name, value: 'all' },
                  { label: 'Unresolved', value: 'open' },
                  { label: 'Resolved', value: 'closed' },
                  { label: 'Resolving', value: 'processing' },
                ]}
              />
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

﻿/* eslint-disable no-param-reassign */ import {
  CopyOutlined,
  DeleteOutlined,
  HeartOutlined,
  HomeOutlined,
  PlusOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import {
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormField,
  ProFormList,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-components';
import { useState } from 'react';

const IconMap = {
  PlusOutlined,
  HeartOutlined,
  DeleteOutlined,
  CopyOutlined,
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
};
const initialValue = {
  copyIconProps: {
    show: true,
    Icon: 'CopyOutlined',
    tooltipText: '复制此项',
  },
  deleteIconProps: {
    show: true,
    Icon: 'DeleteOutlined',
    tooltipText: '删除此项',
  },
  creatorButtonProps: {
    show: true,
    creatorButtonText: '新建一行',
    position: 'button',
    type: 'dashed',
    icon: 'PlusOutlined',
  },
};
const Demo = () => {
  const [stateValue, setStateValue] = useState({});
  const [json, setJson] = useState(() => JSON.stringify(initialValue));
  return (
    <ProCard variant="outlined" split="vertical" headerBordered>
      <ProCard colSpan="calc(100% - 400px)">
        <ProForm>
          <ProFormList
            name="users"
            label="用户信息"
            initialValue={[
              {
                name: '1111',
              },
            ]}
            creatorButtonProps={{
              position: 'bottom',
            }}
            {...stateValue}
          >
            <ProForm.Group key="group" size={8}>
              <ProFormText name="name" label="姓名" />
              <ProFormText name="nickName" label="姓名" />
            </ProForm.Group>
          </ProFormList>
        </ProForm>
      </ProCard>
      <ProCard colSpan="400px" title="配置菜单">
        <ProForm
          submitter={false}
          initialValues={initialValue}
          onValuesChange={(_, values) => {
            if (values?.creatorButtonProps?.show === false) {
              values.creatorButtonProps = false;
            }

            if (values?.copyIconProps?.show === false) {
              values.copyIconProps = false;
            }
            if (values?.deleteIconProps?.show === false) {
              values.deleteIconProps = false;
            }

            delete values.creatorButtonProps.show;
            delete values.deleteIconProps.show;
            delete values.creatorButtonProps.show;

            setJson(JSON.stringify(values));

            if (values?.copyIconProps?.Icon) {
              values.copyIconProps.Icon =
                IconMap[values?.copyIconProps?.Icon as 'PlusOutlined'];
            }

            if (values?.deleteIconProps?.Icon) {
              values.deleteIconProps.Icon =
                IconMap[values?.deleteIconProps?.Icon as 'PlusOutlined'];
            }
            if (values?.creatorButtonProps?.icon) {
              const Icon =
                IconMap[values?.creatorButtonProps?.icon as 'PlusOutlined'];
              values.creatorButtonProps.icon = <Icon />;
            }
            setStateValue(values);
          }}
        >
          <ProForm.Group
            title="新建按钮配置"
            extra={
              <ProFormSwitch
                fieldProps={{
                  size: 'small',
                }}
                noStyle
                name={['creatorButtonProps', 'show']}
              />
            }
          >
            <ProFormDependency name={['creatorButtonProps']}>
              {({ creatorButtonProps }) => {
                if (!creatorButtonProps.show) {
                  return null;
                }
                return (
                  <ProForm.Group size={8}>
                    <ProFormText
                      width="sm"
                      name={['creatorButtonProps', 'creatorButtonText']}
                      label="按钮文字"
                    />
                    <ProFormSelect
                      width="xs"
                      name={['creatorButtonProps', 'icon']}
                      label="图标"
                      request={async () => {
                        return Object.keys(IconMap).map((value) => {
                          const Icon = IconMap[value as 'PlusOutlined'];
                          return {
                            label: <Icon />,
                            value,
                          };
                        });
                      }}
                    />
                    <ProFormSelect
                      width="xs"
                      name={['creatorButtonProps', 'position']}
                      label="按钮位置"
                      request={async () => {
                        return ['bottom', 'top'].map((value) => {
                          return {
                            label: value,
                            value,
                          };
                        });
                      }}
                    />
                    <ProFormSelect
                      width="xs"
                      name={['creatorButtonProps', 'type']}
                      label="按钮类型"
                      request={async () => {
                        return [
                          'default',
                          'primary',
                          'ghost',
                          'dashed',
                          'link',
                          'text',
                        ].map((value) => {
                          return {
                            label: value,
                            value,
                          };
                        });
                      }}
                    />
                  </ProForm.Group>
                );
              }}
            </ProFormDependency>
          </ProForm.Group>

          <ProForm.Group
            title="复制按钮配置"
            extra={
              <ProFormSwitch
                fieldProps={{
                  size: 'small',
                }}
                noStyle
                name={['copyIconProps', 'show']}
              />
            }
          >
            <ProFormDependency name={['copyIconProps']}>
              {({ copyIconProps }) => {
                if (!copyIconProps.show) {
                  return null;
                }
                return (
                  <ProForm.Group size={8}>
                    <ProFormText
                      width="sm"
                      name={['copyIconProps', 'tooltipText']}
                      label=" tooltip 提示文字"
                    />
                    <ProFormSelect
                      width="xs"
                      name={['copyIconProps', 'Icon']}
                      label="图标"
                      request={async () => {
                        return Object.keys(IconMap).map((value) => {
                          const Icon = IconMap[value as 'PlusOutlined'];
                          return {
                            label: <Icon />,
                            value,
                          };
                        });
                      }}
                    />
                  </ProForm.Group>
                );
              }}
            </ProFormDependency>
          </ProForm.Group>
          <ProForm.Group
            title="删除按钮配置"
            extra={
              <ProFormSwitch
                fieldProps={{
                  size: 'small',
                }}
                noStyle
                name={['deleteIconProps', 'show']}
              />
            }
          >
            <ProFormDependency name={['deleteIconProps']}>
              {({ deleteIconProps }) => {
                if (!deleteIconProps.show) {
                  return null;
                }
                return (
                  <ProForm.Group size={8}>
                    <ProFormText
                      width="sm"
                      name={['deleteIconProps', 'tooltipText']}
                      label=" tooltip 提示文字"
                    />
                    <ProFormSelect
                      width="xs"
                      name={['deleteIconProps', 'Icon']}
                      label="图标"
                      request={async () => {
                        return Object.keys(IconMap).map((value) => {
                          const Icon = IconMap[value as 'PlusOutlined'];
                          return {
                            label: <Icon />,
                            value,
                          };
                        });
                      }}
                    />
                  </ProForm.Group>
                );
              }}
            </ProFormDependency>
          </ProForm.Group>
          <ProFormField
            ignoreFormItem
            valueType="jsonCode"
            text={json}
            mode="read"
          />
        </ProForm>
      </ProCard>
    </ProCard>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { CloseCircleOutlined, SmileOutlined } from '@ant-design/icons';
import {
  ProForm,
  ProFormGroup,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';
import { Segmented } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [readonly, setReadonly] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <ProForm.Item name="mode" label="模式">
        <Segmented
          block
          options={[
            {
              label: '编辑',
              title: '编辑',
              value: 'edit',
            },
            {
              label: '只读',
              title: '只读',
              value: 'readonly',
            },
          ]}
          onChange={(e) => {
            setReadonly(e === 'readonly');
          }}
        />
      </ProForm.Item>
      <ProForm readonly={readonly} onFinish={async (e) => console.log(e)}>
        <ProFormText name="name" label="姓名" />

        <ProFormList
          name="labels"
          label="用户信息"
          initialValue={[
            {
              value: '333',
              label: '333',
            },
          ]}
          copyIconProps={{ Icon: SmileOutlined, tooltipText: '复制此项到末尾' }}
          deleteIconProps={{
            Icon: CloseCircleOutlined,
            tooltipText: '不需要这行了',
          }}
        >
          <ProFormGroup key="group">
            <ProFormText name="value" label="值" />
            <ProFormText name="label" label="显示名称" />
          </ProFormGroup>
        </ProFormList>
      </ProForm>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { FormListActionType } from '@ant-design/pro-components';
import {
  ProCard,
  ProForm,
  ProFormGroup,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';
import { useRef } from 'react';

const Demo = () => {
  const actionRef = useRef<
    FormListActionType<{
      name: string;
    }>
  >();
  return (
    <>
      <Space
        style={{
          marginBlockEnd: 24,
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            const list = actionRef.current?.getList();
            actionRef.current?.add({
              name: '新增' + list?.length,
            });
          }}
        >
          增加一行
        </Button>
        <Button
          danger
          onClick={() => {
            actionRef.current?.remove(1);
          }}
        >
          删除一行
        </Button>
        <Button
          onClick={() => {
            actionRef.current?.move(1, 0);
          }}
        >
          移动到第一行
        </Button>
        <Button
          type="dashed"
          onClick={() => {
            const row = actionRef.current?.get(1);
            console.log(row);
          }}
        >
          获取一行数据
        </Button>
        <Button
          type="dashed"
          onClick={() => {
            const row = actionRef.current?.getList();
            console.log(row);
          }}
        >
          获取所有数据
        </Button>
      </Space>
      <ProForm onFinish={async (e) => console.log(e)}>
        <ProFormList
          name="users"
          label="用户信息"
          initialValue={[
            {
              name: '1111',
            },
          ]}
          creatorRecord={{
            name: '222',
          }}
          actionGuard={{
            beforeAddRow: async (defaultValue, insertIndex) => {
              return new Promise((resolve) => {
                console.log(defaultValue, insertIndex);
                setTimeout(() => resolve(true), 1000);
              });
            },
            beforeRemoveRow: async (index) => {
              return new Promise((resolve) => {
                if (index === 0) {
                  message.error('这行不能删');
                  resolve(false);
                  return;
                }
                setTimeout(() => resolve(true), 1000);
              });
            },
          }}
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
          actionRef={actionRef}
        >
          <ProFormGroup key="group">
            <ProFormText name="name" label="姓名" />
            <ProFormText name="age" label="年龄" />
          </ProFormGroup>
        </ProFormList>
      </ProForm>
    </>
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
  ProFormGroup,
  ProFormList,
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
          <ProFormText name="nickName" label="昵称" />
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
          <ProFormGroup key="group">
            <ProFormText name="value" label="值" />
            <ProFormText name="label" label="显示名称" />
          </ProFormGroup>
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

import { CloseOutlined, SnippetsOutlined } from '@ant-design/icons';
import type { FormListActionType } from '@ant-design/pro-components';
import { ProForm, ProFormList, ProFormText } from '@ant-design/pro-components';
import { useRef } from 'react';

const Demo = () => {
  const actionRef = useRef<
    FormListActionType<{
      name: string;
    }>
  >();
  return (
    <>
      <ProForm>
        <ProFormList
          copyIconProps={{
            Icon: SnippetsOutlined,
          }}
          deleteIconProps={{
            Icon: CloseOutlined,
          }}
          min={1}
          max={4}
          actionRef={actionRef}
          actionGuard={{
            beforeAddRow: async (defaultValue, insertIndex, count) => {
              return new Promise((resolve) => {
                console.log(defaultValue?.name, insertIndex, count);
                setTimeout(() => resolve(true), 1000);
              });
            },
            beforeRemoveRow: async (index, count) => {
              const row = actionRef.current?.get(index as number);
              console.log('--->', index, count, row);
              return new Promise((resolve) => {
                if (index === 0) {
                  resolve(false);
                  return;
                }
                setTimeout(() => resolve(true), 1000);
              });
            },
          }}
          name="users"
          label="用户信息"
          initialValue={[
            {
              name: '1111',
            },
          ]}
        >
          <ProFormText key="useMode" name="name" label="姓名" />
        </ProFormList>
      </ProForm>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import {
  ProForm,
  ProFormGroup,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <ProForm onFinish={async (e) => console.log(e)}>
        <ProFormText name="name" label="姓名" />

        <ProFormList
          name="labels"
          label="用户信息"
          initialValue={[
            {
              value: '111',
              label: '111',
            },
            {
              value: '222',
              label: '222',
            },
            {
              value: '333',
              label: '333',
            },
          ]}
          arrowSort={true}
          upIconProps={{ tooltipText: '' }}
        >
          <ProFormGroup key="group">
            <ProFormText name="value" label="值" />
            <ProFormText name="label" label="显示名称" />
          </ProFormGroup>
        </ProFormList>
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
  ProFormDependency,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';

const Demo = () => {
  return (
    <ProForm>
      <ProFormList
        name={['default', 'users']}
        label="用户信息"
        initialValue={[
          {
            name: '1111',
          },
        ]}
        itemContainerRender={(doms) => {
          return <ProForm.Group>{doms}</ProForm.Group>;
        }}
        alwaysShowItemLabel
      >
        {(f, index, action) => {
          console.log(f, index, action);
          return (
            <>
              <ProFormText
                initialValue={index}
                name="rowKey"
                label={`第 ${index} 配置`}
              />
              <ProFormText name="name" key="name" label="姓名" />
              <ProFormDependency key="remark" name={['name']}>
                {({ name }) => {
                  if (!name) {
                    return (
                      <span
                        style={{
                          lineHeight: '92px',
                        }}
                      >
                        输入姓名展示
                      </span>
                    );
                  }
                  return <ProFormText name="remark" label="昵称详情" />;
                }}
              </ProFormDependency>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '8px',
                  height: 60,
                }}
              >
                <Button
                  type="primary"
                  key="SET"
                  onClick={() => {
                    action.setCurrentRowData({
                      name: 'New Name' + index,
                      remark: 'New Remark' + index,
                    });
                  }}
                >
                  设置此项
                </Button>

                <Button
                  type="dashed"
                  key="clear"
                  onClick={() => {
                    action.setCurrentRowData({
                      name: undefined,
                      remark: undefined,
                    });
                  }}
                >
                  清空此项
                </Button>
              </div>
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

﻿import {
  ProForm,
  ProFormDatePicker,
  ProFormDigit,
  ProFormFieldSet,
  ProFormGroup,
  ProFormList,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [position, setPosition] = useState<'bottom' | 'top'>('bottom');
  return (
    <ConfigProvider componentSize="small">
      <ProFormRadio.Group
        fieldProps={{
          value: position,
          onChange: (e) => setPosition(e.target.value),
        }}
        options={[
          {
            label: '顶部',
            value: 'top',
          },
          {
            label: '底部',
            value: 'bottom',
          },
        ]}
      />
      <ProForm
        onFinish={async (values) => {
          console.log('Received values of form:', values);
        }}
      >
        <ProFormText width="sm" name="id" label="主合同编号" />
        <ProFormText
          name="project"
          width="md"
          label="项目名称"
          initialValue="xxxx项目"
        />
        <ProFormText
          width="xs"
          name="mangerName"
          label="商务经理"
          initialValue="启途"
        />
        <ProFormList
          name="users"
          label="用户信息"
          rules={[
            {
              required: true,
              validator: async (_, value) => {
                console.log(value);
                if (value && value.length > 0) {
                  return;
                }
                throw new Error('至少要有一项！');
              },
            },
          ]}
          creatorButtonProps={{
            position,
          }}
          creatorRecord={{
            name: 'test',
          }}
          initialValue={[
            {
              name: '1111',
              nickName: '1111',
              age: 111,
              birth: '2021-02-18',
              sex: 'man',
              addrList: [{ addr: ['taiyuan', 'changfeng'] }],
            },
          ]}
        >
          <ProFormGroup key="group">
            <ProFormText
              rules={[
                {
                  required: true,
                },
              ]}
              name="name"
              label="姓名"
            />
            <ProFormDigit name="age" label="年龄" width="sm" />
            <ProFormSelect
              label="性别"
              name="sex"
              width="xs"
              valueEnum={{
                man: '男性',
                woman: '女性',
              }}
            />
            <ProFormDatePicker name="birth" label="出生日期" />
            <ProFormFieldSet name="addr" label="地址">
              <ProFormSelect
                valueEnum={{
                  taiyuan: '山西',
                  hangzhou: '杭州',
                }}
              />
              <ProFormSelect
                valueEnum={{
                  changfeng: '长风街',
                  gongzhuan: '工专路',
                }}
              />
            </ProFormFieldSet>
          </ProFormGroup>
        </ProFormList>
      </ProForm>
    </ConfigProvider>
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
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <ProForm layout="horizontal">
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

﻿import {
  ProForm,
  ProFormDependency,
  ProFormList,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <ProForm>
      <ProFormList
        name={['default', 'users']}
        label="用户信息"
        initialValue={[
          {
            name: '我是姓名',
          },
        ]}
        itemContainerRender={(doms) => {
          return <ProForm.Group>{doms}</ProForm.Group>;
        }}
      >
        {(f, index, action) => {
          console.log(f, index, action);
          return (
            <>
              <ProFormText
                initialValue={index}
                name="rowKey"
                label={`第 ${index} 配置`}
              />
              <ProFormText name="name" label="姓名" />
              <ProFormDependency name={['name']}>
                {({ name }) => {
                  if (!name) {
                    return (
                      <span
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        输入姓名展示
                      </span>
                    );
                  }
                  return <ProFormText name="remark" label="昵称详情" />;
                }}
              </ProFormDependency>
              <ProFormSelect
                name="addr"
                width="md"
                label="与 name 联动的选择器"
                dependencies={['name']}
                request={async (params) => [
                  { label: params.name, value: 'all' },
                  { label: 'Unresolved', value: 'open' },
                  { label: 'Resolved', value: 'closed' },
                  { label: 'Resolving', value: 'processing' },
                ]}
              />
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

﻿/* eslint-disable no-param-reassign */ import {
  CopyOutlined,
  DeleteOutlined,
  HeartOutlined,
  HomeOutlined,
  PlusOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import {
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormField,
  ProFormList,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-components';
import { useState } from 'react';

const IconMap = {
  PlusOutlined,
  HeartOutlined,
  DeleteOutlined,
  CopyOutlined,
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
};
const initialValue = {
  copyIconProps: {
    show: true,
    Icon: 'CopyOutlined',
    tooltipText: '复制此项',
  },
  deleteIconProps: {
    show: true,
    Icon: 'DeleteOutlined',
    tooltipText: '删除此项',
  },
  creatorButtonProps: {
    show: true,
    creatorButtonText: '新建一行',
    position: 'button',
    type: 'dashed',
    icon: 'PlusOutlined',
  },
};
const Demo = () => {
  const [stateValue, setStateValue] = useState({});
  const [json, setJson] = useState(() => JSON.stringify(initialValue));
  return (
    <ProCard variant="outlined" split="vertical" headerBordered>
      <ProCard colSpan="calc(100% - 400px)">
        <ProForm>
          <ProFormList
            name="users"
            label="用户信息"
            initialValue={[
              {
                name: '1111',
              },
            ]}
            creatorButtonProps={{
              position: 'bottom',
            }}
            {...stateValue}
          >
            <ProForm.Group key="group" size={8}>
              <ProFormText name="name" label="姓名" />
              <ProFormText name="nickName" label="姓名" />
            </ProForm.Group>
          </ProFormList>
        </ProForm>
      </ProCard>
      <ProCard colSpan="400px" title="配置菜单">
        <ProForm
          submitter={false}
          initialValues={initialValue}
          onValuesChange={(_, values) => {
            if (values?.creatorButtonProps?.show === false) {
              values.creatorButtonProps = false;
            }

            if (values?.copyIconProps?.show === false) {
              values.copyIconProps = false;
            }
            if (values?.deleteIconProps?.show === false) {
              values.deleteIconProps = false;
            }

            delete values.creatorButtonProps.show;
            delete values.deleteIconProps.show;
            delete values.creatorButtonProps.show;

            setJson(JSON.stringify(values));

            if (values?.copyIconProps?.Icon) {
              values.copyIconProps.Icon =
                IconMap[values?.copyIconProps?.Icon as 'PlusOutlined'];
            }

            if (values?.deleteIconProps?.Icon) {
              values.deleteIconProps.Icon =
                IconMap[values?.deleteIconProps?.Icon as 'PlusOutlined'];
            }
            if (values?.creatorButtonProps?.icon) {
              const Icon =
                IconMap[values?.creatorButtonProps?.icon as 'PlusOutlined'];
              values.creatorButtonProps.icon = <Icon />;
            }
            setStateValue(values);
          }}
        >
          <ProForm.Group
            title="新建按钮配置"
            extra={
              <ProFormSwitch
                fieldProps={{
                  size: 'small',
                }}
                noStyle
                name={['creatorButtonProps', 'show']}
              />
            }
          >
            <ProFormDependency name={['creatorButtonProps']}>
              {({ creatorButtonProps }) => {
                if (!creatorButtonProps.show) {
                  return null;
                }
                return (
                  <ProForm.Group size={8}>
                    <ProFormText
                      width="sm"
                      name={['creatorButtonProps', 'creatorButtonText']}
                      label="按钮文字"
                    />
                    <ProFormSelect
                      width="xs"
                      name={['creatorButtonProps', 'icon']}
                      label="图标"
                      request={async () => {
                        return Object.keys(IconMap).map((value) => {
                          const Icon = IconMap[value as 'PlusOutlined'];
                          return {
                            label: <Icon />,
                            value,
                          };
                        });
                      }}
                    />
                    <ProFormSelect
                      width="xs"
                      name={['creatorButtonProps', 'position']}
                      label="按钮位置"
                      request={async () => {
                        return ['bottom', 'top'].map((value) => {
                          return {
                            label: value,
                            value,
                          };
                        });
                      }}
                    />
                    <ProFormSelect
                      width="xs"
                      name={['creatorButtonProps', 'type']}
                      label="按钮类型"
                      request={async () => {
                        return [
                          'default',
                          'primary',
                          'ghost',
                          'dashed',
                          'link',
                          'text',
                        ].map((value) => {
                          return {
                            label: value,
                            value,
                          };
                        });
                      }}
                    />
                  </ProForm.Group>
                );
              }}
            </ProFormDependency>
          </ProForm.Group>

          <ProForm.Group
            title="复制按钮配置"
            extra={
              <ProFormSwitch
                fieldProps={{
                  size: 'small',
                }}
                noStyle
                name={['copyIconProps', 'show']}
              />
            }
          >
            <ProFormDependency name={['copyIconProps']}>
              {({ copyIconProps }) => {
                if (!copyIconProps.show) {
                  return null;
                }
                return (
                  <ProForm.Group size={8}>
                    <ProFormText
                      width="sm"
                      name={['copyIconProps', 'tooltipText']}
                      label=" tooltip 提示文字"
                    />
                    <ProFormSelect
                      width="xs"
                      name={['copyIconProps', 'Icon']}
                      label="图标"
                      request={async () => {
                        return Object.keys(IconMap).map((value) => {
                          const Icon = IconMap[value as 'PlusOutlined'];
                          return {
                            label: <Icon />,
                            value,
                          };
                        });
                      }}
                    />
                  </ProForm.Group>
                );
              }}
            </ProFormDependency>
          </ProForm.Group>
          <ProForm.Group
            title="删除按钮配置"
            extra={
              <ProFormSwitch
                fieldProps={{
                  size: 'small',
                }}
                noStyle
                name={['deleteIconProps', 'show']}
              />
            }
          >
            <ProFormDependency name={['deleteIconProps']}>
              {({ deleteIconProps }) => {
                if (!deleteIconProps.show) {
                  return null;
                }
                return (
                  <ProForm.Group size={8}>
                    <ProFormText
                      width="sm"
                      name={['deleteIconProps', 'tooltipText']}
                      label=" tooltip 提示文字"
                    />
                    <ProFormSelect
                      width="xs"
                      name={['deleteIconProps', 'Icon']}
                      label="图标"
                      request={async () => {
                        return Object.keys(IconMap).map((value) => {
                          const Icon = IconMap[value as 'PlusOutlined'];
                          return {
                            label: <Icon />,
                            value,
                          };
                        });
                      }}
                    />
                  </ProForm.Group>
                );
              }}
            </ProFormDependency>
          </ProForm.Group>
          <ProFormField
            ignoreFormItem
            valueType="jsonCode"
            text={json}
            mode="read"
          />
        </ProForm>
      </ProCard>
    </ProCard>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { CloseCircleOutlined, SmileOutlined } from '@ant-design/icons';
import {
  ProForm,
  ProFormGroup,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';
import { Segmented } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [readonly, setReadonly] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <ProForm.Item name="mode" label="模式">
        <Segmented
          block
          options={[
            {
              label: '编辑',
              title: '编辑',
              value: 'edit',
            },
            {
              label: '只读',
              title: '只读',
              value: 'readonly',
            },
          ]}
          onChange={(e) => {
            setReadonly(e === 'readonly');
          }}
        />
      </ProForm.Item>
      <ProForm readonly={readonly} onFinish={async (e) => console.log(e)}>
        <ProFormText name="name" label="姓名" />

        <ProFormList
          name="labels"
          label="用户信息"
          initialValue={[
            {
              value: '333',
              label: '333',
            },
          ]}
          copyIconProps={{ Icon: SmileOutlined, tooltipText: '复制此项到末尾' }}
          deleteIconProps={{
            Icon: CloseCircleOutlined,
            tooltipText: '不需要这行了',
          }}
        >
          <ProFormGroup key="group">
            <ProFormText name="value" label="值" />
            <ProFormText name="label" label="显示名称" />
          </ProFormGroup>
        </ProFormList>
      </ProForm>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { FormListActionType } from '@ant-design/pro-components';
import {
  ProCard,
  ProForm,
  ProFormGroup,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';
import { useRef } from 'react';

const Demo = () => {
  const actionRef = useRef<
    FormListActionType<{
      name: string;
    }>
  >();
  return (
    <>
      <Space
        style={{
          marginBlockEnd: 24,
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            const list = actionRef.current?.getList();
            actionRef.current?.add({
              name: '新增' + list?.length,
            });
          }}
        >
          增加一行
        </Button>
        <Button
          danger
          onClick={() => {
            actionRef.current?.remove(1);
          }}
        >
          删除一行
        </Button>
        <Button
          onClick={() => {
            actionRef.current?.move(1, 0);
          }}
        >
          移动到第一行
        </Button>
        <Button
          type="dashed"
          onClick={() => {
            const row = actionRef.current?.get(1);
            console.log(row);
          }}
        >
          获取一行数据
        </Button>
        <Button
          type="dashed"
          onClick={() => {
            const row = actionRef.current?.getList();
            console.log(row);
          }}
        >
          获取所有数据
        </Button>
      </Space>
      <ProForm onFinish={async (e) => console.log(e)}>
        <ProFormList
          name="users"
          label="用户信息"
          initialValue={[
            {
              name: '1111',
            },
          ]}
          creatorRecord={{
            name: '222',
          }}
          actionGuard={{
            beforeAddRow: async (defaultValue, insertIndex) => {
              return new Promise((resolve) => {
                console.log(defaultValue, insertIndex);
                setTimeout(() => resolve(true), 1000);
              });
            },
            beforeRemoveRow: async (index) => {
              return new Promise((resolve) => {
                if (index === 0) {
                  message.error('这行不能删');
                  resolve(false);
                  return;
                }
                setTimeout(() => resolve(true), 1000);
              });
            },
          }}
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
          actionRef={actionRef}
        >
          <ProFormGroup key="group">
            <ProFormText name="name" label="姓名" />
            <ProFormText name="age" label="年龄" />
          </ProFormGroup>
        </ProFormList>
      </ProForm>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

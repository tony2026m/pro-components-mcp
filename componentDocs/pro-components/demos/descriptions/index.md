

import { ProDescriptions } from '@ant-design/pro-components';
import { Input, Tooltip } from 'antd';
import { useRef } from 'react';

const Demo = () => {
  const actionRef = useRef();
  return (
    <>
      <ProDescriptions
        actionRef={actionRef}
        //   variant="outlined"
        formProps={{
          onValuesChange: (e, f) => console.log(f),
        }}
        title="可编辑的定义列表"
        request={async () => {
          return Promise.resolve({
            success: true,
            data: {
              rate: 5,
              id: '这是一段文本columns',
              date: '20200809',
              money: '1212100',
              state: 'all',
              state2: 'open',
              textarea:
                '这是一个文本域-这是一个文本域-这是一个文本域-这是一个文本域-这是一个文本域-这是一个文本域-这是一个文本域-这是一个文本域-这是一个文本域',
            },
          });
        }}
        editable={{}}
        columns={[
          {
            title: '文本',
            key: 'text',
            dataIndex: 'id',
            copyable: true,
            ellipsis: true,
          },
          {
            title: '状态',
            key: 'state',
            dataIndex: 'state',
            valueType: 'select',
            editable: false,
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
            title: '文本域',
            key: 'textarea',
            dataIndex: 'textarea',
            valueType: 'textarea',
            formItemProps: {
              style: {
                flex: 1,
              },
            },
          },
          {
            title: '状态2',
            key: 'state2',
            dataIndex: 'state2',
            formItemRender: () => {
              return <Input placeholder="输入 Success 切换分值" />;
            },
          },
          {
            title: '分值',
            dataIndex: 'fraction',
            valueType: (record) => {
              const scoringMethod = record?.state2;
              if (scoringMethod === 'Success') return 'select';
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
            title: '时间',
            key: 'date',
            dataIndex: 'date',
            valueType: 'date',
          },
          {
            title: 'Rate',
            key: 'rate',
            dataIndex: 'rate',
            valueType: 'rate',
          },
          {
            title: 'money',
            key: 'money',
            dataIndex: 'money',
            valueType: 'money',
            render: (dom, entity, index, action) => {
              return (
                <Tooltip title="点击进入编辑状态">
                  <div
                    onClick={() => {
                      action?.startEditable('money');
                    }}
                  >
                    {dom}
                  </div>
                </Tooltip>
              );
            },
          },
          {
            title: '操作',
            valueType: 'option',
            render: () => [
              <a target="_blank" rel="noopener noreferrer" key="link">
                链路
              </a>,
              <a target="_blank" rel="noopener noreferrer" key="warning">
                报警
              </a>,
              <a target="_blank" rel="noopener noreferrer" key="view">
                查看
              </a>,
            ],
          },
        ]}
      >
        <ProDescriptions.Item
          dataIndex="percent"
          label="百分比"
          valueType="percent"
        >
          100
        </ProDescriptions.Item>
      </ProDescriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions 可编辑功能 Props 说明：</h4>
        <ul>
          <li>
            <strong>actionRef</strong>: 操作引用，用于调用组件方法
          </li>
          <li>
            <strong>formProps</strong>: 表单属性配置
          </li>
          <li>
            <strong>title</strong>: 描述列表标题
          </li>
          <li>
            <strong>request</strong>: 异步请求函数
          </li>
          <li>
            <strong>editable</strong>: 可编辑配置
          </li>
          <li>
            <strong>columns</strong>: 列配置数组
          </li>
        </ul>
        <h4>FormProps 表单配置：</h4>
        <ul>
          <li>
            <strong>onValuesChange</strong>: 表单值变化时的回调函数
          </li>
          <li>
            <strong>其他表单属性</strong>: 支持所有 Form 组件的属性
          </li>
        </ul>
        <h4>Column 可编辑配置：</h4>
        <ul>
          <li>
            <strong>copyable</strong>: 是否可复制
          </li>
          <li>
            <strong>ellipsis</strong>: 是否显示省略号
          </li>
          <li>
            <strong>editable</strong>: 是否可编辑，false 表示禁用编辑
          </li>
          <li>
            <strong>formItemProps</strong>: 表单项属性配置
          </li>
          <li>
            <strong>formItemRender</strong>: 自定义表单项渲染函数
          </li>
        </ul>
        <h4>ValueType 动态配置：</h4>
        <ul>
          <li>
            <strong>函数形式</strong>: valueType: (record) =&gt; string
          </li>
          <li>
            <strong>条件判断</strong>: 根据数据动态返回 valueType
          </li>
          <li>
            <strong>数据依赖</strong>: 基于当前行数据决定显示类型
          </li>
        </ul>
        <h4>FieldProps 字段属性：</h4>
        <ul>
          <li>
            <strong>mode</strong>: 选择模式，'multiple' 表示多选
          </li>
          <li>
            <strong>其他属性</strong>: 根据 valueType 传递相应属性
          </li>
        </ul>
        <h4>Request 远程数据：</h4>
        <ul>
          <li>
            <strong>异步函数</strong>: 返回 Promise 对象
          </li>
          <li>
            <strong>数据格式</strong>: [{'{'} label: string, value: any {'}'}]
          </li>
          <li>
            <strong>动态选项</strong>: 根据条件动态生成选项
          </li>
        </ul>
        <h4>Render 自定义渲染：</h4>
        <ul>
          <li>
            <strong>参数</strong>: (dom, entity, index, action)
          </li>
          <li>
            <strong>dom</strong>: 默认渲染的 DOM
          </li>
          <li>
            <strong>entity</strong>: 当前行数据
          </li>
          <li>
            <strong>index</strong>: 行索引
          </li>
          <li>
            <strong>action</strong>: 操作对象，包含 startEditable 等方法
          </li>
        </ul>
        <h4>Action 操作方法：</h4>
        <ul>
          <li>
            <strong>startEditable</strong>: 开始编辑指定字段
          </li>
          <li>
            <strong>cancelEditable</strong>: 取消编辑
          </li>
          <li>
            <strong>saveEditable</strong>: 保存编辑
          </li>
        </ul>
        <h4>ValueType 类型：</h4>
        <ul>
          <li>
            <strong>select</strong>: 选择框，配合 valueEnum 使用
          </li>
          <li>
            <strong>textarea</strong>: 文本域
          </li>
          <li>
            <strong>date</strong>: 日期选择器
          </li>
          <li>
            <strong>rate</strong>: 评分组件
          </li>
          <li>
            <strong>money</strong>: 金额格式
          </li>
          <li>
            <strong>percent</strong>: 百分比格式
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>内联编辑</strong>: 直接在列表中编辑数据
          </li>
          <li>
            <strong>条件编辑</strong>: 根据条件控制编辑状态
          </li>
          <li>
            <strong>动态表单</strong>: 根据数据动态生成表单
          </li>
          <li>
            <strong>交互操作</strong>: 提供丰富的交互操作
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>编辑控制</strong>: 合理控制哪些字段可编辑
          </li>
          <li>
            <strong>用户体验</strong>: 提供清晰的编辑反馈
          </li>
          <li>
            <strong>数据验证</strong>: 在编辑时进行数据验证
          </li>
          <li>
            <strong>状态管理</strong>: 合理管理编辑状态
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProDescriptions } from '@ant-design/pro-components';
import { Button } from 'antd';

const Demo = () => {
  return (
    <>
      <ProDescriptions.Item label="文本" valueType="option">
        <Button key="primary" type="primary">
          提交
        </Button>
      </ProDescriptions.Item>
      <ProDescriptions
        column={2}
        title="高级定义列表"
        tooltip="包含了从服务器请求，columns等功能"
        request={async () => ({
          data: [{ id: 1, money: 12345 }],
          success: true,
        })}
        columns={[
          {
            title: () => '文本 2',
            key: 'text',
            dataIndex: 'id',
          },
          {
            title: 'money',
            key: 'money',
            dataIndex: 'money',
            valueType: { type: 'money', showSymbol: false },
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

import { ProDescriptions } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProDescriptions
        title="dataSource and columns"
        dataSource={{
          id: '这是一段文本columns',
          date: '20200809',
          money: '1212100',
          state: 'all',
          state2: 'open',
        }}
        columns={[
          {
            title: '文本',
            key: 'text',
            dataIndex: 'id',
            ellipsis: true,
            copyable: true,
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
            title: '状态2',
            key: 'state2',
            dataIndex: 'state2',
          },
          {
            title: '时间',
            key: 'date',
            dataIndex: 'date',
            valueType: 'date',
          },
          {
            title: 'money',
            key: 'money',
            dataIndex: 'money',
            valueType: 'money',
          },
          {
            title: '操作',
            valueType: 'option',
            render: () => [
              <a target="_blank" rel="noopener noreferrer" key="link">
                链路
              </a>,
              <a target="_blank" rel="noopener noreferrer" key="warning">
                报警
              </a>,
              <a target="_blank" rel="noopener noreferrer" key="view">
                查看
              </a>,
            ],
          },
        ]}
      >
        <ProDescriptions.Item label="百分比" valueType="percent">
          100
        </ProDescriptions.Item>
      </ProDescriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions DataSource 数据源 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 描述列表标题
          </li>
          <li>
            <strong>dataSource</strong>: 数据源对象，直接提供数据
          </li>
          <li>
            <strong>columns</strong>: 列配置数组，定义每列的属性
          </li>
        </ul>
        <h4>DataSource 数据源配置：</h4>
        <ul>
          <li>
            <strong>对象格式</strong>: 直接提供数据对象
          </li>
          <li>
            <strong>字段映射</strong>: 通过 dataIndex 映射到数据字段
          </li>
          <li>
            <strong>静态数据</strong>: 适合展示静态或已知数据
          </li>
          <li>
            <strong>性能优势</strong>: 无需异步请求，性能更好
          </li>
        </ul>
        <h4>Column 配置项：</h4>
        <ul>
          <li>
            <strong>title</strong>: 列标题
          </li>
          <li>
            <strong>key</strong>: 列的唯一标识
          </li>
          <li>
            <strong>dataIndex</strong>: 数据字段名，对应 dataSource 中的字段
          </li>
          <li>
            <strong>ellipsis</strong>: 是否显示省略号
          </li>
          <li>
            <strong>copyable</strong>: 是否可复制
          </li>
          <li>
            <strong>valueType</strong>: 值类型，决定如何渲染
          </li>
          <li>
            <strong>valueEnum</strong>: 枚举值配置
          </li>
          <li>
            <strong>render</strong>: 自定义渲染函数
          </li>
        </ul>
        <h4>ValueType 类型：</h4>
        <ul>
          <li>
            <strong>select</strong>: 选择框，配合 valueEnum 使用
          </li>
          <li>
            <strong>date</strong>: 日期格式
          </li>
          <li>
            <strong>money</strong>: 金额格式
          </li>
          <li>
            <strong>percent</strong>: 百分比格式
          </li>
          <li>
            <strong>option</strong>: 操作按钮
          </li>
        </ul>
        <h4>ValueEnum 枚举配置：</h4>
        <ul>
          <li>
            <strong>text</strong>: 显示的文本
          </li>
          <li>
            <strong>status</strong>: 状态类型，影响显示样式
          </li>
          <li>
            <strong>支持状态</strong>: Default, Error, Success, Processing
          </li>
        </ul>
        <h4>Render 自定义渲染：</h4>
        <ul>
          <li>
            <strong>函数返回</strong>: 返回 React 节点数组
          </li>
          <li>
            <strong>操作按钮</strong>: 常用于渲染操作链接或按钮
          </li>
          <li>
            <strong>样式控制</strong>: 完全控制渲染内容的样式
          </li>
        </ul>
        <h4>混合使用特点：</h4>
        <ul>
          <li>
            <strong>Columns 配置</strong>: 通过 columns 数组定义列
          </li>
          <li>
            <strong>Item 组件</strong>: 同时支持 ProDescriptions.Item
          </li>
          <li>
            <strong>优先级</strong>: Item 组件会覆盖 columns 中的配置
          </li>
        </ul>
        <h4>与 Request 的区别：</h4>
        <ul>
          <li>
            <strong>数据来源</strong>: dataSource 直接提供数据，request 异步获取
          </li>
          <li>
            <strong>使用场景</strong>: dataSource 适合静态数据，request
            适合动态数据
          </li>
          <li>
            <strong>性能差异</strong>: dataSource 性能更好，无需网络请求
          </li>
          <li>
            <strong>错误处理</strong>: dataSource 无需处理请求错误
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>静态数据</strong>: 展示已知的静态数据
          </li>
          <li>
            <strong>配置展示</strong>: 展示系统配置信息
          </li>
          <li>
            <strong>表单预览</strong>: 展示表单提交的数据
          </li>
          <li>
            <strong>详情页面</strong>: 展示对象详细信息
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>数据准备</strong>: 确保 dataSource 包含所有需要的字段
          </li>
          <li>
            <strong>列配置</strong>: 使用 columns 配置批量定义列
          </li>
          <li>
            <strong>类型匹配</strong>: 选择合适的 valueType 展示数据
          </li>
          <li>
            <strong>性能优化</strong>: 对于静态数据优先使用 dataSource
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProDescriptions } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProDescriptions
        title="高级定义列表request columns"
        request={async () => {
          return Promise.resolve({
            success: true,
            data: {
              date: '20200809',
              money: '1212100',
              money2: -12345.33,
              state: 'all',
              switch: true,
              state2: 'open',
            },
          });
        }}
        emptyText={'空'}
        columns={[
          {
            title: '文本',
            key: 'text',
            dataIndex: 'id',
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
            title: '状态2',
            key: 'state2',
            dataIndex: 'state2',
          },
          {
            title: '时间',
            key: 'date',
            dataIndex: 'date',
            valueType: 'date',
          },
          {
            title: '时间',
            key: 'date',
            dataIndex: 'date',
            valueType: 'date',
            fieldProps: {
              format: 'DD.MM.YYYY',
            },
          },
          {
            title: '开关',
            key: 'switch',
            dataIndex: 'switch',
            valueType: 'switch',
          },
          {
            title: 'money',
            key: 'money',
            dataIndex: 'money',
            valueType: 'money',
            fieldProps: {
              moneySymbol: '$',
            },
          },
          {
            title: 'money无符号',
            key: 'money',
            dataIndex: 'money',
            valueType: 'money',
            fieldProps: {
              moneySymbol: false,
            },
          },
          {
            title: 'money负数无符号',
            key: 'money2',
            dataIndex: 'money2',
            valueType: 'money',
            fieldProps: {
              moneySymbol: false,
            },
          },
          {
            title: '操作',
            valueType: 'option',
            render: () => [
              <a target="_blank" rel="noopener noreferrer" key="link">
                链路
              </a>,
              <a target="_blank" rel="noopener noreferrer" key="warning">
                报警
              </a>,
              <a target="_blank" rel="noopener noreferrer" key="view">
                查看
              </a>,
            ],
          },
        ]}
      >
        <ProDescriptions.Item
          dataIndex="percent"
          label="百分比"
          valueType="percent"
        >
          100
        </ProDescriptions.Item>
        <div>多余的dom</div>
        <ProDescriptions.Item label="超链接">
          <a href="alipay.com">超链接</a>
        </ProDescriptions.Item>
      </ProDescriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions Columns 配置 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 描述列表标题
          </li>
          <li>
            <strong>request</strong>: 异步请求函数，返回数据
          </li>
          <li>
            <strong>emptyText</strong>: 空数据时显示的文本
          </li>
          <li>
            <strong>columns</strong>: 列配置数组，定义每列的属性
          </li>
        </ul>
        <h4>Column 配置项：</h4>
        <ul>
          <li>
            <strong>title</strong>: 列标题
          </li>
          <li>
            <strong>key</strong>: 列的唯一标识
          </li>
          <li>
            <strong>dataIndex</strong>: 数据字段名
          </li>
          <li>
            <strong>valueType</strong>: 值类型，决定如何渲染
          </li>
          <li>
            <strong>valueEnum</strong>: 枚举值配置
          </li>
          <li>
            <strong>fieldProps</strong>: 字段属性配置
          </li>
          <li>
            <strong>render</strong>: 自定义渲染函数
          </li>
        </ul>
        <h4>ValueType 类型：</h4>
        <ul>
          <li>
            <strong>select</strong>: 选择框，配合 valueEnum 使用
          </li>
          <li>
            <strong>date</strong>: 日期格式
          </li>
          <li>
            <strong>switch</strong>: 开关组件
          </li>
          <li>
            <strong>money</strong>: 金额格式
          </li>
          <li>
            <strong>option</strong>: 操作按钮
          </li>
          <li>
            <strong>percent</strong>: 百分比格式
          </li>
        </ul>
        <h4>FieldProps 字段属性：</h4>
        <ul>
          <li>
            <strong>format</strong>: 日期格式化字符串，如 'DD.MM.YYYY'
          </li>
          <li>
            <strong>moneySymbol</strong>: 货币符号，可以是字符串或 false
          </li>
          <li>
            <strong>自定义属性</strong>: 根据 valueType 传递相应属性
          </li>
        </ul>
        <h4>ValueEnum 枚举配置：</h4>
        <ul>
          <li>
            <strong>text</strong>: 显示的文本
          </li>
          <li>
            <strong>status</strong>: 状态类型，影响显示样式
          </li>
          <li>
            <strong>支持状态</strong>: Default, Error, Success, Processing
          </li>
        </ul>
        <h4>Render 自定义渲染：</h4>
        <ul>
          <li>
            <strong>函数返回</strong>: 返回 React 节点数组
          </li>
          <li>
            <strong>操作按钮</strong>: 常用于渲染操作链接或按钮
          </li>
          <li>
            <strong>样式控制</strong>: 完全控制渲染内容的样式
          </li>
        </ul>
        <h4>混合使用特点：</h4>
        <ul>
          <li>
            <strong>Columns 配置</strong>: 通过 columns 数组定义列
          </li>
          <li>
            <strong>Item 组件</strong>: 同时支持 ProDescriptions.Item
          </li>
          <li>
            <strong>优先级</strong>: Item 组件会覆盖 columns 中的配置
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>动态列</strong>: 根据数据动态生成列配置
          </li>
          <li>
            <strong>复杂展示</strong>: 展示各种类型的数据
          </li>
          <li>
            <strong>操作列</strong>: 添加操作按钮或链接
          </li>
          <li>
            <strong>格式化显示</strong>: 自定义数据格式化方式
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>列配置</strong>: 使用 columns 配置批量定义列
          </li>
          <li>
            <strong>字段属性</strong>: 通过 fieldProps 传递组件属性
          </li>
          <li>
            <strong>自定义渲染</strong>: 使用 render 函数实现复杂渲染
          </li>
          <li>
            <strong>类型匹配</strong>: 选择合适的 valueType 展示数据
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProDescriptions } from '@ant-design/pro-components';
import { Button } from 'antd';
import dayjs from 'dayjs';

const Demo = () => {
  return (
    <ProDescriptions
      column={2}
      title="高级定义列表"
      tooltip="包含了从服务器请求，columns等功能"
    >
      <ProDescriptions.Item valueType="option">
        <Button key="primary" type="primary">
          提交
        </Button>
      </ProDescriptions.Item>
      <ProDescriptions.Item
        span={2}
        valueType="text"
        contentStyle={{
          maxWidth: '80%',
        }}
        renderText={(_) => {
          return _ + _;
        }}
        ellipsis
        label="文本"
      >
        这是一段很长很长超级超级长的无意义说明文本并且重复了很多没有意义的词语，就是为了让它变得很长很长超级超级长
      </ProDescriptions.Item>
      <ProDescriptions.Item
        label="金额"
        tooltip="仅供参考，以实际为准"
        valueType="money"
      >
        100
      </ProDescriptions.Item>
      <ProDescriptions.Item label="百分比" valueType="percent">
        100
      </ProDescriptions.Item>
      <ProDescriptions.Item
        label="选择框"
        valueEnum={{
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
        }}
      >
        open
      </ProDescriptions.Item>
      <ProDescriptions.Item
        label="远程选择框"
        request={async () => [
          { label: '全部', value: 'all' },
          { label: '未解决', value: 'open' },
          { label: '已解决', value: 'closed' },
          { label: '解决中', value: 'processing' },
        ]}
      >
        closed
      </ProDescriptions.Item>
      <ProDescriptions.Item label="进度条" valueType="progress">
        40
      </ProDescriptions.Item>
      <ProDescriptions.Item label="日期时间" valueType="dateTime">
        {dayjs().valueOf()}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="日期" valueType="date">
        {dayjs().valueOf()}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="日期区间" valueType="dateTimeRange">
        {[dayjs().add(-1, 'd').valueOf(), dayjs().valueOf()]}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="时间" valueType="time">
        {dayjs().valueOf()}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="代码块" valueType="code">
        {`
yarn run v1.22.0
$ eslint --format=pretty ./packages
Done in 9.70s.
          `}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="JSON 代码块" valueType="jsonCode">
        {`{
  "compilerOptions": {
    "target": "esnext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,

    "declaration": true,
    "skipLibCheck": true
  },
  "include": ["**/src", "**/docs", "scripts", "**/demo", ".eslintrc.js"]
}
`}
      </ProDescriptions.Item>
    </ProDescriptions>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProDescriptions, ProProvider } from '@ant-design/pro-components';
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
const tableListDataSource: TableListItem = {
  key: 1,
  name: `TradeCode 1`,
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

const Demo = () => {
  const values = useContext(ProProvider);
  return (
    <>
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
        <ProDescriptions<TableListItem, 'link' | 'tags'>
          columns={[
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
                    action?.reload();
                  }}
                >
                  刷新
                </a>,
              ],
            },
          ]}
          editable={{}}
          request={() => {
            return Promise.resolve({
              data: tableListDataSource,
              success: true,
            });
          }}
          title="自定义 valueType"
        />
      </ProProvider.Provider>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions 自定义 ValueType Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 描述列表标题
          </li>
          <li>
            <strong>columns</strong>: 列配置数组
          </li>
          <li>
            <strong>editable</strong>: 可编辑配置
          </li>
          <li>
            <strong>request</strong>: 异步请求函数
          </li>
        </ul>
        <h4>ProProvider 配置：</h4>
        <ul>
          <li>
            <strong>valueTypeMap</strong>: 自定义 valueType 映射表
          </li>
          <li>
            <strong>render</strong>: 自定义渲染函数
          </li>
          <li>
            <strong>formItemRender</strong>: 表单项渲染函数
          </li>
        </ul>
        <h4>自定义 ValueType 配置：</h4>
        <ul>
          <li>
            <strong>link</strong>: 自定义链接类型
          </li>
          <li>
            <strong>tags</strong>: 自定义标签类型
          </li>
          <li>
            <strong>render 函数</strong>: 定义如何渲染数据
          </li>
          <li>
            <strong>formItemRender 函数</strong>: 定义编辑时的表单组件
          </li>
        </ul>
        <h4>TagList 组件特点：</h4>
        <ul>
          <li>
            <strong>动态添加</strong>: 支持动态添加新标签
          </li>
          <li>
            <strong>输入验证</strong>: 防止重复标签
          </li>
          <li>
            <strong>键盘交互</strong>: 支持回车和失焦确认
          </li>
          <li>
            <strong>状态管理</strong>: 管理输入状态和标签列表
          </li>
        </ul>
        <h4>Column 配置：</h4>
        <ul>
          <li>
            <strong>title</strong>: 列标题
          </li>
          <li>
            <strong>dataIndex</strong>: 数据字段名
          </li>
          <li>
            <strong>valueType</strong>: 使用自定义的 valueType
          </li>
          <li>
            <strong>render</strong>: 自定义渲染函数，支持 action 参数
          </li>
        </ul>
        <h4>Render 函数参数：</h4>
        <ul>
          <li>
            <strong>text</strong>: 当前字段的值
          </li>
          <li>
            <strong>row</strong>: 当前行数据
          </li>
          <li>
            <strong>index</strong>: 行索引
          </li>
          <li>
            <strong>action</strong>: 操作对象，包含 reload 等方法
          </li>
        </ul>
        <h4>类型定义：</h4>
        <ul>
          <li>
            <strong>TableListItem</strong>: 表格数据项类型
          </li>
          <li>
            <strong>泛型支持</strong>: ProDescriptions&lt;TableListItem, 'link'
            | 'tags'&gt;
          </li>
          <li>
            <strong>类型安全</strong>: 提供完整的类型检查
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>自定义组件</strong>: 需要特殊的展示组件
          </li>
          <li>
            <strong>复杂交互</strong>: 需要复杂的用户交互
          </li>
          <li>
            <strong>业务定制</strong>: 根据业务需求定制展示方式
          </li>
          <li>
            <strong>编辑功能</strong>: 需要自定义编辑组件
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>组件封装</strong>: 将复杂的自定义组件封装为独立组件
          </li>
          <li>
            <strong>类型定义</strong>: 为自定义组件定义完整的类型
          </li>
          <li>
            <strong>状态管理</strong>: 合理管理组件的内部状态
          </li>
          <li>
            <strong>交互设计</strong>: 提供清晰的用户交互反馈
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProDescriptionsActionType } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';

const Demo = () => {
  const actionRef = useRef<ProDescriptionsActionType>();
  return (
    <ProDescriptions
      actionRef={actionRef}
      title="高级定义列表 request"
      request={async () => {
        return Promise.resolve({
          success: true,
          data: {
            info: {
              id: '这是一段文本',
              date: '20200730',
              money: '12121',
            },
          },
        });
      }}
      editable={{
        onSave: async (keypath, newInfo, oriInfo) => {
          console.log(keypath, newInfo, oriInfo);
          return true;
        },
      }}
    >
      <ProDescriptions.Item
        formItemProps={{
          rules: [
            {
              required: true,
              message: '此项为必填项',
            },
          ],
        }}
        dataIndex={['info', 'id']}
      />
      <ProDescriptions.Item
        dataIndex={['info', 'date']}
        label="日期"
        valueType="date"
      />
      <ProDescriptions.Item
        label="money"
        dataIndex={['info', 'money']}
        valueType="money"
      />
      <ProDescriptions.Item label="文本" valueType="option">
        <Button
          type="primary"
          onClick={() => {
            actionRef.current?.reload();
          }}
          key="reload"
        >
          刷新
        </Button>
        <Button key="rest">重置</Button>
      </ProDescriptions.Item>
    </ProDescriptions>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import {
  ProCard,
  ProDescriptions,
  ProForm,
  ProFormDependency,
  ProFormDigit,
  ProFormList,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useState } from 'react';

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

const initialValues = {
  title: '高级定义列表',
  column: '3',
  columns: [
    {
      title: '文本',
      key: 'text',
      dataIndex: 'id',
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
      title: '状态2',
      key: 'state2',
      dataIndex: 'state2',
    },
    {
      title: '时间',
      key: 'date',
      dataIndex: 'date',
      valueType: 'date',
    },
    {
      title: 'money',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '百分比',
      key: 'percent',
      dataIndex: 'percent',
      valueType: 'percent',
    },
    {
      title: '操作',
      valueType: 'option',
      render: () => [
        <a target="_blank" rel="noopener noreferrer" key="link">
          链路
        </a>,
        <a target="_blank" rel="noopener noreferrer" key="warning">
          报警
        </a>,
        <a target="_blank" rel="noopener noreferrer" key="view">
          查看
        </a>,
      ],
    },
  ],
};

const Demo = () => {
  const [values, setValues] = useState<Record<string, any>>(initialValues);
  return (
    <>
      <ProCard
        variant="outlined"
        split="vertical"
        headerBordered
        style={{
          minHeight: 500,
        }}
      >
        <ProCard colSpan="calc(100% - 580px)">
          <ProDescriptions
            title="高级定义列表"
            {...values}
            columns={values?.columns?.filter(Boolean) || []}
            request={async () => {
              return Promise.resolve({
                success: true,
                data: {
                  id: '这是一段文本columns',
                  date: '20200809',
                  money: '1212100',
                  state: 'all',
                  state2: 'open',
                  percent: '20%',
                },
              });
            }}
          />
        </ProCard>
        <ProForm
          initialValues={values}
          onValuesChange={(_, allValue) => {
            setValues({ ...initialValues, ...allValue });
          }}
          submitter={false}
        >
          <ProCard
            colSpan="580px"
            title="配置菜单"
            tabs={{
              items: [
                {
                  label: '基本配置',
                  key: 'base',
                  children: (
                    <>
                      <ProFormText label="标题" name="title" />
                      <ProForm.Group>
                        <ProFormSelect
                          name="layout"
                          label="布局"
                          initialValue="horizontal"
                          options={[
                            {
                              label: '水平',
                              value: 'horizontal',
                            },
                            {
                              label: '垂直',
                              value: 'vertical',
                            },
                          ]}
                        />
                        <ProFormSwitch
                          label="加载中"
                          tooltip="loading"
                          name="loading"
                        />
                        <ProFormSelect
                          name="size"
                          label="尺寸"
                          initialValue="default"
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
                        />

                        <ProFormSwitch
                          label="边框"
                          tooltip="bordered"
                          name="bordered"
                        />
                        <ProFormDigit width="xs" label="列数" name="column" />
                      </ProForm.Group>
                    </>
                  ),
                },
                {
                  label: '列配置',
                  key: 'columns',
                  children: (
                    <ProFormList
                      name="columns"
                      label="列配置"
                      creatorButtonProps={{
                        position: 'top',
                      }}
                      itemRender={({ listDom, action }) => {
                        return (
                          <ProCard
                            variant="outlined"
                            style={{
                              marginBlockEnd: 8,
                              position: 'relative',
                            }}
                          >
                            <div
                              style={{
                                position: 'absolute',
                                top: -2,
                                right: 4,
                              }}
                            >
                              {action}
                            </div>
                            {listDom}
                          </ProCard>
                        );
                      }}
                    >
                      <ProForm.Group size={16} key="Group">
                        <ProFormText label="标题" name="title" />
                        <ProFormDigit
                          width="xs"
                          initialValue={1}
                          label="占据列数"
                          name="span"
                        />
                        <ProFormSelect
                          width="xs"
                          label="值类型"
                          name="valueType"
                          options={valueTypeArray.map((value) => ({
                            label: value,
                            value,
                          }))}
                        />
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
                      </ProForm.Group>
                      <ProFormDependency
                        key="valueType"
                        name={['valueType', 'valueEnum']}
                      >
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
            style={{
              width: 500,
            }}
          />
        </ProForm>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions 动态配置 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 描述列表标题，支持动态修改
          </li>
          <li>
            <strong>column</strong>: 列数，支持动态调整
          </li>
          <li>
            <strong>columns</strong>: 列配置数组，支持动态增删改
          </li>
          <li>
            <strong>request</strong>: 异步请求函数，返回数据
          </li>
        </ul>
        <h4>ProCard 布局配置：</h4>
        <ul>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
          <li>
            <strong>split</strong>: 分割方式，'vertical' 表示垂直分割
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
          <li>
            <strong>colSpan</strong>: 列跨度，支持 calc() 计算
          </li>
        </ul>
        <h4>ProForm 表单配置：</h4>
        <ul>
          <li>
            <strong>initialValues</strong>: 表单初始值
          </li>
          <li>
            <strong>onValuesChange</strong>: 值变化时的回调函数
          </li>
          <li>
            <strong>submitter</strong>: 提交按钮配置，false 表示不显示
          </li>
        </ul>
        <h4>基本配置选项：</h4>
        <ul>
          <li>
            <strong>layout</strong>: 布局方式，horizontal/vertical
          </li>
          <li>
            <strong>loading</strong>: 是否显示加载状态
          </li>
          <li>
            <strong>size</strong>: 尺寸，default/middle/small
          </li>
          <li>
            <strong>bordered</strong>: 是否显示边框
          </li>
        </ul>
        <h4>列配置选项：</h4>
        <ul>
          <li>
            <strong>title</strong>: 列标题
          </li>
          <li>
            <strong>span</strong>: 占据列数
          </li>
          <li>
            <strong>valueType</strong>: 值类型，支持多种类型
          </li>
          <li>
            <strong>dataIndex</strong>: 数据字段名
          </li>
          <li>
            <strong>valueEnum</strong>: 枚举值配置（仅 select 类型）
          </li>
        </ul>
        <h4>ProFormList 特点：</h4>
        <ul>
          <li>
            <strong>动态列表</strong>: 支持动态添加和删除列配置
          </li>
          <li>
            <strong>itemRender</strong>: 自定义列表项渲染
          </li>
          <li>
            <strong>creatorButtonProps</strong>: 创建按钮配置
          </li>
        </ul>
        <h4>ProFormDependency 依赖配置：</h4>
        <ul>
          <li>
            <strong>条件渲染</strong>: 根据 valueType 条件显示表单项
          </li>
          <li>
            <strong>JSON 解析</strong>: 自动解析和格式化 valueEnum
          </li>
          <li>
            <strong>实时更新</strong>: 依赖字段变化时实时更新
          </li>
        </ul>
        <h4>ValueType 支持类型：</h4>
        <ul>
          <li>
            <strong>基础类型</strong>: text, password, textarea, code
          </li>
          <li>
            <strong>数字类型</strong>: money, percent, digit, second
          </li>
          <li>
            <strong>日期类型</strong>: date, dateTime, time 等
          </li>
          <li>
            <strong>选择类型</strong>: select, checkbox, radio 等
          </li>
          <li>
            <strong>特殊类型</strong>: avatar, image, switch, progress 等
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>配置工具</strong>: 构建动态配置界面
          </li>
          <li>
            <strong>可视化编辑</strong>: 可视化编辑组件配置
          </li>
          <li>
            <strong>原型设计</strong>: 快速原型设计和验证
          </li>
          <li>
            <strong>调试工具</strong>: 调试和测试组件配置
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>状态管理</strong>: 合理管理配置状态
          </li>
          <li>
            <strong>实时预览</strong>: 提供实时预览功能
          </li>
          <li>
            <strong>配置验证</strong>: 对配置进行验证
          </li>
          <li>
            <strong>用户体验</strong>: 提供直观的配置界面
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProDescriptionsActionType } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';

const Demo = () => {
  const actionRef = useRef<ProDescriptionsActionType>();
  return (
    <>
      <ProDescriptions
        actionRef={actionRef}
        title="高级定义列表 request"
        request={async () => {
          return Promise.resolve({
            success: true,
            data: { id: '这是一段文本', date: '20200730', money: '12121' },
          });
        }}
        extra={<Button type="link">修改</Button>}
      >
        <ProDescriptions.Item dataIndex="id" />
        <ProDescriptions.Item dataIndex="date" label="日期" valueType="date" />
        <ProDescriptions.Item
          label="money"
          dataIndex="money"
          valueType="money"
        />
        <ProDescriptions.Item label="文本" valueType="option">
          <Button
            type="primary"
            onClick={() => {
              actionRef.current?.reload();
            }}
            key="reload"
          >
            刷新
          </Button>
          <Button key="rest">重置</Button>
        </ProDescriptions.Item>
      </ProDescriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions Request 请求 Props 说明：</h4>
        <ul>
          <li>
            <strong>actionRef</strong>: 操作引用，用于调用组件方法
          </li>
          <li>
            <strong>title</strong>: 描述列表标题
          </li>
          <li>
            <strong>request</strong>: 异步请求函数，返回数据
          </li>
          <li>
            <strong>extra</strong>: 右上角额外内容
          </li>
        </ul>
        <h4>Request 请求配置：</h4>
        <ul>
          <li>
            <strong>异步函数</strong>: 返回 Promise 对象
          </li>
          <li>
            <strong>数据格式</strong>: &#123; success: boolean, data: object
            &#125;
          </li>
          <li>
            <strong>自动加载</strong>: 组件挂载时自动请求数据
          </li>
          <li>
            <strong>错误处理</strong>: 自动处理请求错误
          </li>
        </ul>
        <h4>ProDescriptions.Item 配置：</h4>
        <ul>
          <li>
            <strong>dataIndex</strong>: 数据字段名，自动绑定到 request
            返回的数据
          </li>
          <li>
            <strong>label</strong>: 标签文本
          </li>
          <li>
            <strong>valueType</strong>: 值类型，决定如何渲染数据
          </li>
          <li>
            <strong>children</strong>: 自定义内容，如操作按钮
          </li>
        </ul>
        <h4>ActionRef 操作方法：</h4>
        <ul>
          <li>
            <strong>reload</strong>: 重新加载数据
          </li>
          <li>
            <strong>reset</strong>: 重置数据
          </li>
          <li>
            <strong>clearSelected</strong>: 清除选中状态
          </li>
        </ul>
        <h4>ValueType 类型：</h4>
        <ul>
          <li>
            <strong>date</strong>: 日期格式，自动格式化显示
          </li>
          <li>
            <strong>money</strong>: 金额格式，自动添加货币符号
          </li>
          <li>
            <strong>option</strong>: 操作按钮，支持自定义组件
          </li>
        </ul>
        <h4>Extra 额外内容：</h4>
        <ul>
          <li>
            <strong>React 节点</strong>: 支持任何 React 组件
          </li>
          <li>
            <strong>操作按钮</strong>: 常用于添加操作按钮
          </li>
          <li>
            <strong>样式控制</strong>: 可以自定义样式和交互
          </li>
        </ul>
        <h4>数据绑定特点：</h4>
        <ul>
          <li>
            <strong>自动绑定</strong>: 通过 dataIndex 自动绑定数据
          </li>
          <li>
            <strong>类型安全</strong>: 提供完整的类型检查
          </li>
          <li>
            <strong>响应式更新</strong>: 数据变化时自动更新显示
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据展示</strong>: 从 API 获取数据并展示
          </li>
          <li>
            <strong>动态刷新</strong>: 通过按钮刷新数据
          </li>
          <li>
            <strong>操作控制</strong>: 通过 actionRef 控制组件行为
          </li>
          <li>
            <strong>用户交互</strong>: 提供用户操作界面
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>错误处理</strong>: 在 request 中处理请求错误
          </li>
          <li>
            <strong>加载状态</strong>: 提供加载状态反馈
          </li>
          <li>
            <strong>数据验证</strong>: 验证返回数据的格式
          </li>
          <li>
            <strong>用户体验</strong>: 提供清晰的操作反馈
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProDescriptions } from '@ant-design/pro-components';
import dayjs from 'dayjs';

const Demo = () => {
  return (
    <>
      <ProDescriptions
        column={2}
        title="高级定义列表"
        tooltip="包含了从服务器请求，columns等功能"
      >
        <ProDescriptions.Item
          label="日期"
          fieldProps={{
            format: 'YYYY.MM.DD',
          }}
          valueType="date"
        >
          {dayjs().valueOf()}
        </ProDescriptions.Item>
        <ProDescriptions.Item
          label="日期区间"
          fieldProps={{
            format: 'YYYY.MM.DD HH:mm:ss',
          }}
          valueType="dateTimeRange"
        >
          {[dayjs().add(-1, 'd').valueOf(), dayjs().valueOf()]}
        </ProDescriptions.Item>
        <ProDescriptions.Item
          label="时间"
          fieldProps={{
            format: 'YYYY.MM.DD',
          }}
          valueType="time"
        >
          {dayjs().valueOf()}
        </ProDescriptions.Item>

        <ProDescriptions.Item
          label="时间日期"
          fieldProps={{
            format: 'YYYY.MM.DD HH:mm:ss',
          }}
          valueType="dateTime"
        >
          {dayjs().valueOf()}
        </ProDescriptions.Item>

        <ProDescriptions.Item
          label="更新时间"
          fieldProps={{
            format: 'YYYY.MM.DD',
          }}
          valueType="fromNow"
        >
          {dayjs().add(-1, 'month').valueOf()}
        </ProDescriptions.Item>
      </ProDescriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions 格式化配置 Props 说明：</h4>
        <ul>
          <li>
            <strong>column</strong>: 列数，设置为 2 表示每行显示 2 列
          </li>
          <li>
            <strong>title</strong>: 描述列表标题
          </li>
          <li>
            <strong>tooltip</strong>: 标题提示信息
          </li>
        </ul>
        <h4>ProDescriptions.Item 配置：</h4>
        <ul>
          <li>
            <strong>label</strong>: 标签文本
          </li>
          <li>
            <strong>valueType</strong>: 值类型，决定如何渲染数据
          </li>
          <li>
            <strong>fieldProps</strong>: 字段属性配置
          </li>
          <li>
            <strong>children</strong>: 数据内容
          </li>
        </ul>
        <h4>FieldProps 格式化配置：</h4>
        <ul>
          <li>
            <strong>format</strong>: 格式化字符串，定义显示格式
          </li>
          <li>
            <strong>自定义格式</strong>: 支持 dayjs 的所有格式化选项
          </li>
        </ul>
        <h4>ValueType 日期时间类型：</h4>
        <ul>
          <li>
            <strong>date</strong>: 日期格式，显示年月日
          </li>
          <li>
            <strong>dateTime</strong>: 日期时间格式，显示年月日时分秒
          </li>
          <li>
            <strong>dateTimeRange</strong>: 日期时间区间格式
          </li>
          <li>
            <strong>time</strong>: 时间格式，显示时分秒
          </li>
          <li>
            <strong>fromNow</strong>: 相对时间格式，显示多久之前
          </li>
        </ul>
        <h4>格式化字符串说明：</h4>
        <ul>
          <li>
            <strong>YYYY</strong>: 四位年份
          </li>
          <li>
            <strong>MM</strong>: 两位月份
          </li>
          <li>
            <strong>DD</strong>: 两位日期
          </li>
          <li>
            <strong>HH</strong>: 24小时制小时
          </li>
          <li>
            <strong>mm</strong>: 分钟
          </li>
          <li>
            <strong>ss</strong>: 秒
          </li>
        </ul>
        <h4>数据格式：</h4>
        <ul>
          <li>
            <strong>时间戳</strong>: 使用 dayjs().valueOf() 获取时间戳
          </li>
          <li>
            <strong>数组格式</strong>: 日期区间使用数组 [start, end]
          </li>
          <li>
            <strong>相对时间</strong>: fromNow 类型支持相对时间计算
          </li>
        </ul>
        <h4>Dayjs 操作：</h4>
        <ul>
          <li>
            <strong>add</strong>: 添加时间，如 add(-1, 'month') 表示一个月前
          </li>
          <li>
            <strong>valueOf</strong>: 获取时间戳
          </li>
          <li>
            <strong>格式化</strong>: 通过 format 方法格式化时间
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>日期展示</strong>: 展示各种格式的日期时间
          </li>
          <li>
            <strong>时间区间</strong>: 展示时间范围
          </li>
          <li>
            <strong>相对时间</strong>: 展示相对时间，如"一个月前"
          </li>
          <li>
            <strong>格式化定制</strong>: 根据需求定制显示格式
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>格式统一</strong>: 在项目中保持日期格式的一致性
          </li>
          <li>
            <strong>用户友好</strong>: 选择用户容易理解的格式
          </li>
          <li>
            <strong>国际化</strong>: 考虑不同地区的日期格式习惯
          </li>
          <li>
            <strong>性能考虑</strong>: 避免频繁的时间格式化操作
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProDescriptions } from '@ant-design/pro-components';
import { Input, Tooltip } from 'antd';
import { useRef } from 'react';

const Demo = () => {
  const actionRef = useRef();
  return (
    <>
      <ProDescriptions
        actionRef={actionRef}
        //   variant="outlined"
        formProps={{
          onValuesChange: (e, f) => console.log(f),
        }}
        title="可编辑的定义列表"
        request={async () => {
          return Promise.resolve({
            success: true,
            data: {
              rate: 5,
              id: '这是一段文本columns',
              date: '20200809',
              money: '1212100',
              state: 'all',
              state2: 'open',
              textarea:
                '这是一个文本域-这是一个文本域-这是一个文本域-这是一个文本域-这是一个文本域-这是一个文本域-这是一个文本域-这是一个文本域-这是一个文本域',
            },
          });
        }}
        editable={{}}
        columns={[
          {
            title: '文本',
            key: 'text',
            dataIndex: 'id',
            copyable: true,
            ellipsis: true,
          },
          {
            title: '状态',
            key: 'state',
            dataIndex: 'state',
            valueType: 'select',
            editable: false,
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
            title: '文本域',
            key: 'textarea',
            dataIndex: 'textarea',
            valueType: 'textarea',
            formItemProps: {
              style: {
                flex: 1,
              },
            },
          },
          {
            title: '状态2',
            key: 'state2',
            dataIndex: 'state2',
            formItemRender: () => {
              return <Input placeholder="输入 Success 切换分值" />;
            },
          },
          {
            title: '分值',
            dataIndex: 'fraction',
            valueType: (record) => {
              const scoringMethod = record?.state2;
              if (scoringMethod === 'Success') return 'select';
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
            title: '时间',
            key: 'date',
            dataIndex: 'date',
            valueType: 'date',
          },
          {
            title: 'Rate',
            key: 'rate',
            dataIndex: 'rate',
            valueType: 'rate',
          },
          {
            title: 'money',
            key: 'money',
            dataIndex: 'money',
            valueType: 'money',
            render: (dom, entity, index, action) => {
              return (
                <Tooltip title="点击进入编辑状态">
                  <div
                    onClick={() => {
                      action?.startEditable('money');
                    }}
                  >
                    {dom}
                  </div>
                </Tooltip>
              );
            },
          },
          {
            title: '操作',
            valueType: 'option',
            render: () => [
              <a target="_blank" rel="noopener noreferrer" key="link">
                链路
              </a>,
              <a target="_blank" rel="noopener noreferrer" key="warning">
                报警
              </a>,
              <a target="_blank" rel="noopener noreferrer" key="view">
                查看
              </a>,
            ],
          },
        ]}
      >
        <ProDescriptions.Item
          dataIndex="percent"
          label="百分比"
          valueType="percent"
        >
          100
        </ProDescriptions.Item>
      </ProDescriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions 可编辑功能 Props 说明：</h4>
        <ul>
          <li>
            <strong>actionRef</strong>: 操作引用，用于调用组件方法
          </li>
          <li>
            <strong>formProps</strong>: 表单属性配置
          </li>
          <li>
            <strong>title</strong>: 描述列表标题
          </li>
          <li>
            <strong>request</strong>: 异步请求函数
          </li>
          <li>
            <strong>editable</strong>: 可编辑配置
          </li>
          <li>
            <strong>columns</strong>: 列配置数组
          </li>
        </ul>
        <h4>FormProps 表单配置：</h4>
        <ul>
          <li>
            <strong>onValuesChange</strong>: 表单值变化时的回调函数
          </li>
          <li>
            <strong>其他表单属性</strong>: 支持所有 Form 组件的属性
          </li>
        </ul>
        <h4>Column 可编辑配置：</h4>
        <ul>
          <li>
            <strong>copyable</strong>: 是否可复制
          </li>
          <li>
            <strong>ellipsis</strong>: 是否显示省略号
          </li>
          <li>
            <strong>editable</strong>: 是否可编辑，false 表示禁用编辑
          </li>
          <li>
            <strong>formItemProps</strong>: 表单项属性配置
          </li>
          <li>
            <strong>formItemRender</strong>: 自定义表单项渲染函数
          </li>
        </ul>
        <h4>ValueType 动态配置：</h4>
        <ul>
          <li>
            <strong>函数形式</strong>: valueType: (record) =&gt; string
          </li>
          <li>
            <strong>条件判断</strong>: 根据数据动态返回 valueType
          </li>
          <li>
            <strong>数据依赖</strong>: 基于当前行数据决定显示类型
          </li>
        </ul>
        <h4>FieldProps 字段属性：</h4>
        <ul>
          <li>
            <strong>mode</strong>: 选择模式，'multiple' 表示多选
          </li>
          <li>
            <strong>其他属性</strong>: 根据 valueType 传递相应属性
          </li>
        </ul>
        <h4>Request 远程数据：</h4>
        <ul>
          <li>
            <strong>异步函数</strong>: 返回 Promise 对象
          </li>
          <li>
            <strong>数据格式</strong>: [{'{'} label: string, value: any {'}'}]
          </li>
          <li>
            <strong>动态选项</strong>: 根据条件动态生成选项
          </li>
        </ul>
        <h4>Render 自定义渲染：</h4>
        <ul>
          <li>
            <strong>参数</strong>: (dom, entity, index, action)
          </li>
          <li>
            <strong>dom</strong>: 默认渲染的 DOM
          </li>
          <li>
            <strong>entity</strong>: 当前行数据
          </li>
          <li>
            <strong>index</strong>: 行索引
          </li>
          <li>
            <strong>action</strong>: 操作对象，包含 startEditable 等方法
          </li>
        </ul>
        <h4>Action 操作方法：</h4>
        <ul>
          <li>
            <strong>startEditable</strong>: 开始编辑指定字段
          </li>
          <li>
            <strong>cancelEditable</strong>: 取消编辑
          </li>
          <li>
            <strong>saveEditable</strong>: 保存编辑
          </li>
        </ul>
        <h4>ValueType 类型：</h4>
        <ul>
          <li>
            <strong>select</strong>: 选择框，配合 valueEnum 使用
          </li>
          <li>
            <strong>textarea</strong>: 文本域
          </li>
          <li>
            <strong>date</strong>: 日期选择器
          </li>
          <li>
            <strong>rate</strong>: 评分组件
          </li>
          <li>
            <strong>money</strong>: 金额格式
          </li>
          <li>
            <strong>percent</strong>: 百分比格式
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>内联编辑</strong>: 直接在列表中编辑数据
          </li>
          <li>
            <strong>条件编辑</strong>: 根据条件控制编辑状态
          </li>
          <li>
            <strong>动态表单</strong>: 根据数据动态生成表单
          </li>
          <li>
            <strong>交互操作</strong>: 提供丰富的交互操作
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>编辑控制</strong>: 合理控制哪些字段可编辑
          </li>
          <li>
            <strong>用户体验</strong>: 提供清晰的编辑反馈
          </li>
          <li>
            <strong>数据验证</strong>: 在编辑时进行数据验证
          </li>
          <li>
            <strong>状态管理</strong>: 合理管理编辑状态
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProDescriptions } from '@ant-design/pro-components';
import { Button } from 'antd';

const Demo = () => {
  return (
    <>
      <ProDescriptions.Item label="文本" valueType="option">
        <Button key="primary" type="primary">
          提交
        </Button>
      </ProDescriptions.Item>
      <ProDescriptions
        column={2}
        title="高级定义列表"
        tooltip="包含了从服务器请求，columns等功能"
        request={async () => ({
          data: [{ id: 1, money: 12345 }],
          success: true,
        })}
        columns={[
          {
            title: () => '文本 2',
            key: 'text',
            dataIndex: 'id',
          },
          {
            title: 'money',
            key: 'money',
            dataIndex: 'money',
            valueType: { type: 'money', showSymbol: false },
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

import { ProDescriptions } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProDescriptions
        title="dataSource and columns"
        dataSource={{
          id: '这是一段文本columns',
          date: '20200809',
          money: '1212100',
          state: 'all',
          state2: 'open',
        }}
        columns={[
          {
            title: '文本',
            key: 'text',
            dataIndex: 'id',
            ellipsis: true,
            copyable: true,
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
            title: '状态2',
            key: 'state2',
            dataIndex: 'state2',
          },
          {
            title: '时间',
            key: 'date',
            dataIndex: 'date',
            valueType: 'date',
          },
          {
            title: 'money',
            key: 'money',
            dataIndex: 'money',
            valueType: 'money',
          },
          {
            title: '操作',
            valueType: 'option',
            render: () => [
              <a target="_blank" rel="noopener noreferrer" key="link">
                链路
              </a>,
              <a target="_blank" rel="noopener noreferrer" key="warning">
                报警
              </a>,
              <a target="_blank" rel="noopener noreferrer" key="view">
                查看
              </a>,
            ],
          },
        ]}
      >
        <ProDescriptions.Item label="百分比" valueType="percent">
          100
        </ProDescriptions.Item>
      </ProDescriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions DataSource 数据源 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 描述列表标题
          </li>
          <li>
            <strong>dataSource</strong>: 数据源对象，直接提供数据
          </li>
          <li>
            <strong>columns</strong>: 列配置数组，定义每列的属性
          </li>
        </ul>
        <h4>DataSource 数据源配置：</h4>
        <ul>
          <li>
            <strong>对象格式</strong>: 直接提供数据对象
          </li>
          <li>
            <strong>字段映射</strong>: 通过 dataIndex 映射到数据字段
          </li>
          <li>
            <strong>静态数据</strong>: 适合展示静态或已知数据
          </li>
          <li>
            <strong>性能优势</strong>: 无需异步请求，性能更好
          </li>
        </ul>
        <h4>Column 配置项：</h4>
        <ul>
          <li>
            <strong>title</strong>: 列标题
          </li>
          <li>
            <strong>key</strong>: 列的唯一标识
          </li>
          <li>
            <strong>dataIndex</strong>: 数据字段名，对应 dataSource 中的字段
          </li>
          <li>
            <strong>ellipsis</strong>: 是否显示省略号
          </li>
          <li>
            <strong>copyable</strong>: 是否可复制
          </li>
          <li>
            <strong>valueType</strong>: 值类型，决定如何渲染
          </li>
          <li>
            <strong>valueEnum</strong>: 枚举值配置
          </li>
          <li>
            <strong>render</strong>: 自定义渲染函数
          </li>
        </ul>
        <h4>ValueType 类型：</h4>
        <ul>
          <li>
            <strong>select</strong>: 选择框，配合 valueEnum 使用
          </li>
          <li>
            <strong>date</strong>: 日期格式
          </li>
          <li>
            <strong>money</strong>: 金额格式
          </li>
          <li>
            <strong>percent</strong>: 百分比格式
          </li>
          <li>
            <strong>option</strong>: 操作按钮
          </li>
        </ul>
        <h4>ValueEnum 枚举配置：</h4>
        <ul>
          <li>
            <strong>text</strong>: 显示的文本
          </li>
          <li>
            <strong>status</strong>: 状态类型，影响显示样式
          </li>
          <li>
            <strong>支持状态</strong>: Default, Error, Success, Processing
          </li>
        </ul>
        <h4>Render 自定义渲染：</h4>
        <ul>
          <li>
            <strong>函数返回</strong>: 返回 React 节点数组
          </li>
          <li>
            <strong>操作按钮</strong>: 常用于渲染操作链接或按钮
          </li>
          <li>
            <strong>样式控制</strong>: 完全控制渲染内容的样式
          </li>
        </ul>
        <h4>混合使用特点：</h4>
        <ul>
          <li>
            <strong>Columns 配置</strong>: 通过 columns 数组定义列
          </li>
          <li>
            <strong>Item 组件</strong>: 同时支持 ProDescriptions.Item
          </li>
          <li>
            <strong>优先级</strong>: Item 组件会覆盖 columns 中的配置
          </li>
        </ul>
        <h4>与 Request 的区别：</h4>
        <ul>
          <li>
            <strong>数据来源</strong>: dataSource 直接提供数据，request 异步获取
          </li>
          <li>
            <strong>使用场景</strong>: dataSource 适合静态数据，request
            适合动态数据
          </li>
          <li>
            <strong>性能差异</strong>: dataSource 性能更好，无需网络请求
          </li>
          <li>
            <strong>错误处理</strong>: dataSource 无需处理请求错误
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>静态数据</strong>: 展示已知的静态数据
          </li>
          <li>
            <strong>配置展示</strong>: 展示系统配置信息
          </li>
          <li>
            <strong>表单预览</strong>: 展示表单提交的数据
          </li>
          <li>
            <strong>详情页面</strong>: 展示对象详细信息
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>数据准备</strong>: 确保 dataSource 包含所有需要的字段
          </li>
          <li>
            <strong>列配置</strong>: 使用 columns 配置批量定义列
          </li>
          <li>
            <strong>类型匹配</strong>: 选择合适的 valueType 展示数据
          </li>
          <li>
            <strong>性能优化</strong>: 对于静态数据优先使用 dataSource
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProDescriptions } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProDescriptions
        title="高级定义列表request columns"
        request={async () => {
          return Promise.resolve({
            success: true,
            data: {
              date: '20200809',
              money: '1212100',
              money2: -12345.33,
              state: 'all',
              switch: true,
              state2: 'open',
            },
          });
        }}
        emptyText={'空'}
        columns={[
          {
            title: '文本',
            key: 'text',
            dataIndex: 'id',
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
            title: '状态2',
            key: 'state2',
            dataIndex: 'state2',
          },
          {
            title: '时间',
            key: 'date',
            dataIndex: 'date',
            valueType: 'date',
          },
          {
            title: '时间',
            key: 'date',
            dataIndex: 'date',
            valueType: 'date',
            fieldProps: {
              format: 'DD.MM.YYYY',
            },
          },
          {
            title: '开关',
            key: 'switch',
            dataIndex: 'switch',
            valueType: 'switch',
          },
          {
            title: 'money',
            key: 'money',
            dataIndex: 'money',
            valueType: 'money',
            fieldProps: {
              moneySymbol: '$',
            },
          },
          {
            title: 'money无符号',
            key: 'money',
            dataIndex: 'money',
            valueType: 'money',
            fieldProps: {
              moneySymbol: false,
            },
          },
          {
            title: 'money负数无符号',
            key: 'money2',
            dataIndex: 'money2',
            valueType: 'money',
            fieldProps: {
              moneySymbol: false,
            },
          },
          {
            title: '操作',
            valueType: 'option',
            render: () => [
              <a target="_blank" rel="noopener noreferrer" key="link">
                链路
              </a>,
              <a target="_blank" rel="noopener noreferrer" key="warning">
                报警
              </a>,
              <a target="_blank" rel="noopener noreferrer" key="view">
                查看
              </a>,
            ],
          },
        ]}
      >
        <ProDescriptions.Item
          dataIndex="percent"
          label="百分比"
          valueType="percent"
        >
          100
        </ProDescriptions.Item>
        <div>多余的dom</div>
        <ProDescriptions.Item label="超链接">
          <a href="alipay.com">超链接</a>
        </ProDescriptions.Item>
      </ProDescriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions Columns 配置 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 描述列表标题
          </li>
          <li>
            <strong>request</strong>: 异步请求函数，返回数据
          </li>
          <li>
            <strong>emptyText</strong>: 空数据时显示的文本
          </li>
          <li>
            <strong>columns</strong>: 列配置数组，定义每列的属性
          </li>
        </ul>
        <h4>Column 配置项：</h4>
        <ul>
          <li>
            <strong>title</strong>: 列标题
          </li>
          <li>
            <strong>key</strong>: 列的唯一标识
          </li>
          <li>
            <strong>dataIndex</strong>: 数据字段名
          </li>
          <li>
            <strong>valueType</strong>: 值类型，决定如何渲染
          </li>
          <li>
            <strong>valueEnum</strong>: 枚举值配置
          </li>
          <li>
            <strong>fieldProps</strong>: 字段属性配置
          </li>
          <li>
            <strong>render</strong>: 自定义渲染函数
          </li>
        </ul>
        <h4>ValueType 类型：</h4>
        <ul>
          <li>
            <strong>select</strong>: 选择框，配合 valueEnum 使用
          </li>
          <li>
            <strong>date</strong>: 日期格式
          </li>
          <li>
            <strong>switch</strong>: 开关组件
          </li>
          <li>
            <strong>money</strong>: 金额格式
          </li>
          <li>
            <strong>option</strong>: 操作按钮
          </li>
          <li>
            <strong>percent</strong>: 百分比格式
          </li>
        </ul>
        <h4>FieldProps 字段属性：</h4>
        <ul>
          <li>
            <strong>format</strong>: 日期格式化字符串，如 'DD.MM.YYYY'
          </li>
          <li>
            <strong>moneySymbol</strong>: 货币符号，可以是字符串或 false
          </li>
          <li>
            <strong>自定义属性</strong>: 根据 valueType 传递相应属性
          </li>
        </ul>
        <h4>ValueEnum 枚举配置：</h4>
        <ul>
          <li>
            <strong>text</strong>: 显示的文本
          </li>
          <li>
            <strong>status</strong>: 状态类型，影响显示样式
          </li>
          <li>
            <strong>支持状态</strong>: Default, Error, Success, Processing
          </li>
        </ul>
        <h4>Render 自定义渲染：</h4>
        <ul>
          <li>
            <strong>函数返回</strong>: 返回 React 节点数组
          </li>
          <li>
            <strong>操作按钮</strong>: 常用于渲染操作链接或按钮
          </li>
          <li>
            <strong>样式控制</strong>: 完全控制渲染内容的样式
          </li>
        </ul>
        <h4>混合使用特点：</h4>
        <ul>
          <li>
            <strong>Columns 配置</strong>: 通过 columns 数组定义列
          </li>
          <li>
            <strong>Item 组件</strong>: 同时支持 ProDescriptions.Item
          </li>
          <li>
            <strong>优先级</strong>: Item 组件会覆盖 columns 中的配置
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>动态列</strong>: 根据数据动态生成列配置
          </li>
          <li>
            <strong>复杂展示</strong>: 展示各种类型的数据
          </li>
          <li>
            <strong>操作列</strong>: 添加操作按钮或链接
          </li>
          <li>
            <strong>格式化显示</strong>: 自定义数据格式化方式
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>列配置</strong>: 使用 columns 配置批量定义列
          </li>
          <li>
            <strong>字段属性</strong>: 通过 fieldProps 传递组件属性
          </li>
          <li>
            <strong>自定义渲染</strong>: 使用 render 函数实现复杂渲染
          </li>
          <li>
            <strong>类型匹配</strong>: 选择合适的 valueType 展示数据
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProDescriptions } from '@ant-design/pro-components';
import { Button } from 'antd';
import dayjs from 'dayjs';

const Demo = () => {
  return (
    <ProDescriptions
      column={2}
      title="高级定义列表"
      tooltip="包含了从服务器请求，columns等功能"
    >
      <ProDescriptions.Item valueType="option">
        <Button key="primary" type="primary">
          提交
        </Button>
      </ProDescriptions.Item>
      <ProDescriptions.Item
        span={2}
        valueType="text"
        contentStyle={{
          maxWidth: '80%',
        }}
        renderText={(_) => {
          return _ + _;
        }}
        ellipsis
        label="文本"
      >
        这是一段很长很长超级超级长的无意义说明文本并且重复了很多没有意义的词语，就是为了让它变得很长很长超级超级长
      </ProDescriptions.Item>
      <ProDescriptions.Item
        label="金额"
        tooltip="仅供参考，以实际为准"
        valueType="money"
      >
        100
      </ProDescriptions.Item>
      <ProDescriptions.Item label="百分比" valueType="percent">
        100
      </ProDescriptions.Item>
      <ProDescriptions.Item
        label="选择框"
        valueEnum={{
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
        }}
      >
        open
      </ProDescriptions.Item>
      <ProDescriptions.Item
        label="远程选择框"
        request={async () => [
          { label: '全部', value: 'all' },
          { label: '未解决', value: 'open' },
          { label: '已解决', value: 'closed' },
          { label: '解决中', value: 'processing' },
        ]}
      >
        closed
      </ProDescriptions.Item>
      <ProDescriptions.Item label="进度条" valueType="progress">
        40
      </ProDescriptions.Item>
      <ProDescriptions.Item label="日期时间" valueType="dateTime">
        {dayjs().valueOf()}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="日期" valueType="date">
        {dayjs().valueOf()}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="日期区间" valueType="dateTimeRange">
        {[dayjs().add(-1, 'd').valueOf(), dayjs().valueOf()]}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="时间" valueType="time">
        {dayjs().valueOf()}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="代码块" valueType="code">
        {`
yarn run v1.22.0
$ eslint --format=pretty ./packages
Done in 9.70s.
          `}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="JSON 代码块" valueType="jsonCode">
        {`{
  "compilerOptions": {
    "target": "esnext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,

    "declaration": true,
    "skipLibCheck": true
  },
  "include": ["**/src", "**/docs", "scripts", "**/demo", ".eslintrc.js"]
}
`}
      </ProDescriptions.Item>
    </ProDescriptions>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProDescriptions, ProProvider } from '@ant-design/pro-components';
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
const tableListDataSource: TableListItem = {
  key: 1,
  name: `TradeCode 1`,
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

const Demo = () => {
  const values = useContext(ProProvider);
  return (
    <>
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
        <ProDescriptions<TableListItem, 'link' | 'tags'>
          columns={[
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
                    action?.reload();
                  }}
                >
                  刷新
                </a>,
              ],
            },
          ]}
          editable={{}}
          request={() => {
            return Promise.resolve({
              data: tableListDataSource,
              success: true,
            });
          }}
          title="自定义 valueType"
        />
      </ProProvider.Provider>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions 自定义 ValueType Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 描述列表标题
          </li>
          <li>
            <strong>columns</strong>: 列配置数组
          </li>
          <li>
            <strong>editable</strong>: 可编辑配置
          </li>
          <li>
            <strong>request</strong>: 异步请求函数
          </li>
        </ul>
        <h4>ProProvider 配置：</h4>
        <ul>
          <li>
            <strong>valueTypeMap</strong>: 自定义 valueType 映射表
          </li>
          <li>
            <strong>render</strong>: 自定义渲染函数
          </li>
          <li>
            <strong>formItemRender</strong>: 表单项渲染函数
          </li>
        </ul>
        <h4>自定义 ValueType 配置：</h4>
        <ul>
          <li>
            <strong>link</strong>: 自定义链接类型
          </li>
          <li>
            <strong>tags</strong>: 自定义标签类型
          </li>
          <li>
            <strong>render 函数</strong>: 定义如何渲染数据
          </li>
          <li>
            <strong>formItemRender 函数</strong>: 定义编辑时的表单组件
          </li>
        </ul>
        <h4>TagList 组件特点：</h4>
        <ul>
          <li>
            <strong>动态添加</strong>: 支持动态添加新标签
          </li>
          <li>
            <strong>输入验证</strong>: 防止重复标签
          </li>
          <li>
            <strong>键盘交互</strong>: 支持回车和失焦确认
          </li>
          <li>
            <strong>状态管理</strong>: 管理输入状态和标签列表
          </li>
        </ul>
        <h4>Column 配置：</h4>
        <ul>
          <li>
            <strong>title</strong>: 列标题
          </li>
          <li>
            <strong>dataIndex</strong>: 数据字段名
          </li>
          <li>
            <strong>valueType</strong>: 使用自定义的 valueType
          </li>
          <li>
            <strong>render</strong>: 自定义渲染函数，支持 action 参数
          </li>
        </ul>
        <h4>Render 函数参数：</h4>
        <ul>
          <li>
            <strong>text</strong>: 当前字段的值
          </li>
          <li>
            <strong>row</strong>: 当前行数据
          </li>
          <li>
            <strong>index</strong>: 行索引
          </li>
          <li>
            <strong>action</strong>: 操作对象，包含 reload 等方法
          </li>
        </ul>
        <h4>类型定义：</h4>
        <ul>
          <li>
            <strong>TableListItem</strong>: 表格数据项类型
          </li>
          <li>
            <strong>泛型支持</strong>: ProDescriptions&lt;TableListItem, 'link'
            | 'tags'&gt;
          </li>
          <li>
            <strong>类型安全</strong>: 提供完整的类型检查
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>自定义组件</strong>: 需要特殊的展示组件
          </li>
          <li>
            <strong>复杂交互</strong>: 需要复杂的用户交互
          </li>
          <li>
            <strong>业务定制</strong>: 根据业务需求定制展示方式
          </li>
          <li>
            <strong>编辑功能</strong>: 需要自定义编辑组件
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>组件封装</strong>: 将复杂的自定义组件封装为独立组件
          </li>
          <li>
            <strong>类型定义</strong>: 为自定义组件定义完整的类型
          </li>
          <li>
            <strong>状态管理</strong>: 合理管理组件的内部状态
          </li>
          <li>
            <strong>交互设计</strong>: 提供清晰的用户交互反馈
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProDescriptionsActionType } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';

const Demo = () => {
  const actionRef = useRef<ProDescriptionsActionType>();
  return (
    <ProDescriptions
      actionRef={actionRef}
      title="高级定义列表 request"
      request={async () => {
        return Promise.resolve({
          success: true,
          data: {
            info: {
              id: '这是一段文本',
              date: '20200730',
              money: '12121',
            },
          },
        });
      }}
      editable={{
        onSave: async (keypath, newInfo, oriInfo) => {
          console.log(keypath, newInfo, oriInfo);
          return true;
        },
      }}
    >
      <ProDescriptions.Item
        formItemProps={{
          rules: [
            {
              required: true,
              message: '此项为必填项',
            },
          ],
        }}
        dataIndex={['info', 'id']}
      />
      <ProDescriptions.Item
        dataIndex={['info', 'date']}
        label="日期"
        valueType="date"
      />
      <ProDescriptions.Item
        label="money"
        dataIndex={['info', 'money']}
        valueType="money"
      />
      <ProDescriptions.Item label="文本" valueType="option">
        <Button
          type="primary"
          onClick={() => {
            actionRef.current?.reload();
          }}
          key="reload"
        >
          刷新
        </Button>
        <Button key="rest">重置</Button>
      </ProDescriptions.Item>
    </ProDescriptions>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import {
  ProCard,
  ProDescriptions,
  ProForm,
  ProFormDependency,
  ProFormDigit,
  ProFormList,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useState } from 'react';

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

const initialValues = {
  title: '高级定义列表',
  column: '3',
  columns: [
    {
      title: '文本',
      key: 'text',
      dataIndex: 'id',
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
      title: '状态2',
      key: 'state2',
      dataIndex: 'state2',
    },
    {
      title: '时间',
      key: 'date',
      dataIndex: 'date',
      valueType: 'date',
    },
    {
      title: 'money',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '百分比',
      key: 'percent',
      dataIndex: 'percent',
      valueType: 'percent',
    },
    {
      title: '操作',
      valueType: 'option',
      render: () => [
        <a target="_blank" rel="noopener noreferrer" key="link">
          链路
        </a>,
        <a target="_blank" rel="noopener noreferrer" key="warning">
          报警
        </a>,
        <a target="_blank" rel="noopener noreferrer" key="view">
          查看
        </a>,
      ],
    },
  ],
};

const Demo = () => {
  const [values, setValues] = useState<Record<string, any>>(initialValues);
  return (
    <>
      <ProCard
        variant="outlined"
        split="vertical"
        headerBordered
        style={{
          minHeight: 500,
        }}
      >
        <ProCard colSpan="calc(100% - 580px)">
          <ProDescriptions
            title="高级定义列表"
            {...values}
            columns={values?.columns?.filter(Boolean) || []}
            request={async () => {
              return Promise.resolve({
                success: true,
                data: {
                  id: '这是一段文本columns',
                  date: '20200809',
                  money: '1212100',
                  state: 'all',
                  state2: 'open',
                  percent: '20%',
                },
              });
            }}
          />
        </ProCard>
        <ProForm
          initialValues={values}
          onValuesChange={(_, allValue) => {
            setValues({ ...initialValues, ...allValue });
          }}
          submitter={false}
        >
          <ProCard
            colSpan="580px"
            title="配置菜单"
            tabs={{
              items: [
                {
                  label: '基本配置',
                  key: 'base',
                  children: (
                    <>
                      <ProFormText label="标题" name="title" />
                      <ProForm.Group>
                        <ProFormSelect
                          name="layout"
                          label="布局"
                          initialValue="horizontal"
                          options={[
                            {
                              label: '水平',
                              value: 'horizontal',
                            },
                            {
                              label: '垂直',
                              value: 'vertical',
                            },
                          ]}
                        />
                        <ProFormSwitch
                          label="加载中"
                          tooltip="loading"
                          name="loading"
                        />
                        <ProFormSelect
                          name="size"
                          label="尺寸"
                          initialValue="default"
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
                        />

                        <ProFormSwitch
                          label="边框"
                          tooltip="bordered"
                          name="bordered"
                        />
                        <ProFormDigit width="xs" label="列数" name="column" />
                      </ProForm.Group>
                    </>
                  ),
                },
                {
                  label: '列配置',
                  key: 'columns',
                  children: (
                    <ProFormList
                      name="columns"
                      label="列配置"
                      creatorButtonProps={{
                        position: 'top',
                      }}
                      itemRender={({ listDom, action }) => {
                        return (
                          <ProCard
                            variant="outlined"
                            style={{
                              marginBlockEnd: 8,
                              position: 'relative',
                            }}
                          >
                            <div
                              style={{
                                position: 'absolute',
                                top: -2,
                                right: 4,
                              }}
                            >
                              {action}
                            </div>
                            {listDom}
                          </ProCard>
                        );
                      }}
                    >
                      <ProForm.Group size={16} key="Group">
                        <ProFormText label="标题" name="title" />
                        <ProFormDigit
                          width="xs"
                          initialValue={1}
                          label="占据列数"
                          name="span"
                        />
                        <ProFormSelect
                          width="xs"
                          label="值类型"
                          name="valueType"
                          options={valueTypeArray.map((value) => ({
                            label: value,
                            value,
                          }))}
                        />
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
                      </ProForm.Group>
                      <ProFormDependency
                        key="valueType"
                        name={['valueType', 'valueEnum']}
                      >
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
            style={{
              width: 500,
            }}
          />
        </ProForm>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions 动态配置 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 描述列表标题，支持动态修改
          </li>
          <li>
            <strong>column</strong>: 列数，支持动态调整
          </li>
          <li>
            <strong>columns</strong>: 列配置数组，支持动态增删改
          </li>
          <li>
            <strong>request</strong>: 异步请求函数，返回数据
          </li>
        </ul>
        <h4>ProCard 布局配置：</h4>
        <ul>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
          <li>
            <strong>split</strong>: 分割方式，'vertical' 表示垂直分割
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
          <li>
            <strong>colSpan</strong>: 列跨度，支持 calc() 计算
          </li>
        </ul>
        <h4>ProForm 表单配置：</h4>
        <ul>
          <li>
            <strong>initialValues</strong>: 表单初始值
          </li>
          <li>
            <strong>onValuesChange</strong>: 值变化时的回调函数
          </li>
          <li>
            <strong>submitter</strong>: 提交按钮配置，false 表示不显示
          </li>
        </ul>
        <h4>基本配置选项：</h4>
        <ul>
          <li>
            <strong>layout</strong>: 布局方式，horizontal/vertical
          </li>
          <li>
            <strong>loading</strong>: 是否显示加载状态
          </li>
          <li>
            <strong>size</strong>: 尺寸，default/middle/small
          </li>
          <li>
            <strong>bordered</strong>: 是否显示边框
          </li>
        </ul>
        <h4>列配置选项：</h4>
        <ul>
          <li>
            <strong>title</strong>: 列标题
          </li>
          <li>
            <strong>span</strong>: 占据列数
          </li>
          <li>
            <strong>valueType</strong>: 值类型，支持多种类型
          </li>
          <li>
            <strong>dataIndex</strong>: 数据字段名
          </li>
          <li>
            <strong>valueEnum</strong>: 枚举值配置（仅 select 类型）
          </li>
        </ul>
        <h4>ProFormList 特点：</h4>
        <ul>
          <li>
            <strong>动态列表</strong>: 支持动态添加和删除列配置
          </li>
          <li>
            <strong>itemRender</strong>: 自定义列表项渲染
          </li>
          <li>
            <strong>creatorButtonProps</strong>: 创建按钮配置
          </li>
        </ul>
        <h4>ProFormDependency 依赖配置：</h4>
        <ul>
          <li>
            <strong>条件渲染</strong>: 根据 valueType 条件显示表单项
          </li>
          <li>
            <strong>JSON 解析</strong>: 自动解析和格式化 valueEnum
          </li>
          <li>
            <strong>实时更新</strong>: 依赖字段变化时实时更新
          </li>
        </ul>
        <h4>ValueType 支持类型：</h4>
        <ul>
          <li>
            <strong>基础类型</strong>: text, password, textarea, code
          </li>
          <li>
            <strong>数字类型</strong>: money, percent, digit, second
          </li>
          <li>
            <strong>日期类型</strong>: date, dateTime, time 等
          </li>
          <li>
            <strong>选择类型</strong>: select, checkbox, radio 等
          </li>
          <li>
            <strong>特殊类型</strong>: avatar, image, switch, progress 等
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>配置工具</strong>: 构建动态配置界面
          </li>
          <li>
            <strong>可视化编辑</strong>: 可视化编辑组件配置
          </li>
          <li>
            <strong>原型设计</strong>: 快速原型设计和验证
          </li>
          <li>
            <strong>调试工具</strong>: 调试和测试组件配置
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>状态管理</strong>: 合理管理配置状态
          </li>
          <li>
            <strong>实时预览</strong>: 提供实时预览功能
          </li>
          <li>
            <strong>配置验证</strong>: 对配置进行验证
          </li>
          <li>
            <strong>用户体验</strong>: 提供直观的配置界面
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProDescriptionsActionType } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';

const Demo = () => {
  const actionRef = useRef<ProDescriptionsActionType>();
  return (
    <>
      <ProDescriptions
        actionRef={actionRef}
        title="高级定义列表 request"
        request={async () => {
          return Promise.resolve({
            success: true,
            data: { id: '这是一段文本', date: '20200730', money: '12121' },
          });
        }}
        extra={<Button type="link">修改</Button>}
      >
        <ProDescriptions.Item dataIndex="id" />
        <ProDescriptions.Item dataIndex="date" label="日期" valueType="date" />
        <ProDescriptions.Item
          label="money"
          dataIndex="money"
          valueType="money"
        />
        <ProDescriptions.Item label="文本" valueType="option">
          <Button
            type="primary"
            onClick={() => {
              actionRef.current?.reload();
            }}
            key="reload"
          >
            刷新
          </Button>
          <Button key="rest">重置</Button>
        </ProDescriptions.Item>
      </ProDescriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions Request 请求 Props 说明：</h4>
        <ul>
          <li>
            <strong>actionRef</strong>: 操作引用，用于调用组件方法
          </li>
          <li>
            <strong>title</strong>: 描述列表标题
          </li>
          <li>
            <strong>request</strong>: 异步请求函数，返回数据
          </li>
          <li>
            <strong>extra</strong>: 右上角额外内容
          </li>
        </ul>
        <h4>Request 请求配置：</h4>
        <ul>
          <li>
            <strong>异步函数</strong>: 返回 Promise 对象
          </li>
          <li>
            <strong>数据格式</strong>: &#123; success: boolean, data: object
            &#125;
          </li>
          <li>
            <strong>自动加载</strong>: 组件挂载时自动请求数据
          </li>
          <li>
            <strong>错误处理</strong>: 自动处理请求错误
          </li>
        </ul>
        <h4>ProDescriptions.Item 配置：</h4>
        <ul>
          <li>
            <strong>dataIndex</strong>: 数据字段名，自动绑定到 request
            返回的数据
          </li>
          <li>
            <strong>label</strong>: 标签文本
          </li>
          <li>
            <strong>valueType</strong>: 值类型，决定如何渲染数据
          </li>
          <li>
            <strong>children</strong>: 自定义内容，如操作按钮
          </li>
        </ul>
        <h4>ActionRef 操作方法：</h4>
        <ul>
          <li>
            <strong>reload</strong>: 重新加载数据
          </li>
          <li>
            <strong>reset</strong>: 重置数据
          </li>
          <li>
            <strong>clearSelected</strong>: 清除选中状态
          </li>
        </ul>
        <h4>ValueType 类型：</h4>
        <ul>
          <li>
            <strong>date</strong>: 日期格式，自动格式化显示
          </li>
          <li>
            <strong>money</strong>: 金额格式，自动添加货币符号
          </li>
          <li>
            <strong>option</strong>: 操作按钮，支持自定义组件
          </li>
        </ul>
        <h4>Extra 额外内容：</h4>
        <ul>
          <li>
            <strong>React 节点</strong>: 支持任何 React 组件
          </li>
          <li>
            <strong>操作按钮</strong>: 常用于添加操作按钮
          </li>
          <li>
            <strong>样式控制</strong>: 可以自定义样式和交互
          </li>
        </ul>
        <h4>数据绑定特点：</h4>
        <ul>
          <li>
            <strong>自动绑定</strong>: 通过 dataIndex 自动绑定数据
          </li>
          <li>
            <strong>类型安全</strong>: 提供完整的类型检查
          </li>
          <li>
            <strong>响应式更新</strong>: 数据变化时自动更新显示
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据展示</strong>: 从 API 获取数据并展示
          </li>
          <li>
            <strong>动态刷新</strong>: 通过按钮刷新数据
          </li>
          <li>
            <strong>操作控制</strong>: 通过 actionRef 控制组件行为
          </li>
          <li>
            <strong>用户交互</strong>: 提供用户操作界面
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>错误处理</strong>: 在 request 中处理请求错误
          </li>
          <li>
            <strong>加载状态</strong>: 提供加载状态反馈
          </li>
          <li>
            <strong>数据验证</strong>: 验证返回数据的格式
          </li>
          <li>
            <strong>用户体验</strong>: 提供清晰的操作反馈
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProDescriptions } from '@ant-design/pro-components';
import dayjs from 'dayjs';

const Demo = () => {
  return (
    <>
      <ProDescriptions
        column={2}
        title="高级定义列表"
        tooltip="包含了从服务器请求，columns等功能"
      >
        <ProDescriptions.Item
          label="日期"
          fieldProps={{
            format: 'YYYY.MM.DD',
          }}
          valueType="date"
        >
          {dayjs().valueOf()}
        </ProDescriptions.Item>
        <ProDescriptions.Item
          label="日期区间"
          fieldProps={{
            format: 'YYYY.MM.DD HH:mm:ss',
          }}
          valueType="dateTimeRange"
        >
          {[dayjs().add(-1, 'd').valueOf(), dayjs().valueOf()]}
        </ProDescriptions.Item>
        <ProDescriptions.Item
          label="时间"
          fieldProps={{
            format: 'YYYY.MM.DD',
          }}
          valueType="time"
        >
          {dayjs().valueOf()}
        </ProDescriptions.Item>

        <ProDescriptions.Item
          label="时间日期"
          fieldProps={{
            format: 'YYYY.MM.DD HH:mm:ss',
          }}
          valueType="dateTime"
        >
          {dayjs().valueOf()}
        </ProDescriptions.Item>

        <ProDescriptions.Item
          label="更新时间"
          fieldProps={{
            format: 'YYYY.MM.DD',
          }}
          valueType="fromNow"
        >
          {dayjs().add(-1, 'month').valueOf()}
        </ProDescriptions.Item>
      </ProDescriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProDescriptions 格式化配置 Props 说明：</h4>
        <ul>
          <li>
            <strong>column</strong>: 列数，设置为 2 表示每行显示 2 列
          </li>
          <li>
            <strong>title</strong>: 描述列表标题
          </li>
          <li>
            <strong>tooltip</strong>: 标题提示信息
          </li>
        </ul>
        <h4>ProDescriptions.Item 配置：</h4>
        <ul>
          <li>
            <strong>label</strong>: 标签文本
          </li>
          <li>
            <strong>valueType</strong>: 值类型，决定如何渲染数据
          </li>
          <li>
            <strong>fieldProps</strong>: 字段属性配置
          </li>
          <li>
            <strong>children</strong>: 数据内容
          </li>
        </ul>
        <h4>FieldProps 格式化配置：</h4>
        <ul>
          <li>
            <strong>format</strong>: 格式化字符串，定义显示格式
          </li>
          <li>
            <strong>自定义格式</strong>: 支持 dayjs 的所有格式化选项
          </li>
        </ul>
        <h4>ValueType 日期时间类型：</h4>
        <ul>
          <li>
            <strong>date</strong>: 日期格式，显示年月日
          </li>
          <li>
            <strong>dateTime</strong>: 日期时间格式，显示年月日时分秒
          </li>
          <li>
            <strong>dateTimeRange</strong>: 日期时间区间格式
          </li>
          <li>
            <strong>time</strong>: 时间格式，显示时分秒
          </li>
          <li>
            <strong>fromNow</strong>: 相对时间格式，显示多久之前
          </li>
        </ul>
        <h4>格式化字符串说明：</h4>
        <ul>
          <li>
            <strong>YYYY</strong>: 四位年份
          </li>
          <li>
            <strong>MM</strong>: 两位月份
          </li>
          <li>
            <strong>DD</strong>: 两位日期
          </li>
          <li>
            <strong>HH</strong>: 24小时制小时
          </li>
          <li>
            <strong>mm</strong>: 分钟
          </li>
          <li>
            <strong>ss</strong>: 秒
          </li>
        </ul>
        <h4>数据格式：</h4>
        <ul>
          <li>
            <strong>时间戳</strong>: 使用 dayjs().valueOf() 获取时间戳
          </li>
          <li>
            <strong>数组格式</strong>: 日期区间使用数组 [start, end]
          </li>
          <li>
            <strong>相对时间</strong>: fromNow 类型支持相对时间计算
          </li>
        </ul>
        <h4>Dayjs 操作：</h4>
        <ul>
          <li>
            <strong>add</strong>: 添加时间，如 add(-1, 'month') 表示一个月前
          </li>
          <li>
            <strong>valueOf</strong>: 获取时间戳
          </li>
          <li>
            <strong>格式化</strong>: 通过 format 方法格式化时间
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>日期展示</strong>: 展示各种格式的日期时间
          </li>
          <li>
            <strong>时间区间</strong>: 展示时间范围
          </li>
          <li>
            <strong>相对时间</strong>: 展示相对时间，如"一个月前"
          </li>
          <li>
            <strong>格式化定制</strong>: 根据需求定制显示格式
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>格式统一</strong>: 在项目中保持日期格式的一致性
          </li>
          <li>
            <strong>用户友好</strong>: 选择用户容易理解的格式
          </li>
          <li>
            <strong>国际化</strong>: 考虑不同地区的日期格式习惯
          </li>
          <li>
            <strong>性能考虑</strong>: 避免频繁的时间格式化操作
          </li>
        </ul>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

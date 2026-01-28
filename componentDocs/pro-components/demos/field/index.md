

import type { ProFieldFCMode } from '@ant-design/pro-components';
import { ProField } from '@ant-design/pro-components';
import { Descriptions, Radio, Space, Switch } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

const Demo = () => {
  const [state, setState] = useState<ProFieldFCMode>('edit');
  const [plain, setPlain] = useState<boolean>(false);
  return (
    <>
      <Space>
        <Radio.Group
          onChange={(e) => setState(e.target.value as ProFieldFCMode)}
          value={state}
        >
          <Radio value="read">只读</Radio>
          <Radio value="edit">编辑</Radio>
        </Radio.Group>
        简约模式
        <Switch checked={plain} onChange={(checked) => setPlain(checked)} />
      </Space>
      <br />
      <br />
      <Descriptions column={2}>
        <Descriptions.Item label="空字符串">
          <ProField text="" mode="read" />
        </Descriptions.Item>
        <Descriptions.Item label="头像">
          <ProField
            text="https://avatars2.githubusercontent.com/u/8186664?s=60&v=4"
            mode="read"
            valueType="avatar"
          />
        </Descriptions.Item>
        <Descriptions.Item label="文本">
          <ProField
            text="这是一段文本"
            fieldProps={{
              disabled: true,
            }}
            valueType="text"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="颜色">
          <ProField text="blue" valueType="color" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="颜色禁用">
          <ProField
            text="blue"
            valueType="color"
            fieldProps={{
              disabled: true,
            }}
            mode={state}
            plain={plain}
          />
          <ProField text="blue" valueType="color" disabled mode="read" />
        </Descriptions.Item>
        <Descriptions.Item label="图片">
          <ProField
            text="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            valueType={{
              type: 'image',
              width: 100,
            }}
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="金额">
          <ProField
            numberPopoverRender
            fieldProps={{
              precision: 2,
              style: {
                width: 200,
              },
            }}
            text="10000"
            valueType="money"
            mode={state}
            plain={plain}
          />

          <ProField
            valueType="money"
            label="自定义货币符号"
            name="amount4"
            fieldProps={{
              value: 2221212.22,
              customSymbol: '💰',
            }}
            mode="read"
          />
        </Descriptions.Item>
        <Descriptions.Item label="数字">
          <ProField
            text="19897979797979"
            valueType="digit"
            fieldProps={{
              min: 1,
              max: 10000,
              precision: 0,
              formatter: null,
            }}
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="数字范围">
          <ProField
            text={[123, 456]}
            valueType="digitRange"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="秒格式化">
          <ProField
            text={2000000}
            valueType="second"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <ProField text="100" valueType="percent" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="评分">
          <ProField text={3.5} valueType="rate" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="slider">
          <ProField text="40" valueType="slider" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="选择框">
          <ProField
            text="open"
            mode={state}
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选">
          <ProField
            text={['open', 'closed']}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选 labelInValue">
          <ProField
            text={[
              {
                value: 'open1',
                label: '打开',
              },
              {
                value: 'closed2',
                label: '关闭',
              },
            ]}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选">
          <ProField
            text="open"
            mode={state}
            valueType="radio"
            fieldProps={{
              layout: 'horizontal',
            }}
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选按钮">
          <ProField
            text="open"
            mode={state}
            valueType="radioButton"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="远程选择框">
          <ProField
            text="open"
            mode={state}
            params={{
              name: 'test',
            }}
            valueType="select"
            request={async () => {
              return [
                { label: '全部', value: 'all' },
                { label: '未解决', value: 'open' },
                { label: '已解决', value: 'closed' },
                { label: '解决中', value: 'processing' },
                {
                  label: '特殊选项',
                  value: 'optGroup',
                  optionType: 'optGroup',
                  options: [
                    { label: '不解决', value: 'no' },
                    { label: '已废弃', value: 'clear' },
                  ],
                },
              ];
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="远程级联框">
          <ProField
            mode={state}
            params={{
              name: 'test',
            }}
            valueType="cascader"
            request={async () => {
              return [
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
              ];
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="进度条">
          <ProField text="40" valueType="progress" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="进度条">
          <ProField
            text="40%"
            valueType="progress"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="进度条">
          <ProField
            text="love"
            valueType="progress"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="百分比空值">
          <ProField valueType="percent" mode="read" />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <Space>
            <ProField
              text={10}
              valueType={{
                type: 'percent',
                showSymbol: (text: number) => {
                  if (text < 0) {
                    return true;
                  }
                  return false;
                },
                showColor: true,
              }}
              mode="read"
            />
            <ProField
              text={0}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
            <ProField
              text={-10}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期时间">
          <ProField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            valueType="dateTime"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="相对于当前时间">
          <Space>
            <ProField
              text={dayjs('2019-11-16 12:50:26').valueOf()}
              valueType="fromNow"
              mode={state}
              plain={plain}
            />
            <ProField
              text={dayjs('2020-11-16 12:50:26').valueOf()}
              valueType="fromNow"
              mode={state}
              plain={plain}
            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期">
          <ProField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            valueType="date"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="日期区间">
          <ProField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="dateRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="日期时间区间">
          <ProField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="dateTimeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="时间">
          <ProField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            plain={plain}
            valueType="time"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="时间区间">
          <ProField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="timeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="密码">
          <ProField
            text="password"
            plain={plain}
            valueType="password"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="代码块">
          <ProField
            text={`
yarn run v1.22.0            
$ eslint --format=pretty ./packages
Done in 9.70s.
          `}
            valueType="code"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="JSON 代码块">
          <ProField
            text={`{
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
            valueType="jsonCode"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
      </Descriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProField 基础测试 Props 说明：</h4>
        <ul>
          <li>
            <strong>text</strong>: 显示的文本内容
          </li>
          <li>
            <strong>mode</strong>: 显示模式，'read' 表示只读，'edit' 表示编辑
          </li>
          <li>
            <strong>valueType</strong>: 值类型，决定如何渲染内容
          </li>
          <li>
            <strong>plain</strong>: 是否使用简约模式
          </li>
          <li>
            <strong>fieldProps</strong>: 字段属性配置
          </li>
          <li>
            <strong>disabled</strong>: 是否禁用
          </li>
        </ul>
        <h4>Radio.Group 配置：</h4>
        <ul>
          <li>
            <strong>onChange</strong>: 值变化回调函数
          </li>
          <li>
            <strong>value</strong>: 当前选中的值
          </li>
          <li>
            <strong>模式切换</strong>: 用于切换 ProField 的显示模式
          </li>
        </ul>
        <h4>Switch 配置：</h4>
        <ul>
          <li>
            <strong>checked</strong>: 是否选中
          </li>
          <li>
            <strong>onChange</strong>: 值变化回调函数
          </li>
          <li>
            <strong>简约模式</strong>: 控制是否使用简约模式
          </li>
        </ul>
        <h4>Descriptions 配置：</h4>
        <ul>
          <li>
            <strong>column</strong>: 列数配置
          </li>
          <li>
            <strong>内容展示</strong>: 用于展示各种 ProField 组件
          </li>
        </ul>
        <h4>支持的 valueType 类型：</h4>
        <ul>
          <li>
            <strong>text</strong>: 文本类型
          </li>
          <li>
            <strong>avatar</strong>: 头像类型
          </li>
          <li>
            <strong>color</strong>: 颜色类型
          </li>
          <li>
            <strong>image</strong>: 图片类型
          </li>
          <li>
            <strong>money</strong>: 金额类型
          </li>
          <li>
            <strong>digit</strong>: 数字类型
          </li>
          <li>
            <strong>date</strong>: 日期类型
          </li>
          <li>
            <strong>dateRange</strong>: 日期区间类型
          </li>
          <li>
            <strong>dateTimeRange</strong>: 日期时间区间类型
          </li>
          <li>
            <strong>time</strong>: 时间类型
          </li>
          <li>
            <strong>timeRange</strong>: 时间区间类型
          </li>
          <li>
            <strong>password</strong>: 密码类型
          </li>
          <li>
            <strong>code</strong>: 代码块类型
          </li>
          <li>
            <strong>jsonCode</strong>: JSON 代码块类型
          </li>
        </ul>
        <h4>fieldProps 配置：</h4>
        <ul>
          <li>
            <strong>disabled</strong>: 是否禁用字段
          </li>
          <li>
            <strong>precision</strong>: 数字精度
          </li>
          <li>
            <strong>style</strong>: 样式配置
          </li>
          <li>
            <strong>customSymbol</strong>: 自定义货币符号
          </li>
          <li>
            <strong>width</strong>: 图片宽度
          </li>
        </ul>
        <h4>显示模式特点：</h4>
        <ul>
          <li>
            <strong>只读模式</strong>: 仅显示内容，不可编辑
          </li>
          <li>
            <strong>编辑模式</strong>: 可以编辑内容
          </li>
          <li>
            <strong>简约模式</strong>: 使用简约的显示样式
          </li>
          <li>
            <strong>动态切换</strong>: 支持动态切换显示模式
          </li>
        </ul>
        <h4>布局特点：</h4>
        <ul>
          <li>
            <strong>控制区域</strong>: 顶部显示模式切换控制
          </li>
          <li>
            <strong>展示区域</strong>: 使用 Descriptions 展示各种字段类型
          </li>
          <li>
            <strong>响应式设计</strong>: 自动适配不同屏幕尺寸
          </li>
          <li>
            <strong>网格布局</strong>: 使用网格布局展示多个字段
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>字段测试</strong>: 测试各种字段类型的显示效果
          </li>
          <li>
            <strong>模式切换</strong>: 测试只读和编辑模式的切换
          </li>
          <li>
            <strong>样式测试</strong>: 测试简约模式和普通模式的样式差异
          </li>
          <li>
            <strong>功能验证</strong>: 验证各种字段类型的功能
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>类型选择</strong>: 根据数据类型选择合适的 valueType
          </li>
          <li>
            <strong>模式设计</strong>: 合理设计只读和编辑模式
          </li>
          <li>
            <strong>样式配置</strong>: 根据需求配置合适的样式
          </li>
          <li>
            <strong>用户体验</strong>: 提供清晰的模式切换和内容展示
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

import type { ProFieldFCMode } from '@ant-design/pro-components';
import { ProField } from '@ant-design/pro-components';
import { Descriptions, Radio, Space, Switch } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

const Demo = () => {
  const [state, setState] = useState<ProFieldFCMode>('read');
  const [plain, setPlain] = useState<boolean>(false);
  return (
    <>
      <Space>
        <Radio.Group
          onChange={(e) => setState(e.target.value as ProFieldFCMode)}
          value={state}
        >
          <Radio value="read">只读</Radio>
          <Radio value="edit">编辑</Radio>
        </Radio.Group>
        简约模式
        <Switch checked={plain} onChange={(checked) => setPlain(checked)} />
      </Space>
      <br />
      <br />
      <Descriptions column={2}>
        <Descriptions.Item label="空字符串">
          <ProField text="" mode="read" />
        </Descriptions.Item>
        <Descriptions.Item label="头像">
          <ProField
            text="https://avatars2.githubusercontent.com/u/8186664?s=60&v=4"
            mode="read"
            valueType="avatar"
          />
        </Descriptions.Item>
        <Descriptions.Item label="文本">
          <ProField
            text="这是一段文本"
            valueType="text"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="图片">
          <ProField
            text="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            valueType="image"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="金额">
          <ProField text="100" valueType="money" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="颜色">
          <ProField text="blue" valueType="color" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="数字">
          <ProField
            text="19897979797979"
            valueType="digit"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="数字范围">
          <ProField
            text={[123, 456]}
            valueType="digitRange"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="秒格式化">
          <ProField
            text={2000000}
            valueType="second"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <ProField text="100" valueType="percent" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="评分">
          <ProField text={3.5} valueType="rate" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="选择框">
          <ProField
            text="open"
            mode={state}
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选">
          <ProField
            text={['open', 'closed']}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选 labelInValue">
          <ProField
            text={[
              {
                value: 'open1',
                label: '打开',
              },
              {
                value: 'closed2',
                label: '关闭',
              },
            ]}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选">
          <ProField
            text="open"
            mode={state}
            valueType="radio"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选按钮">
          <ProField
            text="open"
            mode={state}
            valueType="radioButton"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="远程选择框">
          <ProField
            text="open"
            mode={state}
            valueType="select"
            request={async () => [
              { label: '全部', value: 'all' },
              { label: '未解决', value: 'open' },
              { label: '已解决', value: 'closed' },
              { label: '解决中', value: 'processing' },
              {
                label: '特殊选项',
                value: 'optGroup',
                optionType: 'optGroup',
                options: [
                  { label: '不解决', value: 'no' },
                  { label: '已废弃', value: 'clear' },
                ],
              },
            ]}
          />
        </Descriptions.Item>
        <Descriptions.Item label="级联选择框">
          <ProField
            text={['zhejiang', 'hangzhou', 'xihu']}
            mode={state}
            valueType="cascader"
            fieldProps={{
              fieldNames: {
                label: 'name',
              },
            }}
            request={async () => [
              {
                value: 'zhejiang',
                name: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    name: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        name: 'West Lake',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'jiangsu',
                name: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    name: 'Nanjing',
                    children: [
                      {
                        value: 'zhonghuamen',
                        name: 'Zhong Hua Men',
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Descriptions.Item>
        <Descriptions.Item label="进度条">
          <ProField text="40" valueType="progress" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="slider">
          <ProField text="40" valueType="slider" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <Space>
            <ProField
              text={10}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
            <ProField
              text={0}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
            <ProField
              text={-10}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期时间">
          <ProField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            valueType="dateTime"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="相对于当前时间">
          <Space>
            <ProField
              text={dayjs('2019-11-16 12:50:26').valueOf()}
              valueType="fromNow"
              mode={state}
              plain={plain}
            />
            <ProField
              text={dayjs('2020-11-16 12:50:26').valueOf()}
              valueType="fromNow"
              mode={state}
              plain={plain}
            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期">
          <ProField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            valueType="date"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="日期区间">
          <ProField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="dateRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="日期时间区间">
          <ProField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="dateTimeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="时间">
          <ProField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            plain={plain}
            valueType="time"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="时间区间">
          <ProField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="timeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="密码">
          <ProField
            text="password"
            plain={plain}
            valueType="password"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="代码块">
          <ProField
            text={`
yarn run v1.22.0            
$ eslint --format=pretty ./packages
Done in 9.70s.
          `}
            valueType="code"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="JSON 代码块">
          <ProField
            text={`{
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
            valueType="jsonCode"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
      </Descriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProField 基础用法 Props 说明：</h4>
        <ul>
          <li>
            <strong>text</strong>: 显示的文本内容
          </li>
          <li>
            <strong>mode</strong>: 显示模式，'read' 表示只读，'edit' 表示编辑
          </li>
          <li>
            <strong>valueType</strong>: 值类型，决定如何渲染内容
          </li>
          <li>
            <strong>plain</strong>: 是否使用简约模式
          </li>
          <li>
            <strong>valueEnum</strong>: 枚举值配置，用于选择框等组件
          </li>
        </ul>
        <h4>Radio.Group 配置：</h4>
        <ul>
          <li>
            <strong>onChange</strong>: 值变化回调函数
          </li>
          <li>
            <strong>value</strong>: 当前选中的值
          </li>
          <li>
            <strong>模式切换</strong>: 用于切换 ProField 的显示模式
          </li>
        </ul>
        <h4>Switch 配置：</h4>
        <ul>
          <li>
            <strong>checked</strong>: 是否选中
          </li>
          <li>
            <strong>onChange</strong>: 值变化回调函数
          </li>
          <li>
            <strong>简约模式</strong>: 控制是否使用简约模式
          </li>
        </ul>
        <h4>Descriptions 配置：</h4>
        <ul>
          <li>
            <strong>column</strong>: 列数配置
          </li>
          <li>
            <strong>内容展示</strong>: 用于展示各种 ProField 组件
          </li>
        </ul>
        <h4>支持的 valueType 类型：</h4>
        <ul>
          <li>
            <strong>text</strong>: 文本类型
          </li>
          <li>
            <strong>avatar</strong>: 头像类型
          </li>
          <li>
            <strong>image</strong>: 图片类型
          </li>
          <li>
            <strong>money</strong>: 金额类型
          </li>
          <li>
            <strong>color</strong>: 颜色类型
          </li>
          <li>
            <strong>digit</strong>: 数字类型
          </li>
          <li>
            <strong>digitRange</strong>: 数字范围类型
          </li>
          <li>
            <strong>second</strong>: 秒格式化类型
          </li>
          <li>
            <strong>percent</strong>: 百分比类型
          </li>
          <li>
            <strong>rate</strong>: 评分类型
          </li>
          <li>
            <strong>select</strong>: 选择框类型
          </li>
          <li>
            <strong>date</strong>: 日期类型
          </li>
          <li>
            <strong>dateRange</strong>: 日期区间类型
          </li>
          <li>
            <strong>dateTimeRange</strong>: 日期时间区间类型
          </li>
          <li>
            <strong>time</strong>: 时间类型
          </li>
          <li>
            <strong>timeRange</strong>: 时间区间类型
          </li>
          <li>
            <strong>password</strong>: 密码类型
          </li>
          <li>
            <strong>code</strong>: 代码块类型
          </li>
          <li>
            <strong>jsonCode</strong>: JSON 代码块类型
          </li>
        </ul>
        <h4>valueEnum 配置：</h4>
        <ul>
          <li>
            <strong>text</strong>: 显示文本
          </li>
          <li>
            <strong>status</strong>: 状态类型
          </li>
          <li>
            <strong>disabled</strong>: 是否禁用
          </li>
          <li>
            <strong>枚举映射</strong>: 将值映射为显示文本和状态
          </li>
        </ul>
        <h4>显示模式特点：</h4>
        <ul>
          <li>
            <strong>只读模式</strong>: 仅显示内容，不可编辑
          </li>
          <li>
            <strong>编辑模式</strong>: 可以编辑内容
          </li>
          <li>
            <strong>简约模式</strong>: 使用简约的显示样式
          </li>
          <li>
            <strong>动态切换</strong>: 支持动态切换显示模式
          </li>
        </ul>
        <h4>布局特点：</h4>
        <ul>
          <li>
            <strong>控制区域</strong>: 顶部显示模式切换控制
          </li>
          <li>
            <strong>展示区域</strong>: 使用 Descriptions 展示各种字段类型
          </li>
          <li>
            <strong>响应式设计</strong>: 自动适配不同屏幕尺寸
          </li>
          <li>
            <strong>网格布局</strong>: 使用网格布局展示多个字段
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>字段展示</strong>: 展示各种类型的字段内容
          </li>
          <li>
            <strong>模式切换</strong>: 测试只读和编辑模式的切换
          </li>
          <li>
            <strong>样式测试</strong>: 测试简约模式和普通模式的样式差异
          </li>
          <li>
            <strong>功能演示</strong>: 演示各种字段类型的功能
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>类型选择</strong>: 根据数据类型选择合适的 valueType
          </li>
          <li>
            <strong>枚举配置</strong>: 合理配置 valueEnum 映射关系
          </li>
          <li>
            <strong>模式设计</strong>: 合理设计只读和编辑模式
          </li>
          <li>
            <strong>用户体验</strong>: 提供清晰的模式切换和内容展示
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

﻿import { ProFormSelect } from '@ant-design/pro-components';
import { useState } from 'react';

export function App() {
  const [searchValue, setSearchValue] = useState('');
  const [selectOpen, setSelectOpen] = useState(false);

  function onBlur() {
    setSelectOpen(false);
  }

  function onFocus() {
    setSelectOpen(true);
  }

  /** 点击常用关键字的字母 */
  function onClick(e: any) {
    const text = e.target as HTMLSpanElement;
    // 更改搜索框文字
    setSearchValue(text.innerText);
    onFocus();
  }

  /** 下拉搜索 */
  function onSearch(value: string) {
    setSearchValue(value);
  }

  /** 下拉选中 */
  function onSelect() {
    onBlur();
  }

  return (
    <div>
      <ProFormSelect
        name="name"
        placeholder="请输入搜索关键字"
        allowClear
        width={330}
        secondary
        options={
          [
            {
              v: 'v1',
              l: 'l1',
            },
            {
              v: 'v2',
              l: 'l3',
            },
            {
              v: 'v4',
              l: 'l5',
            },
          ] as any
        }
        fieldProps={{
          fieldNames: {
            value: 'v',
            label: 'l',
            options: 'options',
          },
          suffixIcon: null,
          showSearch: true, // 使单选模式可搜索
          popupMatchSelectWidth: false,
          optionFilterProp: 'label', // 搜索时过滤对应的 option 属性
          optionLabelProp: 'label', // 回填到选择框的 Option 的属性值
          searchValue,
          open: selectOpen,
          onBlur: () => onBlur(),
          onFocus: () => onFocus(),
          onSearch: (val) => onSearch(val),
          onSelect: () => onSelect(),
        }}
      />
      <div className="keys">
        <b>常用关键字：</b>
        {['l', 'c', 'a'].map((item) => {
          return (
            <span
              key={item}
              onClick={onClick}
              style={{
                marginInlineStart: 8,
                cursor: 'pointer',
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

﻿import { ProFormSelect } from '@ant-design/pro-components';

export function App() {
  return (
    <div>
      <ProFormSelect
        name="name"
        placeholder="请输入搜索关键字"
        allowClear
        width={330}
        secondary
        mode="tags"
        options={
          [
            {
              v: 'v1',
              l: 'l1',
            },
            {
              v: 'v2',
              l: 'l3',
            },
            {
              v: 'v4',
              l: 'l5',
            },
          ] as any
        }
        fieldProps={{
          fieldNames: {
            value: 'v',
            label: 'l',
            options: 'options',
          },
          showSearch: true, // 使单选模式可搜索
          autoClearSearchValue: true,
        }}
      />

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProFormSelect 搜索值自动清除 Props 说明：</h4>
        <ul>
          <li>
            <strong>name</strong>: 字段名
          </li>
          <li>
            <strong>placeholder</strong>: 占位符文本
          </li>
          <li>
            <strong>allowClear</strong>: 是否允许清除
          </li>
          <li>
            <strong>width</strong>: 控件宽度
          </li>
          <li>
            <strong>secondary</strong>: 是否使用次要样式
          </li>
          <li>
            <strong>mode</strong>: 选择模式，'tags' 表示标签模式
          </li>
          <li>
            <strong>options</strong>: 选项数组
          </li>
          <li>
            <strong>fieldProps</strong>: 字段属性配置
          </li>
        </ul>
        <h4>fieldProps 配置：</h4>
        <ul>
          <li>
            <strong>fieldNames</strong>: 字段名映射配置
          </li>
          <li>
            <strong>showSearch</strong>: 是否显示搜索功能
          </li>
          <li>
            <strong>autoClearSearchValue</strong>: 是否自动清除搜索值
          </li>
        </ul>
        <h4>fieldNames 配置：</h4>
        <ul>
          <li>
            <strong>value</strong>: 值字段名
          </li>
          <li>
            <strong>label</strong>: 标签字段名
          </li>
          <li>
            <strong>options</strong>: 选项字段名
          </li>
          <li>
            <strong>字段映射</strong>: 将自定义字段名映射为标准字段名
          </li>
        </ul>
        <h4>选项配置：</h4>
        <ul>
          <li>
            <strong>v</strong>: 选项值
          </li>
          <li>
            <strong>l</strong>: 选项标签
          </li>
          <li>
            <strong>自定义字段</strong>: 使用自定义字段名结构
          </li>
        </ul>
        <h4>搜索功能特点：</h4>
        <ul>
          <li>
            <strong>搜索输入</strong>: 支持输入关键字进行搜索
          </li>
          <li>
            <strong>自动清除</strong>: 选择后自动清除搜索框的值
          </li>
          <li>
            <strong>标签模式</strong>: 支持多选标签模式
          </li>
          <li>
            <strong>字段映射</strong>: 支持自定义字段名映射
          </li>
        </ul>
        <h4>布局特点：</h4>
        <ul>
          <li>
            <strong>固定宽度</strong>: 使用固定宽度 330px
          </li>
          <li>
            <strong>次要样式</strong>: 使用次要样式显示
          </li>
          <li>
            <strong>响应式设计</strong>: 自动适配不同屏幕尺寸
          </li>
          <li>
            <strong>清晰布局</strong>: 提供清晰的输入和选择界面
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>多选搜索</strong>: 需要多选和搜索功能的场景
          </li>
          <li>
            <strong>自定义字段</strong>: 使用自定义字段名结构的场景
          </li>
          <li>
            <strong>自动清除</strong>: 需要选择后自动清除搜索值的场景
          </li>
          <li>
            <strong>标签选择</strong>: 需要标签形式多选的场景
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>字段映射</strong>: 合理配置字段名映射关系
          </li>
          <li>
            <strong>搜索配置</strong>: 根据需求配置搜索功能
          </li>
          <li>
            <strong>自动清除</strong>: 合理使用自动清除功能
          </li>
          <li>
            <strong>用户体验</strong>: 提供清晰的搜索和选择体验
          </li>
        </ul>
      </div>
    </div>
  );
}

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

import { ProForm, ProFormSelect } from '@ant-design/pro-components';

function App() {
  return (
    <div className="App">
      <ProForm>
        <ProFormSelect
          showSearch
          name="select"
          request={async () => {
            console.log('请求1');
            return [{ label: '选项1', value: '1' }];
          }}
        />
      </ProForm>
      <ProForm>
        <ProFormSelect
          showSearch
          name="select"
          request={async () => {
            console.log('请求2');
            return [{ label: '选项2', value: '2' }];
          }}
        />
      </ProForm>
    </div>
  );
}

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

﻿import { ProForm, ProFormTreeSelect } from '@ant-design/pro-components';
import { useState } from 'react';

const treeData = [
  {
    title: 'Node1',
    treeValue: '0-0',
    children: [
      {
        title: 'Child Node1',
        treeValue: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    treeValue: '0-1',
    children: [
      {
        title: 'Child Node3',
        treeValue: '0-1-0',
      },
      {
        title: 'Child Node4',
        treeValue: '0-1-1',
      },
      {
        title: 'Child Node5',
        treeValue: '0-1-2',
      },
    ],
  },
];

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export function App() {
  const [searchValue, setSearchValue] = useState('');
  const [selectOpen, setSelectOpen] = useState(false);

  function onBlur() {
    setSelectOpen(false);
  }

  function onFocus() {
    setSelectOpen(true);
  }

  /** 点击常用关键字的字母 */
  function onClick(e: any) {
    const text = e.target as HTMLSpanElement;
    // 更改搜索框文字
    setSearchValue(text.innerText);
    onFocus();
  }

  /** 下拉搜索 */
  function onSearch(value: string) {
    setSearchValue(value);
  }

  return (
    <div>
      <ProForm
        initialValues={{
          name: ['0-0'],
        }}
        onFinish={async (e) => console.log(e)}
      >
        <ProFormTreeSelect
          name="name"
          placeholder="请输入搜索关键字"
          allowClear
          width={330}
          label="TreeSelect异步加载"
          secondary
          request={async () => {
            await waitTime(1000);
            return treeData;
          }}
          fieldProps={{
            suffixIcon: null,
            filterTreeNode: true,
            showSearch: true, // 使单选模式可搜索
            popupMatchSelectWidth: false,
            searchValue,
            labelInValue: true,
            autoClearSearchValue: true,
            open: selectOpen,
            multiple: true,
            treeNodeFilterProp: 'title',
            fieldNames: {
              label: 'title',
              value: 'treeValue',
            },
            onBlur: () => onBlur(),
            onFocus: () => onFocus(),
            onSearch: (val) => onSearch(val),
          }}
        />
        <ProFormTreeSelect
          name="name2"
          initialValue={['0-0', '0-1']}
          label="TreeSelect treeData"
          placeholder="请输入搜索关键字"
          allowClear
          width={330}
          secondary
          fieldProps={{
            treeData,
            suffixIcon: null,
            filterTreeNode: true,
            showSearch: true, // 使单选模式可搜索
            popupMatchSelectWidth: false,
            labelInValue: true,
            autoClearSearchValue: true,
            multiple: true,
            treeNodeFilterProp: 'title',
            fieldNames: {
              label: 'title',
              value: 'treeValue',
            },
          }}
        />
        <div className="keys">
          <b>常用关键字：</b>
          {['l', 'c', 'a'].map((item) => {
            return (
              <span
                key={item}
                onClick={onClick}
                style={{
                  marginInlineStart: 8,
                  cursor: 'pointer',
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
      </ProForm>
    </div>
  );
}

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

import type { ProFieldFCMode } from '@ant-design/pro-components';
import { ProField } from '@ant-design/pro-components';
import { Descriptions, Radio, Space, Switch } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

const Demo = () => {
  const [state, setState] = useState<ProFieldFCMode>('edit');
  const [plain, setPlain] = useState<boolean>(false);
  return (
    <>
      <Space>
        <Radio.Group
          onChange={(e) => setState(e.target.value as ProFieldFCMode)}
          value={state}
        >
          <Radio value="read">只读</Radio>
          <Radio value="edit">编辑</Radio>
        </Radio.Group>
        简约模式
        <Switch checked={plain} onChange={(checked) => setPlain(checked)} />
      </Space>
      <br />
      <br />
      <Descriptions column={2}>
        <Descriptions.Item label="空字符串">
          <ProField text="" mode="read" />
        </Descriptions.Item>
        <Descriptions.Item label="头像">
          <ProField
            text="https://avatars2.githubusercontent.com/u/8186664?s=60&v=4"
            mode="read"
            valueType="avatar"
          />
        </Descriptions.Item>
        <Descriptions.Item label="文本">
          <ProField
            text="这是一段文本"
            fieldProps={{
              disabled: true,
            }}
            valueType="text"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="颜色">
          <ProField text="blue" valueType="color" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="颜色禁用">
          <ProField
            text="blue"
            valueType="color"
            fieldProps={{
              disabled: true,
            }}
            mode={state}
            plain={plain}
          />
          <ProField text="blue" valueType="color" disabled mode="read" />
        </Descriptions.Item>
        <Descriptions.Item label="图片">
          <ProField
            text="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            valueType={{
              type: 'image',
              width: 100,
            }}
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="金额">
          <ProField
            numberPopoverRender
            fieldProps={{
              precision: 2,
              style: {
                width: 200,
              },
            }}
            text="10000"
            valueType="money"
            mode={state}
            plain={plain}
          />

          <ProField
            valueType="money"
            label="自定义货币符号"
            name="amount4"
            fieldProps={{
              value: 2221212.22,
              customSymbol: '💰',
            }}
            mode="read"
          />
        </Descriptions.Item>
        <Descriptions.Item label="数字">
          <ProField
            text="19897979797979"
            valueType="digit"
            fieldProps={{
              min: 1,
              max: 10000,
              precision: 0,
              formatter: null,
            }}
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="数字范围">
          <ProField
            text={[123, 456]}
            valueType="digitRange"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="秒格式化">
          <ProField
            text={2000000}
            valueType="second"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <ProField text="100" valueType="percent" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="评分">
          <ProField text={3.5} valueType="rate" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="slider">
          <ProField text="40" valueType="slider" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="选择框">
          <ProField
            text="open"
            mode={state}
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选">
          <ProField
            text={['open', 'closed']}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选 labelInValue">
          <ProField
            text={[
              {
                value: 'open1',
                label: '打开',
              },
              {
                value: 'closed2',
                label: '关闭',
              },
            ]}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选">
          <ProField
            text="open"
            mode={state}
            valueType="radio"
            fieldProps={{
              layout: 'horizontal',
            }}
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选按钮">
          <ProField
            text="open"
            mode={state}
            valueType="radioButton"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="远程选择框">
          <ProField
            text="open"
            mode={state}
            params={{
              name: 'test',
            }}
            valueType="select"
            request={async () => {
              return [
                { label: '全部', value: 'all' },
                { label: '未解决', value: 'open' },
                { label: '已解决', value: 'closed' },
                { label: '解决中', value: 'processing' },
                {
                  label: '特殊选项',
                  value: 'optGroup',
                  optionType: 'optGroup',
                  options: [
                    { label: '不解决', value: 'no' },
                    { label: '已废弃', value: 'clear' },
                  ],
                },
              ];
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="远程级联框">
          <ProField
            mode={state}
            params={{
              name: 'test',
            }}
            valueType="cascader"
            request={async () => {
              return [
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
              ];
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="进度条">
          <ProField text="40" valueType="progress" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="进度条">
          <ProField
            text="40%"
            valueType="progress"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="进度条">
          <ProField
            text="love"
            valueType="progress"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="百分比空值">
          <ProField valueType="percent" mode="read" />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <Space>
            <ProField
              text={10}
              valueType={{
                type: 'percent',
                showSymbol: (text: number) => {
                  if (text < 0) {
                    return true;
                  }
                  return false;
                },
                showColor: true,
              }}
              mode="read"
            />
            <ProField
              text={0}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
            <ProField
              text={-10}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期时间">
          <ProField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            valueType="dateTime"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="相对于当前时间">
          <Space>
            <ProField
              text={dayjs('2019-11-16 12:50:26').valueOf()}
              valueType="fromNow"
              mode={state}
              plain={plain}
            />
            <ProField
              text={dayjs('2020-11-16 12:50:26').valueOf()}
              valueType="fromNow"
              mode={state}
              plain={plain}
            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期">
          <ProField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            valueType="date"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="日期区间">
          <ProField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="dateRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="日期时间区间">
          <ProField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="dateTimeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="时间">
          <ProField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            plain={plain}
            valueType="time"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="时间区间">
          <ProField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="timeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="密码">
          <ProField
            text="password"
            plain={plain}
            valueType="password"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="代码块">
          <ProField
            text={`
yarn run v1.22.0            
$ eslint --format=pretty ./packages
Done in 9.70s.
          `}
            valueType="code"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="JSON 代码块">
          <ProField
            text={`{
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
            valueType="jsonCode"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
      </Descriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProField 基础测试 Props 说明：</h4>
        <ul>
          <li>
            <strong>text</strong>: 显示的文本内容
          </li>
          <li>
            <strong>mode</strong>: 显示模式，'read' 表示只读，'edit' 表示编辑
          </li>
          <li>
            <strong>valueType</strong>: 值类型，决定如何渲染内容
          </li>
          <li>
            <strong>plain</strong>: 是否使用简约模式
          </li>
          <li>
            <strong>fieldProps</strong>: 字段属性配置
          </li>
          <li>
            <strong>disabled</strong>: 是否禁用
          </li>
        </ul>
        <h4>Radio.Group 配置：</h4>
        <ul>
          <li>
            <strong>onChange</strong>: 值变化回调函数
          </li>
          <li>
            <strong>value</strong>: 当前选中的值
          </li>
          <li>
            <strong>模式切换</strong>: 用于切换 ProField 的显示模式
          </li>
        </ul>
        <h4>Switch 配置：</h4>
        <ul>
          <li>
            <strong>checked</strong>: 是否选中
          </li>
          <li>
            <strong>onChange</strong>: 值变化回调函数
          </li>
          <li>
            <strong>简约模式</strong>: 控制是否使用简约模式
          </li>
        </ul>
        <h4>Descriptions 配置：</h4>
        <ul>
          <li>
            <strong>column</strong>: 列数配置
          </li>
          <li>
            <strong>内容展示</strong>: 用于展示各种 ProField 组件
          </li>
        </ul>
        <h4>支持的 valueType 类型：</h4>
        <ul>
          <li>
            <strong>text</strong>: 文本类型
          </li>
          <li>
            <strong>avatar</strong>: 头像类型
          </li>
          <li>
            <strong>color</strong>: 颜色类型
          </li>
          <li>
            <strong>image</strong>: 图片类型
          </li>
          <li>
            <strong>money</strong>: 金额类型
          </li>
          <li>
            <strong>digit</strong>: 数字类型
          </li>
          <li>
            <strong>date</strong>: 日期类型
          </li>
          <li>
            <strong>dateRange</strong>: 日期区间类型
          </li>
          <li>
            <strong>dateTimeRange</strong>: 日期时间区间类型
          </li>
          <li>
            <strong>time</strong>: 时间类型
          </li>
          <li>
            <strong>timeRange</strong>: 时间区间类型
          </li>
          <li>
            <strong>password</strong>: 密码类型
          </li>
          <li>
            <strong>code</strong>: 代码块类型
          </li>
          <li>
            <strong>jsonCode</strong>: JSON 代码块类型
          </li>
        </ul>
        <h4>fieldProps 配置：</h4>
        <ul>
          <li>
            <strong>disabled</strong>: 是否禁用字段
          </li>
          <li>
            <strong>precision</strong>: 数字精度
          </li>
          <li>
            <strong>style</strong>: 样式配置
          </li>
          <li>
            <strong>customSymbol</strong>: 自定义货币符号
          </li>
          <li>
            <strong>width</strong>: 图片宽度
          </li>
        </ul>
        <h4>显示模式特点：</h4>
        <ul>
          <li>
            <strong>只读模式</strong>: 仅显示内容，不可编辑
          </li>
          <li>
            <strong>编辑模式</strong>: 可以编辑内容
          </li>
          <li>
            <strong>简约模式</strong>: 使用简约的显示样式
          </li>
          <li>
            <strong>动态切换</strong>: 支持动态切换显示模式
          </li>
        </ul>
        <h4>布局特点：</h4>
        <ul>
          <li>
            <strong>控制区域</strong>: 顶部显示模式切换控制
          </li>
          <li>
            <strong>展示区域</strong>: 使用 Descriptions 展示各种字段类型
          </li>
          <li>
            <strong>响应式设计</strong>: 自动适配不同屏幕尺寸
          </li>
          <li>
            <strong>网格布局</strong>: 使用网格布局展示多个字段
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>字段测试</strong>: 测试各种字段类型的显示效果
          </li>
          <li>
            <strong>模式切换</strong>: 测试只读和编辑模式的切换
          </li>
          <li>
            <strong>样式测试</strong>: 测试简约模式和普通模式的样式差异
          </li>
          <li>
            <strong>功能验证</strong>: 验证各种字段类型的功能
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>类型选择</strong>: 根据数据类型选择合适的 valueType
          </li>
          <li>
            <strong>模式设计</strong>: 合理设计只读和编辑模式
          </li>
          <li>
            <strong>样式配置</strong>: 根据需求配置合适的样式
          </li>
          <li>
            <strong>用户体验</strong>: 提供清晰的模式切换和内容展示
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

import type { ProFieldFCMode } from '@ant-design/pro-components';
import { ProField } from '@ant-design/pro-components';
import { Descriptions, Radio, Space, Switch } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

const Demo = () => {
  const [state, setState] = useState<ProFieldFCMode>('read');
  const [plain, setPlain] = useState<boolean>(false);
  return (
    <>
      <Space>
        <Radio.Group
          onChange={(e) => setState(e.target.value as ProFieldFCMode)}
          value={state}
        >
          <Radio value="read">只读</Radio>
          <Radio value="edit">编辑</Radio>
        </Radio.Group>
        简约模式
        <Switch checked={plain} onChange={(checked) => setPlain(checked)} />
      </Space>
      <br />
      <br />
      <Descriptions column={2}>
        <Descriptions.Item label="空字符串">
          <ProField text="" mode="read" />
        </Descriptions.Item>
        <Descriptions.Item label="头像">
          <ProField
            text="https://avatars2.githubusercontent.com/u/8186664?s=60&v=4"
            mode="read"
            valueType="avatar"
          />
        </Descriptions.Item>
        <Descriptions.Item label="文本">
          <ProField
            text="这是一段文本"
            valueType="text"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="图片">
          <ProField
            text="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            valueType="image"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="金额">
          <ProField text="100" valueType="money" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="颜色">
          <ProField text="blue" valueType="color" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="数字">
          <ProField
            text="19897979797979"
            valueType="digit"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="数字范围">
          <ProField
            text={[123, 456]}
            valueType="digitRange"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="秒格式化">
          <ProField
            text={2000000}
            valueType="second"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <ProField text="100" valueType="percent" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="评分">
          <ProField text={3.5} valueType="rate" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="选择框">
          <ProField
            text="open"
            mode={state}
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选">
          <ProField
            text={['open', 'closed']}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选 labelInValue">
          <ProField
            text={[
              {
                value: 'open1',
                label: '打开',
              },
              {
                value: 'closed2',
                label: '关闭',
              },
            ]}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选">
          <ProField
            text="open"
            mode={state}
            valueType="radio"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选按钮">
          <ProField
            text="open"
            mode={state}
            valueType="radioButton"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
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
          />
        </Descriptions.Item>
        <Descriptions.Item label="远程选择框">
          <ProField
            text="open"
            mode={state}
            valueType="select"
            request={async () => [
              { label: '全部', value: 'all' },
              { label: '未解决', value: 'open' },
              { label: '已解决', value: 'closed' },
              { label: '解决中', value: 'processing' },
              {
                label: '特殊选项',
                value: 'optGroup',
                optionType: 'optGroup',
                options: [
                  { label: '不解决', value: 'no' },
                  { label: '已废弃', value: 'clear' },
                ],
              },
            ]}
          />
        </Descriptions.Item>
        <Descriptions.Item label="级联选择框">
          <ProField
            text={['zhejiang', 'hangzhou', 'xihu']}
            mode={state}
            valueType="cascader"
            fieldProps={{
              fieldNames: {
                label: 'name',
              },
            }}
            request={async () => [
              {
                value: 'zhejiang',
                name: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    name: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        name: 'West Lake',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'jiangsu',
                name: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    name: 'Nanjing',
                    children: [
                      {
                        value: 'zhonghuamen',
                        name: 'Zhong Hua Men',
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Descriptions.Item>
        <Descriptions.Item label="进度条">
          <ProField text="40" valueType="progress" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="slider">
          <ProField text="40" valueType="slider" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <Space>
            <ProField
              text={10}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
            <ProField
              text={0}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
            <ProField
              text={-10}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期时间">
          <ProField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            valueType="dateTime"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="相对于当前时间">
          <Space>
            <ProField
              text={dayjs('2019-11-16 12:50:26').valueOf()}
              valueType="fromNow"
              mode={state}
              plain={plain}
            />
            <ProField
              text={dayjs('2020-11-16 12:50:26').valueOf()}
              valueType="fromNow"
              mode={state}
              plain={plain}
            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期">
          <ProField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            valueType="date"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="日期区间">
          <ProField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="dateRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="日期时间区间">
          <ProField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="dateTimeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="时间">
          <ProField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            plain={plain}
            valueType="time"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="时间区间">
          <ProField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="timeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="密码">
          <ProField
            text="password"
            plain={plain}
            valueType="password"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="代码块">
          <ProField
            text={`
yarn run v1.22.0            
$ eslint --format=pretty ./packages
Done in 9.70s.
          `}
            valueType="code"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="JSON 代码块">
          <ProField
            text={`{
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
            valueType="jsonCode"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
      </Descriptions>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProField 基础用法 Props 说明：</h4>
        <ul>
          <li>
            <strong>text</strong>: 显示的文本内容
          </li>
          <li>
            <strong>mode</strong>: 显示模式，'read' 表示只读，'edit' 表示编辑
          </li>
          <li>
            <strong>valueType</strong>: 值类型，决定如何渲染内容
          </li>
          <li>
            <strong>plain</strong>: 是否使用简约模式
          </li>
          <li>
            <strong>valueEnum</strong>: 枚举值配置，用于选择框等组件
          </li>
        </ul>
        <h4>Radio.Group 配置：</h4>
        <ul>
          <li>
            <strong>onChange</strong>: 值变化回调函数
          </li>
          <li>
            <strong>value</strong>: 当前选中的值
          </li>
          <li>
            <strong>模式切换</strong>: 用于切换 ProField 的显示模式
          </li>
        </ul>
        <h4>Switch 配置：</h4>
        <ul>
          <li>
            <strong>checked</strong>: 是否选中
          </li>
          <li>
            <strong>onChange</strong>: 值变化回调函数
          </li>
          <li>
            <strong>简约模式</strong>: 控制是否使用简约模式
          </li>
        </ul>
        <h4>Descriptions 配置：</h4>
        <ul>
          <li>
            <strong>column</strong>: 列数配置
          </li>
          <li>
            <strong>内容展示</strong>: 用于展示各种 ProField 组件
          </li>
        </ul>
        <h4>支持的 valueType 类型：</h4>
        <ul>
          <li>
            <strong>text</strong>: 文本类型
          </li>
          <li>
            <strong>avatar</strong>: 头像类型
          </li>
          <li>
            <strong>image</strong>: 图片类型
          </li>
          <li>
            <strong>money</strong>: 金额类型
          </li>
          <li>
            <strong>color</strong>: 颜色类型
          </li>
          <li>
            <strong>digit</strong>: 数字类型
          </li>
          <li>
            <strong>digitRange</strong>: 数字范围类型
          </li>
          <li>
            <strong>second</strong>: 秒格式化类型
          </li>
          <li>
            <strong>percent</strong>: 百分比类型
          </li>
          <li>
            <strong>rate</strong>: 评分类型
          </li>
          <li>
            <strong>select</strong>: 选择框类型
          </li>
          <li>
            <strong>date</strong>: 日期类型
          </li>
          <li>
            <strong>dateRange</strong>: 日期区间类型
          </li>
          <li>
            <strong>dateTimeRange</strong>: 日期时间区间类型
          </li>
          <li>
            <strong>time</strong>: 时间类型
          </li>
          <li>
            <strong>timeRange</strong>: 时间区间类型
          </li>
          <li>
            <strong>password</strong>: 密码类型
          </li>
          <li>
            <strong>code</strong>: 代码块类型
          </li>
          <li>
            <strong>jsonCode</strong>: JSON 代码块类型
          </li>
        </ul>
        <h4>valueEnum 配置：</h4>
        <ul>
          <li>
            <strong>text</strong>: 显示文本
          </li>
          <li>
            <strong>status</strong>: 状态类型
          </li>
          <li>
            <strong>disabled</strong>: 是否禁用
          </li>
          <li>
            <strong>枚举映射</strong>: 将值映射为显示文本和状态
          </li>
        </ul>
        <h4>显示模式特点：</h4>
        <ul>
          <li>
            <strong>只读模式</strong>: 仅显示内容，不可编辑
          </li>
          <li>
            <strong>编辑模式</strong>: 可以编辑内容
          </li>
          <li>
            <strong>简约模式</strong>: 使用简约的显示样式
          </li>
          <li>
            <strong>动态切换</strong>: 支持动态切换显示模式
          </li>
        </ul>
        <h4>布局特点：</h4>
        <ul>
          <li>
            <strong>控制区域</strong>: 顶部显示模式切换控制
          </li>
          <li>
            <strong>展示区域</strong>: 使用 Descriptions 展示各种字段类型
          </li>
          <li>
            <strong>响应式设计</strong>: 自动适配不同屏幕尺寸
          </li>
          <li>
            <strong>网格布局</strong>: 使用网格布局展示多个字段
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>字段展示</strong>: 展示各种类型的字段内容
          </li>
          <li>
            <strong>模式切换</strong>: 测试只读和编辑模式的切换
          </li>
          <li>
            <strong>样式测试</strong>: 测试简约模式和普通模式的样式差异
          </li>
          <li>
            <strong>功能演示</strong>: 演示各种字段类型的功能
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>类型选择</strong>: 根据数据类型选择合适的 valueType
          </li>
          <li>
            <strong>枚举配置</strong>: 合理配置 valueEnum 映射关系
          </li>
          <li>
            <strong>模式设计</strong>: 合理设计只读和编辑模式
          </li>
          <li>
            <strong>用户体验</strong>: 提供清晰的模式切换和内容展示
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

﻿import { ProFormSelect } from '@ant-design/pro-components';
import { useState } from 'react';

export function App() {
  const [searchValue, setSearchValue] = useState('');
  const [selectOpen, setSelectOpen] = useState(false);

  function onBlur() {
    setSelectOpen(false);
  }

  function onFocus() {
    setSelectOpen(true);
  }

  /** 点击常用关键字的字母 */
  function onClick(e: any) {
    const text = e.target as HTMLSpanElement;
    // 更改搜索框文字
    setSearchValue(text.innerText);
    onFocus();
  }

  /** 下拉搜索 */
  function onSearch(value: string) {
    setSearchValue(value);
  }

  /** 下拉选中 */
  function onSelect() {
    onBlur();
  }

  return (
    <div>
      <ProFormSelect
        name="name"
        placeholder="请输入搜索关键字"
        allowClear
        width={330}
        secondary
        options={
          [
            {
              v: 'v1',
              l: 'l1',
            },
            {
              v: 'v2',
              l: 'l3',
            },
            {
              v: 'v4',
              l: 'l5',
            },
          ] as any
        }
        fieldProps={{
          fieldNames: {
            value: 'v',
            label: 'l',
            options: 'options',
          },
          suffixIcon: null,
          showSearch: true, // 使单选模式可搜索
          popupMatchSelectWidth: false,
          optionFilterProp: 'label', // 搜索时过滤对应的 option 属性
          optionLabelProp: 'label', // 回填到选择框的 Option 的属性值
          searchValue,
          open: selectOpen,
          onBlur: () => onBlur(),
          onFocus: () => onFocus(),
          onSearch: (val) => onSearch(val),
          onSelect: () => onSelect(),
        }}
      />
      <div className="keys">
        <b>常用关键字：</b>
        {['l', 'c', 'a'].map((item) => {
          return (
            <span
              key={item}
              onClick={onClick}
              style={{
                marginInlineStart: 8,
                cursor: 'pointer',
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

﻿import { ProFormSelect } from '@ant-design/pro-components';

export function App() {
  return (
    <div>
      <ProFormSelect
        name="name"
        placeholder="请输入搜索关键字"
        allowClear
        width={330}
        secondary
        mode="tags"
        options={
          [
            {
              v: 'v1',
              l: 'l1',
            },
            {
              v: 'v2',
              l: 'l3',
            },
            {
              v: 'v4',
              l: 'l5',
            },
          ] as any
        }
        fieldProps={{
          fieldNames: {
            value: 'v',
            label: 'l',
            options: 'options',
          },
          showSearch: true, // 使单选模式可搜索
          autoClearSearchValue: true,
        }}
      />

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProFormSelect 搜索值自动清除 Props 说明：</h4>
        <ul>
          <li>
            <strong>name</strong>: 字段名
          </li>
          <li>
            <strong>placeholder</strong>: 占位符文本
          </li>
          <li>
            <strong>allowClear</strong>: 是否允许清除
          </li>
          <li>
            <strong>width</strong>: 控件宽度
          </li>
          <li>
            <strong>secondary</strong>: 是否使用次要样式
          </li>
          <li>
            <strong>mode</strong>: 选择模式，'tags' 表示标签模式
          </li>
          <li>
            <strong>options</strong>: 选项数组
          </li>
          <li>
            <strong>fieldProps</strong>: 字段属性配置
          </li>
        </ul>
        <h4>fieldProps 配置：</h4>
        <ul>
          <li>
            <strong>fieldNames</strong>: 字段名映射配置
          </li>
          <li>
            <strong>showSearch</strong>: 是否显示搜索功能
          </li>
          <li>
            <strong>autoClearSearchValue</strong>: 是否自动清除搜索值
          </li>
        </ul>
        <h4>fieldNames 配置：</h4>
        <ul>
          <li>
            <strong>value</strong>: 值字段名
          </li>
          <li>
            <strong>label</strong>: 标签字段名
          </li>
          <li>
            <strong>options</strong>: 选项字段名
          </li>
          <li>
            <strong>字段映射</strong>: 将自定义字段名映射为标准字段名
          </li>
        </ul>
        <h4>选项配置：</h4>
        <ul>
          <li>
            <strong>v</strong>: 选项值
          </li>
          <li>
            <strong>l</strong>: 选项标签
          </li>
          <li>
            <strong>自定义字段</strong>: 使用自定义字段名结构
          </li>
        </ul>
        <h4>搜索功能特点：</h4>
        <ul>
          <li>
            <strong>搜索输入</strong>: 支持输入关键字进行搜索
          </li>
          <li>
            <strong>自动清除</strong>: 选择后自动清除搜索框的值
          </li>
          <li>
            <strong>标签模式</strong>: 支持多选标签模式
          </li>
          <li>
            <strong>字段映射</strong>: 支持自定义字段名映射
          </li>
        </ul>
        <h4>布局特点：</h4>
        <ul>
          <li>
            <strong>固定宽度</strong>: 使用固定宽度 330px
          </li>
          <li>
            <strong>次要样式</strong>: 使用次要样式显示
          </li>
          <li>
            <strong>响应式设计</strong>: 自动适配不同屏幕尺寸
          </li>
          <li>
            <strong>清晰布局</strong>: 提供清晰的输入和选择界面
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>多选搜索</strong>: 需要多选和搜索功能的场景
          </li>
          <li>
            <strong>自定义字段</strong>: 使用自定义字段名结构的场景
          </li>
          <li>
            <strong>自动清除</strong>: 需要选择后自动清除搜索值的场景
          </li>
          <li>
            <strong>标签选择</strong>: 需要标签形式多选的场景
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>字段映射</strong>: 合理配置字段名映射关系
          </li>
          <li>
            <strong>搜索配置</strong>: 根据需求配置搜索功能
          </li>
          <li>
            <strong>自动清除</strong>: 合理使用自动清除功能
          </li>
          <li>
            <strong>用户体验</strong>: 提供清晰的搜索和选择体验
          </li>
        </ul>
      </div>
    </div>
  );
}

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

import { ProForm, ProFormSelect } from '@ant-design/pro-components';

function App() {
  return (
    <div className="App">
      <ProForm>
        <ProFormSelect
          showSearch
          name="select"
          request={async () => {
            console.log('请求1');
            return [{ label: '选项1', value: '1' }];
          }}
        />
      </ProForm>
      <ProForm>
        <ProFormSelect
          showSearch
          name="select"
          request={async () => {
            console.log('请求2');
            return [{ label: '选项2', value: '2' }];
          }}
        />
      </ProForm>
    </div>
  );
}

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

﻿import { ProForm, ProFormTreeSelect } from '@ant-design/pro-components';
import { useState } from 'react';

const treeData = [
  {
    title: 'Node1',
    treeValue: '0-0',
    children: [
      {
        title: 'Child Node1',
        treeValue: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    treeValue: '0-1',
    children: [
      {
        title: 'Child Node3',
        treeValue: '0-1-0',
      },
      {
        title: 'Child Node4',
        treeValue: '0-1-1',
      },
      {
        title: 'Child Node5',
        treeValue: '0-1-2',
      },
    ],
  },
];

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export function App() {
  const [searchValue, setSearchValue] = useState('');
  const [selectOpen, setSelectOpen] = useState(false);

  function onBlur() {
    setSelectOpen(false);
  }

  function onFocus() {
    setSelectOpen(true);
  }

  /** 点击常用关键字的字母 */
  function onClick(e: any) {
    const text = e.target as HTMLSpanElement;
    // 更改搜索框文字
    setSearchValue(text.innerText);
    onFocus();
  }

  /** 下拉搜索 */
  function onSearch(value: string) {
    setSearchValue(value);
  }

  return (
    <div>
      <ProForm
        initialValues={{
          name: ['0-0'],
        }}
        onFinish={async (e) => console.log(e)}
      >
        <ProFormTreeSelect
          name="name"
          placeholder="请输入搜索关键字"
          allowClear
          width={330}
          label="TreeSelect异步加载"
          secondary
          request={async () => {
            await waitTime(1000);
            return treeData;
          }}
          fieldProps={{
            suffixIcon: null,
            filterTreeNode: true,
            showSearch: true, // 使单选模式可搜索
            popupMatchSelectWidth: false,
            searchValue,
            labelInValue: true,
            autoClearSearchValue: true,
            open: selectOpen,
            multiple: true,
            treeNodeFilterProp: 'title',
            fieldNames: {
              label: 'title',
              value: 'treeValue',
            },
            onBlur: () => onBlur(),
            onFocus: () => onFocus(),
            onSearch: (val) => onSearch(val),
          }}
        />
        <ProFormTreeSelect
          name="name2"
          initialValue={['0-0', '0-1']}
          label="TreeSelect treeData"
          placeholder="请输入搜索关键字"
          allowClear
          width={330}
          secondary
          fieldProps={{
            treeData,
            suffixIcon: null,
            filterTreeNode: true,
            showSearch: true, // 使单选模式可搜索
            popupMatchSelectWidth: false,
            labelInValue: true,
            autoClearSearchValue: true,
            multiple: true,
            treeNodeFilterProp: 'title',
            fieldNames: {
              label: 'title',
              value: 'treeValue',
            },
          }}
        />
        <div className="keys">
          <b>常用关键字：</b>
          {['l', 'c', 'a'].map((item) => {
            return (
              <span
                key={item}
                onClick={onClick}
                style={{
                  marginInlineStart: 8,
                  cursor: 'pointer',
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
      </ProForm>
    </div>
  );
}

export default () => (
  <div style={{ padding: 24 }}>
    <App />
  </div>
);

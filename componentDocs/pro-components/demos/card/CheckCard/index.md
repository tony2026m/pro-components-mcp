

import { CheckCard } from '@ant-design/pro-components';
import { Divider } from 'antd';

export default () => (
  <>
    <div style={{ padding: 24 }}>
      <CheckCard.Group
        size="small"
        options={['🍎 Apple', '🍐 Pear', '🍊 Orange']}
      />
      <br />
      <CheckCard.Group
        size="small"
        loading
        options={['🍎 Apple', '🍐 Pear', '🍊 Orange']}
      />
      <br />
      <Divider />
      <CheckCard.Group
        size="small"
        options={[
          {
            title: 'Fruit',
            value: 'Fruit',
            children: [
              {
                title: '🍎 Apple',
                value: 'apple',
              },
              {
                title: '🍐 Pear',
                value: 'pear',
              },
              {
                title: '🍊 Orange',
                value: 'orange',
              },
            ],
          },
        ]}
      />
      <Divider />
      <br />
      <CheckCard.Group defaultValue="A">
        <CheckCard title="🍊 Orange" value="🍊 Orange" />
        <CheckCard title="🍐 Pear" value="🍐 Pear" />
        <CheckCard title="🍎 Apple" value="🍎 Apple" />
      </CheckCard.Group>
      <br />
      <Divider />
      <CheckCard.Group defaultValue="A" loading>
        <CheckCard title="🍊 Orange" value="🍊 Orange" />
        <CheckCard title="🍐 Pear" value="🍐 Pear" />
        <CheckCard title="🍎 Apple" value="🍎 Apple" />
      </CheckCard.Group>
    </div>

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard.Group Options Props 说明：</h4>
      <ul>
        <li>
          <strong>options</strong>: 选项配置，可以是字符串数组或对象数组
        </li>
        <li>
          <strong>size</strong>: 卡片尺寸，可选值：'large' | 'default' | 'small'
        </li>
        <li>
          <strong>loading</strong>: 是否显示加载状态，布尔值
        </li>
        <li>
          <strong>defaultValue</strong>: 默认选中的值
        </li>
      </ul>
      <h4>Options 配置方式：</h4>
      <ul>
        <li>
          <strong>字符串数组</strong>: ['🍎 Apple', '🍐 Pear', '🍊
          Orange']，自动生成 CheckCard
        </li>
        <li>
          <strong>对象数组</strong>: 包含 title、value、children 等属性的对象
        </li>
        <li>
          <strong>子组件方式</strong>: 直接使用 CheckCard 子组件
        </li>
      </ul>
      <h4>Option 对象属性：</h4>
      <ul>
        <li>
          <strong>title</strong>: 选项标题，显示文本
        </li>
        <li>
          <strong>value</strong>: 选项值，用于标识和表单绑定
        </li>
        <li>
          <strong>children</strong>: 子选项数组，支持嵌套结构
        </li>
        <li>
          <strong>description</strong>: 选项描述信息
        </li>
        <li>
          <strong>avatar</strong>: 选项头像
        </li>
      </ul>
      <h4>Loading 状态：</h4>
      <ul>
        <li>
          <strong>loading</strong>: 设置为 true 时显示加载动画
        </li>
        <li>
          <strong>适用场景</strong>: 数据加载中、异步操作等
        </li>
        <li>
          <strong>视觉效果</strong>: 卡片会显示骨架屏或加载动画
        </li>
      </ul>
      <h4>使用建议：</h4>
      <ul>
        <li>
          <strong>简单选项</strong>: 使用字符串数组或简单对象数组
        </li>
        <li>
          <strong>复杂选项</strong>: 使用 CheckCard 子组件方式
        </li>
        <li>
          <strong>嵌套结构</strong>: 使用 children 属性创建分组
        </li>
      </ul>
    </div>
  </>
);

import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <CheckCard
      title="Card title"
      description="This is the description"
      style={{ width: 200, height: 200 }}
    />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard 自定义样式说明：</h4>
      <ul>
        <li>
          <strong>style</strong>: 自定义样式对象，可以覆盖默认样式
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息
        </li>
      </ul>
      <h4>Style 属性说明：</h4>
      <ul>
        <li>
          <strong>width</strong>: 卡片宽度，可以是数字（像素）或字符串
        </li>
        <li>
          <strong>height</strong>: 卡片高度，可以是数字（像素）或字符串
        </li>
        <li>
          <strong>backgroundColor</strong>: 背景颜色
        </li>
        <li>
          <strong>border</strong>: 边框样式
        </li>
        <li>
          <strong>borderRadius</strong>: 圆角半径
        </li>
        <li>
          <strong>padding</strong>: 内边距
        </li>
        <li>
          <strong>margin</strong>: 外边距
        </li>
      </ul>
      <h4>自定义样式特点：</h4>
      <ul>
        <li>
          <strong>优先级</strong>: style 属性会覆盖组件的默认样式
        </li>
        <li>
          <strong>响应式</strong>: 可以使用媒体查询实现响应式样式
        </li>
        <li>
          <strong>主题适配</strong>: 可以结合 CSS 变量实现主题切换
        </li>
        <li>
          <strong>灵活控制</strong>: 可以精确控制卡片的尺寸和外观
        </li>
      </ul>
      <h4>使用建议：</h4>
      <ul>
        <li>
          <strong>固定尺寸</strong>: 使用 width 和 height 设置固定尺寸
        </li>
        <li>
          <strong>百分比布局</strong>: 使用百分比值实现响应式布局
        </li>
        <li>
          <strong>主题定制</strong>: 结合 CSS 变量实现主题定制
        </li>
        <li>
          <strong>动画效果</strong>: 可以添加 transition 等动画效果
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <h3>只有图片时</h3>
    <CheckCard avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg" />

    <h3>只有图片和描述时</h3>
    <CheckCard
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
    />
    <h3>只有标题和描述时</h3>
    <CheckCard
      title="示例"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
    />
    <h3>只有标题和图片</h3>
    <CheckCard
      title="示例"
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
    />
    <h3>只有标题</h3>
    <CheckCard title="示例" />
    <h3>只有描述时</h3>
    <CheckCard description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。" />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard 属性组合说明：</h4>
      <ul>
        <li>
          <strong>avatar</strong>: 卡片头像，可以是图片 URL 或 React 节点
        </li>
        <li>
          <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息，可以是字符串或 React 节点
        </li>
      </ul>
      <h4>属性组合效果：</h4>
      <ul>
        <li>
          <strong>只有 avatar</strong>: 显示头像，适合图标展示
        </li>
        <li>
          <strong>avatar + description</strong>: 头像和描述组合，适合产品介绍
        </li>
        <li>
          <strong>title + description</strong>: 标题和描述组合，适合内容展示
        </li>
        <li>
          <strong>title + avatar</strong>: 标题和头像组合，适合品牌展示
        </li>
        <li>
          <strong>只有 title</strong>: 仅显示标题，适合简单标识
        </li>
        <li>
          <strong>只有 description</strong>: 仅显示描述，适合说明文字
        </li>
      </ul>
      <h4>布局特点：</h4>
      <ul>
        <li>
          <strong>自适应布局</strong>: 根据提供的属性自动调整布局
        </li>
        <li>
          <strong>内容居中</strong>: 单个属性时内容会自动居中显示
        </li>
        <li>
          <strong>响应式</strong>: 在不同屏幕尺寸下保持良好的显示效果
        </li>
        <li>
          <strong>灵活组合</strong>: 支持任意属性的组合使用
        </li>
      </ul>
      <h4>使用建议：</h4>
      <ul>
        <li>
          <strong>图标卡片</strong>: 使用只有 avatar 的组合
        </li>
        <li>
          <strong>产品卡片</strong>: 使用 avatar + title + description 组合
        </li>
        <li>
          <strong>内容卡片</strong>: 使用 title + description 组合
        </li>
        <li>
          <strong>品牌卡片</strong>: 使用 title + avatar 组合
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';
import { Radio } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [size, setSize] = useState('default' as const);
  return (
    <>
      <div style={{ marginBlockEnd: 16 }}>
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      </div>
      <CheckCard
        title="Card title"
        description="This is the description"
        size={size}
      />

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>CheckCard Size Props 说明：</h4>
        <ul>
          <li>
            <strong>size</strong>: 卡片尺寸，可选值：'large' | 'default' |
            'small'
          </li>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>description</strong>: 卡片描述信息
          </li>
        </ul>
        <h4>Size 尺寸说明：</h4>
        <ul>
          <li>
            <strong>large</strong>: 大尺寸，适合重要内容的展示
          </li>
          <li>
            <strong>default</strong>: 默认尺寸，最常用的尺寸
          </li>
          <li>
            <strong>small</strong>: 小尺寸，适合紧凑布局
          </li>
        </ul>
        <h4>动态切换：</h4>
        <ul>
          <li>
            <strong>Radio.Group</strong>: 使用单选按钮组来动态切换 size 属性
          </li>
          <li>
            <strong>useState</strong>: 使用 React Hook 管理 size 状态
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

import { AppstoreOutlined } from '@ant-design/icons';
import { CheckCard } from '@ant-design/pro-components';
import { Tag } from 'antd';

const Demo = () => (
  <>
    <CheckCard
      title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AppstoreOutlined />
          <span style={{ marginInlineEnd: 8, marginInlineStart: 8 }}>示例</span>
          <Tag color="blue">blue</Tag>
        </div>
      }
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
    />
    <CheckCard
      title="标题内容过长会自动进行省略，标题内容过长会自动进行省略"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
    />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Title Props 说明：</h4>
      <ul>
        <li>
          <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息
        </li>
      </ul>
      <h4>Title 使用方式：</h4>
      <ul>
        <li>
          <strong>字符串</strong>: 直接传入字符串，过长会自动省略
        </li>
        <li>
          <strong>组件</strong>: 传入 React 节点，可以包含图标、标签等复杂内容
        </li>
      </ul>
      <h4>复杂 Title 示例：</h4>
      <ul>
        <li>
          <strong>图标</strong>: 使用 AppstoreOutlined 等 Ant Design 图标
        </li>
        <li>
          <strong>文本</strong>: 使用 span 标签包装文本内容
        </li>
        <li>
          <strong>标签</strong>: 使用 Tag 组件添加状态标识
        </li>
        <li>
          <strong>布局</strong>: 使用 flexbox 布局对齐多个元素
        </li>
      </ul>
      <h4>样式说明：</h4>
      <ul>
        <li>
          <strong>自动省略</strong>: 字符串形式的 title 过长时会自动省略
        </li>
        <li>
          <strong>自定义样式</strong>: 组件形式可以完全控制样式和布局
        </li>
        <li>
          <strong>响应式</strong>: 支持响应式布局，在不同屏幕尺寸下自适应
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';
import { Col, Row } from 'antd';

const Demo = () => (
  <>
    <CheckCard.Group style={{ width: '100%' }} size="small">
      <Row>
        <Col span={8}>
          <CheckCard
            title="Card A"
            description="This is the description"
            value="A"
          />
        </Col>
        <Col span={8}>
          <CheckCard
            title="Card B"
            description="This is the description"
            value="B"
          />
        </Col>
        <Col span={8}>
          <CheckCard
            title="Card C"
            description="This is the description"
            value="C"
          />
        </Col>
      </Row>
    </CheckCard.Group>

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard 与栅格系统集成说明：</h4>
      <ul>
        <li>
          <strong>Row</strong>: 行容器，用于包裹 Col 组件
        </li>
        <li>
          <strong>Col</strong>: 列容器，用于控制 CheckCard 的布局
        </li>
        <li>
          <strong>span</strong>: 列宽度，24 栅格系统中的宽度值
        </li>
      </ul>
      <h4>CheckCard.Group Props：</h4>
      <ul>
        <li>
          <strong>style</strong>: 样式对象，设置容器宽度为 100%
        </li>
        <li>
          <strong>size</strong>: 卡片尺寸，'small' 表示小尺寸
        </li>
      </ul>
      <h4>Row 组件 Props：</h4>
      <ul>
        <li>
          <strong>gutter</strong>: 栅格间隔，可以是数字或数组
        </li>
        <li>
          <strong>justify</strong>: 水平排列方式，如 'start' | 'end' | 'center'
        </li>
        <li>
          <strong>align</strong>: 垂直排列方式，如 'top' | 'middle' | 'bottom'
        </li>
      </ul>
      <h4>Col 组件 Props：</h4>
      <ul>
        <li>
          <strong>span</strong>: 列宽度，24 栅格系统中的宽度值（1-24）
        </li>
        <li>
          <strong>offset</strong>: 列偏移量，用于调整列位置
        </li>
        <li>
          <strong>xs/sm/md/lg/xl</strong>: 响应式断点，不同屏幕尺寸下的宽度
        </li>
      </ul>
      <h4>栅格布局特点：</h4>
      <ul>
        <li>
          <strong>24 栅格</strong>: 一行分为 24 列，span={8} 表示占 8/24 = 1/3
        </li>
        <li>
          <strong>响应式</strong>: 支持不同屏幕尺寸的响应式布局
        </li>
        <li>
          <strong>自动换行</strong>: 超出 24 栅格的列会自动换行
        </li>
        <li>
          <strong>间距控制</strong>: 通过 gutter 属性控制列间距
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';
import { Avatar } from 'antd';

const dataSource = [
  {
    title: '图像分类',
    avatar: (
      <Avatar
        size={32}
        shape="square"
        src="https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg"
      />
    ),
    description: '这是一段关于该算法的说明',
    value: 'A',
  },
  {
    title: '物体检测',
    avatar: (
      <Avatar
        size={32}
        shape="square"
        src="https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg"
      />
    ),
    description: '这是一段关于该算法的说明',
    value: 'B',
  },
  {
    title: 'OCR自定义',
    avatar: (
      <Avatar
        size={32}
        shape="square"
        src="https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg"
      />
    ),
    description: '这是一段关于该算法的说明',
    value: 'C',
  },
  {
    title: 'OCR',
    avatar: (
      <Avatar
        size={32}
        shape="square"
        src="https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg"
      />
    ),
    description: '这是一段关于该算法的说明',
    value: 'D',
  },
  {
    title: '视频分类',
    avatar: (
      <Avatar
        size={32}
        shape="square"
        src="https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg"
      />
    ),
    description: '这是一段关于该算法的说明',
    value: 'E',
  },
  {
    title: '关键点检测',
    avatar: (
      <Avatar
        size={32}
        shape="square"
        src="https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg"
      />
    ),
    description: '这是一段关于该算法的说明',
    value: 'F',
  },
];

export default () => (
  <>
    <div style={{ padding: 24, backgroundColor: '#f7f8fa' }}>
      <CheckCard.Group options={dataSource} />
    </div>

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard.Group Options 列表渲染说明：</h4>
      <ul>
        <li>
          <strong>options</strong>: 数据源数组，每个元素会被渲染为一个 CheckCard
        </li>
        <li>
          <strong>dataSource</strong>: 包含多个选项数据的数组
        </li>
      </ul>
      <h4>Option 对象属性：</h4>
      <ul>
        <li>
          <strong>title</strong>: 卡片标题，显示文本
        </li>
        <li>
          <strong>avatar</strong>: 卡片头像，可以是 React 节点
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息
        </li>
        <li>
          <strong>value</strong>: 选项值，用于标识和表单绑定
        </li>
      </ul>
      <h4>Avatar 组件 Props：</h4>
      <ul>
        <li>
          <strong>size</strong>: 头像尺寸，数字值（像素）
        </li>
        <li>
          <strong>shape</strong>: 头像形状，'square' 表示方形
        </li>
        <li>
          <strong>src</strong>: 头像图片地址
        </li>
      </ul>
      <h4>列表渲染特点：</h4>
      <ul>
        <li>
          <strong>自动布局</strong>: 根据容器宽度自动排列卡片
        </li>
        <li>
          <strong>响应式</strong>: 在不同屏幕尺寸下自动调整布局
        </li>
        <li>
          <strong>统一样式</strong>: 所有卡片使用相同的样式配置
        </li>
        <li>
          <strong>批量操作</strong>: 支持批量选择和操作
        </li>
      </ul>
      <h4>使用场景：</h4>
      <ul>
        <li>
          <strong>算法选择</strong>: 如示例中的机器学习算法选择
        </li>
        <li>
          <strong>产品展示</strong>: 展示多个产品选项
        </li>
        <li>
          <strong>功能选择</strong>: 选择不同的功能模块
        </li>
        <li>
          <strong>配置选择</strong>: 选择不同的配置选项
        </li>
      </ul>
      <h4>最佳实践：</h4>
      <ul>
        <li>
          <strong>数据结构</strong>: 保持数据结构的统一性和一致性
        </li>
        <li>
          <strong>性能优化</strong>: 大量数据时考虑虚拟滚动
        </li>
        <li>
          <strong>用户体验</strong>: 提供清晰的视觉层次和交互反馈
        </li>
      </ul>
    </div>
  </>
);

import { EllipsisOutlined } from '@ant-design/icons';
import { CheckCard } from '@ant-design/pro-components';
import { Dropdown, message } from 'antd';

const Demo = () => (
  <>
    <CheckCard
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      title="示例一"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
      extra={
        <Dropdown
          placement="topCenter"
          menu={{
            onClick: ({ domEvent }) => {
              domEvent.stopPropagation();
              message.info('menu click');
            },
            items: [
              {
                label: '菜单',
                key: '1',
              },
              {
                label: '列表',
                key: '2',
              },
              {
                label: '表单',
                key: '3',
              },
            ],
          }}
        >
          <EllipsisOutlined
            style={{ fontSize: 22, color: 'rgba(0,0,0,0.5)' }}
            onClick={(e) => e.stopPropagation()}
          />
        </Dropdown>
      }
    />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Extra Props 说明：</h4>
      <ul>
        <li>
          <strong>extra</strong>: 卡片右上角操作区域，可以是字符串或 React 节点
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息
        </li>
        <li>
          <strong>avatar</strong>: 卡片头像
        </li>
      </ul>
      <h4>Extra 使用方式：</h4>
      <ul>
        <li>
          <strong>字符串</strong>: 直接传入字符串，显示简单文本
        </li>
        <li>
          <strong>组件</strong>: 传入 React
          节点，可以包含下拉菜单、按钮等复杂操作
        </li>
      </ul>
      <h4>Dropdown 组件 Props：</h4>
      <ul>
        <li>
          <strong>placement</strong>: 下拉菜单出现位置，如 'topCenter'
        </li>
        <li>
          <strong>menu</strong>: 菜单配置对象
        </li>
        <li>
          <strong>children</strong>: 触发下拉菜单的元素
        </li>
      </ul>
      <h4>Menu 配置：</h4>
      <ul>
        <li>
          <strong>onClick</strong>: 菜单项点击回调，参数包含 domEvent
        </li>
        <li>
          <strong>items</strong>: 菜单项数组，每个项包含 label 和 key
        </li>
        <li>
          <strong>label</strong>: 菜单项显示文本
        </li>
        <li>
          <strong>key</strong>: 菜单项唯一标识
        </li>
      </ul>
      <h4>事件处理：</h4>
      <ul>
        <li>
          <strong>stopPropagation</strong>: 阻止事件冒泡，避免触发卡片的点击事件
        </li>
        <li>
          <strong>domEvent</strong>: 原生 DOM 事件对象，用于阻止默认行为
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const Demo = () => (
  <>
    <CheckCard
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      title="默认描述区域不会进行折行"
      description={
        <span>
          选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。
          <a
            href=""
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            查看详情
          </a>
        </span>
      }
    />
    <CheckCard
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      title="你可以通过排版组件进行省略"
      description={
        <Paragraph ellipsis={{ rows: 2 }}>
          选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。
        </Paragraph>
      }
    />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Description Props 说明：</h4>
      <ul>
        <li>
          <strong>description</strong>: 卡片描述信息，可以是字符串或 React 节点
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
        <li>
          <strong>avatar</strong>: 卡片头像
        </li>
      </ul>
      <h4>Description 使用方式：</h4>
      <ul>
        <li>
          <strong>字符串</strong>: 直接传入字符串，默认不会折行
        </li>
        <li>
          <strong>组件</strong>: 传入 React 节点，可以包含链接、排版组件等
        </li>
      </ul>
      <h4>复杂 Description 示例：</h4>
      <ul>
        <li>
          <strong>链接</strong>: 在描述中添加可点击的链接，使用 stopPropagation
          阻止事件冒泡
        </li>
        <li>
          <strong>排版组件</strong>: 使用 Typography.Paragraph 组件控制文本显示
        </li>
        <li>
          <strong>省略处理</strong>: 使用 ellipsis 属性控制文本省略行数
        </li>
      </ul>
      <h4>Typography.Paragraph Props：</h4>
      <ul>
        <li>
          <strong>ellipsis</strong>: 省略配置，可以设置 rows（行数）等属性
        </li>
        <li>
          <strong>rows</strong>: 显示的行数，超出部分会省略
        </li>
        <li>
          <strong>expandable</strong>: 是否可展开，布尔值
        </li>
      </ul>
      <h4>事件处理：</h4>
      <ul>
        <li>
          <strong>stopPropagation</strong>: 阻止事件冒泡，避免触发卡片的点击事件
        </li>
        <li>
          <strong>preventDefault</strong>: 阻止默认行为，如链接跳转
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { UserOutlined } from '@ant-design/icons';
import { CheckCard } from '@ant-design/pro-components';
import { Avatar } from 'antd';

const Demo = () => (
  <>
    <CheckCard
      title="示例标题"
      avatar={
        <Avatar
          style={{ backgroundColor: '#7265e6' }}
          icon={<UserOutlined />}
          size="large"
        />
      }
    />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Avatar Props 说明：</h4>
      <ul>
        <li>
          <strong>avatar</strong>: 卡片头像，可以是图片 URL 字符串或 React 节点
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
      </ul>
      <h4>Avatar 组件 Props：</h4>
      <ul>
        <li>
          <strong>style</strong>: 头像样式对象，可以设置背景色等
        </li>
        <li>
          <strong>icon</strong>: 头像图标，可以是 Ant Design 图标组件
        </li>
        <li>
          <strong>size</strong>: 头像尺寸，可选值：'large' | 'default' | 'small'
        </li>
        <li>
          <strong>src</strong>: 头像图片地址（字符串形式）
        </li>
      </ul>
      <h4>Avatar 使用方式：</h4>
      <ul>
        <li>
          <strong>字符串</strong>: 直接传入图片 URL，如
          avatar="https://example.com/image.jpg"
        </li>
        <li>
          <strong>组件</strong>: 传入 Avatar 组件，可以自定义样式和图标
        </li>
        <li>
          <strong>图标</strong>: 使用 Ant Design 图标作为头像内容
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';
import { ConfigProvider, Flex } from 'antd';

const Demo = () => (
  <>
    <Flex gap={24} vertical>
      <CheckCard.Group
        multiple
        onChange={(value) => {
          console.log('value', value);
        }}
        defaultValue={['A']}
      >
        <CheckCard
          title="Card A"
          description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
          value="A"
        />
        <CheckCard
          title="Card B"
          description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
          value="B"
        />
      </CheckCard.Group>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'red',
          },
        }}
      >
        <CheckCard.Group
          multiple
          onChange={(value) => {
            console.log('value', value);
          }}
          defaultValue={['A']}
        >
          <CheckCard
            title="Card A"
            description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
            value="A"
          />
          <CheckCard
            title="Card B"
            description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
            value="B"
          />
        </CheckCard.Group>
      </ConfigProvider>
    </Flex>

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard.Group 多选模式 Props 说明：</h4>
      <ul>
        <li>
          <strong>multiple</strong>: 设置为 true 启用多选模式，默认为
          false（单选）
        </li>
        <li>
          <strong>onChange</strong>:
          选中值改变时的回调函数，多选模式下参数为数组
        </li>
        <li>
          <strong>defaultValue</strong>: 默认选中的值，多选模式下为数组格式
        </li>
        <li>
          <strong>value</strong>: 受控的选中值，多选模式下为数组格式
        </li>
        <li>
          <strong>children</strong>: CheckCard 子组件
        </li>
      </ul>
      <h4>多选模式特点：</h4>
      <ul>
        <li>
          <strong>返回值</strong>: onChange 回调返回选中值的数组
        </li>
        <li>
          <strong>默认值</strong>: defaultValue 需要传入数组格式
        </li>
        <li>
          <strong>样式</strong>: 可以通过 ConfigProvider 自定义主题色
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <div>
      <h3>部分不可用</h3>
      <CheckCard
        title="Card title"
        description="This is the description"
        avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      />
      <CheckCard
        title="Card title"
        description="This is the description"
        disabled
        avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      />
      <CheckCard
        title="Card title"
        description="This is the description"
        disabled
        defaultChecked
        avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      />
    </div>
    <div>
      <h3>整体不可用</h3>
      <CheckCard.Group disabled defaultValue="A">
        <CheckCard title="Card A" description="选项一" value="A" />
        <CheckCard title="Card B" description="选项二" value="B" />
      </CheckCard.Group>
    </div>

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Disabled Props 说明：</h4>
      <ul>
        <li>
          <strong>disabled</strong>: 是否禁用卡片，禁用后无法点击和选择
        </li>
        <li>
          <strong>defaultChecked</strong>:
          默认选中状态，即使禁用也可以设置默认选中
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息
        </li>
        <li>
          <strong>avatar</strong>: 卡片头像
        </li>
      </ul>
      <h4>CheckCard.Group Disabled Props：</h4>
      <ul>
        <li>
          <strong>disabled</strong>: 禁用整个组，所有子卡片都会被禁用
        </li>
        <li>
          <strong>defaultValue</strong>: 默认选中的值
        </li>
      </ul>
      <h4>禁用状态说明：</h4>
      <ul>
        <li>
          <strong>单个禁用</strong>: 在 CheckCard 上设置 disabled 属性
        </li>
        <li>
          <strong>组级禁用</strong>: 在 CheckCard.Group 上设置 disabled 属性
        </li>
        <li>
          <strong>默认选中</strong>: 禁用的卡片仍然可以设置 defaultChecked
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <CheckCard loading />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Loading Props 说明：</h4>
      <ul>
        <li>
          <strong>loading</strong>: 是否显示加载状态，布尔值
        </li>
      </ul>
      <h4>Loading 状态特点：</h4>
      <ul>
        <li>
          <strong>骨架屏</strong>: 显示骨架屏效果，模拟内容加载
        </li>
        <li>
          <strong>禁用交互</strong>: 加载状态下卡片不可点击
        </li>
        <li>
          <strong>视觉反馈</strong>: 提供明确的加载状态指示
        </li>
        <li>
          <strong>自动布局</strong>: 保持与正常状态相同的布局结构
        </li>
      </ul>
      <h4>使用场景：</h4>
      <ul>
        <li>
          <strong>数据加载</strong>: 异步获取卡片数据时显示
        </li>
        <li>
          <strong>网络请求</strong>: 等待 API 响应时显示
        </li>
        <li>
          <strong>初始化</strong>: 组件初始化过程中显示
        </li>
        <li>
          <strong>状态切换</strong>: 从一种状态切换到另一种状态时显示
        </li>
      </ul>
      <h4>与其他属性的组合：</h4>
      <ul>
        <li>
          <strong>loading + title</strong>: 加载状态下仍可显示标题
        </li>
        <li>
          <strong>loading + avatar</strong>: 头像区域显示骨架屏
        </li>
        <li>
          <strong>loading + description</strong>: 描述区域显示骨架屏
        </li>
      </ul>
      <h4>最佳实践：</h4>
      <ul>
        <li>
          <strong>合理时机</strong>: 在真正需要加载时使用，避免过度使用
        </li>
        <li>
          <strong>用户体验</strong>: 提供清晰的加载状态反馈
        </li>
        <li>
          <strong>性能考虑</strong>: 避免不必要的加载状态切换
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

/** Title: 基本使用 */
import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <CheckCard
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      title="示例一"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
      onChange={(checked) => {
        console.log('checked', checked);
      }}
      defaultChecked
      onClick={() => {
        console.log('clicked');
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
      <h4>CheckCard Props 说明：</h4>
      <ul>
        <li>
          <strong>avatar</strong>: 卡片头像，可以是图片 URL 或 React 节点
        </li>
        <li>
          <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息，可以是字符串或 React 节点
        </li>
        <li>
          <strong>onChange</strong>: 选中状态改变时的回调函数，参数为
          checked（布尔值）
        </li>
        <li>
          <strong>defaultChecked</strong>: 默认是否选中，布尔值
        </li>
        <li>
          <strong>onClick</strong>: 点击卡片时的回调函数
        </li>
        <li>
          <strong>checked</strong>: 受控的选中状态，布尔值
        </li>
        <li>
          <strong>disabled</strong>: 是否禁用，布尔值
        </li>
        <li>
          <strong>size</strong>: 卡片尺寸，可选值：'default' | 'small' | 'large'
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <CheckCard
      cover={
        <img
          alt="example"
          height={240}
          src="https://gw.alipayobjects.com/mdn/rms_66ee3f/afts/img/A*FyH5TY53zSwAAAAAAAAAAABkARQnAQ"
        />
      }
    />
    <CheckCard
      cover={
        'https://gw.alipayobjects.com/mdn/rms_66ee3f/afts/img/A*FyH5TY53zSwAAAAAAAAAAABkARQnAQ'
      }
    />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Cover Props 说明：</h4>
      <ul>
        <li>
          <strong>cover</strong>: 卡片封面，可以是图片 URL 字符串或 React 节点
        </li>
      </ul>
      <h4>Cover 使用方式：</h4>
      <ul>
        <li>
          <strong>字符串</strong>: 直接传入图片 URL，会自动渲染为 img 标签
        </li>
        <li>
          <strong>组件</strong>: 传入 img 标签或其他 React
          节点，可以自定义样式和属性
        </li>
      </ul>
      <h4>Img 标签 Props：</h4>
      <ul>
        <li>
          <strong>alt</strong>: 图片的替代文本，用于无障碍访问
        </li>
        <li>
          <strong>height</strong>: 图片高度，可以是数字或字符串
        </li>
        <li>
          <strong>src</strong>: 图片源地址
        </li>
        <li>
          <strong>width</strong>: 图片宽度，可以是数字或字符串
        </li>
        <li>
          <strong>style</strong>: 图片样式对象
        </li>
      </ul>
      <h4>Cover 特点：</h4>
      <ul>
        <li>
          <strong>自动适配</strong>: 字符串形式的 cover 会自动适配卡片宽度
        </li>
        <li>
          <strong>自定义样式</strong>: 组件形式可以完全控制图片的样式和属性
        </li>
        <li>
          <strong>响应式</strong>: 支持响应式布局，图片会随卡片大小调整
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <CheckCard
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      title="示例二"
      defaultChecked
      onChange={(checked) => {
        console.log('checked', checked);
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
      <h4>CheckCard DefaultChecked Props 说明：</h4>
      <ul>
        <li>
          <strong>defaultChecked</strong>:
          默认选中状态，布尔值，组件初始化时生效
        </li>
        <li>
          <strong>onChange</strong>: 选中状态改变时的回调函数
        </li>
        <li>
          <strong>avatar</strong>: 卡片头像
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
      </ul>
      <h4>DefaultChecked 特点：</h4>
      <ul>
        <li>
          <strong>非受控组件</strong>: 使用 defaultChecked
          时，组件内部管理选中状态
        </li>
        <li>
          <strong>初始化生效</strong>:
          只在组件首次渲染时生效，后续状态由组件内部管理
        </li>
        <li>
          <strong>用户可交互</strong>: 用户可以通过点击改变选中状态
        </li>
        <li>
          <strong>状态反馈</strong>: 通过 onChange 回调获取状态变化
        </li>
      </ul>
      <h4>OnChange 回调：</h4>
      <ul>
        <li>
          <strong>参数</strong>: checked（布尔值），表示当前选中状态
        </li>
        <li>
          <strong>触发时机</strong>: 用户点击卡片时触发
        </li>
        <li>
          <strong>用途</strong>: 可以用于记录用户选择、触发其他操作等
        </li>
      </ul>
      <h4>与 Checked 的区别：</h4>
      <ul>
        <li>
          <strong>defaultChecked</strong>: 非受控，组件内部管理状态
        </li>
        <li>
          <strong>checked</strong>: 受控，由外部状态管理
        </li>
        <li>
          <strong>使用场景</strong>: defaultChecked 适合简单场景，checked
          适合复杂状态管理
        </li>
      </ul>
      <h4>使用建议：</h4>
      <ul>
        <li>
          <strong>简单选择</strong>: 使用 defaultChecked 实现简单的选择功能
        </li>
        <li>
          <strong>状态同步</strong>: 使用 onChange 回调同步状态到外部
        </li>
        <li>
          <strong>默认选中</strong>: 设置 defaultChecked={true} 实现默认选中
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

/**
 * title: 单选模式
 */
import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <CheckCard.Group
      onChange={(value) => {
        console.log('value', value);
      }}
      defaultValue="A"
    >
      <CheckCard title="Card A" description="选项一" value="A" />
      <CheckCard title="Card B" description="选项二" value="B" />
      <CheckCard
        title="Card C"
        disabled
        description="选项三，这是一个不可选项"
        value="C"
      />
    </CheckCard.Group>

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard.Group Props 说明：</h4>
      <ul>
        <li>
          <strong>onChange</strong>: 选中值改变时的回调函数，参数为选中的 value
        </li>
        <li>
          <strong>defaultValue</strong>: 默认选中的值
        </li>
        <li>
          <strong>value</strong>: 受控的选中值
        </li>
        <li>
          <strong>multiple</strong>: 是否支持多选，默认为 false（单选）
        </li>
        <li>
          <strong>children</strong>: CheckCard 子组件
        </li>
      </ul>
      <h4>CheckCard 在 Group 中的 Props：</h4>
      <ul>
        <li>
          <strong>value</strong>: 选项的值，用于标识该选项
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
        <li>
          <strong>description</strong>: 卡片描述
        </li>
        <li>
          <strong>disabled</strong>: 是否禁用该选项
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';
import { Avatar, Button, Form } from 'antd';

const Demo = () => {
  const [form] = Form.useForm();
  const handleSubmit = async (values: any) => {
    console.log('values', values);
  };

  return (
    <>
      <div>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="checkbox-group" label="技术栈">
            <CheckCard.Group style={{ width: '100%' }}>
              <CheckCard
                title="Spring Boot"
                avatar={
                  <Avatar
                    src="https://gw.alipayobjects.com/zos/bmw-prod/2dd637c7-5f50-4d89-a819-33b3d6da73b6.svg"
                    size="large"
                  />
                }
                description="通过业界流行的技术栈来快速构建 Java 后端应用"
                value="SpringBoot"
              />
              <CheckCard
                title="SOFA Boot"
                avatar={
                  <Avatar
                    src="https://gw.alipayobjects.com/zos/bmw-prod/6935b98e-96f6-464f-9d4f-215b917c6548.svg"
                    size="large"
                  />
                }
                description="使用 SOFAStack 中间件来快速构建分布式后端应用"
                value="SOFABoot"
              />
              <CheckCard
                title="Node JS"
                avatar={
                  <Avatar
                    src="https://gw.alipayobjects.com/zos/bmw-prod/d12c3392-61fa-489e-a82c-71de0f888a8e.svg"
                    size="large"
                  />
                }
                description="使用前后端统一的语言方案快速构建后端应用"
                value="NodeJS"
              />
            </CheckCard.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>CheckCard 与 Form 集成说明：</h4>
        <ul>
          <li>
            <strong>Form.Item</strong>: 将 CheckCard.Group 包装在 Form.Item
            中作为表单控件
          </li>
          <li>
            <strong>name</strong>: Form.Item 的 name 属性用于标识表单字段
          </li>
          <li>
            <strong>value</strong>: CheckCard 的 value 属性作为选项值
          </li>
        </ul>
        <h4>Form 相关 Props：</h4>
        <ul>
          <li>
            <strong>form</strong>: Form 实例，通过 Form.useForm() 创建
          </li>
          <li>
            <strong>onFinish</strong>: 表单提交完成时的回调函数
          </li>
          <li>
            <strong>layout</strong>: 表单布局方式，'vertical' 表示垂直布局
          </li>
        </ul>
        <h4>CheckCard.Group 在表单中的特点：</h4>
        <ul>
          <li>
            <strong>自动绑定</strong>: 自动与 Form 的 name 字段绑定
          </li>
          <li>
            <strong>值收集</strong>: 选中的 CheckCard 的 value
            会自动收集到表单数据中
          </li>
          <li>
            <strong>验证支持</strong>: 支持 Form 的验证规则
          </li>
          <li>
            <strong>样式适配</strong>: 可以通过 style 属性适配表单布局
          </li>
        </ul>
        <h4>Avatar 组件 Props：</h4>
        <ul>
          <li>
            <strong>src</strong>: 头像图片地址
          </li>
          <li>
            <strong>size</strong>: 头像尺寸，'large' 表示大尺寸
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

import { CheckCard } from '@ant-design/pro-components';
import { Divider } from 'antd';

export default () => (
  <>
    <div style={{ padding: 24 }}>
      <CheckCard.Group
        size="small"
        options={['🍎 Apple', '🍐 Pear', '🍊 Orange']}
      />
      <br />
      <CheckCard.Group
        size="small"
        loading
        options={['🍎 Apple', '🍐 Pear', '🍊 Orange']}
      />
      <br />
      <Divider />
      <CheckCard.Group
        size="small"
        options={[
          {
            title: 'Fruit',
            value: 'Fruit',
            children: [
              {
                title: '🍎 Apple',
                value: 'apple',
              },
              {
                title: '🍐 Pear',
                value: 'pear',
              },
              {
                title: '🍊 Orange',
                value: 'orange',
              },
            ],
          },
        ]}
      />
      <Divider />
      <br />
      <CheckCard.Group defaultValue="A">
        <CheckCard title="🍊 Orange" value="🍊 Orange" />
        <CheckCard title="🍐 Pear" value="🍐 Pear" />
        <CheckCard title="🍎 Apple" value="🍎 Apple" />
      </CheckCard.Group>
      <br />
      <Divider />
      <CheckCard.Group defaultValue="A" loading>
        <CheckCard title="🍊 Orange" value="🍊 Orange" />
        <CheckCard title="🍐 Pear" value="🍐 Pear" />
        <CheckCard title="🍎 Apple" value="🍎 Apple" />
      </CheckCard.Group>
    </div>

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard.Group Options Props 说明：</h4>
      <ul>
        <li>
          <strong>options</strong>: 选项配置，可以是字符串数组或对象数组
        </li>
        <li>
          <strong>size</strong>: 卡片尺寸，可选值：'large' | 'default' | 'small'
        </li>
        <li>
          <strong>loading</strong>: 是否显示加载状态，布尔值
        </li>
        <li>
          <strong>defaultValue</strong>: 默认选中的值
        </li>
      </ul>
      <h4>Options 配置方式：</h4>
      <ul>
        <li>
          <strong>字符串数组</strong>: ['🍎 Apple', '🍐 Pear', '🍊
          Orange']，自动生成 CheckCard
        </li>
        <li>
          <strong>对象数组</strong>: 包含 title、value、children 等属性的对象
        </li>
        <li>
          <strong>子组件方式</strong>: 直接使用 CheckCard 子组件
        </li>
      </ul>
      <h4>Option 对象属性：</h4>
      <ul>
        <li>
          <strong>title</strong>: 选项标题，显示文本
        </li>
        <li>
          <strong>value</strong>: 选项值，用于标识和表单绑定
        </li>
        <li>
          <strong>children</strong>: 子选项数组，支持嵌套结构
        </li>
        <li>
          <strong>description</strong>: 选项描述信息
        </li>
        <li>
          <strong>avatar</strong>: 选项头像
        </li>
      </ul>
      <h4>Loading 状态：</h4>
      <ul>
        <li>
          <strong>loading</strong>: 设置为 true 时显示加载动画
        </li>
        <li>
          <strong>适用场景</strong>: 数据加载中、异步操作等
        </li>
        <li>
          <strong>视觉效果</strong>: 卡片会显示骨架屏或加载动画
        </li>
      </ul>
      <h4>使用建议：</h4>
      <ul>
        <li>
          <strong>简单选项</strong>: 使用字符串数组或简单对象数组
        </li>
        <li>
          <strong>复杂选项</strong>: 使用 CheckCard 子组件方式
        </li>
        <li>
          <strong>嵌套结构</strong>: 使用 children 属性创建分组
        </li>
      </ul>
    </div>
  </>
);

import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <CheckCard
      title="Card title"
      description="This is the description"
      style={{ width: 200, height: 200 }}
    />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard 自定义样式说明：</h4>
      <ul>
        <li>
          <strong>style</strong>: 自定义样式对象，可以覆盖默认样式
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息
        </li>
      </ul>
      <h4>Style 属性说明：</h4>
      <ul>
        <li>
          <strong>width</strong>: 卡片宽度，可以是数字（像素）或字符串
        </li>
        <li>
          <strong>height</strong>: 卡片高度，可以是数字（像素）或字符串
        </li>
        <li>
          <strong>backgroundColor</strong>: 背景颜色
        </li>
        <li>
          <strong>border</strong>: 边框样式
        </li>
        <li>
          <strong>borderRadius</strong>: 圆角半径
        </li>
        <li>
          <strong>padding</strong>: 内边距
        </li>
        <li>
          <strong>margin</strong>: 外边距
        </li>
      </ul>
      <h4>自定义样式特点：</h4>
      <ul>
        <li>
          <strong>优先级</strong>: style 属性会覆盖组件的默认样式
        </li>
        <li>
          <strong>响应式</strong>: 可以使用媒体查询实现响应式样式
        </li>
        <li>
          <strong>主题适配</strong>: 可以结合 CSS 变量实现主题切换
        </li>
        <li>
          <strong>灵活控制</strong>: 可以精确控制卡片的尺寸和外观
        </li>
      </ul>
      <h4>使用建议：</h4>
      <ul>
        <li>
          <strong>固定尺寸</strong>: 使用 width 和 height 设置固定尺寸
        </li>
        <li>
          <strong>百分比布局</strong>: 使用百分比值实现响应式布局
        </li>
        <li>
          <strong>主题定制</strong>: 结合 CSS 变量实现主题定制
        </li>
        <li>
          <strong>动画效果</strong>: 可以添加 transition 等动画效果
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <h3>只有图片时</h3>
    <CheckCard avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg" />

    <h3>只有图片和描述时</h3>
    <CheckCard
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
    />
    <h3>只有标题和描述时</h3>
    <CheckCard
      title="示例"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
    />
    <h3>只有标题和图片</h3>
    <CheckCard
      title="示例"
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
    />
    <h3>只有标题</h3>
    <CheckCard title="示例" />
    <h3>只有描述时</h3>
    <CheckCard description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。" />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard 属性组合说明：</h4>
      <ul>
        <li>
          <strong>avatar</strong>: 卡片头像，可以是图片 URL 或 React 节点
        </li>
        <li>
          <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息，可以是字符串或 React 节点
        </li>
      </ul>
      <h4>属性组合效果：</h4>
      <ul>
        <li>
          <strong>只有 avatar</strong>: 显示头像，适合图标展示
        </li>
        <li>
          <strong>avatar + description</strong>: 头像和描述组合，适合产品介绍
        </li>
        <li>
          <strong>title + description</strong>: 标题和描述组合，适合内容展示
        </li>
        <li>
          <strong>title + avatar</strong>: 标题和头像组合，适合品牌展示
        </li>
        <li>
          <strong>只有 title</strong>: 仅显示标题，适合简单标识
        </li>
        <li>
          <strong>只有 description</strong>: 仅显示描述，适合说明文字
        </li>
      </ul>
      <h4>布局特点：</h4>
      <ul>
        <li>
          <strong>自适应布局</strong>: 根据提供的属性自动调整布局
        </li>
        <li>
          <strong>内容居中</strong>: 单个属性时内容会自动居中显示
        </li>
        <li>
          <strong>响应式</strong>: 在不同屏幕尺寸下保持良好的显示效果
        </li>
        <li>
          <strong>灵活组合</strong>: 支持任意属性的组合使用
        </li>
      </ul>
      <h4>使用建议：</h4>
      <ul>
        <li>
          <strong>图标卡片</strong>: 使用只有 avatar 的组合
        </li>
        <li>
          <strong>产品卡片</strong>: 使用 avatar + title + description 组合
        </li>
        <li>
          <strong>内容卡片</strong>: 使用 title + description 组合
        </li>
        <li>
          <strong>品牌卡片</strong>: 使用 title + avatar 组合
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';
import { Radio } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [size, setSize] = useState('default' as const);
  return (
    <>
      <div style={{ marginBlockEnd: 16 }}>
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      </div>
      <CheckCard
        title="Card title"
        description="This is the description"
        size={size}
      />

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>CheckCard Size Props 说明：</h4>
        <ul>
          <li>
            <strong>size</strong>: 卡片尺寸，可选值：'large' | 'default' |
            'small'
          </li>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>description</strong>: 卡片描述信息
          </li>
        </ul>
        <h4>Size 尺寸说明：</h4>
        <ul>
          <li>
            <strong>large</strong>: 大尺寸，适合重要内容的展示
          </li>
          <li>
            <strong>default</strong>: 默认尺寸，最常用的尺寸
          </li>
          <li>
            <strong>small</strong>: 小尺寸，适合紧凑布局
          </li>
        </ul>
        <h4>动态切换：</h4>
        <ul>
          <li>
            <strong>Radio.Group</strong>: 使用单选按钮组来动态切换 size 属性
          </li>
          <li>
            <strong>useState</strong>: 使用 React Hook 管理 size 状态
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

import { AppstoreOutlined } from '@ant-design/icons';
import { CheckCard } from '@ant-design/pro-components';
import { Tag } from 'antd';

const Demo = () => (
  <>
    <CheckCard
      title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AppstoreOutlined />
          <span style={{ marginInlineEnd: 8, marginInlineStart: 8 }}>示例</span>
          <Tag color="blue">blue</Tag>
        </div>
      }
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
    />
    <CheckCard
      title="标题内容过长会自动进行省略，标题内容过长会自动进行省略"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
    />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Title Props 说明：</h4>
      <ul>
        <li>
          <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息
        </li>
      </ul>
      <h4>Title 使用方式：</h4>
      <ul>
        <li>
          <strong>字符串</strong>: 直接传入字符串，过长会自动省略
        </li>
        <li>
          <strong>组件</strong>: 传入 React 节点，可以包含图标、标签等复杂内容
        </li>
      </ul>
      <h4>复杂 Title 示例：</h4>
      <ul>
        <li>
          <strong>图标</strong>: 使用 AppstoreOutlined 等 Ant Design 图标
        </li>
        <li>
          <strong>文本</strong>: 使用 span 标签包装文本内容
        </li>
        <li>
          <strong>标签</strong>: 使用 Tag 组件添加状态标识
        </li>
        <li>
          <strong>布局</strong>: 使用 flexbox 布局对齐多个元素
        </li>
      </ul>
      <h4>样式说明：</h4>
      <ul>
        <li>
          <strong>自动省略</strong>: 字符串形式的 title 过长时会自动省略
        </li>
        <li>
          <strong>自定义样式</strong>: 组件形式可以完全控制样式和布局
        </li>
        <li>
          <strong>响应式</strong>: 支持响应式布局，在不同屏幕尺寸下自适应
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';
import { Col, Row } from 'antd';

const Demo = () => (
  <>
    <CheckCard.Group style={{ width: '100%' }} size="small">
      <Row>
        <Col span={8}>
          <CheckCard
            title="Card A"
            description="This is the description"
            value="A"
          />
        </Col>
        <Col span={8}>
          <CheckCard
            title="Card B"
            description="This is the description"
            value="B"
          />
        </Col>
        <Col span={8}>
          <CheckCard
            title="Card C"
            description="This is the description"
            value="C"
          />
        </Col>
      </Row>
    </CheckCard.Group>

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard 与栅格系统集成说明：</h4>
      <ul>
        <li>
          <strong>Row</strong>: 行容器，用于包裹 Col 组件
        </li>
        <li>
          <strong>Col</strong>: 列容器，用于控制 CheckCard 的布局
        </li>
        <li>
          <strong>span</strong>: 列宽度，24 栅格系统中的宽度值
        </li>
      </ul>
      <h4>CheckCard.Group Props：</h4>
      <ul>
        <li>
          <strong>style</strong>: 样式对象，设置容器宽度为 100%
        </li>
        <li>
          <strong>size</strong>: 卡片尺寸，'small' 表示小尺寸
        </li>
      </ul>
      <h4>Row 组件 Props：</h4>
      <ul>
        <li>
          <strong>gutter</strong>: 栅格间隔，可以是数字或数组
        </li>
        <li>
          <strong>justify</strong>: 水平排列方式，如 'start' | 'end' | 'center'
        </li>
        <li>
          <strong>align</strong>: 垂直排列方式，如 'top' | 'middle' | 'bottom'
        </li>
      </ul>
      <h4>Col 组件 Props：</h4>
      <ul>
        <li>
          <strong>span</strong>: 列宽度，24 栅格系统中的宽度值（1-24）
        </li>
        <li>
          <strong>offset</strong>: 列偏移量，用于调整列位置
        </li>
        <li>
          <strong>xs/sm/md/lg/xl</strong>: 响应式断点，不同屏幕尺寸下的宽度
        </li>
      </ul>
      <h4>栅格布局特点：</h4>
      <ul>
        <li>
          <strong>24 栅格</strong>: 一行分为 24 列，span={8} 表示占 8/24 = 1/3
        </li>
        <li>
          <strong>响应式</strong>: 支持不同屏幕尺寸的响应式布局
        </li>
        <li>
          <strong>自动换行</strong>: 超出 24 栅格的列会自动换行
        </li>
        <li>
          <strong>间距控制</strong>: 通过 gutter 属性控制列间距
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';
import { Avatar } from 'antd';

const dataSource = [
  {
    title: '图像分类',
    avatar: (
      <Avatar
        size={32}
        shape="square"
        src="https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg"
      />
    ),
    description: '这是一段关于该算法的说明',
    value: 'A',
  },
  {
    title: '物体检测',
    avatar: (
      <Avatar
        size={32}
        shape="square"
        src="https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg"
      />
    ),
    description: '这是一段关于该算法的说明',
    value: 'B',
  },
  {
    title: 'OCR自定义',
    avatar: (
      <Avatar
        size={32}
        shape="square"
        src="https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg"
      />
    ),
    description: '这是一段关于该算法的说明',
    value: 'C',
  },
  {
    title: 'OCR',
    avatar: (
      <Avatar
        size={32}
        shape="square"
        src="https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg"
      />
    ),
    description: '这是一段关于该算法的说明',
    value: 'D',
  },
  {
    title: '视频分类',
    avatar: (
      <Avatar
        size={32}
        shape="square"
        src="https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg"
      />
    ),
    description: '这是一段关于该算法的说明',
    value: 'E',
  },
  {
    title: '关键点检测',
    avatar: (
      <Avatar
        size={32}
        shape="square"
        src="https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg"
      />
    ),
    description: '这是一段关于该算法的说明',
    value: 'F',
  },
];

export default () => (
  <>
    <div style={{ padding: 24, backgroundColor: '#f7f8fa' }}>
      <CheckCard.Group options={dataSource} />
    </div>

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard.Group Options 列表渲染说明：</h4>
      <ul>
        <li>
          <strong>options</strong>: 数据源数组，每个元素会被渲染为一个 CheckCard
        </li>
        <li>
          <strong>dataSource</strong>: 包含多个选项数据的数组
        </li>
      </ul>
      <h4>Option 对象属性：</h4>
      <ul>
        <li>
          <strong>title</strong>: 卡片标题，显示文本
        </li>
        <li>
          <strong>avatar</strong>: 卡片头像，可以是 React 节点
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息
        </li>
        <li>
          <strong>value</strong>: 选项值，用于标识和表单绑定
        </li>
      </ul>
      <h4>Avatar 组件 Props：</h4>
      <ul>
        <li>
          <strong>size</strong>: 头像尺寸，数字值（像素）
        </li>
        <li>
          <strong>shape</strong>: 头像形状，'square' 表示方形
        </li>
        <li>
          <strong>src</strong>: 头像图片地址
        </li>
      </ul>
      <h4>列表渲染特点：</h4>
      <ul>
        <li>
          <strong>自动布局</strong>: 根据容器宽度自动排列卡片
        </li>
        <li>
          <strong>响应式</strong>: 在不同屏幕尺寸下自动调整布局
        </li>
        <li>
          <strong>统一样式</strong>: 所有卡片使用相同的样式配置
        </li>
        <li>
          <strong>批量操作</strong>: 支持批量选择和操作
        </li>
      </ul>
      <h4>使用场景：</h4>
      <ul>
        <li>
          <strong>算法选择</strong>: 如示例中的机器学习算法选择
        </li>
        <li>
          <strong>产品展示</strong>: 展示多个产品选项
        </li>
        <li>
          <strong>功能选择</strong>: 选择不同的功能模块
        </li>
        <li>
          <strong>配置选择</strong>: 选择不同的配置选项
        </li>
      </ul>
      <h4>最佳实践：</h4>
      <ul>
        <li>
          <strong>数据结构</strong>: 保持数据结构的统一性和一致性
        </li>
        <li>
          <strong>性能优化</strong>: 大量数据时考虑虚拟滚动
        </li>
        <li>
          <strong>用户体验</strong>: 提供清晰的视觉层次和交互反馈
        </li>
      </ul>
    </div>
  </>
);

import { EllipsisOutlined } from '@ant-design/icons';
import { CheckCard } from '@ant-design/pro-components';
import { Dropdown, message } from 'antd';

const Demo = () => (
  <>
    <CheckCard
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      title="示例一"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
      extra={
        <Dropdown
          placement="topCenter"
          menu={{
            onClick: ({ domEvent }) => {
              domEvent.stopPropagation();
              message.info('menu click');
            },
            items: [
              {
                label: '菜单',
                key: '1',
              },
              {
                label: '列表',
                key: '2',
              },
              {
                label: '表单',
                key: '3',
              },
            ],
          }}
        >
          <EllipsisOutlined
            style={{ fontSize: 22, color: 'rgba(0,0,0,0.5)' }}
            onClick={(e) => e.stopPropagation()}
          />
        </Dropdown>
      }
    />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Extra Props 说明：</h4>
      <ul>
        <li>
          <strong>extra</strong>: 卡片右上角操作区域，可以是字符串或 React 节点
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息
        </li>
        <li>
          <strong>avatar</strong>: 卡片头像
        </li>
      </ul>
      <h4>Extra 使用方式：</h4>
      <ul>
        <li>
          <strong>字符串</strong>: 直接传入字符串，显示简单文本
        </li>
        <li>
          <strong>组件</strong>: 传入 React
          节点，可以包含下拉菜单、按钮等复杂操作
        </li>
      </ul>
      <h4>Dropdown 组件 Props：</h4>
      <ul>
        <li>
          <strong>placement</strong>: 下拉菜单出现位置，如 'topCenter'
        </li>
        <li>
          <strong>menu</strong>: 菜单配置对象
        </li>
        <li>
          <strong>children</strong>: 触发下拉菜单的元素
        </li>
      </ul>
      <h4>Menu 配置：</h4>
      <ul>
        <li>
          <strong>onClick</strong>: 菜单项点击回调，参数包含 domEvent
        </li>
        <li>
          <strong>items</strong>: 菜单项数组，每个项包含 label 和 key
        </li>
        <li>
          <strong>label</strong>: 菜单项显示文本
        </li>
        <li>
          <strong>key</strong>: 菜单项唯一标识
        </li>
      </ul>
      <h4>事件处理：</h4>
      <ul>
        <li>
          <strong>stopPropagation</strong>: 阻止事件冒泡，避免触发卡片的点击事件
        </li>
        <li>
          <strong>domEvent</strong>: 原生 DOM 事件对象，用于阻止默认行为
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const Demo = () => (
  <>
    <CheckCard
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      title="默认描述区域不会进行折行"
      description={
        <span>
          选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。
          <a
            href=""
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            查看详情
          </a>
        </span>
      }
    />
    <CheckCard
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      title="你可以通过排版组件进行省略"
      description={
        <Paragraph ellipsis={{ rows: 2 }}>
          选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。
        </Paragraph>
      }
    />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Description Props 说明：</h4>
      <ul>
        <li>
          <strong>description</strong>: 卡片描述信息，可以是字符串或 React 节点
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
        <li>
          <strong>avatar</strong>: 卡片头像
        </li>
      </ul>
      <h4>Description 使用方式：</h4>
      <ul>
        <li>
          <strong>字符串</strong>: 直接传入字符串，默认不会折行
        </li>
        <li>
          <strong>组件</strong>: 传入 React 节点，可以包含链接、排版组件等
        </li>
      </ul>
      <h4>复杂 Description 示例：</h4>
      <ul>
        <li>
          <strong>链接</strong>: 在描述中添加可点击的链接，使用 stopPropagation
          阻止事件冒泡
        </li>
        <li>
          <strong>排版组件</strong>: 使用 Typography.Paragraph 组件控制文本显示
        </li>
        <li>
          <strong>省略处理</strong>: 使用 ellipsis 属性控制文本省略行数
        </li>
      </ul>
      <h4>Typography.Paragraph Props：</h4>
      <ul>
        <li>
          <strong>ellipsis</strong>: 省略配置，可以设置 rows（行数）等属性
        </li>
        <li>
          <strong>rows</strong>: 显示的行数，超出部分会省略
        </li>
        <li>
          <strong>expandable</strong>: 是否可展开，布尔值
        </li>
      </ul>
      <h4>事件处理：</h4>
      <ul>
        <li>
          <strong>stopPropagation</strong>: 阻止事件冒泡，避免触发卡片的点击事件
        </li>
        <li>
          <strong>preventDefault</strong>: 阻止默认行为，如链接跳转
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { UserOutlined } from '@ant-design/icons';
import { CheckCard } from '@ant-design/pro-components';
import { Avatar } from 'antd';

const Demo = () => (
  <>
    <CheckCard
      title="示例标题"
      avatar={
        <Avatar
          style={{ backgroundColor: '#7265e6' }}
          icon={<UserOutlined />}
          size="large"
        />
      }
    />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Avatar Props 说明：</h4>
      <ul>
        <li>
          <strong>avatar</strong>: 卡片头像，可以是图片 URL 字符串或 React 节点
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
      </ul>
      <h4>Avatar 组件 Props：</h4>
      <ul>
        <li>
          <strong>style</strong>: 头像样式对象，可以设置背景色等
        </li>
        <li>
          <strong>icon</strong>: 头像图标，可以是 Ant Design 图标组件
        </li>
        <li>
          <strong>size</strong>: 头像尺寸，可选值：'large' | 'default' | 'small'
        </li>
        <li>
          <strong>src</strong>: 头像图片地址（字符串形式）
        </li>
      </ul>
      <h4>Avatar 使用方式：</h4>
      <ul>
        <li>
          <strong>字符串</strong>: 直接传入图片 URL，如
          avatar="https://example.com/image.jpg"
        </li>
        <li>
          <strong>组件</strong>: 传入 Avatar 组件，可以自定义样式和图标
        </li>
        <li>
          <strong>图标</strong>: 使用 Ant Design 图标作为头像内容
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';
import { ConfigProvider, Flex } from 'antd';

const Demo = () => (
  <>
    <Flex gap={24} vertical>
      <CheckCard.Group
        multiple
        onChange={(value) => {
          console.log('value', value);
        }}
        defaultValue={['A']}
      >
        <CheckCard
          title="Card A"
          description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
          value="A"
        />
        <CheckCard
          title="Card B"
          description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
          value="B"
        />
      </CheckCard.Group>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'red',
          },
        }}
      >
        <CheckCard.Group
          multiple
          onChange={(value) => {
            console.log('value', value);
          }}
          defaultValue={['A']}
        >
          <CheckCard
            title="Card A"
            description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
            value="A"
          />
          <CheckCard
            title="Card B"
            description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念"
            value="B"
          />
        </CheckCard.Group>
      </ConfigProvider>
    </Flex>

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard.Group 多选模式 Props 说明：</h4>
      <ul>
        <li>
          <strong>multiple</strong>: 设置为 true 启用多选模式，默认为
          false（单选）
        </li>
        <li>
          <strong>onChange</strong>:
          选中值改变时的回调函数，多选模式下参数为数组
        </li>
        <li>
          <strong>defaultValue</strong>: 默认选中的值，多选模式下为数组格式
        </li>
        <li>
          <strong>value</strong>: 受控的选中值，多选模式下为数组格式
        </li>
        <li>
          <strong>children</strong>: CheckCard 子组件
        </li>
      </ul>
      <h4>多选模式特点：</h4>
      <ul>
        <li>
          <strong>返回值</strong>: onChange 回调返回选中值的数组
        </li>
        <li>
          <strong>默认值</strong>: defaultValue 需要传入数组格式
        </li>
        <li>
          <strong>样式</strong>: 可以通过 ConfigProvider 自定义主题色
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <div>
      <h3>部分不可用</h3>
      <CheckCard
        title="Card title"
        description="This is the description"
        avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      />
      <CheckCard
        title="Card title"
        description="This is the description"
        disabled
        avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      />
      <CheckCard
        title="Card title"
        description="This is the description"
        disabled
        defaultChecked
        avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      />
    </div>
    <div>
      <h3>整体不可用</h3>
      <CheckCard.Group disabled defaultValue="A">
        <CheckCard title="Card A" description="选项一" value="A" />
        <CheckCard title="Card B" description="选项二" value="B" />
      </CheckCard.Group>
    </div>

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Disabled Props 说明：</h4>
      <ul>
        <li>
          <strong>disabled</strong>: 是否禁用卡片，禁用后无法点击和选择
        </li>
        <li>
          <strong>defaultChecked</strong>:
          默认选中状态，即使禁用也可以设置默认选中
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息
        </li>
        <li>
          <strong>avatar</strong>: 卡片头像
        </li>
      </ul>
      <h4>CheckCard.Group Disabled Props：</h4>
      <ul>
        <li>
          <strong>disabled</strong>: 禁用整个组，所有子卡片都会被禁用
        </li>
        <li>
          <strong>defaultValue</strong>: 默认选中的值
        </li>
      </ul>
      <h4>禁用状态说明：</h4>
      <ul>
        <li>
          <strong>单个禁用</strong>: 在 CheckCard 上设置 disabled 属性
        </li>
        <li>
          <strong>组级禁用</strong>: 在 CheckCard.Group 上设置 disabled 属性
        </li>
        <li>
          <strong>默认选中</strong>: 禁用的卡片仍然可以设置 defaultChecked
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <CheckCard loading />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Loading Props 说明：</h4>
      <ul>
        <li>
          <strong>loading</strong>: 是否显示加载状态，布尔值
        </li>
      </ul>
      <h4>Loading 状态特点：</h4>
      <ul>
        <li>
          <strong>骨架屏</strong>: 显示骨架屏效果，模拟内容加载
        </li>
        <li>
          <strong>禁用交互</strong>: 加载状态下卡片不可点击
        </li>
        <li>
          <strong>视觉反馈</strong>: 提供明确的加载状态指示
        </li>
        <li>
          <strong>自动布局</strong>: 保持与正常状态相同的布局结构
        </li>
      </ul>
      <h4>使用场景：</h4>
      <ul>
        <li>
          <strong>数据加载</strong>: 异步获取卡片数据时显示
        </li>
        <li>
          <strong>网络请求</strong>: 等待 API 响应时显示
        </li>
        <li>
          <strong>初始化</strong>: 组件初始化过程中显示
        </li>
        <li>
          <strong>状态切换</strong>: 从一种状态切换到另一种状态时显示
        </li>
      </ul>
      <h4>与其他属性的组合：</h4>
      <ul>
        <li>
          <strong>loading + title</strong>: 加载状态下仍可显示标题
        </li>
        <li>
          <strong>loading + avatar</strong>: 头像区域显示骨架屏
        </li>
        <li>
          <strong>loading + description</strong>: 描述区域显示骨架屏
        </li>
      </ul>
      <h4>最佳实践：</h4>
      <ul>
        <li>
          <strong>合理时机</strong>: 在真正需要加载时使用，避免过度使用
        </li>
        <li>
          <strong>用户体验</strong>: 提供清晰的加载状态反馈
        </li>
        <li>
          <strong>性能考虑</strong>: 避免不必要的加载状态切换
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

/** Title: 基本使用 */
import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <CheckCard
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      title="示例一"
      description="选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。"
      onChange={(checked) => {
        console.log('checked', checked);
      }}
      defaultChecked
      onClick={() => {
        console.log('clicked');
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
      <h4>CheckCard Props 说明：</h4>
      <ul>
        <li>
          <strong>avatar</strong>: 卡片头像，可以是图片 URL 或 React 节点
        </li>
        <li>
          <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
        </li>
        <li>
          <strong>description</strong>: 卡片描述信息，可以是字符串或 React 节点
        </li>
        <li>
          <strong>onChange</strong>: 选中状态改变时的回调函数，参数为
          checked（布尔值）
        </li>
        <li>
          <strong>defaultChecked</strong>: 默认是否选中，布尔值
        </li>
        <li>
          <strong>onClick</strong>: 点击卡片时的回调函数
        </li>
        <li>
          <strong>checked</strong>: 受控的选中状态，布尔值
        </li>
        <li>
          <strong>disabled</strong>: 是否禁用，布尔值
        </li>
        <li>
          <strong>size</strong>: 卡片尺寸，可选值：'default' | 'small' | 'large'
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <CheckCard
      cover={
        <img
          alt="example"
          height={240}
          src="https://gw.alipayobjects.com/mdn/rms_66ee3f/afts/img/A*FyH5TY53zSwAAAAAAAAAAABkARQnAQ"
        />
      }
    />
    <CheckCard
      cover={
        'https://gw.alipayobjects.com/mdn/rms_66ee3f/afts/img/A*FyH5TY53zSwAAAAAAAAAAABkARQnAQ'
      }
    />

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard Cover Props 说明：</h4>
      <ul>
        <li>
          <strong>cover</strong>: 卡片封面，可以是图片 URL 字符串或 React 节点
        </li>
      </ul>
      <h4>Cover 使用方式：</h4>
      <ul>
        <li>
          <strong>字符串</strong>: 直接传入图片 URL，会自动渲染为 img 标签
        </li>
        <li>
          <strong>组件</strong>: 传入 img 标签或其他 React
          节点，可以自定义样式和属性
        </li>
      </ul>
      <h4>Img 标签 Props：</h4>
      <ul>
        <li>
          <strong>alt</strong>: 图片的替代文本，用于无障碍访问
        </li>
        <li>
          <strong>height</strong>: 图片高度，可以是数字或字符串
        </li>
        <li>
          <strong>src</strong>: 图片源地址
        </li>
        <li>
          <strong>width</strong>: 图片宽度，可以是数字或字符串
        </li>
        <li>
          <strong>style</strong>: 图片样式对象
        </li>
      </ul>
      <h4>Cover 特点：</h4>
      <ul>
        <li>
          <strong>自动适配</strong>: 字符串形式的 cover 会自动适配卡片宽度
        </li>
        <li>
          <strong>自定义样式</strong>: 组件形式可以完全控制图片的样式和属性
        </li>
        <li>
          <strong>响应式</strong>: 支持响应式布局，图片会随卡片大小调整
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <CheckCard
      avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
      title="示例二"
      defaultChecked
      onChange={(checked) => {
        console.log('checked', checked);
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
      <h4>CheckCard DefaultChecked Props 说明：</h4>
      <ul>
        <li>
          <strong>defaultChecked</strong>:
          默认选中状态，布尔值，组件初始化时生效
        </li>
        <li>
          <strong>onChange</strong>: 选中状态改变时的回调函数
        </li>
        <li>
          <strong>avatar</strong>: 卡片头像
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
      </ul>
      <h4>DefaultChecked 特点：</h4>
      <ul>
        <li>
          <strong>非受控组件</strong>: 使用 defaultChecked
          时，组件内部管理选中状态
        </li>
        <li>
          <strong>初始化生效</strong>:
          只在组件首次渲染时生效，后续状态由组件内部管理
        </li>
        <li>
          <strong>用户可交互</strong>: 用户可以通过点击改变选中状态
        </li>
        <li>
          <strong>状态反馈</strong>: 通过 onChange 回调获取状态变化
        </li>
      </ul>
      <h4>OnChange 回调：</h4>
      <ul>
        <li>
          <strong>参数</strong>: checked（布尔值），表示当前选中状态
        </li>
        <li>
          <strong>触发时机</strong>: 用户点击卡片时触发
        </li>
        <li>
          <strong>用途</strong>: 可以用于记录用户选择、触发其他操作等
        </li>
      </ul>
      <h4>与 Checked 的区别：</h4>
      <ul>
        <li>
          <strong>defaultChecked</strong>: 非受控，组件内部管理状态
        </li>
        <li>
          <strong>checked</strong>: 受控，由外部状态管理
        </li>
        <li>
          <strong>使用场景</strong>: defaultChecked 适合简单场景，checked
          适合复杂状态管理
        </li>
      </ul>
      <h4>使用建议：</h4>
      <ul>
        <li>
          <strong>简单选择</strong>: 使用 defaultChecked 实现简单的选择功能
        </li>
        <li>
          <strong>状态同步</strong>: 使用 onChange 回调同步状态到外部
        </li>
        <li>
          <strong>默认选中</strong>: 设置 defaultChecked={true} 实现默认选中
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

/**
 * title: 单选模式
 */
import { CheckCard } from '@ant-design/pro-components';

const Demo = () => (
  <>
    <CheckCard.Group
      onChange={(value) => {
        console.log('value', value);
      }}
      defaultValue="A"
    >
      <CheckCard title="Card A" description="选项一" value="A" />
      <CheckCard title="Card B" description="选项二" value="B" />
      <CheckCard
        title="Card C"
        disabled
        description="选项三，这是一个不可选项"
        value="C"
      />
    </CheckCard.Group>

    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '6px',
      }}
    >
      <h4>CheckCard.Group Props 说明：</h4>
      <ul>
        <li>
          <strong>onChange</strong>: 选中值改变时的回调函数，参数为选中的 value
        </li>
        <li>
          <strong>defaultValue</strong>: 默认选中的值
        </li>
        <li>
          <strong>value</strong>: 受控的选中值
        </li>
        <li>
          <strong>multiple</strong>: 是否支持多选，默认为 false（单选）
        </li>
        <li>
          <strong>children</strong>: CheckCard 子组件
        </li>
      </ul>
      <h4>CheckCard 在 Group 中的 Props：</h4>
      <ul>
        <li>
          <strong>value</strong>: 选项的值，用于标识该选项
        </li>
        <li>
          <strong>title</strong>: 卡片标题
        </li>
        <li>
          <strong>description</strong>: 卡片描述
        </li>
        <li>
          <strong>disabled</strong>: 是否禁用该选项
        </li>
      </ul>
    </div>
  </>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CheckCard } from '@ant-design/pro-components';
import { Avatar, Button, Form } from 'antd';

const Demo = () => {
  const [form] = Form.useForm();
  const handleSubmit = async (values: any) => {
    console.log('values', values);
  };

  return (
    <>
      <div>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="checkbox-group" label="技术栈">
            <CheckCard.Group style={{ width: '100%' }}>
              <CheckCard
                title="Spring Boot"
                avatar={
                  <Avatar
                    src="https://gw.alipayobjects.com/zos/bmw-prod/2dd637c7-5f50-4d89-a819-33b3d6da73b6.svg"
                    size="large"
                  />
                }
                description="通过业界流行的技术栈来快速构建 Java 后端应用"
                value="SpringBoot"
              />
              <CheckCard
                title="SOFA Boot"
                avatar={
                  <Avatar
                    src="https://gw.alipayobjects.com/zos/bmw-prod/6935b98e-96f6-464f-9d4f-215b917c6548.svg"
                    size="large"
                  />
                }
                description="使用 SOFAStack 中间件来快速构建分布式后端应用"
                value="SOFABoot"
              />
              <CheckCard
                title="Node JS"
                avatar={
                  <Avatar
                    src="https://gw.alipayobjects.com/zos/bmw-prod/d12c3392-61fa-489e-a82c-71de0f888a8e.svg"
                    size="large"
                  />
                }
                description="使用前后端统一的语言方案快速构建后端应用"
                value="NodeJS"
              />
            </CheckCard.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>CheckCard 与 Form 集成说明：</h4>
        <ul>
          <li>
            <strong>Form.Item</strong>: 将 CheckCard.Group 包装在 Form.Item
            中作为表单控件
          </li>
          <li>
            <strong>name</strong>: Form.Item 的 name 属性用于标识表单字段
          </li>
          <li>
            <strong>value</strong>: CheckCard 的 value 属性作为选项值
          </li>
        </ul>
        <h4>Form 相关 Props：</h4>
        <ul>
          <li>
            <strong>form</strong>: Form 实例，通过 Form.useForm() 创建
          </li>
          <li>
            <strong>onFinish</strong>: 表单提交完成时的回调函数
          </li>
          <li>
            <strong>layout</strong>: 表单布局方式，'vertical' 表示垂直布局
          </li>
        </ul>
        <h4>CheckCard.Group 在表单中的特点：</h4>
        <ul>
          <li>
            <strong>自动绑定</strong>: 自动与 Form 的 name 字段绑定
          </li>
          <li>
            <strong>值收集</strong>: 选中的 CheckCard 的 value
            会自动收集到表单数据中
          </li>
          <li>
            <strong>验证支持</strong>: 支持 Form 的验证规则
          </li>
          <li>
            <strong>样式适配</strong>: 可以通过 style 属性适配表单布局
          </li>
        </ul>
        <h4>Avatar 组件 Props：</h4>
        <ul>
          <li>
            <strong>src</strong>: 头像图片地址
          </li>
          <li>
            <strong>size</strong>: 头像尺寸，'large' 表示大尺寸
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

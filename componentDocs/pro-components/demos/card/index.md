

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard title="Card Group Expanded" ghost gutter={8} collapsible>
        <ProCard layout="center" variant="outlined">
          Card Content
        </ProCard>
        <ProCard layout="center" variant="outlined">
          Card Content
        </ProCard>
        <ProCard layout="center" variant="outlined">
          Card Content
        </ProCard>
      </ProCard>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        title="Title"
        extra="extra"
        tooltip="This is a tooltip"
        style={{ maxWidth: 300 }}
        variant="outlined"
      >
        Content
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角操作区域，可以是字符串或 React
            节点
          </li>
          <li>
            <strong>tooltip</strong>: 卡片的提示信息
          </li>
          <li>
            <strong>style</strong>: 卡片的样式对象
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined'
            表示带边框的卡片样式
          </li>
          <li>
            <strong>children</strong>: 卡片内容区域
          </li>
        </ul>
        <h4>Variant 说明：</h4>
        <ul>
          <li>
            <strong>outlined</strong>: 带边框的卡片样式，适合需要明确边界的场景
          </li>
          <li>
            <strong>filled</strong>: 填充式卡片样式，背景色填充
          </li>
          <li>
            <strong>elevated</strong>: 提升式卡片样式，带有阴影效果
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

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Space } from 'antd';

const Demo = () => {
  return (
    <>
      <Space>
        <ProCard
          title="Actions"
          style={{ maxWidth: 300 }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </ProCard>

        <ProCard
          title="Standalone Actions"
          style={{ maxWidth: 300 }}
          variant="outlined"
          actions={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
                flex: 1,
                gap: 8,
              }}
            >
              <SettingOutlined key="setting" />
              Settings
            </div>
          }
        >
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </ProCard>

        <ProCard
          variant="outlined"
          title="No Actions"
          style={{ maxWidth: 300 }}
        >
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </ProCard>
      </Space>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
          </li>
          <li>
            <strong>actions</strong>:
            卡片操作区域，可以是数组（多个操作按钮）或单个 React 节点
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，可选值：'outlined' |
            'filled' | 'elevated'
          </li>
          <li>
            <strong>style</strong>: 卡片的样式对象
          </li>
          <li>
            <strong>children</strong>: 卡片内容区域
          </li>
        </ul>
        <h4>Actions 使用说明：</h4>
        <ul>
          <li>
            <strong>数组形式</strong>: 传入 React
            节点数组，每个元素会渲染为一个操作按钮
          </li>
          <li>
            <strong>单个节点</strong>: 传入单个 React
            节点，可以自定义操作区域的布局和样式
          </li>
          <li>
            <strong>不设置</strong>: 如果不设置 actions
            属性，卡片底部不会显示操作区域
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <ProCard
      title="Title"
      extra="extra"
      tooltip="This is a tooltip"
      style={{ maxWidth: 300 }}
      headerBordered
    >
      Content
    </ProCard>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        title="Horizontal Inner Card"
        variant="outlined"
        headerBordered
        gutter={16}
      >
        <ProCard title="Inner Card Title" type="inner" variant="outlined">
          Inner Card Content
        </ProCard>
        <ProCard title="Inner Card Title" type="inner" variant="outlined">
          Inner Card Content
        </ProCard>
      </ProCard>

      <ProCard
        title="Vertical Inner Card"
        variant="outlined"
        headerBordered
        direction="column"
        gutter={[0, 16]}
        style={{ marginBlockStart: 8 }}
      >
        <ProCard title="Inner Card Title" type="inner" variant="outlined">
          Inner Card Content
        </ProCard>
        <ProCard title="Inner Card Title" type="inner" variant="outlined">
          Inner Card Content
        </ProCard>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Inner 类型 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>type</strong>: 卡片类型，'inner' 表示内部卡片
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
          <li>
            <strong>gutter</strong>: 间距设置，可以是数字或数组
          </li>
          <li>
            <strong>direction</strong>: 排列方向，'column' 表示垂直排列
          </li>
        </ul>
        <h4>Type="inner" 特点：</h4>
        <ul>
          <li>
            <strong>内部卡片</strong>: 作为其他卡片的子卡片使用
          </li>
          <li>
            <strong>视觉层次</strong>: 与父卡片形成视觉层次关系
          </li>
          <li>
            <strong>样式适配</strong>: 样式会自动适配父卡片的主题
          </li>
        </ul>
        <h4>Gutter 间距配置：</h4>
        <ul>
          <li>
            <strong>数字值</strong>: 如 gutter={16}，设置统一的间距
          </li>
          <li>
            <strong>数组值</strong>: 如 gutter={[0, 16]}，分别设置水平和垂直间距
          </li>
          <li>
            <strong>响应式</strong>: 间距会根据屏幕尺寸自动调整
          </li>
        </ul>
        <h4>Direction 方向配置：</h4>
        <ul>
          <li>
            <strong>row</strong>: 水平排列（默认）
          </li>
          <li>
            <strong>column</strong>: 垂直排列
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>水平布局</strong>: 内部卡片水平排列，适合并排展示
          </li>
          <li>
            <strong>垂直布局</strong>: 内部卡片垂直排列，适合堆叠展示
          </li>
          <li>
            <strong>间距控制</strong>: 通过 gutter 控制卡片之间的间距
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>分组展示</strong>: 将相关内容分组展示
          </li>
          <li>
            <strong>详细信息</strong>: 在父卡片中展示详细信息
          </li>
          <li>
            <strong>配置面板</strong>: 构建复杂的配置面板
          </li>
          <li>
            <strong>仪表盘</strong>: 构建数据仪表盘
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>层次清晰</strong>: 确保父子卡片的层次关系清晰
          </li>
          <li>
            <strong>内容相关</strong>: 内部卡片的内容应该与父卡片相关
          </li>
          <li>
            <strong>间距合理</strong>: 设置合适的间距，避免过于拥挤或稀疏
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        direction="column"
        ghost
        gutter={{
          xs: 8,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
          xxl: 8,
        }}
      >
        <ProCard layout="center" variant="outlined">
          colSpan - 24
        </ProCard>
        <ProCard
          colSpan={{
            xs: 24,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 12,
            xxl: 24,
          }}
          layout="center"
          variant="outlined"
        >
          colSpan - 12
        </ProCard>
        <ProCard
          colSpan={{
            xs: 24,
            sm: 12,
            md: 8,
            lg: 6,
          }}
          layout="center"
          variant="outlined"
        >
          colSpan - 8
        </ProCard>
        <ProCard colSpan={0} layout="center" variant="outlined">
          colSpan - 0
        </ProCard>
      </ProCard>
      <ProCard gutter={8} title="24 grids" style={{ marginBlockStart: 8 }}>
        <ProCard colSpan={12} layout="center" variant="outlined">
          colSpan-12
        </ProCard>
        <ProCard colSpan={6} layout="center" variant="outlined">
          colSpan-6
        </ProCard>
        <ProCard colSpan={6} layout="center" variant="outlined">
          colSpan-6
        </ProCard>
      </ProCard>
      <ProCard style={{ marginBlockStart: 8 }} gutter={8} ghost>
        <ProCard colSpan="200px" layout="center" variant="outlined">
          colSpan - 200px
        </ProCard>
        <ProCard layout="center" variant="outlined">
          Auto
        </ProCard>
      </ProCard>
      <ProCard style={{ marginBlockStart: 8 }} gutter={8} ghost>
        <ProCard variant="outlined" layout="center">
          Auto
        </ProCard>
        <ProCard colSpan="30%" variant="outlined">
          colSpan - 30%
        </ProCard>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard ColSpan 配置 Props 说明：</h4>
        <ul>
          <li>
            <strong>direction</strong>: 排列方向，'column' 表示垂直排列
          </li>
          <li>
            <strong>ghost</strong>: 是否使用幽灵模式，无背景和边框
          </li>
          <li>
            <strong>gutter</strong>: 间距设置，支持响应式配置
          </li>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
        </ul>
        <h4>子卡片配置：</h4>
        <ul>
          <li>
            <strong>colSpan</strong>: 列跨度，支持多种配置方式
          </li>
          <li>
            <strong>layout</strong>: 布局方式，'center' 表示居中对齐
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
        </ul>
        <h4>ColSpan 配置方式：</h4>
        <ul>
          <li>
            <strong>数字值</strong>: colSpan={12} 使用 24 栅格系统
          </li>
          <li>
            <strong>响应式对象</strong>: 根据屏幕尺寸设置不同的列数
          </li>
          <li>
            <strong>像素值</strong>: colSpan="200px" 固定宽度
          </li>
          <li>
            <strong>百分比</strong>: colSpan="30%" 相对宽度
          </li>
          <li>
            <strong>零值</strong>: colSpan={0} 隐藏卡片
          </li>
        </ul>
        <h4>响应式断点配置：</h4>
        <ul>
          <li>
            <strong>xs</strong>: 超小屏幕 (&lt;576px)
          </li>
          <li>
            <strong>sm</strong>: 小屏幕 (≥576px)
          </li>
          <li>
            <strong>md</strong>: 中等屏幕 (≥768px)
          </li>
          <li>
            <strong>lg</strong>: 大屏幕 (≥992px)
          </li>
          <li>
            <strong>xl</strong>: 超大屏幕 (≥1200px)
          </li>
          <li>
            <strong>xxl</strong>: 超超大屏幕 (≥1600px)
          </li>
        </ul>
        <h4>布局特点：</h4>
        <ul>
          <li>
            <strong>24 栅格系统</strong>: 使用数字值时，总列数应该为 24
          </li>
          <li>
            <strong>自动宽度</strong>: 不设置 colSpan 时自动填充剩余空间
          </li>
          <li>
            <strong>固定宽度</strong>: 使用像素值时宽度固定不变
          </li>
          <li>
            <strong>相对宽度</strong>: 使用百分比时宽度随容器变化
          </li>
          <li>
            <strong>隐藏卡片</strong>: colSpan={0} 时卡片完全隐藏
          </li>
        </ul>
        <h4>Ghost 模式特点：</h4>
        <ul>
          <li>
            <strong>无背景</strong>: 卡片没有背景色
          </li>
          <li>
            <strong>无边框</strong>: 卡片没有边框
          </li>
          <li>
            <strong>透明效果</strong>: 适合作为布局容器
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>响应式布局</strong>: 构建响应式的卡片网格
          </li>
          <li>
            <strong>固定布局</strong>: 使用固定宽度构建布局
          </li>
          <li>
            <strong>弹性布局</strong>: 使用百分比构建弹性布局
          </li>
          <li>
            <strong>条件显示</strong>: 使用 colSpan={0} 条件隐藏卡片
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>栅格计算</strong>: 使用数字值时确保总列数为 24
          </li>
          <li>
            <strong>响应式设计</strong>: 在不同断点下测试布局效果
          </li>
          <li>
            <strong>混合使用</strong>: 结合多种配置方式构建复杂布局
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

import type { ProCardTabsProps } from '@ant-design/pro-components';
import { ProCard } from '@ant-design/pro-components';
import { Select, Space } from 'antd';
import { useState } from 'react';

const { Option } = Select;

const Demo = () => {
  const [tab, setTab] = useState('tab2');
  const [tabPlacement, setTabPlacement] =
    useState<ProCardTabsProps['tabPlacement']>('top');

  return (
    <>
      <div>
        <Space style={{ marginBlockEnd: 16 }}>
          Tab placement：
          <Select
            value={tabPlacement}
            onChange={(value) => setTabPlacement(value)}
            popupMatchSelectWidth={false}
          >
            <Option value="top">top</Option>
            <Option value="bottom">bottom</Option>
            <Option value="start">start</Option>
            <Option value="end">end</Option>
          </Select>
        </Space>
        <ProCard
          tabs={{
            tabPlacement,
            activeKey: tab,
            items: [
              {
                label: `Product One`,
                key: 'tab1',
                children: `Content One`,
              },
              {
                label: `Product Two`,
                key: 'tab2',
                children: `Content Two`,
              },
              {
                label: `Product Three`,
                key: 'tab3',
                children: `Content Three`,
              },
            ],
            onChange: (key) => {
              setTab(key);
            },
          }}
        />
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Tabs 动态位置 Props 说明：</h4>
        <ul>
          <li>
            <strong>tabs.tabPlacement</strong>: 标签页位置，可选值：'top' |
            'bottom' | 'start' | 'end'
          </li>
          <li>
            <strong>tabs.activeKey</strong>: 当前激活的标签页 key
          </li>
          <li>
            <strong>tabs.items</strong>: 标签页配置数组
          </li>
          <li>
            <strong>tabs.onChange</strong>: 标签页切换时的回调函数
          </li>
        </ul>
        <h4>Tab Position 位置说明：</h4>
        <ul>
          <li>
            <strong>top</strong>: 标签页显示在内容上方（默认）
          </li>
          <li>
            <strong>bottom</strong>: 标签页显示在内容下方
          </li>
          <li>
            <strong>start</strong>: 标签页显示在内容开始侧（LTR 为左侧，RTL
            为右侧）
          </li>
          <li>
            <strong>end</strong>: 标签页显示在内容结束侧（LTR 为右侧，RTL
            为左侧）
          </li>
        </ul>
        <h4>Select 组件配置：</h4>
        <ul>
          <li>
            <strong>value</strong>: 当前选中的值
          </li>
          <li>
            <strong>onChange</strong>: 值改变时的回调函数
          </li>
          <li>
            <strong>popupMatchSelectWidth</strong>:
            下拉菜单宽度是否与选择框宽度一致
          </li>
        </ul>
        <h4>状态管理：</h4>
        <ul>
          <li>
            <strong>tab</strong>: 使用 useState 管理当前激活的标签页
          </li>
          <li>
            <strong>tabPlacement</strong>: 使用 useState 管理标签页位置
          </li>
          <li>
            <strong>动态切换</strong>: 通过 Select 组件动态切换标签页位置
          </li>
        </ul>
        <h4>交互特点：</h4>
        <ul>
          <li>
            <strong>位置切换</strong>: 可以实时切换标签页的显示位置
          </li>
          <li>
            <strong>状态保持</strong>: 切换位置时保持当前激活的标签页
          </li>
          <li>
            <strong>响应式适配</strong>: 不同位置适合不同的屏幕尺寸
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>布局测试</strong>: 测试不同标签页位置的显示效果
          </li>
          <li>
            <strong>响应式设计</strong>: 根据屏幕尺寸选择合适的标签页位置
          </li>
          <li>
            <strong>用户偏好</strong>: 允许用户自定义标签页位置
          </li>
          <li>
            <strong>内容展示</strong>: 根据内容特点选择合适的标签页位置
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>位置选择</strong>: 根据内容长度和屏幕空间选择合适的位置
          </li>
          <li>
            <strong>用户体验</strong>: 考虑用户的阅读习惯和操作便利性
          </li>
          <li>
            <strong>响应式考虑</strong>: 在不同设备上测试标签页位置的显示效果
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        style={{ marginBlockStart: 8 }}
        gutter={[16, 16]}
        wrap
        title="Wrap"
      >
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          variant="outlined"
        >
          Col
        </ProCard>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard 多行布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>gutter</strong>: 间距设置，[16, 16] 表示水平和垂直间距都是
            16px
          </li>
          <li>
            <strong>wrap</strong>: 是否允许换行，布尔值
          </li>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
        </ul>
        <h4>子卡片配置：</h4>
        <ul>
          <li>
            <strong>colSpan</strong>: 响应式栅格列数配置对象
          </li>
          <li>
            <strong>layout</strong>: 布局方式，'center' 表示居中对齐
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
        </ul>
        <h4>响应式 ColSpan 配置：</h4>
        <ul>
          <li>
            <strong>xs</strong>: 超小屏幕 (&lt;576px)，占 24 列（全宽）
          </li>
          <li>
            <strong>sm</strong>: 小屏幕 (≥576px)，占 12 列（半宽）
          </li>
          <li>
            <strong>md</strong>: 中等屏幕 (≥768px)，占 12 列（半宽）
          </li>
          <li>
            <strong>lg</strong>: 大屏幕 (≥992px)，占 12 列（半宽）
          </li>
          <li>
            <strong>xl</strong>: 超大屏幕 (≥1200px)，占 12 列（半宽）
          </li>
        </ul>
        <h4>Wrap 换行特点：</h4>
        <ul>
          <li>
            <strong>自动换行</strong>: 当子卡片总宽度超过容器宽度时自动换行
          </li>
          <li>
            <strong>响应式换行</strong>: 在不同屏幕尺寸下自动调整换行
          </li>
          <li>
            <strong>间距保持</strong>: 换行后保持设定的间距
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>小屏幕</strong>: 每个卡片占满宽度，垂直排列
          </li>
          <li>
            <strong>大屏幕</strong>: 每行显示两个卡片，水平排列
          </li>
          <li>
            <strong>自动换行</strong>: 超出容器宽度的卡片自动换到下一行
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>响应式布局</strong>: 构建响应式的卡片网格
          </li>
          <li>
            <strong>产品展示</strong>: 展示产品列表或卡片
          </li>
          <li>
            <strong>数据展示</strong>: 展示多个数据卡片
          </li>
          <li>
            <strong>仪表盘</strong>: 构建响应式仪表盘
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>响应式设计</strong>: 确保在不同屏幕尺寸下都有良好的显示效果
          </li>
          <li>
            <strong>间距合理</strong>: 设置合适的间距，避免过于拥挤或稀疏
          </li>
          <li>
            <strong>内容一致</strong>: 确保子卡片的内容高度相对一致
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

import { ProCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { Statistic } from 'antd';
import { useState } from 'react';

const { Divider } = ProCard;

const Demo = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard.Group
        title="Core Metrics"
        direction={responsive ? 'column' : 'row'}
      >
        <ProCard>
          <Statistic title="Today's UV" value={79.0} precision={2} />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="Frozen Amount" value={112893.0} precision={2} />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic
            title="Information Completeness"
            value={93}
            suffix="/ 100"
          />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="Frozen Amount" value={112893.0} />
        </ProCard>
      </ProCard.Group>
    </RcResizeObserver>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        tabs={{
          type: 'card',
          items: [
            {
              key: 'tab1',
              label: 'Product One',
              children: 'Content One',
            },
            {
              key: 'tab2',
              label: 'Product Two',
              children: 'Content Two',
            },
          ],
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
        <h4>ProCard Tabs Card 类型 Props 说明：</h4>
        <ul>
          <li>
            <strong>tabs.type</strong>: 标签页类型，'card' 表示卡片式标签页
          </li>
          <li>
            <strong>tabs.items</strong>: 标签页配置数组
          </li>
        </ul>
        <h4>Tab Item 配置：</h4>
        <ul>
          <li>
            <strong>key</strong>: 标签页的唯一标识
          </li>
          <li>
            <strong>label</strong>: 标签页标题
          </li>
          <li>
            <strong>children</strong>: 标签页内容
          </li>
        </ul>
        <h4>Card 类型特点：</h4>
        <ul>
          <li>
            <strong>卡片样式</strong>: 标签页以卡片形式显示
          </li>
          <li>
            <strong>视觉分离</strong>: 每个标签页都有独立的卡片边框
          </li>
          <li>
            <strong>突出显示</strong>: 当前选中的标签页更加突出
          </li>
        </ul>
        <h4>与其他类型的区别：</h4>
        <ul>
          <li>
            <strong>line 类型</strong>: 默认类型，使用下划线标识当前标签
          </li>
          <li>
            <strong>card 类型</strong>: 使用卡片样式，视觉分离更明显
          </li>
          <li>
            <strong>editable-card 类型</strong>: 可编辑的卡片式标签页
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>产品展示</strong>: 展示不同产品的详细信息
          </li>
          <li>
            <strong>功能模块</strong>: 展示不同的功能模块
          </li>
          <li>
            <strong>内容分类</strong>: 对内容进行分类展示
          </li>
          <li>
            <strong>设置页面</strong>: 不同设置选项的展示
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>标签清晰</strong>: 确保标签标题清晰易懂
          </li>
          <li>
            <strong>内容相关</strong>: 确保标签页内容与标题相关
          </li>
          <li>
            <strong>数量控制</strong>: 避免过多的标签页影响用户体验
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard style={{ maxWidth: 300 }} hoverable variant="outlined">
        Content
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Hoverable Props 说明：</h4>
        <ul>
          <li>
            <strong>hoverable</strong>: 是否启用悬停效果，布尔值
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象，设置最大宽度
          </li>
          <li>
            <strong>children</strong>: 卡片内容
          </li>
        </ul>
        <h4>Hoverable 特点：</h4>
        <ul>
          <li>
            <strong>悬停效果</strong>: 鼠标悬停时显示阴影和边框效果
          </li>
          <li>
            <strong>交互反馈</strong>: 提供视觉反馈，增强用户体验
          </li>
          <li>
            <strong>可点击提示</strong>: 暗示卡片可以点击或交互
          </li>
        </ul>
        <h4>Variant 变体说明：</h4>
        <ul>
          <li>
            <strong>outlined</strong>: 带边框的卡片样式
          </li>
          <li>
            <strong>filled</strong>: 填充式卡片样式
          </li>
          <li>
            <strong>elevated</strong>: 提升式卡片样式，带有阴影
          </li>
        </ul>
        <h4>悬停效果：</h4>
        <ul>
          <li>
            <strong>阴影变化</strong>: 悬停时阴影加深或出现
          </li>
          <li>
            <strong>边框变化</strong>: 边框颜色或样式发生变化
          </li>
          <li>
            <strong>背景变化</strong>: 背景色可能发生轻微变化
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>可点击卡片</strong>: 需要点击交互的卡片
          </li>
          <li>
            <strong>导航卡片</strong>: 作为导航链接的卡片
          </li>
          <li>
            <strong>选择卡片</strong>: 需要选择的卡片
          </li>
          <li>
            <strong>产品卡片</strong>: 产品展示卡片
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>交互一致性</strong>: 确保悬停效果与实际的交互行为一致
          </li>
          <li>
            <strong>视觉层次</strong>: 使用悬停效果突出重要的卡片
          </li>
          <li>
            <strong>用户体验</strong>: 提供清晰的交互反馈
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard split="vertical">
        <ProCard title="Left Details" colSpan="30%">
          Left Content
        </ProCard>
        <ProCard title="Left and Right Columns with Title" headerBordered>
          <div style={{ height: 360 }}>Right Content</div>
        </ProCard>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Split 布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>split</strong>: 分割方式，'vertical' 表示垂直分割
          </li>
          <li>
            <strong>children</strong>: ProCard 子组件
          </li>
        </ul>
        <h4>ProCard 子组件配置：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>colSpan</strong>: 栅格列数，可以是百分比字符串如 '30%'
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
          <li>
            <strong>children</strong>: 卡片内容
          </li>
        </ul>
        <h4>ColSpan 百分比特点：</h4>
        <ul>
          <li>
            <strong>百分比控制</strong>: 使用百分比精确控制宽度比例
          </li>
          <li>
            <strong>响应式适配</strong>: 百分比会根据容器宽度自动调整
          </li>
          <li>
            <strong>灵活布局</strong>: 比固定栅格数更灵活的布局控制
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>左侧卡片</strong>: 占 30% 宽度，显示详细信息
          </li>
          <li>
            <strong>右侧卡片</strong>: 占剩余 70% 宽度，显示主要内容
          </li>
          <li>
            <strong>垂直分割</strong>: 两个卡片垂直排列
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>详情页面</strong>: 左侧显示详细信息，右侧显示主要内容
          </li>
          <li>
            <strong>编辑页面</strong>: 左侧显示表单，右侧显示预览
          </li>
          <li>
            <strong>列表页面</strong>: 左侧显示筛选条件，右侧显示列表
          </li>
          <li>
            <strong>仪表盘</strong>: 左侧显示导航，右侧显示内容
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>比例合理</strong>: 根据内容重要性合理分配宽度比例
          </li>
          <li>
            <strong>响应式考虑</strong>: 在小屏幕上可能需要调整布局
          </li>
          <li>
            <strong>视觉平衡</strong>: 确保整体布局的视觉平衡
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard gutter={[16, 16]}>
        <ProCard colSpan="30%" title="title" headerBordered variant="outlined">
          300px
        </ProCard>
        <ProCard variant="outlined">Auto</ProCard>
      </ProCard>

      <ProCard
        gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}
        style={{ marginBlockStart: 16 }}
      >
        <ProCard variant="outlined">Responsive</ProCard>
        <ProCard variant="outlined">Responsive</ProCard>
        <ProCard variant="outlined">Responsive</ProCard>
      </ProCard>

      <ProCard gutter={16} style={{ marginBlockStart: 16 }}>
        <ProCard variant="outlined">Auto</ProCard>
        <ProCard variant="outlined">Auto</ProCard>
        <ProCard variant="outlined">Auto</ProCard>
      </ProCard>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard style={{ maxWidth: 300 }}>Content</ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Headless Props 说明：</h4>
        <ul>
          <li>
            <strong>style</strong>: 卡片样式对象，设置最大宽度
          </li>
          <li>
            <strong>children</strong>: 卡片内容
          </li>
        </ul>
        <h4>Headless 特点：</h4>
        <ul>
          <li>
            <strong>无标题</strong>: 不设置 title 属性，卡片没有标题区域
          </li>
          <li>
            <strong>简洁设计</strong>: 只显示内容区域，界面更加简洁
          </li>
          <li>
            <strong>灵活布局</strong>: 适合作为容器组件使用
          </li>
        </ul>
        <h4>样式配置：</h4>
        <ul>
          <li>
            <strong>maxWidth</strong>: 设置最大宽度，避免在大屏幕上过宽
          </li>
          <li>
            <strong>响应式</strong>: 在小屏幕上会自动调整宽度
          </li>
        </ul>
        <h4>与其他类型的区别：</h4>
        <ul>
          <li>
            <strong>有标题卡片</strong>: 设置 title 属性，显示标题区域
          </li>
          <li>
            <strong>无标题卡片</strong>: 不设置 title 属性，只显示内容
          </li>
          <li>
            <strong>分割卡片</strong>: 使用 split 属性进行分割布局
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>内容容器</strong>: 作为内容的容器组件
          </li>
          <li>
            <strong>布局组件</strong>: 用于页面布局和内容分组
          </li>
          <li>
            <strong>信息展示</strong>: 展示简单的信息内容
          </li>
          <li>
            <strong>表单容器</strong>: 作为表单的容器组件
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>内容清晰</strong>: 确保内容本身能够表达其用途
          </li>
          <li>
            <strong>样式合理</strong>: 根据内容设置合适的样式
          </li>
          <li>
            <strong>响应式设计</strong>: 考虑在不同屏幕尺寸下的显示效果
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        title="Title"
        extra="extra"
        layout="center"
        direction="column"
        style={{ maxWidth: 300, height: 200 }}
      >
        <div>123</div>
        <div>456</div>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Layout Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角额外内容
          </li>
          <li>
            <strong>layout</strong>: 布局方式，'center' 表示居中对齐
          </li>
          <li>
            <strong>direction</strong>: 排列方向，'column' 表示垂直排列
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象，设置尺寸
          </li>
          <li>
            <strong>children</strong>: 卡片内容
          </li>
        </ul>
        <h4>Layout 布局方式：</h4>
        <ul>
          <li>
            <strong>default</strong>: 默认布局，左对齐
          </li>
          <li>
            <strong>center</strong>: 居中对齐
          </li>
          <li>
            <strong>right</strong>: 右对齐
          </li>
        </ul>
        <h4>Direction 排列方向：</h4>
        <ul>
          <li>
            <strong>row</strong>: 水平排列（默认）
          </li>
          <li>
            <strong>column</strong>: 垂直排列
          </li>
        </ul>
        <h4>样式配置：</h4>
        <ul>
          <li>
            <strong>maxWidth</strong>: 设置最大宽度，避免在大屏幕上过宽
          </li>
          <li>
            <strong>height</strong>: 设置固定高度，确保一致的视觉效果
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>居中对齐</strong>: 内容在卡片中居中对齐
          </li>
          <li>
            <strong>垂直排列</strong>: 子元素垂直堆叠排列
          </li>
          <li>
            <strong>固定尺寸</strong>: 卡片有固定的宽度和高度
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>信息展示</strong>: 居中展示重要信息
          </li>
          <li>
            <strong>状态卡片</strong>: 展示状态或统计信息
          </li>
          <li>
            <strong>操作面板</strong>: 构建操作按钮面板
          </li>
          <li>
            <strong>仪表盘</strong>: 构建数据仪表盘组件
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>内容简洁</strong>: 居中对齐适合简洁的内容
          </li>
          <li>
            <strong>尺寸合理</strong>: 设置合适的尺寸，避免内容溢出
          </li>
          <li>
            <strong>视觉平衡</strong>: 确保整体布局的视觉平衡
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard loading style={{ maxWidth: 300 }}>
        Content
      </ProCard>

      <ProCard
        loading
        style={{ maxWidth: 300, marginBlockStart: 16 }}
        layout="center"
      >
        Content
      </ProCard>

      <ProCard
        title="Custom Loading"
        extra="extra"
        loading={<div>Loading</div>}
        style={{ maxWidth: 300, marginBlockStart: 16 }}
      >
        Content
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Loading Props 说明：</h4>
        <ul>
          <li>
            <strong>loading</strong>: 加载状态，可以是布尔值或 React 节点
          </li>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角额外内容
          </li>
          <li>
            <strong>layout</strong>: 布局方式，'center' 表示居中对齐
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
          <li>
            <strong>children</strong>: 卡片内容
          </li>
        </ul>
        <h4>Loading 使用方式：</h4>
        <ul>
          <li>
            <strong>布尔值</strong>: loading={true} 使用默认的骨架屏效果
          </li>
          <li>
            <strong>React 节点</strong>: loading={'{'}{' '}
            &lt;div&gt;Loading&lt;/div&gt; {'}'} 使用自定义加载内容
          </li>
        </ul>
        <h4>默认 Loading 效果：</h4>
        <ul>
          <li>
            <strong>骨架屏</strong>: 显示骨架屏效果，模拟内容加载
          </li>
          <li>
            <strong>禁用交互</strong>: 加载状态下卡片不可交互
          </li>
          <li>
            <strong>视觉反馈</strong>: 提供明确的加载状态指示
          </li>
        </ul>
        <h4>自定义 Loading：</h4>
        <ul>
          <li>
            <strong>自定义内容</strong>: 可以传入任何 React 节点作为加载内容
          </li>
          <li>
            <strong>样式控制</strong>: 完全控制加载内容的样式和布局
          </li>
          <li>
            <strong>品牌一致性</strong>: 使用符合品牌风格的加载内容
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据加载</strong>: 异步获取数据时显示
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
          <li>
            <strong>自定义设计</strong>: 根据业务需求设计合适的加载内容
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

import {
  ProCard,
  ProFormGroup,
  ProFormSwitch,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        title="Default Size"
        variant="outlined"
        extra={
          <ProFormGroup>
            <ProFormSwitch
              name="Enable"
              noStyle
              checkedChildren={'Enabled'}
              unCheckedChildren={'Disabled'}
            />
          </ProFormGroup>
        }
        tooltip="This is a tooltip"
        style={{ maxWidth: 300 }}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard
        title="Card with Shadow"
        extra="extra"
        tooltip="This is a tooltip"
        style={{ maxWidth: 300 }}
        boxShadow
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard
        title="Small Size Card"
        extra="extra"
        tooltip="This is a tooltip"
        style={{ maxWidth: 300, marginBlockStart: 24 }}
        size="small"
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，可选值：'outlined' |
            'filled' | 'elevated'
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角操作区域，可以是字符串或 React
            节点
          </li>
          <li>
            <strong>tooltip</strong>: 卡片的提示信息
          </li>
          <li>
            <strong>style</strong>: 卡片的样式对象
          </li>
          <li>
            <strong>boxShadow</strong>: 是否显示阴影效果，布尔值
          </li>
          <li>
            <strong>size</strong>: 卡片尺寸，可选值：'default' | 'small'
          </li>
          <li>
            <strong>children</strong>: 卡片内容区域
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

import { ProCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const Demo = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard
          title="Complex Split"
          extra="September 28, 2019"
          variant="outlined"
          headerBordered
          split={responsive ? 'horizontal' : 'vertical'}
        >
          <ProCard split="horizontal">
            <ProCard split="horizontal">
              <ProCard split={responsive ? 'horizontal' : 'vertical'}>
                <ProCard title="Yesterday's Total Traffic">123</ProCard>
                <ProCard title="Total Traffic This Month">234</ProCard>
                <ProCard title="Total Traffic This Year">345</ProCard>
              </ProCard>
              <ProCard split="vertical">
                <ProCard title="Ongoing Experiments">12/56</ProCard>
                <ProCard title="Total Historical Experiments">134</ProCard>
              </ProCard>
            </ProCard>
            <ProCard title="Traffic Trends">
              <div>Chart</div>
              <div>Chart</div>
              <div>Chart</div>
              <div>Chart</div>
              <div>Chart</div>
            </ProCard>
          </ProCard>
          <ProCard title="Traffic Usage">Right Side Content</ProCard>
        </ProCard>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard 复杂分割布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角额外内容
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
          <li>
            <strong>split</strong>: 分割方式，根据响应式状态动态调整
          </li>
        </ul>
        <h4>Split 分割方式：</h4>
        <ul>
          <li>
            <strong>horizontal</strong>: 水平分割，子卡片上下排列
          </li>
          <li>
            <strong>vertical</strong>: 垂直分割，子卡片左右排列
          </li>
          <li>
            <strong>响应式切换</strong>: 根据屏幕尺寸自动切换分割方式
          </li>
        </ul>
        <h4>嵌套布局结构：</h4>
        <ul>
          <li>
            <strong>外层卡片</strong>: 主要容器，控制整体分割方向
          </li>
          <li>
            <strong>中层卡片</strong>: 中间容器，处理水平分割
          </li>
          <li>
            <strong>内层卡片</strong>: 内层容器，处理垂直分割
          </li>
          <li>
            <strong>叶子卡片</strong>: 最终的内容卡片
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换布局
          </li>
          <li>
            <strong>动态分割</strong>: 根据屏幕尺寸自动调整分割方向
          </li>
          <li>
            <strong>实时监听</strong>: 使用 ResizeObserver 实时监听容器大小变化
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>大屏幕</strong>: 使用垂直分割，充分利用水平空间
          </li>
          <li>
            <strong>小屏幕</strong>: 使用水平分割，适合垂直滚动
          </li>
          <li>
            <strong>嵌套结构</strong>: 支持多层嵌套的分割布局
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据仪表盘</strong>: 构建复杂的数据展示界面
          </li>
          <li>
            <strong>报表系统</strong>: 展示多维度统计报表
          </li>
          <li>
            <strong>监控面板</strong>: 构建系统监控面板
          </li>
          <li>
            <strong>分析页面</strong>: 数据分析和可视化页面
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>合理嵌套</strong>: 避免过深的嵌套层级
          </li>
          <li>
            <strong>响应式设计</strong>: 确保在不同屏幕尺寸下都有良好的显示效果
          </li>
          <li>
            <strong>性能优化</strong>: 大量数据时考虑虚拟化或分页
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

import { ProCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { Button, Space, Steps } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [current, setCurrent] = useState(0);
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard
          split={responsive ? 'horizontal' : 'vertical'}
          variant="outlined"
          style={{ height: 320 }}
        >
          <ProCard colSpan={responsive ? 24 : 6}>
            <Steps
              direction={responsive ? 'horizontal' : 'vertical'}
              size="small"
              current={current}
              style={{ height: '100%' }}
              items={[
                { title: 'Fill in Basic Information' },
                { title: 'Configure Template' },
                { title: 'Configure Access' },
                { title: 'Configure Deployment and Scheduling' },
                { title: 'Preview' },
              ]}
            />
          </ProCard>
          <ProCard title="Traffic Usage" colSpan={responsive ? 24 : 18}>
            <Space>
              <Button
                key="primary"
                type="primary"
                onClick={() => setCurrent(current + 1)}
                disabled={current === 5}
              >
                Next
              </Button>
              <Button
                key="pre"
                onClick={() => setCurrent(current - 1)}
                disabled={current === 0}
              >
                Previous
              </Button>
            </Space>
          </ProCard>
        </ProCard>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard 与 Steps 集成 Props 说明：</h4>
        <ul>
          <li>
            <strong>split</strong>: 分割方式，根据响应式状态自动调整
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象，设置固定高度
          </li>
          <li>
            <strong>colSpan</strong>: 栅格列数，响应式时自动调整
          </li>
        </ul>
        <h4>Steps 组件配置：</h4>
        <ul>
          <li>
            <strong>direction</strong>: 步骤条方向，响应式时自动调整
          </li>
          <li>
            <strong>size</strong>: 步骤条尺寸，'small' 表示小尺寸
          </li>
          <li>
            <strong>current</strong>: 当前步骤索引
          </li>
          <li>
            <strong>items</strong>: 步骤项配置数组
          </li>
          <li>
            <strong>style</strong>: 步骤条样式，设置高度为 100%
          </li>
        </ul>
        <h4>Button 组件配置：</h4>
        <ul>
          <li>
            <strong>type</strong>: 按钮类型，'primary' 表示主要按钮
          </li>
          <li>
            <strong>onClick</strong>: 点击事件处理函数
          </li>
          <li>
            <strong>disabled</strong>: 是否禁用按钮
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换布局
          </li>
          <li>
            <strong>分割方式</strong>: 大屏幕使用垂直分割，小屏幕使用水平分割
          </li>
          <li>
            <strong>步骤方向</strong>: 大屏幕使用垂直步骤，小屏幕使用水平步骤
          </li>
          <li>
            <strong>栅格适配</strong>: colSpan 根据响应式状态自动调整
          </li>
        </ul>
        <h4>状态管理：</h4>
        <ul>
          <li>
            <strong>current</strong>: 使用 useState 管理当前步骤状态
          </li>
          <li>
            <strong>responsive</strong>: 使用 useState 管理响应式状态
          </li>
          <li>
            <strong>步骤控制</strong>: 通过按钮控制步骤的前进和后退
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>向导页面</strong>: 构建多步骤的向导页面
          </li>
          <li>
            <strong>配置页面</strong>: 分步骤配置复杂功能
          </li>
          <li>
            <strong>表单流程</strong>: 多步骤表单填写流程
          </li>
          <li>
            <strong>设置页面</strong>: 分步骤设置系统参数
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>步骤清晰</strong>: 确保每个步骤的标题清晰易懂
          </li>
          <li>
            <strong>状态同步</strong>: 确保 Steps 和按钮状态同步
          </li>
          <li>
            <strong>响应式设计</strong>: 确保在不同屏幕尺寸下都有良好的体验
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

import { RightOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useState } from 'react';

export default () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 24,
          gap: 12,
        }}
      >
        <ProCard
          title="Collapsible"
          headerBordered
          collapsible
          defaultCollapsed
          onCollapse={(collapse) => console.log(collapse)}
          extra={
            <Button
              size="small"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Submit
            </Button>
          }
        >
          Content
        </ProCard>
        <ProCard
          title="Collapsible"
          headerBordered
          collapsible="icon"
          defaultCollapsed
          onCollapse={(collapse) => console.log(collapse)}
          extra={
            <Button
              size="small"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Submit
            </Button>
          }
        >
          Content
        </ProCard>
        <ProCard
          title="Collapsible"
          variant="outlined"
          headerBordered
          collapsible
          defaultCollapsed
          onCollapse={(collapse) => console.log(collapse)}
          extra={
            <Button
              size="small"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Submit
            </Button>
          }
        >
          Content
        </ProCard>
        <ProCard
          variant="outlined"
          size="small"
          title="Collapsible"
          headerBordered
          collapsible
          defaultCollapsed
          onCollapse={(collapse) => console.log(collapse)}
          extra={
            <Button
              size="small"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Submit
            </Button>
          }
        >
          Content
        </ProCard>
        <ProCard
          title="Collapsible - Controlled Custom"
          extra={
            <RightOutlined
              rotate={!collapsed ? 90 : undefined}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            />
          }
          style={{ marginBlockStart: 16 }}
          headerBordered
          collapsed={collapsed}
        >
          Content
        </ProCard>
        <ProCard
          title="Collapsible - Custom Icon"
          collapsibleIconRender={({
            collapsed: buildInCollapsed,
          }: {
            collapsed: boolean;
          }) =>
            buildInCollapsed ? <span>Collapse - </span> : <span>Expand - </span>
          }
          style={{ marginBlockStart: 16 }}
          headerBordered
          collapsible
          defaultCollapsed
        >
          Content
        </ProCard>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard 可折叠功能 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
          <li>
            <strong>collapsible</strong>: 是否可折叠，可以是布尔值或 'icon'
          </li>
          <li>
            <strong>defaultCollapsed</strong>: 默认是否折叠
          </li>
          <li>
            <strong>collapsed</strong>: 受控的折叠状态
          </li>
          <li>
            <strong>onCollapse</strong>: 折叠状态变化回调函数
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角额外内容
          </li>
        </ul>
        <h4>Collapsible 配置方式：</h4>
        <ul>
          <li>
            <strong>布尔值</strong>: collapsible={true} 显示默认折叠图标
          </li>
          <li>
            <strong>字符串</strong>: collapsible="icon" 只显示图标
          </li>
          <li>
            <strong>自定义控制</strong>: 使用 collapsed 属性进行受控
          </li>
        </ul>
        <h4>自定义图标配置：</h4>
        <ul>
          <li>
            <strong>collapsibleIconRender</strong>: 自定义折叠图标的渲染函数
          </li>
          <li>
            <strong>参数</strong>: 接收 {'{'} collapsed: boolean {'}'} 对象
          </li>
          <li>
            <strong>返回值</strong>: 返回自定义的 React 节点
          </li>
        </ul>
        <h4>事件处理：</h4>
        <ul>
          <li>
            <strong>onCollapse</strong>: 折叠状态变化时触发
          </li>
          <li>
            <strong>stopPropagation</strong>: 阻止事件冒泡，避免触发折叠
          </li>
          <li>
            <strong>自定义控制</strong>: 通过状态管理控制折叠状态
          </li>
        </ul>
        <h4>样式变体：</h4>
        <ul>
          <li>
            <strong>variant</strong>: 'outlined' 表示带边框样式
          </li>
          <li>
            <strong>size</strong>: 'small' 表示小尺寸
          </li>
          <li>
            <strong>headerBordered</strong>: 显示头部边框
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>信息展示</strong>: 可折叠的信息面板
          </li>
          <li>
            <strong>设置面板</strong>: 可折叠的设置选项
          </li>
          <li>
            <strong>详情展开</strong>: 点击展开查看详细信息
          </li>
          <li>
            <strong>空间节省</strong>: 节省页面空间，按需展开
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>默认状态</strong>: 根据内容重要性设置默认折叠状态
          </li>
          <li>
            <strong>图标设计</strong>: 设计清晰的折叠/展开图标
          </li>
          <li>
            <strong>交互反馈</strong>: 提供明确的交互反馈
          </li>
          <li>
            <strong>状态管理</strong>: 合理管理折叠状态
          </li>
        </ul>
      </div>
    </>
  );
};

import { ProCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const Demo = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard
          title="Left and Right Columns with Title"
          extra="September 28, 2019"
          split={responsive ? 'horizontal' : 'vertical'}
          variant="outlined"
          headerBordered
        >
          <ProCard title="Left Details" colSpan="50%">
            <div style={{ height: 360 }}>Left Content</div>
          </ProCard>
          <ProCard title="Traffic Usage">
            <div style={{ height: 360 }}>Right Content</div>
          </ProCard>
        </ProCard>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard 响应式分割布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角额外内容
          </li>
          <li>
            <strong>split</strong>: 分割方式，根据响应式状态动态调整
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
        </ul>
        <h4>子卡片配置：</h4>
        <ul>
          <li>
            <strong>title</strong>: 子卡片标题
          </li>
          <li>
            <strong>colSpan</strong>: 列跨度，'50%' 表示占 50% 宽度
          </li>
          <li>
            <strong>children</strong>: 卡片内容
          </li>
        </ul>
        <h4>响应式分割特点：</h4>
        <ul>
          <li>
            <strong>大屏幕</strong>: 使用 'vertical' 分割，左右布局
          </li>
          <li>
            <strong>小屏幕</strong>: 使用 'horizontal' 分割，上下布局
          </li>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换布局
          </li>
        </ul>
        <h4>ColSpan 配置：</h4>
        <ul>
          <li>
            <strong>百分比</strong>: '50%' 表示占容器宽度的 50%
          </li>
          <li>
            <strong>自动宽度</strong>: 不设置 colSpan 时自动填充剩余空间
          </li>
          <li>
            <strong>响应式适配</strong>: 在不同分割方式下自动调整
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>垂直分割</strong>: 左右两列，左列占 50%，右列自动填充
          </li>
          <li>
            <strong>水平分割</strong>: 上下两行，每行占满宽度
          </li>
          <li>
            <strong>固定高度</strong>: 内容区域设置固定高度 360px
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>详情页面</strong>: 左侧详情，右侧操作或统计
          </li>
          <li>
            <strong>对比展示</strong>: 左右对比不同数据或内容
          </li>
          <li>
            <strong>表单布局</strong>: 左侧表单，右侧预览
          </li>
          <li>
            <strong>监控面板</strong>: 左右分屏显示不同监控数据
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>内容平衡</strong>: 确保左右内容的重要性和长度相对平衡
          </li>
          <li>
            <strong>响应式测试</strong>: 在不同屏幕尺寸下测试布局效果
          </li>
          <li>
            <strong>高度一致</strong>: 设置一致的高度确保视觉统一
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard style={{ marginBlockStart: 8 }} gutter={8} title="24 Grid">
        <ProCard
          colSpan={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
        <ProCard
          colSpan={{ xs: 20, sm: 16, md: 12, lg: 8, xl: 4 }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
        <ProCard
          colSpan={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
      </ProCard>
      <ProCard
        style={{ marginBlockStart: 8 }}
        gutter={8}
        title="Specified Width px"
      >
        <ProCard
          colSpan={{
            xs: '50px',
            sm: '100px',
            md: '200px',
            lg: '300px',
            xl: '400px',
          }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
        <ProCard layout="center" variant="outlined">
          Auto
        </ProCard>
      </ProCard>

      <ProCard
        style={{ marginBlockStart: 8 }}
        gutter={8}
        title="Specified Width Percentage"
      >
        <ProCard layout="center" variant="outlined">
          Auto
        </ProCard>
        <ProCard
          layout="center"
          colSpan={{
            xs: '10%',
            sm: '20%',
            md: '30%',
            lg: '40%',
            xl: '50%',
          }}
          variant="outlined"
        >
          Col - Percentage
        </ProCard>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard 响应式布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>gutter</strong>: 间距设置，数字值表示统一的间距
          </li>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
        </ul>
        <h4>子卡片配置：</h4>
        <ul>
          <li>
            <strong>colSpan</strong>: 响应式栅格列数配置，支持多种格式
          </li>
          <li>
            <strong>layout</strong>: 布局方式，'center' 表示居中对齐
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
        </ul>
        <h4>ColSpan 配置方式：</h4>
        <ul>
          <li>
            <strong>数字值</strong>: 如 {'{'} xs: 2, sm: 4 {'}'}，使用 24
            栅格系统
          </li>
          <li>
            <strong>像素值</strong>: 如 {'{'} xs: '50px', sm: '100px' {'}'}{' '}
            ，固定宽度
          </li>
          <li>
            <strong>百分比</strong>: 如 {'{'} xs: '10%', sm: '20%' {'}'}
            ，相对宽度
          </li>
        </ul>
        <h4>响应式断点：</h4>
        <ul>
          <li>
            <strong>xs</strong>: 超小屏幕 (&lt;576px)
          </li>
          <li>
            <strong>sm</strong>: 小屏幕 (≥576px)
          </li>
          <li>
            <strong>md</strong>: 中等屏幕 (≥768px)
          </li>
          <li>
            <strong>lg</strong>: 大屏幕 (≥992px)
          </li>
          <li>
            <strong>xl</strong>: 超大屏幕 (≥1200px)
          </li>
        </ul>
        <h4>布局特点：</h4>
        <ul>
          <li>
            <strong>24 栅格系统</strong>: 使用数字值时，总列数应该为 24
          </li>
          <li>
            <strong>固定宽度</strong>: 使用像素值时，卡片宽度固定不变
          </li>
          <li>
            <strong>相对宽度</strong>: 使用百分比时，卡片宽度随容器变化
          </li>
          <li>
            <strong>自动宽度</strong>: 不设置 colSpan 时，卡片自动填充剩余空间
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>栅格布局</strong>: 使用数字值构建响应式栅格
          </li>
          <li>
            <strong>固定布局</strong>: 使用像素值构建固定宽度的布局
          </li>
          <li>
            <strong>弹性布局</strong>: 使用百分比构建弹性布局
          </li>
          <li>
            <strong>混合布局</strong>: 结合多种配置方式构建复杂布局
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>栅格计算</strong>: 使用数字值时确保总列数为 24
          </li>
          <li>
            <strong>响应式设计</strong>: 在不同断点下测试布局效果
          </li>
          <li>
            <strong>性能考虑</strong>: 避免过于复杂的响应式配置
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard title="Card Group Expanded" ghost gutter={8} collapsible>
        <ProCard layout="center" variant="outlined">
          Card Content
        </ProCard>
        <ProCard layout="center" variant="outlined">
          Card Content
        </ProCard>
        <ProCard layout="center" variant="outlined">
          Card Content
        </ProCard>
      </ProCard>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        title="Title"
        extra="extra"
        tooltip="This is a tooltip"
        style={{ maxWidth: 300 }}
        variant="outlined"
      >
        Content
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角操作区域，可以是字符串或 React
            节点
          </li>
          <li>
            <strong>tooltip</strong>: 卡片的提示信息
          </li>
          <li>
            <strong>style</strong>: 卡片的样式对象
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined'
            表示带边框的卡片样式
          </li>
          <li>
            <strong>children</strong>: 卡片内容区域
          </li>
        </ul>
        <h4>Variant 说明：</h4>
        <ul>
          <li>
            <strong>outlined</strong>: 带边框的卡片样式，适合需要明确边界的场景
          </li>
          <li>
            <strong>filled</strong>: 填充式卡片样式，背景色填充
          </li>
          <li>
            <strong>elevated</strong>: 提升式卡片样式，带有阴影效果
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

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Space } from 'antd';

const Demo = () => {
  return (
    <>
      <Space>
        <ProCard
          title="Actions"
          style={{ maxWidth: 300 }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </ProCard>

        <ProCard
          title="Standalone Actions"
          style={{ maxWidth: 300 }}
          variant="outlined"
          actions={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
                flex: 1,
                gap: 8,
              }}
            >
              <SettingOutlined key="setting" />
              Settings
            </div>
          }
        >
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </ProCard>

        <ProCard
          variant="outlined"
          title="No Actions"
          style={{ maxWidth: 300 }}
        >
          <div>Card content</div>
          <div>Card content</div>
          <div>Card content</div>
        </ProCard>
      </Space>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
          </li>
          <li>
            <strong>actions</strong>:
            卡片操作区域，可以是数组（多个操作按钮）或单个 React 节点
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，可选值：'outlined' |
            'filled' | 'elevated'
          </li>
          <li>
            <strong>style</strong>: 卡片的样式对象
          </li>
          <li>
            <strong>children</strong>: 卡片内容区域
          </li>
        </ul>
        <h4>Actions 使用说明：</h4>
        <ul>
          <li>
            <strong>数组形式</strong>: 传入 React
            节点数组，每个元素会渲染为一个操作按钮
          </li>
          <li>
            <strong>单个节点</strong>: 传入单个 React
            节点，可以自定义操作区域的布局和样式
          </li>
          <li>
            <strong>不设置</strong>: 如果不设置 actions
            属性，卡片底部不会显示操作区域
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <ProCard
      title="Title"
      extra="extra"
      tooltip="This is a tooltip"
      style={{ maxWidth: 300 }}
      headerBordered
    >
      Content
    </ProCard>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        title="Horizontal Inner Card"
        variant="outlined"
        headerBordered
        gutter={16}
      >
        <ProCard title="Inner Card Title" type="inner" variant="outlined">
          Inner Card Content
        </ProCard>
        <ProCard title="Inner Card Title" type="inner" variant="outlined">
          Inner Card Content
        </ProCard>
      </ProCard>

      <ProCard
        title="Vertical Inner Card"
        variant="outlined"
        headerBordered
        direction="column"
        gutter={[0, 16]}
        style={{ marginBlockStart: 8 }}
      >
        <ProCard title="Inner Card Title" type="inner" variant="outlined">
          Inner Card Content
        </ProCard>
        <ProCard title="Inner Card Title" type="inner" variant="outlined">
          Inner Card Content
        </ProCard>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Inner 类型 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>type</strong>: 卡片类型，'inner' 表示内部卡片
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
          <li>
            <strong>gutter</strong>: 间距设置，可以是数字或数组
          </li>
          <li>
            <strong>direction</strong>: 排列方向，'column' 表示垂直排列
          </li>
        </ul>
        <h4>Type="inner" 特点：</h4>
        <ul>
          <li>
            <strong>内部卡片</strong>: 作为其他卡片的子卡片使用
          </li>
          <li>
            <strong>视觉层次</strong>: 与父卡片形成视觉层次关系
          </li>
          <li>
            <strong>样式适配</strong>: 样式会自动适配父卡片的主题
          </li>
        </ul>
        <h4>Gutter 间距配置：</h4>
        <ul>
          <li>
            <strong>数字值</strong>: 如 gutter={16}，设置统一的间距
          </li>
          <li>
            <strong>数组值</strong>: 如 gutter={[0, 16]}，分别设置水平和垂直间距
          </li>
          <li>
            <strong>响应式</strong>: 间距会根据屏幕尺寸自动调整
          </li>
        </ul>
        <h4>Direction 方向配置：</h4>
        <ul>
          <li>
            <strong>row</strong>: 水平排列（默认）
          </li>
          <li>
            <strong>column</strong>: 垂直排列
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>水平布局</strong>: 内部卡片水平排列，适合并排展示
          </li>
          <li>
            <strong>垂直布局</strong>: 内部卡片垂直排列，适合堆叠展示
          </li>
          <li>
            <strong>间距控制</strong>: 通过 gutter 控制卡片之间的间距
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>分组展示</strong>: 将相关内容分组展示
          </li>
          <li>
            <strong>详细信息</strong>: 在父卡片中展示详细信息
          </li>
          <li>
            <strong>配置面板</strong>: 构建复杂的配置面板
          </li>
          <li>
            <strong>仪表盘</strong>: 构建数据仪表盘
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>层次清晰</strong>: 确保父子卡片的层次关系清晰
          </li>
          <li>
            <strong>内容相关</strong>: 内部卡片的内容应该与父卡片相关
          </li>
          <li>
            <strong>间距合理</strong>: 设置合适的间距，避免过于拥挤或稀疏
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        direction="column"
        ghost
        gutter={{
          xs: 8,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
          xxl: 8,
        }}
      >
        <ProCard layout="center" variant="outlined">
          colSpan - 24
        </ProCard>
        <ProCard
          colSpan={{
            xs: 24,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 12,
            xxl: 24,
          }}
          layout="center"
          variant="outlined"
        >
          colSpan - 12
        </ProCard>
        <ProCard
          colSpan={{
            xs: 24,
            sm: 12,
            md: 8,
            lg: 6,
          }}
          layout="center"
          variant="outlined"
        >
          colSpan - 8
        </ProCard>
        <ProCard colSpan={0} layout="center" variant="outlined">
          colSpan - 0
        </ProCard>
      </ProCard>
      <ProCard gutter={8} title="24 grids" style={{ marginBlockStart: 8 }}>
        <ProCard colSpan={12} layout="center" variant="outlined">
          colSpan-12
        </ProCard>
        <ProCard colSpan={6} layout="center" variant="outlined">
          colSpan-6
        </ProCard>
        <ProCard colSpan={6} layout="center" variant="outlined">
          colSpan-6
        </ProCard>
      </ProCard>
      <ProCard style={{ marginBlockStart: 8 }} gutter={8} ghost>
        <ProCard colSpan="200px" layout="center" variant="outlined">
          colSpan - 200px
        </ProCard>
        <ProCard layout="center" variant="outlined">
          Auto
        </ProCard>
      </ProCard>
      <ProCard style={{ marginBlockStart: 8 }} gutter={8} ghost>
        <ProCard variant="outlined" layout="center">
          Auto
        </ProCard>
        <ProCard colSpan="30%" variant="outlined">
          colSpan - 30%
        </ProCard>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard ColSpan 配置 Props 说明：</h4>
        <ul>
          <li>
            <strong>direction</strong>: 排列方向，'column' 表示垂直排列
          </li>
          <li>
            <strong>ghost</strong>: 是否使用幽灵模式，无背景和边框
          </li>
          <li>
            <strong>gutter</strong>: 间距设置，支持响应式配置
          </li>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
        </ul>
        <h4>子卡片配置：</h4>
        <ul>
          <li>
            <strong>colSpan</strong>: 列跨度，支持多种配置方式
          </li>
          <li>
            <strong>layout</strong>: 布局方式，'center' 表示居中对齐
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
        </ul>
        <h4>ColSpan 配置方式：</h4>
        <ul>
          <li>
            <strong>数字值</strong>: colSpan={12} 使用 24 栅格系统
          </li>
          <li>
            <strong>响应式对象</strong>: 根据屏幕尺寸设置不同的列数
          </li>
          <li>
            <strong>像素值</strong>: colSpan="200px" 固定宽度
          </li>
          <li>
            <strong>百分比</strong>: colSpan="30%" 相对宽度
          </li>
          <li>
            <strong>零值</strong>: colSpan={0} 隐藏卡片
          </li>
        </ul>
        <h4>响应式断点配置：</h4>
        <ul>
          <li>
            <strong>xs</strong>: 超小屏幕 (&lt;576px)
          </li>
          <li>
            <strong>sm</strong>: 小屏幕 (≥576px)
          </li>
          <li>
            <strong>md</strong>: 中等屏幕 (≥768px)
          </li>
          <li>
            <strong>lg</strong>: 大屏幕 (≥992px)
          </li>
          <li>
            <strong>xl</strong>: 超大屏幕 (≥1200px)
          </li>
          <li>
            <strong>xxl</strong>: 超超大屏幕 (≥1600px)
          </li>
        </ul>
        <h4>布局特点：</h4>
        <ul>
          <li>
            <strong>24 栅格系统</strong>: 使用数字值时，总列数应该为 24
          </li>
          <li>
            <strong>自动宽度</strong>: 不设置 colSpan 时自动填充剩余空间
          </li>
          <li>
            <strong>固定宽度</strong>: 使用像素值时宽度固定不变
          </li>
          <li>
            <strong>相对宽度</strong>: 使用百分比时宽度随容器变化
          </li>
          <li>
            <strong>隐藏卡片</strong>: colSpan={0} 时卡片完全隐藏
          </li>
        </ul>
        <h4>Ghost 模式特点：</h4>
        <ul>
          <li>
            <strong>无背景</strong>: 卡片没有背景色
          </li>
          <li>
            <strong>无边框</strong>: 卡片没有边框
          </li>
          <li>
            <strong>透明效果</strong>: 适合作为布局容器
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>响应式布局</strong>: 构建响应式的卡片网格
          </li>
          <li>
            <strong>固定布局</strong>: 使用固定宽度构建布局
          </li>
          <li>
            <strong>弹性布局</strong>: 使用百分比构建弹性布局
          </li>
          <li>
            <strong>条件显示</strong>: 使用 colSpan={0} 条件隐藏卡片
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>栅格计算</strong>: 使用数字值时确保总列数为 24
          </li>
          <li>
            <strong>响应式设计</strong>: 在不同断点下测试布局效果
          </li>
          <li>
            <strong>混合使用</strong>: 结合多种配置方式构建复杂布局
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

import type { ProCardTabsProps } from '@ant-design/pro-components';
import { ProCard } from '@ant-design/pro-components';
import { Select, Space } from 'antd';
import { useState } from 'react';

const { Option } = Select;

const Demo = () => {
  const [tab, setTab] = useState('tab2');
  const [tabPlacement, setTabPlacement] =
    useState<ProCardTabsProps['tabPlacement']>('top');

  return (
    <>
      <div>
        <Space style={{ marginBlockEnd: 16 }}>
          Tab placement：
          <Select
            value={tabPlacement}
            onChange={(value) => setTabPlacement(value)}
            popupMatchSelectWidth={false}
          >
            <Option value="top">top</Option>
            <Option value="bottom">bottom</Option>
            <Option value="start">start</Option>
            <Option value="end">end</Option>
          </Select>
        </Space>
        <ProCard
          tabs={{
            tabPlacement,
            activeKey: tab,
            items: [
              {
                label: `Product One`,
                key: 'tab1',
                children: `Content One`,
              },
              {
                label: `Product Two`,
                key: 'tab2',
                children: `Content Two`,
              },
              {
                label: `Product Three`,
                key: 'tab3',
                children: `Content Three`,
              },
            ],
            onChange: (key) => {
              setTab(key);
            },
          }}
        />
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Tabs 动态位置 Props 说明：</h4>
        <ul>
          <li>
            <strong>tabs.tabPlacement</strong>: 标签页位置，可选值：'top' |
            'bottom' | 'start' | 'end'
          </li>
          <li>
            <strong>tabs.activeKey</strong>: 当前激活的标签页 key
          </li>
          <li>
            <strong>tabs.items</strong>: 标签页配置数组
          </li>
          <li>
            <strong>tabs.onChange</strong>: 标签页切换时的回调函数
          </li>
        </ul>
        <h4>Tab Position 位置说明：</h4>
        <ul>
          <li>
            <strong>top</strong>: 标签页显示在内容上方（默认）
          </li>
          <li>
            <strong>bottom</strong>: 标签页显示在内容下方
          </li>
          <li>
            <strong>start</strong>: 标签页显示在内容开始侧（LTR 为左侧，RTL
            为右侧）
          </li>
          <li>
            <strong>end</strong>: 标签页显示在内容结束侧（LTR 为右侧，RTL
            为左侧）
          </li>
        </ul>
        <h4>Select 组件配置：</h4>
        <ul>
          <li>
            <strong>value</strong>: 当前选中的值
          </li>
          <li>
            <strong>onChange</strong>: 值改变时的回调函数
          </li>
          <li>
            <strong>popupMatchSelectWidth</strong>:
            下拉菜单宽度是否与选择框宽度一致
          </li>
        </ul>
        <h4>状态管理：</h4>
        <ul>
          <li>
            <strong>tab</strong>: 使用 useState 管理当前激活的标签页
          </li>
          <li>
            <strong>tabPlacement</strong>: 使用 useState 管理标签页位置
          </li>
          <li>
            <strong>动态切换</strong>: 通过 Select 组件动态切换标签页位置
          </li>
        </ul>
        <h4>交互特点：</h4>
        <ul>
          <li>
            <strong>位置切换</strong>: 可以实时切换标签页的显示位置
          </li>
          <li>
            <strong>状态保持</strong>: 切换位置时保持当前激活的标签页
          </li>
          <li>
            <strong>响应式适配</strong>: 不同位置适合不同的屏幕尺寸
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>布局测试</strong>: 测试不同标签页位置的显示效果
          </li>
          <li>
            <strong>响应式设计</strong>: 根据屏幕尺寸选择合适的标签页位置
          </li>
          <li>
            <strong>用户偏好</strong>: 允许用户自定义标签页位置
          </li>
          <li>
            <strong>内容展示</strong>: 根据内容特点选择合适的标签页位置
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>位置选择</strong>: 根据内容长度和屏幕空间选择合适的位置
          </li>
          <li>
            <strong>用户体验</strong>: 考虑用户的阅读习惯和操作便利性
          </li>
          <li>
            <strong>响应式考虑</strong>: 在不同设备上测试标签页位置的显示效果
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        style={{ marginBlockStart: 8 }}
        gutter={[16, 16]}
        wrap
        title="Wrap"
      >
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          variant="outlined"
        >
          Col
        </ProCard>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard 多行布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>gutter</strong>: 间距设置，[16, 16] 表示水平和垂直间距都是
            16px
          </li>
          <li>
            <strong>wrap</strong>: 是否允许换行，布尔值
          </li>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
        </ul>
        <h4>子卡片配置：</h4>
        <ul>
          <li>
            <strong>colSpan</strong>: 响应式栅格列数配置对象
          </li>
          <li>
            <strong>layout</strong>: 布局方式，'center' 表示居中对齐
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
        </ul>
        <h4>响应式 ColSpan 配置：</h4>
        <ul>
          <li>
            <strong>xs</strong>: 超小屏幕 (&lt;576px)，占 24 列（全宽）
          </li>
          <li>
            <strong>sm</strong>: 小屏幕 (≥576px)，占 12 列（半宽）
          </li>
          <li>
            <strong>md</strong>: 中等屏幕 (≥768px)，占 12 列（半宽）
          </li>
          <li>
            <strong>lg</strong>: 大屏幕 (≥992px)，占 12 列（半宽）
          </li>
          <li>
            <strong>xl</strong>: 超大屏幕 (≥1200px)，占 12 列（半宽）
          </li>
        </ul>
        <h4>Wrap 换行特点：</h4>
        <ul>
          <li>
            <strong>自动换行</strong>: 当子卡片总宽度超过容器宽度时自动换行
          </li>
          <li>
            <strong>响应式换行</strong>: 在不同屏幕尺寸下自动调整换行
          </li>
          <li>
            <strong>间距保持</strong>: 换行后保持设定的间距
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>小屏幕</strong>: 每个卡片占满宽度，垂直排列
          </li>
          <li>
            <strong>大屏幕</strong>: 每行显示两个卡片，水平排列
          </li>
          <li>
            <strong>自动换行</strong>: 超出容器宽度的卡片自动换到下一行
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>响应式布局</strong>: 构建响应式的卡片网格
          </li>
          <li>
            <strong>产品展示</strong>: 展示产品列表或卡片
          </li>
          <li>
            <strong>数据展示</strong>: 展示多个数据卡片
          </li>
          <li>
            <strong>仪表盘</strong>: 构建响应式仪表盘
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>响应式设计</strong>: 确保在不同屏幕尺寸下都有良好的显示效果
          </li>
          <li>
            <strong>间距合理</strong>: 设置合适的间距，避免过于拥挤或稀疏
          </li>
          <li>
            <strong>内容一致</strong>: 确保子卡片的内容高度相对一致
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

import { ProCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { Statistic } from 'antd';
import { useState } from 'react';

const { Divider } = ProCard;

const Demo = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard.Group
        title="Core Metrics"
        direction={responsive ? 'column' : 'row'}
      >
        <ProCard>
          <Statistic title="Today's UV" value={79.0} precision={2} />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="Frozen Amount" value={112893.0} precision={2} />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic
            title="Information Completeness"
            value={93}
            suffix="/ 100"
          />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="Frozen Amount" value={112893.0} />
        </ProCard>
      </ProCard.Group>
    </RcResizeObserver>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        tabs={{
          type: 'card',
          items: [
            {
              key: 'tab1',
              label: 'Product One',
              children: 'Content One',
            },
            {
              key: 'tab2',
              label: 'Product Two',
              children: 'Content Two',
            },
          ],
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
        <h4>ProCard Tabs Card 类型 Props 说明：</h4>
        <ul>
          <li>
            <strong>tabs.type</strong>: 标签页类型，'card' 表示卡片式标签页
          </li>
          <li>
            <strong>tabs.items</strong>: 标签页配置数组
          </li>
        </ul>
        <h4>Tab Item 配置：</h4>
        <ul>
          <li>
            <strong>key</strong>: 标签页的唯一标识
          </li>
          <li>
            <strong>label</strong>: 标签页标题
          </li>
          <li>
            <strong>children</strong>: 标签页内容
          </li>
        </ul>
        <h4>Card 类型特点：</h4>
        <ul>
          <li>
            <strong>卡片样式</strong>: 标签页以卡片形式显示
          </li>
          <li>
            <strong>视觉分离</strong>: 每个标签页都有独立的卡片边框
          </li>
          <li>
            <strong>突出显示</strong>: 当前选中的标签页更加突出
          </li>
        </ul>
        <h4>与其他类型的区别：</h4>
        <ul>
          <li>
            <strong>line 类型</strong>: 默认类型，使用下划线标识当前标签
          </li>
          <li>
            <strong>card 类型</strong>: 使用卡片样式，视觉分离更明显
          </li>
          <li>
            <strong>editable-card 类型</strong>: 可编辑的卡片式标签页
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>产品展示</strong>: 展示不同产品的详细信息
          </li>
          <li>
            <strong>功能模块</strong>: 展示不同的功能模块
          </li>
          <li>
            <strong>内容分类</strong>: 对内容进行分类展示
          </li>
          <li>
            <strong>设置页面</strong>: 不同设置选项的展示
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>标签清晰</strong>: 确保标签标题清晰易懂
          </li>
          <li>
            <strong>内容相关</strong>: 确保标签页内容与标题相关
          </li>
          <li>
            <strong>数量控制</strong>: 避免过多的标签页影响用户体验
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard style={{ maxWidth: 300 }} hoverable variant="outlined">
        Content
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Hoverable Props 说明：</h4>
        <ul>
          <li>
            <strong>hoverable</strong>: 是否启用悬停效果，布尔值
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象，设置最大宽度
          </li>
          <li>
            <strong>children</strong>: 卡片内容
          </li>
        </ul>
        <h4>Hoverable 特点：</h4>
        <ul>
          <li>
            <strong>悬停效果</strong>: 鼠标悬停时显示阴影和边框效果
          </li>
          <li>
            <strong>交互反馈</strong>: 提供视觉反馈，增强用户体验
          </li>
          <li>
            <strong>可点击提示</strong>: 暗示卡片可以点击或交互
          </li>
        </ul>
        <h4>Variant 变体说明：</h4>
        <ul>
          <li>
            <strong>outlined</strong>: 带边框的卡片样式
          </li>
          <li>
            <strong>filled</strong>: 填充式卡片样式
          </li>
          <li>
            <strong>elevated</strong>: 提升式卡片样式，带有阴影
          </li>
        </ul>
        <h4>悬停效果：</h4>
        <ul>
          <li>
            <strong>阴影变化</strong>: 悬停时阴影加深或出现
          </li>
          <li>
            <strong>边框变化</strong>: 边框颜色或样式发生变化
          </li>
          <li>
            <strong>背景变化</strong>: 背景色可能发生轻微变化
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>可点击卡片</strong>: 需要点击交互的卡片
          </li>
          <li>
            <strong>导航卡片</strong>: 作为导航链接的卡片
          </li>
          <li>
            <strong>选择卡片</strong>: 需要选择的卡片
          </li>
          <li>
            <strong>产品卡片</strong>: 产品展示卡片
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>交互一致性</strong>: 确保悬停效果与实际的交互行为一致
          </li>
          <li>
            <strong>视觉层次</strong>: 使用悬停效果突出重要的卡片
          </li>
          <li>
            <strong>用户体验</strong>: 提供清晰的交互反馈
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard split="vertical">
        <ProCard title="Left Details" colSpan="30%">
          Left Content
        </ProCard>
        <ProCard title="Left and Right Columns with Title" headerBordered>
          <div style={{ height: 360 }}>Right Content</div>
        </ProCard>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Split 布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>split</strong>: 分割方式，'vertical' 表示垂直分割
          </li>
          <li>
            <strong>children</strong>: ProCard 子组件
          </li>
        </ul>
        <h4>ProCard 子组件配置：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>colSpan</strong>: 栅格列数，可以是百分比字符串如 '30%'
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
          <li>
            <strong>children</strong>: 卡片内容
          </li>
        </ul>
        <h4>ColSpan 百分比特点：</h4>
        <ul>
          <li>
            <strong>百分比控制</strong>: 使用百分比精确控制宽度比例
          </li>
          <li>
            <strong>响应式适配</strong>: 百分比会根据容器宽度自动调整
          </li>
          <li>
            <strong>灵活布局</strong>: 比固定栅格数更灵活的布局控制
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>左侧卡片</strong>: 占 30% 宽度，显示详细信息
          </li>
          <li>
            <strong>右侧卡片</strong>: 占剩余 70% 宽度，显示主要内容
          </li>
          <li>
            <strong>垂直分割</strong>: 两个卡片垂直排列
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>详情页面</strong>: 左侧显示详细信息，右侧显示主要内容
          </li>
          <li>
            <strong>编辑页面</strong>: 左侧显示表单，右侧显示预览
          </li>
          <li>
            <strong>列表页面</strong>: 左侧显示筛选条件，右侧显示列表
          </li>
          <li>
            <strong>仪表盘</strong>: 左侧显示导航，右侧显示内容
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>比例合理</strong>: 根据内容重要性合理分配宽度比例
          </li>
          <li>
            <strong>响应式考虑</strong>: 在小屏幕上可能需要调整布局
          </li>
          <li>
            <strong>视觉平衡</strong>: 确保整体布局的视觉平衡
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard gutter={[16, 16]}>
        <ProCard colSpan="30%" title="title" headerBordered variant="outlined">
          300px
        </ProCard>
        <ProCard variant="outlined">Auto</ProCard>
      </ProCard>

      <ProCard
        gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}
        style={{ marginBlockStart: 16 }}
      >
        <ProCard variant="outlined">Responsive</ProCard>
        <ProCard variant="outlined">Responsive</ProCard>
        <ProCard variant="outlined">Responsive</ProCard>
      </ProCard>

      <ProCard gutter={16} style={{ marginBlockStart: 16 }}>
        <ProCard variant="outlined">Auto</ProCard>
        <ProCard variant="outlined">Auto</ProCard>
        <ProCard variant="outlined">Auto</ProCard>
      </ProCard>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard style={{ maxWidth: 300 }}>Content</ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Headless Props 说明：</h4>
        <ul>
          <li>
            <strong>style</strong>: 卡片样式对象，设置最大宽度
          </li>
          <li>
            <strong>children</strong>: 卡片内容
          </li>
        </ul>
        <h4>Headless 特点：</h4>
        <ul>
          <li>
            <strong>无标题</strong>: 不设置 title 属性，卡片没有标题区域
          </li>
          <li>
            <strong>简洁设计</strong>: 只显示内容区域，界面更加简洁
          </li>
          <li>
            <strong>灵活布局</strong>: 适合作为容器组件使用
          </li>
        </ul>
        <h4>样式配置：</h4>
        <ul>
          <li>
            <strong>maxWidth</strong>: 设置最大宽度，避免在大屏幕上过宽
          </li>
          <li>
            <strong>响应式</strong>: 在小屏幕上会自动调整宽度
          </li>
        </ul>
        <h4>与其他类型的区别：</h4>
        <ul>
          <li>
            <strong>有标题卡片</strong>: 设置 title 属性，显示标题区域
          </li>
          <li>
            <strong>无标题卡片</strong>: 不设置 title 属性，只显示内容
          </li>
          <li>
            <strong>分割卡片</strong>: 使用 split 属性进行分割布局
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>内容容器</strong>: 作为内容的容器组件
          </li>
          <li>
            <strong>布局组件</strong>: 用于页面布局和内容分组
          </li>
          <li>
            <strong>信息展示</strong>: 展示简单的信息内容
          </li>
          <li>
            <strong>表单容器</strong>: 作为表单的容器组件
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>内容清晰</strong>: 确保内容本身能够表达其用途
          </li>
          <li>
            <strong>样式合理</strong>: 根据内容设置合适的样式
          </li>
          <li>
            <strong>响应式设计</strong>: 考虑在不同屏幕尺寸下的显示效果
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        title="Title"
        extra="extra"
        layout="center"
        direction="column"
        style={{ maxWidth: 300, height: 200 }}
      >
        <div>123</div>
        <div>456</div>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Layout Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角额外内容
          </li>
          <li>
            <strong>layout</strong>: 布局方式，'center' 表示居中对齐
          </li>
          <li>
            <strong>direction</strong>: 排列方向，'column' 表示垂直排列
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象，设置尺寸
          </li>
          <li>
            <strong>children</strong>: 卡片内容
          </li>
        </ul>
        <h4>Layout 布局方式：</h4>
        <ul>
          <li>
            <strong>default</strong>: 默认布局，左对齐
          </li>
          <li>
            <strong>center</strong>: 居中对齐
          </li>
          <li>
            <strong>right</strong>: 右对齐
          </li>
        </ul>
        <h4>Direction 排列方向：</h4>
        <ul>
          <li>
            <strong>row</strong>: 水平排列（默认）
          </li>
          <li>
            <strong>column</strong>: 垂直排列
          </li>
        </ul>
        <h4>样式配置：</h4>
        <ul>
          <li>
            <strong>maxWidth</strong>: 设置最大宽度，避免在大屏幕上过宽
          </li>
          <li>
            <strong>height</strong>: 设置固定高度，确保一致的视觉效果
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>居中对齐</strong>: 内容在卡片中居中对齐
          </li>
          <li>
            <strong>垂直排列</strong>: 子元素垂直堆叠排列
          </li>
          <li>
            <strong>固定尺寸</strong>: 卡片有固定的宽度和高度
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>信息展示</strong>: 居中展示重要信息
          </li>
          <li>
            <strong>状态卡片</strong>: 展示状态或统计信息
          </li>
          <li>
            <strong>操作面板</strong>: 构建操作按钮面板
          </li>
          <li>
            <strong>仪表盘</strong>: 构建数据仪表盘组件
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>内容简洁</strong>: 居中对齐适合简洁的内容
          </li>
          <li>
            <strong>尺寸合理</strong>: 设置合适的尺寸，避免内容溢出
          </li>
          <li>
            <strong>视觉平衡</strong>: 确保整体布局的视觉平衡
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard loading style={{ maxWidth: 300 }}>
        Content
      </ProCard>

      <ProCard
        loading
        style={{ maxWidth: 300, marginBlockStart: 16 }}
        layout="center"
      >
        Content
      </ProCard>

      <ProCard
        title="Custom Loading"
        extra="extra"
        loading={<div>Loading</div>}
        style={{ maxWidth: 300, marginBlockStart: 16 }}
      >
        Content
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Loading Props 说明：</h4>
        <ul>
          <li>
            <strong>loading</strong>: 加载状态，可以是布尔值或 React 节点
          </li>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角额外内容
          </li>
          <li>
            <strong>layout</strong>: 布局方式，'center' 表示居中对齐
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
          <li>
            <strong>children</strong>: 卡片内容
          </li>
        </ul>
        <h4>Loading 使用方式：</h4>
        <ul>
          <li>
            <strong>布尔值</strong>: loading={true} 使用默认的骨架屏效果
          </li>
          <li>
            <strong>React 节点</strong>: loading={'{'}{' '}
            &lt;div&gt;Loading&lt;/div&gt; {'}'} 使用自定义加载内容
          </li>
        </ul>
        <h4>默认 Loading 效果：</h4>
        <ul>
          <li>
            <strong>骨架屏</strong>: 显示骨架屏效果，模拟内容加载
          </li>
          <li>
            <strong>禁用交互</strong>: 加载状态下卡片不可交互
          </li>
          <li>
            <strong>视觉反馈</strong>: 提供明确的加载状态指示
          </li>
        </ul>
        <h4>自定义 Loading：</h4>
        <ul>
          <li>
            <strong>自定义内容</strong>: 可以传入任何 React 节点作为加载内容
          </li>
          <li>
            <strong>样式控制</strong>: 完全控制加载内容的样式和布局
          </li>
          <li>
            <strong>品牌一致性</strong>: 使用符合品牌风格的加载内容
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据加载</strong>: 异步获取数据时显示
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
          <li>
            <strong>自定义设计</strong>: 根据业务需求设计合适的加载内容
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

import {
  ProCard,
  ProFormGroup,
  ProFormSwitch,
} from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard
        title="Default Size"
        variant="outlined"
        extra={
          <ProFormGroup>
            <ProFormSwitch
              name="Enable"
              noStyle
              checkedChildren={'Enabled'}
              unCheckedChildren={'Disabled'}
            />
          </ProFormGroup>
        }
        tooltip="This is a tooltip"
        style={{ maxWidth: 300 }}
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard
        title="Card with Shadow"
        extra="extra"
        tooltip="This is a tooltip"
        style={{ maxWidth: 300 }}
        boxShadow
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard
        title="Small Size Card"
        extra="extra"
        tooltip="This is a tooltip"
        style={{ maxWidth: 300, marginBlockStart: 24 }}
        size="small"
      >
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，可选值：'outlined' |
            'filled' | 'elevated'
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角操作区域，可以是字符串或 React
            节点
          </li>
          <li>
            <strong>tooltip</strong>: 卡片的提示信息
          </li>
          <li>
            <strong>style</strong>: 卡片的样式对象
          </li>
          <li>
            <strong>boxShadow</strong>: 是否显示阴影效果，布尔值
          </li>
          <li>
            <strong>size</strong>: 卡片尺寸，可选值：'default' | 'small'
          </li>
          <li>
            <strong>children</strong>: 卡片内容区域
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

import { ProCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const Demo = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard
          title="Complex Split"
          extra="September 28, 2019"
          variant="outlined"
          headerBordered
          split={responsive ? 'horizontal' : 'vertical'}
        >
          <ProCard split="horizontal">
            <ProCard split="horizontal">
              <ProCard split={responsive ? 'horizontal' : 'vertical'}>
                <ProCard title="Yesterday's Total Traffic">123</ProCard>
                <ProCard title="Total Traffic This Month">234</ProCard>
                <ProCard title="Total Traffic This Year">345</ProCard>
              </ProCard>
              <ProCard split="vertical">
                <ProCard title="Ongoing Experiments">12/56</ProCard>
                <ProCard title="Total Historical Experiments">134</ProCard>
              </ProCard>
            </ProCard>
            <ProCard title="Traffic Trends">
              <div>Chart</div>
              <div>Chart</div>
              <div>Chart</div>
              <div>Chart</div>
              <div>Chart</div>
            </ProCard>
          </ProCard>
          <ProCard title="Traffic Usage">Right Side Content</ProCard>
        </ProCard>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard 复杂分割布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角额外内容
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
          <li>
            <strong>split</strong>: 分割方式，根据响应式状态动态调整
          </li>
        </ul>
        <h4>Split 分割方式：</h4>
        <ul>
          <li>
            <strong>horizontal</strong>: 水平分割，子卡片上下排列
          </li>
          <li>
            <strong>vertical</strong>: 垂直分割，子卡片左右排列
          </li>
          <li>
            <strong>响应式切换</strong>: 根据屏幕尺寸自动切换分割方式
          </li>
        </ul>
        <h4>嵌套布局结构：</h4>
        <ul>
          <li>
            <strong>外层卡片</strong>: 主要容器，控制整体分割方向
          </li>
          <li>
            <strong>中层卡片</strong>: 中间容器，处理水平分割
          </li>
          <li>
            <strong>内层卡片</strong>: 内层容器，处理垂直分割
          </li>
          <li>
            <strong>叶子卡片</strong>: 最终的内容卡片
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换布局
          </li>
          <li>
            <strong>动态分割</strong>: 根据屏幕尺寸自动调整分割方向
          </li>
          <li>
            <strong>实时监听</strong>: 使用 ResizeObserver 实时监听容器大小变化
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>大屏幕</strong>: 使用垂直分割，充分利用水平空间
          </li>
          <li>
            <strong>小屏幕</strong>: 使用水平分割，适合垂直滚动
          </li>
          <li>
            <strong>嵌套结构</strong>: 支持多层嵌套的分割布局
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据仪表盘</strong>: 构建复杂的数据展示界面
          </li>
          <li>
            <strong>报表系统</strong>: 展示多维度统计报表
          </li>
          <li>
            <strong>监控面板</strong>: 构建系统监控面板
          </li>
          <li>
            <strong>分析页面</strong>: 数据分析和可视化页面
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>合理嵌套</strong>: 避免过深的嵌套层级
          </li>
          <li>
            <strong>响应式设计</strong>: 确保在不同屏幕尺寸下都有良好的显示效果
          </li>
          <li>
            <strong>性能优化</strong>: 大量数据时考虑虚拟化或分页
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

import { ProCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { Button, Space, Steps } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [current, setCurrent] = useState(0);
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard
          split={responsive ? 'horizontal' : 'vertical'}
          variant="outlined"
          style={{ height: 320 }}
        >
          <ProCard colSpan={responsive ? 24 : 6}>
            <Steps
              direction={responsive ? 'horizontal' : 'vertical'}
              size="small"
              current={current}
              style={{ height: '100%' }}
              items={[
                { title: 'Fill in Basic Information' },
                { title: 'Configure Template' },
                { title: 'Configure Access' },
                { title: 'Configure Deployment and Scheduling' },
                { title: 'Preview' },
              ]}
            />
          </ProCard>
          <ProCard title="Traffic Usage" colSpan={responsive ? 24 : 18}>
            <Space>
              <Button
                key="primary"
                type="primary"
                onClick={() => setCurrent(current + 1)}
                disabled={current === 5}
              >
                Next
              </Button>
              <Button
                key="pre"
                onClick={() => setCurrent(current - 1)}
                disabled={current === 0}
              >
                Previous
              </Button>
            </Space>
          </ProCard>
        </ProCard>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard 与 Steps 集成 Props 说明：</h4>
        <ul>
          <li>
            <strong>split</strong>: 分割方式，根据响应式状态自动调整
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象，设置固定高度
          </li>
          <li>
            <strong>colSpan</strong>: 栅格列数，响应式时自动调整
          </li>
        </ul>
        <h4>Steps 组件配置：</h4>
        <ul>
          <li>
            <strong>direction</strong>: 步骤条方向，响应式时自动调整
          </li>
          <li>
            <strong>size</strong>: 步骤条尺寸，'small' 表示小尺寸
          </li>
          <li>
            <strong>current</strong>: 当前步骤索引
          </li>
          <li>
            <strong>items</strong>: 步骤项配置数组
          </li>
          <li>
            <strong>style</strong>: 步骤条样式，设置高度为 100%
          </li>
        </ul>
        <h4>Button 组件配置：</h4>
        <ul>
          <li>
            <strong>type</strong>: 按钮类型，'primary' 表示主要按钮
          </li>
          <li>
            <strong>onClick</strong>: 点击事件处理函数
          </li>
          <li>
            <strong>disabled</strong>: 是否禁用按钮
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换布局
          </li>
          <li>
            <strong>分割方式</strong>: 大屏幕使用垂直分割，小屏幕使用水平分割
          </li>
          <li>
            <strong>步骤方向</strong>: 大屏幕使用垂直步骤，小屏幕使用水平步骤
          </li>
          <li>
            <strong>栅格适配</strong>: colSpan 根据响应式状态自动调整
          </li>
        </ul>
        <h4>状态管理：</h4>
        <ul>
          <li>
            <strong>current</strong>: 使用 useState 管理当前步骤状态
          </li>
          <li>
            <strong>responsive</strong>: 使用 useState 管理响应式状态
          </li>
          <li>
            <strong>步骤控制</strong>: 通过按钮控制步骤的前进和后退
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>向导页面</strong>: 构建多步骤的向导页面
          </li>
          <li>
            <strong>配置页面</strong>: 分步骤配置复杂功能
          </li>
          <li>
            <strong>表单流程</strong>: 多步骤表单填写流程
          </li>
          <li>
            <strong>设置页面</strong>: 分步骤设置系统参数
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>步骤清晰</strong>: 确保每个步骤的标题清晰易懂
          </li>
          <li>
            <strong>状态同步</strong>: 确保 Steps 和按钮状态同步
          </li>
          <li>
            <strong>响应式设计</strong>: 确保在不同屏幕尺寸下都有良好的体验
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

import { RightOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useState } from 'react';

export default () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 24,
          gap: 12,
        }}
      >
        <ProCard
          title="Collapsible"
          headerBordered
          collapsible
          defaultCollapsed
          onCollapse={(collapse) => console.log(collapse)}
          extra={
            <Button
              size="small"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Submit
            </Button>
          }
        >
          Content
        </ProCard>
        <ProCard
          title="Collapsible"
          headerBordered
          collapsible="icon"
          defaultCollapsed
          onCollapse={(collapse) => console.log(collapse)}
          extra={
            <Button
              size="small"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Submit
            </Button>
          }
        >
          Content
        </ProCard>
        <ProCard
          title="Collapsible"
          variant="outlined"
          headerBordered
          collapsible
          defaultCollapsed
          onCollapse={(collapse) => console.log(collapse)}
          extra={
            <Button
              size="small"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Submit
            </Button>
          }
        >
          Content
        </ProCard>
        <ProCard
          variant="outlined"
          size="small"
          title="Collapsible"
          headerBordered
          collapsible
          defaultCollapsed
          onCollapse={(collapse) => console.log(collapse)}
          extra={
            <Button
              size="small"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Submit
            </Button>
          }
        >
          Content
        </ProCard>
        <ProCard
          title="Collapsible - Controlled Custom"
          extra={
            <RightOutlined
              rotate={!collapsed ? 90 : undefined}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            />
          }
          style={{ marginBlockStart: 16 }}
          headerBordered
          collapsed={collapsed}
        >
          Content
        </ProCard>
        <ProCard
          title="Collapsible - Custom Icon"
          collapsibleIconRender={({
            collapsed: buildInCollapsed,
          }: {
            collapsed: boolean;
          }) =>
            buildInCollapsed ? <span>Collapse - </span> : <span>Expand - </span>
          }
          style={{ marginBlockStart: 16 }}
          headerBordered
          collapsible
          defaultCollapsed
        >
          Content
        </ProCard>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard 可折叠功能 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
          <li>
            <strong>collapsible</strong>: 是否可折叠，可以是布尔值或 'icon'
          </li>
          <li>
            <strong>defaultCollapsed</strong>: 默认是否折叠
          </li>
          <li>
            <strong>collapsed</strong>: 受控的折叠状态
          </li>
          <li>
            <strong>onCollapse</strong>: 折叠状态变化回调函数
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角额外内容
          </li>
        </ul>
        <h4>Collapsible 配置方式：</h4>
        <ul>
          <li>
            <strong>布尔值</strong>: collapsible={true} 显示默认折叠图标
          </li>
          <li>
            <strong>字符串</strong>: collapsible="icon" 只显示图标
          </li>
          <li>
            <strong>自定义控制</strong>: 使用 collapsed 属性进行受控
          </li>
        </ul>
        <h4>自定义图标配置：</h4>
        <ul>
          <li>
            <strong>collapsibleIconRender</strong>: 自定义折叠图标的渲染函数
          </li>
          <li>
            <strong>参数</strong>: 接收 {'{'} collapsed: boolean {'}'} 对象
          </li>
          <li>
            <strong>返回值</strong>: 返回自定义的 React 节点
          </li>
        </ul>
        <h4>事件处理：</h4>
        <ul>
          <li>
            <strong>onCollapse</strong>: 折叠状态变化时触发
          </li>
          <li>
            <strong>stopPropagation</strong>: 阻止事件冒泡，避免触发折叠
          </li>
          <li>
            <strong>自定义控制</strong>: 通过状态管理控制折叠状态
          </li>
        </ul>
        <h4>样式变体：</h4>
        <ul>
          <li>
            <strong>variant</strong>: 'outlined' 表示带边框样式
          </li>
          <li>
            <strong>size</strong>: 'small' 表示小尺寸
          </li>
          <li>
            <strong>headerBordered</strong>: 显示头部边框
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>信息展示</strong>: 可折叠的信息面板
          </li>
          <li>
            <strong>设置面板</strong>: 可折叠的设置选项
          </li>
          <li>
            <strong>详情展开</strong>: 点击展开查看详细信息
          </li>
          <li>
            <strong>空间节省</strong>: 节省页面空间，按需展开
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>默认状态</strong>: 根据内容重要性设置默认折叠状态
          </li>
          <li>
            <strong>图标设计</strong>: 设计清晰的折叠/展开图标
          </li>
          <li>
            <strong>交互反馈</strong>: 提供明确的交互反馈
          </li>
          <li>
            <strong>状态管理</strong>: 合理管理折叠状态
          </li>
        </ul>
      </div>
    </>
  );
};

import { ProCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const Demo = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard
          title="Left and Right Columns with Title"
          extra="September 28, 2019"
          split={responsive ? 'horizontal' : 'vertical'}
          variant="outlined"
          headerBordered
        >
          <ProCard title="Left Details" colSpan="50%">
            <div style={{ height: 360 }}>Left Content</div>
          </ProCard>
          <ProCard title="Traffic Usage">
            <div style={{ height: 360 }}>Right Content</div>
          </ProCard>
        </ProCard>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard 响应式分割布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角额外内容
          </li>
          <li>
            <strong>split</strong>: 分割方式，根据响应式状态动态调整
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
        </ul>
        <h4>子卡片配置：</h4>
        <ul>
          <li>
            <strong>title</strong>: 子卡片标题
          </li>
          <li>
            <strong>colSpan</strong>: 列跨度，'50%' 表示占 50% 宽度
          </li>
          <li>
            <strong>children</strong>: 卡片内容
          </li>
        </ul>
        <h4>响应式分割特点：</h4>
        <ul>
          <li>
            <strong>大屏幕</strong>: 使用 'vertical' 分割，左右布局
          </li>
          <li>
            <strong>小屏幕</strong>: 使用 'horizontal' 分割，上下布局
          </li>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换布局
          </li>
        </ul>
        <h4>ColSpan 配置：</h4>
        <ul>
          <li>
            <strong>百分比</strong>: '50%' 表示占容器宽度的 50%
          </li>
          <li>
            <strong>自动宽度</strong>: 不设置 colSpan 时自动填充剩余空间
          </li>
          <li>
            <strong>响应式适配</strong>: 在不同分割方式下自动调整
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>垂直分割</strong>: 左右两列，左列占 50%，右列自动填充
          </li>
          <li>
            <strong>水平分割</strong>: 上下两行，每行占满宽度
          </li>
          <li>
            <strong>固定高度</strong>: 内容区域设置固定高度 360px
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>详情页面</strong>: 左侧详情，右侧操作或统计
          </li>
          <li>
            <strong>对比展示</strong>: 左右对比不同数据或内容
          </li>
          <li>
            <strong>表单布局</strong>: 左侧表单，右侧预览
          </li>
          <li>
            <strong>监控面板</strong>: 左右分屏显示不同监控数据
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>内容平衡</strong>: 确保左右内容的重要性和长度相对平衡
          </li>
          <li>
            <strong>响应式测试</strong>: 在不同屏幕尺寸下测试布局效果
          </li>
          <li>
            <strong>高度一致</strong>: 设置一致的高度确保视觉统一
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

import { ProCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <ProCard style={{ marginBlockStart: 8 }} gutter={8} title="24 Grid">
        <ProCard
          colSpan={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
        <ProCard
          colSpan={{ xs: 20, sm: 16, md: 12, lg: 8, xl: 4 }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
        <ProCard
          colSpan={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
      </ProCard>
      <ProCard
        style={{ marginBlockStart: 8 }}
        gutter={8}
        title="Specified Width px"
      >
        <ProCard
          colSpan={{
            xs: '50px',
            sm: '100px',
            md: '200px',
            lg: '300px',
            xl: '400px',
          }}
          layout="center"
          variant="outlined"
        >
          Col
        </ProCard>
        <ProCard layout="center" variant="outlined">
          Auto
        </ProCard>
      </ProCard>

      <ProCard
        style={{ marginBlockStart: 8 }}
        gutter={8}
        title="Specified Width Percentage"
      >
        <ProCard layout="center" variant="outlined">
          Auto
        </ProCard>
        <ProCard
          layout="center"
          colSpan={{
            xs: '10%',
            sm: '20%',
            md: '30%',
            lg: '40%',
            xl: '50%',
          }}
          variant="outlined"
        >
          Col - Percentage
        </ProCard>
      </ProCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>ProCard 响应式布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>gutter</strong>: 间距设置，数字值表示统一的间距
          </li>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
        </ul>
        <h4>子卡片配置：</h4>
        <ul>
          <li>
            <strong>colSpan</strong>: 响应式栅格列数配置，支持多种格式
          </li>
          <li>
            <strong>layout</strong>: 布局方式，'center' 表示居中对齐
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
        </ul>
        <h4>ColSpan 配置方式：</h4>
        <ul>
          <li>
            <strong>数字值</strong>: 如 {'{'} xs: 2, sm: 4 {'}'}，使用 24
            栅格系统
          </li>
          <li>
            <strong>像素值</strong>: 如 {'{'} xs: '50px', sm: '100px' {'}'}{' '}
            ，固定宽度
          </li>
          <li>
            <strong>百分比</strong>: 如 {'{'} xs: '10%', sm: '20%' {'}'}
            ，相对宽度
          </li>
        </ul>
        <h4>响应式断点：</h4>
        <ul>
          <li>
            <strong>xs</strong>: 超小屏幕 (&lt;576px)
          </li>
          <li>
            <strong>sm</strong>: 小屏幕 (≥576px)
          </li>
          <li>
            <strong>md</strong>: 中等屏幕 (≥768px)
          </li>
          <li>
            <strong>lg</strong>: 大屏幕 (≥992px)
          </li>
          <li>
            <strong>xl</strong>: 超大屏幕 (≥1200px)
          </li>
        </ul>
        <h4>布局特点：</h4>
        <ul>
          <li>
            <strong>24 栅格系统</strong>: 使用数字值时，总列数应该为 24
          </li>
          <li>
            <strong>固定宽度</strong>: 使用像素值时，卡片宽度固定不变
          </li>
          <li>
            <strong>相对宽度</strong>: 使用百分比时，卡片宽度随容器变化
          </li>
          <li>
            <strong>自动宽度</strong>: 不设置 colSpan 时，卡片自动填充剩余空间
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>栅格布局</strong>: 使用数字值构建响应式栅格
          </li>
          <li>
            <strong>固定布局</strong>: 使用像素值构建固定宽度的布局
          </li>
          <li>
            <strong>弹性布局</strong>: 使用百分比构建弹性布局
          </li>
          <li>
            <strong>混合布局</strong>: 结合多种配置方式构建复杂布局
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>栅格计算</strong>: 使用数字值时确保总列数为 24
          </li>
          <li>
            <strong>响应式设计</strong>: 在不同断点下测试布局效果
          </li>
          <li>
            <strong>性能考虑</strong>: 避免过于复杂的响应式配置
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

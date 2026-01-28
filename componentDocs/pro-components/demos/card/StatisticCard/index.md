

import { StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const { Divider } = StatisticCard;

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
        <StatisticCard.Group
          title="Core Metrics"
          direction={responsive ? 'column' : 'row'}
        >
          <StatisticCard
            statistic={{
              title: "Today's UV",
              tip: 'Supplier Information',
              value: 79,
              precision: 2,
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'Frozen Amount',
              value: 112893,
              precision: 2,
              suffix: 'Yuan',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'Information Completeness',
              value: 92,
              suffix: '/ 100',
            }}
          />
          <StatisticCard
            statistic={{
              title: 'Frozen Amount',
              value: 112893,
              precision: 2,
              suffix: 'Yuan',
            }}
          />
        </StatisticCard.Group>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard.Group Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 分组标题
          </li>
          <li>
            <strong>direction</strong>: 排列方向，'row' 表示水平排列，'column'
            表示垂直排列
          </li>
          <li>
            <strong>children</strong>: StatisticCard 和 Divider 子组件
          </li>
        </ul>
        <h4>StatisticCard Statistic Props：</h4>
        <ul>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>tip</strong>: 提示信息，鼠标悬停时显示
          </li>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>precision</strong>: 数值精度，控制小数位数
          </li>
          <li>
            <strong>suffix</strong>: 数值后缀，如单位 'Yuan'
          </li>
        </ul>
        <h4>Divider Props：</h4>
        <ul>
          <li>
            <strong>type</strong>: 分割线类型，'horizontal'
            表示水平分割线，'vertical' 表示垂直分割线
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换为垂直布局
          </li>
          <li>
            <strong>分割线适配</strong>: 根据布局方向自动调整分割线类型
          </li>
          <li>
            <strong>实时监听</strong>: 使用 ResizeObserver 实时监听容器大小变化
          </li>
        </ul>
        <h4>数值格式化：</h4>
        <ul>
          <li>
            <strong>precision</strong>: 控制数值的小数位数，如 precision={2}{' '}
            显示两位小数
          </li>
          <li>
            <strong>suffix</strong>: 添加数值后缀，如单位、百分比等
          </li>
          <li>
            <strong>prefix</strong>: 添加数值前缀，如货币符号等
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>核心指标展示</strong>: 展示多个关键业务指标
          </li>
          <li>
            <strong>数据对比</strong>: 使用分割线分隔不同的统计项
          </li>
          <li>
            <strong>响应式设计</strong>: 在不同屏幕尺寸下保持良好的显示效果
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

import type { StatisticProps } from '@ant-design/pro-components';
import { ProCard, StatisticCard } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const items = [
  { key: '1', title: '全部', value: 10, total: true },
  { key: '2', status: 'default', title: '未发布', value: 5 },
  { key: '3', status: 'processing', title: '发布中', value: 3 },
  { key: '4', status: 'error', title: '发布异常', value: 1 },
  { key: '5', status: 'success', title: '发布成功', value: 1 },
];

const Demo = () => {
  return (
    <>
      <ProCard
        tabs={{
          onChange: (key) => {
            console.log('key', key);
          },
          items: items.map((item) => ({
            key: item.key,
            label: (
              <Statistic
                layout="vertical"
                title={item.title}
                value={item.value}
                status={item.status as StatisticProps['status']}
                style={{
                  width: 120,
                  borderInlineEnd: item.total ? '1px solid #f0f0f0' : undefined,
                }}
              />
            ),
            children: (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fafafa',
                  height: 100,
                }}
              >
                关联展示内容 {item.title}
              </div>
            ),
          })),
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
        <h4>ProCard Tabs Props 说明：</h4>
        <ul>
          <li>
            <strong>tabs.onChange</strong>: 标签页切换时的回调函数
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
            <strong>label</strong>: 标签页标题，可以是字符串或 React 节点
          </li>
          <li>
            <strong>children</strong>: 标签页内容
          </li>
        </ul>
        <h4>Statistic 在 Tabs 中的 Props：</h4>
        <ul>
          <li>
            <strong>layout</strong>: 布局方式，'vertical' 表示垂直布局
          </li>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>status</strong>: 状态指示
          </li>
          <li>
            <strong>style</strong>: 自定义样式
          </li>
        </ul>
        <h4>数据配置说明：</h4>
        <ul>
          <li>
            <strong>total</strong>: 是否为总计项，用于特殊样式处理
          </li>
          <li>
            <strong>status</strong>: 状态值，用于颜色区分
          </li>
          <li>
            <strong>borderInlineEnd</strong>: 右侧边框，用于分隔总计项
          </li>
        </ul>
        <h4>交互特点：</h4>
        <ul>
          <li>
            <strong>标签切换</strong>: 点击标签页可以切换内容
          </li>
          <li>
            <strong>状态反馈</strong>: 通过 onChange 回调获取切换事件
          </li>
          <li>
            <strong>内容展示</strong>: 每个标签页可以展示不同的内容
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>分类统计</strong>: 按不同分类展示统计数据
          </li>
          <li>
            <strong>状态管理</strong>: 展示不同状态下的数据
          </li>
          <li>
            <strong>内容切换</strong>: 在有限空间内展示多种内容
          </li>
        </ul>
        <h4>样式定制：</h4>
        <ul>
          <li>
            <strong>标签样式</strong>: 通过 Statistic 组件自定义标签样式
          </li>
          <li>
            <strong>内容样式</strong>: 通过 children 自定义内容样式
          </li>
          <li>
            <strong>分隔样式</strong>: 通过 borderInlineEnd 添加分隔线
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

import { StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const imgStyle = {
  display: 'block',
  width: 42,
  height: 42,
};

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
        <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
          <StatisticCard
            statistic={{
              title: 'Payment Amount',
              value: 2176,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              ),
            }}
          />
          <StatisticCard
            statistic={{
              title: 'Number of Visitors',
              value: 475,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              ),
            }}
          />
          <StatisticCard
            statistic={{
              title: 'Number of Successful Orders',
              value: 87,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              ),
            }}
          />
          <StatisticCard
            statistic={{
              title: 'Page Views',
              value: 1754,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*pUkAQpefcx8AAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              ),
            }}
          />
        </StatisticCard.Group>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard Icon Props 说明：</h4>
        <ul>
          <li>
            <strong>statistic.icon</strong>: 统计项图标，可以是图片或 React 节点
          </li>
          <li>
            <strong>statistic.title</strong>: 统计项标题
          </li>
          <li>
            <strong>statistic.value</strong>: 统计数值
          </li>
        </ul>
        <h4>StatisticCard.Group Props：</h4>
        <ul>
          <li>
            <strong>direction</strong>: 排列方向，'row' 表示水平排列，'column'
            表示垂直排列
          </li>
          <li>
            <strong>children</strong>: StatisticCard 子组件
          </li>
        </ul>
        <h4>RcResizeObserver Props：</h4>
        <ul>
          <li>
            <strong>onResize</strong>: 容器大小变化时的回调函数
          </li>
          <li>
            <strong>offset</strong>: 包含 width 和 height 的对象
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换为垂直布局
          </li>
          <li>
            <strong>自动适配</strong>: 根据屏幕尺寸自动调整布局方向
          </li>
          <li>
            <strong>实时监听</strong>: 使用 ResizeObserver 实时监听容器大小变化
          </li>
        </ul>
        <h4>Icon 使用方式：</h4>
        <ul>
          <li>
            <strong>图片图标</strong>: 使用 img 标签显示图标图片
          </li>
          <li>
            <strong>Ant Design 图标</strong>: 使用 @ant-design/icons
            中的图标组件
          </li>
          <li>
            <strong>自定义图标</strong>: 使用 SVG 或其他自定义图标组件
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据仪表盘</strong>: 展示多个关键指标
          </li>
          <li>
            <strong>移动端适配</strong>: 在小屏幕设备上自动调整布局
          </li>
          <li>
            <strong>图标统计</strong>: 使用图标增强统计信息的可读性
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

import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <StatisticCard
        title="Market Trend"
        tooltip="Market Description"
        style={{ maxWidth: 480 }}
        extra={<EllipsisOutlined />}
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
            alt="Bar Chart"
            width="100%"
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
        <h4>StatisticCard Chart Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>tooltip</strong>: 提示信息，鼠标悬停时显示
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角操作区域
          </li>
          <li>
            <strong>chart</strong>: 图表区域，可以是图片或图表组件
          </li>
        </ul>
        <h4>Chart 属性说明：</h4>
        <ul>
          <li>
            <strong>图片图表</strong>: 使用 img 标签显示静态图表
          </li>
          <li>
            <strong>动态图表</strong>: 可以集成 ECharts、AntV 等图表库
          </li>
          <li>
            <strong>响应式</strong>: 图表会自动适配容器宽度
          </li>
        </ul>
        <h4>Img 标签属性：</h4>
        <ul>
          <li>
            <strong>src</strong>: 图片源地址
          </li>
          <li>
            <strong>alt</strong>: 图片替代文本，用于无障碍访问
          </li>
          <li>
            <strong>width</strong>: 图片宽度，'100%' 表示占满容器宽度
          </li>
        </ul>
        <h4>图表类型支持：</h4>
        <ul>
          <li>
            <strong>静态图片</strong>: SVG、PNG、JPG 等格式的图表图片
          </li>
          <li>
            <strong>ECharts</strong>: 可以集成 ECharts 动态图表
          </li>
          <li>
            <strong>AntV</strong>: 可以集成 AntV 图表库
          </li>
          <li>
            <strong>自定义组件</strong>: 可以传入自定义的图表组件
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据可视化</strong>: 展示各类统计图表
          </li>
          <li>
            <strong>趋势分析</strong>: 展示数据趋势和变化
          </li>
          <li>
            <strong>对比分析</strong>: 展示数据对比和分布
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

import { StatisticCard } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const Demo = () => {
  return (
    <>
      <StatisticCard
        chartPlacement="left"
        statistic={{
          title: 'Frozen Amount',
          value: 112893,
          precision: 2,
          suffix: 'Yuan',
          description: (
            <>
              <Statistic title="Weekly Comparison" value="6.47%" trend="up" />
              <Statistic
                title="Monthly Comparison"
                value="6.47%"
                trend="down"
              />
            </>
          ),
        }}
        style={{ maxWidth: 584 }}
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/snEBTn9ax/zhexiantuchang.svg"
            alt="Line Chart"
            width="100%"
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
        <h4>StatisticCard Horizontal Left Layout Props 说明：</h4>
        <ul>
          <li>
            <strong>chartPlacement</strong>: 图表位置，'left' 表示图表显示在左侧
          </li>
          <li>
            <strong>statistic</strong>: 统计信息配置对象
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象，使用 maxWidth 控制最大宽度
          </li>
          <li>
            <strong>chart</strong>: 图表区域
          </li>
        </ul>
        <h4>Statistic 配置：</h4>
        <ul>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>precision</strong>: 数值精度，控制小数位数
          </li>
          <li>
            <strong>suffix</strong>: 数值后缀，如单位
          </li>
          <li>
            <strong>description</strong>: 统计描述，可以包含多个 Statistic 组件
          </li>
        </ul>
        <h4>嵌套 Statistic 组件：</h4>
        <ul>
          <li>
            <strong>title</strong>: 子统计项标题
          </li>
          <li>
            <strong>value</strong>: 子统计项数值
          </li>
          <li>
            <strong>trend</strong>: 趋势指示，'up' 或 'down'
          </li>
        </ul>
        <h4>ChartPlacement="left" 特点：</h4>
        <ul>
          <li>
            <strong>左侧图表</strong>: 图表显示在左侧，统计信息显示在右侧
          </li>
          <li>
            <strong>强调图表</strong>: 左侧的图表更加突出
          </li>
          <li>
            <strong>视觉引导</strong>: 从左到右的阅读习惯
          </li>
        </ul>
        <h4>样式配置：</h4>
        <ul>
          <li>
            <strong>maxWidth</strong>: 设置最大宽度，避免在大屏幕上过宽
          </li>
          <li>
            <strong>响应式</strong>: 在小屏幕上会自动调整布局
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>左侧图表</strong>: 可视化图表展示
          </li>
          <li>
            <strong>右侧信息</strong>: 主要统计信息和描述信息
          </li>
          <li>
            <strong>水平布局</strong>: 充分利用水平空间
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>图表展示</strong>: 强调图表的重要性
          </li>
          <li>
            <strong>数据可视化</strong>: 突出数据可视化效果
          </li>
          <li>
            <strong>趋势分析</strong>: 结合图表展示数据趋势
          </li>
          <li>
            <strong>仪表盘</strong>: 构建数据仪表盘
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>图表质量</strong>: 确保左侧图表清晰易懂
          </li>
          <li>
            <strong>信息层次</strong>: 右侧信息应该与图表相关
          </li>
          <li>
            <strong>空间平衡</strong>: 合理分配图表和信息的空间
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

import { StatisticCard } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const Demo = () => {
  return (
    <>
      <StatisticCard
        chartPlacement="right"
        statistic={{
          title: 'Frozen Amount',
          value: 112893,
          precision: 2,
          suffix: 'Yuan',
          description: (
            <>
              <Statistic title="Weekly Comparison" value="6.47%" trend="up" />
              <Statistic
                title="Monthly Comparison"
                value="6.47%"
                trend="down"
              />
            </>
          ),
        }}
        style={{ width: 584 }}
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/snEBTn9ax/zhexiantuchang.svg"
            alt="Line Chart"
            width="100%"
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
        <h4>StatisticCard Horizontal Layout Props 说明：</h4>
        <ul>
          <li>
            <strong>chartPlacement</strong>: 图表位置，'right'
            表示图表显示在右侧
          </li>
          <li>
            <strong>statistic</strong>: 统计信息配置对象
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
          <li>
            <strong>chart</strong>: 图表区域
          </li>
        </ul>
        <h4>Statistic 配置：</h4>
        <ul>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>precision</strong>: 数值精度，控制小数位数
          </li>
          <li>
            <strong>suffix</strong>: 数值后缀，如单位
          </li>
          <li>
            <strong>description</strong>: 统计描述，可以包含多个 Statistic 组件
          </li>
        </ul>
        <h4>嵌套 Statistic 组件：</h4>
        <ul>
          <li>
            <strong>title</strong>: 子统计项标题
          </li>
          <li>
            <strong>value</strong>: 子统计项数值
          </li>
          <li>
            <strong>trend</strong>: 趋势指示，'up' 或 'down'
          </li>
        </ul>
        <h4>ChartPlacement="right" 特点：</h4>
        <ul>
          <li>
            <strong>右侧图表</strong>: 图表显示在右侧，统计信息显示在左侧
          </li>
          <li>
            <strong>强调数据</strong>: 左侧的统计信息更加突出
          </li>
          <li>
            <strong>空间利用</strong>: 充分利用水平空间
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>左侧信息</strong>: 主要统计信息和描述信息
          </li>
          <li>
            <strong>右侧图表</strong>: 可视化图表展示
          </li>
          <li>
            <strong>水平布局</strong>: 充分利用水平空间
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据展示</strong>: 展示主要数据指标
          </li>
          <li>
            <strong>趋势分析</strong>: 结合图表展示数据趋势
          </li>
          <li>
            <strong>对比分析</strong>: 展示多个时间段的对比数据
          </li>
          <li>
            <strong>仪表盘</strong>: 构建数据仪表盘
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>信息层次</strong>: 确保主要信息和次要信息的层次清晰
          </li>
          <li>
            <strong>图表选择</strong>: 根据数据类型选择合适的图表
          </li>
          <li>
            <strong>空间平衡</strong>: 合理分配统计信息和图表的空间
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

import { StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const { Divider } = StatisticCard;

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
        <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
          <StatisticCard
            statistic={{
              title: 'Frozen Amount',
              value: 20190102,
              precision: 2,
              suffix: 'Yuan',
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                alt="Histogram"
                width="100%"
              />
            }
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'Design Resources',
              value: 234,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                alt="Histogram"
                width="100%"
              />
            }
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'Information Completeness',
              value: 5,
              suffix: '/ 100',
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                alt="Histogram"
                width="100%"
              />
            }
          />
        </StatisticCard.Group>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard.Group 图表分组 Props 说明：</h4>
        <ul>
          <li>
            <strong>direction</strong>: 排列方向，'row' 表示水平排列，'column'
            表示垂直排列
          </li>
          <li>
            <strong>children</strong>: StatisticCard 和 Divider 子组件
          </li>
        </ul>
        <h4>StatisticCard 配置：</h4>
        <ul>
          <li>
            <strong>statistic.title</strong>: 统计项标题
          </li>
          <li>
            <strong>statistic.value</strong>: 统计数值
          </li>
          <li>
            <strong>statistic.precision</strong>: 数值精度，控制小数位数
          </li>
          <li>
            <strong>statistic.suffix</strong>: 数值后缀，如单位或比例
          </li>
          <li>
            <strong>chart</strong>: 图表区域，每个卡片都可以有自己的图表
          </li>
        </ul>
        <h4>Divider 配置：</h4>
        <ul>
          <li>
            <strong>type</strong>: 分割线类型，根据响应式状态自动调整
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换为垂直布局
          </li>
          <li>
            <strong>分割线适配</strong>: 根据布局方向自动调整分割线类型
          </li>
          <li>
            <strong>图表适配</strong>: 图表会根据容器大小自动调整
          </li>
        </ul>
        <h4>图表展示特点：</h4>
        <ul>
          <li>
            <strong>独立图表</strong>: 每个统计卡片都有独立的图表
          </li>
          <li>
            <strong>统一风格</strong>: 所有图表使用相同的样式和尺寸
          </li>
          <li>
            <strong>响应式图表</strong>: 图表会随容器大小自动调整
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>多指标对比</strong>: 展示多个相关指标的对比
          </li>
          <li>
            <strong>数据仪表盘</strong>: 构建数据仪表盘和监控面板
          </li>
          <li>
            <strong>报表展示</strong>: 展示多维度统计报表
          </li>
          <li>
            <strong>分析页面</strong>: 数据分析和可视化页面
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>图表一致性</strong>: 保持所有图表的风格一致
          </li>
          <li>
            <strong>数据关联</strong>: 确保分组中的统计数据有关联性
          </li>
          <li>
            <strong>视觉平衡</strong>: 合理分配各卡片的视觉空间
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

import { StatisticCard } from '@ant-design/pro-components';

const { Operation } = StatisticCard;

const Demo = () => {
  return (
    <>
      <StatisticCard.Group>
        <StatisticCard
          statistic={{
            title: 'Service Mesh Count',
            value: 500,
          }}
        />
        <Operation>=</Operation>
        <StatisticCard
          statistic={{
            title: 'Unpublished',
            value: 234,
          }}
        />
        <Operation>+</Operation>
        <StatisticCard
          statistic={{
            title: 'Publishing',
            value: 112,
          }}
        />
        <Operation>+</Operation>
        <StatisticCard
          statistic={{
            title: 'Published',
            value: 255,
          }}
        />
      </StatisticCard.Group>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard Operation Props 说明：</h4>
        <ul>
          <li>
            <strong>children</strong>: 操作符内容，可以是数学符号如
            '='、'+'、'-'、'×'、'÷' 等
          </li>
        </ul>
        <h4>Operation 组件特点：</h4>
        <ul>
          <li>
            <strong>数学公式</strong>: 用于在统计卡片之间显示数学运算符号
          </li>
          <li>
            <strong>公式展示</strong>: 展示数据之间的数学关系
          </li>
          <li>
            <strong>视觉连接</strong>: 通过操作符连接多个统计卡片
          </li>
        </ul>
        <h4>StatisticCard 配置：</h4>
        <ul>
          <li>
            <strong>statistic.title</strong>: 统计项标题
          </li>
          <li>
            <strong>statistic.value</strong>: 统计数值
          </li>
        </ul>
        <h4>公式展示效果：</h4>
        <ul>
          <li>
            <strong>等号</strong>: 表示总数等于各部分之和
          </li>
          <li>
            <strong>加号</strong>: 表示各部分相加
          </li>
          <li>
            <strong>减号</strong>: 表示减法运算
          </li>
          <li>
            <strong>乘除号</strong>: 表示乘除运算
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据分解</strong>: 展示总数与各组成部分的关系
          </li>
          <li>
            <strong>公式计算</strong>: 展示数学公式和数据计算过程
          </li>
          <li>
            <strong>数据验证</strong>: 验证数据之间的逻辑关系
          </li>
          <li>
            <strong>教学展示</strong>: 用于数据分析和教学场景
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>公式清晰</strong>: 确保公式逻辑清晰易懂
          </li>
          <li>
            <strong>数据准确</strong>: 确保公式中的数值计算正确
          </li>
          <li>
            <strong>视觉平衡</strong>: 合理分配各部分的视觉权重
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

import type { StatisticProps } from '@ant-design/pro-components';
import { ProCard, StatisticCard } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const items = [
  { key: '1', title: 'All', value: 10, total: true },
  { key: '2', status: 'default', title: 'Unpublished', value: 5 },
  { key: '3', status: 'processing', title: 'Publishing', value: 3 },
  { key: '4', status: 'error', title: 'Publishing Error', value: 1 },
  { key: '5', status: 'success', title: 'Published Successfully', value: 1 },
];

const Demo = () => {
  return (
    <ProCard
      tabs={{
        onChange: (key) => {
          console.log('key', key);
        },
        items: items.map((item) => {
          return {
            key: item.key,
            style: { width: '100%' },
            label: (
              <Statistic
                layout="vertical"
                title={item.title}
                value={item.value}
                status={item.status as StatisticProps['status']}
                style={{
                  width: 120,
                  borderInlineEnd: item.total ? '1px solid #f0f0f0' : undefined,
                }}
              />
            ),
            children: (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fafafa',
                  height: 100,
                }}
              >
                Related display content {item.title}
              </div>
            ),
          };
        }),
      }}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const Demo = () => {
  return (
    <>
      <StatisticCard
        title="整体流量评分"
        extra={<EllipsisOutlined />}
        statistic={{
          value: 86.2,
          suffix: '分',
          description: <Statistic title="排名前" value="20%" />,
        }}
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg"
            width="100%"
            alt="进度条"
          />
        }
        footer={
          <>
            <Statistic
              value={15.1}
              title="累计注册数"
              suffix="万"
              layout="horizontal"
            />
            <Statistic
              value={15.1}
              title="本月注册数"
              suffix="万"
              layout="horizontal"
            />
          </>
        }
        style={{ width: 250 }}
      />

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard Footer Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角操作区域
          </li>
          <li>
            <strong>statistic</strong>: 主要统计信息配置
          </li>
          <li>
            <strong>chart</strong>: 图表区域
          </li>
          <li>
            <strong>footer</strong>: 底部区域，可以是 React 节点
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
        </ul>
        <h4>Footer 区域特点：</h4>
        <ul>
          <li>
            <strong>额外信息</strong>: 在卡片底部展示额外的统计信息
          </li>
          <li>
            <strong>布局灵活</strong>: 可以包含多个 Statistic 组件
          </li>
          <li>
            <strong>视觉层次</strong>: 与主要统计信息形成层次对比
          </li>
        </ul>
        <h4>Statistic 在 Footer 中的配置：</h4>
        <ul>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>suffix</strong>: 数值后缀，如单位
          </li>
          <li>
            <strong>layout</strong>: 布局方式，'horizontal' 表示水平布局
          </li>
        </ul>
        <h4>主要统计信息配置：</h4>
        <ul>
          <li>
            <strong>value</strong>: 主要统计数值
          </li>
          <li>
            <strong>suffix</strong>: 数值后缀
          </li>
          <li>
            <strong>description</strong>: 统计描述，可以是 Statistic 组件
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>主要信息</strong>: 在卡片中央突出显示主要统计信息
          </li>
          <li>
            <strong>图表展示</strong>: 在主要信息下方显示图表
          </li>
          <li>
            <strong>底部信息</strong>: 在卡片底部显示次要统计信息
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>评分展示</strong>: 展示评分和相关的详细数据
          </li>
          <li>
            <strong>数据对比</strong>: 在底部展示对比数据
          </li>
          <li>
            <strong>详细信息</strong>: 在底部展示补充信息
          </li>
          <li>
            <strong>多维度展示</strong>: 展示多个维度的统计数据
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>信息层次</strong>: 确保主要信息和次要信息的层次清晰
          </li>
          <li>
            <strong>数据关联</strong>: footer 中的数据应该与主要信息相关
          </li>
          <li>
            <strong>视觉平衡</strong>: 合理分配各部分的视觉空间
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

import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const { Statistic } = StatisticCard;

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
        <ProCard split={responsive ? 'horizontal' : 'vertical'}>
          <StatisticCard
            colSpan={responsive ? 24 : 6}
            title="Fiscal Year Performance Target"
            statistic={{
              value: 82.6,
              suffix: 'Billion',
              description: (
                <Statistic title="Daily Comparison" value="6.47%" trend="up" />
              ),
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg"
                alt="Progress Bar"
                width="100%"
              />
            }
            footer={
              <>
                <Statistic
                  value="70.98%"
                  title="Fiscal Year Performance Completion Rate"
                  layout="horizontal"
                />
                <Statistic
                  value="86.98%"
                  title="Performance Completion Rate Same Period Last Year"
                  layout="horizontal"
                />
                <Statistic
                  value="88.98%"
                  title="Performance Completion Rate Same Period Year Before Last"
                  layout="horizontal"
                />
              </>
            }
          />
          <StatisticCard.Group
            colSpan={responsive ? 24 : 18}
            direction={responsive ? 'column' : undefined}
          >
            <StatisticCard
              statistic={{
                title: 'Total Revenue for the Fiscal Year',
                value: 601987768,
                description: (
                  <Statistic
                    title="Daily Comparison"
                    value="6.15%"
                    trend="up"
                  />
                ),
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                  alt="Line Chart"
                  width="100%"
                />
              }
            >
              <Statistic
                title="Total Market Revenue"
                value={1982312}
                layout="vertical"
                description={
                  <Statistic
                    title="Daily Comparison"
                    value="6.15%"
                    trend="down"
                  />
                }
              />
            </StatisticCard>
            <StatisticCard
              statistic={{
                title: 'Daily Ranking',
                value: 6,
                description: (
                  <Statistic
                    title="Daily Comparison"
                    value="3.85%"
                    trend="down"
                  />
                ),
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                  alt="Line Chart"
                  width="100%"
                />
              }
            >
              <Statistic
                title="Revenue in the Last 7 Days"
                value={17458}
                layout="vertical"
                description={
                  <Statistic
                    title="Daily Comparison"
                    value="6.47%"
                    trend="up"
                  />
                }
              />
            </StatisticCard>
            <StatisticCard
              statistic={{
                title: 'Fiscal Year Performance Revenue Ranking',
                value: 2,
                description: (
                  <Statistic
                    title="Daily Comparison"
                    value="6.47%"
                    trend="up"
                  />
                ),
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                  alt="Line Chart"
                  width="100%"
                />
              }
            >
              <Statistic
                title="Monthly Payment Count"
                value={601}
                layout="vertical"
                description={
                  <Statistic
                    title="Daily Comparison"
                    value="6.47%"
                    trend="down"
                  />
                }
              />
            </StatisticCard>
          </StatisticCard.Group>
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
        <h4>ProCard 复杂布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>split</strong>: 分割方式，根据响应式状态自动调整
          </li>
          <li>
            <strong>children</strong>: StatisticCard 和 StatisticCard.Group
            子组件
          </li>
        </ul>
        <h4>StatisticCard 配置：</h4>
        <ul>
          <li>
            <strong>colSpan</strong>: 栅格列数，控制组件在栅格系统中的宽度
          </li>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>statistic</strong>: 主要统计信息配置
          </li>
          <li>
            <strong>chart</strong>: 图表区域
          </li>
          <li>
            <strong>footer</strong>: 底部区域，包含多个 Statistic 组件
          </li>
        </ul>
        <h4>StatisticCard.Group 配置：</h4>
        <ul>
          <li>
            <strong>colSpan</strong>: 栅格列数，控制整个组的宽度
          </li>
          <li>
            <strong>direction</strong>: 排列方向，响应式时自动调整
          </li>
          <li>
            <strong>children</strong>: 多个 StatisticCard 子组件
          </li>
        </ul>
        <h4>嵌套 Statistic 组件：</h4>
        <ul>
          <li>
            <strong>layout</strong>: 布局方式，'vertical'
            表示垂直布局，'horizontal' 表示水平布局
          </li>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>description</strong>: 统计描述，可以是 Statistic 组件
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换布局
          </li>
          <li>
            <strong>栅格适配</strong>: colSpan 根据响应式状态自动调整
          </li>
          <li>
            <strong>方向切换</strong>: Group 的 direction 根据响应式状态调整
          </li>
        </ul>
        <h4>栅格系统说明：</h4>
        <ul>
          <li>
            <strong>24 栅格</strong>: 使用 24 栅格系统，colSpan 表示占用的列数
          </li>
          <li>
            <strong>响应式适配</strong>: 小屏幕时 colSpan 自动调整为
            24（占满宽度）
          </li>
          <li>
            <strong>比例控制</strong>: 通过 colSpan 控制各部分的宽度比例
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据仪表盘</strong>: 构建复杂的数据仪表盘
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
            <strong>栅格规划</strong>: 合理规划 colSpan 值，确保布局平衡
          </li>
          <li>
            <strong>响应式设计</strong>: 确保在不同屏幕尺寸下都有良好的显示效果
          </li>
          <li>
            <strong>信息层次</strong>: 通过布局突出重要的信息
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

import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const { Statistic } = StatisticCard;

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
          title="Data Overview"
          extra="Friday, September 28, 2019"
          split={responsive ? 'horizontal' : 'vertical'}
          headerBordered
          variant="outlined"
        >
          <ProCard split="horizontal">
            <ProCard split="horizontal">
              <ProCard split="vertical">
                <StatisticCard
                  statistic={{
                    title: 'Total Traffic Yesterday',
                    value: 234,
                    description: (
                      <Statistic
                        title="Compared to Monthly Average Traffic"
                        value="8.04%"
                        trend="down"
                      />
                    ),
                  }}
                />
                <StatisticCard
                  statistic={{
                    title: 'Total Traffic This Month',
                    value: 234,
                    description: (
                      <Statistic
                        title="Month-on-Month"
                        value="8.04%"
                        trend="up"
                      />
                    ),
                  }}
                />
              </ProCard>
              <ProCard split="vertical">
                <StatisticCard
                  statistic={{
                    title: 'Ongoing Experiments',
                    value: '12/56',
                    suffix: 'items',
                  }}
                />
                <StatisticCard
                  statistic={{
                    title: 'Total Historical Experiments',
                    value: '134',
                    suffix: 'items',
                  }}
                />
              </ProCard>
            </ProCard>
            <StatisticCard
              title="Traffic Trends"
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg"
                  width="100%"
                  alt="Bar Chart"
                />
              }
            />
          </ProCard>
          <StatisticCard
            title="Traffic Usage"
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
                alt="Dashboard"
                width="100%"
              />
            }
          />
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
        <h4>ProCard 嵌套布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角额外信息
          </li>
          <li>
            <strong>split</strong>: 分割方式，'horizontal'
            表示水平分割，'vertical' 表示垂直分割
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
        </ul>
        <h4>StatisticCard 嵌套配置：</h4>
        <ul>
          <li>
            <strong>statistic.title</strong>: 统计项标题
          </li>
          <li>
            <strong>statistic.value</strong>: 统计数值
          </li>
          <li>
            <strong>statistic.description</strong>: 统计描述，可以是 Statistic
            组件
          </li>
          <li>
            <strong>statistic.suffix</strong>: 数值后缀
          </li>
          <li>
            <strong>chart</strong>: 图表区域
          </li>
        </ul>
        <h4>嵌套 Statistic 组件：</h4>
        <ul>
          <li>
            <strong>title</strong>: 子统计项标题
          </li>
          <li>
            <strong>value</strong>: 子统计项数值
          </li>
          <li>
            <strong>trend</strong>: 趋势指示，'up' 或 'down'
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换分割方式
          </li>
          <li>
            <strong>自适应分割</strong>: 根据屏幕尺寸自动调整分割方向
          </li>
          <li>
            <strong>嵌套支持</strong>: 支持多层嵌套的卡片布局
          </li>
        </ul>
        <h4>布局结构：</h4>
        <ul>
          <li>
            <strong>外层 ProCard</strong>: 整体容器，控制主要分割方向
          </li>
          <li>
            <strong>中层 ProCard</strong>: 中间容器，处理水平分割
          </li>
          <li>
            <strong>内层 ProCard</strong>: 内层容器，处理垂直分割
          </li>
          <li>
            <strong>StatisticCard</strong>: 统计卡片，展示具体数据
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

import { StatisticCard } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const Demo = () => {
  return (
    <>
      <StatisticCard style={{ width: 160 }}>
        <Statistic title="Daily Comparison" value="7.60%" trend="up" />
        <Statistic title="Weekly Comparison" value="7.60%" trend="down" />
        <Statistic title="Weekly Comparison" value="0.00%" />
      </StatisticCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard Trend Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>trend</strong>: 趋势指示，可选值：'up' | 'down' | undefined
          </li>
        </ul>
        <h4>Trend 属性说明：</h4>
        <ul>
          <li>
            <strong>up</strong>: 上升趋势，显示绿色上升箭头
          </li>
          <li>
            <strong>down</strong>: 下降趋势，显示红色下降箭头
          </li>
          <li>
            <strong>undefined</strong>: 无趋势，不显示箭头
          </li>
        </ul>
        <h4>趋势显示特点：</h4>
        <ul>
          <li>
            <strong>颜色区分</strong>: 上升趋势为绿色，下降趋势为红色
          </li>
          <li>
            <strong>箭头指示</strong>: 使用箭头图标直观显示趋势方向
          </li>
          <li>
            <strong>数值对比</strong>: 结合数值变化展示趋势信息
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据对比</strong>: 展示同比、环比等数据变化趋势
          </li>
          <li>
            <strong>指标监控</strong>: 监控关键业务指标的变化趋势
          </li>
          <li>
            <strong>报表分析</strong>: 在报表中展示数据趋势分析
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

import { StatisticCard } from '@ant-design/pro-components';

const { Divider } = StatisticCard;

const Demo = () => {
  return (
    <>
      <StatisticCard.Group>
        <StatisticCard
          statistic={{
            title: 'All',
            tip: 'Help text',
            value: 10,
          }}
        />
        <Divider />
        <StatisticCard
          statistic={{
            title: 'Unpublished',
            value: 5,
            status: 'default',
          }}
        />
        <StatisticCard
          statistic={{
            title: 'Publishing',
            value: 3,
            status: 'processing',
          }}
        />
        <StatisticCard
          statistic={{
            title: 'Publishing Error',
            value: 2,
            status: 'error',
          }}
        />
        <StatisticCard
          statistic={{
            title: 'Published Successfully',
            value: '-',
            status: 'success',
          }}
        />
      </StatisticCard.Group>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard Status Props 说明：</h4>
        <ul>
          <li>
            <strong>statistic.title</strong>: 统计项标题
          </li>
          <li>
            <strong>statistic.tip</strong>: 提示信息，鼠标悬停时显示
          </li>
          <li>
            <strong>statistic.value</strong>: 统计数值，可以是数字、字符串或 '-'
          </li>
          <li>
            <strong>statistic.status</strong>: 状态指示，可选值：'default' |
            'processing' | 'error' | 'success'
          </li>
        </ul>
        <h4>Status 状态说明：</h4>
        <ul>
          <li>
            <strong>default</strong>: 默认状态，无特殊颜色标识
          </li>
          <li>
            <strong>processing</strong>: 处理中状态，显示蓝色或橙色
          </li>
          <li>
            <strong>error</strong>: 错误状态，显示红色
          </li>
          <li>
            <strong>success</strong>: 成功状态，显示绿色
          </li>
        </ul>
        <h4>状态显示特点：</h4>
        <ul>
          <li>
            <strong>颜色区分</strong>: 不同状态使用不同的颜色进行区分
          </li>
          <li>
            <strong>视觉反馈</strong>: 通过颜色提供直观的状态反馈
          </li>
          <li>
            <strong>语义化</strong>: 状态值与业务语义相对应
          </li>
        </ul>
        <h4>Divider 组件：</h4>
        <ul>
          <li>
            <strong>默认分割线</strong>: 不设置 type 时使用默认分割线
          </li>
          <li>
            <strong>分隔作用</strong>: 用于分隔不同的统计项
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>状态统计</strong>: 统计不同状态下的数据量
          </li>
          <li>
            <strong>进度监控</strong>: 监控任务或流程的执行状态
          </li>
          <li>
            <strong>错误统计</strong>: 统计错误和成功的数据
          </li>
          <li>
            <strong>状态展示</strong>: 展示系统或业务的状态分布
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>状态一致性</strong>: 保持状态值与业务逻辑的一致性
          </li>
          <li>
            <strong>颜色语义</strong>: 使用符合用户认知的颜色语义
          </li>
          <li>
            <strong>数据完整性</strong>: 确保所有状态的数据都有统计
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

import { StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const { Statistic, Divider } = StatisticCard;

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
        <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
          <StatisticCard
            statistic={{
              title: 'Total Traffic (Visits)',
              value: 601986875,
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'Paid Traffic',
              value: 3701928,
              description: <Statistic title="Proportion" value="61.5%" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
                alt="Percentage"
                width="100%"
              />
            }
            chartPlacement="left"
          />
          <StatisticCard
            statistic={{
              title: 'Free Traffic',
              value: 1806062,
              description: <Statistic title="Proportion" value="38.5%" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
                alt="Percentage"
                width="100%"
              />
            }
            chartPlacement="left"
          />
        </StatisticCard.Group>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard ChartPlacement Props 说明：</h4>
        <ul>
          <li>
            <strong>statistic.title</strong>: 统计项标题
          </li>
          <li>
            <strong>statistic.value</strong>: 统计数值
          </li>
          <li>
            <strong>statistic.description</strong>: 统计描述，可以是 Statistic
            组件
          </li>
          <li>
            <strong>chart</strong>: 图表区域
          </li>
          <li>
            <strong>chartPlacement</strong>: 图表位置，'left' 表示左侧，'right'
            表示右侧
          </li>
        </ul>
        <h4>ChartPlacement 属性说明：</h4>
        <ul>
          <li>
            <strong>left</strong>: 图表显示在左侧，统计信息显示在右侧
          </li>
          <li>
            <strong>right</strong>: 图表显示在右侧，统计信息显示在左侧
          </li>
          <li>
            <strong>默认值</strong>: 不设置时图表默认显示在右侧
          </li>
        </ul>
        <h4>嵌套 Statistic 组件：</h4>
        <ul>
          <li>
            <strong>title</strong>: 子统计项标题
          </li>
          <li>
            <strong>value</strong>: 子统计项数值
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换为垂直布局
          </li>
          <li>
            <strong>分割线适配</strong>: 根据布局方向自动调整分割线类型
          </li>
          <li>
            <strong>图表适配</strong>: 图表会根据容器大小自动调整
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>左侧图表</strong>: 图表在左侧，统计信息在右侧，适合强调图表
          </li>
          <li>
            <strong>右侧图表</strong>: 统计信息在左侧，图表在右侧，适合强调数据
          </li>
          <li>
            <strong>响应式</strong>: 在小屏幕上自动调整为垂直布局
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据对比</strong>: 展示不同类别的数据对比
          </li>
          <li>
            <strong>比例展示</strong>: 展示各部分占总体的比例
          </li>
          <li>
            <strong>趋势分析</strong>: 结合图表展示数据趋势
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>图表选择</strong>: 根据数据类型选择合适的图表类型
          </li>
          <li>
            <strong>布局平衡</strong>: 合理分配图表和统计信息的空间
          </li>
          <li>
            <strong>视觉层次</strong>: 通过布局突出重要的信息
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

import { EllipsisOutlined, RightOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-components';
import { Space, theme } from 'antd';

const { Statistic } = StatisticCard;

const Demo = () => {
  const { token } = theme.useToken();
  return (
    <>
      <StatisticCard
        title={
          <Space>
            <span>Department One</span>
            <RightOutlined style={{ color: token.colorTextHeading }} />
          </Space>
        }
        extra={<EllipsisOutlined />}
        statistic={{
          value: 1102893,
          prefix: '¥',
          description: (
            <Space>
              <Statistic title="Actual Completion" value="82.3%" />
              <Statistic title="Current Target" value="¥6000" />
            </Space>
          ),
        }}
        chart={
          <>
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
              alt="chart"
              width="100%"
            />
          </>
        }
        style={{ width: 268 }}
      />

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角操作区域，可以是字符串或 React
            节点
          </li>
          <li>
            <strong>statistic</strong>: 统计信息配置对象
          </li>
          <li>
            <strong>chart</strong>: 图表区域，可以是图片或图表组件
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
        </ul>
        <h4>Statistic 配置对象属性：</h4>
        <ul>
          <li>
            <strong>value</strong>: 统计数值，可以是数字或字符串
          </li>
          <li>
            <strong>prefix</strong>: 数值前缀，如货币符号 '¥'
          </li>
          <li>
            <strong>suffix</strong>: 数值后缀，如单位 '%'
          </li>
          <li>
            <strong>description</strong>: 统计描述，可以是字符串或 React 节点
          </li>
          <li>
            <strong>precision</strong>: 数值精度，控制小数位数
          </li>
        </ul>
        <h4>Statistic 子组件 Props：</h4>
        <ul>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>value</strong>: 统计项数值
          </li>
          <li>
            <strong>prefix</strong>: 统计项前缀
          </li>
          <li>
            <strong>suffix</strong>: 统计项后缀
          </li>
        </ul>
        <h4>Chart 区域说明：</h4>
        <ul>
          <li>
            <strong>图片图表</strong>: 使用 img 标签显示静态图表
          </li>
          <li>
            <strong>动态图表</strong>: 可以集成 ECharts、AntV 等图表库
          </li>
          <li>
            <strong>响应式</strong>: 图表会自动适配容器宽度
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据展示</strong>: 展示关键业务指标和统计数据
          </li>
          <li>
            <strong>仪表盘</strong>: 构建数据仪表盘和监控面板
          </li>
          <li>
            <strong>报表</strong>: 生成各类统计报表
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

import { StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const { Divider } = StatisticCard;

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
        <StatisticCard.Group
          title="Core Metrics"
          direction={responsive ? 'column' : 'row'}
        >
          <StatisticCard
            statistic={{
              title: "Today's UV",
              tip: 'Supplier Information',
              value: 79,
              precision: 2,
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'Frozen Amount',
              value: 112893,
              precision: 2,
              suffix: 'Yuan',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'Information Completeness',
              value: 92,
              suffix: '/ 100',
            }}
          />
          <StatisticCard
            statistic={{
              title: 'Frozen Amount',
              value: 112893,
              precision: 2,
              suffix: 'Yuan',
            }}
          />
        </StatisticCard.Group>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard.Group Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 分组标题
          </li>
          <li>
            <strong>direction</strong>: 排列方向，'row' 表示水平排列，'column'
            表示垂直排列
          </li>
          <li>
            <strong>children</strong>: StatisticCard 和 Divider 子组件
          </li>
        </ul>
        <h4>StatisticCard Statistic Props：</h4>
        <ul>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>tip</strong>: 提示信息，鼠标悬停时显示
          </li>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>precision</strong>: 数值精度，控制小数位数
          </li>
          <li>
            <strong>suffix</strong>: 数值后缀，如单位 'Yuan'
          </li>
        </ul>
        <h4>Divider Props：</h4>
        <ul>
          <li>
            <strong>type</strong>: 分割线类型，'horizontal'
            表示水平分割线，'vertical' 表示垂直分割线
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换为垂直布局
          </li>
          <li>
            <strong>分割线适配</strong>: 根据布局方向自动调整分割线类型
          </li>
          <li>
            <strong>实时监听</strong>: 使用 ResizeObserver 实时监听容器大小变化
          </li>
        </ul>
        <h4>数值格式化：</h4>
        <ul>
          <li>
            <strong>precision</strong>: 控制数值的小数位数，如 precision={2}{' '}
            显示两位小数
          </li>
          <li>
            <strong>suffix</strong>: 添加数值后缀，如单位、百分比等
          </li>
          <li>
            <strong>prefix</strong>: 添加数值前缀，如货币符号等
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>核心指标展示</strong>: 展示多个关键业务指标
          </li>
          <li>
            <strong>数据对比</strong>: 使用分割线分隔不同的统计项
          </li>
          <li>
            <strong>响应式设计</strong>: 在不同屏幕尺寸下保持良好的显示效果
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

import type { StatisticProps } from '@ant-design/pro-components';
import { ProCard, StatisticCard } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const items = [
  { key: '1', title: '全部', value: 10, total: true },
  { key: '2', status: 'default', title: '未发布', value: 5 },
  { key: '3', status: 'processing', title: '发布中', value: 3 },
  { key: '4', status: 'error', title: '发布异常', value: 1 },
  { key: '5', status: 'success', title: '发布成功', value: 1 },
];

const Demo = () => {
  return (
    <>
      <ProCard
        tabs={{
          onChange: (key) => {
            console.log('key', key);
          },
          items: items.map((item) => ({
            key: item.key,
            label: (
              <Statistic
                layout="vertical"
                title={item.title}
                value={item.value}
                status={item.status as StatisticProps['status']}
                style={{
                  width: 120,
                  borderInlineEnd: item.total ? '1px solid #f0f0f0' : undefined,
                }}
              />
            ),
            children: (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fafafa',
                  height: 100,
                }}
              >
                关联展示内容 {item.title}
              </div>
            ),
          })),
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
        <h4>ProCard Tabs Props 说明：</h4>
        <ul>
          <li>
            <strong>tabs.onChange</strong>: 标签页切换时的回调函数
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
            <strong>label</strong>: 标签页标题，可以是字符串或 React 节点
          </li>
          <li>
            <strong>children</strong>: 标签页内容
          </li>
        </ul>
        <h4>Statistic 在 Tabs 中的 Props：</h4>
        <ul>
          <li>
            <strong>layout</strong>: 布局方式，'vertical' 表示垂直布局
          </li>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>status</strong>: 状态指示
          </li>
          <li>
            <strong>style</strong>: 自定义样式
          </li>
        </ul>
        <h4>数据配置说明：</h4>
        <ul>
          <li>
            <strong>total</strong>: 是否为总计项，用于特殊样式处理
          </li>
          <li>
            <strong>status</strong>: 状态值，用于颜色区分
          </li>
          <li>
            <strong>borderInlineEnd</strong>: 右侧边框，用于分隔总计项
          </li>
        </ul>
        <h4>交互特点：</h4>
        <ul>
          <li>
            <strong>标签切换</strong>: 点击标签页可以切换内容
          </li>
          <li>
            <strong>状态反馈</strong>: 通过 onChange 回调获取切换事件
          </li>
          <li>
            <strong>内容展示</strong>: 每个标签页可以展示不同的内容
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>分类统计</strong>: 按不同分类展示统计数据
          </li>
          <li>
            <strong>状态管理</strong>: 展示不同状态下的数据
          </li>
          <li>
            <strong>内容切换</strong>: 在有限空间内展示多种内容
          </li>
        </ul>
        <h4>样式定制：</h4>
        <ul>
          <li>
            <strong>标签样式</strong>: 通过 Statistic 组件自定义标签样式
          </li>
          <li>
            <strong>内容样式</strong>: 通过 children 自定义内容样式
          </li>
          <li>
            <strong>分隔样式</strong>: 通过 borderInlineEnd 添加分隔线
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

import { StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const imgStyle = {
  display: 'block',
  width: 42,
  height: 42,
};

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
        <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
          <StatisticCard
            statistic={{
              title: 'Payment Amount',
              value: 2176,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              ),
            }}
          />
          <StatisticCard
            statistic={{
              title: 'Number of Visitors',
              value: 475,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              ),
            }}
          />
          <StatisticCard
            statistic={{
              title: 'Number of Successful Orders',
              value: 87,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              ),
            }}
          />
          <StatisticCard
            statistic={{
              title: 'Page Views',
              value: 1754,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*pUkAQpefcx8AAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              ),
            }}
          />
        </StatisticCard.Group>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard Icon Props 说明：</h4>
        <ul>
          <li>
            <strong>statistic.icon</strong>: 统计项图标，可以是图片或 React 节点
          </li>
          <li>
            <strong>statistic.title</strong>: 统计项标题
          </li>
          <li>
            <strong>statistic.value</strong>: 统计数值
          </li>
        </ul>
        <h4>StatisticCard.Group Props：</h4>
        <ul>
          <li>
            <strong>direction</strong>: 排列方向，'row' 表示水平排列，'column'
            表示垂直排列
          </li>
          <li>
            <strong>children</strong>: StatisticCard 子组件
          </li>
        </ul>
        <h4>RcResizeObserver Props：</h4>
        <ul>
          <li>
            <strong>onResize</strong>: 容器大小变化时的回调函数
          </li>
          <li>
            <strong>offset</strong>: 包含 width 和 height 的对象
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换为垂直布局
          </li>
          <li>
            <strong>自动适配</strong>: 根据屏幕尺寸自动调整布局方向
          </li>
          <li>
            <strong>实时监听</strong>: 使用 ResizeObserver 实时监听容器大小变化
          </li>
        </ul>
        <h4>Icon 使用方式：</h4>
        <ul>
          <li>
            <strong>图片图标</strong>: 使用 img 标签显示图标图片
          </li>
          <li>
            <strong>Ant Design 图标</strong>: 使用 @ant-design/icons
            中的图标组件
          </li>
          <li>
            <strong>自定义图标</strong>: 使用 SVG 或其他自定义图标组件
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据仪表盘</strong>: 展示多个关键指标
          </li>
          <li>
            <strong>移动端适配</strong>: 在小屏幕设备上自动调整布局
          </li>
          <li>
            <strong>图标统计</strong>: 使用图标增强统计信息的可读性
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

import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-components';

const Demo = () => {
  return (
    <>
      <StatisticCard
        title="Market Trend"
        tooltip="Market Description"
        style={{ maxWidth: 480 }}
        extra={<EllipsisOutlined />}
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
            alt="Bar Chart"
            width="100%"
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
        <h4>StatisticCard Chart Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>tooltip</strong>: 提示信息，鼠标悬停时显示
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角操作区域
          </li>
          <li>
            <strong>chart</strong>: 图表区域，可以是图片或图表组件
          </li>
        </ul>
        <h4>Chart 属性说明：</h4>
        <ul>
          <li>
            <strong>图片图表</strong>: 使用 img 标签显示静态图表
          </li>
          <li>
            <strong>动态图表</strong>: 可以集成 ECharts、AntV 等图表库
          </li>
          <li>
            <strong>响应式</strong>: 图表会自动适配容器宽度
          </li>
        </ul>
        <h4>Img 标签属性：</h4>
        <ul>
          <li>
            <strong>src</strong>: 图片源地址
          </li>
          <li>
            <strong>alt</strong>: 图片替代文本，用于无障碍访问
          </li>
          <li>
            <strong>width</strong>: 图片宽度，'100%' 表示占满容器宽度
          </li>
        </ul>
        <h4>图表类型支持：</h4>
        <ul>
          <li>
            <strong>静态图片</strong>: SVG、PNG、JPG 等格式的图表图片
          </li>
          <li>
            <strong>ECharts</strong>: 可以集成 ECharts 动态图表
          </li>
          <li>
            <strong>AntV</strong>: 可以集成 AntV 图表库
          </li>
          <li>
            <strong>自定义组件</strong>: 可以传入自定义的图表组件
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据可视化</strong>: 展示各类统计图表
          </li>
          <li>
            <strong>趋势分析</strong>: 展示数据趋势和变化
          </li>
          <li>
            <strong>对比分析</strong>: 展示数据对比和分布
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

import { StatisticCard } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const Demo = () => {
  return (
    <>
      <StatisticCard
        chartPlacement="left"
        statistic={{
          title: 'Frozen Amount',
          value: 112893,
          precision: 2,
          suffix: 'Yuan',
          description: (
            <>
              <Statistic title="Weekly Comparison" value="6.47%" trend="up" />
              <Statistic
                title="Monthly Comparison"
                value="6.47%"
                trend="down"
              />
            </>
          ),
        }}
        style={{ maxWidth: 584 }}
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/snEBTn9ax/zhexiantuchang.svg"
            alt="Line Chart"
            width="100%"
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
        <h4>StatisticCard Horizontal Left Layout Props 说明：</h4>
        <ul>
          <li>
            <strong>chartPlacement</strong>: 图表位置，'left' 表示图表显示在左侧
          </li>
          <li>
            <strong>statistic</strong>: 统计信息配置对象
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象，使用 maxWidth 控制最大宽度
          </li>
          <li>
            <strong>chart</strong>: 图表区域
          </li>
        </ul>
        <h4>Statistic 配置：</h4>
        <ul>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>precision</strong>: 数值精度，控制小数位数
          </li>
          <li>
            <strong>suffix</strong>: 数值后缀，如单位
          </li>
          <li>
            <strong>description</strong>: 统计描述，可以包含多个 Statistic 组件
          </li>
        </ul>
        <h4>嵌套 Statistic 组件：</h4>
        <ul>
          <li>
            <strong>title</strong>: 子统计项标题
          </li>
          <li>
            <strong>value</strong>: 子统计项数值
          </li>
          <li>
            <strong>trend</strong>: 趋势指示，'up' 或 'down'
          </li>
        </ul>
        <h4>ChartPlacement="left" 特点：</h4>
        <ul>
          <li>
            <strong>左侧图表</strong>: 图表显示在左侧，统计信息显示在右侧
          </li>
          <li>
            <strong>强调图表</strong>: 左侧的图表更加突出
          </li>
          <li>
            <strong>视觉引导</strong>: 从左到右的阅读习惯
          </li>
        </ul>
        <h4>样式配置：</h4>
        <ul>
          <li>
            <strong>maxWidth</strong>: 设置最大宽度，避免在大屏幕上过宽
          </li>
          <li>
            <strong>响应式</strong>: 在小屏幕上会自动调整布局
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>左侧图表</strong>: 可视化图表展示
          </li>
          <li>
            <strong>右侧信息</strong>: 主要统计信息和描述信息
          </li>
          <li>
            <strong>水平布局</strong>: 充分利用水平空间
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>图表展示</strong>: 强调图表的重要性
          </li>
          <li>
            <strong>数据可视化</strong>: 突出数据可视化效果
          </li>
          <li>
            <strong>趋势分析</strong>: 结合图表展示数据趋势
          </li>
          <li>
            <strong>仪表盘</strong>: 构建数据仪表盘
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>图表质量</strong>: 确保左侧图表清晰易懂
          </li>
          <li>
            <strong>信息层次</strong>: 右侧信息应该与图表相关
          </li>
          <li>
            <strong>空间平衡</strong>: 合理分配图表和信息的空间
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

import { StatisticCard } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const Demo = () => {
  return (
    <>
      <StatisticCard
        chartPlacement="right"
        statistic={{
          title: 'Frozen Amount',
          value: 112893,
          precision: 2,
          suffix: 'Yuan',
          description: (
            <>
              <Statistic title="Weekly Comparison" value="6.47%" trend="up" />
              <Statistic
                title="Monthly Comparison"
                value="6.47%"
                trend="down"
              />
            </>
          ),
        }}
        style={{ width: 584 }}
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/snEBTn9ax/zhexiantuchang.svg"
            alt="Line Chart"
            width="100%"
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
        <h4>StatisticCard Horizontal Layout Props 说明：</h4>
        <ul>
          <li>
            <strong>chartPlacement</strong>: 图表位置，'right'
            表示图表显示在右侧
          </li>
          <li>
            <strong>statistic</strong>: 统计信息配置对象
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
          <li>
            <strong>chart</strong>: 图表区域
          </li>
        </ul>
        <h4>Statistic 配置：</h4>
        <ul>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>precision</strong>: 数值精度，控制小数位数
          </li>
          <li>
            <strong>suffix</strong>: 数值后缀，如单位
          </li>
          <li>
            <strong>description</strong>: 统计描述，可以包含多个 Statistic 组件
          </li>
        </ul>
        <h4>嵌套 Statistic 组件：</h4>
        <ul>
          <li>
            <strong>title</strong>: 子统计项标题
          </li>
          <li>
            <strong>value</strong>: 子统计项数值
          </li>
          <li>
            <strong>trend</strong>: 趋势指示，'up' 或 'down'
          </li>
        </ul>
        <h4>ChartPlacement="right" 特点：</h4>
        <ul>
          <li>
            <strong>右侧图表</strong>: 图表显示在右侧，统计信息显示在左侧
          </li>
          <li>
            <strong>强调数据</strong>: 左侧的统计信息更加突出
          </li>
          <li>
            <strong>空间利用</strong>: 充分利用水平空间
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>左侧信息</strong>: 主要统计信息和描述信息
          </li>
          <li>
            <strong>右侧图表</strong>: 可视化图表展示
          </li>
          <li>
            <strong>水平布局</strong>: 充分利用水平空间
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据展示</strong>: 展示主要数据指标
          </li>
          <li>
            <strong>趋势分析</strong>: 结合图表展示数据趋势
          </li>
          <li>
            <strong>对比分析</strong>: 展示多个时间段的对比数据
          </li>
          <li>
            <strong>仪表盘</strong>: 构建数据仪表盘
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>信息层次</strong>: 确保主要信息和次要信息的层次清晰
          </li>
          <li>
            <strong>图表选择</strong>: 根据数据类型选择合适的图表
          </li>
          <li>
            <strong>空间平衡</strong>: 合理分配统计信息和图表的空间
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

import { StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const { Divider } = StatisticCard;

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
        <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
          <StatisticCard
            statistic={{
              title: 'Frozen Amount',
              value: 20190102,
              precision: 2,
              suffix: 'Yuan',
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                alt="Histogram"
                width="100%"
              />
            }
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'Design Resources',
              value: 234,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                alt="Histogram"
                width="100%"
              />
            }
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'Information Completeness',
              value: 5,
              suffix: '/ 100',
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                alt="Histogram"
                width="100%"
              />
            }
          />
        </StatisticCard.Group>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard.Group 图表分组 Props 说明：</h4>
        <ul>
          <li>
            <strong>direction</strong>: 排列方向，'row' 表示水平排列，'column'
            表示垂直排列
          </li>
          <li>
            <strong>children</strong>: StatisticCard 和 Divider 子组件
          </li>
        </ul>
        <h4>StatisticCard 配置：</h4>
        <ul>
          <li>
            <strong>statistic.title</strong>: 统计项标题
          </li>
          <li>
            <strong>statistic.value</strong>: 统计数值
          </li>
          <li>
            <strong>statistic.precision</strong>: 数值精度，控制小数位数
          </li>
          <li>
            <strong>statistic.suffix</strong>: 数值后缀，如单位或比例
          </li>
          <li>
            <strong>chart</strong>: 图表区域，每个卡片都可以有自己的图表
          </li>
        </ul>
        <h4>Divider 配置：</h4>
        <ul>
          <li>
            <strong>type</strong>: 分割线类型，根据响应式状态自动调整
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换为垂直布局
          </li>
          <li>
            <strong>分割线适配</strong>: 根据布局方向自动调整分割线类型
          </li>
          <li>
            <strong>图表适配</strong>: 图表会根据容器大小自动调整
          </li>
        </ul>
        <h4>图表展示特点：</h4>
        <ul>
          <li>
            <strong>独立图表</strong>: 每个统计卡片都有独立的图表
          </li>
          <li>
            <strong>统一风格</strong>: 所有图表使用相同的样式和尺寸
          </li>
          <li>
            <strong>响应式图表</strong>: 图表会随容器大小自动调整
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>多指标对比</strong>: 展示多个相关指标的对比
          </li>
          <li>
            <strong>数据仪表盘</strong>: 构建数据仪表盘和监控面板
          </li>
          <li>
            <strong>报表展示</strong>: 展示多维度统计报表
          </li>
          <li>
            <strong>分析页面</strong>: 数据分析和可视化页面
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>图表一致性</strong>: 保持所有图表的风格一致
          </li>
          <li>
            <strong>数据关联</strong>: 确保分组中的统计数据有关联性
          </li>
          <li>
            <strong>视觉平衡</strong>: 合理分配各卡片的视觉空间
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

import { StatisticCard } from '@ant-design/pro-components';

const { Operation } = StatisticCard;

const Demo = () => {
  return (
    <>
      <StatisticCard.Group>
        <StatisticCard
          statistic={{
            title: 'Service Mesh Count',
            value: 500,
          }}
        />
        <Operation>=</Operation>
        <StatisticCard
          statistic={{
            title: 'Unpublished',
            value: 234,
          }}
        />
        <Operation>+</Operation>
        <StatisticCard
          statistic={{
            title: 'Publishing',
            value: 112,
          }}
        />
        <Operation>+</Operation>
        <StatisticCard
          statistic={{
            title: 'Published',
            value: 255,
          }}
        />
      </StatisticCard.Group>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard Operation Props 说明：</h4>
        <ul>
          <li>
            <strong>children</strong>: 操作符内容，可以是数学符号如
            '='、'+'、'-'、'×'、'÷' 等
          </li>
        </ul>
        <h4>Operation 组件特点：</h4>
        <ul>
          <li>
            <strong>数学公式</strong>: 用于在统计卡片之间显示数学运算符号
          </li>
          <li>
            <strong>公式展示</strong>: 展示数据之间的数学关系
          </li>
          <li>
            <strong>视觉连接</strong>: 通过操作符连接多个统计卡片
          </li>
        </ul>
        <h4>StatisticCard 配置：</h4>
        <ul>
          <li>
            <strong>statistic.title</strong>: 统计项标题
          </li>
          <li>
            <strong>statistic.value</strong>: 统计数值
          </li>
        </ul>
        <h4>公式展示效果：</h4>
        <ul>
          <li>
            <strong>等号</strong>: 表示总数等于各部分之和
          </li>
          <li>
            <strong>加号</strong>: 表示各部分相加
          </li>
          <li>
            <strong>减号</strong>: 表示减法运算
          </li>
          <li>
            <strong>乘除号</strong>: 表示乘除运算
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据分解</strong>: 展示总数与各组成部分的关系
          </li>
          <li>
            <strong>公式计算</strong>: 展示数学公式和数据计算过程
          </li>
          <li>
            <strong>数据验证</strong>: 验证数据之间的逻辑关系
          </li>
          <li>
            <strong>教学展示</strong>: 用于数据分析和教学场景
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>公式清晰</strong>: 确保公式逻辑清晰易懂
          </li>
          <li>
            <strong>数据准确</strong>: 确保公式中的数值计算正确
          </li>
          <li>
            <strong>视觉平衡</strong>: 合理分配各部分的视觉权重
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

import type { StatisticProps } from '@ant-design/pro-components';
import { ProCard, StatisticCard } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const items = [
  { key: '1', title: 'All', value: 10, total: true },
  { key: '2', status: 'default', title: 'Unpublished', value: 5 },
  { key: '3', status: 'processing', title: 'Publishing', value: 3 },
  { key: '4', status: 'error', title: 'Publishing Error', value: 1 },
  { key: '5', status: 'success', title: 'Published Successfully', value: 1 },
];

const Demo = () => {
  return (
    <ProCard
      tabs={{
        onChange: (key) => {
          console.log('key', key);
        },
        items: items.map((item) => {
          return {
            key: item.key,
            style: { width: '100%' },
            label: (
              <Statistic
                layout="vertical"
                title={item.title}
                value={item.value}
                status={item.status as StatisticProps['status']}
                style={{
                  width: 120,
                  borderInlineEnd: item.total ? '1px solid #f0f0f0' : undefined,
                }}
              />
            ),
            children: (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fafafa',
                  height: 100,
                }}
              >
                Related display content {item.title}
              </div>
            ),
          };
        }),
      }}
    />
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const Demo = () => {
  return (
    <>
      <StatisticCard
        title="整体流量评分"
        extra={<EllipsisOutlined />}
        statistic={{
          value: 86.2,
          suffix: '分',
          description: <Statistic title="排名前" value="20%" />,
        }}
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg"
            width="100%"
            alt="进度条"
          />
        }
        footer={
          <>
            <Statistic
              value={15.1}
              title="累计注册数"
              suffix="万"
              layout="horizontal"
            />
            <Statistic
              value={15.1}
              title="本月注册数"
              suffix="万"
              layout="horizontal"
            />
          </>
        }
        style={{ width: 250 }}
      />

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard Footer Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角操作区域
          </li>
          <li>
            <strong>statistic</strong>: 主要统计信息配置
          </li>
          <li>
            <strong>chart</strong>: 图表区域
          </li>
          <li>
            <strong>footer</strong>: 底部区域，可以是 React 节点
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
        </ul>
        <h4>Footer 区域特点：</h4>
        <ul>
          <li>
            <strong>额外信息</strong>: 在卡片底部展示额外的统计信息
          </li>
          <li>
            <strong>布局灵活</strong>: 可以包含多个 Statistic 组件
          </li>
          <li>
            <strong>视觉层次</strong>: 与主要统计信息形成层次对比
          </li>
        </ul>
        <h4>Statistic 在 Footer 中的配置：</h4>
        <ul>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>suffix</strong>: 数值后缀，如单位
          </li>
          <li>
            <strong>layout</strong>: 布局方式，'horizontal' 表示水平布局
          </li>
        </ul>
        <h4>主要统计信息配置：</h4>
        <ul>
          <li>
            <strong>value</strong>: 主要统计数值
          </li>
          <li>
            <strong>suffix</strong>: 数值后缀
          </li>
          <li>
            <strong>description</strong>: 统计描述，可以是 Statistic 组件
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>主要信息</strong>: 在卡片中央突出显示主要统计信息
          </li>
          <li>
            <strong>图表展示</strong>: 在主要信息下方显示图表
          </li>
          <li>
            <strong>底部信息</strong>: 在卡片底部显示次要统计信息
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>评分展示</strong>: 展示评分和相关的详细数据
          </li>
          <li>
            <strong>数据对比</strong>: 在底部展示对比数据
          </li>
          <li>
            <strong>详细信息</strong>: 在底部展示补充信息
          </li>
          <li>
            <strong>多维度展示</strong>: 展示多个维度的统计数据
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>信息层次</strong>: 确保主要信息和次要信息的层次清晰
          </li>
          <li>
            <strong>数据关联</strong>: footer 中的数据应该与主要信息相关
          </li>
          <li>
            <strong>视觉平衡</strong>: 合理分配各部分的视觉空间
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

import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const { Statistic } = StatisticCard;

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
        <ProCard split={responsive ? 'horizontal' : 'vertical'}>
          <StatisticCard
            colSpan={responsive ? 24 : 6}
            title="Fiscal Year Performance Target"
            statistic={{
              value: 82.6,
              suffix: 'Billion',
              description: (
                <Statistic title="Daily Comparison" value="6.47%" trend="up" />
              ),
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg"
                alt="Progress Bar"
                width="100%"
              />
            }
            footer={
              <>
                <Statistic
                  value="70.98%"
                  title="Fiscal Year Performance Completion Rate"
                  layout="horizontal"
                />
                <Statistic
                  value="86.98%"
                  title="Performance Completion Rate Same Period Last Year"
                  layout="horizontal"
                />
                <Statistic
                  value="88.98%"
                  title="Performance Completion Rate Same Period Year Before Last"
                  layout="horizontal"
                />
              </>
            }
          />
          <StatisticCard.Group
            colSpan={responsive ? 24 : 18}
            direction={responsive ? 'column' : undefined}
          >
            <StatisticCard
              statistic={{
                title: 'Total Revenue for the Fiscal Year',
                value: 601987768,
                description: (
                  <Statistic
                    title="Daily Comparison"
                    value="6.15%"
                    trend="up"
                  />
                ),
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                  alt="Line Chart"
                  width="100%"
                />
              }
            >
              <Statistic
                title="Total Market Revenue"
                value={1982312}
                layout="vertical"
                description={
                  <Statistic
                    title="Daily Comparison"
                    value="6.15%"
                    trend="down"
                  />
                }
              />
            </StatisticCard>
            <StatisticCard
              statistic={{
                title: 'Daily Ranking',
                value: 6,
                description: (
                  <Statistic
                    title="Daily Comparison"
                    value="3.85%"
                    trend="down"
                  />
                ),
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                  alt="Line Chart"
                  width="100%"
                />
              }
            >
              <Statistic
                title="Revenue in the Last 7 Days"
                value={17458}
                layout="vertical"
                description={
                  <Statistic
                    title="Daily Comparison"
                    value="6.47%"
                    trend="up"
                  />
                }
              />
            </StatisticCard>
            <StatisticCard
              statistic={{
                title: 'Fiscal Year Performance Revenue Ranking',
                value: 2,
                description: (
                  <Statistic
                    title="Daily Comparison"
                    value="6.47%"
                    trend="up"
                  />
                ),
              }}
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                  alt="Line Chart"
                  width="100%"
                />
              }
            >
              <Statistic
                title="Monthly Payment Count"
                value={601}
                layout="vertical"
                description={
                  <Statistic
                    title="Daily Comparison"
                    value="6.47%"
                    trend="down"
                  />
                }
              />
            </StatisticCard>
          </StatisticCard.Group>
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
        <h4>ProCard 复杂布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>split</strong>: 分割方式，根据响应式状态自动调整
          </li>
          <li>
            <strong>children</strong>: StatisticCard 和 StatisticCard.Group
            子组件
          </li>
        </ul>
        <h4>StatisticCard 配置：</h4>
        <ul>
          <li>
            <strong>colSpan</strong>: 栅格列数，控制组件在栅格系统中的宽度
          </li>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>statistic</strong>: 主要统计信息配置
          </li>
          <li>
            <strong>chart</strong>: 图表区域
          </li>
          <li>
            <strong>footer</strong>: 底部区域，包含多个 Statistic 组件
          </li>
        </ul>
        <h4>StatisticCard.Group 配置：</h4>
        <ul>
          <li>
            <strong>colSpan</strong>: 栅格列数，控制整个组的宽度
          </li>
          <li>
            <strong>direction</strong>: 排列方向，响应式时自动调整
          </li>
          <li>
            <strong>children</strong>: 多个 StatisticCard 子组件
          </li>
        </ul>
        <h4>嵌套 Statistic 组件：</h4>
        <ul>
          <li>
            <strong>layout</strong>: 布局方式，'vertical'
            表示垂直布局，'horizontal' 表示水平布局
          </li>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>description</strong>: 统计描述，可以是 Statistic 组件
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换布局
          </li>
          <li>
            <strong>栅格适配</strong>: colSpan 根据响应式状态自动调整
          </li>
          <li>
            <strong>方向切换</strong>: Group 的 direction 根据响应式状态调整
          </li>
        </ul>
        <h4>栅格系统说明：</h4>
        <ul>
          <li>
            <strong>24 栅格</strong>: 使用 24 栅格系统，colSpan 表示占用的列数
          </li>
          <li>
            <strong>响应式适配</strong>: 小屏幕时 colSpan 自动调整为
            24（占满宽度）
          </li>
          <li>
            <strong>比例控制</strong>: 通过 colSpan 控制各部分的宽度比例
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据仪表盘</strong>: 构建复杂的数据仪表盘
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
            <strong>栅格规划</strong>: 合理规划 colSpan 值，确保布局平衡
          </li>
          <li>
            <strong>响应式设计</strong>: 确保在不同屏幕尺寸下都有良好的显示效果
          </li>
          <li>
            <strong>信息层次</strong>: 通过布局突出重要的信息
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

import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const { Statistic } = StatisticCard;

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
          title="Data Overview"
          extra="Friday, September 28, 2019"
          split={responsive ? 'horizontal' : 'vertical'}
          headerBordered
          variant="outlined"
        >
          <ProCard split="horizontal">
            <ProCard split="horizontal">
              <ProCard split="vertical">
                <StatisticCard
                  statistic={{
                    title: 'Total Traffic Yesterday',
                    value: 234,
                    description: (
                      <Statistic
                        title="Compared to Monthly Average Traffic"
                        value="8.04%"
                        trend="down"
                      />
                    ),
                  }}
                />
                <StatisticCard
                  statistic={{
                    title: 'Total Traffic This Month',
                    value: 234,
                    description: (
                      <Statistic
                        title="Month-on-Month"
                        value="8.04%"
                        trend="up"
                      />
                    ),
                  }}
                />
              </ProCard>
              <ProCard split="vertical">
                <StatisticCard
                  statistic={{
                    title: 'Ongoing Experiments',
                    value: '12/56',
                    suffix: 'items',
                  }}
                />
                <StatisticCard
                  statistic={{
                    title: 'Total Historical Experiments',
                    value: '134',
                    suffix: 'items',
                  }}
                />
              </ProCard>
            </ProCard>
            <StatisticCard
              title="Traffic Trends"
              chart={
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg"
                  width="100%"
                  alt="Bar Chart"
                />
              }
            />
          </ProCard>
          <StatisticCard
            title="Traffic Usage"
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
                alt="Dashboard"
                width="100%"
              />
            }
          />
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
        <h4>ProCard 嵌套布局 Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角额外信息
          </li>
          <li>
            <strong>split</strong>: 分割方式，'horizontal'
            表示水平分割，'vertical' 表示垂直分割
          </li>
          <li>
            <strong>headerBordered</strong>: 是否显示头部边框
          </li>
          <li>
            <strong>variant</strong>: 卡片变体样式，'outlined' 表示带边框
          </li>
        </ul>
        <h4>StatisticCard 嵌套配置：</h4>
        <ul>
          <li>
            <strong>statistic.title</strong>: 统计项标题
          </li>
          <li>
            <strong>statistic.value</strong>: 统计数值
          </li>
          <li>
            <strong>statistic.description</strong>: 统计描述，可以是 Statistic
            组件
          </li>
          <li>
            <strong>statistic.suffix</strong>: 数值后缀
          </li>
          <li>
            <strong>chart</strong>: 图表区域
          </li>
        </ul>
        <h4>嵌套 Statistic 组件：</h4>
        <ul>
          <li>
            <strong>title</strong>: 子统计项标题
          </li>
          <li>
            <strong>value</strong>: 子统计项数值
          </li>
          <li>
            <strong>trend</strong>: 趋势指示，'up' 或 'down'
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换分割方式
          </li>
          <li>
            <strong>自适应分割</strong>: 根据屏幕尺寸自动调整分割方向
          </li>
          <li>
            <strong>嵌套支持</strong>: 支持多层嵌套的卡片布局
          </li>
        </ul>
        <h4>布局结构：</h4>
        <ul>
          <li>
            <strong>外层 ProCard</strong>: 整体容器，控制主要分割方向
          </li>
          <li>
            <strong>中层 ProCard</strong>: 中间容器，处理水平分割
          </li>
          <li>
            <strong>内层 ProCard</strong>: 内层容器，处理垂直分割
          </li>
          <li>
            <strong>StatisticCard</strong>: 统计卡片，展示具体数据
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

import { StatisticCard } from '@ant-design/pro-components';

const { Statistic } = StatisticCard;

const Demo = () => {
  return (
    <>
      <StatisticCard style={{ width: 160 }}>
        <Statistic title="Daily Comparison" value="7.60%" trend="up" />
        <Statistic title="Weekly Comparison" value="7.60%" trend="down" />
        <Statistic title="Weekly Comparison" value="0.00%" />
      </StatisticCard>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard Trend Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>value</strong>: 统计数值
          </li>
          <li>
            <strong>trend</strong>: 趋势指示，可选值：'up' | 'down' | undefined
          </li>
        </ul>
        <h4>Trend 属性说明：</h4>
        <ul>
          <li>
            <strong>up</strong>: 上升趋势，显示绿色上升箭头
          </li>
          <li>
            <strong>down</strong>: 下降趋势，显示红色下降箭头
          </li>
          <li>
            <strong>undefined</strong>: 无趋势，不显示箭头
          </li>
        </ul>
        <h4>趋势显示特点：</h4>
        <ul>
          <li>
            <strong>颜色区分</strong>: 上升趋势为绿色，下降趋势为红色
          </li>
          <li>
            <strong>箭头指示</strong>: 使用箭头图标直观显示趋势方向
          </li>
          <li>
            <strong>数值对比</strong>: 结合数值变化展示趋势信息
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据对比</strong>: 展示同比、环比等数据变化趋势
          </li>
          <li>
            <strong>指标监控</strong>: 监控关键业务指标的变化趋势
          </li>
          <li>
            <strong>报表分析</strong>: 在报表中展示数据趋势分析
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

import { StatisticCard } from '@ant-design/pro-components';

const { Divider } = StatisticCard;

const Demo = () => {
  return (
    <>
      <StatisticCard.Group>
        <StatisticCard
          statistic={{
            title: 'All',
            tip: 'Help text',
            value: 10,
          }}
        />
        <Divider />
        <StatisticCard
          statistic={{
            title: 'Unpublished',
            value: 5,
            status: 'default',
          }}
        />
        <StatisticCard
          statistic={{
            title: 'Publishing',
            value: 3,
            status: 'processing',
          }}
        />
        <StatisticCard
          statistic={{
            title: 'Publishing Error',
            value: 2,
            status: 'error',
          }}
        />
        <StatisticCard
          statistic={{
            title: 'Published Successfully',
            value: '-',
            status: 'success',
          }}
        />
      </StatisticCard.Group>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard Status Props 说明：</h4>
        <ul>
          <li>
            <strong>statistic.title</strong>: 统计项标题
          </li>
          <li>
            <strong>statistic.tip</strong>: 提示信息，鼠标悬停时显示
          </li>
          <li>
            <strong>statistic.value</strong>: 统计数值，可以是数字、字符串或 '-'
          </li>
          <li>
            <strong>statistic.status</strong>: 状态指示，可选值：'default' |
            'processing' | 'error' | 'success'
          </li>
        </ul>
        <h4>Status 状态说明：</h4>
        <ul>
          <li>
            <strong>default</strong>: 默认状态，无特殊颜色标识
          </li>
          <li>
            <strong>processing</strong>: 处理中状态，显示蓝色或橙色
          </li>
          <li>
            <strong>error</strong>: 错误状态，显示红色
          </li>
          <li>
            <strong>success</strong>: 成功状态，显示绿色
          </li>
        </ul>
        <h4>状态显示特点：</h4>
        <ul>
          <li>
            <strong>颜色区分</strong>: 不同状态使用不同的颜色进行区分
          </li>
          <li>
            <strong>视觉反馈</strong>: 通过颜色提供直观的状态反馈
          </li>
          <li>
            <strong>语义化</strong>: 状态值与业务语义相对应
          </li>
        </ul>
        <h4>Divider 组件：</h4>
        <ul>
          <li>
            <strong>默认分割线</strong>: 不设置 type 时使用默认分割线
          </li>
          <li>
            <strong>分隔作用</strong>: 用于分隔不同的统计项
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>状态统计</strong>: 统计不同状态下的数据量
          </li>
          <li>
            <strong>进度监控</strong>: 监控任务或流程的执行状态
          </li>
          <li>
            <strong>错误统计</strong>: 统计错误和成功的数据
          </li>
          <li>
            <strong>状态展示</strong>: 展示系统或业务的状态分布
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>状态一致性</strong>: 保持状态值与业务逻辑的一致性
          </li>
          <li>
            <strong>颜色语义</strong>: 使用符合用户认知的颜色语义
          </li>
          <li>
            <strong>数据完整性</strong>: 确保所有状态的数据都有统计
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

import { StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from '@rc-component/resize-observer';
import { useState } from 'react';

const { Statistic, Divider } = StatisticCard;

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
        <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
          <StatisticCard
            statistic={{
              title: 'Total Traffic (Visits)',
              value: 601986875,
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'Paid Traffic',
              value: 3701928,
              description: <Statistic title="Proportion" value="61.5%" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
                alt="Percentage"
                width="100%"
              />
            }
            chartPlacement="left"
          />
          <StatisticCard
            statistic={{
              title: 'Free Traffic',
              value: 1806062,
              description: <Statistic title="Proportion" value="38.5%" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
                alt="Percentage"
                width="100%"
              />
            }
            chartPlacement="left"
          />
        </StatisticCard.Group>
      </RcResizeObserver>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard ChartPlacement Props 说明：</h4>
        <ul>
          <li>
            <strong>statistic.title</strong>: 统计项标题
          </li>
          <li>
            <strong>statistic.value</strong>: 统计数值
          </li>
          <li>
            <strong>statistic.description</strong>: 统计描述，可以是 Statistic
            组件
          </li>
          <li>
            <strong>chart</strong>: 图表区域
          </li>
          <li>
            <strong>chartPlacement</strong>: 图表位置，'left' 表示左侧，'right'
            表示右侧
          </li>
        </ul>
        <h4>ChartPlacement 属性说明：</h4>
        <ul>
          <li>
            <strong>left</strong>: 图表显示在左侧，统计信息显示在右侧
          </li>
          <li>
            <strong>right</strong>: 图表显示在右侧，统计信息显示在左侧
          </li>
          <li>
            <strong>默认值</strong>: 不设置时图表默认显示在右侧
          </li>
        </ul>
        <h4>嵌套 Statistic 组件：</h4>
        <ul>
          <li>
            <strong>title</strong>: 子统计项标题
          </li>
          <li>
            <strong>value</strong>: 子统计项数值
          </li>
        </ul>
        <h4>响应式布局特点：</h4>
        <ul>
          <li>
            <strong>断点控制</strong>: 当容器宽度小于 596px 时切换为垂直布局
          </li>
          <li>
            <strong>分割线适配</strong>: 根据布局方向自动调整分割线类型
          </li>
          <li>
            <strong>图表适配</strong>: 图表会根据容器大小自动调整
          </li>
        </ul>
        <h4>布局效果：</h4>
        <ul>
          <li>
            <strong>左侧图表</strong>: 图表在左侧，统计信息在右侧，适合强调图表
          </li>
          <li>
            <strong>右侧图表</strong>: 统计信息在左侧，图表在右侧，适合强调数据
          </li>
          <li>
            <strong>响应式</strong>: 在小屏幕上自动调整为垂直布局
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据对比</strong>: 展示不同类别的数据对比
          </li>
          <li>
            <strong>比例展示</strong>: 展示各部分占总体的比例
          </li>
          <li>
            <strong>趋势分析</strong>: 结合图表展示数据趋势
          </li>
        </ul>
        <h4>最佳实践：</h4>
        <ul>
          <li>
            <strong>图表选择</strong>: 根据数据类型选择合适的图表类型
          </li>
          <li>
            <strong>布局平衡</strong>: 合理分配图表和统计信息的空间
          </li>
          <li>
            <strong>视觉层次</strong>: 通过布局突出重要的信息
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

import { EllipsisOutlined, RightOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-components';
import { Space, theme } from 'antd';

const { Statistic } = StatisticCard;

const Demo = () => {
  const { token } = theme.useToken();
  return (
    <>
      <StatisticCard
        title={
          <Space>
            <span>Department One</span>
            <RightOutlined style={{ color: token.colorTextHeading }} />
          </Space>
        }
        extra={<EllipsisOutlined />}
        statistic={{
          value: 1102893,
          prefix: '¥',
          description: (
            <Space>
              <Statistic title="Actual Completion" value="82.3%" />
              <Statistic title="Current Target" value="¥6000" />
            </Space>
          ),
        }}
        chart={
          <>
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
              alt="chart"
              width="100%"
            />
          </>
        }
        style={{ width: 268 }}
      />

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4>StatisticCard Props 说明：</h4>
        <ul>
          <li>
            <strong>title</strong>: 卡片标题，可以是字符串或 React 节点
          </li>
          <li>
            <strong>extra</strong>: 卡片右上角操作区域，可以是字符串或 React
            节点
          </li>
          <li>
            <strong>statistic</strong>: 统计信息配置对象
          </li>
          <li>
            <strong>chart</strong>: 图表区域，可以是图片或图表组件
          </li>
          <li>
            <strong>style</strong>: 卡片样式对象
          </li>
        </ul>
        <h4>Statistic 配置对象属性：</h4>
        <ul>
          <li>
            <strong>value</strong>: 统计数值，可以是数字或字符串
          </li>
          <li>
            <strong>prefix</strong>: 数值前缀，如货币符号 '¥'
          </li>
          <li>
            <strong>suffix</strong>: 数值后缀，如单位 '%'
          </li>
          <li>
            <strong>description</strong>: 统计描述，可以是字符串或 React 节点
          </li>
          <li>
            <strong>precision</strong>: 数值精度，控制小数位数
          </li>
        </ul>
        <h4>Statistic 子组件 Props：</h4>
        <ul>
          <li>
            <strong>title</strong>: 统计项标题
          </li>
          <li>
            <strong>value</strong>: 统计项数值
          </li>
          <li>
            <strong>prefix</strong>: 统计项前缀
          </li>
          <li>
            <strong>suffix</strong>: 统计项后缀
          </li>
        </ul>
        <h4>Chart 区域说明：</h4>
        <ul>
          <li>
            <strong>图片图表</strong>: 使用 img 标签显示静态图表
          </li>
          <li>
            <strong>动态图表</strong>: 可以集成 ECharts、AntV 等图表库
          </li>
          <li>
            <strong>响应式</strong>: 图表会自动适配容器宽度
          </li>
        </ul>
        <h4>使用场景：</h4>
        <ul>
          <li>
            <strong>数据展示</strong>: 展示关键业务指标和统计数据
          </li>
          <li>
            <strong>仪表盘</strong>: 构建数据仪表盘和监控面板
          </li>
          <li>
            <strong>报表</strong>: 生成各类统计报表
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



import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const settings: Partial<ProSettings> | undefined = {
    fixSiderbar: true,
    layout: 'top',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: <div>七妮妮</div>,
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                  }}
                  prefix={<SearchOutlined />}
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '200vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
} from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <ProConfigProvider dark={true}>
      <ProLayout
        {...defaultProps}
        splitMenus
        location={{
          pathname,
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <p
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              Power by Ant Design
            </p>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
      >
        <PageContainer
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        >
          <ProCard
            style={{
              height: '200vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </ProConfigProvider>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { Avatar, Image, Space } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: 'side',
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        collapsed={false}
        menu={{
          type: 'group',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <div
              key={1}
              style={{
                height: '200px',
              }}
            >
              <Image
                width={'100%'}
                preview={false}
                height={132}
                src="https://gw.alipayobjects.com/zos/bmw-prod/d283f09a-64d6-4d59-bfc7-37b49ea0da2b.svg"
              />
              <Space
                align="center"
                size="middle"
                style={{
                  width: '100%',
                  marginBlockStart: '32px',
                }}
              >
                <Avatar
                  src="https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"
                  size="small"
                />
                <div
                  style={{
                    fontSize: '14px',
                    marginInlineEnd: '32px',
                  }}
                >
                  七妮妮
                </div>
                <InfoCircleFilled key="InfoCircleFilled" />
                <QuestionCircleFilled key="QuestionCircleFilled" />
                <GithubFilled key="GithubFilled" />
              </Space>
            </div>,
          ];
        }}
        menuRender={(props, defaultDom) => {
          console.log('defaultDom', defaultDom);
          return defaultDom;
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import defaultProps from './_defaultProps';

const Demo = () => {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        menuItemRender={(item, dom) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            pre {dom}
          </div>
        )}
        subMenuItemRender={(_, dom) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            pre {dom}
          </div>
        )}
        title="Remax"
        logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
        menuHeaderRender={(logo, title) => (
          <div
            id="customize_menu_header"
            style={{
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
            onClick={() => {
              window.open('https://remaxjs.org/');
            }}
          >
            {logo}
            {title}
          </div>
        )}
        {...defaultProps}
        location={{
          pathname: '/welcome',
        }}
      >
        <PageContainer content="欢迎使用">Hello World</PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProHelp, ProHelpPanel } from '@ant-design/pro-components';
import { App } from 'antd';
import ReactMarkdown from 'react-markdown';

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

const Demo = () => {
  const map = new Map();
  map.set(
    'markdown',
    (item: {
      valueType: string;
      children: {
        className: string;
        children: string;
      };
    }) => {
      return (
        <div className={item.children.className}>
          <ReactMarkdown>{item.children.children?.trim()}</ReactMarkdown>
        </div>
      );
    },
  );
  return (
    <App>
      <div
        style={{
          margin: 24,
          paddingBlockEnd: 128,
          display: 'flex',
          gap: 24,
          flexDirection: 'column',
        }}
      >
        <ProHelp<{
          markdown: {
            className: string;
            children: string;
          };
        }>
          valueTypeMap={map}
          onLoadContext={async (key) => {
            await waitTime(1000);
            if (key === '1') {
              return [
                {
                  valueType: 'h1',
                  children: '如何开始操作数据授权？',
                },
                {
                  valueType: 'text',
                  children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                },
                {
                  valueType: 'html',
                  children: {
                    children: `<b>加粗文本</b><br><br>
  <i>斜体文本</i><br><br>
  <code>电脑自动输出</code><br><br>
  这是 <sub> 下标</sub> 和 <sup> 上标</sup>
  `,
                  },
                },
              ];
            }
            return [
              {
                valueType: 'h1',
                children: 'Markdown 语法',
              },
              {
                valueType: 'markdown',
                children: {
                  className: 'markdown',
                  children: `

# h1 Heading 8-)

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

                 

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code


Block code "fences"

\`\`\` 
Sample text here...
\`\`\` 

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::
`,
                },
              },
              {
                valueType: 'inlineLink',
                children: {
                  href: 'https://www.alipay.com',
                  children: '摩斯产品',
                },
              },
              {
                valueType: 'text',
                children:
                  '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
              },
            ];
          }}
          dataSource={[
            {
              title: '常见问题',
              key: 'default',
              children: [
                {
                  title: 'html语法',
                  key: '1',
                  asyncLoad: true,
                },
                {
                  title: 'markdown语法',
                  key: '2',
                  asyncLoad: true,
                },
              ],
            },
          ]}
        >
          <div
            style={{
              width: 400,
            }}
          >
            <ProHelpPanel defaultSelectedKey="1" height={448} />
          </div>
        </ProHelp>
      </div>
    </App>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { UserOutlined } from '@ant-design/icons';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import complexMenu from './complexMenu';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/home',
      }}
      fixSiderbar={false}
      collapsedButtonRender={false}
      collapsed={false}
      iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
      route={{
        routes: [
          {
            path: '/home',
            name: '收藏',
            icon: 'icon-shoucang1',
          },
          {
            path: '/home/overview',
            name: 'FaceBook',
            icon: 'icon-facebook',
          },
          {
            path: '/home/search',
            name: 'Twitter',
            icon: 'icon-twitter',
          },
        ],
      }}
      headerRender={false}
    >
      <ProLayout
        location={{
          pathname: '/home/overview',
        }}
        fixSiderbar={false}
        route={{
          routes: complexMenu,
        }}
        style={{
          height: '400px',
        }}
        menu={{
          hideMenuWhenCollapsed: true,
        }}
        avatarProps={{
          icon: <UserOutlined />,
        }}
        menuHeaderRender={false}
      >
        <PageContainer content="欢迎使用">
          <div>Hello World</div>
        </PageContainer>
      </ProLayout>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { AppItemProps, ProSettings } from '@ant-design/pro-components';
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import { Modal } from 'antd';
import defaultProps from './_defaultProps';

const AppGroupList: any = [
  {
    title: 'UI 设计语言',
    desc: '杭州市较知名的 UI 设计语言',
    children: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: 'Ant Design',
        desc: '杭州市较知名的 UI 设计语言',
        url: 'https://ant.design',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
        title: 'Pro Components',
        desc: '专业级 UI 组件库',
        url: 'https://procomponents.ant.design/',
      },
    ],
  },
  {
    title: 'UI 设计语言 2组111',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    desc: '专业级 UI 组件库',
    url: 'https://procomponents.ant.design/',
    children: [
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案',
        url: 'https://antv.vision/',
        target: '_blank',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案',
        url: 'https://antv.vision/',
        target: '_blank',
      },
    ],
  },
  {
    title: '待分组',
    desc: '专业级 UI 组件库',
    children: [
      {
        title: '工具',
        desc: '知识创作与分享工具',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
        url: 'https://www.yuque.com/',
      },
      {
        title: '前端应用框架',
        desc: '插件化的企业级前端应用框架。',
        icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
        url: 'https://umijs.org/zh-CN/docs',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
        title: 'qiankun',
        desc: '可能是你见过最完善的微前端解决方案🧐',
        url: 'https://qiankun.umijs.org/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
        title: 'Kitchen ',
        desc: 'Sketch 工具集',
        url: 'https://kitchen.alipay.com/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '为组件开发场景而生的文档工具',
        url: 'https://d.umijs.org/zh-CN',
      },
    ],
  },
];

const Demo = () => {
  const settings: ProSettings = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };
  const itemClick = (
    item: AppItemProps,
    popoverRef?: React.RefObject<HTMLSpanElement>,
  ) => {
    // 点击后关闭 Popover
    popoverRef?.current?.click?.();

    Modal?.confirm({
      width: 600,
      title: '点击项 详细数据',
      content: (
        <pre style={{ overflow: 'auto' }}>
          {JSON.stringify(typeof item === 'object' ? item : {}, null, 2)}
        </pre>
      ),
      okText: '前往',
      onOk: () => window.open(item?.url),
    });
  };

  return (
    <div id="test-pro-layout" style={{ height: '100vh' }}>
      <ProConfigProvider hashed={false}>
        <ProLayout
          {...defaultProps}
          appList={AppGroupList}
          itemClick={itemClick}
          location={{ pathname: '/list/sub-page/sub-sub-page1' }}
          siderMenuType="group"
          menu={{ collapsedShowGroupTitle: true }}
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            title: '七妮妮',
          }}
          {...settings}
        />
      </ProConfigProvider>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import complexMenu from './complexMenu';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/data_hui/data_hui2',
      }}
      collapsed={false}
      collapsedButtonRender={false}
      route={{
        routes: complexMenu,
      }}
      menu={{ defaultOpenAll: true, hideMenuWhenCollapsed: true }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CrownOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Button, Input, Result, Tag } from 'antd';
import { useState } from 'react';

const defaultProps = {
  routes: [
    {
      path: '/welcome',
      name: '欢迎',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
    {
      path: '/admin/sub-page2',
      name: '二级页面',
      icon: <UserOutlined />,
      component: './Welcome',
    },
    {
      path: '/admin/sub-page3',
      name: '三级页面',
      icon: <SmileOutlined />,
      component: './Welcome',
    },
  ],
};

const Demo = () => {
  const [pathname, setPathname] = useState('/welcome');
  return (
    <>
      <ProLayout
        route={defaultProps}
        location={{
          pathname,
        }}
        fixSiderbar
        headerRender={false}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          icon: <UserOutlined />,
        }}
      >
        <PageContainer
          onBack={() => null}
          tags={<Tag color="blue">状态一</Tag>}
          header={{
            style: {
              padding: '8px 16px',
              backgroundColor: '#fff',
              position: 'fixed',
              top: 0,
              width: '100%',
              left: 0,
              zIndex: 999,
              boxShadow: '0 2px 8px #f0f1f2',
            },
          }}
          style={{
            paddingBlockStart: 48,
          }}
          extra={[
            <Input.Search
              key="search"
              style={{
                width: 240,
              }}
            />,
            <Button key="3">操作一</Button>,
            <Button key="2" type="primary">
              操作一
            </Button>,
          ]}
        >
          <div
            style={{
              height: '120vh',
              minHeight: 600,
            }}
          >
            <Result
              status="404"
              style={{
                height: '100%',
                background: '#fff',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </div>
        </PageContainer>
      </ProLayout>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const settings: Partial<ProSettings> | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        token={{
          bgLayout: '#fff',
          header: {
            colorBgHeader: '#fff',
          },
          sider: {
            colorMenuBackground: '#fff',
          },
          pageContainer: {
            colorBgPageContainer: '#fff',
          },
        }}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: <div>七妮妮</div>,
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                  }}
                  prefix={<SearchOutlined />}
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '200vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  CrownOutlined,
  LeftOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-components';
import { Button, Result, Space, Tag } from 'antd';
import { useState } from 'react';

const defaultProps = {
  routes: [
    {
      path: '/admin/sub-page1',
      name: '一级页面',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
    {
      path: '/admin/sub-page2',
      name: '二级页面',
      icon: <UserOutlined />,
      component: './Welcome',
    },
    {
      path: '/admin/sub-page3',
      name: '三级页面',
      icon: <SmileOutlined />,
      component: './Welcome',
    },
  ],
};

const defaultHomeProps = {
  routes: [
    {
      path: '/',
      name: '首页',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
    {
      path: '/admin/sub-page1',
      name: '详情页',
      icon: <SmileOutlined />,
      component: './Welcome',
    },
  ],
};

const Demo = () => {
  const [pathname, setPathname] = useState('/admin/sub-page1');
  return (
    <>
      <ProLayout
        route={pathname === '/' ? defaultHomeProps : defaultProps}
        location={{
          pathname,
        }}
        logoStyle={{
          backgroundColor: '#eee',
        }}
        menuHeaderRender={(logo, title, props) => {
          if (pathname === '/') {
            return (
              <a>
                {logo}
                {title}
              </a>
            );
          }
          if (props?.collapsed) {
            return (
              <Space>
                <LeftOutlined
                  style={{
                    fontSize: 24,
                  }}
                />
              </Space>
            );
          }
          return (
            <Space direction="vertical">
              <Button
                size="small"
                icon={<LeftOutlined />}
                onClick={() => {
                  setPathname('/');
                }}
              >
                返回应用列表
              </Button>
              <b>alipay_dev_gzone</b>
              <span>Creation Time 2017-01-10</span>
              <Tag color="warning">运行中</Tag>
            </Space>
          );
        }}
        fixSiderbar
        headerRender={() => {
          return null;
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          icon: <UserOutlined />,
        }}
      >
        <div
          style={{
            height: '120vh',
            minHeight: 600,
          }}
        >
          <Result
            status="404"
            style={{
              height: '100%',
              background: '#fff',
            }}
            icon={
              <img
                src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aPIBS5gRPu4AAAAAAAAAAAAAARQnAQ"
                alt="404"
              />
            }
            title="Hello World"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary">Back Home</Button>}
          />
        </div>
      </ProLayout>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import defaultProps from './_defaultProps';

const Demo = () => (
  <ProLayout
    {...defaultProps}
    style={{
      height: '100vh',
    }}
    location={{
      pathname: '/welcome',
    }}
    menuRender={(props, dom) => (
      <div
        style={{
          background: '#fff',
          boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)',
          overflow: 'hidden',
          height: '100%',
          width: props.collapsed ? 0 : props.siderWidth || 256,
        }}
      >
        {dom}
      </div>
    )}
  >
    <PageContainer content="欢迎使用">Hello World</PageContainer>
  </ProLayout>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  CrownOutlined,
  InfoCircleOutlined,
  MergeCellsOutlined,
  QuestionCircleOutlined,
  TabletOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        fixSiderbar
        route={{
          path: '/',
          routes: [
            {
              path: '/admin',
              name: '管理页',
              icon: <CrownOutlined />,
              access: 'canAdmin',
              component: './Admin',
              routes: [
                {
                  path: '/admin/sub-page1',
                  name: '一级页面',
                  icon: <CrownOutlined />,
                  component: './Welcome',
                },
                {
                  path: '/admin/sub-page2',
                  name: '二级页面',
                  icon: <CrownOutlined />,
                  component: './Welcome',
                },
                {
                  path: '/admin/sub-page3',
                  name: '三级页面',
                  icon: <CrownOutlined />,
                  component: './Welcome',
                },
              ],
            },
            {
              name: '列表页',
              icon: <TabletOutlined />,
              path: '/list',
              component: './ListTableList',
              routes: [
                {
                  path: '/list/sub-page2',
                  name: '二级列表页面',
                  icon: <CrownOutlined />,
                  component: './Welcome',
                },
                {
                  path: '/list/sub-page3',
                  name: '三级列表页面',
                  icon: <CrownOutlined />,
                  component: './Welcome',
                },
              ],
            },
          ],
        }}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: 'Pro Layout',
        }}
        avatarProps={{
          icon: <UserOutlined />,
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={() => [
          <InfoCircleOutlined key="InfoCircleOutlined" />,
          <QuestionCircleOutlined key="QuestionCircleOutlined" />,
          <MergeCellsOutlined key="MergeCellsOutlined" />,
        ]}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <p
              style={{
                textAlign: 'center',
                color: 'rgba(0,0,0,0.6)',
                paddingBlockStart: 12,
              }}
            >
              Power by Ant Design
            </p>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '120vh',
              minHeight: 600,
            }}
          >
            <Result
              status="404"
              style={{
                height: '100%',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import type { ErrorInfo } from 'react';
import React, { useState } from 'react';

class CustomBoundary extends React.Component<
  Record<string, any>,
  { hasError: boolean; errorInfo: string }
> {
  state = { hasError: false, errorInfo: '' };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorInfo: error.message };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Result
          icon={
            <img
              width={256}
              src="https://gw.alipayobjects.com/zos/antfincdn/zIgkN%26mpMZ/shibaizhuangtaizuo.png"
            />
          }
          style={{
            height: '100%',
            background: '#fff',
          }}
          title="错误处理"
          extra={
            <>
              <div
                style={{
                  maxWidth: 620,
                  textAlign: 'start',
                  backgroundColor: 'rgba(255,229,100,0.3)',
                  borderInlineStartColor: '#ffe564',
                  borderInlineStartWidth: '9px',
                  borderInlineStartStyle: 'solid',
                  padding: '20px 45px 20px 26px',
                  margin: 'auto',
                  marginBlockEnd: '30px',
                  marginBlockStart: '20px',
                }}
              >
                <p>注意</p>
                <p>
                  错误边界<strong>无法</strong>捕获以下场景中产生的错误：
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                  }}
                >
                  <li>
                    事件处理（
                    <a href="https://zh-hans.reactjs.org/docs/error-boundaries.html#how-about-event-handlers#how-about-event-handlers">
                      了解更多
                    </a>
                    ）
                  </li>
                  <li>
                    异步代码（例如 <code>setTimeout</code> 或{' '}
                    <code>requestAnimationFrame</code> 回调函数）
                  </li>
                  <li>服务端渲染</li>
                  <li>它自身抛出来的错误（并非它的子组件）</li>
                </ul>
              </div>
              <Button
                danger
                type="primary"
                onClick={() => {
                  window.location.reload();
                }}
              >
                刷新页面
              </Button>
            </>
          }
        />
      );
    }
    return this.props.children;
  }
}

const ErrorTriggerTestPage = () => {
  // default to throw error for snapshot test
  const [error, setError] = useState<boolean>(true);
  if (error) throw new Error('渲染发生了错误');
  return (
    <Button
      danger
      type="primary"
      onClick={() => {
        setError(true);
      }}
    >
      触发错误
    </Button>
  );
};

const Demo = () => {
  const [pathname, setPathname] = useState('/default');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        route={{
          path: '/',
          routes: [
            {
              path: '/default',
              name: '默认错误',
            },
            {
              path: '/custom',
              name: '自定义错误',
            },
          ],
        }}
        location={{
          pathname,
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        ErrorBoundary={pathname === '/custom' ? CustomBoundary : undefined}
      >
        <PageContainer>
          <ErrorTriggerTestPage />
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { Button, Descriptions, Result, Space, Statistic } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人">张三</Descriptions.Item>
    <Descriptions.Item label="联系方式">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="备注">
      中国浙江省杭州市西湖区古翠路
    </Descriptions.Item>
  </Descriptions>
);

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
  });
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: 'Pro Layout',
        }}
        menuFooterRender={(props) => {
          return (
            <a
              style={{
                lineHeight: '48rpx',
                display: 'flex',
                height: 48,
                color: 'rgba(255, 255, 255, 0.65)',
                alignItems: 'center',
              }}
              href="https://preview.pro.ant.design/dashboard/analysis"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="pro-logo"
                src="https://procomponents.ant.design/favicon.ico"
                style={{
                  width: 16,
                  height: 16,
                  margin: '0 16px',
                  marginInlineEnd: 10,
                }}
              />
              {!props?.collapsed && 'Preview Pro'}
            </a>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          icon: <UserOutlined />,
        }}
        {...settings}
      >
        <PageContainer
          content={content}
          tabList={[
            {
              tab: '基本信息',
              key: 'base',
            },
            {
              tab: '详细信息',
              key: 'info',
            },
          ]}
          extraContent={
            <Space size={24}>
              <Statistic
                title="Feedback"
                value={1128}
                prefix={<LikeOutlined />}
              />
              <Statistic title="Unmerged" value={93} suffix="/ 100" />
            </Space>
          }
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        >
          <div
            style={{
              height: '120vh',
              minHeight: 600,
            }}
          >
            <Result
              status="404"
              style={{
                height: '100%',
                background: '#fff',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams
      />
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  PageContainer,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import defaultProps from './_defaultProps';

const Demo = () => {
  return (
    <>
      <ProLayout {...defaultProps} layout="mix" splitMenus pure>
        children
      </ProLayout>
      <ProLayout {...defaultProps} layout="mix" splitMenus>
        children
      </ProLayout>
      <ProLayout
        {...defaultProps}
        breadcrumbRender={false}
        layout="mix"
        splitMenus
        headerRender={false}
        onMenuHeaderClick={() => {}}
        formatMessage={({ id }) => id}
        style={{
          height: '100vh',
        }}
      />
      <ProLayout
        {...defaultProps}
        layout="mix"
        menuExtraRender={() => 'dom'}
        menuHeaderRender={() => <div />}
        splitMenus
        location={{
          pathname: '/welcome',
        }}
        style={{
          height: '100vh',
        }}
      />

      <ProLayout
        {...defaultProps}
        layout="top"
        collapsed
        contentWidth="Fixed"
        menuExtraRender={false}
        menuHeaderRender={false}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
        }}
        location={{
          pathname: '/welcome',
        }}
        style={{
          height: '100vh',
        }}
      />
      <ProLayout
        {...defaultProps}
        layout="mix"
        menuHeaderRender={() => null}
        splitMenus
        fixSiderbar
        location={{
          pathname: '/welcome',
        }}
        contentWidth="Fixed"
        openKeys={false}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
        }}
        style={{
          height: '100vh',
        }}
      >
        xxxx
      </ProLayout>

      <ProLayout
        {...defaultProps}
        layout="mix"
        menuHeaderRender={() => null}
        location={{
          pathname: '/welcome',
        }}
        openKeys={false}
        actionsRender={() => [<a key="key">key</a>]}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
        }}
        style={{
          height: '100vh',
        }}
      >
        xxxx
      </ProLayout>
      <ProLayout
        {...defaultProps}
        layout="mix"
        menuHeaderRender={() => null}
        splitMenus={false}
        fixSiderbar
        location={{
          pathname: '/welcome',
        }}
        contentWidth="Fixed"
        openKeys={false}
        style={{
          height: '100vh',
        }}
      >
        <PageContainer>xxxx</PageContainer>
      </ProLayout>
      <SettingDrawer collapse />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        token={{
          header: {
            colorBgHeader: '#292f33',
            colorHeaderTitle: '#fff',
            colorTextMenu: '#dfdfdf',
            colorTextMenuSecondary: '#dfdfdf',
            colorTextMenuSelected: '#fff',
            colorBgMenuItemSelected: '#22272b',
            colorTextRightActionsItem: '#dfdfdf',
          },
          sider: {
            colorMenuBackground: '#fff',
            colorMenuItemDivider: '#dfdfdf',
            colorTextMenu: '#595959',
            colorTextMenuSelected: 'rgba(42,122,251,1)',
            colorBgMenuItemSelected: 'rgba(230,243,254,1)',
          },
        }}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: (
            <div
              style={{
                color: '#dfdfdf',
              }}
            >
              七妮妮
            </div>
          ),
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(57,62,67,1)',
                    color: '#fff',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: '#dfdfdf',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        {...settings}
      >
        <PageContainer
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        >
          <ProCard
            style={{
              height: '200vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/config/template/new',
      }}
      menu={{
        hideMenuWhenCollapsed: true,
      }}
      route={{
        routes: [
          {
            path: '/config',
            name: '配置中心',
            routes: [
              {
                path: 'product',
                name: '产品配置',
                indexRoute: {
                  component: 'ConfigProduct/index',
                },
                routes: [
                  {
                    path: 'new',
                    component: 'ConfigProduct/NewConfig',
                  },
                  {
                    path: 'edit/:productKey',
                    component: 'ConfigProduct/NewConfig',
                  },
                  {
                    path: 'detail/:productKey',
                    component: 'ConfigProduct/Detail',
                  },
                ],
              },
              {
                path: 'productManage',
                name: '产品管理',
                indexRoute: {
                  component: 'ConfigProductAll/index',
                },
                routes: [
                  {
                    path: 'detail/:productKey',
                    component: 'ConfigProductAll/Detail',
                  },
                ],
              },
              {
                path: 'template',
                name: '产品模板管理',
                indexRoute: {
                  component: 'ConfigTemplate/index',
                },
                routes: [
                  {
                    path: 'new',
                    component: 'ConfigTemplate/NewConfig',
                  },
                  {
                    path: 'edit/:templateKey',
                    component: 'ConfigTemplate/NewConfig',
                  },
                  {
                    path: 'detail/:templateKey',
                    component: 'ConfigTemplate/Detail',
                  },
                ],
              },
              {
                path: 'configItem',
                name: '配置项模板管理',
                indexRoute: {
                  component: 'ConfigItem/index',
                },
                routes: [
                  {
                    path: 'new',
                    component: 'ConfigItem/NewConfig',
                  },
                  {
                    path: 'edit/:productKey',
                    component: 'ConfigItem/NewConfig',
                  },
                  {
                    path: 'detail/:productKey',
                    component: 'ConfigItem/Detail',
                  },
                ],
              },
              {
                path: 'meta',
                name: '元数据管理',
                component: 'ConfigMeta',
              },
            ],
          },
          {
            path: 'asset',
            name: '资产',
            routes: [
              {
                path: 'query',
                name: '资产查询',
                component: 'Asset',
              },
              {
                path: 'collateral',
                name: '抵押查询',
                component: 'Collateral',
              },
            ],
          },
          {
            path: 'bill',
            name: '账单',
            routes: [
              {
                path: 'billNo',
                name: '账单编号',
                component: 'BillNo',
              },
              {
                path: 'bill',
                name: '账单查询',
                component: 'Bill',
              },
              {
                path: 'billItem',
                name: '账单条目',
                component: 'BillItem',
              },
            ],
          },
          {
            path: 'cif',
            name: 'CIF',
            routes: [
              {
                path: 'bankAccount',
                name: '绑卡信息',
                component: 'CifBankAccount',
              },
              {
                path: 'userGroup',
                name: '查询 Group',
                component: 'CifUserGroup',
              },
              {
                path: 'userId',
                name: '查询 ID',
                component: 'CifUserId',
              },
              {
                path: 'newInstitution',
                name: '新增机构',
                indexRoute: {
                  component: 'CifNewInstitution/index',
                },
                routes: [
                  {
                    path: 'new',
                    component: 'CifNewInstitution/ApplyNew',
                  },
                  {
                    path: 'bind/:id',
                    component: 'CifNewInstitution/BindAccount',
                  },
                ],
              },
            ],
          },
          {
            path: 'tools',
            name: '小工具',
            routes: [
              {
                path: 'ttsql',
                name: 'MySQL转BlinkTT流表',
                component: 'ToolTT',
              },
            ],
          },
        ],
      }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Descriptions } from 'antd';
import defaultProps from './_defaultProps';

const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人">张三</Descriptions.Item>
    <Descriptions.Item label="联系方式">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="备注">
      中国浙江省杭州市西湖区古翠路
    </Descriptions.Item>
  </Descriptions>
);

const Demo = () => {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname: '/welcome',
        }}
      >
        <PageContainer fixedHeader content={content}>
          <ProCard
            direction="column"
            ghost
            gutter={[0, 16]}
            style={{
              height: '200vh',
            }}
          >
            <ProCard style={{ height: 200 }} />
            <ProCard gutter={16} ghost style={{ height: 200 }}>
              <ProCard colSpan={16} />
              <ProCard colSpan={8} />
            </ProCard>
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import complexMenu from './complexMenu';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/data_hui/data_hui2',
      }}
      route={{
        routes: complexMenu,
      }}
      menu={{ type: 'group' }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProSettings } from '@ant-design/pro-components';
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import defaultProps from './_defaultProps';

const AppGroupList: any = [
  {
    title: 'UI 设计语言',
    children: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: '应用内跳转',
        url: '/components/page-container',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: 'Ant Design',
        url: 'https://ant.design',
      },
      {
        icon: () => (
          <img src="https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg" />
        ),
        title: 'Pro Components',
        url: 'https://procomponents.ant.design/',
      },
    ],
  },
  {
    title: 'UI 设计语言 2组111',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    url: 'https://procomponents.ant.design/',
    children: [
      {
        icon: 'W',
        title: 'AntV',
        url: 'https://antv.vision/',
        target: '_blank',
      },
      {
        title: 'AntV',
        url: 'https://antv.vision/',
        target: '_blank',
      },
    ],
  },
  {
    title: '待分组',
    children: [
      {
        title: '工具',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
        url: 'https://www.yuque.com/',
      },
      {
        title: '前端应用框架',
        icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
        url: 'https://umijs.org/zh-CN/docs',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
        title: 'qiankun',
        url: 'https://qiankun.umijs.org/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
        title: 'Kitchen ',
        url: 'https://kitchen.alipay.com/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        url: 'https://d.umijs.org/zh-CN',
      },
    ],
  },
];

const Demo = () => {
  const settings: ProSettings = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };

  return (
    <div id="test-pro-layout" style={{ height: '100vh' }}>
      <ProConfigProvider hashed={false}>
        <ProLayout
          {...defaultProps}
          appList={AppGroupList}
          location={{ pathname: '/list/sub-page/sub-sub-page1' }}
          siderMenuType="group"
          menu={{ collapsedShowGroupTitle: true }}
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            title: '七妮妮',
          }}
          {...settings}
        />
      </ProConfigProvider>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  PageContainer,
  ProBreadcrumb,
  ProLayout,
} from '@ant-design/pro-components';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/admin/process/edit/123',
      }}
      layout="mix"
      ErrorBoundary={false}
      headerContentRender={() => <ProBreadcrumb />}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          title: '主页',
        },
        {
          path: '/',
          title: '测试页',
        },
        ...routers,
      ]}
      menuDataRender={() => [
        {
          path: '/welcome',
          name: '欢迎',
        },
        {
          path: '/admin',
          name: '管理',
          children: [
            {
              name: '申请单列表',
              path: '/admin/process',
            },
            {
              name: '申请单详情',
              path: '/admin/process/detail/:id',
              hideInMenu: true,
            },
            {
              name: '编辑申请单',
              path: '/admin/process/edit/:id',
              hideInMenu: true,
            },
            {
              name: '添加申请单',
              path: '/admin/process/add',
              hideInMenu: true,
            },
          ],
        },
      ]}
    >
      <PageContainer content="欢迎使用" breadcrumbRender={false}>
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

export default [
  {
    path: '/',
    name: '欢迎',
    routes: [
      {
        path: '/welcome',
        name: 'one',
        routes: [
          {
            path: '/welcome/welcome',
            name: 'two',
            exact: true,
          },
        ],
      },
    ],
  },
  {
    path: '/demo',
    name: '例子',
  },
];

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <ProLayout
      splitMenus
      token={{
        colorBgAppListIconHover: 'rgba(0,0,0,0.06)',
        colorTextAppListIconHover: 'rgba(255,255,255,0.95)',
        colorTextAppListIcon: 'rgba(255,255,255,0.85)',
        sider: {
          colorBgCollapsedButton: '#fff',
          colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
          colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
          colorMenuBackground: '#004FD9',
          colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.85)',
          colorMenuItemDivider: 'rgba(255,255,255,0.15)',
          colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
          colorBgMenuItemSelected: 'rgba(0,0,0,0.15)',
          colorTextMenuSelected: '#fff',
          colorTextMenuItemHover: 'rgba(255,255,255,0.75)',
          colorTextMenu: 'rgba(255,255,255,0.75)',
          colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
          colorTextMenuTitle: 'rgba(255,255,255,0.95)',
          colorTextMenuActive: 'rgba(255,255,255,0.95)',
          colorTextSubMenuSelected: '#fff',
        },
        header: {
          colorBgHeader: '#004FD9',
          colorBgRightActionsItemHover: 'rgba(0,0,0,0.06)',
          colorTextRightActionsItem: 'rgba(255,255,255,0.65)',
          colorHeaderTitle: '#fff',
          colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
          colorBgMenuItemSelected: 'rgba(0,0,0,0.15)',
          colorTextMenuSelected: '#fff',
          colorTextMenu: 'rgba(255,255,255,0.75)',
          colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
          colorTextMenuActive: 'rgba(255,255,255,0.95)',
        },
      }}
      {...defaultProps}
      location={{
        pathname,
      }}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: '七妮妮',
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          props.layout !== 'side' ? (
            <div
              key="SearchOutlined"
              aria-hidden
              style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <Input
                style={{
                  borderRadius: 4,
                  marginInlineEnd: 12,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                }}
                prefix={
                  <SearchOutlined
                    style={{
                      color: 'rgba(0, 0, 0, 0.15)',
                    }}
                  />
                }
                placeholder="搜索方案"
                variant="borderless"
              />
              <PlusCircleFilled
                style={{
                  color: 'var(--ant-primary-color)',
                  fontSize: 24,
                }}
              />
            </div>
          ) : undefined,
          <InfoCircleFilled key="InfoCircleFilled" />,
          <QuestionCircleFilled key="QuestionCircleFilled" />,
          <GithubFilled key="GithubFilled" />,
        ];
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <p
            style={{
              textAlign: 'center',
              paddingBlockStart: 12,
            }}
          >
            Power by Ant Design
          </p>
        );
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
      layout="top"
    >
      <PageContainer
        extra={[
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>,
        ]}
        footer={[
          <Button key="3">重置</Button>,
          <Button key="2" type="primary">
            提交
          </Button>,
        ]}
      >
        <ProCard
          style={{
            height: '200vh',
            minHeight: 800,
          }}
        >
          <div />
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { ProLayoutProps } from '@ant-design/pro-components';
import {
  PageContainer,
  ProFormRadio,
  ProLayout,
} from '@ant-design/pro-components';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [pathname, setPathname] = useState('/welcome');
  const [collapsed, setCollapsed] = useState(true);
  const [position, setPosition] = useState<'header' | 'menu'>('header');
  const children = (
    <PageContainer>
      <div
        style={{
          height: '120vh',
          minHeight: 600,
        }}
      >
        <ProFormRadio.Group
          label="按钮的位置"
          options={['header', 'menu'].map((value) => ({
            label: value,
            value,
          }))}
          fieldProps={{
            value: position,
            onChange: (e) => setPosition(e.target.value),
          }}
        />
      </div>
    </PageContainer>
  );
  const props: ProLayoutProps = {
    ...defaultProps,
    location: {
      pathname,
    },
    collapsed,
    fixSiderbar: true,
    collapsedButtonRender: false,
    menuItemRender: (item, dom) => (
      <a
        onClick={() => {
          setPathname(item.path || '/welcome');
        }}
      >
        {dom}
      </a>
    ),
  };
  if (position === 'menu') {
    return (
      <ProLayout
        {...props}
        layout="mix"
        onCollapse={setCollapsed}
        postMenuData={(menuData) => {
          return [
            {
              icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
              name: ' ',
              onTitleClick: () => setCollapsed(!collapsed),
            },
            ...(menuData || []),
          ];
        }}
      >
        {children}
      </ProLayout>
    );
  }
  return (
    <ProLayout
      {...props}
      layout="mix"
      onCollapse={setCollapsed}
      headerContentRender={() => {
        return (
          <div
            onClick={() => setCollapsed(!collapsed)}
            style={{
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        );
      }}
    >
      {children}
    </ProLayout>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Alert, Button, Input, Space } from 'antd';
import React, { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const settings: ProSettings | undefined = {
    layout: 'mix',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <>
      <div
        id="test-pro-layout"
        style={{
          height: '100vh',
        }}
      >
        <ProLayout
          token={{
            header: {
              heightLayoutHeader: 108,
            },
          }}
          headerRender={(props, defaultDom) => (
            <>
              <Alert
                title={
                  <div
                    style={{
                      color: 'white',
                    }}
                  >
                    本网站提供的部分服务在你当前浏览器中无法使用，建议你更换为
                    Chrome 浏览器查看本网站。
                  </div>
                }
                icon={
                  <InfoCircleFilled
                    style={{
                      color: 'white',
                    }}
                  />
                }
                banner
                style={{
                  backgroundColor: 'black',
                }}
                action={
                  <Button
                    type="text"
                    style={{
                      color: 'white',
                    }}
                  >
                    查看详情
                  </Button>
                }
              />
              {React.cloneElement(defaultDom as any, {
                style: {
                  height: '56px',
                  lineHeight: '56px',
                },
              })}
            </>
          )}
          footerRender={() => (
            <Space
              style={{
                height: 64,
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                marginInlineEnd: 24,
              }}
            >
              <Button key="1">上一步</Button>
              <Button key="2" type="primary">
                保存
              </Button>
            </Space>
          )}
          bgLayoutImgList={[
            {
              src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
              left: 85,
              bottom: 100,
              height: '303px',
            },
            {
              src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
              bottom: -68,
              right: -45,
              height: '303px',
            },
            {
              src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
              bottom: 0,
              left: 0,
              width: '331px',
            },
          ]}
          {...defaultProps}
          location={{
            pathname,
          }}
          menu={{
            type: 'group',
          }}
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            title: '七妮妮',
          }}
          actionsRender={(props) => {
            if (props.isMobile) return [];
            return [
              props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                <div
                  key="SearchOutlined"
                  aria-hidden
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginInlineEnd: 24,
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  <Input
                    style={{
                      borderRadius: 4,
                      marginInlineEnd: 12,
                      backgroundColor: 'rgba(0,0,0,0.03)',
                    }}
                    prefix={
                      <SearchOutlined
                        style={{
                          color: 'rgba(0, 0, 0, 0.15)',
                        }}
                      />
                    }
                    placeholder="搜索方案"
                    variant="borderless"
                  />
                  <PlusCircleFilled
                    style={{
                      color: 'var(--ant-primary-color)',
                      fontSize: 24,
                    }}
                  />
                </div>
              ) : undefined,
              <InfoCircleFilled key="InfoCircleFilled" />,
              <QuestionCircleFilled key="QuestionCircleFilled" />,
              <GithubFilled key="GithubFilled" />,
            ];
          }}
          menuFooterRender={(props) => {
            if (props?.collapsed) return undefined;
            return (
              <div
                style={{
                  textAlign: 'center',
                  paddingBlockStart: 12,
                }}
              >
                <div>© 2021 Made with love</div>
                <div>by Ant Design</div>
              </div>
            );
          }}
          menuItemRender={(item, dom) => (
            <div
              onClick={() => {
                setPathname(item.path || '/welcome');
              }}
            >
              {dom}
            </div>
          )}
          {...settings}
        >
          <PageContainer>
            <ProCard
              style={{
                minHeight: 800,
              }}
            >
              <div />
            </ProCard>
          </PageContainer>
        </ProLayout>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import {
  Button,
  ConfigProvider,
  Descriptions,
  Result,
  Space,
  Statistic,
} from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人">张三</Descriptions.Item>
    <Descriptions.Item label="联系方式">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="备注">
      中国浙江省杭州市西湖区古翠路
    </Descriptions.Item>
  </Descriptions>
);

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>(
    undefined,
  );
  const [pathname, setPathname] = useState('/welcome');
  return (
    <ConfigProvider prefixCls="qixian">
      <ProLayout
        {...defaultProps}
        style={{
          maxHeight: '100vh',
        }}
        location={{
          pathname,
        }}
        menuFooterRender={(props) => {
          return (
            <a
              style={{
                lineHeight: '48rpx',
                display: 'flex',
                height: 48,
                color: 'rgba(255, 255, 255, 0.65)',
                alignItems: 'center',
              }}
              href="https://preview.pro.ant.design/dashboard/analysis"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="pro-logo"
                src="https://procomponents.ant.design/favicon.ico"
                style={{
                  width: 16,
                  height: 16,
                  margin: '0 16px',
                  marginInlineEnd: 10,
                }}
              />
              {!props?.collapsed && 'Preview Pro'}
            </a>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          icon: <UserOutlined />,
        }}
        {...settings}
      >
        <PageContainer
          content={content}
          tabList={[
            {
              tab: '基本信息',
              key: 'base',
            },
            {
              tab: '详细信息',
              key: 'info',
            },
          ]}
          extraContent={
            <Space size={24}>
              <Statistic
                title="Feedback"
                value={1128}
                prefix={<LikeOutlined />}
              />
              <Statistic title="Unmerged" value={93} suffix="/ 100" />
            </Space>
          }
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        >
          <div
            style={{
              height: '120vh',
              minHeight: 600,
            }}
          >
            <Result
              status="404"
              style={{
                height: '100%',
                background: '#fff',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => setSetting(changeSetting)}
      />
    </ConfigProvider>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/data_hui/data_hui2',
      }}
      collapsed={false}
      collapsedButtonRender={false}
      route={{
        routes: [
          {
            path: '/home',
            name: '首页',
            locale: 'menu.home',
            routes: [
              {
                path: '/home/overview',
                name: '概述',
                hideInMenu: true,
                locale: 'menu.home.overview',
              },
              {
                path: '/home/search',
                name: '搜索',
                hideInMenu: true,
                locale: 'menu.home.search',
              },
            ],
          },
          {
            path: '/data_hui',
            name: '汇总数据',
            locale: 'menu.data_hui',
            routes: [
              {
                collapsed: true,
                menuName: '域买家维度交易',
                name: '域买家维度交易',
                path: '/xx',
                routes: [
                  {
                    id: 2,
                    name: '月表',
                    path: '/data_hui2',
                  },
                  {
                    name: '日表',
                    path: '/data_hui3?tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
                  },
                ],
              },
              {
                name: '维度交易',
                path: '/',
                routes: [
                  {
                    name: '月表',
                    path: '/data_hui4',
                  },
                  {
                    name: '日表',
                    key: 'tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
                    path: '/data_hui5',
                  },
                ],
              },
            ],
          },
        ],
      }}
      menu={{
        defaultOpenAll: true,
        hideMenuWhenCollapsed: true,
        ignoreFlatMenu: true,
      }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/articles/new',
      }}
      iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
      route={{
        routes: [
          {
            path: '/home',
            name: '收藏',
            icon: 'icon-shoucang1',
          },
          {
            path: '/home/overview',
            name: 'FaceBook',
            icon: 'icon-facebook',
          },
          {
            path: '/home/search',
            name: 'Twitter',
            icon: 'icon-twitter',
          },
        ],
      }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  CaretDownFilled,
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { css } from '@emotion/css';
import {
  Button,
  ConfigProvider,
  Divider,
  Dropdown,
  Input,
  Popover,
  theme,
} from 'antd';
import React, { useState } from 'react';
import defaultProps from './_defaultProps';

const Item: React.FC<{ children: React.ReactNode }> = (props) => {
  const { token } = theme.useToken();
  return (
    <div
      className={css`
        color: ${token.colorTextSecondary};
        font-size: 14px;
        cursor: pointer;
        line-height: 22px;
        margin-bottom: 8px;
        &:hover {
          color: ${token.colorPrimary};
        }
      `}
      style={{
        width: '33.33%',
      }}
    >
      {props.children}
      <DoubleRightOutlined
        style={{
          marginInlineStart: 4,
        }}
      />
    </div>
  );
};

const List: React.FC<{ title: string; style?: React.CSSProperties }> = (
  props,
) => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        width: '100%',
        ...props.style,
      }}
    >
      <div
        style={{
          fontSize: 16,
          color: token.colorTextHeading,
          lineHeight: '24px',
          fontWeight: 500,
          marginBlockEnd: 16,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {new Array(6).fill(1).map((_, index) => {
          return <Item key={index}>具体的解决方案-{index}</Item>;
        })}
      </div>
    </div>
  );
};

const MenuCard = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Divider
        style={{
          height: '1.5em',
        }}
        type="vertical"
      />
      <Popover
        placement="bottom"
        overlayStyle={{
          width: 'calc(100vw - 24px)',
          padding: '24px',
          paddingTop: 8,
          height: '307px',
          borderRadius: '0 0 6px 6px',
        }}
        content={
          <div style={{ display: 'flex', padding: '32px 40px' }}>
            <div style={{ flex: 1 }}>
              <List title="金融解决方案" />
              <List
                title="其他解决方案"
                style={{
                  marginBlockStart: 32,
                }}
              />
            </div>

            <div
              style={{
                width: '308px',
                borderInlineStart: '1px solid ' + token.colorBorder,
                paddingInlineStart: 16,
              }}
            >
              <div
                className={css`
                  font-size: 14px;
                  color: ${token.colorText};
                  line-height: 22px;
                `}
              >
                热门产品
              </div>
              {new Array(3).fill(1).map((name, index) => {
                return (
                  <div
                    key={index}
                    className={css`
                      border-radius: 4px;
                      padding: 16px;
                      margin-top: 4px;
                      display: flex;
                      cursor: pointer;
                      &:hover {
                        background-color: ${token.colorBgTextHover};
                      }
                    `}
                  >
                    <img src="https://gw.alipayobjects.com/zos/antfincdn/6FTGmLLmN/bianzu%25252013.svg" />
                    <div
                      style={{
                        marginInlineStart: 14,
                      }}
                    >
                      <div
                        className={css`
                          font-size: 14px;
                          color: ${token.colorText};
                          line-height: 22px;
                        `}
                      >
                        Ant Design
                      </div>
                      <div
                        className={css`
                          font-size: 12px;
                          color: ${token.colorTextSecondary};
                          line-height: 20px;
                        `}
                      >
                        杭州市较知名的 UI 设计语言
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        }
      >
        <div
          style={{
            color: token.colorTextHeading,
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            gap: 4,
            paddingInlineStart: 8,
            paddingInlineEnd: 12,
            alignItems: 'center',
          }}
          className={css`
            &:hover {
              background-color: ${token.colorBgTextHover};
            }
          `}
        >
          <span> 企业级资产中心</span>
          <CaretDownFilled />
        </div>
      </Popover>
    </div>
  );
};

const SearchInput = () => {
  const { token } = theme.useToken();
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
          backgroundColor: token.colorBgTextHover,
        }}
        prefix={
          <SearchOutlined
            style={{
              color: token.colorTextLightSolid,
            }}
          />
        }
        placeholder="搜索方案"
        variant="borderless"
      />
      <PlusCircleFilled
        style={{
          color: token.colorPrimary,
          fontSize: 24,
        }}
      />
    </div>
  );
};

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
  const [num, setNum] = useState(40);
  if (typeof document === 'undefined') {
    return <div />;
  }
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById('test-pro-layout') || document.body;
          }}
        >
          <ProLayout
            prefixCls="my-prefix"
            bgLayoutImgList={[
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                left: 85,
                bottom: 100,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                bottom: -68,
                right: -45,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                bottom: 0,
                left: 0,
                width: '331px',
              },
            ]}
            {...defaultProps}
            location={{
              pathname,
            }}
            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
              },
            }}
            siderMenuType="group"
            menu={{
              collapsedShowGroupTitle: true,
            }}
            avatarProps={{
              src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: '七妮妮',
              render: (props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: 'logout',
                          icon: <LogoutOutlined />,
                          label: '退出登录',
                        },
                      ],
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
            }}
            actionsRender={(props) => {
              if (props.isMobile) return [];
              if (typeof window === 'undefined') return [];
              return [
                props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                  <SearchInput />
                ) : undefined,
                <InfoCircleFilled key="InfoCircleFilled" />,
                <QuestionCircleFilled key="QuestionCircleFilled" />,
                <GithubFilled key="GithubFilled" />,
              ];
            }}
            headerTitleRender={(logo, title, _) => {
              const defaultDom = (
                <a>
                  {logo}
                  {title}
                </a>
              );
              if (typeof window === 'undefined') return defaultDom;
              if (document.body.clientWidth < 1400) {
                return defaultDom;
              }
              if (_.isMobile) return defaultDom;
              return (
                <>
                  {defaultDom}
                  <MenuCard />
                </>
              );
            }}
            menuFooterRender={(props) => {
              if (props?.collapsed) return undefined;
              return (
                <div
                  style={{
                    textAlign: 'center',
                    paddingBlockStart: 12,
                  }}
                >
                  <div>© 2021 Made with love</div>
                  <div>by Ant Design</div>
                </div>
              );
            }}
            onMenuHeaderClick={(e) => console.log(e)}
            menuItemRender={(item, dom) => (
              <div
                onClick={() => {
                  setPathname(item.path || '/welcome');
                }}
              >
                {dom}
              </div>
            )}
            {...settings}
          >
            <PageContainer
              token={{
                paddingInlinePageContainerContent: num,
              }}
              extra={[
                <Button key="3">操作</Button>,
                <Button key="2">操作</Button>,
                <Button
                  key="1"
                  type="primary"
                  onClick={() => {
                    setNum(num > 0 ? 0 : 40);
                  }}
                >
                  主操作
                </Button>,
              ]}
              subTitle="简单的描述"
              footer={[
                <Button key="3">重置</Button>,
                <Button key="2" type="primary">
                  提交
                </Button>,
              ]}
            >
              <ProCard
                style={{
                  height: '200vh',
                  minHeight: 800,
                }}
              >
                <div />
              </ProCard>
            </PageContainer>

            <SettingDrawer
              pathname={pathname}
              enableDarkTheme
              getContainer={(e: any) => {
                if (typeof window === 'undefined') return e;
                return document.getElementById('test-pro-layout');
              }}
              settings={settings}
              onSettingChange={(changeSetting) => {
                setSetting(changeSetting);
              }}
              disableUrlParams={false}
            />
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  DefaultFooter,
  PageContainer,
  ProLayout,
} from '@ant-design/pro-components';
import defaultProps from './_defaultProps';

const Demo = () => (
  <ProLayout
    {...defaultProps}
    style={{
      height: '100vh',
    }}
    breakpoint={false}
    collapsed
    location={{
      pathname: '/welcome',
    }}
    footerRender={() => (
      <DefaultFooter
        links={[
          { key: 'test', title: 'layout', href: 'www.alipay.com' },
          { key: 'test2', title: 'layout2', href: 'www.alipay.com' },
        ]}
        copyright="这是一条测试文案"
      />
    )}
  >
    <PageContainer content="欢迎使用">Hello World</PageContainer>
  </ProLayout>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: '欢迎',
        icon: <SmileFilled />,
        component: './Welcome',
      },
      {
        path: '/admin',
        name: '管理页',
        icon: <CrownFilled />,
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/admin/sub-page1',
            name: '一级页面',
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            component: './Welcome',
          },
          {
            path: '/admin/sub-page2',
            name: '二级页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: '/admin/sub-page3',
            name: '三级页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
        ],
      },
      {
        name: '列表页',
        icon: <TabletFilled />,
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: '列表页面',
            icon: <CrownFilled />,
            routes: [
              {
                path: 'sub-sub-page1',
                name: '一一级列表页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page2',
                name: '一二级列表页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page3',
                name: '一三级列表页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
            ],
          },
          {
            path: '/list/sub-page2',
            name: '二级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: '/list/sub-page3',
            name: '三级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
        ],
      },
      {
        path: 'https://ant.design',
        name: 'Ant Design 官网外链',
        icon: <ChromeFilled />,
      },
    ],
  },
  location: {
    pathname: '/',
  },
  appList: [
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      title: 'Ant Design',
      desc: '杭州市较知名的 UI 设计语言',
      url: 'https://ant.design',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      title: 'AntV',
      desc: '蚂蚁集团全新一代数据可视化解决方案',
      url: 'https://antv.vision/',
      target: '_blank',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      title: 'Pro Components',
      desc: '专业级 UI 组件库',
      url: 'https://procomponents.ant.design/',
    },
    {
      icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
      title: 'umi',
      desc: '插件化的企业级前端应用框架。',
      url: 'https://umijs.org/zh-CN/docs',
    },

    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
      title: 'qiankun',
      desc: '可能是你见过最完善的微前端解决方案🧐',
      url: 'https://qiankun.umijs.org/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
      title: '语雀',
      desc: '知识创作与分享工具',
      url: 'https://www.yuque.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
      title: 'Kitchen ',
      desc: 'Sketch 工具集',
      url: 'https://kitchen.alipay.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
      title: 'dumi',
      desc: '为组件开发场景而生的文档工具',
      url: 'https://d.umijs.org/zh-CN',
    },
  ],
};

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        token={{
          header: {
            colorBgHeader: '#292f33',
            colorHeaderTitle: '#fff',
            colorTextMenu: '#dfdfdf',
            colorTextMenuSecondary: '#dfdfdf',
            colorTextMenuSelected: '#fff',
            colorBgMenuItemSelected: '#22272b',
            colorTextMenuActive: 'rgba(255,255,255,0.85)',
            colorTextRightActionsItem: '#dfdfdf',
          },
          colorTextAppListIconHover: '#fff',
          colorTextAppListIcon: '#dfdfdf',
          sider: {
            colorMenuBackground: '#fff',
            colorMenuItemDivider: '#dfdfdf',
            colorBgMenuItemHover: '#f6f6f6',
            colorTextMenu: '#595959',
            colorTextMenuSelected: '#242424',
            colorTextMenuActive: '#242424',
          },
        }}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: (
            <div
              style={{
                color: '#dfdfdf',
              }}
            >
              七妮妮
            </div>
          ),
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(57,62,67,1)',
                    color: '#fff',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: '#dfdfdf',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        {...settings}
      >
        <PageContainer
          breadcrumb={{
            routes: [],
          }}
          onBack={() => window.history.back()}
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        >
          <ProCard
            style={{
              height: '200vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/admin/process/edit/123',
      }}
      breadcrumbRender={(routes) => [
        {
          path: '/',
          title: '主页',
        },
        ...(routes || []),
      ]}
      menuDataRender={() => [
        {
          path: '/welcome',
          name: '欢迎',
        },
        {
          path: '/admin',
          name: '管理',
          children: [
            {
              name: '申请单列表',
              path: '/admin/process',
            },
            {
              name: '申请单详情',
              path: '/admin/process/detail/:id',
              hideInMenu: true,
            },
            {
              name: '编辑申请单',
              path: '/admin/process/edit/:id',
              hideInMenu: true,
            },
            {
              name: '添加申请单',
              path: '/admin/process/add',
              hideInMenu: true,
            },
          ],
        },
      ]}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        siderWidth={216}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          title: '七妮妮',
          size: 'small',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusCircleFilled, SearchOutlined } from '@ant-design/icons';
import type { MenuDataItem } from '@ant-design/pro-components';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Input, Space } from 'antd';
import { useState } from 'react';
import complexMenu from './complexMenu';

const filterByMenuData = (
  data: MenuDataItem[],
  keyWord: string,
): MenuDataItem[] =>
  data
    .map((item) => {
      if (item.name?.includes(keyWord)) {
        return { ...item };
      }
      const children = filterByMenuData(item.children || [], keyWord);
      if (children.length > 0) {
        return { ...item, children };
      }
      return undefined;
    })
    .filter((item) => item) as MenuDataItem[];

const loopMenuItem = (menus: any[]): MenuDataItem[] =>
  menus.map(({ icon, routes, ...item }) => ({
    ...item,
    children: routes && loopMenuItem(routes),
  }));

const Demo = () => {
  const [keyWord, setKeyWord] = useState('');
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        location={{
          pathname: '/home/overview',
        }}
        menu={{
          hideMenuWhenCollapsed: true,
        }}
        menuExtraRender={({ collapsed }) =>
          !collapsed && (
            <Space
              style={{
                marginBlockStart: 16,
              }}
              align="center"
            >
              <Input
                style={{
                  borderRadius: 4,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                }}
                prefix={
                  <SearchOutlined
                    style={{
                      color: 'rgba(0, 0, 0, 0.15)',
                    }}
                  />
                }
                placeholder="搜索方案"
                variant="borderless"
                onPressEnter={(e) => {
                  setKeyWord((e.target as HTMLInputElement).value);
                }}
              />
              <PlusCircleFilled
                style={{
                  color: 'var(--ant-primary-color)',
                  fontSize: 24,
                }}
              />
            </Space>
          )
        }
        menuDataRender={() => loopMenuItem(complexMenu)}
        postMenuData={(menus) => filterByMenuData(menus || [], keyWord)}
      >
        <PageContainer content="欢迎使用">
          <div>Hello World</div>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  CaretDownFilled,
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { css } from '@emotion/css';
import { Divider, Input, Popover, theme } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Item: React.FC<{ children: React.ReactNode }> = (props) => {
  const { token } = theme.useToken();
  return (
    <div
      className={css`
        color: ${token.colorTextSecondary};
        font-size: 14px;
        cursor: pointer;
        line-height: 22px;
        margin-bottom: 8px;
        &:hover {
          color: ${token.colorPrimary};
        }
      `}
      style={{
        width: '33.33%',
      }}
    >
      {props.children}
      <DoubleRightOutlined
        style={{
          marginInlineStart: 4,
        }}
      />
    </div>
  );
};

const List: React.FC<{ title: string; style?: React.CSSProperties }> = (
  props,
) => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        width: '100%',
        ...props.style,
      }}
    >
      <div
        style={{
          fontSize: 16,
          color: token.colorTextHeading,
          lineHeight: '24px',
          fontWeight: 500,
          marginBlockEnd: 16,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {new Array(6).fill(1).map((_, index) => {
          return <Item key={index}>具体的解决方案-{index}</Item>;
        })}
      </div>
    </div>
  );
};

const MenuCard = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Divider
        style={{
          height: '1.5em',
        }}
        type="vertical"
      />
      <Popover
        placement="bottom"
        overlayStyle={{
          width: 'calc(100vw - 24px)',
          padding: '24px',
          paddingTop: 8,
          height: '307px',
          borderRadius: '0 0 6px 6px',
        }}
        content={
          <div style={{ display: 'flex', padding: '32px 40px' }}>
            <div style={{ flex: 1 }}>
              <List title="金融解决方案" />
              <List
                title="其他解决方案"
                style={{
                  marginBlockStart: 32,
                }}
              />
            </div>

            <div
              style={{
                width: '308px',
                borderInlineStart: '1px solid ' + token.colorBorder,
                paddingInlineStart: 16,
              }}
            >
              <div
                className={css`
                  font-size: 14px;
                  color: ${token.colorText};
                  line-height: 22px;
                `}
              >
                热门产品
              </div>
              {new Array(3).fill(1).map((name, index) => {
                return (
                  <div
                    key={index}
                    className={css`
                      border-radius: 4px;
                      padding: 16px;
                      margin-top: 4px;
                      display: flex;
                      cursor: pointer;
                      &:hover {
                        background-color: ${token.colorBgTextHover};
                      }
                    `}
                  >
                    <img src="https://gw.alipayobjects.com/zos/antfincdn/6FTGmLLmN/bianzu%25252013.svg" />
                    <div
                      style={{
                        marginInlineStart: 14,
                      }}
                    >
                      <div
                        className={css`
                          font-size: 14px;
                          color: ${token.colorText};
                          line-height: 22px;
                        `}
                      >
                        Ant Design
                      </div>
                      <div
                        className={css`
                          font-size: 12px;
                          color: ${token.colorTextSecondary};
                          line-height: 20px;
                        `}
                      >
                        杭州市较知名的 UI 设计语言
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        }
      >
        <div
          style={{
            color: token.colorTextHeading,
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            gap: 4,
            paddingInlineStart: 8,
            paddingInlineEnd: 12,
            alignItems: 'center',
          }}
          className={css`
            &:hover {
              background-color: ${token.colorBgTextHover};
            }
          `}
        >
          <span> 企业级资产中心</span>
          <CaretDownFilled />
        </div>
      </Popover>
    </div>
  );
};

const Demo = () => {
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'top',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        headerTitleRender={(logo, title, _) => {
          const defaultDom = (
            <a
              onClick={() => {
                console.log('titheaderTitle clicked');
              }}
            >
              {logo}
              {title}
            </a>
          );
          if (
            typeof document === 'undefined' ||
            document.body.clientWidth < 1400
          ) {
            return defaultDom;
          }
          if (_.isMobile) return defaultDom;
          return (
            <>
              {defaultDom}
              <MenuCard />
            </>
          );
        }}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Button, Switch } from 'antd';
import { useRef, useState } from 'react';
import customMenuDate from './customMenu';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

let serviceData: any[] = customMenuDate;

const Demo = () => {
  const actionRef = useRef<{
    reload: () => void;
  }>();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <ProLayout
        style={{
          height: '100vh',
        }}
        actionRef={actionRef}
        suppressSiderWhenMenuEmpty={toggle}
        menu={{
          request: async () => {
            await waitTime(2000);
            return serviceData;
          },
        }}
        location={{
          pathname: '/welcome/welcome',
        }}
      >
        <PageContainer content="欢迎使用">
          <div>
            当从服务器获取的菜单为空时隐藏Sider：
            <Switch checked={toggle} onChange={setToggle} />
          </div>
          Hello World
          <Button
            style={{
              margin: 8,
            }}
            onClick={() => {
              serviceData = customMenuDate;
              actionRef.current?.reload();
            }}
          >
            刷新菜单
          </Button>
          <Button
            style={{
              margin: 8,
            }}
            onClick={() => {
              serviceData = [];
              actionRef.current?.reload();
            }}
          >
            刷新菜单（空数据）
          </Button>
        </PageContainer>
      </ProLayout>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <ProLayout
      splitMenus
      layout="mix"
      token={{
        bgLayout: 'rgba(160, 217, 17, 0.1)',
        colorTextAppListIcon: 'rgba(255, 255, 255, 1)',
        colorTextAppListIconHover: 'rgba(245, 34, 45, 1)',
        sider: {
          colorBgMenuItemHover: 'rgba(24, 144, 255, 1)',
          colorMenuBackground: 'rgba(24, 144, 255, 0.1)',
          colorMenuItemDivider: 'rgba(250, 219, 20, 1)',
          colorTextMenu: 'rgba(250, 219, 20, 1)',
          colorTextMenuSelected: 'rgba(250, 84, 28, 1)',
          colorTextMenuItemHover: 'rgba(255, 255, 255, 1)',
          colorBgMenuItemSelected: 'rgb(82, 196, 26)',
          colorBgCollapsedButton: 'rgba(250, 84, 28, 1)',
          colorTextCollapsedButton: 'rgba(24, 144, 255, 1)',
          colorTextCollapsedButtonHover: 'rgba(143, 35, 35, 1)',
        },
        header: {
          colorBgMenuItemSelected: 'rgba(82, 196, 26, 1)',
          colorTextMenuSelected: 'rgba(114, 46, 209, 1)',
          colorBgHeader: 'rgba(250, 173, 20, 1)',
          colorHeaderTitle: 'rgba(47, 84, 235, 1)',
          colorTextMenuActive: 'rgba(255, 255, 255, 1)',
          colorTextMenu: 'rgba(250, 84, 28, 1)',
          colorBgMenuItemHover: 'rgba(24, 144, 255, 1)',
        },
        pageContainer: {
          colorBgPageContainer: 'rgba(250, 84, 28, 1)',
        },
      }}
      {...defaultProps}
      location={{
        pathname,
      }}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: '七妮妮',
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          props.layout !== 'side' ? (
            <div
              key="SearchOutlined"
              aria-hidden
              style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <Input
                style={{
                  borderRadius: 4,
                  marginInlineEnd: 12,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                }}
                prefix={
                  <SearchOutlined
                    style={{
                      color: 'rgba(0, 0, 0, 0.15)',
                    }}
                  />
                }
                placeholder="搜索方案"
                variant="borderless"
              />
              <PlusCircleFilled
                style={{
                  color: 'var(--ant-primary-color)',
                  fontSize: 24,
                }}
              />
            </div>
          ) : undefined,
          <InfoCircleFilled key="InfoCircleFilled" />,
          <QuestionCircleFilled key="QuestionCircleFilled" />,
          <GithubFilled key="GithubFilled" />,
        ];
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <p
            style={{
              textAlign: 'center',
              paddingBlockStart: 12,
            }}
          >
            Power by Ant Design
          </p>
        );
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
    >
      <PageContainer
        extra={[
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>,
        ]}
        footer={[
          <Button key="3">重置</Button>,
          <Button key="2" type="primary">
            提交
          </Button>,
        ]}
      >
        <ProCard
          style={{
            height: '200vh',
            minHeight: 800,
          }}
        >
          <div />
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProHelpDataSourceChildren } from '@ant-design/pro-components';
import { ProHelp, ProHelpPanel } from '@ant-design/pro-components';
import { App, Rate, Typography } from 'antd';

const Demo = () => {
  const map = new Map<
    string,
    (
      item: ProHelpDataSourceChildren<{
        video: React.VideoHTMLAttributes<HTMLVideoElement>;
        list: {
          title: string;
          children: {
            title: string;
            href: string;
          }[];
        };
      }>,
      index: number,
    ) => React.ReactNode
  >();

  map.set('video', (item) => {
    return (
      <video
        key=""
        style={{
          width: '100%',
        }}
        controls
        {...(item.children as React.VideoHTMLAttributes<HTMLVideoElement>)}
      />
    );
  });

  map.set('list', (item) => {
    const listConfig = item.children as {
      title: string;
      children: {
        title: string;
        href: string;
      }[];
    };
    return (
      <div>
        <h3
          style={{
            margin: '8px 0',
          }}
        >
          {listConfig.title}
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {listConfig.children.map((child, index) => {
            return (
              <div key={index}>
                <Typography.Text>
                  {child.href ? (
                    <a href={child.href}>{child.title}</a>
                  ) : (
                    child.title
                  )}
                </Typography.Text>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <App>
      <div
        style={{
          margin: 24,
          paddingBlockEnd: 128,
          display: 'flex',
          gap: 24,
          flexDirection: 'column',
        }}
      >
        <ProHelp<{
          video: React.VideoHTMLAttributes<HTMLVideoElement>;
          list: {
            title: string;
            children: {
              title: string;
              href: string;
            }[];
          };
        }>
          dataSource={[
            {
              title: '常见问题',
              key: 'default',
              children: [
                {
                  title: '如何开始操作数据授权？',
                  key: '1',
                  children: [
                    {
                      valueType: 'h1',
                      children: '如何开始操作数据授权？',
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'h2',
                      children: '相关问题',
                    },
                    {
                      valueType: 'link',
                      children: {
                        href: 'www.alipay.com',
                        children: '鹊凿平台DCI申领操作手册?',
                      },
                    },
                    {
                      valueType: 'link',
                      children: {
                        href: 'www.alipay.com',
                        children: 'openAPI 注册工具?',
                      },
                    },

                    {
                      valueType: 'h2',
                      children: '帮助视频',
                    },
                    {
                      valueType: 'video',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/file/A*oJOJRZwe00kAAAAAAAAAAAAADml6AQ',
                      },
                    },
                  ],
                },
                {
                  title: '证据包内包含哪些内容，如何下载证据包？',
                  key: '2',
                  children: [
                    {
                      valueType: 'h1',
                      children: '证据包内包含哪些内容，如何下载证据包？',
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    // @ts-expect-error
                    {
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*NcPORK7kRWMAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'list',
                      children: {
                        title: '相关问题',
                        children: [
                          {
                            href: 'www.alipay.com',
                            title: '鹊凿平台DCI申领操作手册?',
                          },
                          {
                            href: 'www.alipay.com',
                            title: 'openAPI 注册工具?',
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
            {
              title: '名词解释',
              key: 'value',
              infiniteScrollFull: true,
              children: [
                {
                  title: '数据管理（模块）',
                  key: 'name0',
                  children: [
                    {
                      valueType: 'h1',
                      children: '数据管理（模块）',
                    },
                    {
                      valueType: 'text',
                      children:
                        '这是一个用于管理和处理数据的模块，它提供了一套工具来帮助用户进一步管理域内的数据。用户可以使用数据管理模块来管理数据、处理数据以及保护数据。',
                    },
                  ],
                },
                {
                  title: '网页上传方式',
                  key: 'name1',
                  children: [
                    {
                      valueType: 'h1',
                      children: '网页上传方式',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种网页提供给用户的上传文件方法，用户可以通过网页上传自己的文件进行处理。',
                    },
                  ],
                },
                {
                  title: '其他获取方式',
                  key: 'name2',
                  children: [
                    {
                      valueType: 'h1',
                      children: '其他获取方式',
                    },
                    {
                      valueType: 'text',
                      children:
                        '即不通过网页上传的方式获取数据，例如从数据库、文件夹或其他数据源中获取数据。',
                    },
                  ],
                },
                {
                  title: '数据字典',
                  key: 'name3',
                  children: [
                    {
                      valueType: 'h1',
                      children: '数据字典',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一个固定格式的数据说明书，它包含了所有数据元素的定义和说明，以及它们的定义和格式。',
                    },
                  ],
                },
                {
                  title: '项目空间（模块）',
                  key: 'name4',
                  children: [
                    {
                      valueType: 'h1',
                      children: '项目空间(模块)',
                    },
                    {
                      valueType: 'text',
                      children:
                        '这是一个用于存储和管理一组相关数据和文档的模块。在项目空间中，用户可以创建文件夹、上传文件、管理文件等操作。',
                    },
                  ],
                },
                {
                  title: '项目合作方',
                  key: 'name5',
                  children: [
                    {
                      valueType: 'h1',
                      children: '项目合作方',
                    },
                    {
                      valueType: 'text',
                      children: '与用户进行数据合作的外部组织或个人。',
                    },
                  ],
                },
                {
                  title: '项目数据资源',
                  key: 'name6',
                  children: [
                    {
                      valueType: 'h1',
                      children: '项目数据资源',
                    },
                    {
                      valueType: 'text',
                      children:
                        '在一个项目中产生或收集的所有数据资源，包括原始数据、处理数据、文档和元数据等。',
                    },
                  ],
                },
                {
                  title: '离线批量数据',
                  key: 'name7',
                  children: [
                    {
                      valueType: 'h1',
                      children: '离线批量数据',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种离线处理数据的方式，用户将需要处理的数据批量上传到系统中，再通过系统进行处理。',
                    },
                    {
                      valueType: 'text',
                      children: '相关数据请查看：',
                    },
                    {
                      valueType: 'navigationSwitch',
                      children: {
                        selectKey: 'name9',
                        children: '节点场景',
                      },
                    },
                  ],
                },
                {
                  title: '线上服务数据',
                  key: 'name8',
                  children: [
                    {
                      valueType: 'h1',
                      children: '线上服务数据',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种在线处理数据的方式，用户通过在线提交数据并调用相应的处理程序进行数据处理。',
                    },
                  ],
                },
                {
                  title: '节点场景',
                  key: 'name9',
                  children: [
                    {
                      valueType: 'h1',
                      children: '节点场景',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一个由多个节点组成的场景，每个节点都有不同的特征和功能，相互之间可以通信和互动。',
                    },
                  ],
                },
                {
                  title: '模型配置',
                  key: 'name10',
                  children: [
                    {
                      valueType: 'h1',
                      children: '模型配置',
                    },
                    {
                      valueType: 'text',
                      children:
                        '根据用户的要求对模型参数进行设置和调整，以达到最佳的处理效果。',
                    },
                  ],
                },
                {
                  title: '模型文件',
                  key: 'name11',
                  children: [
                    {
                      valueType: 'h1',
                      children: '模型文件',
                    },
                    {
                      valueType: 'text',
                      children:
                        '系统生成的模型文件，包含了所有的模型参数和处理算法。',
                    },
                  ],
                },
                {
                  title: '预处理文件',
                  key: 'name12',
                  children: [
                    {
                      valueType: 'h1',
                      children: '预处理文件',
                    },
                    {
                      valueType: 'text',
                      children:
                        '用于预处理数据的文件，系统可根据用户的设置进行数据预处理。',
                    },
                  ],
                },
                {
                  title: '后处理文件',
                  key: 'name13',
                  children: [
                    {
                      valueType: 'text',
                      children:
                        '用于后处理数据的文件，系统将处理完成的数据输出到后处理文件中。',
                    },
                  ],
                },
                {
                  title: '安全模型',
                  key: 'name14',
                  children: [
                    {
                      valueType: 'h1',
                      children: '安全模型',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种用于保护用户数据的安全控制模型，可以对数据进行加密、访问控制和防止数据泄漏等处理。',
                    },
                  ],
                },
                {
                  title: '安全匹配',
                  key: 'name15',
                  children: [
                    {
                      valueType: 'h1',
                      children: '安全匹配',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种用于数据匹配的安全控制方法，可以对数据进行匿名化处理，以保护用户的隐私。',
                    },
                  ],
                },
                {
                  title: '安全统计',
                  key: 'name16',
                  children: [
                    {
                      valueType: 'h1',
                      children: '安全统计',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种用于保护数据隐私的统计方法，可以在保证数据隐私的情况下进行数据分析和统计。',
                    },
                  ],
                },
                {
                  title: '安全联盟',
                  key: 'name17',
                  children: [
                    {
                      valueType: 'h1',
                      children: '安全联盟',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种由多方共同协作的数据处理和安全保护机制，可以保障数据的机密性和完整性。',
                    },
                  ],
                },
                {
                  title: '安全脚本',
                  key: 'name18',
                  children: [
                    {
                      valueType: 'h1',
                      children: '安全脚本',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种用于数据处理和安全保护的脚本程序，可以自动化完成数据安全控制任务。',
                    },
                  ],
                },
                {
                  title: '匿名查询',
                  key: 'name19',
                  children: [
                    {
                      valueType: 'h1',
                      children: '匿名查询',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种保护用户隐私的查询方法，可以匿名化处理查询请求和返回结果，以保护用户的隐私。',
                    },
                  ],
                },
                {
                  title: '导出表',
                  key: 'name20',
                  children: [
                    {
                      valueType: 'h1',
                      children: '导出表',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种用于导出数据的文件表格，用户可以将处理完的数据导出到该表格中进行进一步的处理和使用。',
                    },
                  ],
                },
              ],
            },
          ]}
          valueTypeMap={map}
        >
          <div
            style={{
              width: 800,
            }}
          >
            <ProHelpPanel
              defaultSelectedKey="1"
              height={648}
              footer={
                <div
                  style={{
                    textAlign: 'center',
                    borderTop: '1px solid #EEE',
                    padding: 12,
                    marginTop: 24,
                  }}
                >
                  这篇文章的质量如何？ <Rate />
                </div>
              }
            />
          </div>
        </ProHelp>
      </div>
    </App>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import {
  CrownFilled,
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
  SmileFilled,
  TabletFilled,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <ProLayout
      collapsed={true}
      collapsedButtonRender={false}
      layout="side"
      route={{
        routes: [
          {
            path: '/welcome',
            name: '欢迎',
            icon: <SmileFilled />,
            component: './Welcome',
          },
          {
            path: '/admin',
            name: '管理',
            icon: <CrownFilled />,
            access: 'canAdmin',
            component: './Admin',
          },
          {
            path: '/list',
            name: '列表',
            icon: <TabletFilled />,
            access: 'canAdmin',
            component: './Admin',
          },
        ],
      }}
      location={{
        pathname,
      }}
      menu={{
        type: 'group',
        collapsedShowTitle: true,
      }}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: '七妮妮',
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          props.layout !== 'side' ? (
            <div
              key="SearchOutlined"
              aria-hidden
              style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <Input
                style={{
                  borderRadius: 4,
                  marginInlineEnd: 12,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                }}
                prefix={
                  <SearchOutlined
                    style={{
                      color: 'rgba(0, 0, 0, 0.15)',
                    }}
                  />
                }
                placeholder="搜索方案"
                variant="borderless"
              />
              <PlusCircleFilled
                style={{
                  color: 'var(--ant-primary-color)',
                  fontSize: 24,
                }}
              />
            </div>
          ) : undefined,
          <InfoCircleFilled key="InfoCircleFilled" />,
          <QuestionCircleFilled key="QuestionCircleFilled" />,
          <GithubFilled key="GithubFilled" />,
        ];
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <p
            style={{
              textAlign: 'center',
              paddingBlockStart: 12,
            }}
          >
            Power by Ant Design
          </p>
        );
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
    >
      <PageContainer
        extra={[
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>,
        ]}
        footer={[
          <Button key="3">重置</Button>,
          <Button key="2" type="primary">
            提交
          </Button>,
        ]}
      >
        <ProCard
          style={{
            height: '200vh',
            minHeight: 800,
          }}
        >
          <div />
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <ProLayout
      collapsed
      siderMenuType="group"
      route={{
        routes: [
          {
            path: '/all',
            name: '总览',
            parentId: '14',
            children: [
              { path: '/all/workbench/index', name: '首页', parentId: '16' },
            ],
          },
          {
            path: '/sa',
            name: '隐私计算',
            parentId: '14',
            children: [
              {
                path: '/sa/experiment',
                name: '项目空间',
                parentId: '19',
                children: [
                  {
                    path: '/sa/experiment/list',
                    name: '项目列表',
                    parentId: '20',
                  },
                ],
              },
              {
                path: '/sa/offlinetask',
                name: '任务管理中心',
                parentId: '19',
                children: [
                  {
                    path: '/sa/offlinetask/tasklist',
                    name: '研发任务',
                    parentId: '27',
                  },
                  {
                    path: '/sa/offlinetask/dispatchtask',
                    name: '调度任务',
                    parentId: '27',
                  },
                ],
              },
              {
                path: '/sa/onlinetask',
                name: '服务管控中心',
                parentId: '19',
                children: [
                  {
                    path: '/sa/onlinetask/anonymousquery',
                    name: '在线匿名查询服务',
                    parentId: '34',
                  },
                ],
              },
            ],
          },
          {
            path: '/others',
            name: '其他',
            parentId: '14',
            children: [
              {
                path: '/others/data',
                name: '数据管理',
                parentId: '39',
                children: [
                  {
                    path: '/others/data/list',
                    name: '所有数据',
                    parentId: '40',
                  },
                  {
                    path: '/others/data/datadictionary',
                    name: '数据字典',
                    parentId: '40',
                  },
                  {
                    path: '/others/data/outputConfiguration',
                    name: '输出配置',
                    parentId: '40',
                  },
                ],
              },
              {
                path: '/others/monitormarket',
                name: '监控大盘',
                parentId: '39',
                children: [
                  {
                    path: '/others/monitormarket/model',
                    name: '模型监控',
                    parentId: '58',
                  },
                  {
                    path: '/others/monitormarket/alliance',
                    name: '联盟监控',
                    parentId: '58',
                  },
                  {
                    path: '/others/monitormarket/resource',
                    name: '资源监控',
                    parentId: '58',
                  },
                ],
              },
            ],
          },
        ],
      }}
      location={{
        pathname,
      }}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: '七妮妮',
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          props.layout !== 'side' ? (
            <div
              key="SearchOutlined"
              aria-hidden
              style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <Input
                style={{
                  borderRadius: 4,
                  marginInlineEnd: 12,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                }}
                prefix={
                  <SearchOutlined
                    style={{
                      color: 'rgba(0, 0, 0, 0.15)',
                    }}
                  />
                }
                placeholder="搜索方案"
                variant="borderless"
              />
              <PlusCircleFilled
                style={{
                  color: 'var(--ant-primary-color)',
                  fontSize: 24,
                }}
              />
            </div>
          ) : undefined,
          <InfoCircleFilled key="InfoCircleFilled" />,
          <QuestionCircleFilled key="QuestionCircleFilled" />,
          <GithubFilled key="GithubFilled" />,
        ];
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <p
            style={{
              textAlign: 'center',
              paddingBlockStart: 12,
            }}
          >
            Power by Ant Design
          </p>
        );
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
    >
      <PageContainer
        extra={[
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>,
        ]}
        footer={[
          <Button key="3">重置</Button>,
          <Button key="2" type="primary">
            提交
          </Button>,
        ]}
      >
        <ProCard
          style={{
            height: '200vh',
            minHeight: 800,
          }}
        >
          <div />
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: 'side',
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        siderWidth={256}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

export default [
  {
    path: '/home',
    name: '首页',
    locale: 'menu.home',
    routes: [
      {
        path: '/home/overview',
        name: '概述',
        hideInMenu: true,
        locale: 'menu.home.overview',
      },
      {
        path: '/home/search',
        name: '搜索',
        hideInMenu: true,
        locale: 'menu.home.search',
      },
    ],
  },
  {
    path: '/data_hui',
    name: '汇总数据',
    locale: 'menu.data_hui',
    routes: [
      {
        collapsed: true,
        menuName: '域买家维度交易',
        name: '域买家维度交易',
        path: '/xx',
        routes: [
          {
            id: 2,
            name: '月表',
            path: '/data_hui2',
          },
          {
            name: '日表',
            path: '/data_hui3?tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
          },
        ],
      },
      {
        name: '维度交易',
        path: '/',
        routes: [
          {
            name: '月表',
            path: '/data_hui4',
          },
          {
            name: '日表',
            key: 'tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
            path: '/data_hui5',
          },
        ],
      },
    ],
  },
  {
    path: '/data_ming',
    name: '明细数据',
    locale: 'menu.data_ming',
    routes: [
      {
        path: '/other/outLoadMenu',
        name: '菜单导出',
        locale: 'menu.other.outLoadMenu',
        hideInMenu: true,
      },
      {
        path: '/other/homeEdit',
        name: '概述导出',
        locale: 'menu.other.outHomeEdit',
      },
    ],
  },
  {
    path: '/other',
    name: '其他',
    locale: 'menu.other',
    routes: [
      {
        path: '/other/upLoad',
        name: 'odps同步导入',
        locale: 'menu.other.upLoad',
      },
      {
        path: '/other/upLoadMenu',
        name: '菜单导入',
        locale: 'menu.other.upLoadMenu',
      },
      {
        path: '/other/homeEdit',
        name: '概述编辑',
        locale: 'menu.other.homeEdit',
        hideInMenu: true,
      },
    ],
  },
];

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import complexMenu from './complexMenu';

const Demo = () => (
  <div
    style={{
      height: '100vh',
      overflow: 'auto',
    }}
  >
    <ProLayout
      location={{
        pathname: '/articles/new',
      }}
      route={{
        routes: complexMenu,
      }}
      layout="top"
    >
      <ProLayout
        location={{
          pathname: '/home/overview',
        }}
        route={{
          routes: complexMenu,
        }}
        menuHeaderRender={false}
      >
        <PageContainer content="欢迎使用">
          <div>Hello World</div>
        </PageContainer>
      </ProLayout>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { GithubOutlined } from '@ant-design/icons';
import {
  DefaultFooter,
  PageContainer,
  ProLayout,
} from '@ant-design/pro-components';
import { Switch } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [menu, setMenu] = useState(true);
  const [header, setHeader] = useState(true);
  const [footer, setFooter] = useState(true);
  const [menuHeader, setMenuHeader] = useState(true);
  const [right, setRight] = useState(true);
  const [pure, setPure] = useState(false);
  const [collapsedButtonRender, setCollapsedButtonRender] = useState(true);
  return (
    <>
      <Switch
        checked={loading}
        onChange={(e) => setLoading(e)}
        style={{
          margin: 8,
        }}
      />
      loading 状态
      <Switch
        checked={collapsed}
        onChange={(e) => setCollapsed(e)}
        style={{
          margin: 8,
        }}
      />
      折叠layout
      <Switch
        checked={menu}
        onChange={(e) => setMenu(e)}
        style={{
          margin: 8,
        }}
      />
      显示菜单
      <Switch
        checked={collapsedButtonRender}
        onChange={(e) => setCollapsedButtonRender(e)}
        style={{
          margin: 8,
        }}
      />
      显示折叠按钮
      <Switch
        checked={header}
        onChange={(e) => setHeader(e)}
        style={{
          margin: 8,
        }}
      />
      显示顶栏
      <Switch
        checked={menuHeader}
        onChange={(e) => setMenuHeader(e)}
        style={{
          margin: 8,
        }}
      />
      显示菜单头
      <Switch
        checked={footer}
        onChange={(e) => setFooter(e)}
        style={{
          margin: 8,
        }}
      />
      显示页脚
      <Switch
        checked={right}
        onChange={(e) => setRight(e)}
        style={{
          margin: 8,
        }}
      />
      显示顶栏右侧
      <Switch
        checked={pure}
        onChange={(e) => setPure(e)}
        style={{
          margin: 8,
        }}
      />
      清爽模式
      <br />
      <br />
      <ProLayout
        {...defaultProps}
        style={{
          height: '100vh',
        }}
        menuHeaderRender={menuHeader ? undefined : false}
        headerRender={header ? undefined : false}
        collapsedButtonRender={collapsedButtonRender ? undefined : false}
        menuRender={(_, dom) => (menu ? dom : null)}
        breakpoint={false}
        collapsed={collapsed}
        loading={loading}
        onCollapse={setCollapsed}
        avatarProps={{
          src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
        }}
        location={{
          pathname: '/welcome',
        }}
        pure={pure}
        footerRender={() =>
          footer ? (
            <DefaultFooter
              links={[
                {
                  key: 'Ant Design Pro',
                  title: 'Ant Design Pro',
                  href: 'https://pro.ant.design',
                  blankTarget: true,
                },
                {
                  key: 'github',
                  title: <GithubOutlined />,
                  href: 'https://github.com/ant-design/ant-design-pro',
                  blankTarget: true,
                },
                {
                  key: 'Ant Design',
                  title: 'Ant Design',
                  href: 'https://ant.design',
                  blankTarget: true,
                },
              ]}
              copyright="2022 蚂蚁金服体验技术部出品"
            />
          ) : null
        }
      >
        <PageContainer content="欢迎使用">Hello World</PageContainer>
      </ProLayout>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProHelpDataSourceChildren } from '@ant-design/pro-components';
import {
  ProHelp,
  ProHelpPanel,
  ProHelpSelect,
} from '@ant-design/pro-components';
import { App, Typography } from 'antd';
import Draggable from 'react-draggable';

const Demo = () => {
  const map = new Map<
    string,
    (
      item: ProHelpDataSourceChildren<{
        video: React.VideoHTMLAttributes<HTMLVideoElement>;
        list: {
          title: string;
          children: {
            title: string;
            href: string;
          }[];
        };
      }>,
      index: number,
    ) => React.ReactNode
  >();

  map.set('video', (item) => {
    return (
      <video
        key=""
        style={{
          width: '100%',
        }}
        controls
        {...(item.children as React.VideoHTMLAttributes<HTMLVideoElement>)}
      />
    );
  });

  map.set('list', (item) => {
    const listConfig = item.children as {
      title: string;
      children: {
        title: string;
        href: string;
      }[];
    };
    return (
      <div>
        <h3
          style={{
            margin: '8px 0',
          }}
        >
          {listConfig.title}
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {listConfig.children.map((child, index) => {
            return (
              <div key={index}>
                <Typography.Text>
                  {child.href ? (
                    <a href={child.href}>{child.title}</a>
                  ) : (
                    child.title
                  )}
                </Typography.Text>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <App>
      <div
        style={{
          margin: 24,
          paddingBlockEnd: 128,
          display: 'flex',
          gap: 24,
          flexDirection: 'column',
        }}
      >
        <ProHelp<{
          video: React.VideoHTMLAttributes<HTMLVideoElement>;
          list: {
            title: string;
            children: {
              title: string;
              href: string;
            }[];
          };
        }>
          dataSource={[
            {
              title: '常见问题',
              key: 'default',
              children: [
                {
                  title: '如何开始操作数据授权？',
                  key: '1',
                  children: [
                    {
                      valueType: 'h1',
                      children: '如何开始操作数据授权？',
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'h2',
                      children: '相关问题',
                    },
                    {
                      valueType: 'link',
                      children: {
                        href: 'www.alipay.com',
                        children: '鹊凿平台DCI申领操作手册?',
                      },
                    },
                    {
                      valueType: 'link',
                      children: {
                        href: 'www.alipay.com',
                        children: 'openAPI 注册工具?',
                      },
                    },

                    {
                      valueType: 'h2',
                      children: '帮助视频',
                    },
                    {
                      valueType: 'video',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/file/A*oJOJRZwe00kAAAAAAAAAAAAADml6AQ',
                      },
                    },
                  ],
                },
                {
                  title: '证据包内包含哪些内容，如何下载证据包？',
                  key: '2',
                  children: [
                    {
                      valueType: 'h1',
                      children: '证据包内包含哪些内容，如何下载证据包？',
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    // @ts-expect-error
                    {
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'list',
                      children: {
                        title: '相关问题',
                        children: [
                          {
                            href: 'www.alipay.com',
                            title: '鹊凿平台DCI申领操作手册?',
                          },
                          {
                            href: 'www.alipay.com',
                            title: 'openAPI 注册工具?',
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ]}
          valueTypeMap={map}
        >
          <ProHelpSelect />

          <Draggable>
            <div
              style={{
                width: 900,
              }}
            >
              <ProHelpPanel defaultSelectedKey="1" height={448} />
            </div>
          </Draggable>
        </ProHelp>
      </div>
    </App>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProHelpDataSourceChildren } from '@ant-design/pro-components';
import {
  ProHelp,
  ProHelpDrawer,
  ProHelpModal,
  ProHelpPopover,
} from '@ant-design/pro-components';
import { App, Typography } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const map = new Map<
    string,
    (
      item: ProHelpDataSourceChildren<{
        video: React.VideoHTMLAttributes<HTMLVideoElement>;
        list: {
          title: string;
          children: {
            title: string;
            href: string;
          }[];
        };
      }>,
      index: number,
    ) => React.ReactNode
  >();

  map.set('video', (item) => {
    return (
      <video
        key=""
        style={{
          width: '100%',
        }}
        controls
        {...(item.children as React.VideoHTMLAttributes<HTMLVideoElement>)}
      />
    );
  });

  map.set('list', (item) => {
    const listConfig = item.children as {
      title: string;
      children: {
        title: string;
        href: string;
      }[];
    };
    return (
      <div>
        <h3
          style={{
            margin: '8px 0',
          }}
        >
          {listConfig.title}
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {listConfig.children.map((child, index) => {
            return (
              <div key={index}>
                <Typography.Text>
                  {child.href ? (
                    <a href={child.href}>{child.title}</a>
                  ) : (
                    child.title
                  )}
                </Typography.Text>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <App>
      <div
        style={{
          margin: 24,
          paddingBlockEnd: 128,
          display: 'flex',
          gap: 24,
          flexDirection: 'column',
        }}
      >
        <ProHelp<{
          video: React.VideoHTMLAttributes<HTMLVideoElement>;
          list: {
            title: string;
            children: {
              title: string;
              href: string;
            }[];
          };
        }>
          dataSource={[
            {
              title: '常见问题',
              key: 'default',
              children: [
                {
                  title: '如何开始操作数据授权？',
                  key: '1',
                  children: [
                    {
                      valueType: 'h1',
                      children: '如何开始操作数据授权？',
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'h2',
                      children: '相关问题',
                    },
                    {
                      valueType: 'link',
                      children: {
                        href: 'www.alipay.com',
                        children: '鹊凿平台DCI申领操作手册?',
                      },
                    },
                    {
                      valueType: 'link',
                      children: {
                        href: 'www.alipay.com',
                        children: 'openAPI 注册工具?',
                      },
                    },

                    {
                      valueType: 'h2',
                      children: '帮助视频',
                    },
                    {
                      valueType: 'video',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/file/A*oJOJRZwe00kAAAAAAAAAAAAADml6AQ',
                      },
                    },
                  ],
                },
                {
                  title: '证据包内包含哪些内容，如何下载证据包？',
                  key: '2',
                  children: [
                    {
                      valueType: 'h1',
                      children: '证据包内包含哪些内容，如何下载证据包？',
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    // @ts-expect-error
                    {
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'list',
                      children: {
                        title: '相关问题',
                        children: [
                          {
                            href: 'www.alipay.com',
                            title: '鹊凿平台DCI申领操作手册?',
                          },
                          {
                            href: 'www.alipay.com',
                            title: 'openAPI 注册工具?',
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ]}
          valueTypeMap={map}
        >
          <div
            style={{
              display: 'flex',
              gap: 16,
              width: 600,
              justifyContent: 'space-between',
            }}
          >
            <button onClick={() => setDrawerOpen(!drawerOpen)}>打开</button>
            <button onClick={() => setModalOpen(!modalOpen)}>打开</button>
            <ProHelpModal
              modalProps={{
                open: modalOpen,
                afterClose: () => setModalOpen(false),
              }}
            />
            <ProHelpDrawer
              drawerProps={{
                open: drawerOpen,
                afterOpenChange(open) {
                  setDrawerOpen(open);
                },
              }}
            />
            <ProHelpPopover selectedKey="1">Morse</ProHelpPopover>
          </div>
        </ProHelp>
      </div>
    </App>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const settings: Partial<ProSettings> | undefined = {
    fixSiderbar: true,
    layout: 'top',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: <div>七妮妮</div>,
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                  }}
                  prefix={<SearchOutlined />}
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '200vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
} from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <ProConfigProvider dark={true}>
      <ProLayout
        {...defaultProps}
        splitMenus
        location={{
          pathname,
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <p
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              Power by Ant Design
            </p>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
      >
        <PageContainer
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        >
          <ProCard
            style={{
              height: '200vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </ProConfigProvider>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { Avatar, Image, Space } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: 'side',
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        collapsed={false}
        menu={{
          type: 'group',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <div
              key={1}
              style={{
                height: '200px',
              }}
            >
              <Image
                width={'100%'}
                preview={false}
                height={132}
                src="https://gw.alipayobjects.com/zos/bmw-prod/d283f09a-64d6-4d59-bfc7-37b49ea0da2b.svg"
              />
              <Space
                align="center"
                size="middle"
                style={{
                  width: '100%',
                  marginBlockStart: '32px',
                }}
              >
                <Avatar
                  src="https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"
                  size="small"
                />
                <div
                  style={{
                    fontSize: '14px',
                    marginInlineEnd: '32px',
                  }}
                >
                  七妮妮
                </div>
                <InfoCircleFilled key="InfoCircleFilled" />
                <QuestionCircleFilled key="QuestionCircleFilled" />
                <GithubFilled key="GithubFilled" />
              </Space>
            </div>,
          ];
        }}
        menuRender={(props, defaultDom) => {
          console.log('defaultDom', defaultDom);
          return defaultDom;
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import defaultProps from './_defaultProps';

const Demo = () => {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        menuItemRender={(item, dom) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            pre {dom}
          </div>
        )}
        subMenuItemRender={(_, dom) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            pre {dom}
          </div>
        )}
        title="Remax"
        logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
        menuHeaderRender={(logo, title) => (
          <div
            id="customize_menu_header"
            style={{
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
            onClick={() => {
              window.open('https://remaxjs.org/');
            }}
          >
            {logo}
            {title}
          </div>
        )}
        {...defaultProps}
        location={{
          pathname: '/welcome',
        }}
      >
        <PageContainer content="欢迎使用">Hello World</PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { ProHelp, ProHelpPanel } from '@ant-design/pro-components';
import { App } from 'antd';
import ReactMarkdown from 'react-markdown';

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

const Demo = () => {
  const map = new Map();
  map.set(
    'markdown',
    (item: {
      valueType: string;
      children: {
        className: string;
        children: string;
      };
    }) => {
      return (
        <div className={item.children.className}>
          <ReactMarkdown>{item.children.children?.trim()}</ReactMarkdown>
        </div>
      );
    },
  );
  return (
    <App>
      <div
        style={{
          margin: 24,
          paddingBlockEnd: 128,
          display: 'flex',
          gap: 24,
          flexDirection: 'column',
        }}
      >
        <ProHelp<{
          markdown: {
            className: string;
            children: string;
          };
        }>
          valueTypeMap={map}
          onLoadContext={async (key) => {
            await waitTime(1000);
            if (key === '1') {
              return [
                {
                  valueType: 'h1',
                  children: '如何开始操作数据授权？',
                },
                {
                  valueType: 'text',
                  children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                },
                {
                  valueType: 'html',
                  children: {
                    children: `<b>加粗文本</b><br><br>
  <i>斜体文本</i><br><br>
  <code>电脑自动输出</code><br><br>
  这是 <sub> 下标</sub> 和 <sup> 上标</sup>
  `,
                  },
                },
              ];
            }
            return [
              {
                valueType: 'h1',
                children: 'Markdown 语法',
              },
              {
                valueType: 'markdown',
                children: {
                  className: 'markdown',
                  children: `

# h1 Heading 8-)

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

                 

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code


Block code "fences"

\`\`\` 
Sample text here...
\`\`\` 

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::
`,
                },
              },
              {
                valueType: 'inlineLink',
                children: {
                  href: 'https://www.alipay.com',
                  children: '摩斯产品',
                },
              },
              {
                valueType: 'text',
                children:
                  '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
              },
            ];
          }}
          dataSource={[
            {
              title: '常见问题',
              key: 'default',
              children: [
                {
                  title: 'html语法',
                  key: '1',
                  asyncLoad: true,
                },
                {
                  title: 'markdown语法',
                  key: '2',
                  asyncLoad: true,
                },
              ],
            },
          ]}
        >
          <div
            style={{
              width: 400,
            }}
          >
            <ProHelpPanel defaultSelectedKey="1" height={448} />
          </div>
        </ProHelp>
      </div>
    </App>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { UserOutlined } from '@ant-design/icons';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import complexMenu from './complexMenu';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/home',
      }}
      fixSiderbar={false}
      collapsedButtonRender={false}
      collapsed={false}
      iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
      route={{
        routes: [
          {
            path: '/home',
            name: '收藏',
            icon: 'icon-shoucang1',
          },
          {
            path: '/home/overview',
            name: 'FaceBook',
            icon: 'icon-facebook',
          },
          {
            path: '/home/search',
            name: 'Twitter',
            icon: 'icon-twitter',
          },
        ],
      }}
      headerRender={false}
    >
      <ProLayout
        location={{
          pathname: '/home/overview',
        }}
        fixSiderbar={false}
        route={{
          routes: complexMenu,
        }}
        style={{
          height: '400px',
        }}
        menu={{
          hideMenuWhenCollapsed: true,
        }}
        avatarProps={{
          icon: <UserOutlined />,
        }}
        menuHeaderRender={false}
      >
        <PageContainer content="欢迎使用">
          <div>Hello World</div>
        </PageContainer>
      </ProLayout>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { AppItemProps, ProSettings } from '@ant-design/pro-components';
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import { Modal } from 'antd';
import defaultProps from './_defaultProps';

const AppGroupList: any = [
  {
    title: 'UI 设计语言',
    desc: '杭州市较知名的 UI 设计语言',
    children: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: 'Ant Design',
        desc: '杭州市较知名的 UI 设计语言',
        url: 'https://ant.design',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
        title: 'Pro Components',
        desc: '专业级 UI 组件库',
        url: 'https://procomponents.ant.design/',
      },
    ],
  },
  {
    title: 'UI 设计语言 2组111',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    desc: '专业级 UI 组件库',
    url: 'https://procomponents.ant.design/',
    children: [
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案',
        url: 'https://antv.vision/',
        target: '_blank',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案',
        url: 'https://antv.vision/',
        target: '_blank',
      },
    ],
  },
  {
    title: '待分组',
    desc: '专业级 UI 组件库',
    children: [
      {
        title: '工具',
        desc: '知识创作与分享工具',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
        url: 'https://www.yuque.com/',
      },
      {
        title: '前端应用框架',
        desc: '插件化的企业级前端应用框架。',
        icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
        url: 'https://umijs.org/zh-CN/docs',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
        title: 'qiankun',
        desc: '可能是你见过最完善的微前端解决方案🧐',
        url: 'https://qiankun.umijs.org/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
        title: 'Kitchen ',
        desc: 'Sketch 工具集',
        url: 'https://kitchen.alipay.com/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '为组件开发场景而生的文档工具',
        url: 'https://d.umijs.org/zh-CN',
      },
    ],
  },
];

const Demo = () => {
  const settings: ProSettings = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };
  const itemClick = (
    item: AppItemProps,
    popoverRef?: React.RefObject<HTMLSpanElement>,
  ) => {
    // 点击后关闭 Popover
    popoverRef?.current?.click?.();

    Modal?.confirm({
      width: 600,
      title: '点击项 详细数据',
      content: (
        <pre style={{ overflow: 'auto' }}>
          {JSON.stringify(typeof item === 'object' ? item : {}, null, 2)}
        </pre>
      ),
      okText: '前往',
      onOk: () => window.open(item?.url),
    });
  };

  return (
    <div id="test-pro-layout" style={{ height: '100vh' }}>
      <ProConfigProvider hashed={false}>
        <ProLayout
          {...defaultProps}
          appList={AppGroupList}
          itemClick={itemClick}
          location={{ pathname: '/list/sub-page/sub-sub-page1' }}
          siderMenuType="group"
          menu={{ collapsedShowGroupTitle: true }}
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            title: '七妮妮',
          }}
          {...settings}
        />
      </ProConfigProvider>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import complexMenu from './complexMenu';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/data_hui/data_hui2',
      }}
      collapsed={false}
      collapsedButtonRender={false}
      route={{
        routes: complexMenu,
      }}
      menu={{ defaultOpenAll: true, hideMenuWhenCollapsed: true }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { CrownOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Button, Input, Result, Tag } from 'antd';
import { useState } from 'react';

const defaultProps = {
  routes: [
    {
      path: '/welcome',
      name: '欢迎',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
    {
      path: '/admin/sub-page2',
      name: '二级页面',
      icon: <UserOutlined />,
      component: './Welcome',
    },
    {
      path: '/admin/sub-page3',
      name: '三级页面',
      icon: <SmileOutlined />,
      component: './Welcome',
    },
  ],
};

const Demo = () => {
  const [pathname, setPathname] = useState('/welcome');
  return (
    <>
      <ProLayout
        route={defaultProps}
        location={{
          pathname,
        }}
        fixSiderbar
        headerRender={false}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          icon: <UserOutlined />,
        }}
      >
        <PageContainer
          onBack={() => null}
          tags={<Tag color="blue">状态一</Tag>}
          header={{
            style: {
              padding: '8px 16px',
              backgroundColor: '#fff',
              position: 'fixed',
              top: 0,
              width: '100%',
              left: 0,
              zIndex: 999,
              boxShadow: '0 2px 8px #f0f1f2',
            },
          }}
          style={{
            paddingBlockStart: 48,
          }}
          extra={[
            <Input.Search
              key="search"
              style={{
                width: 240,
              }}
            />,
            <Button key="3">操作一</Button>,
            <Button key="2" type="primary">
              操作一
            </Button>,
          ]}
        >
          <div
            style={{
              height: '120vh',
              minHeight: 600,
            }}
          >
            <Result
              status="404"
              style={{
                height: '100%',
                background: '#fff',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </div>
        </PageContainer>
      </ProLayout>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const settings: Partial<ProSettings> | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        token={{
          bgLayout: '#fff',
          header: {
            colorBgHeader: '#fff',
          },
          sider: {
            colorMenuBackground: '#fff',
          },
          pageContainer: {
            colorBgPageContainer: '#fff',
          },
        }}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: <div>七妮妮</div>,
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                  }}
                  prefix={<SearchOutlined />}
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '200vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  CrownOutlined,
  LeftOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-components';
import { Button, Result, Space, Tag } from 'antd';
import { useState } from 'react';

const defaultProps = {
  routes: [
    {
      path: '/admin/sub-page1',
      name: '一级页面',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
    {
      path: '/admin/sub-page2',
      name: '二级页面',
      icon: <UserOutlined />,
      component: './Welcome',
    },
    {
      path: '/admin/sub-page3',
      name: '三级页面',
      icon: <SmileOutlined />,
      component: './Welcome',
    },
  ],
};

const defaultHomeProps = {
  routes: [
    {
      path: '/',
      name: '首页',
      icon: <CrownOutlined />,
      component: './Welcome',
    },
    {
      path: '/admin/sub-page1',
      name: '详情页',
      icon: <SmileOutlined />,
      component: './Welcome',
    },
  ],
};

const Demo = () => {
  const [pathname, setPathname] = useState('/admin/sub-page1');
  return (
    <>
      <ProLayout
        route={pathname === '/' ? defaultHomeProps : defaultProps}
        location={{
          pathname,
        }}
        logoStyle={{
          backgroundColor: '#eee',
        }}
        menuHeaderRender={(logo, title, props) => {
          if (pathname === '/') {
            return (
              <a>
                {logo}
                {title}
              </a>
            );
          }
          if (props?.collapsed) {
            return (
              <Space>
                <LeftOutlined
                  style={{
                    fontSize: 24,
                  }}
                />
              </Space>
            );
          }
          return (
            <Space direction="vertical">
              <Button
                size="small"
                icon={<LeftOutlined />}
                onClick={() => {
                  setPathname('/');
                }}
              >
                返回应用列表
              </Button>
              <b>alipay_dev_gzone</b>
              <span>Creation Time 2017-01-10</span>
              <Tag color="warning">运行中</Tag>
            </Space>
          );
        }}
        fixSiderbar
        headerRender={() => {
          return null;
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          icon: <UserOutlined />,
        }}
      >
        <div
          style={{
            height: '120vh',
            minHeight: 600,
          }}
        >
          <Result
            status="404"
            style={{
              height: '100%',
              background: '#fff',
            }}
            icon={
              <img
                src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aPIBS5gRPu4AAAAAAAAAAAAAARQnAQ"
                alt="404"
              />
            }
            title="Hello World"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary">Back Home</Button>}
          />
        </div>
      </ProLayout>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import defaultProps from './_defaultProps';

const Demo = () => (
  <ProLayout
    {...defaultProps}
    style={{
      height: '100vh',
    }}
    location={{
      pathname: '/welcome',
    }}
    menuRender={(props, dom) => (
      <div
        style={{
          background: '#fff',
          boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)',
          overflow: 'hidden',
          height: '100%',
          width: props.collapsed ? 0 : props.siderWidth || 256,
        }}
      >
        {dom}
      </div>
    )}
  >
    <PageContainer content="欢迎使用">Hello World</PageContainer>
  </ProLayout>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  CrownOutlined,
  InfoCircleOutlined,
  MergeCellsOutlined,
  QuestionCircleOutlined,
  TabletOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        fixSiderbar
        route={{
          path: '/',
          routes: [
            {
              path: '/admin',
              name: '管理页',
              icon: <CrownOutlined />,
              access: 'canAdmin',
              component: './Admin',
              routes: [
                {
                  path: '/admin/sub-page1',
                  name: '一级页面',
                  icon: <CrownOutlined />,
                  component: './Welcome',
                },
                {
                  path: '/admin/sub-page2',
                  name: '二级页面',
                  icon: <CrownOutlined />,
                  component: './Welcome',
                },
                {
                  path: '/admin/sub-page3',
                  name: '三级页面',
                  icon: <CrownOutlined />,
                  component: './Welcome',
                },
              ],
            },
            {
              name: '列表页',
              icon: <TabletOutlined />,
              path: '/list',
              component: './ListTableList',
              routes: [
                {
                  path: '/list/sub-page2',
                  name: '二级列表页面',
                  icon: <CrownOutlined />,
                  component: './Welcome',
                },
                {
                  path: '/list/sub-page3',
                  name: '三级列表页面',
                  icon: <CrownOutlined />,
                  component: './Welcome',
                },
              ],
            },
          ],
        }}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: 'Pro Layout',
        }}
        avatarProps={{
          icon: <UserOutlined />,
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={() => [
          <InfoCircleOutlined key="InfoCircleOutlined" />,
          <QuestionCircleOutlined key="QuestionCircleOutlined" />,
          <MergeCellsOutlined key="MergeCellsOutlined" />,
        ]}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <p
              style={{
                textAlign: 'center',
                color: 'rgba(0,0,0,0.6)',
                paddingBlockStart: 12,
              }}
            >
              Power by Ant Design
            </p>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '120vh',
              minHeight: 600,
            }}
          >
            <Result
              status="404"
              style={{
                height: '100%',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import type { ErrorInfo } from 'react';
import React, { useState } from 'react';

class CustomBoundary extends React.Component<
  Record<string, any>,
  { hasError: boolean; errorInfo: string }
> {
  state = { hasError: false, errorInfo: '' };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorInfo: error.message };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Result
          icon={
            <img
              width={256}
              src="https://gw.alipayobjects.com/zos/antfincdn/zIgkN%26mpMZ/shibaizhuangtaizuo.png"
            />
          }
          style={{
            height: '100%',
            background: '#fff',
          }}
          title="错误处理"
          extra={
            <>
              <div
                style={{
                  maxWidth: 620,
                  textAlign: 'start',
                  backgroundColor: 'rgba(255,229,100,0.3)',
                  borderInlineStartColor: '#ffe564',
                  borderInlineStartWidth: '9px',
                  borderInlineStartStyle: 'solid',
                  padding: '20px 45px 20px 26px',
                  margin: 'auto',
                  marginBlockEnd: '30px',
                  marginBlockStart: '20px',
                }}
              >
                <p>注意</p>
                <p>
                  错误边界<strong>无法</strong>捕获以下场景中产生的错误：
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                  }}
                >
                  <li>
                    事件处理（
                    <a href="https://zh-hans.reactjs.org/docs/error-boundaries.html#how-about-event-handlers#how-about-event-handlers">
                      了解更多
                    </a>
                    ）
                  </li>
                  <li>
                    异步代码（例如 <code>setTimeout</code> 或{' '}
                    <code>requestAnimationFrame</code> 回调函数）
                  </li>
                  <li>服务端渲染</li>
                  <li>它自身抛出来的错误（并非它的子组件）</li>
                </ul>
              </div>
              <Button
                danger
                type="primary"
                onClick={() => {
                  window.location.reload();
                }}
              >
                刷新页面
              </Button>
            </>
          }
        />
      );
    }
    return this.props.children;
  }
}

const ErrorTriggerTestPage = () => {
  // default to throw error for snapshot test
  const [error, setError] = useState<boolean>(true);
  if (error) throw new Error('渲染发生了错误');
  return (
    <Button
      danger
      type="primary"
      onClick={() => {
        setError(true);
      }}
    >
      触发错误
    </Button>
  );
};

const Demo = () => {
  const [pathname, setPathname] = useState('/default');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        route={{
          path: '/',
          routes: [
            {
              path: '/default',
              name: '默认错误',
            },
            {
              path: '/custom',
              name: '自定义错误',
            },
          ],
        }}
        location={{
          pathname,
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        ErrorBoundary={pathname === '/custom' ? CustomBoundary : undefined}
      >
        <PageContainer>
          <ErrorTriggerTestPage />
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { Button, Descriptions, Result, Space, Statistic } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人">张三</Descriptions.Item>
    <Descriptions.Item label="联系方式">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="备注">
      中国浙江省杭州市西湖区古翠路
    </Descriptions.Item>
  </Descriptions>
);

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
  });
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: 'Pro Layout',
        }}
        menuFooterRender={(props) => {
          return (
            <a
              style={{
                lineHeight: '48rpx',
                display: 'flex',
                height: 48,
                color: 'rgba(255, 255, 255, 0.65)',
                alignItems: 'center',
              }}
              href="https://preview.pro.ant.design/dashboard/analysis"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="pro-logo"
                src="https://procomponents.ant.design/favicon.ico"
                style={{
                  width: 16,
                  height: 16,
                  margin: '0 16px',
                  marginInlineEnd: 10,
                }}
              />
              {!props?.collapsed && 'Preview Pro'}
            </a>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          icon: <UserOutlined />,
        }}
        {...settings}
      >
        <PageContainer
          content={content}
          tabList={[
            {
              tab: '基本信息',
              key: 'base',
            },
            {
              tab: '详细信息',
              key: 'info',
            },
          ]}
          extraContent={
            <Space size={24}>
              <Statistic
                title="Feedback"
                value={1128}
                prefix={<LikeOutlined />}
              />
              <Statistic title="Unmerged" value={93} suffix="/ 100" />
            </Space>
          }
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        >
          <div
            style={{
              height: '120vh',
              minHeight: 600,
            }}
          >
            <Result
              status="404"
              style={{
                height: '100%',
                background: '#fff',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams
      />
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  PageContainer,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import defaultProps from './_defaultProps';

const Demo = () => {
  return (
    <>
      <ProLayout {...defaultProps} layout="mix" splitMenus pure>
        children
      </ProLayout>
      <ProLayout {...defaultProps} layout="mix" splitMenus>
        children
      </ProLayout>
      <ProLayout
        {...defaultProps}
        breadcrumbRender={false}
        layout="mix"
        splitMenus
        headerRender={false}
        onMenuHeaderClick={() => {}}
        formatMessage={({ id }) => id}
        style={{
          height: '100vh',
        }}
      />
      <ProLayout
        {...defaultProps}
        layout="mix"
        menuExtraRender={() => 'dom'}
        menuHeaderRender={() => <div />}
        splitMenus
        location={{
          pathname: '/welcome',
        }}
        style={{
          height: '100vh',
        }}
      />

      <ProLayout
        {...defaultProps}
        layout="top"
        collapsed
        contentWidth="Fixed"
        menuExtraRender={false}
        menuHeaderRender={false}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
        }}
        location={{
          pathname: '/welcome',
        }}
        style={{
          height: '100vh',
        }}
      />
      <ProLayout
        {...defaultProps}
        layout="mix"
        menuHeaderRender={() => null}
        splitMenus
        fixSiderbar
        location={{
          pathname: '/welcome',
        }}
        contentWidth="Fixed"
        openKeys={false}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
        }}
        style={{
          height: '100vh',
        }}
      >
        xxxx
      </ProLayout>

      <ProLayout
        {...defaultProps}
        layout="mix"
        menuHeaderRender={() => null}
        location={{
          pathname: '/welcome',
        }}
        openKeys={false}
        actionsRender={() => [<a key="key">key</a>]}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
        }}
        style={{
          height: '100vh',
        }}
      >
        xxxx
      </ProLayout>
      <ProLayout
        {...defaultProps}
        layout="mix"
        menuHeaderRender={() => null}
        splitMenus={false}
        fixSiderbar
        location={{
          pathname: '/welcome',
        }}
        contentWidth="Fixed"
        openKeys={false}
        style={{
          height: '100vh',
        }}
      >
        <PageContainer>xxxx</PageContainer>
      </ProLayout>
      <SettingDrawer collapse />
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        token={{
          header: {
            colorBgHeader: '#292f33',
            colorHeaderTitle: '#fff',
            colorTextMenu: '#dfdfdf',
            colorTextMenuSecondary: '#dfdfdf',
            colorTextMenuSelected: '#fff',
            colorBgMenuItemSelected: '#22272b',
            colorTextRightActionsItem: '#dfdfdf',
          },
          sider: {
            colorMenuBackground: '#fff',
            colorMenuItemDivider: '#dfdfdf',
            colorTextMenu: '#595959',
            colorTextMenuSelected: 'rgba(42,122,251,1)',
            colorBgMenuItemSelected: 'rgba(230,243,254,1)',
          },
        }}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: (
            <div
              style={{
                color: '#dfdfdf',
              }}
            >
              七妮妮
            </div>
          ),
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(57,62,67,1)',
                    color: '#fff',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: '#dfdfdf',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        {...settings}
      >
        <PageContainer
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        >
          <ProCard
            style={{
              height: '200vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/config/template/new',
      }}
      menu={{
        hideMenuWhenCollapsed: true,
      }}
      route={{
        routes: [
          {
            path: '/config',
            name: '配置中心',
            routes: [
              {
                path: 'product',
                name: '产品配置',
                indexRoute: {
                  component: 'ConfigProduct/index',
                },
                routes: [
                  {
                    path: 'new',
                    component: 'ConfigProduct/NewConfig',
                  },
                  {
                    path: 'edit/:productKey',
                    component: 'ConfigProduct/NewConfig',
                  },
                  {
                    path: 'detail/:productKey',
                    component: 'ConfigProduct/Detail',
                  },
                ],
              },
              {
                path: 'productManage',
                name: '产品管理',
                indexRoute: {
                  component: 'ConfigProductAll/index',
                },
                routes: [
                  {
                    path: 'detail/:productKey',
                    component: 'ConfigProductAll/Detail',
                  },
                ],
              },
              {
                path: 'template',
                name: '产品模板管理',
                indexRoute: {
                  component: 'ConfigTemplate/index',
                },
                routes: [
                  {
                    path: 'new',
                    component: 'ConfigTemplate/NewConfig',
                  },
                  {
                    path: 'edit/:templateKey',
                    component: 'ConfigTemplate/NewConfig',
                  },
                  {
                    path: 'detail/:templateKey',
                    component: 'ConfigTemplate/Detail',
                  },
                ],
              },
              {
                path: 'configItem',
                name: '配置项模板管理',
                indexRoute: {
                  component: 'ConfigItem/index',
                },
                routes: [
                  {
                    path: 'new',
                    component: 'ConfigItem/NewConfig',
                  },
                  {
                    path: 'edit/:productKey',
                    component: 'ConfigItem/NewConfig',
                  },
                  {
                    path: 'detail/:productKey',
                    component: 'ConfigItem/Detail',
                  },
                ],
              },
              {
                path: 'meta',
                name: '元数据管理',
                component: 'ConfigMeta',
              },
            ],
          },
          {
            path: 'asset',
            name: '资产',
            routes: [
              {
                path: 'query',
                name: '资产查询',
                component: 'Asset',
              },
              {
                path: 'collateral',
                name: '抵押查询',
                component: 'Collateral',
              },
            ],
          },
          {
            path: 'bill',
            name: '账单',
            routes: [
              {
                path: 'billNo',
                name: '账单编号',
                component: 'BillNo',
              },
              {
                path: 'bill',
                name: '账单查询',
                component: 'Bill',
              },
              {
                path: 'billItem',
                name: '账单条目',
                component: 'BillItem',
              },
            ],
          },
          {
            path: 'cif',
            name: 'CIF',
            routes: [
              {
                path: 'bankAccount',
                name: '绑卡信息',
                component: 'CifBankAccount',
              },
              {
                path: 'userGroup',
                name: '查询 Group',
                component: 'CifUserGroup',
              },
              {
                path: 'userId',
                name: '查询 ID',
                component: 'CifUserId',
              },
              {
                path: 'newInstitution',
                name: '新增机构',
                indexRoute: {
                  component: 'CifNewInstitution/index',
                },
                routes: [
                  {
                    path: 'new',
                    component: 'CifNewInstitution/ApplyNew',
                  },
                  {
                    path: 'bind/:id',
                    component: 'CifNewInstitution/BindAccount',
                  },
                ],
              },
            ],
          },
          {
            path: 'tools',
            name: '小工具',
            routes: [
              {
                path: 'ttsql',
                name: 'MySQL转BlinkTT流表',
                component: 'ToolTT',
              },
            ],
          },
        ],
      }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Descriptions } from 'antd';
import defaultProps from './_defaultProps';

const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人">张三</Descriptions.Item>
    <Descriptions.Item label="联系方式">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="备注">
      中国浙江省杭州市西湖区古翠路
    </Descriptions.Item>
  </Descriptions>
);

const Demo = () => {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname: '/welcome',
        }}
      >
        <PageContainer fixedHeader content={content}>
          <ProCard
            direction="column"
            ghost
            gutter={[0, 16]}
            style={{
              height: '200vh',
            }}
          >
            <ProCard style={{ height: 200 }} />
            <ProCard gutter={16} ghost style={{ height: 200 }}>
              <ProCard colSpan={16} />
              <ProCard colSpan={8} />
            </ProCard>
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import complexMenu from './complexMenu';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/data_hui/data_hui2',
      }}
      route={{
        routes: complexMenu,
      }}
      menu={{ type: 'group' }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProSettings } from '@ant-design/pro-components';
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import defaultProps from './_defaultProps';

const AppGroupList: any = [
  {
    title: 'UI 设计语言',
    children: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: '应用内跳转',
        url: '/components/page-container',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: 'Ant Design',
        url: 'https://ant.design',
      },
      {
        icon: () => (
          <img src="https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg" />
        ),
        title: 'Pro Components',
        url: 'https://procomponents.ant.design/',
      },
    ],
  },
  {
    title: 'UI 设计语言 2组111',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    url: 'https://procomponents.ant.design/',
    children: [
      {
        icon: 'W',
        title: 'AntV',
        url: 'https://antv.vision/',
        target: '_blank',
      },
      {
        title: 'AntV',
        url: 'https://antv.vision/',
        target: '_blank',
      },
    ],
  },
  {
    title: '待分组',
    children: [
      {
        title: '工具',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
        url: 'https://www.yuque.com/',
      },
      {
        title: '前端应用框架',
        icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
        url: 'https://umijs.org/zh-CN/docs',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
        title: 'qiankun',
        url: 'https://qiankun.umijs.org/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
        title: 'Kitchen ',
        url: 'https://kitchen.alipay.com/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        url: 'https://d.umijs.org/zh-CN',
      },
    ],
  },
];

const Demo = () => {
  const settings: ProSettings = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };

  return (
    <div id="test-pro-layout" style={{ height: '100vh' }}>
      <ProConfigProvider hashed={false}>
        <ProLayout
          {...defaultProps}
          appList={AppGroupList}
          location={{ pathname: '/list/sub-page/sub-sub-page1' }}
          siderMenuType="group"
          menu={{ collapsedShowGroupTitle: true }}
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            title: '七妮妮',
          }}
          {...settings}
        />
      </ProConfigProvider>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  PageContainer,
  ProBreadcrumb,
  ProLayout,
} from '@ant-design/pro-components';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/admin/process/edit/123',
      }}
      layout="mix"
      ErrorBoundary={false}
      headerContentRender={() => <ProBreadcrumb />}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          title: '主页',
        },
        {
          path: '/',
          title: '测试页',
        },
        ...routers,
      ]}
      menuDataRender={() => [
        {
          path: '/welcome',
          name: '欢迎',
        },
        {
          path: '/admin',
          name: '管理',
          children: [
            {
              name: '申请单列表',
              path: '/admin/process',
            },
            {
              name: '申请单详情',
              path: '/admin/process/detail/:id',
              hideInMenu: true,
            },
            {
              name: '编辑申请单',
              path: '/admin/process/edit/:id',
              hideInMenu: true,
            },
            {
              name: '添加申请单',
              path: '/admin/process/add',
              hideInMenu: true,
            },
          ],
        },
      ]}
    >
      <PageContainer content="欢迎使用" breadcrumbRender={false}>
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

export default [
  {
    path: '/',
    name: '欢迎',
    routes: [
      {
        path: '/welcome',
        name: 'one',
        routes: [
          {
            path: '/welcome/welcome',
            name: 'two',
            exact: true,
          },
        ],
      },
    ],
  },
  {
    path: '/demo',
    name: '例子',
  },
];

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <ProLayout
      splitMenus
      token={{
        colorBgAppListIconHover: 'rgba(0,0,0,0.06)',
        colorTextAppListIconHover: 'rgba(255,255,255,0.95)',
        colorTextAppListIcon: 'rgba(255,255,255,0.85)',
        sider: {
          colorBgCollapsedButton: '#fff',
          colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
          colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
          colorMenuBackground: '#004FD9',
          colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.85)',
          colorMenuItemDivider: 'rgba(255,255,255,0.15)',
          colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
          colorBgMenuItemSelected: 'rgba(0,0,0,0.15)',
          colorTextMenuSelected: '#fff',
          colorTextMenuItemHover: 'rgba(255,255,255,0.75)',
          colorTextMenu: 'rgba(255,255,255,0.75)',
          colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
          colorTextMenuTitle: 'rgba(255,255,255,0.95)',
          colorTextMenuActive: 'rgba(255,255,255,0.95)',
          colorTextSubMenuSelected: '#fff',
        },
        header: {
          colorBgHeader: '#004FD9',
          colorBgRightActionsItemHover: 'rgba(0,0,0,0.06)',
          colorTextRightActionsItem: 'rgba(255,255,255,0.65)',
          colorHeaderTitle: '#fff',
          colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
          colorBgMenuItemSelected: 'rgba(0,0,0,0.15)',
          colorTextMenuSelected: '#fff',
          colorTextMenu: 'rgba(255,255,255,0.75)',
          colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
          colorTextMenuActive: 'rgba(255,255,255,0.95)',
        },
      }}
      {...defaultProps}
      location={{
        pathname,
      }}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: '七妮妮',
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          props.layout !== 'side' ? (
            <div
              key="SearchOutlined"
              aria-hidden
              style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <Input
                style={{
                  borderRadius: 4,
                  marginInlineEnd: 12,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                }}
                prefix={
                  <SearchOutlined
                    style={{
                      color: 'rgba(0, 0, 0, 0.15)',
                    }}
                  />
                }
                placeholder="搜索方案"
                variant="borderless"
              />
              <PlusCircleFilled
                style={{
                  color: 'var(--ant-primary-color)',
                  fontSize: 24,
                }}
              />
            </div>
          ) : undefined,
          <InfoCircleFilled key="InfoCircleFilled" />,
          <QuestionCircleFilled key="QuestionCircleFilled" />,
          <GithubFilled key="GithubFilled" />,
        ];
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <p
            style={{
              textAlign: 'center',
              paddingBlockStart: 12,
            }}
          >
            Power by Ant Design
          </p>
        );
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
      layout="top"
    >
      <PageContainer
        extra={[
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>,
        ]}
        footer={[
          <Button key="3">重置</Button>,
          <Button key="2" type="primary">
            提交
          </Button>,
        ]}
      >
        <ProCard
          style={{
            height: '200vh',
            minHeight: 800,
          }}
        >
          <div />
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { ProLayoutProps } from '@ant-design/pro-components';
import {
  PageContainer,
  ProFormRadio,
  ProLayout,
} from '@ant-design/pro-components';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [pathname, setPathname] = useState('/welcome');
  const [collapsed, setCollapsed] = useState(true);
  const [position, setPosition] = useState<'header' | 'menu'>('header');
  const children = (
    <PageContainer>
      <div
        style={{
          height: '120vh',
          minHeight: 600,
        }}
      >
        <ProFormRadio.Group
          label="按钮的位置"
          options={['header', 'menu'].map((value) => ({
            label: value,
            value,
          }))}
          fieldProps={{
            value: position,
            onChange: (e) => setPosition(e.target.value),
          }}
        />
      </div>
    </PageContainer>
  );
  const props: ProLayoutProps = {
    ...defaultProps,
    location: {
      pathname,
    },
    collapsed,
    fixSiderbar: true,
    collapsedButtonRender: false,
    menuItemRender: (item, dom) => (
      <a
        onClick={() => {
          setPathname(item.path || '/welcome');
        }}
      >
        {dom}
      </a>
    ),
  };
  if (position === 'menu') {
    return (
      <ProLayout
        {...props}
        layout="mix"
        onCollapse={setCollapsed}
        postMenuData={(menuData) => {
          return [
            {
              icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
              name: ' ',
              onTitleClick: () => setCollapsed(!collapsed),
            },
            ...(menuData || []),
          ];
        }}
      >
        {children}
      </ProLayout>
    );
  }
  return (
    <ProLayout
      {...props}
      layout="mix"
      onCollapse={setCollapsed}
      headerContentRender={() => {
        return (
          <div
            onClick={() => setCollapsed(!collapsed)}
            style={{
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        );
      }}
    >
      {children}
    </ProLayout>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Alert, Button, Input, Space } from 'antd';
import React, { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const settings: ProSettings | undefined = {
    layout: 'mix',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <>
      <div
        id="test-pro-layout"
        style={{
          height: '100vh',
        }}
      >
        <ProLayout
          token={{
            header: {
              heightLayoutHeader: 108,
            },
          }}
          headerRender={(props, defaultDom) => (
            <>
              <Alert
                title={
                  <div
                    style={{
                      color: 'white',
                    }}
                  >
                    本网站提供的部分服务在你当前浏览器中无法使用，建议你更换为
                    Chrome 浏览器查看本网站。
                  </div>
                }
                icon={
                  <InfoCircleFilled
                    style={{
                      color: 'white',
                    }}
                  />
                }
                banner
                style={{
                  backgroundColor: 'black',
                }}
                action={
                  <Button
                    type="text"
                    style={{
                      color: 'white',
                    }}
                  >
                    查看详情
                  </Button>
                }
              />
              {React.cloneElement(defaultDom as any, {
                style: {
                  height: '56px',
                  lineHeight: '56px',
                },
              })}
            </>
          )}
          footerRender={() => (
            <Space
              style={{
                height: 64,
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                marginInlineEnd: 24,
              }}
            >
              <Button key="1">上一步</Button>
              <Button key="2" type="primary">
                保存
              </Button>
            </Space>
          )}
          bgLayoutImgList={[
            {
              src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
              left: 85,
              bottom: 100,
              height: '303px',
            },
            {
              src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
              bottom: -68,
              right: -45,
              height: '303px',
            },
            {
              src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
              bottom: 0,
              left: 0,
              width: '331px',
            },
          ]}
          {...defaultProps}
          location={{
            pathname,
          }}
          menu={{
            type: 'group',
          }}
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            title: '七妮妮',
          }}
          actionsRender={(props) => {
            if (props.isMobile) return [];
            return [
              props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                <div
                  key="SearchOutlined"
                  aria-hidden
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginInlineEnd: 24,
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  <Input
                    style={{
                      borderRadius: 4,
                      marginInlineEnd: 12,
                      backgroundColor: 'rgba(0,0,0,0.03)',
                    }}
                    prefix={
                      <SearchOutlined
                        style={{
                          color: 'rgba(0, 0, 0, 0.15)',
                        }}
                      />
                    }
                    placeholder="搜索方案"
                    variant="borderless"
                  />
                  <PlusCircleFilled
                    style={{
                      color: 'var(--ant-primary-color)',
                      fontSize: 24,
                    }}
                  />
                </div>
              ) : undefined,
              <InfoCircleFilled key="InfoCircleFilled" />,
              <QuestionCircleFilled key="QuestionCircleFilled" />,
              <GithubFilled key="GithubFilled" />,
            ];
          }}
          menuFooterRender={(props) => {
            if (props?.collapsed) return undefined;
            return (
              <div
                style={{
                  textAlign: 'center',
                  paddingBlockStart: 12,
                }}
              >
                <div>© 2021 Made with love</div>
                <div>by Ant Design</div>
              </div>
            );
          }}
          menuItemRender={(item, dom) => (
            <div
              onClick={() => {
                setPathname(item.path || '/welcome');
              }}
            >
              {dom}
            </div>
          )}
          {...settings}
        >
          <PageContainer>
            <ProCard
              style={{
                minHeight: 800,
              }}
            >
              <div />
            </ProCard>
          </PageContainer>
        </ProLayout>
      </div>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import {
  Button,
  ConfigProvider,
  Descriptions,
  Result,
  Space,
  Statistic,
} from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人">张三</Descriptions.Item>
    <Descriptions.Item label="联系方式">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="备注">
      中国浙江省杭州市西湖区古翠路
    </Descriptions.Item>
  </Descriptions>
);

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>(
    undefined,
  );
  const [pathname, setPathname] = useState('/welcome');
  return (
    <ConfigProvider prefixCls="qixian">
      <ProLayout
        {...defaultProps}
        style={{
          maxHeight: '100vh',
        }}
        location={{
          pathname,
        }}
        menuFooterRender={(props) => {
          return (
            <a
              style={{
                lineHeight: '48rpx',
                display: 'flex',
                height: 48,
                color: 'rgba(255, 255, 255, 0.65)',
                alignItems: 'center',
              }}
              href="https://preview.pro.ant.design/dashboard/analysis"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="pro-logo"
                src="https://procomponents.ant.design/favicon.ico"
                style={{
                  width: 16,
                  height: 16,
                  margin: '0 16px',
                  marginInlineEnd: 10,
                }}
              />
              {!props?.collapsed && 'Preview Pro'}
            </a>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          icon: <UserOutlined />,
        }}
        {...settings}
      >
        <PageContainer
          content={content}
          tabList={[
            {
              tab: '基本信息',
              key: 'base',
            },
            {
              tab: '详细信息',
              key: 'info',
            },
          ]}
          extraContent={
            <Space size={24}>
              <Statistic
                title="Feedback"
                value={1128}
                prefix={<LikeOutlined />}
              />
              <Statistic title="Unmerged" value={93} suffix="/ 100" />
            </Space>
          }
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        >
          <div
            style={{
              height: '120vh',
              minHeight: 600,
            }}
          >
            <Result
              status="404"
              style={{
                height: '100%',
                background: '#fff',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => setSetting(changeSetting)}
      />
    </ConfigProvider>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/data_hui/data_hui2',
      }}
      collapsed={false}
      collapsedButtonRender={false}
      route={{
        routes: [
          {
            path: '/home',
            name: '首页',
            locale: 'menu.home',
            routes: [
              {
                path: '/home/overview',
                name: '概述',
                hideInMenu: true,
                locale: 'menu.home.overview',
              },
              {
                path: '/home/search',
                name: '搜索',
                hideInMenu: true,
                locale: 'menu.home.search',
              },
            ],
          },
          {
            path: '/data_hui',
            name: '汇总数据',
            locale: 'menu.data_hui',
            routes: [
              {
                collapsed: true,
                menuName: '域买家维度交易',
                name: '域买家维度交易',
                path: '/xx',
                routes: [
                  {
                    id: 2,
                    name: '月表',
                    path: '/data_hui2',
                  },
                  {
                    name: '日表',
                    path: '/data_hui3?tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
                  },
                ],
              },
              {
                name: '维度交易',
                path: '/',
                routes: [
                  {
                    name: '月表',
                    path: '/data_hui4',
                  },
                  {
                    name: '日表',
                    key: 'tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
                    path: '/data_hui5',
                  },
                ],
              },
            ],
          },
        ],
      }}
      menu={{
        defaultOpenAll: true,
        hideMenuWhenCollapsed: true,
        ignoreFlatMenu: true,
      }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/articles/new',
      }}
      iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
      route={{
        routes: [
          {
            path: '/home',
            name: '收藏',
            icon: 'icon-shoucang1',
          },
          {
            path: '/home/overview',
            name: 'FaceBook',
            icon: 'icon-facebook',
          },
          {
            path: '/home/search',
            name: 'Twitter',
            icon: 'icon-twitter',
          },
        ],
      }}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  CaretDownFilled,
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { css } from '@emotion/css';
import {
  Button,
  ConfigProvider,
  Divider,
  Dropdown,
  Input,
  Popover,
  theme,
} from 'antd';
import React, { useState } from 'react';
import defaultProps from './_defaultProps';

const Item: React.FC<{ children: React.ReactNode }> = (props) => {
  const { token } = theme.useToken();
  return (
    <div
      className={css`
        color: ${token.colorTextSecondary};
        font-size: 14px;
        cursor: pointer;
        line-height: 22px;
        margin-bottom: 8px;
        &:hover {
          color: ${token.colorPrimary};
        }
      `}
      style={{
        width: '33.33%',
      }}
    >
      {props.children}
      <DoubleRightOutlined
        style={{
          marginInlineStart: 4,
        }}
      />
    </div>
  );
};

const List: React.FC<{ title: string; style?: React.CSSProperties }> = (
  props,
) => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        width: '100%',
        ...props.style,
      }}
    >
      <div
        style={{
          fontSize: 16,
          color: token.colorTextHeading,
          lineHeight: '24px',
          fontWeight: 500,
          marginBlockEnd: 16,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {new Array(6).fill(1).map((_, index) => {
          return <Item key={index}>具体的解决方案-{index}</Item>;
        })}
      </div>
    </div>
  );
};

const MenuCard = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Divider
        style={{
          height: '1.5em',
        }}
        type="vertical"
      />
      <Popover
        placement="bottom"
        overlayStyle={{
          width: 'calc(100vw - 24px)',
          padding: '24px',
          paddingTop: 8,
          height: '307px',
          borderRadius: '0 0 6px 6px',
        }}
        content={
          <div style={{ display: 'flex', padding: '32px 40px' }}>
            <div style={{ flex: 1 }}>
              <List title="金融解决方案" />
              <List
                title="其他解决方案"
                style={{
                  marginBlockStart: 32,
                }}
              />
            </div>

            <div
              style={{
                width: '308px',
                borderInlineStart: '1px solid ' + token.colorBorder,
                paddingInlineStart: 16,
              }}
            >
              <div
                className={css`
                  font-size: 14px;
                  color: ${token.colorText};
                  line-height: 22px;
                `}
              >
                热门产品
              </div>
              {new Array(3).fill(1).map((name, index) => {
                return (
                  <div
                    key={index}
                    className={css`
                      border-radius: 4px;
                      padding: 16px;
                      margin-top: 4px;
                      display: flex;
                      cursor: pointer;
                      &:hover {
                        background-color: ${token.colorBgTextHover};
                      }
                    `}
                  >
                    <img src="https://gw.alipayobjects.com/zos/antfincdn/6FTGmLLmN/bianzu%25252013.svg" />
                    <div
                      style={{
                        marginInlineStart: 14,
                      }}
                    >
                      <div
                        className={css`
                          font-size: 14px;
                          color: ${token.colorText};
                          line-height: 22px;
                        `}
                      >
                        Ant Design
                      </div>
                      <div
                        className={css`
                          font-size: 12px;
                          color: ${token.colorTextSecondary};
                          line-height: 20px;
                        `}
                      >
                        杭州市较知名的 UI 设计语言
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        }
      >
        <div
          style={{
            color: token.colorTextHeading,
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            gap: 4,
            paddingInlineStart: 8,
            paddingInlineEnd: 12,
            alignItems: 'center',
          }}
          className={css`
            &:hover {
              background-color: ${token.colorBgTextHover};
            }
          `}
        >
          <span> 企业级资产中心</span>
          <CaretDownFilled />
        </div>
      </Popover>
    </div>
  );
};

const SearchInput = () => {
  const { token } = theme.useToken();
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
          backgroundColor: token.colorBgTextHover,
        }}
        prefix={
          <SearchOutlined
            style={{
              color: token.colorTextLightSolid,
            }}
          />
        }
        placeholder="搜索方案"
        variant="borderless"
      />
      <PlusCircleFilled
        style={{
          color: token.colorPrimary,
          fontSize: 24,
        }}
      />
    </div>
  );
};

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
  const [num, setNum] = useState(40);
  if (typeof document === 'undefined') {
    return <div />;
  }
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById('test-pro-layout') || document.body;
          }}
        >
          <ProLayout
            prefixCls="my-prefix"
            bgLayoutImgList={[
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                left: 85,
                bottom: 100,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                bottom: -68,
                right: -45,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                bottom: 0,
                left: 0,
                width: '331px',
              },
            ]}
            {...defaultProps}
            location={{
              pathname,
            }}
            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
              },
            }}
            siderMenuType="group"
            menu={{
              collapsedShowGroupTitle: true,
            }}
            avatarProps={{
              src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: '七妮妮',
              render: (props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: 'logout',
                          icon: <LogoutOutlined />,
                          label: '退出登录',
                        },
                      ],
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
            }}
            actionsRender={(props) => {
              if (props.isMobile) return [];
              if (typeof window === 'undefined') return [];
              return [
                props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                  <SearchInput />
                ) : undefined,
                <InfoCircleFilled key="InfoCircleFilled" />,
                <QuestionCircleFilled key="QuestionCircleFilled" />,
                <GithubFilled key="GithubFilled" />,
              ];
            }}
            headerTitleRender={(logo, title, _) => {
              const defaultDom = (
                <a>
                  {logo}
                  {title}
                </a>
              );
              if (typeof window === 'undefined') return defaultDom;
              if (document.body.clientWidth < 1400) {
                return defaultDom;
              }
              if (_.isMobile) return defaultDom;
              return (
                <>
                  {defaultDom}
                  <MenuCard />
                </>
              );
            }}
            menuFooterRender={(props) => {
              if (props?.collapsed) return undefined;
              return (
                <div
                  style={{
                    textAlign: 'center',
                    paddingBlockStart: 12,
                  }}
                >
                  <div>© 2021 Made with love</div>
                  <div>by Ant Design</div>
                </div>
              );
            }}
            onMenuHeaderClick={(e) => console.log(e)}
            menuItemRender={(item, dom) => (
              <div
                onClick={() => {
                  setPathname(item.path || '/welcome');
                }}
              >
                {dom}
              </div>
            )}
            {...settings}
          >
            <PageContainer
              token={{
                paddingInlinePageContainerContent: num,
              }}
              extra={[
                <Button key="3">操作</Button>,
                <Button key="2">操作</Button>,
                <Button
                  key="1"
                  type="primary"
                  onClick={() => {
                    setNum(num > 0 ? 0 : 40);
                  }}
                >
                  主操作
                </Button>,
              ]}
              subTitle="简单的描述"
              footer={[
                <Button key="3">重置</Button>,
                <Button key="2" type="primary">
                  提交
                </Button>,
              ]}
            >
              <ProCard
                style={{
                  height: '200vh',
                  minHeight: 800,
                }}
              >
                <div />
              </ProCard>
            </PageContainer>

            <SettingDrawer
              pathname={pathname}
              enableDarkTheme
              getContainer={(e: any) => {
                if (typeof window === 'undefined') return e;
                return document.getElementById('test-pro-layout');
              }}
              settings={settings}
              onSettingChange={(changeSetting) => {
                setSetting(changeSetting);
              }}
              disableUrlParams={false}
            />
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  DefaultFooter,
  PageContainer,
  ProLayout,
} from '@ant-design/pro-components';
import defaultProps from './_defaultProps';

const Demo = () => (
  <ProLayout
    {...defaultProps}
    style={{
      height: '100vh',
    }}
    breakpoint={false}
    collapsed
    location={{
      pathname: '/welcome',
    }}
    footerRender={() => (
      <DefaultFooter
        links={[
          { key: 'test', title: 'layout', href: 'www.alipay.com' },
          { key: 'test2', title: 'layout2', href: 'www.alipay.com' },
        ]}
        copyright="这是一条测试文案"
      />
    )}
  >
    <PageContainer content="欢迎使用">Hello World</PageContainer>
  </ProLayout>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: '欢迎',
        icon: <SmileFilled />,
        component: './Welcome',
      },
      {
        path: '/admin',
        name: '管理页',
        icon: <CrownFilled />,
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/admin/sub-page1',
            name: '一级页面',
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            component: './Welcome',
          },
          {
            path: '/admin/sub-page2',
            name: '二级页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: '/admin/sub-page3',
            name: '三级页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
        ],
      },
      {
        name: '列表页',
        icon: <TabletFilled />,
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: '列表页面',
            icon: <CrownFilled />,
            routes: [
              {
                path: 'sub-sub-page1',
                name: '一一级列表页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page2',
                name: '一二级列表页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page3',
                name: '一三级列表页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
            ],
          },
          {
            path: '/list/sub-page2',
            name: '二级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: '/list/sub-page3',
            name: '三级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
        ],
      },
      {
        path: 'https://ant.design',
        name: 'Ant Design 官网外链',
        icon: <ChromeFilled />,
      },
    ],
  },
  location: {
    pathname: '/',
  },
  appList: [
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      title: 'Ant Design',
      desc: '杭州市较知名的 UI 设计语言',
      url: 'https://ant.design',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      title: 'AntV',
      desc: '蚂蚁集团全新一代数据可视化解决方案',
      url: 'https://antv.vision/',
      target: '_blank',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      title: 'Pro Components',
      desc: '专业级 UI 组件库',
      url: 'https://procomponents.ant.design/',
    },
    {
      icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
      title: 'umi',
      desc: '插件化的企业级前端应用框架。',
      url: 'https://umijs.org/zh-CN/docs',
    },

    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
      title: 'qiankun',
      desc: '可能是你见过最完善的微前端解决方案🧐',
      url: 'https://qiankun.umijs.org/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
      title: '语雀',
      desc: '知识创作与分享工具',
      url: 'https://www.yuque.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
      title: 'Kitchen ',
      desc: 'Sketch 工具集',
      url: 'https://kitchen.alipay.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
      title: 'dumi',
      desc: '为组件开发场景而生的文档工具',
      url: 'https://d.umijs.org/zh-CN',
    },
  ],
};

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        token={{
          header: {
            colorBgHeader: '#292f33',
            colorHeaderTitle: '#fff',
            colorTextMenu: '#dfdfdf',
            colorTextMenuSecondary: '#dfdfdf',
            colorTextMenuSelected: '#fff',
            colorBgMenuItemSelected: '#22272b',
            colorTextMenuActive: 'rgba(255,255,255,0.85)',
            colorTextRightActionsItem: '#dfdfdf',
          },
          colorTextAppListIconHover: '#fff',
          colorTextAppListIcon: '#dfdfdf',
          sider: {
            colorMenuBackground: '#fff',
            colorMenuItemDivider: '#dfdfdf',
            colorBgMenuItemHover: '#f6f6f6',
            colorTextMenu: '#595959',
            colorTextMenuSelected: '#242424',
            colorTextMenuActive: '#242424',
          },
        }}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: (
            <div
              style={{
                color: '#dfdfdf',
              }}
            >
              七妮妮
            </div>
          ),
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(57,62,67,1)',
                    color: '#fff',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: '#dfdfdf',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        {...settings}
      >
        <PageContainer
          breadcrumb={{
            routes: [],
          }}
          onBack={() => window.history.back()}
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
          footer={[
            <Button key="3">重置</Button>,
            <Button key="2" type="primary">
              提交
            </Button>,
          ]}
        >
          <ProCard
            style={{
              height: '200vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';

const Demo = () => (
  <div
    style={{
      height: '100vh',
    }}
  >
    <ProLayout
      location={{
        pathname: '/admin/process/edit/123',
      }}
      breadcrumbRender={(routes) => [
        {
          path: '/',
          title: '主页',
        },
        ...(routes || []),
      ]}
      menuDataRender={() => [
        {
          path: '/welcome',
          name: '欢迎',
        },
        {
          path: '/admin',
          name: '管理',
          children: [
            {
              name: '申请单列表',
              path: '/admin/process',
            },
            {
              name: '申请单详情',
              path: '/admin/process/detail/:id',
              hideInMenu: true,
            },
            {
              name: '编辑申请单',
              path: '/admin/process/edit/:id',
              hideInMenu: true,
            },
            {
              name: '添加申请单',
              path: '/admin/process/add',
              hideInMenu: true,
            },
          ],
        },
      ]}
    >
      <PageContainer content="欢迎使用">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        siderWidth={216}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          title: '七妮妮',
          size: 'small',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PlusCircleFilled, SearchOutlined } from '@ant-design/icons';
import type { MenuDataItem } from '@ant-design/pro-components';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Input, Space } from 'antd';
import { useState } from 'react';
import complexMenu from './complexMenu';

const filterByMenuData = (
  data: MenuDataItem[],
  keyWord: string,
): MenuDataItem[] =>
  data
    .map((item) => {
      if (item.name?.includes(keyWord)) {
        return { ...item };
      }
      const children = filterByMenuData(item.children || [], keyWord);
      if (children.length > 0) {
        return { ...item, children };
      }
      return undefined;
    })
    .filter((item) => item) as MenuDataItem[];

const loopMenuItem = (menus: any[]): MenuDataItem[] =>
  menus.map(({ icon, routes, ...item }) => ({
    ...item,
    children: routes && loopMenuItem(routes),
  }));

const Demo = () => {
  const [keyWord, setKeyWord] = useState('');
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        location={{
          pathname: '/home/overview',
        }}
        menu={{
          hideMenuWhenCollapsed: true,
        }}
        menuExtraRender={({ collapsed }) =>
          !collapsed && (
            <Space
              style={{
                marginBlockStart: 16,
              }}
              align="center"
            >
              <Input
                style={{
                  borderRadius: 4,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                }}
                prefix={
                  <SearchOutlined
                    style={{
                      color: 'rgba(0, 0, 0, 0.15)',
                    }}
                  />
                }
                placeholder="搜索方案"
                variant="borderless"
                onPressEnter={(e) => {
                  setKeyWord((e.target as HTMLInputElement).value);
                }}
              />
              <PlusCircleFilled
                style={{
                  color: 'var(--ant-primary-color)',
                  fontSize: 24,
                }}
              />
            </Space>
          )
        }
        menuDataRender={() => loopMenuItem(complexMenu)}
        postMenuData={(menus) => filterByMenuData(menus || [], keyWord)}
      >
        <PageContainer content="欢迎使用">
          <div>Hello World</div>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  CaretDownFilled,
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { css } from '@emotion/css';
import { Divider, Input, Popover, theme } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Item: React.FC<{ children: React.ReactNode }> = (props) => {
  const { token } = theme.useToken();
  return (
    <div
      className={css`
        color: ${token.colorTextSecondary};
        font-size: 14px;
        cursor: pointer;
        line-height: 22px;
        margin-bottom: 8px;
        &:hover {
          color: ${token.colorPrimary};
        }
      `}
      style={{
        width: '33.33%',
      }}
    >
      {props.children}
      <DoubleRightOutlined
        style={{
          marginInlineStart: 4,
        }}
      />
    </div>
  );
};

const List: React.FC<{ title: string; style?: React.CSSProperties }> = (
  props,
) => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        width: '100%',
        ...props.style,
      }}
    >
      <div
        style={{
          fontSize: 16,
          color: token.colorTextHeading,
          lineHeight: '24px',
          fontWeight: 500,
          marginBlockEnd: 16,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {new Array(6).fill(1).map((_, index) => {
          return <Item key={index}>具体的解决方案-{index}</Item>;
        })}
      </div>
    </div>
  );
};

const MenuCard = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Divider
        style={{
          height: '1.5em',
        }}
        type="vertical"
      />
      <Popover
        placement="bottom"
        overlayStyle={{
          width: 'calc(100vw - 24px)',
          padding: '24px',
          paddingTop: 8,
          height: '307px',
          borderRadius: '0 0 6px 6px',
        }}
        content={
          <div style={{ display: 'flex', padding: '32px 40px' }}>
            <div style={{ flex: 1 }}>
              <List title="金融解决方案" />
              <List
                title="其他解决方案"
                style={{
                  marginBlockStart: 32,
                }}
              />
            </div>

            <div
              style={{
                width: '308px',
                borderInlineStart: '1px solid ' + token.colorBorder,
                paddingInlineStart: 16,
              }}
            >
              <div
                className={css`
                  font-size: 14px;
                  color: ${token.colorText};
                  line-height: 22px;
                `}
              >
                热门产品
              </div>
              {new Array(3).fill(1).map((name, index) => {
                return (
                  <div
                    key={index}
                    className={css`
                      border-radius: 4px;
                      padding: 16px;
                      margin-top: 4px;
                      display: flex;
                      cursor: pointer;
                      &:hover {
                        background-color: ${token.colorBgTextHover};
                      }
                    `}
                  >
                    <img src="https://gw.alipayobjects.com/zos/antfincdn/6FTGmLLmN/bianzu%25252013.svg" />
                    <div
                      style={{
                        marginInlineStart: 14,
                      }}
                    >
                      <div
                        className={css`
                          font-size: 14px;
                          color: ${token.colorText};
                          line-height: 22px;
                        `}
                      >
                        Ant Design
                      </div>
                      <div
                        className={css`
                          font-size: 12px;
                          color: ${token.colorTextSecondary};
                          line-height: 20px;
                        `}
                      >
                        杭州市较知名的 UI 设计语言
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        }
      >
        <div
          style={{
            color: token.colorTextHeading,
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            gap: 4,
            paddingInlineStart: 8,
            paddingInlineEnd: 12,
            alignItems: 'center',
          }}
          className={css`
            &:hover {
              background-color: ${token.colorBgTextHover};
            }
          `}
        >
          <span> 企业级资产中心</span>
          <CaretDownFilled />
        </div>
      </Popover>
    </div>
  );
};

const Demo = () => {
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'top',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        headerTitleRender={(logo, title, _) => {
          const defaultDom = (
            <a
              onClick={() => {
                console.log('titheaderTitle clicked');
              }}
            >
              {logo}
              {title}
            </a>
          );
          if (
            typeof document === 'undefined' ||
            document.body.clientWidth < 1400
          ) {
            return defaultDom;
          }
          if (_.isMobile) return defaultDom;
          return (
            <>
              {defaultDom}
              <MenuCard />
            </>
          );
        }}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Button, Switch } from 'antd';
import { useRef, useState } from 'react';
import customMenuDate from './customMenu';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

let serviceData: any[] = customMenuDate;

const Demo = () => {
  const actionRef = useRef<{
    reload: () => void;
  }>();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <ProLayout
        style={{
          height: '100vh',
        }}
        actionRef={actionRef}
        suppressSiderWhenMenuEmpty={toggle}
        menu={{
          request: async () => {
            await waitTime(2000);
            return serviceData;
          },
        }}
        location={{
          pathname: '/welcome/welcome',
        }}
      >
        <PageContainer content="欢迎使用">
          <div>
            当从服务器获取的菜单为空时隐藏Sider：
            <Switch checked={toggle} onChange={setToggle} />
          </div>
          Hello World
          <Button
            style={{
              margin: 8,
            }}
            onClick={() => {
              serviceData = customMenuDate;
              actionRef.current?.reload();
            }}
          >
            刷新菜单
          </Button>
          <Button
            style={{
              margin: 8,
            }}
            onClick={() => {
              serviceData = [];
              actionRef.current?.reload();
            }}
          >
            刷新菜单（空数据）
          </Button>
        </PageContainer>
      </ProLayout>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <ProLayout
      splitMenus
      layout="mix"
      token={{
        bgLayout: 'rgba(160, 217, 17, 0.1)',
        colorTextAppListIcon: 'rgba(255, 255, 255, 1)',
        colorTextAppListIconHover: 'rgba(245, 34, 45, 1)',
        sider: {
          colorBgMenuItemHover: 'rgba(24, 144, 255, 1)',
          colorMenuBackground: 'rgba(24, 144, 255, 0.1)',
          colorMenuItemDivider: 'rgba(250, 219, 20, 1)',
          colorTextMenu: 'rgba(250, 219, 20, 1)',
          colorTextMenuSelected: 'rgba(250, 84, 28, 1)',
          colorTextMenuItemHover: 'rgba(255, 255, 255, 1)',
          colorBgMenuItemSelected: 'rgb(82, 196, 26)',
          colorBgCollapsedButton: 'rgba(250, 84, 28, 1)',
          colorTextCollapsedButton: 'rgba(24, 144, 255, 1)',
          colorTextCollapsedButtonHover: 'rgba(143, 35, 35, 1)',
        },
        header: {
          colorBgMenuItemSelected: 'rgba(82, 196, 26, 1)',
          colorTextMenuSelected: 'rgba(114, 46, 209, 1)',
          colorBgHeader: 'rgba(250, 173, 20, 1)',
          colorHeaderTitle: 'rgba(47, 84, 235, 1)',
          colorTextMenuActive: 'rgba(255, 255, 255, 1)',
          colorTextMenu: 'rgba(250, 84, 28, 1)',
          colorBgMenuItemHover: 'rgba(24, 144, 255, 1)',
        },
        pageContainer: {
          colorBgPageContainer: 'rgba(250, 84, 28, 1)',
        },
      }}
      {...defaultProps}
      location={{
        pathname,
      }}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: '七妮妮',
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          props.layout !== 'side' ? (
            <div
              key="SearchOutlined"
              aria-hidden
              style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <Input
                style={{
                  borderRadius: 4,
                  marginInlineEnd: 12,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                }}
                prefix={
                  <SearchOutlined
                    style={{
                      color: 'rgba(0, 0, 0, 0.15)',
                    }}
                  />
                }
                placeholder="搜索方案"
                variant="borderless"
              />
              <PlusCircleFilled
                style={{
                  color: 'var(--ant-primary-color)',
                  fontSize: 24,
                }}
              />
            </div>
          ) : undefined,
          <InfoCircleFilled key="InfoCircleFilled" />,
          <QuestionCircleFilled key="QuestionCircleFilled" />,
          <GithubFilled key="GithubFilled" />,
        ];
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <p
            style={{
              textAlign: 'center',
              paddingBlockStart: 12,
            }}
          >
            Power by Ant Design
          </p>
        );
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
    >
      <PageContainer
        extra={[
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>,
        ]}
        footer={[
          <Button key="3">重置</Button>,
          <Button key="2" type="primary">
            提交
          </Button>,
        ]}
      >
        <ProCard
          style={{
            height: '200vh',
            minHeight: 800,
          }}
        >
          <div />
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import type { ProHelpDataSourceChildren } from '@ant-design/pro-components';
import { ProHelp, ProHelpPanel } from '@ant-design/pro-components';
import { App, Rate, Typography } from 'antd';

const Demo = () => {
  const map = new Map<
    string,
    (
      item: ProHelpDataSourceChildren<{
        video: React.VideoHTMLAttributes<HTMLVideoElement>;
        list: {
          title: string;
          children: {
            title: string;
            href: string;
          }[];
        };
      }>,
      index: number,
    ) => React.ReactNode
  >();

  map.set('video', (item) => {
    return (
      <video
        key=""
        style={{
          width: '100%',
        }}
        controls
        {...(item.children as React.VideoHTMLAttributes<HTMLVideoElement>)}
      />
    );
  });

  map.set('list', (item) => {
    const listConfig = item.children as {
      title: string;
      children: {
        title: string;
        href: string;
      }[];
    };
    return (
      <div>
        <h3
          style={{
            margin: '8px 0',
          }}
        >
          {listConfig.title}
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {listConfig.children.map((child, index) => {
            return (
              <div key={index}>
                <Typography.Text>
                  {child.href ? (
                    <a href={child.href}>{child.title}</a>
                  ) : (
                    child.title
                  )}
                </Typography.Text>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <App>
      <div
        style={{
          margin: 24,
          paddingBlockEnd: 128,
          display: 'flex',
          gap: 24,
          flexDirection: 'column',
        }}
      >
        <ProHelp<{
          video: React.VideoHTMLAttributes<HTMLVideoElement>;
          list: {
            title: string;
            children: {
              title: string;
              href: string;
            }[];
          };
        }>
          dataSource={[
            {
              title: '常见问题',
              key: 'default',
              children: [
                {
                  title: '如何开始操作数据授权？',
                  key: '1',
                  children: [
                    {
                      valueType: 'h1',
                      children: '如何开始操作数据授权？',
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'h2',
                      children: '相关问题',
                    },
                    {
                      valueType: 'link',
                      children: {
                        href: 'www.alipay.com',
                        children: '鹊凿平台DCI申领操作手册?',
                      },
                    },
                    {
                      valueType: 'link',
                      children: {
                        href: 'www.alipay.com',
                        children: 'openAPI 注册工具?',
                      },
                    },

                    {
                      valueType: 'h2',
                      children: '帮助视频',
                    },
                    {
                      valueType: 'video',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/file/A*oJOJRZwe00kAAAAAAAAAAAAADml6AQ',
                      },
                    },
                  ],
                },
                {
                  title: '证据包内包含哪些内容，如何下载证据包？',
                  key: '2',
                  children: [
                    {
                      valueType: 'h1',
                      children: '证据包内包含哪些内容，如何下载证据包？',
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    // @ts-expect-error
                    {
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*NcPORK7kRWMAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'list',
                      children: {
                        title: '相关问题',
                        children: [
                          {
                            href: 'www.alipay.com',
                            title: '鹊凿平台DCI申领操作手册?',
                          },
                          {
                            href: 'www.alipay.com',
                            title: 'openAPI 注册工具?',
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
            {
              title: '名词解释',
              key: 'value',
              infiniteScrollFull: true,
              children: [
                {
                  title: '数据管理（模块）',
                  key: 'name0',
                  children: [
                    {
                      valueType: 'h1',
                      children: '数据管理（模块）',
                    },
                    {
                      valueType: 'text',
                      children:
                        '这是一个用于管理和处理数据的模块，它提供了一套工具来帮助用户进一步管理域内的数据。用户可以使用数据管理模块来管理数据、处理数据以及保护数据。',
                    },
                  ],
                },
                {
                  title: '网页上传方式',
                  key: 'name1',
                  children: [
                    {
                      valueType: 'h1',
                      children: '网页上传方式',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种网页提供给用户的上传文件方法，用户可以通过网页上传自己的文件进行处理。',
                    },
                  ],
                },
                {
                  title: '其他获取方式',
                  key: 'name2',
                  children: [
                    {
                      valueType: 'h1',
                      children: '其他获取方式',
                    },
                    {
                      valueType: 'text',
                      children:
                        '即不通过网页上传的方式获取数据，例如从数据库、文件夹或其他数据源中获取数据。',
                    },
                  ],
                },
                {
                  title: '数据字典',
                  key: 'name3',
                  children: [
                    {
                      valueType: 'h1',
                      children: '数据字典',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一个固定格式的数据说明书，它包含了所有数据元素的定义和说明，以及它们的定义和格式。',
                    },
                  ],
                },
                {
                  title: '项目空间（模块）',
                  key: 'name4',
                  children: [
                    {
                      valueType: 'h1',
                      children: '项目空间(模块)',
                    },
                    {
                      valueType: 'text',
                      children:
                        '这是一个用于存储和管理一组相关数据和文档的模块。在项目空间中，用户可以创建文件夹、上传文件、管理文件等操作。',
                    },
                  ],
                },
                {
                  title: '项目合作方',
                  key: 'name5',
                  children: [
                    {
                      valueType: 'h1',
                      children: '项目合作方',
                    },
                    {
                      valueType: 'text',
                      children: '与用户进行数据合作的外部组织或个人。',
                    },
                  ],
                },
                {
                  title: '项目数据资源',
                  key: 'name6',
                  children: [
                    {
                      valueType: 'h1',
                      children: '项目数据资源',
                    },
                    {
                      valueType: 'text',
                      children:
                        '在一个项目中产生或收集的所有数据资源，包括原始数据、处理数据、文档和元数据等。',
                    },
                  ],
                },
                {
                  title: '离线批量数据',
                  key: 'name7',
                  children: [
                    {
                      valueType: 'h1',
                      children: '离线批量数据',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种离线处理数据的方式，用户将需要处理的数据批量上传到系统中，再通过系统进行处理。',
                    },
                    {
                      valueType: 'text',
                      children: '相关数据请查看：',
                    },
                    {
                      valueType: 'navigationSwitch',
                      children: {
                        selectKey: 'name9',
                        children: '节点场景',
                      },
                    },
                  ],
                },
                {
                  title: '线上服务数据',
                  key: 'name8',
                  children: [
                    {
                      valueType: 'h1',
                      children: '线上服务数据',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种在线处理数据的方式，用户通过在线提交数据并调用相应的处理程序进行数据处理。',
                    },
                  ],
                },
                {
                  title: '节点场景',
                  key: 'name9',
                  children: [
                    {
                      valueType: 'h1',
                      children: '节点场景',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一个由多个节点组成的场景，每个节点都有不同的特征和功能，相互之间可以通信和互动。',
                    },
                  ],
                },
                {
                  title: '模型配置',
                  key: 'name10',
                  children: [
                    {
                      valueType: 'h1',
                      children: '模型配置',
                    },
                    {
                      valueType: 'text',
                      children:
                        '根据用户的要求对模型参数进行设置和调整，以达到最佳的处理效果。',
                    },
                  ],
                },
                {
                  title: '模型文件',
                  key: 'name11',
                  children: [
                    {
                      valueType: 'h1',
                      children: '模型文件',
                    },
                    {
                      valueType: 'text',
                      children:
                        '系统生成的模型文件，包含了所有的模型参数和处理算法。',
                    },
                  ],
                },
                {
                  title: '预处理文件',
                  key: 'name12',
                  children: [
                    {
                      valueType: 'h1',
                      children: '预处理文件',
                    },
                    {
                      valueType: 'text',
                      children:
                        '用于预处理数据的文件，系统可根据用户的设置进行数据预处理。',
                    },
                  ],
                },
                {
                  title: '后处理文件',
                  key: 'name13',
                  children: [
                    {
                      valueType: 'text',
                      children:
                        '用于后处理数据的文件，系统将处理完成的数据输出到后处理文件中。',
                    },
                  ],
                },
                {
                  title: '安全模型',
                  key: 'name14',
                  children: [
                    {
                      valueType: 'h1',
                      children: '安全模型',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种用于保护用户数据的安全控制模型，可以对数据进行加密、访问控制和防止数据泄漏等处理。',
                    },
                  ],
                },
                {
                  title: '安全匹配',
                  key: 'name15',
                  children: [
                    {
                      valueType: 'h1',
                      children: '安全匹配',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种用于数据匹配的安全控制方法，可以对数据进行匿名化处理，以保护用户的隐私。',
                    },
                  ],
                },
                {
                  title: '安全统计',
                  key: 'name16',
                  children: [
                    {
                      valueType: 'h1',
                      children: '安全统计',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种用于保护数据隐私的统计方法，可以在保证数据隐私的情况下进行数据分析和统计。',
                    },
                  ],
                },
                {
                  title: '安全联盟',
                  key: 'name17',
                  children: [
                    {
                      valueType: 'h1',
                      children: '安全联盟',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种由多方共同协作的数据处理和安全保护机制，可以保障数据的机密性和完整性。',
                    },
                  ],
                },
                {
                  title: '安全脚本',
                  key: 'name18',
                  children: [
                    {
                      valueType: 'h1',
                      children: '安全脚本',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种用于数据处理和安全保护的脚本程序，可以自动化完成数据安全控制任务。',
                    },
                  ],
                },
                {
                  title: '匿名查询',
                  key: 'name19',
                  children: [
                    {
                      valueType: 'h1',
                      children: '匿名查询',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种保护用户隐私的查询方法，可以匿名化处理查询请求和返回结果，以保护用户的隐私。',
                    },
                  ],
                },
                {
                  title: '导出表',
                  key: 'name20',
                  children: [
                    {
                      valueType: 'h1',
                      children: '导出表',
                    },
                    {
                      valueType: 'text',
                      children:
                        '一种用于导出数据的文件表格，用户可以将处理完的数据导出到该表格中进行进一步的处理和使用。',
                    },
                  ],
                },
              ],
            },
          ]}
          valueTypeMap={map}
        >
          <div
            style={{
              width: 800,
            }}
          >
            <ProHelpPanel
              defaultSelectedKey="1"
              height={648}
              footer={
                <div
                  style={{
                    textAlign: 'center',
                    borderTop: '1px solid #EEE',
                    padding: 12,
                    marginTop: 24,
                  }}
                >
                  这篇文章的质量如何？ <Rate />
                </div>
              }
            />
          </div>
        </ProHelp>
      </div>
    </App>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import {
  CrownFilled,
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
  SmileFilled,
  TabletFilled,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <ProLayout
      collapsed={true}
      collapsedButtonRender={false}
      layout="side"
      route={{
        routes: [
          {
            path: '/welcome',
            name: '欢迎',
            icon: <SmileFilled />,
            component: './Welcome',
          },
          {
            path: '/admin',
            name: '管理',
            icon: <CrownFilled />,
            access: 'canAdmin',
            component: './Admin',
          },
          {
            path: '/list',
            name: '列表',
            icon: <TabletFilled />,
            access: 'canAdmin',
            component: './Admin',
          },
        ],
      }}
      location={{
        pathname,
      }}
      menu={{
        type: 'group',
        collapsedShowTitle: true,
      }}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: '七妮妮',
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          props.layout !== 'side' ? (
            <div
              key="SearchOutlined"
              aria-hidden
              style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <Input
                style={{
                  borderRadius: 4,
                  marginInlineEnd: 12,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                }}
                prefix={
                  <SearchOutlined
                    style={{
                      color: 'rgba(0, 0, 0, 0.15)',
                    }}
                  />
                }
                placeholder="搜索方案"
                variant="borderless"
              />
              <PlusCircleFilled
                style={{
                  color: 'var(--ant-primary-color)',
                  fontSize: 24,
                }}
              />
            </div>
          ) : undefined,
          <InfoCircleFilled key="InfoCircleFilled" />,
          <QuestionCircleFilled key="QuestionCircleFilled" />,
          <GithubFilled key="GithubFilled" />,
        ];
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <p
            style={{
              textAlign: 'center',
              paddingBlockStart: 12,
            }}
          >
            Power by Ant Design
          </p>
        );
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
    >
      <PageContainer
        extra={[
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>,
        ]}
        footer={[
          <Button key="3">重置</Button>,
          <Button key="2" type="primary">
            提交
          </Button>,
        ]}
      >
        <ProCard
          style={{
            height: '200vh',
            minHeight: 800,
          }}
        >
          <div />
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Button, Input } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <ProLayout
      collapsed
      siderMenuType="group"
      route={{
        routes: [
          {
            path: '/all',
            name: '总览',
            parentId: '14',
            children: [
              { path: '/all/workbench/index', name: '首页', parentId: '16' },
            ],
          },
          {
            path: '/sa',
            name: '隐私计算',
            parentId: '14',
            children: [
              {
                path: '/sa/experiment',
                name: '项目空间',
                parentId: '19',
                children: [
                  {
                    path: '/sa/experiment/list',
                    name: '项目列表',
                    parentId: '20',
                  },
                ],
              },
              {
                path: '/sa/offlinetask',
                name: '任务管理中心',
                parentId: '19',
                children: [
                  {
                    path: '/sa/offlinetask/tasklist',
                    name: '研发任务',
                    parentId: '27',
                  },
                  {
                    path: '/sa/offlinetask/dispatchtask',
                    name: '调度任务',
                    parentId: '27',
                  },
                ],
              },
              {
                path: '/sa/onlinetask',
                name: '服务管控中心',
                parentId: '19',
                children: [
                  {
                    path: '/sa/onlinetask/anonymousquery',
                    name: '在线匿名查询服务',
                    parentId: '34',
                  },
                ],
              },
            ],
          },
          {
            path: '/others',
            name: '其他',
            parentId: '14',
            children: [
              {
                path: '/others/data',
                name: '数据管理',
                parentId: '39',
                children: [
                  {
                    path: '/others/data/list',
                    name: '所有数据',
                    parentId: '40',
                  },
                  {
                    path: '/others/data/datadictionary',
                    name: '数据字典',
                    parentId: '40',
                  },
                  {
                    path: '/others/data/outputConfiguration',
                    name: '输出配置',
                    parentId: '40',
                  },
                ],
              },
              {
                path: '/others/monitormarket',
                name: '监控大盘',
                parentId: '39',
                children: [
                  {
                    path: '/others/monitormarket/model',
                    name: '模型监控',
                    parentId: '58',
                  },
                  {
                    path: '/others/monitormarket/alliance',
                    name: '联盟监控',
                    parentId: '58',
                  },
                  {
                    path: '/others/monitormarket/resource',
                    name: '资源监控',
                    parentId: '58',
                  },
                ],
              },
            ],
          },
        ],
      }}
      location={{
        pathname,
      }}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: '七妮妮',
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          props.layout !== 'side' ? (
            <div
              key="SearchOutlined"
              aria-hidden
              style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <Input
                style={{
                  borderRadius: 4,
                  marginInlineEnd: 12,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                }}
                prefix={
                  <SearchOutlined
                    style={{
                      color: 'rgba(0, 0, 0, 0.15)',
                    }}
                  />
                }
                placeholder="搜索方案"
                variant="borderless"
              />
              <PlusCircleFilled
                style={{
                  color: 'var(--ant-primary-color)',
                  fontSize: 24,
                }}
              />
            </div>
          ) : undefined,
          <InfoCircleFilled key="InfoCircleFilled" />,
          <QuestionCircleFilled key="QuestionCircleFilled" />,
          <GithubFilled key="GithubFilled" />,
        ];
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <p
            style={{
              textAlign: 'center',
              paddingBlockStart: 12,
            }}
          >
            Power by Ant Design
          </p>
        );
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
    >
      <PageContainer
        extra={[
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>,
        ]}
        footer={[
          <Button key="3">重置</Button>,
          <Button key="2" type="primary">
            提交
          </Button>,
        ]}
      >
        <ProCard
          style={{
            height: '200vh',
            minHeight: 800,
          }}
        >
          <div />
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: 'side',
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        siderWidth={256}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

export default [
  {
    path: '/home',
    name: '首页',
    locale: 'menu.home',
    routes: [
      {
        path: '/home/overview',
        name: '概述',
        hideInMenu: true,
        locale: 'menu.home.overview',
      },
      {
        path: '/home/search',
        name: '搜索',
        hideInMenu: true,
        locale: 'menu.home.search',
      },
    ],
  },
  {
    path: '/data_hui',
    name: '汇总数据',
    locale: 'menu.data_hui',
    routes: [
      {
        collapsed: true,
        menuName: '域买家维度交易',
        name: '域买家维度交易',
        path: '/xx',
        routes: [
          {
            id: 2,
            name: '月表',
            path: '/data_hui2',
          },
          {
            name: '日表',
            path: '/data_hui3?tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
          },
        ],
      },
      {
        name: '维度交易',
        path: '/',
        routes: [
          {
            name: '月表',
            path: '/data_hui4',
          },
          {
            name: '日表',
            key: 'tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
            path: '/data_hui5',
          },
        ],
      },
    ],
  },
  {
    path: '/data_ming',
    name: '明细数据',
    locale: 'menu.data_ming',
    routes: [
      {
        path: '/other/outLoadMenu',
        name: '菜单导出',
        locale: 'menu.other.outLoadMenu',
        hideInMenu: true,
      },
      {
        path: '/other/homeEdit',
        name: '概述导出',
        locale: 'menu.other.outHomeEdit',
      },
    ],
  },
  {
    path: '/other',
    name: '其他',
    locale: 'menu.other',
    routes: [
      {
        path: '/other/upLoad',
        name: 'odps同步导入',
        locale: 'menu.other.upLoad',
      },
      {
        path: '/other/upLoadMenu',
        name: '菜单导入',
        locale: 'menu.other.upLoadMenu',
      },
      {
        path: '/other/homeEdit',
        name: '概述编辑',
        locale: 'menu.other.homeEdit',
        hideInMenu: true,
      },
    ],
  },
];

import { PageContainer, ProLayout } from '@ant-design/pro-components';
import complexMenu from './complexMenu';

const Demo = () => (
  <div
    style={{
      height: '100vh',
      overflow: 'auto',
    }}
  >
    <ProLayout
      location={{
        pathname: '/articles/new',
      }}
      route={{
        routes: complexMenu,
      }}
      layout="top"
    >
      <ProLayout
        location={{
          pathname: '/home/overview',
        }}
        route={{
          routes: complexMenu,
        }}
        menuHeaderRender={false}
      >
        <PageContainer content="欢迎使用">
          <div>Hello World</div>
        </PageContainer>
      </ProLayout>
    </ProLayout>
  </div>
);

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import { GithubOutlined } from '@ant-design/icons';
import {
  DefaultFooter,
  PageContainer,
  ProLayout,
} from '@ant-design/pro-components';
import { Switch } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [menu, setMenu] = useState(true);
  const [header, setHeader] = useState(true);
  const [footer, setFooter] = useState(true);
  const [menuHeader, setMenuHeader] = useState(true);
  const [right, setRight] = useState(true);
  const [pure, setPure] = useState(false);
  const [collapsedButtonRender, setCollapsedButtonRender] = useState(true);
  return (
    <>
      <Switch
        checked={loading}
        onChange={(e) => setLoading(e)}
        style={{
          margin: 8,
        }}
      />
      loading 状态
      <Switch
        checked={collapsed}
        onChange={(e) => setCollapsed(e)}
        style={{
          margin: 8,
        }}
      />
      折叠layout
      <Switch
        checked={menu}
        onChange={(e) => setMenu(e)}
        style={{
          margin: 8,
        }}
      />
      显示菜单
      <Switch
        checked={collapsedButtonRender}
        onChange={(e) => setCollapsedButtonRender(e)}
        style={{
          margin: 8,
        }}
      />
      显示折叠按钮
      <Switch
        checked={header}
        onChange={(e) => setHeader(e)}
        style={{
          margin: 8,
        }}
      />
      显示顶栏
      <Switch
        checked={menuHeader}
        onChange={(e) => setMenuHeader(e)}
        style={{
          margin: 8,
        }}
      />
      显示菜单头
      <Switch
        checked={footer}
        onChange={(e) => setFooter(e)}
        style={{
          margin: 8,
        }}
      />
      显示页脚
      <Switch
        checked={right}
        onChange={(e) => setRight(e)}
        style={{
          margin: 8,
        }}
      />
      显示顶栏右侧
      <Switch
        checked={pure}
        onChange={(e) => setPure(e)}
        style={{
          margin: 8,
        }}
      />
      清爽模式
      <br />
      <br />
      <ProLayout
        {...defaultProps}
        style={{
          height: '100vh',
        }}
        menuHeaderRender={menuHeader ? undefined : false}
        headerRender={header ? undefined : false}
        collapsedButtonRender={collapsedButtonRender ? undefined : false}
        menuRender={(_, dom) => (menu ? dom : null)}
        breakpoint={false}
        collapsed={collapsed}
        loading={loading}
        onCollapse={setCollapsed}
        avatarProps={{
          src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
        }}
        location={{
          pathname: '/welcome',
        }}
        pure={pure}
        footerRender={() =>
          footer ? (
            <DefaultFooter
              links={[
                {
                  key: 'Ant Design Pro',
                  title: 'Ant Design Pro',
                  href: 'https://pro.ant.design',
                  blankTarget: true,
                },
                {
                  key: 'github',
                  title: <GithubOutlined />,
                  href: 'https://github.com/ant-design/ant-design-pro',
                  blankTarget: true,
                },
                {
                  key: 'Ant Design',
                  title: 'Ant Design',
                  href: 'https://ant.design',
                  blankTarget: true,
                },
              ]}
              copyright="2022 蚂蚁金服体验技术部出品"
            />
          ) : null
        }
      >
        <PageContainer content="欢迎使用">Hello World</PageContainer>
      </ProLayout>
    </>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Input } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';

const Demo = () => {
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProHelpDataSourceChildren } from '@ant-design/pro-components';
import {
  ProHelp,
  ProHelpPanel,
  ProHelpSelect,
} from '@ant-design/pro-components';
import { App, Typography } from 'antd';
import Draggable from 'react-draggable';

const Demo = () => {
  const map = new Map<
    string,
    (
      item: ProHelpDataSourceChildren<{
        video: React.VideoHTMLAttributes<HTMLVideoElement>;
        list: {
          title: string;
          children: {
            title: string;
            href: string;
          }[];
        };
      }>,
      index: number,
    ) => React.ReactNode
  >();

  map.set('video', (item) => {
    return (
      <video
        key=""
        style={{
          width: '100%',
        }}
        controls
        {...(item.children as React.VideoHTMLAttributes<HTMLVideoElement>)}
      />
    );
  });

  map.set('list', (item) => {
    const listConfig = item.children as {
      title: string;
      children: {
        title: string;
        href: string;
      }[];
    };
    return (
      <div>
        <h3
          style={{
            margin: '8px 0',
          }}
        >
          {listConfig.title}
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {listConfig.children.map((child, index) => {
            return (
              <div key={index}>
                <Typography.Text>
                  {child.href ? (
                    <a href={child.href}>{child.title}</a>
                  ) : (
                    child.title
                  )}
                </Typography.Text>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <App>
      <div
        style={{
          margin: 24,
          paddingBlockEnd: 128,
          display: 'flex',
          gap: 24,
          flexDirection: 'column',
        }}
      >
        <ProHelp<{
          video: React.VideoHTMLAttributes<HTMLVideoElement>;
          list: {
            title: string;
            children: {
              title: string;
              href: string;
            }[];
          };
        }>
          dataSource={[
            {
              title: '常见问题',
              key: 'default',
              children: [
                {
                  title: '如何开始操作数据授权？',
                  key: '1',
                  children: [
                    {
                      valueType: 'h1',
                      children: '如何开始操作数据授权？',
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'h2',
                      children: '相关问题',
                    },
                    {
                      valueType: 'link',
                      children: {
                        href: 'www.alipay.com',
                        children: '鹊凿平台DCI申领操作手册?',
                      },
                    },
                    {
                      valueType: 'link',
                      children: {
                        href: 'www.alipay.com',
                        children: 'openAPI 注册工具?',
                      },
                    },

                    {
                      valueType: 'h2',
                      children: '帮助视频',
                    },
                    {
                      valueType: 'video',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/file/A*oJOJRZwe00kAAAAAAAAAAAAADml6AQ',
                      },
                    },
                  ],
                },
                {
                  title: '证据包内包含哪些内容，如何下载证据包？',
                  key: '2',
                  children: [
                    {
                      valueType: 'h1',
                      children: '证据包内包含哪些内容，如何下载证据包？',
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    // @ts-expect-error
                    {
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'list',
                      children: {
                        title: '相关问题',
                        children: [
                          {
                            href: 'www.alipay.com',
                            title: '鹊凿平台DCI申领操作手册?',
                          },
                          {
                            href: 'www.alipay.com',
                            title: 'openAPI 注册工具?',
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ]}
          valueTypeMap={map}
        >
          <ProHelpSelect />

          <Draggable>
            <div
              style={{
                width: 900,
              }}
            >
              <ProHelpPanel defaultSelectedKey="1" height={448} />
            </div>
          </Draggable>
        </ProHelp>
      </div>
    </App>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

﻿import type { ProHelpDataSourceChildren } from '@ant-design/pro-components';
import {
  ProHelp,
  ProHelpDrawer,
  ProHelpModal,
  ProHelpPopover,
} from '@ant-design/pro-components';
import { App, Typography } from 'antd';
import { useState } from 'react';

const Demo = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const map = new Map<
    string,
    (
      item: ProHelpDataSourceChildren<{
        video: React.VideoHTMLAttributes<HTMLVideoElement>;
        list: {
          title: string;
          children: {
            title: string;
            href: string;
          }[];
        };
      }>,
      index: number,
    ) => React.ReactNode
  >();

  map.set('video', (item) => {
    return (
      <video
        key=""
        style={{
          width: '100%',
        }}
        controls
        {...(item.children as React.VideoHTMLAttributes<HTMLVideoElement>)}
      />
    );
  });

  map.set('list', (item) => {
    const listConfig = item.children as {
      title: string;
      children: {
        title: string;
        href: string;
      }[];
    };
    return (
      <div>
        <h3
          style={{
            margin: '8px 0',
          }}
        >
          {listConfig.title}
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {listConfig.children.map((child, index) => {
            return (
              <div key={index}>
                <Typography.Text>
                  {child.href ? (
                    <a href={child.href}>{child.title}</a>
                  ) : (
                    child.title
                  )}
                </Typography.Text>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <App>
      <div
        style={{
          margin: 24,
          paddingBlockEnd: 128,
          display: 'flex',
          gap: 24,
          flexDirection: 'column',
        }}
      >
        <ProHelp<{
          video: React.VideoHTMLAttributes<HTMLVideoElement>;
          list: {
            title: string;
            children: {
              title: string;
              href: string;
            }[];
          };
        }>
          dataSource={[
            {
              title: '常见问题',
              key: 'default',
              children: [
                {
                  title: '如何开始操作数据授权？',
                  key: '1',
                  children: [
                    {
                      valueType: 'h1',
                      children: '如何开始操作数据授权？',
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'h2',
                      children: '相关问题',
                    },
                    {
                      valueType: 'link',
                      children: {
                        href: 'www.alipay.com',
                        children: '鹊凿平台DCI申领操作手册?',
                      },
                    },
                    {
                      valueType: 'link',
                      children: {
                        href: 'www.alipay.com',
                        children: 'openAPI 注册工具?',
                      },
                    },

                    {
                      valueType: 'h2',
                      children: '帮助视频',
                    },
                    {
                      valueType: 'video',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/file/A*oJOJRZwe00kAAAAAAAAAAAAADml6AQ',
                      },
                    },
                  ],
                },
                {
                  title: '证据包内包含哪些内容，如何下载证据包？',
                  key: '2',
                  children: [
                    {
                      valueType: 'h1',
                      children: '证据包内包含哪些内容，如何下载证据包？',
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'text',
                      children: `需要进行数据合作的数据提供方（数据源）和数据需求方双方都需要先安装部署`,
                    },
                    {
                      valueType: 'inlineLink',
                      children: {
                        href: 'https://www.alipay.com',
                        children: '摩斯产品',
                      },
                    },
                    {
                      valueType: 'text',
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    // @ts-expect-error
                    {
                      children:
                        '节点。并将各自的摩斯计算节点、子账号等的版本信息、业务需求、数据量级（几行几列）等信息同步给到摩斯产运负责人。',
                    },
                    {
                      valueType: 'image',
                      children: {
                        src: 'https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*Jj_qRqbIRqkAAAAAAAAAAAAADml6AQ/original',
                        style: {
                          maxWidth: 600,
                        },
                      },
                    },
                    {
                      valueType: 'list',
                      children: {
                        title: '相关问题',
                        children: [
                          {
                            href: 'www.alipay.com',
                            title: '鹊凿平台DCI申领操作手册?',
                          },
                          {
                            href: 'www.alipay.com',
                            title: 'openAPI 注册工具?',
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ]}
          valueTypeMap={map}
        >
          <div
            style={{
              display: 'flex',
              gap: 16,
              width: 600,
              justifyContent: 'space-between',
            }}
          >
            <button onClick={() => setDrawerOpen(!drawerOpen)}>打开</button>
            <button onClick={() => setModalOpen(!modalOpen)}>打开</button>
            <ProHelpModal
              modalProps={{
                open: modalOpen,
                afterClose: () => setModalOpen(false),
              }}
            />
            <ProHelpDrawer
              drawerProps={{
                open: drawerOpen,
                afterOpenChange(open) {
                  setDrawerOpen(open);
                },
              }}
            />
            <ProHelpPopover selectedKey="1">Morse</ProHelpPopover>
          </div>
        </ProHelp>
      </div>
    </App>
  );
};

export default () => (
  <div style={{ padding: 24 }}>
    <Demo />
  </div>
);

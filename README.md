# @tony2026m/pro-components-mcp

[![npm version](https://img.shields.io/npm/v/@tony2026m/pro-components-mcp.svg)](https://www.npmjs.com/package/@tony2026m/pro-components-mcp)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)

> An MCP (Model Context Protocol) service for Ant Design Pro components query | 一个减少 Ant Design Pro 组件代码生成幻觉的 MCP 服务

## 📖 简介

`@tony2026m/pro-components-mcp` 是一个专为 Ant Design Pro (ProComponents) 设计的 MCP 服务器，提供：

- 🔍 **组件列表查询** - 快速浏览所有可用的 ProComponents 组件
- 📚 **组件文档查询** - 获取详细的组件 API 文档和使用说明
- 💡 **代码示例获取** - 提供实际可运行的代码示例
- 📝 **更新日志查询** - 了解组件的版本变更历史
- 📝 **迁移指南查询** - 了解组件的版本迁移指南
- 🎯 **系统提示词** - 内置专业的 ProComponents 使用指导

## 什么时候需要自行提取组件文档？

1. 你想使用最新的组件文档
2. 你想使用其他版本的组件文档

### 提取组件文档

```bash
# 克隆 Ant Design 仓库
git clone https://github.com/ant-design/pro-components.git ./.temp/pro-components --depth 1 --branch master --single-branch --filter=blob:none

# 在当前目录执行提取文档命令
npx @tony2026m/pro-components-mcp extract [pro-components repo path]  #默认提取路径为 ./.temp/pro-components
```

## 🚀 快速开始

### 作为 MCP 服务器使用（推荐）

在 Cursor 或其他支持 MCP 的 AI 编辑器中配置：

```json
{
  "mcpServers": {
    "pro-components": {
      "command": "npx",
      "args": ["@tony2026m/pro-components-mcp"]
    }
  }
}
```

或者使用本地安装：

```bash
npm install -g @tony2026m/pro-components-mcp
```

然后配置：

```json
{
  "mcpServers": {
    "pro-components": {
      "command": "pro-components-mcp"
    }
  }
}
```

### 直接运行

```bash
# 使用 npx（无需安装）
npx @tony2026m/pro-components-mcp

# 或全局安装后运行
npm install -g @tony2026m/pro-components-mcp
pro-components-mcp
```

## 🛠️ 可用工具

MCP 服务器提供以下工具：

### 1. `list-components`
列出所有可用的 ProComponents 组件

### 2. `get-component-doc`
获取特定组件的详细文档
- 参数：`componentName` - 组件名称（如 "ProTable"）

### 3. `get-component-example`
获取组件的示例代码
- 参数：`src` - 示例代码路径（如 "/table/normal.tsx"）

### 4. `get-changelog`
获取 ProComponents 的更新日志

### 5. `get-pro-components-info`
获取 ProComponents 的概况信息和版本

### 6. `list-guides`
列出所有可用的组件 指南

### 7. `get-guide-doc`
获取指南详细文档
- 参数：`name` - 名称（如 "API变更"）

## 📦 系统要求

- Node.js >= 20.0.0
- 支持 MCP 协议的客户端（如 Cursor、Claude Desktop 等）

## 🔧 开发

```bash
# 克隆仓库
git clone https://github.com/tony2026m/pro-components-mcp.git
cd pro-components-mcp

# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 测试
pnpm test
```

## 📄 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 👨‍💻 作者

**tony_m**
- Email: mly7758@163.com

## 🙏 致谢

本项目基于 [Ant Design Pro](https://pro.ant.design/) 和 [ProComponents](https://procomponents.ant.design/) 构建。

## 📝 更新日志

查看 [CHANGELOG.md](./CHANGELOG.md) 了解版本历史。

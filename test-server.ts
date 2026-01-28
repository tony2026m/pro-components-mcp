#!/usr/bin/env node

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "node",
  args: ["D:\\workspace\\mcp\\pro-components-mcp\\dist\\cli.js"],
});

const client = new Client({
  name: "pro-components-client",
  version: "1.0.0",
});

console.log("正在连接 MCP 服务器...");
await client.connect(transport);
console.log("成功连接到 MCP 服务器!");

// 执行示例工具调用
try {
  // 列出所有组件
  console.log("\n--- 列出组件 ---");
  const components = await client.callTool({
    name: "list-components",
    arguments: {},
  });
  Array.isArray(components.content) && console.log(components.content[0].text);

  // 获取组件文档
  console.log("\n--- 获取组件文档 ---");
  const docs = await client.callTool({
    name: "get-component-doc",
    arguments: {
      componentName: "ProFormDateTimePicker",
    },
  });
  Array.isArray(docs.content) && console.log(docs.content[0].text);

  // 列出组件示例
  console.log("\n--- 列出组件示例 ---");
  const examples = await client.callTool({
    name: "get-component-example",
    arguments: {
      src: "/form/ModalForm/drawer-form.tsx",
    },
  });
  console.log(examples);

  // 获取组件变更日志
  console.log("\n--- 获取组件变更日志 ---");
  const changelog = await client.callTool({
    name: "get-changelog",
    arguments: {},
  });
  console.log(changelog);

  // 获取组件info
  console.log("\n--- 获取组件info ---");
  const proInfo = await client.callTool({
    name: "get-pro-components-info",
    arguments: {},
  });
  console.log(proInfo);
} catch (error) {
  console.error("测试过程中出错:", error);
} finally {
  // 关闭连接
  await client.close();
  console.log("\n测试完成，已断开与服务器的连接。");
}

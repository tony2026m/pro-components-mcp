import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getComponentDocumentation } from "../utils/components";

/** 获取组件文档 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-component-doc",
    `通过组件名称，获取 Pro-Components（ProComponents） 特定组件的详细文档
适用场景：
1. 用户询问如何使用特定组件
2. 用户需要查看该组件的 api、props 属性，何时使用，示例代码等
`,
    { 
      componentName: z.string().describe("Pro-Components 组件名称，例如：ProTable、ProForm、ProCard 等")
    },
    async ({ componentName }) => {
      const documentation = await getComponentDocumentation(componentName);
      return {
        content: [
          {
            type: "text",
            text: `${componentName} 组件的文档：${documentation} 如有版本说明需要提醒用户需要使用某个版本及以上的版本`,
          },
        ],
      };
    },
  );
}

export default registryTool;

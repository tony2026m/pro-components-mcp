import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {getProComponentsInfo} from "../utils/components";

/** 获取组件示例代码 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-pro-components-info",
    `获取 Pro-Components（ProComponents）简介、概况信息、version
适用场景：
1. 用户询问什么是 Pro-Components（ProComponents）
2. 用户需要知道 Pro-Components（ProComponents）的版本信息时
`,
    async () => {
      const changelog = await getProComponentsInfo();
      return {
        content: [
          {
            type: "text",
            text: `Pro-Components（ProComponents）的概况信息：${changelog}`,
          },
        ],
      };
    },
  );
}

export default registryTool;

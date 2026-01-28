import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {getChangelog} from "../utils/components";

/** 获取组件更新历史changelog */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-changelog",
    `获取 Pro-Components（ProComponents）的更新日志 Changelog
适用场景：
1. 需要了解组件的更新历史时
2. 需要知道组件新增了哪些新的特性时
`,
    async () => {
      const changelog = await getChangelog();
      return {
        content: [
          {
            type: "text",
            text: `ProComponents Changelog：${changelog}`,
          },
        ],
      };
    },
  );
}

export default registryTool;

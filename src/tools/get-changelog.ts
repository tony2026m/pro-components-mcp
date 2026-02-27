import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {getChangelog} from "../utils/components";
import {z} from "zod";

/** 获取组件更新历史changelog */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-changelog",
    `获取 Pro-Components（ProComponents）的更新日志 Changelog
适用场景：
1. 需要了解组件的更新历史时
2. 需要知道组件新增了哪些新的特性时
`,
    {lang: z.string().describe("指定获取信息的语言，zh:中文、en:英文，不输入默认为英文")},
    async ({lang}) => {
      const langStr = lang || "en";
      const changelog = await getChangelog(langStr);
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

import type {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js";

import {loadGuidesList} from "../utils/components";
import {z} from "zod";

/** 列出所有可用的 guides 文档 */
const registryTool = (server: McpServer) => {
  server.tool(
    "list-guides", `当用户需要升级组件版本，或需要了解版本升级后组件的变更清单时使用此工具。
此工具仅返回可用的指南/总结文档信息列表。
调用此工具后，你必须根据你的需求、来选择符合你需求的指南，详细了解组件API、属性的变更清单
指南列表元素数据结构：
\`ts
export interface ComponentData {
  // 名称
  name: string;
  // 文件名称
  dirName: string;
  // 描述
  description: string;
  // 何时使用
  whenToUse: string;
  // 关联信息
  atomId: string | null;
}
\`
`,
    {lang: z.string().describe("指定获取信息的语言，zh:中文、en:英文，不输入默认为英文")},
    async ({lang}) => {
      const langStr = lang || "en";
      const guides = await loadGuidesList(langStr);
      return {
        content: [
          {
            type: "text",
            text: `以下是可用的指南信息：${JSON.stringify(guides)}`,
          },
        ],
      };
    });
}

export default registryTool;

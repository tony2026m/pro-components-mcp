import type {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js";
import {z} from "zod";
import {getGuideDocumentation} from "../utils/components";

/** 获取组件文档 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-guide-doc",
    `通过名称，获取 Pro-Components（ProComponents） 的指南详细文档(版本迁移、重要API变更等)
适用场景：
1. 用户询问如何进行版本迁移
2. 用户需要查看了解版本升级后破坏性的更新，及API变更信息等
`,
    {
      name: z.string().describe("指南名称，例如：API 变更总结、2.0 到 3.0 迁移指南 等"),
      lang: z.string().describe("指定获取信息的语言，zh:中文、en:英文，不输入默认为英文")
    },
    async ({name, lang}) => {
      const langStr = lang || "en";
      const documentation = await getGuideDocumentation(name, langStr);
      return {
        content: [
          {
            type: "text",
            text: `${name} 的指南信息文档：${documentation}`,
          },
        ],
      };
    },
  );
}

export default registryTool;

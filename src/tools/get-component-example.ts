import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {getComponentExample} from "../utils/components";

/** 获取组件示例代码 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-component-example",
    `获取外部示例代码，通过 src 获取 Pro-Components（ProComponents） 特定组件的外部示例代码
适用场景：
1. 用户询问组件特定的外部代码示例时
2. 用户想要实现某个特定功能时直接告知可使用的代码例子
3. 生成业务页面前，获取类似可用的外部代码示例
`,
    { 
      src: z.string().describe("外部示例代码的文件路径，例如：/table/single.tsx、/form/base.tsx 等")
    },
    async ({ src }) => {
      const exampleCode = await getComponentExample(src);
      return {
        content: [
          {
            type: "text",
            text: `${src} 外部示例代码：${exampleCode}`,
          },
        ],
      };
    },
  );
}

export default registryTool;

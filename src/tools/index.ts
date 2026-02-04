import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import listComponents from "./list-components";
import getComponentDoc from "./get-component-doc";
import getComponentExample from "./get-component-example";
import getChangelog from "./get-changelog";
import getProComponentsInfo from "./get-pro-components-info";
import listGuides from "./list-guides";
import getGuideDoc from "./get-guide-doc";

export default function registryTools(server: McpServer) {
  [listComponents, getComponentDoc, getComponentExample, getChangelog, getProComponentsInfo, listGuides, getGuideDoc].forEach((registryFn) => {
    registryFn(server)
  })
}
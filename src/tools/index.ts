import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import listComponents from "./list-components";
import getComponentDoc from "./get-component-doc";
import getComponentExample from "./get-component-example";
import getChangelog from "./get-changelog";
import getProComponentsInfo from "./get-pro-components-info";

export default function registryTools(server: McpServer) {
  [listComponents, getComponentDoc, getComponentExample, getChangelog, getProComponentsInfo].forEach((registryFn) => {
    registryFn(server)
  })
}

#!/usr/bin/env node

import { fileURLToPath } from 'node:url';
import {join, dirname, resolve} from 'node:path';
import proServer from "./src/server";
import { exec } from 'child_process';

// 获取命令行参数
const [command, ...restArgs] = process.argv.slice(2);

// 根据命令选择要执行的脚本
async function run() {
  try {
    if (!command) {
      proServer();
      return;
    } else if (command === "extract") {
      // 获取当前文件所在目录的绝对路径
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);

      // 解析命令行参数，获取需要提取的 Pro-Components 相对当前的路径
      const [antdRepoArg] = restArgs;

      /** 如果未提供参数，默认使用 ../.temp/pro-components */
      const antdRepoPath = resolve(
        antdRepoArg ?? ''
      );

      const scriptPath = join(__dirname, '../script/extract.sh')
      console.log('scriptPath:', scriptPath);
      let command = `sh ${scriptPath}`;
      if(antdRepoArg) {
        command = `sh ${scriptPath} ${antdRepoArg}`;
      }

      // 执行 Shell 脚本
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`执行出错: ${error.message}`);
          return;
        }
        console.log(`标准输出: ${stdout}`);
        console.log(`标准错误输出: ${stderr}`);
      });
      return;
    } else if (command === "version" || command === "-v") {
      const packageJson = require("./package.json");
      console.log(packageJson.version);
      return;
    }
    // console.log("可用命令:");
    // console.log(
    //   "  npx @jzone-mcp/antd-components-mcp         - 启动 MCP 服务器"
    // );
    // console.log(
    //   "  npx @jzone-mcp/antd-components-mcp extract - 提取 Ant Design 组件文档，默认读取 ./ant-design"
    // );
    // console.log(
    //   "  npx @jzone-mcp/antd-components-mcp extract [ant-design repo path]"
    // );
    process.exit(1);
  } catch (error) {
    console.error("执行出错:", error);
    process.exit(1);
  }
}

run();

import { readFile } from "node:fs/promises";
import {join, dirname} from 'node:path';
import { existsSync } from "node:fs";
import { fileURLToPath } from 'node:url';
import {ComponentData} from "../typings";
import config from '../../config.json';
import {getCache, hasKey, setCache} from "./cache";

const EXTRACTED_COMPONENTS_DIR = "components";
const EXTRACTED_DEMOS_DIR = "demos";

const FILE_COMPONENTS_INDEX = 'components-index.json';
const PRO_COMPONENTS_INFO = 'pro-components.json';

// 获取当前文件所在目录的绝对路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 从 dist 目录向上一级到达项目根目录，然后拼接 componentDocs 路径
// 编译后的代码在 dist/cli.js，所以 __dirname 是 dist 目录
const DOC_ROOT = join(__dirname, config['js']['doc_root']['pro']);

const DOC_FILE_NAME = 'index.md';

const CHANGELOG_FILE_NAME = 'changelog.md';

const COMPONENT_LIST = 'component_list';

const COMPONENT_CHANGELOG = 'component_changelog';

const COMPONENT_INFO = 'component_info';

/** 加载ProComponents组件列表 */
export async function loadComponentsList() {
  try {
    if(hasKey(COMPONENT_LIST)) {
      return getCache(COMPONENT_LIST);
    }
    const componentList = await readFile(join(DOC_ROOT, FILE_COMPONENTS_INDEX), "utf-8");
    const componentListJson = JSON.parse(componentList) as ComponentData[];

    setCache(COMPONENT_LIST, componentListJson);

    return componentListJson
  } catch (error) {
    console.error(`加载组件列表错误: ${(error as Error).message}`);
    return [];
  }
}

/** 根据组件名称查找组件 */
export async function findComponentByName(componentName: string) {
  const components: ComponentData[] = await loadComponentsList();
  return components.find(
    (c: ComponentData) =>{
      const components = c.atomId?.split(',')
      return (c.name.toLowerCase() === componentName.toLowerCase() ||
      c.name.toLowerCase().includes(componentName.toLowerCase()) ||
      (components ? components.includes(componentName) : false));
    },
  );
}

/** 获取 ProComponents 特定组件文档 */
export const getComponentDocumentation = async (componentName: string) => {
  if(hasKey(componentName)) {
    return getCache(componentName);
  }

  const component = await findComponentByName(componentName);
  if (!component) {
    return ` "${componentName}" 组件文档不存在`;
  }

  const docPath = join(DOC_ROOT, EXTRACTED_COMPONENTS_DIR, component.dirName, DOC_FILE_NAME);

  try {
    if (existsSync(docPath)) {
      const docResult = await readFile(docPath, "utf-8");

      setCache(componentName, docResult);

      return docResult
    }

    return `${component.name} 组件文档不存在`;
  } catch (error) {
    console.error(`获取 ${component.name} 组件文档错误: ${(error as Error).message}`);
    return `获取 ${component.name} 组件文档错误: ${(error as Error).message}`;
  }
};

/** 获取 ProComponents 特定组件外部示例代码 */
export const getComponentExample = async (src: string) => {
  if(hasKey(src)) {
    return getCache(src);
  }

  const examplePath = join(DOC_ROOT, EXTRACTED_DEMOS_DIR, src);

  try {
    if (existsSync(examplePath)) {
      const exampleResult = await readFile(examplePath, "utf-8");

      setCache(src, exampleResult);

      return exampleResult
    }

    return `外部示例代码 ${src} 不存在`;
  } catch (error) {
    console.error(`获取 ${src} 外部示例代码错误: ${(error as Error).message}`);
    return `获取 ${src} 外部示例代码错误: ${(error as Error).message}`;
  }
};

/** 获取 ProComponents changelog文档 */
export const getChangelog = async () => {
  try {
    if(hasKey(COMPONENT_CHANGELOG)) {
      return getCache(COMPONENT_CHANGELOG);
    }
    const changelog = await readFile(join(DOC_ROOT, CHANGELOG_FILE_NAME), "utf-8");

    setCache(COMPONENT_CHANGELOG, changelog);

    return changelog
  } catch (error) {
    console.error(`获取ChangeLog错误: ${(error as Error).message}`);
    return `获取ChangeLog错误: ${(error as Error).message}`;
  }
};

/** 获取 ProComponents 介绍文档 */
export const getProComponentsInfo = async () => {
  try {
    if(hasKey(COMPONENT_INFO)) {
      return getCache(COMPONENT_INFO);
    }
    const proInfo = await readFile(join(DOC_ROOT, PRO_COMPONENTS_INFO), "utf-8");

    setCache(COMPONENT_INFO, proInfo);

    return proInfo
  } catch (error) {
    console.error(`加载Pro-Components概要信息错误: ${(error as Error).message}`);
    return "";
  }
};

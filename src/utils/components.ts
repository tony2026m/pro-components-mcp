import { readFile } from "node:fs/promises";
import {join, dirname} from 'node:path';
import { existsSync } from "node:fs";
import { fileURLToPath } from 'node:url';
import {ComponentData} from "../typings";
import config from '../../config.json';
import {getCache, hasKey, setCache} from "./cache";

const EXTRACTED_COMPONENTS_DIR = "components";
const EXTRACTED_DEMOS_DIR = "demos";
const EXTRACTED_GUIDE_DIR = "guide";

const FILE_COMPONENTS_INDEX = 'components-index';
const PRO_COMPONENTS_INFO = 'pro-components';
const API_GUIDE = 'api-guide';

// 获取当前文件所在目录的绝对路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 从 dist 目录向上一级到达项目根目录，然后拼接 componentDocs 路径
// 编译后的代码在 dist/cli.js，所以 __dirname 是 dist 目录
const DOC_ROOT = join(__dirname, config['js']['doc_root']['pro']);

const DOC_FILE_NAME = 'index';

const CHANGELOG_FILE_NAME = 'changelog';

const COMPONENT_LIST = 'component_list';

const COMPONENT_CHANGELOG = 'component_changelog';

const COMPONENT_INFO = 'component_info';

const GUIDES_LIST_KEY = 'guides_list';

/** 加载ProComponents组件列表 */
export async function loadComponentsList(lang: string) {
  const cacheKey = COMPONENT_LIST + '_' + lang
  try {
    if(hasKey(cacheKey)) {
      return getCache(cacheKey);
    }
    const fileName = lang === 'en' ? `${FILE_COMPONENTS_INDEX}.en-US.json`: `${FILE_COMPONENTS_INDEX}.json`;
    const componentList = await readFile(join(DOC_ROOT, fileName), "utf-8");
    const componentListJson = JSON.parse(componentList) as ComponentData[];

    setCache(cacheKey, componentListJson);

    return componentListJson
  } catch (error) {
    console.error(`加载组件列表错误: ${(error as Error).message}`);
    return [];
  }
}

/** 根据组件名称查找组件 */
export async function findComponentByName(componentName: string, lang: string) {
  const components: ComponentData[] = await loadComponentsList(lang);
  return components.find(
    (c: ComponentData) =>{
      const atomIds = c.atomId?.split(',')
      return (c.name.toLowerCase() === componentName.toLowerCase() ||
      c.name.toLowerCase().includes(componentName.toLowerCase()) ||
      (atomIds ? atomIds.includes(componentName) : false));
    },
  );
}

/** 获取 ProComponents 特定组件文档 */
export const getComponentDocumentation = async (componentName: string, lang: string) => {
  const cacheKey = componentName + '_' + lang
  if(hasKey(cacheKey)) {
    return getCache(cacheKey);
  }

  const component = await findComponentByName(componentName, lang);
  if (!component) {
    return ` "${cacheKey}" 组件文档不存在`;
  }

  const fileName = lang === 'en' ? `${DOC_FILE_NAME}.en-US.md`: `${DOC_FILE_NAME}.md`;
  const docPath = join(DOC_ROOT, EXTRACTED_COMPONENTS_DIR, component.dirName, fileName);

  try {
    if (existsSync(docPath)) {
      const docResult = await readFile(docPath, "utf-8");

      setCache(cacheKey, docResult);

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
export const getChangelog = async (lang: string) => {
  const cacheKey = COMPONENT_CHANGELOG + '_' + lang
  try {
    if(hasKey(cacheKey)) {
      return getCache(cacheKey);
    }

    const fileName = lang === 'en' ? `${CHANGELOG_FILE_NAME}.en-US.md`: `${CHANGELOG_FILE_NAME}.md`;
    const changelog = await readFile(join(DOC_ROOT, fileName), "utf-8");

    setCache(cacheKey, changelog);

    return changelog
  } catch (error) {
    console.error(`获取ChangeLog错误: ${(error as Error).message}`);
    return `获取ChangeLog错误: ${(error as Error).message}`;
  }
};

/** 获取 ProComponents 介绍文档 */
export const getProComponentsInfo = async (lang: string) => {
  const cacheKey = COMPONENT_INFO + '_' + lang
  try {
    if(hasKey(cacheKey)) {
      return getCache(cacheKey);
    }

    const fileName = lang === 'en' ? `${PRO_COMPONENTS_INFO}.en-US.json`: `${PRO_COMPONENTS_INFO}.json`;
    const proInfo = await readFile(join(DOC_ROOT, fileName), "utf-8");

    setCache(cacheKey, proInfo);

    return proInfo
  } catch (error) {
    console.error(`加载Pro-Components概要信息错误: ${(error as Error).message}`);
    return "";
  }
};

/** 加载Guides组件列表 */
export async function loadGuidesList(lang: string) {
  const cacheKey = GUIDES_LIST_KEY + '_' + lang
  try {
    if(hasKey(cacheKey)) {
      return getCache(cacheKey);
    }

    const fileName = lang === 'en' ? `${API_GUIDE}.en-US.json`: `${API_GUIDE}.json`;
    const guidesList = await readFile(join(DOC_ROOT, fileName), "utf-8");
    const guidesListJson = JSON.parse(guidesList) as ComponentData[];

    setCache(cacheKey, guidesListJson);

    return guidesListJson
  } catch (error) {
    console.error(`加载指南列表错误: ${(error as Error).message}`);
    return [];
  }
}

/** 根据名称查找指南 */
export async function findGuideByName(name: string, lang: string) {
  const guides: ComponentData[] = await loadGuidesList(lang);
  return guides.find(
      (c: ComponentData) =>{
        const atomIds = c.atomId?.split(',')
        return (c.name.toLowerCase() === name.toLowerCase() ||
            c.name.toLowerCase().includes(name.toLowerCase()) ||
            (atomIds ? atomIds.includes(name) : false));
      },
  );
}

/** 获取 ProComponents 特定组件文档 */
export const getGuideDocumentation = async (name: string, lang: string) => {
  const cacheKey = name + '_' + lang
  if(hasKey(cacheKey)) {
    return getCache(cacheKey);
  }

  const guide = await findGuideByName(name, lang);
  if (!guide) {
    return ` "${name}" 指南文档不存在`;
  }

  const docPath = join(DOC_ROOT, EXTRACTED_GUIDE_DIR, guide.dirName);

  try {
    if (existsSync(docPath)) {
      const docResult = await readFile(docPath, "utf-8");

      setCache(name, docResult);

      return docResult
    }

    return `${guide.name} 指南文档不存在`;
  } catch (error) {
    console.error(`获取 ${guide.name} 指南文档错误: ${(error as Error).message}`);
    return `获取 ${guide.name} 指南文档错误: ${(error as Error).message}`;
  }
};

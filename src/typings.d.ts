
export interface ComponentData {
  // 组件名称
  name: string;
  // 组件文档所在文件夹名称
  dirName: string;
  // 组件描述
  description: string;
  // 何时使用组件
  whenToUse: string;
  // 关联组件
  atomId: string | null;
}

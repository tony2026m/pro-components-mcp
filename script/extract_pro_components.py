import os
from pathlib import Path
from operate_markdown import read_markdown_to_string, replace_code, merge_markdown, safe_delete_file, get_description_and_when_to_use, get_meta
import json
import shutil
import re

# 组件文档根目录
root_components = '../.temp/pro-components/site'
# 外部示例代码文件根目录
root_demos = '../.temp/pro-components/demos'
# 源组件repo根目录
root_repo = '../.temp/pro-components'
# 文件类型
doc_type = 'pro-components'
# 组件文档文件夹
components_dir = 'components'
# 其他文档文件夹
docs_dir = 'docs'
# 示例代码文件
demos_dir = 'demos'
# changelog文件
changelog_file_name = 'changelog.md'
changelog_en_file_name = 'changelog.en-US.md'
# package文件
package_file_name = 'package.json'
# 指南文件
guide_files =['api-changes.md', 'migration-guide.md', 'api-changes.en-US.md', 'migration-guide.en-US.md']

lang_index_files = ['index.md', 'index.en-US.md']

def extract_pro_components():
    """
    提取pro component组件信息
    """

    with open('../config.json', 'r', encoding='utf-8') as file:
        json_data = json.load(file)
        doc_root = json_data['script']['doc_root']['pro']

    target_doc_path = Path(os.path.join(doc_root, components_dir))
    target_doc_path.mkdir(parents=True, exist_ok=True)

    target_demo_path = Path(os.path.join(doc_root, demos_dir))
    target_demo_path.mkdir(parents=True, exist_ok=True)

    target_guide_path = Path(os.path.join(doc_root, 'guide'))
    target_guide_path.mkdir(parents=True, exist_ok=True)

    #target_playground_path = Path(os.path.join(doc_root, 'playground'))
    #target_playground_path.mkdir(parents=True, exist_ok=True)

    # 循环遍历路径做成api文档
    def list_all_api_docs(directory):
        # 遍历源根目录下的所有子文件夹
        for source_dir in Path(directory).iterdir():
            if source_dir.is_dir():
                # 获取子文件夹名称
                subfolder_name = source_dir.name
                print(f"处理文件夹: {subfolder_name}")

                # 创建对应的目标子文件夹
                target_dir = target_doc_path / subfolder_name
                target_dir.mkdir(parents=True, exist_ok=True)

                # 遍历子文件夹下的所有文件（包括子文件夹中的文件）
                for file_path in source_dir.rglob('*'):
                    if file_path.is_file():
                        # 检查文件名是否包含".en-US"（不区分大小写）
                        filename = file_path.name
                        # if ".en-us" in filename.lower():
                        #     print(f"  跳过: {file_path.name} (包含.en-US)")
                        #     continue
                        target_file_name = filename.replace(".skeleton", "")

                        # 构建目标文件路径, 将文件压缩在一级目录下
                        target_file_path = target_dir / target_file_name
                        print(f"目标文件路径: {target_file_path}")

                        # 确保目标文件的父目录存在
                        target_file_path.parent.mkdir(parents=True, exist_ok=True)
                        print(f"目标文件父级路径: {target_file_path.parent.parent.name}")

                        try:
                            # 读取Markdown文件
                            markdown_content = read_markdown_to_string(file_path)

                            # 替换外部代码块
                            new_content = replace_code(markdown_content)

                            # 写入到目标文件
                            with open(target_file_path, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                        except Exception as e:
                            print(f"  处理文件失败 {file_path}: {e}")

    # 合并中英文文档
    def merge_api_docs(directory):
        # 遍历目标目录下的所有子文件夹
        for source_dir in Path(directory).iterdir():
            # 遍历子文件夹下的所有文件（包括子文件夹中的文件）
            for file_path in source_dir.rglob('*'):
                if file_path.is_file():
                    # 获取文件名
                    filename = file_path.name
                    # index.md文件路径
                    index_path = os.path.join(file_path.parent, 'index.md')
                    # index.md文件路径
                    index_en_path = os.path.join(file_path.parent, 'index.en-US.md')

                    if ".en-us" in filename.lower():
                        # 合并非index.md文件到index.md
                        if 'index.en-US.md' != filename:
                            merged = merge_markdown(index_en_path, file_path)
                            # 写入到目标文件
                            with open(index_en_path, 'w', encoding='utf-8') as f:
                                f.write(merged)
                            # 删除被合并的文件
                            safe_delete_file(file_path)
                        else:
                            continue
                    else:
                        # 合并非index.md文件到index.md
                        if 'index.md' != filename:
                            merged = merge_markdown(index_path, file_path)
                            # 写入到目标文件
                            with open(index_path, 'w', encoding='utf-8') as f:
                                f.write(merged)
                            # 删除被合并的文件
                            safe_delete_file(file_path)
                        else:
                            continue


    # 循环遍历路径做成demo文档
    def list_all_demo_docs(directory):
        # 遍历源根目录下的所有子文件夹
        for source_dir in Path(directory).iterdir():
            if source_dir.is_dir():
                # 获取子文件夹名称
                subfolder_name = source_dir.name

                # 目标路径
                target_path = target_demo_path / subfolder_name
                target_path.mkdir(parents=True, exist_ok=True)

                shutil.copytree(source_dir, target_path, dirs_exist_ok=True)

    def extract_field_set(markdown_text):
        # 定位 "## 组件列表" 标题之后的内容
        match = re.search(r'##\s+(?:组件列表|Component List)\s*(.*)', markdown_text, re.DOTALL)
        if not match:
            return ""

        table_content = match.group(1)
        lines = table_content.strip().splitlines()
        components = []
        in_table = False

        for line in lines:
            line = line.strip()
            if line.startswith('|') and not in_table:
                in_table = True
                continue
            elif in_table and line.startswith('|'):
                parts = [col.strip() for col in line.split('|')[1:-1]]
                if parts:
                    cell = parts[0]
                    # 提取组件标识符（允许字母、数字、下划线、点，但以字母开头）
                    comp_match = re.search(r'`?([A-Za-z][A-Za-z0-9_]*(?:\.[A-Za-z][A-Za-z0-9_]*)*)`?', cell)
                    if comp_match:
                        comp_name = comp_match.group(1).replace(" ", "")  # 显式去除组件名中的空格（防御性）
                        components.append(comp_name)
            elif in_table and not line.startswith('|'):
                break

        return ",".join(components)  # 逗号分隔，无空格

    def make_components_json(directory, lang=""):
        component_index = []
        component_en_index = []
        # 遍历目标目录下的所有子文件夹
        for source_dir in Path(directory).iterdir():
            # 遍历子文件夹下的所有文件（包括子文件夹中的文件）
            for file_path in source_dir.rglob('*'):
                if file_path.is_file():
                    # 获取文件名
                    filename = file_path.name
                    # 父级文件夹
                    parentName = file_path.parent.name
                    # 读取文件
                    content = read_markdown_to_string(file_path)
                    # 获取meta信息
                    meta = get_meta(content)
                    # 获取描述
                    description = get_description_and_when_to_use(content)

                    if ".en-us" in filename.lower():
                        # field-set处理
                        if 'field-set' == parentName:
                            component_en_index.append({
                                "name": meta['title'],
                                "dirName": file_path.parent.name,
                                "description": description['description'],
                                "whenToUse": description['when_to_use'],
                                "atomId": extract_field_set(content),
                            })
                        else:
                            component_en_index.append({
                                "name": meta['title'],
                                "dirName": file_path.parent.name,
                                "description": description['description'],
                                "whenToUse": description['when_to_use'],
                                "atomId": meta['atomId'] if 'atomId' in meta else "",
                            })
                    else:
                        # field-set处理
                        if 'field-set' == parentName:
                            component_index.append({
                                "name": meta['title'],
                                "dirName": file_path.parent.name,
                                "description": description['description'],
                                "whenToUse": description['when_to_use'],
                                "atomId": extract_field_set(content),
                            })
                        else:
                            component_index.append({
                                "name": meta['title'],
                                "dirName": file_path.parent.name,
                                "description": description['description'],
                                "whenToUse": description['when_to_use'],
                                "atomId": meta['atomId'] if 'atomId' in meta else "",
                            })


        if component_index.__len__() > 0:
            json_path = os.path.join(doc_root, 'components-index.json')
            # 写入到目标文件
            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(component_index, f, ensure_ascii=False, indent=4)
        if component_en_index.__len__() > 0:
            en_json_path = os.path.join(doc_root, 'components-index.en-US.json')
            # 写入到目标文件
            with open(en_json_path, 'w', encoding='utf-8') as f_en:
                json.dump(component_en_index, f_en, ensure_ascii=False, indent=4)

    def copy_change_log():
        resource_path = os.path.join(root_components, changelog_file_name)
        destination_path = os.path.join(doc_root, changelog_file_name)
        shutil.copy(resource_path, destination_path)

        resource_en_path = os.path.join(root_components, changelog_en_file_name)
        destination_en_path = os.path.join(doc_root, changelog_en_file_name)
        shutil.copy(resource_en_path, destination_en_path)

    def copy_guide():
        target_guide_path.mkdir(parents=True, exist_ok=True)

        for file_name in guide_files:
            resource_path = os.path.join(root_components, docs_dir, file_name)
            destination_path = os.path.join(target_guide_path, file_name)

            shutil.copy(resource_path, destination_path)

    def make_pro_components_info_json():
        packagePath = os.path.join(root_repo, package_file_name)
        with open(packagePath, 'r', encoding='utf-8') as file:
            packageData = json.load(file)
            proVersion = packageData['version']

        for index_file in lang_index_files:
            proComponentsPath = os.path.join(root_components, index_file)
            proComponentsContents = read_markdown_to_string(proComponentsPath)

            proComponentsInfo = {
                "name": "Pro-Components（ProComponents）",
                "description": proComponentsContents,
                "version": proVersion,
            }

            if ".en-us" in index_file.lower():
                pro_path = os.path.join(doc_root, 'pro-components.en-US.json')
            else:
                pro_path = os.path.join(doc_root, 'pro-components.json')

            # 写入到目标文件
            with open(pro_path, 'w', encoding='utf-8') as f:
                json.dump(proComponentsInfo, f, ensure_ascii=False, indent=4)


    def make_guide_json(directory):
        guide_index = []
        guide_index_en = []
        # 遍历目标目录下的所有子文件夹
        for source_dir in Path(directory).iterdir():
            if source_dir.is_file():
                file_name = source_dir.name
                # 读取文件
                content = read_markdown_to_string(source_dir)

                # 获取meta信息
                meta = get_meta(content)
                # 获取描述
                description = get_description_and_when_to_use(content)

                if file_name == 'api-changes.md':
                    guide_index.append({
                        "name": meta['title'],
                        "dirName": file_name,
                        "description": description['description'] if description['description'] else meta['title'],
                        "whenToUse": description['when_to_use'],
                        "atomId": "API变更,迁移检查清单,API 变更总结 (2.0 → 3.0),API变更(2.0 → 3.0),api-changes.md",
                    })
                elif file_name == 'migration-guide.md':
                    guide_index.append({
                        "name": meta['title'],
                        "dirName": file_name,
                        "description": "ProComponents 3.0 是一个主要版本升级，包含了一些破坏性变更。本指南将帮助你从 2.0 版本平滑迁移到 3.0 版本。",
                        "whenToUse": description['when_to_use'],
                        "atomId": "迁移指南,风险提示,API变更,migration-guide.md",
                    })

                if file_name == 'api-changes.en-US.md':
                    guide_index_en.append({
                        "name": meta['title'],
                        "dirName": file_name,
                        "description": description['description'] if description['description'] else meta['title'],
                        "whenToUse": description['when_to_use'],
                        "atomId": "ProComponents API Changes Summary (2.0 → 3.0),Version Requirements Changes,api-changes.en-US.md",
                    })
                elif file_name == 'migration-guide.en-US.md':
                    guide_index_en.append({
                        "name": meta['title'],
                        "dirName": file_name,
                        "description": "ProComponents 3.0 is a major version upgrade that includes some breaking changes. This guide will help you smoothly migrate from version 2.0 to 3.0.",
                        "whenToUse": description['when_to_use'],
                        "atomId": "ProComponents 2.0 to 3.0 Migration Guide,Preparation Before Upgrade,migration-guide.en-US.md",
                    })

        if guide_index:
            json_path = os.path.join(doc_root, 'api-guide.json')
            # 写入到目标文件
            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(guide_index, f, ensure_ascii=False, indent=4)
        if guide_index_en:
            json_path = os.path.join(doc_root, 'api-guide.en-US.json')
            # 写入到目标文件
            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(guide_index_en, f, ensure_ascii=False, indent=4)

    def copy_playground_docs(directory):
        # 遍历源根目录下的所有子文件夹
        for source_dir in Path(directory).iterdir():
            if source_dir.is_file():
                # 检查文件名是否包含".en-US"（不区分大小写）
                filename = source_dir.name
                if ".en-us" in filename.lower():
                    print(f"  跳过: {source_dir.name} (包含.en-US)")
                    continue

    # 循环拷贝api文档
    list_all_api_docs(os.path.join(root_components, 'components'))

    # api文档合并
    merge_api_docs(target_doc_path)

    # 循环拷贝示例代码文件
    list_all_demo_docs(root_demos)

    # 做成组件文档综合信息
    make_components_json(target_doc_path)

    # 拷贝changelog
    copy_change_log()

    make_pro_components_info_json()

    copy_guide()

    make_guide_json(target_guide_path)


def main():
    extract_pro_components()

if __name__ == '__main__':
    main()

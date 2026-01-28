#!/bin/bash

# 获取项目根目录
root_dir=$(dirname "$PWD")
echo "项目根目录: $root_dir"

# repo路径
DOC_DIR=$root_dir/.temp/pro-components

REPO_DIR=$1

if [ -n "$REPO_DIR" ]; then
  DOC_DIR=$REPO_DIR
fi

mkdir $DOC_DIR

# remove temp folder
rm -rf $DOC_DIR

# clone pro-components
git clone https://github.com/ant-design/pro-components.git $DOC_DIR --depth 1 --branch master --single-branch --filter=blob:none

pip install PyYAML

# 判断文件夹是否存在
if [ -d "$DOC_DIR" ]; then
  # extract docs
  python $root_dir/script/extract_pro_components.py
else
  echo "文件夹 $DOC_DIR 不存在。"
fi


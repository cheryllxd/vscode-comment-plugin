# vscode-comment-plugin README
快速生成js、vue文件头文件注释模板的插件

## 使用

### 快捷键

Alt+c 生成新的头文件注释模板

Alt+r 生成revision头文件注释模板

### 右键菜单

右键菜单-注释-new  生成新的头文件注释模板

右键菜单-注释-revision  生成revision头文件注释模板

### 自动补全

在注释部分输入@ 会有相应的注释字段进行补全提示

## 配置

setting->Extensions->comments-plugin->author 配置author字段值

## 打包

```node
npm i -g vsce // 安装依赖
```
```node
vsce package // 打包
```
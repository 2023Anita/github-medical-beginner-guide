# GitHub 医护人员入门指南

给医生、护士、医学生和医疗科研人员的 GitHub 保姆级课程站。

在线预览规划地址：

https://2023anita.github.io/github-medical-beginner-guide/

![课程学习地图](docs/public/assets/illustrations/01-learning-map.png)

## 项目定位

这不是泛程序员 Git 命令教程，而是面向医护人员的 GitHub 阅读与判断课程。目标是让初学者先会：

- 看懂开源项目页面；
- 判断医疗 AI / 科研代码是否靠谱；
- 区分 Release 和源码；
- 收藏、下载、提 Issue；
- 用 AI 帮自己解释 README；
- 把自己的教学 demo 安全放到 GitHub。

## 本地运行

```bash
npm install
npm run docs:dev
```

构建：

```bash
npm run docs:build
```

## 内容来源

源教材：

`/Users/anita/obsidian2026/teaching/GitHub保姆级教程：从0到1完整使用通俗指南教材.md`

构建脚本会把源教材按章节拆成 VitePress 页面，并保留原文表格、代码块、提示词、Issue 模板和课堂练习。

## 安全声明

本课程仅供教学和科研学习。医疗 AI 项目不能直接用于临床诊断、治疗决策或急救场景。公开 GitHub 仓库中不要上传真实患者数据、账号、密钥、token 或医院内部敏感资料。

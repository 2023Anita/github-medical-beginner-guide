---
title: "资料库"
description: "术语卡、检查表、安全边界、README 和 Issue 模板"
---


# 资料库

![医疗 AI 项目可靠性检查表](/assets/illustrations/06-reliability-checklist.png)

## 医护人员最常用的 GitHub 术语

- Repository：一个项目仓库。
- README：项目说明书，先读它。
- Commit：一次正式保存。
- Branch：实验版本或分支。
- Star：收藏和关注。
- Fork：复制一份到自己账号。
- Issue：反馈问题和建议。
- Pull Request：请求合并修改。
- Release：正式发布版本。
- Code：源码区和下载入口。

## 8 项靠谱检查表

| 检查项 | 要问的问题 | 医疗场景重点 |
|---|---|---|
| README | 说明是否清楚？ | 是否讲清输入、输出、边界 |
| Star | 是否有人关注？ | 不盲信热度，只作参考 |
| 更新时间 | 最近是否维护？ | 医疗 AI 依赖过期风险很高 |
| Issues | 用户反馈如何？ | 是否有安全、偏倚、数据问题 |
| Release | 是否有正式版本？ | 普通用户优先下载 Release |
| License | 是否允许复用？ | 科研、教学、商业用途限制不同 |
| Data | 数据来源是否清楚？ | 是否脱敏、是否可公开、是否合规 |
| Disclaimer | 是否有使用边界？ | 是否声明非临床诊断、仅研究用途 |

## 安全边界

![安全边界](/assets/illustrations/08-safety-boundary.png)

不要上传真实患者数据、API key、token、数据库密码、医院系统账号、云服务密钥、.env 文件、Kaggle / OpenAI / GitHub token。

## 常用模板

模板原文保留在：

- [新手必做 6 件事](/zh/chapters/04-six-beginner-actions)
- [常见坑与 AI 提示词](/zh/chapters/07-pitfalls-and-ai-prompts)
- [30 分钟课堂练习](/zh/practice/)

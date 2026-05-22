import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

const base = "/github-medical-beginner-guide/";

export default withMermaid(
  defineConfig({
    base,
    lang: "zh-CN",
    title: "GitHub 医护人员入门指南",
    description: "从 0 到 1 看懂开源项目、AI 工具与科研代码",
    cleanUrls: true,
    lastUpdated: true,
    head: [
      ["meta", { name: "theme-color", content: "#f5efe4" }],
      ["meta", { property: "og:title", content: "GitHub 医护人员入门指南" }],
      [
        "meta",
        {
          property: "og:description",
          content: "给医生、护士、医学生和医疗科研人员的 GitHub 保姆级课程站。",
        },
      ],
    ],
    themeConfig: {
      logo: "/assets/source/01-github-beginner-map.jpg",
      nav: [
        { text: "课程首页", link: "/zh/" },
        { text: "框架图", link: "/zh/visual-map" },
        { text: "练习", link: "/zh/practice/" },
        { text: "资料库", link: "/zh/resources/" },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/2023Anita/github-medical-beginner-guide" },
      ],
      sidebar: {
        "/zh/": [
          {
            text: "开始学习",
            items: [
              { text: "课程首页", link: "/zh/" },
              { text: "框架图与流程", link: "/zh/visual-map" },
            ],
          },
          {
            text: "完整教材",
            items: [
              { text: "0. 为什么医护要学 GitHub", link: "/zh/chapters/00-why-github" },
              { text: "1-2. 正确顺序与平台理解", link: "/zh/chapters/01-reading-before-command" },
              { text: "3-4. Git/GitHub 与医疗 AI", link: "/zh/chapters/02-git-vs-github-medical-ai" },
              { text: "5-7. 看懂项目与检查质量", link: "/zh/chapters/03-read-and-evaluate-projects" },
              { text: "8. 新手必做 6 件事", link: "/zh/chapters/04-six-beginner-actions" },
              { text: "9. 医疗场景真实例子", link: "/zh/chapters/05-medical-scenarios" },
              { text: "10-11. 安全边界与隐藏功能", link: "/zh/chapters/06-safety-and-hidden-features" },
              { text: "12-13. 常见坑与 AI 提示词", link: "/zh/chapters/07-pitfalls-and-ai-prompts" },
              { text: "14-16. 课堂闭环与学习路线", link: "/zh/chapters/08-classroom-and-roadmap" },
            ],
          },
          {
            text: "练习与资料",
            items: [
              { text: "30 分钟练习", link: "/zh/practice/" },
              { text: "资料库", link: "/zh/resources/" },
            ],
          },
        ],
      },
      search: {
        provider: "local",
      },
      outline: {
        level: [2, 3],
        label: "本页目录",
      },
      docFooter: {
        prev: "上一页",
        next: "下一页",
      },
      lastUpdated: {
        text: "最后更新",
      },
      footer: {
        message: "仅供教学与科研学习，不用于临床诊断、治疗决策或急救场景。",
        copyright: "Copyright © 2026 Anita",
      },
    },
  }),
);

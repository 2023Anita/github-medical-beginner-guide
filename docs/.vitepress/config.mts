import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

const base = "/github-medical-beginner-guide/";

const languageItems = [
  { text: "🇨🇳 中文", link: "/zh/" },
  { text: "🇺🇸 English", link: "/en/" },
  { text: "🇯🇵 日本語", link: "/ja/" },
  { text: "🇰🇷 한국어", link: "/ko/" },
  { text: "🇫🇷 Français", link: "/fr/" },
  { text: "🇩🇪 Deutsch", link: "/de/" },
];

function navFor(prefix: string, labels: [string, string, string, string]) {
  const [home, map, practice, resources] = labels;
  return [
    { text: home, link: `/${prefix}/` },
    { text: map, link: `/${prefix}/visual-map` },
    { text: practice, link: `/${prefix}/practice/` },
    { text: resources, link: `/${prefix}/resources/` },
    { text: "🌐", items: languageItems },
  ];
}

const localizedSidebar = {
  "/en/": [
    {
      text: "Start Learning",
      items: [
        { text: "Course Home", link: "/en/" },
        { text: "Visual Maps", link: "/en/visual-map" },
      ],
    },
    {
      text: "Course Chapters",
      items: [
        { text: "0. Why GitHub", link: "/en/chapters/00-why-github" },
        { text: "1-2. Reading First", link: "/en/chapters/01-reading-before-command" },
        { text: "3-4. GitHub and Medical AI", link: "/en/chapters/02-git-vs-github-medical-ai" },
        { text: "5-7. Project Evaluation", link: "/en/chapters/03-read-and-evaluate-projects" },
        { text: "8. Six Beginner Actions", link: "/en/chapters/04-six-beginner-actions" },
        { text: "9. Medical Scenarios", link: "/en/chapters/05-medical-scenarios" },
        { text: "10-11. Safety", link: "/en/chapters/06-safety-and-hidden-features" },
        { text: "12-13. AI Prompts", link: "/en/chapters/07-pitfalls-and-ai-prompts" },
        { text: "14-16. Roadmap", link: "/en/chapters/08-classroom-and-roadmap" },
      ],
    },
    {
      text: "Practice and Resources",
      items: [
        { text: "30-minute Practice", link: "/en/practice/" },
        { text: "Resources", link: "/en/resources/" },
      ],
    },
  ],
  "/ja/": [
    {
      text: "学習を始める",
      items: [
        { text: "ホーム", link: "/ja/" },
        { text: "図解", link: "/ja/visual-map" },
      ],
    },
    {
      text: "章一覧",
      items: [
        { text: "0. GitHub を学ぶ理由", link: "/ja/chapters/00-why-github" },
        { text: "1-2. まず読む", link: "/ja/chapters/01-reading-before-command" },
        { text: "3-4. GitHub と医療 AI", link: "/ja/chapters/02-git-vs-github-medical-ai" },
        { text: "5-7. 評価", link: "/ja/chapters/03-read-and-evaluate-projects" },
        { text: "8. 6 つの行動", link: "/ja/chapters/04-six-beginner-actions" },
        { text: "9. 医療例", link: "/ja/chapters/05-medical-scenarios" },
        { text: "10-11. 安全", link: "/ja/chapters/06-safety-and-hidden-features" },
        { text: "12-13. AI プロンプト", link: "/ja/chapters/07-pitfalls-and-ai-prompts" },
        { text: "14-16. ロードマップ", link: "/ja/chapters/08-classroom-and-roadmap" },
      ],
    },
    {
      text: "練習と資料",
      items: [
        { text: "30 分練習", link: "/ja/practice/" },
        { text: "資料", link: "/ja/resources/" },
      ],
    },
  ],
  "/ko/": [
    {
      text: "학습 시작",
      items: [
        { text: "홈", link: "/ko/" },
        { text: "시각 지도", link: "/ko/visual-map" },
      ],
    },
    {
      text: "강의 장",
      items: [
        { text: "0. GitHub를 배우는 이유", link: "/ko/chapters/00-why-github" },
        { text: "1-2. 먼저 읽기", link: "/ko/chapters/01-reading-before-command" },
        { text: "3-4. GitHub와 의료 AI", link: "/ko/chapters/02-git-vs-github-medical-ai" },
        { text: "5-7. 프로젝트 평가", link: "/ko/chapters/03-read-and-evaluate-projects" },
        { text: "8. 6가지 행동", link: "/ko/chapters/04-six-beginner-actions" },
        { text: "9. 의료 사례", link: "/ko/chapters/05-medical-scenarios" },
        { text: "10-11. 안전", link: "/ko/chapters/06-safety-and-hidden-features" },
        { text: "12-13. AI 프롬프트", link: "/ko/chapters/07-pitfalls-and-ai-prompts" },
        { text: "14-16. 로드맵", link: "/ko/chapters/08-classroom-and-roadmap" },
      ],
    },
    {
      text: "실습과 자료",
      items: [
        { text: "30분 실습", link: "/ko/practice/" },
        { text: "자료", link: "/ko/resources/" },
      ],
    },
  ],
  "/fr/": [
    {
      text: "Commencer",
      items: [
        { text: "Accueil", link: "/fr/" },
        { text: "Cartes", link: "/fr/visual-map" },
      ],
    },
    {
      text: "Chapitres",
      items: [
        { text: "0. Pourquoi GitHub", link: "/fr/chapters/00-why-github" },
        { text: "1-2. Lire d'abord", link: "/fr/chapters/01-reading-before-command" },
        { text: "3-4. GitHub et IA médicale", link: "/fr/chapters/02-git-vs-github-medical-ai" },
        { text: "5-7. Évaluer", link: "/fr/chapters/03-read-and-evaluate-projects" },
        { text: "8. Six actions", link: "/fr/chapters/04-six-beginner-actions" },
        { text: "9. Cas médicaux", link: "/fr/chapters/05-medical-scenarios" },
        { text: "10-11. Sécurité", link: "/fr/chapters/06-safety-and-hidden-features" },
        { text: "12-13. Prompts IA", link: "/fr/chapters/07-pitfalls-and-ai-prompts" },
        { text: "14-16. Feuille de route", link: "/fr/chapters/08-classroom-and-roadmap" },
      ],
    },
    {
      text: "Exercices et ressources",
      items: [
        { text: "Exercice 30 min", link: "/fr/practice/" },
        { text: "Ressources", link: "/fr/resources/" },
      ],
    },
  ],
  "/de/": [
    {
      text: "Lernen starten",
      items: [
        { text: "Start", link: "/de/" },
        { text: "Karten", link: "/de/visual-map" },
      ],
    },
    {
      text: "Kapitel",
      items: [
        { text: "0. Warum GitHub", link: "/de/chapters/00-why-github" },
        { text: "1-2. Erst lesen", link: "/de/chapters/01-reading-before-command" },
        { text: "3-4. GitHub und medizinische KI", link: "/de/chapters/02-git-vs-github-medical-ai" },
        { text: "5-7. Bewerten", link: "/de/chapters/03-read-and-evaluate-projects" },
        { text: "8. Sechs Schritte", link: "/de/chapters/04-six-beginner-actions" },
        { text: "9. Medizinische Fälle", link: "/de/chapters/05-medical-scenarios" },
        { text: "10-11. Sicherheit", link: "/de/chapters/06-safety-and-hidden-features" },
        { text: "12-13. KI-Prompts", link: "/de/chapters/07-pitfalls-and-ai-prompts" },
        { text: "14-16. Lernplan", link: "/de/chapters/08-classroom-and-roadmap" },
      ],
    },
    {
      text: "Übung und Ressourcen",
      items: [
        { text: "30-Minuten-Übung", link: "/de/practice/" },
        { text: "Ressourcen", link: "/de/resources/" },
      ],
    },
  ],
};

export default withMermaid(
  defineConfig({
    base,
    lang: "zh-CN",
    title: "GitHub 医护人员入门指南",
    description: "从 0 到 1 看懂开源项目、AI 工具与科研代码",
    cleanUrls: true,
    lastUpdated: true,
    locales: {
      zh: {
        label: "中文",
        lang: "zh-CN",
        title: "GitHub 医护人员入门指南",
        description: "从 0 到 1 看懂开源项目、AI 工具与科研代码",
        themeConfig: {
          nav: navFor("zh", ["课程首页", "框架图", "练习", "资料库"]),
        },
      },
      en: {
        label: "English",
        lang: "en-US",
        title: "GitHub Medical Beginner Guide",
        description: "A practical GitHub course for medical beginners.",
        themeConfig: {
          nav: navFor("en", ["Home", "Maps", "Practice", "Resources"]),
        },
      },
      ja: {
        label: "日本語",
        lang: "ja-JP",
        title: "医療者のための GitHub 入門ガイド",
        description: "医療初心者向け GitHub 実践コース。",
        themeConfig: {
          nav: navFor("ja", ["ホーム", "図解", "練習", "資料"]),
        },
      },
      ko: {
        label: "한국어",
        lang: "ko-KR",
        title: "의료인을 위한 GitHub 입문 가이드",
        description: "의료 초보자를 위한 GitHub 실전 코스.",
        themeConfig: {
          nav: navFor("ko", ["홈", "지도", "실습", "자료"]),
        },
      },
      fr: {
        label: "Français",
        lang: "fr-FR",
        title: "Guide GitHub pour débutants médicaux",
        description: "Un cours GitHub pratique pour les débutants médicaux.",
        themeConfig: {
          nav: navFor("fr", ["Accueil", "Cartes", "Exercice", "Ressources"]),
        },
      },
      de: {
        label: "Deutsch",
        lang: "de-DE",
        title: "GitHub Leitfaden für medizinische Anfänger",
        description: "Ein praktischer GitHub-Kurs für medizinische Anfänger.",
        themeConfig: {
          nav: navFor("de", ["Start", "Karten", "Übung", "Ressourcen"]),
        },
      },
    },
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
      logo: "/assets/brand/logo002.png",
      nav: [
        { text: "课程首页", link: "/zh/" },
        { text: "框架图", link: "/zh/visual-map" },
        { text: "练习", link: "/zh/practice/" },
        { text: "资料库", link: "/zh/resources/" },
        { text: "🌐", items: languageItems },
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
        ...localizedSidebar,
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

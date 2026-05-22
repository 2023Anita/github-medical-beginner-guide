import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath =
  "/Users/anita/obsidian2026/teaching/GitHub保姆级教程：从0到1完整使用通俗指南教材.md";
const docsZh = path.join(root, "docs", "zh");
const chaptersDir = path.join(docsZh, "chapters");
const practiceDir = path.join(docsZh, "practice");
const resourcesDir = path.join(docsZh, "resources");

const imageNames = [
  "01-learning-map.png",
  "02-research-archive.png",
  "03-git-vs-github.png",
  "04-repository-reading-order.png",
  "05-readme-release-issues-license.png",
  "06-reliability-checklist.png",
  "07-open-source-collaboration.png",
  "08-safety-boundary.png",
  "09-hidden-features.png",
  "10-practice-loop.png",
];

const pages = [
  {
    file: "00-why-github.md",
    title: "0. 为什么医护要学 GitHub",
    sections: [0],
    image: imageNames[0],
  },
  {
    file: "01-reading-before-command.md",
    title: "1-2. 正确顺序与平台理解",
    sections: [1, 2],
    image: imageNames[1],
  },
  {
    file: "02-git-vs-github-medical-ai.md",
    title: "3-4. Git/GitHub 与医疗 AI",
    sections: [3, 4],
    image: imageNames[2],
  },
  {
    file: "03-read-and-evaluate-projects.md",
    title: "5-7. 看懂项目与检查质量",
    sections: [5, 6, 7],
    image: imageNames[3],
  },
  {
    file: "04-six-beginner-actions.md",
    title: "8. 新手必做 6 件事",
    sections: [8],
    image: imageNames[6],
  },
  {
    file: "05-medical-scenarios.md",
    title: "9. 医疗场景真实例子",
    sections: [9],
    image: imageNames[4],
  },
  {
    file: "06-safety-and-hidden-features.md",
    title: "10-11. 安全边界与隐藏功能",
    sections: [10, 11],
    image: imageNames[7],
  },
  {
    file: "07-pitfalls-and-ai-prompts.md",
    title: "12-13. 常见坑与 AI 提示词",
    sections: [12, 13],
    image: imageNames[8],
  },
  {
    file: "08-classroom-and-roadmap.md",
    title: "14-16. 课堂闭环与学习路线",
    sections: [14, 15, 16],
    image: imageNames[9],
  },
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function stripFrontmatter(text) {
  return text.replace(/^---\n[\s\S]*?\n---\n+/, "");
}

function normalizeMarkdown(text) {
  return text
    .replace(
      /!\[\[teaching\/assets\/github-complete-beginner-guide\/01-github-beginner-map\.jpg\]\]/g,
      "![GitHub 医护人员学习地图](/assets/source/01-github-beginner-map.jpg)",
    )
    .replace(/^\s*---\s*$/gm, "\n---\n");
}

function splitSections(markdown) {
  const lines = markdown.split("\n");
  const intro = [];
  const sections = [];
  let current = null;
  let inFence = false;

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inFence = !inFence;
    }

    const match = !inFence ? line.match(/^##\s+(\d+)\.\s+(.+)$/) : null;
    if (match) {
      current = {
        number: Number(match[1]),
        title: match[2],
        lines: [line],
      };
      sections.push(current);
      continue;
    }

    if (current) {
      current.lines.push(line);
    } else {
      intro.push(line);
    }
  }

  return {
    intro: intro.join("\n").trim(),
    sections,
  };
}

function frontmatter(title, description) {
  return `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\n---\n\n`;
}

function chapterHero(image, title) {
  return `<div class="image-grid">\n  <img src="/assets/illustrations/${image}" alt="${title}" />\n</div>\n\n`;
}

function writeFile(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content.trimEnd() + "\n", "utf8");
}

if (!fs.existsSync(sourcePath)) {
  console.warn("Source document not found at " + sourcePath + ". Using committed docs without regenerating content.");
  process.exit(0);
}

const source = normalizeMarkdown(stripFrontmatter(fs.readFileSync(sourcePath, "utf8")));
const { intro, sections } = splitSections(source);
const sectionByNumber = new Map(sections.map((section) => [section.number, section]));

ensureDir(chaptersDir);
ensureDir(practiceDir);
ensureDir(resourcesDir);

const introWithoutTitle = intro.replace(/^# .+\n+/, "");
writeFile(
  path.join(docsZh, "index.md"),
  `${frontmatter(
    "GitHub 医护人员入门指南",
    "从 0 到 1 看懂开源项目、AI 工具与科研代码",
  )}<div class="course-hero">
  <div>
    <p class="kicker">GitHub for Medical Beginners</p>
    <h1>GitHub<br />医护人员<br />入门指南</h1>
    <p>从看懂项目、判断质量、识别风险，到收藏、下载、提 Issue、发布教学 demo。先学会读 GitHub，再逐步学习 Git 命令。</p>
  </div>
  <img src="/assets/illustrations/01-learning-map.png" alt="医护人员 GitHub 学习地图" />
</div>

${introWithoutTitle}

<div class="warm-grid">
  <div class="warm-card"><h3>先会看</h3><p>README、Release、Issues、License、数据与隐私说明，是医护人员进入开源项目的第一步。</p></div>
  <div class="warm-card"><h3>再判断</h3><p>不要只看 Star。医疗 AI 项目还要看数据来源、验证边界、合规提醒和临床免责声明。</p></div>
  <div class="warm-card"><h3>最后复用</h3><p>用虚构数据和清晰 README 发布自己的教学 demo，避免真实患者数据和密钥进入公开仓库。</p></div>
</div>

## 课程入口

- [框架图与流程](/zh/visual-map)
- [完整教材第 0 章](/zh/chapters/00-why-github)
- [30 分钟练习](/zh/practice/)
- [资料库](/zh/resources/)
`,
);

for (const page of pages) {
  const body = page.sections
    .map((number) => {
      const section = sectionByNumber.get(number);
      if (!section) throw new Error(`Missing section ${number}`);
      return section.lines.join("\n").trim();
    })
    .join("\n\n---\n\n");
  writeFile(
    path.join(chaptersDir, page.file),
    `${frontmatter(page.title, "GitHub 医护人员入门完整教材章节")}
${chapterHero(page.image, page.title)}
${body}`,
  );
}

writeFile(
  path.join(docsZh, "visual-map.md"),
  `${frontmatter("框架图与流程", "用 Mermaid 图理解 GitHub 学习、评估和发布流程")}
# 框架图与流程

![GitHub 框架图](/assets/illustrations/05-readme-release-issues-license.png)

## 学习路线图

\`\`\`mermaid
flowchart LR
  A["看懂仓库页面"] --> B["判断项目质量"]
  B --> C["下载 Release 或源码"]
  C --> D["让 AI 帮你解释 README"]
  D --> E["复用到教学或科研 demo"]
  E --> F["发布自己的安全项目"]
  F --> G["Issue / PR 协作"]
\`\`\`

## 医疗项目评估流程

\`\`\`mermaid
flowchart TD
  A["项目标题和一句话简介"] --> B["README 是否清楚"]
  B --> C["数据来源与隐私说明"]
  C --> D["Star / 更新时间 / Issues"]
  D --> E["Release 是否适合试用"]
  E --> F["License 是否允许复用"]
  F --> G["是否写明医疗使用边界"]
  G --> H{"建议"}
  H --> I["推荐深入"]
  H --> J["可以学习"]
  H --> K["谨慎观察"]
  H --> L["不建议使用"]
\`\`\`

## GitHub 发布流程

\`\`\`mermaid
flowchart TD
  A["创建仓库"] --> B["写 README"]
  B --> C["只放虚构或脱敏数据"]
  C --> D["加入安全与临床边界声明"]
  D --> E["设置 GitHub Pages"]
  E --> F["用 GitHub Actions 自动部署"]
  F --> G["发布后检查公开页面"]
\`\`\`

## Git 与 GitHub 的关系

\`\`\`mermaid
flowchart LR
  A["Git\\n本地版本记录"] --> B["Commit\\n一次保存"]
  B --> C["Push\\n上传"]
  C --> D["GitHub\\n在线托管与协作"]
  D --> E["Issue / PR / Release / Pages"]
\`\`\`
`,
);

writeFile(
  path.join(practiceDir, "index.md"),
  `${frontmatter("30 分钟课堂练习", "找项目、看 README、判断风险、收藏并让 AI 解释")}
# 30 分钟课堂练习

![30 分钟课堂练习闭环](/assets/illustrations/10-practice-loop.png)

这一页把源教材中的课堂练习、Issue 模板和 AI 提示词集中放在一起，方便讲课时直接使用。

## 练习闭环

\`\`\`mermaid
flowchart LR
  A["找项目"] --> B["看 README"]
  B --> C["判断风险"]
  C --> D["点 Star"]
  D --> E["让 AI 解释"]
  E --> F["写学习记录"]
\`\`\`

${sectionByNumber.get(13).lines.join("\n").trim()}

---

${sectionByNumber.get(14).lines.join("\n").trim()}
`,
);

writeFile(
  path.join(resourcesDir, "index.md"),
  `${frontmatter("资料库", "术语卡、检查表、安全边界、README 和 Issue 模板")}
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
`,
);

const expected = [...Array(17).keys()];
const missing = expected.filter((number) => !sectionByNumber.has(number));
if (missing.length) {
  throw new Error(`Missing source sections: ${missing.join(", ")}`);
}

console.log(`Generated ${pages.length} chapter pages from ${sections.length} source sections.`);

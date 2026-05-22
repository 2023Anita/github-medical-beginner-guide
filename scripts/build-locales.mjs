import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const docsDir = path.join(root, "docs");

const chapterFiles = [
  ["00-why-github.md", "0", "why"],
  ["01-reading-before-command.md", "1-2", "order"],
  ["02-git-vs-github-medical-ai.md", "3-4", "git"],
  ["03-read-and-evaluate-projects.md", "5-7", "evaluate"],
  ["04-six-beginner-actions.md", "8", "actions"],
  ["05-medical-scenarios.md", "9", "scenarios"],
  ["06-safety-and-hidden-features.md", "10-11", "safety"],
  ["07-pitfalls-and-ai-prompts.md", "12-13", "prompts"],
  ["08-classroom-and-roadmap.md", "14-16", "classroom"],
];

const locales = {
  en: {
    langName: "English",
    title: "GitHub Medical Beginner Guide",
    subtitle: "From reading repositories to judging quality, spotting risk, reusing examples, and publishing a safe teaching demo.",
    navHome: "Course Home",
    navMap: "Maps",
    navPractice: "Practice",
    navResources: "Resources",
    start: "Start Learning",
    chapters: "Course Chapters",
    practiceResources: "Practice and Resources",
    routeTitle: "Course Entry",
    sourceNote: "This multilingual version keeps the same course structure as the Chinese source edition and focuses on practical GitHub literacy for medical and research learners.",
    cards: [
      ["Read First", "Start with README, Release, Issues, License, data notes, and privacy boundaries."],
      ["Judge Carefully", "Do not trust Star count alone. Medical AI projects need data provenance, validation boundaries, and clinical disclaimers."],
      ["Reuse Safely", "Use fictional or de-identified data, clear README files, and explicit safety statements before publishing a demo."],
    ],
    chapterTitles: {
      why: "Why medical professionals should learn GitHub",
      order: "Read projects before learning commands",
      git: "Git vs GitHub and medical AI",
      evaluate: "Read and evaluate project quality",
      actions: "Six beginner actions",
      scenarios: "Medical use cases",
      safety: "Safety boundaries and hidden features",
      prompts: "Pitfalls and AI prompts",
      classroom: "Classroom loop and learning roadmap",
    },
    chapterSummary: "Use this chapter to learn what to check, what to avoid, and how to turn GitHub from a developer-only website into a practical medical learning and collaboration workspace.",
    visual: {
      title: "Visual Maps and Workflows",
      learning: "Learning route",
      evaluating: "Medical project evaluation workflow",
      publishing: "Safe GitHub publishing workflow",
      relation: "Git and GitHub relationship",
    },
    practice: {
      title: "30-minute Classroom Practice",
      intro: "Find one project, read its README, check risk, Star it, ask AI to explain it, and write a short learning note.",
      steps: ["Find a project", "Read README", "Check risk", "Star", "Ask AI", "Write a note"],
    },
    resources: {
      title: "Resource Library",
      intro: "Quick terminology, reliability checklist, safety boundaries, and reusable templates for medical beginners.",
    },
  },
  ja: {
    langName: "日本語",
    title: "医療者のための GitHub 入門ガイド",
    subtitle: "リポジトリを読む、品質を判断する、リスクを見つける、安全な教育デモを公開するまで。",
    navHome: "ホーム",
    navMap: "図解",
    navPractice: "練習",
    navResources: "資料",
    start: "学習を始める",
    chapters: "章一覧",
    practiceResources: "練習と資料",
    routeTitle: "コース入口",
    sourceNote: "この多言語版は中国語原版と同じ構成を保ち、医療者と研究者が GitHub を安全に読む力を身につけることを目的にしています。",
    cards: [
      ["まず読む", "README、Release、Issues、License、データ説明、プライバシー境界を確認します。"],
      ["慎重に判断", "Star 数だけで判断しません。医療 AI ではデータ由来、検証範囲、臨床免責が重要です。"],
      ["安全に再利用", "架空データまたは匿名化データ、明確な README、安全境界を使って公開します。"],
    ],
    chapterTitles: {
      why: "医療者が GitHub を学ぶ理由",
      order: "コマンドより先にプロジェクトを読む",
      git: "Git と GitHub、医療 AI",
      evaluate: "プロジェクト品質の読み方",
      actions: "初心者の 6 つの行動",
      scenarios: "医療現場の利用例",
      safety: "安全境界と隠れた機能",
      prompts: "つまずきやすい点と AI プロンプト",
      classroom: "30 分練習と学習ロードマップ",
    },
    chapterSummary: "この章では、何を確認し、何を避け、GitHub を医療学習と共同作業のための実用的な作業場に変える方法を学びます。",
    visual: {
      title: "図解とワークフロー",
      learning: "学習ルート",
      evaluating: "医療プロジェクト評価フロー",
      publishing: "安全な GitHub 公開フロー",
      relation: "Git と GitHub の関係",
    },
    practice: {
      title: "30 分の教室練習",
      intro: "プロジェクトを 1 つ探し、README を読み、リスクを確認し、Star を付け、AI に説明させ、短い学習メモを書きます。",
      steps: ["探す", "README を読む", "リスク確認", "Star", "AI に質問", "メモを書く"],
    },
    resources: {
      title: "資料ライブラリ",
      intro: "医療初心者向けの用語、信頼性チェック、安全境界、再利用テンプレートです。",
    },
  },
  ko: {
    langName: "한국어",
    title: "의료인을 위한 GitHub 입문 가이드",
    subtitle: "저장소 읽기, 품질 판단, 위험 확인, 안전한 교육용 데모 공개까지.",
    navHome: "홈",
    navMap: "지도",
    navPractice: "실습",
    navResources: "자료",
    start: "학습 시작",
    chapters: "강의 장",
    practiceResources: "실습과 자료",
    routeTitle: "코스 입구",
    sourceNote: "이 다국어 버전은 중국어 원본과 같은 구조를 유지하며 의료인과 연구자가 GitHub를 안전하게 읽고 판단하도록 돕습니다.",
    cards: [
      ["먼저 읽기", "README, Release, Issues, License, 데이터 설명, 개인정보 경계를 확인합니다."],
      ["신중히 판단", "Star 수만 믿지 않습니다. 의료 AI에서는 데이터 출처, 검증 범위, 임상 면책이 중요합니다."],
      ["안전하게 재사용", "가상 또는 비식별 데이터를 쓰고 명확한 README와 안전 문구를 포함합니다."],
    ],
    chapterTitles: {
      why: "의료인이 GitHub를 배워야 하는 이유",
      order: "명령어보다 프로젝트 읽기 먼저",
      git: "Git, GitHub와 의료 AI",
      evaluate: "프로젝트 품질 평가",
      actions: "초보자를 위한 6가지 행동",
      scenarios: "의료 활용 사례",
      safety: "안전 경계와 숨은 기능",
      prompts: "흔한 실수와 AI 프롬프트",
      classroom: "교실 실습과 학습 로드맵",
    },
    chapterSummary: "이 장에서는 무엇을 확인하고 피해야 하는지, GitHub를 의료 학습과 협업을 위한 실용적인 작업 공간으로 바꾸는 방법을 배웁니다.",
    visual: {
      title: "시각 지도와 워크플로",
      learning: "학습 경로",
      evaluating: "의료 프로젝트 평가 흐름",
      publishing: "안전한 GitHub 공개 흐름",
      relation: "Git과 GitHub의 관계",
    },
    practice: {
      title: "30분 교실 실습",
      intro: "프로젝트 하나를 찾고 README를 읽고 위험을 확인한 뒤 Star를 누르고 AI에게 설명을 요청하고 학습 기록을 작성합니다.",
      steps: ["프로젝트 찾기", "README 읽기", "위험 확인", "Star", "AI 설명", "기록 작성"],
    },
    resources: {
      title: "자료실",
      intro: "의료 초보자를 위한 용어, 신뢰성 체크리스트, 안전 경계, 재사용 템플릿입니다.",
    },
  },
  fr: {
    langName: "Français",
    title: "Guide GitHub pour débutants médicaux",
    subtitle: "Lire un dépôt, juger sa qualité, repérer les risques, réutiliser et publier une démo pédagogique sûre.",
    navHome: "Accueil",
    navMap: "Cartes",
    navPractice: "Exercice",
    navResources: "Ressources",
    start: "Commencer",
    chapters: "Chapitres",
    practiceResources: "Exercices et ressources",
    routeTitle: "Entrée du cours",
    sourceNote: "Cette version multilingue reprend la structure de l'édition chinoise et aide les professionnels de santé à lire GitHub avec prudence.",
    cards: [
      ["Lire d'abord", "Commencez par README, Release, Issues, License, données et confidentialité."],
      ["Évaluer avec prudence", "Ne vous fiez pas seulement aux Stars. Les projets d'IA médicale exigent source des données, limites de validation et avertissements cliniques."],
      ["Réutiliser en sécurité", "Publiez avec des données fictives ou anonymisées, un README clair et des limites de sécurité."],
    ],
    chapterTitles: {
      why: "Pourquoi les soignants doivent apprendre GitHub",
      order: "Lire les projets avant les commandes",
      git: "Git, GitHub et IA médicale",
      evaluate: "Lire et évaluer la qualité d'un projet",
      actions: "Six actions pour débuter",
      scenarios: "Cas d'usage médicaux",
      safety: "Limites de sécurité et fonctions cachées",
      prompts: "Pièges fréquents et prompts IA",
      classroom: "Exercice en classe et feuille de route",
    },
    chapterSummary: "Ce chapitre montre quoi vérifier, quoi éviter et comment transformer GitHub en espace pratique d'apprentissage médical et de collaboration.",
    visual: {
      title: "Cartes visuelles et workflows",
      learning: "Parcours d'apprentissage",
      evaluating: "Évaluation d'un projet médical",
      publishing: "Publication GitHub sûre",
      relation: "Relation entre Git et GitHub",
    },
    practice: {
      title: "Exercice de 30 minutes",
      intro: "Trouvez un projet, lisez son README, vérifiez les risques, ajoutez une Star, demandez une explication à l'IA et écrivez une note.",
      steps: ["Trouver", "Lire README", "Vérifier", "Star", "Demander à l'IA", "Noter"],
    },
    resources: {
      title: "Bibliothèque de ressources",
      intro: "Termes, checklist de fiabilité, limites de sécurité et modèles réutilisables pour débutants médicaux.",
    },
  },
  de: {
    langName: "Deutsch",
    title: "GitHub Leitfaden für medizinische Anfänger",
    subtitle: "Repositorys lesen, Qualität beurteilen, Risiken erkennen, Beispiele wiederverwenden und sichere Lehr-Demos veröffentlichen.",
    navHome: "Start",
    navMap: "Karten",
    navPractice: "Übung",
    navResources: "Ressourcen",
    start: "Lernen starten",
    chapters: "Kapitel",
    practiceResources: "Übung und Ressourcen",
    routeTitle: "Kurseinstieg",
    sourceNote: "Diese mehrsprachige Version folgt der chinesischen Originalstruktur und hilft medizinischen Lernenden, GitHub sicher zu verstehen.",
    cards: [
      ["Zuerst lesen", "Beginnen Sie mit README, Release, Issues, License, Datenhinweisen und Datenschutzgrenzen."],
      ["Sorgfältig prüfen", "Verlassen Sie sich nicht nur auf Stars. Medizinische KI braucht Datenherkunft, Validierungsgrenzen und klinische Hinweise."],
      ["Sicher wiederverwenden", "Nutzen Sie fiktive oder anonymisierte Daten, klare README-Dateien und deutliche Sicherheitsgrenzen."],
    ],
    chapterTitles: {
      why: "Warum medizinisches Personal GitHub lernen sollte",
      order: "Erst Projekte lesen, dann Befehle lernen",
      git: "Git, GitHub und medizinische KI",
      evaluate: "Projektqualität lesen und bewerten",
      actions: "Sechs Schritte für Anfänger",
      scenarios: "Medizinische Anwendungsfälle",
      safety: "Sicherheitsgrenzen und versteckte Funktionen",
      prompts: "Typische Fehler und KI-Prompts",
      classroom: "Unterrichtsübung und Lernplan",
    },
    chapterSummary: "Dieses Kapitel zeigt, was zu prüfen ist, was vermieden werden sollte und wie GitHub zu einem praktischen Arbeitsraum für medizinisches Lernen und Zusammenarbeit wird.",
    visual: {
      title: "Visuelle Karten und Workflows",
      learning: "Lernroute",
      evaluating: "Bewertung medizinischer Projekte",
      publishing: "Sicherer GitHub-Veröffentlichungsprozess",
      relation: "Beziehung zwischen Git und GitHub",
    },
    practice: {
      title: "30-Minuten-Unterrichtsübung",
      intro: "Finden Sie ein Projekt, lesen Sie das README, prüfen Sie Risiken, vergeben Sie einen Star, fragen Sie KI nach einer Erklärung und schreiben Sie eine Lernnotiz.",
      steps: ["Projekt finden", "README lesen", "Risiko prüfen", "Star", "KI fragen", "Notiz schreiben"],
    },
    resources: {
      title: "Ressourcenbibliothek",
      intro: "Begriffe, Zuverlässigkeits-Checkliste, Sicherheitsgrenzen und Vorlagen für medizinische Anfänger.",
    },
  },
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content.trimEnd() + "\n", "utf8");
}

function frontmatter(title, description) {
  return `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\n---\n\n`;
}

function langLink(lang, page) {
  return `/${lang}/${page}`;
}

function courseLinks(lang, t) {
  return `- [${t.navMap}](${langLink(lang, "visual-map")})\n- [${t.chapters}](${langLink(lang, "chapters/00-why-github")})\n- [${t.navPractice}](${langLink(lang, "practice/")})\n- [${t.navResources}](${langLink(lang, "resources/")})`;
}

function writeLocale(lang, t) {
  const baseDir = path.join(docsDir, lang);
  const chaptersDir = path.join(baseDir, "chapters");

  writeFile(
    path.join(baseDir, "index.md"),
    `${frontmatter(t.title, t.subtitle)}<div class="course-hero">
  <div>
    <p class="kicker">GitHub for Medical Beginners</p>
    <h1>${t.title}</h1>
    <p>${t.subtitle}</p>
  </div>
  <img src="/assets/illustrations/01-learning-map.png" alt="${t.title}" />
</div>

> ${t.sourceNote}

![GitHub Medical Beginner Guide cover](/assets/source/github-medical-beginner-cover.png)

<div class="warm-grid">
${t.cards.map(([title, body]) => `  <div class="warm-card"><h3>${title}</h3><p>${body}</p></div>`).join("\n")}
</div>

## ${t.routeTitle}

${courseLinks(lang, t)}
`,
  );

  writeFile(
    path.join(baseDir, "visual-map.md"),
    `${frontmatter(t.visual.title, t.visual.title)}# ${t.visual.title}

![GitHub framework map](/assets/illustrations/05-readme-release-issues-license.png)

## ${t.visual.learning}

\`\`\`mermaid
flowchart LR
  A["Read repositories"] --> B["Judge quality"]
  B --> C["Download Release or source"]
  C --> D["Ask AI to explain README"]
  D --> E["Reuse for teaching or research"]
  E --> F["Publish safely"]
  F --> G["Issue / PR collaboration"]
\`\`\`

## ${t.visual.evaluating}

\`\`\`mermaid
flowchart TD
  A["Title and summary"] --> B["Clear README"]
  B --> C["Data source and privacy"]
  C --> D["Stars / updates / Issues"]
  D --> E["Release available"]
  E --> F["License allows reuse"]
  F --> G["Medical-use boundary"]
  G --> H{"Decision"}
  H --> I["Study deeply"]
  H --> J["Learn only"]
  H --> K["Watch carefully"]
  H --> L["Avoid"]
\`\`\`

## ${t.visual.publishing}

\`\`\`mermaid
flowchart TD
  A["Create repository"] --> B["Write README"]
  B --> C["Use fictional data"]
  C --> D["Add safety disclaimer"]
  D --> E["Set GitHub Pages"]
  E --> F["Deploy with Actions"]
  F --> G["Check public page"]
\`\`\`

## ${t.visual.relation}

\`\`\`mermaid
flowchart LR
  A["Git: local history"] --> B["Commit"]
  B --> C["Push"]
  C --> D["GitHub: hosting and collaboration"]
  D --> E["Issue / PR / Release / Pages"]
\`\`\`
`,
  );

  writeFile(
    path.join(baseDir, "practice", "index.md"),
    `${frontmatter(t.practice.title, t.practice.intro)}# ${t.practice.title}

![Practice loop](/assets/illustrations/10-practice-loop.png)

${t.practice.intro}

\`\`\`mermaid
flowchart LR
${t.practice.steps.map((step, index) => `  ${String.fromCharCode(65 + index)}["${step}"]${index < t.practice.steps.length - 1 ? ` --> ${String.fromCharCode(66 + index)}["${t.practice.steps[index + 1]}"]` : ""}`).join("\n")}
\`\`\`

## AI prompt template

\`\`\`text
I am a medical learner and not a professional programmer.
Please explain this GitHub project in plain language:
1. What problem does it solve?
2. What files should I read first?
3. Does it involve patient data, privacy, or clinical-use risk?
4. Can I safely use it for learning or teaching?
\`\`\`

## Learning note template

| Field | Notes |
|---|---|
| Project name |  |
| Why I chose it |  |
| What README says |  |
| Safety concerns |  |
| What I learned |  |
`,
  );

  writeFile(
    path.join(baseDir, "resources", "index.md"),
    `${frontmatter(t.resources.title, t.resources.intro)}# ${t.resources.title}

![Reliability checklist](/assets/illustrations/06-reliability-checklist.png)

${t.resources.intro}

## Core terms

| Term | Meaning |
|---|---|
| Repository | A project folder hosted on GitHub |
| README | The first project explanation to read |
| Commit | A saved snapshot of changes |
| Branch | A separate working line |
| Star | Bookmark or show interest |
| Fork | Copy a project to your account |
| Issue | Question, bug report, or suggestion |
| Pull Request | A request to merge changes |
| Release | A formal published version |

## Safety boundary

![Safety boundary](/assets/illustrations/08-safety-boundary.png)

Never upload real patient data, API keys, tokens, passwords, hospital internal materials, .env files, or cloud credentials.
`,
  );

  for (const [file, number, key] of chapterFiles) {
    const title = `${number}. ${t.chapterTitles[key]}`;
    writeFile(
      path.join(chaptersDir, file),
      `${frontmatter(title, title)}# ${title}

![${title}](/assets/illustrations/04-repository-reading-order.png)

${t.chapterSummary}

## Key learning goals

- Understand the GitHub page before downloading anything.
- Check README, Release, Issues, License, data source, and safety notes.
- Use GitHub for learning, teaching, research documentation, and safe collaboration.
- Keep real patient data and secrets out of public repositories.

## Continue

${courseLinks(lang, t)}
`,
    );
  }
}

for (const [lang, t] of Object.entries(locales)) {
  writeLocale(lang, t);
}

console.log(`Generated localized pages for ${Object.keys(locales).join(", ")}.`);

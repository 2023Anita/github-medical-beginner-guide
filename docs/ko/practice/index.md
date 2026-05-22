---
title: "30분 교실 실습"
description: "프로젝트 하나를 찾고 README를 읽고 위험을 확인한 뒤 Star를 누르고 AI에게 설명을 요청하고 학습 기록을 작성합니다."
---

# 30분 교실 실습

![Practice loop](/assets/illustrations/10-practice-loop.png)

프로젝트 하나를 찾고 README를 읽고 위험을 확인한 뒤 Star를 누르고 AI에게 설명을 요청하고 학습 기록을 작성합니다.

```mermaid
flowchart LR
  A["프로젝트 찾기"] --> B["README 읽기"]
  B["README 읽기"] --> C["위험 확인"]
  C["위험 확인"] --> D["Star"]
  D["Star"] --> E["AI 설명"]
  E["AI 설명"] --> F["기록 작성"]
  F["기록 작성"]
```

## AI prompt template

```text
I am a medical learner and not a professional programmer.
Please explain this GitHub project in plain language:
1. What problem does it solve?
2. What files should I read first?
3. Does it involve patient data, privacy, or clinical-use risk?
4. Can I safely use it for learning or teaching?
```

## Learning note template

| Field | Notes |
|---|---|
| Project name |  |
| Why I chose it |  |
| What README says |  |
| Safety concerns |  |
| What I learned |  |

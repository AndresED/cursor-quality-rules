# Cursor Quality Rules

A portable set of rules and configurations to keep a high-quality standard across **JavaScript/TypeScript** projects using **NestJS**.  
This repository also includes workflow rules to improve long-running interactions in Cursor by maintaining an **external session state**.

---

## 📂 Contents

- **cursor-rules.json** → Core generation rules for Cursor (code quality, architecture, testing, security, clean code).
- **.eslintrc.json** → ESLint configuration focused on safety, correctness, and readability.
- **tsconfig.json** → Strict TypeScript settings.
- **jest.config.ts** → Jest config with minimum coverage thresholds.
- **snippets/** → Reusable NestJS snippets (Logger, ValidationPipe, Timing Interceptor).
- **.cursor/SESSION_STATE.md** → External session state file to persist conversation context across multiple turns.

---

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AndresED/cursor-quality-rules.git
   cd cursor-quality-rules
   ```

2. **Copy configuration files** to the root of your project:
   ```bash
   cp cursor-rules.json .cursor/rules/
   cp .eslintrc.json tsconfig.json jest.config.ts ./
   cp -r snippets/ ./
   ```

3. **Install dependencies** in your project:
   ```bash
   npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier --save-dev
   npm install jest ts-jest @types/jest --save-dev
   ```

4. **Enable rules in Cursor**:
   - Open the Command Palette (**Ctrl + Shift + P** / **Cmd + Shift + P** on Mac).
   - Search for `Cursor: Open Rules`.
   - Replace or merge with the content from `cursor-rules.json`.
   - Save.

---

## 🧠 Memory Refresh Rules in Cursor

Long conversations with Cursor can slow down or lose context.  
To prevent this, this repository adds **workflow rules** and a **state file** (`.cursor/SESSION_STATE.md`) that Cursor updates periodically.

### How it works
- **Every ~5 turns** or when context feels stale, Cursor generates/updates a summary in `SESSION_STATE.md`.
- Cursor reads this file before continuing work, ensuring it always has an up-to-date overview of the project.
- The file contains:
  - **Problem / Goal** → Current objective in one line.
  - **Constraints** → Technical and functional limitations.
  - **Decisions (with date)** → Key decisions with timestamp.
  - **Open Items** → Pending questions or tasks.
  - **Next Step** → The single most important next action.
  - **Links / Files of Record** → Quick references to important files or tickets.

### Example `SESSION_STATE.md`
```markdown
# Session State (last updated: 2025-08-09)

## Problem / Goal
- Refactor authentication service to use AWS Cognito.

## Constraints
- Must keep compatibility with existing JWT consumers.
- Follow current NestJS modular structure.

## Decisions (with date)
- [2025-08-08] Use `nestjs-cognito` wrapper for simpler integration.

## Open Items
- [Andres] Confirm if we migrate existing user pool or create a new one.

## Next Step
- Implement Cognito service and write integration tests.

## Links / Files of Record
- /src/modules/auth
- Jira ticket AUTH-243
```

---

## ✅ Benefits

- **Code Quality** → Enforces clean code, architecture boundaries, and testing discipline.
- **Security** → Guards against logging sensitive data and enforces safe patterns.
- **Performance** → Encourages pagination, streaming, and efficient queries.
- **Context Persistence** → Reduces loss of context in Cursor with an external session state.
- **Portability** → Can be cloned and applied in new machines/projects instantly.

---

## 📜 License
MIT License

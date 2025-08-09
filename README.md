# Cursor Quality Rules

A portable set of rules and configurations to keep a high-quality standard across **JavaScript/TypeScript** projects using **NestJS**. Keep this repo as a template to bootstrap new machines and projects quickly.

## Contents
- **cursor-rules.json**: generation rules for Cursor (no emojis/icons anywhere, consistent logging, TypeScript best practices).
- **.eslintrc.json**: ESLint configuration focused on safety, correctness and readability.
- **tsconfig.json**: strict TypeScript settings.
- **jest.config.ts**: Jest config with minimum coverage thresholds.
- **snippets/**: reusable NestJS snippets (Logger, ValidationPipe, Timing Interceptor).

## Quick Start
1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/cursor-quality-rules.git
   cd cursor-quality-rules
   ```
2. Copy the files into a project root (or make this a Git submodule / template repo).
3. Adjust settings as needed for your stack.

## Why this repository?
- Enforces consistent, readable code.
- Reduces common runtime errors by leveraging strict TypeScript and ESLint rules.
- Promotes good testing habits with clear coverage goals.
- Normalizes logging for easier debugging, while protecting sensitive data.

## Recommended usage with Cursor
- Import **cursor-rules.json** into your Cursor rules.
- Keep the **snippets/** folder handy for new NestJS services.
- Treat this repo as your **source of truth** for code quality across machines.

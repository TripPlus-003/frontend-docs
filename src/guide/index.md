---
layout: doc
---

# Getting start

從頭啟動專案

## 環境準備

本地環境需要 [pnpm 7.x+](https://pnpm.io/) 、[Node.js 16.18+](http://nodejs.org/) 和 [Git](https://git-scm.com/)

## 工具配置

本專案建議使用 VSCode 進行開發，專案內以建立相關 VSCode 設定。

以下為推薦的挿件：

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - 自動添加 HTML/XML 結尾標籤
- [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport) - auto import
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - highlight .env 文件
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 程式碼規範
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 程式碼格式化
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - 顯示導入路徑
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - 顯示 tailwind css 語法
- [Nextjs snippets](https://marketplace.visualstudio.com/items?itemName=PulkitGangwar.nextjs-snippets) - Next.js 語法快捷

## 安裝

### 安裝 Node.js

[Node.js](https://nodejs.org/en)

### 安装 pnpm

Node.js > 16 版本

```bash
corepack enable
```

### 安装依賴套件

安装依賴套件

```bash
pnpm install
```

初始化 husky

```bash
pnpm prepare
```

## 環境變數設定

[環境變數設定](/guide/environment)

## Commit

::: tip
使用 commitLint 規範 commit 的格式
:::

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: 持續整合 (Continuous integration)
- **docs**:文件（documentation）
- **feat**: 新增或修改功能（feature）
- **fix**: 修補 bug（bug fix）
- **perf**: 改善效能 (Optimization/performance improvement)
- **refactor**: 重構
  - 不是新增功能，也非修補 bug 的程式碼變動
- **test**: Adding missing tests or correcting existing tests
- **style**: 與格式有關
  - 不影響程式碼運行的變動，例如：white-space, formatting, missing semi colons
- **workflow**: 工作流改善 (Workflow improvements)
- **types**: 改變檔案的類型定義 (Type definition file changes)
- **chore**: maintain
  - 不影響程式碼運行，建構程序或輔助工具的變動，例如修改 config、Grunt Task 任務管理工具
- **revert**: 撤銷回覆先前的 commit

### npm scripts

```json
{
  // 本地執行(dev環境)
  "dev": "next dev",
  // 編譯
  "build": "next build",
  // 啟動編譯後 server
  "start": "next start",
  // 檢查程式碼規範
  "lint": "next lint",
  // 檢查程式碼規範(only staged)
  "lint:lint-staged": "lint-staged",
  // 格式化程式碼
  "format": "prettier --write \"./**/*.{html,tsx,jsx,ts,js,json,md}\"",
  // 初始化 husky
  "prepare": "husky install"
}
```

## Docker

### build

```bash
docker build -t nextjs-docker .
```

### run

```bash
docker run -d -p 80:3000 --name nextjs-docker nextjs-docker
```

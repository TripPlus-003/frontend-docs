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
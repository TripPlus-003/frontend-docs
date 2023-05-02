---
layout: doc
---

# 環境變數設定

`.env.development.local`: 開發階段的環境變數，先於 `.env.local` 讀取。

`.env.production.local`: 編譯階段的環境變數，先於 `.env.local` 讀取。

`.env.local`: 通用環境變數，會覆蓋上述的環境變數

## 前台環境變數

```plain
BASE_API_URL= API 網址路徑
```

## 後台環境變數

```plain
BASE_API_URL= API 網址路徑
REDIRECT_INDEX= 後台根路徑 / 導向位址
```

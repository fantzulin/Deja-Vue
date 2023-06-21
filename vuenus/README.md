# Vuenus

1. Vue3 簡介
    - 2020 年 9 月 18 日，Vue.js 發布 3.0 版本，代號: One Piece(海賊王)
    - 耗時 2 年多、2600+ 次提交、30+ 個 RFC、600+ 次 PR、99 位貢獻者
    - github 上的 tags 地址

2. Vue3 帶來了什麼
    1. 性能的提升
        - 打包大小減少 41%
        - 初次渲染快 55%，更新渲染快 133%
        - 內存減少 54%
        ...
    2. 源碼的升級
        - 使用 Proxy 代替 defineProperty 實現響應式
        - 重寫虛擬 DOM 的實現和 Tree-Shaking
        ...
    3. 其他改變
        - 新的生命週期鉤子
        - data 選項應始終被聲明為一個函數
        - 移除 keyCode 支持作為 v-on 的修飾符
        ...

## 一、創建 Vue3.0 工程
### 1. 使用 vue-cli 創建

```
// 檢查版本，@vue/cli 要在 4.5.0 以上
vue --version
// 安裝或升級 @vue/cli
npm install -g @vue/cli
// 創建 app
vue create app_name
// 啟動
cd app_name
npm run serve

```
### 2. 使用 vite 創建
- 什麼是 vite? 新一代前端構建工具
- 優勢如下:
    - 開發環境中，無須打包操作，可快速的冷啟動。
    - 輕量快速的熱重載(HMR)。
    - 真正的按需編譯，不再等待整個應用編譯完成。
- 傳統構建與 vite 構建對比圖
#### 初次創建專案步驟及修復紀錄

**Step1**

`npm init vite-app vuenus`
```
...
Ok to proceed? (y)
```
`敲 enter`

```
cd vuenus
npm install
```
**Step2**
```
node-forge  <=1.2.1
Severity: high
Prototype Pollution in node-forge debug API. - https://github.com/advisories/GHSA-5rrq-pxf6-6jx5
URL parsing in node-forge could lead to undesired behavior. - https://github.com/advisories/GHSA-gf8q-jrpm-jvxq
Improper Verification of Cryptographic Signature in `node-forge` - https://github.com/advisories/GHSA-2r2c-g63r-vccr
Open Redirect in node-forge - https://github.com/advisories/GHSA-8fr3-hfg3-gpgp
Improper Verification of Cryptographic Signature in node-forge - https://github.com/advisories/GHSA-cfm4-qjh2-4765
Improper Verification of Cryptographic Signature in node-forge - https://github.com/advisories/GHSA-x4jg-mjrx-434g
fix available via `npm audit fix --force`
```
`npm audit fix --force`

**Step3**

`npm run dev`
```
Failed to parse source for import analysis because the content contains invalid JS syntax. Install @vitejs/plugin-vue to handle .vue files.
下午1:09:05 [vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. Install @vitejs/plugin-vue to handle .vue files.
  Plugin: vite:import-analysis
```
`npm i  @vitejs/plugin-vue`

在根目錄新增 `vite.config.js`
```
import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()]
})
```
`npm run dev`

成功運行專案

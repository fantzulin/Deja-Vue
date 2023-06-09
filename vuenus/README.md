# Vuenus

## 1. Vue3 簡介
- 2020 年 9 月 18 日，Vue.js 發布 3.0 版本，代號: One Piece(海賊王)
- 耗時 2 年多、2600+ 次提交、30+ 個 RFC、600+ 次 PR、99 位貢獻者
- github 上的 [tags](https://github.com/vuejs/core/releases)

## 2. Vue3 帶來了什麼
1. 性能的提升
    - 打包大小減少 41%
    - 初次渲染快 55%，更新渲染快 133%
    - 內存減少 54%
    - ...
2. 源碼的升級
    - 使用 Proxy 代替 defineProperty 實現響應式
    - 重寫虛擬 DOM 的實現和 Tree-Shaking
    - ...
3. 其他改變
    - 新的生命週期鉤子
    - data 選項應始終被聲明為一個函數
    - 移除 keyCode 支持作為 v-on 的修飾符
    - ...

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
![vite](https://github.com/fantzulin/Deja-Vue/assets/21350358/e9622723-cd01-4ead-99ff-5501a22bc150)

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
## 二、常用 Composition API
[官方文檔](https://cn.vuejs.org/guide/extras/composition-api-faq.html)
### 1. 拉開序幕的 setup
1. 理解: Vue3.0 中一個新的配置項，值為一個函數。
2. setup 是所有 Composition API(組合 API)"表演的舞台"。
3. 組件中所用到的: 數據、方法等等，均要配置在 setup 中。
4. setup 函數的兩種返回值:
    - 若返回一個對象，則對象中的屬性、方法，在模板中均可以直接使用。(重點關注!)
    - 若返回一個渲染函數: 則可以自定義渲染內容。(了解)
5. 注意點:
    - 盡量不要與 Vue2.x 配置混用
        - Vue2.x 配置(data、methods、computed...)中可以訪問到 setup 中的屬性、方法。
        - 但在 setup 中不能訪問到  Vue2.x 配置(data、methods、computed...)。
        - 如果有重名，setup 優先。
    - setup 不能是一個 async 函數，因為返回值不再是 return 的對象，而是 promise，模板看不到 return 對象中屬性。(後期也可以返回一個 Promise 實例，但需要 Suspense 和異步組件的配合)
### 2. ref 函數
- 作用: 定義一個響應式的數據
- 語法: `const xxx = ref(initValue)`
    - 創建一個包含響應式數據的**引用對象(reference 對象)**
    - JS 中操作數據: `xxx.value`
    - 模板中讀取數據: 不需要.value，直接: `<div>{{ xxx }}</div>`
- 備註:
    - 接收的數據可以是: 基本類型、也可以是對象類型。
    - 基本類型的數據: 響應式依然是靠 `Object.defineProperty()` 的 `get` 與 `set` 完成的。
    - 對象類型的數據: 內部 "求助" 了 Vue3.0 中的一個新函數 — `reactive` 函數。

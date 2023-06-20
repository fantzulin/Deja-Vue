# Vuenus

## 初次創建專案步驟及修復紀錄

### Step1
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

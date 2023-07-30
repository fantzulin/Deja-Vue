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

### 3. reactive 函數
- 作用: 定義一個**對象類型**的響應式數據(基本類型不要用它，要用 `ref` 函數)
- 語法: `const 代理對象 = reactive(源對象)` 接收一個對象(或數組)，返回一個**代理對象(Proxy 的實例對象，簡稱 proxy 對象)**
- reactive 定義的響應式數據是 "深層次的"。
- 內部基於 ES6 的 proxy 實現，通過代理對象操作源對象內部數據進行操作。

### 4. Vue3.0 中的響應式原理
#### vue2.x 的響應式
- 實現原理:
    - 對象類型: 通過 `Object.defineProperty()` 對屬性的讀取、修改進行攔截(數據劫持)。
    - 數組類型: 通過重寫更新數組的一系列方法來實現攔截。(對數組的變更方法進行了包裹)。
    ```
    Object.defineProperty(data, 'count, {
        get() {},
        set() {}
    })
    ```
- 存在問題:
    - 新增屬性、刪除屬性，介面不會更新。
    - 直接通過下標修改數組，介面不會自動更新。

#### vue3.0 的響應式
- 實現原理:
    - 通過 Proxy(代理): 攔截對象中任意屬性的變化，包括: 屬性值的讀寫、屬性的添加、屬性的刪除等。
    - 通過 Reflect(反射): 對源對象的屬性進行操作。
    - MDN文檔中描述的 Proxy 與 Reflect:
        - [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
        - [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
        ```
        new Proxy(data, {
            // 攔截讀取屬性值
            get(target, prop) {
                return Reflect.get(target, prop)
            },
            // 攔截設置屬性值或添加新屬性
            set(target, prop, value) {
                return Reflect.set(target, prop, value)
            },
            //攔截刪除屬性
            deleteProperty(target, prop) {
                return Reflect.deleteProperty(target, prop)
            }
        })

        proxy.name = 'tom'
        ```
### 5. reactive 對比 ref
- 從定義數據角度對比: 
    - ref 用來定義: **基本類型數據。**
    - reactive 用來定義: **對象 (或數組) 類型數據。**
    - 備註: ref 也可以用來定義 **對象 (或數組) 類型數據**，它內部會自動通過 `reactive` 轉為 **代理對象**。
- 從原理角度對比:
    - ref 通過 `Object.defineProperty()` 的 `get` 與 `set` 來實現響應式(數據劫持)。
    - reactive 通過使用 **Proxy** 來實現響應式(數據劫持)，並通過 **Reflect** 操作 **源對象** 內部的數據。
- 從使用角度對比:
    - ref 定義的數據: 操作數據 **需要** `.value`，讀取數據時模板中直接讀取 **不需要** `.value`。
    - reactive 定義的數據: 操作數據與讀取數據: **均不需要** `.value`。
### 6. setup 的兩個注意點
- setup 執行的時機
    - 在 beforeCreate之前執行一次，this 是 `undefined`。
- setup 的參數
    - props: 值為對象，包含: 組件外部傳遞過來，且組件內部聲明接收了的屬性。
    - context: 上下文對象
        - attrs: 值為對象，包含: 組件外部傳遞過來，但沒有在 props 配置中聲明的屬性，相當於 `this.$attrs`。
        - slots: 收到的插槽內容，相當於 `this.$slot`。
        - emit: 分發自定義事件的函數，相當於 `this.$emit`。
### 7. 計算屬性與監視
1. computed 函數
    - 與 Vue2.x 中 computed 配置功能一致
    - 寫法
    ```
    import { computed } from 'vue'
    
    setup() {
        ...
        // 計算屬性—簡寫
        let fullName = computed(()=>{
            return person.last_name + ',' + person.first_name
        })
        // 計算屬性—完整
        let fullName = computed({
            get() {
                return person.last_name + ',' + person.first_name
            },
            set(value) {
                const nameArr = value.split(',')
                person.last_name = nameArr[0]
                person.first_name = nameArr[1]
            }
        })
    }
    ```
2. watch 函數
    - 與 Vue2.x 中 watch 配置功能一致
    - 兩個小 "坑":
        - 監視 reactive 定義的響應式數據時: oldValue 無法正確獲取、強制開啟了深度監視(deep 配置失效)。
        - 監視 reactive 定義的響應式數據中某個屬性時: deep 配置有效。
    ```
    // 情況一: 監視 ref 所定義的一個響應式數據
    watch(sum, (newValue, oldValue)=>{
        console.log(`sum 變了, newValue: ${newValue}, oldValue: ${oldValue}`)
    }, { immediate: true })

    // 情況二: 監視 ref 所定義的多個響應式數據
    watch([sum, msg], (newValue, oldValue)=>{
        console.log(`sum 或 msg 變了, newValue: ${newValue}, oldValue: ${oldValue}`)
    }, { immediate: true })

    /*
        情況三: 監視 reactive 所定義的一個響應式數據的全部屬性
            1. 注意: 此處無法正確的獲取 oldValue
            2. 注意: 強制開啟了深度監視 (deep 配置無效)
    */
    watch(person, (newValue, oldValue)=>{
        console.log("person 變化了", newValue, oldValue)
    }, { deep: false }) // 此處的 deep 配置無效

    // 情況四: 監視 reactive 所定義的一個響應式數據中的某個數據
    watch(()=>person.name, (newValue, oldValue)=>{
        console.log("person 的 name 變化了", newValue, oldValue)
    })

    // 情況五: 監視 reactive 所定義的一個響應式數據中的某些數據
    watch([()=>person.name, ()=>person.age], (newValue, oldValue)=>{
        console.log("person 的 name 或 age 變化了", newValue, oldValue)
    })

    // 特殊情況
    watch(()=>person.job, (newValue, oldValue)=>{
        console.log("person 的 job 變化了", newValue, oldValue)
    }, { deep: true }) // 此處由於監視的是 reactive 所定義的對象中的某個屬性，所以 deep 配置有效
    
    ```
3. watchEffect 函數
    - watch 的套路是: 既要指明監視的屬性，也要指明監視的回調。
    - watchEffect 的套路是: 不用指明監視哪個屬性，監視的回調中用到哪個屬性，那就監視哪個屬性。
    - watchEffect 有點像 computed:
        - 但 computed 注重的計算出來的值(回調函數的返回值)，所以必須要寫返回值。
        - 而 watchEffect 更注重的是過程(回調函數的函數體)，所以不用寫返回值。
    ```
    // watchEffect 所指定的回調中用到的數據只要發生變化，則直接重新執行回調。
    watchEffect(()=>{
        const x1 = sum.value
        const x2 = person.job.first.salary
        console.log("watchEffect 所指定的回調執行了")
    })
    ```
### 8. 生命週期
![lifecycle](https://github.com/fantzulin/Deja-Vue/assets/21350358/1ea60c98-964a-4178-a36b-c9eb0b485204)

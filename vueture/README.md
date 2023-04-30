# 筆記

## 腳手架文件結構:
    ├── node_modules
    ├── public
    │   ├── favicon.ico: 頁籤 icon
    │   └── index.html: 主頁面
    ├── src
    │   ├── assets: 存放靜態資源
    │   │   └── logo.png
    │   ├── component: 存放組件
    │   │   └── HelloWorld.vue
    │   ├── App.vue: 匯總所有組件
    │   ├── main.js: 入口文件
    ├── .gitignore: git 版本控制忽略配置
    ├── babel.config.js: babel 的配置文件
    ├── package.json: 應用包配置文件
    ├── README.md: 應用描述文件
    ├── package-lock.json: 資源包版本控制文件

## 關於不同版本的 Vue: 
- vue.js 與 vue.runtime.xxx.js 的區別:
    (1). vue.js 是完整版的 Vue，包含: 核心功能 + 模板解析器。
    (2). vue.runtime.xxx.js 是運行版的 Vue，只包含: 核心功能，沒有模板解析器。
- 因為 vue.runtime.xxx.js 沒有模板解析器，所以不能使用 template 配置項，需要使用 render 函數接收到的 createElement 函數去指定具體內容。

## vue.vonfig.js 配置文件:
>  使用 vue inspect > output.js 可以查看到 Vue 腳手架的默認配置。
>  使用 vue.vonfig.js 可以對腳手架進行個人化定制，詳情見: vue cli org

## ref 屬性:
    1. 被用來給元素或子組件註冊引用信息 ( id 的替代者)
    2. 應用在 html 標籤上獲取的是真實 DOM 元素，應用在組件標籤上是組件實例對象 (vc)
    3. 使用方式:
        打標示: <h1 ref="xxx">...</h1> 或 <School ref="xxx"></School>
        獲取: this.$ref.xxx

## 配置項 props:
    功能: 讓組件接收外部傳過來的數據
        (1). 傳遞數據:
            <Demo name="xxx"/>
        (2). 接收數據:
            第一種方式 (只接收):
                props: ['name']
            第二種方式 (限制類型):
                props: {
                    name: Number
                }
            第三種方式 (限制類型、限制必要性、指定默認值):
                props: {
                    name: {
                        type: String, // 類型
                        required: true, // 必要性
                        default: 'Chris' // 默認值
                    }
                }
    備註: props 是只讀的，Vue 底層會監測你對 props 的修改，如果進行了修改，就會發出警告，如果需要修改，那請複製 props 的內容到 data 中一份，然後去修改 data 中的數據。

## mixin(混入):
    功能: 可以把多個組件共用的配置提取成一個混入對象
    使用方式:
        第一步定義混合，例如:
            {
                data(){...},
                methods:{...}
                ...
            }
        第二步使用混入，例如:
            (1). 全局混入: Vue.mixin(xxx)
            (2). 局部混入: mixins: ['xxx']

## 插件
    功能: 用於增強 Vue
    本質: 包含 install 方法的一個對象，install 的第一個參數是 Vue，第二個以後的參數是插件使用者傳遞的數據。
    定義插件:
        對象.installl = function (Vue, options) {
            // 1. 添加全局過濾器
            Vue.filter(...)

            // 2. 添加全局指令
            Vue.directive(...)

            // 3. 配置全局混入(合)
            Vue.mixin(...)

            // 4. 添加實例方法
            Vue.prototype.$myMethod = function () {...}
            Vue.prototype.$myProperty = xxx
        }
    使用插件: Vue.use()

## scoped 樣式
    作用: 讓樣式在局部生效，防止衝突。
    寫法: <style scoped>
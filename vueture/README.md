# Vueture

## 總結 TodoList 案例

1. 組件化編碼流程:

    1. 拆分靜態組件: 組件要按照功能點拆分，命名不要與 html 元素衝突。
    2. 實現動態組件: 考慮好數據的存放位置，數據是一個組件在用，還是一些組件在用:
        1. 一個組件在用: 放在組件自身即可。
        2. 一些組件在用: 放在他們共同的父組件上 (狀態提升)
    3. 實現交互: 從綁定事件開始。

2. props 適用於:

    (1). 父組件 ===> 子組件 通信
    
    (2). 子組件 ===> 父組件 通信 (要求父先給子一個函數)

3. 使用 v-model 時要切記: v-model 綁定的值不能是 props 傳過來的值，因為 props 是不可以修改的!

4. props 傳過來的若是對象類型的值，修改對象中的屬性時 Vue 不會報錯，但不推薦這樣做。

## webStorage

1. 存儲內容大小一般支持 5M 左右(不同瀏覽器可能不一樣)

2. 瀏覽器通過 Window.sessionStorage 和 Window.localStorage 屬性來實現本地存儲機制。

3. 相關 API:

    1. xxxStorage.setItem('key', 'value');

        該方法接受一個鍵和值作為參數，會把鍵值對添加到存儲中，如果鍵名存在，則更新對應的值。

    2. xxxxStorage.getItem('key');

        該方法接受一個鍵名作為參數，返回鍵名對應的值。

    3. xxxStorage.removeItem('key');

        該方法接受一個鍵名作為參數，並把該鍵名從存儲中刪除。

    4. xxxStorage.clear()

        該方法會清空存儲中的所有數據。

4. 備註:

    1. SessionStorage 存儲的內容會隨著瀏覽器窗口關閉而消失。
    
    2. LocalStorage 存儲的內容，需要手動清除才會消失。
    
    3. xxxStorage.getItem(xxx) 如果 xxx 對應的 value 獲取不到，那麼 getItem 的返回值是 null。
    
    4. JSON.parse(null) 的結果依然是 null。

## 組件的自定義事件

1. 一種組件間通信的方式，適用於：子組件 ===> 父組件

2. 使用場景：A 是父組件，B 是子組件，B 想給 A 傳數據，那麼就要在 A 中給 B 綁定自定義事件(事件的回調在 A 中)。

3. 綁定自定義事件：
    
    1. 第一種方式，在父組件中：`<Demo @funName="test"/>` 或 `<Demo v-on:funName="test"/>`

    2. 第二種方式，在父組件中：

        
        <Demo ref="theName"/>
        ......
        mounted() {
            this.$refs.theName$on('funName', this.test)
        }
        

    3. 若想讓自定義事件只能觸發一次，可以使用 `once` 修飾符，或 `$once` 方法。

4. 觸發自定義事件：`this.$emit('funName', 數據)`

5. 解綁自定義事件：`this.$off('funName')`

6. 組件上也可以綁定 DOM 事件，需要使用 `native` 修飾符

7. 注意：通過 `this.$ref.theName$on('funName', 回調)`綁定自定義事件時，回調要麼配置在 methods 中，要麼用箭頭函數，否則 this 指向會出問題!

## 全局事件總線(GlobalEventBus)

1. 一種組件間通信的方式，適用於**任意組件間通信**

2. 安裝全局事件總線

        new Vue({
            ...
            beforeCreate() {
                Vue.prototype.$bus = this // 安裝全局事件總線，$bus 就是當前應用的 vm
            },
            ...
        })

3. 使用事件總線:

    1. 接收數據：A 組件想接收數據，則在 A 組件中給 $bus 綁定自定義事件，事件的 **回調留在 A 組件自身。**

        methods() {
            demo(data) {...}
        }
        ...,
        mounted() {
            this.$bus.$on('xxx', this.demo)
        }

    2. 提供數據： `this.$bus.$emit('xxx', 數據)`

4. 最好在 beforeDestroy 鉤子中，用 $off 去解綁**當前組件所用到的**事件。

## 消息訂閱與發佈 (pubsub)

1. 一種組件間通信的方式，適用於任意組件間通信。

2. 使用步驟：

    1. 安裝 pubsub: `npm i pubsub-js`
    
    2. 引入： `import pubsub from 'pubsub-js'`
    
    3. 接收數據：A 組件想接收數據，則在 A 組件中訂閱消息，訂閱的**回調留在 A 組件自身。**
    
            methods() {
                demo(data){...}
            }
            ...
            mounted() {
                this.pid = pubsub.subscribe('xxx', this.demo) // 訂閱消息
            }

    4. 提供數據： `pubsub.publish('xxx', 數據)`
    
    5. 最好在 beforeDestroy 鉤子中，用 `pubsub.unsubscribe(pid)` 去**取消訂閱**

## nextTick

1. 語法：`this.$nextTick(回調函數)`

2. 作用：在下一次 DOM 更新結束後執行其指定的回調。

3. 什麼時候用：當改變數據後，要基於更新後的新 DOM 進行某些操作時，要在 nextTick 所指定的回調函數中執行。

## Vue 封裝的過度與動畫

1. 作用：在插入、更新或移除 DOM 元素時，在合適的時候元素添加樣式類名。

2. 圖示：

![transition.png](/vueture/17_src_transition_and_animation/transition.png)

3. 寫法：

    1. 準備好樣式：

    * 元素進入的樣式：
        * v-enter：進入的起點
        * v-enter-active：進入過程中
        * v-enter-to：進入的終點
    * 元素離開的樣式：
        * v-leave：離開的起點
        * v-leave-active：離開過程中
        * v-leave-to：離開的終點
    
    2. 使用 `<transition>` 包裹要過度的元素，並配置 name 屬性：

        <transition name="hello">
            <h1 v-show="isShow">Hello~</h1>
        </transition>

    3. 備註：若有多個元素需要過度，則需要使用：`<transition-group>`，且每個元素都要指定 `key` 值。

## vue 腳手架配置代理

### 方法一

在 vue.config.js 中添加如下配置：

    devServer: {
        proxy: "http://localhost:5000"
    }

說明：

1. 優點：配置簡單，請求資源時直接發給前端(8080)即可。

2. 缺點：不能配置多個代理，不能靈活的控制請求是否走代理

3. 工作方式：若按照上述配置代理，當請求了前端不存在的資源時，那麼該請求會轉發給服務器(優先匹配前端資源)

### 方法二

編寫 vue.config.js 配置具體代理規則：

    module.exports = {
        deServer: {
            proxy: {
                '/api': { // 匹配所有以 '/api' 開頭的請求路徑
                    target: 'http://localhost:5000', // 代理目標的基礎路徑
                    pathRewrite: {'^/api': ''},
                    ws: true, // 用於支持 websocket
                    changeOrigin: true, // 用於控制請求頭中的 host 值
                },
                '/other_api': {
                    target: 'http://localhost:5001',
                    pathRewrite: {'^/other_api': ''},
                    ws: true,
                    changeOrigin: true,
                },
            }
        }
    }

## 插槽

1. 作用：讓父組件可以向子組件指定位置插入 html 結構，也是一種組件間通信的方式，適用於**父組件 ===> 子組件**。

2. 分類：默認插槽、具名插槽、作用域插槽

3. 使用方式：
    
    1. 默認插槽：

            父組件中，
                <Category>
                    <div>html結構</div>
                </Category>
            子組件中，
                <template>
                    <div>
                        <!-- 定義插槽 -->
                        <slot>插槽默認內容</slot>
                    </div>
                </template>
    
    2. 具名插槽：

            父組件中，
                <Category>
                    <template slot="content">
                        <div>html結構</div>
                    </template>
                    <template v-slot=:footer>
                        <div>html結構</div>
                    </template>
                </Category>
            子組件中，
                <template>
                    <div>
                        <!-- 定義插槽 -->
                        <slot name="content">插槽默認內容</slot>
                        <slot name="footer">插槽默認內容</slot>
                    </div>
                </template>

    3. 作用域插槽：
        
        1. 理解：**數據在組件的自身，但根據數據生成的結構需要組件的使用者來決定，**(games 數據在 Category 組件中，但使用數據所遍歷出來的結構由 App 組件決定)

        2. 具體編碼：

                父組件中，
                    <Category>
                        <template scope="scopeData">
                            <!-- 生成的是 ul 列表 -->
                            <ul>
                                <li v-for="g in scopeData.games" :key="g">{{ g }}</li>
                            </ul>
                        </template>
                    </Category>
                    <Category>
                        <template slot-scope="scopeData">
                            <!-- 生成的是 h4 列表 -->
                            <h4 v-for="g in scopeData.games" :key="g">{{ g }}</h4>
                        </template>
                    </Category>
                子組件中，
                    <template>
                        <div>
                            <slot :games="games"></slot>
                        </div>
                    </template>
                    <script>
                        export default {
                            name: 'Category',
                            props: ['title'],
                            // 數據在子組件自身
                            data() {
                                return {
                                    games: ['game1', 'game2', 'game3']
                                }
                            },
                        }
                    </script>
## Vuex

1. 概念

    在 Vue 中實現集中式狀態(數據)管理的一個 Vue 插件，對 vue 應用中多個組件的共享狀態進行集中式的管理(讀/寫)，也是一種組件間通信的方式，且適用於任意組件間通信。

2. 何時使用?

    多個組件需要共享數據時

3. 搭建 vuex 環境

    1. 創建文件: `src/store/index.js`

            // 引入 vue 核心
            import Vue from 'vue'
            // 引入 Vuex
            import Vuex from 'vuex'
            // 應用 Vuex插件
            Vue.use(Vuex)

            // 準備 actions 對象 — 響應組建中用戶的動作
            const actions = {}
            // 準備 mutations 對象 — 修改 state 中的數據
            const mutations = {}
            // 準備 state 對象 — 保存具體的數據
            const state = {}

            //創建並暴露(導出) store
            export default new Vuex.Store({
                actions,
                mutations,
                state,
            })

    2. 在 `main.js` 中創建 vm 時傳入 `store` 配置項

            ...
            // 引入 store
            import store from './store'
            ...

            // 創建 vm
            new Vue({
                el: '#app',
                render: h => h(App),
                store
            })
    
4. 基本使用

    1. 初始化數據、配置 `actions`、配置 `mutations`，操作文件 `store.js`

            // 引入 vue 核心
            import Vue from 'vue'
            // 引入 Vuex
            import Vuex from 'vuex'
            // 應用 Vuex插件
            Vue.use(Vuex)

            const actions = {
                // 響應組件中加的動作
                plus(miniStore, value) {
                    miniStore.commit('Plus', value)
                }
            }

            const mutations = {
                // 執行加
                Plus(state, value) {
                    state.sum += value
                }
            }

            // 初始化數據
            const state = {
                sum: 0
            }

            //創建並暴露(導出) store
            export default new Vuex.Store({
                actions,
                mutations,
                state,
            })

    2. 組件中讀取 vuex 中的數據: `$store.state.sum`

    3. 組件中修改 vuex 中的數據: `$store.dispatch('action 中的方法名', 數據)` 或 `$store.commit('mutations 中的方法名', 數據)`

    **備註:若沒有網路請求或其他業務邏輯，組件中也可以越過 actions，即不寫 `dispatch`，直接編寫 `commit`**

5. getters 的使用

    1. 概念：當 state 中的數據需要經過加工後再使用時，可以使用 getters 加工。

    2. 在 `store.js` 中追加 `getters` 配置

            ...

            const getters = {
                bigSum(state) {
                    return state.sum*10
                }
            }

            // 創建並暴露 store
            export default new Vuex.Store({
                ...
                getters
            })
    
    3. 組件中讀取數據: `$store.getters.bigSum`

6. 四個 map 方法的使用

    1. mapState 方法: 用於幫助我們映射 `state` 中的數據為計算屬性

            computed: {
                // 借助 mapState 生成計算屬性，sum、school、subject(對象寫法)
                ...mapState({
                    sum: 'sum',
                    school: 'school',
                    subject: 'subject',
                })

                // 借助 mapState 生成計算屬性，sum、school、subject(數組寫法)
                ...mapState(['sum', 'school', 'subject'])
            }

    2. mapGetters 方法: 用於幫助我們映射 `getters` 中的數據為計算屬性

            computed: {
                // 借助 mapGetters 生成計算屬性，bigSum(對象寫法)
                ...mapGetters({bigSum: 'bigSum'}),

                // 借助 mapGetters 生成計算屬性，bigSum(數組寫法)
                ...mapGetters(['bigSum'])
            }

    3. mapActions 方法: 用於幫助我們生成與 `actions` 對話的方法，即: 包含 `$store.dispatch(xxx)` 的函數

            methods: {

                // 靠 mapActions 生成，addOdd、addWait(對象形式)
                ...mapActions({
                    addOdd: 'plusOdd',
                    addWait: 'plusWait'
                }),

                // 靠 mapActions 生成，plusOdd、plusWait(數組形式)
                ...mapActions(['plusOdd', 'plusWait'])
            }

    4. mapMutations 方法: 用於幫助我們生成與 `mutations` 對話的方法，即: 包含 `$store.commit(xxx)` 的函數

            methods: {

                // 靠 mapMutations 生成，addOdd、addWait(對象形式)
                ...mapMutations({
                    addOdd: 'plusOdd',
                    addWait: 'plusWait'
                }),

                // 靠 mapMutations 生成，plusOdd、plusWait(數組形式)
                ...mapMutations(['plusOdd', 'plusWait'])
            }

**備註: mapAction 與 mapMutations 使用時，若需要傳遞參數需要: 在模板中榜定事件時傳遞好參數，否則參數是事件對象。**

7. 模塊化 + 命名空間

    1. 目的: 讓代碼更好維護，讓多種數據分類更加明確。

    2. 修改 `index.js`

            const countAbout = {
                namespaced: true, // 開啟命名空間
                actions:{ // 響應組件中用戶的動作 },
                mutations:{ // 用來修改 state 中的數據},
                state:{ // count view 會用到的數據 },
                getters:{
                    // 加工 state 的數據
                    bigSum(state) {
                        return state.sum*10
                    }
                },
            }

            const personAbout = {
                namespaced: true, // 開啟命名空間
                actions:{ ... },
                mutations:{ ...},
                state:{ ... },
            }

            export default new Vuex.Store({
                modules: {
                    countAbout,
                    personAbout
                }
            })

    3. 開啟命名空間後，組件中讀取 state 數據:

            // 方式一，自己直接讀取
            this.$store.state.personAbout.personList
            // 方式二，借助 mapState 讀取
            ...mapState('personAbout', ['personList'])

    4. 開啟命名空間後，組件中讀取 getters 數據:

            // 方式一，自己直接讀取
            this.$store.getters['personAbout/firstPersonName']
            // 方式二，借助 mapGetters 讀取
            ...mapGetters('countAbout',['bigSum'])
    
    5. 開啟命名空間後，組件中調用 dispatch

            // 方式一，自己直接 dispatch
            this.$store.dispatch('personAbout/addPersonFan', personObj)
            // 方式二，借助 mapActions
            ...mapActions('countAbout',['plusOdd', 'plusWait'])

    6. 開啟命名空間後，組件中調用 commit

            // 方式一，自己直接 commit
            this.$store.commit('personAbout/ADD_PERSON', personObj)
            // 方式二，借助 mapMutations
            ...mapMutations('countAbout',{
                add: 'Plus',
                minus: 'Minus'
            })

## vue-router

### 相關理解

#### vue-router 的理解

    vue 的一個插件庫，專門用來實現 SPA 應用。
    
#### 對 SPA 應用的理解

1. 單頁 Web 應用 (Single page web application, SPA)。

2. 整個應用只有 **一個完整的頁面**。

3. 點擊頁面中的導航連結 **不會刷新** 頁面，只會做頁面的 **局部更新**。

4. 數據需要通過 ajax 請求獲取。
    
#### 路由的理解

1. 什麼是路由?

    1. 一個路由就是一組映射關係(key - value)。
    2. key 為路徑，value 可能是 function 或 component。

2. 路由分類
    
    1. 後端路由:
        1. 理解: value 是 function，用於處理客戶端提交的請求。
        2. 工作過程: 服務器接收到一個請求時，根據 **請求路徑** 找到匹配的 **函數** 來處理請求，返回響應數據。
    2. 前端路由:
        1. 理解: value 是 component，用於展示頁面內容。
        2. 工作過程: 當瀏覽器的路徑改變時，對應的組件就會顯示。

## 路由

1. 一個路由 (route) 就是一組映射關係 (key - Value)，多個路由需要路由器 (router) 進行管理。
2. 前端路由: key 是路徑，value 是組件。
    
### 基本使用

1. 安裝 vue-router，命令: `npm i vue-router` // vue2 要安裝 vue-router@3
2. 應用插件: `Vue.use(vueRouter)`
3. 編寫 router 配置項:

        // 引入 VueRouter
        import VueRouter from "vue-router";
        // 引入組件
        import About from '../components/About'
        import Home from '../components/Home'

        // 創建 router 實例對象，去管理一組一組的路由規則
        export default new VueRouter({
            routes: [
                {
                    path: '/about',
                    component: About
                },
                {
                    path: '/home',
                    component: Home
                },
            ]
        })
        
4. 實現切換 (active-class 可配置高亮樣式)

        <router-link active-class="active" to="/about">About</router-link>
        
5. 指定展示位置

        <router-view></router-view>

### 幾個注意點

1. 路由組件通常存放在 `pages` 文件夾，一般組件通常存放在 `components` 文件夾。
2. 通過切換，"隱藏" 了的路由組件，默認是被銷毀的，需要的時候再去掛載。
3. 每個組件都有自己的 `$route` 屬性，裡面存儲著自己的路由信息。
4. 整個應用只有一個 router，可以通過組件的 `$route` 屬性獲取到。

### 多級路由

1. 配置路由規則，使用 children 配置項:

        routes: [
            {
                path: '/about',
                component: About
            },
            {
                path: '/home',
                component: Home,
                children: [ // 通過 children 配置子級路由
                    {
                        path: 'news', //此處一定不要寫，/news
                        component: News,
                    },
                    {
                        path: 'message', //此處一定不要寫，/message
                        component: Message,
                    }
                ]
            },
        ]

2. 跳轉(要寫完整路徑):

        <router-link class="nav-link" active-class="active" to="message">Message</router-link>

### 路由的 query 參數

1. 傳遞參數

        <!-- 跳轉路由並攜帶 query 參數，to 的字符串寫法 -->
        <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>

        <!-- 跳轉路由並攜帶 query 參數，to 的對象寫法 -->
        <router-link :to="{
            path: '/home/message/detail',
            query: {
                id: m.id,
                title: m.title
            }
        }">
            {{ m.title }}
        </router-link>

2. 接收參數:

        $route.query.id
        $route.query.title

### 命名路由

1. 可以簡化路由的跳轉。 
2. 如何使用
    
    1. 給路由命名:

            {
                path: '/home',
                component: Home,
                children: [
                    {
                        path: 'message',
                        component: Message,
                        children: [
                            {
                                name: 'detailRoute', // 給路由命名
                                path: 'detail',
                                component: Detail,
                            }
                        ]
                    }
                ]
            }

    2. 簡化跳轉:

            <!-- 簡化前，需要寫完整的路徑 -->
            <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>

            <!-- 簡化後，直接通過名字跳轉 -->
            <router-link :to="{
                name: 'detailRoute',
                query: {
                    id: m.id,
                    title: m.title
                }
            }">
                {{ m.title }}
            </router-link>

### 路由的 params 參數

1. 配置路由，聲明接收 params 參數

        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detailRoute', // 給路由命名
                            path: 'detail',
                            component: Detail,
                        }
                    ]
                }
            ]
        }

2. 傳遞參數

        <!-- 跳轉路由並攜帶 params 參數，to 的字符串寫法 -->
        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>

        <!-- 跳轉路由並攜帶 params 參數，to 的對象寫法 -->
        <router-link :to="{
            name: 'detailRoute',
            params: {
                id: m.id,
                title: m.title
            }
        }">
            {{ m.title }}
        </router-link>

**特別注意: 路由攜帶 params 參數時，若使用 to 的對象寫法，則不能使用 path 配置項，必須使用 name 配置!**

3. 接收參數
        
        $route.params.id
        $route.params.title

### 路由的 props 配置
作用: 讓路由組件更方便的收到參數

        {
            name: 'detailRoute',
            path: 'detail',
            component: Detail,
            // props 的第一種寫法，值為對象，該對象中的所有 key、value 都會以 props 的形式傳給 Detail 組件。
            /* props: {
                a: 1,
                b: 2
            } */

            // props 的第二種寫法，值為布爾值，若布爾值為真，就會把該組件收到的所有 params 參數，以 props 的形式傳給 Detail 組件。
            // props: true

            // props 的第三種寫法，值為函數，
            props($route) {
                return {
                    id: $route.query.id,
                    title: $route.query.title
                }
            }
        }

### `<router-link>` 的 replace 屬性
1. 作用: 控制路由跳轉時操作瀏覽器歷史記錄的模式
2. 瀏覽器的歷史記錄有兩種寫入方式: 分別為 `push` 和 `replace`，`push` 是替換當前記錄，路由跳轉時候默認為 `push`
3. 如何開啟 `replace` 模式: `<router-link replace ...>News</router-link>`

### 編程式路由導航

1. 作用: 不借助 `<router-link>` 實現路由跳轉，讓路由跳轉更加靈活
2. 具體編碼:
        
        // $router 的兩個 API
        this.$router.push({
            name: 'detailRoute',
            query: {
                id: xxx,
                title: xxx
            }
        })

        this.$router.replace({
            name: 'detailRoute',
            query: {
                id: xxx,
                title: xxx
            }
        })

        this.$router.forward() // 前進

        this.$router.back() // 後退

        this.$router.go() // 可前進(傳入正的數值)也可後退(傳入負的數值)

### 緩存路由組件

1. 作用: 讓不展示的路由組件保持掛載，不被銷毀。
2. 具體編碼:

        <keep-alive include="News">
            <router-view></router-view>
        </keep-alive>

### 兩個新的生命週期鉤子

1. 作用: 路由組件所獨有的兩個鉤子，用於捕獲路由組件的激活狀態。
2. 具體名字:

    1. `activated` 路由組件被激活時觸發。
    2. `deactivated` 路由組件失活時觸發。

### 路由守衛

1. 作用: 對路由進行權限控制
2. 分類: 全局守衛、獨享守衛、組件內守衛
3. 全局守衛:

        // 全局前置路由守衛，初始化的時候被調用、每次路由切換之前被調用
        router.beforeEach((to, from, next) => {
            console.log('前置路由守衛', to, from)
            if (to.meta.isAuth) { // 判斷是否需要權限
                if (localStorage.getItem('level') === 'master') {
                    next()
                } else {
                    console.log('權限不夠')
                }
            } else {
                next()
            }
            
        })

        // 全局後置路由守衛，初始化的時候被調用、每次路由切換之後被調用
        router.afterEach((to, from) => {
            console.log('後置路由守衛', to, from)
            document.title = to.meta.title || 'Vueture' // 修改網頁的 title
        })
4. 獨享守衛:

        beforeEnter: (to, from, next) => {
            console.log('前置路由守衛', to, from)
            if (to.meta.isAuth) { // 判斷是否需要權限
                if (localStorage.getItem('level') === 'master') {
                    next()
                } else {
                    console.log('權限不夠')
                }
            } else {
                next()
            }
        }
5. 組件內守衛:

        // 進入守衛，通過路由規則，進入該組件時被調用
        beforeRouteEnter (to, from, next) {
        },
        // 離開守衛，通過路由規則，離開該組件時被調用
        beforeRouteLeave (to, from, next) {
        }

### 路由器的兩種工作模式

1. 對於一個 url 來說，什麼是 hash 值? ___# 及其後面的內容就是 hash 值。
2. hash 值不會包含在 HTTP 請求中，即: hash 值不會帶給服務器。
3. hash 模式:
    1. 地址中永遠帶著 # 號，不美觀。
    2. 若以後將地址通過第三方手機 app 分享，若 app 校驗嚴格，則地址會被標記為不合法。
    3. 兼容性較好。
4. history 模式:
    1. 地址乾淨、美觀。
    2. 兼容性和 hash 模式相比略差。
    3. 應用部署上線時需要後端人員支持，解決刷新頁面服務端 404 的問題。
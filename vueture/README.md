# Vueture

## 總結 TodoList 案例

1. 組件化編碼流程:

    (1). 拆分靜態組件: 組件要按照功能點拆分，命名不要與 html 元素衝突。

    (2). 實現動態組件: 考慮好數據的存放位置，數據是一個組件在用，還是一些組件在用:

        1). 一個組件在用: 放在組件自身即可。

        2). 一些組件在用: 放在他們共同的父組件上 (狀態提升)

    (3). 實現交互: 從綁定事件開始。

2. props 適用於:

    (1). 父組件 ===> 子組件 通信
    
    (2). 子組件 ===> 父組件 通信 (要求父先給子一個函數)

3. 使用 v-model 時要切記: v-model 綁定的值不能是 props 傳過來的值，因為 props 是不可以修改的!

4. props 傳過來的若是對象類型的值，修改對象中的屬性時 Vue 不會報錯，但不推薦這樣做。

## webStorage

1. 存儲內容大小一般支持 5M 左右(不同瀏覽器可能不一樣)

2. 瀏覽器通過 Window.sessionStorage 和 Window.localStorage 屬性來實現本地存儲機制。

3. 相關 API:

    (1). xxxStorage.setItem('key', 'value');

        該方法接受一個鍵和值作為參數，會把鍵值對添加到存儲中，如果鍵名存在，則更新對應的值。

    (2). xxxxStorage.getItem('key');

        該方法接受一個鍵名作為參數，返回鍵名對應的值。

    (3). xxxStorage.removeItem('key');

        該方法接受一個鍵名作為參數，並把該鍵名從存儲中刪除。

    (4). xxxStorage.clear()

        該方法會清空存儲中的所有數據。

4. 備註:

    (1). SessionStorage 存儲的內容會隨著瀏覽器窗口關閉而消失。
    
    (2). LocalStorage 存儲的內容，需要手動清除才會消失。
    
    (3). xxxStorage.getItem(xxx) 如果 xxx 對應的 value 獲取不到，那麼 getItem 的返回值是 null。
    
    (4). JSON.parse(null) 的結果依然是 null。

## 組件的自定義事件

1. 一種組件間通信的方式，適用於：子組件 ===> 父組件

2. 使用場景：A 是父組件，B 是子組件，B 想給 A 傳數據，那麼就要在 A 中給 B 綁定自定義事件(事件的回調在 A 中)。

3. 綁定自定義事件：
    
    (1). 第一種方式，在父組件中：`<Demo @funName="test"/>` 或 `<Demo v-on:funName="test"/>`

    (2). 第二種方式，在父組件中：

        
        <Demo ref="theName"/>
        ......
        mounted() {
            this.$refs.theName$on('funName', this.test)
        }
        

    (3). 若想讓自定義事件只能觸發一次，可以使用 `once` 修飾符，或 `$once` 方法。

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

    (1). 接收數據：A 組件想接收數據，則在 A 組件中給 $bus 綁定自定義事件，事件的 **回調留在 A 組件自身。**

        methods() {
            demo(data) {...}
        }
        ...,
        mounted() {
            this.$bus.$on('xxx', this.demo)
        }

    (2). 提供數據： `this.$bus.$emit('xxx', 數據)`

4. 最好在 beforeDestroy 鉤子中，用 $off 去解綁**當前組件所用到的**事件。
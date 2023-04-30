# myvue

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
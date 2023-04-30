export default {
    install(Vue, x){
        console.log('x', x)
        // 全局過濾器
        Vue.filter('mySlice', function(value){
            return value.slice(0, 4)
        })

        // 定義全局指令
        Vue.directive('fbind', {
            bind(element, binding){
                element.value = binding.value
            },
            // 指令所在元素被插入頁面時
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在的模板被重新解析時
            update(element, binding) {
                element.value = binding.value
            }
        })

        // 定義混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })

        // 給 Vue 原型上添加一個方法(vm 和 vc 就都能用了)
        Vue.prototype.hello = ()=> {
            console.log('Hello')
        }
    }
}
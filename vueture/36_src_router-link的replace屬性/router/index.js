// 該文件專門用於創建整個應用的路由器
import VueRouter from "vue-router"
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 創建並暴露一個路由器
export default new VueRouter({
    routes: [
        {
            name: 'aboutRoute',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
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
                    ]
                }
            ]
        },
    ]
})
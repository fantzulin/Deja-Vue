// 該文件專門用於創建整個應用的路由器
import VueRouter from "vue-router"
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 創建並暴露一個路由器
const router =  new VueRouter({
    routes: [
        {
            name: 'aboutRoute',
            path: '/about',
            component: About,
            meta: {
                isAuth: true,
                title: '關於'
            }
        },
        {
            name: 'homeRoute',
            path: '/home',
            component: Home,
            meta: {title: '首頁'},
            children: [
                {
                    name: 'newsRoute',
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: '新聞'
                    },
                    /* beforeEnter: (to, from, next) => {
                        console.log('獨享路由守衛', to, from)
                        if (to.meta.isAuth) { // 判斷是否需要權限
                            if (localStorage.getItem('level') === 'master') {
                                next()
                            } else {
                                console.log('權限不夠')
                            }
                        } else {
                            next()
                        }
                    } */
                },
                {
                    name: 'messageRoute',
                    path: 'message',
                    component: Message,
                    meta: {
                        isAuth: true,
                        title: '消息'
                    },
                    children: [
                        {
                            name: 'detailRoute',
                            path: 'detail',
                            component: Detail,
                            meta: {
                                isAuth: true,
                                title: '詳情'
                            },
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

// 全局前置路由守衛，初始化的時候被調用、每次路由切換之前被調用
/* router.beforeEach((to, from, next) => {
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
    
}) */

// 全局後置路由守衛，初始化的時候被調用、每次路由切換之後被調用
router.afterEach((to, from) => {
    console.log('後置路由守衛', to, from)
    document.title = to.meta.title || 'Vueture'
})

export default router
<template>
    <h2>我是 About 的內容</h2>
</template>

<script>
export default {
    name: 'About',
    // 通過路由規則，進入該組件時被調用
    beforeRouteEnter (to, from, next) {
        console.log('beforeRouteEnter', to, from)
        if (to.meta.isAuth) { // 判斷是否需要權限
            if (localStorage.getItem('level') === 'master') {
                next()
            } else {
                console.log('權限不夠')
            }
        } else {
            next()
        }
    },
    // 通過路由規則，離開該組件時被調用
    beforeRouteLeave (to, from, next) {
        console.log('beforeRouteLeave', to, from)
        next()
    }
}
</script>

<style>

</style>
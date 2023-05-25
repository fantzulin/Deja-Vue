<template>
    <div>
        <h2>我是 Home 的內容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/home/news">News</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style>

</style>
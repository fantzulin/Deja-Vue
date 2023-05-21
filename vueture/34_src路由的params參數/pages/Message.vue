<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key=m.id>
                <!-- 跳轉路由並攜帶 params 參數，to 的字符串寫法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->

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
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                {
                    id: '001',
                    title: 'message 1'
                },
                {
                    id: '002',
                    title: 'message 2'
                },
                {
                    id: '003',
                    title: 'message 3'
                }
            ]
        }
    }
}
</script>

<style>

</style>
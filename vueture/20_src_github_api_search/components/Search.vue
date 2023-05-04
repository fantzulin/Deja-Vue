<template>
    <section class="container-fluid bg-secondary py-5">
        <h3 class="display-5">Search Github Users</h3>
        <div class="d-flex">
            <input
                type="text"
                class="form-control"
                placeholder="enter the name you search"
                v-model="keyWord"    
            >
            <button class="btn btn-primary ms-2" @click="searchUser">Search</button>
        </div>
    </section>
</template>

<script>
import axio from 'axios'
export default {
    name: 'Search',
    data() {
        return {
            keyWord: ''
        }
    },
    methods: {
        searchUser() {
            // 請求前更新 List 的數據
            this.$bus.$emit('updateListData', {isFirst: false, isLoading: true, errMsg: '', users: []})
            axio.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    console.log('search success!')
                    // 請求成功後更新 List 的數據
                    this.$bus.$emit('updateListData', {isLoading: false, errMsg: '', users: response.data.items})
                },
                error => {
                    console.log('error!', error.message)
                    // 請求失敗後更新 List 的數據
                    this.$bus.$emit('updateListData', {isLoading: false, errMsg: error.message, users: []})
                }
            )
        }
    }
}
</script>
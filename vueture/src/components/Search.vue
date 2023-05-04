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
            axio.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    console.log('search success!')
                    this.$bus.$emit('getUsers', response.data.items)
                },
                error => {
                    console.log('error!', error.message)
                }
            )
        }
    }
}
</script>
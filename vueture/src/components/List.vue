<template>
    <div class="row">
        <div class="card" v-for="user in users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" width="100px">
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            users: [],
        }
    },
    mounted() {
        this.$bus.$on('getUsers', (users)=>{
            console.log('List components', users)
            this.users = users
        })
    }
}
</script>

<style scoped>
.album {
  padding: 30px 0;
  min-height: 300px;
  background-color: #f7f7f7;
}

.card {
  float: left;
  margin-bottom: 20px;
  padding: 10px;
  width: 33.333%;
  text-align: center;
  border: 1px solid #efefef;
}

.card > img {
  margin-bottom: 10px;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
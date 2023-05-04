<template>
    <!-- 展示用戶列表 -->
    <div class="row">
        <div class="card" v-show="info.users.length" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" width="100px">
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
        <!-- 展示歡迎詞 -->
        <h1 v-show="info.isFirst">Welcome!</h1>
        <!-- 展示加載中 -->
        <h1 v-show="info.isLoading">Loading...</h1>
        <!-- 展示錯誤訊息 -->
        <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            info: {
                isFirst: true,
                isLoading: false,
                errMsg: '',
                users: [],
            }
        }
    },
    mounted() {
        this.$bus.$on('updateListData', (dataObj)=>{
            console.log('List components', dataObj)
            // this.info = dataObj
            this.info = {...this.info, ...dataObj}
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
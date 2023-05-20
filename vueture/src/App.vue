<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="page-header">
          <h1>Vue Router Demo</h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="list-group">
          <!-- Vue 中借助 router-link 標籤實現路由的切換 -->
          <router-link class="list-group-item list-group-item-action" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item list-group-item-action" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-9">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定組件的呈現位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
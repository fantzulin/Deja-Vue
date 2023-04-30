<template>
	<div class="demo">
		<h2>學校名稱：{{ name }}</h2>
		<h2>學校地址：{{ address }}</h2>
		<button @click="showName"></button>	
	</div>
</template>

<script>
export default {
	name: 'School',
	data(){
		return {
			name: 'Chris School',
			address: 'Taipei'
		}
	},
	methods:{
		showName(){
			console.log(this.name)
		}
	}
}
</script>

<style>
.demo {
	background-color: gold;
}
</style>
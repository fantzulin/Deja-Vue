<template>
	<div>
		<h2>學生姓名：{{ name }}</h2>
		<h2>學生年齡：{{ age }}</h2>	
	</div>
</template>

<script>
export default {
	name: 'StudentContent',
	data(){
		return {
			name: 'Chris',
			age: 19
		}
	}
}
</script>
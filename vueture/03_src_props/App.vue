<template>
<div>
    <Student name="Chris" sex="Ms" :age="29"></Student>
</div>
</template>

<script>
import Student from './components/Student'
export default {
    name: 'App',
    components:{Student}
}
</script>
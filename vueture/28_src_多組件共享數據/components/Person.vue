<template>
    <div>
        <h1>人員列表</h1>
        <h4>Count 組件的求和為:{{ sum }}</h4>
        <input type="text" placeholder="輸入人名" v-model="name">
        <button @click="add">增加人員</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.personList
        },
        sum() {
            return this.$store.state.sum
        }
    },
    methods: {
        add() {
            const personObj = {
                id: nanoid(),
                name: this.name
            };
            console.log(personObj)
            this.$store.commit('ADD_PERSON', personObj)
            this.name = ''

        }
    },
}
</script>

<style>

</style>
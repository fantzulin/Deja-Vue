<template>
    <div>
        <h1>人員列表</h1>
        <h4>Count 組件的求和為:{{ sum }}</h4>
        <h5>列表中第一個人的名字是: {{ firstPersonName }}</h5>
        <input type="text" placeholder="輸入人名" v-model="name">
        <button @click="add">增加人員</button>
        <button @click="addFan">增加一個范人</button>
        <button @click="addPersonServer">增加一個 API 人</button>
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
            return this.$store.state.personAbout.personList
        },
        sum() {
            return this.$store.state.countAbout.sum
        },
        firstPersonName() {
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    methods: {
        add() {
            const personObj = {
                id: nanoid(),
                name: this.name
            };
            console.log(personObj)
            this.$store.commit('personAbout/ADD_PERSON', personObj)
            this.name = ''
        },
        addFan() {
            const personObj = {
                id: nanoid(),
                name: this.name
            };
            this.$store.dispatch('personAbout/addPersonFan', personObj)
            this.name = ''
        },
        addPersonServer() {
            this.$store.dispatch('personAbout/addPersonServer')
        }
    },
}
</script>

<style>

</style>
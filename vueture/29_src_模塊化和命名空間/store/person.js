// 人員管理相關的配置
import axios from "axios"
import { nanoid } from 'nanoid'
export default {
    namespaced: true,
    actions:{
        addPersonFan(miniStore, value) {
            if(value.name.indexOf('范') === 0) {
                miniStore.commit('ADD_PERSON', value)
            }
        },
        addPersonServer(miniStore) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response =>{
                    miniStore.commit('ADD_PERSON', {
                        id: nanoid(),
                        name: response.data
                    })
                },
                error => {
                    console.log(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state:{
        personList: [
            {id: '001', name: 'Chris'}
        ]
    },
    getters:{
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const fetchBar = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('bar 返回的数据信息')
        })
    })
}

//  创建store

function createStore() {
    const store = new Vuex.Store({
        state: {
            bar: ''
        },
        mutations: {
            'SET_BAR': (state, data) => {
                state.bar = data
            }
        },
        actions: {
            fetchBar({ commit }) {
                return fetchBar().then((data) => {
                    commit('SET_BAR', data)
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    })
    if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
        console.log('window.__INITIAL_STATE__', window.__INITIAL_STATE__);
        store.replaceState(window.__INITIAL_STATE__);
    }
    return store
}

export default createStore
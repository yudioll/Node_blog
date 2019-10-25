import Vue from 'vue'
import Vuex from 'vuex'
import { getLogin } from "@api/home";

Vue.use(Vuex)

//  创建store

function createStore() {
    const store = new Vuex.Store({
        state: {
            islogin: false,
            userinfo: {}
        },
        mutations: {
            LOGIN: (state, data) => {
                state.islogin = data.login
            },
            SET_INFO: (state, data) => {
                state.userinfo = data.userinfo
            }
        },
        actions: {
            getLogin({ commit }, params) {
                return new Promise((resolve, reject) => {
                    getLogin(params)
                        .then(res => {
                            if (res.status) {
                                resolve(res)
                                commit('LOGIN', { login: res.status })
                                commit('SET_INFO', { userinfo: res.userinfo })
                            } else {
                                reject(res.errcode)
                            }
                        })
                        .catch(err => {
                            reject(err);
                        });
                })
            }
        },
        getters: {
            islogin: state => state.islogin,
            userinfo: state => state.userinfo
        }
    })
    if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
        console.log('window.__INITIAL_STATE__', window.__INITIAL_STATE__);
        store.replaceState(window.__INITIAL_STATE__);
    }
    return store
}

export default createStore
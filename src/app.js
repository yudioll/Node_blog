// const Vue = require('vue')
// const server = require('express')()
// const fs = require('fs')


// server.get('*', (req, res) => {
//     // 构建实例
//     const app = new Vue({
//         data: {
//             url: req.url
//         },
//         template: `
//         <div>当前访问的URL是 {{url}}</div>
//     `
//     })
//     // 渲染数据
//     const context = {
//         title: 'vue ssr'
//     }
//     const renderer = require('vue-server-renderer').createRenderer()
//     // 将vue 实例 渲染成html

//     renderer.renderToString(app, context, (err, html) => {
//         if (err) {
//             res.status(500).send('error')
//         }
//         fs.readFile('./index.html', 'utf-8', (err, data) => {
//             res.send(data)
//         })
//     })
// })

// server.listen(3000)

import Vue from 'vue'
import App from './App.vue'
import createStore from './store/store.js'
import createRouter from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

export function createApp(ssrContext) {
    const store = createStore()
    const router = createRouter()
    const app = new Vue({
        router,
        store,
        ssrContext,
        render: h => h(App)
    })
    // 前端页面调试使用
    app.$mount('#app')
    return { app, store, router, App }
}
// 前端页面调试使用
createApp()
const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()
// test-mongoose
const List = require('../mongo-modules/list/list-mongodb');

// const devServerSetup = require('../config/setup-dev-server');
// let renderer;
// var promise = devServerSetup(server, templatePath, (bundle, options) => {
//     renderer = createRenderer(bundle, options);     //刷新renderer
// });
// render = (req, res) => {
//     promise.then(() => baseRender(renderer, req, res));     //需要等待文件初始化
// };

const serverBundle = require(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'));
const clientManifest = require(path.resolve(__dirname, '../dist/vue-ssr-client-manifest.json'));
const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8');

const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
})
const baseHtml = (req, res) => {
    const context = { url: req.url }

    renderer.renderToString(context, (err, html) => {
        if (err) {
            res.status(500).send('server error')
        } else {
            res.status(200).send(html)
        }

    })
}
router.get('/', (req, res) => {
    baseHtml(req, res)
})
router.get('/home', (req, res) => {
    baseHtml(req, res)
})
router.get('/list', (req, res) => {
    // 生成第一条数据，每次请求 再mongodb增加一条数据
    // new List({
    //     title: 'first blog',
    //     content: 'this is my first blog',
    //     date: new Date().toLocaleDateString()f
    // }).save((err) => {
    //     console.log(err)
    // })
    // 查找所有数据
    // List.findByIdAndRemove('5da18ddcd40d2b641c22c448', (err, data) => {
    //     res.send(data)
    // })
    List.find((err, data) => {
        if (err) {
            throw Error('serve error')
        } else {
            res.send(data)
        }
    })
})

module.exports = router
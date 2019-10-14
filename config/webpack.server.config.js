/**
 * 服务端webpack 配置
 * @author yudioll
 */

const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const base = require('./webpack.base.config')

module.exports = merge(base, {
    // 打包服务端代码，所以环境为node
    target: 'node',
    devtool: '#source-map',
    entry: {
        server: path.resolve(__dirname, '../src/entry-serve.js')
    },
    output: {
        libraryTarget: 'commonjs2'
    },
    externals: nodeExternals({
        // 不要外置化 webpack 需要处理的依赖模块。
        // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
        // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
        whitelist: /\.css$/
    }),
    plugins: [
        new VueSSRServerPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.ssr.html'),
            filename: 'index.ssr.html',
            files: {
                js: 'client.bundle.js'
            },
            excludeChunks: ['server']
        })
    ]
})


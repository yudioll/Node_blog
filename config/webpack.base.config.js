/**
 * 通用webpack 配置
 * @author yudioll
 */

const path = require('path')
const VueloaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', 'vue'],
        alias: {
            '@api': path.resolve(__dirname, "../src/api"),
            '@component': path.resolve(__dirname, "../src/components"),
            '@assets': path.resolve(__dirname, '../src/assets')
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|woff|ttf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000    // 10Kb
                    }
                }
            },

        ]
    },
    plugins: [
        new VueloaderPlugin(),
        new ExtractTextPlugin('style.css'),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: '"development"' }
        })
    ]
}
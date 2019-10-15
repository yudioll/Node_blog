const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: './src/app.js',
    resolve: {
        alias: {
            '@api': path.resolve(__dirname, "src/api"),
            '@component': path.resolve(__dirname, "src/components"),
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader']
                // use: ExtractTextPlugin.extract({
                //   fallback: 'vue-style-loader',
                //   use: [åç
                //     'css-loader',
                //     'postcss-loader'
                //   ]
                // })
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
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
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ]
};
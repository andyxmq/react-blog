const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const isDev = process.env.NODE_ENV === 'development'

const config= webpackMerge(baseConfig, {
    entry: {
        app: path.join(__dirname, '../src/app.js')
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/template.html')
        }),
    ]
});

// localhost:
if(isDev) {
    config.entry = {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname,'../src/app.js')
        ]
    };
    config.devServer = { //配置dev配置
        host: '0.0.0.0',
        port: '8888',
        contentBase: path.join(__dirname, '../dist'),
        hot: true,
        overlay: { // webpack 编译错误 显示错误
            errors: true
        },
        publicPath: '/public',
        historyApiFallback: { // 指定index.html
            index: '/public/index.html'
        }
    };
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;

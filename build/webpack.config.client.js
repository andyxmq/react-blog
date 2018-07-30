const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");
const isDev = process.env.NODE_ENV === 'development';

const config= {
    entry: {
        app: path.join(__dirname,'../src/app.js')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname,'../dist'),
        publicPath: '/public/'
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'../src/template.html')
        }),
    ]

};

// localhost:
if(isDev){
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
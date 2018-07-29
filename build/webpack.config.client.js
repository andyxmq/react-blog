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
        publicPath: '/public'
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
        // new webpack.HotModuleReplacementPlugin()

    ]

};
if(isDev){
    config.devServer = {
        host: '0.0.0.0',
        port: '8888',
        contentBase: path.join(__dirname, '../dist'),
        // hot: true,
        overlay: {
            errors: true
        },
        publicPath: '/public',
        historyApiFallback: { // 指定index.html
            index: '/public/index.html'
        }
    }
}

module.exports = config;
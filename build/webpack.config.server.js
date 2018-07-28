const path = require("path");
module.exports = {
    target: 'node', //使用在那个执行环境当中
    entry: {
        app: path.join(__dirname,'../src/server-entry.js')
    },
    output: {
        filename: 'server-entry.js',
        path: path.join(__dirname,'../dist'),
        publicPath: '',
        libraryTarget: 'commonjs2' //在打包出来js 模块方案 amd cmd umd commonjs2 
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
    }

};
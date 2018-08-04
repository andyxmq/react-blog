const path = require("path");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
module.exports = webpackMerge(baseConfig,{
    target: 'node', // 
    entry: {
        app: path.join(__dirname,'../src/server-entry.js')
    },
    output: {
        filename: 'server-entry.js',
        libraryTarget: 'commonjs2' //在打包出来js 模块方案 amd cmd umd commonjs2
    }
});

const axios = require('axios');
//获取server端bundle
const webpack = require("webpack");
const serverConfig = require('../../build/webpack.config.server')
const path = require("path")
const MemoryFs = require("memory-fs");
const ReactDomServer = require('react-dom/server');
var proxy = require('http-proxy-middleware');

const getTemplate = ()=>{
    return new Promise((resolve,reject)=>{
        axios.get("http://localhost:8888/public/index.html").then(res=>{
            resolve(res.data)
        })
        .catch(reject)
    })
}
const Module = module.constructor
const memoryFileSystem = new MemoryFs;
const serverCompiler = webpack(serverConfig); // 监听webpack配置文件entry
serverCompiler.outputFileSystem = memoryFileSystem; //改变outputFileSystem
let serverBundle ;
serverCompiler.watch({},(err,stats)=>{
    if(err) throw err;
    stats = stats.toJson();
    stats.errors.forEach(error=>console.error(error))
    stats.warnings.forEach(warn=>console.warn(warn))
    //获取server bundle
    //1.获取bundle路径
    const bundlePath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename
    );

    //2 读取文件内容
    const bundle = memoryFileSystem.readFileSync(bundlePath,'utf-8') //字符串 js 不能使用 需要设置utf-8
 
    //创建新的module 解决js不能使用字符串的情况 生成新的模块
    const  m = new Module();
    m._compile(bundle,'server-entry.js');// Path must be a string. Received undefined 需要设置名字
    // serverBundle = m.default;
    serverBundle = m.exports.default;

    //渲染React
})
module.exports = function(app){
    //最要处理静态文件 使用http-proxy-middleware
    app.use('/public', proxy({target: 'http://127.0.0.1:8888', changeOrigin: true,"secure": false}));

    app.get("*",function(req,res){
        getTemplate().then(template=>{
            const content = ReactDomServer.renderToString(serverBundle)
            res.send(template.replace("<!--app-->",content))
        })
    })
}
# react-blog
react webpack  mobx


## 单页应用
    所有内容都在前端生成
    js承担更多的业务逻辑，后端只提供API
    页面路由调转不需要经过后端

    常用类库：
        react、ng、backbone、vue

    架构工具：
        npm bower jspm

    模块化工具
        webpack    
        rollup
        browserify
## 多页应用

    特征：内容都由服务端用模板生成
    每次页面跳转都要经过服务端
    JS更多的是做做动画

    常用类库： jQuery MooTools  YUI
架构工具

    grunt：
    glup: 

模块化工具：
    seajs cmd
    requirejs amd

静态文件
    使用gulp或grunt等工具手动编译到html,自由度低，操作复杂  或者甚至不处理，交给后端，让后端服务处理


## 其它考虑

浏览器兼容性

toB 还是toC

移动端还是PC端

## WebApp架构简介

> 工程架构: 解放生产力、围绕解决方案搭建环境、保证项目质量

    解放生产力： 源代码预处理、自动打包，自动更新页面显示、自动处理图片依赖，保证开发和正式环境的统一

    保证项目质量：code lint、不同的环境排除差异、git commit 预处理

> 项目架构:

    技术选型mobox、数据解决方案、整体代码风格

## web 开发常用的网络优化

> 优化方法

    合并资源文件、减少HTTP请求
    压缩资源文件、减少请求大小
    利用缓存机制、尽可能使用缓存减少请求

## 开发

    配置webpack.config.js
    entry output 安装loader: babel-loader babel-core

    配置presets: es2015 loose:true react (npm  i babel-presets-es2015 babel-presets-es2015-loose babel-presets-react)

## 为什么会有服务端渲染

> 单页应用存在的问题

    SEO不友好

    首次请求等待时间较长、体验不好

    react-dom是React专门为web端开发的渲染工具，我们可以在客户端使用react-dom的render方法渲染组件，而在服务端，react-dom/server提供renderToString我们将react组件渲染成HTML方法

    服务端渲染： server-entry

    添加webpack.config.server.js 修改package.json script

    安装 rimraf 清空 dist npm i rimraf -D

    新建文件夹server 并创建server.js 安装express npm i express -S  

## 项目开发时的常用配置

> 常用配置

    1. webpack dev server: npm i webpack-dev-server -D

    安装cross-env 修改package.json  解决不同变量设置 

    2. Hot module replacement： 保持当前页面状态  npm i react-hot-loader@next -D

    3.上述配置用于开发环境，因此配置webpack 开发配置

## 服务端渲染

    安装axios npm i axios -S 获取template.html

    安装memory-fs: 存取读取文件 npm i memory-fs -D

    安装： http-proxy-middleware 解决静态文件问题 npm i http-proxy-middleware -D

## 使用eslint和editorconfig 规范代码

    目的：有利于团队合作 
          存手工规范费时 不准确
          配合编辑器，自动提醒错误，提高开发效率

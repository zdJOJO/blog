# react-router4
a simple demon of react-router4
资料： https://github.com/YutHelloWorld/Blog/issues/4

按需加载

# Usage

`npm install`

`# 开发环境 `

`npm start`

`# open http://localhost:3000/`

`# 前端打包`

`npm run build`

`#  启动服务器 访问8080`

`npm run server`

`open http://localhost:8080/`

# 一些问题
1. 使用v4按需加载，若在某个组件中import A , A 组件是否也要按需加载？  已经解决。

2. V4中 react-router-dom 和 react-router 有什么区别 ？

   答: https://github.com/ReactTraining/react-router/issues/4648


# UI 库
  http://blueprintjs.com/docs/#core/components

# 
  1.  启动mongodb
      ` mongod --dbpath "d:\local-repository\mongodb\data" --logpath "d:\local-repository\mongodb\log\mongodb.log" --logappend `
        或者
     `mongod --dbpath /home/web/mongodb/data/db/ --logpath /home/web/mongodb/log/mongodb.log --logappend`
     
     如果出错：mongod --repair --dbpath=/usr/local/data
     
  2.  node 服务在后台跑， 使用 ` screen ` 命令
    
    screen -S test1  #创建 一个 screen
    Ctrl+a+d   #按Ctrl+a，然后再按d即可保留Screen
    screen -R test1  #先试图恢复离线的作业。若找不到离线的作业，即建立新的screen作业。


# 文件目录结构
    +---config  ` 打包文件 `
    +---models  ` mongoose模板, 可对数据库进行操作 `
    +---node_modules  
    +---routes ` api 接口 `
    |   \---controller ` CRUD 公共方法 `
    +---schemas  ` 数据库表结构定义 `
    +---src  ` 前端源代码 `
    |   +---components  ` 公共组件 `
    |   |   \---css
    |   +---html-tpl  
    |   +---img
    |   +---pages ` 页面 `
    |   |   +---app
    |   |   +---home
    |   |   \---main
    |   |       +---page1
    |   |       \---page2
    |   +---routes  ` 前端路由 `
    |   \---utils  ` 公共方法 `
    \---static  ` 静态文件 `
        +---css
        +---img
        +---js
        \---pages ` build目录 `
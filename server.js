const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// 设定port变量，为访问端口
app.set("port", process.env.PORT || 7000);
//app.set("port", 80);
app.use(bodyParser.json({limit: "10mb"}));  //这里指定参数使用 json 格式
app.use(bodyParser.urlencoded({
  extended: true
}));

//设置密钥
app.set('jwtTokenSecret', 'A_LITTLE_DIFFICULT');

//设置 token 过期时间
app.set("expiresIn", "30d" );

//数据库地址
const mongodbUrl = "mongodb://127.0.0.1:27017";  

/**
 * 解决冲突: Use native promises
 * DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, 
 * plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
 * 
 * 可以用原生的 ES6 的Promise 也可以用 bluebird
 * */ 
mongoose.Promise = global.Promise;
mongoose.connect(mongodbUrl, {
  useMongoClient: true
}, (err, db)=>{

  if(err){
    throw new Error("Database failed to connect!");
  }else{
    console.log(`MongoDB successfully connected! ${mongodbUrl}`);
  }

  // 直接访问根目录　
  app.use( express.static(__dirname + '/dist'));
  app.use( express.static(__dirname + '/static'));

  //路由 api 
  routes(app);

  //配置任何请求都转到index.html，而index.html会根据React-Router规则去匹配任何一个route
  app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./dist/index.html"));
  });

  app.listen(app.get("port"), ()=>{
    console.log(`Example app listening on port ${app.get("port")} !`);
  });

});


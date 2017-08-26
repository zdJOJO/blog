const path = require("path");
const express = require("express");
const mongo = require("mongodb").MongoClient;
const mongoose = require("mongoose");


const routes = require("./routes");

const app = express();

// 设定port变量，意为访问端口
app.set("port", process.env.PORT || 8080);

//数据库地址
const mongodbUrl = "mongodb://127.0.0.1:27017";  

mongoose.connect(mongodbUrl, {
  useMongoClient: true
}, (err, db)=>{

  if(err){
    throw new Error("Database failed to connect!");
  }else{
    console.log(`MongoDB successfully connected! ${mongodbUrl}`);
  }

  // 直接访问根目录　
  app.use(express.static(__dirname + "/static")); 

  routes(app);

  //配置任何请求都转到index.html，而index.html会根据React-Router规则去匹配任何一个route
  app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./static/index.html"));
  });

  app.listen(app.get("port"), ()=>{
    console.log(`Example app listening on port ${app.get("port")} !`);
  });

});


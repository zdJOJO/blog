/*
  express 的 routes
*/

// const studentRoute = require("./student"); 
const URLS = require("./urls");
const loginRouter = require("./sign");
const articleRouter = require("./article");

module.exports = function (app){

  //登录注册
  app.use("/", loginRouter);

  // 发表文章
  app.use("/", articleRouter);

  //学生
  // studentRoute(app);

};
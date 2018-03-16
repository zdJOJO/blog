/*
  express 的 routes
*/

// const studentRoute = require("./student"); 
const loginRouter = require("./sign");
const articleRouter = require("./article");
const holidayRouter = require("./holiday");

module.exports = function (app){

  //登录注册
  app.use("/", loginRouter);

  // 发表文章
  app.use("/", articleRouter);

  //学生
  // studentRoute(app);

  //假期
  app.use("/", holidayRouter);

};
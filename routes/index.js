/*
  express 的 routes
*/

const studentRoute = require("./student"); 
const sign = require("./sign");
const article = require("./article");

module.exports = function (app){

  //登录注册
  sign(app);

  // 发表文章
  article(app);

  //学生
  studentRoute(app);

};
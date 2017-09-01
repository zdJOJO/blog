/*
  express 的 routes
*/

const studentRoute = require("./student"); 
const sign = require("./sign"); 

module.exports = function (app){

  app.get("/hello", (req, res)=>{
    res.send("Hellow World !!");
  });

  //登录注册
  sign(app);

  studentRoute(app);

  app.get("/teacher", (req, res)=>{
    res.send("teacher !!");
  });
};
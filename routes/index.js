/*
  express 的 routes
*/

const studentRoute = require("./student"); 

module.exports = function (app){

  app.get("/hello", (req, res)=>{
    res.send("Hellow World !!");
  });

  studentRoute(app);

  app.get("/teacher", (req, res)=>{
    res.send("teacher !!");
  });
};
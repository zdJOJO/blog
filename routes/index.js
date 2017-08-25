/*
  express 的 routes
*/

const express = require("express");

module.exports = function (app){

  app.get("/hello", (req, res)=>{
    res.send("Hellow World !!");
  });

  app.get("/student", (req, res)=>{
    res.send("student !!");
  });

  app.get("/teacher", (req, res)=>{
    res.send("teacher !!");
  });
};
/*
  登录、注册
*/
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const userModel = require("../schemas").userModel;
const saveCtrl = require("./controller");
const URLS = require("./urls");


/** 注册 */
router.post(URLS.SIGN_UP, (req, res, next) => {
  userModel.findOne({"username": req.body.username}, (err, user)=>{
    if(user){
      res.send({
        result: null,
        msg: "user already exists",
        status: -1
      });
    }else {
      next();
    }
  });
}, (req, res) => {
  saveCtrl.handleSave(req, userModel, (err, entity) => {
    res.send({
      result: err || entity,
      msg: err || "registered successfully",
      status: err ? -1 : 0
    });
  });
});

/** 登录 */
router.post(URLS.LOGIN, (req, res) => {
  userModel.findOne({"username": req.body.username}, (err, user) => {
    if (!user){
      res.send({
        result: null,
        msg: 'username does not exist',
        status: -1
      });
    }else{
      let userObj = user.toObject();
      let isPasswordCorrected = req.body.password===userObj.password;
      if(!isPasswordCorrected){
        res.send({
          result: null,
          msg: 'password error !',
          status: -1
        });
      }else{

        let token = jwt.sign(userObj, "A_LITTLE_DIFFICULT", {
          expiresIn: "30d"
        });
        console.log(`token = ${token}`);
        res.send({
          result: user,
          msg: 'success login',
          status: 0,
          token: token
        });
      }
    }
  });
});



module.exports = router;




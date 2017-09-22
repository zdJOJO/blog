/*
  登录、注册
*/

const userModel = require("../models").userModel;
const saveCtrl = require("./controller");
const URLS = require("./urls");

module.exports = function(app) {

  //注册
  app.post(URLS.SIGN_UP, (req, res, next) => {
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
    saveCtrl.handleSave(req.body, userModel, (err, entity) => {
      res.send({
        result: err || entity,
        msg: err || "registered successfully",
        status: err ? -1 : 0
      });
    });
  });

  //登录
  app.post(URLS.LOGIN, (req, res) => {
    userModel.findOne({"username": req.body.username}, (err, user) => {
      if (!user){
        res.send({
          result: null,
          msg: 'username does not exist',
          status: -1
        });
      }else{
        let isPasswordCorrected = req.body.password===user.toObject().password;
        res.send({
          result: isPasswordCorrected ? user : null,
          msg: isPasswordCorrected ? 'success login': 'password error !',
          status: isPasswordCorrected ? 0 : -1
        });
      }
    });
  });

};




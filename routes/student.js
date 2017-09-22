const studentModel = require("../models").studentModel;
const saveCtrl = require("./controller");
const URLS = require("./urls");

module.exports = function(app) {
  
  //获取列表 
  app.get(URLS.GET_STUDENT, (req, res)=>{
    studentModel.find((err, docs)=>{
      res.send({
        result: {
          data: docs
        },
        msg: err || "ok",
        status: err ? -1 : 0
      });
    });
  });

  //添加学生
  app.post(URLS.ADD_STUDENT, (req, res)=>{
    saveCtrl.handleSave(req.body, studentModel, (err, entity)=>{
      res.send({
        result: err || entity,
        msg: err || "add success",
        status: err ? -1 : 0
      });
    });
  });
};
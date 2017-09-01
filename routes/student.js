const studentModel = require("../models").studentModel;
const saveCtrl = require("./controller");

module.exports = function(app) {
  
  //获取列表 
  app.get("/school/student", (req, res)=>{
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
  app.post("/school/student/add", (req, res)=>{
    saveCtrl.handleSave(req.body, studentModel, (err, entity)=>{
      res.send({
        result: err || entity,
        msg: err || "add success",
        status: err ? -1 : 0
      });
    });
  });
};
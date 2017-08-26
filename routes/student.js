const studentModel = require("../models/student.js");

module.exports = function(app) {
  
  //获取列表 
  app.get("/school/student", (req, res)=>{
    studentModel.find((err, docs)=>{
      res.send({
        result: docs,
        msg: err ? "ok" : err,
        status: err ? -1 : 0
      });
    });
  });

  //添加学生
  app.post("/school/student", (req, res)=>{
    let obj = {};
    Object.keys(req.body).forEach( element => {
      obj[element] = req.body[element] || null;
    });
    let studentEntity = new studentModel(obj);
    studentEntity.save();
  });
};
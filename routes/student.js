const studentModel = require("../models").studentModel;

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
    let obj = {};
    Object.keys(req.body).forEach( element => {
      obj[element] = req.body[element] || null;
    });
    let studentEntity = new studentModel(obj);
    studentEntity.save( err =>{
      res.send({
        result: err || studentEntity,
        msg: err || "add success",
        status: err ? -1 : 0
      });
    });
  });
};
const mongoose = require("mongoose");

const studentSchema = require("../schemas").studentSchema;

const getModel =(modelName, schema) =>{
  return mongoose.model(modelName, schema);
};

module.exports = {
  studentModel: getModel("students", studentSchema)
};
const mongoose = require("mongoose");

const studentSchema = require("../schemas").studentSchema;
const articleSchema = require("../schemas").articleSchema;
const userSchema = require("../schemas").userSchema;

const getModel =(modelName, schema) =>{
  return mongoose.model(modelName, schema);
};

module.exports = {
  studentModel: getModel("students", studentSchema),
  articleModel: getModel("articles", studentSchema),
  userSchema: getModel("users", studentSchema)
};
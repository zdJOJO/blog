const mongoose = require("mongoose");

const studentSchema = require("../schemas").studentSchema;
const articleSchema = require("../schemas").articleSchema;
const userSchema = require("../schemas").userSchema;

const getModel =(collectionName, schema) => {
  return mongoose.model(collectionName, schema);
};

module.exports = {
  studentModel: getModel("students", studentSchema),
  articleModel: getModel("articles", studentSchema),
  userModel: getModel("users", studentSchema)
};
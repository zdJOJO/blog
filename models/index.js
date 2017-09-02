const mongoose = require("mongoose");

const studentSchema = require("../schemas").studentSchema;
const articleSchema = require("../schemas").articleSchema;
const userSchema = require("../schemas").userSchema;

const getModel =(collectionName, schema) => {
  return mongoose.model(collectionName, schema);
};

module.exports = {
  studentModel: getModel("student", studentSchema),
  articleModel: getModel("article", articleSchema),
  userModel: getModel("user", userSchema)
};
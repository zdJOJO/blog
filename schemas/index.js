const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = Schema({
  name: {type: String, unique: true},
  age: Number,
  gender: Number, // 0-男  1-女
  height: Number, // 单位cm
  weight: Number //单位千克
});

const articleSchema = Schema({
  title: {type: String, required: true},  //文章标题
  subtitle: String,  //文章副标题
  content: {type: String, required: true},  //文章内容
  pubTime: Date, // 发布时间
  updateTime: Date, // 更新时间
  tag: [String],  // 文章标签
  comments: Array, //文章评论
  author: { type: Schema.Types.ObjectId, ref: "user" }  //_id
});

const userSchema = Schema({
  username: {type: String, unique: true},
  nickname: String,
  password: {type: String, required: true},
  headPic: String,
  description: String,
  email: String,
  github: String,
  facebook: String,
  twitter: String,
  ins: String,
  weibo: String
});

const getModel =(collectionName, schema) => {
  return mongoose.model(collectionName, schema);
};

const studentModel = getModel("student", studentSchema);
const articleModel = getModel("article", articleSchema);
const userModel = getModel("user", userSchema);

module.exports = {
  studentModel: studentModel,
  articleModel: articleModel,
  userModel: userModel
};
const mongoose = require("mongoose");

module.exports = {

  studentSchema: new mongoose.Schema({
    name: {type: String, unique: true},
    age: Number,
    gender: Number, // 0-男  1-女
    height: Number, // 单位cm
    weight: Number //单位千克
  }),

  articleSchema: new mongoose.Schema({
    title: {type: String, required: true},  //文章标题
    subtitle: {type: String, required: true},  //文章副标题
    content: {type: String, required: true},  //文章内容
    pubtime: String, // 发布时间
    updatetime: String, // 更新时间
    tag: [String],  // 文章标签
    comments: Array //文章评论
  }),

  userSchema: new mongoose.Schema({
    username: {type: String, unique: true},
    nickname: String,
    password: {type: String, required: true},
    headPic: String,
    describtion: String,
    email: String,
    github: String,
    facebook: String,
    twitter: String,
    ins: String,
    weibo: String
  })
};
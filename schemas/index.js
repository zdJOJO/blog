const mongoose = require("mongoose");

module.exports = {

  studentSchema: new mongoose.Schema({
    name: String,
    age: Number,
    gender: Number, // 0-男  1-女
    height: Number, // 单位cm
    weight: Number //单位千克
  }),

  articleSchema: new mongoose.Schema({
    title: String,  //文章标题
    subtitle: String,  //文章副标题
    content: String,  //文章内容
    pubtime: String, // 发布时间
    updatetime: String, // 更新时间
    tag: Array,  // 文章标签
    comments: Array //文章评论
  }),

  userSchema: new mongoose.Schema({
    username: String,
    nickname: String,
    password: String,
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
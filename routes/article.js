/*
*  文章发表
* */

const articleModel = require("../models").articleModel;
const urls = require("./urls");

module.exports = function (app) {

  // 创建新文章
  app.post(urls.ARTICLE_CREATE, (req, res, next)=>{

  });
};
/*
*  文章发表
* */

const articleModel = require("../models").articleModel;
const URLS = require("./urls");

module.exports = function (app) {

  // 创建新文章
  app.post(URLS.ARTICLE_CREATE, (req, res, next)=>{

  });
};
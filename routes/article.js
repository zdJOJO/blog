/*
*  文章发表
* */

const articleModel = require("../schemas").articleModel;
const saveCtrl = require("./controller");
const URLS = require("./urls");

module.exports = function (app) {

  /* 获创建新文章*/
  app.post(URLS.ARTICLE_CREATE, (req, res)=>{
    saveCtrl.handleSave(req.body, articleModel, (err, entity)=>{
      res.send({
        result: err || entity,
        msg: err || "create success",
        status: err ? -1 : 0
      });
    });
  });

  /* 获取所有文章*/
  app.get(URLS.ARTICLE_GET_LIST, (req, res)=>{
    articleModel.find({})
      .populate('author', 'nickname')
      .exec( (err, docs) => {
        res.send({
          result: err ? null : {
            data: docs
          },
          msg: err || "ok",
          status: err ? -1 : 0
        });
      });
  });


  /* 获取 某篇文章的 详细信息*/
  app.get(URLS.ARTICLE_GET_DETAIL, (req, res)=>{
    let articleId = req.params.id;
    articleModel.find({_id: articleId})
      .populate("author")
      .exec( (err, docs) => {
        res.send({
          result: err ? null : docs[0],
          msg: err || "ok",
          status: err ? -1 : 0
        });
      });
  });

};
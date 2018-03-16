const express = require('express');
const router = express.Router();
const holidayModel = require("../schemas").holidayModel;
const URLS = require("./urls");

/** 获取前 n 个投票 */
router.get(URLS.GET_TOP_HOLIDAY, (req, res)=>{
  let last = req.query.size;
  holidayModel.find({})
    .sort({count: -1})
    .exec( (err, docs) => {
      let totalCount = 0;
      docs.forEach( doc => {
        totalCount += doc.count;
      });
      res.send({
        result: err ? null : { 
          data: docs.slice(0,last), 
          totalCount: totalCount 
        },
        msg: err || "ok",
        status: err ? -1 : 0
      });
    });
});

/** 投票 */
router.post(URLS.HOLIDAY_CHOOSE, (req, res, next) => {
  holidayModel.findOne({"name": req.body.name}, (err, holiday)=>{
    if(holiday){
      let count = req.body.isCancel ? holiday.count - 1 : holiday.count + 1;
      let msg = req.body.isCancel ? "取消成功" : "投票成功";
      holidayModel.update({"name": holiday.name},{"count": count}, (err, doc)=>{
        res.send({
          result: err || { time: new Date().getTime(), count: doc.count },
          msg: err || msg,
          status: err ? -1 : 0
        });
      });
    }else {
      next();
    }
  });
}, (req, res) => {
  req.body["count"] = 1;
  req.body["id"] = String(new Date().getTime());
  let entity = new holidayModel(req.body);
  entity.save( (err, doc) => {
    if(!err){
      console.log("数据创建完成");
      console.log("doc is :");
      console.log(doc);
    }
    doc["time"] = new Date().getTime();
    res.send({
      result: err || doc ,
      msg: err || "投票成功!",
      status: err ? -1 : 0
    });
  });
});

module.exports = router;




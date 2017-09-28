
/*
  数据库的 CRUD 操作
*/

module.exports = { 
  handleSave: (req, model, callback) => {
    let obj = {};
    Object.keys(req.body).forEach( element => {
      obj[element] = req.body[element] || null;
    });
    if(req.user){
      obj["author"] = req.user._id;
    }
    let entity = new model(obj);
    entity.save( err => callback(err, entity) );
  }
};
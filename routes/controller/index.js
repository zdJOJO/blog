
/*
  数据库的 CRUD 操作
*/

module.exports = { 
  handleSave: (body, model, callback) => {
    let obj = {};
    Object.keys(body).forEach( element => {
      obj[element] = body[element] || null;
    });
    let entity = new model(obj);
    entity.save( err => callback(err, entity) );
  }
};
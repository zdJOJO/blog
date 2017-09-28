
const jwt = require('jsonwebtoken');

module.exports = {

  // 检验 token
  check_api_token: (req, res, next)=>{

    console.log('检查post的信息或者url查询参数或者头信息');

    //检查post的信息或者url查询参数或者头信息
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    // 解析 token
    if (token) {
      // 确认token
      jwt.verify(token, "A_LITTLE_DIFFICULT", function(err, decoded) {
        if (err) {
          return res.status(401).send({
            result: null,
            msg: 'token is error, please login again !',
            status: -1
          });
        } else {
          // 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
          req.user = decoded;
          console.dir(req.user);
          next();
        }
      });
    } else {
      // 如果没有token，则返回错误
      return res.status(401).send({
        result: null,
        msg: 'token is expired, please login again !',
        status: -1
      });
    }
  }

};
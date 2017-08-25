const express = require("express");
const path = require("path");

const app = express();
const routes = require("./routes")(app);

// 直接访问根目录　
app.use(express.static(__dirname + "/static")); 

//配置任何请求都转到index.html，而index.html会根据React-Router规则去匹配任何一个route
app.get("*", (req, res)=>{
  res.sendFile(path.resolve(__dirname, "./static/index.html"));
});

// 设定port变量，意为访问端口
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), ()=>{
  console.log(`Example app listening on port ${app.get("port")} !`);
});
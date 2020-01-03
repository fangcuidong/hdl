const express = require("express");
const mysql = require("mysql");
const md5 = require("md5");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const compression = require("compression");

//引入路由
const users = require("./routes/users");
const index = require("./routes/index");
const community = require("./routes/community");
const member = require("./routes/member");

//创建服务器
var app = express();

//启用GZIP压缩
app.use(compression());

//使用body-parser
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//配置跨域
//允许跨域程序端口
app.use(
  cors({
    //允许哪个程序列表 脚手架
    origin: [
      "http://haidilao.applinzi.com/",
      // "http://127.0.0.1:8080",
      "http://localhost:8080",
      "http://127.0.0.1:5500"
    ],
    //每次请求验证
    credentials: true
  })
);

//设置跨域访问
app.all("http://haidilao.applinzi.com/", (req, res, next) => {
  res.header("Access-Control-Allow-Credentials: true");
  next();
});

// //设置跨域访问
// app.all("*", function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

//配置session对象
app.use(
  session({
    secret: "hgjgjghjhgjhgjgh", //加密条件
    resave: true, //每次请求更新数据
    //cookie:{maxAge:60*1000*30},//过期时间ms
    saveUninitialized: true //保存初始化数据
  })
);

//指定静态目录  public
app.use(express.static("public"));

//启动监听端口
app.listen(4000);

//使用路由
app.use("/users", users);
app.use("/index", index);
app.use("/community", community);
app.use("/member", member);

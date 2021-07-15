/*
 * @Author: Murphy
 * @Date: 2021-07-15 09:18:02
 * @LastEditTime: 2021-07-15 09:19:32
 */
const http = require("http");
http
  .createServer((req, res) => {
    res.write("hello man"), res.end();
  })
  .listen(5000, () => console.log("server running"));

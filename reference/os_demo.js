/*
 * @Author: Murphy
 * @Date: 2021-07-14 20:24:02
 * @LastEditTime: 2021-07-14 20:27:37
 */
const os = require("os");

//platform
console.log(os.platform());

//cpu architecture
console.log(os.arch());

//cpu cour info
console.log(os.cpus());

//free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());

//home dir
console.log(os.homedir());

//uptime
console.log(os.uptime());

/*
 * @Author: Murphy
 * @Date: 2021-07-14 20:00:21
 * @LastEditTime: 2021-07-14 20:06:26
 */
const path = require("path");

//Base file names
console.log(path.basename(__filename));

//directory names
console.log(path.dirname(__filename));

//file extensions
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));
//access properties
console.log(path.parse(__filename).base);

//concatenate paths
//"test" is folder name
//E:\TEC\Nodejs\node.js\reference\test\hello.html
console.log(path.join(__dirname, "test", "hello.html"));

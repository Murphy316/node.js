/*
 * @Author: Murphy
 * @Date: 2021-07-14 20:07:04
 * @LastEditTime: 2021-07-14 20:22:45
 */
const fs = require("fs");
const path = require("path");

//create a folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("folder created");
// });

//create and write to file
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "hello man", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("file created");

//   //callback
//   //file appand
//   fs.appendFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     " hello man",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("file created");
//     }
//   );

//   fs.appendFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     " hello man",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("file created");
//     }
//   );
// });

//overwrite last file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   " i love nodejs",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("file created");
//   }
// );

//read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

//rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) {
      throw err;
    }
    console.log("renamed");
  }
);

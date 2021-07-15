/*
 * @Author: Murphy
 * @Date: 2021-07-14 20:38:12
 * @LastEditTime: 2021-07-14 20:43:40
 */
const EventEmitter = require("events");

//create class
class MyEmitter extends EventEmitter {}

//init obj
const myEmitter = new MyEmitter();

//event listener
myEmitter.on("eventss", () => {
  console.log("event fired");
});

//init event
//event fired!!!
myEmitter.emit("eventss");
myEmitter.emit("eventss");
myEmitter.emit("eventss");
myEmitter.emit("eventss");
//this one not fired
myEmitter.emit("event");

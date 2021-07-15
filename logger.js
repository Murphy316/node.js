/*
 * @Author: Murphy
 * @Date: 2021-07-14 20:42:51
 * @LastEditTime: 2021-07-14 20:50:11
 */
const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    //call events
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;

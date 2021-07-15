/*
 * @Author: Murphy
 * @Date: 2021-07-14 20:42:51
 * @LastEditTime: 2021-07-15 09:21:23
 */
const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    //call events
    this.emit("message", { id: uuid.v4(), msg });
  }
}

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => {
  console.log(`called listener`, data);
});

logger.log("hello man");

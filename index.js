/*
 * @Author: Murphy
 * @Date: 2021-07-14 19:50:09
 * @LastEditTime: 2021-07-14 20:50:59
 */
// const Person = require("./person");

// const person1 = new Person("qi", 24);

// person1.greeting();

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => {
  console.log(`called listener`, data);
});

logger.log("hello man");

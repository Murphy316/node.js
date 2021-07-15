/*
 * @Author: Murphy
 * @Date: 2021-07-14 19:51:36
 * @LastEditTime: 2021-07-14 19:54:51
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name}, and my age is ${this.age}`);
  }
}
module.exports = Person;

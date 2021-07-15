/*
 * @Author: Murphy
 * @Date: 2021-07-14 20:27:54
 * @LastEditTime: 2021-07-14 20:36:33
 */
const url = require("url");

const myUrl = new URL(
  "https://mywebsite.com:8000/hello.html?id=100&status=active"
);

//serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());

//host (root domain)
console.log(myUrl.host);

//host name (does not get port)
console.log(myUrl.hostname);

//path name
console.log(myUrl.pathname);

//serialize query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${value}, ${name}`);
});

//local module
const { a, add } = require("./local-1"); //a,add get by Destructuring
const { a: a2, add: add2 } = require("./local-2"); //a,add get by Destructuring
console.log(a2, add2(2, 3, 20));

//build in module
const path = require("path");
console.log(path.parse("/C:/Projects/Learing-Node/index.js"));

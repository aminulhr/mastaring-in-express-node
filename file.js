// read and write file by syncronas way

const fs = require("fs");
// reading a file text
const readTest = fs.readFileSync("./texts/read.txt", "utf-8");
// console.log(readTest);

// writing a text
const writeText = fs.writeFileSync(
  "./texts/write.txt",
  readTest + "this is writing text"
);
console.log(writeText);

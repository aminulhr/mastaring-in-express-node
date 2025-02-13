const fs = require("fs");

//reading file asynchronously

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("error reading file");
  }

  fs.writeFile("./texts/read2.txt", "utf-8", (err) => {
    if (err) {
      throw Error("Error is writing data");
    }
  });
});
console.log("testing async");

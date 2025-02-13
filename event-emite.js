// js event driven arkitracture

const EventEmitter = require("events");
const myEmitter = new EventEmitter();
//listener
myEmitter.on("eid", () => {
  console.log("Eid Mubarok");
});
myEmitter.on("eid", (gift) => {
  console.log(`Take my salam and a ${gift} `);
});
myEmitter.emit("eid", "Ator");

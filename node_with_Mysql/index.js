const express = require("express");
const insert = require("./insertData");
// const read = require("./readData");
const server = express();



server.use(express.json);
server.post("/insert", function (req, res) {
  insert();
});

// server.get("/read", function (req, res) {
//   console.log(read());
// });
// const data = read;
// console.log(data);
server.listen(3500);

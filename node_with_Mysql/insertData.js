const express = require("express");
const mysql = require("mysql2/promise");

const main = async () => {
  const con = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "food_ordering",
  });

  const insert = await con.execute(
    "INSERT INTO `user`(`userId`, `username`, `email`, `password`, `roleId`, `mobileNo`) VALUES (4,'himanshu','himanshu@gmail.com','himanshu123',1,9054760650)"
  );
  if (insert) {
    console.log("Inserted");
  } else {
    console.log("Not Insert");
  }
};

main();

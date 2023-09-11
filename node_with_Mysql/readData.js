const express = require("express");
const mysql = require("mysql2/promise");

const main = async () => {
  const con = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "food_ordering",
  });

  const results = await con.execute("SELECT * FROM user");

  console.log(results);
};
main();

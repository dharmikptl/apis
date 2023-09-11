const express = require("express");
const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "food_ordering",
});
const mobileNo=9054760650;
function insert() {
  con.connect(function (err) {
    if (err) throw err;
    let sql =
      `UPDATE user SET mobileNo=${mobileNo} WHERE 1`;
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("updated");
      }
    });
  });
}

return insert()

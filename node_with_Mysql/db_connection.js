const mysql = require("mysql");

const server = express();

export function myconnection(){
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "food_ordering",
});

return con;

}


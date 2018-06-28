var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "NodeJS_MySQL"
});
con.connect(function(err){
  if (err) {
    console.log(err);
    console.log("Loi roi em oi");
    return;
  }
  console.log("OK. Successful deens database");
});

module.exports = con;

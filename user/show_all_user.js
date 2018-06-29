var con = require('../mysql_connect.js');

function showuser(Rows){
  var result =[];
  for (var i=0; i < Rows.length; i++){
    result.push({
      id       : Rows[i].IdUser,
      username : Rows[i].nameUser,
      email    : Rows[i].emailUser,
      address  : Rows[i].addressUser,
    })
  }
  return result;

}
exports.showalluser = function showalluser(callback){
  var sql= "SELECT * FROM `NodeJS_MySQL`.`User`;"
  con.query(sql, function(err,rows) {

    callback(null,JSON.stringify(showuser(rows)))
  });

}

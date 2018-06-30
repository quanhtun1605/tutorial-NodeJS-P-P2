var con = require('../mysql_connect.js');

function showdevice(Rows){
  var result =[];
  for (var i=0; i < Rows.length; i++){
    result.push({
      idDevice      : Rows[i].idDevice,
      nameDevice    : Rows[i].nameDevice,
      idUser        : Rows[i].idUser
    })
  }
  return result;

}
exports.showallDeviceOfUser = function showallDeviceOfUser(id, callback){
  var ID = parseInt(id);
  var sql= "SELECT * FROM `NodeJS_MySQL`.`devices` "
          +"WHERE  `NodeJS_MySQL`.`devices`.`idUser` = '"+ ID + "';"
  con.query(sql, function(err,rows) {

    callback(null,JSON.stringify(showdevice(rows)))
  });

}

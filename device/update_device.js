var con = require('../mysql_connect.js');

exports.updateDevice = function updateDevice(id, name, idUser, callback) {
  var ID = parseInt(id);
  var sql = " UPDATE `NodeJS_MySQL`.`devices`  "
            + " SET `NodeJS_MySQL`.`devices`.`nameDevice`='" + name + "', "
            +"`NodeJS_MySQL`.`devices`.`idUser`='" + idUser + "' "
            +"WHERE `NodeJS_MySQL`.`devices`.`idDevice`='" + id + "'";
  con.query(sql, function(err, rows){
    var result = {};
    console.log(err);
    if(rows.affectedrows = 1)
      result = {'status' : 'done'};
    else
      result = {'status' : 'fail'};
    callback(null,result);
  });

}

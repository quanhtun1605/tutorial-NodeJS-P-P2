var con = require('../mysql_connect.js');

exports.updateUser = function updateUser(id, usename, email, address, callback) {
  var ID = parseInt(id);
  var sql = " UPDATE `NodeJS_MySQL`.`User`  "
            + " SET `NodeJS_MySQL`.`User`.`nameUser`='" + usename + "', "
            +"`NodeJS_MySQL`.`User`.`emailUser`='" + email + "', "
            +"`NodeJS_MySQL`.`User`.`addressUser`=' " + address + " ' "
            +"WHERE `NodeJS_MySQL`.`User`.`IdUser`='" + ID + "'";
  con.query(sql, function(err, rows){
    var result = {};
    if(rows.affectedrows = 1)
      result = {'status' : 'done'};
    else
      result = {'status' : 'fail'};
    callback(null,result);
  });

}

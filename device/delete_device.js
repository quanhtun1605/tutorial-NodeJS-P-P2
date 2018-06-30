var con = require('../mysql_connect.js');

exports.deleteDevice = function deleteDevice(id, callback) {
  var ID = parseInt(id);
  var sql = "DELETE FROM `NodeJS_MySQL`.`devices` "
            +"WHERE `NodeJS_MySQL`.`devices`.`idDevice`='" + ID + "'";
  con.query(sql, function(err, rows){
    var result = {};
    if(rows.affectedrows = 1)
      result = {'status' : 'done'};
    else
      result = {'status' : 'fail'};
    callback(null,result);
  });

}

var con = require('../mysql_connect.js');

exports.deleteUser = function deleteUser(id, callback) {
  var ID = parseInt(id);
  var sql = "DELETE FROM `NodeJS_MySQL`.`User` "
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

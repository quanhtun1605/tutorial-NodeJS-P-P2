var con = require('../mysql_connect.js');
function serverAnswerShowDeviceUser(Id, name, idUser) {
  return {
    idDevice     : Id,
    nameDevice   : name,
    idUser       : idUser
  };
}

exports.showDevice = function showDevice(iddevice, callback){
  var ID = parseInt(iddevice);
  var sql = "SELECT * FROM `NodeJS_MySQL`.`devices` " +
            "WHERE `NodeJS_MySQL`.`devices`.`idDevice` = '" + ID + "'";
  con.query(sql, function(err,rows){
    callback(null, JSON.stringify(serverAnswerShowDeviceUser(
        rows[0].idDevice,
        rows[0].nameDevice,
        rows[0].idUser
        )));
  });

}


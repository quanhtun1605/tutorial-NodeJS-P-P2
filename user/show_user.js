var con = require('../mysql_connect.js');
function serverAnswerShowUser(Id, Username, Email, Address) {
  return {
    IdUser        : Id,
    nameUser      : Username,
    emailUser     : Email,
    addressUser   : Address
  };
}

exports.showUser = function showUser(iduser, callback){
  var ID = parseInt(iduser);
  var sql = "SELECT * FROM `NodeJS_MySQL`.`User` " +
            "WHERE `NodeJS_MySQL`.`User`.`IdUser` = '" + ID + "'";
  con.query(sql,function(err,rows){
    callback(null, JSON.stringify(serverAnswerShowUser(
        rows[0].IdUser,
        rows[0].nameUser,
        rows[0].emailUser,
        rows[0].addressUser
      )));

  });

}


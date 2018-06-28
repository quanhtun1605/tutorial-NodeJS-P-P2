var con = require('../mysql_connect.js');

function randomInt(low,high) {
  return Math.floor(Math.random() * (high - low) + low);
};
exports.createUser = function createUser(username, email, address, callback){
  var idUser = randomInt(10000,99999);
  var sql = "INSERT INTO `NodeJS_MySQL`.`User` "
            +"(`IdUser`, `nameUser`, `emailUser`, `addressUser`)"
            +"VALUE ('"+ idUser + "','"+ username + "','"+ email + "','"+ address + "') ";

  con.query(sql, function(err,rows) {
    var result = {};
    if(rows.affectedrows = 1)
        result = {'status' : 'done'};
    else result = {'status' : 'fail'};
    callback(null,result);

  });
}

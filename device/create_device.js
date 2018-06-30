var con = require('../mysql_connect.js');

function randomInt(low,high) {
  return Math.floor(Math.random() * (high - low) + low);
};
exports.createDevice = function createDevice(name, idUser, callback){
  var id = randomInt(10000,99999);
  var sql = "INSERT INTO `NodeJS_MySQL`.`devices` "
            +"(`idDevice`, `nameDevice`, `idUser`)"
            +"VALUE ('"+ id + "','"+ name + "','"+ idUser + "') ";

  con.query(sql, function(err,rows) {
    var result = {};
    if(rows.affectedrows = 1)
        result = {'status' : 'done'};
    else result = {'status' : 'fail'};
    callback(null,result);

  });
}

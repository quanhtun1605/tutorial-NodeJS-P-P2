var app = require('./app');
var mysql = require('./mysql_connect.js');
var port = process.env.PORT || 3000;
var server = app.listen(port,function(){
  console.log("ok baby" + port);
});

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./mysql_connect.js');
var cUser = require('./user/create_user.js');
var sauser = require('./user/show_all_user.js');
var sUser = require('./user/show_user.js');
var dUser = require('./user/delete_user.js');
var uUser = require('./user/update_user.js');

var cDevice = require('./device/create_device.js');
var sDevice = require('./device/show_device.js');
var saDevice = require('./device/show_all_device.js');
var uDevice = require('./device/update_device.js');
var dDevice = require('./device/delete_device.js');
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods',
                'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers',
                'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//User
//Create user
app.post('/create_user', function(req,res) {
  console.log("create_user");
  var username = req.body.nameUser;
  var email = req.body.emailUser;
  var address = req.body.addressUser;
  cUser.createUser(username, email, address, function(err,result) {
      console.log(result);
      res.send(result);
  });
});
//Show all User
app.get('/show_all_user', function(req,res){
  console.log("show_all_user");
  sauser.showalluser(function(err,result){
    console.log(result);
    res.send(result);
  });
});
//Show User
app.post('/show_user', function(req,res){
  console.log("show_user");
  var id = req.body.IdUser;
  sUser.showUser(id, function(err,result){
    console.log(result);
    res.send(result);
  });
});
//Delete user
app.post('/delete_user', function(req,res){
  console.log("delete_user");
  var id = req.body.IdUser;
  dUser.deleteUser(id,function(err,result){
    console.log(result);
    res.send(result);
  });
});
//Update User
app.post('/update_user', function(req,res){
  console.log("update_user");
  var id = req.body.IdUser;
  var name = req.body.nameUser;
  var email = req.body.emailUser;
  var address = req.body.addressUser;
  uUser.updateUser(id, name, email, address, function(err,result){
    console.log(result);
    res.send(result);
  });
});
//___________________________________________________END USER____________________________________________________
//___________________________________________________ Device_____________________________________________________
//Create Device
app.post('/create_device', function(req,res){
  console.log("create_device");
  var name = req.body.nameDevice;
  var idUser = req.body.idUser;
  cDevice.createDevice(name, idUser, function(err, result){
    console.log(result);
    res.send(result);
  });
});
//Show Device
app.post('/show_device', function(req,res){
  console.log("show_device");
  var id = req.body.idDevice;
  sDevice.showDevice(id, function(err,result){
    console.log(result);
    res.send(result);
  });
});
//Show All Device Of User
app.post('/show_all_device_of_user', function(req,res){
  console.log("show_all_device_of_user");
  var id = req.body.idUser;
  saDevice.showallDeviceOfUser(id, function(err,result){
    console.log(result);
    res.send(result);
  });
});
//DELETE DEVICE
app.post('/delete_device', function(req,res){
  console.log("delete_device");
  var id = req.body.idDevice;
  dDevice.deleteDevice(id,function(err,result){
    console.log(result);
    res.send(result);
  });
});

//UpDate Device
app.post('/update_device', function(req,res){
  console.log("update_device");
  var id = req.body.idDevice;
  var name = req.body.nameDevice;
  var idUser = req.body.idUser;
  uDevice.updateDevice(id, name, idUser, function(err,result){
    console.log(result);
    res.send(result);
  });
});
module.exports = app;

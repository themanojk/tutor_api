var db = require("../db_config/db_config").localConnect();
var mysql = require('mysql');


var login = function(req, res, next) {
    var user = req.body;
    var response = new Array();

    let sql = "select * from ts_school where email = '"+user.email+"' AND password = '"+user.password+"'";
    
    db.query({ sql: sql }, function(err, rows, fields) {

      if(rows.length>0){
        response.push({status: "true", message: "Login Success", result: rows[0]});
      }else{
        response.push({status: "false", message: "Invalid email or password"});
      }      
      
      res.send(JSON.stringify(response[0]));
    });
  };

var signup = function(err, res, next){
  var user = req.body;
  
      let sql = "select * from ts_school where email = '"+user.email+"'";
      
      db.query({ sql: sql }, function(err, rows, fields) {
        res.json(rows);
      });
};
  module.exports = {
    //deleteUser: deleteUser,
    login: login,
    signup:signup
    //updateUser:updateuser
  };
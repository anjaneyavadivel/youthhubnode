'use strict'
// Module dependencies
console.log("This is Youthhub");
const fs = require('fs');
const _ = require('lodash');
var express    = require('express'),
mysql = require('mysql');
const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "youthhub_live"
});

// con.connect(function(err) {
//   if (err) throw err;
// });




app.get('/', function(req, res) {
    //res.sendfile(__dirname + '/index.html');
    con.query("SELECT * FROM job_status", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
        //res.send('User added to database with ID: ' + result[0].name);
  });
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));

var mysql = require('mysql');
    port = process.env.PORT || 4205;

if (port === 4205) {

    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "hub"
      });
}

   //same as above, with live server details
connection.connect();

module.exports = connection;
// module.exports = {

//     //'url' : 'mongodb://127.1.1.0/express' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
//     'url' : 'mongodb://127.1.1.0/express' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
//      //Please replace your host file Here : 127.1.1.0 , Express is Collection Name (Database Name)
// };
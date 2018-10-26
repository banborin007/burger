// create variable for require
var mySQL = require("mysql");

// establish connection
var connection = mySQL.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
    }
    return;
});

module.exports = connection;
var mysql = require('mysql');
var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "library_ms"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    if (err) throw err;
//    console.log("Database created");
  });

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
extended: true
}));

app.get('/books', function (req, res) {
   console.log(req);
   connection.query("SELECT * FROM `books`", function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

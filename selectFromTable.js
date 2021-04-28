var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  /*con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
	console.log(result[0].address);
  });*/
  //The third parameter of the callback function is an array containing information about each field in the result.
   con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
    console.log(fields[1].name);
  });
});
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {

	if (err) throw err;

	/* con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
	if (err) throw err;
	console.log(result);
	});*/
	con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
	if (err) throw err;
	console.log(result);
	});

///When query values are variables provided by the user, you should escape the values
	var adr = 'Mountain 21';
	var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
	con.query(sql, function (err, result) {
	  if (err) throw err;
	  console.log(result);
	});

	var sql = 'SELECT * FROM customers WHERE address = ?';
	con.query(sql, [adr], function (err, result) {
	  if (err) throw err;
	  console.log(result);
	});
	
		//sorts the result ascending
	con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
	if (err) throw err;
	console.log(result);
	});

	//sorts the result desc
	con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
		if (err) throw err;
		console.log(result);
	});

});
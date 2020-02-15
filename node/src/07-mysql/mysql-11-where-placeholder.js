/*

You can also use a ? as a placeholder 
for the values you want to escape.

In this case, the variable is sent as the 
second parameter in the query() method:

Escape query values by using the placeholder ? method:

*/

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var adr = 'Mountain 21';
  //Escape the address value:
  var sql = 'SELECT * FROM customers WHERE address = ?';
  //Send an array with value(s) to replace the escaped values:
  con.query(sql, [adr], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
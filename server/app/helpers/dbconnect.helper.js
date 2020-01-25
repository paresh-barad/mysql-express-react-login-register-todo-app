const mysql = require('mysql');
const dbConfig = require('../../config/database.config');
const connection = mysql.createConnection(dbConfig.connection);
   
connection.connect(function(err){
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});
module.exports = connection;

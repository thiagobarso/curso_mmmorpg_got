var mongo = require('mongodb');

var connMongoDB = function(){

	var  db = new mongo.Db(
		'got',
		new mongo.Server(
			'192.168.56.101',
			'27017',
			{}
		),
		{}
	);

	return db;
}


module.exports = function(){
	return connMongoDB;
}
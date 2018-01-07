var express = require('express');
var router = express.Router();

//var mysql = require('../dbconnect/mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var test = {
		id : 0,
		name : "Oumar",
		phone : "012345678"
	};

	res.json(test);

  	//res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var spots = require('../controllers/spots');

/* GET home page. */
router.get('/', function(req, res) {

	getAllSpots(sendData);

	function sendData(data) {
		res.render('index', { title: 'Anomnom', section: 'index', data : data });
	}
	
});

router.post('/add', function(req, res) {
	
	var spot = req.body;
	spots.add(spot);

	console.log(spot);
	
	res.render('spot', { spot : spot });
	

});

router.get('/admin', function(req, res) {
	getAllSpots(sendData);

	function sendData(data) {
		res.render('index', { title: 'Anomnom Admin', section: 'admin', data : data });
	}
	// spots.getAll(function(spots) {
	// 	var data = {};
	// 	data.spots = spots;
	// 	console.log(data);
	// 	res.render('admin', { title: 'Anomnom Admin', data : data });
	// });
});

router.post('/remove', function(req, res) {

	var data = req.body;
	spots.removeSpot(data.id);
	res.sendStatus(200);

});

function getAllSpots(callback) {
	spots.getAll(function(spots) {
		var data = {};
		data.spots = spots;
		callback(data);
	});
}

module.exports = router;

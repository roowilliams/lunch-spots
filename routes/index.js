var express = require('express');
var router = express.Router();
var spots = require('../controllers/spots');

/* GET home page. */
router.get('/', function(req, res) {
	spots.getAll(function(spots) {
		var data = {};
		data.spots = spots;
		console.log(data);
		res.render('index', { title: 'Anomnom', data : data });
	});
	
});

router.post('/add', function(req, res) {
	
	var spot = req.body;
	spots.add(spot);
	res.sendStatus(200);

});

router.get('/admin', function(req, res) {
	spots.getAll(function(spots) {
		var data = {};
		data.spots = spots;
		console.log(data);
		res.render('admin', { title: 'Anomnom Admin', data : data });
	});
});

router.post('/remove', function(req, res) {

	var data = req.body;
	console.log(data);
	spots.removeSpot(data.id);
	res.sendStatus(200);

});

module.exports = router;

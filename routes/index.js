var express = require('express');
var router = express.Router();

var data = {

	spots: [

		{ 
			name: 'Papa Poulet',
			description: 'Blah blah',
			tip: 'The club sandwich is fucking awesome',
			cost: '8-15',
			mapURL: 'http://maps.google.com',
			mapThumbNail: '/images/map.png',
			likes: 0,
			dislikes: 0
		},

		{ 
			name: 'Chopt',
			description: 'Fake salad.',
			tip: 'Don\'t go here.',
			cost: '8-15',
			mapURL: 'http://maps.google.com',
			mapThumbNail: '/images/map.png',
			likes: 0,
			dislikes: 0
		},

	]
};

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Anomnom', data : data });
});

router.post('/add', function(req, res) {
  res.send('ok');
  console.log(req.body);
});

module.exports = router;

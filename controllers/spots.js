var Spot = require('../models/spot');

var spots = {

	data :{

		spots: [

		{ 
			name: 'Papa Poulet',
			description: 'Blah blah',
			tip: 'The club sandwich is fucking awesome',
			cost: '8-15',
			mapURL: 'http://maps.google.com',
			mapThumbNail: '/images/map.png',
			upvotes: 0,
			downvotes: 0
		},

		{ 
			name: 'Chopt',
			description: 'Fake salad.',
			tip: 'Don\'t go here.',
			cost: '8-15',
			mapURL: 'http://maps.google.com',
			mapThumbNail: '/images/map.png',
			upvotes: 0,
			downvotes: 0
		},

		]
	},

	getAll : function(cb) {

		Spot.find({}, function(err, spots) {
			if (err) throw err;
			
			cb(spots);
		});
	},

	add : function(spot) {

		spot.upvotes = spot.downvotes = 0;

		// Create a new record ready for db writing
		var spotRecord = new Spot(spot);

		spotRecord.save(function(err) {
			if (err) throw err;
			console.log('Spot saved.');
		});
		

		// var spotsList = spots.data.spots;
		// spotsList.push(spot);

		// console.log(spots.data.spots);
	},

	upVote : function(arguments) {
		
	},

	downVote : function(arguments) {
		
	},

	removeSpot : function(id, cb) {
		console.log(id);
		Spot.findOneAndRemove({ _id: id }, function(err) {
			if (err) throw err;
			console.log('Spot %s deleted.', id);
		});
		
	}


}






module.exports = spots;
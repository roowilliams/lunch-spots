var mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/lunch-spots');
mongoose.connect('mongodb://localhost/lunch-spots');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
});

var Schema = mongoose.Schema;

// create a schema
var spotSchema = new Schema({

	name: { type: String, required: true },
	description: { type: String, required: true },
	cost: String,
	tip: String,
	mapURL: String,
	mapThumbnail: String,
	upvotes: Number,
	downvotes: Number,
	created_at: Date,
	updated_at: Date

});

// on every save, add the date
spotSchema.pre('save', function(next) {
	// get the current date
	var currentDate = new Date();
	// change the updated_at field to current date
	this.updated_at = currentDate;

	// if created_at doesn't exist, add to that field
	if (!this.created_at) {
		this.created_at = currentDate;
	}

	next();

});

// the schema is useless so far
// we need to create a model using it
var Spot = mongoose.model('Spot', spotSchema);

// make this available to our users in our Node applications
module.exports = Spot;
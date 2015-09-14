$(document).ready(function() {
	console.log('ready');
	// Event handlers
	$("#add-spot").submit(function( event ) {
		event.preventDefault();
		var spot = $('form#add-spot').serializeObject();

		saveSpot(spot);

		createSpotHTML(spot);
	});

	function createSpotSuccess(arguments) {
		$('#add-spot').html('<h2>Thanks!</h2>');

		var timer = setTimeout(function() {
			$('#form-modal').modal('hide');
		}, 600);
	}

	function createSpotHTML(spot) {

	};


	// Functions

	function loadFromDB(arguments) {
		
	};
	
	function saveSpot(spot) {
		console.log('Saving %s', spot);
		$.ajax({
			type: 'POST',
			url: '/add',
			context: document.body,
			data: spot,
			success: function(){
				createSpotSuccess(spot.name);
			}
		});
		
	};

});
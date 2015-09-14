$(document).ready(function() {
	console.log('ready');
	// Event handlers
	
	$('.add-spot-btn').click(function(event) {
		$('#add-spot').trigger('reset');
		$('#add-spot').fadeIn();
	});

	$('#add-spot').submit(function(event) {
		event.preventDefault();
		var spot = $('form#add-spot').serializeObject();

		console.log(spot);

		saveSpot(spot);
		createSpotHTML(spot);

	});

	$('.remove-spot-btn').click(function(event) {
		event.preventDefault();
		var id = $(this).parent().attr('data-id');
		console.log(id);

		removeSpot(id);


	});


	function createSpotHTML(spot) {

	};


	// Functions


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



	function removeSpot(id) {

		var data = { id : id };

		$.ajax({
			type: 'POST',
			url: '/remove',
			context: document.body,
			data: data,
			success: function(){
				removeSpotSuccess(id);
			}
		});
	};

	function createSpotSuccess(name) {

		$('#add-spot').fadeOut();

		var timer = setTimeout(function() {
			$('#form-modal').modal('hide');
		}, 800);
	};

	function removeSpotSuccess(id) {

		$("div[data-id='" + id + "']").parent().fadeOut();

		console.log('Spot removed.');

	};

});
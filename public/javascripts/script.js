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


	});

	$('.remove-spot-btn').click(function(event) {
		event.preventDefault();
		var id = $(this).parent().attr('data-id');
		console.log(id);

		removeSpot(id);


	});



	// Functions


	function saveSpot(spot) {
		console.log('Saving %s', spot);
		$.ajax({
			type: 'POST',
			url: '/add',
			context: document.body,
			data: spot,
			success: function(response){
				createSpotSuccess(response);
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

	function createSpotSuccess(response) {

		$('#add-spot').fadeOut();

		var timer = setTimeout(function() {

			//
			// Add thank you msg here
			// 

			$('#form-modal').modal('hide');
		}, 800);

		$('#spots-list').prepend('<li class="spot">' + response + '</li>');


	};

	function removeSpotSuccess(id) {

		$("div[data-id='" + id + "']").parent().fadeOut();

		console.log('Spot removed.');

	};

});
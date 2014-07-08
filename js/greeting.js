$(function() {

	$('body').on('click', '[data-action="greeting"]', function() {

		var name = $('#greeting-name').val();

		$('#greeting [data-output]').text('Hello, ' + name + '!');

	});

});
$(function() {

	$('body').on('click', '[data-action="helloWorld"]', function() {

		$('#helloWorld [data-output]').text('Hello, Barracuda!');

	});

});
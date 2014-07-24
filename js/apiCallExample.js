var copyApi = {
	getJsonRpcClient: function() {
		var client = new $.JsonRpcClient({
			ajaxUrl: 'https://apiweb.copy.com/jsonrpc',
			headers: {
				'Accept': 'application/json',
				'X-Api-Version': '1.0',
				'X-Authorization': 'ATU-ccb9b3af859e12eb772f61e8614649dce6633fac',
				'X-Client-Type': 'API',
				'X-Client-Version': '1.0.00'
			}
		});
		return client;
	},
	listJsExamplesDirContents: function(successCallback, errorCallback, breakOnPurpose) {
		var client = copyApi.getJsonRpcClient();

		if (breakOnPurpose) {
			delete client.options.headers['X-Authorization'];
		}

		client.call('list_objects', {
			'include_links': true,
			'include_thumbnails': true,
			'include_total_items': true,
			'sort_field': 'name',
			'sort_direction': 'asc',
			'path': '/JS-Examples',
			'limit': 100,
			'list_watermark': 0,
			'max_items': 100,
			'offset': 0
		}, successCallback, errorCallback);
	},
	getNameFromPath: function(path) {
		var
		pathSegments = path.split('/'),
		lastSegment = pathSegments[pathSegments.length-1];
		return lastSegment;
	}
};

$(function() {

	$('body').on('click', '[data-action="apiCallExample"]', function() {

		var $outputElement = $('#apiCallExample [data-output]');

		$outputElement.text('Fetching contents of "JS-Examples" directory...');

		copyApi.listJsExamplesDirContents(function(dirContents) {

			var outputString = '';

			$(dirContents.children).each(function(index, child) {

				var name = copyApi.getNameFromPath(child.path);

				outputString += '[' + child.type + '] ' + name + '\n';

			});

			$outputElement.text(outputString);

		});

	});

});
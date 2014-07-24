describe('apiCallExample', function() {

	/*jasmine.getFixtures().fixturesPath = '/';
	loadFixtures('examples.html');*/

	it('returns a properly configured instance of JsonRpcClient when copyApi.getJsonRpcClient is called', function() {

		var client = copyApi.getJsonRpcClient();

		expect(client instanceof $.JsonRpcClient).toBeTruthy();
		expect(client.options.ajaxUrl).toEqual('https://apiweb.copy.com/jsonrpc');
		expect(client.options.headers).toEqual({
			'Accept': 'application/json',
			'X-Api-Version': '1.0',
			'X-Authorization': 'ATU-ccb9b3af859e12eb772f61e8614649dce6633fac',
			'X-Client-Type': 'API',
			'X-Client-Version': '1.0.00'
		});

	});

	it('can get the name of a file/dir from the path', function() {

		var path = '/Awesome folder/Less awesome folder/Not that awesome folder/Really uncool file that nobody likes.jpg';

		expect(copyApi.getNameFromPath(path)).toEqual('Really uncool file that nobody likes.jpg');

	});

	it('gets a successful response from list_objects when copyApi.listJsExamplesDirContents is called', function(done) {

		copyApi.listJsExamplesDirContents(function(dirContents) {

			expect(typeof dirContents).toEqual('object');

			done();

		});

	});

	it('gets an error response from list_objects if no auth token is sent', function(done) {

		copyApi.listJsExamplesDirContents(function() {}, function(error) {

			expect(Number(error.code)).toEqual(1001);

			done();

		}, true);

	});

});
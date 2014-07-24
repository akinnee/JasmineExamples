describe('apiCallExample', function() {

	var copyApi;

	beforeEach(function() {
		copyApi = new CopyApi();
	});

	it('returns a properly configured instance of JsonRpcClient when copyApi.getJsonRpcClient is called', function() {

		var client = copyApi.getJsonRpcClient();

		// check that a real client is returned
		expect(client instanceof $.JsonRpcClient).toBeTruthy();

		// check that is is configured properly
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

		var
		path = '/Awesome folder/Less awesome folder/Not that awesome folder/Really uncool file that nobody likes.jpg',
		name = copyApi.getNameFromPath(path);

		expect(name).toEqual('Really uncool file that nobody likes.jpg');

	});


	// Using spies

	it('calls copyApi.getJsonRpcClient when copyApi.listJsExamplesDirContents is called', function() {

		// stub the getJsonRpcClient function so that it returns a non-working client
		copyApi.getJsonRpcClient = function() { return { call: function() {} }; };

		// spy on getJsonRpcClient so we know if it was called, and still make getJsonRpcClient function normally
		spyOn(copyApi, 'getJsonRpcClient').and.callThrough();

		copyApi.listJsExamplesDirContents();

		// was it called?
		expect(copyApi.getJsonRpcClient).toHaveBeenCalled();

	});


	// Async specs

	xit('gets a successful response from list_objects when copyApi.listJsExamplesDirContents is called', function(done) {

		copyApi.listJsExamplesDirContents(function(dirContents) {

			expect(typeof dirContents).toEqual('object');

			done();

		});

	});

	xit('gets an error response from list_objects if no auth token is sent', function(done) {

		copyApi.listJsExamplesDirContents(function() {}, function(error) {

			expect(Number(error.code)).toEqual(1001);

			done();

		}, true);

	});

});
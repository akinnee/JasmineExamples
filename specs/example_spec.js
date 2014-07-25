describe('example specs', function() {

	it('can create empty spies which know if they have been called', function() {

		var
		someSpy,
		someObject = {
			someFunction: function() { return 'I\'m useless.'; }
		};

		// creating a new spy and setting it to a variable
		someSpy = jasmine.createSpy('some');

		someSpy('test');

		expect(someSpy).toHaveBeenCalledWith('test');

		// replace an existing method with a spy
		spyOn(someObject, 'someFunction');

		someObject.someFunction();

		expect(someObject.someFunction).toHaveBeenCalled();

	});

	it('can spy on existing methods without modifying their functionality', function() {

		var
		suchObject = {
			soMethod: function() { suchObject.plzCall(); },
			plzCall: function() {}
		};

		// spy on plzCall to prove that soMethod still calls it
		spyOn(suchObject, 'plzCall');

		// spy on soMethod, which calls plzCall
		spyOn(suchObject, 'soMethod').and.callThrough();

		suchObject.soMethod();

		expect(suchObject.soMethod).toHaveBeenCalled();
		expect(suchObject.plzCall).toHaveBeenCalled();

	});

	it('can wait for async behavior to complete', function(done) {

		// do async stuff here
		setTimeout(function() {
			done();
			
		}, 100);

	});

});
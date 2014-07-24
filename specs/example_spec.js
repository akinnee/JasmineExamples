describe('example specs', function() {

	xit('can create empty spies which know if they have been called', function() {

		var
		someSpy,
		someObject = {
			someFunction: function() { return 'I\'m useless.'; }
		};

		// creating a new spy and setting it to a variable
		someSpy = jasmine.createSpy('some');

		expect(someSpy).toHaveBeenCalledWith('test');

		// replace an existing method with a spy
		spyOn(someObject, 'someFunction');

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

		done();

	});

});
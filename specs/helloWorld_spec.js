
/**
 * A test suite begins with a call to the global Jasmine function `describe`
 * with two parameters: a string and a function.
 * The string is a name or title for a spec suite – usually what is being tested.
 * The function is a block of code that implements the suite.
 */

describe('helloWorld', function() {

	/**
	 * I'm using jasmine-jquery to load my HTML fixtures. For Copy, we use RequireJS, so this is not necessary.
	 */
	jasmine.getFixtures().fixturesPath = '/';

	// load the HTML needed for this spec
	loadFixtures('examples.html');

	it('sets the output element\'s text to "Hello, Barracuda!" when the "Run" button is clicked.', function() {

		var
		$runButton = $('[data-action="helloWorld"]'),
		$output = $('#helloWorld [data-output]');

		// simulate a click on the "Run" button
		$runButton.click();

		/**
		 * `expect` asserts that a condition must be met for the test to pass.
		 * There are several types of assertions, but the most common is `toEqual`.
		 * It simply checks if 2 variables are "===".
		 *
		 * Some other included matchers:
		 * `toBe` checks if 2 references point to the same object.
		 * `toMatch` checks if a variable matches a regular expression.
		 * `toBeDefined` checks that the typeof a variable is no "undefined". There is also `toBeUndefined`.
		 * `toBeNull`
		 * `toBeTruthy`
		 * `toBeFalsy`
		 * `toContain` checks if a value is in an array.
		 * `toBeLessThan`
		 * `toBeGreaterThan`
		 * `toBeCloseTo` checks to see if a value is close to another, given a certain level a decimal precision,
		 *               i.e. `expect(3.33).toBeCloseTo(3.333333, 2);` would pass,
		 *                but `expect(3.33).toBeCloseTo(3.333333, 3);` would fail.
		 * `toThrow` checks if a function throws an exception.
		 *
		 * Custom matchers can also be added to Jasmine by calling `jasmine.addMatchers`.
		 *
		 * `not`
		 * Any assertion can be made its opposite by chaining `not` into the function call.
		 *               ex: `expect(2+2).not.toEqual(5);`
		 */
		expect($output.text()).toEqual('Hello, Barracuda!');

	});

});
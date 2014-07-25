# Getting this source code running

*  Install node and the node package manager
*  Install grunt/grunt-cli globally
*  Run `npm install` within the JasmineExamples project root folder. This will install the local dev dependencies.
*  Run `grunt`

# Notes

Useful links:

[http://jasmine.github.io/2.0/introduction.html](http://jasmine.github.io/2.0/introduction.html)

[https://github.com/akinnee/JasmineExamples](https://github.com/akinnee/JasmineExamples)

Part 1 - Introduction (setting up the dev environment & basic overview)

1. Node package manager

   1. npm init

2. Show how to set up grunt

   2. npm install -g grunt grunt-cli

   3. npm install --save-dev grunt grunt-contrib-connect grunt-contrib-jasmine grunt-contrib-watch

   4. Gruntfile.js

   5. grunt_tasks

       1. connect

       2. jasmine

       3. watch

3. Explain what the example programs do

4. Explain the anatomy of a Jasmine test

   6. Walk through what the helloWorld spec does

       4. Give a rundown of what other matchers are available since this test only uses `toEqual`

   7. Change the program while making sure the test still passes at the end

5. Ask someone to write a test for the greeting program

Part 2 - Advanced Features of Jasmine

1. Setup and teardown

   1. beforeEach 

       1. global beforeEach - called before every test, no matter which suite it is a part of

       2. local beforeEach - called before every test within a specific suite

   2. afterEach

2. Spies

   3. Creating a spy

       3. jasmine.createSpy(‘name of spy’)

   4. Spying on an existing method

       4. spyOn(object, ‘name of method’)

   5. Assertions

       5. toHaveBeenCalled

       6. toHaveBeenCalledWith

   6. Methods

       7. testSpy.calls.count() returns the number of times testSpy was called.

       8. testSpy.calls.argsFor(0) returns the arguments passed the first time testSpy was called.

       9. testSpy.calls.mostRecent() returns the context and arguments passed for the most recent time testSpy was called.

       10. testSpy.calls.reset() clears all tracking for a spy, returning to the state it was in when it was first created.

3. Testing asynchronous functionality

   7. By default all tests run synchronously, and any asynchronous behavior will run after the test completes, rendering it useless.

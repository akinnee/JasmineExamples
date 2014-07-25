module.exports = function(grunt) {
	'use strict';

	grunt.config.set('watch', {
		jasmine: {
			files: [
				'js/**/*.js',
				'specs/**/*.js',
				'!**/node_modules/**'
			],
			tasks: ['jasmine']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

};
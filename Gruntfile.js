module.exports = function(grunt) {
  'use strict';

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // Load Grunt plugins
  grunt.loadTasks('grunt_tasks');

  // Tasks
  grunt.registerTask('dev', 'Run tests and other dev related tasks.', [
    'connect', 'jasmine'
  ]);

  // Default task
  grunt.registerTask('default', ['dev']);

};
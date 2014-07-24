module.exports = function(grunt) {
  'use strict';

  grunt.config.set('jasmine', {
    run: {
      options: {
        host: 'http://localhost:8089/',
        vendor: [
          'lib/jquery.js',
          'lib/jasmine-jquery.js',
          'lib/jquery.jsonrpcclient.js'
        ],
        specs: 'specs/**/*_spec.js',
        keepRunner: true
      },
      src: [
        'js/helloWorld.js',
        'js/greeting.js',
        'js/apiCallExample.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

};
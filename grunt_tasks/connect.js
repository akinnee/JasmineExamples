module.exports = function(grunt) {
  'use strict';

  grunt.config.set('connect', {
    dev: {
      options: {
        base: [''],
        port: 8089,
        hostname: '*'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

};
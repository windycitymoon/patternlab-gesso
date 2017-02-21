module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.config.merge({
        copy: {
            patternlabStyleguide: {
                expand: true,
                cwd: '<%= pkg.themePath %>/pattern-lab/core/styleguide/',
                src: '**',
                dest: '<%= pkg.themePath %>/pattern-lab/public/styleguide/'
            }
        }
    });
};
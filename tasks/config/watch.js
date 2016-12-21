module.exports = function (grunt) {
  grunt.config.merge({
    watch: {
      gesso: {
        files : [ 'sass/**/*.scss' ],
        tasks : [ 'gessoBuildStyles' ],
        options: {
          livereload: true
        }
      },
      patternlab: {
        files: ['pattern-lab/source/**/*'],
        tasks: ['shell:patternlab'],
        options: {
          livereload: true,
          event: ['changed', 'added', 'deleted']
        }
      },
      svgs: {
        files : [ 'images/bg/*.svg' ],
        tasks : [ 'gessoBuildImages','gessoBuildStyles' ],
        options: {
          livereload: true
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-simple-watch');
}

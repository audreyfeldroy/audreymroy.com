module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    closureLint: {
        app:{
          closureLinterPath : '/Users/audreyr/.virtualenvs/audreymroy.com/lib/python2.7/site-packages/closure_linter',
          src: [ 'project/assets/js/*' ],
          options: {
            stdout: true,
            strict: true
          }
        }
      },
      closureFixStyle: {
        app:{
          closureLinterPath : '/Users/audreyr/.virtualenvs/audreymroy.com/lib/python2.7/site-packages/closure_linter',
          src: [ 'project/assets/js/*' ],
          options: {
            stdout: true,
            strict: true
          }
        }
      },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'project/assets/js/*.js',
        dest: 'www/js/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-closure-linter');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};

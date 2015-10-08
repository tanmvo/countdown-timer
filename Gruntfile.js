module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    php: {
      dist: {
        options: {
          hostname: '127.0.0.1',
          port: 9000,
          base: './',
          keepalive: true,
          open: false
        }
      }
    },
    browserSync: {
      dist: {
        bsFiles: {
          src: ['index.html', 'gif.php']
        },
        options: {
          proxy: '<%= php.dist.options.hostname %>:<%= php.dist.options.port %>',
          watchTask: true,
          notify: true,
          open: true,
          logLevel: 'silent',
          ghostMode: {
            clicks: true,
            scroll: true,
            links: true,
            forms: true
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-php');

  grunt.registerTask('default', ['php', 'browserSync']);
};
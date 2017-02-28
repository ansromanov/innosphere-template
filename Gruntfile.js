module.exports = function (grunt) {

  grunt.initConfig({
    sass: {
      dev: {
        options: {
          outputStyle: 'nested',
          sourceMap: true
        },
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      },
      slick: {
        options: {
          outputStyle: 'nested',
          sourceMap: true
        },
        files: [{
          expand: true,
          cwd: 'modules/slick/',
          src: ['*.scss'],
          dest: 'modules/slick/',
          ext: '.css'
        }]
      },
      // Настройки для продакшна
      prod: {
        options: {
          outputStyle: 'compressed',
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },

    watch: {
      sass: {
        files: ['css/*.{scss,sass}'], 
        tasks: ['sass:dev']
      },
      sass_slick: {
        files: ['modules/slick/*.{scss,sass}'], 
        tasks: ['sass:slick']
      }

    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', [
    'sass'
  ]);
  grunt.registerTask('default', [
    'watch'
  ]);

};
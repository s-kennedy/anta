module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower_concat: {
      all: {
        dest: {
          'js': 'build/js/_bower.js',
          'css': 'build/css/_bower.css'
        },
        mainFiles: {
          bootstrap: 'dist/css/bootstrap.min.css',
          'smooth-scroll': 'dist/js/smooth-scroll.min.js',
          handlebars: ['handlebars.min.js', 'handlebars.runtime.min.js']
        },
        bowerOptions: {
          relative: false
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/templates.js', 'src/js/index.js'],
        dest: 'build/js/custom.js',
      },
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'Anta.Templates',
          processName: function(filePath) {
            var pieces = filePath.split('/');
            return pieces[pieces.length - 1].split('.')[0];
          }
        },
        files: {
          'build/js/hbs.js': 'src/templates/*.hbs'
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, flatten: true, src: ['src/images/*'], dest: 'build/images' },
          { expand: true, flatten: true, src: ['src/images/favicon.ico'], dest: 'build' },
          { expand: true, flatten: true, src: ['bower_components/bootstrap/fonts/*'], dest: 'build/fonts'},
          { expand: true, flatten: true, src: ['src/css/*'], dest: 'build/css'},
          { expand: true, flatten: true, src: ['src/js/locales/*'], dest: 'build/js/locales'},
          { expand: true, flatten: true, src: ['src/*.html'], dest: 'build'},
        ]
      }
    },
    'ftp-deploy': {
      build: {
        auth: {
          host: 'ftp.antatranslations.com',
          port: 21,
          authKey: 'admin'
        },
        src: 'build',
        dest: '/',
        exclusions: ['build/**/.DS_Store', 'build/**/Thumbs.db']
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ftp-deploy');

  grunt.registerTask('default', ['handlebars', 'bower_concat', 'concat', 'copy']);
  grunt.registerTask('deploy', ['handlebars', 'bower_concat', 'concat', 'copy', 'ftp-deploy'])

};
'use strict';

var gulp = require('gulp'),
    iif = require('gulp-if'),
    sass = require('gulp-sass'),
    cssbeautify = require('gulp-cssbeautify'),
    htmlprettify = require('gulp-prettify'),
    del = require('del'),
    browserSync = require('browser-sync'),
    fileinclude = require('gulp-file-include'),
    checkPages = require('check-pages');

// Process app templates folder
gulp.task('buildTemplates', ['clean'], function() {
  return gulp
    .src(['apps/**', '!apps/**/templates/', '!apps/**/templates/*.html'])
    // generate sass
    .pipe(iif('*.scss', sass()))
    // beautify css
    .pipe(iif('*.css', cssbeautify({ indent: '  ' })))
    // process includes in html
    .pipe(iif('*.html', fileinclude()))
    // beautify html
    .pipe(iif('*.html', htmlprettify({indent_size: 2, preserve_newlines: false, end_with_newline: true, extra_liners: [], unformatted: []})))
    .pipe(gulp.dest('dist'));
});

// Process public folder
gulp.task('buildPublic', ['clean'], function() {
  return gulp
    .src('public/**')
    .pipe(gulp.dest('dist'));
});

// Generate all files
gulp.task('build', ['buildTemplates', 'buildPublic']);

// Clean dist folder
gulp.task('clean', function(cb) {
  del('dist', cb);
});

// Watch files for changes & reload
gulp.task('serve', ['build'], function () {
  browserSync({
    notify: false,
    server: ['dist']
  });

  gulp.watch(['public/*.*', 'apps/**/*.html', 'apps/**/*.{scss,css}'], ['build', browserSync.reload]);
});

// Tests
gulp.task('testServer', ['build'], function(cb) {
  // http://www.browsersync.io/docs/options/
  browserSync({ ui: false, open: false, notify: false, server: ['dist'], port: 9000 }, cb);
});

gulp.task('test', ['testServer'], function(cb) {
  var options = {
    pageUrls: [
      'http://localhost:9000/reading-list/',
      'http://localhost:9000/reading-list/alternates.html'
    ],
    checkLinks: true,
    summary: true
  };
  var errors = [],
      hasErrors = false;

  var errorConsole = {
    log:function() {},
    error: function(msg) {
      hasErrors = true;
      errors.push(msg);
    }
  };

  checkPages(errorConsole, options, function() {
    if (hasErrors) {
      console.error("There are failing tests\n" + errors.join('\n'));
      process.exit(1);
    } else {
      browserSync.exit();
    }
  });
});

gulp.task('default', ['build']);

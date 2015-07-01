'use strict';

var gulp = require('gulp'),
    iif = require('gulp-if'),
    sass = require('gulp-sass'),
    cssbeautify = require('gulp-cssbeautify'),
    del = require('del'),
    browserSync = require('browser-sync');

// Process app templates folder
gulp.task('buildTemplates', ['clean'], function() {
  return gulp
    .src('apps/**')
    .pipe(iif('*.scss', sass()))
    .pipe(iif('*.css', cssbeautify({ indent: '  ' })))
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

gulp.task('default', ['build']);

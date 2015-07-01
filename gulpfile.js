'use strict';

var gulp = require('gulp'),
    iif = require('gulp-if'),
    sass = require('gulp-sass'),
    cssbeautify = require('gulp-cssbeautify'),
    del = require('del');

gulp.task('build', ['clean'], function() {
  return gulp.src('apps/**')
    .pipe(iif('*.scss', sass()))
    .pipe(iif('*.css', cssbeautify({ indent: '  ' })))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
  del('dist', cb);
});

gulp.task('default', function() {
  gulp.start('build');
});

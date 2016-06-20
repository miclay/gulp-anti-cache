var gulp = require('gulp');
var nocache = require('../lib'); //var nocache = require('gulp-anti-cache');

gulp.task('nocache', function() {
  gulp.src('src/*.html')
    .pipe(nocache())
    .pipe(gulp.dest('dest/'));
});
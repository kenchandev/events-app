//  Import gulp packages.
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    inject = require(''),

    input = {
      'javascript': 'public/scripts/*.js'
    },

    output = {
      'javascript': 'public/scripts/min'
    };

//  Create a default task and log a simple message.
gulp.task('default', function(){
  return gutil.log('Gulp is running!');
});

gulp.task('watch', function(){
  gulp.watch()
});

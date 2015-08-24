//  Import gulp packages.
var gulp = require('gulp');
var gutil = require('gulp-util');

//  Create a default task and log a simple message.
gulp.task('default', function(){
  return gutil.log('Gulp is running!');
});

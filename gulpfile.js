/* Import gulp packages. */
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

/* Run JavaScript code through jshint. */
gulp.task('jshint', function() {
  return gulp.src(input.javascript)
             .pipe(jshint())
             .pipe(jshint.reporter('jshint-stylish'));
});

/*  Run 'watch' task when gulp is called. */
gulp.task('default', ['watch']);

/* Minify JavaScript files. */
gulp.task('build-js', function(){
  reutrn gulp.src(input.javascript)
             .pipe()
});

/* Watch files for any changes. Run this task on updates. */
gulp.task('watch', function(){
  gulp.watch(input.javascript, [jshint, 'build-js']);
});

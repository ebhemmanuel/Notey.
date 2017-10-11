var gulp = require('gulp')
var concat = require('gulp-concat')
gulp.task('js:build', function(){
	return gulp.src(['./js/app.js', './js/**/*.js'])
	.pipe(concat('./myApp.js'))
	.pipe(gulp.dest('./public/js'))
})
gulp.task('js:watch', ['js:build'], function() {
	gulp.watch('./js/**/*.js', ['js:build'])
})
gulp.task('default', ['js:watch'])
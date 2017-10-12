var gulp = require('gulp'),
	 concat = require('gulp-concat'),
	 sass = require('gulp-sass'),
	 uglify = require('gulp-uglify'),
	 cleanCSS = require('gulp-clean-css');
gulp.task('js:build', function() {
	return gulp.src(['./js/app.js', './js/**/*.js'])
	.pipe(concat('./myApp.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./public/js'))
})
gulp.task('js:watch', ['js:build'], function() {
	gulp.watch('./js/**/*.js', ['js:build'])
})
gulp.task('sass', function() {
	return sass('./build/sass/**/*.sass', {style:'expanded'})
	.pipe(css())
	.pipe(gulp.dest('./public/css/main.css'));
})
gulp.task('default', ['js:watch'])
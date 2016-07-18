var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');

// Future Variables for JS to compile:

// var concat = require('gulp-concat');
// var browserify = require('browserify');
// var tap = require('gulp-tap');
// var buffer = require('gulp-buffer');

gulp.task("default", ["compile-sass"], function(){

	browserSync.init({
		server: './',
		browser: 'google chrome'
	});

	gulp.watch("src/scss/*.scss", ["compile-sass"]);

	gulp.watch("*.html").on("change", browserSync.reload);

	// Añadir gulp.watch para JS


});

gulp.task("compile-sass", function(){
	gulp.src("./src/scss/style.scss")
	.pipe(sass().on("error", sass.logError))
	.pipe(gulp.dest("./dist/css/"))
	.pipe(notify({
		title:"SASS",
		message: "css file updated!"
	}))
	.pipe(browserSync.stream());
});

// Aquí hacer la concatenación de JS
'use strict';

const gulp = require('gulp');
const style = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const notify = require('gulp-notify');


/*SCSS convert in CSS*/
gulp.task('styles', function(){
	return gulp.src('./css/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(style())
		.on('error', notify.onError(function(err) {
			return {
				title: 'Styles',
				message: err.message
			};
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./css/'))
});


gulp.task('serve', function(){
	browserSync.init({
		server: './'
	});

	browserSync.watch('**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function(){
	gulp.watch('css/**/*.scss', ['styles']); 
});

gulp.task('default', ['watch', 'serve'] );
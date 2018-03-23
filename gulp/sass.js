var gulp = require('gulp');
var sass = require('gulp-sass');
var cfg = require('../package.json').config;

var plumber = require('gulp-plumber');
var rename = require("gulp-rename");
var csso = require('gulp-csso');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer"); 

var browserSync = require('browser-sync').create(); 
var csso = require('gulp-csso'); 
var mqpacker = require("css-mqpacker"); 
var minify = require("gulp-csso"); 
// var del = require("del");

gulp.task('sass', function() {
  return gulp.src( cfg.src.sass + '/event.{scss,sass}')
  .pipe(plumber())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([ 
    autoprefixer({ browsers: [
  'last 10 versions', 
  'ie 11',
  'ie 10',
  'Android >= 4.1', 
  'Safari >= 8',
  'iOS >= 8'
  ] }),     
  mqpacker({ sort: true })
]))
  .pipe(csso())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest(cfg.build.css))
  .pipe(browserSync.stream());
});
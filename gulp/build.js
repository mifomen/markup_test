var gulp = require('gulp');
var cfg = require('../package.json').config;
var run = require("run-sequence");

gulp.task("build", function(evt) {
  run(
    "full-clean",
    // "copy",
    "retype-images",
    "retype-fonts",
    "html",
    "sass",
    "retype-js",
    // "images",
    // "symbols",
    evt
  );
});
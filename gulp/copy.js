var gulp = require('gulp');
// var run = require("run-sequence");

gulp.task("copy", function() {
  return gulp.src([
    "src/fonts/**/*.{woff,woff2}",
    "src/img/**"
    // "src/js/**",
    // "src/*.html"
  ], {
    base: "src/"
  })
  .pipe(gulp.dest("build"));
});
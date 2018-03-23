var gulp = require('gulp');
var del = require("del");
var run = require("run-sequence");

gulp.task('clear-img', function() {
 return del(['build/img/**'])
  });

gulp.task("copy-img", function() {
  return gulp.src([
    "src/img/**",
  ], {
    base: "src/"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("retype-images", function(evt) {
  run(
    "clear-img",
    "copy-img",
    evt
  );
});
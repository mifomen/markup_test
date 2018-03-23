var gulp = require('gulp');
var del = require("del");
var run = require("run-sequence");

gulp.task('clear-fonts', function() {
 return del(['build/fonts/**'])
  });

gulp.task("copy-fonts", function() {
  return gulp.src([
    "src/fonts/**.{woff,woff2}",
  ], {
    base: "src/"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("retype-fonts", function(evt) {
  run(
    "clear-fonts",
    "copy-fonts",
    evt
  );
});
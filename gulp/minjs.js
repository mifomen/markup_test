var gulp = require('gulp');
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");


var del = require("del");
var run = require("run-sequence");

gulp.task('clear-js', function() {
 return del(['build/js/**'])
  });

gulp.task("copy-js", function() {
  return gulp.src([
    "src/js/**.js",
  ], {
    base: "src/"
  })
  .pipe(gulp.dest("build/"));
});
gulp.task("minjs", function() {
  gulp.src("src/js/main.js")
    .pipe(uglify())
    // .pipe(rename('min.js'))
    .pipe(gulp.dest("build/js"));
});

gulp.task("retype-js", function(evt) {
  run(
    "clear-js",
    "copy-js",
    "minjs",
    evt
  );
});


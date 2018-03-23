var gulp = require('gulp');
var htmlminify = require("gulp-html-minify");


gulp.task("html", function() {
  return gulp.src("src/**/*.html")
  // .pipe(htmlminify())
  .pipe(gulp.dest("./build"));
});



// gulp.task('build-html' , function(){
//     return gulp.src("./html-init/**/*.html")
        
//         .pipe(gulp.dest("./html"))
// });
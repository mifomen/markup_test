var gulp = require('gulp');
var browserSync = require('browser-sync').create(); 
var run = require("run-sequence");


gulp.task("serve", function() {
  browserSync.init({
    server: "build",
    notify: false,
    open: true,
    ui: false
  });

  // gulp.watch("sources/**/*.{sass", scss}, ["minjs"]);
  // gulp.watch("sources/**/*.js", ["html"]);
  // gulp.watch("sources/**/*.html", ["sass"]);

 // gulp.watch("sources/**/*.js", ["minjs"]).on("change", browserSync.reload);
    gulp.watch("src/fonts/**", ["retype-fonts"]).on("change", browserSync.reload);
   gulp.watch("src/img/*.{jpg,png,svg}", ["retype-images"]).on("change", browserSync.reload);
     gulp.watch("src/**/*.js", ["retype-js"]).on("change", browserSync.reload);
  gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  gulp.watch("src/**/*.{sass,scss}", ["sass"]).on('change', browserSync.reload);
});

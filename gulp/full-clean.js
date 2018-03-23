var gulp = require('gulp');
var clean = require('gulp-clean');
 
gulp.task('full-clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});



// var del = require("del");
// // var deleteEmpty = require('delete-empty');


// // gulp.task('full-clean', function() {
// // del(['build'])
// //   });


// // deleteEmpty('build/', function(err, deleted) {
// //   console.log(deleted); //=> ['foo/aa/', 'foo/a/cc/', 'foo/b/', 'foo/c/']
// // });


// var ignore = require('gulp-ignore');
// var rimraf = require('gulp-rimraf');
 
// gulp.task('full-clean', function() {
//  return gulp.src('build/**/*.*', { read: false }) // much faster
//    // .pipe(ignore('node_modules/**'))
//    .pipe(rimraf({force: true}));
  
// });
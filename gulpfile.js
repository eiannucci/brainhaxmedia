// gulpfile.js

const gulp = require('gulp');
const sass = require('gulp-sass');

function compileSass() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
}

exports.default = gulp.series(compileSass);

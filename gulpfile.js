const gulp = require('gulp');
const sass = require('gulp-sass');

function compileSass() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
}

function includeApi() {
  return gulp
    .src('./api/**/*')
    .pipe(gulp.dest('./build/api'));
}

exports.compileSass = compileSass;
exports.includeApi = includeApi;
exports.default = gulp.series(compileSass);

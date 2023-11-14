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

function includeEmails() {
  return gulp
    .src('./emails/**/*')
    .pipe(gulp.dest('./build/emails'));
}

exports.compileSass = compileSass;
exports.includeApi = includeApi;
exports.includeEmails = includeEmails;
exports.default = gulp.series(compileSass);

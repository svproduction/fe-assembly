const gulp = require("gulp");
const plumber = require("gulp-plumber");
const htmlValidator = require("gulp-w3c-html-validator");

module.exports = function html() {
  return gulp
    .src("src/**/*.html")
    .pipe(plumber())
    .pipe(htmlValidator())
    .pipe(gulp.dest("build"));
};

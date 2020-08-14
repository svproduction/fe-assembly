const gulp = require("gulp");

const html = require("./gulp/html");
const serve = require("./gulp/serve");
const styles = require("./gulp/styles");

const dev = gulp.parallel(html, styles);

module.exports.dev = gulp.series(dev, serve);

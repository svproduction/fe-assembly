const gulp = require("gulp");
const server = require("browser-sync").create();
const html = require("./html");
const styles = require("./styles");

function readyReload(cb) {
  server.reload();
  cb();
}

module.exports = function serve(cb) {
  server.init({
    server: "build",
    notify: false,
    open: true,
    cors: true,
  });

  gulp.watch("src/**/*.html", gulp.series(html, readyReload));
  gulp.watch(
    "src/styles/**/*.scss",
    gulp.series(styles, (cb) =>
      gulp.src("build/css").pipe(server.stream()).on("end", cb)
    )
  );

  return cb();
};

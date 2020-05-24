const { watch, series, src, dest } = require("gulp");

function css() {
  const postcss = require("gulp-postcss");
  const sourcemaps = require("gulp-sourcemaps");

  return src("src/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        require("tailwindcss"),
        require("precss"),
        require("autoprefixer"),
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/"));
}

function html() {
  return src("src/**/*.html").pipe(dest("build/"));
}

function assets() {
  return src("src/assets/**/*").pipe(dest("build/assets/"));
}

exports.watch = function() {
    watch("src/assets/**/*", assets);
    watch("src/**/*.html", html);
    watch("src/**/*.css", css);
}

exports.default = series(assets, html, css);

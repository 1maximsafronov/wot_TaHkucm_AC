const del = require("del");
const gulp = require("gulp");
const csso = require("gulp-csso");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const htmlmin = require("gulp-htmlmin");
const postcss = require("gulp-postcss");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const sourcemap = require("gulp-sourcemaps");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();

const copy = () => {
  return gulp.src([
    "src/fonts/**/*.{woff,woff2}",
    "src/img/**",
    "src/js/**",
    "src/*.ico"
  ], {
    base: "src"
  })
    .pipe(gulp.dest("build"));
}

exports.copy = copy;

const clean = () => {
  return del("build");
}

exports.clean = clean;

// Styles

const styles = () => {
  return gulp.src("src/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

const html = () => {
  return gulp.src("src/*.html")
    .pipe(posthtml([include()]))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.html = html;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("src/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("src/*.html").on("change", sync.reload);
}

const build = gulp.series(clean, copy, styles, html);
exports.build = build;
exports.default = gulp.series(build, server, watcher);

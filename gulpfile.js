const gulp = require('gulp')
const haml = require('gulp-haml')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const browserify = require('browserify')
const babelify = require('babelify')
const browserSync = require('browser-sync')
const source = require('vinyl-source-stream')
const del = require('del')

var config = {
  cssin:    __dirname + '/sass/**/*.sass',
  jsin:     __dirname + '/babel/**/*.js',
  jsentry:  __dirname + '/babel/index.js',
  htmlin:   __dirname + '/haml/**/*.haml',
  assetsin: __dirname + '/assets/**/*',
  cssout:   __dirname + '/docs/css/',
  jsout:    __dirname + '/docs/js/',
  htmlout:  __dirname + '/docs/'
}

function clean () {
  return del([config.htmlout + '*'])
}

function reload (cb) {
  browserSync.reload()
  cb()
}

function html () {
  return gulp
    .src(config.htmlin)
    .pipe(haml())
    .pipe(gulp.dest(config.htmlout))
}

function assets () {
  return gulp
    .src(config.assetsin)
    .pipe(gulp.dest(config.htmlout))
}

function css () {
  return gulp
    .src(config.cssin)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.cssout))
}

function babl () {
  return browserify({
    entries: config.jsentry,
    sourceMapsAbsolute: true,
    debug: true
  })
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest(config.jsout))
}

function serve (cb) {
  browserSync({
    server: config.htmlout
  })

  gulp.watch(config.jsin, () => gulp.series(babl, reload))
  gulp.watch(config.cssin, () => gulp.series(css, reload))
  gulp.watch(config.htmlin, () => gulp.series(html, reload))
  gulp.watch(config.assetsin, () => gulp.series(assets, reload))

  cb()
}

function build (cb) {
  gulp.series(clean, gulp.parallel(html, assets, babl, css))(cb)
}

exports.build = build
exports.clean = clean
exports.default = gulp.series(build, serve)

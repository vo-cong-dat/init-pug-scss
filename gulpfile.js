const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const del = require('del')

const paths = {
  pug: {
    src: 'src/pug/**/*.pug',
    dest: 'dist/',
  },
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css/',
  },
}

function compilePug() {
  return gulp
    .src(paths.pug.src)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(paths.pug.dest))
    .pipe(browserSync.stream())
}

function compileScss() {
  return gulp
    .src(paths.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
        cascade: false,
        grid: true,
      })
    )
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream())
}

function copyIcons() {
  return gulp.src('src/icons/**/*').pipe(gulp.dest('dist/icons/'))
}

function copyImages() {
  return gulp.src('src/images/**/*').pipe(gulp.dest('dist/images/'))
}

function copyScripts() {
  return gulp.src('src/scripts/**/*').pipe(gulp.dest('dist/scripts/'))
}

function serve() {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
    open: false,
  })
  gulp.watch(paths.pug.src, compilePug)
  gulp.watch(paths.scss.src, compileScss)
  gulp.watch('dist/*.html').on('change', browserSync.reload)
}

function clean() {
  return del.deleteAsync(['dist/**', '!dist'])
}

const build = gulp.series(
  clean,
  gulp.parallel(compilePug, compileScss, copyIcons, copyImages, copyScripts)
)
const dev = gulp.series(build, serve)

gulp.task('pug', compilePug)
gulp.task('scss', compileScss)
gulp.task('build', build)
gulp.task('dev', dev)
gulp.task('default', dev)
gulp.task('icons', copyIcons)
gulp.task('images', copyImages)
gulp.task('scripts', copyScripts)
gulp.task('clean', clean)

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const useRef = require('gulp-useref')
const gulpIf = require('gulp-if')
const uglify= require('gulp-uglify')

gulp.task('sass', function() {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('html', function() {
    return gulp.src('./app/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('js', function () {
    return gulp.src('./app/*.html')
        .pipe(useRef())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('images', function () {
    return gulp.src('./app/images/*.*')
        .pipe(gulp.dest('./dist/images'))
})

gulp.task('fonts', function () {
    return gulp.src('./app/fonts/*.*')
        .pipe(gulp.dest('./dist/fonts'))
})

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
})

gulp.task('watch', function () {
    gulp.series('browserSync', 'js')()
    gulp.watch(['./app/scss/*.scss'], gulp.parallel('sass'))
    gulp.watch(['./app/*.html'], gulp.parallel('html'))
    gulp.watch(['./app/js/*.js'], gulp.parallel('js'))
    gulp.watch(['./app/images/*.*'], gulp.parallel('images'))
    gulp.watch(['./app/fonts/*.*'], gulp.parallel('fonts'))
})

gulp.task('start', function () {
    gulp.series('browserSync', 'js')()
})
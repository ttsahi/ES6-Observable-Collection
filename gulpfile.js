/**
 * Created by tzachit on 28/01/15.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var traceur = require('gulp-traceur');
var uglify = require('gulp-uglify');

gulp.task('compile', function(){
    return gulp.src('src/**/*.js')
        .pipe(traceur({experimental: true, blockBinding: true, arrayComprehension: true}))
        .pipe(gulp.dest('build'));
});

gulp.task('build', function() {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(traceur({experimental: true, blockBinding: true, arrayComprehension: true}))
        .pipe(concat('es6-observable-collection.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('dist', function () {
    return gulp.src('src/**/*.js')
        .pipe(traceur({experimental: true, blockBinding: true, arrayComprehension: true}))
        .pipe(concat('es6-observable-collection.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['compile', 'build', 'dist']);

gulp.watch('src/**/*.js', ['default']);


var util = require('util');

var browserSync = require('browser-sync');

var middleware = require('./proxy');

function browserSyncInit(baseDir, index, files, browser) {
    browser = browser === undefined ? 'default' : browser;

    browserSync.instance = browserSync.init(files, {
        startPath: '/',
        server: {
            baseDir: baseDir,
            index: index,
            middleware: middleware
        },
        browser: browser
    });

}

gulp.task('demo', [], function () {
    browserSyncInit('./', 'demo/index.html', [
        'bower_components/**/*.js',
        'dist/**/*.js',
        'demo/*.css',
        'demo/*.js',
        'demo/*.html'
    ]);
});
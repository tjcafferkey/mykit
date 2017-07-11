// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var webpack = require("webpack");
var webpack_config = require('./webpack.config.js');
var webpack_stream = require('webpack-stream');

// Styles and scripts path
var skin = "myKit";

var paths = {
    jsBuild: `./${skin}/build/js`,
    cssBuild: `./${skin}/build/css`,
};

// Proxy URL
browserSync.init({
    proxy: "myKit.local"
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src(`${skin}/scripts/*.js`)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(`${skin}/sass/style.scss`)
        .pipe(plumber({errorHandler: errorAlert}))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest(`${paths.cssBuild}`));
});

gulp.task('scripts', function() {
     return webpack_stream(webpack_config)
     .pipe(gulp.dest(`${paths.jsBuild}`));
});

gulp.task('sass-watch', ['sass', 'scripts'], browserSync.reload);

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(`${skin}/scripts/script.js`, ['lint', 'scripts']);
    gulp.watch(`${skin}/sass/**/**/*.scss`, ['sass-watch']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);

// Error function used in SASS task
function errorAlert(error){
    notify.onError({title: "SCSS Error", message: "Check your terminal", sound: "Sosumi"})(error); //Error Notification
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
};
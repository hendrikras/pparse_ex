var gulp = require('gulp');
var sass = require('gulp-sass');

var config = require('../config');

module.exports = function (gulp, $) {
    'use strict';

    gulp.task('sass', function () {
        return gulp
            .src(config.sources.styles)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./styles/'));
    });

    gulp.task('sass:watch', function () {
        gulp.watch(config.sources.styles, ['sass']);
    });    
};


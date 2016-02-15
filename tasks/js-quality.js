var config = require('../config');

module.exports = function (gulp, $) {
    'use strict';

    gulp.task('js-quality', ['js-validate'], function () {
        //Run jshint and jscs against the project scripts
        return gulp
            .src(config.sources.scripts)
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
            .pipe($.jshint.reporter('fail'))
            .pipe($.jscs());
    });
};


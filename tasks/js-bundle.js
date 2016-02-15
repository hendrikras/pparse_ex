var config = require('../config');
var packageName = require('../package').name;
var wiredep = require('wiredep');
var es = require('event-stream');

module.exports = function (gulp, $) {
    'use strict';

    //TODO: Use ng-annotate and strict-di

    //Move the scripts to the destination folder
    gulp.task('js-bundle', ['clean'], function () {
        return es.merge(
            //Copy the dependencies to vendor folder
            gulp.src(wiredep().js)
                .pipe($.rename(function (path) {
                    path.dirname = 'vendor';
                }))
            ,
            //Concat, uglify and remove debugger stuff from the project's scripts, move them to js folder
            gulp.src(config.sources.scripts)
                .pipe($.concat(packageName + '.all.js'))
                .pipe($.stripDebug())
                .pipe($.uglify())
                .pipe($.rename(function (path) {
                    path.dirname = 'js';
                })))

            .pipe(gulp.dest(config.paths.output));
    });
};

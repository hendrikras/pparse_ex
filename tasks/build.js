var es = require('event-stream');
var packageName = require('../package').name;


module.exports = function (gulp, $) {
    'use strict';

    gulp.task('build', ['js-quality', 'js-bundle', 'templates'], function () {
        return es.merge(
            gulp.src('./app/' + packageName + '.html'),
            //Inject the dependencies into the index.html and move it to the destination folder
            gulp.src('./index.html')
                .pipe($.inject(gulp.src(['build/vendor/angular.js', 'build/vendor/angular-*.js', 'build/vendor/!(angular)*.js', 'build/js/*.js'], {
                    read: false
                }), {ignorePath: 'build', relative: true})))
            //Copy the app entrypoint html to the destination folder
            .pipe(gulp.dest('build'));
    });
};

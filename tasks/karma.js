module.exports = function (gulp, $) {
    'use strict';
    var karma = require('karma').server;
    /**
     * Run test once and exit
     */
    gulp.task('test', function (done) {
        var n = __dirname.lastIndexOf('/');
        var parentFolder =  __dirname.substring(0, n);
        karma.start({
            configFile: parentFolder+ '/karma.conf.js',
            singleRun: true
        }, done);
    });
};

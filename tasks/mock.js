var browserSync = require('browser-sync');
var reload = browserSync.reload;
var packageName = require('../package').name;
var wiredep = require('wiredep');
var config = require('../config');

module.exports = function (gulp, $) {

    gulp.task('mock', function () {
        //Set a global var for further processing
        global.mock = true;

        gulp.src(['index.html'])
            .pipe($.replace(new RegExp('ng-app="(' + packageName + ')'), 'ng-app="mocked' + packageName.charAt(0).toUpperCase() + packageName.slice(1)))
            //Inject mock.module.js
            .pipe($.inject(gulp.src(['test/mock.module.js'], {
                read: false
            }), {name: 'mockconfig', relative: true}))
            //Rename index file
            .pipe($.rename('index-mocked.html'))
            .pipe(gulp.dest('./'));

    });
};

module.exports = function (config) {
    config.set({

            // base path, that will be used to resolve files and exclude
            // frameworks to use
            frameworks: ['jasmine'],

            // list of files / patterns to load in the browser
            files: [
                'bower_components/angular/angular.js',
                'bower_components/angular-mocks/angular-mocks.js',
                'bower_components/angular-resource/angular-resource.js',
                'bower_components/papaparse/papaparse.js',
                'app/*.module.js',
                'app/*/*.module.js',
                'app/*/*.js',
                'app/*/*.html',
                'test/mocks/*.js',
                'test/mocks/*/*.json'
            ],

            plugins: [
                'karma-jasmine',
                'karma-fixture',
                'karma-coverage',
                'karma-html2js-preprocessor',
                'karma-json-fixtures-preprocessor',
                'karma-chrome-launcher',
                'karma-phantomjs-launcher'
            ],
            // list of files to exclude
            exclude: [],

            // test results reporter to use
            // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
            reporters: ['progress', 'coverage'],
            jsonFixturesPreprocessor: {
                variableName: '__json__'
            },
            preprocessors: {
                '**/*.html': ['html2js'],
                '**/*.json': ['json_fixtures'],
                'app/**/*.js': 'coverage'

            },

            // enable / disable colors in the output (reporters and logs)
            colors: true,

            // level of logging
            // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
            logLevel: config.LOG_DISABLE,

            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: false,

            // Start these browsers, currently available:
            // - Chrome
            // - ChromeCanary
            // - Firefox
            // - Opera
            // - Safari (only Mac)
            // - PhantomJS
            // - IE (only Windows)
            browsers: ['PhantomJS'],

            // If browser does not capture in given timeout [ms], kill it
            captureTimeout: 60000,

            // Continuous Integration mode
            // if true, it capture browsers, run tests and exit
            singleRun: true
        }
    );
};

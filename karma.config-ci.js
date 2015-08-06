// Karma configuration
// Generated on Thu Aug 06 2015 21:54:24 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    singleRun: true,
    reporters: ['dots','junit', 'coverage'],
    junitReporter: {
        outputDir: 'report',
        outputFile: 'test-results.xml'
    },

    coverageReporter: {
        dir: 'coverage',
        reporters: [
            { type: 'html', subdir: 'report-html' },
            { type: 'clover', subdir: 'report-clover' },
        ]
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/should/should.js',
      './apiurls.js',
      './test/*.test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'apiurls.js': 'coverage'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

  })
}

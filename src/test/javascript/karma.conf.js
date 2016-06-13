module.exports = function(config) {
  config.set({
    proxies: {'/': '10.0.42.26:9080/'},
    preprocessors: {'src/main/java/webapp/index.html': ['html2js']},
    basePath: '../../..',
    frameworks: ['qunit','fixture'],
    files: [
      'src/main/java/webapp/index.html',
      'src/main/javascript/jquery.js',
      'src/main/javascript/jquery/jquery-1.11.2.min.js',
      'src/main/javascript/jquery/jquery-migrate-1.2.1.min.js',
      'src/main/javascript/jquery.form.js',
      'src/main/javascript/**/*.js',
      'src/test/javascript/*.js'
    ],
    exclude: ['src/test/javascript/karma.conf*.js'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['FirefoxDeveloper'],
    singleRun: false,
    plugins: [
        'karma-qunit',
        'karma-firefox-launcher',
        'karma-fixture',
        'karma-html2js-preprocessor'
    ]
  })
}

module.exports = function(config) {
  var _config = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],

    files: [
      { pattern: 'src/**/*.test.ts', watched: false }
    ],

    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.test.ts': ['webpack']
    },

    webpack: {
      resolve: {
        root: __dirname,
        extensions: ['','.ts','.js','.json'],
        alias: {
          'app': 'src/app',
        }
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.ts$/,   loader: 'ts-loader', exclude: [
              /node_modules/
            ]
          }
        ]
      },
      stats: { colors: true, reasons: true },
      debug: false
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    reporters: ['story'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  };
  config.set(_config);
};
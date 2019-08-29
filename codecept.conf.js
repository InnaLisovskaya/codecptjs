exports.config = {
  tests: './tests/*_test.js',
  output: './output',


  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      waitForTimeout: 10000,
      desiredCapabilities: {
        chromeOptions: {
          args: [ '--headless','--disable-gpu', '--window-size=2048,1080'],
         //   args: ['--disable-gpu', '--window-size=1280,1200'],
        },
      },
    },
    Mochawesome: {
      uniqueScreenshotNames: "true"
    }
  },

  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      mochaFile: "output/result.xml",
      reportDir: "output"
    }
  },
  name: 'csssr'
}


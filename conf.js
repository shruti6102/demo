var HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
	restartBrowserBetweenTests: true,
    getPageTimeout: 80000,
	
  capabilities: {
    browserName: 'chrome'
  },

  specs: ['spec.js'],
 

    onPrepare: function () {
		  browser.waitForAngularEnabled(false);
            browser.driver.manage().window().maximize();
			jasmine.getEnv().addReporter(
				new HtmlReporter({
					savePath: './reports',
					takeScreenshots: false,
					consolidateAll: true,
					cleanDestination: false,
					fileName: 'Store_Check_Report',
					fileNameSuffix: '',
					fileNameDateSuffix: true
				})
			);
    }
};
exports.config = {

    //runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        automationName: "XCUITest",
        platformName: "iOS",
        udid: "63B08B0B-DAEE-4A48-B55B-4E4797CC30EC",
        deviceName: "iPhone X (11.4)",
        browserName: 'safari'
    }],
    port: 4723,
    logLevel: 'info',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    services: ['trueautomation'],
    //path: '/wd/hub',
    //remote: true

}

const {
    startServer,
    stopServer,
    createDriver,
    nsCapabilities
} = require('nativescript-dev-appium')
const path = require('path')

nsCapabilities.extend({
    appiumCapsLocation: path.resolve(__dirname, 'appium.capabilities.json'),
    testFolder: path.resolve(__dirname),
    verbose: false
})


beforeAll(async function () {
    console.log('>>>>>> BEFORE ALL <<<<<<<<')
    await startServer();
    console.log('>>>>>> BEFORE ALL {after startServer} <<<<<<<<')
    this.driver = await createDriver()
    console.log('>>>>>> BEFORE ALL {after createDriver} <<<<<<<<')
});

beforeEach(async () => {
    console.log('>>>>>> BEFORE EACH <<<<<<<<')
})

afterAll(async function () {
    console.log('>>>>>> AFTER ALL <<<<<<<<')
    if (this.driver) {
        await this.driver.quit();
        console.log('>>>>>> AFTER ALL {after driver.quit} <<<<<<<<')
    }
    await stopServer()
    console.log('>>>>>> AFTER ALL {after stopServer} <<<<<<<<')
})

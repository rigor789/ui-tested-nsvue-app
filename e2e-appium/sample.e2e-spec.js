const nsAppium = require("nativescript-dev-appium");
const assert = require("chai").assert;
const addContext = require('mochawesome/addContext');

function assertContains(actual, needed) {
    return assert(actual.includes(needed), `Expected '${actual}' to contain '${needed}'`)
}

describe("sample scenario", () => {
    let driver;

    before(async function() {
        nsAppium.nsCapabilities.testReporter.context = this;
        driver = await nsAppium.createDriver();
    });

    after(async function () {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    it("should find an element by text", async function () {
        let label = await driver.findElementByAccessibilityId('welcomeLabel');

        assert.isTrue(await label.isDisplayed());

        assertContains(await label.text(), 'Blank {N}-Vue app')

        await label.click()
        await label.refetch()

        assertContains(await label.text(), 'Tapped!')

        await label.click()
        await label.refetch()

        assertContains(await label.text(), 'Again')
    });

    it('should navigate to other', async function () {
        await driver.restartApp()

        let button = await driver.findElementByAccessibilityId('gotoOtherButton')

        assert.isTrue(await button.isDisplayed());
        await button.click()

        let label = await driver.findElementByAccessibilityId('otherPageLabel');

        assertContains(await label.text(), 'Other page')

        button = await driver.findElementByAccessibilityId('goBackButton')

        assert.isTrue(await button.isDisplayed());
        await button.click()

        label = await driver.findElementByAccessibilityId('welcomeLabel');
        assert.isTrue(await label.isDisplayed());
        assertContains(await label.text(), 'Blank {N}-Vue app')
    })

    it('should render a list with multiple v-templates', async function() {
        let button = await driver.findElementByAccessibilityId('gotoListButton')
        await button.click()

        let firstLabel = await driver.findElementByText('default template for item first')
        let secondLabel = await driver.findElementByText('second template for item second')
        let thirdLabel = await driver.findElementByText('default template for item third')

        assert.isTrue(await firstLabel.isDisplayed())
        assert.isTrue(await secondLabel.isDisplayed())
        assert.isTrue(await thirdLabel.isDisplayed())
    })
});

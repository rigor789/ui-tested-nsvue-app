const wait = (ms) => new Promise(r => setTimeout(r, ms))

describe('NativeScript-Vue basics', () => {
    beforeAll(async () => {
        await wait(2000)
        await device.launchApp()
        await wait(2000)
    })

    it('should allow tapping the welcome label', async () => {
        let label = element(by.id('welcomeLabel'))
        await expect(label).toBeVisible()
        await expect(label).toHaveText('Blank {N}-Vue app')
        await label.tap()
        await expect(label).toHaveText('Tapped!')
        await wait(100)
        await label.tap()
        await expect(label).toHaveText('Tapped Again!')
    })

    it('should show other screen after tap', async () => {
        await element(by.id('gotoOtherButton')).tap()
        await expect(element(by.text('Other page'))).toBeVisible()
        await element(by.id('goBackButton')).tap()
    })

    it('should show list screen after tap', async () => {
        await element(by.id('gotoListButton')).tap()
        await expect(element(by.text('default template for item first'))).toBeVisible()
        await expect(element(by.text('second template for item second'))).toBeVisible()
        await expect(element(by.text('default template for item third'))).toBeVisible()
        await element(by.id('goBackButton')).tap()
    })

    it('should show an alert', async () => {
        await element(by.id('showAlertButton')).tap()
        await expect(element(by.text('This is a test alert!'))).toBeVisible()
        await element(by.text('OK')).tap()
        await expect(element(by.text('This is a test alert!'))).toNotExist()
    })

    it('should scroll the scrollView', async () => {
        await expect(element(by.text('Item 1'))).toBeVisible()
        await expect(element(by.text('Item 10'))).toBeNotVisible()
        await element(by.id('scrollView')).scrollTo('right')
        await expect(element(by.text('Item 1'))).toBeNotVisible()
        await expect(element(by.text('Item 10'))).toBeVisible()
    })
})

const releaseNotesPage = require('../pageobjects/releaseNotes.page')
const bucket = require('../helpers/bucket.page')
const beforeTestsPage = require('../helpers/beforeTests.page')



describe('Release Notes page elements tests', () => {
    
    it('Check the "Release Notes" page "Network" filters', async () => {
        await browser.url(`https://telnyx.com/release-notes`)
        await beforeTestsPage.closeCookieModalWindow()
        await releaseNotesPage.networkCheckBoxLocator.click()
        await browser.pause(500)
        await expect(releaseNotesPage.resultsListLocator).toHaveText(bucket.networkResults())

    });

    it('Check the "Release Notes" page "Fax" filters', async () => {
        await browser.url(`https://telnyx.com/release-notes`)
        await releaseNotesPage.faxCheckBoxLocator.click()
        await expect(releaseNotesPage.resultsListLocator).toHaveTextContaining(bucket.faxResults())
    });

});
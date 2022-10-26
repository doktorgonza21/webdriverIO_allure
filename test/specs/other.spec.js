const otherPage = require('../pageobjects/other.page')
const bucket = require('../helpers/bucket.page')
const beforeTestsPage = require('../helpers/beforeTests.page')



describe('Other pages elements tests', () => {
    
    it('Check the "Come and work with us" position headings from "Careers" page', async () => {
        await browser.url(`https://telnyx.com/company/careers`)
        await beforeTestsPage.closeCookieModalWindow()
        await otherPage.workWithUsBlockLocator.scrollIntoView()
        await browser.pause(1000)
        await expect(otherPage.positionHeadingsListLocator).toHaveText(bucket.positionList())
    });

    it('Check the "Data Transfer Impact Assessment" block from "Data & Privacy" page', async () => {
        await browser.url(`https://telnyx.com/company/data-privacy`)
        await otherPage.dataTransferLinkLocator.click()
        await expect(otherPage.dataTransferListLocator).toHaveText(bucket.dataTransferList())
    });

    it('Check the cityes from "Where we are" block on "About Us" page', async () => {
        await browser.url(`https://telnyx.com/company/about`)
        await otherPage.whereWeAreBlockLocator.scrollIntoView()
        await expect(otherPage.cityListLocator).toBeElementsArrayOfSize(6)
        await expect(otherPage.cityListLocator).toHaveText(bucket.cityItems())
    });

});
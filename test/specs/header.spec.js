const headerPage = require('../pageobjects/header.page');
const beforeTestsPage = require('../helpers/beforeTests.page')
const bucket = require('../helpers/bucket.page')



describe('Header elements tests', () => {
    
    it('Check links from "Resources" drop-down menu', async () => {
        await browser.url(`https://telnyx.com/`)
        await beforeTestsPage.closeCookieModalWindow()
        await headerPage.resourcesDropDownLocator.moveTo()
        await expect(headerPage.resourcesDropDownListLocator).toBeElementsArrayOfSize(6)
        await expect(headerPage.resourcesDropDownListLocator).toHaveText(bucket.resourcesMenuItems())
    });

    it('Check "Built different" block from Network page', async () => {
        await browser.url(`https://telnyx.com/`)
        await headerPage.networkLinkLocator.click()
        await headerPage.builtDifferentBlockLocator.scrollIntoView({block:'center'})
        await expect(headerPage.builtDifferentListLocator).toHaveText(bucket.builtDifferent())
    });

    xit('Check the "Developer Docs" page heading', async () => {
        await browser.url(`https://telnyx.com/`)
        await headerPage.resourcesDropDownLocator.moveTo()
        await headerPage.resourcesDropDownListLocator[0].click()
        await browser.pause(500)
        await expect(headerPage.docksHeadingLocator).toHaveText('Telnyx API Documentation')
    });
   
});
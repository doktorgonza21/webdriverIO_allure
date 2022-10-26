const faxApiPage = require('../pageobjects/faxApi.page')
const bucket = require('../helpers/bucket.page')
const beforeTestsPage = require('../helpers/beforeTests.page')



describe('Fax API page elements tests', () => {
    
    it('Check "Fax Features for Total Control" block from "Fax-API" page', async () => {
        await browser.url(`https://telnyx.com/products/fax-api`)
        await beforeTestsPage.closeCookieModalWindow()
        await faxApiPage.totalControlBlockLocator.scrollIntoView({block:'center'})
        await expect(faxApiPage.totalControlListLocator).toBeElementsArrayOfSize(8)
        await expect(faxApiPage.totalControlListLocator).toHaveText(bucket.totalControl())
    });

    it('Check "Your communications powered by our API" block from "Fax-API" page', async () => {
        await browser.url(`https://telnyx.com/products/fax-api`)
        await faxApiPage.poweredByApiBlockLocator.scrollIntoView({block:'center'})
        await expect(faxApiPage.poweredByApiListLocator).toBeElementsArrayOfSize(4)
        await expect(faxApiPage.poweredByApiListLocator).toHaveText(bucket.poweredByApi())
    });

});
const footerPage = require('../pageobjects/footer.page');
const beforeTestsPage = require('../helpers/beforeTests.page')
const bucket = require('../helpers/bucket.page')



describe('Footer elements tests', () => {

    before('it', async () => {
        await browser.url('/')
        await beforeTestsPage.closeCookieModalWindow()
    })
    
    it('Check "Mission control" footer block', async () => {
        await footerPage.footerLocator.scrollIntoView({block:'center'})
        await expect(footerPage.missionControlListLocator).toBeElementsArrayOfSize(2)
        await expect(footerPage.missionControlListLocator).toHaveText(bucket.missionControlItems())
    });

    it('Check "Social" footer block', async () => {
        await footerPage.footerLocator.scrollIntoView({block:'center'})
        await expect(footerPage.socialListLocator).toBeElementsArrayOfSize(3)
        await expect(footerPage.socialListLocator).toHaveTextContaining(bucket.socialItems())
    });

    it('Check "Products" footer block', async () => {
        await footerPage.footerLocator.scrollIntoView({block:'center'})
        await expect(footerPage.productsListLocator).toBeElementsArrayOfSize(9)
    });

    it('Check redirect from footer twitter link', async () => {
        await footerPage.footerLocator.scrollIntoView({block:'center'})
        await footerPage.socialListLocator[1].click()
        await browser.pause(1000)
        await browser.switchWindow('twitter')
        await expect(browser).toHaveUrlContaining('twitter.com/telnyx')
    });
})
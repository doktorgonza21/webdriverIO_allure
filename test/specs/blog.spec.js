const blogPage = require('../pageobjects/blog.page')
const beforeTestsPage = require('../helpers/beforeTests.page')



describe('Blog page elements tests', () => {
    
    it('Check "Get the eBook" form with valid data', async () => {
        await beforeTestsPage.url()
        await beforeTestsPage.closeCookieModalWindow()
        await blogPage.clickEbookButton()
        await browser.pause(500)
        await blogPage.fillValidEbookForm()
        await blogPage.sendContentButtonLocator.click() 
        await expect(blogPage.successMessageLocator).toHaveText('Thank you!')
    });

    it('Check the "Stay Connected" form with invalid data', async () => {
        await beforeTestsPage.url()
        await blogPage.stayConnectedFormLocator.scrollIntoView({block:'center'})
        await blogPage.fillInvalidForm()
        await blogPage.subscribeButtonLocator.click()
        await expect(blogPage.errorMessageLocator).toHaveTextContaining('Please enter a valid email address.')
    });

});
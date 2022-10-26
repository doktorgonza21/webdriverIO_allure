const contactUsPage = require('../pageobjects/contactUs.page');
const beforeTestsPage = require('../helpers/beforeTests.page')



describe('Contact Us page elements tests', () => {
    
    it('Check "Talk to an expert" form with valid data', async () => {
        await browser.url(`https://telnyx.com/contact-us`)
        await beforeTestsPage.closeCookieModalWindow()
        await contactUsPage.fillValidForm()
        await browser.pause(200)
        await contactUsPage.submitButtonLocator.click()
        await expect(contactUsPage.successMessageLocator).toHaveText('Thanks for Reaching Out!')
        
    });

    it('Check "Talk to an expert" form with invalid "Business email" data', async () => {
        await browser.url(`https://telnyx.com/contact-us`)
        await contactUsPage.fillFormInvalidEmail()
        await browser.pause(500)
        await contactUsPage.submitButtonLocator.click()
        await expect(contactUsPage.emailValidationLocator).toHaveTextContaining('Must be valid email.')
    });

    it('Check "Talk to an expert" form with invalid "Company website" data', async () => {
        await browser.url(`https://telnyx.com/contact-us`)
        await contactUsPage.fillFormInvalidWebsite()
        await browser.pause(500)
        await contactUsPage.submitButtonLocator.click()
        await expect(contactUsPage.websiteValidationLocator).toHaveTextContaining('Must be a url.')
    });

    it('Check the Mexico number from "Calling from overseas" block', async () => {
        await browser.url(`https://telnyx.com/contact-us`)
        await contactUsPage.callingFromBlockLocator.scrollIntoView({block:'center'}) 
        await expect(contactUsPage.callingFromListLocator[4]).toHaveText('Mexico +52 558 897 4917')    
    });
});
class BeforeTestsPage {

    async url() {
        if (process.env.NODE_ENV === 'resources') {
            return await browser.url(`https://telnyx.com/resources`)
        }
        return await browser.closeWindow()   
    }
    
    async closeCookieModalWindow () {
        const cookieModalWindowLocator = $(`[aria-label="close and deny"]`)
        await cookieModalWindowLocator.click()
    }


}

module.exports = new BeforeTestsPage();
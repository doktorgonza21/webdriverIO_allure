const random = require('../helpers/random.page')

class ReleaseNotesPage {

    get stayConnectedFormLocator () {
        return $$('//main/div/div/p')[0]
    }

    get emailFieldLocator () {
        return $('#Email')
    }

    get subscribeButtonLocator () {
        return $('form button')
    }

    get errorMessageLocator () {
        return $('#Email_error')
    }

    get eBookButtonLocator () {
        return $('span~div>a')
    }

    get firstNameFieldLocator () {
        return $('#FirstName')
    }

    get lastNameFieldLocator () {
        return $('#LastName')
    }

    get companyNameFieldLocator () {
        return $('#Company')
    }

    get emailFieldLocator () {
        return $('#Email')
    }

    get sendContentButtonLocator () {
        return $('span>button')
    }

    get successMessageLocator () {
        return $('#mktContent span>div')
    }

    async fillValidForm () {
        await this.emailFieldLocator.addValue(random.validEmailGenerator())
    }

    async fillInvalidForm () {
        await this.emailFieldLocator.addValue(random.invalidEmailGenerator())
    }

    async clickEbookButton () {
        await this.eBookButtonLocator.scrollIntoView({block:'center'})
        await this.eBookButtonLocator.click()
    }

    async fillValidEbookForm () {
        await this.firstNameFieldLocator.addValue(random.validNameSurnameGenerator())
        await this.lastNameFieldLocator.addValue(random.validNameSurnameGenerator())
        await this.companyNameFieldLocator.addValue(random.validFullNameGenerator())
        await this.emailFieldLocator.addValue(random.validEmailGenerator())
    }

    }
    
    module.exports = new ReleaseNotesPage();
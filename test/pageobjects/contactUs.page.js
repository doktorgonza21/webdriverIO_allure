const randomGenerator = require ('../helpers/random.page')

class ContactUsPage {

        get reasonListLocator () {
            return $$('#Reason_for_Contact__c option')[3]
        }

        get firstNameFieldLocator () {
            return $('#FirstName')
        }

        get lastNameFieldLocator () {
            return $('#LastName')
        }

        get emailFieldLocator () {
            return $('#Email')
        }

        get phoneNumberListLocator () {
            return $$('#Phone_Number_Extension__c option')[7]
        }

        get phoneNumberFieldLocator () {
            return $('#Phone_Number_Base__c')
        }

        get websiteFieldLocator () {
            return $('#Website')
        }

        get submitButtonLocator () {
            return $('[class="mktoButton"]')
        }
    
        get successMessageLocator () {
            return $('main h1')
        }

        get emailValidationLocator () {
            return $('#ValidMsgEmail')
        }

        get websiteValidationLocator () {
            return $('#ValidMsgWebsite')
        }

        get callingFromBlockLocator () {
            return $('#intl-tel-list')
        }

        get callingFromListLocator () {
            return $$('#intl-tel-list li')
        }

    async fillValidForm () {
        await this.reasonListLocator.click()
        await this.firstNameFieldLocator.addValue(randomGenerator.validNameSurnameGenerator())
        await this.lastNameFieldLocator.addValue(randomGenerator.validNameSurnameGenerator())
        await this.emailFieldLocator.addValue(randomGenerator.validEmailGenerator())
        await this.phoneNumberListLocator.click()
        await this.phoneNumberFieldLocator.addValue(randomGenerator.validPhoneGenerator())
        await this.websiteFieldLocator.addValue(randomGenerator.validWebsiteGenerator())
    }

    async fillFormInvalidEmail () {
        await this.reasonListLocator.click()
        await this.firstNameFieldLocator.addValue(randomGenerator.validNameSurnameGenerator())
        await this.lastNameFieldLocator.addValue(randomGenerator.validNameSurnameGenerator())
        await this.emailFieldLocator.addValue(randomGenerator.invalidEmailGenerator())
        await this.phoneNumberListLocator.click()
        await this.phoneNumberFieldLocator.addValue(randomGenerator.validPhoneGenerator())
        await this.websiteFieldLocator.addValue(randomGenerator.validWebsiteGenerator())
    }

    async fillFormInvalidWebsite () {
        await this.reasonListLocator.click()
        await this.firstNameFieldLocator.addValue(randomGenerator.validNameSurnameGenerator())
        await this.lastNameFieldLocator.addValue(randomGenerator.validNameSurnameGenerator())
        await this.emailFieldLocator.addValue(randomGenerator.validEmailGenerator())
        await this.phoneNumberListLocator.click()
        await this.phoneNumberFieldLocator.addValue(randomGenerator.validPhoneGenerator())
        await this.websiteFieldLocator.addValue(randomGenerator.validFullNameGenerator())
    }

}

module.exports = new ContactUsPage();
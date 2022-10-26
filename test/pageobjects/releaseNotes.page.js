class ReleaseNotesPage {

    get networkCheckBoxLocator () {
        return $('[for="network"]')
    }

    get resultsListLocator () {
        return $$('section>h3')
    }

    get faxCheckBoxLocator () {
        return $('[for="fax"]')
    }

    }
    
    module.exports = new ReleaseNotesPage();
class HeaderPage {

    get resourcesDropDownLocator () {
        return $$(`li>span`)[3]
    }

    get resourcesDropDownListLocator () {
        return $$('header li:nth-child(6) a')
    }

    get docksHeadingLocator () {
        return $('main>h1')
    }

    get networkLinkLocator () {
        return $$('li>span')[2]
    }

    get builtDifferentBlockLocator () {
        return $$('header>h2')[3]
    }

    get builtDifferentListLocator () {
        return $$('//div[10]/descendant::h3')
    }


}

module.exports = new HeaderPage();
class OtherPage {

get workWithUsBlockLocator () {
    return $('header>p')
}

get positionHeadingsListLocator () {
    return $$('section>h4')
}

get dataTransferLinkLocator () {
    return $('[href="#dtia"]')
}

get dataTransferListLocator () {
    return $$('#dtia button')
}

get whereWeAreBlockLocator () {
    return $$('section>h3')[1]
}

get cityListLocator () {
    return $$('li h4')
}

}

module.exports = new OtherPage();
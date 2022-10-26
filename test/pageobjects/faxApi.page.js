
class FaxApiPage {

get totalControlBlockLocator () {
    return $('header>span~h2')
}

get totalControlListLocator () {
    return $$('div>div>h3>span')
}

get poweredByApiBlockLocator () {
    return $('div>span~h2')
}

get poweredByApiListLocator () {
    return $$('//span/preceding-sibling::h3')
}
        
}

module.exports = new FaxApiPage();
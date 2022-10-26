class HeaderPage {

get footerLocator () {
    return $('div>footer>div')
}

get missionControlListLocator () {
    return $$('[data-e2e="Footer--navItem-mission_control"] li')
}

get socialListLocator () {
    return $$('[data-e2e="Footer--navItem-social"] li')
}

get productsListLocator () {
    return $$('[data-e2e="Footer--navItem-products"] li')
}

}

module.exports = new HeaderPage();
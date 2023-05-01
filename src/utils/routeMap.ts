// Copy of this routes is placed inside ./gatsby-config.js
const routeMap = {
    home: '/',
    cryotherapy: {
        local: '/cryotherapy/local-therapy-xcryo-original/',
        face: '/cryotherapy/face-therapy-xcryo-mask/',
        body: '/cryotherapy/body-therapy-xtone/',
        skin: '/cryotherapy/skin-therapy-xcryo-boosters/',
        cabin: '/cryotherapy/full-body-therapy-xcabin/',
    },
    services: {
        markets: '/services/markets/',
        businessAndCryo: '/services/business-and-cryo/',
        prices: '/services/prices/',
        costCoolsculptingMachine: '/services/cost-coolsculpting-machine/',
    },
    info: {
        blog: '/info/blog/',
        faq: '/info/faq/',
        press: '/info/press/',
        gallery: '/info/gallery/',
    },
    reviews: '/reviews/',
    // aboutUs: '/about-us/',
    contacts: '/contacts/',
    sitemap: '/sitemap/',
};

export default routeMap;

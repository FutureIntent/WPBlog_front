const myCustomQueries = {
    mobile: '(min-width: 320px)',
    mobileM: '(min-width: 360px)',
    mobileL: '(min-width: 568px)',
    tablet: '(min-width: 768px)',
    tabletL: '(min-width: 1024px)',
    laptopS: '(min-width: 1140px)',
    laptop: '(min-width: 1366px)',
    desktop: '(min-width: 1680px)',
    xxl: '(min-width: 1920px)',
};

// Copy of this routes is placed inside ./src/utils/routeMap
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
        cryotherapyStartupCost: '/services/cryotherapy-startup-cost/',
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

module.exports = {
    siteMetadata: {
        title: 'Cryo Center',
        titleTemplate: '%s · Cryo Center',
        description: 'New level of treatment with',
        siteUrl: 'https://cryosculptor.com',
        image: '',
        twitterUsername: '',
        menuLinks: [
            {
                name: 'home',
                link: routeMap.home,
                hasCta: true,
                hasWhiteHeader: false,
                isStatic: false,
                isHidden: false,
            },
            {
                name: 'cryotherapy',
                link: '/cryotherapy',
                subMenu: [
                    {
                        name: 'Local Therapy – X˚Cryo Original',
                        link: routeMap.cryotherapy.local,
                        hasCta: true,
                        hasWhiteHeader: false,
                        isStatic: false,
                        isHidden: false,
                    },
                    {
                        name: 'Face Therapy – X˚Cryo Mask',
                        link: routeMap.cryotherapy.face,
                        hasCta: true,
                        hasWhiteHeader: false,
                        isStatic: false,
                        isHidden: false,
                    },
                    {
                        name: 'Body Therapy - X Tone',
                        link: routeMap.cryotherapy.body,
                        hasCta: true,
                        hasWhiteHeader: false,
                        isStatic: false,
                        isHidden: false,
                    },
                    {
                        name: 'Skin Therapy - X˚Cryo Boosters',
                        link: routeMap.cryotherapy.skin,
                        hasCta: true,
                        hasWhiteHeader: false,
                        isStatic: false,
                        isHidden: false,
                    },
                    {
                        name: 'Full Body Therapy - XCabin',
                        link: routeMap.cryotherapy.cabin,
                        hasCta: true,
                        hasWhiteHeader: false,
                        isStatic: false,
                        isHidden: false,
                    },
                ],
            },
            {
                name: 'services',
                link: '/services',
                subMenu: [
                    {
                        name: 'Markets',
                        link: routeMap.services.markets,
                        hasCta: true,
                        hasWhiteHeader: true,
                        isStatic: false,
                        isHidden: false,
                    },
                    {
                        name: 'Business & Cryo',
                        link: routeMap.services.businessAndCryo,
                        hasCta: true,
                        hasWhiteHeader: false,
                        isStatic: false,
                        isHidden: false,
                    },
                    {
                        name: 'Prices',
                        link: routeMap.services.prices,
                        hasCta: true,
                        hasWhiteHeader: true,
                        isStatic: true,
                        isHidden: false,
                    },
                    {
                        name: 'Cost of a coolsculpting machine',
                        link: routeMap.services.costCoolsculptingMachine,
                        hasCta: true,
                        hasWhiteHeader: true,
                        isStatic: true,
                        isHidden: true,
                    },
                    {
                        name: 'Cryotherapy startup cost',
                        link: routeMap.services.cryotherapyStartupCost,
                        hasCta: false,
                        hasWhiteHeader: false,
                        isStatic: false,
                        isHidden: true,
                    },
                ],
            },
            {
                name: 'info',
                link: '/info',
                subMenu: [
                    {
                        name: 'Blog',
                        link: routeMap.info.blog,
                        hasCta: false,
                        hasWhiteHeader: false,
                        isStatic: false,
                        isHidden: false,
                    },
                    {
                        name: 'FAQ',
                        link: routeMap.info.faq,
                        hasCta: true,
                        hasWhiteHeader: false,
                        isStatic: false,
                        isHidden: false,
                    },
                    {
                        name: 'Press',
                        link: routeMap.info.press,
                        hasCta: true,
                        hasWhiteHeader: false,
                        isStatic: false,
                        isHidden: false,
                    },
                    {
                        name: 'Gallery',
                        link: routeMap.info.gallery,
                        hasCta: true,
                        hasWhiteHeader: false,
                        isStatic: false,
                        isHidden: false,
                    },
                ],
            },
            // {
            //     name: 'Reviews',
            //     link: routeMap.reviews,
            //     hasCta: true,
            //     hasWhiteHeader: false,
            //     isStatic: false,
            //     isHidden: false,
            // },
            // {
            //     name: 'About us',
            //     link: routeMap.aboutUs,
            //     hasCta: false,
            //     hasWhiteHeader: false,
            //     isStatic: false,
            //     isHidden: false,
            // },
            {
                name: 'Contacts',
                link: routeMap.contacts,
                hasCta: true,
                hasWhiteHeader: false,
                isStatic: false,
                isHidden: false,
            },
            {
                name: 'Sitemap',
                link: routeMap.sitemap,
                hasCta: false,
                hasWhiteHeader: true,
                isStatic: false,
                isHidden: true,
            },
        ],
        supportedLanguages: ['en', 'de', 'es', 'fi', 'fr', 'it', 'se', 'dk', 'no'],
        defaultLanguage: 'en',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 0.4, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations
            },
        },
        {
            resolve: 'gatsby-plugin-breakpoints',
            options: {
                queries: myCustomQueries,
            },
        },
        'gatsby-plugin-styled-components',
        `gatsby-plugin-provide-react`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/assets/`,
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: `blurred`,
                    formats: ['auto', 'webp'],
                    quality: 100,
                    breakpoints: [480, 750, 1080, 1366, 1920],
                    backgroundColor: `transparent`,
                },
            },
        },
        `gatsby-transformer-sharp`, // Needed for dynamic images
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@assets': 'static/assets',
                    '@components': 'src/components',
                    '@pages': 'src/pages',
                    '@atoms': 'src/components/atoms',
                    '@molecules': 'src/components/molecules',
                    '@organisms': 'src/components/organisms',
                    '@templates': 'src/components/templates',
                    '@providers': 'src/providers',
                    '@theme': 'src/theme',
                    '@utils': 'src/utils',
                    '@services': 'src/services',
                    '@hooks': 'src/hooks',
                    '@src': 'src',
                },
                extensions: ['js', 'jsx', 'ts', 'tsx'],
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Manrope:400,700,800&display=swap'],
                },
            },
        },
        // i18n support plugins
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/i18n`,
                name: `i18n`,
            },
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `i18n`, // name given to `gatsby-source-filesystem` plugin.
                languages: ['en', 'de', 'es', 'fi', 'fr', 'it', 'se', 'dk', 'no'],
                defaultLanguage: `en`,
                fallbackLanguage: 'en',
                redirect: true,
                // if you are using Helmet, you must include siteUrl, and make sure you add http:https
                siteUrl: `https://cryosculptor.com`,
                // you can pass any i18next options
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false, // not needed for react as it escapes by default
                    },
                    keySeparator: '.',
                    nsSeparator: false,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://cryosculptor.com/',
                sitemap: 'https://cryosculptor.com/sitemap.xml',
            },
        },
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: 'f9b9lpnv',
                dataset: 'production',
                // a token with read permissions is required
                // if you have a private dataset
                token: 'sksFmcMUzOF4nVcOYr6Zpha8ytIf11r39LBwZCBeuJqCbF8E8XzkXDDzMEAm5GBb8tQiQMp8co7Q8lobJjLWGfDNVqNvcxJ7iQUwzlLFQsegiK0hYXx2qBNvEvJiwDJ4Hv7hEa0cMZz4KOTwv4MTzbPxDrel7kQwHUOitwEV7CVlD9LQKSxl',
                watchMode: true,
            },
        },
    ],
};

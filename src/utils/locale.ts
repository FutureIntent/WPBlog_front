import { supportedLanguages } from '@theme/const';

export type SupportedLocales = typeof supportedLanguages[number];

export const localesMap: { [key: string]: { flag: string; name: string; nativeName: string } } = {
    de: {
        flag: 'DE',
        name: 'German',
        nativeName: 'Deutsch',
    },
    en: {
        flag: 'US',
        name: 'English',
        nativeName: 'English',
    },
    es: {
        flag: 'ES',
        name: 'Spanish',
        nativeName: 'Español',
    },
    fi: {
        flag: 'FI',
        name: 'Finnish',
        nativeName: 'Finnish',
    },
    fr: {
        flag: 'FR',
        name: 'French',
        nativeName: 'Français',
    },
    it: {
        flag: 'IT',
        name: 'Italian',
        nativeName: 'Italiano',
    },
    ru: {
        flag: 'RU',
        name: 'Russian',
        nativeName: 'Pусский',
    },
    se: {
        flag: 'SE',
        name: 'Swedish',
        nativeName: 'Svenska',
    },
    no: {
        flag: 'NO',
        name: 'Norwegian',
        nativeName: 'Norsk',
    },
    dk: {
        flag: 'DK',
        name: 'Danish',
        nativeName: 'Dansk',
    },
};

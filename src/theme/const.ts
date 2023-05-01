export type Languages = 'en' | 'de' | 'es' | 'fi' | 'fr' | 'it' | 'se' | 'no' | 'dk';

export type LanguageLocales = { Languages: string };

export const supportedLanguages = ['en', 'de', 'es', 'fi', 'fr', 'it', 'se', 'no', 'dk'] as const;

export const CRYO_PHONE_NUMBER = '+46722386841';
export const CRYO_EMAIL = 'info@thec.net';
export const CRYO_ADDRESS = 'Jungfrugatan 10, 4tr , 114 44 Stockholm';
export const CRYO_MAP_COORDINATES =
    'https://www.google.se/maps/place/Jungfrugatan+10,+4tr,+114+44+Stockholm,+%D0%A8%D0%B2%D0%B5%D1%86%D0%B8%D1%8F/@59.3363913,18.0795107,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9d5acad9f9bb:0x4cb1d757041ad0b2!8m2!3d59.3363913!4d18.0816994';

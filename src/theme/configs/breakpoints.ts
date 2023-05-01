/* eslint-disable prefer-destructuring */
export const myCustomQueries = {
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

export type Device = typeof deviceList[number];

export const deviceList = [
    'mobile',
    'mobileM',
    'mobileL',
    'tablet',
    'tabletL',
    'laptopS',
    'laptop',
    'desktop',
] as const;

type BreakpointsProp = Array<string> & { [key in Device]: string };

const breakpoints = [
    '320px',
    '360px',
    '568px',
    '768px',
    '1024px',
    '1140px',
    '1366px',
    '1680px',
] as BreakpointsProp;

breakpoints.mobile = breakpoints[0];
breakpoints.mobileM = breakpoints[1];
breakpoints.mobileL = breakpoints[2];
breakpoints.tablet = breakpoints[3];
breakpoints.tabletL = breakpoints[4];
breakpoints.laptopS = breakpoints[5];
breakpoints.laptop = breakpoints[6];
breakpoints.desktop = breakpoints[7];

export default breakpoints;

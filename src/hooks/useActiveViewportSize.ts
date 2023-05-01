import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import { Device } from '@theme/configs/breakpoints';

export type UseActiveViewportSizeReturn = Device | '_';

export const useActiveViewportSize = (): UseActiveViewportSizeReturn => {
    const gatsbyBreakpoints = useBreakpoint();

    const breakpointsMap: { [key in Device]: boolean } = {
        mobile: gatsbyBreakpoints.mobile,
        mobileM: gatsbyBreakpoints.mobileM,
        mobileL: gatsbyBreakpoints.mobileL,
        tablet: gatsbyBreakpoints.tablet,
        tabletL: gatsbyBreakpoints.tabletL,
        laptopS: gatsbyBreakpoints.laptopS,
        laptop: gatsbyBreakpoints.laptop,
        desktop: gatsbyBreakpoints.desktop,
    } as const;

    let deviceType: UseActiveViewportSizeReturn = '_';

    // Return the largest device name that is of value true
    Object.entries(breakpointsMap).forEach(([key, value]) => {
        if (value) {
            deviceType = key as Device;
        }
    });

    return deviceType;
};

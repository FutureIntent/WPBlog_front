import { props } from '@styled-system/should-forward-prop';
// eslint-disable-next-line import/no-extraneous-dependencies
import GatsbyLink from 'gatsby-link';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import styled from 'styled-components';

import DesktopNavigation from '@components/organisms/Navigation/Desktop/DesktopNavigation';
import MobileNavigation from '@components/organisms/Navigation/Mobile/MobileNavigation';


export interface Menu {
    name: string;
    link: string;
    hasCta: boolean;
    hasWhiteHeader: boolean;
    isStatic: boolean;
    isHidden?: boolean;
}

export interface MenuLinks extends Menu {
    name: string;
    link: string;
    hasCta: boolean;
    hasWhiteHeader: boolean;
    isStatic: boolean;
    subMenu: Menu[];
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const StyledLink = styled(GatsbyLink).withConfig({
    shouldForwardProp: (prop) => ![...props, 'whiteBg'].includes(String(prop)),
})<{ whiteBg?: boolean }>`
    color: var(--white);
    display: block;
    padding: 6px 8px;
    text-decoration: none;

    &.active-link {
        position: relative;

        &:after {
            background-color: ${({ whiteBg }) => (whiteBg ? 'var(--blue-brand)' : 'var(--white)')};
            bottom: 0;
            content: '';
            height: 2px;
            left: 0;
            position: absolute;
            width: 100%;
        }
    }
`;

const Navigation = ({ hasWhiteHeader }: { hasWhiteHeader: boolean }) => {
    const gatsbyBreakpoints = useBreakpoint();

    if (typeof gatsbyBreakpoints.laptopS === 'undefined') return null;

    return gatsbyBreakpoints.laptopS ? (
        <DesktopNavigation hasWhiteHeader={hasWhiteHeader} />
    ) : (
        <MobileNavigation hasWhiteHeader={hasWhiteHeader} />
    );
};

export default Navigation;

import Button from '@mui/material/Button';
import { props } from '@styled-system/should-forward-prop';
// eslint-disable-next-line import/no-extraneous-dependencies
import GatsbyLink from 'gatsby-link';
import { ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import ArrowDown from '@components/molecules/Icons/ArrowDown';

import { MenuLinks } from '@components/organisms/Navigation/Navigation';
import { useI18next } from 'gatsby-plugin-react-i18next';

const StyledMenuToggle = styled(Button)`
    border-radius: 0 !important;
    margin: 0 2.25rem;
    white-space: nowrap;
`;

const StyledHoverMenu = styled.ul.withConfig({
    shouldForwardProp: (prop) =>
        ![...props, 'withBg', 'isOpen', 'isFooter', 'offset'].includes(String(prop)),
})<{
    withBg: boolean;
    isOpen: boolean;
    isFooter: boolean;
    offset?: number;
}>`
    display: none;

    ${({ theme, withBg, isOpen, isFooter, offset = 30 }) =>
        isOpen &&
        `
        display: block;
        position: absolute;
        white-space: nowrap;
        z-index: 101;
        background-color: var(--white);
        ${isFooter ? `bottom: ${offset + 20}px` : `top: ${offset + 20}px`};
        border: 0;
        box-shadow: ${withBg ? theme.shadows.card : 'none'};
  `}

    .menu-item {
        border: 0;
        position: relative;
        width: 100%;

        &::after {
            background-color: rgb(187, 191, 214, 0.25);
            bottom: 0;
            content: '';
            height: 1px;
            left: 10%;
            position: absolute;
            width: 80%;
        }

        &:last-of-type::after {
            height: 0;
        }
    }
`;

const StyledArrowDown = styled(ArrowDown)`
    margin-left: 0.2rem;
    transform: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'rotate(-180deg)' : 'unset')};
    transform-origin: center center;
    transition: transform 0.2s ease-in-out;
`;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const StyledLink = styled(GatsbyLink).withConfig({
    shouldForwardProp: (prop) => ![...props, 'withBg'].includes(String(prop)),
})<{ withBg: boolean }>`
    display: inline-block;
    padding: 1rem 1.5rem;
    width: 100%;

    > * {
        color: var(--black-brand);
    }

    & .active-link > * {
        color: ${({ withBg }) => (withBg ? 'var(--blue-brand)' : 'var(--white)')};
    }
`;

const DropdownMenu = ({
    item,
    withBg = false,
    isFixed = false,
    isFooter = false,
    children,
}: {
    item: MenuLinks;
    withBg?: boolean;
    isFixed?: boolean;
    isFooter?: boolean;
    children: ReactNode;
}) => {
    const { language, defaultLanguage } = useI18next();
    const langRoute = language !== defaultLanguage ? `/${language}` : '';
    const [isOpen, setIsOpen] = useState(false);
    const toggleRef = useRef<HTMLButtonElement | null>(null);

    return (
        <Box
            display="flex"
            alignItems="center"
            height="var(--header-height)"
            position="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <StyledMenuToggle ref={toggleRef}>
                {children}
                <StyledArrowDown
                    size="micro"
                    color={withBg && !isFooter ? 'var(--black-brand)' : 'var(--grey-lt)'}
                    isOpen={isOpen}
                />
            </StyledMenuToggle>

            <StyledHoverMenu
                withBg={withBg || isFixed || isFooter}
                offset={toggleRef.current?.clientHeight}
                isFooter={isFooter}
                isOpen={isOpen}
            >
                {item.subMenu.map((link) => !link.isHidden && (
                    <li className="menu-item" key={link.link}>
                        <StyledLink
                            key={item.name}
                            to={`${langRoute}${link.link}`}
                            activeClassName="active-link"
                            partiallyActive
                            withBg={withBg}
                        >
                            <Typography
                                variant="caption"
                                color="var(--black-brand)"
                                hoverColor="var(--blue-dim)"
                                mb="unset"
                            >
                                {link.name}
                            </Typography>
                        </StyledLink>
                    </li>
                ))}
            </StyledHoverMenu>
        </Box>
    );
};

export default DropdownMenu;

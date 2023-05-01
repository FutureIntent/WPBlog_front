import { props } from '@styled-system/should-forward-prop';
import { hexToRGB } from '@utils/helpers';
import { localesMap } from '@utils/locale';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { ReactElement, useRef, useState } from 'react';
import styled from 'styled-components';

import { colors } from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';
import { supportedLanguages as appSupportedLanguages } from '@theme/const';

import Box from '@components/atoms/Box';
import CountryFlag from '@components/atoms/CountryFlag';
import { DropdownItemProps, DropdownProps } from '@components/atoms/Dropdown';

import ArrowDown from '@components/molecules/Icons/ArrowDown';

const FlagContainer = styled.div`
    align-items: center;
    display: flex;
    grid-gap: 10px;
`;

const FlagField = (data: DropdownItemProps): ReactElement | null => {
    const { value: locale, label } = data;

    return (
        <FlagContainer>
            <CountryFlag locale={locale} />
            <p className="lang-label">{label}</p>
        </FlagContainer>
    );
};

const StyledArrowDown = styled(ArrowDown)<{ isOpen: boolean }>`
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-180deg)' : undefined)};
    transition: transform ease-in 0.1s;
`;

const StyledHoverMenu = styled.ul.withConfig({
    shouldForwardProp: (prop) =>
        ![...props, 'isOpen', 'isDark', 'isFooter', 'offset'].includes(String(prop)),
})<{
    isOpen: boolean;
    isFooter: boolean;
    offset?: number;
    isDark?: boolean;
}>`
    display: none;

    ${({ theme, isOpen, isFooter, offset = 30 }) =>
        isOpen &&
        `
        background-color: var(--white);
        border-radius: 4px;
        width: fit-content;
        display: block;
        position: absolute;
        overflow: hidden;
        white-space: nowrap;
        z-index: 101;
        background-color: var(--white);
        ${isFooter ? `bottom: ${offset + 20}px` : `top: ${offset + 20}px`};
        border: 0;
        box-shadow: ${theme.shadows.card};
  `}

    .menu-item {
        border: 0;
        position: relative;
        width: 100%;
        padding: 0.5rem 1rem;
        cursor: pointer;
        background: var(--white);
        color: var(--black-brand);

        &:hover {
            background: ${`rgba(${hexToRGB(colors.blueBrand)}, 0.5)`};

            .lang-label {
                color: ${({ isDark }) => (isDark ? 'var(--black-brand)' : 'var(--white)')};
            }
        }

        .lang-label {
            color: var(--black-brand);
        }

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

const SingleOption = styled.div<{ isDark?: boolean }>`
    align-items: center;
    color: ${({ isDark }) => (isDark ? 'white' : 'var(--black-brand)')};
    cursor: pointer;
    display: flex;
    font-size: 12px;
    font-weight: 400;
    grid-gap: 10px;
    line-height: 15px;

    ${mediaQueries.tablet} {
        font-size: 17px;
        line-height: 21px;
    }
`;

const LanguageDropdown = ({
    isDark,
    language,
    originalPath,
}: Pick<DropdownProps, 'isDark'> & { language: string; originalPath: string }): ReactElement => {
    const { changeLanguage } = useI18next();
    const supportedLanguages = appSupportedLanguages.map((lang) => ({
        value: lang,
        label: localesMap[lang].nativeName,
        path: originalPath,
    }));
    const { tablet } = useBreakpoint();

    const [currentValue] = useState<DropdownItemProps>(
        // eslint-disable-next-line react/destructuring-assignment
        supportedLanguages.filter((currentLanguage) => currentLanguage.value === language).pop() ||
            supportedLanguages[0],
    );

    const [isOpen, setIsOpen] = useState(false);
    const toggleRef = useRef<HTMLDivElement | null>(null);

    const toggleOpen = () => setIsOpen((prev) => !prev);
    const handleOpenMenu = () => setIsOpen(true);
    const handleCloseMenu = () => setIsOpen(false);

    const handleChangeLanguage = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        lang: string,
    ) => {
        e.preventDefault();

        changeLanguage(lang);
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            height="var(--header-height)"
            position="relative"
            onClick={!tablet ? toggleOpen : undefined}
            onMouseEnter={tablet ? handleOpenMenu : undefined}
            onMouseLeave={tablet ? handleCloseMenu : undefined}
        >
            <SingleOption isDark={isDark}>
                <FlagField value={currentValue.value} label={currentValue.label} />
                <StyledArrowDown isOpen={isOpen} size="micro" color="inherit" />
            </SingleOption>
            <StyledHoverMenu
                offset={toggleRef.current?.clientHeight}
                isFooter={false}
                isOpen={isOpen}
                isDark={isDark}
            >
                {supportedLanguages.map((lang) => (
                    <li className="menu-item" key={lang.value}>
                        <a
                            href={`${lang.value !== 'en' ? `/${lang.value}` : ''}${lang?.path}`}
                            onClick={(e) => handleChangeLanguage(e, lang.value)}
                        >
                            <FlagField value={lang.value} label={lang.label} />
                        </a>
                    </li>
                ))}
            </StyledHoverMenu>
        </Box>
    );
};

export default LanguageDropdown;

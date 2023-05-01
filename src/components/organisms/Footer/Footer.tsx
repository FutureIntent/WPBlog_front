import routeMap from '@utils/routeMap';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';
import { CRYO_ADDRESS, CRYO_EMAIL, CRYO_MAP_COORDINATES, CRYO_PHONE_NUMBER } from '@theme/const';

import Box from '@components/atoms/Box';
import { CenterAlign } from '@components/atoms/CenterAlign';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import AppLink from '@components/atoms/Link';
import Typography from '@components/atoms/Typography';

import Address from '@components/molecules/Icons/Address';
import ArrowRightButton from '@components/molecules/Icons/ArrowRightButton';
import Instagram from '@components/molecules/Icons/Instagram';
import LinkedIn from '@components/molecules/Icons/LinkedIn';
import Mail from '@components/molecules/Icons/Mail';
import Phone from '@components/molecules/Icons/Phone';
import SocialFacebook from '@components/molecules/Icons/SocialFacebook';
import YouTube from '@components/molecules/Icons/YouTube';
import LanguageDropdown from '@components/molecules/LanguageDropdown';

import DesktopNavigation from '@components/organisms/Navigation/Desktop/DesktopNavigation';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    height: var(--footer-height);
    position: relative;
    z-index: 1;
`;

const StyledInfoBlock = styled.div`
    background-color: var(--black-brand);
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: 2.25rem 1rem;

    ${mediaQueries.tablet} {
        padding: 2.8125rem 2.8125rem 1.25rem;
    }
`;

const StyledBackToTop = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const StyledBackToTopArrow = styled(ArrowRightButton)`
    transform: rotate(-90deg);
`;

const StyledSvgWrapper = styled.div`
    color: #858aa2;

    &:hover {
        color: var(--white);
        cursor: pointer;
    }
`;

const StyledGridParent = styled(GridParent)`
    width: 100%;
`;

const Footer = ({ lang = 'en', originalPath }: { lang?: string; originalPath: string }) => {
    const { t } = useTranslation('commons');
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <StyledFooter>
            <StyledInfoBlock>
                <StyledGridParent as="div" noGutter>
                    <GridChild
                        gridColumn={{ _: 'span 6', tablet: 'span 7', laptopS: 'span 3' }}
                        gridRow="1"
                    >
                        <AppLink to={routeMap.home} aria-label="Company Logo">
                            <CenterAlign maxWidth="15rem">
                                <img
                                    style={{ height: '100%', width: '100%' }}
                                    alt=""
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzA4LjEzIDM4MC4yMiI+CiAgPGc+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTk0MCwyNjIuMTR2LTEyYTMwLDMwLDAsMCwwLTMwLTMwSDgxMGEzMCwzMCwwLDAsMC0zMCwzMHYxMDBhMzAsMzAsMCwwLDAsMzAsMzBIOTEwYTMwLDMwLDAsMCwwLDMwLTMwVjMzOC4wNmE2LDYsMCwwLDAtNi02SDkxMmE2LDYsMCwwLDAtNiw2djQuMDhhMTAsMTAsMCwwLDEtMTAsMTBIODI0YTEwLDEwLDAsMCwxLTEwLTEwdi04NGExMCwxMCwwLDAsMSwxMC0xMGg3MmExMCwxMCwwLDAsMSwxMCwxMHY0YTYsNiwwLDAsMCw2LDZoMjJBNiw2LDAsMCwwLDk0MCwyNjIuMTRaIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0zNTQsMjIwLjE0SDIwNmE2LDYsMCwwLDAtNiw2djE2YTYsNiwwLDAsMCw2LDZoNTYuODdWMzc0LjIyYTYsNiwwLDAsMCw2LDZoMjIuMjZhNiw2LDAsMCwwLDYtNlYyNDguMTRIMzU0YTYsNiwwLDAsMCw2LTZ2LTE2QTYsNiwwLDAsMCwzNTQsMjIwLjE0WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik03NTQsMjIwLjE0bC0xNDgtLjA4YTYsNiwwLDAsMC02LDZWMzc0LjE0YTYsNiwwLDAsMCw2LDZINzU0YTYsNiwwLDAsMCw2LTZ2LTE2YTYsNiwwLDAsMC02LTZINjM0VjMxNC4wNkg3MzRhNiw2LDAsMCwwLDYtNnYtMTZhNiw2LDAsMCwwLTYtNkg2MzRWMjQ4LjE0SDc1NGE2LDYsMCwwLDAsNi02di0xNkE2LDYsMCwwLDAsNzU0LDIyMC4xNFoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNNTU0LDIyMC4wNkg1MzJhNiw2LDAsMCwwLTYsNnY2MEg0MzR2LTYwYTYsNiwwLDAsMC02LTZINDA2YTYsNiwwLDAsMC02LDZ2MTQ4YTYsNiwwLDAsMCw2LDZoMjJhNiw2LDAsMCwwLDYtNnYtNjBoOTJ2NjBhNiw2LDAsMCwwLDYsNmgyMmE2LDYsMCwwLDAsNi02di0xNDhBNiw2LDAsMCwwLDU1NCwyMjAuMDZaIiBmaWxsPSIjZmZmIi8+CiAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIG9wYWNpdHk9IjAuNSI+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMDI2LjU4LDI1Ni44MlYyMjYuNThoLTExLjQ2di02LjQ3aDI5Ljh2Ni40N2gtMTEuNDd2MzAuMjRaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTEwNDksMjU2LjgyVjIyMC4xMWg2Ljg3VjIzNS4yaDE2LjI2VjIyMC4xMUgxMDc5djM2LjcxaC02Ljg3VjI0MS42N2gtMTYuMjZ2MTUuMTVaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTEwODYsMjU2LjgyVjIyMC4xMWgyMy43NHY2LjQ3SDEwOTIuOXY3Ljg1aDEzLjg0djYuNDhIMTA5Mi45djkuNDNoMTYuODd2Ni40OFoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTEyNS45NCwyNTYuODJWMjIwLjExaDYuODdWMjM1LjJoMTYuMjZWMjIwLjExaDYuODd2MzYuNzFoLTYuODdWMjQxLjY3aC0xNi4yNnYxNS4xNVoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTE3Ny44MSwyNTcuNThhMTYsMTYsMCwwLDEtNy43My0xLjgsMTIuOTIsMTIuOTIsMCwwLDEtNS4yLTUuMDYsMTUuMTEsMTUuMTEsMCwwLDEtMS44Ny03LjY3VjIyMC4xNmw3LDBWMjQzYTguNjgsOC42OCwwLDAsMCwuNjEsMy4yOSw3LjY1LDcuNjUsMCwwLDAsMS42OCwyLjU1LDcuMzksNy4zOSwwLDAsMCwyLjUsMS42NCw4LjM1LDguMzUsMCwwLDAsNi4xNCwwLDcuMjYsNy4yNiwwLDAsMCwyLjQ4LTEuNjYsNy41Niw3LjU2LDAsMCwwLDEuNjYtMi41NSw4Ljc2LDguNzYsMCwwLDAsLjU5LTMuMjZWMjIwLjExaDd2MjIuOTRhMTUuMTEsMTUuMTEsMCwwLDEtMS44Nyw3LjY3LDEyLjg2LDEyLjg2LDAsMCwxLTUuMiw1LjA2QTE2LDE2LDAsMCwxLDExNzcuODEsMjU3LjU4WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMTk5LjY4LDI1Ni44MlYyMjAuMTFoNi4xN2wxMiwyNC4zNywxMi0yNC4zN2g2LjE2djM2LjcxaC02LjQxVjIzNC44OWwtMTAuNTYsMjEuOTNoLTIuNDNsLTEwLjU1LTIxLjkzdjIxLjkzWiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMjQwLjYsMjU2LjgybDExLjExLTM2LjcxSDEyNjJsMTEuMTIsMzYuNzFIMTI2NmwtOS45LTMyLjM4aDEuMzJsLTkuNzUsMzIuMzhabTYuNjYtNy42NXYtNi40OGgxOS4ydjYuNDhaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTEyNzcuNjIsMjU2LjgyVjIyMC4xMWg3bDE1LjgxLDI0LjQ3VjIyMC4xMWg3djM2LjcxaC03bC0xNS44MS0yNC40OHYyNC40OFoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTAxOC4xNSwzMTh2LTM2LjdoMjMuNzR2Ni40N0gxMDI1djcuODVoMTMuODR2Ni40OEgxMDI1djkuNDNoMTYuODdWMzE4WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDU1Ljc4LDMxOGwtMTEuMTItMzYuN2g3LjA4bDkuMDksMzAuMTgsOS4yNC0zMC4xOGg3LjA3TDEwNjYsMzE4WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDk1LjUzLDMxOC43NmExNy43OSwxNy43OSwwLDAsMS05LjQxLTIuNCwxNS44NiwxNS44NiwwLDAsMS02LjA4LTYuNywyNC41MywyNC41MywwLDAsMSwwLTIwLDE1LjkyLDE1LjkyLDAsMCwxLDYuMDgtNi43LDE5LjY1LDE5LjY1LDAsMCwxLDE4LjgyLDAsMTUuOTIsMTUuOTIsMCwwLDEsNi4wOCw2LjcsMjQuNTMsMjQuNTMsMCwwLDEsMCwyMCwxNS44NiwxNS44NiwwLDAsMS02LjA4LDYuN0ExNy43OSwxNy43OSwwLDAsMSwxMDk1LjUzLDMxOC43NlptMC02LjUzYTkuNzEsOS43MSwwLDAsMCw1Ljc2LTEuNSw5LjQ2LDkuNDYsMCwwLDAsMy40NS00LjQxLDE3LjkzLDE3LjkzLDAsMCwwLDEuMTUtNi42OCwxNy41NSwxNy41NSwwLDAsMC0xLjE1LTYuNjMsOS40OCw5LjQ4LDAsMCwwLTMuNDUtNC4zNiwxMC4zNSwxMC4zNSwwLDAsMC01Ljc2LTEuNiw5Ljc4LDkuNzgsMCwwLDAtNS43NiwxLjUsOS40Niw5LjQ2LDAsMCwwLTMuNDUsNC40MSwxOCwxOCwwLDAsMC0xLjE0LDYuNjgsMTcuNTUsMTcuNTUsMCwwLDAsMS4xNCw2LjYzLDkuNDgsOS40OCwwLDAsMCwzLjQ1LDQuMzZBMTAuMzUsMTAuMzUsMCwwLDAsMTA5NS41MywzMTIuMjNaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTExMTguNzEsMzE4di0zNi43aDYuODd2MzAuMjNoMTUuNjZWMzE4WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMTYwLjM0LDMxOC43NmExNiwxNiwwLDAsMS03LjczLTEuOCwxMywxMywwLDAsMS01LjIxLTUuMDYsMTUuMjEsMTUuMjEsMCwwLDEtMS44Ni03LjY3VjI4MS4zNGw3LDB2MjIuODlhOC43Miw4LjcyLDAsMCwwLC42LDMuMjksOCw4LDAsMCwwLDEuNjgsMi41NSw3LjQ5LDcuNDksMCwwLDAsMi41LDEuNjQsOC4xNSw4LjE1LDAsMCwwLDMsLjU3LDguMDYsOC4wNiwwLDAsMCwzLjA5LS41OCw3LjQzLDcuNDMsMCwwLDAsNC4xNC00LjIxLDguNTYsOC41NiwwLDAsMCwuNi0zLjI2VjI4MS4yOWg3djIyLjk0YTE1LjIxLDE1LjIxLDAsMCwxLTEuODcsNy42NywxMywxMywwLDAsMS01LjIxLDUuMDZBMTYsMTYsMCwwLDEsMTE2MC4zNCwzMTguNzZaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTExOTAuNjQsMzE4VjI4Ny43NmgtMTEuNDZ2LTYuNDdIMTIwOXY2LjQ3aC0xMS40N1YzMThaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTEyMTMuNTIsMzE4di0zNi43aDYuODdWMzE4WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMjQzLjU4LDMxOC43NmExNy43OSwxNy43OSwwLDAsMS05LjQxLTIuNCwxNS44OSwxNS44OSwwLDAsMS02LjA5LTYuNywyNC42MywyNC42MywwLDAsMSwwLTIwLDE1Ljk0LDE1Ljk0LDAsMCwxLDYuMDktNi43LDE5LjY1LDE5LjY1LDAsMCwxLDE4LjgyLDAsMTUuOTIsMTUuOTIsMCwwLDEsNi4wOCw2LjcsMjQuNTMsMjQuNTMsMCwwLDEsMCwyMCwxNS44NiwxNS44NiwwLDAsMS02LjA4LDYuN0ExNy43OSwxNy43OSwwLDAsMSwxMjQzLjU4LDMxOC43NlptMC02LjUzYTkuNzUsOS43NSwwLDAsMCw1Ljc2LTEuNSw5LjM4LDkuMzgsMCwwLDAsMy40NC00LjQxLDE3LjczLDE3LjczLDAsMCwwLDEuMTUtNi42OCwxNy4zNSwxNy4zNSwwLDAsMC0xLjE1LTYuNjMsOS40LDkuNCwwLDAsMC0zLjQ0LTQuMzYsMTAuMzksMTAuMzksMCwwLDAtNS43Ni0xLjYsOS43OCw5Ljc4LDAsMCwwLTUuNzYsMS41LDkuNDYsOS40NiwwLDAsMC0zLjQ1LDQuNDEsMTgsMTgsMCwwLDAtMS4xNSw2LjY4LDE3LjU1LDE3LjU1LDAsMCwwLDEuMTUsNi42Myw5LjQ4LDkuNDgsMCwwLDAsMy40NSw0LjM2QTEwLjM1LDEwLjM1LDAsMCwwLDEyNDMuNTgsMzEyLjIzWiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMjY2LjI2LDMxOHYtMzYuN2g3TDEyODksMzA1Ljc2VjI4MS4yOWg3VjMxOGgtN2wtMTUuODEtMjQuNDdWMzE4WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDMzLjc1LDM3OS45NGExNy43NiwxNy43NiwwLDAsMS05LjQtMi40LDE1Ljg4LDE1Ljg4LDAsMCwxLTYuMDktNi43LDI0LjYzLDI0LjYzLDAsMCwxLDAtMjAsMTUuODIsMTUuODIsMCwwLDEsNi4wOS02LjcsMTcuNzYsMTcuNzYsMCwwLDEsOS40LTIuNCwxNy4yMywxNy4yMywwLDAsMSwxMC41MiwzLjE0LDE2LjYxLDE2LjYxLDAsMCwxLDYsOC40OGwtNi45MiwxLjk0YTEwLDEwLDAsMCwwLTMuNDEtNS4xOSw5Ljg2LDkuODYsMCwwLDAtNi4xOS0xLjg0LDEwLjE3LDEwLjE3LDAsMCwwLTUuNzcsMS41NSw5LjQzLDkuNDMsMCwwLDAtMy40Nyw0LjM5LDE5LjY0LDE5LjY0LDAsMCwwLDAsMTMuMyw5LjQzLDkuNDMsMCwwLDAsMy40Nyw0LjM5LDEwLjE3LDEwLjE3LDAsMCwwLDUuNzcsMS41NSw5LjgxLDkuODEsMCwwLDAsNi4xOS0xLjg2LDEwLDEwLDAsMCwwLDMuNDEtNS4xN2w2LjkyLDEuOTNhMTYuNiwxNi42LDAsMCwxLTYsOC40OUExNy4yMywxNy4yMywwLDAsMSwxMDMzLjc1LDM3OS45NFoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTA3MS40NCwzNzkuOTRhMTcuNzcsMTcuNzcsMCwwLDEtOS40MS0yLjQsMTUuODgsMTUuODgsMCwwLDEtNi4wOS02LjcsMjQuNjMsMjQuNjMsMCwwLDEsMC0yMCwxNS44MiwxNS44MiwwLDAsMSw2LjA5LTYuNywxOS42MywxOS42MywwLDAsMSwxOC44MSwwLDE1LjgyLDE1LjgyLDAsMCwxLDYuMDksNi43LDI0LjYzLDI0LjYzLDAsMCwxLDAsMjAsMTUuODgsMTUuODgsMCwwLDEtNi4wOSw2LjdBMTcuNzYsMTcuNzYsMCwwLDEsMTA3MS40NCwzNzkuOTRabTAtNi41M2E5Ljc3LDkuNzcsMCwwLDAsNS43NS0xLjUsOS40LDkuNCwwLDAsMCwzLjQ1LTQuNDEsMTcuNzcsMTcuNzcsMCwwLDAsMS4xNS02LjY4LDE3LjM1LDE3LjM1LDAsMCwwLTEuMTUtNi42Myw5LjQxLDkuNDEsMCwwLDAtMy40NS00LjM2LDEwLjM0LDEwLjM0LDAsMCwwLTUuNzUtMS42LDkuNzEsOS43MSwwLDAsMC01Ljc2LDEuNSw5LjQsOS40LDAsMCwwLTMuNDUsNC40MSwxNy43MywxNy43MywwLDAsMC0xLjE1LDYuNjgsMTcuMzUsMTcuMzUsMCwwLDAsMS4xNSw2LjYzLDkuNDEsOS40MSwwLDAsMCwzLjQ1LDQuMzZBMTAuMzUsMTAuMzUsMCwwLDAsMTA3MS40NCwzNzMuNDFaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTEwOTQuMTIsMzc5LjE3di0zNi43aDYuMTZsMTIsMjQuMzcsMTItMjQuMzdoNi4xNnYzNi43aC02LjQxVjM1Ny4yNWwtMTAuNTYsMjEuOTJoLTIuNDJsLTEwLjU2LTIxLjkydjIxLjkyWiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMTM3LjU1LDM3OS4xN3YtMzYuN2gxNS4zNmwxLjQzLDBhMTEuOTEsMTEuOTEsMCwwLDEsMS42LjE3LDExLjE1LDExLjE1LDAsMCwxLDUuMzQsMi4xNyw5LjgsOS44LDAsMCwxLDMuMDcsNC4xNiwxNi4yMywxNi4yMywwLDAsMSwwLDExLjE5LDkuODcsOS44NywwLDAsMS0zLjA4LDQuMTcsMTEuMTIsMTEuMTIsMCwwLDEtNS4zMiwyLjE3cS0uNy4xMS0xLjYyLjE1Yy0uNiwwLTEuMDcuMDUtMS40MS4wNWgtOC40OXYxMi40NFptNi44Ny0xOC45MWg4LjE5Yy4zNSwwLC43NCwwLDEuMTYtLjA1YTUuNyw1LjcsMCwwLDAsMS4xNi0uMjEsNC4xMyw0LjEzLDAsMCwwLDIuMTUtMS4yOCw1LjM2LDUuMzYsMCwwLDAsMS4wNS0yLDgsOCwwLDAsMCwwLTQuMiw1LjM2LDUuMzYsMCwwLDAtMS4wNS0yLDQuMTMsNC4xMywwLDAsMC0yLjE1LTEuMjgsNS43LDUuNywwLDAsMC0xLjE2LS4yMWMtLjQyLDAtLjgxLS4wNS0xLjE2LS4wNWgtOC4xOVoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTE2NS4zNCwzNzkuMTdsMTEuMTEtMzYuN2gxMC4yNWwxMS4xMSwzNi43aC03LjA3bC05LjktMzIuMzdoMS4zMmwtOS43NSwzMi4zN1ptNi42Ni03LjY0di02LjQ4aDE5LjJ2Ni40OFoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTIwMi4zNiwzNzkuMTd2LTM2LjdoN2wxNS44MSwyNC40N1YzNDIuNDdoN3YzNi43aC03bC0xNS44MS0yNC40N3YyNC40N1oiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTI0OC4wNywzNzkuMTdWMzY0LjIzbC0xMi40Mi0yMS43Nmg4bDcuODgsMTMuODEsNy44OC0xMy44MWg4TDEyNTUsMzY0LjIzdjE0Ljk0WiIgZmlsbD0iI2ZmZiIvPgogICAgICA8L2c+CiAgICAgIDxyZWN0IHg9Ijk5MCIgeT0iMjIwLjExIiB3aWR0aD0iNC41NyIgaGVpZ2h0PSIxNTkuODMiIGZpbGw9IiNmZmYiLz4KICAgIDwvZz4KICA8L2c+CiAgPGc+CiAgICA8ZyBvcGFjaXR5PSIwLjgiPgogICAgICA8cGF0aCBkPSJNMTY0LjY5LDE4OC4yOGE4Ljg1LDguODUsMCwwLDAtNy43NS00LjQ3aDBhOC44NCw4Ljg0LDAsMCwwLTcuNzUsNC40OGwtMzYuNjUsNjMuNjVhNyw3LDAsMCwxLTYsMy40OEg5Ny4zM2E3LDcsMCwwLDEtNi0zLjQ5TDg2Ljc1LDI0NGE3LDcsMCwwLDEsMC03bDM2Ljk0LTYzLjVBOSw5LDAsMCwwLDExNiwxNjAuMDZsLTguODEsMGgwYTkuOTQsOS45NCwwLDAsMC04LjYsNWwtNDAuOCw3MC40N2ExMCwxMCwwLDAsMCwwLDkuOTVMNzUuNSwyNzYuMjlhMTAsMTAsMCwwLDAsOC42LDVsMzUuNTcuMDVoMGExMCwxMCwwLDAsMCw4LjYtNWw0MC44MS03MC40OWExMCwxMCwwLDAsMCwwLTEwWiIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBkPSJNMjEwLjc4LDE4MS43OWw4MS40LjEyaDBhMTAsMTAsMCwwLDAsOC42LTVsMTcuODQtMzAuODNhMTAsMTAsMCwwLDAsMC05Ljk0TDMwMC45LDEwNS4zM2ExMCwxMCwwLDAsMC04LjYtNWwtODEuNDEtLjEyaDBhMTAsMTAsMCwwLDAtOC42MSw1bC00LjQsNy42M2E5LDksMCwwLDAsNy43NSwxMy40M2gwTDI3OSwxMjYuMmgwYTcsNywwLDAsMSw2LDMuNDlsNC41Nyw3Ljk1YTcsNywwLDAsMSwwLDdsLTQuNTgsNy45MWE3LDcsMCwwLDEtNiwzLjQ3aDBsLTczLjQyLS4yNWgwYTguOTQsOC45NCwwLDAsMC03Ljc2LDEzLjRsNC4zOCw3LjY1QTEwLDEwLDAsMCwwLDIxMC43OCwxODEuNzlaIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGQ9Ik05MS41NiwyOS4zOGE3LDcsMCwwLDEsNi0zLjQ4aDBsOS4xNywwYTYuOTQsNi45NCwwLDAsMSw2LDMuNWwzNi40Nyw2My43NUE4Ljg2LDguODYsMCwwLDAsMTU3LDk3LjY4aDBhOC44NSw4Ljg1LDAsMCwwLDcuNzMtNC40NWw0LjQyLTcuNjJhMTAsMTAsMCwwLDAsMC0xMEwxMjguNiw1LjA1YTEwLDEwLDAsMCwwLTguNi01TDg0LjQzLDBoMGExMCwxMCwwLDAsMC04LjYsNUw1OCwzNS43N2ExMCwxMCwwLDAsMCwwLDkuOTVsNDAuNiw3MC42YTEwLDEwLDAsMCwwLDguNjEsNUgxMTZhOSw5LDAsMCwwLDcuNzQtMTMuNDRMODcsNDQuMjdhNyw3LDAsMCwxLDAtN1oiIGZpbGw9IiNmZmYiLz4KICAgIDwvZz4KICAgIDxnIG9wYWNpdHk9IjAuNSI+CiAgICAgIDxwYXRoIGQ9Ik0yMDEuMywzOS41OGw1Ljg1LTEwLjE0YTcsNywwLDAsMSw2LTMuNDloMGw5LjE0LDBhNyw3LDAsMCwxLDYsMy40OWw0LjU3LDcuOTVhNyw3LDAsMCwxLDAsN0wyMjcsNTQuNTlBOSw5LDAsMCwwLDIzNC44LDY4aDguNjJBMTAsMTAsMCwwLDAsMjUyLDYzbDkuOTEtMTcuMTJhMTAsMTAsMCwwLDAsMC05Ljk0TDI0NC4xOSw1LjExYTkuOTMsOS45MywwLDAsMC04LjYtNUwyMDAsLjA2aDBhMTAsMTAsMCwwLDAtOC42LDVsLTkuODksMTcuMDlhMTAsMTAsMCwwLDAsMCwxMGw0LjMzLDcuNTJhOC44NCw4Ljg0LDAsMCwwLDcuNzUsNC40OWgwQTguODQsOC44NCwwLDAsMCwyMDEuMywzOS41OFoiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggZD0iTTYwLjc4LDE2MC41NEE4Ljg5LDguODksMCwwLDAsNTMsMTU2SDQxLjE1YTcsNywwLDAsMS02LTMuNDhsLTQuNjMtOGE3LDcsMCwwLDEsMC03bDQuNTctOGE3LDcsMCwwLDEsNi4wNi0zLjUxbDExLjc2LDBhOSw5LDAsMCwwLDcuNzctMTMuNTFMNTYuMjQsMTA1YTEwLDEwLDAsMCwwLTguNjYtNWwtMTkuODQuMDZhMTAsMTAsMCwwLDAtOC42Myw1TDEuMzIsMTM2LjE5YTEwLDEwLDAsMCwwLDAsMTBsMTgsMzAuOTFhMTAsMTAsMCwwLDAsOC42Myw1aDBMNDcuODQsMTgyYTEwLDEwLDAsMCwwLDguNjEtNWw0LjMzLTcuNDhBOC45Miw4LjkyLDAsMCwwLDYwLjc4LDE2MC41NFoiIGZpbGw9IiNmZmYiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="
                                />
                            </CenterAlign>
                        </AppLink>
                    </GridChild>
                    <GridChild
                        gridColumn={{ _: 'span 12', laptop: 'span 7' }}
                        gridRow={{ _: '2', laptopS: '1' }}
                    >
                        <Box
                            display={{ _: 'none', tablet: 'flex' }}
                            alignItems="center"
                            height="100%"
                            justifyContent={{ _: 'flex-end' }}
                            mt={{ _: '0.75rem', tablet: '2rem', laptopS: 0 }}
                        >
                            <DesktopNavigation isFooter />
                        </Box>
                    </GridChild>
                    <GridChild
                        gridColumn={{ _: 'span 6', tablet: 'span 5', laptop: 'span 2' }}
                        gridRow={1}
                    >
                        <CenterAlign axis="y" justifyContent="flex-end" flexWrap="wrap">
                            <LanguageDropdown language={lang} originalPath={originalPath} isDark />
                            <StyledBackToTop onClick={handleBackToTop}>
                                <Typography
                                    display={{ _: 'none', tablet: 'inline' }}
                                    variant="accent"
                                    color="var(--white)"
                                    ml="1rem"
                                >
                                    {t('backToTop')}
                                </Typography>
                                <StyledBackToTopArrow color="var(--white)" />
                            </StyledBackToTop>
                        </CenterAlign>
                    </GridChild>

                    <GridChild
                        gridColumn={{ _: '2 / span 10', tablet: 'span 5', laptop: 'span 3' }}
                        gridRow={{ _: '5', tablet: '4', laptopS: '2' }}
                    >
                        <Box mt="3rem">
                            <CenterAlign axis="y" mb="1.25rem">
                                <Address size="large" color="var(--blue-brand)" />
                                <a href={CRYO_MAP_COORDINATES} target="_blank" rel="noreferrer">
                                    <Typography
                                        color="var(--white)"
                                        variant="paragraph2"
                                        ml="1.25rem"
                                    >
                                        {CRYO_ADDRESS}
                                    </Typography>
                                </a>
                            </CenterAlign>
                            <CenterAlign axis="y" mb="1.25rem">
                                <Mail size="large" color="var(--blue-brand)" />
                                <a href={`mailto:${CRYO_EMAIL}`}>
                                    <Typography
                                        color="var(--white)"
                                        variant="paragraph2"
                                        ml="1.25rem"
                                    >
                                        {CRYO_EMAIL}
                                    </Typography>
                                </a>
                            </CenterAlign>
                            <CenterAlign axis="y">
                                <Phone size="large" color="var(--blue-brand)" />
                                <a href={`tel:${CRYO_PHONE_NUMBER}`}>
                                    <Typography
                                        color="var(--white)"
                                        variant="paragraph2"
                                        ml="1.25rem"
                                    >
                                        {CRYO_PHONE_NUMBER}
                                    </Typography>
                                </a>
                            </CenterAlign>
                        </Box>
                    </GridChild>
                    <GridChild
                        gridColumn={{ _: 'span 12', tablet: 'span 7', laptop: 'span 4' }}
                        gridRow={{ _: '3', laptopS: '2' }}
                    >
                        <Typography
                            variant="paragraph2"
                            color="var(--grey-dark)"
                            mt="3rem"
                            pr="2rem"
                        >
                            {t('copyright')}
                        </Typography>
                    </GridChild>
                    <GridChild
                        gridColumn={{ _: 'span 12', tablet: 'span 5', laptop: 'span 4' }}
                        gridRow={{ _: '4', tablet: '3', laptopS: '2' }}
                    >
                        <Typography
                            variant="h3"
                            color="var(--grey-dark)"
                            mb="0.4rem"
                            mt={{ _: '1.1rem', tablet: '2.5rem' }}
                        >
                            {t('workingHours.title')}
                        </Typography>
                        <Typography variant="paragraph2" color="var(--grey-dark)">
                            {t('workingHours.weekdays')}
                            <br /> 09:00 – 20:00 EET
                        </Typography>
                    </GridChild>
                    <GridChild
                        gridColumn={{
                            _: '2/ span 10',
                            tablet: 'span 2',
                            laptop: 'span 1',
                        }}
                        gridRow={{ _: '6', tablet: '4', laptopS: '2' }}
                    >
                        <Box
                            display="flex"
                            alignItems={{ _: 'center', laptopS: 'flex-end' }}
                            justifyContent={{
                                _: 'space-between',
                                tablet: 'center',
                                laptopS: 'flex-start',
                            }}
                            flexDirection={{ _: 'row', laptopS: 'column' }}
                            flexWrap={{ _: 'wrap', laptopS: 'nowrap' }}
                            mt={{ _: '2rem', tablet: '5rem', laptopS: '2.5rem' }}
                            mb="2rem"
                        >
                            <StyledSvgWrapper>
                                <SocialFacebook size="large3" />
                            </StyledSvgWrapper>
                            <StyledSvgWrapper>
                                <Instagram size="large3" />
                            </StyledSvgWrapper>
                            <StyledSvgWrapper>
                                <YouTube size="large3" />
                            </StyledSvgWrapper>
                            <StyledSvgWrapper>
                                <LinkedIn size="large3" />
                            </StyledSvgWrapper>
                        </Box>
                    </GridChild>
                </StyledGridParent>
            </StyledInfoBlock>
            <CenterAlign width="100%" height="3.75rem" backgroundColor="#091036" py="1.2rem">
                <Typography variant="paragraph2" color="var(--grey-dark)" mr="2.5rem">
                    {t('privacyPolicy')}
                </Typography>
                <Typography variant="paragraph2" color="var(--grey-dark)">
                    {t('termsOfUse')}
                </Typography>
            </CenterAlign>
        </StyledFooter>
    );
};
export default Footer;

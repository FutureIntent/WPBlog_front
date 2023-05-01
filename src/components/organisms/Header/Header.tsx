import { useScrollTrigger } from '@mui/material';
import { Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';
import { CRYO_PHONE_NUMBER } from '@theme/const';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import Phone from '@components/molecules/Icons/Phone';
import LanguageDropdown from '@components/molecules/LanguageDropdown';

import Navigation from '@components/organisms/Navigation';

const StyledHeader = styled.header<{ hasWhiteHeader: boolean; isFixed: boolean }>`
    align-items: center;
    background-color: ${({ hasWhiteHeader, isFixed }) =>
        hasWhiteHeader || isFixed ? 'var(--white)' : 'transparent'};
    display: flex;
    height: var(--header-height);
    justify-content: space-between;
    left: 0;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};
    top: 0;

    ${({ hasWhiteHeader, isFixed, theme }) =>
        (hasWhiteHeader || isFixed) &&
        `
            box-shadow: ${theme.shadows.card};
    `}

    width: 100%;
    z-index: ${({ theme }) => theme.zIndices.header};

    ${mediaQueries.tablet} {
        padding-left: 2.8rem;
        padding-right: 2.8rem;
    }
`;

const PhoneLink = styled.a<{ hasWhiteBg: boolean }>`
    align-items: center;
    border: 1px solid ${({ hasWhiteBg }) => (hasWhiteBg ? 'var(--blue-brand)' : 'var(--white)')};
    border-radius: 4px;
    display: flex;
    padding: 0.75rem 1.375rem;
`;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const StyledLink = styled(Link)`
    align-items: center;
    display: flex;
    height: 100%;
    max-width: 15rem;
`;

const Header = ({
    lang = 'en',
    originalPath,
    hasWhiteHeader,
    isStatic = false,
}: {
    lang?: string;
    originalPath: string;
    hasWhiteHeader: boolean;
    isStatic: boolean;
}) => {
    const gatsbyBreakpoints = useBreakpoint();
    const threshold = typeof window !== 'undefined' ? window.innerHeight : 0;

    const triggerFixed = useScrollTrigger({
        disableHysteresis: true,
        threshold,
    });

    return (
        <StyledHeader hasWhiteHeader={hasWhiteHeader} isFixed={!isStatic && triggerFixed}>
            <GridParent noGutter as="div" style={{ width: '100%' }}>
                <GridChild gridColumn={{ _: 'span 5', tablet: 'span 4', laptopS: 'span 3' }}>
                    <Box display="flex" alignItems="center" height="100%">
                        <StyledLink
                            style={{ height: '45px' }}
                            to="/"
                            name="Company logo"
                            aria-label="Company Logo"
                        >
                            {hasWhiteHeader || triggerFixed ? (
                                <img
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        maxWidth: 155,
                                        maxHeight: 45,
                                    }}
                                    alt=""
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzA4LjEzIDM4MC4yMiI+CiAgPGc+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTE2NC42OSwxODguMjhhOC44NSw4Ljg1LDAsMCwwLTcuNzUtNC40N2gwYTguODQsOC44NCwwLDAsMC03Ljc1LDQuNDhsLTM2LjY1LDYzLjY1YTcsNywwLDAsMS02LDMuNDhIOTcuMzNhNyw3LDAsMCwxLTYtMy40OUw4Ni43NSwyNDRhNyw3LDAsMCwxLDAtN2wzNi45NC02My41QTksOSwwLDAsMCwxMTYsMTYwLjA2bC04LjgxLDBoMGE5Ljk0LDkuOTQsMCwwLDAtOC42LDVsLTQwLjgsNzAuNDdhMTAsMTAsMCwwLDAsMCw5Ljk1TDc1LjUsMjc2LjI5YTEwLDEwLDAsMCwwLDguNiw1bDM1LjU3LjA1aDBhMTAsMTAsMCwwLDAsOC42LTVsNDAuODEtNzAuNDlhMTAsMTAsMCwwLDAsMC0xMFoiIGZpbGw9IiMxNzc5ZmYiLz4KICAgICAgPHBhdGggZD0iTTIxMC43OCwxODEuNzlsODEuNC4xMmgwYTEwLDEwLDAsMCwwLDguNi01bDE3Ljg0LTMwLjgzYTEwLDEwLDAsMCwwLDAtOS45NEwzMDAuOSwxMDUuMzNhMTAsMTAsMCwwLDAtOC42LTVsLTgxLjQxLS4xMmgwYTEwLDEwLDAsMCwwLTguNjEsNWwtNC40LDcuNjNhOSw5LDAsMCwwLDcuNzUsMTMuNDNoMEwyNzksMTI2LjJoMGE3LDcsMCwwLDEsNiwzLjQ5bDQuNTcsNy45NWE3LDcsMCwwLDEsMCw3bC00LjU4LDcuOTFhNyw3LDAsMCwxLTYsMy40N2gwbC03My40Mi0uMjVoMGE4Ljk0LDguOTQsMCwwLDAtNy43NiwxMy40bDQuMzgsNy42NUExMCwxMCwwLDAsMCwyMTAuNzgsMTgxLjc5WiIgZmlsbD0iIzE3NzlmZiIvPgogICAgICA8cGF0aCBkPSJNOTEuNTYsMjkuMzhhNyw3LDAsMCwxLDYtMy40OGgwbDkuMTcsMGE2Ljk0LDYuOTQsMCwwLDEsNiwzLjVsMzYuNDcsNjMuNzVBOC44Niw4Ljg2LDAsMCwwLDE1Nyw5Ny42OGgwYTguODUsOC44NSwwLDAsMCw3LjczLTQuNDVsNC40Mi03LjYyYTEwLDEwLDAsMCwwLDAtMTBMMTI4LjYsNS4wNWExMCwxMCwwLDAsMC04LjYtNUw4NC40MywwaDBhMTAsMTAsMCwwLDAtOC42LDVMNTgsMzUuNzdhMTAsMTAsMCwwLDAsMCw5Ljk1bDQwLjYsNzAuNmExMCwxMCwwLDAsMCw4LjYxLDVIMTE2YTksOSwwLDAsMCw3Ljc0LTEzLjQ0TDg3LDQ0LjI3YTcsNywwLDAsMSwwLTdaIiBmaWxsPSIjMTc3OWZmIi8+CiAgICAgIDxwYXRoIGQ9Ik0yMDEuMywzOS41OGw1Ljg1LTEwLjE0YTcsNywwLDAsMSw2LTMuNDloMGw5LjE0LDBhNyw3LDAsMCwxLDYsMy40OWw0LjU3LDcuOTVhNyw3LDAsMCwxLDAsN0wyMjcsNTQuNTlBOSw5LDAsMCwwLDIzNC44LDY4aDguNjJBMTAsMTAsMCwwLDAsMjUyLDYzbDkuOTEtMTcuMTJhMTAsMTAsMCwwLDAsMC05Ljk0TDI0NC4xOSw1LjExYTkuOTMsOS45MywwLDAsMC04LjYtNUwyMDAsLjA2aDBhMTAsMTAsMCwwLDAtOC42LDVsLTkuODksMTcuMDlhMTAsMTAsMCwwLDAsMCwxMGw0LjMzLDcuNTJhOC44NCw4Ljg0LDAsMCwwLDcuNzUsNC40OWgwQTguODQsOC44NCwwLDAsMCwyMDEuMywzOS41OFoiIGZpbGw9IiM5OWM3ZmYiLz4KICAgICAgPHBhdGggZD0iTTYwLjc4LDE2MC41NEE4Ljg5LDguODksMCwwLDAsNTMsMTU2SDQxLjE1YTcsNywwLDAsMS02LTMuNDhsLTQuNjMtOGE3LDcsMCwwLDEsMC03bDQuNTctOGE3LDcsMCwwLDEsNi4wNi0zLjUxbDExLjc2LDBhOSw5LDAsMCwwLDcuNzctMTMuNTFMNTYuMjQsMTA1YTEwLDEwLDAsMCwwLTguNjYtNWwtMTkuODQuMDZhMTAsMTAsMCwwLDAtOC42Myw1TDEuMzIsMTM2LjE5YTEwLDEwLDAsMCwwLDAsMTBsMTgsMzAuOTFhMTAsMTAsMCwwLDAsOC42Myw1aDBMNDcuODQsMTgyYTEwLDEwLDAsMCwwLDguNjEtNWw0LjMzLTcuNDhBOC45Miw4LjkyLDAsMCwwLDYwLjc4LDE2MC41NFoiIGZpbGw9IiM5OWM3ZmYiLz4KICAgICAgPHBhdGggZD0iTTk0MCwyNjIuMTR2LTEyYTMwLDMwLDAsMCwwLTMwLTMwSDgxMGEzMCwzMCwwLDAsMC0zMCwzMHYxMDBhMzAsMzAsMCwwLDAsMzAsMzBIOTEwYTMwLDMwLDAsMCwwLDMwLTMwVjMzOC4wNmE2LDYsMCwwLDAtNi02SDkxMmE2LDYsMCwwLDAtNiw2djQuMDhhMTAsMTAsMCwwLDEtMTAsMTBIODI0YTEwLDEwLDAsMCwxLTEwLTEwdi04NGExMCwxMCwwLDAsMSwxMC0xMGg3MmExMCwxMCwwLDAsMSwxMCwxMHY0YTYsNiwwLDAsMCw2LDZoMjJBNiw2LDAsMCwwLDk0MCwyNjIuMTRaIiBmaWxsPSIjMTgxNTM1Ii8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0zNTQsMjIwLjE0SDIwNmE2LDYsMCwwLDAtNiw2djE2YTYsNiwwLDAsMCw2LDZoNTYuODdWMzc0LjIyYTYsNiwwLDAsMCw2LDZoMjIuMjZhNiw2LDAsMCwwLDYtNlYyNDguMTRIMzU0YTYsNiwwLDAsMCw2LTZ2LTE2QTYsNiwwLDAsMCwzNTQsMjIwLjE0WiIgZmlsbD0iIzE4MTUzNSIvPgogICAgICAgIDxwYXRoIGQ9Ik03NTQsMjIwLjE0bC0xNDgtLjA4YTYsNiwwLDAsMC02LDZWMzc0LjE0YTYsNiwwLDAsMCw2LDZINzU0YTYsNiwwLDAsMCw2LTZ2LTE2YTYsNiwwLDAsMC02LTZINjM0VjMxNC4wNkg3MzRhNiw2LDAsMCwwLDYtNnYtMTZhNiw2LDAsMCwwLTYtNkg2MzRWMjQ4LjE0SDc1NGE2LDYsMCwwLDAsNi02di0xNkE2LDYsMCwwLDAsNzU0LDIyMC4xNFoiIGZpbGw9IiMxODE1MzUiLz4KICAgICAgICA8cGF0aCBkPSJNNTU0LDIyMC4wNkg1MzJhNiw2LDAsMCwwLTYsNnY2MEg0MzR2LTYwYTYsNiwwLDAsMC02LTZINDA2YTYsNiwwLDAsMC02LDZ2MTQ4YTYsNiwwLDAsMCw2LDZoMjJhNiw2LDAsMCwwLDYtNnYtNjBoOTJ2NjBhNiw2LDAsMCwwLDYsNmgyMmE2LDYsMCwwLDAsNi02di0xNDhBNiw2LDAsMCwwLDU1NCwyMjAuMDZaIiBmaWxsPSIjMTgxNTM1Ii8+CiAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTAyNi41OCwyNTYuODJWMjI2LjU4aC0xMS40NnYtNi40N2gyOS44djYuNDdoLTExLjQ3djMwLjI0WiIgZmlsbD0iIzY5Njc3YiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDQ5LDI1Ni44MlYyMjAuMTFoNi44N1YyMzUuMmgxNi4yNlYyMjAuMTFIMTA3OXYzNi43MWgtNi44N1YyNDEuNjdoLTE2LjI2djE1LjE1WiIgZmlsbD0iIzY5Njc3YiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDg2LDI1Ni44MlYyMjAuMTFoMjMuNzR2Ni40N0gxMDkyLjl2Ny44NWgxMy44NHY2LjQ4SDEwOTIuOXY5LjQzaDE2Ljg3djYuNDhaIiBmaWxsPSIjNjk2NzdiIi8+CiAgICAgICAgPHBhdGggZD0iTTExMjUuOTQsMjU2LjgyVjIyMC4xMWg2Ljg3VjIzNS4yaDE2LjI2VjIyMC4xMWg2Ljg3djM2LjcxaC02Ljg3VjI0MS42N2gtMTYuMjZ2MTUuMTVaIiBmaWxsPSIjNjk2NzdiIi8+CiAgICAgICAgPHBhdGggZD0iTTExNzcuODEsMjU3LjU4YTE2LDE2LDAsMCwxLTcuNzMtMS44LDEyLjkyLDEyLjkyLDAsMCwxLTUuMi01LjA2LDE1LjExLDE1LjExLDAsMCwxLTEuODctNy42N1YyMjAuMTZsNywwVjI0M2E4LjY4LDguNjgsMCwwLDAsLjYxLDMuMjksNy42NSw3LjY1LDAsMCwwLDEuNjgsMi41NSw3LjM5LDcuMzksMCwwLDAsMi41LDEuNjQsOC4zNSw4LjM1LDAsMCwwLDYuMTQsMCw3LjI2LDcuMjYsMCwwLDAsMi40OC0xLjY2LDcuNTYsNy41NiwwLDAsMCwxLjY2LTIuNTUsOC43Niw4Ljc2LDAsMCwwLC41OS0zLjI2VjIyMC4xMWg3djIyLjk0YTE1LjExLDE1LjExLDAsMCwxLTEuODcsNy42NywxMi44NiwxMi44NiwwLDAsMS01LjIsNS4wNkExNiwxNiwwLDAsMSwxMTc3LjgxLDI1Ny41OFoiIGZpbGw9IiM2OTY3N2IiLz4KICAgICAgICA8cGF0aCBkPSJNMTE5OS42OCwyNTYuODJWMjIwLjExaDYuMTdsMTIsMjQuMzcsMTItMjQuMzdoNi4xNnYzNi43MWgtNi40MVYyMzQuODlsLTEwLjU2LDIxLjkzaC0yLjQzbC0xMC41NS0yMS45M3YyMS45M1oiIGZpbGw9IiM2OTY3N2IiLz4KICAgICAgICA8cGF0aCBkPSJNMTI0MC42LDI1Ni44MmwxMS4xMS0zNi43MUgxMjYybDExLjEyLDM2LjcxSDEyNjZsLTkuOS0zMi4zOGgxLjMybC05Ljc1LDMyLjM4Wm02LjY2LTcuNjV2LTYuNDhoMTkuMnY2LjQ4WiIgZmlsbD0iIzY5Njc3YiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMjc3LjYyLDI1Ni44MlYyMjAuMTFoN2wxNS44MSwyNC40N1YyMjAuMTFoN3YzNi43MWgtN2wtMTUuODEtMjQuNDh2MjQuNDhaIiBmaWxsPSIjNjk2NzdiIi8+CiAgICAgICAgPHBhdGggZD0iTTEwMTguMTUsMzE4di0zNi43aDIzLjc0djYuNDdIMTAyNXY3Ljg1aDEzLjg0djYuNDhIMTAyNXY5LjQzaDE2Ljg3VjMxOFoiIGZpbGw9IiM2OTY3N2IiLz4KICAgICAgICA8cGF0aCBkPSJNMTA1NS43OCwzMThsLTExLjEyLTM2LjdoNy4wOGw5LjA5LDMwLjE4LDkuMjQtMzAuMThoNy4wN0wxMDY2LDMxOFoiIGZpbGw9IiM2OTY3N2IiLz4KICAgICAgICA8cGF0aCBkPSJNMTA5NS41MywzMTguNzZhMTcuNzksMTcuNzksMCwwLDEtOS40MS0yLjQsMTUuODYsMTUuODYsMCwwLDEtNi4wOC02LjcsMjQuNTMsMjQuNTMsMCwwLDEsMC0yMCwxNS45MiwxNS45MiwwLDAsMSw2LjA4LTYuNywxOS42NSwxOS42NSwwLDAsMSwxOC44MiwwLDE1LjkyLDE1LjkyLDAsMCwxLDYuMDgsNi43LDI0LjUzLDI0LjUzLDAsMCwxLDAsMjAsMTUuODYsMTUuODYsMCwwLDEtNi4wOCw2LjdBMTcuNzksMTcuNzksMCwwLDEsMTA5NS41MywzMTguNzZabTAtNi41M2E5LjcxLDkuNzEsMCwwLDAsNS43Ni0xLjUsOS40Niw5LjQ2LDAsMCwwLDMuNDUtNC40MSwxNy45MywxNy45MywwLDAsMCwxLjE1LTYuNjgsMTcuNTUsMTcuNTUsMCwwLDAtMS4xNS02LjYzLDkuNDgsOS40OCwwLDAsMC0zLjQ1LTQuMzYsMTAuMzUsMTAuMzUsMCwwLDAtNS43Ni0xLjYsOS43OCw5Ljc4LDAsMCwwLTUuNzYsMS41LDkuNDYsOS40NiwwLDAsMC0zLjQ1LDQuNDEsMTgsMTgsMCwwLDAtMS4xNCw2LjY4LDE3LjU1LDE3LjU1LDAsMCwwLDEuMTQsNi42Myw5LjQ4LDkuNDgsMCwwLDAsMy40NSw0LjM2QTEwLjM1LDEwLjM1LDAsMCwwLDEwOTUuNTMsMzEyLjIzWiIgZmlsbD0iIzY5Njc3YiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMTE4LjcxLDMxOHYtMzYuN2g2Ljg3djMwLjIzaDE1LjY2VjMxOFoiIGZpbGw9IiM2OTY3N2IiLz4KICAgICAgICA8cGF0aCBkPSJNMTE2MC4zNCwzMTguNzZhMTYsMTYsMCwwLDEtNy43My0xLjgsMTMsMTMsMCwwLDEtNS4yMS01LjA2LDE1LjIxLDE1LjIxLDAsMCwxLTEuODYtNy42N1YyODEuMzRsNywwdjIyLjg5YTguNzIsOC43MiwwLDAsMCwuNiwzLjI5LDgsOCwwLDAsMCwxLjY4LDIuNTUsNy40OSw3LjQ5LDAsMCwwLDIuNSwxLjY0LDguMTUsOC4xNSwwLDAsMCwzLC41Nyw4LjA2LDguMDYsMCwwLDAsMy4wOS0uNTgsNy40Myw3LjQzLDAsMCwwLDQuMTQtNC4yMSw4LjU2LDguNTYsMCwwLDAsLjYtMy4yNlYyODEuMjloN3YyMi45NGExNS4yMSwxNS4yMSwwLDAsMS0xLjg3LDcuNjcsMTMsMTMsMCwwLDEtNS4yMSw1LjA2QTE2LDE2LDAsMCwxLDExNjAuMzQsMzE4Ljc2WiIgZmlsbD0iIzY5Njc3YiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMTkwLjY0LDMxOFYyODcuNzZoLTExLjQ2di02LjQ3SDEyMDl2Ni40N2gtMTEuNDdWMzE4WiIgZmlsbD0iIzY5Njc3YiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMjEzLjUyLDMxOHYtMzYuN2g2Ljg3VjMxOFoiIGZpbGw9IiM2OTY3N2IiLz4KICAgICAgICA8cGF0aCBkPSJNMTI0My41OCwzMTguNzZhMTcuNzksMTcuNzksMCwwLDEtOS40MS0yLjQsMTUuODksMTUuODksMCwwLDEtNi4wOS02LjcsMjQuNjMsMjQuNjMsMCwwLDEsMC0yMCwxNS45NCwxNS45NCwwLDAsMSw2LjA5LTYuNywxOS42NSwxOS42NSwwLDAsMSwxOC44MiwwLDE1LjkyLDE1LjkyLDAsMCwxLDYuMDgsNi43LDI0LjUzLDI0LjUzLDAsMCwxLDAsMjAsMTUuODYsMTUuODYsMCwwLDEtNi4wOCw2LjdBMTcuNzksMTcuNzksMCwwLDEsMTI0My41OCwzMTguNzZabTAtNi41M2E5Ljc1LDkuNzUsMCwwLDAsNS43Ni0xLjUsOS4zOCw5LjM4LDAsMCwwLDMuNDQtNC40MSwxNy43MywxNy43MywwLDAsMCwxLjE1LTYuNjgsMTcuMzUsMTcuMzUsMCwwLDAtMS4xNS02LjYzLDkuNCw5LjQsMCwwLDAtMy40NC00LjM2LDEwLjM5LDEwLjM5LDAsMCwwLTUuNzYtMS42LDkuNzgsOS43OCwwLDAsMC01Ljc2LDEuNSw5LjQ2LDkuNDYsMCwwLDAtMy40NSw0LjQxLDE4LDE4LDAsMCwwLTEuMTUsNi42OCwxNy41NSwxNy41NSwwLDAsMCwxLjE1LDYuNjMsOS40OCw5LjQ4LDAsMCwwLDMuNDUsNC4zNkExMC4zNSwxMC4zNSwwLDAsMCwxMjQzLjU4LDMxMi4yM1oiIGZpbGw9IiM2OTY3N2IiLz4KICAgICAgICA8cGF0aCBkPSJNMTI2Ni4yNiwzMTh2LTM2LjdoN0wxMjg5LDMwNS43NlYyODEuMjloN1YzMThoLTdsLTE1LjgxLTI0LjQ3VjMxOFoiIGZpbGw9IiM2OTY3N2IiLz4KICAgICAgICA8cGF0aCBkPSJNMTAzMy43NSwzNzkuOTRhMTcuNzYsMTcuNzYsMCwwLDEtOS40LTIuNCwxNS44OCwxNS44OCwwLDAsMS02LjA5LTYuNywyNC42MywyNC42MywwLDAsMSwwLTIwLDE1LjgyLDE1LjgyLDAsMCwxLDYuMDktNi43LDE3Ljc2LDE3Ljc2LDAsMCwxLDkuNC0yLjQsMTcuMjMsMTcuMjMsMCwwLDEsMTAuNTIsMy4xNCwxNi42MSwxNi42MSwwLDAsMSw2LDguNDhsLTYuOTIsMS45NGExMCwxMCwwLDAsMC0zLjQxLTUuMTksOS44Niw5Ljg2LDAsMCwwLTYuMTktMS44NCwxMC4xNywxMC4xNywwLDAsMC01Ljc3LDEuNTUsOS40Myw5LjQzLDAsMCwwLTMuNDcsNC4zOSwxOS42NCwxOS42NCwwLDAsMCwwLDEzLjMsOS40Myw5LjQzLDAsMCwwLDMuNDcsNC4zOSwxMC4xNywxMC4xNywwLDAsMCw1Ljc3LDEuNTUsOS44MSw5LjgxLDAsMCwwLDYuMTktMS44NiwxMCwxMCwwLDAsMCwzLjQxLTUuMTdsNi45MiwxLjkzYTE2LjYsMTYuNiwwLDAsMS02LDguNDlBMTcuMjMsMTcuMjMsMCwwLDEsMTAzMy43NSwzNzkuOTRaIiBmaWxsPSIjNjk2NzdiIi8+CiAgICAgICAgPHBhdGggZD0iTTEwNzEuNDQsMzc5Ljk0YTE3Ljc3LDE3Ljc3LDAsMCwxLTkuNDEtMi40LDE1Ljg4LDE1Ljg4LDAsMCwxLTYuMDktNi43LDI0LjYzLDI0LjYzLDAsMCwxLDAtMjAsMTUuODIsMTUuODIsMCwwLDEsNi4wOS02LjcsMTkuNjMsMTkuNjMsMCwwLDEsMTguODEsMCwxNS44MiwxNS44MiwwLDAsMSw2LjA5LDYuNywyNC42MywyNC42MywwLDAsMSwwLDIwLDE1Ljg4LDE1Ljg4LDAsMCwxLTYuMDksNi43QTE3Ljc2LDE3Ljc2LDAsMCwxLDEwNzEuNDQsMzc5Ljk0Wm0wLTYuNTNhOS43Nyw5Ljc3LDAsMCwwLDUuNzUtMS41LDkuNCw5LjQsMCwwLDAsMy40NS00LjQxLDE3Ljc3LDE3Ljc3LDAsMCwwLDEuMTUtNi42OCwxNy4zNSwxNy4zNSwwLDAsMC0xLjE1LTYuNjMsOS40MSw5LjQxLDAsMCwwLTMuNDUtNC4zNiwxMC4zNCwxMC4zNCwwLDAsMC01Ljc1LTEuNiw5LjcxLDkuNzEsMCwwLDAtNS43NiwxLjUsOS40LDkuNCwwLDAsMC0zLjQ1LDQuNDEsMTcuNzMsMTcuNzMsMCwwLDAtMS4xNSw2LjY4LDE3LjM1LDE3LjM1LDAsMCwwLDEuMTUsNi42Myw5LjQxLDkuNDEsMCwwLDAsMy40NSw0LjM2QTEwLjM1LDEwLjM1LDAsMCwwLDEwNzEuNDQsMzczLjQxWiIgZmlsbD0iIzY5Njc3YiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDk0LjEyLDM3OS4xN3YtMzYuN2g2LjE2bDEyLDI0LjM3LDEyLTI0LjM3aDYuMTZ2MzYuN2gtNi40MVYzNTcuMjVsLTEwLjU2LDIxLjkyaC0yLjQybC0xMC41Ni0yMS45MnYyMS45MloiIGZpbGw9IiM2OTY3N2IiLz4KICAgICAgICA8cGF0aCBkPSJNMTEzNy41NSwzNzkuMTd2LTM2LjdoMTUuMzZsMS40MywwYTExLjkxLDExLjkxLDAsMCwxLDEuNi4xNywxMS4xNSwxMS4xNSwwLDAsMSw1LjM0LDIuMTcsOS44LDkuOCwwLDAsMSwzLjA3LDQuMTYsMTYuMjMsMTYuMjMsMCwwLDEsMCwxMS4xOSw5Ljg3LDkuODcsMCwwLDEtMy4wOCw0LjE3LDExLjEyLDExLjEyLDAsMCwxLTUuMzIsMi4xN3EtLjcuMTEtMS42Mi4xNWMtLjYsMC0xLjA3LjA1LTEuNDEuMDVoLTguNDl2MTIuNDRabTYuODctMTguOTFoOC4xOWMuMzUsMCwuNzQsMCwxLjE2LS4wNWE1LjcsNS43LDAsMCwwLDEuMTYtLjIxLDQuMTMsNC4xMywwLDAsMCwyLjE1LTEuMjgsNS4zNiw1LjM2LDAsMCwwLDEuMDUtMiw4LDgsMCwwLDAsMC00LjIsNS4zNiw1LjM2LDAsMCwwLTEuMDUtMiw0LjEzLDQuMTMsMCwwLDAtMi4xNS0xLjI4LDUuNyw1LjcsMCwwLDAtMS4xNi0uMjFjLS40MiwwLS44MS0uMDUtMS4xNi0uMDVoLTguMTlaIiBmaWxsPSIjNjk2NzdiIi8+CiAgICAgICAgPHBhdGggZD0iTTExNjUuMzQsMzc5LjE3bDExLjExLTM2LjdoMTAuMjVsMTEuMTEsMzYuN2gtNy4wN2wtOS45LTMyLjM3aDEuMzJsLTkuNzUsMzIuMzdabTYuNjYtNy42NHYtNi40OGgxOS4ydjYuNDhaIiBmaWxsPSIjNjk2NzdiIi8+CiAgICAgICAgPHBhdGggZD0iTTEyMDIuMzYsMzc5LjE3di0zNi43aDdsMTUuODEsMjQuNDdWMzQyLjQ3aDd2MzYuN2gtN2wtMTUuODEtMjQuNDd2MjQuNDdaIiBmaWxsPSIjNjk2NzdiIi8+CiAgICAgICAgPHBhdGggZD0iTTEyNDguMDcsMzc5LjE3VjM2NC4yM2wtMTIuNDItMjEuNzZoOGw3Ljg4LDEzLjgxLDcuODgtMTMuODFoOEwxMjU1LDM2NC4yM3YxNC45NFoiIGZpbGw9IiM2OTY3N2IiLz4KICAgICAgPC9nPgogICAgICA8cmVjdCB4PSI5OTAiIHk9IjIyMC4xMSIgd2lkdGg9IjQuNTciIGhlaWdodD0iMTU5LjgzIiBmaWxsPSIjNjk2NzdiIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"
                                />
                            ) : (
                                <img
                                    style={{ height: '100%', width: '100%' }}
                                    alt=""
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzA4LjEzIDM4MC4yMiI+CiAgPGc+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTk0MCwyNjIuMTR2LTEyYTMwLDMwLDAsMCwwLTMwLTMwSDgxMGEzMCwzMCwwLDAsMC0zMCwzMHYxMDBhMzAsMzAsMCwwLDAsMzAsMzBIOTEwYTMwLDMwLDAsMCwwLDMwLTMwVjMzOC4wNmE2LDYsMCwwLDAtNi02SDkxMmE2LDYsMCwwLDAtNiw2djQuMDhhMTAsMTAsMCwwLDEtMTAsMTBIODI0YTEwLDEwLDAsMCwxLTEwLTEwdi04NGExMCwxMCwwLDAsMSwxMC0xMGg3MmExMCwxMCwwLDAsMSwxMCwxMHY0YTYsNiwwLDAsMCw2LDZoMjJBNiw2LDAsMCwwLDk0MCwyNjIuMTRaIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0zNTQsMjIwLjE0SDIwNmE2LDYsMCwwLDAtNiw2djE2YTYsNiwwLDAsMCw2LDZoNTYuODdWMzc0LjIyYTYsNiwwLDAsMCw2LDZoMjIuMjZhNiw2LDAsMCwwLDYtNlYyNDguMTRIMzU0YTYsNiwwLDAsMCw2LTZ2LTE2QTYsNiwwLDAsMCwzNTQsMjIwLjE0WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik03NTQsMjIwLjE0bC0xNDgtLjA4YTYsNiwwLDAsMC02LDZWMzc0LjE0YTYsNiwwLDAsMCw2LDZINzU0YTYsNiwwLDAsMCw2LTZ2LTE2YTYsNiwwLDAsMC02LTZINjM0VjMxNC4wNkg3MzRhNiw2LDAsMCwwLDYtNnYtMTZhNiw2LDAsMCwwLTYtNkg2MzRWMjQ4LjE0SDc1NGE2LDYsMCwwLDAsNi02di0xNkE2LDYsMCwwLDAsNzU0LDIyMC4xNFoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNNTU0LDIyMC4wNkg1MzJhNiw2LDAsMCwwLTYsNnY2MEg0MzR2LTYwYTYsNiwwLDAsMC02LTZINDA2YTYsNiwwLDAsMC02LDZ2MTQ4YTYsNiwwLDAsMCw2LDZoMjJhNiw2LDAsMCwwLDYtNnYtNjBoOTJ2NjBhNiw2LDAsMCwwLDYsNmgyMmE2LDYsMCwwLDAsNi02di0xNDhBNiw2LDAsMCwwLDU1NCwyMjAuMDZaIiBmaWxsPSIjZmZmIi8+CiAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIG9wYWNpdHk9IjAuNSI+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMDI2LjU4LDI1Ni44MlYyMjYuNThoLTExLjQ2di02LjQ3aDI5Ljh2Ni40N2gtMTEuNDd2MzAuMjRaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTEwNDksMjU2LjgyVjIyMC4xMWg2Ljg3VjIzNS4yaDE2LjI2VjIyMC4xMUgxMDc5djM2LjcxaC02Ljg3VjI0MS42N2gtMTYuMjZ2MTUuMTVaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTEwODYsMjU2LjgyVjIyMC4xMWgyMy43NHY2LjQ3SDEwOTIuOXY3Ljg1aDEzLjg0djYuNDhIMTA5Mi45djkuNDNoMTYuODd2Ni40OFoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTEyNS45NCwyNTYuODJWMjIwLjExaDYuODdWMjM1LjJoMTYuMjZWMjIwLjExaDYuODd2MzYuNzFoLTYuODdWMjQxLjY3aC0xNi4yNnYxNS4xNVoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTE3Ny44MSwyNTcuNThhMTYsMTYsMCwwLDEtNy43My0xLjgsMTIuOTIsMTIuOTIsMCwwLDEtNS4yLTUuMDYsMTUuMTEsMTUuMTEsMCwwLDEtMS44Ny03LjY3VjIyMC4xNmw3LDBWMjQzYTguNjgsOC42OCwwLDAsMCwuNjEsMy4yOSw3LjY1LDcuNjUsMCwwLDAsMS42OCwyLjU1LDcuMzksNy4zOSwwLDAsMCwyLjUsMS42NCw4LjM1LDguMzUsMCwwLDAsNi4xNCwwLDcuMjYsNy4yNiwwLDAsMCwyLjQ4LTEuNjYsNy41Niw3LjU2LDAsMCwwLDEuNjYtMi41NSw4Ljc2LDguNzYsMCwwLDAsLjU5LTMuMjZWMjIwLjExaDd2MjIuOTRhMTUuMTEsMTUuMTEsMCwwLDEtMS44Nyw3LjY3LDEyLjg2LDEyLjg2LDAsMCwxLTUuMiw1LjA2QTE2LDE2LDAsMCwxLDExNzcuODEsMjU3LjU4WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMTk5LjY4LDI1Ni44MlYyMjAuMTFoNi4xN2wxMiwyNC4zNywxMi0yNC4zN2g2LjE2djM2LjcxaC02LjQxVjIzNC44OWwtMTAuNTYsMjEuOTNoLTIuNDNsLTEwLjU1LTIxLjkzdjIxLjkzWiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMjQwLjYsMjU2LjgybDExLjExLTM2LjcxSDEyNjJsMTEuMTIsMzYuNzFIMTI2NmwtOS45LTMyLjM4aDEuMzJsLTkuNzUsMzIuMzhabTYuNjYtNy42NXYtNi40OGgxOS4ydjYuNDhaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTEyNzcuNjIsMjU2LjgyVjIyMC4xMWg3bDE1LjgxLDI0LjQ3VjIyMC4xMWg3djM2LjcxaC03bC0xNS44MS0yNC40OHYyNC40OFoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTAxOC4xNSwzMTh2LTM2LjdoMjMuNzR2Ni40N0gxMDI1djcuODVoMTMuODR2Ni40OEgxMDI1djkuNDNoMTYuODdWMzE4WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDU1Ljc4LDMxOGwtMTEuMTItMzYuN2g3LjA4bDkuMDksMzAuMTgsOS4yNC0zMC4xOGg3LjA3TDEwNjYsMzE4WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDk1LjUzLDMxOC43NmExNy43OSwxNy43OSwwLDAsMS05LjQxLTIuNCwxNS44NiwxNS44NiwwLDAsMS02LjA4LTYuNywyNC41MywyNC41MywwLDAsMSwwLTIwLDE1LjkyLDE1LjkyLDAsMCwxLDYuMDgtNi43LDE5LjY1LDE5LjY1LDAsMCwxLDE4LjgyLDAsMTUuOTIsMTUuOTIsMCwwLDEsNi4wOCw2LjcsMjQuNTMsMjQuNTMsMCwwLDEsMCwyMCwxNS44NiwxNS44NiwwLDAsMS02LjA4LDYuN0ExNy43OSwxNy43OSwwLDAsMSwxMDk1LjUzLDMxOC43NlptMC02LjUzYTkuNzEsOS43MSwwLDAsMCw1Ljc2LTEuNSw5LjQ2LDkuNDYsMCwwLDAsMy40NS00LjQxLDE3LjkzLDE3LjkzLDAsMCwwLDEuMTUtNi42OCwxNy41NSwxNy41NSwwLDAsMC0xLjE1LTYuNjMsOS40OCw5LjQ4LDAsMCwwLTMuNDUtNC4zNiwxMC4zNSwxMC4zNSwwLDAsMC01Ljc2LTEuNiw5Ljc4LDkuNzgsMCwwLDAtNS43NiwxLjUsOS40Niw5LjQ2LDAsMCwwLTMuNDUsNC40MSwxOCwxOCwwLDAsMC0xLjE0LDYuNjgsMTcuNTUsMTcuNTUsMCwwLDAsMS4xNCw2LjYzLDkuNDgsOS40OCwwLDAsMCwzLjQ1LDQuMzZBMTAuMzUsMTAuMzUsMCwwLDAsMTA5NS41MywzMTIuMjNaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTExMTguNzEsMzE4di0zNi43aDYuODd2MzAuMjNoMTUuNjZWMzE4WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMTYwLjM0LDMxOC43NmExNiwxNiwwLDAsMS03LjczLTEuOCwxMywxMywwLDAsMS01LjIxLTUuMDYsMTUuMjEsMTUuMjEsMCwwLDEtMS44Ni03LjY3VjI4MS4zNGw3LDB2MjIuODlhOC43Miw4LjcyLDAsMCwwLC42LDMuMjksOCw4LDAsMCwwLDEuNjgsMi41NSw3LjQ5LDcuNDksMCwwLDAsMi41LDEuNjQsOC4xNSw4LjE1LDAsMCwwLDMsLjU3LDguMDYsOC4wNiwwLDAsMCwzLjA5LS41OCw3LjQzLDcuNDMsMCwwLDAsNC4xNC00LjIxLDguNTYsOC41NiwwLDAsMCwuNi0zLjI2VjI4MS4yOWg3djIyLjk0YTE1LjIxLDE1LjIxLDAsMCwxLTEuODcsNy42NywxMywxMywwLDAsMS01LjIxLDUuMDZBMTYsMTYsMCwwLDEsMTE2MC4zNCwzMTguNzZaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTExOTAuNjQsMzE4VjI4Ny43NmgtMTEuNDZ2LTYuNDdIMTIwOXY2LjQ3aC0xMS40N1YzMThaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTEyMTMuNTIsMzE4di0zNi43aDYuODdWMzE4WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMjQzLjU4LDMxOC43NmExNy43OSwxNy43OSwwLDAsMS05LjQxLTIuNCwxNS44OSwxNS44OSwwLDAsMS02LjA5LTYuNywyNC42MywyNC42MywwLDAsMSwwLTIwLDE1Ljk0LDE1Ljk0LDAsMCwxLDYuMDktNi43LDE5LjY1LDE5LjY1LDAsMCwxLDE4LjgyLDAsMTUuOTIsMTUuOTIsMCwwLDEsNi4wOCw2LjcsMjQuNTMsMjQuNTMsMCwwLDEsMCwyMCwxNS44NiwxNS44NiwwLDAsMS02LjA4LDYuN0ExNy43OSwxNy43OSwwLDAsMSwxMjQzLjU4LDMxOC43NlptMC02LjUzYTkuNzUsOS43NSwwLDAsMCw1Ljc2LTEuNSw5LjM4LDkuMzgsMCwwLDAsMy40NC00LjQxLDE3LjczLDE3LjczLDAsMCwwLDEuMTUtNi42OCwxNy4zNSwxNy4zNSwwLDAsMC0xLjE1LTYuNjMsOS40LDkuNCwwLDAsMC0zLjQ0LTQuMzYsMTAuMzksMTAuMzksMCwwLDAtNS43Ni0xLjYsOS43OCw5Ljc4LDAsMCwwLTUuNzYsMS41LDkuNDYsOS40NiwwLDAsMC0zLjQ1LDQuNDEsMTgsMTgsMCwwLDAtMS4xNSw2LjY4LDE3LjU1LDE3LjU1LDAsMCwwLDEuMTUsNi42Myw5LjQ4LDkuNDgsMCwwLDAsMy40NSw0LjM2QTEwLjM1LDEwLjM1LDAsMCwwLDEyNDMuNTgsMzEyLjIzWiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMjY2LjI2LDMxOHYtMzYuN2g3TDEyODksMzA1Ljc2VjI4MS4yOWg3VjMxOGgtN2wtMTUuODEtMjQuNDdWMzE4WiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDMzLjc1LDM3OS45NGExNy43NiwxNy43NiwwLDAsMS05LjQtMi40LDE1Ljg4LDE1Ljg4LDAsMCwxLTYuMDktNi43LDI0LjYzLDI0LjYzLDAsMCwxLDAtMjAsMTUuODIsMTUuODIsMCwwLDEsNi4wOS02LjcsMTcuNzYsMTcuNzYsMCwwLDEsOS40LTIuNCwxNy4yMywxNy4yMywwLDAsMSwxMC41MiwzLjE0LDE2LjYxLDE2LjYxLDAsMCwxLDYsOC40OGwtNi45MiwxLjk0YTEwLDEwLDAsMCwwLTMuNDEtNS4xOSw5Ljg2LDkuODYsMCwwLDAtNi4xOS0xLjg0LDEwLjE3LDEwLjE3LDAsMCwwLTUuNzcsMS41NSw5LjQzLDkuNDMsMCwwLDAtMy40Nyw0LjM5LDE5LjY0LDE5LjY0LDAsMCwwLDAsMTMuMyw5LjQzLDkuNDMsMCwwLDAsMy40Nyw0LjM5LDEwLjE3LDEwLjE3LDAsMCwwLDUuNzcsMS41NSw5LjgxLDkuODEsMCwwLDAsNi4xOS0xLjg2LDEwLDEwLDAsMCwwLDMuNDEtNS4xN2w2LjkyLDEuOTNhMTYuNiwxNi42LDAsMCwxLTYsOC40OUExNy4yMywxNy4yMywwLDAsMSwxMDMzLjc1LDM3OS45NFoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTA3MS40NCwzNzkuOTRhMTcuNzcsMTcuNzcsMCwwLDEtOS40MS0yLjQsMTUuODgsMTUuODgsMCwwLDEtNi4wOS02LjcsMjQuNjMsMjQuNjMsMCwwLDEsMC0yMCwxNS44MiwxNS44MiwwLDAsMSw2LjA5LTYuNywxOS42MywxOS42MywwLDAsMSwxOC44MSwwLDE1LjgyLDE1LjgyLDAsMCwxLDYuMDksNi43LDI0LjYzLDI0LjYzLDAsMCwxLDAsMjAsMTUuODgsMTUuODgsMCwwLDEtNi4wOSw2LjdBMTcuNzYsMTcuNzYsMCwwLDEsMTA3MS40NCwzNzkuOTRabTAtNi41M2E5Ljc3LDkuNzcsMCwwLDAsNS43NS0xLjUsOS40LDkuNCwwLDAsMCwzLjQ1LTQuNDEsMTcuNzcsMTcuNzcsMCwwLDAsMS4xNS02LjY4LDE3LjM1LDE3LjM1LDAsMCwwLTEuMTUtNi42Myw5LjQxLDkuNDEsMCwwLDAtMy40NS00LjM2LDEwLjM0LDEwLjM0LDAsMCwwLTUuNzUtMS42LDkuNzEsOS43MSwwLDAsMC01Ljc2LDEuNSw5LjQsOS40LDAsMCwwLTMuNDUsNC40MSwxNy43MywxNy43MywwLDAsMC0xLjE1LDYuNjgsMTcuMzUsMTcuMzUsMCwwLDAsMS4xNSw2LjYzLDkuNDEsOS40MSwwLDAsMCwzLjQ1LDQuMzZBMTAuMzUsMTAuMzUsMCwwLDAsMTA3MS40NCwzNzMuNDFaIiBmaWxsPSIjZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTEwOTQuMTIsMzc5LjE3di0zNi43aDYuMTZsMTIsMjQuMzcsMTItMjQuMzdoNi4xNnYzNi43aC02LjQxVjM1Ny4yNWwtMTAuNTYsMjEuOTJoLTIuNDJsLTEwLjU2LTIxLjkydjIxLjkyWiIgZmlsbD0iI2ZmZiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMTM3LjU1LDM3OS4xN3YtMzYuN2gxNS4zNmwxLjQzLDBhMTEuOTEsMTEuOTEsMCwwLDEsMS42LjE3LDExLjE1LDExLjE1LDAsMCwxLDUuMzQsMi4xNyw5LjgsOS44LDAsMCwxLDMuMDcsNC4xNiwxNi4yMywxNi4yMywwLDAsMSwwLDExLjE5LDkuODcsOS44NywwLDAsMS0zLjA4LDQuMTcsMTEuMTIsMTEuMTIsMCwwLDEtNS4zMiwyLjE3cS0uNy4xMS0xLjYyLjE1Yy0uNiwwLTEuMDcuMDUtMS40MS4wNWgtOC40OXYxMi40NFptNi44Ny0xOC45MWg4LjE5Yy4zNSwwLC43NCwwLDEuMTYtLjA1YTUuNyw1LjcsMCwwLDAsMS4xNi0uMjEsNC4xMyw0LjEzLDAsMCwwLDIuMTUtMS4yOCw1LjM2LDUuMzYsMCwwLDAsMS4wNS0yLDgsOCwwLDAsMCwwLTQuMiw1LjM2LDUuMzYsMCwwLDAtMS4wNS0yLDQuMTMsNC4xMywwLDAsMC0yLjE1LTEuMjgsNS43LDUuNywwLDAsMC0xLjE2LS4yMWMtLjQyLDAtLjgxLS4wNS0xLjE2LS4wNWgtOC4xOVoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTE2NS4zNCwzNzkuMTdsMTEuMTEtMzYuN2gxMC4yNWwxMS4xMSwzNi43aC03LjA3bC05LjktMzIuMzdoMS4zMmwtOS43NSwzMi4zN1ptNi42Ni03LjY0di02LjQ4aDE5LjJ2Ni40OFoiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTIwMi4zNiwzNzkuMTd2LTM2LjdoN2wxNS44MSwyNC40N1YzNDIuNDdoN3YzNi43aC03bC0xNS44MS0yNC40N3YyNC40N1oiIGZpbGw9IiNmZmYiLz4KICAgICAgICA8cGF0aCBkPSJNMTI0OC4wNywzNzkuMTdWMzY0LjIzbC0xMi40Mi0yMS43Nmg4bDcuODgsMTMuODEsNy44OC0xMy44MWg4TDEyNTUsMzY0LjIzdjE0Ljk0WiIgZmlsbD0iI2ZmZiIvPgogICAgICA8L2c+CiAgICAgIDxyZWN0IHg9Ijk5MCIgeT0iMjIwLjExIiB3aWR0aD0iNC41NyIgaGVpZ2h0PSIxNTkuODMiIGZpbGw9IiNmZmYiLz4KICAgIDwvZz4KICA8L2c+CiAgPGc+CiAgICA8ZyBvcGFjaXR5PSIwLjgiPgogICAgICA8cGF0aCBkPSJNMTY0LjY5LDE4OC4yOGE4Ljg1LDguODUsMCwwLDAtNy43NS00LjQ3aDBhOC44NCw4Ljg0LDAsMCwwLTcuNzUsNC40OGwtMzYuNjUsNjMuNjVhNyw3LDAsMCwxLTYsMy40OEg5Ny4zM2E3LDcsMCwwLDEtNi0zLjQ5TDg2Ljc1LDI0NGE3LDcsMCwwLDEsMC03bDM2Ljk0LTYzLjVBOSw5LDAsMCwwLDExNiwxNjAuMDZsLTguODEsMGgwYTkuOTQsOS45NCwwLDAsMC04LjYsNWwtNDAuOCw3MC40N2ExMCwxMCwwLDAsMCwwLDkuOTVMNzUuNSwyNzYuMjlhMTAsMTAsMCwwLDAsOC42LDVsMzUuNTcuMDVoMGExMCwxMCwwLDAsMCw4LjYtNWw0MC44MS03MC40OWExMCwxMCwwLDAsMCwwLTEwWiIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBkPSJNMjEwLjc4LDE4MS43OWw4MS40LjEyaDBhMTAsMTAsMCwwLDAsOC42LTVsMTcuODQtMzAuODNhMTAsMTAsMCwwLDAsMC05Ljk0TDMwMC45LDEwNS4zM2ExMCwxMCwwLDAsMC04LjYtNWwtODEuNDEtLjEyaDBhMTAsMTAsMCwwLDAtOC42MSw1bC00LjQsNy42M2E5LDksMCwwLDAsNy43NSwxMy40M2gwTDI3OSwxMjYuMmgwYTcsNywwLDAsMSw2LDMuNDlsNC41Nyw3Ljk1YTcsNywwLDAsMSwwLDdsLTQuNTgsNy45MWE3LDcsMCwwLDEtNiwzLjQ3aDBsLTczLjQyLS4yNWgwYTguOTQsOC45NCwwLDAsMC03Ljc2LDEzLjRsNC4zOCw3LjY1QTEwLDEwLDAsMCwwLDIxMC43OCwxODEuNzlaIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGQ9Ik05MS41NiwyOS4zOGE3LDcsMCwwLDEsNi0zLjQ4aDBsOS4xNywwYTYuOTQsNi45NCwwLDAsMSw2LDMuNWwzNi40Nyw2My43NUE4Ljg2LDguODYsMCwwLDAsMTU3LDk3LjY4aDBhOC44NSw4Ljg1LDAsMCwwLDcuNzMtNC40NWw0LjQyLTcuNjJhMTAsMTAsMCwwLDAsMC0xMEwxMjguNiw1LjA1YTEwLDEwLDAsMCwwLTguNi01TDg0LjQzLDBoMGExMCwxMCwwLDAsMC04LjYsNUw1OCwzNS43N2ExMCwxMCwwLDAsMCwwLDkuOTVsNDAuNiw3MC42YTEwLDEwLDAsMCwwLDguNjEsNUgxMTZhOSw5LDAsMCwwLDcuNzQtMTMuNDRMODcsNDQuMjdhNyw3LDAsMCwxLDAtN1oiIGZpbGw9IiNmZmYiLz4KICAgIDwvZz4KICAgIDxnIG9wYWNpdHk9IjAuNSI+CiAgICAgIDxwYXRoIGQ9Ik0yMDEuMywzOS41OGw1Ljg1LTEwLjE0YTcsNywwLDAsMSw2LTMuNDloMGw5LjE0LDBhNyw3LDAsMCwxLDYsMy40OWw0LjU3LDcuOTVhNyw3LDAsMCwxLDAsN0wyMjcsNTQuNTlBOSw5LDAsMCwwLDIzNC44LDY4aDguNjJBMTAsMTAsMCwwLDAsMjUyLDYzbDkuOTEtMTcuMTJhMTAsMTAsMCwwLDAsMC05Ljk0TDI0NC4xOSw1LjExYTkuOTMsOS45MywwLDAsMC04LjYtNUwyMDAsLjA2aDBhMTAsMTAsMCwwLDAtOC42LDVsLTkuODksMTcuMDlhMTAsMTAsMCwwLDAsMCwxMGw0LjMzLDcuNTJhOC44NCw4Ljg0LDAsMCwwLDcuNzUsNC40OWgwQTguODQsOC44NCwwLDAsMCwyMDEuMywzOS41OFoiIGZpbGw9IiNmZmYiLz4KICAgICAgPHBhdGggZD0iTTYwLjc4LDE2MC41NEE4Ljg5LDguODksMCwwLDAsNTMsMTU2SDQxLjE1YTcsNywwLDAsMS02LTMuNDhsLTQuNjMtOGE3LDcsMCwwLDEsMC03bDQuNTctOGE3LDcsMCwwLDEsNi4wNi0zLjUxbDExLjc2LDBhOSw5LDAsMCwwLDcuNzctMTMuNTFMNTYuMjQsMTA1YTEwLDEwLDAsMCwwLTguNjYtNWwtMTkuODQuMDZhMTAsMTAsMCwwLDAtOC42Myw1TDEuMzIsMTM2LjE5YTEwLDEwLDAsMCwwLDAsMTBsMTgsMzAuOTFhMTAsMTAsMCwwLDAsOC42Myw1aDBMNDcuODQsMTgyYTEwLDEwLDAsMCwwLDguNjEtNWw0LjMzLTcuNDhBOC45Miw4LjkyLDAsMCwwLDYwLjc4LDE2MC41NFoiIGZpbGw9IiNmZmYiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="
                                />
                            )}
                        </StyledLink>
                    </Box>
                </GridChild>
                <GridChild gridColumn={{ _: 'span 7', tablet: 'span 8', laptop: 'span 6' }}>
                    <Box
                        display="flex"
                        alignItems="center"
                        height="100%"
                        justifyContent={{ _: 'flex-end' }}
                    >
                        {!gatsbyBreakpoints.laptopS && (
                            <Box display="flex" alignItems="center" mr={5}>
                                <LanguageDropdown
                                    isDark={!(hasWhiteHeader || triggerFixed)}
                                    originalPath={originalPath}
                                    language={lang}
                                />
                            </Box>
                        )}
                        <Navigation hasWhiteHeader={hasWhiteHeader || triggerFixed} />
                    </Box>
                </GridChild>
                {gatsbyBreakpoints.laptop && (
                    <Box gridColumn="span 3" display="block">
                        {!triggerFixed && (
                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="center"
                                height="100%"
                                gridGap={10}
                            >
                                <div>
                                    <PhoneLink
                                        href={`tel:${CRYO_PHONE_NUMBER}`}
                                        hasWhiteBg={hasWhiteHeader}
                                    >
                                        <Phone
                                            color={
                                                hasWhiteHeader
                                                    ? 'var(--blue-brand)'
                                                    : 'var(--white)'
                                            }
                                            size="medium"
                                            viewBox="0 0 20 20"
                                        />
                                        <Typography
                                            variant="link"
                                            color={
                                                hasWhiteHeader
                                                    ? 'var(--blue-brand)'
                                                    : 'var(--white)'
                                            }
                                            ml="0.5rem"
                                        >
                                            {CRYO_PHONE_NUMBER}
                                        </Typography>
                                    </PhoneLink>
                                </div>
                                <Box>
                                    <LanguageDropdown
                                        isDark={!hasWhiteHeader}
                                        originalPath={originalPath}
                                        language={lang}
                                    />
                                </Box>
                            </Box>
                        )}
                    </Box>
                )}
            </GridParent>
        </StyledHeader>
    );
};

export default Header;

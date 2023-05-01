import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import Slider from '@components/molecules/Slider';
import { TabsContainer } from '@components/molecules/Tabs';

const StyledTab = styled.div`
    align-items: flex-start;
    cursor: pointer;
    display: flex;
    height: 100%;
    padding-bottom: 20px;
    position: relative;

    &::before,
    &::after {
        content: '';
        opacity: 0;
        position: absolute;
        transition-duration: 0.4s;
        transition-property: height, width, inset, opacity;
        transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        width: 0;
    }

    &::after {
        background-color: var(--blue-brand);
        height: 6px;
        inset: 0 0 100% 0%;
        z-index: -1;
    }

    &.active-tab {
        cursor: default;

        &::after {
            inset: calc(100% - 6px) 0% 0% 0%;
            opacity: 1;
            width: 100%;
        }
    }

    ${mediaQueries.laptopS} {
        height: 120px;
        padding: 0 3.5rem 0 1.5rem;

        &::before {
            background-color: var(--grey-cyan);
            height: 100%;
            inset: 0% 100% 0% 0%;
            z-index: -1;
        }

        &:hover {
            &::before {
                inset: 0% 100% 0% 0%;
                opacity: 0.5;
                width: 30%;
            }
        }

        &::after {
            height: 100%;
        }

        &.active-tab {
            &::after {
                background-color: var(--blue-brand);
                content: '';
                height: 100%;
                inset: 0 0 100% calc(100% - 6px);
                position: absolute;
                width: 6px;
            }

            &::before {
                inset: 0% 0% 0% 0%;
                opacity: 1;
                width: 100%;
            }
        }
    }
`;

const StyledTabsContainer = styled(TabsContainer)`
    box-shadow: unset;
    margin-bottom: 0;
    padding: 0;
`;

export type ITab = {
    key: string;
    title: string;
    caption: string;
    description: string;
    prices: number[];
    img: IGatsbyImageData;
    bg: IGatsbyImageData;
    id: string;
    link: string;
    plus?: ITab;
};

interface ITabsContainer {
    tabs: ITab[];
    handleClick: (id: string) => void;
    activeId: string;
}

const renderTabs = ({ tabs, handleClick, activeId }: ITabsContainer) =>
    tabs.map((tab) => (
        <StyledTab
            key={tab.key}
            className={activeId === tab.id ? 'active-tab' : ''}
            onClick={() => handleClick(tab.id)}
            role="none"
        >
            <Box display="flex">
                <Box
                    display={{ _: 'none', laptopS: 'flex' }}
                    justifyContent="center"
                    mx="1rem"
                    flexShrink={0}
                    maxWidth={115}
                    width="100%"
                    maxHeight={120}
                >
                    <GatsbyImage objectFit="contain" alt={tab.title} image={tab.img} />
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <Typography variant="accent">{tab.title}</Typography>
                    {tab.caption && <Typography variant="caption">{tab.caption}</Typography>}
                </Box>
            </Box>
        </StyledTab>
    ));

const PriceTabsContainer = ({ tabs, handleClick, activeId }: ITabsContainer) => {
    const { tablet, laptopS } = useBreakpoint();

    return laptopS ? (
        <Box boxShadow="0 8px 16px #110d3e1a">
            <Box position="sticky" top="calc(var(--header-height) + 90px)">
                <StyledTabsContainer>
                    {renderTabs({ tabs, handleClick, activeId })}
                </StyledTabsContainer>
            </Box>
        </Box>
    ) : (
        <Box
            mt={20}
            pt={20}
            px={15}
            position="sticky"
            boxShadow="0 8px 16px #110d3e1a"
            backgroundColor="var(--white)"
            top={0}
            zIndex={10}
        >
            <Slider
                sliderName="price-tabs"
                slidesPerView={tablet ? 5 : 2.1}
                showOverflow
                spaceBetween={tablet ? 24 : 20}
            >
                {renderTabs({ tabs, handleClick, activeId })}
            </Slider>
        </Box>
    );
};

export default PriceTabsContainer;

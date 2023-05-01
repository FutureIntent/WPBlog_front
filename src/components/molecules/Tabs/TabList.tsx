import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactElement } from 'react';
import { TabList as ReactTabList } from 'react-tabs';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Slider from '@components/molecules/Slider';
import { Tab } from '@components/molecules/Tabs/index';

const StyledTabList = styled(ReactTabList)`
    overflow: hidden;
    padding: 0 1rem;
    position: relative;

    ${mediaQueries.tablet} {
        padding: unset;
    }

    li {
        cursor: pointer;
    }

    li:not(:last-of-type) {
        margin-bottom: 1.25rem;
    }

    .swiper-slide {
        width: auto !important;
    }
`;

export interface ITab {
    title: string;
    caption: string;
    img: IGatsbyImageData;
}

interface ITabList {
    tabs: ITab[];
    tabIndex: number;
    setTabIndex: (i: number) => void;
}

const TabList = ({ tabs, tabIndex, setTabIndex }: ITabList): ReactElement | null => {
    const { tablet, laptopS } = useBreakpoint();

    if (laptopS !== undefined && !laptopS) {
        return (
            <StyledTabList>
                <Slider
                    sliderName="services-tab-slider"
                    slidesPerView={tablet ? 5 : 'auto'}
                    showOverflow
                    spaceBetween={tablet ? 24 : 20}
                >
                    {tabs.map((tab, index) => (
                        <Tab
                            key={`${tab.title}-slider-tab`}
                            title={tab.title}
                            caption={tab.caption}
                            isActive={tabIndex === index}
                            handleClick={() => setTabIndex(index)}
                        >
                            <GatsbyImage objectFit="contain" image={tab.img} alt={tab.caption} />
                        </Tab>
                    ))}
                </Slider>
            </StyledTabList>
        );
    }

    return (
        <StyledTabList>
            {tabs.map((tab, index) => (
                <Tab
                    key={`${tab.title}-tab`}
                    title={tab.title}
                    caption={tab.caption}
                    isActive={tabIndex === index}
                    handleClick={() => setTabIndex(index)}
                >
                    <GatsbyImage objectFit="contain" image={tab.img} alt={tab.caption} />
                </Tab>
            ))}
        </StyledTabList>
    );
};

export default TabList;

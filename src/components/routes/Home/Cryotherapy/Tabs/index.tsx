import Tab from '@components/routes/Home/Cryotherapy/Tabs/Tab';
import TabContent from '@components/routes/Home/Cryotherapy/Tabs/TabContent';
import { useStaticQuery, graphql } from 'gatsby';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LazyLoad } from 'react-observer-api';
import { TabList, Tabs as ReactTabs } from 'react-tabs';
import styled from 'styled-components';

import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import Slider from '@components/molecules/Slider';
import { TabPanel } from '@components/molecules/Tabs';

const StyledTabList = styled(TabList)`
    display: flex;
    overflow: hidden;

    li {
        cursor: pointer;
    }
`;

const StyledHr = styled.hr`
    background-color: var(--grey-dark);
    border: 0;
    height: 2px;
    margin: 0;
    position: relative;
    top: -2px;
    width: 100vw;
`;

const query = graphql`
    query tabImages {
        general: file(relativePath: { eq: "homePage/cryotherapy/tabs/general.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 590, height: 300)
            }
        }
        beauty: file(relativePath: { eq: "homePage/cryotherapy/tabs/beauty@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 590, height: 300)
            }
        }
        health: file(relativePath: { eq: "homePage/cryotherapy/tabs/health@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 590, height: 300)
            }
        }
        sports: file(relativePath: { eq: "homePage/cryotherapy/tabs/sports@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 590, height: 300)
            }
        }
        wellness: file(relativePath: { eq: "homePage/cryotherapy/tabs/wellness@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 590, height: 300)
            }
        }
        recovery: file(relativePath: { eq: "homePage/cryotherapy/tabs/recovery.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 590, height: 300)
            }
        }
    }
`;

const Tabs = () => {
    const { t } = useTranslation();
    const [tabIndex, setTabIndex] = useState(0);
    const { general, beauty, health, sports, wellness, recovery } = useStaticQuery(query);

    const tabs = [
        {
            title: t('cryotherapy.general.title'),
            description: t('cryotherapy.general.description'),
            poster: general.childImageSharp.gatsbyImageData,
        },
        {
            title: t('cryotherapy.beauty.title'),
            description: t('cryotherapy.beauty.description'),
            poster: beauty.childImageSharp.gatsbyImageData,
        },
        {
            title: t('cryotherapy.sports.title'),
            description: t('cryotherapy.sports.description'),
            poster: sports.childImageSharp.gatsbyImageData,
        },
        {
            title: t('cryotherapy.health.title'),
            description: t('cryotherapy.health.description'),
            poster: health.childImageSharp.gatsbyImageData,
        },
        {
            title: t('cryotherapy.wellness.title'),
            description: t('cryotherapy.wellness.description'),
            poster: wellness.childImageSharp.gatsbyImageData,
        },
        {
            title: t('cryotherapy.recovery.title'),
            description: t('cryotherapy.recovery.description'),
            poster: recovery.childImageSharp.gatsbyImageData,
        },
    ];

    const handleClick = (index: number) => {
        setTabIndex(index);
    };

    return (
        <ReactTabs forceRenderTabPanel selectedIndex={tabIndex} onSelect={() => {}}>
            <GridParent>
                <GridChild
                    gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }}
                    data-sal="slide-down"
                    data-sal-easing="ease-out-quart"
                    data-sal-duration={800}
                >
                    <Typography variant="h1" as="h2" color="var(--white)">
                        {t('cryotherapy.title')}
                    </Typography>
                    <LazyLoad>
                        <StyledTabList>
                            <Slider sliderName="cryotherapy" slidesPerView="auto" shouldShrink>
                                {tabs.map((tab, index) => (
                                    <Tab
                                        key={tab.title}
                                        title={tab.title}
                                        isActive={tabIndex === index}
                                        handleClick={handleClick}
                                        index={index}
                                    />
                                ))}
                            </Slider>
                        </StyledTabList>
                    </LazyLoad>
                </GridChild>
            </GridParent>
            <StyledHr />
            <GridParent>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 9' }}>
                    <GridParent noGap noGutter>
                        {tabs.map((tab) => (
                            <TabPanel forceRender key={tab.title.replace(' ', '-')}>
                                <TabContent
                                    title={tab.title}
                                    description={tab.description}
                                    poster={tab.poster}
                                />
                            </TabPanel>
                        ))}
                    </GridParent>
                </GridChild>
            </GridParent>
        </ReactTabs>
    );
};

export default Tabs;

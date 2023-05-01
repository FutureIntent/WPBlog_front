import Tab from '@components/routes/Home/Cryotherapy/Tabs/Tab';
import TabContent from '@components/routes/XCryoOriginal/BodyBenefits/TabContent';
import { RefObject, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const StyledTab = styled(Tab)`
    color: var(--grey-dark);
    cursor: pointer;
    max-width: 255px;
    width: 100%;

    &.tab-selected {
        border-color: var(--blue-brand);
    }
`;

const StyledTabList = styled(TabList)`
    display: flex;
    justify-content: space-evenly;
    overflow: hidden;

    li {
        cursor: pointer;
        margin: 2rem 0 0;
    }
`;

const Tabs = ({ sliderRef }: { sliderRef: RefObject<any> }) => {
    const { t } = useTranslation();
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        if (!sliderRef?.current) return;

        if (sliderRef.current) {
            sliderRef.current.swiper.slideTo(tabIndex);
        }
    }, [tabIndex]);

    return (
        <ReactTabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <Box backgroundColor="rgba(11, 20, 69, 0.7)" pt="2.8125rem">
                <GridParent as="div" noGutter>
                    <GridChild gridColumn={{ _: 'span 12', laptopS: '4 / span 6' }}>
                        <Box>
                            <Typography variant="h1" as="h2" color="var(--white)" textAlign="center">
                                {t('bodyBenefits.heading')}
                            </Typography>
                            <StyledTabList>
                                <StyledTab
                                    activeColor="var(--blue-brand)"
                                    title={t('bodyBenefits.tab1.title')}
                                    isActive={tabIndex === 0}
                                />
                                <StyledTab
                                    activeColor="var(--blue-brand)"
                                    title={t('bodyBenefits.tab2.title')}
                                    isActive={tabIndex === 1}
                                />
                                <StyledTab
                                    activeColor="var(--blue-brand)"
                                    title={t('bodyBenefits.tab3.title')}
                                    isActive={tabIndex === 2}
                                />
                                <StyledTab
                                    activeColor="var(--blue-brand)"
                                    title={t('bodyBenefits.tab4.title')}
                                    isActive={tabIndex === 3}
                                />
                            </StyledTabList>
                        </Box>
                    </GridChild>
                </GridParent>
            </Box>

            <GridParent as="div">
                <GridChild
                    gridColumn={{
                        _: 'span 12',
                        tablet: '2 / span 10',
                        laptopS: '4 / span 6',
                    }}
                >
                    <TabPanel>
                        <TabContent
                            title={t('bodyBenefits.tab1.title')}
                            description={t('bodyBenefits.tab1.content')}
                        />
                    </TabPanel>
                    <TabPanel>
                        <TabContent
                            title={t('bodyBenefits.tab2.title')}
                            description={t('bodyBenefits.tab2.content')}
                        />
                    </TabPanel>
                    <TabPanel>
                        <TabContent
                            title={t('bodyBenefits.tab3.title')}
                            description={t('bodyBenefits.tab3.content')}
                        />
                    </TabPanel>
                    <TabPanel>
                        <TabContent
                            title={t('bodyBenefits.tab4.title')}
                            description={t('bodyBenefits.tab4.content')}
                        />
                    </TabPanel>
                </GridChild>
            </GridParent>
        </ReactTabs>
    );
};

export default Tabs;

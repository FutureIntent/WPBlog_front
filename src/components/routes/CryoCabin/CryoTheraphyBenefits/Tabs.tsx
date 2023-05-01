import Tab from '@components/routes/Home/Cryotherapy/Tabs/Tab';
import { RefObject, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import TabContent from './TabContent';

const StyledTabList = styled(TabList)`
    display: flex;
    justify-content: space-around;
    overflow: hidden;

    li {
        cursor: pointer;
    }
`;

const StyledTab = styled(Tab).attrs({ activeColor: 'var(--blue-brand)' })`
    color: var(--grey-dark);
    cursor: pointer;
`;

const Tabs = ({ sliderRef }: { sliderRef: RefObject<any> }) => {
    const { t } = useTranslation();
    const [tabIndex, setTabIndex] = useState(0);
    const healthCards = [
        {
            title: t('cryoBenefits.healthBenefits.card1.title'),
            caption: t('cryoBenefits.healthBenefits.card1.description'),
        },
        {
            title: t('cryoBenefits.healthBenefits.card2.title'),
            caption: t('cryoBenefits.healthBenefits.card2.description'),
        },
        {
            title: t('cryoBenefits.healthBenefits.card3.title'),
            caption: t('cryoBenefits.healthBenefits.card3.description'),
        },
        {
            title: t('cryoBenefits.healthBenefits.card4.title'),
            caption: t('cryoBenefits.healthBenefits.card4.description'),
        },
    ];
    const sportCards = [
        {
            title: t('cryoBenefits.sportBenefits.card1.title'),
            caption: t('cryoBenefits.sportBenefits.card1.description'),
        },
        {
            title: t('cryoBenefits.sportBenefits.card2.title'),
            caption: t('cryoBenefits.sportBenefits.card2.description'),
        },
        {
            title: t('cryoBenefits.sportBenefits.card3.title'),
            caption: t('cryoBenefits.sportBenefits.card3.description'),
        },
        {
            title: t('cryoBenefits.sportBenefits.card4.title'),
            caption: t('cryoBenefits.sportBenefits.card4.description'),
        },
    ];
    const beautyCards = [
        {
            title: t('cryoBenefits.beautyBenefits.card1.title'),
            caption: t('cryoBenefits.beautyBenefits.card1.description'),
        },
        {
            title: t('cryoBenefits.beautyBenefits.card2.title'),
            caption: t('cryoBenefits.beautyBenefits.card2.description'),
        },
        {
            title: t('cryoBenefits.beautyBenefits.card3.title'),
            caption: t('cryoBenefits.beautyBenefits.card3.description'),
        },
        {
            title: t('cryoBenefits.beautyBenefits.card4.title'),
            caption: t('cryoBenefits.beautyBenefits.card4.description'),
        },
    ];

    useEffect(() => {
        if (!sliderRef?.current) return;

        if (sliderRef.current) {
            sliderRef.current.swiper.slideTo(tabIndex);
        }
    }, [tabIndex]);

    return (
        <ReactTabs
            selectedIndex={tabIndex}
            onSelect={(index: number) => setTabIndex(index)}
            style={{ height: '100%', zIndex: 110, position: 'relative' }}
        >
            <Box backgroundColor="rgba(11, 20, 69, 0.7)" pt="2.8125rem">
                <GridParent as="div" noGutter>
                    <GridChild gridColumn={{ _: 'span 12', laptopS: '4 / span 6' }}>
                        <Box>
                            <Typography variant="h1" as="h2" color="var(--white)" textAlign="center">
                                {t('cryoBenefits.heading')}
                            </Typography>
                            <StyledTabList>
                                <StyledTab
                                    title={t('cryoBenefits.tab1')}
                                    isActive={tabIndex === 0}
                                />
                                <StyledTab
                                    title={t('cryoBenefits.tab2')}
                                    isActive={tabIndex === 1}
                                />
                                <StyledTab
                                    title={t('cryoBenefits.tab3')}
                                    isActive={tabIndex === 2}
                                />
                            </StyledTabList>
                        </Box>
                    </GridChild>
                </GridParent>
            </Box>

            <Box height="100%" mt={{ _: '3.5rem', tablet: '8.5rem' }}>
                <TabPanel>
                    <TabContent slides={healthCards} />
                </TabPanel>
                <TabPanel>
                    <TabContent slides={sportCards} />
                </TabPanel>
                <TabPanel>
                    <TabContent slides={beautyCards} />
                </TabPanel>
            </Box>
        </ReactTabs>
    );
};

export default Tabs;

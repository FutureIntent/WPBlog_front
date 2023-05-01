import { props } from '@styled-system/should-forward-prop';
import { hexToRGB } from '@utils/helpers';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TabList, TabPanel, Tabs, Tab } from 'react-tabs';
import styled from 'styled-components';

import breakpoints from '@theme/configs/breakpoints';
import { colors } from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';

import Typography from '@components/atoms/Typography';

const StyledTab = styled(Tab).withConfig({
    shouldForwardProp: (prop) => ![...props, 'isActive'].includes(String(prop)),
})<{ isActive: boolean }>`
    cursor: pointer;
    padding: 0.9rem 0;
    width: 100%;

    p {
        color: var(--grey-dark);
    }

    ${({ isActive }) =>
        isActive &&
        `
        background-color: var(--blue-brand);

        ${mediaQueries.tablet} {
            background-color: #2D3AB2;
        }

        p {
            color: var(--white);
        }
  `};
`;

const StyledWrapper = styled.div`
    background-color: rgba(${hexToRGB(colors.greyDark)}, 0.2);
    border-radius: 4px;
    overflow: hidden;

    @media all and (max-width: ${breakpoints.tablet}) {
        background-color: var(--grey-lt);
    }
`;

const StyledTabList = styled(TabList)`
    border-radius: 3px 3px 0 0;
    display: flex;
    margin: 2px;
    overflow: hidden;
`;

const PlanTabs = ({ prices }: { prices: [number, number, number] }) => {
    const { t } = useTranslation();
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <StyledWrapper>
                <StyledTabList>
                    <StyledTab isActive={tabIndex === 0}>
                        <Typography variant="caption" color="var(--white)" textAlign="center">
                            {t('pricesPlan.planA')}
                        </Typography>
                    </StyledTab>
                    <StyledTab isActive={tabIndex === 1}>
                        <Typography variant="caption" color="var(--white)" textAlign="center">
                            {t('pricesPlan.planB')}
                        </Typography>
                    </StyledTab>
                    <StyledTab isActive={tabIndex === 2}>
                        <Typography variant="caption" color="var(--white)" textAlign="center">
                            {t('pricesPlan.planC')}
                        </Typography>
                    </StyledTab>
                </StyledTabList>
                {prices.map((price) => (
                    <TabPanel key={price}>
                        <Typography
                            variant="h2"
                            color={{ _: 'var(--black-brand)', tablet: 'var(--white)' }}
                            textAlign="center"
                            mt="0.9rem"
                        >
                            {price}
                            <Typography
                                as="span"
                                variant="paragraph"
                                color={{ _: 'var(--black-brand)', tablet: 'var(--white)' }}
                                verticalAlign="super"
                            >
                                {t('pricesPlan.month')}
                            </Typography>
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color={{ _: 'var(--black-brand)', tablet: 'var(--grey-dark)' }}
                            pb={{ _: '0.4rem', tablet: '1.4rem' }}
                            textAlign="center"
                        >
                            70% {t('pricesPlan.royalty')}
                        </Typography>
                    </TabPanel>
                ))}
            </StyledWrapper>
        </Tabs>
    );
};

export default PlanTabs;

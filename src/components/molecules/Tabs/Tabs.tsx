import { Children, ReactElement, useState } from 'react';
import { Tabs as ReactTabs } from 'react-tabs';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Typography from '@components/atoms/Typography';

import { TabList, TabPanelWrapper, TabsContainer, TabPanel } from '@components/molecules/Tabs';
import { ITab } from '@components/molecules/Tabs/TabList';

const StyledTabs = styled(ReactTabs)`
    ${mediaQueries.laptopS} {
        display: flex;
    }
`;

interface ITabs {
    title?: string;
    tabs: ITab[];
    children: ReactElement | ReactElement[];
}

const Tabs = ({ title, tabs, children }: ITabs) => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <StyledTabs forceRenderTabPanel selectedIndex={tabIndex} onSelect={() => {}}>
            <TabsContainer>
                {Boolean(title) && (
                    <Typography
                        variant="h1"
                        as="h2"
                        mb="2rem"
                        ml={{ _: '1rem', tablet: '2rem' }}
                        textAlign={{ _: 'start', tablet: 'center', laptopS: 'start' }}
                    >
                        {title}
                    </Typography>
                )}
                {/* Should be called as function to avoid error with "not equal number of Tab and TabPanel". */}
                {TabList({ tabs, tabIndex, setTabIndex })}
            </TabsContainer>

            <TabPanelWrapper>
                {Children.toArray(children).map((child, index) => (
                    <TabPanel key={`${tabs[index].title}-panel`}>{child}</TabPanel>
                ))}
            </TabPanelWrapper>
        </StyledTabs>
    );
};

export default Tabs;

import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import Box from '@components/atoms/Box';

import { ITab } from '@components/organisms/PriceTabs/PriceTabsContainer';
import PriceTabsHeading from '@components/organisms/PriceTabs/PriceTabsHeading';
import { PriceTab } from '@components/organisms/PriceTabs/index';

const TabContent = ({ tabs }: { tabs: ITab[] }) => {
    const { laptopS } = useBreakpoint();

    return (
        <Box
            mt={{ _: '3rem', laptopS: '10rem' }}
            mx={{ _: 15 }}
            gridColumn={{ _: '1/ span 10', laptopS: '2/ span 6' }}
            mb={220}
        >
            {laptopS && <PriceTabsHeading />}
            {tabs.map((tab) => (
                <Box
                    key={tab.title.replace(' ', '-')}
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    mb={30}
                    id={tab.id}
                >
                    <PriceTab
                        name={tab.title}
                        productName={tab.caption}
                        title={tab.title}
                        backgroundImg={tab.bg}
                        productImg={tab.img}
                        description={tab.description}
                        prices={[tab.prices[0], tab.prices[1], tab.prices[2]]}
                        link={tab.link}
                        plus={tab.plus}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default TabContent;

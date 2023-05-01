import BenefitSlider from '@components/routes/Home/Cryotherapy/Benefits/BenefitSlider';
import CryoBackground from '@components/routes/Home/Cryotherapy/CryoBackground';
import Tabs from '@components/routes/Home/Cryotherapy/Tabs';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';

const Cryotherapy = () => (
    <section id="cryotherapy">
        <CryoBackground>
            <Box p="3.75rem 0 7.1875rem" overflow="hidden">
                <Tabs />

                <GridParent>
                    <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 9' }}>
                        <BenefitSlider />
                    </GridChild>
                </GridParent>
            </Box>
        </CryoBackground>
    </section>
);

export default Cryotherapy;

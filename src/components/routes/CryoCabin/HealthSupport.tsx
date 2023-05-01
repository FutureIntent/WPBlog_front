import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';

import CabinHealth from '@components/molecules/Icons/CabinHealth';
import CabinHealth2 from '@components/molecules/Icons/CabinHealth2';
import CabinHealth3 from '@components/molecules/Icons/CabinHealth3';

import OrderedListWithIcons from '@components/templates/OrderedListWithIcons/OrderedListWithIcons';

const HealthSupport = () => {
    const { t } = useTranslation();
    const cards = [
        {
            icon: <CabinHealth />,
            text: t('healthSupport.card1'),
        },
        {
            icon: <CabinHealth2 />,
            text: t('healthSupport.card2'),
        },
        {
            icon: <CabinHealth3 />,
            text: t('healthSupport.card3'),
        },
    ];

    return (
        <Box as="section" pb={140}>
            <OrderedListWithIcons
                title={t('healthSupport.title')}
                subTitle={t('healthSupport.caption')}
                cards={cards}
            />
        </Box>
    );
};

export default HealthSupport;

import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';

import CryoTutor1 from '@components/molecules/Icons/CryoTutor1';
import CryoTutor2 from '@components/molecules/Icons/CryoTutor2';
import CryoTutor3 from '@components/molecules/Icons/CryoTutor3';

import OrderedListWithIcons from '@components/templates/OrderedListWithIcons/OrderedListWithIcons';

const HowDoesItWork = () => {
    const { t } = useTranslation();
    const cards = [
        {
            icon: <CryoTutor1 />,
            text: t('howDoesItWorkCards.card1'),
        },
        {
            icon: <CryoTutor3 />,
            text: t('howDoesItWorkCards.card2'),
        },
        {
            icon: <CryoTutor2 />,
            text: t('howDoesItWorkCards.card3'),
        },
    ];

    return (
        <Box as="section" pt={80} pb={140}>
            <OrderedListWithIcons cards={cards} title={t('howDoesItWork')} />
        </Box>
    );
};

export default HowDoesItWork;

import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';

import CryoTutor1 from '@components/molecules/Icons/CryoTutor1';
import CryoTutor2 from '@components/molecules/Icons/CryoTutor2';
import CryoTutor3 from '@components/molecules/Icons/CryoTutor3';
import CryoTutor4 from '@components/molecules/Icons/CryoTutor4';

import OrderedListWithIcons from '@components/templates/OrderedListWithIcons/OrderedListWithIcons';

const HowDoesItWork = () => {
    const { t } = useTranslation();
    const cards = [
        {
            icon: <CryoTutor1 />,
            text: t('howItWork.card1'),
        },
        {
            icon: <CryoTutor2 />,
            text: t('howItWork.card2'),
        },
        {
            icon: <CryoTutor3 />,
            text: t('howItWork.card3'),
        },
        {
            icon: <CryoTutor4 />,
            text: t('howItWork.card4'),
        },
    ];

    return (
        <Box as="section" pt="5.75rem">
            <OrderedListWithIcons cards={cards} title={t('howDoesItWork')} />
        </Box>
    );
};

export default HowDoesItWork;

import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';

import Heart from '@components/molecules/Icons/Heart';
import MaskTutor2 from '@components/molecules/Icons/MaskTutor2';
import MaskTutor3 from '@components/molecules/Icons/MaskTutor3';

import OrderedListWithIcons from '@components/templates/OrderedListWithIcons/OrderedListWithIcons';

const TheCryomaskIs = () => {
    const { t } = useTranslation();
    const cards = [
        {
            icon: <Heart />,
            text: t('cryomaskIs.point1'),
        },
        {
            icon: <MaskTutor2 />,
            text: t('cryomaskIs.point2'),
        },
        {
            icon: <MaskTutor3 />,
            text: t('cryomaskIs.point3'),
        },
    ];

    return (
        <Box as="section" pt={80}>
            <OrderedListWithIcons title={t('cryomaskIs.heading')} cards={cards} />
        </Box>
    );
};

export default TheCryomaskIs;

import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';

import Form from '@components/molecules/Form/Form';

const GotQuestions = () => {
    const { t } = useTranslation();

    return (
        <Box as="section" position="relative" zIndex={100} overflowX="visible">
            <GridParent>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
                    <Box
                        position="relative"
                        top={{ _: '-7rem', tablet: '-15rem' }}
                        mb={{ _: '-5rem', laptopS: '0' }}
                    >
                        <Form title={t('orYouCanSendUsMessage')} noMargin />
                    </Box>
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default GotQuestions;

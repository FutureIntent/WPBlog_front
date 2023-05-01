import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import React from 'react';
import { useTranslation } from 'react-i18next';

import FranchiseSchemaDesktop from '@assets/BusinessAndCryo/franchise_scheme.svg';
import FranchiseSchemaMobile from '@assets/BusinessAndCryo/franchise_scheme_mob.svg';

import theme from '@theme/configs';

import Box from '@components/atoms/Box';

const FranchiseSchema = () => {
    const { t } = useTranslation();
    const { tablet } = useBreakpoint();

    return (
        <Box display="flex" justifyContent="flex-end">
            <Box
                backgroundColor="var(--white)"
                zIndex={theme.zIndices.stepUp}
                position="relative"
                boxShadow="card"
                width="100%"
                mx={{ _: '1rem' }}
                mt={{ _: '-2rem', tablet: 0 }}
                maxWidth={{ _: '', tablet: '590px' }}
                minWidth={{ _: '', tablet: '590px' }}
            >
                <img
                    src={tablet ? FranchiseSchemaDesktop : FranchiseSchemaMobile}
                    alt={t('howWeWork.imageAlt')}
                />
            </Box>
        </Box>
    );
};

export default FranchiseSchema;

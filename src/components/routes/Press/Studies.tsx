import chunk from 'lodash.chunk';
import { useTranslation } from 'react-i18next';

import theme from '@theme/configs';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import FileCard from '@components/molecules/FileCard/FileCard';

const Studies = () => {
    const { t } = useTranslation();
    const files = chunk(Array(10).fill('test'), 2);

    return (
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }}>
                <Typography
                    variant="h1"
                    as="h2"
                    color="var(--black-brand)"
                    mt="6rem"
                    mb={{ _: '1.25rem', tablet: '5rem' }}
                    textAlign="center"
                >
                    {t('studies')}
                </Typography>

                <Box boxShadow={theme.shadows.card} p="1.75rem 2.5rem" mb="8.5rem">
                    <Typography variant="h3" color="var(--black-brand)" mb="0.5rem">
                        {t('cardTitle')}
                    </Typography>
                    <Typography variant="paragraph" color="var(--black-brand)" mb="1.5rem">
                        {t('cardDescription')}
                    </Typography>

                    <Box
                        backgroundColor="var(--grey-cyan)"
                        p={{ _: '0.6rem 0.6rem 2.1rem', tablet: '1.875rem 2.5rem' }}
                        maxHeight="320px"
                        display="flex"
                        flexWrap="nowrap"
                        overflowX="scroll"
                    >
                        {files.map((item, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Box key={`study-${index}`} mr="1rem">
                                <FileCard
                                    hasMargin
                                    fileName="Effects of Whole-Body Cryotherapy vs. Far-Infrared vs. Passive Modalities on Recovery"
                                />
                                {item[1] && (
                                    <FileCard fileName="Effects of Whole-Body Cryotherapy vs. Far-Infrared vs. Passive Modalities on Recovery" />
                                )}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </GridChild>
        </GridParent>
    );
};

export default Studies;

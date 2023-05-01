import routeMap from '@utils/routeMap';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import LinkAsButton from '@components/atoms/LinkAsButton';
import Typography from '@components/atoms/Typography';

const PriceTabsHeading = () => {
    const { t } = useTranslation();

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems={{ _: 'flex-start', tablet: 'flex-end' }}
            px={15}
            flexDirection={{ _: 'column', tablet: 'row' }}
            flexWrap="wrap"
            margin="0 auto"
            maxWidth={900}
        >
            <Box minWidth={320}>
                <Typography variant="caption" color="var(--grey-dark)" transformText="uppercase">
                    {t('services')}
                </Typography>
                <Typography
                    variant="h1"
                    as="h2"
                    color="var(--black-brand)"
                    transformText="uppercase"
                    mb={{ _: 10, tablet: 0 }}
                >
                    {t('prices')}
                </Typography>
            </Box>
            <Box
                display="flex"
                maxWidth={{ _: 200, tablet: 530 }}
                flexDirection={{ _: 'column', tablet: 'row' }}
                alignItems="center"
            >
                <Typography
                    variant="paragraph2"
                    color="var(--grey-dark)"
                    pr="1.5rem"
                    mb={{ _: 20, tablet: 0 }}
                >
                    {t('wantToLearn')}
                </Typography>
                <LinkAsButton variant="primary" px={16} to={routeMap.services.businessAndCryo}>
                    <Typography variant="accent" color="var(--white)">
                        {t('business&Cryo')}
                    </Typography>
                </LinkAsButton>
            </Box>
        </Box>
    );
};

export default PriceTabsHeading;

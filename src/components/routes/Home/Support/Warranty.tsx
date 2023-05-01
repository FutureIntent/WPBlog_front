import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const Warranty = ({
    center = false,
    offsetTop = false,
}: {
    center: boolean;
    offsetTop?: boolean;
}) => {
    const { t } = useTranslation();

    return (
        <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent={center ? 'center' : 'flex-start'}
            mx={{ _: '1rem' }}
            mt={offsetTop ? '4rem' : ''}
            maxWidth={590}
        >
            <Typography variant="h1" as="h2" color="var(--black- brand)" mb="0.75rem">
                {t(`warranty.titleLeft`)}
            </Typography>
            <Typography variant="paragraph" color="var(--black-brand)">
                {t(`warranty.textLeft`)}
            </Typography>
        </Box>
    );
};

export default Warranty;

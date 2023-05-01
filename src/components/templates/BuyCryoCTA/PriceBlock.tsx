import { useModal } from '@hooks';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';

import PriceLine from '@components/templates/BuyCryoCTA/PriceLine';

import { BuyCryoCTATemplateProps } from './BuyCryoCTATemplate';

const PriceBlock = ({
    caption,
    price,
    disclaimer,
    productName,
    productImg,
}: Omit<BuyCryoCTATemplateProps, 'image' | 'flipped'>) => {
    const { t } = useTranslation();
    const { openModal } = useModal(`get-started`);

    const handleOpenModal = () => {
        openModal({
            productName,
            productImg,
        });
    };

    return (
        <Box p={{ _: '0 0 2.5rem', tablet: '0 2.5rem 0 0' }} width={{ _: '100%', tablet: '50%' }}>
            <Typography variant="caption" color="var(--blue-dim)" transformText="uppercase">
                {caption}
            </Typography>
            <Typography variant="h2" color="var(--black-brand)">
                {t('buyToday.startingFrom')}
            </Typography>
            <PriceLine variant="h2">
                <Typography as="span" variant="h3" color="var(--black-brand)">
                    kr
                </Typography>
                {price}
                <Typography as="span" variant="paragraph" color="var(--black-brand)">
                    {t('pricesPlan.month')}
                </Typography>
            </PriceLine>
            <Typography
                variant="caption"
                color="var(--grey-dark)"
                mb="1.5rem"
                mt="1.5rem"
                textAlign="center"
            >
                {t('buyToday.includesAll')}
            </Typography>

            {disclaimer && (
                <Typography variant="caption" color="var(--grey-dark)" my="1rem" textAlign="center">
                    {disclaimer}
                </Typography>
            )}
            <Button size="fullWidth" onClick={handleOpenModal}>
                <Typography variant="accent" color="var(--white)">
                    {t('getStarted')}
                </Typography>
            </Button>
        </Box>
    );
};

export default PriceBlock;

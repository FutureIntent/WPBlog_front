import { useTranslation } from 'react-i18next';
import Swiper from 'swiper';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import Slider from '@components/molecules/Slider';

const TextSlider = ({
    setSecondSwiper,
    firstSwiper,
}: {
    setSecondSwiper: (i: Swiper | undefined) => void;
    firstSwiper: Swiper | undefined;
}) => {
    const { t } = useTranslation();

    return (
        <Box
            zIndex={10}
            position="absolute"
            top={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width="100%"
            height="100%"
        >
            <Box textAlign="center" maxWidth={590} width="60%">
                <Typography variant="h2" color="var(--white)" mb="2.4rem">
                    {t('delivery.heading')}
                </Typography>
                <Slider
                    sliderName="delivery-text-slider-2"
                    effect="creative"
                    creativeEffect={{
                        prev: {
                            shadow: false,
                            translate: [0, 0, -400],
                            opacity: 0,
                        },
                        next: {
                            translate: ['100%', 0, 0],
                            opacity: 0,
                        },
                    }}
                    loop
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                >
                    <Typography key={`${t('delivery.slide1')  }text-slider-delivery`} variant="paragraph" color="var(--white)">
                        {t('delivery.slide1')}
                    </Typography>
                    <Typography key={`${t('delivery.slide2')  }text-slider-delivery`} variant="paragraph" color="var(--white)">
                        {t('delivery.slide2')}
                    </Typography>
                    <Typography key={`${t('delivery.slide3')  }text-slider-delivery`} variant="paragraph" color="var(--white)">
                        {t('delivery.slide3')}
                    </Typography>
                    <Typography key={`${t('delivery.slide4')  }text-slider-delivery`} variant="paragraph" color="var(--white)">
                        {t('delivery.slide4')}
                    </Typography>
                </Slider>
            </Box>
        </Box>
    );
};

export default TextSlider;

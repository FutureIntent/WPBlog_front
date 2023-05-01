import Slide from '@components/routes/Home/Cryotherapy/Benefits/Slide';
import { useSwiper } from '@hooks';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import ArrowLeft from '@components/molecules/Icons/ArrowLeft';
import ArrowRight from '@components/molecules/Icons/ArrowRight';
import CryoAdvantageDesign from '@components/molecules/Icons/CryoAdvantageDesign';
import Heart from '@components/molecules/Icons/Heart';
import Slider from '@components/molecules/Slider';
import ArrowWrapper from '@components/molecules/Slider/ArrowWrapper';

const BenefitSlider = () => {
    const { t } = useTranslation();
    const gatsbyBreakpoints = useBreakpoint();

    const { sliderRef, nextSlide, prevSlide } = useSwiper();

    const slides = [
        {
            alt: t('cryotherapyBenefits.efficiency.title'),
            title: t('cryotherapyBenefits.efficiency.title'),
            icon: <CryoAdvantageDesign />,
            description: t('cryotherapyBenefits.efficiency.description'),
            poster: (
                <StaticImage
                    width={435}
                    height={150}
                    src="../../../../../../static/assets/homePage/cryotherapy/benefits/efficiency.jpg"
                    alt={t('cryotherapyBenefits.efficiency.title')}
                />
            ),
        },
        {
            alt: t('cryotherapyBenefits.safety.title'),
            title: t('cryotherapyBenefits.safety.title'),
            icon: <Heart />,
            description: t('cryotherapyBenefits.safety.description'),
            poster: (
                <StaticImage
                    width={435}
                    height={150}
                    src="../../../../../../static/assets/homePage/cryotherapy/benefits/safety.jpg"
                    alt={t('cryotherapyBenefits.safety.title')}
                />
            ),
        },
        {
            alt: t('cryotherapyBenefits.noAge.title'),
            title: t('cryotherapyBenefits.noAge.title'),
            icon: <CryoAdvantageDesign />,
            description: t('cryotherapyBenefits.noAge.description'),
            poster: (
                <StaticImage
                    width={435}
                    height={150}
                    src="../../../../../../static/assets/homePage/cryotherapy/benefits/age.jpg"
                    alt={t('cryotherapyBenefits.noAge.title')}
                />
            ),
        },
        {
            alt: t('cryotherapyBenefits.easySetup.title'),
            title: t('cryotherapyBenefits.easySetup.title'),
            icon: <Heart />,
            description: t('cryotherapyBenefits.easySetup.description'),
            poster: (
                <StaticImage
                    width={435}
                    height={150}
                    src="../../../../../../static/assets/homePage/cryotherapy/benefits/setup.jpg"
                    alt={t('cryotherapyBenefits.easySetup.title')}
                />
            ),
        },
        {
            alt: t('cryotherapyBenefits.minimum.title'),
            title: t('cryotherapyBenefits.minimum.title'),
            icon: <Heart />,
            description: t('cryotherapyBenefits.minimum.description'),
            poster: (
                <StaticImage
                    width={435}
                    height={150}
                    src="../../../../../../static/assets/homePage/cryotherapy/benefits/efficiency.jpg"
                    alt={t('cryotherapyBenefits.minimum.title')}
                />
            ),
        },
    ];

    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                data-sal="fade"
                data-sal-easing="ease"
                data-sal-duration="1200"
            >
                <Typography variant="h2" color="var(--white)">
                    {t('cryotherapyBenefits.title')}:
                </Typography>
                <Box display="flex">
                    <ArrowWrapper onClick={prevSlide}>
                        <ArrowLeft size="medium" color="var(--grey-dark)" />
                    </ArrowWrapper>
                    <ArrowWrapper ml={{ _: 50, laptopS: 100 }} onClick={nextSlide}>
                        <ArrowRight color="var(--grey-dark)" />
                    </ArrowWrapper>
                </Box>
            </Box>

            <Box
                width="100%"
                mt="2rem"
                data-sal="slide-up"
                data-sal-easing="ease-out-quart"
                data-sal-duration={800}
            >
                <Slider
                    sliderName="benefit-slider"
                    slidesPerView="auto"
                    spaceBetween={gatsbyBreakpoints.tablet ? 30 : 10}
                    showOverflow
                    shouldShrink
                    sliderRef={sliderRef}
                >
                    {slides.map((slide) => (
                        <Slide key={slide.title} {...slide} />
                    ))}
                </Slider>
            </Box>
        </>
    );
};

export default BenefitSlider;

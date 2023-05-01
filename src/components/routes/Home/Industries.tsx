import Slide from '@components/routes/Home/Industries/Slide';
import { useSwiper } from '@hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import ArrowLeft from '@components/molecules/Icons/ArrowLeft';
import ArrowRight from '@components/molecules/Icons/ArrowRight';
import Slider from '@components/molecules/Slider';
import ArrowWrapper from '@components/molecules/Slider/ArrowWrapper';

const query = graphql`
    query industries {
        physicalTherapy: file(relativePath: { eq: "homePage/Industries/physical.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 280, height: 170)
            }
        }
        athletics: file(relativePath: { eq: "homePage/Industries/athletics.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 280, height: 170)
            }
        }
        gyms: file(relativePath: { eq: "homePage/Industries/gyms.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 280, height: 170)
            }
        }
        military: file(relativePath: { eq: "homePage/Industries/military.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 280, height: 170)
            }
        }
        sportsMedicine: file(relativePath: { eq: "homePage/Industries/sports.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 280, height: 170)
            }
        }
        spa: file(relativePath: { eq: "homePage/Industries/spa.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 280, height: 170)
            }
        }
        plastic: file(relativePath: { eq: "homePage/Industries/plastic.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 280, height: 170)
            }
        }
        strength: file(relativePath: { eq: "homePage/Industries/strength.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 280, height: 170)
            }
        }
        wellness: file(relativePath: { eq: "homePage/Industries/wellness.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 280, height: 170)
            }
        }
    }
`;

const Industries = () => {
    const { t } = useTranslation();
    const gatsbyBreakpoints = useBreakpoint();
    const { sliderRef, nextSlide, prevSlide } = useSwiper();
    const {
        physicalTherapy,
        athletics,
        gyms,
        military,
        sportsMedicine,
        spa,
        plastic,
        strength,
        wellness,
    } = useStaticQuery(query);

    const slides = [
        {
            title: t('industries.physicalTherapy'),
            alt: t('industries.physicalTherapy'),
            poster: physicalTherapy.childImageSharp.gatsbyImageData,
        },
        {
            title: t('industries.athletics'),
            alt: t('industries.athletics'),
            poster: athletics.childImageSharp.gatsbyImageData,
        },
        {
            title: t('industries.gyms'),
            alt: t('industries.gyms'),
            poster: gyms.childImageSharp.gatsbyImageData,
        },
        {
            title: t('industries.military'),
            alt: t('industries.military'),
            poster: military.childImageSharp.gatsbyImageData,
        },
        {
            title: t('industries.sportsMedicine'),
            alt: t('industries.sportsMedicine'),
            poster: sportsMedicine.childImageSharp.gatsbyImageData,
        },
        {
            title: t('industries.spa'),
            alt: t('industries.spa'),
            poster: spa.childImageSharp.gatsbyImageData,
        },
        {
            title: t('industries.plastic'),
            alt: t('industries.plastic'),
            poster: plastic.childImageSharp.gatsbyImageData,
        },
        {
            title: t('industries.strength'),
            alt: t('industries.strength'),
            poster: strength.childImageSharp.gatsbyImageData,
        },
        {
            title: t('industries.wellness'),
            alt: t('industries.wellness'),
            poster: wellness.childImageSharp.gatsbyImageData,
        },
    ];

    return (
        <Box
            as="section"
            id="industries"
            p={{ _: '3rem 1rem 8.75rem', laptopS: '3.75rem 2.8125rem 8.75rem' }}
            overflow="hidden"
        >
            <div data-sal="fade" data-sal-easing="ease-out-quart" data-sal-duration={800}>
                <Box display="flex" justifyContent="space-between">
                    <Typography
                        variant="h1"
                        as="h2"
                        color="var(--black-brand)"
                        mb={{ _: '1rem', tablet: '1.5rem' }}
                    >
                        {t('industries.title')}
                    </Typography>
                    {gatsbyBreakpoints.laptopS && (
                        <Box display="flex">
                            <ArrowWrapper onClick={prevSlide}>
                                <ArrowLeft size="medium" color="var(--grey-dark)" />
                            </ArrowWrapper>
                            <ArrowWrapper ml={100} onClick={nextSlide}>
                                <ArrowRight size="medium" color="var(--grey-dark)" />
                            </ArrowWrapper>
                        </Box>
                    )}
                </Box>

                <Slider
                    sliderName="industries"
                    spaceBetween={gatsbyBreakpoints.tablet ? 30 : 10}
                    slidesPerView="auto"
                    showOverflow
                    shouldShrink
                    sliderRef={sliderRef}
                >
                    {slides.map((slide) => (
                        <Slide key={slide.title} {...slide} />
                    ))}
                </Slider>
            </div>
        </Box>
    );
};

export default Industries;

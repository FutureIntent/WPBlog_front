import { useSwiper } from '@hooks';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import chunk from 'lodash.chunk';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import AppLink from '@components/atoms/Link';
import Typography from '@components/atoms/Typography';

import ArrowLeft from '@components/molecules/Icons/ArrowLeft';
import ArrowRight from '@components/molecules/Icons/ArrowRight';
import ArrowRightButton from '@components/molecules/Icons/ArrowRightButton';
import Slider, { SliderPagination } from '@components/molecules/Slider';

const studyLinks = [
    {
        description:
            'Whole-body cryotherapy in rehabilitation of patients with rheumatoid diseases – pilot study',
        link: '#',
    },
    {
        description:
            'Neuromuscular adaptation after repeated exposure to whole-body cryotherapy (−110 °C)',
        link: '#',
    },
    {
        description: 'Whole-body cryotherapy in athletes',
        link: '#',
    },
    {
        description:
            'The effect of prolonged whole-body cryostimulation treatment with different amounts of sessions on chosen pro- and anti-inflammatory cytokines levels in healthy men',
        link: '#',
    },
    {
        description:
            'The effect of prolonged whole-body cryostimulation treatment with different amounts of sessions on chosen pro- and anti-inflammatory cytokines levels in healthy men',
        link: '#',
    },
    {
        description:
            'The effects of whole-body cryotherapy and melatonin supplementation on total antioxidative status and some antioxidative enzymes in multiple sclerosis patients',
        link: '#',
    },
    {
        description:
            'The effects of whole-body cryotherapy and melatonin supplementation on total antioxidative status and some antioxidative enzymes in multiple sclerosis patients',
        link: '#',
    },
    {
        description:
            'Time-course of changes in inflammatory response after whole-body cryotherapy multi exposures following severe exercise',
        link: '#',
    },
    {
        description:
            'Time-course of changes in inflammatory response after whole-body cryotherapy multi exposures following severe exercise',
        link: '#',
    },
    {
        description:
            'whole-body cryotherapy in rehabilitation of patients with rheumatoid diseases – pilot study',
        link: '#',
    },
    {
        description: 'cryotherapy in osteoporosis',
        link: '#',
    },
    {
        description:
            'Time-course of changes in inflammatory response after whole-body cryotherapy multi exposures following severe exercise',
        link: '#',
    },
];

const StudyCard = styled.div`
    box-shadow: ${({ theme }) => theme.shadows.card};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1.25rem;
`;

const DesktopVersion = () => {
    const { t } = useTranslation();

    return (
        <Box display="grid" m="1rem 0 8.5rem" gridGap="1rem 2rem">
            {studyLinks.map((link) => (
                <StudyCard key={link.link}>
                    <Typography variant="caption" color="var(--black-brand)">
                        {link.description}
                    </Typography>
                    <Box display="flex" justifyContent="flex-end" mt="0.75rem">
                        <AppLink to={link.link}>
                            <Typography variant="accent" color="var(--grey-dark)">
                                {t('browseLink')} <ArrowRightButton />
                            </Typography>
                        </AppLink>
                    </Box>
                </StudyCard>
            ))}
        </Box>
    );
};

const MobileVersion = () => {
    const studyLinksInChunks = chunk(studyLinks, 6);
    const { t } = useTranslation();
    const { sliderRef, sliderPaginationRef, shouldRenderSlider, nextSlide, prevSlide } =
        useSwiper();

    return (
        <Box margin="1rem 0 8.5rem">
            {shouldRenderSlider && (
                <Slider
                    sliderName="cryo-studies"
                    spaceBetween={30}
                    showOverflow
                    sliderRef={sliderRef}
                    paginationRef={sliderPaginationRef}
                >
                    {studyLinksInChunks.map((studyLinksPage, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Box display="grid" gridGap="1rem 2rem" key={`page-${index}`}>
                            {studyLinksPage.map((link) => (
                                <StudyCard key={link.description}>
                                    <Typography variant="caption" color="var(--black-brand)">
                                        {link.description}
                                    </Typography>
                                    <Box display="flex" justifyContent="flex-end" mt="0.75rem">
                                        <AppLink to={link.link}>
                                            <Typography variant="accent" color="var(--grey-dark)">
                                                {t('browseLink')} <ArrowRightButton />
                                            </Typography>
                                        </AppLink>
                                    </Box>
                                </StudyCard>
                            ))}
                        </Box>
                    ))}
                </Slider>
            )}
            <Box display="flex" justifyContent="space-between" mt="1rem">
                <SliderPagination
                    pl={{ _: '0', tablet: '2.5rem' }}
                    className="swiper-pagination"
                    ref={sliderPaginationRef}
                />

                <Box display="flex">
                    <Box
                        aria-describedby="Show previous slide"
                        onClick={prevSlide}
                        display="flex"
                        height="100%"
                        justifyContent="flex-end"
                        alignItems="center"
                        mr="4rem"
                    >
                        <ArrowLeft size="medium" color="var(--grey-dark)" />
                    </Box>
                    <Box
                        aria-describedby="Show next slide"
                        onClick={nextSlide}
                        display="flex"
                        height="100%"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <ArrowRight size="medium" color="var(--grey-dark)" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const CryotherapyStudyLinks = () => {
    const { t } = useTranslation();
    const gatsbyBreakpoints = useBreakpoint();

    return (
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }}>
                <Typography variant="caption" color="var(--blue-brand)">
                    {t('mediaTopics')}
                </Typography>
                <Typography variant="h2" color="var(--black-brand)" transformText="uppercase">
                    {t('studyLinks')}
                </Typography>
            </GridChild>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }}>
                {gatsbyBreakpoints.tablet ? <DesktopVersion /> : <MobileVersion />}
            </GridChild>
        </GridParent>
    );
};

export default CryotherapyStudyLinks;

import routeMap from '@utils/routeMap';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import theme from '@theme/configs';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import ArrowRightButton from '@components/molecules/Icons/ArrowRightButton';
import PdfFile from '@components/molecules/Icons/PdfFile';
import Slider from '@components/molecules/Slider';

import { CallToAction } from '@components/organisms/CallToAction';
import AppLink from '@components/atoms/Link';

const StyledBlock = styled(Box)`
    padding-left: 40px;
    position: relative;

    &:after {
        background-color: var(--grey-dark);
        bottom: 0;
        content: '';
        height: 1px;
        position: absolute;
        right: 0;
        width: 100%;

        ${mediaQueries.laptopS} {
            height: 100%;
            left: 0;
            top: 0;
            width: 1px;
        }
    }
`;

const Card = styled(Box)`
    background-color: var(--white);
    box-shadow: ${theme.shadows.card};
    max-width: 1055px;
    overflow: hidden;
    padding: 32px 40px 40px;

    .swiper-slide {
        //height: 100% !important;
    }
`;

const StyledSmallCard = styled(Card)`
    align-items: stretch;
    display: flex;
    height: 100%;
    padding: 1.25rem;
`;

const getCards = ({ studies }: { studies: string[] }) =>
    studies.map((study) => (
        <StyledSmallCard key={study}>
            <Box mr="1.25rem">
                <PdfFile size="xl" color="var(--blue-brand)" />
            </Box>
            <Typography display="inline-block" variant="caption" color="var(--black-brand)">
                {study}
            </Typography>
        </StyledSmallCard>
    ));

const query = graphql`
    query clinicalStudies {
        bg: file(relativePath: { eq: "Cabin/studies.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const ClinicalStudiesAndInfo = () => {
    const { t } = useTranslation();
    const { bg } = useStaticQuery(query);
    const gatsbyBreakpoints = useBreakpoint();
    const studies = [
        t('studies.pdfs.study1'),
        t('studies.pdfs.study2'),
        t('studies.pdfs.study3'),
        t('studies.pdfs.study4'),
    ];

    return (
        <CallToAction image={bg.childImageSharp.gatsbyImageData}>
            <Card
                position="relative"
                top={{ _: '-6rem', tablet: '-11rem', laptopS: 0 }}
                display="flex"
                flexDirection={{ _: 'column', laptopS: 'row' }}
            >
                <Box pr="2rem" width={{ _: "100%", laptopS: "40%"}}>
                    <Typography
                        variant="h3"
                        color="var(--black-brand)"
                        transformText="uppercase"
                        mb="1.5rem"
                        style={{ wordBreak: 'break-word', hyphens: 'auto'}}
                    >
                        {t('studies.heading')}
                    </Typography>
                    <Typography variant="paragraph" color="var(--black-brand)" mb="3rem">
                        {t('studies.caption')}
                    </Typography>
                    <AppLink to={routeMap.contacts}>
                        <Typography
                            variant="accent"
                            color="var(--blue-brand)"
                            mb={{ _: '1.5rem', tablet: '3.6rem', laptopS: '4.6rem' }}
                        >
                            {t('studies.browseStudies')} <ArrowRightButton />
                        </Typography>
                    </AppLink>
                </Box>
                <Box pl={{ _: '0', laptopS: '2rem' }} display="flex" width={{ _: "100%", laptopS: "60%"}} alignItems="center">
                    {gatsbyBreakpoints.tablet ? (
                        <StyledBlock
                            display="grid"
                            gridTemplateColumns="1fr 1fr"
                            gridGap="1.25rem"
                            pl="2rem"
                        >
                            {getCards({ studies })}
                        </StyledBlock>
                    ) : (
                        <StyledBlock width="100%">
                            <Slider slidesPerView={1} spaceBetween={20} showOverflow>
                                {getCards({ studies })}
                            </Slider>
                        </StyledBlock>
                    )}
                </Box>
            </Card>
        </CallToAction>
    );
};

export default ClinicalStudiesAndInfo;

import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const query = graphql`
    query rolledByOurPartnerImage {
        bg: file(relativePath: { eq: "XTone/img/rolled@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const ContentWrapper = styled.div`
    box-shadow: ${({ theme }) => theme.shadows.card};
    padding: 1.25rem;
    width: 100%;

    ${mediaQueries.tablet} {
        padding: 2.75rem 3.4rem;
    }
`;

const ListItem = styled.li`
    padding-bottom: 3rem;
    padding-left: 3rem;
    position: relative;

    &::before {
        content: '';
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: var(--blue-brand);
        position: absolute;
        top: 0.25rem;
        left: -0.3rem;
    }

    &:not(:last-of-type) {
        &::after {
            background-color: var(--blue-brand);
            content: '';
            height: 100%;
            left: 0.32rem;
            position: absolute;
            top: 0.5rem;
            width: 5px;
        }
    }
`;

const RolledByOurPartner = () => {
    const { t } = useTranslation();
    const { bg } = useStaticQuery(query);

    return (
        <BackgroundImage imageData={bg.childImageSharp.gatsbyImageData} overlay="vertical">
            <Box display="flex" alignItems="center">
                <GridParent>
                    <GridChild gridColumn={{ _: 'span 12', laptopS: '4/span 6' }}>
                        <Box
                            mt={{ _: '4.5rem', tablet: '6.875rem' }}
                            mb={{ _: '1.75rem', laptopS: '4rem' }}
                        >
                            <Typography
                                variant="caption"
                                color="var(--white)"
                                transformText="uppercase"
                            >
                                {t('rolledByPartner.caption')}
                            </Typography>
                            <Typography
                                variant="h2"
                                color="var(--white)"
                                mb={{ _: '1.75rem', laptopS: '1rem' }}
                            >
                                {t('rolledByPartner.heading')}
                            </Typography>
                            <Typography variant="accent" as="p" color="var(--white)">
                                {t('rolledByPartner.subHeading')}
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            mb={{ _: '3.1rem', tablet: '11.5rem', laptopS: '18.75rem' }}
                        >
                            <ContentWrapper className="backdrop-blur-dark">
                                <ul>
                                    <ListItem>
                                        <Typography variant="h3" color="var(--white)">
                                            {t('rolledByPartner.point1.title')}
                                        </Typography>
                                        <Typography variant="paragraph" color="var(--white)">
                                            {t('rolledByPartner.point1.caption')}
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="h3" color="var(--white)">
                                            {t('rolledByPartner.point2.title')}
                                        </Typography>
                                        <Typography variant="paragraph" color="var(--white)">
                                            {t('rolledByPartner.point2.caption')}
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="h3" color="var(--white)">
                                            {t('rolledByPartner.point3.title')}
                                        </Typography>
                                        <Typography variant="paragraph" color="var(--white)">
                                            {t('rolledByPartner.point3.caption')}
                                        </Typography>
                                    </ListItem>
                                </ul>
                            </ContentWrapper>
                        </Box>
                    </GridChild>
                </GridParent>
            </Box>
        </BackgroundImage>
    );
};

export default RolledByOurPartner;

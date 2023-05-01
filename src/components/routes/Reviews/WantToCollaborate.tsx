import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import Form from '@components/molecules/Form/Form';

const query = graphql`
    query wantToCallaborateImage {
        img: file(relativePath: { eq: "Faq/bg.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const WantToCollaborate = () => {
    const { t } = useTranslation();
    const { img } = useStaticQuery(query);

    return (
        <BackgroundImage imageData={img.childImageSharp.gatsbyImageData} overlay="vertical">
            <Box width="100%" minHeight="935px" height="100%" pb="8rem" pt="5rem">
                <GridParent>
                    <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Typography
                                variant="h2"
                                color="var(--white)"
                                textAlign="center"
                                mb={{ _: '0.25rem' }}
                            >
                                {t('collaborate.heading')}
                            </Typography>
                            <Typography
                                variant="paragraph"
                                color="var(--white)"
                                textAlign="center"
                                mb={{ _: '1rem' }}
                            >
                                {t('collaborate.caption')}
                            </Typography>
                            <Button
                                variant="secondary"
                                borderColor="var(--white)"
                                mb={{ _: '3.5rem' }}
                            >
                                <Typography
                                    variant="accent"
                                    color="var(--white)"
                                    textAlign="center"
                                >
                                    {t('goToPrices')}
                                </Typography>
                            </Button>
                        </Box>
                    </GridChild>
                    <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
                        <Form noMargin />
                    </GridChild>
                </GridParent>
            </Box>
        </BackgroundImage>
    );
};

export default WantToCollaborate;

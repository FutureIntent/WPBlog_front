import routeMap from '@utils/routeMap';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import ArrowRightButton from '@components/molecules/Icons/ArrowRightButton';

import { CallToAction } from '@components/organisms/CallToAction';

import Card from '@components/templates/BuyCryoCTA/Card';
import AppLink from '@components/atoms/Link';

const query = graphql`
    query businessSolutionImages {
        img: file(relativePath: { eq: "Cabin/solutions@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const BusinessSolutions = () => {
    const { t } = useTranslation();
    const { img } = useStaticQuery(query);

    return (
        <CallToAction image={img.childImageSharp.gatsbyImageData} flipped>
            <Card>
                <Box display="flex" flexDirection="column" pb={55}>
                    <Typography
                        variant="h2"
                        color="var(--black-brand)"
                        transformText="uppercase"
                        mb="1.5rem"
                    >
                        {t('businessSolutions.heading')}
                    </Typography>
                    <Typography variant="paragraph" color="var(--black-brand)" mb="1rem">
                        {t('businessSolutions.line1')}
                    </Typography>
                    <Typography variant="paragraph" color="var(--black-brand)" mb="1rem">
                        {t('businessSolutions.line2')}
                    </Typography>
                    <Typography variant="paragraph" color="var(--black-brand)" mb="3rem">
                        {t('businessSolutions.line3')}
                    </Typography>
                    <AppLink to={routeMap.contacts}>
                        <Typography
                            variant="accent"
                            color="var(--blue-brand)"
                            mb={{ _: '1.5rem', tablet: '3.6rem', laptopS: '4.6rem' }}
                        >
                            {t('contactUs')} <ArrowRightButton />
                        </Typography>
                    </AppLink>
                </Box>
            </Card>
        </CallToAction>
    );
};

export default BusinessSolutions;

import FranchiseSchema from '@components/routes/BusinessAndCryo/FranchiseSchema';
import SchemeDescription from '@components/routes/BusinessAndCryo/SchemeDescription';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const OffsetBgImg = styled(GridChild)`
    height: 120%;
    margin-top: 2rem;
    width: 100%;

    ${mediaQueries.tablet} {
        margin-top: -2rem;
        position: absolute;

        .gatsby-image-wrapper {
            position: unset;
        }
    }
`;

const query = graphql`
    query howWeWorkBlockImages {
        supportBg: file(relativePath: { eq: "homePage/support_bg.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const HowWeWork = () => {
    const { t } = useTranslation();
    const { supportBg } = useStaticQuery(query);
    const gatsbyBreakpoints = useBreakpoint();

    return (
        <>
            <Typography
                variant="h1"
                as="h2"
                color="var(--black-brand)"
                m={{ _: '4.5rem 0 2.6rem', tablet: '6rem 0 3.625rem' }}
                textAlign="center"
            >
                {t('howWeWork.heading')}
            </Typography>
            <GridParent noGutter>
                <GridChild
                    gridColumn={{ _: 'span 12', tablet: '2/ span 10', laptopS: '1/span 6' }}
                    gridRow={{ _: 3, tablet: 1 }}
                >
                    <FranchiseSchema />
                </GridChild>

                {gatsbyBreakpoints.laptopS && (
                    <GridChild
                        gridColumn={{ _: 'span 12', tablet: '2/ span 10', laptopS: '7/ span 4' }}
                        gridRow={{ _: 1, tablet: 2, laptopS: 1 }}
                    >
                        <SchemeDescription />
                    </GridChild>
                )}

                <OffsetBgImg
                    gridColumn={{ _: 'span 12', tablet: '1/ span 9', laptopS: '1/span 4' }}
                    gridRow={{ _: 2, tablet: 1 }}
                >
                    <GatsbyImage image={supportBg.childImageSharp.gatsbyImageData} alt="support" />
                </OffsetBgImg>
            </GridParent>

            {!gatsbyBreakpoints.laptopS && (
                <GridParent>
                    <GridChild gridColumn="2/ span 10">
                        <SchemeDescription />
                    </GridChild>
                </GridParent>
            )}
        </>
    );
};

export default HowWeWork;

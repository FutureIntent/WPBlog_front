import FranchiseSchema from '@components/routes/StartupCost/FranchiseSchema';
import SchemeDescription from '@components/routes/StartupCost/SchemeDescription';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Box from '@components/atoms/Box';

const OffsetBgImg = styled(GridChild)`
    height: 100%;
    margin-top: 2rem;
    width: 100%;

    ${mediaQueries.laptop} {
        margin-top: -2rem;
        position: absolute;

        .gatsby-image-wrapper {
            position: unset;
        }
    }
`;

const query = graphql`
    query startUpSchemaImages {
        handshakeStartup: file(relativePath: { eq: "startup/handshake.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const FranchiseWrapper = styled(GridChild)`
    align-items: center;
    display: flex;
    margin-top: -20%;

    ${mediaQueries.laptop} {
        margin-top: 0;
    }
`;

const HowWeWork = () => {
    const { handshakeStartup } = useStaticQuery(query);
    const gatsbyBreakpoints = useBreakpoint();

    return (
        <Box mb={140}>
            <GridParent noGutter>
                <FranchiseWrapper
                    gridColumn={{ _: 'span 12', tablet: '2/ span 10', laptop: '2/span 4' }}
                    gridRow={{ _: 2, laptop: 1 }}
                 >
                    <FranchiseSchema />
                </FranchiseWrapper>

                {gatsbyBreakpoints.laptopS && (
                <GridChild
                    gridColumn={{ _: 'span 12', laptopS: '3/ span 8', laptop: '7/ span 4' }}
                    gridRow={{ _: 3, laptop: 1}}
                    my={120}
                    >
                    <SchemeDescription />
                </GridChild>
                 )}

                <OffsetBgImg
                    gridColumn={{ _: 'span 12',laptop: '1/span 4' }}
                    gridRow={1}
                >
                    <GatsbyImage style={{ maxHeight: 720}} image={handshakeStartup.childImageSharp.gatsbyImageData} alt="support" />
                </OffsetBgImg>
            </GridParent>

            {!gatsbyBreakpoints.laptopS && (
                <GridParent>
                    <GridChild gridColumn="2/ span 10">
                        <SchemeDescription />
                    </GridChild>
                </GridParent>
            )}
        </Box>
    );
};

export default HowWeWork;

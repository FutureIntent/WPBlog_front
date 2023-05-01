import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import GridChild from '@components/atoms/GridChild';

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
    query supportBandC {
        supportBg: file(relativePath: { eq: "homePage/support_bg.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 601, height: 363)
            }
        }
    }
`;

const SupportBgImage = ({ ...rest }): ReactElement | null => {
    const { supportBg } = useStaticQuery(query);

    return (
        <OffsetBgImg
            {...rest}
            gridColumn={{ _: 'span 12', tablet: '4/ span 9', laptopS: '9/ span 4' }}
            gridRow={{ _: 2, tablet: 1 }}
        >
            <GatsbyImage
                style={{ height: '100%' }}
                image={supportBg.childImageSharp.gatsbyImageData}
                alt="cryo mask procedure"
            />
        </OffsetBgImg>
    );
};

export default SupportBgImage;

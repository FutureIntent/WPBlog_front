import Tabs from '@components/routes/XCryoOriginal/BodyBenefits/Tabs';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useRef } from 'react';
import styled from 'styled-components';

import AspectRatio from '@components/atoms/AspectRatio';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';

import { BackgroundSlider } from '@components/molecules/BackgroundSlider';

const StyledGridParent = styled(GridParent)`
    min-height: 600px;
    z-index: 1;
`;

const query = graphql`
    query bodyBenefitImages {
        beauty: file(relativePath: { eq: "homePage/cryotherapy/tabs/beauty@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        health: file(relativePath: { eq: "homePage/cryotherapy/tabs/health@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        sports: file(relativePath: { eq: "homePage/cryotherapy/tabs/sports@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        wellness: file(relativePath: { eq: "homePage/cryotherapy/tabs/wellness@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const BodyBenefits = () => {
    const sliderRef = useRef<any>(null);
    const { tablet } = useBreakpoint();
    const { beauty, health, sports, wellness } = useStaticQuery(query);
    const aspectRatio = tablet ? 1920 / 1080 : 320 / 600;

    const bgSlides = [
        {
            img: beauty.childImageSharp.gatsbyImageData,
            alt: 'Beauty background',
        },
        {
            img: health.childImageSharp.gatsbyImageData,
            alt: 'Health background',
        },
        {
            img: sports.childImageSharp.gatsbyImageData,
            alt: 'Sports background',
        },
        {
            img: wellness.childImageSharp.gatsbyImageData,
            alt: 'Wellness background',
        },
    ];

    return (
        <StyledGridParent as="section" pt="5.75rem" noGap noGutter>
            <BackgroundSlider sliderRef={sliderRef} images={bgSlides} />

            <GridChild gridColumn="1/ span 12" gridRow="1 / 1">
                <AspectRatio ratio={aspectRatio}>
                    <Tabs sliderRef={sliderRef} />
                </AspectRatio>
            </GridChild>
        </StyledGridParent>
    );
};

export default BodyBenefits;

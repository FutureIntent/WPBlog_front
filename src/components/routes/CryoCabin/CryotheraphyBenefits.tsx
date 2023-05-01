import Tabs from '@components/routes/CryoCabin/CryoTheraphyBenefits/Tabs';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useRef } from 'react';
import styled from 'styled-components';

import AspectRatio from '@components/atoms/AspectRatio';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';

import { BackgroundSlider } from '@components/molecules/BackgroundSlider';

const query = graphql`
    query benefitsCryoImg {
        health: file(relativePath: { eq: "Cabin/cryo_benefit_health@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        sports: file(relativePath: { eq: "Cabin/cryo_benefit_sports@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        wellness: file(relativePath: { eq: "Cabin/cryo_benefit_beauty@2x.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const StyledGridParent = styled(GridParent)`
    z-index: 1;
`;

const CryotheraphyBenefits = () => {
    const { health, sports, wellness } = useStaticQuery(query);
    const sliderRef = useRef<any>(null);
    const { tablet } = useBreakpoint();
    const aspectRatio = tablet ? 1920 / 1080 : 320 / 700;

    const bgSlides = [
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
        <StyledGridParent as="section" noGap noGutter>
            <BackgroundSlider sliderRef={sliderRef} images={bgSlides} />

            <GridChild gridColumn="1/ span 12" gridRow="1 / 1">
                <AspectRatio ratio={aspectRatio}>
                    <Tabs sliderRef={sliderRef} />
                </AspectRatio>
            </GridChild>
        </StyledGridParent>
    );
};

export default CryotheraphyBenefits;

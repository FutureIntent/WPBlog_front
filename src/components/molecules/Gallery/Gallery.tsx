import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';

const galleryQuery = graphql`
    query Gallery {
        images: allFile(
            filter: { relativeDirectory: { regex: "/web_gallery/" } }
            sort: { order: ASC, fields: name }
        ) {
            edges {
                node {
                    name
                    id
                    relativePath
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;

const StyledBox = styled(Box)`
    > div {
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
        width: 100%;
    }

    .gatsby-image-wrapper {
        height: 200px;
        width: 100%;
    }
`;

const StyledGridParent = styled(GridParent)`
    width: 100%;
`;

const Gallery = () => {
    const { images } = useStaticQuery(galleryQuery);
    const row1 = [6, 2, 4, 3, 2, 4, 3, 2, 4, 4, 2];

    return (
        <StyledBox maxHeight={600} height="100%" width="100%" overflow="hidden">
            <SimpleReactLightbox>
                <SRLWrapper key="gallery">
                    <StyledGridParent noGutter gridGap={4}>
                        {images?.edges.map((e: any, index: number) => (
                            <GridChild gridColumn={`span ${row1[index % 11]}`} key={e.node.name}>
                                <GatsbyImage
                                    image={e.node.childImageSharp.gatsbyImageData}
                                    alt={e.node.name}
                                />
                            </GridChild>
                        ))}
                    </StyledGridParent>
                </SRLWrapper>
            </SimpleReactLightbox>
        </StyledBox>
    );
};

export default Gallery;

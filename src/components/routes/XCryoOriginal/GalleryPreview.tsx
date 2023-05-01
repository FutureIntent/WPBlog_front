import { ImageList, ImageListItem } from '@mui/material';
import { Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import ArrowRightButton from '@components/molecules/Icons/ArrowRightButton';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const StyledLink = styled(Link)`
    align-items: center;
    display: inline-flex;
    justify-content: center;
    margin-top: 2rem;
`;

const GalleryPreview = ({ images }: { images: any }) => {
    const gatsbyBreakpoints = useBreakpoint();
    const { t } = useTranslation();
    const { img1, img2, img3, img4, img5, img6, img7 } = images;

    return (
        <Box as="section" pt="8rem" overflow="hidden">
            <Typography variant="h1" as="h2" color="var(--brand-black)" mb="6rem" textAlign="center">
                {t('productName')} {t('gallery')}
            </Typography>
            <SimpleReactLightbox>
                <SRLWrapper key="xcryoGallery">
                    <ImageList
                        gap={0}
                        variant="quilted"
                        cols={12}
                        rowHeight={gatsbyBreakpoints.tablet ? 360 : 155}
                    >
                        <ImageListItem
                            cols={6}
                            rows={1}
                            data-sal="slide-right"
                            data-sal-easing="ease-out-quart"
                            data-sal-duration={800}
                        >
                            <GatsbyImage
                                style={{ width: '100%', height: '100%' }}
                                image={img1.childImageSharp.gatsbyImageData}
                                alt={`${t('galleryImage')} 1`}
                            />
                        </ImageListItem>
                        <ImageListItem
                            cols={2}
                            rows={1}
                            data-sal="slide-down"
                            data-sal-easing="ease-out-quart"
                            data-sal-delay={100}
                            data-sal-duration={800}
                        >
                            <GatsbyImage
                                style={{ width: '100%', height: '100%' }}
                                image={img2.childImageSharp.gatsbyImageData}
                                alt={`${t('galleryImage')} 2`}
                            />
                        </ImageListItem>
                        <ImageListItem
                            cols={4}
                            rows={1}
                            data-sal="slide-left"
                            data-sal-easing="ease-out-quart"
                            data-sal-delay={200}
                            data-sal-duration={800}
                        >
                            <GatsbyImage
                                style={{ width: '100%', height: '100%' }}
                                image={img3.childImageSharp.gatsbyImageData}
                                alt={`${t('galleryImage')} 3`}
                            />
                        </ImageListItem>
                        <ImageListItem
                            cols={3}
                            rows={1}
                            data-sal="slide-left"
                            data-sal-easing="ease-out-quart"
                            data-sal-delay={300}
                            data-sal-duration={800}
                        >
                            <GatsbyImage
                                style={{ width: '100%', height: '100%' }}
                                image={img4.childImageSharp.gatsbyImageData}
                                alt={`${t('galleryImage')} 4`}
                            />
                        </ImageListItem>
                        <ImageListItem
                            cols={2}
                            rows={1}
                            data-sal="slide-left"
                            data-sal-easing="ease-out-quart"
                            data-sal-delay={400}
                            data-sal-duration={800}
                        >
                            <GatsbyImage
                                style={{ width: '100%', height: '100%' }}
                                image={img5.childImageSharp.gatsbyImageData}
                                alt={`${t('galleryImage')} 5`}
                            />
                        </ImageListItem>
                        <ImageListItem
                            cols={4}
                            rows={1}
                            data-sal="slide-left"
                            data-sal-easing="ease-out-quart"
                            data-sal-delay={500}
                            data-sal-duration={800}
                        >
                            <GatsbyImage
                                style={{ width: '100%', height: '100%' }}
                                image={img6.childImageSharp.gatsbyImageData}
                                alt={`${t('galleryImage')} 6`}
                            />
                        </ImageListItem>
                        <ImageListItem
                            cols={3}
                            rows={1}
                            data-sal="slide-right"
                            data-sal-easing="ease-out-quart"
                            data-sal-delay={600}
                            data-sal-duration={800}
                        >
                            <GatsbyImage
                                style={{ width: '100%', height: '100%' }}
                                image={img7.childImageSharp.gatsbyImageData}
                                alt={`${t('galleryImage')} 7`}
                            />
                        </ImageListItem>
                    </ImageList>
                </SRLWrapper>
            </SimpleReactLightbox>

            <Box display="flex" justifyContent="center">
                <StyledLink to="/info/gallery">
                    <Typography variant="accent" color="var(--blue-brand)" mr="0.5rem">
                        {t('browseGallery')}
                    </Typography>
                    <ArrowRightButton color="var(--blue-brand)" />
                </StyledLink>
            </Box>
        </Box>
    );
};

export default GalleryPreview;

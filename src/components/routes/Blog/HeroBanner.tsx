import { IGatsbyImageData } from 'gatsby-plugin-image';

import AspectRatio from '@components/atoms/AspectRatio';
import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const HeroBanner = ({
    title,
    slug,
    description,
    bg,
    image_url
}: {
    title: string;
    slug: string;
    description?: string;
    bg?: IGatsbyImageData;
    image_url?: string;
}) => (
    <section>
        <AspectRatio ratio={3.2}>
            <BackgroundImage imageData={bg} image_url={image_url} overlay="dark">
                <GridParent>
                    <GridChild gridColumn="4 / span 6">
                        <Box
                            minHeight={{ _: '568px', tablet: '620px' }}
                            height="auto"
                            width="100%"
                            display="flex"
                            placeItems="center"
                            maxHeight="100vh"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                height="calc(100% + var(--header-height))"
                                width="100%"
                            >
                                <Typography
                                    variant="caption"
                                    color="var(--grey-dark)"
                                    transformText="uppercase"
                                >
                                    info / Cryo blogs / {slug.replaceAll('-', ' ')}
                                </Typography>
                                <Typography
                                    variant="h1"
                                    color="var(--white)"
                                    display="inline-block"
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    variant="h3"
                                    color="var(--white)"
                                    textAlign="center"
                                    mb="2rem"
                                >
                                    {description}
                                </Typography>
                            </Box>
                        </Box>
                    </GridChild>
                </GridParent>
            </BackgroundImage>
        </AspectRatio>
    </section>
);

export default HeroBanner;

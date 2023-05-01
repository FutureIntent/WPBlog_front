import { GatsbyImage } from 'gatsby-plugin-image';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const ImageRenderer = (img: any) => {
    const { alt, asset, caption } = img;

    return (
        <Box my="2.5rem">
            <GatsbyImage image={asset.gatsbyImageData} alt={alt} />
            <Typography variant="caption" color="var(--grey-dark)" mt="1.25rem">
                {caption}
            </Typography>
        </Box>
    );
};

export default ImageRenderer;

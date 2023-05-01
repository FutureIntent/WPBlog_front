import AspectRatio from '@components/atoms/AspectRatio';
import Box from '@components/atoms/Box';
import { Overlay } from '@components/atoms/Overlay';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Poster = ({ featuredImage, posterAspectRatio, title }: { featuredImage: any, posterAspectRatio: number, title: any }) => {
    const image = getImage(featuredImage);
    return(
        <Box width="100%" position="relative" overflow="hidden">
            <Overlay />
            <AspectRatio ratio={posterAspectRatio}>
                {image && <GatsbyImage
                    style={{ transform: 'scale(1.5)', height: '100%' }}
                    image={image}
                    alt={title.rendered}
                />}
            </AspectRatio>
        </Box>
    );
}
export default Poster;

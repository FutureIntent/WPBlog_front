import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const Slide = ({ title, poster }: { title: string; poster: IGatsbyImageData }) => {
    const { tablet } = useBreakpoint();

    return (
        <Box minHeight={{ _: '146px', tablet: '170px' }} height="100%" width={tablet ? 280 : 240}>
            <BackgroundImage imageData={poster} overlay="verticalReverse">
                <Box
                    p="1.25rem"
                    pb="2.5rem"
                    height="100%"
                    display="grid"
                    placeItems="end start"
                    width="100%"
                >
                    <Typography variant="h3" color="var(--white)">
                        {title}
                    </Typography>
                </Box>
            </BackgroundImage>
        </Box>
    );
};

export default Slide;

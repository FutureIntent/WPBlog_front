import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactElement } from 'react';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

interface CardProps {
    imageData: IGatsbyImageData;
    title?: string;
    icon?: ReactElement;
    caption?: string;
}

const Card = ({ imageData, title, icon, caption }: CardProps) => (
    <BackgroundImage imageData={imageData} overlay="vertical">
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            p={{ _: '1.25rem', tablet: '2.5rem' }}
        >
            {icon}
            {title && (
                <Typography
                    variant="h2"
                    color="var(--white)"
                    mt="1.25rem"
                    textAlign="center"
                    transformText="uppercase"
                >
                    {title}
                </Typography>
            )}
            {caption && (
                <Box maxWidth={{ _: '14.375rem', tablet: '19rem', laptopS: '27.5rem' }}>
                    <Typography variant="paragraph" color="var(--white)" textAlign="center">
                        {caption}
                    </Typography>
                </Box>
            )}
        </Box>
    </BackgroundImage>
);

export default Card;

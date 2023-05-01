import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import AspectRatio from '@components/atoms/AspectRatio';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const TabPanelContent = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    width: 100%;

    ${mediaQueries.tablet} {
        flex-direction: row;
        gap: 3.5rem;
    }
`;

const TabHeading = styled(Typography)`
    display: inline-block;
    margin-bottom: 1.6rem;
    padding-bottom: 0.4rem;
    position: relative;

    &:after {
        background-color: var(--blue-brand);
        bottom: 0;
        content: '';
        height: 4px;
        left: 0;
        position: absolute;
        width: 80%;
    }
`;

const TabContent = ({
    title,
    description,
    poster,
}: {
    title: string;
    description: string;
    poster: IGatsbyImageData;
}) => {
    const aspectRatio = 590 / 300;

    return (
        <Box p="2rem 0 4rem" display="flex" width="100%">
            <TabPanelContent>
                <Box
                    flex={1}
                    maxWidth={435}
                    data-sal="slide-right"
                    data-sal-easing="ease-out-quart"
                    data-sal-duration={800}
                >
                    <TabHeading
                        variant="h3"
                        color="var(--white)"
                        marginTop={{ _: '2rem', tablet: '0' }}
                    >
                        {title}
                    </TabHeading>
                    <Typography variant="paragraph" color="var(--white)">
                        {description}
                    </Typography>
                </Box>
                <Box
                    flex={1}
                    maxWidth={590}
                    data-sal="slide-left"
                    data-sal-easing="ease-out-quart"
                    data-sal-duration={800}
                >
                    <AspectRatio ratio={aspectRatio}>
                        <GatsbyImage
                            style={{ height: '100%' }}
                            imgStyle={{ objectPosition: 'right' }}
                            image={poster}
                            alt="sports"
                        />
                    </AspectRatio>
                </Box>
            </TabPanelContent>
        </Box>
    );
};

export default TabContent;

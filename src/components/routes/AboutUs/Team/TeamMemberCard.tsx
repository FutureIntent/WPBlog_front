import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import LinkedIn from '@components/molecules/Icons/LinkedIn';

const Card = styled.div`
    max-width: 190px;

    &:not(:last-of-type) {
        margin-right: 1.875rem;
    }

    ${mediaQueries.tablet} {
        max-width: 280px;
    }
`;

interface TeamMemberCardProps {
    photo: IGatsbyImageData;
    position: string;
    name: string;
}

const TeamMemberCard = ({ photo, position, name }: TeamMemberCardProps) => (
    <Card className="backdrop-blur-dark">
        <GatsbyImage style={{ width: '100%' }} image={photo} alt="Member" />
        <Box p="0.75rem 1.75rem 1.25rem 1.75rem">
            <Typography variant="caption" color="var(--grey-dark)">
                {position}
            </Typography>
            <Typography variant={{ _: 'accent', tablet: 'h3' }} color="var(--white)" mb="0.5rem">
                {name}
            </Typography>
            <LinkedIn size={{ _: 'medium', tablet: 'medium3' }} />
        </Box>
    </Card>
);

export default TeamMemberCard;

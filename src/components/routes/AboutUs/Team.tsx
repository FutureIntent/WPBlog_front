import TeamMemberCard from '@components/routes/AboutUs/Team/TeamMemberCard';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import BackgroundImage from '@components/atoms/BackgroundImage';
import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import Slider from '@components/molecules/Slider';

const SliderWrapper = styled(Box)`
    .swiper-slide {
        width: auto !important;
    }
`;

const query = graphql`
    query teamBlockImages {
        bg: file(relativePath: { eq: "AboutUs/about_bg.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        member: file(relativePath: { eq: "Reviews/reviewer_1.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const Team = () => {
    const { t } = useTranslation();
    const gatsbyBreakpoints = useBreakpoint();
    const { bg, member } = useStaticQuery(query);

    const Members = [
        {
            position: 'CEO',
            name: 'Longname Longsurname',
            photo: member.childImageSharp.gatsbyImageData,
        },
        {
            position: 'CEO',
            name: 'Longname Longsurname',
            photo: member.childImageSharp.gatsbyImageData,
        },
        {
            position: 'CEO',
            name: 'Longname Longsurname',
            photo: member.childImageSharp.gatsbyImageData,
        },
        {
            position: 'CEO',
            name: 'Longname Longsurname',
            photo: member.childImageSharp.gatsbyImageData,
        },
    ];

    return (
        <Box
            position="relative"
            height={{ _: '500px', tablet: '1080px' }}
            mt={{ _: '6.25rem', tablet: 0 }}
            overflow="hidden"
        >
            <BackgroundImage imageData={bg.childImageSharp.gatsbyImageData} overlay="dark">
                <Box width="100%" top={0} p={{ _: ' 2.5rem 1rem 4.375rem', tablet: '3.5rem' }}>
                    <Typography
                        variant="h1"
                        as="h2"
                        color="var(--white)"
                        textAlign="center"
                        mb={{ _: '1.5rem', tablet: '3.25rem' }}
                    >
                        {t('Team')}
                    </Typography>
                    <SliderWrapper
                        display={{ _: 'block', laptopS: 'flex' }}
                        justifyContent={{ _: 'flex-start', laptopS: 'center' }}
                    >
                        <Slider
                            sliderName="team-members"
                            spaceBetween={20}
                            slidesPerView="auto"
                            enabled={!gatsbyBreakpoints.laptopS}
                            showOverflow
                        >
                            {Members.map((oneMember) => (
                                <TeamMemberCard
                                    key={oneMember.name}
                                    position={oneMember.position}
                                    name={oneMember.name}
                                    photo={oneMember.photo}
                                />
                            ))}
                        </Slider>
                    </SliderWrapper>
                </Box>
            </BackgroundImage>
        </Box>
    );
};

export default Team;

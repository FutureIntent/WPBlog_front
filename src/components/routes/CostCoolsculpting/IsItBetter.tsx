import { useTranslation } from 'react-i18next';
import GridParent from '@components/atoms/GridParent';
import GridChild from '@components/atoms/GridChild';
import Card from '@components/atoms/Card';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Box from '@components/atoms/Box';
import React, { ReactNode } from 'react';
import Typography from '@components/atoms/Typography';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import styled from 'styled-components';
import { getClampValue } from '@utils/helpers';

const ContentCard = ({ img, children, reverse = false }: { img: IGatsbyImageData; children: ReactNode; reverse?: boolean}) => {
    const { laptopS } = useBreakpoint();
    let childGridColumns = [];

    if(reverse){
        childGridColumns = [{ _: "span 12", laptopS: "span 3", laptop: "span 3"}, { _: "span 12", laptopS: "4/ span 9", laptop: "4/ span 5"}];
    } else {
        childGridColumns = [{ _: "span 12", laptopS: "10/ span 3", laptop: "6/ span 3"}, { _: "span 12", laptopS: "span 9", laptop: "span 5"}];
    }

    return (
        <Card>
            <GridParent noGutter gridTemplateColumns={{ _: undefined, laptop: "repeat(8, 1fr)" }}>
                <GridChild gridColumn={childGridColumns[0]} gridRow={1} >
                    <Box position="relative" height="100%">
                        <GatsbyImage imgStyle={{ width: '100%'}} style={{ maxHeight: laptopS ? undefined : 180, height: "100%",width: "100%"}}  image={img} alt="XTone device" />
                    </Box>
                </GridChild>
                <GridChild gridRow={{ _: 2, laptopS: 1 }} gridColumn={childGridColumns[1]}>{children}</GridChild>
            </GridParent>
        </Card>
    );
}

const query = graphql`
    query isItBetterImg {
        side: file(relativePath: { eq: "CostCoolsculpting/chair_side.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        top: file(relativePath: { eq: "CostCoolsculpting/chair_top.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const ListItem = styled.div`
    padding-left: 34px;
    position: relative;

    &:after {
        background-color: var(--blue-brand);
        border-radius: 50%;
        content: '';
        height: 9px;
        left: 15px;
        position: absolute;
        top:7px;
        width: 9px;
    }
`;

const IsItBetter = () => {
    const { t } = useTranslation();
    const { side, top } = useStaticQuery(query);
    const listItems = [
            t('advantage.listItems.youWill'),
            t('advantage.listItems.efficiency'),
            t('advantage.listItems.guarantee'),
    ];

    return (
        <GridParent mb={140}>
            <GridChild gridColumn={{ _: "span 12", laptop: "3/ span 8"}} gridRow={1} mb={60}>
                <ContentCard img={side.childImageSharp.gatsbyImageData}>
                    <Box p={`${getClampValue('15px', '40px')} ${getClampValue('20px', '60px')}  ${getClampValue('40px', '50px')}`}>
                        <Typography variant="h3" color="var(-grey-dark)" mb={20}>{t('isItBetter.title')}</Typography>
                        <Typography variant="paragraph" color="var(-brand-black)" mb={20}>{t('isItBetter.block1')}</Typography>
                        <Typography variant="paragraph" color="var(-brand-black)" mb={20}>{t('isItBetter.block2')}</Typography>
                        <Typography variant="paragraph" color="var(-brand-black)">{t('isItBetter.block3')}</Typography>
                    </Box>
                </ContentCard>
            </GridChild>

            <GridChild gridColumn={{ _: "span 12", laptop: "3/ span 8"}} gridRow={2}>
                <ContentCard img={top.childImageSharp.gatsbyImageData} reverse>
                    <Box p={`${getClampValue('15px', '40px')} ${getClampValue('20px', '60px')}  ${getClampValue('40px', '50px')}`}>
                        <Typography variant="h3" color="var(-grey-dark)" mb={20}>{t('advantage.title')}</Typography>
                        <Typography variant="paragraph" color="var(-brand-black)" mb={20}>{t('advantage.text')}</Typography>
                        <ul>
                            <Typography variant="paragraph" color="var(-brand-black)" mb={20}>{t('advantage.listTitle')}</Typography>
                            <Box display="flex" flexDirection="column" gridGap={15}>
                                {listItems.map((item) => (
                                    <ListItem key={item}>
                                        <Typography variant="paragraph2" color="var(-brand-black)">{item}</Typography>
                                    </ListItem>
                            ))}
                            </Box>
                        </ul>
                        <Typography variant="paragraph" color="var(-brand-black)" mt={20}>{t('advantage.allYouHaveToDo')}</Typography>
                    </Box>
                </ContentCard>
            </GridChild>
        </GridParent>
    )
}

export default IsItBetter;

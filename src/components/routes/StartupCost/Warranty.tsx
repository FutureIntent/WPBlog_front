import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Manual from '@components/molecules/Icons/Manual';
import Tutorial from '@components/molecules/Icons/Tutorial';
import Service from '@components/molecules/Icons/Service';
import SupportIcon from '@components/molecules/Icons/Support';
import Typography from '@components/atoms/Typography';
import Box from '@components/atoms/Box';
import IconItem from '@components/routes/Home/Support/IconItem';
import { useTranslation } from 'react-i18next';
import WarrantyDescription from '@components/routes/StartupCost/WarrantyDescription';

const OffsetBgImg = styled(GridChild)`
    height: 100%;
    margin-top: 2rem;
    width: 100%;

    ${mediaQueries.laptop} {
        margin-top: -2rem;
        position: absolute;

        .gatsby-image-wrapper {
            position: unset;
        }
    }
`;

const query = graphql`
    query startUpWarrantyImages {
        startupWarranty: file(relativePath: { eq: "homePage/support_bg.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const FranchiseWrapper = styled(GridChild)`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: -20%;

    ${mediaQueries.laptop} {
        margin-top: 0;
    }
`;

const SupportCard = styled.div`
    background-color: var(--white);
    box-shadow: ${({ theme }) => theme.shadows.card};
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: -2rem;
    padding: 1rem;
    position: relative;
    z-index: ${({ theme }) => theme.zIndices.stepUp};

    ${mediaQueries.tablet} {
        margin-top: 0;
        padding: 2.5rem 1.75rem;
        width: 590px;
    }
`;

const Warranty = () => {
    const { t } = useTranslation();
    const { startupWarranty } = useStaticQuery(query);
    const gatsbyBreakpoints = useBreakpoint();
    const listItems = [
        {
            icon: <Manual />,
            text: t('warranty.list.item1'),
        },
        {
            icon: <Tutorial />,
            text: t('warranty.list.item2'),
        },
        {
            icon: <Service />,
            text: t('warranty.list.item3'),
        },
        {
            icon: <SupportIcon />,
            text: t('warranty.list.item4'),
        },
    ];

    return (
        <Box mb={140}>
            <GridParent noGutter>
                <FranchiseWrapper
                    gridColumn={{ _: 'span 12', tablet: '2/ span 10', laptop: '8/span 4' }}
                    gridRow={{ _: 2, laptop: 1 }}
                 >
                    <SupportCard
                        data-sal="slide-right"
                        data-sal-easing="ease-out-quart"
                        data-sal-delay={100}
                        data-sal-duration={1000}
                    >
                        <Typography variant="accent" color="var(--blue-brand)">
                            {t(`warranty.titleRight`)}
                        </Typography>

                        <Box
                            display="grid"
                            gridTemplateColumns="repeat( auto-fit, minmax(250px, 1fr) )"
                            gridGap={{ _: '0.4rem', tablet: '1.25rem' }}
                            mt="0.7rem"
                        >
                            {listItems.map((item) => (
                                <IconItem key={item.text} {...item} />
                            ))}
                        </Box>
                    </SupportCard>
                </FranchiseWrapper>

                {gatsbyBreakpoints.laptopS && (
                    <GridChild
                        gridColumn={{ _: 'span 12', laptopS: '3/ span 8', laptop: '2/ span 4' }}
                        gridRow={{ _: 3, laptop: 1}}
                        my={120}
                    >
                        <WarrantyDescription />
                    </GridChild>
                 )}

                <OffsetBgImg
                    gridColumn={{ _: 'span 12',laptop: '9/span 4' }}
                    gridRow={1}
                >
                    <GatsbyImage style={{ maxHeight: 720}} image={startupWarranty.childImageSharp.gatsbyImageData} alt="support" />
                </OffsetBgImg>
            </GridParent>

            {!gatsbyBreakpoints.laptopS && (
                <GridParent>
                    <GridChild gridColumn="2/ span 10">
                        <WarrantyDescription />
                    </GridChild>
                </GridParent>
            )}
        </Box>
    );
};

export default Warranty;

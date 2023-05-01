import { useModal } from '@hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useTranslation } from 'react-i18next';
import { config, Spring, a } from 'react-spring';
import styled from 'styled-components';

import theme from '@theme/configs';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import HeroBannerWithVideoBG from '@components/molecules/HeroBannerWithVideoBG';
import Slider from '@components/molecules/Slider';

const StyledGridParent = styled(GridParent)`
    height: 100%;
    width: 100%;
`;

const DetailsCard = styled.div`
    align-items: center;
    background-color: rgba(11, 20, 69, 0.5);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 1.5rem;
    position: relative;
    width: 50vw;

    &:not(.last):after {
        background-color: var(--grey-dark);
        content: '';
        height: 80%;
        position: absolute;
        right: 0;
        top: 10%;
        width: 1px;
    }

    ${mediaQueries.tablet} {
        width: 25vw;
    }
`;
const Details = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

const query = graphql`
    query cabinHeroBannerVideo {
        bg: file(relativePath: { eq: "video/cabin_bg.mp4" }) {
            publicURL
        }
        productImg: file(relativePath: { eq: "Products/product_cryocabin.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const DetailList = ({ cards }: { cards: { amount: string; label: string }[] }) => (
    <>
        {cards.map((card, index) => (
            <DetailsCard
                className={cards.length === index + 1 ? 'last' : ''}
                key={card.label.replace(' ', '-')}
            >
                <Typography variant="h2" color="var(--white)">
                    <Spring
                        from={{ number: 0 }}
                        to={{ number: parseInt(card.amount, 10) }}
                        config={{ ...config.molasses }}
                    >
                        {({ number }) => <a.div>{number.to((n) => n.toFixed(0))}</a.div>}
                    </Spring>
                </Typography>
                <Typography
                    variant="accent"
                    color="var(--white)"
                    transformText="uppercase"
                    textAlign="center"
                >
                    {card.label}
                </Typography>
            </DetailsCard>
        ))}
    </>
);
const HeroBanner = () => {
    const { t } = useTranslation();
    const gatsbyBreakpoints = useBreakpoint();
    const { openModal } = useModal(`get-started`);
    const cards = [
        {
            amount: '3',
            label: t('stats.minute'),
        },
        {
            amount: '600',
            label: t('stats.calories'),
        },
        {
            amount: '-160',
            label: t('stats.degree'),
        },
        {
            amount: '19',
            label: t('stats.display'),
        },
    ];
    const { bg, productImg } = useStaticQuery(query);

    const handleOpenModal = () => {
        openModal({
            productName: t('products.fullBodyTherapy'),
            productImg: productImg.childImageSharp.gatsbyImageData,
        });
    };

    return (
        <HeroBannerWithVideoBG url={bg.publicURL}>
            <StyledGridParent
                as="div"
                noGutter
                gridTemplateRows={{ _: '1fr 150px', tablet: '1fr 200px' }}
            >
                <GridChild gridColumn={{ _: '2/ span 11', laptopS: '3 / span 10' }}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                        height="100%"
                        maxWidth={530}
                        position="relative"
                        zIndex={theme.zIndices.stepUp}
                    >
                        <Typography variant="h1" color="var(--white)">
                            {t('heading')}
                        </Typography>
                        <Typography variant="h3" color="var(--white)" mb="2rem">
                            {t('caption')}
                        </Typography>
                        <Box display="flex" mt="1.75rem" flexWrap="wrap">
                            <Button variant="primary" onClick={handleOpenModal}>
                                <Typography variant="accent" color="var(--white)">
                                    {t('getStarted')}
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </GridChild>
                <GridChild gridColumn="span 12">
                    <Details>
                        {gatsbyBreakpoints.tablet ? (
                            <DetailList cards={cards} />
                        ) : (
                            <Slider slidesPerView={2} slidesPerGroup={2}>
                                <DetailList cards={cards} />
                            </Slider>
                        )}
                    </Details>
                </GridChild>
            </StyledGridParent>
        </HeroBannerWithVideoBG>
    );
};

export default HeroBanner;

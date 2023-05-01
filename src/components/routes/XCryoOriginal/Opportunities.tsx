import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import Slider from '@components/molecules/Slider';

type Card = {
    title: string;
    caption: string;
};

const DesktopVersion = ({ cards }: { cards: Card[] }) => (
    <GridParent as="div">
        {cards.map((card) => (
            <GridChild
                gridColumn={{ _: 'span 6', laptopS: 'span 3' }}
                key={`${card.title.replace(' ', '-')}-desktop`}
            >
                <Typography
                    variant="paragraph"
                    mt="3.25rem"
                    transformText="uppercase"
                    color="var(--blue-brand)"
                >
                    {card.title}
                </Typography>
                <Typography variant="caption" color="var(--black-brand)" mb="2.3125rem">
                    {card.caption}
                </Typography>
            </GridChild>
        ))}
    </GridParent>
);

const MobileVersion = ({ cards }: { cards: Card[] }) => (
    <Slider sliderName="opportunities-slider" slidesPerView={1.3}>
        <Box key="opportunity-1" p="1rem">
            <Box>
                <Typography variant="paragraph" transformText="uppercase" color="var(--blue-brand)">
                    {cards[0].title}
                </Typography>
                <Typography variant="caption" color="var(--black-brand)" mb="2.3125rem">
                    {cards[0].caption}
                </Typography>
            </Box>
            <Box>
                <Typography variant="paragraph" transformText="uppercase" color="var(--blue-brand)">
                    {cards[1].title}
                </Typography>
                <Typography variant="caption" color="var(--black-brand)" mb="2.3125rem">
                    {cards[1].caption}
                </Typography>
            </Box>
        </Box>
        <Box key="opportunity-2" p="1rem">
            <Box>
                <Typography variant="paragraph" transformText="uppercase" color="var(--blue-brand)">
                    {cards[2].title}
                </Typography>
                <Typography variant="caption" color="var(--black-brand)" mb="2.3125rem">
                    {cards[2].caption}
                </Typography>
            </Box>
            <Box>
                <Typography variant="paragraph" transformText="uppercase" color="var(--blue-brand)">
                    {cards[3].title}
                </Typography>
                <Typography variant="caption" color="var(--black-brand)" mb="2.3125rem">
                    {cards[3].caption}
                </Typography>
            </Box>
        </Box>
    </Slider>
);

const Opportunities = ({ hasHeading = true }: { hasHeading?: boolean }) => {
    const { t } = useTranslation();
    const { tablet } = useBreakpoint();
    const cards = [
        {
            title: t('opportunities.card1.title'),
            caption: t('opportunities.card1.caption'),
        },
        {
            title: t('opportunities.card2.title'),
            caption: t('opportunities.card2.caption'),
        },
        {
            title: t('opportunities.card3.title'),
            caption: t('opportunities.card3.caption'),
        },
        {
            title: t('opportunities.card4.title'),
            caption: t('opportunities.card4.caption'),
        },
    ];

    return (
        <section id="opportunities">
            <GridParent noGutter>
                {hasHeading && (
                    <GridChild gridColumn="span 12">
                        <Typography
                            variant="h1"
                            as="h2"
                            textAlign="center"
                            color="var(--black-brand)"
                            m="3.815rem 1rem 8.75rem"
                        >
                            {t('opportunities.heading')}
                        </Typography>
                    </GridChild>
                )}
                <GridChild gridColumn="span 12">
                    <Box
                        backgroundColor="var(--grey-cyan)"
                        mt={!hasHeading && tablet ? '8.5rem' : null}
                    >
                        {tablet || typeof tablet === 'undefined' ? (
                            <DesktopVersion cards={cards} />
                        ) : (
                            <MobileVersion cards={cards} />
                        )}
                    </Box>
                </GridChild>
            </GridParent>
        </section>
    );
};

export default Opportunities;

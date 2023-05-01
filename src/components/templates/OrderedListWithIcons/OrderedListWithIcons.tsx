import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { cloneElement, ReactElement } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

import Slider from '@components/molecules/Slider';

import { CardWrapper } from '@components/templates/OrderedListWithIcons/CardWrapper';
import { CardSize } from '@components/atoms/Card/Card';

const List = styled.div`
    align-items: center;
    counter-reset: card;
    display: flex;
    flex-direction: column;
    grid-gap: 30px;
    margin-bottom: 1rem;
`;

type IListCard = { icon: ReactElement; text: string };

interface OrderedListWithIconsProps {
    title: string;
    subTitle?: string;
    cards: IListCard[];
}

const ListCard = ({ className = '', card }: { className?: string; card: IListCard }) => {
    const { tablet } = useBreakpoint();

    return (
        <CardWrapper className={className}>
            <Card
                height="100%"
                p={{ _: '1.25rem', tablet: '1.875rem 2.125rem' }}
                ml={{ _: '7.625rem', laptopS: '8.125rem' }}
            >
                <Box display={{ _: 'block', tablet: 'flex' }} alignItems="center">
                    {cloneElement(card.icon, {
                        size: tablet ? 'large3' : 'xxxl',
                        color: 'var(--blue-brand)',
                    })}
                    <Typography
                        variant="paragraph"
                        color="var(--black-brand)"
                        ml={{ _: 'unset', tablet: '2.5rem' }}
                    >
                        {card.text}
                    </Typography>
                </Box>
            </Card>
        </CardWrapper>
    );
};

const OrderedListWithIcons = ({
    title,
    subTitle,
    cards,
}: OrderedListWithIconsProps): ReactElement => {
    const { tablet } = useBreakpoint();

    if (tablet || typeof tablet === 'undefined') {
        return (
            <Box>
                <GridParent as="div">
                    <GridChild gridColumn={{ _: 'span 12', laptopS: '4 / span 6' }}>
                        <Typography
                            variant="h1"
                            as="h2"
                            color="var(--black-brand)"
                            mb={{ _: '2.5rem', tablet: subTitle ? '1rem' : '4.5' }}
                            textAlign="center"
                        >
                            {title}
                        </Typography>
                        {subTitle && (
                            <Typography
                                variant="paragraph"
                                color="var(--black-brand)"
                                mb="2.5rem"
                                textAlign="center"
                            >
                                {subTitle}
                            </Typography>
                        )}
                    </GridChild>
                    <GridChild gridColumn="1 / span 12">
                        <List>
                            {cards.map((card) => (
                                <ListCard key={card.text.replace(' ', '-')} card={card} />
                            ))}
                        </List>
                    </GridChild>
                </GridParent>
            </Box>
        );
    }

    return (
        <Box>
            <GridParent as="div">
                <GridChild gridColumn="span 12">
                    <Typography
                        variant="h1"
                        as="h2"
                        color="var(--black-brand)"
                        mb="2.5rem"
                        px="2rem"
                        textAlign="center"
                    >
                        {title}
                    </Typography>
                    <List>
                        <Slider
                            style={{ width: '100%'}}
                            sliderName="ordered-list"
                            showOverflow
                            slidesPerView={1.2}
                            spaceBetween={10}
                        >
                            {cards.map((card, index) => (
                                <CardWrapper
                                    key={card.text}
                                    className={`slide ${index < cards.length - 1 ? null : 'last'}`}
                                >
                                    <Card p="1.25rem" height="100%" cardSize={CardSize.auto}>
                                        <Box>
                                            {cloneElement(card.icon, {
                                                size: 'large3',
                                                color: 'var(--blue-brand)',
                                            })}
                                            <Typography
                                                variant="paragraph"
                                                color="var(--black-brand)"
                                            >
                                                {card.text}
                                            </Typography>
                                        </Box>
                                    </Card>
                                </CardWrapper>
                            ))}
                        </Slider>
                    </List>
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default OrderedListWithIcons;

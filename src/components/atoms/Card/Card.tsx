import { props as defProps } from '@styled-system/should-forward-prop';
import { responsiveStyleFactory } from '@utils/styles';
import styled from 'styled-components';
import { layout as styledLayout, LayoutProps, space, SpaceProps, variant } from 'styled-system';

export enum CardSize {
    auto = 'auto',
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export enum CardLayout {
    horizontal = 'horizontal',
    vertical = 'vertical',
}

const cardVariant = variant({
    prop: 'cardSize',
    variants: {
        auto: {},
        small: {
            maxWidth: '380px',
            minWidth: '280px',
            height: '100%'
        },
        medium: {
            minWidth: '290px',
            height: '100%'
        },
        large: {
            minWidth: responsiveStyleFactory({ _: '265px', tablet: '435px' }),
        },
    },
});

export interface CardProps {
    cardSize?: CardSize;
    layout?: CardLayout;
    hoverEffect?: boolean;
}

const Card = styled.div
    .attrs(({ layout, cardSize }: CardProps & SpaceProps) => ({
        layout: layout || CardLayout.vertical,
        cardSize: cardSize || CardSize.medium,
    }))
    .withConfig({
        shouldForwardProp: (prop) => ![...defProps, 'height', 'layout', 'cardSize'].includes(String(prop)),
    })<SpaceProps & LayoutProps & CardProps>`
    box-shadow: ${({ theme }) => theme.shadows.card};
    position: relative;
    ${space};
    ${styledLayout};

    ${cardVariant};

    ${({ layout }) =>
        layout === CardLayout.horizontal &&
        `
        display: flex;
    `}
`;

export default Card;

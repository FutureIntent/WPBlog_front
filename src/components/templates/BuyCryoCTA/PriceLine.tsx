import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Typography, { TypographyProps } from '@components/atoms/Typography';

const PriceLine = styled(Typography)<TypographyProps>`
    color: var(--black-brand);
    font-size: 64px;
    line-height: 1;
    position: relative;
    text-align: center;

    span:first-of-type {
        padding-right: 0.5rem;
    }

    span:last-of-type {
        padding-left: 0.75rem;
        position: relative;
        top: -2.5rem;
    }

    ${mediaQueries.tablet} {
        font-size: 70px;
        line-height: 84px;
        margin-top: 1rem;
    }
`;

export default PriceLine;

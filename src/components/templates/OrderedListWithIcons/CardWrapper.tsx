import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

export const CardWrapper = styled.div`
    --card-step-circle-border-size: 4px;
    --card-step-circle-size: 2.812rem;

    display: inline-block;
    height: 100%;
    max-width: 745px;
    padding-top: 3.5rem;
    position: relative;
    width: 100%;

    &::before {
        border: var(--card-step-circle-border-size) solid var(--blue-brand);
        border-radius: 50%;
        color: var(--blue-brand);
        content: counter(card);
        counter-increment: card;
        font-size: 27px;
        height: var(--card-step-circle-size);
        left: calc(var(--card-step-circle-size) / 2);
        line-height: 1.5;
        position: absolute;
        text-align: center;
        top: -0.8rem;
        vertical-align: middle;
        width: var(--card-step-circle-size);
        z-index: ${({ theme }) => theme.zIndices.stepUp};
        background-color: var(--white);
    }

    &::after {
        content: '';
        background-color: var(--blue-brand);
        position: absolute;
    }

    &.slide:not(.last):after {
        height: var(--card-step-circle-border-size);
        left: calc(
            var(--card-step-circle-size) / 2 + var(--card-step-circle-border-size) +
                var(--card-step-circle-size)
        );
        top: 0.75rem;
        width: calc(100% - (var(--card-step-circle-size) / 2) - 1rem);
    }

    ${mediaQueries.tablet} {
        --card-step-circle-border-size: 4px;
        --card-step-circle-size: 5.125rem;

        padding-top: 0;

        &::before {
            font-size: 56px;
            left: 0;
            margin-top: calc(var(--card-step-circle-size) / -2);
            top: 50%;
        }

        &:not(:last-of-type):after {
            bottom: calc(var(--card-step-circle-size) / -1);
            height: 100%;
            left: calc(var(--card-step-circle-size) / 2 + var(--card-step-circle-border-size));
            width: var(--card-step-circle-border-size);
        }
    }
`;

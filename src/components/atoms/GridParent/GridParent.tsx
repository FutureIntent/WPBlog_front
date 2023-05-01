import styled from 'styled-components';
import { grid, GridProps, space, SpaceProps } from 'styled-system';

import mediaQueries from '@theme/configs/mediaQueries';

const GridParent = styled.div<
    GridProps & SpaceProps & { noGutter?: boolean; noGap?: boolean; aspectRatio?: number }
>`
    display: grid;
    grid-column-gap: ${({ noGap }) => (noGap ? 'unset' : '1rem')};
    grid-template-columns: repeat(12, 1fr);
    position: relative;

    ${({ noGutter }) =>
        !noGutter &&
        `
    padding: 0 0.9rem;

    ${mediaQueries.tablet} {
        padding: 0 2.8rem;
    }
    `}

    ${({ aspectRatio }) =>
        aspectRatio &&
        `
        aspect-ratio: ${aspectRatio};
  `}

  ${grid};
    ${space};
`;

export default GridParent;

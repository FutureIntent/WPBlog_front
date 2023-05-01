import type { Theme as StyledSystemTheme } from 'styled-system';

import breakpoints from './breakpoints';
import mediaQueries from './mediaQueries';
import shadows from './shadows';
import space from './space';
import zIndices from './zIndices';

export interface Theme extends StyledSystemTheme {
    zIndices: typeof zIndices;
    space: typeof space;
    mediaQueries: typeof mediaQueries;
    shadows: typeof shadows;
}

const theme: Theme = {
    breakpoints,
    space,
    mediaQueries,
    zIndices,
    shadows,
};

export default theme;

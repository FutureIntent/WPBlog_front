import { ReactElement, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import theme from '@theme/configs';

type ThemeProps = {
    children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProps): ReactElement => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;

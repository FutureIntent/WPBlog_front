/* eslint-disable import/no-extraneous-dependencies */
import * as rtl from '@testing-library/react';
import { BreakpointProvider } from 'gatsby-plugin-breakpoints';
import { ReactElement, ReactNode } from 'react';

import ModalProvider from '@providers/ModalProvider';
import ThemeProvider from '@providers/ThemeProvider';

import { myCustomQueries } from '@theme/configs/breakpoints';

export * from '@testing-library/react';

const TestWrapper = ({ children }: { children: ReactNode }): ReactElement => (
    <BreakpointProvider queries={myCustomQueries}>
        <ThemeProvider>
            <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
    </BreakpointProvider>
);

export const render = (TestComponent: ReactElement, options = {}): rtl.RenderResult =>
    rtl.render(TestComponent, { wrapper: TestWrapper, ...options });

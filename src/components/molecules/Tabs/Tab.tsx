import { props } from '@styled-system/should-forward-prop';
import { ReactChild, ReactElement } from 'react';
import { Tab as ReactTab, TabProps as ReactTabProps } from 'react-tabs';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

interface TabProps extends ReactTabProps {
    children?: ReactChild;
    title: string;
    caption?: string;
    isActive?: boolean;
    handleClick?: () => void;
}

const StyledTab = styled(ReactTab).withConfig({
    shouldForwardProp: (prop) => ![...props, 'isActive'].includes(String(prop)),
})<{
    isActive: boolean;
}>`
    display: flex;
    align-items: center;
    padding: 0 3.5rem 0 1.5rem;
    cursor: pointer;
    height: 56px;

    ${({ isActive }) =>
        isActive &&
        `
        cursor: default;

            border-bottom: 6px solid var(--blue-brand);
  `}
    ${mediaQueries.laptopS} {
        height: 120px;

        ${({ isActive }) =>
            isActive &&
            `
        cursor: default;
            background-color: var(--grey-cyan);
            border-right: 6px solid var(--blue-brand);
            border-bottom: 0;
  `}
    }
`;

const StyledTitle = styled(Typography)`
    white-space: nowrap;
`;

const Tab = ({
    children,
    title,
    caption,
    isActive = false,
    handleClick,
}: TabProps): ReactElement => (
    <StyledTab key={title} isActive={isActive} onClick={handleClick}>
        <Box display="flex">
            <Box
                display={{ _: 'none', laptopS: 'flex' }}
                justifyContent="center"
                mx="1rem"
                flexShrink={0}
                maxWidth={115}
                width="100%"
                maxHeight={120}
            >
                {children}
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center">
                <StyledTitle variant="accent">{title}</StyledTitle>
                {caption && <Typography variant="caption">{caption}</Typography>}
            </Box>
        </Box>
    </StyledTab>
);

Tab.tabsRole = 'Tab';

export default Tab;

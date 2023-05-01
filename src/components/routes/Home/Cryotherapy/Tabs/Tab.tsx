import { props } from '@styled-system/should-forward-prop';
import { ReactElement } from 'react';
import { Tab as ReactTab } from 'react-tabs';
import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

import mediaQueries from '@theme/configs/mediaQueries';

import Typography from '@components/atoms/Typography';

interface TabProps extends LayoutProps {
    title: string;
    isActive?: boolean;
    activeColor?: string;
    handleClick?: (index: number) => void;
    index?: number;
}

const StyledTab = styled(ReactTab).withConfig({
    shouldForwardProp: (prop) => ![...props, 'isActive', 'activeColor'].includes(String(prop)),
})<
    {
        isActive: boolean;
        activeColor: string;
    } & LayoutProps
>`
    padding: 0;
    cursor: pointer;
    margin: 2rem 1rem 0 0.9rem;
    color: var(--grey-dark);
    ${layout};

    ${({ isActive, activeColor }) =>
        isActive &&
        `
            cursor: default;
            border-bottom: 4px solid ${activeColor};

            p {
                color: ${activeColor};
                font-weight: bold;
            }
  `}
    ${mediaQueries.tablet} {
        margin: 2rem 1.5rem 1rem;
    }

    ${mediaQueries.laptopS} {
        margin: 2rem 3.75rem 0 0;
    }
`;

const Tab = ({
    title,
    isActive = false,
    activeColor = 'var(--white)',
    handleClick = () => {},
    index = 0,
    ...rest
}: TabProps): ReactElement => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <StyledTab
        isActive={isActive}
        activeColor={activeColor}
        onClick={() => handleClick(index)}
        {...rest}
    >
        <Typography variant="paragraph2" color="var(--grey-dark)" pb="0.75rem" textAlign="center">
            {title}
        </Typography>
    </StyledTab>
);

Tab.tabsRole = 'Tab';

export default Tab;

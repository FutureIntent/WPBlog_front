import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import Typography from '@components/atoms/Typography';

import ArrowRightButton from '@components/molecules/Icons/ArrowRightButton';
import AppLink from '@components/atoms/Link';

const StyledArrowBtn = styled(ArrowRightButton)<{ isGoBackBtn: boolean }>`
    vertical-align: middle;

    ${({ isGoBackBtn }) =>
        isGoBackBtn
            ? `
        margin-right: 0.5rem;
        transform: rotate(180deg);
    `
            : `
        margin-left: 0.5rem;
    `}
`;

const StyledLink = styled(AppLink)<SpaceProps>`
    background: transparent;
    border: 0;
    cursor: pointer;
    outline: 0;
    ${space}
`;

const LinkWithArrow = ({
    label,
    to,
    color = 'var(--blue-brand)',
    isGoBackBtn = false,
    ...rest
}: {
    label?: string;
    to: string;
    color?: string;
    isGoBackBtn?: boolean;
} & SpaceProps) => {
    const { t } = useTranslation();

    if (isGoBackBtn) {
        return (
            <StyledLink to={to} {...rest}>
                <Typography variant="accent" color={color}>
                    <StyledArrowBtn isGoBackBtn={isGoBackBtn} color={color} />{' '}
                    {label ? t(label) : ''}
                </Typography>
            </StyledLink>
        );
    }

    return (
        <StyledLink to={to} {...rest}>
            <Typography variant="accent" color={color}>
                {label ? t(label) : ''} <StyledArrowBtn isGoBackBtn={isGoBackBtn} color={color} />
            </Typography>
        </StyledLink>
    );
};

export default LinkWithArrow;

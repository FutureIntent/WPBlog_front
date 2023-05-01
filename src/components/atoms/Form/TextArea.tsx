import { FormEvent, ForwardedRef, forwardRef, useState } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import FloatingLabel from '@components/atoms/Form/FloatingLabel';
import { InputProps } from '@components/atoms/Form/Input';
import Typography from '@components/atoms/Typography';
import { FONT_FAMILY } from '@components/atoms/Typography/Typography';

const StyledTextArea = styled.textarea<{ hasError: boolean }>`
    border: 1px solid var(--grey-lt);
    border-radius: 4px;
    color: var(--black-brand);
    font-family: ${FONT_FAMILY}, sans-serif;
    font-size: 18px;
    padding: 1.25rem 1.25rem 0.5rem;
    width: 100%;

    ${({ hasError }) =>
        hasError &&
        `
    border-color: var(--red-warning);
  `};

    &:focus {
        border-color: var(--blue-brand);
    }
`;

const TextArea = (
    { onChange, value, name, label, error, ...rest }: Omit<InputProps, 'placeholder' | 'type'>,
    ref: ForwardedRef<any>,
) => {
    const [isActive, setIsActive] = useState(false);

    const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }

        if (typeof onChange === 'function') {
            onChange(e);
        }
    };

    return (
        <FloatingLabel isActive={isActive}>
            <Box as="label" htmlFor={name}>
                {label}
            </Box>
            <StyledTextArea
                ref={ref}
                aria-label={name}
                name={name}
                hasError={Boolean(error)}
                value={value}
                onChange={handleChange}
                {...rest}
            />
            {Boolean(error) && (
                <Typography variant="caption" color="var(--red-warning)">
                    {error}
                </Typography>
            )}
        </FloatingLabel>
    );
};

export default forwardRef(TextArea);

import {
    FormEvent,
    ForwardedRef,
    forwardRef,
    HTMLInputTypeAttribute,
    ReactElement,
    useState,
} from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import FloatingLabel from '@components/atoms/Form/FloatingLabel';
import Typography from '@components/atoms/Typography';
import { FONT_FAMILY } from '@components/atoms/Typography/Typography';

const StyledInput = styled.input<{ hasError: boolean }>`
    border: 1px solid var(--grey-lt);
    border-radius: 4px;
    color: var(--black-brand);
    font-family: ${FONT_FAMILY}, sans-serif;
    font-size: 18px;
    padding: 1.25rem 1.25rem 0.5rem;

    ${({ hasError }) =>
        hasError &&
        `
    border-color: var(--red-warning);
  `};

    &:focus {
        border-color: var(--blue-brand);
    }
`;

export interface InputProps {
    name: string;
    value?: string;
    onChange?: (e: FormEvent) => void;
    label?: string | ReactElement;
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    error?: string;
}

const Input = (
    { value, onChange = () => {}, name, label, type, placeholder, error, ...rest }: InputProps,
    ref: ForwardedRef<any>,
) => {
    const [isActive, setIsActive] = useState(false);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
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
            <Box>
                <StyledInput
                    aria-label={name}
                    ref={ref}
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    hasError={Boolean(error)}
                    {...rest}
                />
            </Box>
            {Boolean(error) && (
                <Typography variant="caption" color="var(--red-warning)">
                    {error}
                </Typography>
            )}
        </FloatingLabel>
    );
};

export default forwardRef(Input);

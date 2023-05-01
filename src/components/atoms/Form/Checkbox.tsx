import { ForwardedRef, forwardRef, ReactElement, ReactNode, ChangeEvent } from 'react';
import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

import Checkmark from '@components/molecules/Icons/Checkmark';

const CheckboxContainer = styled.label`
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    position: relative;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    left: 0;
    margin: 0;
    border: 0;
    opacity: 0.01;
    position: absolute;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
`;

const Icon = styled(Checkmark)`
    color: var(--white);
`;

const StyledCheckbox = styled.div`
    background-color: transparent;
    border: 1px solid var(--grey-lt);
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    margin-right: 1rem;
    padding: 4px;

    ${HiddenCheckbox}:focus, ${HiddenCheckbox}:hover:not(:checked) + & {
        opacity: 0.8;
    }

    ${HiddenCheckbox}:checked + & {
        background-color: var(--blue-brand);
        border: none;
    }

    ${HiddenCheckbox}:hover:checked + & {
        opacity: 0.8;
    }

    ${Icon} {
        visibility: hidden;

        ${HiddenCheckbox}:checked + & {
            visibility: visible;
        }
    }
`;

interface CheckboxProps {
    children?: ReactNode;
    checked?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const Checkbox = (
    { children, onChange = () => {}, error, ...rest }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
): ReactElement => (
    <>
        <CheckboxContainer>
            <HiddenCheckbox onChange={onChange} ref={ref} {...rest} />
            <StyledCheckbox>
                <Icon size="small" />
            </StyledCheckbox>
            {children}
        </CheckboxContainer>
        {Boolean(error) && (
            <Typography mt="1rem" variant="caption" color="var(--red-warning)">
                {error}
            </Typography>
        )}
    </>
);

export default forwardRef(Checkbox);

import { hexToRGB } from '@utils/helpers';
import { ReactElement, forwardRef, ForwardedRef, useState } from 'react';
import Select, { StylesConfig, NamedProps as SelectProps } from 'react-select';
import styled from 'styled-components';

import { colors } from '@theme/configs/colors';
import shadows from '@theme/configs/shadows';
import space from '@theme/configs/space';
import zIndices from '@theme/configs/zIndices';

import { fontsConfig } from '@components/atoms/Typography';

import mediaQueries from '@theme/configs/mediaQueries';
import { StyledLabel, StyledLabelText } from './Label';

type DropdownSize = 'normal' | 'small';

export interface DropdownProps extends SelectProps {
    id?: string;
    color?: string;
    size?: DropdownSize;
    hasBorder?: boolean;
    isDark?: boolean;
    label?: string;
    selected: DropdownItemProps | null;
    onChange?: (val: DropdownItemProps | null) => void;
    selectedPadding?: string | null;
    styles?: any;
}

export interface DropdownItemProps {
    value: string;
    label: string;
}

const Wrapper = styled.div<{ isFocused: boolean }>`
    //height: 100%;
    //width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    position: relative;

    label p {
        color: var(--grey-dark);
    }

    ${({ isFocused }) =>
        isFocused &&
        `
    label p {
        font-size: 12px;
        transform: translateY(4px);
    }
    `}

    ${mediaQueries.laptopS}{
        margin-top: 0;
    }
`;

const customStyles: StylesConfig<DropdownItemProps, false> = {
    container: (provided) => ({
        ...provided,
        height: '100%',
    }),
    control: (_, state) => {
        const {
            color = 'var(--grey-dark)',
            isDisabled,
            hasBorder = true,
            isDark = true,
        } = state.selectProps;
        const colorMap = {
            border: `rgba(${hexToRGB(colors.blueBrand)}, 0.5)`,
            hoverBorder: `rgba(${hexToRGB(color)}, 0.5)`,
            background: isDark ? 'transparent' : 'var(--white)',
        };

        return {
            'color': isDark ? 'var(--white)' : color,
            'minHeight': '40px',
            'opacity': isDisabled ? 0.32 : 1,
            'border': hasBorder ? `1px solid var(--grey)` : 'transparent',
            'borderRadius': '4px',
            'padding': `0 ${space.xs}`,
            'display': 'flex',
            'background': colorMap.background,
            'z-index': `${zIndices.dropdown}`,
            ...fontsConfig.link,
        };
    },
    option: (_, state) => {
        const { isSelected, selectProps } = state;
        const color = selectProps.color ?? colors.blackBrand;
        const backgroundColor = 'var(--white)';

        return {
            ...fontsConfig.link,
            'padding': `${space.xs} ${space.md}`,
            'borderRadius': '4px',
            'background': isSelected ? backgroundColor : 'var(--white)',
            'color': `${color}`,
            'cursor': 'pointer',
            'z-index': `${zIndices.dropdown}`,
            ':hover': {
                background: `rgba(${hexToRGB(colors.blueBrand)}, 0.5)`,
                color: 'var(--white)',
            },
            'a': {
                color: 'var(--black)',
            },
        };
    },
    singleValue: (_, props) => {
        const { color = 'var(--grey-dark)' } = props.selectProps;

        return {
            'display': 'flex',
            'fontSize': '12px',
            'lineHeight': '15px',
            'fontWeight': 400,
            'cursor': 'pointer',
            'padding': props.selectProps.selectedPadding ?? '16px 60px 0 0px',
            'color': props.selectProps.isDark ? 'var(--white)' : color,
            '@media all and (min-width: 768px)': {
                fontSize: '17px',
                lineHeight: '21px',
            },
        };
    },
    indicatorSeparator: () => ({ display: 'none' }),
    indicatorsContainer: (provided) => ({
        ...provided,
        '& > div': {
            padding: '0',
        },
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        transition: 'all .2s ease',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
        path: {
            fill: state.selectProps.color,
        },
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: 'var(--white)',
        borderRadius: '4px',
        boxShadow: shadows.card,
        marginTop: 0,
        zIndex: 91,
        width: 'fit-content',
        right: 0,
    }),
    menuList: (provided) => ({
        ...provided,
        padding: space.xs,
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '2px 0 2px 10px',
        input: {
            position: 'absolute',
        },
    }),
    input: (provided) => ({
        ...provided,
        'fontSize': '12px',
        'lineHeight': '15px',
        'fontWeight': 400,
        'padding': '16px 37px 0 0px',
        'color': 'var(--grey-dark)',
        '@media all and (min-width: 768px)': {
            padding: '16px 50px 0 0px',
            fontSize: '17px',
            lineHeight: '21px',
        },
    }),
    noOptionsMessage: (provided) => ({ ...provided, ...fontsConfig.link }),
};

const Dropdown = (
    {
        selectedPadding = null,
        options,
        name,
        onChange = () => {},
        selected,
        label,
        styles,
        ...rest
    }: DropdownProps,
    ref: ForwardedRef<HTMLInputElement>,
): ReactElement => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <Wrapper isFocused={Boolean(selected?.value) || isFocused}>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <Select
                {...rest}
                styles={{ ...customStyles, ...styles }}
                selectedPadding={selectedPadding}
                placeholder=" "
                onChange={onChange}
                defaultValue={selected}
                onFocus={handleFocus}
                onBlur={handleBlur}
                options={options}
                inputRef={ref}
            />
            {label && (
                <StyledLabel htmlFor={name}>
                    <StyledLabelText as="p" variant="paragraph2" color="var(--grey-dark)">
                        {label}
                    </StyledLabelText>
                </StyledLabel>
            )}
        </Wrapper>
    );
};

export default forwardRef(Dropdown);

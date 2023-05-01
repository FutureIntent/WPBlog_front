import { useActiveViewportSize } from '@hooks';
import type { UseActiveViewportSizeReturn } from '@src/hooks/useActiveViewportSize';
import { props } from '@styled-system/should-forward-prop';
import { getClampValue } from '@utils/helpers';
import { ComponentClass, ReactNode, ReactElement } from 'react';
import styled, { CSSObject } from 'styled-components';
import {
    variant as styledVariant,
    space,
    color as textColor,
    typography,
    textAlign,
    SpaceProps,
    TextAlignProps,
    TypographyProps as TypographyBaseProps,
    display,
    DisplayProps,
    ResponsiveValue,
    VerticalAlignProps,
    verticalAlign,
} from 'styled-system';

import { Device, deviceList } from '@theme/configs/breakpoints';

export const FONT_FAMILY = 'Manrope, Arial, san-serif';
export const FONT_HEAVY = 800;
export const FONT_BOLD = 700;
export const FONT_REGULAR = 400;

export type Variant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'paragraph'
    | 'paragraph2'
    | 'caption'
    | 'accent'
    | 'homeBanner'
    | 'link';

type TypographyVariant = Variant | ({ _: Variant } & { [key in Device]?: Variant });

type TransformText = 'capitalize' | 'lowercase' | 'uppercase';

export interface TypographyProps
    extends SpaceProps,
        TextAlignProps,
        TypographyBaseProps,
        VerticalAlignProps,
        DisplayProps {
    variant?: TypographyVariant;
    color?: ResponsiveValue<string>;
    hoverColor?: ResponsiveValue<string>;
    as?: ComponentClass | string | null;
    children: ReactNode;
    transformText?: TransformText;
}

interface StyledTypographyProps extends TypographyProps {
    variant: TypographyVariant;
}

export const fontsConfig = {
    h1: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('36px', '56px'),
        lineHeight: getClampValue('44px', '60px'),
        fontWeight: FONT_HEAVY,
    },
    h2: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('27px', '36px'),
        lineHeight: getClampValue('32px', '44px'),
        fontWeight: FONT_HEAVY,
    },
    h3: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('21px', '28px'),
        lineHeight: getClampValue('25px', '36px'),
        fontWeight: FONT_HEAVY,
    },
    paragraph: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('15px', '18px'),
        lineHeight: getClampValue('20px', '24px'),
        fontWeight: FONT_REGULAR,
    },
    paragraph2: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('12px', '17px'),
        lineHeight: getClampValue('15px', '21px'),
        fontWeight: FONT_REGULAR,
    },
    caption: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('10px', '14px'),
        lineHeight: getClampValue('18px', '18px'),
        fontWeight: FONT_REGULAR,
    },
    accent: {
        fontFamily: FONT_FAMILY,
        fontSize: '18px',
        lineHeight: '22px',
        fontWeight: FONT_BOLD,
    },
    homeBanner: {
        fontFamily: FONT_FAMILY,
        fontSize: '36px',
        fontWeight: FONT_REGULAR,
    },
    link: {
        fontFamily: FONT_FAMILY,
        fontSize: '16px',
        fontWeight: FONT_REGULAR,
    },
};

const typographyVariant = styledVariant({
    prop: 'variant',
    variants: fontsConfig,
});

const getAsProp = (
    variant: TypographyVariant,
    activeViewportSize: UseActiveViewportSizeReturn,
): string => {
    const variantMap = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        paragraph: 'p',
        paragraph2: 'p',
        caption: 'p',
        accent: 'span',
        homeBanner: 'p',
        link: 'p',
    };

    // Variant is of simple string variant="h1" approach
    if (typeof variant === 'string') {
        return variantMap[variant];
    }

    // Variant is of complex object type variant={{ _: 'h2', laptop: 'h1' }}
    // Variant has key of current activeViewportSize
    if (variant[activeViewportSize]) {
        return variantMap[variant[activeViewportSize]!];
    }

    // Variant does not contain activeViewportSize key. Return the closest one.
    let closestVariantDevice = deviceList
        .slice(
            0,
            deviceList.findIndex((device) => device === activeViewportSize),
        )
        .reverse()
        .find((device) => {
            if (Object.prototype.hasOwnProperty.call(variant, device)) {
                return true;
            }

            return false;
        });

    // Variant does not contain any closest key from deviceList. Return default _ value.
    if (!closestVariantDevice) {
        closestVariantDevice = 'laptopS';
    }

    return variantMap[variant[closestVariantDevice]!];
};

const StyledTypography = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        ![...props, 'color', 'transformText', 'hoverColor', 'isActive'].includes(String(prop)),
})<StyledTypographyProps>`
    margin: 0;
    padding: 0;
    text-decoration: none;
    ${typographyVariant};
    ${display};
    ${textColor};
    ${textAlign};
    ${space};
    ${typography};
    ${verticalAlign};

    ${({ transformText }: { transformText?: TransformText }) =>
        transformText ? `text-transform: ${transformText};` : null}

    ${({ hoverColor }: { hoverColor?: ResponsiveValue<string> }) =>
        hoverColor &&
        `
            &:hover {
                color: ${hoverColor};
            }
    `}
`;

const Typography = ({
    variant = 'paragraph',
    color = 'var(--black-brand)',
    hoverColor,
    as = null,
    children,
    transformText,
    ...rest
}: TypographyProps & { style?: CSSObject }): ReactElement => {
    const activeViewportSize = useActiveViewportSize();
    const asPropFromVariant = getAsProp(variant, activeViewportSize);

    return (
        <StyledTypography
            variant={variant}
            transformText={transformText}
            color={color}
            hoverColor={hoverColor}
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            /* @ts-ignore */
            as={as || asPropFromVariant}
            {...rest}
        >
            {children}
        </StyledTypography>
    );
};

export default Typography;

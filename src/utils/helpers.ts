import React from "react";

export const getClampValue = (min: string, max: string, container = '1830px'): string =>
    `clamp(${min}, calc(${parseInt(max, 10)} / ${parseInt(container, 10)} * 100vw) , ${max})`;

export const hexToRGB = (hex: string): string => {
    if (hex.length === 3) {
        return `${parseInt(hex[1], 16)}, ${parseInt(hex[2], 16)}, ${parseInt(hex[3], 16)}`;
    }

    return `${parseInt(`${hex[1]}${hex[2]}`, 16)}, ${parseInt(
        `${hex[3]}${hex[4]}`,
        16,
    )}, ${parseInt(`${hex[5]}${hex[6]}`, 16)}`;
};

export const componentToHex = (c: number): string => {
    const hex = c.toString(16);

    return hex.length === 1 ? `0${hex}` : `${hex}`;
};

export const rgbToHex = (r: number, g: number, b: number): string =>
    `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

export const phoneRegExp =
    /((?:\+|00)[17](?: |-)?|(?:\+|00)[1-9]\d{0,2}(?: |-)?|(?:\+|00)1-\d{3}(?: |-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-)[0-9]{3}(?: |-)[0-9]{4})|([0-9]{7}))/g;

export const encodeForm = (data: any) =>
    Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');

export const shadeColor = (color: string, percent: number): string =>
    `#${color
        .replace(/^#/, '')
        .replace(/../g, (newColor) =>
            `0${Math.min(255, Math.max(0, parseInt(newColor, 16) + percent)).toString(16)}`.substr(
                -2,
            ),
        )}`;

export const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}
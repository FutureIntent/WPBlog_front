// @ts-nocheck

/* eslint-disable */
import React from 'react';

const HTML = ({
    htmlAttributes,
    headComponents,
    bodyAttributes,
    preBodyComponents,
    body,
    postBodyComponents,
}) => (
    <html {...htmlAttributes}>
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <script defer src="https://www.googletagmanager.com/gtag/js?id=G-VZ9K15M2CH" />
            <script
                defer
                dangerouslySetInnerHTML={{
                    __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-VZ9K15M2CH');
  `,
                }}
            />
            {headComponents}
        </head>
        <body {...bodyAttributes}>
            {preBodyComponents}
            <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
            {postBodyComponents}
        </body>
    </html>
);
/* eslint-enable */

export default HTML;

import { createGlobalStyle } from 'styled-components';

import { colors } from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';

import { FONT_FAMILY } from '@components/atoms/Typography/Typography';

const GlobalStyle = createGlobalStyle`
  :root {
    --base-font-size: 16px;
    --header-height: 50px;
    --footer-height: 705px;
    --bottom-cta-height: 200px;
    --content-minHeight: calc(100vh - var(--footer-height) - var(--header-height));
    --content-minHeight-with-cta: calc(var(--content-minHeight) - var(--bottom-cta-height));

    --white: ${colors.white};
    --black: ${colors.black};

    --grey-cyan: ${colors.greyCyan};
    --grey: ${colors.grey};
    --black-brand: ${colors.blackBrand};
    --blue-dim: ${colors.blueDim};
    --grey-lt: ${colors.greyLt};
    --grey-dark: ${colors.greyDark};
    --blue-brand: ${colors.blueBrand};
    --red-warning: ${colors.redWarning};
    --success: #${colors.success};

    ${mediaQueries.tablet} {
      --header-height: 70px;
      --footer-height: 595px;
      --bottom-cta-height: 120px;
    }

    ${mediaQueries.laptopS} {
      --header-height: 70px;
      --footer-height: 420px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: var(--base-font-size);
    font-family: ${FONT_FAMILY}, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  section {
      background-color: #fff;
      overflow-x: hidden;
  }

  body.no-scroll {
    overflow-y: hidden;
  }

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  html {
      scroll-behavior: auto;
      scroll-padding-top: 8rem;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul, li {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  svg {
    fill: currentColor;
  }

  textarea, select, input {
    outline: unset;
    border: 0;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 8px;

    &:disabled {
      opacity: 32%;
    }
  }

  a {
    text-decoration: none;

    svg {
      vertical-align: middle;
    }
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  .backdrop-blur-dark {

          @supports (backdrop-filter: blur(10px)) {
            & {
              backdrop-filter: blur(10px);
                background-color: rgba(16, 16, 28, 0.5);
            }
          }

          @supports not ((backdrop-filter: blur(10px)) or (-moz-backdrop-filter: blur(10px))) {
              & {
                  background-color: rgba(16, 16, 28, 0.8);
              }
          }
  }

  .tl-edges {
      overflow-x: visible!important;
  }

  .MuiImageList-root {
      overflow: hidden;
  }

  .react-tabs__tab-panel--selected {
      z-index: 1;
  }
`;

export default GlobalStyle;

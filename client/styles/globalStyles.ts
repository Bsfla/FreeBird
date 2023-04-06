import { css } from '@emotion/react';
import theme from './theme';

const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    width: 100%;
  }

  body {
    width: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${theme.colors.main};

    ${theme.media.mobile1} {
      display: flex;
    }
  }

  ul,
  li,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #111;
  }
`;

export default GlobalStyle;

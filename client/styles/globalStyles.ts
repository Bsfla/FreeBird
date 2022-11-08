import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    margin: 0 auto;
    font-family: 'Noto Sans KR', sans-serif;
  }

  ul, li, ol {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: #111;
  }


  // animations
  @keyframes fadeInOut {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes slideTop {
    from {
      opacity: 0;
      transform: translateY(-10%);
    }

    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export default GlobalStyle;

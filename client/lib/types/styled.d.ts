import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      sub: string;
      sub2: string;
      sub3: string;
      light: string;
      white: string;
      gray2: string;
    };
    media: {
      mobile1: string;
      mobile2: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };

    font: {
      title: string;
    };
  }
}
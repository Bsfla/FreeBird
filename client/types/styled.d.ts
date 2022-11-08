import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      sub: string;
      light: string;
    };
    media: {
      mobile1: string;
      mobile2: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}

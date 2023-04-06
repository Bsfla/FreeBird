import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      main: string;
      sub: string;
      sub2: string;
      sub3: string;
      sub4: string;
      light: string;
      white: string;
      gray1: string;
      gray2: string;
      gray3: string;
      pink: string;
    };
    media: {
      mobile1: string;
      mobile2: string;
      tablet: string;
      laptop: string;
      desktop: string;
      large: string;
    };

    font: {
      title: string;
    };
  }
}

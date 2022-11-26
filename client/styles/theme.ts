import { DefaultTheme } from 'styled-components';

const breakpoints = {
  mobile1: '375px',
  mobile2: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
} as const;

const mediaQuery = (maxWidth: string) => `@media (max-width: ${maxWidth})`;

const colors = {
  main: '#e0e0e0',
  sub: '#9c4dcc',
  sub2: '#6a1b9a',
  sub3: '#7b1fa2',
  light: '#4b3d31',
  white: '#ffff',
  gray2: '#efebe9',
} as const;

const font = {
  title: '"Poppins", sans-serif',
};

const media = {
  mobile1: mediaQuery(breakpoints.mobile1),
  mobile2: `(max-width: ${breakpoints.mobile2})`,
  tablet: mediaQuery(breakpoints.tablet),
  laptop: mediaQuery(breakpoints.laptop),
  desktop: `(max-width: ${breakpoints.desktop})`,
} as const;

const theme: DefaultTheme = {
  colors,
  media,
  font,
} as const;

export default theme;

import { DefaultTheme } from 'styled-components';

const breakpoints = {
  mobile1: '375px',
  mobile2: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
} as const;

const colors = {
  main: '#e0e0e0',
  sub: '#9c4dcc',
  light: '#4b3d31',
} as const;

const media = {
  mobile1: `(max-width: ${breakpoints.mobile1})`,
  mobile2: `(max-width: ${breakpoints.mobile2})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  laptop: `(max-width: ${breakpoints.laptop})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
} as const;

const theme: DefaultTheme = {
  colors,
  media,
} as const;

export default theme;

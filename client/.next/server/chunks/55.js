"use strict";
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 3055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const breakpoints = {
  mobile1: '375px',
  mobile2: '480px',
  tablet: '768px',
  laptop: '1200px',
  desktop: '1200px',
  large: '1600px'
};

const mediaQuery = maxWidth => `@media (max-width: ${maxWidth})`;

const deskTopmediaQuery = minWidth => `@media (min-width: ${minWidth})`;

const colors = {
  main: '#e0e0e0',
  sub: '#9c4dcc',
  sub2: '#6a1b9a',
  sub3: '#7b1fa2',
  sub4: '#bface0',
  light: '#4b3d31',
  white: '#ffff',
  gray1: '#9e9e9e',
  gray2: '#efebe9',
  gray3: '#eeeeee',
  pink: '#f06292'
};
const font = {
  title: '"Poppins", sans-serif'
};
const media = {
  mobile1: mediaQuery(breakpoints.mobile1),
  mobile2: mediaQuery(breakpoints.mobile2),
  tablet: mediaQuery(breakpoints.tablet),
  laptop: mediaQuery(breakpoints.laptop),
  desktop: mediaQuery(breakpoints.desktop),
  large: deskTopmediaQuery(breakpoints.large)
};
const theme = {
  colors,
  media,
  font
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ })

};
;
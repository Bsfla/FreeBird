"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: external "react-query/devtools"
const devtools_namespaceObject = require("react-query/devtools");
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(3055);
;// CONCATENATED MODULE: ./styles/globalStyles.ts


const GlobalStyle = /*#__PURE__*/(0,react_.css)("*{margin:0;padding:0;box-sizing:border-box;}html{width:100%;}body{width:100%;font-family:'Noto Sans KR',sans-serif;background-color:", theme/* default.colors.main */.Z.colors.main, ";", theme/* default.media.mobile1 */.Z.media.mobile1, "{display:flex;}}ul,li,ol{list-style:none;}a{text-decoration:none;color:#111;}" + ( true ? "" : 0),  true ? "" : 0);
/* harmony default export */ const globalStyles = (GlobalStyle);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function MyApp({
  Component,
  pageProps
}) {
  const [queryClient] = external_react_default().useState(() => new external_react_query_.QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        retryOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
      }
    }
  }));

  const getLayout = Component.getLayout ?? (page => page);

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
    client: queryClient,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_query_.Hydrate, {
      state: pageProps.dehydratedState,
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "FreeBird"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Global, {
        styles: globalStyles
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.ThemeProvider, {
        theme: theme/* default */.Z,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_recoil_.RecoilRoot, {
          children: getLayout( /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(devtools_namespaceObject.ReactQueryDevtools, {
        initialIsOpen: false
      })]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [55], () => (__webpack_exec__(413)));
module.exports = __webpack_exports__;

})();
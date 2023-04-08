"use strict";
exports.id = 231;
exports.ids = [231];
exports.modules = {

/***/ 1031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(777);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./styles/theme.ts
var styles_theme = __webpack_require__(3055);
;// CONCATENATED MODULE: ./components/common/Header/style.tsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const Wrapper = /*#__PURE__*/base_default()("header",  true ? {
  target: "e1njxspo2"
} : 0)("width:100%;padding:30px;background-color:", styles_theme/* default.colors.main */.Z.colors.main, ";margin-bottom:23px;display:flex;justify-content:center;div{margin-right:35px;}" + ( true ? "" : 0));
const ButtonGroup = /*#__PURE__*/base_default()("div",  true ? {
  target: "e1njxspo1"
} : 0)( true ? {
  name: "1og3vwv",
  styles: "display:flex;align-items:center;gap:10px"
} : 0);
const HeaderButton = /*#__PURE__*/(/* unused pure expression or super */ null && (_styled("button",  true ? {
  target: "e1njxspo0"
} : 0)("width:100px;padding:12px;background-color:", props => props.isLocated ? theme.colors.sub : theme.colors.main, ";border:none;border-radius:10px;color:", props => props.isLocated ? theme.colors.white : theme.colors.sub, ";font-size:14px;font-weight:bold;cursor:pointer;" + ( true ? "" : 0))));
// EXTERNAL MODULE: ./components/common/Logo/index.tsx + 1 modules
var Logo = __webpack_require__(8913);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/Header/index.tsx





const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Logo/* default */.Z, {})
  });
};

/* harmony default export */ const common_Header = (Header);

/***/ }),

/***/ 2231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1031);
/* harmony import */ var _components_common_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8504);
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1535);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2770);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_index__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const AuthLayout = ({
  children
}) => {
  const {
    loading
  } = (0,_hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useRouteLodaing */ .$P)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_style__WEBPACK_IMPORTED_MODULE_4__/* .Wrrper */ .F, {
      children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthLayout);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Wrrper)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const Wrrper = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("main",  true ? {
  target: "e1w2t6m90"
} : 0)( true ? {
  name: "zsjmih",
  styles: "display:flex;justify-content:center;align-items:center;height:100%"
} : 0);

/***/ })

};
;
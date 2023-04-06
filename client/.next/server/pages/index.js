"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ad": () => (/* reexport safe */ _queryKeys__WEBPACK_IMPORTED_MODULE_1__.a)
/* harmony export */ });
/* harmony import */ var _net__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1137);
/* harmony import */ var _queryKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4981);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4266);





/***/ }),

/***/ 5006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8085);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5209);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _consts_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5255);
/* harmony import */ var _apis_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2714);
/* harmony import */ var _apis_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(889);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1756);
/* harmony import */ var _components_common_PostList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1790);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_1__, _components_Post__WEBPACK_IMPORTED_MODULE_2__, _apis_post__WEBPACK_IMPORTED_MODULE_5__, _apis_base__WEBPACK_IMPORTED_MODULE_6__, _hooks_common__WEBPACK_IMPORTED_MODULE_7__, _components_common_PostList__WEBPACK_IMPORTED_MODULE_8__]);
([_components_common_Layout__WEBPACK_IMPORTED_MODULE_1__, _components_Post__WEBPACK_IMPORTED_MODULE_2__, _apis_post__WEBPACK_IMPORTED_MODULE_5__, _apis_base__WEBPACK_IMPORTED_MODULE_6__, _hooks_common__WEBPACK_IMPORTED_MODULE_7__, _components_common_PostList__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Main = () => {
  const {
    ref: endPost,
    resultData: posts
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useInfiniteScroll */ .MQ)(_consts_index__WEBPACK_IMPORTED_MODULE_4__/* .queryKeys.posts */ .ad.posts, _apis_post__WEBPACK_IMPORTED_MODULE_5__/* .getPosts */ .Jq);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_2__/* .PostForm */ .sA, {}), posts !== undefined && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_common_PostList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      posts: posts,
      endPost: endPost
    })]
  });
};

Main.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_common_Layout__WEBPACK_IMPORTED_MODULE_1__/* .MainLayout */ .Z, {
    children: page
  });
};

const getServerSideProps = async context => {
  _apis_base__WEBPACK_IMPORTED_MODULE_6__/* .customAxios.defaults.headers.Cookie */ .Y.defaults.headers.Cookie = '';
  const cookie = context.req ? context.req.headers.cookie : '';
  if (!cookie) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  };
  _apis_base__WEBPACK_IMPORTED_MODULE_6__/* .customAxios.defaults.headers.Cookie */ .Y.defaults.headers.Cookie = cookie;
  const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
  await queryClient.prefetchInfiniteQuery(_consts_index__WEBPACK_IMPORTED_MODULE_4__/* .queryKeys.posts */ .ad.posts, () => (0,_apis_post__WEBPACK_IMPORTED_MODULE_5__/* .getPosts */ .Jq)({
    lastId: 0
  }));
  return {
    props: {}
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 777:
/***/ ((module) => {

module.exports = require("@emotion/styled/base");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("react-icons/gi");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = require("react-icons/im");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 5065:
/***/ ((module) => {

module.exports = require("react-icons/sl");

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

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,664,55,762,760,231,299,829,209,992,640], () => (__webpack_exec__(5006)));
module.exports = __webpack_exports__;

})();
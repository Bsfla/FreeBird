"use strict";
(() => {
var exports = {};
exports.id = 699;
exports.ids = [699];
exports.modules = {

/***/ 7161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8085);
/* harmony import */ var _components_common_PostList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1790);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _consts_queryKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4981);
/* harmony import */ var _apis_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(889);
/* harmony import */ var _apis_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2714);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1535);
/* harmony import */ var _components_common_NotList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2907);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_index__WEBPACK_IMPORTED_MODULE_1__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_2__, _components_common_PostList__WEBPACK_IMPORTED_MODULE_3__, _apis_base__WEBPACK_IMPORTED_MODULE_6__, _apis_post__WEBPACK_IMPORTED_MODULE_7__, _hooks_index__WEBPACK_IMPORTED_MODULE_9__]);
([_components_index__WEBPACK_IMPORTED_MODULE_1__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_2__, _components_common_PostList__WEBPACK_IMPORTED_MODULE_3__, _apis_base__WEBPACK_IMPORTED_MODULE_6__, _apis_post__WEBPACK_IMPORTED_MODULE_7__, _hooks_index__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Search = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const hashtag = router.query.hashtag;
  const {
    ref: endPost,
    resultData: posts
  } = (0,_hooks_index__WEBPACK_IMPORTED_MODULE_9__/* .useInfiniteScroll */ .MQ)(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_5__/* .queryKeys.posts */ .a.posts, _apis_post__WEBPACK_IMPORTED_MODULE_7__/* .searchPosts */ .cl, hashtag);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_1__/* .SearchPostIntroBar */ .rU, {
      hashtag: hashtag
    }), posts !== null && posts !== void 0 && posts.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_common_PostList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      posts: posts,
      endPost: endPost
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_common_NotList__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})]
  });
};

Search.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_common_Layout__WEBPACK_IMPORTED_MODULE_2__/* .MainLayout */ .Z, {
    children: page
  });
};

const getServerSideProps = async context => {
  var _context$params;

  const cookie = context.req ? context.req.headers.cookie : '';
  _apis_base__WEBPACK_IMPORTED_MODULE_6__/* .customAxios.defaults.headers.Cookie */ .Y.defaults.headers.Cookie = '';
  if (!cookie) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  };
  const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();
  const hashtagName = (_context$params = context.params) === null || _context$params === void 0 ? void 0 : _context$params.hashtag;

  if (hashtagName && cookie) {
    _apis_base__WEBPACK_IMPORTED_MODULE_6__/* .customAxios.defaults.headers.Cookie */ .Y.defaults.headers.Cookie = cookie;
    await queryClient.prefetchInfiniteQuery(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_5__/* .queryKeys.posts */ .a.posts, () => (0,_apis_post__WEBPACK_IMPORTED_MODULE_7__/* .searchPosts */ .cl)({
      paramId: hashtagName
    }));
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_4__.dehydrate)(queryClient)))
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,664,55,762,760,231,299,209,992,640], () => (__webpack_exec__(7161)));
module.exports = __webpack_exports__;

})();
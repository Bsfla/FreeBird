"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 6646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5209);
/* harmony import */ var _components_Post_Comment_CommentContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3950);
/* harmony import */ var _components_common_Layout_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7760);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _consts_queryKeys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4981);
/* harmony import */ var _apis_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2714);
/* harmony import */ var _apis_comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8693);
/* harmony import */ var _apis_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(889);
/* harmony import */ var _apis_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6649);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Post__WEBPACK_IMPORTED_MODULE_2__, _components_Post_Comment_CommentContainer__WEBPACK_IMPORTED_MODULE_3__, _components_common_Layout_MainLayout__WEBPACK_IMPORTED_MODULE_4__, _apis_post__WEBPACK_IMPORTED_MODULE_7__, _apis_comment__WEBPACK_IMPORTED_MODULE_8__, _apis_base__WEBPACK_IMPORTED_MODULE_9__, _apis_user__WEBPACK_IMPORTED_MODULE_10__]);
([_components_Post__WEBPACK_IMPORTED_MODULE_2__, _components_Post_Comment_CommentContainer__WEBPACK_IMPORTED_MODULE_3__, _components_common_Layout_MainLayout__WEBPACK_IMPORTED_MODULE_4__, _apis_post__WEBPACK_IMPORTED_MODULE_7__, _apis_comment__WEBPACK_IMPORTED_MODULE_8__, _apis_base__WEBPACK_IMPORTED_MODULE_9__, _apis_user__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Post = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    postId
  } = router.query;
  const {
    data: post
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([_consts_queryKeys__WEBPACK_IMPORTED_MODULE_6__/* .queryKeys.post */ .a.post, postId], () => (0,_apis_post__WEBPACK_IMPORTED_MODULE_7__/* .getPost */ .xl)(Number(postId)));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [post && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_2__/* .PostCard */ .y4, {
      post: post
    }), post && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Post_Comment_CommentContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      post: post
    })]
  });
};

Post.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_common_Layout_MainLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    children: page
  });
};

const getServerSideProps = async context => {
  var _result$response, _context$params;

  _apis_base__WEBPACK_IMPORTED_MODULE_9__/* .customAxios.defaults.headers.Cookie */ .Y.defaults.headers.Cookie = '';
  const cookie = context.req ? context.req.headers.cookie : '';
  if (!cookie) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  };
  _apis_base__WEBPACK_IMPORTED_MODULE_9__/* .customAxios.defaults.headers.Cookie */ .Y.defaults.headers.Cookie = cookie;
  const result = await (0,_apis_user__WEBPACK_IMPORTED_MODULE_10__/* .loadMyInfo */ .zf)();
  if (((_result$response = result.response) === null || _result$response === void 0 ? void 0 : _result$response.status) === 401) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  };
  const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();
  const postId = (_context$params = context.params) === null || _context$params === void 0 ? void 0 : _context$params.id;

  if (postId) {
    await Promise.all([queryClient.prefetchQuery([_consts_queryKeys__WEBPACK_IMPORTED_MODULE_6__/* .queryKeys.post */ .a.post, postId], () => (0,_apis_post__WEBPACK_IMPORTED_MODULE_7__/* .getPost */ .xl)(Number(postId))), queryClient.prefetchQuery([_consts_queryKeys__WEBPACK_IMPORTED_MODULE_6__/* .queryKeys.comment */ .a.comment, postId], () => (0,_apis_comment__WEBPACK_IMPORTED_MODULE_8__/* .getComments */ .li)(Number(postId)))]);
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_5__.dehydrate)(queryClient)))
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,664,55,762,760,829,209], () => (__webpack_exec__(6646)));
module.exports = __webpack_exports__;

})();
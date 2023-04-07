"use strict";
(() => {
var exports = {};
exports.id = 627;
exports.ids = [627];
exports.modules = {

/***/ 8434:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$7": () => (/* binding */ getFollowings),
/* harmony export */   "ET": () => (/* binding */ getFollowers),
/* harmony export */   "GC": () => (/* binding */ deleteFollowers),
/* harmony export */   "vT": () => (/* binding */ getUnFollowings)
/* harmony export */ });
/* harmony import */ var _apis_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(889);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_base__WEBPACK_IMPORTED_MODULE_0__]);
_apis_base__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getFollowers = body => {
  const {
    lastId,
    paramId
  } = body;
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get({
    url: `follow/${paramId}/followers`,
    params: {
      lastId
    }
  });
};
const getFollowings = body => {
  const {
    lastId,
    paramId
  } = body;
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get({
    url: `follow/${paramId}/followings`,
    params: {
      lastId
    }
  });
};
const deleteFollowers = userId => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"]({
    url: `follow/${userId}/follower`
  });
};
const getUnFollowings = () => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get({
    url: `follow/unfollowing`
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Follow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(299);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1756);
/* harmony import */ var _consts_queryKeys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4981);
/* harmony import */ var _apis_follow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8434);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apis_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(889);
/* harmony import */ var _consts_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6016);
/* harmony import */ var _consts_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4266);
/* harmony import */ var _apis_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6649);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Follow__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_3__, _apis_follow__WEBPACK_IMPORTED_MODULE_5__, _apis_base__WEBPACK_IMPORTED_MODULE_7__, _apis_user__WEBPACK_IMPORTED_MODULE_10__]);
([_components_Follow__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_3__, _apis_follow__WEBPACK_IMPORTED_MODULE_5__, _apis_base__WEBPACK_IMPORTED_MODULE_7__, _apis_user__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Follower = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const userId = Number(router.query.id);
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
  const {
    showAlert
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_3__/* .useAlert */ .VY)();
  const {
    showModal
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_3__/* .useModal */ .dd)(_consts_modal__WEBPACK_IMPORTED_MODULE_9__/* .modalName.CONFIRM_REMOVE */ .P.CONFIRM_REMOVE);
  const {
    ref: endUserList,
    resultData: followers
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_3__/* .useInfiniteScroll */ .MQ)(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_4__/* .queryKeys.follower */ .a.follower, _apis_follow__WEBPACK_IMPORTED_MODULE_5__/* .getFollowers */ .ET, userId);
  const {
    mutate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_apis_follow__WEBPACK_IMPORTED_MODULE_5__/* .deleteFollowers */ .GC, {
    onSuccess: () => {
      showAlert(_consts_alert__WEBPACK_IMPORTED_MODULE_8__/* .ALERT_MESSAGE.FOLLOWER_DELETE */ .e.FOLLOWER_DELETE);
      queryClient.invalidateQueries(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_4__/* .queryKeys.follower */ .a.follower);
    },
    onError: error => {
      alert(error);
    }
  });

  const handleDeleteFollower = id => () => {
    mutate(id);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: followers && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Follow__WEBPACK_IMPORTED_MODULE_1__/* .FollowUserList */ ._, {
      followUsers: followers,
      handleDeleteFollow: handleDeleteFollower,
      endUserList: endUserList
    })
  });
};

Follower.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Follow__WEBPACK_IMPORTED_MODULE_1__/* .FollowLayout */ .aO, {
    children: page
  });
};

const getServerSideProps = async context => {
  var _result$response, _context$params;

  const cookie = context.req ? context.req.headers.cookie : '';
  _apis_base__WEBPACK_IMPORTED_MODULE_7__/* .customAxios.defaults.headers.Cookie */ .Y.defaults.headers.Cookie = '';
  if (!cookie) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  };
  _apis_base__WEBPACK_IMPORTED_MODULE_7__/* .customAxios.defaults.headers.Cookie */ .Y.defaults.headers.Cookie = cookie;
  const result = await (0,_apis_user__WEBPACK_IMPORTED_MODULE_10__/* .loadMyInfo */ .zf)();
  if (((_result$response = result.response) === null || _result$response === void 0 ? void 0 : _result$response.status) === 401) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  };
  const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
  const userId = (_context$params = context.params) === null || _context$params === void 0 ? void 0 : _context$params.id;
  await queryClient.prefetchInfiniteQuery(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_4__/* .queryKeys.follower */ .a.follower, () => (0,_apis_follow__WEBPACK_IMPORTED_MODULE_5__/* .getFollowers */ .ET)({
    lastId: 0,
    paramId: Number(userId)
  }));
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_2__.dehydrate)(queryClient)))
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Follower);

function showAlert(ALERT_MESSAGE) {
  throw new Error('Function not implemented.');
}
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

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,664,55,762,760,231,299], () => (__webpack_exec__(1640)));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 590;
exports.ids = [590];
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

/***/ 77:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_ProfileImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9863);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5065);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_sl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8606);
/* harmony import */ var _consts_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(423);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apis_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6649);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9648);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1756);
/* harmony import */ var _consts_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6016);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_user__WEBPACK_IMPORTED_MODULE_7__, axios__WEBPACK_IMPORTED_MODULE_8__, _hooks_common__WEBPACK_IMPORTED_MODULE_9__]);
([_apis_user__WEBPACK_IMPORTED_MODULE_7__, axios__WEBPACK_IMPORTED_MODULE_8__, _hooks_common__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Card = ({
  user
}) => {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQueryClient)();
  const {
    showAlert
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_9__/* .useAlert */ .VY)();
  const {
    mutate: followMutate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)(_apis_user__WEBPACK_IMPORTED_MODULE_7__/* .followUser */ .P_, {
    onSuccess: () => {
      queryClient.invalidateQueries('unfollowings');
      showAlert(_consts_alert__WEBPACK_IMPORTED_MODULE_10__/* .ALERT_MESSAGE.FOLLOWING_SUCCESS */ .e.FOLLOWING_SUCCESS);
    },
    onError: error => {
      if (error instanceof axios__WEBPACK_IMPORTED_MODULE_8__.AxiosError) {
        var _error$response;

        alert((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
      }
    }
  });

  const handleFollowUser = () => {
    followMutate(user.id);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .Wrrapper */ .t9, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_common_ProfileImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      imgPath: user.ProfileImage
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
      className: "nickname",
      children: user.nickname
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: `${_consts_route__WEBPACK_IMPORTED_MODULE_12__/* .PROFILE_PAGE */ .Jt}/${user.id}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .ProfileButton */ .BF, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_icons_sl__WEBPACK_IMPORTED_MODULE_2__.SlUserFollow, {}), "\uD504\uB85C\uD544"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .zx, {
      onClick: handleFollowUser,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlinePlus, {}), "\uD314\uB85C\uC6B0"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BF": () => (/* binding */ ProfileButton),
/* harmony export */   "t9": () => (/* binding */ Wrrapper),
/* harmony export */   "zx": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3055);


const Wrrapper = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  true ? {
  target: "e320sov2"
} : 0)("width:7rem;height:10rem;background-color:", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white, ";border-radius:10px;display:flex;flex-direction:column;align-items:center;padding:10px;gap:5px;.nickname{font-size:12px;font-weight:bold;color:", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.gray1 */ .Z.colors.gray1, ";margin-top:5px;}", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.mobile2 */ .Z.media.mobile2, "{width:7.5rem;}" + ( true ? "" : 0));
const Button = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("button",  true ? {
  target: "e320sov1"
} : 0)("width:4rem;height:24px;font-size:8px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background-color:", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub */ .Z.colors.sub, ";color:", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white, ";gap:5px;border-radius:5px;font-weight:bold;" + ( true ? "" : 0));
const ProfileButton = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("button",  true ? {
  target: "e320sov0"
} : 0)("width:4rem;height:24px;font-size:8px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background-color:#bface0;color:", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white, ";gap:5px;border-radius:5px;font-weight:bold;" + ( true ? "" : 0));

/***/ }),

/***/ 4310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FindFriend_Header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(777);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(3055);
;// CONCATENATED MODULE: ./components/FindFriend/Header/style.tsx


const Wrapper = /*#__PURE__*/base_default()("header",  true ? {
  target: "ed38w1u0"
} : 0)("width:33rem;margin-top:10px;margin-bottom:25px;.user_nickname{font-weight:bold;font-size:20px;margin-left:20px;color:", theme/* default.colors.sub */.Z.colors.sub, ";}", theme/* default.media.laptop */.Z.media.laptop, "{height:100%;text-align:center;margin-right:12px;}", theme/* default.media.tablet */.Z.media.tablet, "{width:80%;}", theme/* default.media.mobile2 */.Z.media.mobile2, "{width:100%;margin-top:0;top:30px;}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/FindFriend/Header/index.tsx




const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "user_nickname",
      children: "\uC774\uB7F0 \uC0AC\uB78C\uB4E4\uC740 \uC5B4\uB54C\uC694?"
    })
  });
};

/* harmony default export */ const FindFriend_Header = (Header);

/***/ }),

/***/ 4091:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5535);
/* harmony import */ var _components_FindFriend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1275);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_FindFriend__WEBPACK_IMPORTED_MODULE_2__]);
_components_FindFriend__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const UserList = ({
  userList
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .Wrrapper */ .t, {
    children: userList.map(el => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_FindFriend__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Zb, {
      user: el
    }, el.id))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Wrrapper)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3055);


const Wrrapper = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  true ? {
  target: "eqqqqaq0"
} : 0)("display:flex;flex-wrap:wrap;gap:20px;max-width:33rem;margin:0 auto;padding-left:13px;padding-bottom:20px;", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.laptop */ .Z.media.laptop, "{justify-content:center;margin-top:20px;}" + ( true ? "" : 0));

/***/ }),

/***/ 1275:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z7": () => (/* reexport safe */ _UserList__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "Zb": () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4310);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4091);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Card__WEBPACK_IMPORTED_MODULE_1__, _UserList__WEBPACK_IMPORTED_MODULE_2__]);
([_Card__WEBPACK_IMPORTED_MODULE_1__, _UserList__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _MainLayout__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "g": () => (/* reexport safe */ _AuthLayout__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _AuthLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2231);
/* harmony import */ var _MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7760);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AuthLayout__WEBPACK_IMPORTED_MODULE_0__, _MainLayout__WEBPACK_IMPORTED_MODULE_1__]);
([_AuthLayout__WEBPACK_IMPORTED_MODULE_0__, _MainLayout__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3180:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _apis_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(889);
/* harmony import */ var _apis_follow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8434);
/* harmony import */ var _apis_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6649);
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8085);
/* harmony import */ var _components_FindFriend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1275);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_base__WEBPACK_IMPORTED_MODULE_0__, _apis_follow__WEBPACK_IMPORTED_MODULE_1__, _apis_user__WEBPACK_IMPORTED_MODULE_2__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_3__, _components_FindFriend__WEBPACK_IMPORTED_MODULE_4__]);
([_apis_base__WEBPACK_IMPORTED_MODULE_0__, _apis_follow__WEBPACK_IMPORTED_MODULE_1__, _apis_user__WEBPACK_IMPORTED_MODULE_2__, _components_common_Layout__WEBPACK_IMPORTED_MODULE_3__, _components_FindFriend__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const FindFriend = () => {
  const {
    data: userList
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)('unfollowings', () => (0,_apis_follow__WEBPACK_IMPORTED_MODULE_1__/* .getUnFollowings */ .vT)());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_FindFriend__WEBPACK_IMPORTED_MODULE_4__/* .Header */ .h4, {}), userList && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_FindFriend__WEBPACK_IMPORTED_MODULE_4__/* .UserList */ .Z7, {
      userList: userList
    })]
  });
};

FindFriend.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_common_Layout__WEBPACK_IMPORTED_MODULE_3__/* .MainLayout */ .Z, {
    children: page
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FindFriend);
const getServerSideProps = async context => {
  var _result$response;

  const cookie = context.req ? context.req.headers.cookie : '';
  _apis_base__WEBPACK_IMPORTED_MODULE_0__/* .customAxios.defaults.headers.Cookie */ .Y.defaults.headers.Cookie = '';
  if (!cookie) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  };
  _apis_base__WEBPACK_IMPORTED_MODULE_0__/* .customAxios.defaults.headers.Cookie */ .Y.defaults.headers.Cookie = cookie;
  const result = await (0,_apis_user__WEBPACK_IMPORTED_MODULE_2__/* .loadMyInfo */ .zf)();
  if (((_result$response = result.response) === null || _result$response === void 0 ? void 0 : _result$response.status) === 401) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  };
  return {
    props: {}
  };
};
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
var __webpack_exports__ = __webpack_require__.X(0, [922,664,55,762,760,231], () => (__webpack_exec__(3180)));
module.exports = __webpack_exports__;

})();
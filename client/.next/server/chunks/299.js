"use strict";
exports.id = 299;
exports.ids = [299];
exports.modules = {

/***/ 2017:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5905);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5065);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_sl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apis_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6649);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var _consts_queryKeys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4981);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1756);
/* harmony import */ var _consts_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6016);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_user__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__, _hooks_common__WEBPACK_IMPORTED_MODULE_7__]);
([_apis_user__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__, _hooks_common__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const FollowButton = ({
  user,
  profile
}) => {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  const {
    showAlert
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_7__/* .useAlert */ .VY)();
  const {
    mutate: followMutate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_apis_user__WEBPACK_IMPORTED_MODULE_4__/* .followUser */ .P_, {
    onSuccess: () => {
      showAlert(_consts_alert__WEBPACK_IMPORTED_MODULE_8__/* .ALERT_MESSAGE.FOLLOWING_SUCCESS */ .e.FOLLOWING_SUCCESS);
      queryClient.invalidateQueries(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_6__/* .queryKeys.profile */ .a.profile);
    },
    onError: error => {
      if (error instanceof axios__WEBPACK_IMPORTED_MODULE_5__.AxiosError) {
        var _error$response;

        alert((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
      }
    }
  });
  const {
    mutate: removeFollowMutate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_apis_user__WEBPACK_IMPORTED_MODULE_4__/* .removeFollowing */ .uU, {
    onSuccess: () => {
      queryClient.invalidateQueries(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_6__/* .queryKeys.profile */ .a.profile);
    },
    onError: error => {
      if (error instanceof axios__WEBPACK_IMPORTED_MODULE_5__.AxiosError) {
        var _error$response2;

        alert((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data);
      }
    }
  });

  const handleFollowUser = () => {
    followMutate(profile.id);
  };

  const handleRemoveFollowing = () => {
    const confirmRemoveFollowing = confirm('팔로잉을 끊으시겠습니까?');
    if (!confirmRemoveFollowing) return;
    return removeFollowMutate(profile.id);
  };

  const {
    Followers: followers
  } = profile;
  const isFollowing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const findFollower = followers.find(follower => follower.id === (user === null || user === void 0 ? void 0 : user.id));
    if (findFollower) return true;else return false;
  }, [followers]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: !isFollowing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
      isFollowing: isFollowing,
      onClick: handleFollowUser,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_icons_sl__WEBPACK_IMPORTED_MODULE_2__.SlUserFollow, {
        size: 15
      }), "Follow"]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
      isFollowing: isFollowing,
      onClick: handleRemoveFollowing,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_icons_sl__WEBPACK_IMPORTED_MODULE_2__.SlUserFollowing, {
        size: 15
      }), "Following"]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowButton);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3055);


const Button = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("button",  true ? {
  target: "e1j288i90"
} : 0)("width:10rem;height:30px;background-color:", props => props.isFollowing ? styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.gray3 */ .Z.colors.gray3 : styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub3 */ .Z.colors.sub3, ";color:", props => props.isFollowing ? 'black' : styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white, ";font-size:13px;margin-top:20px;margin-bottom:20px;border-radius:20px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;svg{margin-right:8px;}" + ( true ? "" : 0));

/***/ }),

/***/ 994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Follow_FollowCard)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/common/ProfileImage/index.tsx + 2 modules
var ProfileImage = __webpack_require__(9863);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(777);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(3055);
;// CONCATENATED MODULE: ./components/Follow/FollowCard/style.tsx


const Wrrapper = /*#__PURE__*/base_default()("div",  true ? {
  target: "e1ont1ra2"
} : 0)("width:7rem;height:10rem;background-color:", theme/* default.colors.white */.Z.colors.white, ";border-radius:10px;display:flex;flex-direction:column;align-items:center;padding:10px;gap:5px;.nickname{font-size:12px;font-weight:bold;color:", theme/* default.colors.gray1 */.Z.colors.gray1, ";margin-top:5px;}", theme/* default.media.mobile2 */.Z.media.mobile2, "{width:7.5rem;}" + ( true ? "" : 0));
const Button = /*#__PURE__*/base_default()("button",  true ? {
  target: "e1ont1ra1"
} : 0)("width:4rem;height:24px;font-size:8px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background-color:", theme/* default.colors.sub */.Z.colors.sub, ";color:", theme/* default.colors.white */.Z.colors.white, ";gap:5px;border-radius:5px;font-weight:bold;svg{margin-top:2px;}" + ( true ? "" : 0));
const ProfileButton = /*#__PURE__*/base_default()("button",  true ? {
  target: "e1ont1ra0"
} : 0)("width:4rem;height:24px;font-size:8px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background-color:#bface0;color:", theme/* default.colors.white */.Z.colors.white, ";gap:5px;border-radius:5px;font-weight:bold;" + ( true ? "" : 0));
// EXTERNAL MODULE: external "react-icons/sl"
var sl_ = __webpack_require__(5065);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
// EXTERNAL MODULE: ./consts/route.ts
var route = __webpack_require__(423);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Follow/FollowCard/index.tsx










const FollowCard = ({
  followUser,
  handleDeleteFollow
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ProfileImage/* default */.Z, {
      imgPath: followUser.ProfileImage
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "nickname",
      children: followUser.nickname
    }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: `${route/* PROFILE_PAGE */.Jt}/${followUser.id}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProfileButton, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(sl_.SlUserFollow, {}), "\uD504\uB85C\uD544"]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button, {
      onClick: handleDeleteFollow(followUser.id),
      children: [/*#__PURE__*/jsx_runtime_.jsx(ri_.RiDeleteBin5Line, {}), "\uC0AD\uC81C"]
    })]
  });
};

/* harmony default export */ const Follow_FollowCard = (FollowCard);

/***/ }),

/***/ 9859:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8085);
/* harmony import */ var _consts_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(423);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__]);
_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const FollowPageLayout = ({
  children
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    id
  } = router.query;
  const isLocated = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const routeLocation = router.pathname.slice(13);
    if (routeLocation === 'follower') return true;else return false;
  }, [router]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_common_Layout__WEBPACK_IMPORTED_MODULE_0__/* .MainLayout */ .Z, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .Header */ .h4, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
        className: "user_nickname",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          className: "nickname",
          children: "#\uB79C\uD134\uB79C\uD134"
        }), "\uB2D8\uC758 \uCE5C\uAD6C"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .Navigation */ .W_, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: `${(0,_consts_route__WEBPACK_IMPORTED_MODULE_6__/* .FOLLOWER_PAGE */ .iG)(Number(id))}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .Menu */ .v2, {
            isLocated: isLocated,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              children: "\uD314\uB85C\uC6CC"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "location"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: `${(0,_consts_route__WEBPACK_IMPORTED_MODULE_6__/* .FOLLOWING_PAGE */ .WC)(Number(id))}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .Menu */ .v2, {
            isLocated: !isLocated,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              children: "\uD314\uB85C\uC789"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "location"
            })]
          })
        })]
      })]
    }), children]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowPageLayout);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W_": () => (/* binding */ Navigation),
/* harmony export */   "h4": () => (/* binding */ Header),
/* harmony export */   "v2": () => (/* binding */ Menu)
/* harmony export */ });
/* unused harmony export UserList */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3055);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const Header = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("header",  true ? {
  target: "e1hluyy3"
} : 0)("position:sticky;background-color:", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.main */ .Z.colors.main, ";width:33rem;margin-top:10px;top:0px;margin-bottom:15px;.user_nickname{font-weight:bold;margin-left:20px;.nickname{color:", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub3 */ .Z.colors.sub3, ";}}", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.laptop */ .Z.media.laptop, "{top:58px;height:100%;}", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.tablet */ .Z.media.tablet, "{width:80%;}", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.mobile2 */ .Z.media.mobile2, "{width:100%;margin-top:0;top:30px;.user_nickname{margin-left:50px;margin-top:55px;}}" + ( true ? "" : 0));
const Navigation = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("nav",  true ? {
  target: "e1hluyy2"
} : 0)( true ? {
  name: "k3eciq",
  styles: "width:100%;display:flex;justify-content:space-around;align-items:center;margin-top:11px;font-weight:bold"
} : 0);
const Menu = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  true ? {
  target: "e1hluyy1"
} : 0)("width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:15px;cursor:pointer;span{margin-bottom:5px;color:", props => props.isLocated ? '' : styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.gray1 */ .Z.colors.gray1, ";}.location{display:", props => props.isLocated ? 'inline' : 'none', ";width:70px;border:solid ", styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub3 */ .Z.colors.sub3, ";}" + ( true ? "" : 0));
const UserList = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div",  true ? {
  target: "e1hluyy0"
} : 0)( true ? {
  name: "13wv5s9",
  styles: "display:flex;justify-content:center;width:100%;align-items:center"
} : 0);

/***/ }),

/***/ 1604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Follow_FollowUserList)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Follow/FollowCard/index.tsx + 1 modules
var FollowCard = __webpack_require__(994);
// EXTERNAL MODULE: ./components/common/NotList/index.tsx + 2 modules
var NotList = __webpack_require__(2907);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(777);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(3055);
;// CONCATENATED MODULE: ./components/Follow/FollowUserList/style.tsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const Wrrapper = /*#__PURE__*/base_default()("div",  true ? {
  target: "etz2enh2"
} : 0)("display:flex;flex-wrap:wrap;gap:20px;max-width:33rem;margin:0 auto;padding-left:13px;", theme/* default.media.mobile2 */.Z.media.mobile2, "{justify-content:center;margin-top:20px;}" + ( true ? "" : 0));
const NotUserList = /*#__PURE__*/base_default()("div",  true ? {
  target: "etz2enh1"
} : 0)( true ? {
  name: "1lg4k8a",
  styles: "display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0 auto;span{font-weight:bold;}"
} : 0);
const EndUserList = /*#__PURE__*/base_default()("div",  true ? {
  target: "etz2enh0"
} : 0)( true ? {
  name: "g9zdbb",
  styles: "width:100%;height:10px"
} : 0);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Follow/FollowUserList/index.tsx







const FollowUserList = ({
  followUsers,
  handleDeleteFollow,
  endUserList
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrrapper, {
    children: [followUsers.map(followUser => /*#__PURE__*/jsx_runtime_.jsx(FollowCard/* default */.Z, {
      followUser: followUser,
      handleDeleteFollow: handleDeleteFollow
    }, followUser.id)), followUsers.length < 1 && /*#__PURE__*/jsx_runtime_.jsx(NotList/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(EndUserList, {
      ref: endUserList
    })]
  });
};

/* harmony default export */ const Follow_FollowUserList = (FollowUserList);

/***/ }),

/***/ 299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _FollowUserList__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "aO": () => (/* reexport safe */ _FollowLayout__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "eg": () => (/* reexport safe */ _FollowButton__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _FollowLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9859);
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2017);
/* harmony import */ var _FollowCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(994);
/* harmony import */ var _FollowUserList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1604);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FollowLayout__WEBPACK_IMPORTED_MODULE_0__, _FollowButton__WEBPACK_IMPORTED_MODULE_1__]);
([_FollowLayout__WEBPACK_IMPORTED_MODULE_0__, _FollowButton__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




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

/***/ 2907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_NotList)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./assets/svg/not.svg
var _path, _path2;
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNot = function SvgNot(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    height: 48,
    width: 48,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M0 0h48v48H0z",
    fill: "none"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16 0-3.7 1.27-7.09 3.37-9.8L33.8 36.63C31.09 38.73 27.7 40 24 40zm12.63-6.2L14.2 11.37C16.91 9.27 20.3 8 24 8c8.84 0 16 7.16 16 16 0 3.7-1.27 7.09-3.37 9.8z"
  })));
};
/* harmony default export */ const not = (SvgNot);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(777);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(3055);
;// CONCATENATED MODULE: ./components/common/NotList/style.tsx


const Wrapper = /*#__PURE__*/base_default()("div",  true ? {
  target: "e1d549240"
} : 0)("display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0 auto;margin-bottom:150px;span{font-weight:bold;margin-top:15px;}", theme/* default.media.mobile2 */.Z.media.mobile2, "{width:100%;}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/NotList/index.tsx






const NotList = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(not, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "\uBAA9\uB85D\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4"
    })]
  });
};

/* harmony default export */ const common_NotList = (NotList);

/***/ })

};
;
"use strict";
exports.id = 760;
exports.ids = [760];
exports.modules = {

/***/ 7881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getHashtag)
/* harmony export */ });
/* harmony import */ var _apis_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(889);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_base__WEBPACK_IMPORTED_MODULE_0__]);
_apis_base__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getHashtag = () => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get({
    url: '/hashtags'
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 909:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1756);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2537);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_common__WEBPACK_IMPORTED_MODULE_1__]);
_hooks_common__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Alert = () => {
  const {
    isOpen,
    message,
    hideAlert
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_1__/* .useAlert */ .VY)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        hideAlert();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_style__WEBPACK_IMPORTED_MODULE_2__/* .Wrapper */ .i, {
    isOpen: isOpen,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
      children: message
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3055);


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Wrapper",
  componentId: "sc-1g0nzte-0"
})(["background-color:", ";font-size:15px;font-weight:bold;color:", ";position:fixed;top:50;border-radius:8px;display:flex;justify-content:center;align-items:center;span{display:flex;}", ""], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub4 */ .Z.colors.sub4, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub */ .Z.colors.sub, props => props.isOpen ? (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["opacity:1;width:250px;height:50px;transition:width 0.1s,height 0.1s,opacity 0.1s 0.1s;"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["opacity:0;width:0;height:0;padding:0;transition:width 0.5s 0.5s,height 0.5s 0.5s,opacity 0.5s;span{display:none;}"]));

/***/ }),

/***/ 7760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5858);
/* harmony import */ var _components_common_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8504);
/* harmony import */ var _components_common_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(909);
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1535);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4349);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_SideBar__WEBPACK_IMPORTED_MODULE_1__, _components_common_Alert__WEBPACK_IMPORTED_MODULE_3__, _hooks_index__WEBPACK_IMPORTED_MODULE_4__]);
([_components_common_SideBar__WEBPACK_IMPORTED_MODULE_1__, _components_common_Alert__WEBPACK_IMPORTED_MODULE_3__, _hooks_index__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const MainLayout = ({
  children
}) => {
  const {
    loading
  } = (0,_hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useRouteLodaing */ .$P)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_5__/* .Wrapper */ .im, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_5__/* .MainContents */ .mD, {
      children: [loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_style__WEBPACK_IMPORTED_MODULE_5__/* .LoadingContainer */ .ly, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_Spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
      }) : children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_Alert__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_common_SideBar__WEBPACK_IMPORTED_MODULE_1__/* .RightSideBar */ .m, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "ly": () => (/* binding */ LoadingContainer),
/* harmony export */   "mD": () => (/* binding */ MainContents)
/* harmony export */ });
/* unused harmony export IntroBar */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3055);


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().main.withConfig({
  displayName: "style__Wrapper",
  componentId: "sc-1s06vvi-0"
})(["display:flex;justify-content:center;width:100%;height:100%;gap:50px;", "{flex-direction:column;}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.laptop */ .Z.media.laptop);
const MainContents = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "style__MainContents",
  componentId: "sc-1s06vvi-1"
})(["display:flex;flex-direction:column;align-items:center;padding-top:50px;width:100%;z-index:500;", "{width:auto;padding-top:20px;}", "{margin-left:0px;padding-top:0px;}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.large */ .Z.media.large, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.laptop */ .Z.media.laptop);
const IntroBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__IntroBar",
  componentId: "sc-1s06vvi-2"
})(["width:36rem;height:50px;background-color:", ";border-radius:20px;margin-bottom:20px;display:flex;justify-content:center;align-items:center;span{color:", ";font-weight:bold;}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.gray1 */ .Z.colors.gray1);
const LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__LoadingContainer",
  componentId: "sc-1s06vvi-3"
})(["width:100%;height:100%;display:flex;justify-content:center;", "{width:40rem;}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.large */ .Z.media.large);

/***/ }),

/***/ 9863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_ProfileImage)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(3055);
;// CONCATENATED MODULE: ./components/common/ProfileImage/style.tsx


const Image = external_styled_components_default().div.withConfig({
  displayName: "style__Image",
  componentId: "sc-1cpui8w-0"
})(["display:flex;justify-content:center;width:", ";height:", ";background-color:", ";border-radius:5px;img{width:100%;border-radius:5px;height:100%;}"], props => props.size === 'Large' ? '4rem' : '3rem', props => props.size === 'Large' ? '70px' : '50px', theme/* default.colors.gray2 */.Z.colors.gray2);
// EXTERNAL MODULE: ./lib/utils/index.ts + 3 modules
var utils = __webpack_require__(9461);
;// CONCATENATED MODULE: ./assets/img/profile.png
/* harmony default export */ const profile = ("/_next/static/images/profile-f9998dd7ff3b6767d113a8d2ef9c8bd9.png");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/ProfileImage/index.tsx






const ProfileImage = ({
  imgPath,
  size
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Image, {
    size: size,
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: imgPath !== null ? (0,utils/* createImagePath */.Xy)(imgPath.src) : profile
    })
  });
};

/* harmony default export */ const common_ProfileImage = (ProfileImage);

/***/ }),

/***/ 4415:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apis_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6649);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_ProfileImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9863);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(615);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _consts_queryKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4981);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_user__WEBPACK_IMPORTED_MODULE_0__]);
_apis_user__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const UserMenu = () => {
  const {
    data: user
  } = useQuery(queryKeys.user, () => loadMyInfo());
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push(LOGIN_PAGE);
    } catch (err) {
      console.log(err);
    }
  };

  return /*#__PURE__*/_jsxs(MainProfile, {
    children: [user && /*#__PURE__*/_jsx(ProfileImage, {
      imgPath: user === null || user === void 0 ? void 0 : user.ProfileImage,
      size: 'Large'
    }), /*#__PURE__*/_jsxs(ProfileWrapper, {
      children: [/*#__PURE__*/_jsx("span", {
        className: "nickname",
        children: user === null || user === void 0 ? void 0 : user.nickname
      }), /*#__PURE__*/_jsx(Button, {
        onClick: handleLogout,
        children: "\uB85C\uADF8\uC544\uC6C3"
      })]
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (UserMenu)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports MainProfile, Image, ProfileWrapper, Button */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3055);


const MainProfile = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__MainProfile",
  componentId: "sc-12dvfl7-0"
})(["display:flex;width:16.7rem;height:7rem;background-color:", ";border-radius:20px;margin-top:25px;padding:20px;"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Image",
  componentId: "sc-12dvfl7-1"
})(["display:flex;justify-content:center;width:5rem;height:75px;background-color:", ";border-radius:5px;img{width:80%;height:100%;}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.gray2 */ .Z.colors.gray2);
const ProfileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__ProfileWrapper",
  componentId: "sc-12dvfl7-2"
})(["display:flex;flex-direction:column;margin-left:20px;.nickname{font-size:14px;color:", ";font-weight:bold;}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub */ .Z.colors.sub);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "style__Button",
  componentId: "sc-12dvfl7-3"
})(["width:10rem;height:100%;background-color:", ";color:", ";font-size:13px;margin-top:20px;border-radius:8px;border:none;cursor:pointer;&:active{background-color:", ";}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub */ .Z.colors.sub, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub2 */ .Z.colors.sub2);

/***/ }),

/***/ 1686:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8913);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6642);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(924);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apis_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6649);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _consts_queryKeys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4981);
/* harmony import */ var _UserMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4415);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_user__WEBPACK_IMPORTED_MODULE_5__, _UserMenu__WEBPACK_IMPORTED_MODULE_9__]);
([_apis_user__WEBPACK_IMPORTED_MODULE_5__, _UserMenu__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const LeftSideBar = () => {
  const {
    data: user
  } = useQuery(queryKeys.user, () => loadMyInfo());
  return /*#__PURE__*/_jsxs(Wrraper, {
    children: [/*#__PURE__*/_jsx(LogoContainer, {
      children: /*#__PURE__*/_jsx(Logo, {})
    }), /*#__PURE__*/_jsx(UserMenu, {}), /*#__PURE__*/_jsxs(PageMenuList, {
      children: [/*#__PURE__*/_jsx(Link, {
        href: `${PROFILE_PAGE}/${user === null || user === void 0 ? void 0 : user.id}`,
        children: /*#__PURE__*/_jsxs(PageMenu, {
          children: [/*#__PURE__*/_jsx(ImProfile, {
            size: 20
          }), /*#__PURE__*/_jsx("span", {
            children: "\uB9C8\uC774 \uD398\uC774\uC9C0"
          })]
        })
      }), /*#__PURE__*/_jsx(Link, {
        href: `${FOLLOW_PAGE}/${user === null || user === void 0 ? void 0 : user.id}/following`,
        children: /*#__PURE__*/_jsxs(PageMenu, {
          children: [/*#__PURE__*/_jsx(FaUserFriends, {
            size: 20
          }), "\uCE5C\uAD6C \uBAA9\uB85D"]
        })
      }), /*#__PURE__*/_jsx(Link, {
        href: `${FREIND_RECOMMEND_PAGE}`,
        children: /*#__PURE__*/_jsxs(PageMenu, {
          children: [/*#__PURE__*/_jsx(FaUserPlus, {
            size: 20
          }), "\uCE5C\uAD6C \uCC3E\uAE30"]
        })
      })]
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (LeftSideBar)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports Wrraper, MainProfile, LogoContainer, Button, PageMenuList, PageMenu, AuthPageList */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3055);


const Wrraper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().aside.withConfig({
  displayName: "style__Wrraper",
  componentId: "sc-1hz9wn3-0"
})(["position:sticky;top:0;left:0;display:flex;flex-direction:column;align-items:center;height:100vh;padding-left:22px;padding-top:12px;overflow:hidden;width:38rem;", "{display:none;}", "{width:auto;}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.laptop */ .Z.media.laptop, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.large */ .Z.media.large);
const MainProfile = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__MainProfile",
  componentId: "sc-1hz9wn3-1"
})(["display:flex;width:17rem;height:4rem;background-color:", ";border-radius:20px;margin-top:25px;padding:20px;position:sticky;"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white);
const LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__LogoContainer",
  componentId: "sc-1hz9wn3-2"
})(["width:100%;margin-top:15px;margin-left:29px;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "style__Button",
  componentId: "sc-1hz9wn3-3"
})(["width:10rem;height:100%;background-color:", ";color:", ";font-size:13px;margin-top:20px;border-radius:20px;border:none;cursor:pointer;&:active{background-color:", ";}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub */ .Z.colors.sub, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub2 */ .Z.colors.sub2);
const PageMenuList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "style__PageMenuList",
  componentId: "sc-1hz9wn3-4"
})(["margin-top:40px;display:flex;flex-direction:column;gap:20px;"]);
const PageMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "style__PageMenu",
  componentId: "sc-1hz9wn3-5"
})(["width:16.7rem;background-color:", ";padding:10px;border-radius:12px;color:", ";font-weight:bold;font-size:14px;display:flex;align-items:center;padding-left:20px;cursor:pointer;svg{margin-right:15px;}&:hover{background-color:", ";color:", ";}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub */ .Z.colors.sub, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub */ .Z.colors.sub, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white);
const AuthPageList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "style__AuthPageList",
  componentId: "sc-1hz9wn3-6"
})(["margin-top:90px;display:flex;flex-direction:column;gap:40px;"]);

/***/ }),

/***/ 7059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_hashtag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7881);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _consts_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(423);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8386);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_hashtag__WEBPACK_IMPORTED_MODULE_0__]);
_apis_hashtag__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const HashtagRank = () => {
  var _hashtags$, _hashtags$2, _hashtags$3, _hashtags$4, _hashtags$5, _hashtags$6;

  const {
    data: hashtags
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)('hashtag', () => (0,_apis_hashtag__WEBPACK_IMPORTED_MODULE_0__/* .getHashtag */ .L)());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .Wrrapper */ .t9, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "title",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        children: "#\uC778\uAE30\uC21C\uC704"
      })
    }), hashtags && (hashtags === null || hashtags === void 0 ? void 0 : hashtags.length) > 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .HashtagContainer */ .S8, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `${_consts_route__WEBPACK_IMPORTED_MODULE_6__/* .SEARCH_PAGE */ .nF}/${(_hashtags$ = hashtags[0]) === null || _hashtags$ === void 0 ? void 0 : _hashtags$.Hashtag.name}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .Hashtag */ .AQ, {
          children: ["1.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            className: "name",
            children: `#${hashtags && ((_hashtags$2 = hashtags[0]) === null || _hashtags$2 === void 0 ? void 0 : _hashtags$2.Hashtag.name)}`
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `${_consts_route__WEBPACK_IMPORTED_MODULE_6__/* .SEARCH_PAGE */ .nF}/${(_hashtags$3 = hashtags[1]) === null || _hashtags$3 === void 0 ? void 0 : _hashtags$3.Hashtag.name}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .Hashtag */ .AQ, {
          children: [' ', "2.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            className: "name",
            children: `#${hashtags && ((_hashtags$4 = hashtags[1]) === null || _hashtags$4 === void 0 ? void 0 : _hashtags$4.Hashtag.name)}`
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `${_consts_route__WEBPACK_IMPORTED_MODULE_6__/* .SEARCH_PAGE */ .nF}/${(_hashtags$5 = hashtags[2]) === null || _hashtags$5 === void 0 ? void 0 : _hashtags$5.Hashtag.name}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_4__/* .Hashtag */ .AQ, {
          children: ["3.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            className: "name",
            children: `#${hashtags && ((_hashtags$6 = hashtags[2]) === null || _hashtags$6 === void 0 ? void 0 : _hashtags$6.Hashtag.name)}`
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HashtagRank);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AQ": () => (/* binding */ Hashtag),
/* harmony export */   "S8": () => (/* binding */ HashtagContainer),
/* harmony export */   "t9": () => (/* binding */ Wrrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3055);


const Wrrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Wrrapper",
  componentId: "sc-1ci81ew-0"
})(["display:flex;flex-direction:column;.title{display:flex;justify-content:space-between;width:100%;color:", ";margin-bottom:15px;font-weight:bold;}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white);
const HashtagContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__HashtagContainer",
  componentId: "sc-1ci81ew-1"
})(["width:15rem;height:15rem;background-color:", ";border-radius:15px;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-content:center;"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white);
const Hashtag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Hashtag",
  componentId: "sc-1ci81ew-2"
})(["width:100%;height:5rem;display:flex;justify-content:flex-start;border-bottom:solid ", ";align-items:center;font-weight:bold;padding-left:20px;cursor:pointer;.name{font-size:18px;color:", ";margin-left:20px;}.tag{color:", ";}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.gray3 */ .Z.colors.gray3, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub */ .Z.colors.sub, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub */ .Z.colors.sub);

/***/ }),

/***/ 5689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RightSideBar_SearchInput)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(3055);
;// CONCATENATED MODULE: ./components/common/SideBar/RightSideBar/SearchInput/style.tsx


const Wrrapper = external_styled_components_default().form.withConfig({
  displayName: "style__Wrrapper",
  componentId: "sc-stw8jp-0"
})(["width:88%;margin-top:20px;padding:5px 5px 5px 12px;background-color:", ";border-radius:10px;display:flex;align-items:center;"], theme/* default.colors.white */.Z.colors.white);
const Input = external_styled_components_default().input.withConfig({
  displayName: "style__Input",
  componentId: "sc-stw8jp-1"
})(["width:100%;height:100%;border:none;outline:none;padding:5px;font-size:12px;"]);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./consts/route.ts
var route = __webpack_require__(423);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/SideBar/RightSideBar/SearchInput/index.tsx








const SearchInput = () => {
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)('');
  const router = (0,router_.useRouter)();

  const handleChangeInput = e => {
    setValue(e.target.value);
  };

  const handleSearchHashtag = e => {
    e.preventDefault();
    router.push(`${route/* SEARCH_PAGE */.nF}/${value}`);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrrapper, {
    onSubmit: handleSearchHashtag,
    children: [/*#__PURE__*/jsx_runtime_.jsx(bi_.BiSearchAlt2, {
      size: 15
    }), /*#__PURE__*/jsx_runtime_.jsx(Input, {
      placeholder: "\uD574\uC26C\uD0DC\uADF8\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",
      onChange: handleChangeInput,
      value: value
    })]
  });
};

/* harmony default export */ const RightSideBar_SearchInput = (SearchInput);

/***/ }),

/***/ 9015:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9586);
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5689);
/* harmony import */ var _HashtagRank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7059);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HashtagRank__WEBPACK_IMPORTED_MODULE_3__]);
_HashtagRank__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const RightSideBar = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_1__/* .Wrrapper */ .t, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_SearchInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_HashtagRank__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightSideBar);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Wrrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3055);


const Wrrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().aside.withConfig({
  displayName: "style__Wrrapper",
  componentId: "sc-95h1ku-0"
})(["position:sticky;top:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;gap:70px;height:100vh;padding:20px 30px 20px 20px;background-color:", ";", "{display:none;}", "{position:sticky;}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub */ .Z.colors.sub, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.laptop */ .Z.media.laptop, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.large */ .Z.media.large);

/***/ }),

/***/ 5858:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* reexport safe */ _RightSideBar__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _LeftSideBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1686);
/* harmony import */ var _RightSideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LeftSideBar__WEBPACK_IMPORTED_MODULE_0__, _RightSideBar__WEBPACK_IMPORTED_MODULE_1__]);
([_LeftSideBar__WEBPACK_IMPORTED_MODULE_0__, _RightSideBar__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
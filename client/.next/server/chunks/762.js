"use strict";
exports.id = 762;
exports.ids = [762];
exports.modules = {

/***/ 889:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ customAxios),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _consts_net__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const customAxios = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: ` ${"http://freebirdapp.site:3065"}/api`,
  withCredentials: true
});

const createApiMethod = (_axiosInstace, methodType) => config => {
  _axiosInstace.interceptors.response.use(response => {
    if (!response.data) return response;
    return response.data;
  }, error => {
    return error;
  });

  return _axiosInstace(_objectSpread(_objectSpread({}, config), {}, {
    method: methodType
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get: createApiMethod(customAxios, _consts_net__WEBPACK_IMPORTED_MODULE_1__/* .HTTP_METHODS.GET */ .W.GET),
  post: createApiMethod(customAxios, _consts_net__WEBPACK_IMPORTED_MODULE_1__/* .HTTP_METHODS.POST */ .W.POST),
  patch: createApiMethod(customAxios, _consts_net__WEBPACK_IMPORTED_MODULE_1__/* .HTTP_METHODS.PATCH */ .W.PATCH),
  put: createApiMethod(customAxios, _consts_net__WEBPACK_IMPORTED_MODULE_1__/* .HTTP_METHODS.PUT */ .W.PUT),
  delete: createApiMethod(customAxios, _consts_net__WEBPACK_IMPORTED_MODULE_1__/* .HTTP_METHODS.DELETE */ .W.DELETE)
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DF": () => (/* binding */ editComment),
/* harmony export */   "Hi": () => (/* binding */ replyComment),
/* harmony export */   "YF": () => (/* binding */ deleteComment),
/* harmony export */   "Yr": () => (/* binding */ createComment),
/* harmony export */   "li": () => (/* binding */ getComments)
/* harmony export */ });
/* harmony import */ var _apis_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(889);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_base__WEBPACK_IMPORTED_MODULE_0__]);
_apis_base__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getComments = postId => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get({
    url: `/comment/${postId}`
  });
};
const createComment = body => {
  const {
    postId,
    content
  } = body;
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post({
    url: `/comment/${postId}`,
    data: {
      content
    }
  });
};
const editComment = body => {
  const {
    postId: commentId,
    content
  } = body;
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch({
    url: `/comment/${commentId}`,
    data: {
      content
    }
  });
};
const deleteComment = commentId => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"]({
    url: `/comment/${commentId}`
  });
};
const replyComment = body => {
  const {
    postId: commentId,
    content
  } = body;
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post({
    url: `/comment/${commentId}/reply`,
    data: {
      content
    }
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B9": () => (/* binding */ sharePost),
/* harmony export */   "Jq": () => (/* binding */ getPosts),
/* harmony export */   "Nk": () => (/* binding */ deleteLike),
/* harmony export */   "a6": () => (/* binding */ upLoadImages),
/* harmony export */   "cl": () => (/* binding */ searchPosts),
/* harmony export */   "dE": () => (/* binding */ addLike),
/* harmony export */   "dq": () => (/* binding */ editPost),
/* harmony export */   "fR": () => (/* binding */ deletePost),
/* harmony export */   "qb": () => (/* binding */ createPost),
/* harmony export */   "xl": () => (/* binding */ getPost)
/* harmony export */ });
/* harmony import */ var _apis_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(889);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_base__WEBPACK_IMPORTED_MODULE_0__]);
_apis_base__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const createPost = data => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post({
    url: '/post',
    data
  });
};
const upLoadImages = data => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post({
    url: '/post/images',
    data
  });
};
const getPosts = body => {
  const {
    lastId
  } = body;
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get({
    url: '/posts',
    params: {
      lastId
    }
  });
};
const searchPosts = body => {
  const {
    lastId,
    paramId
  } = body;
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get({
    url: `/posts/${paramId}`,
    params: {
      lastId
    }
  });
};
const getPost = postId => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get({
    url: `/post/${postId}`
  });
};
const editPost = body => {
  const {
    postId,
    data
  } = body;
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch({
    url: `/post/${postId}`,
    data
  });
};
const deletePost = postId => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"]({
    url: `/post/${postId}`
  });
};
const addLike = postId => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch({
    url: `/post/${postId}/like`
  });
};
const deleteLike = postId => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"]({
    url: `/post/${postId}/like`
  });
};
const sharePost = postId => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post({
    url: `/post/${postId}/Retweet`
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ai": () => (/* binding */ getProfile),
/* harmony export */   "MX": () => (/* binding */ getProfilePosts),
/* harmony export */   "s2": () => (/* binding */ editProfile)
/* harmony export */ });
/* harmony import */ var _apis_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(889);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_base__WEBPACK_IMPORTED_MODULE_0__]);
_apis_base__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getProfile = userId => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get({
    url: `/profile/${userId}`
  });
};
const editProfile = body => {
  const {
    formData,
    userId
  } = body;
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch({
    url: `/profile/${userId}`,
    data: formData
  });
};
const getProfilePosts = body => {
  const {
    lastId,
    paramId
  } = body;
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get({
    url: `/profile/posts/${paramId}`,
    params: {
      lastId
    }
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P_": () => (/* binding */ followUser),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "uU": () => (/* binding */ removeFollowing),
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "y1": () => (/* binding */ signUp),
/* harmony export */   "zf": () => (/* binding */ loadMyInfo)
/* harmony export */ });
/* harmony import */ var _apis_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(889);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_base__WEBPACK_IMPORTED_MODULE_0__]);
_apis_base__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const signUp = data => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post({
    url: '/user',
    data
  });
};
const login = data => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post({
    url: '/user/login',
    data
  });
};
const logout = () => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post({
    url: '/user/logout'
  });
};
const loadMyInfo = () => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get({
    url: '/user'
  });
};
const followUser = userId => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch({
    url: `/user/${userId}/follow`
  });
};
const removeFollowing = userId => {
  return _apis_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"]({
    url: `/user/${userId}/follow`
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Logo)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(3055);
;// CONCATENATED MODULE: ./components/common/Logo/style.tsx


const LogoWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__LogoWrapper",
  componentId: "sc-13v0yz0-0"
})(["display:flex;align-items:center;cursor:pointer;svg{width:40px;height:40px;}span{color:", ";font-family:", ";font-size:30px;margin-left:10px;}"], theme/* default.colors.sub */.Z.colors.sub, theme/* default.font.title */.Z.font.title);
const Button = external_styled_components_default().button.withConfig({
  displayName: "style__Button",
  componentId: "sc-13v0yz0-1"
})([""]);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./consts/route.ts
var route = __webpack_require__(423);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/Logo/index.tsx








const Logo = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(LogoWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(fa_.FaKiwiBird, {
      size: 5
    }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: route/* MAIN_PAGE */.DW,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "FreeBird"
      })
    })]
  });
};

/* harmony default export */ const common_Logo = (Logo);

/***/ }),

/***/ 8504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Spinner)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(3055);
;// CONCATENATED MODULE: ./components/common/Spinner/style.tsx


const bounce = (0,external_styled_components_.keyframes)(["0%,80%,100%{transform:scale(0);}40%{transform:scale(1);}"]);
const LoadingDots = external_styled_components_default().div.withConfig({
  displayName: "style__LoadingDots",
  componentId: "sc-12gfk54-0"
})(["height:100vh;display:flex;justify-content:center;"]);
const LoadingDot = external_styled_components_default().div.withConfig({
  displayName: "style__LoadingDot",
  componentId: "sc-12gfk54-1"
})(["width:1.5rem;height:1.5rem;background-color:", ";border-radius:60%;animation:1.5s ", " infinite ease-in-out both;margin-top:150px;"], theme/* default.colors.sub3 */.Z.colors.sub3, bounce);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "style__Wrapper",
  componentId: "sc-12gfk54-2"
})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;overflow:hidden;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/Spinner/index.tsx





const Spinner = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LoadingDots, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(LoadingDot, {}), /*#__PURE__*/jsx_runtime_.jsx(LoadingDot, {}), /*#__PURE__*/jsx_runtime_.jsx(LoadingDot, {})]
    })
  });
};

/* harmony default export */ const common_Spinner = (Spinner);

/***/ }),

/***/ 6016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ALERT_MESSAGE)
/* harmony export */ });
const ALERT_MESSAGE = {
  POST_EDIT: '게시글이 수정되었습니다.',
  POST_DELETE: '게시글을 삭제했습니다.',
  POST_CREATE: '게시글을 생성했습니다.',
  POST_SHARE: '게시글을 공유했습니다',
  COMMENT_CREATE: '댓글을 생성했습니다',
  COMMENT_DELETE: '댓글을 삭제했습니다.',
  COMMENT_EDIT: '댓글을 수정했습니다',
  FOLLOWING_SUCCESS: '팔로잉 했습니다.',
  FOLLOWING_DELETE: '팔로잉을 삭제했습니다',
  FOLLOWER_DELETE: '팔로워를 삭제했습니다',
  PROFILE_EDIT: '프로필을 수정했습니다'
};

/***/ }),

/***/ 4266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ modalName)
/* harmony export */ });
const modalName = {
  POST_IMAGE: 'PostImage',
  PROFILE_EDIT: 'ProfileEdit',
  CONFIRM_REMOVE: 'ConfirmRemove'
};

/***/ }),

/***/ 1137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ HTTP_METHODS)
/* harmony export */ });
const HTTP_METHODS = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  PUT: 'put',
  DELETE: 'delete'
};

/***/ }),

/***/ 4981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ queryKeys)
/* harmony export */ });
const queryKeys = {
  posts: ['posts'],
  post: 'post',
  comment: 'comment',
  user: 'user',
  profile: 'profile',
  follower: ['follower'],
  following: ['following']
};

/***/ }),

/***/ 423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C1": () => (/* binding */ SIGNUP_PAGE),
/* harmony export */   "DV": () => (/* binding */ LOGIN_PAGE),
/* harmony export */   "DW": () => (/* binding */ MAIN_PAGE),
/* harmony export */   "Gi": () => (/* binding */ FOLLOW_PAGE),
/* harmony export */   "Hv": () => (/* binding */ POST_PAGE),
/* harmony export */   "Jt": () => (/* binding */ PROFILE_PAGE),
/* harmony export */   "WC": () => (/* binding */ FOLLOWING_PAGE),
/* harmony export */   "iG": () => (/* binding */ FOLLOWER_PAGE),
/* harmony export */   "nF": () => (/* binding */ SEARCH_PAGE),
/* harmony export */   "yz": () => (/* binding */ FREIND_RECOMMEND_PAGE)
/* harmony export */ });
const LOGIN_PAGE = '/login';
const SIGNUP_PAGE = '/signup';
const MAIN_PAGE = '/';
const POST_PAGE = '/post';
const PROFILE_PAGE = '/profile';
const FOLLOW_PAGE = '/follow';
const SEARCH_PAGE = `/search`;
const FOLLOWING_PAGE = id => `/follow/${id}/following`;
const FOLLOWER_PAGE = id => `/follow/${id}/follower`;
const FREIND_RECOMMEND_PAGE = `/findfriend`;

/***/ }),

/***/ 5371:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fj": () => (/* reexport safe */ _useCreatePost__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "hn": () => (/* reexport safe */ _useSharePost__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "iZ": () => (/* reexport safe */ _useEditProfile__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _useCreatePost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8681);
/* harmony import */ var _useSharePost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4736);
/* harmony import */ var _useEditProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useCreatePost__WEBPACK_IMPORTED_MODULE_0__, _useSharePost__WEBPACK_IMPORTED_MODULE_1__, _useEditProfile__WEBPACK_IMPORTED_MODULE_2__]);
([_useCreatePost__WEBPACK_IMPORTED_MODULE_0__, _useSharePost__WEBPACK_IMPORTED_MODULE_1__, _useEditProfile__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2714);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1756);
/* harmony import */ var _consts_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6016);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_post__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_2__]);
([_apis_post__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useCreatePost = () => {
  const {
    showAlert
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAlert */ .VY)();
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
  const {
    mutate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_apis_post__WEBPACK_IMPORTED_MODULE_1__/* .createPost */ .qb, {
    onSuccess: () => {
      showAlert(_consts_alert__WEBPACK_IMPORTED_MODULE_3__/* .ALERT_MESSAGE.POST_CREATE */ .e.POST_CREATE);
      queryClient.invalidateQueries('posts');
    },
    onError: error => {
      alert(error);
    }
  });
  return {
    mutate
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCreatePost);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6748);
/* harmony import */ var _consts_queryKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4981);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recoil_modal_atom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1071);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1756);
/* harmony import */ var _consts_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6016);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_profile__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_5__]);
([_apis_profile__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const useEditProfile = () => {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
  const setModalAtomState = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_recoil_modal_atom__WEBPACK_IMPORTED_MODULE_4__/* .modalAtomState */ .m);
  const {
    showAlert
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_5__/* .useAlert */ .VY)();
  const {
    mutate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_apis_profile__WEBPACK_IMPORTED_MODULE_1__/* .editProfile */ .s2, {
    onSuccess: () => {
      queryClient.invalidateQueries(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_2__/* .queryKeys.profile */ .a.profile);
      queryClient.invalidateQueries(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_2__/* .queryKeys.user */ .a.user);
      queryClient.invalidateQueries(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_2__/* .queryKeys.posts */ .a.posts);
      showAlert(_consts_alert__WEBPACK_IMPORTED_MODULE_6__/* .ALERT_MESSAGE.PROFILE_EDIT */ .e.PROFILE_EDIT);
      setModalAtomState(false);
    },
    onError: error => {
      alert(error);
    }
  });
  return {
    mutate
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEditProfile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2714);
/* harmony import */ var _consts_queryKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4981);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1756);
/* harmony import */ var _consts_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6016);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_post__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_3__, _hooks_common__WEBPACK_IMPORTED_MODULE_4__]);
([_apis_post__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_3__, _hooks_common__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useSharePost = post => {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
  const {
    showAlert
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_4__/* .useAlert */ .VY)();
  const {
    mutate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_apis_post__WEBPACK_IMPORTED_MODULE_1__/* .sharePost */ .B9, {
    onSuccess: () => {
      showAlert(_consts_alert__WEBPACK_IMPORTED_MODULE_5__/* .ALERT_MESSAGE.POST_SHARE */ .e.POST_SHARE);
      queryClient.invalidateQueries(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_2__/* .queryKeys.posts */ .a.posts);
    },
    onError: error => {
      if (error instanceof axios__WEBPACK_IMPORTED_MODULE_3__.AxiosError) {
        var _error$response;

        alert((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
      }
    }
  });

  const handleSharePost = e => {
    e.stopPropagation();
    mutate(post.id);
  };

  return {
    handleSharePost
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSharePost);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$P": () => (/* reexport safe */ _useRouteLoading__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "Gl": () => (/* reexport safe */ _useInput__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "MQ": () => (/* reexport safe */ _useInfiniteScroll__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "VY": () => (/* reexport safe */ _useAlert__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "dd": () => (/* reexport safe */ _useModal__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "vr": () => (/* reexport safe */ _useCarousel__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _useInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1370);
/* harmony import */ var _useInfiniteScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8951);
/* harmony import */ var _useCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6320);
/* harmony import */ var _useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2822);
/* harmony import */ var _useAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(816);
/* harmony import */ var _useRouteLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5273);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_1__]);
_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_useAlert)
});

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./recoil/alert/atom.ts

const alertState = (0,external_recoil_.atom)({
  key: 'alert',
  default: {
    isOpen: false,
    message: ''
  }
});
;// CONCATENATED MODULE: ./hooks/common/useAlert.ts



const useAlert = () => {
  const [alert, setAlert] = (0,external_recoil_.useRecoilState)(alertState);

  const showAlert = alertMessage => {
    setAlert({
      isOpen: true,
      message: alertMessage
    });
  };

  const hideAlert = () => {
    setAlert({
      isOpen: false,
      message: ''
    });
  };

  const {
    isOpen,
    message
  } = alert;
  return {
    isOpen,
    message,
    showAlert,
    hideAlert
  };
};

/* harmony default export */ const common_useAlert = (useAlert);

/***/ }),

/***/ 6320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useCarousel = children => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: touchPostion,
    1: setTouchposition
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: coordinate,
    1: setCoordinate
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const TOTAL_SLIDE = react__WEBPACK_IMPORTED_MODULE_0___default().Children.count(children);

  const moveNextSlide = () => {
    if (currentSlide == TOTAL_SLIDE - 1) {
      setCurrentSlide(TOTAL_SLIDE - 1);
      return;
    }

    setCurrentSlide(prev => prev + 1);
  };

  const movePrevSlide = () => {
    if (currentSlide == 0) {
      setCurrentSlide(0);
      return;
    }

    setCurrentSlide(prev => prev - 1);
  };

  const handleNextSlide = e => {
    e.stopPropagation();
    moveNextSlide();
  };

  const handlePrevSlide = e => {
    e.stopPropagation();
    movePrevSlide();
  };

  const handleMoveSelectSlide = slideLocation => e => {
    e.stopPropagation();
    setCurrentSlide(slideLocation);
  };

  const handleTouchStart = e => {
    e.stopPropagation();
    const touchDown = e.touches[0].clientX;
    setTouchposition(touchDown);
  };

  const handleTouchMove = e => {
    e.stopPropagation();
    const touchDown = touchPostion;
    if (touchDown === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 3) moveNextSlide();else if (diff < -3) movePrevSlide();
  };

  const handleMouseDown = e => {
    setCoordinate(e.clientX);
  };

  const handleMouseMove = e => {
    if (coordinate) {
      if (coordinate > e.clientX) moveNextSlide();else if (coordinate < e.clientX) movePrevSlide();
    }
  };

  return {
    currentSlide,
    slideLength: TOTAL_SLIDE,
    handleNextSlide,
    handlePrevSlide,
    handleMoveSelectSlide,
    handleTouchMove,
    handleTouchStart,
    handleMouseDown,
    handleMouseMove
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCarousel);

/***/ }),

/***/ 8951:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useInfiniteScroll = (queryKey, api, paramId) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useInfiniteQuery)(queryKey, ({
    pageParam = 0
  }) => api({
    lastId: pageParam,
    paramId
  }), {
    getNextPageParam: lastPage => {
      var _lastPage;

      return lastPage === null || lastPage === void 0 ? void 0 : (_lastPage = lastPage[lastPage.length - 1]) === null || _lastPage === void 0 ? void 0 : _lastPage.id;
    }
  });
  const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)();
  const resultData = data === null || data === void 0 ? void 0 : data.pages.flat();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _data$pages;

    if (!data) return;
    const isLast = ((_data$pages = data.pages) === null || _data$pages === void 0 ? void 0 : _data$pages[data.pages.length - 1].length) < 10;
    if (!isLast && hasNextPage && inView) fetchNextPage();
  }, [inView]);
  return {
    ref,
    resultData,
    isFetching,
    isLoading
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useInput = initialValue => {
  const {
    0: form,
    1: setForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);

  const handleChangeInput = e => {
    const {
      name,
      value
    } = e.target;
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      [name]: value
    }));
  };

  return {
    form,
    handleChangeInput,
    setForm
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);

/***/ }),

/***/ 2822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_useModal)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./recoil/modal/atom.ts
var atom = __webpack_require__(1071);
;// CONCATENATED MODULE: ./recoil/modal/selector.ts


const modalState = (0,external_recoil_.selectorFamily)({
  key: 'modalSelector',
  get: name => ({
    get
  }) => get(atom/* modalListState */.E).filter(modal => modal.name === name)[0]
});
;// CONCATENATED MODULE: ./recoil/modal/index.ts


;// CONCATENATED MODULE: ./hooks/common/useModal.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const useModal = modalName => {
  const [modalList, setModalList] = (0,external_recoil_.useRecoilState)(atom/* modalListState */.E);
  const modal = (0,external_recoil_.useRecoilValue)(modalState(modalName));
  const {
    isShow
  } = modal;

  const showModal = () => {
    setModalList(modalList.map(modal => {
      return _objectSpread(_objectSpread({}, modal), {}, {
        isShow: modal.name === modalName ? true : false
      });
    }));
  };

  const hideModal = () => {
    setModalList(modalList.map(modal => {
      return _objectSpread(_objectSpread({}, modal), {}, {
        isShow: modal.name === modalName ? false : modal.isShow
      });
    }));
  };

  const showImageModal = images => {
    setModalList(modalList.map(modal => {
      return _objectSpread(_objectSpread({}, modal), {}, {
        isShow: modal.name === modalName ? true : false,
        images
      });
    }));
  };

  (0,external_react_.useEffect)(() => {
    if (isShow) document.body.style.overflow = 'hidden';else document.body.style.removeProperty('overflow');
  }, [isShow]);
  return {
    isShow,
    showModal,
    hideModal,
    showImageModal,
    modal
  };
};

/* harmony default export */ const common_useModal = (useModal);

/***/ }),

/***/ 5273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const useRouteLodaing = () => {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.on('routeChangeStart', start);
    next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.on('routeChangeComplete', end);
    next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.on('routeChangeError', end);
    return () => {
      next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.off('routeChangeStart', start);
      next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.off('routeChangeComplete', end);
      next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.off('routeChangeError', end);
    };
  }, []);
  return {
    loading
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRouteLodaing);

/***/ }),

/***/ 1535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$P": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.$P),
/* harmony export */   "Gl": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.Gl),
/* harmony export */   "MQ": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.MQ),
/* harmony export */   "dd": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.dd),
/* harmony export */   "gM": () => (/* reexport safe */ _page__WEBPACK_IMPORTED_MODULE_1__.gM),
/* harmony export */   "hn": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.hn),
/* harmony export */   "iZ": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.iZ)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1756);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5581);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5371);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common__WEBPACK_IMPORTED_MODULE_0__, _page__WEBPACK_IMPORTED_MODULE_1__, _api__WEBPACK_IMPORTED_MODULE_2__]);
([_common__WEBPACK_IMPORTED_MODULE_0__, _page__WEBPACK_IMPORTED_MODULE_1__, _api__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bn": () => (/* reexport safe */ _useEditPost__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "T4": () => (/* reexport safe */ _useSignup__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "bN": () => (/* reexport safe */ _useCreateComment__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "f0": () => (/* reexport safe */ _useLogin__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "gM": () => (/* reexport safe */ _usePostLike__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "us": () => (/* reexport safe */ _useEditComment__WEBPACK_IMPORTED_MODULE_5__.Z)
/* harmony export */ });
/* harmony import */ var _useSignup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2501);
/* harmony import */ var _useLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6363);
/* harmony import */ var _usePostLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1388);
/* harmony import */ var _useEditPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2540);
/* harmony import */ var _useCreateComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9113);
/* harmony import */ var _useEditComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1380);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useSignup__WEBPACK_IMPORTED_MODULE_0__, _useLogin__WEBPACK_IMPORTED_MODULE_1__, _usePostLike__WEBPACK_IMPORTED_MODULE_2__, _useEditPost__WEBPACK_IMPORTED_MODULE_3__, _useCreateComment__WEBPACK_IMPORTED_MODULE_4__, _useEditComment__WEBPACK_IMPORTED_MODULE_5__]);
([_useSignup__WEBPACK_IMPORTED_MODULE_0__, _useLogin__WEBPACK_IMPORTED_MODULE_1__, _usePostLike__WEBPACK_IMPORTED_MODULE_2__, _useEditPost__WEBPACK_IMPORTED_MODULE_3__, _useCreateComment__WEBPACK_IMPORTED_MODULE_4__, _useEditComment__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8693);
/* harmony import */ var _consts_queryKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4981);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1756);
/* harmony import */ var _consts_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6016);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_comment__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_3__]);
([_apis_comment__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useCreateComment = () => {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
  const {
    showAlert
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_3__/* .useAlert */ .VY)();
  const {
    mutate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_apis_comment__WEBPACK_IMPORTED_MODULE_1__/* .createComment */ .Yr, {
    onSuccess: () => {
      showAlert(_consts_alert__WEBPACK_IMPORTED_MODULE_4__/* .ALERT_MESSAGE.COMMENT_CREATE */ .e.COMMENT_CREATE);
      queryClient.invalidateQueries(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_2__/* .queryKeys.comment */ .a.comment);
    },
    onError: error => {
      alert(error);
    }
  });
  return {
    mutate
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCreateComment);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8693);
/* harmony import */ var _consts_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6016);
/* harmony import */ var _consts_queryKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4981);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1756);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_comment__WEBPACK_IMPORTED_MODULE_0__, _hooks_common__WEBPACK_IMPORTED_MODULE_3__]);
([_apis_comment__WEBPACK_IMPORTED_MODULE_0__, _hooks_common__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useEditComment = () => {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();
  const {
    showAlert
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_3__/* .useAlert */ .VY)();
  const {
    mutate,
    isSuccess
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_apis_comment__WEBPACK_IMPORTED_MODULE_0__/* .editComment */ .DF, {
    onSuccess() {
      showAlert(_consts_alert__WEBPACK_IMPORTED_MODULE_1__/* .ALERT_MESSAGE.COMMENT_EDIT */ .e.COMMENT_EDIT);
      queryClient.invalidateQueries(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_2__/* .queryKeys.comment */ .a.comment);
    }

  });
  return {
    mutate,
    isSuccess
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEditComment);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2714);
/* harmony import */ var _hooks_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1756);
/* harmony import */ var _consts_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6016);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_post__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_2__]);
([_apis_post__WEBPACK_IMPORTED_MODULE_1__, _hooks_common__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useEditPost = () => {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
  const {
    showAlert
  } = (0,_hooks_common__WEBPACK_IMPORTED_MODULE_2__/* .useAlert */ .VY)();
  const {
    mutate,
    isSuccess
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_apis_post__WEBPACK_IMPORTED_MODULE_1__/* .editPost */ .dq, {
    onSuccess: () => {
      showAlert(_consts_alert__WEBPACK_IMPORTED_MODULE_3__/* .ALERT_MESSAGE.POST_EDIT */ .e.POST_EDIT);
      queryClient.invalidateQueries('posts');
      queryClient.invalidateQueries('post');
    },
    onError: error => {
      alert(error);
    }
  });
  return {
    mutate,
    isSuccess
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEditPost);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6363:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9461);
/* harmony import */ var _apis_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6649);
/* harmony import */ var _consts_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(423);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_user__WEBPACK_IMPORTED_MODULE_2__]);
_apis_user__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const useLogin = () => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    0: emailError,
    1: setEmailError
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    0: passwordError,
    1: setPasswordError
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const isDisabled = emailError == '' && passwordError == '' && email.length > 0 && password.length > 0;

  const handleChangeEmail = e => {
    setEmail(e.target.value);
    setEmailError((0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__/* .validateEmail */ .oH)(e.target.value));
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
    setPasswordError((0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__/* .validatePassword */ .uo)(e.target.value));
  };

  const handleLogin = async e => {
    e.preventDefault();

    try {
      await (0,_apis_user__WEBPACK_IMPORTED_MODULE_2__/* .login */ .x4)({
        email,
        password
      });
      router.push(_consts_route__WEBPACK_IMPORTED_MODULE_4__/* .MAIN_PAGE */ .DW);
    } catch (err) {
      alert('존재하지 않는 이메일입니다');
    }
  };
  /*
  useEffect(() => {
    if (emailError)
  }, [emailError]);
  /*
  useEffect(() => {
    checkPasswordValid();
  }, [password]);
  */


  return {
    email,
    password,
    isDisabled,
    handleLogin,
    handleChangeEmail,
    handleChangePassword,
    emailError,
    passwordError
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLogin);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1388:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_queryKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4981);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apis_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2714);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_post__WEBPACK_IMPORTED_MODULE_2__]);
_apis_post__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const usePostLike = post => {
  //const { data: user } = useQuery<UserInfoType>('user', loadMyInfo);
  const user = {
    id: 1
  };
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  const isLike = post.Likers.find(found => found.id === (user === null || user === void 0 ? void 0 : user.id));
  const {
    mutate: addLikeMutate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_apis_post__WEBPACK_IMPORTED_MODULE_2__/* .addLike */ .dE, {
    onMutate() {
      if (!user) return;
      queryClient.setQueryData(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_0__/* .queryKeys.posts */ .a.posts, data => {
        const foundPost = data === null || data === void 0 ? void 0 : data.pages.flat().find(found => found.id === post.id);

        if (foundPost) {
          foundPost.Likers.push({
            id: user.id
          });
        }

        return {
          pageParams: (data === null || data === void 0 ? void 0 : data.pageParams) || [],
          pages: (data === null || data === void 0 ? void 0 : data.pages) || []
        };
      });
    },

    onSuccess() {
      queryClient.invalidateQueries(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_0__/* .queryKeys.post */ .a.post);
    }

  });
  const {
    mutate: deleteLikeMutate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_apis_post__WEBPACK_IMPORTED_MODULE_2__/* .deleteLike */ .Nk, {
    onMutate() {
      if (!user) return;
      queryClient.setQueryData(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_0__/* .queryKeys.posts */ .a.posts, data => {
        const posts = data === null || data === void 0 ? void 0 : data.pages.flat();
        const foundPost = posts === null || posts === void 0 ? void 0 : posts.find(found => found.id === post.id);

        if (foundPost) {
          const foundPostIndex = foundPost.Likers.findIndex(found => found.id === post.id);
          foundPost.Likers.splice(foundPostIndex, 1);
        }

        return {
          pageParams: (data === null || data === void 0 ? void 0 : data.pageParams) || [],
          pages: (data === null || data === void 0 ? void 0 : data.pages) || []
        };
      });
    },

    onSuccess() {
      queryClient.invalidateQueries(_consts_queryKeys__WEBPACK_IMPORTED_MODULE_0__/* .queryKeys.post */ .a.post);
    }

  });

  const handleAddLike = e => {
    e.stopPropagation();
    addLikeMutate(post.id);
  };

  const handleDeleteLike = e => {
    e.stopPropagation();
    deleteLikeMutate(post.id);
  };

  return {
    isLike,
    handleAddLike,
    handleDeleteLike
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePostLike);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apis_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6649);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var _consts_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(423);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis_user__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__]);
([_apis_user__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const useSignup = () => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    content: '',
    errorMessage: ''
  });
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    content: '',
    errorMessage: ''
  });
  const {
    0: nickname,
    1: setNickname
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    content: '',
    errorMessage: ''
  });
  const {
    0: passwordConfirm,
    1: setPasswordConfirm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    content: '',
    errorMessage: ''
  });
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const isDisabled = email.errorMessage === '' && nickname.errorMessage === '' && password.errorMessage === '' && passwordConfirm.errorMessage === '';

  const handleSignup = async e => {
    e.preventDefault();

    try {
      await (0,_apis_user__WEBPACK_IMPORTED_MODULE_2__/* .signUp */ .y1)({
        email: email.content,
        nickname: nickname.content,
        password: password.content
      });
      alert('회원가입에 성공했습니다');
      router.push(_consts_route__WEBPACK_IMPORTED_MODULE_5__/* .LOGIN_PAGE */ .DV);
    } catch (err) {
      if (err instanceof axios__WEBPACK_IMPORTED_MODULE_3__.AxiosError) return alert('이미 등록되어 있는 아이디입니다');
    }
  };

  const handleChangeEmail = e => {
    setEmail({
      content: e.target.value,
      errorMessage: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .validateEmail */ .oH)(e.target.value)
    });
  };

  const handleChangePassword = e => {
    setPassword({
      content: e.target.value,
      errorMessage: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .validatePassword */ .uo)(e.target.value)
    });
    if (passwordConfirm.content) setPasswordConfirm(_objectSpread(_objectSpread({}, passwordConfirm), {}, {
      errorMessage: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .validatePasswordConfirm */ .Yp)(e.target.value, passwordConfirm.content)
    }));
  };

  const handleChangeNickname = e => {
    setNickname({
      content: e.target.value,
      errorMessage: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .validateNickname */ .cV)(e.target.value)
    });
  };

  const handleChangePasswordConfirm = e => {
    setPasswordConfirm({
      content: e.target.value,
      errorMessage: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .validatePasswordConfirm */ .Yp)(password.content, e.target.value)
    });
  };

  return {
    email,
    isDisabled,
    password,
    passwordConfirm,
    nickname,
    handleSignup,
    handleChangeEmail,
    handleChangeNickname,
    handleChangePassword,
    handleChangePasswordConfirm
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSignup);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bq": () => (/* reexport */ utils_createDate),
  "Xy": () => (/* reexport */ utils_createImagePath),
  "oH": () => (/* reexport */ validateEmail),
  "cV": () => (/* reexport */ validateNickname),
  "uo": () => (/* reexport */ validatePassword),
  "Yp": () => (/* reexport */ validatePasswordConfirm)
});

;// CONCATENATED MODULE: ./lib/utils/createImagePath.ts
const createImagePath = imgPath => {
  return `${imgPath}`;
};

/* harmony default export */ const utils_createImagePath = (createImagePath);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./lib/utils/createDate.ts


const createDate = value => {
  const date = external_moment_default()(value).format('YYYY-MM-DD');
  return date;
};

/* harmony default export */ const utils_createDate = (createDate);
;// CONCATENATED MODULE: ./lib/utils/validateForm.ts
const validateEmail = email => {
  const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if (!emailRegex.test(email) && email.length > 0) {
    return '이메일 형식이 다릅니다.';
  } else if (email.length < 1) return '이메일은 필수 입력입니다';else return '';
};
const validatePassword = password => {
  if (password.length === 0) return '비밀번호는 필수입력 입니다.';else return '';
};
const validateNickname = nickname => {
  if (nickname.length === 0) return '닉네임은 필수입력 입니다.';else if (nickname.length > 4) return '닉네임은 4글자 이내로 입력해주세요.';else return '';
};
const validatePasswordConfirm = (password, passwordConfirm) => {
  if (password !== passwordConfirm) return '비밀번호가 다릅니다';else return '';
};
;// CONCATENATED MODULE: ./lib/utils/index.ts




/***/ }),

/***/ 1071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ modalListState),
/* harmony export */   "m": () => (/* binding */ modalAtomState)
/* harmony export */ });
/* harmony import */ var _consts_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4266);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);


const modalAtomState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
  key: 'modal',
  default: false
});
const modalListState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
  key: 'modalList',
  default: [{
    name: _consts_modal__WEBPACK_IMPORTED_MODULE_0__/* .modalName.POST_IMAGE */ .P.POST_IMAGE,
    isShow: false,
    images: []
  }, {
    name: _consts_modal__WEBPACK_IMPORTED_MODULE_0__/* .modalName.PROFILE_EDIT */ .P.PROFILE_EDIT,
    isShow: false
  }, {
    name: _consts_modal__WEBPACK_IMPORTED_MODULE_0__/* .modalName.CONFIRM_REMOVE */ .P.CONFIRM_REMOVE,
    isShow: false
  }]
});

/***/ })

};
;
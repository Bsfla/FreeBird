"use strict";
exports.id = 992;
exports.ids = [992];
exports.modules = {

/***/ 6992:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7097);
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1829);
/* harmony import */ var _hooks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5581);
/* harmony import */ var _consts_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(423);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_page__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_page__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const RegisterForm = () => {
  const {
    nickname,
    email,
    password,
    passwordConfirm,
    handleChangeNickname,
    handleChangeEmail,
    handleChangePassword,
    handleChangePasswordConfirm,
    isDisabled,
    handleSignup
  } = (0,_hooks_page__WEBPACK_IMPORTED_MODULE_3__/* .useSignup */ .T4)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_1__/* .Wrapper */ .im, {
    onSubmit: handleSignup,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .Title */ .Dx, {
      children: "SignUp"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
      children: "\uD68C\uC6D0 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .II, {
      placeholder: "\uB2C9\uB124\uC784",
      name: "nickname",
      value: nickname.content,
      onChange: handleChangeNickname
    }), nickname.errorMessage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .Error */ .jj, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        children: nickname.errorMessage
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .II, {
      placeholder: "\uC774\uBA54\uC77C",
      name: "email",
      value: email.content,
      onChange: handleChangeEmail
    }), email.errorMessage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .Error */ .jj, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        children: email.errorMessage
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .II, {
      placeholder: "\uBE44\uBC00\uBC88\uD638",
      name: "password",
      type: "password",
      value: password.content,
      onChange: handleChangePassword
    }), password.errorMessage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .Error */ .jj, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        children: password.errorMessage
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .II, {
      placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
      name: "passwordconfirm",
      type: "password",
      value: passwordConfirm.content,
      onChange: handleChangePasswordConfirm
    }), passwordConfirm.errorMessage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_style__WEBPACK_IMPORTED_MODULE_1__/* .Error */ .jj, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        children: passwordConfirm.errorMessage
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      name: "\uAC00\uC785\uD558\uAE30",
      disabled: !isDisabled
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: _consts_route__WEBPACK_IMPORTED_MODULE_6__/* .LOGIN_PAGE */ .DV,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        className: "login",
        children: "\uB85C\uADF8\uC778"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "II": () => (/* binding */ Input),
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "jj": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3055);


const SlideUp = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{opacity:0;transform:translateY(5%);}to{opacity:1;transform:translateY(0);}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "style__Wrapper",
  componentId: "sc-9e95dw-0"
})(["display:flex;flex-direction:column;align-items:center;width:40rem;height:auto;background-color:", ";border-radius:20px;animation:", " 0.5s;margin-bottom:50px;padding-bottom:25px;span{color:", ";font-weight:bold;margin-bottom:25px;}", "{width:80%;}", "{width:428px;height:100vh;}.login{margin-top:20px;cursor:pointer;}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.white */ .Z.colors.white, SlideUp, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub */ .Z.colors.sub, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.laptop */ .Z.media.laptop, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.mobile2 */ .Z.media.mobile2);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "style__Title",
  componentId: "sc-9e95dw-1"
})(["font-family:", ";font-size:32px;color:", ";margin-bottom:30px;"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].font.title */ .Z.font.title, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.sub */ .Z.colors.sub);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "style__Input",
  componentId: "sc-9e95dw-2"
})(["width:30rem;padding:15px;border:none;outline:none;border-bottom:solid ", ";font-weight:bold;font-size:12px;margin-top:15px;", "{width:60%;}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].colors.main */ .Z.colors.main, styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.laptop */ .Z.media.laptop);
const Error = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Error",
  componentId: "sc-9e95dw-3"
})(["display:flex;justify-content:flex-start;width:30rem;span{margin-left:15px;margin-top:10px;font-size:13px;color:red;}", "{width:60%;}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"].media.laptop */ .Z.media.laptop);

/***/ })

};
;
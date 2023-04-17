"use strict";
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 1829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Button)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(777);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(3055);
;// CONCATENATED MODULE: ./components/common/Button/style.tsx


const StyledButton = /*#__PURE__*/base_default()("button",  true ? {
  target: "ecwozdu0"
} : 0)("width:20rem;padding:15px;background-color:", theme/* default.colors.sub */.Z.colors.sub, ";color:", theme/* default.colors.white */.Z.colors.white, ";font-size:20px;margin-top:20px;border-radius:8px;border:none;cursor:pointer;&:active{background-color:", theme/* default.colors.sub2 */.Z.colors.sub2, ";}", theme/* default.media.laptop */.Z.media.laptop, "{width:50%;}&:disabled{background-color:", theme/* default.colors.gray2 */.Z.colors.gray2, ";}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/Button/index.tsx




const Button = ({
  name,
  disabled,
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledButton, {
    disabled: disabled,
    onClick: onClick,
    children: name
  });
};

/* harmony default export */ const common_Button = (Button);

/***/ })

};
;
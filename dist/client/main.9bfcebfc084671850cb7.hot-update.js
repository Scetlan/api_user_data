webpackHotUpdate("main",{

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useToken = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction useToken() {\n    var _a = (0, react_1.useState)(''), token = _a[0], setToken = _a[1];\n    (0, react_1.useEffect)(function () {\n        if (window.__token__) {\n            setToken(window.token__);\n        }\n    }, []);\n    return [token];\n}\nexports.useToken = useToken;\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ })

})
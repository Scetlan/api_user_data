webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\n// import { EColor, NameUser } from \"./shared/NameUser\";\nfunction AppComponent() {\n    var url = new URL(window.location.href);\n    console.log(url.searchParams.get('code'));\n    var token = (0, useToken_1.useToken)()[0];\n    return (react_1.default.createElement(Layout_1.Layout, null,\n        react_1.default.createElement(Header_1.Header, { token: token }),\n        react_1.default.createElement(Content_1.Content, null,\n            react_1.default.createElement(CardsList_1.CardsList, null))));\n}\nexports.App = (0, root_1.hot)(AppComponent);\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useToken = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction useToken() {\n    var _a = (0, react_1.useState)(''), token = _a[0], setToken = _a[1];\n    (0, react_1.useEffect)(function () {\n        if (window.__token__) {\n            setToken(window.__token__);\n        }\n    }, []);\n    return [token];\n}\nexports.useToken = useToken;\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ })

})
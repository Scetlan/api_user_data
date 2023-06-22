webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/ButtonResponse/buttonresponse.css":
false,

/***/ "./src/shared/ButtonResponse/ButtonResponse.tsx":
/*!******************************************************!*\
  !*** ./src/shared/ButtonResponse/ButtonResponse.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ButtonResponse = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar pesponseContext_1 = __webpack_require__(/*! ../context/pesponseContext */ \"./src/shared/context/pesponseContext.ts\");\nfunction ButtonResponse(_a) {\n    var props = _a.props;\n    var _b = (0, react_1.useContext)(pesponseContext_1.responseContext), value = _b.value, onChange = _b.onChange;\n    var inputValue, setInputValue;\n}\nexports.ButtonResponse = ButtonResponse;\n(0, react_1.useState)(props.surname);\nfunction handleChange(event) {\n    var newValue = event.target.value;\n    setInputValue(newValue);\n}\nfunction handleSubmit(event) {\n    event.preventDefault();\n}\nreturn (react_1.default.createElement(\"form\", { className: buttonresponse_css_1.default.inputResponse, onSubmit: handleSubmit },\n    react_1.default.createElement(\"textarea\", { className: buttonresponse_css_1.default.textarea, onChange: handleChange, value: inputValue }),\n    react_1.default.createElement(\"button\", { type: 'submit', className: buttonresponse_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\n\n\n//# sourceURL=webpack:///./src/shared/ButtonResponse/ButtonResponse.tsx?");

/***/ }),

/***/ "./src/shared/ButtonResponse/buttonresponse.css":
false,

/***/ "./src/shared/ButtonResponse/index.ts":
/*!********************************************!*\
  !*** ./src/shared/ButtonResponse/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ButtonResponse */ \"./src/shared/ButtonResponse/ButtonResponse.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/ButtonResponse/index.ts?");

/***/ })

})
webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/DropDownMenu/DropDownMenu.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/DropDownMenu/DropDownMenu.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DropDownMenu = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar dropdownmenu_css_1 = __importDefault(__webpack_require__(/*! ./dropdownmenu.css */ \"./src/shared/CardsList/Card/DropDownMenu/dropdownmenu.css\"));\nfunction DropDownMenu(_a) {\n    var list = _a.list;\n    var menuModal = document.querySelector('#menuModal');\n    if (!menuModal)\n        return null;\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: dropdownmenu_css_1.default.containerMenu },\n        react_1.default.createElement(\"ul\", { className: dropdownmenu_css_1.default.list }, list.map(function (item) { return (react_1.default.createElement(\"li\", { className: dropdownmenu_css_1.default.item, key: item.id },\n            item.svg,\n            item.value)); })))), menuModal;\n    ;\n}\nexports.DropDownMenu = DropDownMenu;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/DropDownMenu/DropDownMenu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/DropDownMenu/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/DropDownMenu/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./DropDownMenu */ \"./src/shared/CardsList/Card/DropDownMenu/DropDownMenu.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/DropDownMenu/index.ts?");

/***/ })

})
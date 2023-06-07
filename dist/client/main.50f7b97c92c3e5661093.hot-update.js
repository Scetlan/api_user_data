webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (16:18)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| var Layout_1 = require(\\\"./shared/Layout\\\");\\n| function AppComponent() {\\n>     var url = new ;\\n|     var token = (0, useToken_1.useTocen)()[0];\\n|     return (react_1.default.createElement(Layout_1.Layout, null,\");\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n//первое что делаем, это импортируем React и ReactDOM\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\n//ВАЖНАЯ ЧАСТЬ:так как в последствии мы будем добавлять сюда SSR\n//нам необходимо сделать так чтобы эта часть кода срабатывала только в браузере\n// поэтому сделаем событие на загрузку страницы. Когда страница загрузится, то зарендерим наше приложение\nwindow.addEventListener('load', function () {\n    //делаем следующую конструкцию ReactDOM.render(). \n    //render({компанент с которого начинается приложение}, {элемент из itml верстки в которую будет монтироваться все что мы написали на React})\n    ReactDOM.hydrate(React.createElement(App_1.App, null), document.getElementById('react_root'));\n});\n///теперь создадим файл webpack.config.js\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ })

})
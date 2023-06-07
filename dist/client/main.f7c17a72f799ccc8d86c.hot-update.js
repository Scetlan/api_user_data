webpackHotUpdate("main",{

/***/ "../node_modules/classnames/index.js":
/*!*******************************************!*\
  !*** ../node_modules/classnames/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n/*!\n    Copyright (c) 2018 Jed Watson.\n    Licensed under the MIT License (MIT), see\n    http://jedwatson.github.io/classnames\n*/\n/* global define */\n(function () {\n    'use strict';\n    var hasOwn = {}.hasOwnProperty;\n    var nativeCodeString = '[native code]';\n    function classNames() {\n        var classes = [];\n        for (var i = 0; i < arguments.length; i++) {\n            var arg = arguments[i];\n            if (!arg)\n                continue;\n            var argType = typeof arg;\n            if (argType === 'string' || argType === 'number') {\n                classes.push(arg);\n            }\n            else if (Array.isArray(arg)) {\n                if (arg.length) {\n                    var inner = classNames.apply(null, arg);\n                    if (inner) {\n                        classes.push(inner);\n                    }\n                }\n            }\n            else if (argType === 'object') {\n                if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n                    classes.push(arg.toString());\n                    continue;\n                }\n                for (var key in arg) {\n                    if (hasOwn.call(arg, key) && arg[key]) {\n                        classes.push(key);\n                    }\n                }\n            }\n        }\n        return classes.join(' ');\n    }\n    if ( true && module.exports) {\n        classNames.default = classNames;\n        module.exports = classNames;\n    }\n    else if (true) {\n        // register as 'classnames', consistent with npm package name\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n            return classNames;\n        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    }\n    else {}\n}());\n\n\n//# sourceURL=webpack:///../node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Break/break.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Break/break.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".break__s4--rnbuA {\\n    padding: 0 4px 0 0;\\n  }\\n  .break__s8--2ubV4 {\\n    padding: 0 8px 0 0;\\n  }\\n  .break__s12--3dSW2 {\\n    padding: 0 12px 0 0;\\n  }\\n  .break__s16--2bop2 {\\n    padding: 0 16px 0 0;\\n  }\\n  .break__s20--PBhCB {\\n    padding: 0 20px 0 0;\\n  }\\n  \\n  .break__inline--22pcx {\\n    display: inline;\\n  }\\n  \\n  .break__top--25ISJ.break__s4--rnbuA {\\n    padding: 4px 0 0;\\n  }\\n  .break__top--25ISJ.break__s8--2ubV4 {\\n    padding: 8px 0 0;\\n  }\\n  .break__top--25ISJ.break__s12--3dSW2 {\\n    padding: 12px 0 0;\\n  }\\n  .break__top--25ISJ.break__s16--2bop2 {\\n    padding: 16px 0 0;\\n  }\\n  .break__top--25ISJ.break__s20--PBhCB {\\n    padding: 20px 0 0;\\n  }\\n  \\n  @media all and (max-width: 1023px) {\\n    .break__mobile_s4--LrEFY {\\n      padding: 0 4px 0 0;\\n    }\\n    .break__mobile_s8--1Tmgm {\\n      padding: 0 8px 0 0;\\n    }\\n    .break__mobile_s12--2En9X {\\n      padding: 0 12px 0 0;\\n    }\\n    .break__mobile_s16--2KmPq {\\n      padding: 0 16px 0 0;\\n    }\\n    .break__mobile_s20--1j8g5 {\\n      padding: 0 20px 0 0;\\n    }\\n  \\n    .break__top--25ISJ.break__mobile_s4--LrEFY {\\n      padding: 4px 0 0;\\n    }\\n    .break__top--25ISJ.break__mobile_s8--1Tmgm {\\n      padding: 8px 0 0;\\n    }\\n    .break__top--25ISJ.break__mobile_s12--2En9X {\\n      padding: 12px 0 0;\\n    }\\n    .break__top--25ISJ.break__mobile_s16--2KmPq {\\n      padding: 16px 0 0;\\n    }\\n    .break__top--25ISJ.break__mobile_s20--1j8g5 {\\n      padding: 20px 0 0;\\n    }\\n  }\\n  \\n  @media all and (min-width: 1024px) and (max-width: 1539px) {\\n    .break__tablet_s4--2nTnL {\\n      padding: 0 4px 0 0;\\n    }\\n    .break__tablet_s8--7zEhs {\\n      padding: 0 8px 0 0;\\n    }\\n    .break__tablet_s12--3Y-kT {\\n      padding: 0 12px 0 0;\\n    }\\n    .break__tablet_s16--2rsLQ {\\n      padding: 0 16px 0 0;\\n    }\\n    .break__tablet_s20--V1f92 {\\n      padding: 0 20px 0 0;\\n    }\\n  \\n    .break__top--25ISJ.break__tablet_s4--2nTnL {\\n      padding: 4px 0 0;\\n    }\\n    .break__top--25ISJ.break__tablet_s8--7zEhs {\\n      padding: 8px 0 0;\\n    }\\n    .break__top--25ISJ.break__tablet_s12--3Y-kT {\\n      padding: 12px 0 0;\\n    }\\n    .break__top--25ISJ.break__tablet_s16--2rsLQ {\\n      padding: 16px 0 0;\\n    }\\n    .break__top--25ISJ.break__tablet_s20--V1f92 {\\n      padding: 20px 0 0;\\n    }\\n  }\\n  \\n  @media all and (min-width: 1540px) {\\n    .break__desktop_s4--3mFLY {\\n      padding: 0 4px 0 0;\\n    }\\n    .break__desktop_s8--2uQYJ {\\n      padding: 0 8px 0 0;\\n    }\\n    .break__desktop_s12--1-0wy {\\n      padding: 0 12px 0 0;\\n    }\\n    .break__desktop_s16--2k7qE {\\n      padding: 0 16px 0 0;\\n    }\\n    .break__desktop_s20--AjVsi {\\n      padding: 0 20px 0 0;\\n    }\\n  \\n    .break__top--25ISJ.break__desktop_s4--3mFLY {\\n      padding: 4px 0 0;\\n    }\\n    .break__top--25ISJ.break__desktop_s8--2uQYJ {\\n      padding: 8px 0 0;\\n    }\\n    .break__top--25ISJ.break__desktop_s12--1-0wy {\\n      padding: 12px 0 0;\\n    }\\n    .break__top--25ISJ.break__desktop_s16--2k7qE {\\n      padding: 16px 0 0;\\n    }\\n    .break__top--25ISJ.break__desktop_s20--AjVsi {\\n      padding: 20px 0 0;\\n    }\\n  }\", \"\"]);\n// Exports\nexports.locals = {\n\t\"s4\": \"break__s4--rnbuA\",\n\t\"s8\": \"break__s8--2ubV4\",\n\t\"s12\": \"break__s12--3dSW2\",\n\t\"s16\": \"break__s16--2bop2\",\n\t\"s20\": \"break__s20--PBhCB\",\n\t\"inline\": \"break__inline--22pcx\",\n\t\"top\": \"break__top--25ISJ\",\n\t\"mobile_s4\": \"break__mobile_s4--LrEFY\",\n\t\"mobile_s8\": \"break__mobile_s8--1Tmgm\",\n\t\"mobile_s12\": \"break__mobile_s12--2En9X\",\n\t\"mobile_s16\": \"break__mobile_s16--2KmPq\",\n\t\"mobile_s20\": \"break__mobile_s20--1j8g5\",\n\t\"tablet_s4\": \"break__tablet_s4--2nTnL\",\n\t\"tablet_s8\": \"break__tablet_s8--7zEhs\",\n\t\"tablet_s12\": \"break__tablet_s12--3Y-kT\",\n\t\"tablet_s16\": \"break__tablet_s16--2rsLQ\",\n\t\"tablet_s20\": \"break__tablet_s20--V1f92\",\n\t\"desktop_s4\": \"break__desktop_s4--3mFLY\",\n\t\"desktop_s8\": \"break__desktop_s8--2uQYJ\",\n\t\"desktop_s12\": \"break__desktop_s12--1-0wy\",\n\t\"desktop_s16\": \"break__desktop_s16--2k7qE\",\n\t\"desktop_s20\": \"break__desktop_s20--AjVsi\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".userblock__userBox--24rEF {\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n  }\\n  \\n  .userblock__userBox--24rEF:hover span {\\n    color: var(--orange);\\n  }\\n  .userblock__userBox--24rEF:hover .userblock__avatarBox--2OTfi {\\n    box-shadow: 0 0 0 1px var(--orange);\\n  }\\n  \\n  .userblock__avatarBox--2OTfi {\\n    width: 60px;\\n    height: 60px;\\n    padding: 5px;\\n    border-radius: 100%;\\n    box-shadow: none;\\n  }\\n  \\n  .userblock__avatarImage--2ryXC {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n    border-radius: 100%;\\n  }\\n  \\n  .userblock__username--3bLc0 {\\n    display: none;\\n  }\\n  \\n  @media all and (min-width: 1024px) {\\n    .userblock__username--3bLc0 {\\n      display: flex;\\n    }\\n  }\", \"\"]);\n// Exports\nexports.locals = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".searchblock__searchBlock--3aDPv {\\n    display: flex;\\n    flex-flow: row nowrap;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 14px 20px;\\n    background-color: var(--white);\\n    border-radius: 0 0 7px 7px;\\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\\n    margin: 0 0 38px;\\n}\\n\\n@media all and (min-width: 1024px) {\\n    .searchblock__searchBlock--3aDPv {\\n        padding: 0;\\n        margin: 0 0 0 auto;\\n        background-color: transparent;\\n        border-radius: 0;\\n        box-shadow: none;\\n        order: 3;\\n    }\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/NameUser/nameuser.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/NameUser/nameuser.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".nameuser__s28--DJxg1 {\\n    font-size: 28px;\\n    line-height: 33px;\\n}\\n\\n.nameuser__s20--3iGCT {\\n    font-size: 20px;\\n    line-height: 23px;\\n}\\n\\n.nameuser__s16--1grI- {\\n    font-size: 16px;\\n    line-height: 19px;\\n}\\n\\n.nameuser__s14--2I1vv {\\n    font-size: 14px;\\n    line-height: 16px;\\n}\\n\\n.nameuser__s12--2kfBl {\\n    font-size: 12px;\\n    line-height: 14px;\\n}\\n\\n.nameuser__s10--3XzGK {\\n    font-size: 10px;\\n    line-height: 12px;\\n}\\n\\n.nameuser__black--3nIZ7 {\\n    color: var(--black);\\n}\\n\\n.nameuser__orange--dWBDt {\\n    color: var(--orange);\\n}\\n\\n.nameuser__green--3nLpt {\\n    color: var(--green);\\n}\\n\\n.nameuser__white--3tUmB {\\n    color: var(--white);\\n}\\n\\n.nameuser__grayF4--35TWN {\\n    color: var(--grayF4);\\n}\\n\\n.nameuser__greyF3--m20jy {\\n    color: var(--greyF3);\\n}\\n\\n.nameuser__greyD9--1ROW- {\\n    color: var(--greyD9);\\n}\\n\\n.nameuser__greyC4--CinBt {\\n    color: var(--greyC4);\\n}\\n\\n.nameuser__grey99--15QFy {\\n    color: var(--grey99);\\n}\\n\\n.nameuser__grey66--3WeBV {\\n    color: var(--grey66);\\n}\\n\\n.nameuser__upperCase--2K9xx {\\n    text-transform: uppercase;\\n}\\n\\n@media all and (min-width: 320px) and (max-width: 1023px) {\\n    .nameuser__m28--33jcs {\\n        font-size: 28px;\\n        line-height: 33px;\\n    }\\n\\n    .nameuser__m20--cBeOr {\\n        font-size: 20px;\\n        line-height: 23px;\\n    }\\n\\n    .nameuser__m16--2dXGK {\\n        font-size: 16px;\\n        line-height: 19px;\\n    }\\n\\n    .nameuser__m14--2SHvm {\\n        font-size: 14px;\\n        line-height: 16px;\\n    }\\n\\n    .nameuser__m12--38l0c {\\n        font-size: 12px;\\n        line-height: 14px;\\n    }\\n\\n    .nameuser__m10--1aUhU {\\n        font-size: 10px;\\n        line-height: 12px;\\n    }\\n}\\n\\n.nameuser__bold--eE7uW {\\n    font-weight: 500;\\n}\\n\\n@media all and (min-width: 1024px) and (max-width: 1539px) {\\n    .nameuser__t28--3hFof {\\n        font-size: 28px;\\n        line-height: 33px;\\n    }\\n\\n    .nameuser__t20--1k3TP {\\n        font-size: 20px;\\n        line-height: 23px;\\n    }\\n\\n    .nameuser__t16--3bbjp {\\n        font-size: 16px;\\n        line-height: 19px;\\n    }\\n\\n    .nameuser__t14--3wcLh {\\n        font-size: 14px;\\n        line-height: 16px;\\n    }\\n\\n    .nameuser__t12--bUHgQ {\\n        font-size: 12px;\\n        line-height: 14px;\\n    }\\n\\n    .nameuser__t10--2WGlb {\\n        font-size: 10px;\\n        line-height: 12px;\\n    }\\n}\\n\\n@media all and (min-width: 1540px) {\\n    .nameuser__d28--3aKZO {\\n        font-size: 28px;\\n        line-height: 33px;\\n    }\\n\\n    .nameuser__d20--1P_ri {\\n        font-size: 20px;\\n        line-height: 23px;\\n    }\\n\\n    .nameuser__d16--1xQSu {\\n        font-size: 16px;\\n        line-height: 19px;\\n    }\\n\\n    .nameuser__d14--anysO {\\n        font-size: 14px;\\n        line-height: 16px;\\n    }\\n\\n    .nameuser__d12--15gwz {\\n        font-size: 12px;\\n        line-height: 14px;\\n    }\\n\\n    .nameuser__d10--3eAgA {\\n        font-size: 10px;\\n        line-height: 12px;\\n    }\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"s28\": \"nameuser__s28--DJxg1\",\n\t\"s20\": \"nameuser__s20--3iGCT\",\n\t\"s16\": \"nameuser__s16--1grI-\",\n\t\"s14\": \"nameuser__s14--2I1vv\",\n\t\"s12\": \"nameuser__s12--2kfBl\",\n\t\"s10\": \"nameuser__s10--3XzGK\",\n\t\"black\": \"nameuser__black--3nIZ7\",\n\t\"orange\": \"nameuser__orange--dWBDt\",\n\t\"green\": \"nameuser__green--3nLpt\",\n\t\"white\": \"nameuser__white--3tUmB\",\n\t\"grayF4\": \"nameuser__grayF4--35TWN\",\n\t\"greyF3\": \"nameuser__greyF3--m20jy\",\n\t\"greyD9\": \"nameuser__greyD9--1ROW-\",\n\t\"greyC4\": \"nameuser__greyC4--CinBt\",\n\t\"grey99\": \"nameuser__grey99--15QFy\",\n\t\"grey66\": \"nameuser__grey66--3WeBV\",\n\t\"upperCase\": \"nameuser__upperCase--2K9xx\",\n\t\"m28\": \"nameuser__m28--33jcs\",\n\t\"m20\": \"nameuser__m20--cBeOr\",\n\t\"m16\": \"nameuser__m16--2dXGK\",\n\t\"m14\": \"nameuser__m14--2SHvm\",\n\t\"m12\": \"nameuser__m12--38l0c\",\n\t\"m10\": \"nameuser__m10--1aUhU\",\n\t\"bold\": \"nameuser__bold--eE7uW\",\n\t\"t28\": \"nameuser__t28--3hFof\",\n\t\"t20\": \"nameuser__t20--1k3TP\",\n\t\"t16\": \"nameuser__t16--3bbjp\",\n\t\"t14\": \"nameuser__t14--3wcLh\",\n\t\"t12\": \"nameuser__t12--bUHgQ\",\n\t\"t10\": \"nameuser__t10--2WGlb\",\n\t\"d28\": \"nameuser__d28--3aKZO\",\n\t\"d20\": \"nameuser__d20--1P_ri\",\n\t\"d16\": \"nameuser__d16--1xQSu\",\n\t\"d14\": \"nameuser__d14--anysO\",\n\t\"d12\": \"nameuser__d12--15gwz\",\n\t\"d10\": \"nameuser__d10--3eAgA\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/NameUser/nameuser.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Break = void 0;\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\"));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\nfunction Break(props) {\n    var _a, _b, _c, _d, _e;\n    var size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize, _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g;\n    return (react_1.default.createElement(\"div\", { className: (0, classnames_1.default)(break_css_1.default[\"s\".concat(size)], (_a = {}, _a[break_css_1.default[\"mobile_s\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"mobile_s\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[break_css_1.default[\"mobile_s\".concat(desktopSize)]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e)) }));\n}\nexports.Break = Break;\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./break.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Break/break.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./break.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Break/break.css\",\n      function () {\n        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./break.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Break/break.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\nfunction SearchBlock(_a) {\n    var token = _a.token;\n    (0, react_1.useEffect)(function () { });\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\n        react_1.default.createElement(UserBlock_1.UserBlock, null)));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\nvar NameUser_1 = __webpack_require__(/*! ../../../NameUser */ \"./src/shared/NameUser/index.ts\");\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\n//Ранее в href был read submit - хз зачем, Света не знает\nfunction UserBlock(_a) {\n    var avatarSrc = _a.avatarSrc, username = _a.username;\n    return (react_1.default.createElement(\"a\", { className: userblock_css_1.default.userBox, href: \"https://www.reddit.com/api/v1/authorize?client_id=nX9OpC-uNuyAX6uskR7HIQ&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000&scope=identity read submit\" },\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, className: userblock_css_1.default.avatarImage, alt: 'user avatar' })\n            : react_1.default.createElement(Icon_1.IconAnon, null)),\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\n            react_1.default.createElement(NameUser_1.NameUser, { size: 20, color: username ? NameUser_1.EColor.black : NameUser_1.EColor.gray99 }, username || 'Аноним'))));\n}\nexports.UserBlock = UserBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./userblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/UserBlock/userblock.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./userblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/UserBlock/userblock.css\",\n      function () {\n        content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./userblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/UserBlock/userblock.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./searchblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/searchblock.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./searchblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/searchblock.css\",\n      function () {\n        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./searchblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/searchblock.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Icon/IconAnon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icon/IconAnon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconAnon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nfunction IconAnon() {\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\n}\nexports.IconAnon = IconAnon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/IconAnon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./IconAnon */ \"./src/shared/Icon/IconAnon.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/NameUser/NameUser.tsx":
/*!******************************************!*\
  !*** ./src/shared/NameUser/NameUser.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.NameUser = exports.EColor = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar nameuser_css_1 = __importDefault(__webpack_require__(/*! ./nameuser.css */ \"./src/shared/NameUser/nameuser.css\"));\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\"));\nvar EColor;\n(function (EColor) {\n    EColor[\"black\"] = \"black\";\n    EColor[\"orange\"] = \"orange\";\n    EColor[\"green\"] = \"green\";\n    EColor[\"white\"] = \"white\";\n    EColor[\"grayF4\"] = \"grayF4\";\n    EColor[\"grayF3\"] = \"grayF3\";\n    EColor[\"grayD9\"] = \"grayD9\";\n    EColor[\"grayC4\"] = \"grayC4\";\n    EColor[\"gray99\"] = \"gray99\";\n    EColor[\"gray66\"] = \"gray66\";\n})(EColor = exports.EColor || (exports.EColor = {}));\nfunction NameUser(props) {\n    var _a, _b, _c;\n    var _d = props.As, As = _d === void 0 ? 'span' : _d, _e = props.color, color = _e === void 0 ? EColor.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;\n    var classes = (0, classnames_1.default)(nameuser_css_1.default[\"s\".concat(size)], nameuser_css_1.default[color], (_a = {}, _a[nameuser_css_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[nameuser_css_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[nameuser_css_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c));\n    return (react_1.default.createElement(As, { className: classes }, children));\n}\nexports.NameUser = NameUser;\n\n\n//# sourceURL=webpack:///./src/shared/NameUser/NameUser.tsx?");

/***/ }),

/***/ "./src/shared/NameUser/index.ts":
/*!**************************************!*\
  !*** ./src/shared/NameUser/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./NameUser */ \"./src/shared/NameUser/NameUser.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/NameUser/index.ts?");

/***/ }),

/***/ "./src/shared/NameUser/nameuser.css":
/*!******************************************!*\
  !*** ./src/shared/NameUser/nameuser.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./nameuser.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/NameUser/nameuser.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./nameuser.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/NameUser/nameuser.css\",\n      function () {\n        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./nameuser.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/NameUser/nameuser.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/NameUser/nameuser.css?");

/***/ })

})
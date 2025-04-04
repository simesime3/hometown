/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.css */ \"(pages-dir-node)/./src/components/Header/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaUserCircle!=!react-icons/fa */ \"(pages-dir-node)/__barrel_optimize__?names=FaUserCircle!=!./node_modules/react-icons/fa/index.mjs\");\n\n\n\n\n // マイページアイコン\nconst Header = ({ onHeightChange })=>{\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // refを使ってheaderの高さを取得\n    // ヘッダーの高さを親コンポーネントに伝える\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Header.useEffect\": ()=>{\n            if (headerRef.current && onHeightChange) {\n                onHeightChange(headerRef.current.offsetHeight); // 親に高さを通知\n            }\n        }\n    }[\"Header.useEffect\"], [\n        onHeightChange\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        ref: headerRef,\n        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().leftSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/mypage\",\n                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().mypageIcon),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUserCircle, {\n                            size: 32,\n                            color: \"black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/components/Header/Header.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/components/Header/Header.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().logoContainer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/assets/images/logo.png\",\n                            alt: \"My Travel App Logo\",\n                            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo)\n                        }, void 0, false, {\n                            fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/components/Header/Header.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/components/Header/Header.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/components/Header/Header.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().hamburger),\n                onClick: ()=>setMenuOpen(!menuOpen),\n                children: \"☰\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/components/Header/Header.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: `${(_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav)} ${menuOpen ? (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().open) : \"\"}`,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/components/Header/Header.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/about\",\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/components/Header/Header.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/contact\",\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/components/Header/Header.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/components/Header/Header.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/components/Header/Header.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDbEI7QUFDWjtBQUNpQixDQUFFLFlBQVk7QUFFNUQsTUFBTU8sU0FBUyxDQUFDLEVBQUVDLGNBQWMsRUFBRTtJQUNoQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTVUsWUFBWVQsNkNBQU1BLENBQUMsT0FBUSxzQkFBc0I7SUFFdkQsdUJBQXVCO0lBQ3ZCQyxnREFBU0E7NEJBQUM7WUFDUixJQUFJUSxVQUFVQyxPQUFPLElBQUlKLGdCQUFnQjtnQkFDdkNBLGVBQWVHLFVBQVVDLE9BQU8sQ0FBQ0MsWUFBWSxHQUFHLFVBQVU7WUFDNUQ7UUFDRjsyQkFBRztRQUFDTDtLQUFlO0lBRW5CLHFCQUNFLDhEQUFDTTtRQUFPQyxLQUFLSjtRQUFXSyxXQUFXWixrRUFBYTs7MEJBQzlDLDhEQUFDYTtnQkFBSUQsV0FBV1osdUVBQWtCOztrQ0FFaEMsOERBQUNDLGtEQUFJQTt3QkFBQ2MsTUFBSzt3QkFBVUgsV0FBV1osc0VBQWlCO2tDQUMvQyw0RUFBQ0UsNEZBQVlBOzRCQUFDZSxNQUFNOzRCQUFJQyxPQUFNOzs7Ozs7Ozs7OztrQ0FHaEMsOERBQUNMO3dCQUFJRCxXQUFXWix5RUFBb0I7a0NBQ2xDLDRFQUFDb0I7NEJBQ0NDLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pWLFdBQVdaLGdFQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNNUIsOERBQUN3QjtnQkFDQ1osV0FBV1oscUVBQWdCO2dCQUMzQjBCLFNBQVMsSUFBTXBCLFlBQVksQ0FBQ0Q7MEJBQzdCOzs7Ozs7MEJBS0QsOERBQUNzQjtnQkFBSWYsV0FBVyxHQUFHWiwrREFBVSxDQUFDLENBQUMsRUFBRUssV0FBV0wsZ0VBQVcsR0FBRyxJQUFJOztrQ0FDNUQsOERBQUNDLGtEQUFJQTt3QkFBQ2MsTUFBSztrQ0FBSTs7Ozs7O2tDQUNmLDhEQUFDZCxrREFBSUE7d0JBQUNjLE1BQUs7a0NBQVM7Ozs7OztrQ0FDcEIsOERBQUNkLGtEQUFJQTt3QkFBQ2MsTUFBSztrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0FBRUEsaUVBQWVaLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2dha2F0c3VtYS9Eb2N1bWVudHMv6ZaL55m644Kz44O844OI44KZL3RlY2gwL2hvbWV0b3duX3RheC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSGVhZGVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEZhVXNlckNpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiOyAgLy8g44Oe44Kk44Oa44O844K444Ki44Kk44Kz44OzXG5cbmNvbnN0IEhlYWRlciA9ICh7IG9uSGVpZ2h0Q2hhbmdlIH0pID0+IHtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhlYWRlclJlZiA9IHVzZVJlZihudWxsKTsgIC8vIHJlZuOCkuS9v+OBo+OBpmhlYWRlcuOBrumrmOOBleOCkuWPluW+l1xuXG4gIC8vIOODmOODg+ODgOODvOOBrumrmOOBleOCkuimquOCs+ODs+ODneODvOODjeODs+ODiOOBq+S8neOBiOOCi1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoZWFkZXJSZWYuY3VycmVudCAmJiBvbkhlaWdodENoYW5nZSkge1xuICAgICAgb25IZWlnaHRDaGFuZ2UoaGVhZGVyUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0KTsgLy8g6Kaq44Gr6auY44GV44KS6YCa55+lXG4gICAgfVxuICB9LCBbb25IZWlnaHRDaGFuZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgcmVmPXtoZWFkZXJSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRTZWN0aW9ufT5cbiAgICAgICAgey8qIOODnuOCpOODmuODvOOCuOOCouOCpOOCs+ODsyAqL31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9teXBhZ2VcIiBjbGFzc05hbWU9e3N0eWxlcy5teXBhZ2VJY29ufT5cbiAgICAgICAgICA8RmFVc2VyQ2lyY2xlIHNpemU9ezMyfSBjb2xvcj1cImJsYWNrXCIvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHsvKiDjg63jgrQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0NvbnRhaW5lcn0+XG4gICAgICAgICAgPGltZyBcbiAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIk15IFRyYXZlbCBBcHAgTG9nb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyog44OP44Oz44OQ44O844Ks44O844Oh44OL44Ol44O8ICovfVxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGFtYnVyZ2VyfSBcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKX1cbiAgICAgID5cbiAgICAgICAg4piwXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgey8qIOODiuODk+OCsuODvOOCt+ODp+ODs+ODoeODi+ODpeODvCAqL31cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2fSAke21lbnVPcGVuID8gc3R5bGVzLm9wZW4gOiBcIlwifWB9PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvTGluaz5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJMaW5rIiwiRmFVc2VyQ2lyY2xlIiwiSGVhZGVyIiwib25IZWlnaHRDaGFuZ2UiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiaGVhZGVyUmVmIiwiY3VycmVudCIsIm9mZnNldEhlaWdodCIsImhlYWRlciIsInJlZiIsImNsYXNzTmFtZSIsImRpdiIsImxlZnRTZWN0aW9uIiwiaHJlZiIsIm15cGFnZUljb24iLCJzaXplIiwiY29sb3IiLCJsb2dvQ29udGFpbmVyIiwiaW1nIiwic3JjIiwiYWx0IiwibG9nbyIsImJ1dHRvbiIsImhhbWJ1cmdlciIsIm9uQ2xpY2siLCJuYXYiLCJvcGVuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/Header/Header.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/components/Header/Header.module.css":
/*!*************************************************!*\
  !*** ./src/components/Header/Header.module.css ***!
  \*************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Header_header__AF_3G\",\n\t\"leftSection\": \"Header_leftSection__4hV2o\",\n\t\"mypageIcon\": \"Header_mypageIcon__KN5Ik\",\n\t\"logo\": \"Header_logo__1FRrW\",\n\t\"hamburger\": \"Header_hamburger__UNsrD\",\n\t\"nav\": \"Header_nav__LVYU2\",\n\t\"open\": \"Header_open__jNVWy\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2tvZ2FrYXRzdW1hL0RvY3VtZW50cy/plovnmbrjgrPjg7zjg4jjgpkvdGVjaDAvaG9tZXRvd25fdGF4L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX19BRl8zR1wiLFxuXHRcImxlZnRTZWN0aW9uXCI6IFwiSGVhZGVyX2xlZnRTZWN0aW9uX180aFYyb1wiLFxuXHRcIm15cGFnZUljb25cIjogXCJIZWFkZXJfbXlwYWdlSWNvbl9fS041SWtcIixcblx0XCJsb2dvXCI6IFwiSGVhZGVyX2xvZ29fXzFGUnJXXCIsXG5cdFwiaGFtYnVyZ2VyXCI6IFwiSGVhZGVyX2hhbWJ1cmdlcl9fVU5zckRcIixcblx0XCJuYXZcIjogXCJIZWFkZXJfbmF2X19MVllVMlwiLFxuXHRcIm9wZW5cIjogXCJIZWFkZXJfb3Blbl9fak5WV3lcIlxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/Header/Header.module.css\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/App.css */ \"(pages-dir-node)/./src/styles/App.css\");\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ \"(pages-dir-node)/./src/components/Header/Header.js\");\n\n\n // グローバルCSSのインポート\n // ヘッダーコンポーネントのインポート\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/pages/_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            \"  \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/hometown_tax/frontend/src/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNKLENBQUUsaUJBQWlCO0FBQ0csQ0FBRSxvQkFBb0I7QUFFdkUsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRTs7MEJBQ0UsOERBQUNILGlFQUFNQTs7Ozs7WUFBRzswQkFFUiw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2tvZ2FrYXRzdW1hL0RvY3VtZW50cy/plovnmbrjgrPjg7zjg4jjgpkvdGVjaDAvaG9tZXRvd25fdGF4L2Zyb250ZW5kL3NyYy9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCBcIi4uL3N0eWxlcy9BcHAuY3NzXCI7ICAvLyDjgrDjg63jg7zjg5Djg6tDU1Pjga7jgqTjg7Pjg53jg7zjg4hcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiOyAgLy8g44OY44OD44OA44O844Kz44Oz44Od44O844ON44Oz44OI44Gu44Kk44Oz44Od44O844OIXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+ICB7Lyog44GZ44G544Gm44Gu44Oa44O844K444Gr44OY44OD44OA44O844KS6YGp55SoICovfVxuXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiSGVhZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/App.css":
/*!****************************!*\
  !*** ./src/styles/App.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=FaUserCircle!=!./node_modules/react-icons/fa/index.mjs":
/*!****************************************************************************************!*\
  !*** __barrel_optimize__?names=FaUserCircle!=!./node_modules/react-icons/fa/index.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kogakatsuma_Documents_tech0_hometown_tax_frontend_node_modules_react_icons_fa_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-icons/fa/index.mjs */ "(pages-dir-node)/./node_modules/react-icons/fa/index.mjs");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Users_kogakatsuma_Documents_tech0_hometown_tax_frontend_node_modules_react_icons_fa_index_mjs__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Users_kogakatsuma_Documents_tech0_hometown_tax_frontend_node_modules_react_icons_fa_index_mjs__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-icons"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./components/header.tsx\");\n/* harmony import */ var _components_home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home.module.css */ \"./components/home.module.css\");\n/* harmony import */ var _components_home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/daniel/Desktop/next/game/pages/index.tsx\";\n// @ts-check\n\n\n\n\n //api key cb87b2d6cd4b41358956a9b00362ecc2\n// https://api.rawg.io/api/genres?key=cb87b2d6cd4b41358956a9b00362ecc2\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var _this = this;\n\n  var data = _ref.data;\n  console.log(data);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"Game\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"main\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"SALUT\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_components_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),\n        children: data.results.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/genre/index\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              id: \"picindex\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n                children: item[0].name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 39\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: item[0].image_background,\n                alt: \"img\",\n                width: 500,\n                height: 500\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 39\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 37\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 35\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 3\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtDQUlBO0FBQ0E7Ozs7QUFpQmUsU0FBU0ssSUFBVCxPQUFzQjtBQUFBOztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUNuQ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxzQkFDQTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQU9JO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBRUoseUVBQWhCO0FBQUEsa0JBQ0lJLElBQUksQ0FBQ0ksT0FBTCxDQUFhQyxHQUFiLENBQWtCLFVBQUFDLElBQUk7QUFBQSw4QkFDQSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsY0FBWDtBQUFBLG1DQUNFO0FBQUssZ0JBQUUsRUFBQyxVQUFSO0FBQUEsc0NBQ0U7QUFBQSwwQkFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRSw4REFBQyxtREFBRDtBQUNFLG1CQUFHLEVBQUVELElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUUsZ0JBRGY7QUFFRSxtQkFBRyxFQUFDLEtBRk47QUFHRSxxQkFBSyxFQUFFLEdBSFQ7QUFJRSxzQkFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBO0FBQUEsU0FBdEI7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFrQ0Q7S0FwQ3VCVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtY2hlY2tcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzLCBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cbi8vYXBpIGtleSBjYjg3YjJkNmNkNGI0MTM1ODk1NmE5YjAwMzYyZWNjMlxuLy8gaHR0cHM6Ly9hcGkucmF3Zy5pby9hcGkvZ2VucmVzP2tleT1jYjg3YjJkNmNkNGI0MTM1ODk1NmE5YjAwMzYyZWNjMlxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMoKT0+e1xuICBjb25zb2xlLmxvZyhgJHtwcm9jZXNzLmVudi5nZW5yZXNVcmx9JHtwcm9jZXNzLmVudi5hcGlLZXl9YClcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnJhd2cuaW8vYXBpL2dlbnJlcz9rZXk9Y2I4N2IyZDZjZDRiNDEzNTg5NTZhOWIwMDM2MmVjYzInKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgfVxuICB9XG4gIC8vY29uc29sZS5sb2cocmVzKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRhdGEgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH1cbiAgfVxuICBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2RhdGF9KSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpXG4gIHJldHVybihcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5HYW1lPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICBcbiAgICAgIDxIZWFkZXIvPiBcbiAgICAgIFxuICAgICAgPG1haW4+XG4gICAgICAgIDxwPlNBTFVUPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIHsgZGF0YS5yZXN1bHRzLm1hcCgoaXRlbT0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2VucmUvaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3BpY2luZGV4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW1bMF0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbVswXS5pbWFnZV9iYWNrZ3JvdW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgIFxuXG4gIDwvZGl2PlxuICApO1xufVxuXG5cbiAgICAgICAgICAgICJdLCJuYW1lcyI6WyJIZWFkIiwiSGVhZGVyIiwic3R5bGVzIiwiSW1hZ2UiLCJMaW5rIiwiSG9tZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZ3JpZCIsInJlc3VsdHMiLCJtYXAiLCJpdGVtIiwibmFtZSIsImltYWdlX2JhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
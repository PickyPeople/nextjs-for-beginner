"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(movies)/movies/[id]/page",{

/***/ "(app-pages-browser)/./components/movie.jsx":
/*!******************************!*\
  !*** ./components/movie.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movie; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _syles_movie_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../syles/movie.module.css */ \"(app-pages-browser)/./syles/movie.module.css\");\n/* harmony import */ var _syles_movie_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_syles_movie_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Movie(param) {\n    let { title, id, poster_path } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const onClick = ()=>{\n        router.push(\"/movies/\".concat(id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_syles_movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().movie),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: poster_path,\n                alt: title,\n                onClick: onClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jjyjj\\\\OneDrive\\\\바탕 화면\\\\nextjs-for-beginner\\\\components\\\\movie.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: \"/movies/\".concat(id),\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jjyjj\\\\OneDrive\\\\바탕 화면\\\\nextjs-for-beginner\\\\components\\\\movie.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jjyjj\\\\OneDrive\\\\바탕 화면\\\\nextjs-for-beginner\\\\components\\\\movie.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Movie, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Movie;\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW92aWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRCO0FBQ21CO0FBQ1A7QUFHekIsU0FBU0csTUFBTSxLQUF3QjtRQUF4QixFQUFDQyxLQUFLLEVBQUVDLEVBQUUsRUFBRUMsV0FBVyxFQUFDLEdBQXhCOztJQUM1QixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTU0sVUFBVTtRQUNkRCxPQUFPRSxJQUFJLENBQUMsV0FBYyxPQUFISjtJQUN6QjtJQUNBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFXVixzRUFBWTs7MEJBQzFCLDhEQUFDWTtnQkFBSUMsS0FBS1I7Z0JBQWFTLEtBQUtYO2dCQUFPSSxTQUFTQTs7Ozs7OzBCQUM1Qyw4REFBQ1IsaURBQUlBO2dCQUFDZ0IsTUFBTSxXQUFjLE9BQUhYOzBCQUFPRDs7Ozs7Ozs7Ozs7O0FBR3BDO0dBWHdCRDs7UUFDUEQsa0RBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb3ZpZS5qc3g/NzU3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3lsZXMvbW92aWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWUoe3RpdGxlLCBpZCwgcG9zdGVyX3BhdGh9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvbW92aWVzLyR7aWR9YCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllfT5cclxuICAgICAgPGltZyBzcmM9e3Bvc3Rlcl9wYXRofSBhbHQ9e3RpdGxlfSBvbkNsaWNrPXtvbkNsaWNrfS8+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvbW92aWVzLyR7aWR9YH0+e3RpdGxlfTwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwidXNlUm91dGVyIiwiTW92aWUiLCJ0aXRsZSIsImlkIiwicG9zdGVyX3BhdGgiLCJyb3V0ZXIiLCJvbkNsaWNrIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsIm1vdmllIiwiaW1nIiwic3JjIiwiYWx0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/movie.jsx\n"));

/***/ })

});
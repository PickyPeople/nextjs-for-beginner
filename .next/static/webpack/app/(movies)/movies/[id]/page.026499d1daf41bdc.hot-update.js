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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movie; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _syles_movie_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../syles/movie.module.css */ \"(app-pages-browser)/./syles/movie.module.css\");\n/* harmony import */ var _syles_movie_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_syles_movie_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Movie(param) {\n    let { title, id, poster_path } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)(\"/movies/\".concat(id));\n    const onClick = ()=>{\n        router.push(\"/movies/\".concat(id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_syles_movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().movie),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: poster_path,\n                alt: title,\n                onClick: onClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jjyjj\\\\OneDrive\\\\바탕 화면\\\\nextjs-for-beginner\\\\components\\\\movie.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                prefetch: true,\n                href: \"/movies/\".concat(id),\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jjyjj\\\\OneDrive\\\\바탕 화면\\\\nextjs-for-beginner\\\\components\\\\movie.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jjyjj\\\\OneDrive\\\\바탕 화면\\\\nextjs-for-beginner\\\\components\\\\movie.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Movie, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Movie;\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW92aWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRCO0FBQ21CO0FBQ0g7QUFHN0IsU0FBU0csTUFBTSxLQUF3QjtRQUF4QixFQUFDQyxLQUFLLEVBQUVDLEVBQUUsRUFBRUMsV0FBVyxFQUFDLEdBQXhCOztJQUM1QixNQUFNQyxTQUFTTCwwREFBU0EsQ0FBQyxXQUFjLE9BQUhHO0lBQ3BDLE1BQU1HLFVBQVU7UUFDZEQsT0FBT0UsSUFBSSxDQUFDLFdBQWMsT0FBSEo7SUFDekI7SUFDQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBV1Ysc0VBQVk7OzBCQUMxQiw4REFBQ1k7Z0JBQUlDLEtBQUtSO2dCQUFhUyxLQUFLWDtnQkFBT0ksU0FBU0E7Ozs7OzswQkFDNUMsOERBQUNSLGlEQUFJQTtnQkFBQ2dCLFFBQVE7Z0JBQUNDLE1BQU0sV0FBYyxPQUFIWjswQkFBT0Q7Ozs7Ozs7Ozs7OztBQUc3QztHQVh3QkQ7O1FBQ1BELHNEQUFTQTs7O0tBREZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW92aWUuanN4Pzc1NzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N5bGVzL21vdmllLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllKHt0aXRsZSwgaWQsIHBvc3Rlcl9wYXRofSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcihgL21vdmllcy8ke2lkfWApO1xyXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChgL21vdmllcy8ke2lkfWApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZX0+XHJcbiAgICAgIDxpbWcgc3JjPXtwb3N0ZXJfcGF0aH0gYWx0PXt0aXRsZX0gb25DbGljaz17b25DbGlja30vPlxyXG4gICAgICA8TGluayBwcmVmZXRjaCBocmVmPXtgL21vdmllcy8ke2lkfWB9Pnt0aXRsZX08L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsInVzZVJvdXRlciIsIk1vdmllIiwidGl0bGUiLCJpZCIsInBvc3Rlcl9wYXRoIiwicm91dGVyIiwib25DbGljayIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtb3ZpZSIsImltZyIsInNyYyIsImFsdCIsInByZWZldGNoIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/movie.jsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/problems/[id]/page",{

/***/ "(app-pages-browser)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8947fc53a4a5\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz85NGI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiODk0N2ZjNTNhNGE1XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/ProblemPage/Playground/Playground.tsx":
/*!**********************************************************!*\
  !*** ./components/ProblemPage/Playground/Playground.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-split */ \"(app-pages-browser)/./node_modules/react-split/dist/react-split.es.js\");\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var _uiw_codemirror_theme_vscode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uiw/codemirror-theme-vscode */ \"(app-pages-browser)/./node_modules/@uiw/codemirror-theme-vscode/esm/index.js\");\n/* harmony import */ var _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @codemirror/lang-javascript */ \"(app-pages-browser)/./node_modules/@codemirror/lang-javascript/dist/index.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/global.css */ \"(app-pages-browser)/./styles/global.css\");\n/* harmony import */ var _EditorFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditorFooter */ \"(app-pages-browser)/./components/ProblemPage/Playground/EditorFooter.tsx\");\n/* harmony import */ var _PreferenceNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PreferenceNav */ \"(app-pages-browser)/./components/ProblemPage/Playground/PreferenceNav.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Playground = (props)=>{\n    _s();\n    const [activeTestCaseId, setActiveTestCaseId] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);\n    const [usercode, setusercode] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(props.problem.starterCode);\n    const newcode = (value)=>{\n        setusercode(value);\n    };\n    if (!props.problem) {\n        console.error(\"props.problem is null or undefined\");\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"No problem data available.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n            lineNumber: 27,\n            columnNumber: 10\n        }, undefined);\n    }\n    async function handlesubmit() {\n        let jsonResponse;\n        try {\n            const response = await fetch(\"https://judge0-ce.p.rapidapi.com/submissions\", {\n                method: \"POST\",\n                headers: {\n                    \"x-rapidapi-host\": \"judge0-ce.p.rapidapi.com\",\n                    \"x-rapidapi-key\": \"eb318dba23mshf8f373d7d20e43dp1e7a93jsn925d441a53d6\",\n                    \"content-type\": \"application/json\",\n                    accept: \"application/json\"\n                },\n                body: JSON.stringify({\n                    source_code: usercode,\n                    stdin: props.problem.inuputs,\n                    language_id: parseInt(lang)\n                })\n            });\n            jsonResponse = await response.json();\n            console.log(jsonResponse);\n        } catch (e) {\n            alert(\"Error Creating Submission\");\n        }\n        let jsonGetSolution = {\n            status: {\n                description: \"Queue\"\n            },\n            stderr: null,\n            compile_output: null,\n            stdout: null\n        };\n        while(jsonGetSolution.status.description !== \"Accepted\" && jsonGetSolution.stderr == null && jsonGetSolution.compile_output == null && jsonGetSolution.stdout == null){\n            if (jsonResponse.token) {\n                let url = \"https://judge0-ce.p.rapidapi.com/submissions/\".concat(jsonResponse.token, \"?base64_encoded=true\");\n                const getSolution = await fetch(url, {\n                    method: \"GET\",\n                    headers: {\n                        \"x-rapidapi-host\": \"judge0-ce.p.rapidapi.com\",\n                        \"x-rapidapi-key\": \"7d23d91f56msh0f4a619c9aefa37p10d773jsn6ff67fec4f2b\",\n                        \"content-type\": \"application/json\"\n                    }\n                });\n                jsonGetSolution = await getSolution.json();\n            }\n        }\n        if (jsonGetSolution.stdout) {\n            const output = atob(jsonGetSolution.stdout);\n            console.log(\"output of the problem is=\", output);\n        } else if (jsonGetSolution.stderr) {\n            const error = atob(jsonGetSolution.stderr);\n            console.log(\"error is at 91\", error);\n        } else {\n            if (jsonGetSolution.compile_output !== null) {\n                const compilation_error = atob(jsonGetSolution.compile_output);\n                console.log(\"error is at 98\", compilation_error);\n            }\n        }\n    }\n    const [lang, setlang] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"54\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-dark-layer-1 relative overflow-x-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PreferenceNav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                lang: lang,\n                setLang: setlang\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                lineNumber: 112,\n                columnNumber: 4\n            }, undefined),\n            \"s\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_split__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: \"h-[calc(100vh-94px)]\",\n                direction: \"vertical\",\n                sizes: [\n                    60,\n                    40\n                ],\n                minSize: 60,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full overflow-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            value: usercode,\n                            theme: _uiw_codemirror_theme_vscode__WEBPACK_IMPORTED_MODULE_3__.vscodeDark,\n                            extensions: [\n                                (0,_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_8__.javascript)()\n                            ],\n                            onChange: newcode\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full px-5 overflow-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex h-10 items-center space-x-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative flex h-full flex-col justify-center cursor-pointer\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm font-medium leading-5 text-white\",\n                                            children: \"Testcases\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                            lineNumber: 125,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                            className: \"absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                            lineNumber: 126,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: props.problem.examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mr-2 items-start mt-2 \",\n                                        onClick: ()=>setActiveTestCaseId(index),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-wrap items-center gap-y-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap\\n\t\t\t\t\t\t\t\t\t\t\".concat(activeTestCaseId === index ? \"text-white\" : \"text-gray-500\", \"\\n\t\t\t\t\t\t\t\t\t\"),\n                                                children: [\n                                                    \"Case \",\n                                                    index + 1\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                                lineNumber: 138,\n                                                columnNumber: 10\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                            lineNumber: 137,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, example.id, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 8\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-semibold my-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm font-medium mt-4 text-white\",\n                                        children: \"Input:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2\",\n                                        children: props.problem.examples[activeTestCaseId].inputText\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 152,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm font-medium mt-4 text-white\",\n                                        children: \"Output:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 155,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2\",\n                                        children: props.problem.examples[activeTestCaseId].outputText\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 156,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                                lineNumber: 150,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                lineNumber: 113,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditorFooter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                handlesubmit: handlesubmit\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n                lineNumber: 162,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\ProblemPage\\\\Playground\\\\Playground.tsx\",\n        lineNumber: 111,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Playground, \"P3aALsHd3GggcVdcvpJr6MppnDA=\");\n_c = Playground;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Playground);\nvar _c;\n$RefreshReg$(_c, \"Playground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvYmxlbVBhZ2UvUGxheWdyb3VuZC9QbGF5Z3JvdW5kLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2U7QUFDVztBQUNEO0FBQ3RCO0FBRVE7QUFDQztBQUNYO0FBT2pDLE1BQU1PLGFBQXdDLENBQUNDOztJQUU5QyxNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdKLCtDQUFRQSxDQUFTO0lBQ2pFLE1BQU0sQ0FBQ0ssVUFBU0MsWUFBWSxHQUFDTiwrQ0FBUUEsQ0FBU0UsTUFBTUssT0FBTyxDQUFDQyxXQUFXO0lBRXZFLE1BQU1DLFVBQVEsQ0FBQ0M7UUFDZEosWUFBWUk7SUFDWDtJQUVGLElBQUksQ0FBQ1IsTUFBTUssT0FBTyxFQUFFO1FBQ25CSSxRQUFRQyxLQUFLLENBQUM7UUFDZCxxQkFBTyw4REFBQ0M7c0JBQUk7Ozs7OztJQUNYO0lBR0EsZUFBZUM7UUFFaEIsSUFBSUM7UUFFSixJQUFHO1lBRUYsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQixnREFDQTtnQkFDREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQkMsUUFBUTtnQkFDVjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQkMsYUFBYW5CO29CQUNib0IsT0FBT3ZCLE1BQU1LLE9BQU8sQ0FBQ21CLE9BQU87b0JBQzVCQyxhQUFhQyxTQUFTQztnQkFDeEI7WUFDQztZQUdEZCxlQUFlLE1BQU1DLFNBQVNjLElBQUk7WUFDbENuQixRQUFRb0IsR0FBRyxDQUFDaEI7UUFDWixFQUFDLFVBQUs7WUFDUGlCLE1BQU07UUFDTDtRQUVBLElBQUlDLGtCQUFrQjtZQUN2QkMsUUFBUTtnQkFBRUMsYUFBYTtZQUFRO1lBQy9CQyxRQUFRO1lBQ1JDLGdCQUFnQjtZQUNoQkMsUUFBTztRQUNOO1FBRUEsTUFDREwsZ0JBQWdCQyxNQUFNLENB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Ozs7Ozs7Ozs7Ozs7OzBCQUt4RCw4REFBQ2pFLHFEQUFZQTtnQkFBQ2dCLGNBQWNBOzs7Ozs7Ozs7Ozs7QUFHL0I7R0FySk1iO0tBQUFBO0FBc0pOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvYmxlbVBhZ2UvUGxheWdyb3VuZC9QbGF5Z3JvdW5kLnRzeD83NzZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGxpdCBmcm9tIFwicmVhY3Qtc3BsaXRcIjtcclxuaW1wb3J0IENvZGVNaXJyb3IgZnJvbSBcIkB1aXcvcmVhY3QtY29kZW1pcnJvclwiO1xyXG5pbXBvcnQgeyB2c2NvZGVEYXJrIH0gZnJvbSBcIkB1aXcvY29kZW1pcnJvci10aGVtZS12c2NvZGVcIjtcclxuaW1wb3J0IHsgamF2YXNjcmlwdCB9IGZyb20gXCJAY29kZW1pcnJvci9sYW5nLWphdmFzY3JpcHRcIjtcclxuaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvZ2xvYmFsLmNzcydcclxuaW1wb3J0IHsgUHJvYmxlbSB9IGZyb20gJy4uLy4uLy4uL2RhdGEvdHlwZXMvcHJvYmxlbSc7XHJcbmltcG9ydCAgIEVkaXRvckZvb3RlciBmcm9tICcuL0VkaXRvckZvb3RlcidcclxuaW1wb3J0IFByZWZlcmVuY2VOYXYgIGZyb20gJy4vUHJlZmVyZW5jZU5hdidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbnR5cGUgUGxheWdyb3VuZFByb3BzID0ge1xyXG5cdHByb2JsZW06UHJvYmxlbVxyXG59O1xyXG5cclxuY29uc3QgUGxheWdyb3VuZDogUmVhY3QuRkM8UGxheWdyb3VuZFByb3BzPiA9IChwcm9wczpQbGF5Z3JvdW5kUHJvcHMpID0+IHtcclxuXHJcblx0Y29uc3QgW2FjdGl2ZVRlc3RDYXNlSWQsIHNldEFjdGl2ZVRlc3RDYXNlSWRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHRjb25zdCBbdXNlcmNvZGUsc2V0dXNlcmNvZGVdPXVzZVN0YXRlPHN0cmluZz4ocHJvcHMucHJvYmxlbS5zdGFydGVyQ29kZSlcclxuXHJcblx0Y29uc3QgbmV3Y29kZT0odmFsdWU6c3RyaW5nKT0+e1xyXG5cdFx0c2V0dXNlcmNvZGUodmFsdWUpXHJcblx0ICB9XHJcblxyXG5cdGlmICghcHJvcHMucHJvYmxlbSkge1xyXG5cdFx0Y29uc29sZS5lcnJvcihcInByb3BzLnByb2JsZW0gaXMgbnVsbCBvciB1bmRlZmluZWRcIik7XHJcblx0XHRyZXR1cm4gPGRpdj5ObyBwcm9ibGVtIGRhdGEgYXZhaWxhYmxlLjwvZGl2PjtcclxuXHQgIH1cclxuXHJcblxyXG5cdCAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlc3VibWl0KCl7XHJcblxyXG5cdFx0bGV0IGpzb25SZXNwb25zZTtcclxuXHRcdFxyXG5cdFx0dHJ5e1xyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuXHRcdFx0ICBcImh0dHBzOi8vanVkZ2UwLWNlLnAucmFwaWRhcGkuY29tL3N1Ym1pc3Npb25zXCIsXHJcblx0XHRcdCAge1xyXG5cdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJqdWRnZTAtY2UucC5yYXBpZGFwaS5jb21cIixcclxuXHRcdFx0XHQgIFwieC1yYXBpZGFwaS1rZXlcIjogXCJlYjMxOGRiYTIzbXNoZjhmMzczZDdkMjBlNDNkcDFlN2E5M2pzbjkyNWQ0NDFhNTNkNlwiLCAvLyBHZXQgeW91cnMgZm9yIGZyZWUgYXQgaHR0cHM6Ly9yYXBpZGFwaS5jb20vanVkZ2UwLW9mZmljaWFsL2FwaS9qdWRnZTAtY2UvXHJcblx0XHRcdFx0ICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0XHQgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdFx0ICBzb3VyY2VfY29kZTogdXNlcmNvZGUsXHJcblx0XHRcdFx0ICBzdGRpbjogcHJvcHMucHJvYmxlbS5pbnVwdXRzICxcclxuXHRcdFx0XHQgIGxhbmd1YWdlX2lkOiBwYXJzZUludChsYW5nKSxcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0ICB9XHJcblx0XHRcdCk7XHJcblx0XHRcdFxyXG5cdFx0XHQganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHQgY29uc29sZS5sb2coanNvblJlc3BvbnNlKVxyXG5cdFx0ICB9Y2F0Y2h7XHJcblx0XHRcdGFsZXJ0KCdFcnJvciBDcmVhdGluZyBTdWJtaXNzaW9uJyk7XHJcblx0XHQgIH07XHJcblx0ICBcclxuXHRcdCAgbGV0IGpzb25HZXRTb2x1dGlvbiA9IHtcclxuXHRcdFx0c3RhdHVzOiB7IGRlc2NyaXB0aW9uOiBcIlF1ZXVlXCIgfSxcclxuXHRcdFx0c3RkZXJyOiBudWxsLFxyXG5cdFx0XHRjb21waWxlX291dHB1dDogbnVsbCxcclxuXHRcdFx0c3Rkb3V0Om51bGwsXHJcblx0XHQgIH07XHJcblx0ICBcclxuXHRcdCAgd2hpbGUgKFxyXG5cdFx0XHRqc29uR2V0U29sdXRpb24uc3RhdHVzLmRlc2NyaXB0aW9uICE9PSBcIkFjY2VwdGVkXCIgJiZcclxuXHRcdFx0anNvbkdldFNvbHV0aW9uLnN0ZGVyciA9PSBudWxsICYmXHJcblx0XHRcdGpzb25HZXRTb2x1dGlvbi5jb21waWxlX291dHB1dCA9PSBudWxsJiZcclxuXHRcdFx0anNvbkdldFNvbHV0aW9uLnN0ZG91dD09bnVsbFxyXG5cdFx0ICApIHtcclxuXHRcdFx0aWYgKGpzb25SZXNwb25zZS50b2tlbikge1xyXG5cdFx0XHQgIGxldCB1cmwgPSBgaHR0cHM6Ly9qdWRnZTAtY2UucC5yYXBpZGFwaS5jb20vc3VibWlzc2lvbnMvJHtqc29uUmVzcG9uc2UudG9rZW59P2Jhc2U2NF9lbmNvZGVkPXRydWVgO1xyXG5cdCAgXHJcblx0XHRcdCAgY29uc3QgZ2V0U29sdXRpb24gPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuXHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJqdWRnZTAtY2UucC5yYXBpZGFwaS5jb21cIixcclxuXHRcdFx0XHQgIFwieC1yYXBpZGFwaS1rZXlcIjogXCI3ZDIzZDkxZjU2bXNoMGY0YTYxOWM5YWVmYTM3cDEwZDc3M2pzbjZmZjY3ZmVjNGYyYlwiLCAvLyBHZXQgeW91cnMgZm9yIGZyZWUgYXQgaHR0cHM6Ly9yYXBpZGFwaS5jb20vanVkZ2UwLW9mZmljaWFsL2FwaS9qdWRnZTAtY2UvXHJcblx0XHRcdFx0ICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHQgIH0pO1xyXG5cdCAgXHJcblx0XHRcdCAganNvbkdldFNvbHV0aW9uID0gYXdhaXQgZ2V0U29sdXRpb24uanNvbigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0ICB9XHJcblxyXG5cdFx0ICBcclxuXHRcdCAgaWYgKGpzb25HZXRTb2x1dGlvbi5zdGRvdXQpIHtcclxuXHRcdFx0Y29uc3Qgb3V0cHV0ID0gYXRvYihqc29uR2V0U29sdXRpb24uc3Rkb3V0KTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJvdXRwdXQgb2YgdGhlIHByb2JsZW0gaXM9XCIsb3V0cHV0IClcclxuXHRcdCAgfSBlbHNlIGlmIChqc29uR2V0U29sdXRpb24uc3RkZXJyKSB7XHJcblx0XHRcdGNvbnN0IGVycm9yID0gYXRvYihqc29uR2V0U29sdXRpb24uc3RkZXJyKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJlcnJvciBpcyBhdCA5MVwiLGVycm9yIClcclxuXHRcdCAgfSBlbHNlIHtcclxuXHRcdFx0aWYoanNvbkdldFNvbHV0aW9uLmNvbXBpbGVfb3V0cHV0IT09bnVsbCl7XHJcblx0XHRcdFx0Y29uc3QgY29tcGlsYXRpb25fZXJyb3IgPSBhdG9iKGpzb25HZXRTb2x1dGlvbi5jb21waWxlX291dHB1dCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJlcnJvciBpcyBhdCA5OFwiLGNvbXBpbGF0aW9uX2Vycm9yIClcclxuXHRcdFx0fVxyXG5cdFx0ICB9XHJcblx0XHQgIFxyXG5cdFx0XHJcblx0ICB9XHJcblxyXG5cdCAgY29uc3QgW2xhbmcsc2V0bGFuZ109dXNlU3RhdGUoXCI1NFwiKVxyXG5cdCAgXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGJnLWRhcmstbGF5ZXItMSByZWxhdGl2ZSBvdmVyZmxvdy14LWhpZGRlbic+XHJcblx0XHRcdDxQcmVmZXJlbmNlTmF2IGxhbmc9e2xhbmd9IHNldExhbmc9e3NldGxhbmd9IC8+c1xyXG5cdFx0XHQ8U3BsaXQgY2xhc3NOYW1lPSdoLVtjYWxjKDEwMHZoLTk0cHgpXScgZGlyZWN0aW9uPSd2ZXJ0aWNhbCcgc2l6ZXM9e1s2MCwgNDBdfSBtaW5TaXplPXs2MH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCBvdmVyZmxvdy1hdXRvJz5cclxuXHRcdFx0XHRcdDxDb2RlTWlycm9yXHJcblx0XHRcdFx0XHRcdHZhbHVlPXt1c2VyY29kZX1cclxuXHRcdFx0XHRcdFx0dGhlbWU9e3ZzY29kZURhcmt9XHJcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnM9e1tqYXZhc2NyaXB0KCldfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17bmV3Y29kZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCBweC01IG92ZXJmbG93LWF1dG8nPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaC0xMCBpdGVtcy1jZW50ZXIgc3BhY2UteC02Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXggaC1mdWxsIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLTUgdGV4dC13aGl0ZSc+VGVzdGNhc2VzPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTAgaC0wLjUgdy1mdWxsIHJvdW5kZWQtZnVsbCBib3JkZXItbm9uZSBiZy13aGl0ZScgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcblx0XHRcdFx0XHRcdHtwcm9wcy5wcm9ibGVtLmV4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21yLTIgaXRlbXMtc3RhcnQgbXQtMiAnXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e2V4YW1wbGUuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUZXN0Q2FzZUlkKGluZGV4KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC15LTQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9udC1tZWRpdW0gaXRlbXMtY2VudGVyIHRyYW5zaXRpb24tYWxsIGZvY3VzOm91dGxpbmUtbm9uZSBpbmxpbmUtZmxleCBiZy1kYXJrLWZpbGwtMyBob3ZlcjpiZy1kYXJrLWZpbGwtMiByZWxhdGl2ZSByb3VuZGVkLWxnIHB4LTQgcHktMSBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vd3JhcFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR7YWN0aXZlVGVzdENhc2VJZCA9PT0gaW5kZXggPyBcInRleHQtd2hpdGVcIiA6IFwidGV4dC1ncmF5LTUwMFwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Q2FzZSB7aW5kZXggKyAxfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIG15LTQnPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtc20gZm9udC1tZWRpdW0gbXQtNCB0ZXh0LXdoaXRlJz5JbnB1dDo8L3A+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgY3Vyc29yLXRleHQgcm91bmRlZC1sZyBib3JkZXIgcHgtMyBweS1bMTBweF0gYmctZGFyay1maWxsLTMgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgbXQtMic+XHJcblx0XHRcdFx0XHRcdFx0e3Byb3BzLnByb2JsZW0uZXhhbXBsZXNbYWN0aXZlVGVzdENhc2VJZF0uaW5wdXRUZXh0fVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXNtIGZvbnQtbWVkaXVtIG10LTQgdGV4dC13aGl0ZSc+T3V0cHV0OjwvcD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCBjdXJzb3ItdGV4dCByb3VuZGVkLWxnIGJvcmRlciBweC0zIHB5LVsxMHB4XSBiZy1kYXJrLWZpbGwtMyBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBtdC0yJz5cclxuXHRcdFx0XHRcdFx0XHR7cHJvcHMucHJvYmxlbS5leGFtcGxlc1thY3RpdmVUZXN0Q2FzZUlkXS5vdXRwdXRUZXh0fVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1NwbGl0PlxyXG5cdFx0XHQ8RWRpdG9yRm9vdGVyIGhhbmRsZXN1Ym1pdD17aGFuZGxlc3VibWl0fS8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQbGF5Z3JvdW5kOyJdLCJuYW1lcyI6WyJTcGxpdCIsIkNvZGVNaXJyb3IiLCJ2c2NvZGVEYXJrIiwiamF2YXNjcmlwdCIsIkVkaXRvckZvb3RlciIsIlByZWZlcmVuY2VOYXYiLCJ1c2VTdGF0ZSIsIlBsYXlncm91bmQiLCJwcm9wcyIsImFjdGl2ZVRlc3RDYXNlSWQiLCJzZXRBY3RpdmVUZXN0Q2FzZUlkIiwidXNlcmNvZGUiLCJzZXR1c2VyY29kZSIsInByb2JsZW0iLCJzdGFydGVyQ29kZSIsIm5ld2NvZGUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImhhbmRsZXN1Ym1pdCIsImpzb25SZXNwb25zZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzb3VyY2VfY29kZSIsInN0ZGluIiwiaW51cHV0cyIsImxhbmd1YWdlX2lkIiwicGFyc2VJbnQiLCJsYW5nIiwianNvbiIsImxvZyIsImFsZXJ0IiwianNvbkdldFNvbHV0aW9uIiwic3RhdHVzIiwiZGVzY3JpcHRpb24iLCJzdGRlcnIiLCJjb21waWxlX291dHB1dCIsInN0ZG91dCIsInRva2VuIiwidXJsIiwiZ2V0U29sdXRpb24iLCJvdXRwdXQiLCJhdG9iIiwiY29tcGlsYXRpb25fZXJyb3IiLCJzZXRsYW5nIiwiY2xhc3NOYW1lIiwic2V0TGFuZyIsImRpcmVjdGlvbiIsInNpemVzIiwibWluU2l6ZSIsInRoZW1lIiwiZXh0ZW5zaW9ucyIsIm9uQ2hhbmdlIiwiaHIiLCJleGFtcGxlcyIsIm1hcCIsImV4YW1wbGUiLCJpbmRleCIsIm9uQ2xpY2siLCJpZCIsInAiLCJpbnB1dFRleHQiLCJvdXRwdXRUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProblemPage/Playground/Playground.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/problems/page",{

/***/ "(app-pages-browser)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9841ac792bbe\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz85NGI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiOTg0MWFjNzkyYmJlXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/problemsTable.tsx":
/*!**************************************!*\
  !*** ./components/problemsTable.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseConfig */ \"(app-pages-browser)/./firebaseConfig.tsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\nconst ProblemsTable = (param)=>{\n    let { loadingProblems, setLoadingProblems } = param;\n    _s();\n    const problems = useGetProblems(loadingProblems, setLoadingProblems);\n    const userDetails = getusedetailsonproblem();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n            className: \"gradiant text-dark \",\n            children: problems.map((problem, idx)=>{\n                const difficulyColor = problem.difficulty === \"Easy\" ? \"text-dark-green-s\" : problem.difficulty === \"Medium\" ? \"text-dark-yellow\" : \"text-dark-pink\";\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"gradiant items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: idx + 1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"hover:text-blue-600 cursor-pointer\",\n                                href: \"/problems/\".concat(problem.id),\n                                children: problem.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 10\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4 \".concat(difficulyColor),\n                            children: problem.difficulty\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: problem.category\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"text-left py-4 font-medium whitespace-nowrap text-dark-green-s\",\n                            children: userDetails.find((element)=>element === problem.id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    background: \"linear-gradient(45deg, #0CA750, #3AA34D)\",\n                                    color: \"white\",\n                                    borderRadius: \"0.25rem\",\n                                    padding: \"0.5rem\"\n                                },\n                                children: \"completed\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 5\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: \"hover:text-blue-600 cursor-pointer\",\n                                    href: \"/problems/\".concat(problem.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            background: \"linear-gradient(45deg, #0CA750, #3AA34D)\",\n                                            color: \"white\",\n                                            borderRadius: \"0.25rem\",\n                                            padding: \"0.5rem\"\n                                        },\n                                        children: \"do it Now\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 5\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/solution/\".concat(problem.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/assets/images/solution.png\",\n                                    alt: \"logo\",\n                                    width: 45,\n                                    height: 45,\n                                    className: \"object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 8\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, problem.id, true, {\n                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n            lineNumber: 21,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProblemsTable, \"9Uv03Ll4Pl7bQK/ARctgRuyhsZM=\", false, function() {\n    return [\n        useGetProblems\n    ];\n});\n_c = ProblemsTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProblemsTable);\nfunction useGetProblems(loadingProblems, setLoadingProblems) {\n    _s1();\n    const [problems, setProblems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getProblems = async ()=>{\n            setLoadingProblems(true);\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.firestore, \"problems\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.orderBy)(\"order\", \"asc\"));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(q);\n            const tmp = [];\n            querySnapshot.forEach((doc)=>{\n                tmp.push({\n                    id: doc.id,\n                    ...doc.data()\n                });\n            });\n            setProblems(tmp);\n            setLoadingProblems(false);\n        };\n        getProblems();\n    }, [\n        setLoadingProblems\n    ]);\n    return problems;\n}\n_s1(useGetProblems, \"VBi59e6jMrp0EO3shHKvwMVAqws=\");\nfunction getusedetailsonproblem() {\n    _s2();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const fetchUserDetails = async (email)=>{\n        const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getFirestore)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.app);\n        const usersCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(db, \"users\");\n        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)(usersCollection, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"email\", \"==\", email));\n        try {\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(q);\n            if (!querySnapshot.empty) {\n                querySnapshot.forEach((doc)=>{\n                    const userData = doc.data();\n                    //console.log('User Details:', userData.solvedProblems);\n                    setUser(userData);\n                    return user.solvedProblems;\n                });\n            } else {\n                console.log(\"No user found with this email.\");\n            }\n        } catch (error) {\n            console.error(\"Error fetching user details:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.app);\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.onAuthStateChanged)(auth, (currentUser)=>{\n            if (currentUser) {\n                const userEmail = currentUser.email;\n                fetchUserDetails(userEmail);\n            } else {\n                setUser(null);\n            }\n        });\n        return ()=>unsubscribe();\n    }, [\n        user\n    ]);\n    return (user === null || user === void 0 ? void 0 : user.solvedProblems) || null;\n}\n_s2(getusedetailsonproblem, \"iCEFdcn4VWii5CszsjcYbeQHEgM=\");\nvar _c;\n$RefreshReg$(_c, \"ProblemsTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvYmxlbXNUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBRWE7QUFDRztBQUNhO0FBQytDO0FBTzNHLE1BQU1jLGdCQUE4QztRQUFDLEVBQUVDLGVBQWUsRUFBQ0Msa0JBQWtCLEVBQUU7O0lBRTFGLE1BQU1DLFdBQVdDLGVBQWVILGlCQUFnQkM7SUFDaEQsTUFBTUcsY0FBWUM7SUFFbEIscUJBQ0M7a0JBQ0MsNEVBQUNDO1lBQU1DLFdBQVU7c0JBQ2ZMLFNBQVNNLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQztnQkFDdkIsTUFBTUMsaUJBQ0xGLFFBQVFHLFVBQVUsS0FBSyxTQUNwQixzQkFDQUgsUUFBUUcsVUFBVSxLQUFLLFdBQ3ZCLHFCQUNBO2dCQUNKLHFCQUNDLDhEQUFDQztvQkFBR04sV0FBVzs7c0NBQ2QsOERBQUNPOzRCQUFHUCxXQUFXO3NDQUFjRyxNQUFJOzs7Ozs7c0NBQ2pDLDhEQUFDSTs0QkFBR1AsV0FBVTtzQ0FFWiw0RUFBQ3RCLGtEQUFJQTtnQ0FDSnNCLFdBQVU7Z0NBQ1ZRLE1BQU0sYUFBd0IsT0FBWE4sUUFBUU8sRUFBRTswQ0FFNUJQLFFBQVFRLEtBQUs7Ozs7Ozs7Ozs7O3NDQUlqQiw4REFBQ0g7NEJBQUdQLFdBQVcsYUFBNEIsT0FBZkk7c0NBQW1CRixRQUFRRyxVQUFVOzs7Ozs7c0NBQ2pFLDhEQUFDRTs0QkFBR1AsV0FBVztzQ0FBY0UsUUFBUVMsUUFBUTs7Ozs7O3NDQUM3Qyw4REFBQ0o7NEJBQUdQLFdBQVU7c0NBQ2xCSCxZQUFZZSxJQUFJLENBQUMsQ0FBQ0MsVUFBb0JBLFlBQVlYLFFBQVFPLEVBQUUsa0JBQzNELDhEQUFDSztnQ0FBSUMsT0FBTztvQ0FBRUMsWUFBWTtvQ0FBNENDLE9BQU87b0NBQVNDLGNBQWM7b0NBQVdDLFNBQVM7Z0NBQVM7MENBQUc7Ozs7OzBEQUlwSSw4REFBQ0w7MENBQ0MsNEVBQUNwQyxrREFBSUE7b0NB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LnRzeD9hMWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBEQlByb2JsZW0gfSBmcm9tIFwiLi4vZGF0YS90eXBlcy9wcm9ibGVtXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHthcHAsZmlyZXN0b3JlfSBmcm9tIFwiLi4vZmlyZWJhc2VDb25maWdcIlxyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBkb2MsIGdldERvYywgZ2V0RG9jcywgd2hlcmUsIGdldEZpcmVzdG9yZSwgb3JkZXJCeSwgcXVlcnkgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG50eXBlIFByb2JsZW1zVGFibGVQcm9wcyA9IHtcclxuXHRsb2FkaW5nUHJvYmxlbXM6Ym9vbGVhblxyXG5cdHNldExvYWRpbmdQcm9ibGVtczogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG59O1xyXG5cclxuY29uc3QgUHJvYmxlbXNUYWJsZTogUmVhY3QuRkM8UHJvYmxlbXNUYWJsZVByb3BzPiA9ICh7IGxvYWRpbmdQcm9ibGVtcyxzZXRMb2FkaW5nUHJvYmxlbXMgfSkgPT4ge1xyXG5cclxuXHRjb25zdCBwcm9ibGVtcyA9IHVzZUdldFByb2JsZW1zKGxvYWRpbmdQcm9ibGVtcyxzZXRMb2FkaW5nUHJvYmxlbXMpO1xyXG5cdGNvbnN0IHVzZXJEZXRhaWxzPWdldHVzZWRldGFpbHNvbnByb2JsZW0oKTtcclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PHRib2R5IGNsYXNzTmFtZT0nZ3JhZGlhbnQgdGV4dC1kYXJrICc+XHJcblx0XHRcdFx0e3Byb2JsZW1zLm1hcCgocHJvYmxlbSwgaWR4KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBkaWZmaWN1bHlDb2xvciA9XHJcblx0XHRcdFx0XHRcdHByb2JsZW0uZGlmZmljdWx0eSA9PT0gXCJFYXN5XCJcclxuXHRcdFx0XHRcdFx0XHQ/IFwidGV4dC1kYXJrLWdyZWVuLXNcIlxyXG5cdFx0XHRcdFx0XHRcdDogcHJvYmxlbS5kaWZmaWN1bHR5ID09PSBcIk1lZGl1bVwiXHJcblx0XHRcdFx0XHRcdFx0PyBcInRleHQtZGFyay15ZWxsb3dcIlxyXG5cdFx0XHRcdFx0XHRcdDogXCJ0ZXh0LWRhcmstcGlua1wiO1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT0gXCJncmFkaWFudCBpdGVtcy1jZW50ZXJcIiBrZXk9e3Byb2JsZW0uaWR9PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9e1wicHgtNiBweS00XCJ9PntpZHgrMX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J3B4LTYgcHktNCc+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdob3Zlcjp0ZXh0LWJsdWUtNjAwIGN1cnNvci1wb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e2AvcHJvYmxlbXMvJHtwcm9ibGVtLmlkfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cHJvYmxlbS50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPXtgcHgtNiBweS00ICR7ZGlmZmljdWx5Q29sb3J9YH0+e3Byb2JsZW0uZGlmZmljdWx0eX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9e1wicHgtNiBweS00XCJ9Pntwcm9ibGVtLmNhdGVnb3J5fTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ndGV4dC1sZWZ0IHB5LTQgZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1kYXJrLWdyZWVuLXMnPlxyXG4gIHt1c2VyRGV0YWlscy5maW5kKChlbGVtZW50OiBzdHJpbmcpID0+IGVsZW1lbnQgPT09IHByb2JsZW0uaWQpID8gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMENBNzUwLCAjM0FBMzREKScsIGNvbG9yOiAnd2hpdGUnLCBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJywgcGFkZGluZzogJzAuNXJlbScgfX0+XHJcbiAgICAgIGNvbXBsZXRlZFxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgY2xhc3NOYW1lPSdob3Zlcjp0ZXh0LWJsdWUtNjAwIGN1cnNvci1wb2ludGVyJ1xyXG4gICAgICAgIGhyZWY9e2AvcHJvYmxlbXMvJHtwcm9ibGVtLmlkfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwQ0E3NTAsICMzQUEzNEQpJywgY29sb3I6ICd3aGl0ZScsIGJvcmRlclJhZGl1czogJzAuMjVyZW0nLCBwYWRkaW5nOiAnMC41cmVtJyB9fT5cclxuICAgICAgICAgIGRvIGl0IE5vd1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApfVxyXG48L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPXtcInB4LTYgcHktNFwifT5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL3NvbHV0aW9uLyR7cHJvYmxlbS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zb2x1dGlvbi5wbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFByb2JsZW1zVGFibGU7XHJcblxyXG5mdW5jdGlvbiB1c2VHZXRQcm9ibGVtcyhsb2FkaW5nUHJvYmxlbXM6Ym9vbGVhbixzZXRMb2FkaW5nUHJvYmxlbXM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pikge1xyXG5cdGNvbnN0IFtwcm9ibGVtcywgc2V0UHJvYmxlbXNdID0gdXNlU3RhdGU8REJQcm9ibGVtW10+KFtdKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZ2V0UHJvYmxlbXMgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdHNldExvYWRpbmdQcm9ibGVtcyh0cnVlKTtcclxuXHRcdFx0Y29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb24oZmlyZXN0b3JlLCBcInByb2JsZW1zXCIpLCBvcmRlckJ5KFwib3JkZXJcIiwgXCJhc2NcIikpO1xyXG5cdFx0XHRjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcclxuXHRcdFx0Y29uc3QgdG1wOiBEQlByb2JsZW1bXSA9IFtdO1xyXG5cdFx0XHRxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG5cdFx0XHRcdHRtcC5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9IGFzIERCUHJvYmxlbSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzZXRQcm9ibGVtcyh0bXApO1xyXG5cdFx0XHRzZXRMb2FkaW5nUHJvYmxlbXMoZmFsc2UpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRnZXRQcm9ibGVtcygpO1xyXG5cdH0sIFtzZXRMb2FkaW5nUHJvYmxlbXNdKTtcclxuXHRyZXR1cm4gcHJvYmxlbXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldHVzZWRldGFpbHNvbnByb2JsZW0oKXtcclxuXHRjb25zdCBbdXNlcixzZXRVc2VyXT11c2VTdGF0ZTxhbnk+KG51bGwpXHJcblxyXG4gIGNvbnN0IGZldGNoVXNlckRldGFpbHMgPSBhc3luYyAoZW1haWw6c3RyaW5nfG51bGwpID0+IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCAndXNlcnMnKTsgXHJcbiAgXHJcbiAgICBjb25zdCBxID0gcXVlcnkodXNlcnNDb2xsZWN0aW9uLCB3aGVyZSgnZW1haWwnLCAnPT0nLCBlbWFpbCkpO1xyXG4gIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XHJcbiAgICAgIGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdVc2VyIERldGFpbHM6JywgdXNlckRhdGEuc29sdmVkUHJvYmxlbXMpO1xyXG4gICAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XHJcblx0XHQgIHJldHVybiB1c2VyLnNvbHZlZFByb2JsZW1zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyB1c2VyIGZvdW5kIHdpdGggdGhpcyBlbWFpbC4nKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciBkZXRhaWxzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG4gIFxyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKGN1cnJlbnRVc2VyKSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50VXNlcikge1xyXG4gICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IGN1cnJlbnRVc2VyLmVtYWlsO1xyXG4gICAgICAgIGZldGNoVXNlckRldGFpbHModXNlckVtYWlsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpOyBcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gdXNlcj8uc29sdmVkUHJvYmxlbXMgfHwgbnVsbDtcclxuXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwcCIsImZpcmVzdG9yZSIsImdldEF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsIndoZXJlIiwiZ2V0RmlyZXN0b3JlIiwib3JkZXJCeSIsInF1ZXJ5IiwiUHJvYmxlbXNUYWJsZSIsImxvYWRpbmdQcm9ibGVtcyIsInNldExvYWRpbmdQcm9ibGVtcyIsInByb2JsZW1zIiwidXNlR2V0UHJvYmxlbXMiLCJ1c2VyRGV0YWlscyIsImdldHVzZWRldGFpbHNvbnByb2JsZW0iLCJ0Ym9keSIsImNsYXNzTmFtZSIsIm1hcCIsInByb2JsZW0iLCJpZHgiLCJkaWZmaWN1bHlDb2xvciIsImRpZmZpY3VsdHkiLCJ0ciIsInRkIiwiaHJlZiIsImlkIiwidGl0bGUiLCJjYXRlZ29yeSIsImZpbmQiLCJlbGVtZW50IiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzZXRQcm9ibGVtcyIsImdldFByb2JsZW1zIiwicSIsInF1ZXJ5U25hcHNob3QiLCJ0bXAiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJ1c2VyIiwic2V0VXNlciIsImZldGNoVXNlckRldGFpbHMiLCJlbWFpbCIsImRiIiwidXNlcnNDb2xsZWN0aW9uIiwiZW1wdHkiLCJ1c2VyRGF0YSIsInNvbHZlZFByb2JsZW1zIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYXV0aCIsInVuc3Vic2NyaWJlIiwiY3VycmVudFVzZXIiLCJ1c2VyRW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/problemsTable.tsx\n"));

/***/ })

});
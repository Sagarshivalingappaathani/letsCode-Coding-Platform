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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"97904689079e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz85NGI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiOTc5MDQ2ODkwNzllXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/problemsTable.tsx":
/*!**************************************!*\
  !*** ./components/problemsTable.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseConfig */ \"(app-pages-browser)/./firebaseConfig.tsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\nconst ProblemsTable = (param)=>{\n    let { loadingProblems, setLoadingProblems } = param;\n    _s();\n    const problems = useGetProblems(loadingProblems, setLoadingProblems);\n    const userDetails = getusedetailsonproblem();\n    //console.log(userDetails)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n            className: \"gradiant text-dark \",\n            children: problems.map((problem, idx)=>{\n                const difficulyColor = problem.difficulty === \"Easy\" ? \"text-dark-green-s\" : problem.difficulty === \"Medium\" ? \"text-dark-yellow\" : \"text-dark-pink\";\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"gradiant items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: idx + 1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"hover:text-blue-600 cursor-pointer\",\n                                href: \"/problems/\".concat(problem.id),\n                                children: problem.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 10\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4 \".concat(difficulyColor),\n                            children: problem.difficulty\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: problem.category\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-2 py-4 font-medium whitespace-nowrap text-dark-green-s\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/solution/\".concat(problem.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/assets/images/solution.png\",\n                                    alt: \"logo\",\n                                    width: 45,\n                                    height: 45,\n                                    className: \"object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 8\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, problem.id, true, {\n                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n            lineNumber: 22,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProblemsTable, \"9Uv03Ll4Pl7bQK/ARctgRuyhsZM=\", false, function() {\n    return [\n        useGetProblems\n    ];\n});\n_c = ProblemsTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProblemsTable);\nfunction useGetProblems(loadingProblems, setLoadingProblems) {\n    _s1();\n    const [problems, setProblems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getProblems = async ()=>{\n            setLoadingProblems(true);\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.firestore, \"problems\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.orderBy)(\"order\", \"asc\"));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(q);\n            const tmp = [];\n            querySnapshot.forEach((doc)=>{\n                tmp.push({\n                    id: doc.id,\n                    ...doc.data()\n                });\n            });\n            setProblems(tmp);\n            setLoadingProblems(false);\n        };\n        getProblems();\n    }, [\n        setLoadingProblems\n    ]);\n    return problems;\n}\n_s1(useGetProblems, \"VBi59e6jMrp0EO3shHKvwMVAqws=\");\nfunction getusedetailsonproblem() {\n    _s2();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const fetchUserDetails = async (email)=>{\n        const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getFirestore)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.app);\n        const usersCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(db, \"users\");\n        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)(usersCollection, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"email\", \"==\", email));\n        try {\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(q);\n            if (!querySnapshot.empty) {\n                querySnapshot.forEach((doc)=>{\n                    const userData = doc.data();\n                    //console.log('User Details:', userData.solvedProblems);\n                    setUser(userData);\n                    return user.solvedProblems;\n                });\n            } else {\n                console.log(\"No user found with this email.\");\n            }\n        } catch (error) {\n            console.error(\"Error fetching user details:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.app);\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.onAuthStateChanged)(auth, (currentUser)=>{\n            if (currentUser) {\n                const userEmail = currentUser.email;\n                fetchUserDetails(userEmail);\n            } else {\n                setUser(null);\n            }\n        });\n        return ()=>unsubscribe();\n    }, [\n        user\n    ]);\n    return (user === null || user === void 0 ? void 0 : user.solvedProblems) || null;\n}\n_s2(getusedetailsonproblem, \"iCEFdcn4VWii5CszsjcYbeQHEgM=\");\nvar _c;\n$RefreshReg$(_c, \"ProblemsTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvYmxlbXNUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBRWE7QUFDRztBQUNhO0FBQytDO0FBTzNHLE1BQU1jLGdCQUE4QztRQUFDLEVBQUVDLGVBQWUsRUFBQ0Msa0JBQWtCLEVBQUU7O0lBRTFGLE1BQU1DLFdBQVdDLGVBQWVILGlCQUFnQkM7SUFDaEQsTUFBTUcsY0FBWUM7SUFDbEIsMEJBQTBCO0lBRTFCLHFCQUNDO2tCQUNDLDRFQUFDQztZQUFNQyxXQUFVO3NCQUNmTCxTQUFTTSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0M7Z0JBQ3ZCLE1BQU1DLGlCQUNMRixRQUFRRyxVQUFVLEtBQUssU0FDcEIsc0JBQ0FILFFBQVFHLFVBQVUsS0FBSyxXQUN2QixxQkFDQTtnQkFDSixxQkFDQyw4REFBQ0M7b0JBQUdOLFdBQVc7O3NDQUNkLDhEQUFDTzs0QkFBR1AsV0FBVztzQ0FBY0csTUFBSTs7Ozs7O3NDQUNqQyw4REFBQ0k7NEJBQUdQLFdBQVU7c0NBRVosNEVBQUN0QixrREFBSUE7Z0NBQ0pzQixXQUFVO2dDQUNWUSxNQUFNLGFBQXdCLE9BQVhOLFFBQVFPLEVBQUU7MENBRTVCUCxRQUFRUSxLQUFLOzs7Ozs7Ozs7OztzQ0FJakIsOERBQUNIOzRCQUFHUCxXQUFXLGFBQTRCLE9BQWZJO3NDQUFtQkYsUUFBUUcsVUFBVTs7Ozs7O3NDQUNqRSw4REFBQ0U7NEJBQUdQLFdBQVc7c0NBQWNFLFFBQVFTLFFBQVE7Ozs7OztzQ0FDeEIsOERBQUNDOzRCQUFHWixXQUFVOzs7Ozs7c0NBRW5DLDhEQUFDTzs0QkFBR1AsV0FBVztzQ0FDZiw0RUFBQ3RCLGtEQUFJQTtnQ0FBQzhCLE1BQU0sYUFBd0IsT0FBWE4sUUFBUU8sRUFBRTswQ0FDViw0RUFBQzlCLG1EQUFLQTtvQ0FDTmtDLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JoQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzttQkF2QlFFLFFBQVFPLEVBQUU7Ozs7O1lBOEJ4RDs7Ozs7OztBQUtKO0dBcERNakI7O1FBRVlJOzs7S0FGWko7QUFxRE4sK0RBQWVBLGFBQWFBLEVBQUM7QUFFN0IsU0FBU0ksZUFBZUgsZUFBdUIsRUFBQ0Msa0JBQWlFOztJQUNoSCxNQUFNLENBQUNDLFVBQVVzQixZQUFZLEdBQUdwQywrQ0FBUUEsQ0FBYyxFQUFFO0lBQ3hERCxnREFBU0EsQ0FBQztRQUNULE1BQU1zQyxjQUFjO1lBQ25CeEIsbUJBQW1CO1lBQ25CLE1BQU15QixJQUFJNUIseURBQUtBLENBQUNMLDhEQUFVQSxDQUFDSCxzREFBU0EsRUFBRSxhQUFhTywyREFBT0EsQ0FBQyxTQUFTO1lBQ3BFLE1BQU04QixnQkFBZ0IsTUFBTWpDLDJEQUFPQSxDQUFDZ0M7WUFDcEMsTUFBTUUsTUFBbUIsRUFBRTtZQUMzQkQsY0FBY0UsT0FBTyxDQUFDLENBQUNDO2dCQUN0QkYsSUFBSUcsSUFBSSxDQUFDO29CQUFFZixJQUFJYyxJQUFJZCxFQUFFO29CQUFFLEdBQUdjLElBQUlFLElBQUksRUFBRTtnQkFBQztZQUN0QztZQUNBUixZQUFZSTtZQUNaM0IsbUJBQW1CO1FBQ3BCO1FBRUF3QjtJQUNELEdBQUc7UUFBQ3hCO0tBQW1CO0lBQ3ZCLE9BQU9DO0FBQ1I7SUFsQlNDO0FBb0JULFNBQVNFOztJQUNSLE1BQU0sQ0FBQzRCLE1BQUtDLFFBQVEsR0FBQzlDLCtDQUFRQSxDQUFNO0lBRWxDLE1BQU0rQyxtQkFBbUIsT0FBT0M7UUFDOUIsTUFBTUMsS0FBS3pDLGdFQUFZQSxDQUFDUCxnREFBR0E7UUFDM0IsTUFBTWlELGtCQUFrQjdDLDhEQUFVQSxDQUFDNEMsSUFBSTtRQUV2QyxNQUFNWCxJQUFJNUIseURBQUtBLENBQUN3QyxpQkFBaUIzQyx5REFBS0EsQ0FBQyxTQUFTLE1BQU15QztRQUV0RCxJQUFJO1lBQ0YsTUFBTVQsZ0JBQWdCLE1BQU1qQywyREFBT0EsQ0FBQ2dDO1lBQ3BDLElBQUksQ0FBQ0MsY0FBY1ksS0FBSyxFQUFFO2dCQUN0QlosY0FBY0UsT0FBTyxDQUFDLENBQUNDO29CQUV2QixNQUFNVSxXQUFXVixJQUFJRSxJQUFJO29CQUN6Qix3REFBd0Q7b0JBQ3hERSxRQUFRTTtvQkFDZCxPQUFPUCxLQUFLUSxjQUFjO2dCQUN0QjtZQUNGLE9BQU87Z0JBQ0xDLFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQ2hEO0lBQ0Y7SUFFQXpELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTTBELE9BQU90RCxzREFBT0EsQ0FBQ0YsZ0RBQUdBO1FBRXhCLE1BQU15RCxjQUFjdEQsaUVBQWtCQSxDQUFDcUQsTUFBTSxDQUFDRTtZQUM1QyxJQUFJQSxhQUFhO2dCQUNmLE1BQU1DLFlBQVlELFlBQVlYLEtBQUs7Z0JBQ25DRCxpQkFBaUJhO1lBQ25CLE9BQU87Z0JBQ0xkLFFBQVE7WUFDVjtRQUNGO1FBRUEsT0FBTyxJQUFNWTtJQUNmLEdBQUc7UUFBQ2I7S0FBSztJQUVULE9BQU9BLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVEsY0FBYyxLQUFJO0FBRWpDO0lBNUNTcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9ibGVtc1RhYmxlLnRzeD9hMWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBEQlByb2JsZW0gfSBmcm9tIFwiLi4vZGF0YS90eXBlcy9wcm9ibGVtXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHthcHAsZmlyZXN0b3JlfSBmcm9tIFwiLi4vZmlyZWJhc2VDb25maWdcIlxyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBkb2MsIGdldERvYywgZ2V0RG9jcywgd2hlcmUsIGdldEZpcmVzdG9yZSwgb3JkZXJCeSwgcXVlcnkgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG50eXBlIFByb2JsZW1zVGFibGVQcm9wcyA9IHtcclxuXHRsb2FkaW5nUHJvYmxlbXM6Ym9vbGVhblxyXG5cdHNldExvYWRpbmdQcm9ibGVtczogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG59O1xyXG5cclxuY29uc3QgUHJvYmxlbXNUYWJsZTogUmVhY3QuRkM8UHJvYmxlbXNUYWJsZVByb3BzPiA9ICh7IGxvYWRpbmdQcm9ibGVtcyxzZXRMb2FkaW5nUHJvYmxlbXMgfSkgPT4ge1xyXG5cclxuXHRjb25zdCBwcm9ibGVtcyA9IHVzZUdldFByb2JsZW1zKGxvYWRpbmdQcm9ibGVtcyxzZXRMb2FkaW5nUHJvYmxlbXMpO1xyXG5cdGNvbnN0IHVzZXJEZXRhaWxzPWdldHVzZWRldGFpbHNvbnByb2JsZW0oKTtcclxuXHQvL2NvbnNvbGUubG9nKHVzZXJEZXRhaWxzKVxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPSdncmFkaWFudCB0ZXh0LWRhcmsgJz5cclxuXHRcdFx0XHR7cHJvYmxlbXMubWFwKChwcm9ibGVtLCBpZHgpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGRpZmZpY3VseUNvbG9yID1cclxuXHRcdFx0XHRcdFx0cHJvYmxlbS5kaWZmaWN1bHR5ID09PSBcIkVhc3lcIlxyXG5cdFx0XHRcdFx0XHRcdD8gXCJ0ZXh0LWRhcmstZ3JlZW4tc1wiXHJcblx0XHRcdFx0XHRcdFx0OiBwcm9ibGVtLmRpZmZpY3VsdHkgPT09IFwiTWVkaXVtXCJcclxuXHRcdFx0XHRcdFx0XHQ/IFwidGV4dC1kYXJrLXllbGxvd1wiXHJcblx0XHRcdFx0XHRcdFx0OiBcInRleHQtZGFyay1waW5rXCI7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPSBcImdyYWRpYW50IGl0ZW1zLWNlbnRlclwiIGtleT17cHJvYmxlbS5pZH0+XHJcblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT17XCJweC02IHB5LTRcIn0+e2lkeCsxfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ncHgtNiBweS00Jz5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQtYmx1ZS02MDAgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9wcm9ibGVtcy8ke3Byb2JsZW0uaWR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtwcm9ibGVtLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9e2BweC02IHB5LTQgJHtkaWZmaWN1bHlDb2xvcn1gfT57cHJvYmxlbS5kaWZmaWN1bHR5fTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT17XCJweC02IHB5LTRcIn0+e3Byb2JsZW0uY2F0ZWdvcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3B4LTIgcHktNCBmb250LW1lZGl1bSB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LWRhcmstZ3JlZW4tcyc+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPXtcInB4LTYgcHktNFwifT5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL3NvbHV0aW9uLyR7cHJvYmxlbS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zb2x1dGlvbi5wbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFByb2JsZW1zVGFibGU7XHJcblxyXG5mdW5jdGlvbiB1c2VHZXRQcm9ibGVtcyhsb2FkaW5nUHJvYmxlbXM6Ym9vbGVhbixzZXRMb2FkaW5nUHJvYmxlbXM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pikge1xyXG5cdGNvbnN0IFtwcm9ibGVtcywgc2V0UHJvYmxlbXNdID0gdXNlU3RhdGU8REJQcm9ibGVtW10+KFtdKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZ2V0UHJvYmxlbXMgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdHNldExvYWRpbmdQcm9ibGVtcyh0cnVlKTtcclxuXHRcdFx0Y29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb24oZmlyZXN0b3JlLCBcInByb2JsZW1zXCIpLCBvcmRlckJ5KFwib3JkZXJcIiwgXCJhc2NcIikpO1xyXG5cdFx0XHRjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcclxuXHRcdFx0Y29uc3QgdG1wOiBEQlByb2JsZW1bXSA9IFtdO1xyXG5cdFx0XHRxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG5cdFx0XHRcdHRtcC5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9IGFzIERCUHJvYmxlbSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzZXRQcm9ibGVtcyh0bXApO1xyXG5cdFx0XHRzZXRMb2FkaW5nUHJvYmxlbXMoZmFsc2UpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRnZXRQcm9ibGVtcygpO1xyXG5cdH0sIFtzZXRMb2FkaW5nUHJvYmxlbXNdKTtcclxuXHRyZXR1cm4gcHJvYmxlbXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldHVzZWRldGFpbHNvbnByb2JsZW0oKXtcclxuXHRjb25zdCBbdXNlcixzZXRVc2VyXT11c2VTdGF0ZTxhbnk+KG51bGwpXHJcblxyXG4gIGNvbnN0IGZldGNoVXNlckRldGFpbHMgPSBhc3luYyAoZW1haWw6c3RyaW5nfG51bGwpID0+IHtcclxuICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCAndXNlcnMnKTsgXHJcbiAgXHJcbiAgICBjb25zdCBxID0gcXVlcnkodXNlcnNDb2xsZWN0aW9uLCB3aGVyZSgnZW1haWwnLCAnPT0nLCBlbWFpbCkpO1xyXG4gIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XHJcbiAgICAgIGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdVc2VyIERldGFpbHM6JywgdXNlckRhdGEuc29sdmVkUHJvYmxlbXMpO1xyXG4gICAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XHJcblx0XHQgIHJldHVybiB1c2VyLnNvbHZlZFByb2JsZW1zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyB1c2VyIGZvdW5kIHdpdGggdGhpcyBlbWFpbC4nKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciBkZXRhaWxzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG4gIFxyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKGN1cnJlbnRVc2VyKSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50VXNlcikge1xyXG4gICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IGN1cnJlbnRVc2VyLmVtYWlsO1xyXG4gICAgICAgIGZldGNoVXNlckRldGFpbHModXNlckVtYWlsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpOyBcclxuICB9LCBbdXNlcl0pO1xyXG4gIFxyXG4gIHJldHVybiB1c2VyPy5zb2x2ZWRQcm9ibGVtcyB8fCBudWxsO1xyXG5cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBwIiwiZmlyZXN0b3JlIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwid2hlcmUiLCJnZXRGaXJlc3RvcmUiLCJvcmRlckJ5IiwicXVlcnkiLCJQcm9ibGVtc1RhYmxlIiwibG9hZGluZ1Byb2JsZW1zIiwic2V0TG9hZGluZ1Byb2JsZW1zIiwicHJvYmxlbXMiLCJ1c2VHZXRQcm9ibGVtcyIsInVzZXJEZXRhaWxzIiwiZ2V0dXNlZGV0YWlsc29ucHJvYmxlbSIsInRib2R5IiwiY2xhc3NOYW1lIiwibWFwIiwicHJvYmxlbSIsImlkeCIsImRpZmZpY3VseUNvbG9yIiwiZGlmZmljdWx0eSIsInRyIiwidGQiLCJocmVmIiwiaWQiLCJ0aXRsZSIsImNhdGVnb3J5IiwidGgiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNldFByb2JsZW1zIiwiZ2V0UHJvYmxlbXMiLCJxIiwicXVlcnlTbmFwc2hvdCIsInRtcCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiZGF0YSIsInVzZXIiLCJzZXRVc2VyIiwiZmV0Y2hVc2VyRGV0YWlscyIsImVtYWlsIiwiZGIiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJlbXB0eSIsInVzZXJEYXRhIiwic29sdmVkUHJvYmxlbXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhdXRoIiwidW5zdWJzY3JpYmUiLCJjdXJyZW50VXNlciIsInVzZXJFbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/problemsTable.tsx\n"));

/***/ })

});
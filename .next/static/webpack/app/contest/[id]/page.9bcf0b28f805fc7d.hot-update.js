"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contest/[id]/page",{

/***/ "(app-pages-browser)/./data/Problems/no-island.ts":
/*!************************************!*\
  !*** ./data/Problems/no-island.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   noIsland: function() { return /* binding */ noIsland; }\n/* harmony export */ });\nconst intialcode = [\n    {\n        id: 1,\n        name: \"#include <stdio.h>\\n\t\t\t  #include <bits/stdc++.h>\\n\t\t\t  using namespace std;\"\n    },\n    {\n        id: 2,\n        name: 'import java.util.Scanner;\\n\\n        public class Main {\\n            public static void main(String[] args) {\\n                Scanner scanner = new Scanner(System.in);\\n                int tc = scanner.nextInt();\\n                while (tc-- > 0) {\\n                    int n = scanner.nextInt();\\n                    int m = scanner.nextInt();\\n                    int[][] grid = new int[n][m];\\n                    for (int i = 0; i < n; i++) {\\n                        for (int j = 0; j < m; j++) {\\n                            grid[i][j] = scanner.nextInt();\\n                        }\\n                    }\\n                    Solution obj = new Solution();\\n                    int ans = obj.numIslands(grid);\\n                    System.out.print(ans+\" \");\\n                }\\n            }\\n        }\\n        '\n    }\n];\nconst endingcode = [\n    {\n        id: 1,\n        name: \"\\n        int main() {\\n            int tc;\\n            cin >> tc;\\n            while (tc--) {\\n                int n, m;\\n                cin >> n >> m;\\n                vector<vector<char>> grid(n, vector<char>(m, '#'));\\n                for (int i = 0; i < n; i++) {\\n                    for (int j = 0; j < m; j++) {\\n                        cin >> grid[i][j];\\n                    }\\n                }\\n                Solution obj;\\n                int ans = obj.numIslands(grid);\\n                cout << ans << \\\" \\\";\\n            }\\n            return 0;\\n        }\\n        \"\n    },\n    {\n        id: 2,\n        name: \"\"\n    }\n];\nconst boilercode = [\n    {\n        id: 1,\n        name: \"class Solution {\\n    public:\\n      // Function to find the number of islands.\\n      int numIslands(vector<vector<char>>& grid) {\\n          // Code here\\n      }\\n};\"\n    },\n    {\n        id: 2,\n        name: \"class Solution {\\n    // Function to find the number of islands.\\n    public int numIslands(int[][] grid) {\\n        // Code here\\n    }\\n}\"\n    }\n];\nconst solutioncode = [\n    {\n        id: 1,\n        name: \"class Solution {\\n    private:\\n      void dfs(int row,int col,vector<vector<int>>&vis,\\n        vector<vector<char>>&grid){\\n          vis[row][col] = 1;\\n          int n = grid.size();\\n          int m = grid[0].size();\\n          for(int p = -1; p <= 1; p++){\\n              int nrow = row + p;\\n              for(int q = -1; q <= 1; q++){\\n                  int ncol = col + q;\\n                  if(nrow >= 0 && nrow < n && ncol >= 0\\n                     && ncol < m &&grid[nrow][ncol] == '1'\\n                      && vis[nrow][ncol] == 0){\\n                      dfs(nrow,ncol,vis,grid);\\n                  }\\n              }\\n          }\\n      }\\n    public:\\n      // Function to find the number of islands.\\n      int numIslands(vector<vector<char>>& grid) {\\n          // Code here\\n          int row = grid.size();\\n          int col = grid[0].size();\\n          int count = 0;\\n          vector<vector<int>>vis(row,vector<int>(col,0));\\n          for(int i = 0; i < row; ++i){\\n              for(int j = 0; j < col; ++j){\\n                  if(!vis[i][j] && grid[i][j] == '1'){\\n                      count++;\\n                      dfs(i,j,vis,grid);\\n                  }\\n              }\\n          }\\n          return count;\\n      }\\n  };\"\n    },\n    {\n        id: 2,\n        name: \"class Solution {\\n    private void dfs(int row, int col, int[][] vis, int[][] grid) {\\n        vis[row][col] = 1;\\n        int n = grid.length;\\n        int m = grid[0].length;\\n        int[] dr = {-1, -1, -1, 0, 0, 1, 1, 1};\\n        int[] dc = {-1, 0, 1, -1, 1, -1, 0, 1};\\n        for (int i = 0; i < 8; i++) {\\n            int nrow = row + dr[i];\\n            int ncol = col + dc[i];\\n            if (nrow >= 0 && nrow < n && ncol >= 0 && ncol \\n                 < m && grid[nrow][ncol] == 1 && \\n                vis[nrow][ncol] == 0) {\\n                dfs(nrow, ncol, vis, grid);\\n            }\\n        }\\n    }\\n\\n    public int numIslands(int[][] grid) {\\n        int row = grid.length;\\n        int col = grid[0].length;\\n        int count = 0;\\n        int[][] vis = new int[row][col];\\n        for (int i = 0; i < row; i++) {\\n            for (int j = 0; j < col; j++) {\\n                if (grid[i][j] == 1 && vis[i][j] == 0) {\\n                    count++;\\n                    dfs(i, j, vis, grid);\\n                }\\n            }\\n        }\\n        return count;\\n    }\\n}\\n\"\n    }\n];\nconst noIsland = {\n    id: \"no-island\",\n    title: \"5 Find the number of islands\",\n    problemStatement: \"<div class=\\\"mt-1\\\">\\n    <p>\\n      The task is to find the number of islands in a grid, where each cell can be either '0' (representing water) or '1' (representing land). An island is defined as a group of '1's connected both horizontally and vertically, either directly or diagonally. It may be surrounded by water or the boundary of the grid. In other words, islands are contiguous regions of land that are separated from other land or surrounded by water.\\n    </p>\\n  </div>\\n  \\n  <div class=\\\"mt-3\\\">\\n    <p>\\n      To solve this problem, you can implement an algorithm that explores the grid, identifies land cells ('1's), and groups them into islands. The goal is to count the total number of such islands.\\n    </p>\\n  </div>\\n  \\n  <div class=\\\"mt-3\\\">\\n    <p class=\\\"note\\\">\\n      Note: Ensure that when identifying islands, you consider connections in all 8 directions, including horizontally, vertically, and diagonally. Also, an island can be located both in the interior of the grid and along its boundary.\\n    </p>\\n  </div>\\n  \",\n    examples: [\n        {\n            id: 1,\n            inputText: \"grid = {{0,1},{1,0},{1,1},{1,0}}\",\n            outputText: \" 1 \"\n        },\n        {\n            id: 2,\n            inputText: \"grid = {{0,1,1,1,0,0,0},{0,0,1,1,0,1,0}}\",\n            outputText: \" 2\"\n        }\n    ],\n    constraints: '<div className=\"mt-4\">\\n\t\t\t\t<ul>\\n\t\t\t\t<li className=\"mt-2\">\\n\t\t\t\t\t<code>Expected Time Complexity: O(n*m)</code>\\n\t\t\t\t</li>\\n\t\t\t\t<li className=\"mt-2\">\\n\t\t\t\t\t<code>Expected Auxiliary Space: O(n*m)</code>\\n\t\t\t\t</li>\\n\t\t\t\t<li className=\"mt-2\">\\n\t\t\t\t\t<code>1 ≤ n,m ≤ 500</code>\\n\t\t\t\t</li>\\n\t\t\t\t</ul>\\n\t\t\t</div>',\n    starterCode: boilercode,\n    intialcode: intialcode,\n    endingcode: endingcode,\n    solutioncode: solutioncode,\n    inuputs: \"2 4 2 0 1 1 0 1 1 1 0 2 7 0 1 1 1 0 0 0 0 0 1 1 0 1 0\",\n    output: \"1 2 \",\n    order: 5,\n    difficulty: \"Hard\",\n    tag: [\n        {\n            id: 1,\n            name: \"DFs\"\n        },\n        {\n            id: 2,\n            name: \"Graph\"\n        },\n        {\n            id: 3,\n            name: \"Data Structures\"\n        }\n    ],\n    companies: [\n        {\n            id: 1,\n            name: \"Uber\"\n        },\n        {\n            id: 2,\n            name: \"Google\"\n        },\n        {\n            id: 3,\n            name: \"Swiggy\"\n        }\n    ],\n    averagetime: \"25m\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2RhdGEvUHJvYmxlbXMvbm8taXNsYW5kLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNQSxhQUFhO0lBQ2xCO1FBQ0NDLElBQUc7UUFDSEMsTUFBTTtJQUdQO0lBQ0E7UUFDQ0QsSUFBRztRQUNIQyxNQUFNO0lBc0JQO0NBRUE7QUFFRCxNQUFNQyxhQUFXO0lBQ2hCO1FBQ0NGLElBQUc7UUFDSEMsTUFBTTtJQW9CUDtJQUNBO1FBQ0NELElBQUc7UUFDSEMsTUFBTTtJQUNQO0NBQ0E7QUFFRCxNQUFNRSxhQUFXO0lBQ2hCO1FBQ0VILElBQUc7UUFDSEMsTUFDRjtJQU9BO0lBQ0E7UUFDQ0QsSUFBRztRQUNIQyxNQUNEO0lBTUE7Q0FDQTtBQUVELE1BQU1HLGVBQWE7SUFDbEI7UUFDQ0osSUFBRztRQUNIQyxNQUNEO0lBc0NBO0lBQ0E7UUFDQ0QsSUFBRztRQUNIQyxNQUNEO0lBbUNBO0NBQ0E7QUFHTSxNQUFNSSxXQUFvQjtJQUNoQ0wsSUFBSTtJQUNKTSxPQUFPO0lBQ1BDLGtCQUFtQjtJQWtCbEJDLFVBQVM7UUFDVjtZQUNFUixJQUFJO1lBQ0pTLFdBQVc7WUFDWEMsWUFBWTtRQUNkO1FBQ0E7WUFDRVYsSUFBSTtZQUNKUyxXQUFXO1lBQ1hDLFlBQVk7UUFDZDtLQUNFO0lBQ0ZDLGFBQWM7SUFhZEMsYUFBYVQ7SUFDYkosWUFBV0E7SUFDWEcsWUFBV0E7SUFDWEUsY0FBYUE7SUFDYlMsU0FBUTtJQUNSQyxRQUFPO0lBQ1BDLE9BQU87SUFDUEMsWUFBWTtJQUNaQyxLQUFJO1FBQ0g7WUFDQ2pCLElBQUk7WUFDSkMsTUFBTTtRQUNMO1FBQ0E7WUFDREQsSUFBSTtZQUNKQyxNQUFNO1FBQ0w7UUFDQTtZQUNERCxJQUFJO1lBQ0pDLE1BQU07UUFDTDtLQUVGO0lBQ0RpQixXQUFXO1FBQ1Y7WUFDRWxCLElBQUk7WUFDSkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsSUFBSTtZQUNKQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxJQUFJO1lBQ0pDLE1BQU07UUFDUjtLQUNFO0lBRURrQixhQUFZO0FBRWYsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL1Byb2JsZW1zL25vLWlzbGFuZC50cz9lNGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2JsZW0gfSBmcm9tIFwiLi4vdHlwZXMvcHJvYmxlbVwiO1xyXG5cclxuY29uc3QgaW50aWFsY29kZSA9IFtcclxuXHR7XHJcblx0XHRpZDoxLFxyXG5cdFx0bmFtZTpgI2luY2x1ZGUgPHN0ZGlvLmg+XHJcblx0XHRcdCAgI2luY2x1ZGUgPGJpdHMvc3RkYysrLmg+XHJcblx0XHRcdCAgdXNpbmcgbmFtZXNwYWNlIHN0ZDtgXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDoyLFxyXG5cdFx0bmFtZTpgaW1wb3J0IGphdmEudXRpbC5TY2FubmVyO1xyXG5cclxuICAgICAgICBwdWJsaWMgY2xhc3MgTWFpbiB7XHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBtYWluKFN0cmluZ1tdIGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIFNjYW5uZXIgc2Nhbm5lciA9IG5ldyBTY2FubmVyKFN5c3RlbS5pbik7XHJcbiAgICAgICAgICAgICAgICBpbnQgdGMgPSBzY2FubmVyLm5leHRJbnQoKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0Yy0tID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludCBuID0gc2Nhbm5lci5uZXh0SW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50IG0gPSBzY2FubmVyLm5leHRJbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnRbXVtdIGdyaWQgPSBuZXcgaW50W25dW21dO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaW50IGogPSAwOyBqIDwgbTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkW2ldW2pdID0gc2Nhbm5lci5uZXh0SW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgU29sdXRpb24gb2JqID0gbmV3IFNvbHV0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50IGFucyA9IG9iai5udW1Jc2xhbmRzKGdyaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFN5c3RlbS5vdXQucHJpbnQoYW5zK1wiIFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcblx0fVxyXG5cclxuXVxyXG5cclxuY29uc3QgZW5kaW5nY29kZT1bXHJcblx0e1xyXG5cdFx0aWQ6MSxcclxuXHRcdG5hbWU6YFxyXG4gICAgICAgIGludCBtYWluKCkge1xyXG4gICAgICAgICAgICBpbnQgdGM7XHJcbiAgICAgICAgICAgIGNpbiA+PiB0YztcclxuICAgICAgICAgICAgd2hpbGUgKHRjLS0pIHtcclxuICAgICAgICAgICAgICAgIGludCBuLCBtO1xyXG4gICAgICAgICAgICAgICAgY2luID4+IG4gPj4gbTtcclxuICAgICAgICAgICAgICAgIHZlY3Rvcjx2ZWN0b3I8Y2hhcj4+IGdyaWQobiwgdmVjdG9yPGNoYXI+KG0sICcjJykpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGludCBqID0gMDsgaiA8IG07IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaW4gPj4gZ3JpZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBTb2x1dGlvbiBvYmo7XHJcbiAgICAgICAgICAgICAgICBpbnQgYW5zID0gb2JqLm51bUlzbGFuZHMoZ3JpZCk7XHJcbiAgICAgICAgICAgICAgICBjb3V0IDw8IGFucyA8PCBcIiBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6MixcclxuXHRcdG5hbWU6YGBcclxuXHR9XHJcbl1cclxuXHJcbmNvbnN0IGJvaWxlcmNvZGU9W1xyXG4ge1xyXG4gICBpZDoxLFxyXG4gICBuYW1lOlxyXG5gY2xhc3MgU29sdXRpb24ge1xyXG4gICAgcHVibGljOlxyXG4gICAgICAvLyBGdW5jdGlvbiB0byBmaW5kIHRoZSBudW1iZXIgb2YgaXNsYW5kcy5cclxuICAgICAgaW50IG51bUlzbGFuZHModmVjdG9yPHZlY3RvcjxjaGFyPj4mIGdyaWQpIHtcclxuICAgICAgICAgIC8vIENvZGUgaGVyZVxyXG4gICAgICB9XHJcbn07YFx0IFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6MixcclxuXHRcdG5hbWU6XHJcbmBjbGFzcyBTb2x1dGlvbiB7XHJcbiAgICAvLyBGdW5jdGlvbiB0byBmaW5kIHRoZSBudW1iZXIgb2YgaXNsYW5kcy5cclxuICAgIHB1YmxpYyBpbnQgbnVtSXNsYW5kcyhpbnRbXVtdIGdyaWQpIHtcclxuICAgICAgICAvLyBDb2RlIGhlcmVcclxuICAgIH1cclxufWBcclxuXHR9ICAgICAgICAgICAgIFxyXG5dXHJcblxyXG5jb25zdCBzb2x1dGlvbmNvZGU9W1xyXG5cdHtcclxuXHRcdGlkOjEsXHJcblx0XHRuYW1lOlxyXG5gY2xhc3MgU29sdXRpb24ge1xyXG4gICAgcHJpdmF0ZTpcclxuICAgICAgdm9pZCBkZnMoaW50IHJvdyxpbnQgY29sLHZlY3Rvcjx2ZWN0b3I8aW50Pj4mdmlzLFxyXG4gICAgICAgIHZlY3Rvcjx2ZWN0b3I8Y2hhcj4+JmdyaWQpe1xyXG4gICAgICAgICAgdmlzW3Jvd11bY29sXSA9IDE7XHJcbiAgICAgICAgICBpbnQgbiA9IGdyaWQuc2l6ZSgpO1xyXG4gICAgICAgICAgaW50IG0gPSBncmlkWzBdLnNpemUoKTtcclxuICAgICAgICAgIGZvcihpbnQgcCA9IC0xOyBwIDw9IDE7IHArKyl7XHJcbiAgICAgICAgICAgICAgaW50IG5yb3cgPSByb3cgKyBwO1xyXG4gICAgICAgICAgICAgIGZvcihpbnQgcSA9IC0xOyBxIDw9IDE7IHErKyl7XHJcbiAgICAgICAgICAgICAgICAgIGludCBuY29sID0gY29sICsgcTtcclxuICAgICAgICAgICAgICAgICAgaWYobnJvdyA+PSAwICYmIG5yb3cgPCBuICYmIG5jb2wgPj0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAmJiBuY29sIDwgbSAmJmdyaWRbbnJvd11bbmNvbF0gPT0gJzEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAmJiB2aXNbbnJvd11bbmNvbF0gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZnMobnJvdyxuY29sLHZpcyxncmlkKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgcHVibGljOlxyXG4gICAgICAvLyBGdW5jdGlvbiB0byBmaW5kIHRoZSBudW1iZXIgb2YgaXNsYW5kcy5cclxuICAgICAgaW50IG51bUlzbGFuZHModmVjdG9yPHZlY3RvcjxjaGFyPj4mIGdyaWQpIHtcclxuICAgICAgICAgIC8vIENvZGUgaGVyZVxyXG4gICAgICAgICAgaW50IHJvdyA9IGdyaWQuc2l6ZSgpO1xyXG4gICAgICAgICAgaW50IGNvbCA9IGdyaWRbMF0uc2l6ZSgpO1xyXG4gICAgICAgICAgaW50IGNvdW50ID0gMDtcclxuICAgICAgICAgIHZlY3Rvcjx2ZWN0b3I8aW50Pj52aXMocm93LHZlY3RvcjxpbnQ+KGNvbCwwKSk7XHJcbiAgICAgICAgICBmb3IoaW50IGkgPSAwOyBpIDwgcm93OyArK2kpe1xyXG4gICAgICAgICAgICAgIGZvcihpbnQgaiA9IDA7IGogPCBjb2w7ICsrail7XHJcbiAgICAgICAgICAgICAgICAgIGlmKCF2aXNbaV1bal0gJiYgZ3JpZFtpXVtqXSA9PSAnMScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgIGRmcyhpLGosdmlzLGdyaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgICB9XHJcbiAgfTtgXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDoyLFxyXG5cdFx0bmFtZTpcclxuYGNsYXNzIFNvbHV0aW9uIHtcclxuICAgIHByaXZhdGUgdm9pZCBkZnMoaW50IHJvdywgaW50IGNvbCwgaW50W11bXSB2aXMsIGludFtdW10gZ3JpZCkge1xyXG4gICAgICAgIHZpc1tyb3ddW2NvbF0gPSAxO1xyXG4gICAgICAgIGludCBuID0gZ3JpZC5sZW5ndGg7XHJcbiAgICAgICAgaW50IG0gPSBncmlkWzBdLmxlbmd0aDtcclxuICAgICAgICBpbnRbXSBkciA9IHstMSwgLTEsIC0xLCAwLCAwLCAxLCAxLCAxfTtcclxuICAgICAgICBpbnRbXSBkYyA9IHstMSwgMCwgMSwgLTEsIDEsIC0xLCAwLCAxfTtcclxuICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICBpbnQgbnJvdyA9IHJvdyArIGRyW2ldO1xyXG4gICAgICAgICAgICBpbnQgbmNvbCA9IGNvbCArIGRjW2ldO1xyXG4gICAgICAgICAgICBpZiAobnJvdyA+PSAwICYmIG5yb3cgPCBuICYmIG5jb2wgPj0gMCAmJiBuY29sIFxyXG4gICAgICAgICAgICAgICAgIDwgbSAmJiBncmlkW25yb3ddW25jb2xdID09IDEgJiYgXHJcbiAgICAgICAgICAgICAgICB2aXNbbnJvd11bbmNvbF0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGZzKG5yb3csIG5jb2wsIHZpcywgZ3JpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludCBudW1Jc2xhbmRzKGludFtdW10gZ3JpZCkge1xyXG4gICAgICAgIGludCByb3cgPSBncmlkLmxlbmd0aDtcclxuICAgICAgICBpbnQgY29sID0gZ3JpZFswXS5sZW5ndGg7XHJcbiAgICAgICAgaW50IGNvdW50ID0gMDtcclxuICAgICAgICBpbnRbXVtdIHZpcyA9IG5ldyBpbnRbcm93XVtjb2xdO1xyXG4gICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgcm93OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChpbnQgaiA9IDA7IGogPCBjb2w7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyaWRbaV1bal0gPT0gMSAmJiB2aXNbaV1bal0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgZGZzKGksIGosIHZpcywgZ3JpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG59XHJcbmBcclxuXHR9XHJcbl1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgbm9Jc2xhbmQ6IFByb2JsZW0gPSB7XHJcblx0aWQ6IFwibm8taXNsYW5kXCIsXHJcblx0dGl0bGU6IFwiNSBGaW5kIHRoZSBudW1iZXIgb2YgaXNsYW5kc1wiLFxyXG5cdHByb2JsZW1TdGF0ZW1lbnQ6IGA8ZGl2IGNsYXNzPVwibXQtMVwiPlxyXG4gICAgPHA+XHJcbiAgICAgIFRoZSB0YXNrIGlzIHRvIGZpbmQgdGhlIG51bWJlciBvZiBpc2xhbmRzIGluIGEgZ3JpZCwgd2hlcmUgZWFjaCBjZWxsIGNhbiBiZSBlaXRoZXIgJzAnIChyZXByZXNlbnRpbmcgd2F0ZXIpIG9yICcxJyAocmVwcmVzZW50aW5nIGxhbmQpLiBBbiBpc2xhbmQgaXMgZGVmaW5lZCBhcyBhIGdyb3VwIG9mICcxJ3MgY29ubmVjdGVkIGJvdGggaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5LCBlaXRoZXIgZGlyZWN0bHkgb3IgZGlhZ29uYWxseS4gSXQgbWF5IGJlIHN1cnJvdW5kZWQgYnkgd2F0ZXIgb3IgdGhlIGJvdW5kYXJ5IG9mIHRoZSBncmlkLiBJbiBvdGhlciB3b3JkcywgaXNsYW5kcyBhcmUgY29udGlndW91cyByZWdpb25zIG9mIGxhbmQgdGhhdCBhcmUgc2VwYXJhdGVkIGZyb20gb3RoZXIgbGFuZCBvciBzdXJyb3VuZGVkIGJ5IHdhdGVyLlxyXG4gICAgPC9wPlxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICA8cD5cclxuICAgICAgVG8gc29sdmUgdGhpcyBwcm9ibGVtLCB5b3UgY2FuIGltcGxlbWVudCBhbiBhbGdvcml0aG0gdGhhdCBleHBsb3JlcyB0aGUgZ3JpZCwgaWRlbnRpZmllcyBsYW5kIGNlbGxzICgnMSdzKSwgYW5kIGdyb3VwcyB0aGVtIGludG8gaXNsYW5kcy4gVGhlIGdvYWwgaXMgdG8gY291bnQgdGhlIHRvdGFsIG51bWJlciBvZiBzdWNoIGlzbGFuZHMuXHJcbiAgICA8L3A+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgIDxwIGNsYXNzPVwibm90ZVwiPlxyXG4gICAgICBOb3RlOiBFbnN1cmUgdGhhdCB3aGVuIGlkZW50aWZ5aW5nIGlzbGFuZHMsIHlvdSBjb25zaWRlciBjb25uZWN0aW9ucyBpbiBhbGwgOCBkaXJlY3Rpb25zLCBpbmNsdWRpbmcgaG9yaXpvbnRhbGx5LCB2ZXJ0aWNhbGx5LCBhbmQgZGlhZ29uYWxseS4gQWxzbywgYW4gaXNsYW5kIGNhbiBiZSBsb2NhdGVkIGJvdGggaW4gdGhlIGludGVyaW9yIG9mIHRoZSBncmlkIGFuZCBhbG9uZyBpdHMgYm91bmRhcnkuXHJcbiAgICA8L3A+XHJcbiAgPC9kaXY+XHJcbiAgYCxcdFxyXG4gIGV4YW1wbGVzOltcclxuXHR7XHJcblx0ICBpZDogMSxcclxuXHQgIGlucHV0VGV4dDogXCJncmlkID0ge3swLDF9LHsxLDB9LHsxLDF9LHsxLDB9fVwiLFxyXG5cdCAgb3V0cHV0VGV4dDogXCIgMSBcIixcclxuXHR9LFxyXG5cdHtcclxuXHQgIGlkOiAyLFxyXG5cdCAgaW5wdXRUZXh0OiBcImdyaWQgPSB7ezAsMSwxLDEsMCwwLDB9LHswLDAsMSwxLDAsMSwwfX1cIixcclxuXHQgIG91dHB1dFRleHQ6IFwiIDJcIixcclxuXHR9XHJcbiAgXSxcclxuXHRjb25zdHJhaW50czogYDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG5cdFx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG5cdFx0XHRcdFx0PGNvZGU+RXhwZWN0ZWQgVGltZSBDb21wbGV4aXR5OiBPKG4qbSk8L2NvZGU+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG5cdFx0XHRcdFx0PGNvZGU+RXhwZWN0ZWQgQXV4aWxpYXJ5IFNwYWNlOiBPKG4qbSk8L2NvZGU+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG5cdFx0XHRcdFx0PGNvZGU+MSDiiaQgbixtIOKJpCA1MDA8L2NvZGU+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2Rpdj5gLFxyXG5cdHN0YXJ0ZXJDb2RlOiBib2lsZXJjb2RlLFxyXG5cdGludGlhbGNvZGU6aW50aWFsY29kZSxcclxuXHRlbmRpbmdjb2RlOmVuZGluZ2NvZGUsXHJcblx0c29sdXRpb25jb2RlOnNvbHV0aW9uY29kZSxcclxuXHRpbnVwdXRzOlwiMiA0IDIgMCAxIDEgMCAxIDEgMSAwIDIgNyAwIDEgMSAxIDAgMCAwIDAgMCAxIDEgMCAxIDBcIixcclxuXHRvdXRwdXQ6XCIxIDIgXCIsXHJcblx0b3JkZXI6IDUsXHJcblx0ZGlmZmljdWx0eTogXCJIYXJkXCIsXHJcblx0dGFnOltcclxuXHRcdHtcclxuXHRcdFx0aWQ6IDEsXHJcblx0XHRcdG5hbWU6IFwiREZzXCIsXHJcblx0XHQgIH0sXHJcblx0XHQgIHtcclxuXHRcdFx0aWQ6IDIsXHJcblx0XHRcdG5hbWU6IFwiR3JhcGhcIixcclxuXHRcdCAgfSxcclxuXHRcdCAge1xyXG5cdFx0XHRpZDogMyxcclxuXHRcdFx0bmFtZTogXCJEYXRhIFN0cnVjdHVyZXNcIixcclxuXHRcdCAgfSxcclxuXHJcblx0XSxcclxuXHRjb21wYW5pZXMgOltcclxuXHRcdHtcclxuXHRcdCAgaWQ6IDEsXHJcblx0XHQgIG5hbWU6IFwiVWJlclwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdCAgaWQ6IDIsXHJcblx0XHQgIG5hbWU6IFwiR29vZ2xlXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBpZDogMyxcclxuXHRcdCAgbmFtZTogXCJTd2lnZ3lcIixcclxuXHRcdH0sXHJcblx0ICBdLFxyXG5cclxuXHQgIGF2ZXJhZ2V0aW1lOlwiMjVtXCJcclxuXHQgIFxyXG59OyJdLCJuYW1lcyI6WyJpbnRpYWxjb2RlIiwiaWQiLCJuYW1lIiwiZW5kaW5nY29kZSIsImJvaWxlcmNvZGUiLCJzb2x1dGlvbmNvZGUiLCJub0lzbGFuZCIsInRpdGxlIiwicHJvYmxlbVN0YXRlbWVudCIsImV4YW1wbGVzIiwiaW5wdXRUZXh0Iiwib3V0cHV0VGV4dCIsImNvbnN0cmFpbnRzIiwic3RhcnRlckNvZGUiLCJpbnVwdXRzIiwib3V0cHV0Iiwib3JkZXIiLCJkaWZmaWN1bHR5IiwidGFnIiwiY29tcGFuaWVzIiwiYXZlcmFnZXRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./data/Problems/no-island.ts\n"));

/***/ })

});
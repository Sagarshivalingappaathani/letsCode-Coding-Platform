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

/***/ "(app-pages-browser)/./data/Problems/no-island.ts":
/*!************************************!*\
  !*** ./data/Problems/no-island.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   noIsland: function() { return /* binding */ noIsland; }\n/* harmony export */ });\nconst intialcode = [\n    {\n        id: 1,\n        name: \"#include <stdio.h>\\n\t\t\t  #include <bits/stdc++.h>\\n\t\t\t  using namespace std;\"\n    },\n    {\n        id: 2,\n        name: '\\n        import java.util.*;\\n        import java.lang.*;\\n        import java.io.*;\\n        class Main {\\n            public static void main(String[] args) throws IOException {\\n                BufferedReader br =\\n                    new BufferedReader(new InputStreamReader(System.in));\\n                int T = Integer.parseInt(br.readLine().trim());\\n                while (T-- > 0) {\\n                    String[] s = br.readLine().trim().split(\" \");\\n                    int n = Integer.parseInt(s[0]);\\n                    int m = Integer.parseInt(s[1]);\\n                    char[][] grid = new char[n][m];\\n                    for (int i = 0; i < n; i++) {\\n                        String[] S = br.readLine().trim().split(\" \");\\n                        for (int j = 0; j < m; j++) {\\n                            grid[i][j] = S[j].charAt(0);\\n                        }\\n                    }\\n                    Solution obj = new Solution();\\n                    int ans = obj.numIslands(grid);\\n                    System.out.println(ans);\\n                }\\n            }\\n        }'\n    }\n];\nconst endingcode = [\n    {\n        id: 1,\n        name: \"\\n        int main() {\\n            int tc;\\n            cin >> tc;\\n            while (tc--) {\\n                int n, m;\\n                cin >> n >> m;\\n                vector<vector<char>> grid(n, vector<char>(m, '#'));\\n                for (int i = 0; i < n; i++) {\\n                    for (int j = 0; j < m; j++) {\\n                        cin >> grid[i][j];\\n                    }\\n                }\\n                Solution obj;\\n                int ans = obj.numIslands(grid);\\n                cout << ans << '\\n';\\n            }\\n            return 0;\\n        }\\n        \"\n    },\n    {\n        id: 2,\n        name: \"\"\n    }\n];\nconst boilercode = [\n    {\n        id: 1,\n        name: \"class Solution {\\n    public:\\n      // Function to find the number of islands.\\n      int numIslands(vector<vector<char>>& grid) {\\n          // Code here\\n      }\\n};\"\n    },\n    {\n        id: 2,\n        name: \"class Solution {\\n    // Function to find the number of islands.\\n    public int numIslands(char[][] grid) {\\n        // Code here\\n    }\\n}\"\n    }\n];\nconst solutioncode = [\n    {\n        id: 1,\n        name: \"class Solution {\\n    private:\\n      void dfs(int row,int col,vector<vector<int>>&vis,\\n        vector<vector<char>>&grid){\\n          vis[row][col] = 1;\\n          int n = grid.size();\\n          int m = grid[0].size();\\n          for(int p = -1; p <= 1; p++){\\n              int nrow = row + p;\\n              for(int q = -1; q <= 1; q++){\\n                  int ncol = col + q;\\n                  if(nrow >= 0 && nrow < n && ncol >= 0 && ncol < m && grid[nrow][ncol] == '1' && vis[nrow][ncol] == 0){\\n                      dfs(nrow,ncol,vis,grid);\\n                  }\\n              }\\n          }\\n      }\\n    public:\\n      // Function to find the number of islands.\\n      int numIslands(vector<vector<char>>& grid) {\\n          // Code here\\n          int row = grid.size();\\n          int col = grid[0].size();\\n          int count = 0;\\n          vector<vector<int>>vis(row,vector<int>(col,0));\\n          for(int i = 0; i < row; ++i){\\n              for(int j = 0; j < col; ++j){\\n                  if(!vis[i][j] && grid[i][j] == '1'){\\n                      count++;\\n                      dfs(i,j,vis,grid);\\n                  }\\n              }\\n          }\\n          return count;\\n      }\\n  };\"\n    },\n    {\n        id: 2,\n        name: \"class Solution {\\n    \\n    static class Pair {\\n        int r;\\n        int c;\\n\\n        Pair(int r, int c) {\\n            this.r = r;\\n            this.c = c;\\n        }\\n    }\\n\\n    static void bfs(int i, int j, char grid[][], int vis[][]) {\\n        int n = grid.length;\\n        int m = grid[0].length;\\n\\n        vis[i][j] = 1;\\n        Queue<Pair> q = new LinkedList<>();\\n        q.add(new Pair(i, j));\\n\\n        while (!q.isEmpty()) {\\n            int row = q.peek().r;\\n            int col = q.peek().c;\\n            q.remove();\\n\\n            for (int r = -1; r <= 1; r++) {\\n                for (int c = -1; c <= 1; c++) {\\n                    int newrow = row + r;\\n                    int newcol = col + c;\\n\\n                    if (newrow >= 0 && newrow < n && newcol >= 0 && newcol < m && grid[newrow][newcol] == '1' && vis[newrow][newcol] == 0) {\\n                        q.add(new Pair(newrow, newcol));\\n                        vis[newrow][newcol] = 1;\\n                    }\\n                }\\n            }\\n        }\\n    }\\n    \\n    public int numIslands(char[][] grid) {\\n        int n = grid.length;\\n        int m = grid[0].length;\\n\\n        int vis[][] = new int[n][m];\\n        int ans = 0;\\n\\n        for (int i = 0; i < n; i++) {\\n            for (int j = 0; j < m; j++) {\\n                if (grid[i][j] == '1' && vis[i][j] == 0) {\\n                    ans++;\\n                    bfs(i, j, grid, vis);\\n                }\\n            }\\n        }\\n        return ans;\\n    }\\n}\"\n    }\n];\nconst noIsland = {\n    id: \"no-island\",\n    title: \"5 Find the number of islands\",\n    problemStatement: \"<div class=\\\"mt-1\\\">\\n    <p>\\n      The task is to find the number of islands in a grid, where each cell can be either '0' (representing water) or '1' (representing land). An island is defined as a group of '1's connected both horizontally and vertically, either directly or diagonally. It may be surrounded by water or the boundary of the grid. In other words, islands are contiguous regions of land that are separated from other land or surrounded by water.\\n    </p>\\n  </div>\\n  \\n  <div class=\\\"mt-3\\\">\\n    <p>\\n      To solve this problem, you can implement an algorithm that explores the grid, identifies land cells ('1's), and groups them into islands. The goal is to count the total number of such islands.\\n    </p>\\n  </div>\\n  \\n  <div class=\\\"mt-3\\\">\\n    <p class=\\\"note\\\">\\n      Note: Ensure that when identifying islands, you consider connections in all 8 directions, including horizontally, vertically, and diagonally. Also, an island can be located both in the interior of the grid and along its boundary.\\n    </p>\\n  </div>\\n  \",\n    examples: [\n        {\n            id: 1,\n            inputText: \"grid = {{0,1},{1,0},{1,1},{1,0}}\",\n            outputText: \" Output: 1 \"\n        },\n        {\n            id: 2,\n            inputText: \"grid = {{0,1,1,1,0,0,0},{0,0,1,1,0,1,0}}\",\n            outputText: \"Output: 2\"\n        }\n    ],\n    constraints: '<div className=\"mt-4\">\\n\t\t\t\t<ul>\\n\t\t\t\t<li className=\"mt-2\">\\n\t\t\t\t\t<code>Expected Time Complexity: O(n*m)</code>\\n\t\t\t\t</li>\\n\t\t\t\t<li className=\"mt-2\">\\n\t\t\t\t\t<code>Expected Auxiliary Space: O(n*m)</code>\\n\t\t\t\t</li>\\n\t\t\t\t<li className=\"mt-2\">\\n\t\t\t\t\t<code>1 ≤ n,m ≤ 500</code>\\n\t\t\t\t</li>\\n\t\t\t\t</ul>\\n\t\t\t</div>',\n    starterCode: boilercode,\n    intialcode: intialcode,\n    endingcode: endingcode,\n    solutioncode: solutioncode,\n    inuputs: \"2 4 2 0 1 1 0 1 1 1 0 2 7 0 1 1 1 0 0 0 0 0 1 1 0 1 0\",\n    output: \"1 2 \",\n    order: 5,\n    difficulty: \"Hard\",\n    tag: [\n        {\n            id: 1,\n            name: \"DFs\"\n        },\n        {\n            id: 2,\n            name: \"Graph\"\n        },\n        {\n            id: 3,\n            name: \"Data Structures\"\n        }\n    ],\n    companies: [\n        {\n            id: 1,\n            name: \"Uber\"\n        },\n        {\n            id: 2,\n            name: \"Google\"\n        },\n        {\n            id: 3,\n            name: \"Swiggy\"\n        }\n    ],\n    averagetime: \"25m\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2RhdGEvUHJvYmxlbXMvbm8taXNsYW5kLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNQSxhQUFhO0lBQ2xCO1FBQ0NDLElBQUc7UUFDSEMsTUFBTTtJQUdQO0lBQ0E7UUFDQ0QsSUFBRztRQUNIQyxNQUFNO0lBMEJQO0NBRUE7QUFFRCxNQUFNQyxhQUFXO0lBQ2hCO1FBQ0NGLElBQUc7UUFDSEMsTUFBTTtJQW9CUDtJQUNBO1FBQ0NELElBQUc7UUFDSEMsTUFBTTtJQUNQO0NBQ0E7QUFFRCxNQUFNRSxhQUFXO0lBQ2hCO1FBQ0VILElBQUc7UUFDSEMsTUFDRjtJQU9BO0lBQ0E7UUFDQ0QsSUFBRztRQUNIQyxNQUNEO0lBTUE7Q0FDQTtBQUVELE1BQU1HLGVBQWE7SUFDbEI7UUFDQ0osSUFBRztRQUNIQyxNQUNEO0lBb0NBO0lBQ0E7UUFDQ0QsSUFBRztRQUNIQyxNQUNEO0lBeURBO0NBQ0E7QUFHTSxNQUFNSSxXQUFvQjtJQUNoQ0wsSUFBSTtJQUNKTSxPQUFPO0lBQ1BDLGtCQUFtQjtJQWtCbEJDLFVBQVM7UUFDVjtZQUNFUixJQUFJO1lBQ0pTLFdBQVc7WUFDWEMsWUFBWTtRQUNkO1FBQ0E7WUFDRVYsSUFBSTtZQUNKUyxXQUFXO1lBQ1hDLFlBQVk7UUFDZDtLQUNFO0lBQ0ZDLGFBQWM7SUFhZEMsYUFBYVQ7SUFDYkosWUFBV0E7SUFDWEcsWUFBV0E7SUFDWEUsY0FBYUE7SUFDYlMsU0FBUTtJQUNSQyxRQUFPO0lBQ1BDLE9BQU87SUFDUEMsWUFBWTtJQUNaQyxLQUFJO1FBQ0g7WUFDQ2pCLElBQUk7WUFDSkMsTUFBTTtRQUNMO1FBQ0E7WUFDREQsSUFBSTtZQUNKQyxNQUFNO1FBQ0w7UUFDQTtZQUNERCxJQUFJO1lBQ0pDLE1BQU07UUFDTDtLQUVGO0lBQ0RpQixXQUFXO1FBQ1Y7WUFDRWxCLElBQUk7WUFDSkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsSUFBSTtZQUNKQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxJQUFJO1lBQ0pDLE1BQU07UUFDUjtLQUNFO0lBRURrQixhQUFZO0FBRWYsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL1Byb2JsZW1zL25vLWlzbGFuZC50cz9lNGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2JsZW0gfSBmcm9tIFwiLi4vdHlwZXMvcHJvYmxlbVwiO1xyXG5cclxuY29uc3QgaW50aWFsY29kZSA9IFtcclxuXHR7XHJcblx0XHRpZDoxLFxyXG5cdFx0bmFtZTpgI2luY2x1ZGUgPHN0ZGlvLmg+XHJcblx0XHRcdCAgI2luY2x1ZGUgPGJpdHMvc3RkYysrLmg+XHJcblx0XHRcdCAgdXNpbmcgbmFtZXNwYWNlIHN0ZDtgXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDoyLFxyXG5cdFx0bmFtZTpgXHJcbiAgICAgICAgaW1wb3J0IGphdmEudXRpbC4qO1xyXG4gICAgICAgIGltcG9ydCBqYXZhLmxhbmcuKjtcclxuICAgICAgICBpbXBvcnQgamF2YS5pby4qO1xyXG4gICAgICAgIGNsYXNzIE1haW4ge1xyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgbWFpbihTdHJpbmdbXSBhcmdzKSB0aHJvd3MgSU9FeGNlcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgQnVmZmVyZWRSZWFkZXIgYnIgPVxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBCdWZmZXJlZFJlYWRlcihuZXcgSW5wdXRTdHJlYW1SZWFkZXIoU3lzdGVtLmluKSk7XHJcbiAgICAgICAgICAgICAgICBpbnQgVCA9IEludGVnZXIucGFyc2VJbnQoYnIucmVhZExpbmUoKS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKFQtLSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBTdHJpbmdbXSBzID0gYnIucmVhZExpbmUoKS50cmltKCkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGludCBuID0gSW50ZWdlci5wYXJzZUludChzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnQgbSA9IEludGVnZXIucGFyc2VJbnQoc1sxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcltdW10gZ3JpZCA9IG5ldyBjaGFyW25dW21dO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZ1tdIFMgPSBici5yZWFkTGluZSgpLnRyaW0oKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaW50IGogPSAwOyBqIDwgbTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkW2ldW2pdID0gU1tqXS5jaGFyQXQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgU29sdXRpb24gb2JqID0gbmV3IFNvbHV0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50IGFucyA9IG9iai5udW1Jc2xhbmRzKGdyaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFN5c3RlbS5vdXQucHJpbnRsbihhbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWBcclxuXHR9XHJcblxyXG5dXHJcblxyXG5jb25zdCBlbmRpbmdjb2RlPVtcclxuXHR7XHJcblx0XHRpZDoxLFxyXG5cdFx0bmFtZTpgXHJcbiAgICAgICAgaW50IG1haW4oKSB7XHJcbiAgICAgICAgICAgIGludCB0YztcclxuICAgICAgICAgICAgY2luID4+IHRjO1xyXG4gICAgICAgICAgICB3aGlsZSAodGMtLSkge1xyXG4gICAgICAgICAgICAgICAgaW50IG4sIG07XHJcbiAgICAgICAgICAgICAgICBjaW4gPj4gbiA+PiBtO1xyXG4gICAgICAgICAgICAgICAgdmVjdG9yPHZlY3RvcjxjaGFyPj4gZ3JpZChuLCB2ZWN0b3I8Y2hhcj4obSwgJyMnKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaW50IGogPSAwOyBqIDwgbTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpbiA+PiBncmlkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNvbHV0aW9uIG9iajtcclxuICAgICAgICAgICAgICAgIGludCBhbnMgPSBvYmoubnVtSXNsYW5kcyhncmlkKTtcclxuICAgICAgICAgICAgICAgIGNvdXQgPDwgYW5zIDw8ICdcXG4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDoyLFxyXG5cdFx0bmFtZTpgYFxyXG5cdH1cclxuXVxyXG5cclxuY29uc3QgYm9pbGVyY29kZT1bXHJcbiB7XHJcbiAgIGlkOjEsXHJcbiAgIG5hbWU6XHJcbmBjbGFzcyBTb2x1dGlvbiB7XHJcbiAgICBwdWJsaWM6XHJcbiAgICAgIC8vIEZ1bmN0aW9uIHRvIGZpbmQgdGhlIG51bWJlciBvZiBpc2xhbmRzLlxyXG4gICAgICBpbnQgbnVtSXNsYW5kcyh2ZWN0b3I8dmVjdG9yPGNoYXI+PiYgZ3JpZCkge1xyXG4gICAgICAgICAgLy8gQ29kZSBoZXJlXHJcbiAgICAgIH1cclxufTtgXHQgXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDoyLFxyXG5cdFx0bmFtZTpcclxuYGNsYXNzIFNvbHV0aW9uIHtcclxuICAgIC8vIEZ1bmN0aW9uIHRvIGZpbmQgdGhlIG51bWJlciBvZiBpc2xhbmRzLlxyXG4gICAgcHVibGljIGludCBudW1Jc2xhbmRzKGNoYXJbXVtdIGdyaWQpIHtcclxuICAgICAgICAvLyBDb2RlIGhlcmVcclxuICAgIH1cclxufWBcclxuXHR9ICAgICAgICAgICAgIFxyXG5dXHJcblxyXG5jb25zdCBzb2x1dGlvbmNvZGU9W1xyXG5cdHtcclxuXHRcdGlkOjEsXHJcblx0XHRuYW1lOlxyXG5gY2xhc3MgU29sdXRpb24ge1xyXG4gICAgcHJpdmF0ZTpcclxuICAgICAgdm9pZCBkZnMoaW50IHJvdyxpbnQgY29sLHZlY3Rvcjx2ZWN0b3I8aW50Pj4mdmlzLFxyXG4gICAgICAgIHZlY3Rvcjx2ZWN0b3I8Y2hhcj4+JmdyaWQpe1xyXG4gICAgICAgICAgdmlzW3Jvd11bY29sXSA9IDE7XHJcbiAgICAgICAgICBpbnQgbiA9IGdyaWQuc2l6ZSgpO1xyXG4gICAgICAgICAgaW50IG0gPSBncmlkWzBdLnNpemUoKTtcclxuICAgICAgICAgIGZvcihpbnQgcCA9IC0xOyBwIDw9IDE7IHArKyl7XHJcbiAgICAgICAgICAgICAgaW50IG5yb3cgPSByb3cgKyBwO1xyXG4gICAgICAgICAgICAgIGZvcihpbnQgcSA9IC0xOyBxIDw9IDE7IHErKyl7XHJcbiAgICAgICAgICAgICAgICAgIGludCBuY29sID0gY29sICsgcTtcclxuICAgICAgICAgICAgICAgICAgaWYobnJvdyA+PSAwICYmIG5yb3cgPCBuICYmIG5jb2wgPj0gMCAmJiBuY29sIDwgbSAmJiBncmlkW25yb3ddW25jb2xdID09ICcxJyAmJiB2aXNbbnJvd11bbmNvbF0gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZnMobnJvdyxuY29sLHZpcyxncmlkKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgcHVibGljOlxyXG4gICAgICAvLyBGdW5jdGlvbiB0byBmaW5kIHRoZSBudW1iZXIgb2YgaXNsYW5kcy5cclxuICAgICAgaW50IG51bUlzbGFuZHModmVjdG9yPHZlY3RvcjxjaGFyPj4mIGdyaWQpIHtcclxuICAgICAgICAgIC8vIENvZGUgaGVyZVxyXG4gICAgICAgICAgaW50IHJvdyA9IGdyaWQuc2l6ZSgpO1xyXG4gICAgICAgICAgaW50IGNvbCA9IGdyaWRbMF0uc2l6ZSgpO1xyXG4gICAgICAgICAgaW50IGNvdW50ID0gMDtcclxuICAgICAgICAgIHZlY3Rvcjx2ZWN0b3I8aW50Pj52aXMocm93LHZlY3RvcjxpbnQ+KGNvbCwwKSk7XHJcbiAgICAgICAgICBmb3IoaW50IGkgPSAwOyBpIDwgcm93OyArK2kpe1xyXG4gICAgICAgICAgICAgIGZvcihpbnQgaiA9IDA7IGogPCBjb2w7ICsrail7XHJcbiAgICAgICAgICAgICAgICAgIGlmKCF2aXNbaV1bal0gJiYgZ3JpZFtpXVtqXSA9PSAnMScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgIGRmcyhpLGosdmlzLGdyaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgICB9XHJcbiAgfTtgXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDoyLFxyXG5cdFx0bmFtZTpcclxuYGNsYXNzIFNvbHV0aW9uIHtcclxuICAgIFxyXG4gICAgc3RhdGljIGNsYXNzIFBhaXIge1xyXG4gICAgICAgIGludCByO1xyXG4gICAgICAgIGludCBjO1xyXG5cclxuICAgICAgICBQYWlyKGludCByLCBpbnQgYykge1xyXG4gICAgICAgICAgICB0aGlzLnIgPSByO1xyXG4gICAgICAgICAgICB0aGlzLmMgPSBjO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdm9pZCBiZnMoaW50IGksIGludCBqLCBjaGFyIGdyaWRbXVtdLCBpbnQgdmlzW11bXSkge1xyXG4gICAgICAgIGludCBuID0gZ3JpZC5sZW5ndGg7XHJcbiAgICAgICAgaW50IG0gPSBncmlkWzBdLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdmlzW2ldW2pdID0gMTtcclxuICAgICAgICBRdWV1ZTxQYWlyPiBxID0gbmV3IExpbmtlZExpc3Q8PigpO1xyXG4gICAgICAgIHEuYWRkKG5ldyBQYWlyKGksIGopKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKCFxLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICBpbnQgcm93ID0gcS5wZWVrKCkucjtcclxuICAgICAgICAgICAgaW50IGNvbCA9IHEucGVlaygpLmM7XHJcbiAgICAgICAgICAgIHEucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGludCByID0gLTE7IHIgPD0gMTsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGludCBjID0gLTE7IGMgPD0gMTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50IG5ld3JvdyA9IHJvdyArIHI7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50IG5ld2NvbCA9IGNvbCArIGM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdyb3cgPj0gMCAmJiBuZXdyb3cgPCBuICYmIG5ld2NvbCA+PSAwICYmIG5ld2NvbCA8IG0gJiYgZ3JpZFtuZXdyb3ddW25ld2NvbF0gPT0gJzEnICYmIHZpc1tuZXdyb3ddW25ld2NvbF0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxLmFkZChuZXcgUGFpcihuZXdyb3csIG5ld2NvbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNbbmV3cm93XVtuZXdjb2xdID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBpbnQgbnVtSXNsYW5kcyhjaGFyW11bXSBncmlkKSB7XHJcbiAgICAgICAgaW50IG4gPSBncmlkLmxlbmd0aDtcclxuICAgICAgICBpbnQgbSA9IGdyaWRbMF0ubGVuZ3RoO1xyXG5cclxuICAgICAgICBpbnQgdmlzW11bXSA9IG5ldyBpbnRbbl1bbV07XHJcbiAgICAgICAgaW50IGFucyA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAoaW50IGogPSAwOyBqIDwgbTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZFtpXVtqXSA9PSAnMScgJiYgdmlzW2ldW2pdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhbnMrKztcclxuICAgICAgICAgICAgICAgICAgICBiZnMoaSwgaiwgZ3JpZCwgdmlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYW5zO1xyXG4gICAgfVxyXG59YFxyXG5cdH1cclxuXVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBub0lzbGFuZDogUHJvYmxlbSA9IHtcclxuXHRpZDogXCJuby1pc2xhbmRcIixcclxuXHR0aXRsZTogXCI1IEZpbmQgdGhlIG51bWJlciBvZiBpc2xhbmRzXCIsXHJcblx0cHJvYmxlbVN0YXRlbWVudDogYDxkaXYgY2xhc3M9XCJtdC0xXCI+XHJcbiAgICA8cD5cclxuICAgICAgVGhlIHRhc2sgaXMgdG8gZmluZCB0aGUgbnVtYmVyIG9mIGlzbGFuZHMgaW4gYSBncmlkLCB3aGVyZSBlYWNoIGNlbGwgY2FuIGJlIGVpdGhlciAnMCcgKHJlcHJlc2VudGluZyB3YXRlcikgb3IgJzEnIChyZXByZXNlbnRpbmcgbGFuZCkuIEFuIGlzbGFuZCBpcyBkZWZpbmVkIGFzIGEgZ3JvdXAgb2YgJzEncyBjb25uZWN0ZWQgYm90aCBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHksIGVpdGhlciBkaXJlY3RseSBvciBkaWFnb25hbGx5LiBJdCBtYXkgYmUgc3Vycm91bmRlZCBieSB3YXRlciBvciB0aGUgYm91bmRhcnkgb2YgdGhlIGdyaWQuIEluIG90aGVyIHdvcmRzLCBpc2xhbmRzIGFyZSBjb250aWd1b3VzIHJlZ2lvbnMgb2YgbGFuZCB0aGF0IGFyZSBzZXBhcmF0ZWQgZnJvbSBvdGhlciBsYW5kIG9yIHN1cnJvdW5kZWQgYnkgd2F0ZXIuXHJcbiAgICA8L3A+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgIDxwPlxyXG4gICAgICBUbyBzb2x2ZSB0aGlzIHByb2JsZW0sIHlvdSBjYW4gaW1wbGVtZW50IGFuIGFsZ29yaXRobSB0aGF0IGV4cGxvcmVzIHRoZSBncmlkLCBpZGVudGlmaWVzIGxhbmQgY2VsbHMgKCcxJ3MpLCBhbmQgZ3JvdXBzIHRoZW0gaW50byBpc2xhbmRzLiBUaGUgZ29hbCBpcyB0byBjb3VudCB0aGUgdG90YWwgbnVtYmVyIG9mIHN1Y2ggaXNsYW5kcy5cclxuICAgIDwvcD5cclxuICA8L2Rpdj5cclxuICBcclxuICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgPHAgY2xhc3M9XCJub3RlXCI+XHJcbiAgICAgIE5vdGU6IEVuc3VyZSB0aGF0IHdoZW4gaWRlbnRpZnlpbmcgaXNsYW5kcywgeW91IGNvbnNpZGVyIGNvbm5lY3Rpb25zIGluIGFsbCA4IGRpcmVjdGlvbnMsIGluY2x1ZGluZyBob3Jpem9udGFsbHksIHZlcnRpY2FsbHksIGFuZCBkaWFnb25hbGx5LiBBbHNvLCBhbiBpc2xhbmQgY2FuIGJlIGxvY2F0ZWQgYm90aCBpbiB0aGUgaW50ZXJpb3Igb2YgdGhlIGdyaWQgYW5kIGFsb25nIGl0cyBib3VuZGFyeS5cclxuICAgIDwvcD5cclxuICA8L2Rpdj5cclxuICBgLFx0XHJcbiAgZXhhbXBsZXM6W1xyXG5cdHtcclxuXHQgIGlkOiAxLFxyXG5cdCAgaW5wdXRUZXh0OiBcImdyaWQgPSB7ezAsMX0sezEsMH0sezEsMX0sezEsMH19XCIsXHJcblx0ICBvdXRwdXRUZXh0OiBcIiBPdXRwdXQ6IDEgXCIsXHJcblx0fSxcclxuXHR7XHJcblx0ICBpZDogMixcclxuXHQgIGlucHV0VGV4dDogXCJncmlkID0ge3swLDEsMSwxLDAsMCwwfSx7MCwwLDEsMSwwLDEsMH19XCIsXHJcblx0ICBvdXRwdXRUZXh0OiBcIk91dHB1dDogMlwiLFxyXG5cdH1cclxuICBdLFxyXG5cdGNvbnN0cmFpbnRzOiBgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcblx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtdC0yXCI+XHJcblx0XHRcdFx0XHQ8Y29kZT5FeHBlY3RlZCBUaW1lIENvbXBsZXhpdHk6IE8obiptKTwvY29kZT5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtdC0yXCI+XHJcblx0XHRcdFx0XHQ8Y29kZT5FeHBlY3RlZCBBdXhpbGlhcnkgU3BhY2U6IE8obiptKTwvY29kZT5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtdC0yXCI+XHJcblx0XHRcdFx0XHQ8Y29kZT4xIOKJpCBuLG0g4omkIDUwMDwvY29kZT5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PmAsXHJcblx0c3RhcnRlckNvZGU6IGJvaWxlcmNvZGUsXHJcblx0aW50aWFsY29kZTppbnRpYWxjb2RlLFxyXG5cdGVuZGluZ2NvZGU6ZW5kaW5nY29kZSxcclxuXHRzb2x1dGlvbmNvZGU6c29sdXRpb25jb2RlLFxyXG5cdGludXB1dHM6XCIyIDQgMiAwIDEgMSAwIDEgMSAxIDAgMiA3IDAgMSAxIDEgMCAwIDAgMCAwIDEgMSAwIDEgMFwiLFxyXG5cdG91dHB1dDpcIjEgMiBcIixcclxuXHRvcmRlcjogNSxcclxuXHRkaWZmaWN1bHR5OiBcIkhhcmRcIixcclxuXHR0YWc6W1xyXG5cdFx0e1xyXG5cdFx0XHRpZDogMSxcclxuXHRcdFx0bmFtZTogXCJERnNcIixcclxuXHRcdCAgfSxcclxuXHRcdCAge1xyXG5cdFx0XHRpZDogMixcclxuXHRcdFx0bmFtZTogXCJHcmFwaFwiLFxyXG5cdFx0ICB9LFxyXG5cdFx0ICB7XHJcblx0XHRcdGlkOiAzLFxyXG5cdFx0XHRuYW1lOiBcIkRhdGEgU3RydWN0dXJlc1wiLFxyXG5cdFx0ICB9LFxyXG5cclxuXHRdLFxyXG5cdGNvbXBhbmllcyA6W1xyXG5cdFx0e1xyXG5cdFx0ICBpZDogMSxcclxuXHRcdCAgbmFtZTogXCJVYmVyXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0ICBpZDogMixcclxuXHRcdCAgbmFtZTogXCJHb29nbGVcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHQgIGlkOiAzLFxyXG5cdFx0ICBuYW1lOiBcIlN3aWdneVwiLFxyXG5cdFx0fSxcclxuXHQgIF0sXHJcblxyXG5cdCAgYXZlcmFnZXRpbWU6XCIyNW1cIlxyXG5cdCAgXHJcbn07Il0sIm5hbWVzIjpbImludGlhbGNvZGUiLCJpZCIsIm5hbWUiLCJlbmRpbmdjb2RlIiwiYm9pbGVyY29kZSIsInNvbHV0aW9uY29kZSIsIm5vSXNsYW5kIiwidGl0bGUiLCJwcm9ibGVtU3RhdGVtZW50IiwiZXhhbXBsZXMiLCJpbnB1dFRleHQiLCJvdXRwdXRUZXh0IiwiY29uc3RyYWludHMiLCJzdGFydGVyQ29kZSIsImludXB1dHMiLCJvdXRwdXQiLCJvcmRlciIsImRpZmZpY3VsdHkiLCJ0YWciLCJjb21wYW5pZXMiLCJhdmVyYWdldGltZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./data/Problems/no-island.ts\n"));

/***/ })

});
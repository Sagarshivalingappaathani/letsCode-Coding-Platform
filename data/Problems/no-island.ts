import { Problem } from "../types/problem";

const intialcode = [
	{
		id:1,
		name:`#include <stdio.h>
			  #include <bits/stdc++.h>
			  using namespace std;`
	},
	{
		id:2,
		name:`import java.util.Scanner;

        public class Main {
            public static void main(String[] args) {
                Scanner scanner = new Scanner(System.in);
                int tc = scanner.nextInt();
                while (tc-- > 0) {
                    int n = scanner.nextInt();
                    int m = scanner.nextInt();
                    int[][] grid = new int[n][m];
                    for (int i = 0; i < n; i++) {
                        for (int j = 0; j < m; j++) {
                            grid[i][j] = scanner.nextInt();
                        }
                    }
                    Solution obj = new Solution();
                    int ans = obj.numIslands(grid);
                    System.out.print(ans+" ");
                }
            }
        }
        `
	}

]

const endingcode=[
	{
		id:1,
		name:`
        int main() {
            int tc;
            cin >> tc;
            while (tc--) {
                int n, m;
                cin >> n >> m;
                vector<vector<char>> grid(n, vector<char>(m, '#'));
                for (int i = 0; i < n; i++) {
                    for (int j = 0; j < m; j++) {
                        cin >> grid[i][j];
                    }
                }
                Solution obj;
                int ans = obj.numIslands(grid);
                cout << ans << " ";
            }
            return 0;
        }
        `
	},
	{
		id:2,
		name:``
	}
]

const boilercode=[
 {
   id:1,
   name:
`class Solution {
    public:
      // Function to find the number of islands.
      int numIslands(vector<vector<char>>& grid) {
          // Code here
      }
};`	 
	},
	{
		id:2,
		name:
`class Solution {
    // Function to find the number of islands.
    public int numIslands(int[][] grid) {
        // Code here
    }
}`
	}             
]

const solutioncode=[
	{
		id:1,
		name:
`class Solution {
    private:
      void dfs(int row,int col,vector<vector<int>>&vis,
        vector<vector<char>>&grid){
          vis[row][col] = 1;
          int n = grid.size();
          int m = grid[0].size();
          for(int p = -1; p <= 1; p++){
              int nrow = row + p;
              for(int q = -1; q <= 1; q++){
                  int ncol = col + q;
                  if(nrow >= 0 && nrow < n && ncol >= 0
                     && ncol < m &&grid[nrow][ncol] == '1'
                      && vis[nrow][ncol] == 0){
                      dfs(nrow,ncol,vis,grid);
                  }
              }
          }
      }
    public:
      // Function to find the number of islands.
      int numIslands(vector<vector<char>>& grid) {
          // Code here
          int row = grid.size();
          int col = grid[0].size();
          int count = 0;
          vector<vector<int>>vis(row,vector<int>(col,0));
          for(int i = 0; i < row; ++i){
              for(int j = 0; j < col; ++j){
                  if(!vis[i][j] && grid[i][j] == '1'){
                      count++;
                      dfs(i,j,vis,grid);
                  }
              }
          }
          return count;
      }
  };`
	},
	{
		id:2,
		name:
`class Solution {
    private void dfs(int row, int col, int[][] vis, int[][] grid) {
        vis[row][col] = 1;
        int n = grid.length;
        int m = grid[0].length;
        int[] dr = {-1, -1, -1, 0, 0, 1, 1, 1};
        int[] dc = {-1, 0, 1, -1, 1, -1, 0, 1};
        for (int i = 0; i < 8; i++) {
            int nrow = row + dr[i];
            int ncol = col + dc[i];
            if (nrow >= 0 && nrow < n && ncol >= 0 && ncol 
                 < m && grid[nrow][ncol] == 1 && 
                vis[nrow][ncol] == 0) {
                dfs(nrow, ncol, vis, grid);
            }
        }
    }

    public int numIslands(int[][] grid) {
        int row = grid.length;
        int col = grid[0].length;
        int count = 0;
        int[][] vis = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (grid[i][j] == 1 && vis[i][j] == 0) {
                    count++;
                    dfs(i, j, vis, grid);
                }
            }
        }
        return count;
    }
}
`
	}
]


export const noIsland: Problem = {
	id: "no-island",
	title: "5 Find the number of islands",
	problemStatement: `<div class="mt-1">
    <p>
      The task is to find the number of islands in a grid, where each cell can be either '0' (representing water) or '1' (representing land). An island is defined as a group of '1's connected both horizontally and vertically, either directly or diagonally. It may be surrounded by water or the boundary of the grid. In other words, islands are contiguous regions of land that are separated from other land or surrounded by water.
    </p>
  </div>
  
  <div class="mt-3">
    <p>
      To solve this problem, you can implement an algorithm that explores the grid, identifies land cells ('1's), and groups them into islands. The goal is to count the total number of such islands.
    </p>
  </div>
  
  <div class="mt-3">
    <p class="note">
      Note: Ensure that when identifying islands, you consider connections in all 8 directions, including horizontally, vertically, and diagonally. Also, an island can be located both in the interior of the grid and along its boundary.
    </p>
  </div>
  `,	
  examples:[
	{
	  id: 1,
	  inputText: "grid = {{0,1},{1,0},{1,1},{1,0}}",
	  outputText: " 1 ",
	},
	{
	  id: 2,
	  inputText: "grid = {{0,1,1,1,0,0,0},{0,0,1,1,0,1,0}}",
	  outputText: " 2",
	}
  ],
	constraints: `<div className="mt-4">
				<ul>
				<li className="mt-2">
					<code>Expected Time Complexity: O(n*m)</code>
				</li>
				<li className="mt-2">
					<code>Expected Auxiliary Space: O(n*m)</code>
				</li>
				<li className="mt-2">
					<code>1 ≤ n,m ≤ 500</code>
				</li>
				</ul>
			</div>`,
	starterCode: boilercode,
	intialcode:intialcode,
	endingcode:endingcode,
	solutioncode:solutioncode,
	inuputs:"2 4 2 0 1 1 0 1 1 1 0 2 7 0 1 1 1 0 0 0 0 0 1 1 0 1 0",
	output:"1 2 ",
	order: 5,
	difficulty: "Hard",
	tag:[
		{
			id: 1,
			name: "DFs",
		  },
		  {
			id: 2,
			name: "Graph",
		  },
		  {
			id: 3,
			name: "Data Structures",
		  },

	],
	companies :[
		{
		  id: 1,
		  name: "Uber",
		},
		{
		  id: 2,
		  name: "Google",
		},
		{
		  id: 3,
		  name: "Swiggy",
		},
	  ],

	  averagetime:"25m"
	  
};
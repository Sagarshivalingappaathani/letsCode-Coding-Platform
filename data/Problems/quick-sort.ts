import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeTwoSum = `//{ Driver Code Starts
#include <stdio.h>
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution
{
    public:
	
};

/* Function to print an array */
void printArray(int arr[], int size)
{
    int i;
    for (i=0; i < size; i++)
        printf("%d ", arr[i]);  
}

//{ Driver Code Starts.
int main()
{
    int arr[1000],n,T,i;
    scanf("%d",&T);
    while(T--){
    scanf("%d",&n);
    for(i=0;i<n;i++)
      scanf("%d",&arr[i]);
      Solution ob;
    ob.quickSort(arr, 0, n-1);
    printArray(arr, n);
    }
    return 0;
}
// } Driver Code Ends`;



export const quickSort: Problem = {
	id: "quick-sort",
	title: "1 Quick sort",
	problemStatement: `<div class="mt-1">
	<p>
	  Quick Sort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot.
	</p>
	<p>
	  Given an array <code class="font-bold">arr[]</code>, its starting position is <code class="font-bold">low</code> (the index of the array) and its ending position is <code class="font-bold">high</code> (the index of the array). The <code class="font-bold">low</code> and <code class="font-bold">high</code> are inclusive.
	</p>
  </div>
  
  <div class="mt-3">
	<p>
	  Implement the <code class="font-bold">partition()</code> and <code class="font-bold">quickSort()</code> functions to sort the array.
	</p>
  </div>
  `,	
  examples:[
	{
	  id: 1,
	  inputText: "arr = [4, 2, 9, 6, 1, 5]",
	  outputText: "[1, 2, 4, 5, 6, 9]",
	},
	{
	  id: 2,
	  inputText: "arr = [5, 4, 3, 2, 1]",
	  outputText: "[1, 2, 3, 4, 5]",
	},
	{
	  id: 3,
	  inputText: "arr = [1, 2, 3, 4, 5]",
	  outputText: "[1, 2, 3, 4, 5]",
	},
	{
	  id: 4,
	  inputText: "arr = [9, 5, 7, 3, 2, 8]",
	  outputText: "[2, 3, 5, 7, 8, 9]",
	},
  ],
	constraints: `<div className="mt-4">
				<ul>
				<li className="mt-2">
					<code>Expected Time Complexity: O(N*logN)</code>
				</li>
				<li className="mt-2">
					<code>Expected Auxiliary Space: O(logN)</code>
				</li>
				<li className="mt-2">
					<code>1 ≤ N ≤ 103</code>
				</li>
				<li className="mt-2">
					<code>1 ≤ arr[i] ≤ 104</code>
				</li>
				</ul>
			</div>`,
	starterCode: starterCodeTwoSum,
	inuputs:"2 4 5 8 1 3 5 7 8 1 0 3",
	output:"1 3 5 8 0 1 3 7 8 ",
	order: 1,
	starterFunctionName: "",
	difficulty: "Medium",
	tag:[
		{
			id: 1,
			name: "divide and conqure",
		  },
		  {
			id: 2,
			name: "Recursion",
		  },
		  {
			id: 3,
			name: "Algoritham",
		  },

	],
	companies :[
		{
		  id: 1,
		  name: "Amazon",
		},
		{
		  id: 2,
		  name: "Google",
		},
		{
		  id: 3,
		  name: "Adobe",
		},
	  ],

	  averagetime:"15m"
	  
};
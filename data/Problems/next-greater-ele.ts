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
		name:`import java.util.*;

    public class Main {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int t = sc.nextInt();
            while (t-- > 0) {
                int n = sc.nextInt();
                long[] arr = new long[n];
                for (int i = 0; i < n; i++) {
                    arr[i] = sc.nextLong();
                }
                Solution obj = new Solution();
                long[] res = obj.nextLargerElement(arr, n);
                for (long i : res) {
                    System.out.print(i + " ");
                }
            }
            sc.close();
        }
    }`
	}

]

const endingcode=[
	{
		id:1,
		name:` 
        int main()
        {
            int t;
            cin>>t;
            while(t--)
            {
                
                int n;
                cin>>n;
                vector<long long> arr(n);
                for(int i=0;i<n;i++)
                    cin>>arr[i];
                
                Solution obj;
                vector <long long> res = obj.nextLargerElement(arr, n);
                for (long long i : res) cout << i << " ";
            }
            return 0;
        }`
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
 `class Solution
  {
    public:
    vector<long long> nextLargerElement(vector<long long> arr, int n){
        // Your code here
    }
  };`	 
	},
	{
		id:2,
		name:
  `class Solution {
      public long[] nextLargerElement(long[] arr, int n) {
          //code here
      }
  }
  `
	}             
]


export const nextGretestEle: Problem = {
	
    id: "next-greatest-ele",
    title: "Next Greater Element",
    problemStatement: `<div class="mt-1">
        <p>
            Given an array <code class="font-bold">arr[]</code> of size N having elements, the task is to find the next greater element for each element of the array in order of their appearance in the array.
        </p>
        <p>
            Next greater element of an element in the array is the nearest element on the right which is greater than the current element.
            If there does not exist next greater of the current element, then the next greater element for the current element is -1. For example, the next greater of the last element is always -1.
        </p>
    </div>`
    ,	
  examples:[
	{
	  id: 1,
	  inputText: "arr = [1,3,2,4]",
	  outputText: "[3,4,4,-1]",
	},
	{
	  id: 2,
	  inputText: "arr = [6,8,0,1,3]",
	  outputText: "[8,-1,1,3,-1]",
	},
  ],
	constraints: `<div className="mt-4">
            <ul>
                <li className="mt-2">
                    <code>Expected Time Complexity: O(N)</code>
                </li>
                <li className="mt-2">
                    <code>Expected Auxiliary Space: O(N)</code>
                </li>
                <li className="mt-2">
                    <code>1 ≤ N ≤ 10^6</code>
                </li>
                <li className="mt-2">
                    <code>0 ≤ A[i] ≤ 10^18</code>
                </li>
            </ul>
        </div>`,

	starterCode: boilercode,
	intialcode:intialcode,
	endingcode:endingcode,
	inuputs:"2 4 1 3 2 4 5 6 8 0 1 3",
	output:"3 4 4 -1 8 -1 1 3 -1 ",
	order: 1,
	starterFunctionName: "",
	difficulty: "Medium",
	tag:[
		{
			id: 1,
			name: "Data Structure",
		  },
		  {
			id: 2,
			name: "Array",
		  },
		  {
			id: 3,
			name: "stack",
		  },

	],
	companies :[
		{
		  id: 1,
		  name: "Flipcart",
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

	  averagetime:"20m"
	  
};
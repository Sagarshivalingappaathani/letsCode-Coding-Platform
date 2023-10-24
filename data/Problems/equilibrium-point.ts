import { Problem } from "../types/problem";

const intialcode = [
	{
		id:1,
		name:`#include <stdio.h>
			  #include <bits/stdc++.h>
			  using namespace std;
        
        `
	},
	{
		id:2,
		name:`
    import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T > 0) {
            int n = sc.nextInt();
            int arr[] = new int[n]; // Change the array type to int[]
            for (int i = 0; i < n; i++)
                arr[i] = sc.nextInt();

            Solution ob = new Solution();

            // Calling findEquilibrium() function
            System.out.print(ob.findEquilibrium(arr, n) + " ");

            T--;
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
    
        long long t;
        
        //taking testcases
        cin >> t;
    
        while (t--) {
            long long n;
            
            //taking input n
            cin >> n;
            long long a[n];
    
            //adding elements to the array
            for (long long i = 0; i < n; i++) {
                cin >> a[i];
            }
            
            Solution ob;
            cout << ob.equilibriumPoint(a, n)<<" ";
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
`class Solution{
  public:
  // Function to find equilibrium point in the array.
  int equilibriumPoint(long long a[], int n) {
      // Your code here
  }

};`	 
	},
	{
		id:2,
		name:
`class Solution { 
    // Function to find equilibrium point in the array.
    public static int findEquilibrium(int arr[], int n) {
        // Your code here
    }
}`
	}             
]

const solutioncode=[
  {
    id:1,
    name:
`class Solution{
  public:
  // Function to find equilibrium point in the array.
  // a: input array
  // n: size of array
  int equilibriumPoint(long long a[], int n) {
  
      if(n==1)
         return 1;
      
      int a1[n];
      int a2[n];
      int sum=0;
      for(int i=0;i<n;i++)
      {
          sum=sum+a[i];
          a1[i]=sum;
          
      }
      
      sum=0;
      
      for(int i=n-1;i>=0;i--)
      {
          sum=sum+a[i];
          a2[i]=sum;
          
      }
      
      int k=-1;
      for(int i=1;i<n-1;i++)
      {
          if(a1[i]==a2[i])
             k=i;
      }
      
      if(k>0)
       return k+1;
      else
       return -1;
      
      
  }

};`
  },
  {
    id:2,
    name:
`class Solution {
  public static int findEquilibrium(int arr[], int n) {
      long totalSum = 0;
      long leftSum = 0;

      for (int i = 0; i < n; i++) {
          totalSum += arr[i];
      }

      for (int i = 0; i < n; i++) {
          totalSum -= arr[i];

          if (leftSum == totalSum) {
              return i + 1; // Equilibrium point found at index i
          }

          leftSum += arr[i];
      }

      return -1; // No equilibrium point found
  }
}
`
  }
]


export const equilibriumPoint: Problem = {
	
    id: "equilibrium-point",
    title: "Equilibrium Point",
    problemStatement: `<div class="mt-1">
    <p>
      Given an array <code class="font-bold">A</code> of <code class="font-bold">n</code> positive numbers. The task is to find the first equilibrium point in the array. An equilibrium point in an array is an index (or position) such that the sum of all elements before that index is the same as the sum of elements after it.
    </p>
    <p>
      <strong>Note:</strong> Return equilibrium point in 1-based indexing. Return -1 if no such point exists.
    </p>
  </div>
  `
    ,	
  examples:[
	{
	  id: 1,
	  inputText: "arr = [1,3,5,2,2]",
	  outputText: "3",
	},
	{
	  id: 2,
	  inputText: "arr = [1]",
	  outputText: "[1]",
	},
  ],
	constraints: `<div className="mt-4">
            <ul>
                <li className="mt-2">
                    <code>Expected Time Complexity: O(N)</code>
                </li>
                <li className="mt-2">
                    <code>Expected Auxiliary Space: O(1)</code>
                </li>
                <li className="mt-2">
                    <code>1 ≤ N ≤ 10^5</code>
                </li>
                <li className="mt-2">
                    <code>0 ≤ A[i] ≤ 10^9</code>
                </li>
            </ul>
        </div>`,

	starterCode: boilercode,
	intialcode:intialcode,
	endingcode:endingcode,
  solutioncode:solutioncode,
	inuputs:"2 5 1 3 5 2 2 1 1",
	output:"3 1 ",
	order: 3,
	difficulty: "Easy",
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
			name: "Pefix-sum",
		  },

	],
	companies :[
		{
		  id: 1,
		  name: "paytm",
		},
		{
		  id: 2,
		  name: "D-E-shaw",
		},
		{
		  id: 3,
		  name: "opera",
		},
	  ],

	  averagetime:"20m"
	  
};
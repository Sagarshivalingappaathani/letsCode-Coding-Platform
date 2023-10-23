import { Problem } from "../types/problem";

const intialcode = [
	{
		id:1,
		name:`#include <stdio.h>
			  #include <bits/stdc++.h>
			  using namespace std;
              #define ll long long
        
        `
	},
	{
		id:2,
		name:
        `
        import java.io.*;
        import java.util.*;
        import java.util.stream.*;
        
        class Main {
            public static void main(String[] args) throws Exception {
                Scanner sc = new Scanner(System.in);
                int t = sc.nextInt();
                while (t-- > 0) {
                    int n = sc.nextInt();
                    ArrayList<Long> ans = new Solution().nthRowOfPascalTriangle(n);
                    printAns(ans);
                }
            }
            public static void printAns(ArrayList<Long> ans) {
                for (Long x : ans) {
                    System.out.print(x + " ");
                }
            }
        }`
	}

]

const endingcode=[
	{
		id:1,
		name:`
void printAns(vector<ll> &ans) {
    for (auto &x : ans) {
        cout << x << " ";
    }
}

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        Solution ob;
        auto ans = ob.nthRowOfPascalTriangle(n);
        printAns(ans);
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
`// #define ll long long
class Solution{
public:
    vector<ll> nthRowOfPascalTriangle(int n) {
        // code here
    }
};`	 
	},
	{
		id:2,
		name:
`
class Solution {
    ArrayList<Long> nthRowOfPascalTriangle(int n) {
        // code here
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
        vector<ll> nthRowOfPascalTriangle(int n) {
            vector<ll> prevRow;
            
            for (int i = 0; i < n; i++) {
                vector<ll> currentRow(i + 1, 1);
                for (int j = 1; j < i; j++) {
                    currentRow[j] = (prevRow[j - 1] +
                         prevRow[j])%1000000007 ;
                }
                prevRow = currentRow;
            }
    
            return prevRow ;
        }
};
`
  },
  {
    id:2,
    name:
`class Solution {
    ArrayList<Long> nthRowOfPascalTriangle(int n) {
        ArrayList<Long> list = new ArrayList<>();
        
        if (n < 0) {
            return list; 
        }

        long[][] arr = new long[n][];
        
        for (int k = 0; k < n; k++) {
            arr[k] = new long[k + 1]; 

            for (int j = 0; j <= k; j++) {
                if (j == 0 || j == k) {
                    arr[k][j] = 1L;
                } else {
                    arr[k][j] = (arr[k - 1][j - 1] +
                         arr[k - 1][j])%(1000000007L);
                }
            }
        }
        for (int i = 0; i < n; i++) {
            list.add(arr[n - 1][i]);
        }

        return list;
    }
}

The 1000000007L is the key point here.`
  }
]


export const pascalsTriangle: Problem = {
	
    id: "pascals-triangle",
    title: "Pascal's Triangle",
    problemStatement: `<div class="mt-1">
    <p>
      Given a positive integer <code class="font-bold">N</code>, return the <code class="font-bold">Nth</code> row of Pascal's triangle.
      Pascal's triangle is a triangular array of the binomial coefficients formed by summing up the elements of the previous row.
    </p>
    <div className="ml-10 my-6">
    <Image
            src="/assets/images/pasacal.gif"
            alt="avatar"
            width={400}
            height={400}
    />
</div>
`    ,	
  examples:[
	{
	  id: 1,
	  inputText: "1",
	  outputText: "1",
	},
	{
	  id: 2,
	  inputText: "2",
	  outputText: "1 1",
	},
    {
        id: 3,
        inputText: "3",
        outputText: "1 2 1",
      },
      {
        id: 4,
        inputText: "4",
        outputText: "1 3 3 1",
      },
      {
        id: 5,
        inputText: "5",
        outputText: "1 4 6 4 1",
      },
  ],
	constraints: `<div className="mt-4">
            <ul>
                <li className="mt-2">
                    <code>Expected Time Complexity: O(N^2)</code>
                </li>
                <li className="mt-2">
                    <code>Expected Auxiliary Space: O(N^2)</code>
                </li>
                <li className="mt-2">
                    <code>1 ≤ N ≤ 1000</code>
                </li>
            </ul>
        </div>`,

	starterCode: boilercode,
	intialcode:intialcode,
	endingcode:endingcode,
    solutioncode:solutioncode,
	inuputs:"5 1 2 3 4 5",
	output:"1 1 1 1 2 1 1 3 3 1 1 4 6 4 1 ",
	order: 6,
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
			name: "Recursion",
		  },

	],
	companies :[
		{
		  id: 1,
		  name: "Amazon",
		},
		{
		  id: 2,
		  name: "Microsoft",
		},
		{
		  id: 3,
		  name: "Adobe",
		},
	  ],

	  averagetime:"20m"  
};
import { Problem } from "../types/problem";

const intialcode = [
	{
		id:1,
		name:`
        #include<bits/stdc++.h>
        using namespace std;
        `
	},
	{
		id:2,
		name:
        `import java.util.*;
        public class Main {
            public static void main(String[] args) {
                Scanner scanner = new Scanner(System.in);
                int t = scanner.nextInt();
                while (t-- > 0) {
                    String S = scanner.next();
                    Solution solution = new Solution();
                    List<String> ans = solution.findPermutation(S);
                    Collections.sort(ans);
                    for (String i : ans) {
                        System.out.print(i + " ");
                    }
                }
                scanner.close();
            }
        }
        `
	}

]

const endingcode=[
	{
		id:1,
		name:`
        int main(){
            int t;
            cin >> t;
            while(t--)
            {
                string S;
                cin >> S;
                Solution ob;
                vector<string> ans = ob.find_permutation(S);
                sort(ans.begin(),ans.end());
                for(auto i: ans)
                {
                    cout<<i<<" ";
                }
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
`class Solution
{
	public:
		vector<string>find_permutation(string S)
		{
		    // Code here there
		}
};`	 
	},
	{
		id:2,
		name:
`class Solution {
    public List<String> findPermutation(String S) {
        // Code here
    }
}
`
	}             
]

const solutioncode=[
  {
    id:1,
    name:
`class Solution
{
    public:
        void findPermu(int index, string &s, set<string> &ans) {
            if(index == s.size()) {
                ans.insert(s);
                return;
            }
            for(int i=index; i<s.size(); i++) {
                swap(s[i], s[index]);
                findPermu(index+1,s,ans);
                swap(s[i],s[index]);
            }
        }
        vector<string>find_permutation(string S)
        {
            // Code here there
            set<string> ans;
            sort(S.begin(),S.end());
            findPermu(0,S,ans);
            vector<string> res(ans.begin(),ans.end());
            return res;
        }
};
`
  },
  {
    id:2,
    name:
`class Solution {
    public List<String> findPermutation(String S) {
        List<String> result = new ArrayList<>();
        findPermutations(S.toCharArray(), 0, result);
        Collections.sort(result);
        return result;
    }

    private void findPermutations(char[] arr, int index,
         List<String> result) {
        if (index == arr.length) {
            result.add(new String(arr));
            return;
        }

        for (int i = index; i < arr.length; i++) {
            swap(arr, index, i);
            findPermutations(arr, index + 1, result);
            swap(arr, index, i);
        }
    }

    private void swap(char[] arr, int i, int j) {
        char temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}`
  }
]


export const permutStr: Problem = {
	
    id: "permut-str",
    title: "Permutations of a given string",
    problemStatement: `<div class="mt-1">
    <p>
    Given a string S. The task is to print all unique permutations of the given string in lexicographically sorted order.
    </p>
</div>
`    ,	
  examples:[
    {
        id: 1,
        inputText: "A",
        outputText: "A",
      },
      {
        id: 2,
        inputText: "AB",
        outputText: "AB BA",
      },
        {
        id: 3,
        inputText: "ABC",
        outputText: "ABC ACB BAC BCA CAB CBA",
        },
  ],
	constraints: `<div className="mt-4">
            <ul>
                <li className="mt-2">
                    <code>Expected Time Complexity: O(n!*n)</code>
                </li>
                <li className="mt-2">
                    <code>Expected Auxiliary Space: O(n!*n)</code>
                </li>
                <li className="mt-2">
                    <code>1 <= length of string <= 5</code>
                </li>
            </ul>
        </div>`,

	starterCode: boilercode,
	intialcode:intialcode,
	endingcode:endingcode,
    solutioncode:solutioncode,
	inuputs:"4 A AB ABC ABCD",
	output:"A AB BA ABC ACB BAC BCA CAB CBA ABCD ABDC ACBD ACDB ADBC ADCB BACD BADC BCAD BCDA BDAC BDCA CABD CADB CBAD CBDA CDAB CDBA DABC DACB DBAC DBCA DCAB DCBA ",
	order: 8,
	difficulty: "Hard",
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
			name: "Back-Tracing",
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

	  averagetime:"30m"  
};
import { Problem } from "../types/problem";

const intialcode = [
	{
		id:1,
		name:`
        #include <bits/stdc++.h>
        using namespace std;`
	},
	{
		id:2,
		name:
        `
        import java.util.Scanner;
        import java.util.Stack;


        public class Main{
            public static void main(String[] args) {
                Scanner scanner = new Scanner(System.in);
                int t = scanner.nextInt();
                while (t > 0) {
                    t--;
                    String S = scanner.next();
                    int result = new Solution().evaluatePostfix(S);
                    System.out.print(result +" ");
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
        int main()
        {
            int t;
            cin>>t;
            while(t--)
            {
                string S;
                cin>>S;
                Solution obj;
            
            cout<<obj.evaluatePostfix(S)<<" ";
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
    //Function to evaluate a postfix expression.
    int evaluatePostfix(string S)
    {
        // Your code here
    }
};`	 
	},
	{
		id:2,
		name:
`
class Solution
{
    //Function to evaluate a postfix expression.
    public static int evaluatePostFix(String S)
    {
        // Your code here
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
    //Function to evaluate a postfix expression.
    int evaluatePostfix(string S)
    {
            stack<int>val;
            int res=0;
            for(int i=0;i<S.size();i++){
                if(S[i]=='+' || S[i]=='*'
                 || S[i]=='-' || S[i]=='/'){
                    int a=val.top();
                    val.pop();
                    int b=val.top();
                    val.pop();
                    if(S[i]=='+'){
                        res=b+a;
                        val.push(res);
                    }
                    if(S[i]=='-'){
                        res=b-a;
                        val.push(res);
                        
                    }
                    if(S[i]=='*'){
                        res=b*a;
                        val.push(res);
                    }
                    if(S[i]=='/'){
                        res=b/a;
                        val.push(res);
                    }
                    
                }
                else{
                    val.push(S[i]-'0');
                }
            }
            return res;
    }
};
`
  },
  {
    id:2,
    name:
`class Solution {
    // Function to evaluate a postfix expression.
    public int evaluatePostfix(String S) {
        Stack<Integer> val = new Stack<>();
        int res = 0;
        for (int i = 0; i < S.length(); i++) {
            char c = S.charAt(i);
            if (c == '+' || c == '*' || c == '-' || c == '/') {
                int a = val.pop();
                int b = val.pop();
                if (c == '+') {
                    res = b + a;
                    val.push(res);
                }
                if (c == '-') {
                    res = b - a;
                    val.push(res);
                }
                if (c == '*') {
                    res = b * a;
                    val.push(res);
                }
                if (c == '/') {
                    res = b / a;
                    val.push(res);
                }
            } else {
                val.push(Character.getNumericValue(c));
            }
        }
        return res;
    }
}`
  }
]


export const postfix: Problem = {
	
    id: "postfix",
    title: "Evaluation of Postfix Expression",
    problemStatement: `<div class="mt-1">
    <p>
    Given string S representing a postfix expression, the task is to evaluate the expression and find the final value. Operators will only include the basic arithmetic operators like *, /, + and -.
    </p>
   
</div>
`    ,	
  examples:[
	{
	  id: 1,
	  inputText: ' S = "231*+9-"',
	  outputText: "-4",
	},
	{
	  id: 2,
	  inputText: 'S = "123+*8-"',
	  outputText: "-3",
	}
  ],
	constraints: `<div className="mt-4">
            <ul>
                <li className="mt-2">
                    <code>Expected Time Complexity: O(|S|)</code>
                </li>
                <li className="mt-2">
                    <code>Expected Auxiliary Space: O(|S|)</code>
                </li>
                <li className="mt-2">
                    <code>1 ≤ |S| ≤ 100000</code>
                </li>
                <li className="mt-2">
                    <code>1 ≤ |Si| ≤ 9 (And given operators)</code>
                </li>
            </ul>
        </div>`,

	starterCode: boilercode,
	intialcode:intialcode,
	endingcode:endingcode,
    solutioncode:solutioncode,
	inuputs:"2 231*+9- 123+*8-",
	output:"-4 -3 ",
	order: 7,
	difficulty: "Medium",
	tag:[
		{
			id: 1,
			name: "Data Structure",
		  },
		  {
			id: 2,
			name: "Stack",
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
	  ],

	  averagetime:"15m"  
};
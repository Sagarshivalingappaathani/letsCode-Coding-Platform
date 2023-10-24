import { Problem } from "../types/problem";

const intialcode = [
	{
		id:1,
		name:`
        #include <bits/stdc++.h>
        using namespace std;
        
        struct Node
        {
            int data;
            struct Node* next;
            
            Node(int x){
                data = x;
                next = NULL;
            }
        };
        void printList(Node* node) 
        { 
            while (node != NULL) { 
                cout << node->data <<" "; 
                node = node->next; 
            } 
        }
        `
	},
	{
		id:2,
		name:
`
import java.util.*;
import java.io.*;

class Node{
    int data;
    Node next;
    
    Node(int x){
        data = x;
        next = null;
    }
    
}
class Main{
	static void printList(Node node) 
	{ 
		while (node != null) 
		{ 
			System.out.print(node.data + " "); 
			node = node.next; 
		} 
		System.out.println(); 
	}
    public static void main(String args[]) throws IOException { 
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t > 0){
        	int n = sc.nextInt();
            Node head = new Node(sc.nextInt());
            Node tail = head;
            for(int i=0; i<n-1; i++)
            {
                tail.next = new Node(sc.nextInt());
                tail = tail.next;
            }
            Solution g = new Solution();
            int ans = g.getMiddle(head);
            System.out.print(ans+ " ");
            t--;
        }
    } 
} 
   
`

	}

]

const endingcode=[
	{
		id:1,
		name:
`int main() {
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        int data;
        cin>>data;
        struct Node *head = new Node(data);
        struct Node *tail = head;
        for (int i = 0; i < N-1; ++i)
        {
            cin>>data;
            tail->next = new Node(data);
            tail = tail->next;
        }
        
        Solution ob;
        cout << ob.getMiddle(head) << " ";
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
`/* Link list Node 
struct Node {
    int data;
    Node* next;
    
    Node(int x){
        data = x;
        next = NULL;
    }
    
}; */
class Solution{
    public:
    /* Should return data of middle node. If linked list is empty, then  -1*/
    int getMiddle(Node *head)
    {
        // Your code here
    }
};
`	 
	},
	{
		id:2,
		name:
`/* Node of a linked list
class Node {
  int data;
   Node next;
   Node(int d)  { data = d;  next = null; }
}
*/

class Solution
{
   int getMiddle(Node head)
   {
        // Your code here.
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
    /* Should return data of middle node. If linked list is empty, then  -1*/
    int getMiddle(Node *head)
    {
        Node *fast=head;
        Node *slow=head;
        while(fast!=NULL){
            fast=fast->next;
            if(fast!=NULL){
                slow=slow->next;
                fast=fast=fast->next;
            }
            
        }
        
        return slow->data;
    }
};
`
  },
  {
    id:2,
    name:
`class Solution
{
    int getMiddle(Node head)
    {
        if(head.next==null) return head.data;
        if(head.next.next==null) return head.next.data;
        Node slow=head;
        Node fast=head;
        while(fast.next!=null){
             slow=slow.next;
            if(fast.next.next==null)
                return slow.data;
                
            fast=fast.next.next;
        }
        return slow.data;
    }
}`
  }
]

export const midOfLL: Problem = {
	
    id: "mid-linkedList",
    title: "Finding middle element in a linked list",
    problemStatement: `<div class="mt-1">
    <p>
        Given a singly linked list of N nodes, the task is to find the middle of the linked list. For example, if the linked list is 1->2->3->4->5, then the middle node of the list is 3.
    </p>
    <p>
        If there are two middle nodes (in case, when N is even), print the second middle element. For example, if the linked list given is 1->2->3->4->5->6, then the middle node of the list is 4.
    </p>
</div>
`
    ,	
  examples:[
	{
	  id: 1,
	  inputText: "LL: 1->2->3->4->5",
	  outputText: " 3 ",
	},
	{
	  id: 2,
	  inputText: "LL : 2->4->6->7->5->1",
	  outputText: " 7 ",
	},
    {
        id: 3,
        inputText: "LL : 4->5->6",
        outputText: " 5 ",
      }
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
                    <code>1 ≤ N ≤ 5000</code>
                </li>
            </ul>
        </div>`,

	starterCode: boilercode,
	intialcode:intialcode,
	endingcode:endingcode,
    solutioncode:solutioncode,
	inuputs:"3 5 1 2 3 4 5 6 2 4 6 7 5 1 3 4 8 11",
	output:"3 7 8 ",
	order: 4,
	difficulty: "Medium",
	tag:[
		{
			id: 1,
			name: "Data Structure",
		  },
		  {
			id: 2,
			name: "LinkedList",
		  }
	],
	companies :[
		{
		  id: 1,
		  name: "Zoho",
		},
		{
		  id: 2,
		  name: "GE",
		},
		{
		  id: 3,
		  name: "Nagarro",
		},
	  ],

	  averagetime:"15m"
	  
};
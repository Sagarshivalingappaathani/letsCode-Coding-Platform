import { Problem } from "../types/problem";

const intialcode = [
	{
		id:1,
		name:
`
#include <bits/stdc++.h>
using namespace std;
`
	},
	{
		id:2,
		name:
`
import java.util.*;

class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int m = sc.nextInt();

            List<List<Integer>> adj = new ArrayList<>();

            for (int i = 0; i < m; i++) {
                List<Integer> temp = new ArrayList<>();
                for (int j = 0; j < 3; j++) {
                    int x = sc.nextInt();
                    temp.add(x);
                }
                adj.add(temp);
            }

            Solution obj = new Solution();
            System.out.print(obj.countPaths(n, adj)+" ");
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
    int T;
    cin >> T;
    while (T--) {
        int n, m;
        cin >> n >> m;
        int u, v;

        vector<vector<int>> adj;

        for (int i = 0; i < m; ++i) {
            vector<int> temp;
            for (int j = 0; j < 3; ++j) {
                int x;
                cin >> x;
                temp.push_back(x);
            }
            adj.push_back(temp);
        }

        Solution obj;
        cout << obj.countPaths(n, adj) << " ";
    }

    return 0;
}`
	},
	{
		id:2,
		name:
``
	}
]

const boilercode=[
 {
   id:1,
   name:
`class Solution {
	public:
	  int countPaths(int n, vector<vector<int>>& roads) {
		  // code here
	  }
  };`	 
	},
	{
		id:2,
		name:
`class Solution {

    static int countPaths(int n, List<List<Integer>> roads) {
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
`class Solution {
	public:
	  
	  int countPaths(int n, vector<vector<int>>& roads) {
		  // code here
		  // Dijkstra Algo + ways array
		  
		  int mod=(1e9+7);
		  
		  // adjacency list
		  vector<pair<int,int>> adj[n];
		  
		  for(auto i: roads)
		  {
			  int u=i[0];
			  int v=i[1];
			  int wt=i[2];
			  
			  adj[u].push_back({v, wt});
			  adj[v].push_back({u, wt});
		  }
		  
		  // distance, node
		  priority_queue<pair<int,int>, vector<pair<int,int>>,
		   greater<pair<int,int>>> pq;
		  pq.push({0, 0});
		  
		  vector<long> dist(n, 1e18);
		  vector<int> ways(n, 0);
		  
		  dist[0]=0;
		  ways[0]=1;
		  
		  while(!pq.empty())
		  {
			  long distance=pq.top().first;
			  int node=pq.top().second;
			  pq.pop();
			  
			  for(auto i: adj[node])
			  {
				  int adjNode=i.first;
				  int weight=i.second;
				  
				  // first time coming with shortest distance
				  if(distance+weight < dist[adjNode])
				  {
					  dist[adjNode]=distance+weight;
					  
					  pq.push({dist[adjNode], adjNode});
					  
					  ways[adjNode]=ways[node]%mod;
				  }
				  else if(distance+weight==dist[adjNode])
				  {
					  ways[adjNode]=(ways[adjNode]+ways[node])%mod;
				  }
			  }
		  }
		  
		  return (ways[n-1])%mod;
	  }
   
  };`
	},
	{
		id:2,
		name:
`class Solution {

    static int countPaths(int n, List<List<Integer>> roads) {
        List<List<int[]>> graph=new ArrayList<>();
        for(int i=0;i<n;i++) graph.add(new ArrayList<int[]>());
        for(int i=0;i<roads.size();i++){
            graph.get(roads.get(i).get(0))
			.add(new int[]{roads.get(i).get(1),roads.get(i).get(2)});
            graph.get(roads.get(i).get(1))
			.add(new int[]{roads.get(i).get(0),roads.get(i).get(2)});
        }
        long dist[]=new long[n];
        Arrays.fill(dist,Long.MAX_VALUE);
        dist[0]=0;
        int cnt[]=new int[n];
        cnt[0]=1;
        PriorityQueue<long[]> pq=new PriorityQueue<long[]>((a,b)->{
            return (int)(a[0]-b[0]);
        });
        pq.add(new long[]{0,0});
        while(!pq.isEmpty()){
            long node[]=pq.poll();
            long dst=node[0];
            int sr=(int)node[1];
            for(int []nbr:graph.get(sr)){
                int nr=nbr[0];
                long wt=nbr[1];
                if(dist[nr]>dst+wt){
                    dist[nr]=dst+wt;
                    pq.add(new long[]{dst+wt,nr});
                    cnt[nr]=cnt[sr];
                }
                else if(dist[nr]==dst+wt){
                    cnt[nr]=(cnt[nr]+cnt[sr])%(int)(1e9+7);
                }
            }
        }
        return cnt[n-1];
    }
}
`
	}
]

export const numberOfWays: Problem = {
	id: "number-of-ways-to-arrive-at-destination",
	title: "9 Number of Ways to Arrive at Destination",
	problemStatement: 
`<div class="problem-description">
    <h1>Problem Description: Counting Shortest Paths</h1>
    <p>
      You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional roads between some intersections. The inputs are generated such that you can reach any intersection from any other intersection and that there is at most one road between any two intersections.
    </p>

    <p>
      You are given an integer n and a 2D integer array roads where roads[i] = [ui, vi, timei] means that there is a road between intersections ui and vi that takes timei minutes to travel. You want to know in how many ways you can travel from intersection 0 to intersection n - 1 in the shortest amount of time.
    </p>

    <p>
      Return the number of ways you can arrive at your destination in the shortest amount of time. Since the answer may be large, return it modulo 10^9 + 7.
    </p>
</div>
  `,	
  examples:[
	{
	  id: 1,
	  inputText: "edges= [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]",
	  outputText: " 4 ",
	  explanation:"The four ways to get there in 7 minutes are:- [0-6],[0-4-6],[0-1-2-5-6],[0-1-3-5-6]"
	},
	{
	  id: 2,
	  inputText: "edges= [[0,5,8],[0,2,2],[0,1,1],[1,3,3],[1,2,3],[2,5,6],[3,4,2],[4,5,2]]",
	  outputText: " 3 ",
	}
  ],
	constraints: `<div className="mt-4">
                    <ul>
                        <li className="mt-2">
                            <code>Expected Time Complexity: O(M*LogN+N)</code>
                        </li>
                        <li className="mt-2">
                            <code>Expected Auxiliary Space: O(N+M)</code>
                        </li>
                        <li className="mt-2">
                            <code>1 ≤ n ≤ 200</code>
                        </li>
                        <li className="mt-2">
                            <code>n-1 ≤ road.length() ≤ n*(n-1)/2</code>
                        </li>
                        <li className="mt-2">
                            <code>roads[i].length == 3</code>
                        </li>
                        <li className="mt-2">
                            <code>0 <= ui, vi <= n - 1</code>
                        </li>
                        <li className="mt-2">
                            <code>1 <= timei <= 109</code>
                        </li>
                        <li className="mt-2">
                            <code>ui != vi</code>
                        </li>
                    </ul>
			</div>`,
	starterCode: boilercode,
	intialcode:intialcode,
	endingcode:endingcode,
	solutioncode:solutioncode,
	inuputs:"1 7 10 0 6 7 0 1 2 1 2 3 1 3 3 6 3 3 3 5 1 6 5 1 2 5 1 0 4 5 4 6 2",
	output:"4 ",
	order: 9,
	difficulty: "Medium",
	tag:[
		{
			id: 1,
			name: "Graphs",
		  },
		  {
			id: 2,
			name: "Shortest path",
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

	  averagetime:"30m"
	  
};
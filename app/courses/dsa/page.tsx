import React from 'react';
import Image from 'next/image'

const DSAPage = () => {
  return (
    <div className="mx-20 p-4 space-y-6">
       <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">Data Structure</h1>
        <p className="text-lg text-gray-600">
        Data Structure, We can define it as a way of collecting and organizing data in memory, this way will make performing operations on the data more efficient and easier.
        </p>
    
        <h2 className="text-2xl font-bold text-green-800 mt-4">Types</h2>
        <Image
              src="/assets/images/dsatype.png" 
              alt="logo"
              width={1200}
              height={500}
              className="object-contain"
            />
        <h2 className="text-2xl font-bold text-green-800 mt-4">When we can consider the algorithm efficient?</h2>
        <p className="text-lg text-gray-600">
        The algorithm is considered to be efficient and has a high performance, If it consumes less time and fewer memory locations during its execution until its completion, and that highlights the terms “Time Complexity” and “Space Complexity” and makes them come to the surface to understand the performance of any algorithm.
        </p>
      </div>     
    
      {/* Arrays */}
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Arrays</h1>
        <p className="text-lg text-gray-600">
          Arrays store multiple values of the same data type. You can perform various operations on arrays.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`int numbers[5] = {1, 2, 3, 4, 5};`}
        </pre>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Operations:</h2>
        <ul className="list-disc ml-6 text-lg text-gray-600">
          <li>Accessing elements by index</li>
          <li>Insertion and deletion of elements</li>
          <li>Searching for an element</li>
          <li>Updating elements</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Important Algorithm:</h2>
        <p className="text-lg text-gray-600">
          Linear Search and Binary Search
        </p>
      </div>

      {/*Recursion*/}
      <div className="bg-white rounded-lg p-4 shadow-md mt-5">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Recursion and Merge Sort</h2>

        <h3 className="text-xl font-bold mb-2 text-green-600">Recursion</h3>
        <p className="text-lg text-gray-600">
          Recursion is a programming technique where a function calls itself to solve a problem. It's particularly useful for solving problems with similar subproblems. Here's an example of a simple recursive function to calculate the factorial of a number:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`int factorial(int n) {
          if (n == 0) {
              return 1;
          } else {
              return n * factorial(n - 1);
          }
      }

      int main() {
          int n = 5;
          int result = factorial(n);
          std::cout << "Factorial of " << n << " is " << result << std::endl;
          return 0;
      }`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-green-600">Merge Sort</h3>
        <p className="text-lg text-gray-600">
          Merge Sort is a popular sorting algorithm that utilizes the divide-and-conquer strategy. It divides an array into two halves, sorts them separately, and then merges them back together. Here's an example of the Merge Sort algorithm how it works:
        </p>
        <div className='my-5 flex justify-center'>
        <Image
              src="/assets/images/merge-sort.png" 
              alt="logo"
              width={500}
              height={500}
              className="object-contain"
            />
        </div>
      </div>


      {/* Linked Lists */}
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Linked Lists</h1>
        <p className="text-lg text-gray-600">
          Linked lists are dynamic data structures used to store a collection of elements. They offer various operations.
        </p>
        {/* Linked list code example */}
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`class Node {
    public:
        int data;
        Node* next;
};

// Linked List operations
// Insertion, Deletion, Traversal, etc.
`}
        </pre>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Operations:</h2>
        <ul className="list-disc ml-6 text-lg text-gray-600">
          <li>Insertion and deletion of nodes</li>
          <li>Traversing the linked list</li>
          <li>Searching for a specific value</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Important Algorithm:</h2>
        <p className="text-lg text-gray-600">
          Floyd's Cycle Detection Algorithm (Tortoise and Hare)
        </p>
      </div>

      {/* Stacks */}
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Stacks</h1>
        <p className="text-lg text-gray-600">
          Stacks are used for managing data in a Last-In-First-Out (LIFO) order. They support common stack operations.
        </p>
        {/* Stack code example */}
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`#include <stack>

std::stack<int> stack;

stack.push(1);
stack.push(2);
int top = stack.top();
stack.pop();
`}
        </pre>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Operations:</h2>
        <ul className="list-disc ml-6 text-lg text-gray-600">
          <li>Push (Add element to the top)</li>
          <li>Pop (Remove the top element)</li>
          <li>Peek (Get the top element without removing)</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Important Algorithm:</h2>
        <p className="text-lg text-gray-600">
          Infix to Postfix Conversion (used in expression evaluation)
        </p>
      </div>
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Queues</h1>
        <p className="text-lg text-gray-600">
          Queues are used for managing data in a First-In-First-Out (FIFO) order. They support common queue operations.
        </p>
        {/* Queue code example */}
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`#include <queue>

std::queue<int> queue;

queue.push(1);
queue.push(2);
int front = queue.front();
queue.pop();
`}
        </pre>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Operations:</h2>
        <ul className="list-disc ml-6 text-lg text-gray-600">
          <li>Enqueue (Add element to the rear)</li>
          <li>Dequeue (Remove the front element)</li>
          <li>Front (Get the front element without removing)</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Important Algorithm:</h2>
        <p className="text-lg text-gray-600">
          Breadth-First Search (BFS) for graph traversal
        </p>
      </div>

      {/* Binary Trees */}
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Binary Trees</h1>
        <p className="text-lg text-gray-600">
          Binary trees are hierarchical data structures. You can perform various operations on binary trees.
        </p>
        {/* Binary tree code example */}
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`class TreeNode {
    public:
        int data;
        TreeNode* left;
        TreeNode* right;
};

// Binary Tree operations
// Insertion, Traversal, etc.
`}
        </pre>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Operations:</h2>
        <ul className="list-disc ml-6 text-lg text-gray-600">
          <li>Insertion of nodes</li>
          <li>Traversing the binary tree (preorder, inorder, postorder)</li>
          <li>Searching for a specific value</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Important Algorithm:</h2>
        <p className="text-lg text-gray-600">
          Depth-First Search (DFS) for graph traversal
        </p>
      </div>
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Binary Search Trees (BST)</h1>
        <p className="text-lg text-gray-600">
          Binary Search Trees are binary trees with a specific ordering property. You can perform various operations on BST.
        </p>
        {/* Binary Search Tree code example */}
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`class TreeNode {
    public:
        int data;
        TreeNode* left;
        TreeNode* right;
};

// Binary Search Tree operations
// Insertion, Deletion, Search, etc.
`}
        </pre>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Operations:</h2>
        <ul className="list-disc ml-6 text-lg text-gray-600">
          <li>Insertion of nodes while maintaining the BST property</li>
          <li>Deletion of nodes</li>
          <li>Searching for a specific value</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Important Algorithm:</h2>
        <p className="text-lg text-gray-600">
          Inorder Traversal for obtaining elements in sorted order
        </p>
      </div>

      {/* Heaps */}
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Heaps</h1>
        <p className="text-lg text-gray-600">
          Heaps are binary trees used for efficient data insertion and extraction operations. There are min-heaps and max-heaps.
        </p>
        {/* Min Heap and Max Heap code example */}
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`class MinHeap {
    public:
        // Min Heap operations
        // Insertion, Extract Min, Heapify, etc.
};

class MaxHeap {
    public:
        // Max Heap operations
        // Insertion, Extract Max, Heapify, etc.
}
`}
        </pre>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Operations:</h2>
        <ul className="list-disc ml-6 text-lg text-gray-600">
          <li>Insertion of elements while maintaining the heap property</li>
          <li>Extraction of the minimum/maximum element</li>
          <li>Heapify to ensure the heap property is maintained</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Important Algorithm:</h2>
        <p className="text-lg text-gray-600">
          Heap Sort
        </p>
      </div>
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Backtracking</h1>
        <p className="text-lg text-gray-600">
          Backtracking is a technique for finding all (or some) solutions to a problem by incrementally building a solution. It's often used in puzzles and optimization problems.
        </p>
        {/* Backtracking code example */}
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`// Backtracking algorithm example
// N-Queens, Sudoku, Permutations, etc.
`}
        </pre>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Operations:</h2>
        <ul className="list-disc ml-6 text-lg text-gray-600">
          <li>Solving puzzles and optimization problems</li>
          <li>Generating permutations and combinations</li>
          <li>Exploring all possible solutions</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Important Algorithm:</h2>
        <p className="text-lg text-gray-600">
          N-Queens Problem, Sudoku Solver, Knight's Tour Problem
        </p>
      </div>

      {/* Graphs and Graph Algorithms */}
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Graphs and Graph Algorithms</h1>
        <p className="text-lg text-gray-600">
          Graphs are versatile data structures used to represent connections between elements. They have a wide range of applications in various domains.
        </p>
        {/* Graph code example */}
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`class Graph {
    public:
        // Graph operations
        // Add Vertex, Add Edge, Traversal, etc.
};

// Graph algorithms
// Depth-First Search (DFS), Breadth-First Search (BFS), Shortest Path, etc.
`}
        </pre>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Operations:</h2>
        <ul className="list-disc ml-6 text-lg text-gray-600">
          <li>Adding vertices and edges</li>
          <li>Graph traversal (DFS, BFS)</li>
          <li>Shortest path and minimum spanning tree algorithms</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-800 mt-4">Important Algorithm:</h2>
        <p className="text-lg text-gray-600">
          Dijkstra's Algorithm, Kruskal's Algorithm, Topological Sort, etc.
        </p>
      </div>
      {/* DP */}
      <div className="bg-white rounded-lg p-4 shadow-md mt-5">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Dynamic Programming</h2>

        <h3 className="text-xl font-bold mb-2 text-green-600">Introduction</h3>
        <p className="text-lg text-gray-600">
          Dynamic Programming (DP) is a powerful technique used to solve problems by breaking them down into smaller overlapping subproblems. DP is particularly useful for optimization problems and can significantly improve the efficiency of your algorithms.
        </p>

        <h3 className="text-xl font-bold mb-2 text-green-600">Fibonacci Series</h3>
        <p className="text-lg text-gray-600">
          The Fibonacci series is a classic example to illustrate dynamic programming concepts. Here's an example of calculating the nth Fibonacci number using DP:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`const int MAX = 100;
      int dp[MAX];

      int fibonacci(int n) {
          if (n <= 1) {
              return n;
          }

          if (dp[n] != -1) {
              return dp[n];
          }

          dp[n] = fibonacci(n - 1) + fibonacci(n - 2);
          return dp[n];
      }

      int main() {
          int n = 10;
          memset(dp, -1, sizeof(dp));
          int result = fibonacci(n);
          std::cout << "Fibonacci(" << n << ") = " << result << std::endl;
          return 0;
      }`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-green-600">Knapsack Problem</h3>
        <p className="text-lg text-gray-600">
          The Knapsack problem is another well-known problem solved using dynamic programming. It deals with maximizing the value of items in a knapsack under given weight constraints. Here's an example of solving the 0/1 Knapsack problem:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`int knapsack(int W, int wt[], int val[], int n) {
          int dp[n + 1][W + 1];

          for (int i = 0; i <= n; i++) {
              for (int w = 0; w <= W; w++) {
                  if (i == 0 || w == 0) {
                      dp[i][w] = 0;
                  } else if (wt[i - 1] <= w) {
                      dp[i][w] = std::max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
                  } else {
                      dp[i][w] = dp[i - 1][w];
                  }
              }
          }

          return dp[n][W];
      }

      int main() {
          int val[] = {60, 100, 120};
          int wt[] = {10, 20, 30};
          int W = 50;
          int n = sizeof(val) / sizeof(val[0]);
          int result = knapsack(W, wt, val, n);
          std::cout << "Maximum value: " << result << std::endl;
          return 0;
      }`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-green-600">Longest Common Subsequence</h3>
        <p className="text-lg text-gray-600">
          The Longest Common Subsequence (LCS) problem is another classic application of dynamic programming. It aims to find the longest subsequence that two sequences have in common. Here's an example of finding the LCS between two strings:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`int lcs(const std::string& X, const std::string& Y) {
          int m = X.length();
          int n = Y.length();
          std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1, 0));

          for (int i = 1; i <= m; i++) {
              for (int j = 1; j <= n; j++) {
                  if (X[i - 1] == Y[j - 1]) {
                      dp[i][j] = dp[i - 1][j - 1] + 1;
                  } else {
                      dp[i][j] = std::max(dp[i - 1][j], dp[i][j - 1]);
                  }
              }
          }

          return dp[m][n];
      }

      int main() {
          std::string X = "AGGTAB";
          std::string Y = "GXTXAYB";
          int result = lcs(X, Y);
          std::cout << "Length of Longest Common Subsequence: " << result << std::endl;
          return 0;
      }`}
        </pre>
      </div>

    </div>
  );
};

export default DSAPage;

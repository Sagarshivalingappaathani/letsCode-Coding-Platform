import React from 'react';

const CppLearning: React.FC = () => {
  return (
    <div className="mx-20 p-4 space-y-6 ">
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Welcome to C++ Learning</h1>
        <p className="text-lg text-gray-600">
          C++ is a powerful and versatile programming language widely used for developing
          applications, games, and system software. It's known for its efficiency and performance.
        </p>
      </div>

      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Getting Started</h2>
        <p className="text-lg text-gray-600">
          To start learning C++, you'll need a C++ compiler like GCC or Visual C++. You can
          write C++ code in a plain text editor and compile it using a compiler.
        </p>
      </div>

      <div className="bg-black rounded-lg p-4 mt-5  shadow-md text-green-100">
        <h2 className="text-2xl font-bold mb-4">Hello World Program</h2>
        <p className="text-lg text-gray-400">
          Let's start with a simple "Hello, World!" program in C++:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`}
        </pre>
        <p className="text-lg text-gray-400 mt-4">
          This program prints "Hello, World!" to the console. The <code>#include &lt;iostream&gt;</code> line
          includes the standard I/O library.
        </p>
        <p className="text-lg text-gray-400 mt-4">
          To compile and run this program, follow these steps:
        </p>
        <ol className="text-lg text-gray-400 pl-6 mt-2">
          <li>Save the code to a file with a ".cpp" extension (e.g., hello.cpp).</li>
          <li>Open your command prompt or terminal.</li>
          <li>Navigate to the directory where your C++ file is located.</li>
          <li>Compile the code using your C++ compiler (e.g., <code>g++ hello.cpp -o hello</code>).</li>
          <li>Run the compiled program (e.g., <code>./hello</code>).</li>
        </ol>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-md mt-5">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Learn C++ Fundamentals</h2>

        <h3 className="text-xl font-bold mb-2 text-green-600">Conditional Statements (if-else)</h3>
        <p className="text-lg text-gray-600">
          Conditional statements are used to make decisions in your program:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`int x = 10;

if (x > 5) {
    std::cout << "x is greater than 5" << std::endl;
} else if (x == 5) {
    std::cout << "x is equal to 5" << std::endl;
} else {
    std::cout << "x is less than 5" << std::endl;
}`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-green-600">Loops (for, while, do-while)</h3>
        <p className="text-lg text-gray-600">
          Loops are used to repeatedly execute a block of code:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`// For Loop
for (int i = 0; i < 5; i++) {
    std::cout << "Iteration " << i << std::endl;
}

// While Loop
int i = 0;
while (i < 5) {
    std::out << "Iteration " << i << std::endl;
    i++;
}

// Do-While Loop
int i = 0;
do {
    std::out << "Iteration " << i << std::endl;
    i++;
} while (i < 5);
`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-green-600">Arrays</h3>
        <p className="text-lg text-gray-600">
          Arrays store multiple values of the same data type:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`int numbers[5] = {1, 2, 3, 4, 5};`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-green-600">Pointers</h3>
        <p className="text-lg text-gray-600">
          Pointers are variables that store memory addresses:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`int x = 10;
int* ptr = &x;

std::out << *ptr << std::endl; // Prints the value of x (10)
`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-green-600">Functions</h3>
        <p className="text-lg text-gray-600">
          Functions allow you to encapsulate blocks of code for reuse:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-green-100">
          {`int add(int a, int b) {
    return a + b;
}`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-green-600">Recursion, Strings, STL, and File Handling</h3>
        <p className="text-lg text-gray-600">
          C++ offers advanced features like recursion, string manipulation, the Standard Template Library (STL) for data structures and algorithms, and file handling for input and output operations.
          These topics require in-depth explanations and examples, making them suitable for more advanced learning.
        </p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-md mt-5">
        <h3 className="text-xl font-bold mb-2 text-green-600">Standard Template Library (STL)</h3>
        <p className="text-lg text-gray-600">
          The Standard Template Library (STL) is a powerful set of C++ template classes that provide general-purpose classes with templates, implementing many popular and commonly used algorithms and data structures. Here are some of the essential components of the STL:
        </p>

<<<<<<< HEAD
        <h4 className="text-lg font-bold mb-2 text-green-600">1. Vector</h4>
=======
<<<<<<< HEAD
        <h4 className="text-lg font-bold mb-2 text-green-600">1. Vector</h4>
=======
<<<<<<< HEAD
        <h4 className="text-lg font-bold mb-2 text-green-600">1. Vector</h4>
=======
<<<<<<< HEAD
        <h4 className="text-lg font-bold mb-2 text-green-600">1. Vector</h4>
=======
        <h4 className="text-lg font-bold mb-2 text-white">1. Vector</h4>
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
        <p className="text-lg text-gray-600">
          A vector is a dynamic array that can grow or shrink in size. It's similar to an array but offers additional functionalities like resizing and automatic memory management. Here's an example of using vectors:
        </p>
        <pre className="bg-black text-white p-2 rounded-lg">
          {`#include <vector>
#include <iostream>

int main() {
    // Create a vector of integers
    std::vector<int> numbers;

    // Add elements to the vector
    numbers.push_back(10);
    numbers.push_back(20);
    numbers.push_back(30);

    // Access elements
    for (int i = 0; i < numbers.size(); i++) {
        std::cout << numbers[i] << " ";
    }

    return 0;
}`}
        </pre>

<<<<<<< HEAD
        <h4 className="text-lg font-bold mb-2 text-green-600">2. Map</h4>
=======
<<<<<<< HEAD
        <h4 className="text-lg font-bold mb-2 text-green-600">2. Map</h4>
=======
<<<<<<< HEAD
        <h4 className="text-lg font-bold mb-2 text-green-600">2. Map</h4>
=======
<<<<<<< HEAD
        <h4 className="text-lg font-bold mb-2 text-green-600">2. Map</h4>
=======
        <h4 className="text-lg font-bold mb-2 text-white">2. Map</h4>
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
        <p className="text-lg text-gray-600">
          A map is a collection of key-value pairs. It allows you to store and retrieve values based on unique keys. Maps are typically implemented as binary search trees, providing efficient key-based retrieval. Here's an example of using maps:
        </p>
        <pre className="bg-black text-white p-2 rounded-lg">
          {`#include <map>
#include <iostream>

int main() {
    // Create a map of string to int
    std::map<std::string, int> ages;

    // Add key-value pairs
    ages["Alice"] = 25;
    ages["Bob"] = 30;
    ages["Charlie"] = 35;

    // Access values by key
    std::cout << "Alice's age: " << ages["Alice"] << std::endl;

    return 0;
}`}
        </pre>

        <h4 className="text-lg font-bold mb-2 text-white">3. Set</h4>
        <p className="text-lg text-gray-600">
          A set is a collection of unique elements. It doesn't allow duplicate values, making it useful for maintaining a unique set of items. Here's an example of using sets:
        </p>
        <pre className="bg-black text-white p-2 rounded-lg">
          {`#include <set>
#include <iostream>

int main() {
    // Create a set of integers
    std::set<int> uniqueNumbers;

    // Add elements to the set
    uniqueNumbers.insert(10);
    uniqueNumbers.insert(20);
    uniqueNumbers.insert(10); // This won't be added

    // Iterate through the set
    for (int number : uniqueNumbers) {
        std::cout << number << " ";
    }

    return 0;
}`}
        </pre>

        <h4 className="text-lg font-bold mb-2 text-green-600">4. Pair</h4>
        <p className="text-lg text-gray-600">
          A pair is a simple structure that holds two values. It is often used for returning two values from a function or for simple key-value associations. Here's an example of using pairs:
        </p>
        <pre className="bg-black text-white p-2 rounded-lg">
          {`#include <utility>
#include <iostream>

int main() {
    std::pair<std::string, int> person("Alice", 25);

    std::cout << "Name: " << person.first << ", Age: " << person.second << std::endl;

    return 0;
}`}
        </pre>

        <h4 className="text-lg font-bold mb-2 text-green-600">5. File Handling</h4>
        <p className="text-lg text-gray-600">
          C++ provides file handling capabilities to read from and write to files. You can use ifstream and ofstream for file input and output operations. Here's a basic example of writing to a file:
        </p>
        <pre className="bg-black text-white p-2 rounded-lg">
          {`#include <fstream>
#include <iostream>

int main() {
    std::ofstream outputFile("example.txt");
    if (outputFile.is_open()) {
        outputFile << "Hello, World!" << std::endl;
        outputFile.close();
    } else {
        std::cerr << "Failed to open the file." << std::endl;
    }

    return 0;
}`}
        </pre>

        <p className="text-lg text-gray-600">
          The STL is a key part of C++ and is widely used for various data manipulation tasks, providing efficient and easy-to-use tools for working with data structures and algorithms.
        </p>
        <p className="text-lg text-gray-600">
          In this introductory guide, we've covered the basics of C++. However, mastering the usage of these STL components, along with more advanced features, requires further exploration and practice.
        </p>
      </div>
    </div>
  );
};

export default CppLearning;

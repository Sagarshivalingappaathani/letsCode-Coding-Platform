import React from 'react';

const JavaLearning: React.FC = () => {
  return (
    <div className="mx-20 p-4 space-y-6">
      {/* Java Overview */}
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Java Overview</h1>
        <p className="text-lg text-gray-600">
          Java is a versatile and widely-used programming language known for its platform independence and strong support for object-oriented programming.
        </p>
      </div>

      {/* Java Basics */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Basics</h2>
        <p className="text-lg text-gray-600">
          Java Basics cover fundamental concepts, including the structure of a Java program and how to run a simple "Hello, World!" program.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}
        </pre>
      </div>

      {/* Java Input/Output */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Input/Output</h2>
        <p className="text-lg text-gray-600">
          Java Input/Output covers reading from and writing to the console and files. Here's a simple example of reading from the console:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.util.Scanner;

public class InputExample {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter your name: ");
    String name = scanner.nextLine();
    System.out.println("Hello, " + name);
    scanner.close();
  }
}`}
        </pre>
      </div>

      {/* Java Flow Control */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Flow Control</h2>
        <p className="text-lg text-gray-600">
          Java Flow Control covers if statements, loops, and other control structures. Here's an example of an if-else statement:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class IfExample {
  public static void main(String[] args) {
    int number = 10;
    if (number > 0) {
      System.out.println("Number is positive.");
    } else {
      System.out.println("Number is non-positive.");
    }
  }
}`}
        </pre>
      </div>

      {/* Java Operators */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Operators</h2>
        <p className="text-lg text-gray-600">
          Java Operators cover arithmetic, relational, logical, and other operators. Here's an example of using arithmetic operators:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class ArithmeticOperators {
  public static void main(String[] args) {
    int a = 10;
    int b = 5;
    int sum = a + b;
    int difference = a - b;
    int product = a * b;
    int quotient = a / b;
    int remainder = a % b;
    System.out.println("Sum: " + sum);
    System.out.println("Difference: " + difference);
    System.out.println("Product: " + product);
    System.out.println("Quotient: " + quotient);
    System.out.println("Remainder: " + remainder);
  }
}`}
        </pre>
      </div>

      {/* Java Strings */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Strings</h2>
        <p className="text-lg text-gray-600">
          Java Strings cover working with text data. Here's an example of string concatenation:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class StringExample {
  public static void main(String[] args) {
    String firstName = "John";
    String lastName = "Doe";
    String fullName = firstName + " " + lastName;
    System.out.println("Full Name: " + fullName);
  }
}`}
        </pre>
      </div>

      {/* Java Arrays */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Arrays</h2>
        <p className="text-lg text-gray-600">
          Java Arrays cover creating and manipulating arrays. Here's an example of declaring and initializing an array:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class ArrayExample {
  public static void main(String[] args) {
    int[] numbers = {1, 2, 3, 4, 5};
    System.out.println("Element at index 2: " + numbers[2]);
  }
}`}
        </pre>
      </div>

      {/* Java OOPs Concepts */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java OOPs Concepts</h2>
        <p className="text-lg text-gray-600">
          Java OOPs Concepts cover Object-Oriented Programming principles like classes, objects, inheritance, and polymorphism.
        </p>
        {/* Add content and examples related to OOPs Concepts */}
      </div>

      {/* Java Inheritance */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Inheritance</h2>
        <p className="text-lg text-gray-600">
          Java Inheritance allows one class to inherit properties and methods from another. Here's an example:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`class Vehicle {
  void start() {
    System.out.println("Vehicle started.");
  }
}

class Car extends Vehicle {
  void accelerate() {
    System.out.println("Car is accelerating.");
  }
}

public class InheritanceExample {
  public static void main(String[] args) {
    Car car = new Car();
    car.start();
    car.accelerate();
  }
}`}
        </pre>
      </div>

      {/* Java Abstraction */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Abstraction</h2>
        <p className="text-lg text-gray-600">
          Java Abstraction allows you to define abstract classes and methods. Here's an example:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`abstract class Shape {
  abstract void draw();
}

class Circle extends Shape {
  void draw() {
    System.out.println("Drawing a circle.");
  }
}

public class AbstractionExample {
  public static void main(String[] args) {
    Circle circle = new Circle();
    circle.draw();
  }
}`}
        </pre>
      </div>
      {/* Java Encapsulation */}
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Java Encapsulation</h1>
        <p className="text-lg text-gray-600">
          Java Encapsulation is the concept of restricting access to certain components of an object and providing public methods to manipulate its state. Here's an example:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class Student {
  private String name;
  private int age;

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void setAge(int age) {
    if (age > 0) {
      this.age = age;
    }
  }

  public int getAge() {
    return age;
  }
}`}
        </pre>
      </div>

      {/* Java Polymorphism */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Polymorphism</h2>
        <p className="text-lg text-gray-600">
          Java Polymorphism is the ability of different classes to be treated as instances of the same class. Here's an example with method overriding:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`class Animal {
  void makeSound() {
    System.out.println("Animal makes a sound");
  }
}

class Dog extends Animal {
  @Override
  void makeSound() {
    System.out.println("Dog barks");
  }
}

class Cat extends Animal {
  @Override
  void makeSound() {
    System.out.println("Cat meows");
  }
}`}
        </pre>
      </div>

      {/* Java Constructors */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Constructors</h2>
        <p className="text-lg text-gray-600">
          Java Constructors are special methods used to initialize objects. Here's an example with constructors:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class Person {
  String name;
  int age;

  // Default constructor
  public Person() {
    name = "John";
    age = 30;
  }

  // Parameterized constructor
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
}`}
        </pre>
      </div>

      {/* Java Methods */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Methods</h2>
        <p className="text-lg text-gray-600">
          Java Methods are blocks of code that perform specific tasks. Here's an example of a method in a class:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class Calculator {
  int add(int a, int b) {
    return a + b;
  }
}`}
        </pre>
      </div>

      {/* Java Interfaces */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Interfaces</h2>
        <p className="text-lg text-gray-600">
          Java Interfaces define a contract for classes to implement. Here's an example of an interface and a class implementing it:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`interface Shape {
  void draw();
}

class Circle implements Shape {
  @Override
  public void draw() {
    System.out.println("Drawing a circle.");
  }
}`}
        </pre>
      </div>

      {/* Java Wrapper Classes */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Wrapper Classes</h2>
        <p className="text-lg text-gray-600">
          Java Wrapper Classes provide a way to convert primitive data types into objects. Here's an example using the Integer class:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class WrapperExample {
  public static void main(String[] args) {
    int primitiveInt = 42;
    Integer wrappedInt = Integer.valueOf(primitiveInt);

    System.out.println("Primitive Int: " + primitiveInt);
    System.out.println("Wrapped Int: " + wrappedInt);
  }
}`}
        </pre>
      </div>

      {/* Java Keywords */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Keywords</h2>
        <p className="text-lg text-gray-600">
          Java Keywords are reserved words with special meanings in the language. Here are some common Java keywords:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`abstract, class, extends, implements, static, public, private, return, if, else, for, while, new, final, this, super, switch, 
case, default, try, catch,throw, throws, void, int, float, double, char, boolean, and many more...`}
        </pre>
      </div>

      {/* Java Access Modifiers */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Access Modifiers</h2>
        <p className="text-lg text-gray-600">
          Java Access Modifiers control the visibility and accessibility of classes, methods, and variables. Here are some common access modifiers:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public, private, protected, default (package-private)`}
        </pre>
      </div>

      {/* Java Memory Allocation */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Memory Allocation</h2>
        <p className="text-lg text-gray-600">
          Java Memory Allocation is managed by the JVM. It includes stack and heap memory for method execution and object storage.
        </p>
        {/* Add content and examples related to memory allocation */}
      </div>
      {/* Java Classes */}
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Java Classes</h1>
        <p className="text-lg text-gray-600">
          In Java, classes are the blueprint for creating objects. Here's an example of a simple Java class:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class Person {
  String name;
  int age;
}`}
        </pre>
      </div>

      {/* Java Packages */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Packages</h2>
        <p className="text-lg text-gray-600">
          Java packages are used to organize and group related classes. Here's an example of using packages:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`package com.example.myproject;
import java.util.*;
import java.io.*;

public class MyClass {
  // Class implementation
}`}
        </pre>
      </div>

      {/* Java Collection Framework */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Collection Framework</h2>
        <p className="text-lg text-gray-600">
          The Java Collection Framework provides a set of classes and interfaces for working with collections of objects. Here's an example using a List:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.util.ArrayList;
import java.util.List;

public class CollectionExample {
  public static void main(String[] args) {
    List<String> names = new ArrayList<>();
    names.add("Alice");
    names.add("Bob");
    names.add("Charlie");
  }
}`}
        </pre>
      </div>

      {/* Java List */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java List</h2>
        <p className="text-lg text-gray-600">
          A List in Java is an ordered collection of elements. Here's an example of working with a List:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.util.ArrayList;
import java.util.List;

public class ListExample {
  public static void main(String[] args) {
    List<String> names = new ArrayList<>();
    names.add("Alice");
    names.add("Bob");
    names.add("Charlie");
  }
}`}
        </pre>
      </div>

      {/* Java Queue */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Queue</h2>
        <p className="text-lg text-gray-600">
          A Queue in Java represents a collection that orders elements in a specific way. Here's an example of using a Queue:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
  public static void main(String[] args) {
    Queue<String> orders = new LinkedList<>();
    orders.add("Order 1");
    orders.add("Order 2");
    orders.add("Order 3");
  }
}`}
        </pre>
      </div>

      {/* Java Map */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Map</h2>
        <p className="text-lg text-gray-600">
          A Map in Java represents a collection of key-value pairs. Here's an example of using a Map:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.util.HashMap;
import java.util.Map;

public class MapExample {
  public static void main(String[] args) {
    Map<String, Integer> population = new HashMap<>();
    population.put("New York", 8500000);
    population.put("Los Angeles", 4000000);
    population.put("Chicago", 2700000);
  }
}`}
        </pre>
      </div>

      {/* Java Set */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Set</h2>
        <p className="text-lg text-gray-600">
          A Set in Java represents a collection of unique elements. Here's an example of using a Set:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.util.HashSet;
import java.util.Set;

public class SetExample {
  public static void main(String[] args) {
    Set<String> uniqueNames = new HashSet<>();
    uniqueNames.add("Alice");
    uniqueNames.add("Bob");
    uniqueNames.add("Alice"); // Duplicate, will be ignored
  }
}`}
        </pre>
      </div>

      {/* Java Exception Handling */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Exception Handling</h2>
        <p className="text-lg text-gray-600">
          Java Exception Handling is a mechanism to handle runtime errors. Here's an example of catching and handling an exception:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class ExceptionExample {
  public static void main(String[] args) {
    try {
      int result = 5 / 0; // This will throw an ArithmeticException
    } catch (ArithmeticException e) {
      System.out.println("Error: " + e.getMessage());
    }
  }
}`}
        </pre>
      </div>

      {/* Java Multithreading */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Multithreading</h2>
        <p className="text-lg text-gray-600">
          Java Multithreading allows multiple threads to run concurrently. Here's an example of creating and running a thread:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class ThreadExample {
  public static void main(String[] args) {
    Thread thread = new Thread(() -> {
      for (int i = 0; i < 5; i++) {
        System.out.println("Thread " + i);
      }
    });
    thread.start();
  }
}`}
        </pre>
      </div>

      {/* Java Synchronization */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Synchronization</h2>
        <p className="text-lg text-gray-600">
          Java Synchronization is used to control access to shared resources in a multithreaded environment. Here's an example of synchronized block usage:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`public class SynchronizationExample {
  private int count = 0;

  public synchronized void increment() {
    count++;
  }
}`}
        </pre>
      </div>
      {/* Java Concurrency */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Concurrency</h2>
        <p className="text-lg text-gray-600"></p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
{`import java.util.concurrent.*;

class Task implements Runnable {
    private String name;

    public Task(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        while (!Thread.currentThread().isInterrupted()) {
            System.out.println(this.name + " is running");
            try {
                Thread.sleep(1000); // sleep for a second
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt(); // Restore the interrupted status
            }
        }
    }

    public static void main(String args[]) {
        ExecutorService executorService = Executors.newCachedThreadPool();
        executorService.execute(new Task("Task1"));
        executorService.execute(new Task("Task2"));

        // Shutdown the executor service when you're done
        executorService.shutdown();
    }
}`}
</pre>
    </div>
    {/* Java File Handling */}
    <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Java File Handling</h1>
        <p className="text-lg text-gray-600">
          Java File Handling is used for reading from and writing to files. Here's a simple example of reading from a file:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.io.BufferedReader;
import java.io.FileReader;

public class FileHandlingExample {
  public static void main(String[] args) {
    try {
      BufferedReader reader = new BufferedReader(new FileReader("example.txt"));
      String line;
      while ((line = reader.readLine()) != null) {
        System.out.println(line);
      }
      reader.close();
    } catch (Exception e) {
      System.out.println("Error: " + e.getMessage());
    }
  }
}`}
        </pre>
      </div>

      {/* Java Regex */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Regex</h2>
        <p className="text-lg text-gray-600">
          Java Regex (Regular Expressions) is used for pattern matching in strings. Here's an example of checking if a string matches a pattern:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class RegexExample {
  public static void main(String[] args) {
    String text = "The quick brown fox jumps over the lazy dog.";
    String pattern = "fox";

    Pattern regex = Pattern.compile(pattern);
    Matcher matcher = regex.matcher(text);

    if (matcher.find()) {
      System.out.println("Pattern found!");
    }
  }
}`}
        </pre>
      </div>

      {/* Java IO */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java IO</h2>
        <p className="text-lg text-gray-600">
          Java IO (Input/Output) is used for handling input and output operations. Here's an example of writing data to a file:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.io.FileWriter;
import java.io.IOException;

public class IOExample {
  public static void main(String[] args) {
    try {
      FileWriter writer = new FileWriter("output.txt");
      writer.write("Hello, World!");
      writer.close();
    } catch (IOException e) {
      System.out.println("Error: " + e.getMessage());
    }
  }
}`}
        </pre>
      </div>

      {/* Java Networking */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Networking</h2>
        <p className="text-lg text-gray-600">
          Java Networking is used for network communication. Here's a basic example of creating a simple client-server application:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.net.ServerSocket;
import java.net.Socket;

public class ServerExample {
  public static void main(String[] args) {
    try {
      ServerSocket serverSocket = new ServerSocket(12345);
      Socket clientSocket = serverSocket.accept();
      // Handle client communication
    } catch (Exception e) {
      System.out.println("Error: " + e.getMessage());
    }
  }
}`}
        </pre>
      </div>

      {/* Java 8 Features */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java 8 Features</h2>
        <p className="text-lg text-gray-600">
          Java 8 introduced several features, including lambdas and the Stream API. Here's an example of using lambdas:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.util.ArrayList;
import java.util.List;

public class Java8Example {
  public static void main(String[] args) {
    List<String> names = new ArrayList<>();
    names.add("Alice");
    names add("Bob");
    names add("Charlie");

    names.forEach(name -> System.out.println("Hello, " + name));
  }
}`}
        </pre>
      </div>

      {/* Java Date & Time */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Date & Time</h2>
        <p className="text-lg text-gray-600">
          Java provides classes for working with date and time. Here's an example of formatting a date:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.text.SimpleDateFormat;
import java.util.Date;

public class DateTimeExample {
  public static void main(String[] args) {
    Date now = new Date();
    SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
    String formattedDate = format.format(now);
    System.out.println(formattedDate);
  }
}`}
        </pre>
      </div>

      {/* JDBC */}
      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Java Database Connectivity (JDBC)</h2>
        <p className="text-lg text-gray-600">
          JDBC is used for connecting Java applications to databases. Here's an example of database connection and retrieval:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JdbcExample {
  public static void main(String[] args) {
    try {
      Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "user", "password");
      Statement stmt = conn.createStatement();
      ResultSet rs = stmt.executeQuery("SELECT * FROM mytable");
      
      while (rs.next()) {
        System.out.println("ID: " + rs.getInt("id") + ", Name: " + rs.getString("name"));
      }
      
      conn.close();
    } catch (Exception e) {
      System.out.println("Error: " + e.getMessage());
    }
  }
}`}
        </pre>
      </div>
    {/* Conclusion */}
<div className="bg-white rounded-lg p-4 mt-5 shadow-md">
  <h2 className="text-2xl font-bold text-blue-800 mb-4">Conclusion</h2>
  <p className="text-lg text-gray-600">
    In this Java course, you've learned a wide range of essential topics and concepts to help you become proficient in Java programming. Starting with the basics and moving on to more advanced features, you've covered everything from fundamental syntax and object-oriented principles to working with files, databases, and date and time.

    Java is a versatile language that finds applications in a variety of domains, from web and mobile development to enterprise-level applications. By mastering these concepts, you've gained the knowledge and skills to embark on your journey as a Java developer.

    Keep practicing, exploring, and building with Java to reinforce your learning. The more you code, the more comfortable and confident you'll become in using Java to create powerful and innovative software solutions.

    If you're eager to delve deeper into any specific area, don't hesitate to explore additional resources, courses, and projects. Java is a vast ecosystem, and there's always more to discover and learn. We wish you the best on your Java programming adventure!
  </p>
</div>

    </div>
  );
};

export default JavaLearning;

import { Challenge } from '../../types';

export const javaChallenges: Challenge[] = [
  {
    id: 1,
    title: "Sum of Two Numbers",
    description: "Given two integers a and b, return their sum.",
    input: "a = 5, b = 7",
    output: "12",
    hint: "Use the + operator.",
    difficulty: "beginner",
    starterCode: "public class Solution {\n    public int sumNumbers(int a, int b) {\n        // Your code here\n        return 0;\n    }\n}",
    testCases: [
      { input: [5, 7], expected: 12 },
      { input: [3, 2], expected: 5 },
      { input: [-1, 1], expected: 0 }
    ]
  },
  {
    id: 2,
    title: "Check Even or Odd",
    description: "Check if a given number is even or odd. Return \"Even\" for even numbers and \"Odd\" for odd numbers.",
    input: "n = 4",
    output: "\"Even\"",
    hint: "Use the modulo operator %.",
    difficulty: "beginner",
    starterCode: "public class Solution {\n    public String checkEvenOdd(int n) {\n        // Your code here\n        return \"\";\n    }\n}",
    testCases: [
      { input: [4], expected: "Even" },
      { input: [7], expected: "Odd" },
      { input: [0], expected: "Even" }
    ]
  },
  {
    id: 3,
    title: "Find the Maximum",
    description: "Given two numbers, find the maximum.",
    input: "a = 3, b = 8",
    output: "8",
    hint: "Use Math.max().",
    difficulty: "beginner",
    starterCode: "public class Solution {\n    public int findMaximum(int a, int b) {\n        // Your code here\n        return 0;\n    }\n}",
    testCases: [
      { input: [3, 8], expected: 8 },
      { input: [10, 5], expected: 10 },
      { input: [7, 7], expected: 7 }
    ]
  },
  {
    id: 4,
    title: "Reverse a String",
    description: "Reverse the given string.",
    input: "s = \"hello\"",
    output: "\"olleh\"",
    hint: "Use StringBuilder.reverse().",
    difficulty: "beginner",
    starterCode: "public class Solution {\n    public String reverseString(String s) {\n        // Your code here\n        return \"\";\n    }\n}",
    testCases: [
      { input: ["hello"], expected: "olleh" },
      { input: ["java"], expected: "avaj" },
      { input: [""], expected: "" }
    ]
  },
  {
    id: 5,
    title: "Count Vowels",
    description: "Count the number of vowels in a given string.",
    input: "s = \"java\"",
    output: "2",
    hint: "Use a loop and check against vowels.",
    difficulty: "beginner",
    starterCode: "public class Solution {\n    public int countVowels(String s) {\n        // Your code here\n        return 0;\n    }\n}",
    testCases: [
      { input: ["java"], expected: 2 },
      { input: ["hello"], expected: 2 },
      { input: ["xyz"], expected: 0 }
    ]
  },
  {
    id: 6,
    title: "Factorial",
    description: "Find the factorial of a given number.",
    input: "n = 5",
    output: "120",
    hint: "Use a loop or recursive function.",
    difficulty: "intermediate",
    starterCode: "public class Solution {\n    public long factorial(int n) {\n        // Your code here\n        return 0;\n    }\n}",
    testCases: [
      { input: [5], expected: 120 },
      { input: [0], expected: 1 },
      { input: [3], expected: 6 }
    ]
  },
  {
    id: 7,
    title: "Palindrome Check",
    description: "Check if a given string is a palindrome.",
    input: "s = \"madam\"",
    output: "true",
    hint: "Compare the string with its reverse.",
    difficulty: "beginner",
    starterCode: "public class Solution {\n    public boolean isPalindrome(String s) {\n        // Your code here\n        return false;\n    }\n}",
    testCases: [
      { input: ["madam"], expected: true },
      { input: ["java"], expected: false },
      { input: [""], expected: true }
    ]
  },
  {
    id: 8,
    title: "Find the Smallest Number",
    description: "Find the smallest number in an array.",
    input: "nums = {5, 3, 7, 2}",
    output: "2",
    hint: "Use Math.min() with a loop.",
    difficulty: "beginner",
    starterCode: "public class Solution {\n    public int findSmallest(int[] nums) {\n        // Your code here\n        return 0;\n    }\n}",
    testCases: [
      { input: [[5, 3, 7, 2]], expected: 2 },
      { input: [[1]], expected: 1 },
      { input: [[10, 20, 30]], expected: 10 }
    ]
  },
  {
    id: 9,
    title: "Sum of Array",
    description: "Calculate the sum of all elements in an array.",
    input: "nums = {1, 2, 3, 4}",
    output: "10",
    hint: "Use a loop or Arrays.stream().",
    difficulty: "beginner",
    starterCode: "public class Solution {\n    public int sumArray(int[] nums) {\n        // Your code here\n        return 0;\n    }\n}",
    testCases: [
      { input: [[1, 2, 3, 4]], expected: 10 },
      { input: [[]], expected: 0 },
      { input: [[5]], expected: 5 }
    ]
  },
  {
    id: 10,
    title: "Square a Number",
    description: "Return the square of a given number.",
    input: "n = 5",
    output: "25",
    hint: "Use n * n or Math.pow(n, 2).",
    difficulty: "beginner",
    starterCode: "public class Solution {\n    public int squareNumber(int n) {\n        // Your code here\n        return 0;\n    }\n}",
    testCases: [
      { input: [5], expected: 25 },
      { input: [0], expected: 0 },
      { input: [-2], expected: 4 }
    ]
  },
  // Continue with remaining challenges...
  {
    id: 11,
    title: "Count Occurrences",
    description: "Count the occurrences of a specific element in an array.",
    input: "nums = {1, 2, 2, 3}, target = 2",
    output: "2",
    hint: "Use a loop or Collections.frequency().",
    difficulty: "beginner",
    starterCode: "public class Solution {\n    public int countOccurrences(int[] nums, int target) {\n        // Your code here\n        return 0;\n    }\n}",
    testCases: [
      { input: [[1, 2, 2, 3], 2], expected: 2 },
      { input: [[1, 1, 1], 1], expected: 3 },
      { input: [[1, 2, 3], 4], expected: 0 }
    ]
  }
  // Add remaining challenges following the same pattern...
];
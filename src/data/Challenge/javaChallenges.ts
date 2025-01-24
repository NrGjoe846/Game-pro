import { Challenge } from '../../types/challenges';

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
  }
];
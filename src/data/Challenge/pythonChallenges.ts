import { Challenge } from '../../types';

export const pythonChallenges: Challenge[] = [
  {
    id: 1,
    title: "Sum of Two Numbers",
    description: "Given two integers a and b, return their sum.",
    input: "a = 5, b = 7",
    output: "12",
    hint: "Use the + operator.",
    difficulty: "beginner",
    starterCode: "def sum_numbers(a, b):\n    # Your code here\n    pass",
    testCases: [
      { input: [5, 7], expected: 12 },
      { input: [3, 2], expected: 5 },
      { input: [-1, 1], expected: 0 }
    ]
  },
  // Add the remaining Python challenges here following the same structure
];
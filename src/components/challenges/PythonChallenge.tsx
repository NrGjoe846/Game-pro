import React, { useState } from 'react';
import { ArrowLeft, Code2, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CodeEditor from '../CodeEditor/CodeEditor';

interface PythonQuestion {
  id: number;
  title: string;
  description: string;
  input: string;
  output: string;
  hint: string;
}

const pythonQuestions: PythonQuestion[] = [
  {
    id: 1,
    title: "Sum of Two Numbers",
    description: "Given two integers a and b, return their sum.",
    input: "a = 5, b = 7",
    output: "12",
    hint: "Use the + operator."
  },
  {
    id: 2,
    title: "Check Even or Odd",
    description: "Check if a given number is even or odd. Return \"Even\" for even numbers and \"Odd\" for odd numbers.",
    input: "n = 4",
    output: "\"Even\"",
    hint: "Use the modulo operator %."
  },
  // Add more questions from your list...
];

const PythonChallenge = () => {
  const [currentQuestion, setCurrentQuestion] = useState<PythonQuestion>(pythonQuestions[0]);
  const [code, setCode] = useState('');
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/python', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      
      // Compare output with expected result
      const success = data.output.trim() === currentQuestion.output.trim();
      setResult({
        success,
        message: success ? 'Correct! Well done!' : 'Incorrect. Try again!'
      });
    } catch (error) {
      setResult({
        success: false,
        message: 'Error executing code. Please try again.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/dashboard"
            className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold mb-2">Python Challenge</h1>
            <p className="text-gray-400">
              Test your Python skills with these coding challenges
            </p>
          </div>
        </div>

        {/* Challenge Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Question Panel */}
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-bold">{currentQuestion.title}</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold mb-2">Problem:</h3>
                <p className="text-gray-300">{currentQuestion.description}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Example:</h3>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-gray-300">Input: {currentQuestion.input}</p>
                  <p className="text-gray-300">Output: {currentQuestion.output}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Hint:</h3>
                <p className="text-gray-300">{currentQuestion.hint}</p>
              </div>
            </div>

            {/* Result Display */}
            {result && (
              <div className={`p-4 rounded-lg ${
                result.success ? 'bg-green-500/20' : 'bg-red-500/20'
              }`}>
                <div className="flex items-center gap-2">
                  {result.success ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                  <span>{result.message}</span>
                </div>
              </div>
            )}
          </div>

          {/* Code Editor */}
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden">
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonChallenge;
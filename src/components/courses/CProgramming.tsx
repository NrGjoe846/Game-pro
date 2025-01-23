import React, { useState } from 'react';
import { Book, Code, Play, CheckCircle, Lock, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Topic {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  locked: boolean;
  subtopics?: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}

interface Phase {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
  expanded?: boolean;
}

const coursePhases: Phase[] = [
  {
    id: 'phase-1',
    title: 'Phase 1: C Basics and Core Concepts',
    description: 'Master the fundamentals of the C programming language and build a strong foundation.',
    topics: [
      {
        id: 'intro',
        title: '1. Introduction to C Programming',
        description: 'Learn about C installation, compiler setup, and write your first program.',
        completed: false,
        locked: false,
        subtopics: [
          { id: 'setup', title: 'Installing C compiler (GCC, Turbo C, Code::Blocks)', completed: false },
          { id: 'env', title: 'Setting up the development environment', completed: false },
          { id: 'first-program', title: 'Writing your first C program', completed: false },
          { id: 'compilation', title: 'Compilation and execution process', completed: false },
          { id: 'structure', title: 'Structure of a C program', completed: false }
        ]
      },
      {
        id: 'data-types',
        title: '2. Data Types and Variables',
        description: 'Understanding C data types, variables, and type modifiers.',
        completed: false,
        locked: true,
        subtopics: [
          { id: 'basic-types', title: 'Basic data types: int, float, char, double', completed: false },
          { id: 'modifiers', title: 'Type modifiers: short, long, signed, unsigned', completed: false },
          { id: 'variables', title: 'Variable declaration and initialization', completed: false },
          { id: 'constants', title: 'Constants and literals', completed: false },
          { id: 'type-conversion', title: 'Type conversions and casting', completed: false }
        ]
      },
      {
        id: 'operators',
        title: '3. Operators and Expressions',
        description: 'Learn about different types of operators in C.',
        completed: false,
        locked: true,
        subtopics: [
          { id: 'arithmetic', title: 'Arithmetic operators: +, -, *, /, %', completed: false },
          { id: 'relational', title: 'Relational operators: ==, !=, >, <, >=, <=', completed: false },
          { id: 'logical', title: 'Logical operators: &&, ||, !', completed: false },
          { id: 'bitwise', title: 'Bitwise operators: &, |, ^, ~, <<, >>', completed: false },
          { id: 'assignment', title: 'Assignment and increment/decrement operators', completed: false }
        ]
      }
    ]
  },
  {
    id: 'phase-2',
    title: 'Phase 2: Working with Data Collections',
    description: 'Learn to manipulate collections of data using arrays, strings, and pointers.',
    topics: [
      {
        id: 'arrays',
        title: '4. Arrays and Strings',
        description: 'Master arrays and string handling in C.',
        completed: false,
        locked: true,
        subtopics: [
          { id: 'array-basics', title: 'Declaring and initializing arrays', completed: false },
          { id: 'multidim', title: 'Multi-dimensional arrays', completed: false },
          { id: 'strings', title: 'String handling functions', completed: false },
          { id: 'string-ops', title: 'String manipulation techniques', completed: false }
        ]
      },
      {
        id: 'pointers',
        title: '5. Pointers',
        description: 'Understanding memory addresses and pointer operations.',
        completed: false,
        locked: true,
        subtopics: [
          { id: 'pointer-basics', title: 'Pointer declaration and initialization', completed: false },
          { id: 'pointer-arithmetic', title: 'Pointer arithmetic', completed: false },
          { id: 'pointer-arrays', title: 'Pointers and arrays', completed: false },
          { id: 'dynamic-memory', title: 'Dynamic memory allocation', completed: false }
        ]
      }
    ]
  },
  {
    id: 'phase-3',
    title: 'Phase 3: Advanced Topics',
    description: 'Explore advanced C programming concepts and real-world applications.',
    topics: [
      {
        id: 'file-handling',
        title: '6. File Handling',
        description: 'Learn to work with files in C.',
        completed: false,
        locked: true,
        subtopics: [
          { id: 'file-ops', title: 'File operations: fopen(), fclose()', completed: false },
          { id: 'file-io', title: 'Reading from and writing to files', completed: false },
          { id: 'binary-files', title: 'Working with binary files', completed: false },
          { id: 'error-handling', title: 'Error handling in file operations', completed: false }
        ]
      }
    ]
  }
];

const CProgramming = () => {
  const [phases, setPhases] = useState(coursePhases.map(phase => ({ ...phase, expanded: false })));

  const togglePhase = (phaseId: string) => {
    setPhases(prevPhases =>
      prevPhases.map(phase => ({
        ...phase,
        expanded: phase.id === phaseId ? !phase.expanded : phase.expanded
      }))
    );
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
            <h1 className="text-3xl font-bold mb-2">C Programming Journey</h1>
            <p className="text-gray-400">
              A comprehensive course covering C programming from basics to advanced concepts
            </p>
          </div>
        </div>

        {/* Course Progress */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Course Progress</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">0% Complete</span>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">0 Topics Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">12 Topics Remaining</span>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="space-y-6">
          {phases.map((phase) => (
            <div key={phase.id} className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative backdrop-blur-xl bg-white/10 rounded-xl border border-white/20 overflow-hidden">
                  {/* Phase Header */}
                  <button
                    onClick={() => togglePhase(phase.id)}
                    className="w-full p-6 text-left hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/20 rounded-lg">
                          <Book className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{phase.title}</h3>
                          <p className="text-gray-400 text-sm">{phase.description}</p>
                        </div>
                      </div>
                      {phase.expanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Phase Content */}
                  {phase.expanded && (
                    <div className="border-t border-white/10">
                      {phase.topics.map((topic) => (
                        <div key={topic.id} className="p-6 border-b border-white/10 last:border-b-0">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <div className={`p-2 rounded-lg ${
                                topic.locked ? 'bg-gray-700/50' : 'bg-blue-500/20'
                              }`}>
                                {topic.locked ? (
                                  <Lock className="w-5 h-5 text-gray-400" />
                                ) : (
                                  <Code className="w-5 h-5 text-blue-400" />
                                )}
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">{topic.title}</h4>
                                {topic.description && (
                                  <p className="text-sm text-gray-400">{topic.description}</p>
                                )}
                              </div>
                            </div>
                            {!topic.locked && (
                              <Link
                                to="/compiler"
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 flex items-center gap-2"
                              >
                                <Play className="w-4 h-4" />
                                <span>Start</span>
                              </Link>
                            )}
                          </div>

                          {/* Subtopics */}
                          {topic.subtopics && (
                            <div className="ml-12 space-y-3">
                              {topic.subtopics.map((subtopic) => (
                                <div
                                  key={subtopic.id}
                                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                                >
                                  <div className="flex items-center gap-3">
                                    {subtopic.completed ? (
                                      <CheckCircle className="w-4 h-4 text-green-400" />
                                    ) : (
                                      <div className="w-4 h-4 rounded-full border border-gray-500" />
                                    )}
                                    <span className="text-sm">{subtopic.title}</span>
                                  </div>
                                  {!topic.locked && !subtopic.completed && (
                                    <Link
                                      to="/compiler"
                                      className="px-3 py-1 text-sm bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-all duration-300"
                                    >
                                      Start
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CProgramming;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pythonChallenges } from '../../data/challenges/pythonChallenges';
import { Challenge, Difficulty } from '../../types/challenges';
import { useChallenges } from '../../hooks/useChallenges';
import CodeEditor from '../CodeEditor/CodeEditor';
import BackButton from '../BackButton';

const PythonChallenge = () => {
  const navigate = useNavigate();
  const { progress, initializeProgress, getDailyChallenges, markChallengeComplete } = useChallenges();
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
  const [code, setCode] = useState('');
  const [showLevelSelection, setShowLevelSelection] = useState(!progress);

  useEffect(() => {
    if (progress?.language === 'python') {
      const challenges = getDailyChallenges();
      if (challenges.length > 0 && !currentChallenge) {
        setCurrentChallenge(challenges[0]);
        setCode(challenges[0].starterCode);
      }
    }
  }, [progress]);

  const handleLevelSelect = (difficulty: Difficulty) => {
    initializeProgress('python', difficulty);
    setShowLevelSelection(false);
  };

  const handleSubmit = async () => {
    if (!currentChallenge) return;

    try {
      const response = await fetch('/api/python', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, testCases: currentChallenge.testCases }),
      });

      const result = await response.json();

      if (result.success) {
        markChallengeComplete(currentChallenge.id);
        const challenges = getDailyChallenges();
        if (challenges.length > 0) {
          setCurrentChallenge(challenges[0]);
          setCode(challenges[0].starterCode);
        } else {
          setCurrentChallenge(null);
        }
      }
    } catch (error) {
      console.error('Error executing code:', error);
    }
  };

  if (showLevelSelection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <BackButton />
          </div>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Level</h1>
            <p className="text-gray-400">Select a difficulty level that matches your Python expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['beginner', 'intermediate', 'advanced'].map((level) => (
              <button
                key={level}
                onClick={() => handleLevelSelect(level as Difficulty)}
                className="group relative backdrop-blur-xl bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2 capitalize">{level}</h3>
                <p className="text-gray-400 mb-4">
                  {level === 'beginner' ? '1 question' : 
                   level === 'intermediate' ? '3 questions' : 
                   '5 questions'} per day
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!currentChallenge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">All Done! 🎉</h2>
          <p className="text-xl mb-8">You've completed all your Python challenges for today.</p>
          <p className="text-gray-400">Come back tomorrow for more challenges!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">{currentChallenge.title}</h2>
            <p className="text-gray-300 mb-6">{currentChallenge.description}</p>
            <div className="bg-black/30 rounded-lg p-4 mb-6">
              <p className="text-gray-300">Input: {currentChallenge.input}</p>
              <p className="text-gray-300">Expected Output: {currentChallenge.output}</p>
            </div>
            <p className="text-sm text-gray-400">Hint: {currentChallenge.hint}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden">
            <CodeEditor
              value={code}
              onChange={setCode}
              onSubmit={handleSubmit}
              language="python"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonChallenge;
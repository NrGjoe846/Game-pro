import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import CodeEditor from '../CodeEditor/CodeEditor';


interface ChallengeState {
  language: string | null;
  level: string | null;
  questionsPerDay: number;
  questionsCompleted: number;
  lastChallengeDate: string | null;
}

const DailyChallenge = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<ChallengeState>({
    language: null,
    level: null,
    questionsPerDay: 0,
    questionsCompleted: 0,
    lastChallengeDate: null
  });

  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    const language = localStorage.getItem('selectedLanguage');
    const level = localStorage.getItem('selectedLevel');
    const questionsPerDay = parseInt(localStorage.getItem('questionsPerDay') || '0');
    const questionsCompleted = parseInt(localStorage.getItem('questionsCompleted') || '0');
    const lastChallengeDate = localStorage.getItem('lastChallengeDate');

    if (!language || !level) {
      navigate('/challenges/language-select');
      return;
    }

    // Reset progress if it's a new day
    const today = new Date().toISOString().split('T')[0];
    if (lastChallengeDate !== today) {
      localStorage.setItem('questionsCompleted', '0');
      localStorage.setItem('lastChallengeDate', today);
      setState({
        language,
        level,
        questionsPerDay,
        questionsCompleted: 0,
        lastChallengeDate: today
      });
    } else {
      setState({
        language,
        level,
        questionsPerDay,
        questionsCompleted,
        lastChallengeDate
      });
    }
  }, [navigate]);

  const handleSubmission = (success: boolean) => {
    if (success) {
      const newCompleted = state.questionsCompleted + 1;
      localStorage.setItem('questionsCompleted', newCompleted.toString());
      setState(prev => ({ ...prev, questionsCompleted: newCompleted }));

      if (newCompleted >= state.questionsPerDay) {
        setShowCompletion(true);
      }
    }
  };

  if (showCompletion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">
              Great job! You've completed all your challenges for today!
            </h1>
            <p className="text-gray-400">
              Come back tomorrow for more challenges to keep improving your skills.
            </p>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-xs mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span className="text-sm mt-2">Language</span>
            </div>
            <div className="flex-1 h-1 bg-green-500 mx-2" />
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span className="text-sm mt-2">Level</span>
            </div>
            <div className="flex-1 h-1 bg-blue-500 mx-2" />
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                3
              </div>
              <span className="text-sm mt-2">Challenge</span>
            </div>
          </div>
        </div>

        {/* Challenge Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Daily Challenge</h1>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="text-blue-400 font-medium">
                  {state.questionsCompleted} / {state.questionsPerDay} Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="grid grid-cols-1 gap-8">
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
            <CodeEditor onSubmit={handleSubmission} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyChallenge;
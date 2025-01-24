import React from 'react';
import { BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ChallengeCategories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Daily Challenge</h1>
          <p className="text-gray-400">
            Choose a challenge category to test your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
            <Link
              to="/challenges/language-select"
              className="relative block backdrop-blur-xl bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                <BarChart className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Stat Challenge</h3>
              <p className="text-gray-400 text-sm mb-4">
                Test your programming skills with statistical challenges
              </p>
              <div className="flex items-center justify-end text-blue-400">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>

          {/* Placeholder for future categories */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative opacity-50 cursor-not-allowed"
          >
            <div className="relative backdrop-blur-xl bg-white/10 p-6 rounded-xl border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-medium">Coming Soon</span>
              </div>
              <div className="opacity-50 blur-sm">
                <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                  <BarChart className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Future Category</h3>
                <p className="text-gray-400 text-sm mb-4">
                  More challenges coming soon
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCategories;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../utils/api';

const ProgressPage = () => {
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/progress')
      .then(res => {
        if (res.data.success) {
          setProgressData(res.data.progress);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!progressData) return <div className="text-center py-20">Error loading progress.</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Entrepreneurial Journey</h1>
          <p className="text-xl text-gray-600">
            Track your milestones from idea to execution.
          </p>
        </div>

        {/* Progress Bar Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Overall Completion</h2>
              <p className="text-sm text-gray-500">Keep completing milestones to reach 100%</p>
            </div>
            <div className="text-3xl font-bold text-primary-600">{progressData.completionPercentage}%</div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-4 mb-2">
            <div 
              className="bg-primary-600 h-4 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${progressData.completionPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Milestones</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {progressData.milestones.map((milestone, index) => {
              const isCompleted = milestone.status === 'completed';
              return (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${
                    isCompleted ? 'bg-primary-500 border-primary-200' : 'bg-gray-200 border-gray-100'
                  }`}>
                    {isCompleted ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <span className="text-gray-500 font-medium text-sm">{index + 1}</span>
                    )}
                  </div>
                  
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border shadow-sm ${
                    isCompleted ? 'bg-white border-primary-100' : 'bg-gray-50 border-gray-100'
                  }`}>
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className={`font-bold ${isCompleted ? 'text-gray-900' : 'text-gray-500'}`}>{milestone.title}</div>
                      <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                        isCompleted ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {isCompleted ? 'Done' : 'Pending'}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;

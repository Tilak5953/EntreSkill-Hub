import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import { Link } from 'react-router-dom';

const MentorPage = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    api.get('/mentors')
      .then((res) => {
        if (res.data.success) {
          setMentors(res.data.mentors);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const categories = ['All', ...new Set(mentors.flatMap((m) => m.expertise))].sort();
  const filteredMentors = filter === 'All' ? mentors : mentors.filter((m) => m.expertise.includes(filter));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-indigo-950 pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 dot-grid-white" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-primary-200 text-sm font-semibold tracking-wide mb-5 shadow-lg backdrop-blur-md">
            Expert Guidance
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 tracking-tight">
            Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-violet-400">Top Mentors</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get exclusive 1-on-1 guidance from Y-Combinator alumni, ex-Flipkart executives, and domain specialists who have successfully built what you are trying to build.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
        {/* Filter Section */}
        <div className="bg-white/80 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-xl flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-primary-600 to-violet-600 text-white shadow-md shadow-primary-500/30 scale-105'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map((mentor, index) => (
              <div 
                key={mentor._id} 
                className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Mentor Card Header */}
                <div className="relative h-32 bg-gradient-to-br from-primary-100 to-violet-100 overflow-hidden">
                  <div className="absolute inset-0 opacity-50 dot-grid" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm flex items-center gap-1">
                    <span className="text-yellow-500 text-sm">★</span> {mentor.rating}
                  </div>
                </div>

                <div className="px-6 pb-6 flex-1 flex flex-col relative">
                  {/* Profile Image (Overlapping) */}
                  <div className="-mt-12 mb-4 flex justify-between items-end">
                    <img 
                      src={mentor.imageUrl} 
                      alt={mentor.name} 
                      className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-lg bg-white"
                      loading="lazy"
                    />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      {mentor.experienceYears} Yrs Exp
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display font-extrabold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary-600 mb-1">{mentor.title}</p>
                    <p className="text-xs font-medium text-gray-500 mb-4 flex items-center gap-1">
                      <span className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center text-[10px]">🏢</span>
                      {mentor.company}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    "{mentor.bio}"
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {mentor.expertise.map((exp, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 font-medium text-xs rounded-lg group-hover:border-primary-100 group-hover:bg-primary-50 transition-colors">
                        {exp}
                      </span>
                    ))}
                  </div>

                  <button className="w-full relative overflow-hidden bg-gray-900 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-violet-600 hover:shadow-lg hover:shadow-primary-500/30">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Request Mentorship Session
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorPage;

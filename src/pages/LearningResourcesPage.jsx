import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const LearningResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  useEffect(() => {
    api.get('/learning')
      .then((res) => {
        if (res.data.success) {
          setResources(res.data.resources);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const categories = ['All', ...new Set(resources.map((r) => r.category))].sort();
  const types = ['All', 'Article', 'Video', 'Course'];

  const filteredResources = resources.filter((r) => {
    const matchCategory = categoryFilter === 'All' || r.category === categoryFilter;
    const matchType = typeFilter === 'All' || r.type === typeFilter;
    return matchCategory && matchType;
  });

  const getTypeIcon = (type) => {
    switch(type) {
      case 'Video': return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      );
      case 'Course': return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
      );
      default: return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
      );
    }
  };

  const getDifficultyColor = (diff) => {
    if (diff === 'Beginner') return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    if (diff === 'Intermediate') return 'bg-amber-100 text-amber-700 border-amber-200';
    return 'bg-rose-100 text-rose-700 border-rose-200';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Hero Section */}
      <div className="bg-gradient-to-br from-primary-900 to-violet-950 pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dot-grid-white" />
        <div className="absolute -right-32 top-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-primary-200 text-sm font-bold tracking-wide mb-6 backdrop-blur-md">
              Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
              Master the Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-300">Entrepreneurship</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Access premium masterclasses, real-world case studies, and official government MSME schemes curated specifically for Indian founders.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">
        {/* Modern Filters */}
        <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex items-center space-x-3 w-full sm:w-auto bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Topic:</span>
              <select 
                value={categoryFilter} 
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-gray-900 font-semibold cursor-pointer py-1"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
          </div>
          
          <div className="flex bg-gray-100 p-1.5 rounded-xl w-full md:w-auto">
            {types.map(t => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`flex-1 md:flex-none px-6 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
                  typeFilter === t 
                    ? 'bg-white text-primary-600 shadow-md transform scale-[1.02]' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <a 
                href={resource.link} 
                target="_blank" 
                rel="noreferrer"
                key={resource._id} 
                className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-500 flex flex-col h-full overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-primary-100 text-primary-700">
                      {resource.category}
                    </span>
                    <div className="flex items-center space-x-1.5 text-gray-500 bg-gray-100 px-3 py-1 rounded-lg">
                      {getTypeIcon(resource.type)}
                      <span className="text-xs font-bold">{resource.type}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors leading-tight">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                    {resource.description}
                  </p>

                  {/* Footer details */}
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100 group-hover:border-primary-200/50 transition-colors">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold text-gray-500 flex items-center gap-1.5">
                        ⏱ {resource.readTime}
                      </span>
                      
                      <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white transform group-hover:bg-primary-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningResourcesPage;

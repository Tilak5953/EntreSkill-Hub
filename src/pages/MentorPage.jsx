import React, { useState, useEffect } from 'react';
import api from '../utils/api';

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Connect with Mentors</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get 1-on-1 guidance from industry experts, successful founders, and domain specialists.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                filter === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map((mentor) => (
              <div key={mentor._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={mentor.imageUrl} alt={mentor.name} className="w-16 h-16 rounded-full bg-gray-100" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{mentor.name}</h3>
                      <p className="text-sm text-gray-500">{mentor.title}</p>
                      <p className="text-xs font-medium text-primary-600">{mentor.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4 text-sm">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-gray-700">{mentor.rating}</span>
                    <span className="text-gray-400">({mentor.reviews} reviews)</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-600">{mentor.experienceYears} yrs exp</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{mentor.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {mentor.expertise.slice(0, 3).map((exp, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {exp}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Request Session
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

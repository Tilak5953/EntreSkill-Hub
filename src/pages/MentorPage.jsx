import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import { Link } from 'react-router-dom';

const MentorPage = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  
  // Monetization State
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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

  const handleBookSession = (mentor) => {
    setSelectedMentor(mentor);
    setPaymentSuccess(false);
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    // Simulate network delay for payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      
      // Auto-close after success
      setTimeout(() => {
        setSelectedMentor(null);
        setPaymentSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Checkout Modal Overlay */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => !isProcessing && setSelectedMentor(null)}
          ></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-gray-900 to-indigo-900 p-6 text-white text-center">
              <h2 className="text-2xl font-bold font-display tracking-tight mb-1">Complete Booking</h2>
              <p className="text-gray-300 text-sm">Secure checkout simulation</p>
            </div>
            
            <div className="p-6">
              {paymentSuccess ? (
                <div className="py-10 text-center animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                  <p className="text-gray-600">Your session with {selectedMentor.name} is booked.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                    <img src={selectedMentor.imageUrl} alt={selectedMentor.name} className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{selectedMentor.name}</h3>
                      <p className="text-sm text-gray-500">{selectedMentor.title} @ {selectedMentor.company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">1-on-1 Strategy Session (60 mins)</span>
                      <span className="font-semibold">₹{selectedMentor.priceSession || 999}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Platform Fee</span>
                      <span className="font-semibold">₹{(selectedMentor.priceSession || 999) * 0.05}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-4 border-t border-gray-100">
                      <span>Total Amount</span>
                      <span className="text-primary-600">₹{(selectedMentor.priceSession || 999) * 1.05}</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleSimulatePayment}
                    disabled={isProcessing}
                    className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 flex justify-center items-center gap-2 ${
                      isProcessing 
                        ? 'bg-primary-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-primary-600 to-violet-600 hover:shadow-lg hover:shadow-primary-500/40 hover:-translate-y-1'
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      `Pay ₹${(selectedMentor.priceSession || 999) * 1.05}`
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    Simulated Secure Payment
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

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
                  
                  {/* Price Tag Badge */}
                  <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-white shadow-sm flex items-center gap-1 border border-gray-700">
                    <span className="text-green-400">₹</span> {mentor.priceSession || 999} <span className="text-xs font-normal text-gray-300">/ session</span>
                  </div>

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

                  <button 
                    onClick={() => handleBookSession(mentor)}
                    className="w-full relative overflow-hidden bg-gray-900 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-violet-600 hover:shadow-lg hover:shadow-primary-500/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Book Session • ₹{mentor.priceSession || 999}
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

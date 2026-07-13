import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { Star } from 'lucide-react';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0,
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating === 0) {
      toast.error('Please select a star rating');
      return;
    }

    setIsSubmitting(true);
    try {
      await api.post('/feedback', formData);
      toast.success('Thank you for your feedback! 🎉');
      setFormData({ name: '', email: '', message: '', rating: 0 });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-glow-lg border border-gray-100 p-8 sm:p-12 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-gradient-to-br from-primary-100 to-violet-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-gradient-to-tr from-emerald-100 to-primary-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

          <div className="relative z-10 text-center mb-10">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We value your <span className="gradient-text">Feedback</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
              Help us improve EntreSkill Hub. Let us know what you love or what we can do better!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <label className="text-sm font-semibold text-gray-700 text-center block">How would you rate your experience?</label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 focus:outline-none transition-transform hover:scale-110 active:scale-95"
                  >
                    <Star
                      className={`w-10 h-10 transition-colors duration-200 ${
                        star <= (hoverRating || formData.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Your Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input-field resize-none"
                placeholder="Share your thoughts, suggestions, or issues..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-3.5 text-base shadow-lg hover:shadow-primary-500/25 mt-4"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

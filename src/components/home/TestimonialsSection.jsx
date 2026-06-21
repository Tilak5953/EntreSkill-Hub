const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Priya Sharma',
    role: 'Fashion Designer → Boutique Owner',
    avatar: '👩‍🎨',
    rating: 5,
    text: "EntreSkill Hub transformed my passion for fashion into a profitable boutique. The roadmap was incredibly detailed and the mentor I was paired with had 15 years of retail experience.",
    business: "Priya's Creations",
    revenue: '₹2.4L/month',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'testimonial-2',
    name: 'Rahul Mehta',
    role: 'Software Developer → SaaS Founder',
    avatar: '👨‍💻',
    rating: 5,
    text: "I always knew I wanted to build my own product. EntreSkill Hub gave me the business acumen I was missing. From idea validation to product launch in 4 months!",
    business: 'DevTrack Pro',
    revenue: '$8K MRR',
    color: 'from-primary-500 to-violet-500',
  },
  {
    id: 'testimonial-3',
    name: 'Ananya Krishnan',
    role: 'Home Cook → Cloud Kitchen CEO',
    avatar: '👩‍🍳',
    rating: 5,
    text: "The business recommendation feature was spot on! It suggested a cloud kitchen business and now I run 3 kitchens across Bangalore. Best decision I ever made.",
    business: "Ananya's Kitchen",
    revenue: '₹8.5L/month',
    color: 'from-emerald-500 to-teal-500',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag mb-4">Success Stories</span>
          <h2 className="section-title mb-4">
            Real People,{' '}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="section-subtitle">
            Thousands of entrepreneurs have transformed their skills into thriving businesses.
            Here are just a few of their stories.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              id={t.id}
              className="card p-8 group flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-6 opacity-80`}>
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Business result badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${t.color} text-white text-xs font-semibold mb-6 self-start`}>
                <span>💰</span>
                <span>{t.revenue}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-2xl shadow`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                  <div className={`text-xs font-medium mt-0.5 bg-gradient-to-r ${t.color} bg-clip-text text-transparent`}>
                    {t.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

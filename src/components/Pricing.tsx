import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'STANDARD PLAN',
    price: '₹25,000',
    period: '/ month',
    desc: 'Best for small creators.',
    features: [
      '10 reels per month',
      'Basic audience review',
      'Caption suggestions',
      'Basic hook strategy',
      'Editing + subtitles',
    ],
    popular: false,
    subject: 'Standard Plan Inquiry'
  },
  {
    name: 'GROWTH PLAN',
    price: '₹45,000',
    period: '/ month',
    desc: 'Best for creators scaling.',
    features: [
      '15–20 reels per month',
      'Content research',
      'Content writing',
      'Content strategy',
      'Profile optimization tips',
      'Trend analysis',
      'Optional small landing page',
    ],
    popular: true,
    subject: 'Growth Plan Inquiry'
  },
  {
    name: 'PRO / BUSINESS PLAN',
    price: '₹70,000',
    period: '/ month',
    desc: 'Best for startups & brands.',
    features: [
      '30–35 reels per month',
      'Full content strategy',
      'Brand identity creation',
      'Instagram redesign',
      'Logo design',
      'Product landing page',
      'Daily analytics review',
      'Startup content roadmap',
    ],
    popular: false,
    subject: 'Pro Plan Inquiry'
  },
];

export default function Pricing() {
  return (
    <section id="plans" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Content Growth Plans
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col ${
                plan.popular ? 'border-brand-orange/50 neon-glow lg:scale-105 z-10' : 'border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 orange-gradient rounded-full text-xs font-bold tracking-widest">
                   MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-sm font-bold tracking-widest text-white/50 mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-display font-bold">{plan.price}</span>
                  <span className="text-white/40">{plan.period}</span>
                </div>
                <p className="mt-2 text-white/50 text-sm">{plan.desc}</p>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-brand-orange" />
                    </div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact"
                className={`w-full py-4 rounded-2xl font-bold transition-all text-center ${
                  plan.popular ? 'orange-gradient neon-glow' : 'glass glass-hover'
                }`}
              >
                CHOOSE PLAN
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

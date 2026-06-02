import { motion } from 'framer-motion';
import { Check, X, Sparkles, Zap, PlayCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Startup Launch Plan',
    price: '₹2,999',
    period: '/ month',
    badge: 'Best For New Startups',
    desc: 'New startups, founders validating an idea, businesses in their initial growth phase.',
    features: [
      { text: '3 Reels per month', included: true },
      { text: '4 Social Media Posts per month', included: true },
      { text: 'Basic Caption Assistance', included: true },
      { text: 'Basic Content Suggestions', included: true },
      { text: 'WhatsApp Support', included: true },
      { text: 'Advanced Branding', included: false },
      { text: 'Content Strategy Sessions', included: false },
      { text: 'Marketing Consultation', included: false },
      { text: 'Priority Support', included: false }
    ],
    icon: <Sparkles className="text-brand-orange" size={24} />,
    popular: false,
    highlight: true
  },
  {
    name: 'Growth Plan',
    price: '₹9,500',
    period: '/ month',
    desc: 'Perfect for creators wanting to establish a high-quality professional presence with consistency.',
    features: [
      { text: '5 viral high-retention reels', included: true },
      { text: '6 branded graphic posts', included: true },
      { text: 'Professional content structuring', included: true },
      { text: 'Social profile optimization', included: true },
      { text: 'Caption and search tag assistance', included: true },
      { text: 'Completed to platform standard sizes', included: true }
    ],
    icon: <Zap className="text-brand-orange" size={24} />,
    popular: true,
    highlight: false
  },
  {
    name: 'Business Scale Plan',
    price: '₹18,500',
    period: '/ month',
    desc: 'Designed for active creators and brands ready to dominate and rapidly scale active reach.',
    features: [
      { text: '10 viral high-retention reels', included: true },
      { text: '12 premium branded posts / designs', included: true },
      { text: 'Advanced storytelling structure', included: true },
      { text: 'Viral hook copywriting strategies', included: true },
      { text: 'Engaged content calendar planning', included: true },
      { text: 'Trend & competitor research mapping', included: true },
      { text: 'Dedicated unlimited draft revisions', included: true },
      { text: 'Comprehensive content design support', included: true }
    ],
    icon: <PlayCircle className="text-brand-orange" size={24} />,
    popular: false,
    highlight: false
  }
];

export default function PlansPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 lg:pt-32 pb-12 lg:pb-24 min-h-screen bg-brand-black relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-orange/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Page Header and Intro Description */}
        <div className="text-center mb-8 lg:mb-16 max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 shadow-[0_0_25px_rgba(255,106,0,0.15)] mb-4 lg:mb-6"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">
              Highly Recommended Subscriptions
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-3 lg:mb-6 tracking-tight"
          >
            Monthly <span className="text-brand-orange text-gradient">Content Plans</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-sm lg:text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto"
          >
            Looking for ongoing content and social media support? Choose a monthly plan designed for consistent growth.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible gap-4 lg:gap-8 max-w-6xl mx-auto relative z-10 mb-16 lg:mb-28 snap-x snap-mandatory pb-6 lg:pb-0 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-md:-mx-4 max-md:px-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-brand-black/60 backdrop-blur-2xl p-4 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] flex flex-col group border transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,106,0,0.15)] flex-shrink-0 w-[285px] lg:w-auto snap-center ${
                pkg.popular 
                  ? 'border-brand-orange/60 neon-glow shadow-[0_0_45px_rgba(255,106,0,0.15)] lg:scale-105' 
                  : pkg.highlight
                    ? 'border-brand-orange/30 shadow-[0_0_30px_rgba(255,106,0,0.05)] border-dashed'
                    : 'border-white/10 hover:border-brand-orange/40 hover:bg-brand-black/80'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 orange-gradient rounded-full text-[8px] sm:text-[10px] font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(255,106,0,0.4)] whitespace-nowrap text-white">
                  MOST POPULAR & HIGHEST ROI
                </div>
              )}

              {pkg.highlight && pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded-full text-[8px] sm:text-[10px] font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(234,179,8,0.15)] whitespace-nowrap">
                  {pkg.badge}
                </div>
              )}
              
              <div className="mb-4 sm:mb-8 flex justify-between items-start pt-2">
                <div>
                  <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white/40 mb-1 lg:mb-3 uppercase text-left">{pkg.name}</h3>
                  <div className="flex flex-wrap items-baseline gap-1">
                    <span className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white group-hover:text-brand-orange transition-colors">
                      {pkg.price}
                    </span>
                    <span className="text-white/40 text-xs sm:text-lg">{pkg.period}</span>
                  </div>
                </div>
                <div className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl ${pkg.popular || pkg.highlight ? 'bg-brand-orange/20 shadow-[0_0_15px_rgba(255,106,0,0.2)]' : 'bg-brand-orange/5'} group-hover:scale-110 transition-all duration-300 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6`}>
                  {pkg.icon}
                </div>
              </div>

              <p className="text-[11px] sm:text-sm text-white/50 mb-4 sm:mb-8 leading-relaxed text-left line-clamp-2 lg:line-clamp-none">
                {pkg.desc}
              </p>

              <div className="flex-grow space-y-2 sm:space-y-4 mb-6 sm:mb-10 lg:border-t border-white/5 pt-4 sm:pt-6">
                <p className="text-[9px] sm:text-[10px] font-bold text-brand-orange uppercase tracking-widest mb-2 sm:mb-4 text-left">INCLUDED DELIVERABLES:</p>
                {pkg.features.map((feature, j) => {
                  const isFeatureObj = typeof feature === 'object';
                  const isIncluded = isFeatureObj ? (feature as any).included : true;
                  const text = isFeatureObj ? (feature as any).text : feature;

                  return (
                    <div key={j} className={`flex items-start gap-2 sm:gap-3 group/item ${!isIncluded ? 'opacity-35 line-through decoration-white/20' : ''}`}>
                      <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${isIncluded ? 'bg-brand-orange/15' : 'bg-white/5'}`}>
                        {isIncluded ? (
                          <Check size={9} className="text-brand-orange w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        ) : (
                          <X size={9} className="text-white/40 w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        )}
                      </div>
                      <span className={`text-[11px] sm:text-sm group-hover/item:text-white transition-colors line-clamp-1 sm:line-clamp-none text-left ${isIncluded ? 'text-white/80' : 'text-white/40'}`}>
                        {text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/contact#instagram-contact"
                className={`w-full py-4.5 rounded-2xl font-bold text-center tracking-wider text-base uppercase transition-all duration-300 active:scale-95 flex items-center justify-center ${
                  pkg.popular 
                    ? 'orange-gradient text-white shadow-[0_0_30px_rgba(255,106,0,0.35)] hover:shadow-[0_0_40px_rgba(255,106,0,0.6)] hover:scale-[1.02]' 
                    : pkg.highlight
                      ? 'bg-yellow-500/10 hover:bg-yellow-500/15 border border-yellow-500/30 text-yellow-500 hover:scale-[1.01] shadow-[0_0_20px_rgba(234,179,8,0.1)]'
                      : 'glass glass-hover border border-white/10 text-white/90 hover:border-brand-orange/50 hover:text-white'
                }`}
              >
                START GROWING NOW
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Highly Visible Conversion Section at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-16 md:p-20 rounded-[2.5rem] sm:rounded-[4rem] glass neon-border text-center relative overflow-hidden shadow-2xl max-w-5xl mx-auto border border-brand-orange/15 shadow-[0_0_50px_rgba(255,106,0,0.05)]"
        >
          {/* Internal gradient orange splash */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/10 blur-[130px] rounded-full -z-10" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-white leading-[1.25]">
            Not ready for <br className="hidden sm:inline" /> a <span className="text-brand-orange">monthly subscription?</span>
          </h2>
          
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            Start with a single reel, graphic, or creative project and experience our workflow before committing to a monthly plan.
          </p>

          <div className="flex justify-center px-4">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 rounded-2xl orange-gradient font-bold text-base sm:text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,106,0,0.35)] active:scale-95 group text-white-90 hover:text-white"
            >
              Explore Individual Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

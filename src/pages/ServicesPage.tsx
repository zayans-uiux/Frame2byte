import { motion } from 'framer-motion';
import { Video, Instagram, Sparkles, Layout, PlayCircle, Check, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const individualServices = [
  {
    title: 'Startup Landing Page',
    price: '₹2,499',
    unit: 'one-time design',
    icon: <Globe className="text-brand-orange" size={28} />,
    desc: 'A modern one-page website designed for startups, personal brands, and small businesses that need a professional online presence without investing in a full website.',
    points: [
      'Mobile Responsive Design',
      'Hero Section',
      'About Section',
      'Services Section',
      'Contact / Call-to-Action Section',
      'Modern Animations',
      'Fast Loading Design',
      'Basic SEO Structure'
    ],
    highlight: true,
    badge: 'Recommended for Startups',
    ctaText: 'Get Your Landing Page'
  },
  {
    title: 'Reel Editing',
    price: '₹600',
    unit: 'starting price',
    icon: <Video className="text-brand-orange" size={28} />,
    desc: 'High-retention video editing designed for maximum virality and viewer retention.',
    points: ['Subtitles & Captions', 'Motion Graphics / VFX', 'Sound FX & Matching Tracks', 'Cinematic Color Grading', 'Hook Optimization', 'Custom Templates']
  },
  {
    title: 'Graphic Design',
    price: '₹500',
    unit: 'starting price',
    icon: <Instagram className="text-brand-orange" size={28} />,
    desc: 'Bespoke design creatives crafted to match and elevate your social visual style.',
    points: ['Branded Visuals', 'Single Post Creatives', 'Grid Design Consistency', 'High-Res Deliverables', 'Commercial Use License']
  },
  {
    title: 'AI Poster Design',
    price: '₹1,200',
    unit: 'starting price',
    icon: <Sparkles className="text-brand-orange" size={28} />,
    desc: 'Cutting-edge AI-synthesized graphics and posters tailored for your campaigns.',
    points: ['AI Concept Synthesis', 'Custom Composites', 'Upscaled High Definition', 'Creative Brand Themes', 'Fast Turnaround']
  },
  {
    title: 'Branding Assets',
    price: '₹2,500',
    unit: 'starting price',
    icon: <Layout className="text-brand-orange" size={28} />,
    desc: 'Platform-optimized assets packs to scale your identity across the web consistency.',
    points: ['Brand Banner Graphics', 'Intro / Outro Elements', 'Video Frame Overlays', 'Optimized Profile Layouts', 'Brand Color Presets']
  },
  {
    title: 'Custom Creative Work',
    price: 'Contact Us',
    unit: 'custom pricing',
    icon: <PlayCircle className="text-brand-orange" size={28} />,
    desc: 'Individually scope-tailored premium visual projects, cinematic VFX, or unique campaign launches.',
    points: ['Advanced 3D/VFX Layouts', 'Full storyboard mapping', 'Strategic Campaign Assets', 'Priority Studio Delivery', 'Premium Custom Assets']
  }
];

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 md:pt-32 pb-12 md:pb-24 min-h-screen bg-brand-black relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-orange/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-orange/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="text-center mb-10 md:mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
          >
            Standalone Services
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
          >
            Individual <span className="text-brand-orange">Creative Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg leading-relaxed font-normal"
          >
            Need a single viral edit, premium campaign banner, or customized launch assets? Select a standalone service tailored exactly for your current goals.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 md:gap-8 max-w-6xl mx-auto mb-16 md:mb-28 snap-x snap-mandatory pb-6 md:pb-0 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-md:-mx-4 max-md:px-4">
          {individualServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, borderColor: service.highlight ? 'rgba(255,106,0,0.6)' : 'rgba(255,106,0,0.3)' }}
              className={`p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border relative group transition-all duration-300 flex flex-col h-auto flex-shrink-0 w-[285px] md:w-auto snap-center ${
                service.highlight 
                  ? 'border-brand-orange/50 neon-glow shadow-[0_0_35px_rgba(255,106,0,0.12)] bg-brand-black/70' 
                  : 'glass border-white/5 bg-brand-black/40 hover:bg-white/[0.02]'
              }`}
            >
              {service.highlight && service.badge && (
                <div className="absolute -top-3 left-6 sm:left-8 px-3 py-0.5 sm:px-4 sm:py-1 bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded-full text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(234,179,8,0.15)] whitespace-nowrap">
                  ✨ {service.badge}
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-6 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-7 sm:[&>svg]:h-7 ${
                  service.highlight ? 'bg-brand-orange/20 shadow-[0_0_20px_rgba(255,106,0,0.2)]' : 'bg-brand-orange/10 shadow-[0_0_15px_rgba(255,106,0,0.1)]'
                }`}>
                  {service.icon}
                </div>
                
                <h3 className="text-lg sm:text-2xl font-display font-bold mb-1.5 sm:mb-3 text-white group-hover:text-brand-orange transition-colors uppercase tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-white/50 mb-4 sm:mb-6 leading-relaxed flex-grow line-clamp-3 sm:line-clamp-none">
                  {service.desc}
                </p>

                <div className="border-t border-white/5 pt-3 sm:pt-5 mb-4 sm:mb-8">
                  <p className="text-[9px] sm:text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 sm:mb-4">WHAT IS INCLUDED:</p>
                  <div className="space-y-1.5 sm:space-y-3">
                    {service.points.map((point, j) => (
                      <div key={j} className="flex items-center gap-2 sm:gap-3">
                        <Check size={12} className="text-brand-orange/85 flex-shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span className="text-[11px] sm:text-sm text-white/70 line-clamp-1 sm:line-clamp-none">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-baseline gap-1.5 mb-4 sm:mb-6 border-t border-white/5 pt-3 sm:pt-5">
                    <span className="text-2xl sm:text-3xl font-display font-bold text-brand-orange drop-shadow-[0_0_10px_rgba(255,106,0,0.2)]">
                      {service.price}
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/40 font-medium">
                      {service.unit}
                    </span>
                  </div>

                  <Link
                    to="/contact#instagram-contact"
                    className={`w-full py-2.5 sm:py-3.5 px-3 sm:px-4 rounded-xl text-center font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all block ${
                      service.highlight
                        ? 'orange-gradient text-white shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] hover:scale-[1.01]'
                        : 'border border-white/10 text-white/85 hover:text-white hover:border-brand-orange/40 hover:bg-brand-orange/5 font-medium'
                    }`}
                  >
                    {service.ctaText || 'Inquire Standalone Project'}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highly Visible Conversion Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-16 md:p-20 rounded-[2.5rem] sm:rounded-[4rem] glass neon-border text-center relative overflow-hidden shadow-2xl max-w-5xl mx-auto border border-brand-orange/15 shadow-[0_0_50px_rgba(255,106,0,0.05)]"
        >
          {/* Internal gradient orange splash */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/10 blur-[130px] rounded-full -z-10" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-white leading-[1.25]">
            Need consistent content <br className="hidden sm:inline" /> <span className="text-brand-orange">every month?</span>
          </h2>
          
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            If you're looking for ongoing content creation and social media support, a monthly subscription plan may be more cost-effective than purchasing individual services separately.
          </p>

          <div className="flex justify-center px-4">
            <Link 
              to="/plans" 
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 rounded-2xl orange-gradient font-bold text-base sm:text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,106,0,0.35)] active:scale-95 group text-white"
            >
              View Monthly Plans
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

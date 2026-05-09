import { motion } from 'framer-motion';
import { Check, Video, Instagram, Sparkles, Zap, Layout, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const individualServices = [
  {
    title: 'REEL EDITING',
    price: '₹600 – ₹2000',
    unit: 'per reel',
    icon: <Video className="text-brand-orange" size={32} />,
    desc: 'Pricing depends on:',
    points: ['subtitles', 'motion graphics', 'sound design', 'cinematic editing', 'hooks', 'complexity-based pricing']
  },
  {
    title: 'POST & DESIGN CREATION',
    price: '₹500 – ₹1500',
    unit: 'per post',
    icon: <Instagram className="text-brand-orange" size={32} />,
    desc: 'Pricing depends on:',
    points: ['graphic design', 'branded visuals', 'social media creatives', 'deadline-based pricing', 'software/tool complexity']
  },
  {
    title: 'CAROUSEL POST DESIGNING',
    price: '₹900 – ₹3000',
    unit: 'per carousel',
    icon: <Layout className="text-brand-orange" size={32} />,
    desc: 'Pricing depends on:',
    points: ['storytelling slides', 'slide continuity', 'detailed structure', 'design consistency', 'template complexity', 'deadline'],
    note: 'Pricing may vary depending on the number of carousel slides required.'
  },
  {
    title: 'HIGH-END MOTION GRAPHIC PRODUCT REEL',
    price: '₹1000 – ₹6000',
    unit: 'per reel',
    icon: <PlayCircle className="text-brand-orange" size={32} />,
    desc: 'Pricing depends on:',
    points: ['product shoots', 'high-end editing', 'advanced motion graphics', 'AI enhancements', 'visual storytelling', 'premium software effects']
  }
];

const packages = [
  {
    name: 'STARTER PACKAGE',
    price: '₹9,500',
    period: '/ month',
    features: [
      '5 reels',
      '6 branded posts',
      'content structuring',
      'profile optimization',
      'caption assistance',
    ],
    icon: <Sparkles className="text-brand-orange" size={24} />,
    popular: false
  },
  {
    name: 'GROWTH PACKAGE',
    price: '₹18,500',
    period: '/ month',
    features: [
      '10 reels',
      '12 branded posts',
      'advanced content optimization',
      'hook writing',
      'content writing assistance',
      'content calendar planning',
      'unlimited revisions',
      'trend & content research',
    ],
    icon: <Zap className="text-brand-orange" size={24} />,
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="plans" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Individual Service Pricing */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Individual <span className="text-brand-orange">Service Pricing</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {individualServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass p-8 md:p-10 rounded-[2.5rem] border-white/10 relative group hover:border-brand-orange/50 transition-all duration-700 flex flex-col h-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:shadow-brand-orange/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,106,0,0.2)] group-hover:shadow-brand-orange/40">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-brand-orange transition-colors uppercase tracking-tight">{service.title}</h3>
                  <div className="flex items-baseline gap-2 mb-6 text-white/50 group-hover:text-white transition-colors">
                    <span className="text-3xl font-display font-bold text-brand-orange drop-shadow-[0_0_10px_rgba(255,106,0,0.3)]">{service.price}</span>
                    <span className="text-sm font-medium">{service.unit}</span>
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <p className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-4">{service.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.points.map((point, j) => (
                          <span key={j} className="px-3 py-1.5 rounded-full bg-white/5 text-[10px] md:text-xs text-white/60 border border-white/10 group-hover:border-brand-orange/30 group-hover:bg-brand-orange/10 transition-all duration-500">
                            • {point}
                          </span>
                        ))}
                      </div>
                    </div>
                    {service.note && (
                      <p className="text-xs text-brand-orange/80 italic mt-6 font-medium bg-brand-orange/5 p-3 rounded-xl border border-brand-orange/10">
                        “{service.note}”
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Monthly Packages */}
        <div>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              MONTHLY <span className="text-brand-orange">CONTENT PACKAGES</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 text-lg max-w-2xl mx-auto"
            >
              Structured content solutions for creators, personal brands, and businesses.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass p-8 md:p-12 rounded-[3rem] flex flex-col group border-white/5 hover:border-brand-orange/50 transition-all duration-500 ${
                  pkg.popular ? 'neon-glow shadow-[0_0_40px_rgba(255,106,0,0.05)]' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 orange-gradient rounded-full text-[10px] font-bold tracking-[0.2em] shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="mb-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold tracking-[0.2em] text-white/40 mb-4 uppercase">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-display font-bold">{pkg.price}</span>
                      <span className="text-white/40 text-lg">{pkg.period}</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-brand-orange/5 group-hover:bg-brand-orange/10 transition-colors">
                    {pkg.icon}
                  </div>
                </div>

                <div className="flex-grow space-y-4 mb-12">
                  {pkg.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-4 group/item">
                      <div className="w-6 h-6 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <Check size={14} className="text-brand-orange" />
                      </div>
                      <span className="text-white/70 text-sm md:text-base group-hover/item:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact#instagram-contact"
                  className={`w-full py-5 rounded-[1.5rem] font-bold text-center transition-all duration-500 active:scale-95 ${
                    pkg.popular 
                      ? 'orange-gradient shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_30px_rgba(255,106,0,0.5)]' 
                      : 'glass glass-hover border-white/10 hover:border-brand-orange/50'
                  }`}
                >
                  PURCHASE THIS PLAN
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

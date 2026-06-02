import { motion } from 'framer-motion';
import { Video, Target, Palette, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <Video className="text-brand-orange" size={28} />,
    title: 'Short Form Editing',
    desc: 'High retention reels and YouTube shorts designed to go viral.',
  },
  {
    icon: <Target className="text-brand-orange" size={28} />,
    title: 'Content Strategy',
    desc: 'Planning viral content formats and strategic hooks for your niche.',
  },
  {
    icon: <Palette className="text-brand-orange" size={28} />,
    title: 'Visual Branding',
    desc: 'Graphics, posters, and social media visuals that define your brand.',
  },
  {
    icon: <TrendingUp className="text-brand-orange" size={28} />,
    title: 'Content Optimization',
    desc: 'Improving creator profiles and feeds for maximum conversion.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-24 relative bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            What We Do
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover p-5 md:p-8 rounded-[1.5rem] md:rounded-3xl border-white/5 group"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-[28px] md:[&>svg]:h-[28px]">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">{service.title}</h3>
              <p className="text-xs md:text-sm text-white/50 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

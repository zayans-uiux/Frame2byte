import { motion } from 'framer-motion';
import { Users, DollarSign, Clock } from 'lucide-react';

const stats = [
  {
    icon: <Users className="text-brand-orange" size={24} />,
    value: '30+',
    label: 'Clients Served',
  },
  {
    icon: <DollarSign className="text-brand-orange" size={24} />,
    value: '$1200+',
    label: 'Revenue Generated',
  },
  {
    icon: <Clock className="text-brand-orange" size={24} />,
    value: '1.5+',
    label: 'Years Experience',
  },
];

export default function SocialProof() {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-2">
                {stat.icon}
              </div>
              <div className="text-4xl font-display font-bold">{stat.value}</div>
              <div className="text-white/50 font-medium">{stat.label}</div>
            </div>
          ))}
          <div className="md:col-span-3 mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-white/40 text-sm">
              Working with creators, influencers, and brands across multiple niches.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Strategy',
    desc: 'Content research and planning tailored to your audience.',
  },
  {
    num: '02',
    title: 'Production',
    desc: 'Editing high retention videos with professional tools.',
  },
  {
    num: '03',
    title: 'Optimization',
    desc: 'Hooks, pacing, and subtitles to maximize watch time.',
  },
  {
    num: '04',
    title: 'Growth',
    desc: 'Analytics and continuous content improvement.',
  },
];

export default function Process() {
  return (
    <section className="py-24 relative bg-brand-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            How We Work
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-display font-black text-white/5 absolute -top-8 -left-4 select-none">
                {step.num}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-1 bg-brand-orange rounded-full" />
                  {step.title}
                </h3>
                <p className="text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

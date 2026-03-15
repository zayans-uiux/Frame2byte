import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden glass neon-border">
              <img
                src="/images/zayan1.jpeg"
                alt="Zayan Shaikh"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl neon-glow">
              <div className="text-brand-orange font-display font-bold text-xl mb-1">Zayan Shaikh</div>
              <div className="text-white/50 text-sm font-medium">Founder & Creative Director</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">About me</h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                Hi, I’m Zayan Shaikh, the founder of Frame2Byte.
              </p>
              <p>
                I completed my Diploma in Information Technology and am currently pursuing a degree in Artificial Intelligence and Data Science at Thakur College of Engineering and Technology. I’m an AI enthusiast who is passionate about technology, creativity, and building digital solutions.
              </p>
              <p>
                Frame2Byte started as my creative venture about a year ago, where I help creators, influencers, and brands improve their online presence through high-quality short-form video editing and visual content. In its first year, Frame2Byte has worked with multiple international clients and generated nearly $1,200 in revenue while continuing to grow as a creative content agency.
              </p>
            </div>

            <div className="mt-8">
              <motion.a
                href="https://www.linkedin.com/in/zayan-shaikh-61413b3ab/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 glass glass-hover rounded-2xl font-bold text-brand-orange border border-brand-orange/20 transition-all"
              >
                Connect With Me on LinkedIn
              </motion.a>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl">
                <div className="text-2xl font-bold text-brand-orange mb-1">30+</div>
                <div className="text-sm text-white/40">International Clients</div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-2xl font-bold text-brand-orange mb-1">1.5Y+</div>
                <div className="text-sm text-white/40">Industry Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

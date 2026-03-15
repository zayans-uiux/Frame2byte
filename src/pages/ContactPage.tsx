import { motion } from 'framer-motion';
import { Instagram, ArrowRight, MessageSquare, Send, FileVideo, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'DM us on Instagram',
    desc: 'Send us a message to start the conversation.',
    icon: <Instagram size={20} />,
  },
  {
    id: 2,
    title: 'Tell us what you need',
    desc: 'Explain your vision and content goals.',
    icon: <MessageSquare size={20} />,
  },
  {
    id: 3,
    title: 'Share your clips',
    desc: 'Send your raw footage or content ideas.',
    icon: <FileVideo size={20} />,
  },
  {
    id: 4,
    title: 'We start editing',
    desc: 'Our team brings your vision to life.',
    icon: <CheckCircle2 size={20} />,
  },
];

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 min-h-screen bg-brand-black flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Info */}
          <motion.div
            id="instagram-contact"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tight">
              Contact <span className="text-brand-orange">Us</span>
            </h1>
            <p className="text-white/50 text-xl mb-12 max-w-lg leading-relaxed">
              Ready to scale your content? Reach out to us directly on Instagram to start your project today.
            </p>
            
            <motion.a
              href="https://instagram.com/frame2byte"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl orange-gradient font-bold text-xl shadow-[0_0_30px_rgba(242,125,38,0.3)] group"
            >
              <Instagram size={28} />
              DM Us on Instagram
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right Side: Instruction Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Animated Background Bubbles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-orange/5 rounded-full blur-[100px] animate-pulse delay-700" />

            <div className="glass p-10 md:p-12 rounded-[3rem] border-white/10 relative overflow-hidden group">
              {/* Glowing Border Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
              
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 flex items-center gap-3">
                <Send className="text-brand-orange" />
                How it Works
              </h2>

              <div className="space-y-8 relative z-10">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex gap-6 group/step"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover/step:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(242,125,38,0.1)]">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover/step:text-brand-orange transition-colors">
                        {step.id}. {step.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Animated Bubbles inside the glass */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-10 w-12 h-12 rounded-full border border-brand-orange/20"
              />
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 left-10 w-8 h-8 rounded-full border border-brand-orange/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

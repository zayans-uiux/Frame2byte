import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const [showToast, setShowToast] = useState(false);
  const phoneNumber = "+91 8268278786";

  const handleBookCall = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass rounded-[3rem] p-12 md:p-24 text-center overflow-hidden border-brand-orange/20"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/20 blur-[120px] -z-10" />
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Ready to Grow <br /> Your Content?
          </h2>
          
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join 30+ creators and brands who have transformed their social media presence with our high-retention editing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              onClick={handleBookCall}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 orange-gradient rounded-2xl font-bold text-xl neon-glow flex items-center gap-3"
            >
              BOOK A CALL
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 glass glass-hover rounded-2xl font-bold text-xl"
            >
              START YOUR PROJECT
            </motion.button>
          </div>

          {/* Toast Notification */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass border-brand-orange/50 rounded-full flex items-center gap-3 shadow-[0_0_30px_rgba(242,125,38,0.2)]"
              >
                <CheckCircle2 className="text-brand-orange" size={20} />
                <span className="font-bold text-sm">Number copied to clipboard!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

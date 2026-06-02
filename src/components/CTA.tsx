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
    <section className="py-12 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center overflow-hidden border-brand-orange/20"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/20 blur-[120px] -z-10" />
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Ready to Grow <br /> Your Content?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Join 30+ creators and brands who have transformed their social media presence with our high-retention editing.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-2 max-w-md mx-auto sm:max-w-none">
            <motion.button
              onClick={handleBookCall}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 orange-gradient rounded-2xl font-bold text-base sm:text-xl neon-glow flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,106,0,0.2)]"
            >
              BOOK A CALL
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 glass glass-hover rounded-2xl font-bold text-base sm:text-xl flex items-center justify-center"
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

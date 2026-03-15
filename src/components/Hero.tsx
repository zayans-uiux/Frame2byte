import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-orange/5 blur-[100px] md:blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left z-10 order-last lg:order-first"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full glass border-brand-orange/30 text-brand-orange text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6"
          >
            Video Editing Agency
          </motion.div>
          
          <h1 className="text-3xl md:text-7xl font-display font-bold leading-[1.1] mb-6 break-words">
            FRAME<span className="text-brand-orange">2</span>BYTE <br />
            <span className="text-white/60">High Retention</span> <br />
            Video Editing
          </h1>
          
          <p className="text-sm md:text-lg text-white/60 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed px-2 sm:px-0">
            Frame2Byte helps creators grow through high-retention reels, YouTube Shorts, and scroll-stopping video edits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/#plans"
                className="px-6 py-3 md:px-8 md:py-4 orange-gradient rounded-2xl font-bold neon-glow text-base md:text-lg block text-center"
              >
                VIEW OUR PLANS
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/portfolio"
                className="px-6 py-3 md:px-8 md:py-4 glass glass-hover rounded-2xl font-bold text-base md:text-lg block text-center"
              >
                VIEW OUR WORK
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-first lg:order-last h-[180px] sm:h-[250px] md:h-[400px] lg:h-[600px] w-full"
        >
          <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
            <div className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-full md:h-full">
              <HeroVisual />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

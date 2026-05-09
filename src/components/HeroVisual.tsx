import { motion } from 'framer-motion';

export default function HeroVisual({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/10 blur-[100px] rounded-full" />
      
      {/* Floating Elements */}
      <motion.div
        animate={isMobile ? {} : { 
          y: [-20, 20, -20],
          rotate: [0, 5, 0]
        }}
        transition={isMobile ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-[2.5rem] md:rounded-[3rem] glass neon-border p-6 md:p-8 overflow-hidden group shadow-[0_0_50px_rgba(255,106,0,0.1)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent opacity-50" />
        <div className="w-full h-full rounded-2xl bg-brand-orange/5 border border-white/5 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.2),transparent)]" />
          <div className="text-brand-orange font-display font-bold text-6xl md:text-8xl opacity-20">2</div>
        </div>
      </motion.div>

      {/* Floating Blobs */}
      <motion.div
        animate={isMobile ? {} : { 
          x: [-30, 30, -30],
          y: [30, -30, 30],
        }}
        transition={isMobile ? {} : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full glass border-white/10"
      />
      
      <motion.div
        animate={isMobile ? {} : { 
          x: [20, -20, 20],
          y: [-20, 20, -20],
        }}
        transition={isMobile ? {} : { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full glass border-white/5 opacity-50"
      />

      {/* Cinematic Pulse */}
      <div className="absolute inset-0 bg-brand-black/20 mix-blend-overlay pointer-events-none" />
    </div>
  );
}

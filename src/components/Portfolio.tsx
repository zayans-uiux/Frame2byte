import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';

const reelVideos = [
  { id: 1, title: 'Video 1', src: '/videos/video1.mp4' },
  { id: 2, title: 'Video 2', src: '/videos/video3.mp4' },
  { id: 3, title: 'Video 3', src: '/videos/video5.mp4' },
];

const visualDesigns = [
  { id: 1, title: 'Image 1', src: '/images/images1.png' },
  { id: 2, title: 'Image 2', src: '/images/images2.png' },
  { id: 3, title: 'Image 3', src: '/images/images3.png' },
];

function VideoCard({ item, index }: { item: any, index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Autoplay blocked or failed", err));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[9/16] rounded-[2.5rem] overflow-hidden glass neon-border bg-black cursor-pointer"
    >
      <video
        ref={videoRef}
        src={item.src}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Play Icon Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-16 h-16 rounded-full bg-brand-orange/20 backdrop-blur-md border border-brand-orange/50 flex items-center justify-center neon-glow">
          <Play size={32} className="text-brand-orange fill-brand-orange ml-1" />
        </div>
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-black/95 via-brand-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white font-display font-bold text-xl tracking-tight">{item.title}</h3>
      </div>
    </motion.div>
  );
}

function ImageCard({ item, index }: { item: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative aspect-square rounded-[2rem] overflow-hidden glass neon-border bg-black cursor-pointer"
    >
      <img
        src={item.src}
        alt={item.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg"
          >
            Content Created
          </motion.p>
        </div>

        {/* Video Work Row */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-white/80 flex items-center gap-4">
            Video Work
            <div className="h-px flex-1 bg-white/10" />
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {reelVideos.map((item, i) => (
              <VideoCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Design Work Row */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-white/80 flex items-center gap-4">
            Design Work
            <div className="h-px flex-1 bg-white/10" />
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {visualDesigns.map((item, i) => (
              <ImageCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/portfolio"
              className="px-10 py-4 glass glass-hover rounded-2xl font-bold text-lg border-brand-orange/20 inline-block"
            >
              SEE FULL PORTFOLIO
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

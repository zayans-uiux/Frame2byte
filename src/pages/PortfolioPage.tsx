import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const reelVideos = [
  { id: 1, title: 'Video 1', src: '/videos/video1.mp4' },
  { id: 2, title: 'Video 2', src: '/videos/video3.mp4' },
  { id: 3, title: 'Video 3', src: '/videos/video5.mp4' },
  { id: 4, title: 'Video 4', src: '/videos/video6.mp4' },
];

const visualDesigns = [
  { id: 1, title: 'Image 1', src: '/images/images1.png' },
  { id: 2, title: 'Image 2', src: '/images/images2.png' },
  { id: 3, title: 'Image 3', src: '/images/images3.png' },
  { id: 4, title: 'Image 4', src: '/images/image6.png' },
];

function VideoCard({ video, index }: { video: any, index: number }) {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden glass neon-border shadow-2xl bg-black cursor-pointer"
    >
      <video
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Play Icon Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-12 h-12 rounded-full bg-brand-orange/20 backdrop-blur-md border border-brand-orange/50 flex items-center justify-center neon-glow">
          <Play size={24} className="text-brand-orange fill-brand-orange ml-1" />
        </div>
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-black/95 via-brand-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white font-display font-bold text-lg tracking-tight">{video.title}</h3>
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
      transition={{ delay: (index % 4) * 0.1 }}
      className="group relative aspect-square rounded-2xl overflow-hidden glass neon-border shadow-xl bg-black cursor-pointer"
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

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 min-h-screen bg-brand-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight"
          >
            Our <span className="text-brand-orange">Work</span>
          </motion.h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Explore our high-retention video edits and creative visual designs.
          </p>
        </div>

        {/* Section 1: Short-Form Reel Edits */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Short-Form <span className="text-brand-orange">Reel Edits</span></h2>
            <div className="h-px flex-1 bg-gradient-to-r from-brand-orange/50 to-transparent" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-10">
            {reelVideos.map((video, i) => (
              <VideoCard key={video.id} video={video} index={i} />
            ))}
          </div>
        </section>

        {/* Section 2: AI & Canva Visual Designs */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">AI & Canva <span className="text-brand-orange">Visual Designs</span></h2>
            <div className="h-px flex-1 bg-gradient-to-r from-brand-orange/50 to-transparent" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-10">
            {visualDesigns.map((item, i) => (
              <ImageCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 rounded-[3rem] glass neon-border text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to go viral?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">Join the creators who are scaling their reach with our high-retention editing systems.</p>
          <Link 
            to="/contact#instagram-contact" 
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl orange-gradient font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(242,125,38,0.3)]"
          >
            Connect With Me
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

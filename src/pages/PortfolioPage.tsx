import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const reelVideos = [
  { id: 1, title: 'Video 1', src: '/videos/video1.mp4' },
  { id: 3, title: 'Video 3', src: '/videos/video3.mp4' },
  { id: 7, title: 'Video 7', src: '/videos/video7.mp4' },
  { id: 8, title: 'Video 8', src: '/videos/video8.mp4' },
  { id: 9, title: 'Video 9', src: '/videos/video9.mp4' },
  { id: 12, title: 'Video 12', src: '/videos/video12.mp4' },
];

const visualDesigns = [
  { id: 1, title: 'IMGWE1', src: '/images/imagee1.jpeg' },
  { id: 2, title: 'IMGWE2', src: '/images/imagee2.jpeg' },
  { id: 3, title: 'IMGWE3', src: '/images/imagee3.jpeg' },
  { id: 4, title: 'IMAGES2', src: '/images/images2.png' },
  { id: 5, title: 'IMAGES3', src: '/images/images3.png' },
  { id: 6, title: 'IMAGES4', src: '/images/images4.png' },
  { id: 7, title: 'GRINDUP1', src: '/images/grindup_post1.png' },
  { id: 8, title: 'WHATSAPP_POST', src: '/images/whatsapp_post.jpeg' },
  { id: 9, title: 'GRINDUP2', src: '/images/grindup_post2.png' },
];

function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex flex-col bg-brand-black/98 backdrop-blur-3xl cursor-default"
        >
          {/* Header Spacer to keep video below navbar */}
          <div className="h-24 sm:h-32 w-full" />
          
          <div className="flex-1 w-full flex items-center justify-center p-4 md:p-12 relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-full h-full max-h-[85vh] flex items-center justify-center"
            >
              {/* Back Button positioned to the left as per drawing */}
              <button
                onClick={onClose}
                className="hidden xl:flex absolute -left-24 top-0 group items-center justify-center w-16 h-16 bg-brand-orange rounded-full text-white shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:scale-110 hover:shadow-brand-orange/60 transition-all z-[120]"
                title="Back to Portfolio"
              >
                <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
              </button>

              {/* Mobile/Compact Back Button */}
              <button
                onClick={onClose}
                className="xl:hidden absolute -top-14 left-0 group flex items-center gap-2 bg-brand-orange px-5 py-2.5 rounded-full text-white font-bold tracking-widest shadow-[0_0_20px_rgba(255,106,0,0.4)] z-[120]"
              >
                <ChevronLeft size={20} />
                <span className="text-[10px] uppercase tracking-widest">Back</span>
              </button>
              
              <div className="w-full h-full flex items-center justify-center">
                {children}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function VideoCard({ video, index, onDoubleClick }: { video: any, index: number, onDoubleClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log("Play failed", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024 && videoRef.current && !isPlaying) {
      videoRef.current.play().catch(err => console.log("Autoplay blocked", err));
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024 && videoRef.current && !isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.1 }}
      onDoubleClick={onDoubleClick}
      onClick={togglePlay}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[9/16] rounded-[2.5rem] overflow-hidden glass border border-white/10 bg-black cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-700 hover:shadow-brand-orange/20 hover:border-brand-orange/30 hover:scale-[1.02]"
    >
      <video
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Premium Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />

      {/* Play Icon Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isPlaying ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
        <div className="w-20 h-20 rounded-full bg-brand-orange/20 backdrop-blur-xl border border-brand-orange/40 flex items-center justify-center shadow-[0_0_40px_rgba(255,106,0,0.3)] group-hover:shadow-brand-orange/50 transition-all duration-500">
          <Play size={36} className="text-brand-orange fill-brand-orange ml-1 drop-shadow-lg" />
        </div>
      </div>

      {/* Interaction Hint */}
      <div className="absolute bottom-10 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.3em] text-white/60 bg-black/40 px-5 py-2 rounded-full backdrop-blur-xl border border-white/5">Double Click for Fullscreen</span>
      </div>
    </motion.div>
  );
}

function ImageCard({ item, index, onClick }: { item: any, index: number, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.1 }}
      onClick={onClick}
      className="group relative aspect-square rounded-[2rem] overflow-hidden glass border border-white/10 bg-black cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 hover:shadow-brand-orange/30 hover:border-brand-orange/40 hover:scale-[1.03]"
    >
      <img
        src={item.src}
        alt={item.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
      />
      <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_60px_rgba(255,106,0,0.3)]" />
      <div className="absolute inset-0 border-2 border-brand-orange/0 group-hover:border-brand-orange/40 transition-all duration-700 rounded-[2rem]" />
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (media: any) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMedia(null), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 min-h-screen bg-brand-black overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl font-display font-bold mb-6 tracking-tight"
          >
            Our <span className="text-brand-orange">Work</span>
          </motion.h1>
          <p className="text-white/40 text-sm sm:text-base md:text-lg max-w-2xl mx-auto uppercase tracking-[0.3em] font-medium">
            Creative Content Showcase
          </p>
        </div>

        {/* Section 1: Short-Form Reel Edits */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-16 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase tracking-widest whitespace-nowrap">Short-Form <span className="text-brand-orange">Reel Edits</span></h2>
            <div className="h-px flex-1 bg-gradient-to-r from-brand-orange to-transparent opacity-20" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
            {reelVideos.map((video, i) => (
              <VideoCard key={video.id} video={video} index={i} onDoubleClick={() => openModal({ ...video, type: 'video' })} />
            ))}
          </div>
        </section>

        {/* Section 2: AI & Creative Visual Designs */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-16 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase tracking-widest whitespace-nowrap text-right order-2">AI & Creative <span className="text-brand-orange">Visual Designs</span></h2>
            <div className="h-px flex-1 bg-gradient-to-l from-brand-orange to-transparent opacity-20 order-1" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
            {visualDesigns.map((item, i) => (
              <ImageCard key={item.id} item={item} index={i} onClick={() => openModal({ ...item, type: 'image' })} />
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-16 md:p-24 rounded-[3rem] sm:rounded-[4rem] glass neon-border text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50" />
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">Ready to build something <span className="text-brand-orange">LEGENDARY?</span></h2>
          <p className="text-white/60 mb-12 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">Join the creators, businesses, and personal brands who are scaling their reach with high-impact, results-driven content strategies.</p>
          <Link 
            to="/contact#instagram-contact" 
            className="inline-flex items-center gap-3 px-8 py-4 sm:px-12 sm:py-6 rounded-[1.5rem] sm:rounded-[2rem] orange-gradient font-bold text-lg sm:text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(242,125,38,0.4)] active:scale-95"
          >
            LET'S WORK TOGETHER
          </Link>
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedMedia?.type === 'video' ? (
          <video
            src={selectedMedia.src}
            controls
            autoPlay
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
          />
        ) : selectedMedia?.type === 'image' && (
          <img
            src={selectedMedia.src}
            alt={selectedMedia.title}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
          />
        )}
      </Modal>
    </motion.div>
  );
}

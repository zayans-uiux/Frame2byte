import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, X, ChevronLeft } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const reelVideos = [
  { id: 1, title: 'High-Retention Narrative', src: '/videos/video1.mp4' },
  { id: 2, title: 'Dynamic VFX Showcase', src: '/videos/video3.mp4' },
  { id: 3, title: 'Engagement Retention Reel', src: '/videos/video7.mp4' },
  { id: 4, title: 'Viral Brand Commercial', src: '/videos/video8.mp4' },
];

const visualDesigns = [
  { id: 1, title: 'Premium Brand Aesthetics', src: '/images/imagee2.jpeg' },
  { id: 2, title: 'E-Commerce Presentation', src: '/images/images2.png' },
  { id: 3, title: 'High-Growth Poster Design', src: '/images/images3.png' },
  { id: 4, title: 'Social Launch Visual', src: '/images/whatsapp_post.jpeg' },
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
                title="Back to Work"
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

function VideoCard({ item, index, onDoubleClick }: { item: any, index: number, onDoubleClick: () => void }) {
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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onDoubleClick={onDoubleClick}
      onClick={togglePlay}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[9/16] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden glass border border-white/10 bg-black cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-700 hover:shadow-brand-orange/20 hover:border-brand-orange/30 hover:scale-[1.02]"
    >
      <video
        ref={videoRef}
        src={item.src}
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
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/60 bg-black/40 px-5 py-2 rounded-full backdrop-blur-xl border border-white/5">Double Click for Fullscreen</span>
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
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group relative aspect-square rounded-[1.2rem] md:rounded-[2rem] overflow-hidden glass border border-white/10 bg-black cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 hover:shadow-brand-orange/30 hover:border-brand-orange/40 hover:scale-[1.03]"
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

export default function Portfolio() {
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
    <section id="portfolio" className="py-12 md:py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
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
            className="text-white/50 text-lg uppercase tracking-[0.2em] font-medium"
          >
            Content Created
          </motion.p>
        </div>

        {/* Video Work Row */}
        <div className="mb-12 md:mb-24">
          <div className="flex items-center gap-6 mb-6 md:mb-12">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">Video Work</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {reelVideos.map((item, i) => (
              <VideoCard key={item.id} item={item} index={i} onDoubleClick={() => openModal({ ...item, type: 'video' })} />
            ))}
          </div>
        </div>

        {/* Design Work Row */}
        <div className="mb-8 md:mb-16">
          <div className="flex items-center gap-6 mb-6 md:mb-12">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest text-right">AI & Creative Designs</h3>
            <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {visualDesigns.map((item, i) => (
              <ImageCard key={item.id} item={item} index={i} onClick={() => openModal({ ...item, type: 'image' })} />
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-24 text-center px-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full sm:w-auto"
          >
            <Link
              to="/portfolio"
              className="px-8 py-4 sm:px-12 sm:py-5 glass glass-hover rounded-2xl font-bold text-base sm:text-lg border-brand-orange/30 shadow-[0_0_20px_rgba(255,106,0,0.1)] hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all block text-center"
            >
              EXPLORE FULL SHOWCASE
            </Link>
          </motion.div>
        </div>
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
    </section>
  );
}

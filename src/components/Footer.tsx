import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold tracking-tighter mb-6 block">
              FRAME<span className="text-brand-orange">2</span>BYTE
            </Link>
            <p className="text-white/40 leading-relaxed mb-8">
              High-retention video editing agency helping creators and brands grow through strategic visual storytelling.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/frame2byte" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-brand-orange hover:border-brand-orange/50 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-brand-orange hover:border-brand-orange/50 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-brand-orange hover:border-brand-orange/50 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-white/40">
              <li><Link to="/#services" className="hover:text-brand-orange transition-colors">Video Editing</Link></li>
              <li><Link to="/#services" className="hover:text-brand-orange transition-colors">Content Strategy</Link></li>
              <li><Link to="/#services" className="hover:text-brand-orange transition-colors">Visual Branding</Link></li>
              <li><Link to="/#services" className="hover:text-brand-orange transition-colors">Optimization</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-white/40">
              <li><Link to="/#about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-orange transition-colors">Our Work</Link></li>
              <li><Link to="/#plans" className="hover:text-brand-orange transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/40">
              <li>Mumbai, India</li>
              <li>zayanstoodinbuisness@gmail.com</li>
              <li>+91 8268278786</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
          <p>© 2026 Frame2Byte. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

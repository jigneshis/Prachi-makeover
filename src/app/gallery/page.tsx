import React from 'react';
import Navbar from "@/components/layout/Navbar";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import { Sparkles } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream-soft">
      <Navbar />
      
      <main className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              <Sparkles size={14} />
              <span>Curation of Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 tracking-tight">Artistry <span className="luxury-text-gradient">Portfolio</span></h1>
            <p className="text-gray-500 font-light max-w-2xl mx-auto leading-relaxed text-lg">
              Explore our journey of transformations, from ethereal bridal looks to high-fashion editorial aesthetics.
            </p>
          </div>

          <GalleryGrid />
        </div>
      </main>
      
      <footer className="bg-white pt-12 pb-12 border-t border-gold/10 text-center">
        <p className="font-serif text-xl text-gold tracking-widest mb-4">PRACHI MAKEOVER</p>
        <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">© 2024 Luxury Makeup Artistry. All rights reserved.</p>
      </footer>
    </div>
  );
}
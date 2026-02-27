"use client";

import React from 'react';
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import GallerySection from "../components/home/GallerySection";
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-soft">
      <Navbar />
      <main>
        <Hero />
        <ServicesPreview />
        <GallerySection />
        
        {/* About Section */}
        <section id="about" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-cream-soft p-4 rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden border border-gold/10">
                  <img 
                    src="https://siyfuzjwhfhdxuyzelol.supabase.co/storage/v1/object/public/resoucres/headshot.png" 
                    alt="Prachi - Professional Makeup Artist"
                    className="w-full h-full object-cover rounded-[2rem] hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute -top-10 -left-10 w-full h-full border border-gold/10 rounded-[2.5rem] -z-0" />
                
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold p-6 rounded-[2rem] shadow-2xl z-20 flex flex-col items-center justify-center text-center text-white">
                  <span className="text-4xl font-serif mb-1">10+</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Years of <br /> Artistry</span>
                </div>
              </motion.div>
              
              <div className="max-w-xl">
                <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">The Creative Vision</span>
                <h3 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8 tracking-tight">Meet Prachi</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed font-light">
                  With over a decade of experience, Prachi brings a sophisticated vision to modern beauty. Her philosophy focuses on enhancing your natural features rather than masking them.
                </p>
                <p className="text-gray-600 mb-12 text-lg leading-relaxed font-light">
                  Trained by international experts, she specializes in creating ethereal glows and timeless bridal looks that reflect individual personality and style.
                </p>
                
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-gold/10">
                  <div>
                    <h4 className="text-gold font-serif text-xl mb-1">Expertise</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Bridal & Editorial</p>
                  </div>
                  <div>
                    <h4 className="text-gold font-serif text-xl mb-1">Premium</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Elite Artistry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white border-t border-gold/10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-serif text-3xl text-gold tracking-widest mb-6 uppercase">Prachi Makeover</p>
          <div className="flex justify-center gap-8 mb-12">
            {['Instagram', 'Facebook', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-gold transition-colors">{social}</a>
            ))}
          </div>
          
          <div className="pt-12 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">© 2024 Luxury Makeup Artistry. All rights reserved.</p>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
              Design by <a href="https://jigneshis.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gold hover:opacity-70 transition-opacity">Jignesh Wadwani</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.a
        href="https://wa.me/91874000798"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[70] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle size={30} />
      </motion.a>
    </div>
  );
}
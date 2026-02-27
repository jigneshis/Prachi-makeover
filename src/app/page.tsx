"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import { MadeWithDyad } from "../components/made-with-dyad";
import { MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-soft">
      <Navbar />
      <main>
        <Hero />
        <ServicesPreview />
        
        {/* About Section */}
        <section id="about" className="py-32 bg-cream/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-white p-4 rounded-[2.5rem] shadow-2xl relative z-10">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                      src="https://siyfuzjwhfhdxuyzelol.supabase.co/storage/v1/object/public/resoucres/headshot.png" 
                      alt="Prachi - Professional Makeup Artist"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative background shape */}
                <div className="absolute -top-10 -left-10 w-full h-full border border-gold/20 rounded-[2.5rem] -z-0" />
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-10 -right-10 w-56 h-56 bg-gold p-6 rounded-[2rem] shadow-2xl z-20 hidden md:flex flex-col items-center justify-center text-center text-white"
                >
                  <span className="text-5xl font-serif mb-2">10+</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Years of <br /> Master Artistry</span>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">The Creative Director</span>
                <h3 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8 tracking-tight">Meet Prachi</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed font-light">
                  With over a decade of defining beauty standards, Prachi brings a sophisticated vision to modern makeup. Her philosophy transcends traditional application, focusing on the architectural enhancement of natural features.
                </p>
                <p className="text-gray-600 mb-12 text-lg leading-relaxed font-light">
                  Trained by global luminaries, she has curated a technique that balances the ethereal glow of editorial skin with the refined precision required for grand celebrations.
                </p>
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-gold/10">
                  <div>
                    <h4 className="text-gold font-serif text-xl mb-1">Global Vision</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Trained Internationally</p>
                  </div>
                  <div>
                    <h4 className="text-gold font-serif text-xl mb-1">Pure Luxury</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Premium Products Only</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white pt-24 pb-12 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="font-serif text-3xl text-gold tracking-widest mb-6">PRACHI MAKEOVER</p>
            <div className="flex justify-center gap-8 mb-12">
              {['Instagram', 'Facebook', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-gold transition-colors">{social}</a>
              ))}
            </div>
          </motion.div>
          
          <div className="pt-12 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">© 2024 Luxury Makeup Artistry. All rights reserved.</p>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
              Design by <a href="https://jigneshis.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gold hover:opacity-70 transition-opacity">Jignesh Wadwani</a>
            </p>
          </div>
          <div className="mt-8">
            <MadeWithDyad />
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.a
        href="https://wa.me/91874000798"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
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
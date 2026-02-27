"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import BookingModal from '../booking/BookingModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-cream-soft">
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-[5%] w-[40vw] h-[40vw] bg-gold/5 rounded-full blur-[120px]" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-[5%] w-[50vw] h-[50vw] bg-pink-100/30 rounded-full blur-[150px]" 
      />
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/50 backdrop-blur-md border border-gold/20 text-gold-dark text-xs font-bold tracking-[0.2em] uppercase">
            <Sparkles size={14} className="animate-pulse" />
            <span>Excellence in Artistry</span>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-serif mb-8 leading-[0.9] tracking-tight text-gray-900"
        >
          Unveil Your <br />
          <span className="luxury-text-gradient italic">Timeless</span> Beauty
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-500 mb-12 font-sans max-w-2xl mx-auto leading-relaxed font-light"
        >
          Where luxury meets artistry. Discover a transformation that 
          celebrates your unique essence with professional precision.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="luxury-button text-sm h-16 px-12 tracking-widest uppercase"
            >
              Book Consultation
            </Button>
          </motion.div>
          <motion.div whileHover={{ x: 5 }}>
            <button className="group flex items-center gap-3 text-gold font-bold text-sm tracking-widest uppercase py-4 px-8 rounded-full border border-gold/20 hover:bg-gold/5 transition-all">
              View Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-gold/60 font-bold">Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
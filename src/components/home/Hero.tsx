"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cream-soft">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-sm font-medium animate-bounce">
            <Sparkles size={16} />
            <span>Voted #1 Bridal Artist 2023</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Unveil Your <span className="luxury-text-gradient">Timeless</span> Beauty
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 font-sans max-w-2xl mx-auto leading-relaxed">
          Experience world-class makeup artistry tailored to your unique features. 
          Specializing in luxury bridal, celebrity, and editorial makeovers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="luxury-button text-lg h-14 px-10">
            Book Your Session
          </Button>
          <Button variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-full text-lg h-14 px-10">
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold/40">
        <div className="w-6 h-10 border-2 border-gold/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
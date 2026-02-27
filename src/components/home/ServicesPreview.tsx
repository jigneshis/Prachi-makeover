"use client";

import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Heart, Star, Camera, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Bridal Makeover",
    description: "Our signature high-definition bridal package designed for your unforgettable moments.",
    icon: <Heart className="text-gold" size={32} />,
    price: "Premium Package"
  },
  {
    title: "Editorial Fashion",
    description: "Avant-garde and high-fashion looks tailored for runway and high-end photography.",
    icon: <Camera className="text-gold" size={32} />,
    price: "Custom Quote"
  },
  {
    title: "Celebrity Glam",
    description: "Red carpet ready aesthetics focusing on camera-ready longevity and flawless finish.",
    icon: <Star className="text-gold" size={32} />,
    price: "In-Studio Session"
  },
  {
    title: "Artistry Workshop",
    description: "Exclusive masterclasses revealing the secret techniques of luxury makeup artistry.",
    icon: <Sparkles className="text-gold" size={32} />,
    price: "Masterclass"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut
    }
  }
};

const ServicesPreview = () => {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Signature Curation</span>
          <h3 className="text-4xl md:text-6xl font-serif text-gray-900 tracking-tight">Artistry & Expertise</h3>
          <div className="w-16 h-[1px] bg-gold/30 mx-auto mt-8" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative bg-cream-soft/30 border-none shadow-none rounded-[2rem] overflow-hidden hover:bg-white transition-colors duration-500">
                <CardContent className="p-10 text-center relative z-10">
                  <div className="mb-8 flex justify-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 ease-luxury">
                    <div className="p-5 rounded-full bg-white shadow-luxury">
                      {service.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-serif mb-4 text-gray-900 group-hover:text-gold transition-colors">{service.title}</h4>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>
                  <div className="pt-6 border-t border-gold/10">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gold/60">{service.price}</span>
                  </div>
                </CardContent>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none" />
    </section>
  );
};

export default ServicesPreview;
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../integrations/supabase/client';
import MediaCard from '../gallery/MediaCard';
import Lightbox from '../gallery/Lightbox';
import { Button } from '../ui/button';
import { Sparkles, ChevronDown } from 'lucide-react';

const GallerySection = () => {
  const [items, setItems] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await supabase
        .from('gallery_items')
        .select('*')
        .order('created_at', { ascending: false });
      if (data) setItems(data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  const visibleItems = showAll ? items : items.slice(0, 6);

  return (
    <section id="gallery" className="py-32 bg-cream-soft/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
          >
            <Sparkles size={14} />
            <span>Portfolio</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-gray-900 tracking-tight"
          >
            See Our <span className="luxury-text-gradient">Work</span>
          </motion.h2>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <MediaCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {!showAll && items.length > 6 && (
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button 
                onClick={() => setShowAll(true)}
                variant="outline"
                className="group border-gold text-gold hover:bg-gold hover:text-white rounded-full h-16 px-12 text-sm tracking-widest uppercase transition-all duration-500"
              >
                <span>View More Work</span>
                <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
              </Button>
            </motion.div>
          </div>
        )}
      </div>

      <Lightbox 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
      
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default GallerySection;
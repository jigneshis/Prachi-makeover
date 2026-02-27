"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import MediaCard from './MediaCard';
import Lightbox from './Lightbox';

const GalleryGrid = () => {
  const [items, setItems] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setIsLoading(true);
    const { data } = await supabase
      .from('gallery_items')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) {
      setItems(data);
      const uniqueCategories = ['All', ...new Set(data.map((item: any) => item.category))];
      setCategories(uniqueCategories);
    }
    setIsLoading(false);
  };

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="w-full">
      <div className="flex justify-center mb-16 overflow-x-auto no-scrollbar px-4">
        <div className="flex gap-4 p-1 glass-pill rounded-full whitespace-nowrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                activeCategory === category 
                  ? 'bg-gold text-white shadow-lg' 
                  : 'text-gray-500 hover:text-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-0"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <MediaCard 
              key={item.id} 
              item={item} 
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {!isLoading && filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 font-serif italic text-lg">No treasures found in this collection yet.</p>
        </div>
      )}

      <Lightbox 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
};

export default GalleryGrid;
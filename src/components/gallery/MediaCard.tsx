"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface MediaCardProps {
  item: {
    id: string;
    title: string;
    category: string;
    media_type: 'image' | 'video';
    file_path: string;
    thumbnail_path?: string;
  };
  onClick: () => void;
}

const MediaCard: React.FC<MediaCardProps> = ({ item, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="group relative aspect-[4/5] bg-cream-soft rounded-2xl overflow-hidden cursor-pointer shadow-luxury hover:shadow-2xl transition-all duration-700"
      onClick={onClick}
    >
      <motion.img
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
        src={item.media_type === 'video' ? item.thumbnail_path : item.file_path}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{item.category}</span>
        <h4 className="text-white font-serif text-lg tracking-wide">{item.title}</h4>
      </div>

      {/* Video Indicator */}
      {item.media_type === 'video' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-500">
          <Play className="text-white fill-white ml-1" size={24} />
        </div>
      )}
    </motion.div>
  );
};

export default MediaCard;
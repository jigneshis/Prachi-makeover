'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../../../integrations/supabase/client';
import { Plus, Trash2, Image as ImageIcon, Film } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { toast } from 'sonner';

export default function AdminGallery() {
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const { data } = await supabase
      .from('gallery_items')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setItems(data);
    setIsLoading(false);
  };

  const handleDelete = async (item: any) => {
    const confirmed = window.confirm("Are you sure you want to remove this from the gallery?");
    if (!confirmed) return;

    try {
      // 1. Delete from DB
      const { error: dbError } = await supabase
        .from('gallery_items')
        .delete()
        .eq('id', item.id);

      if (dbError) throw dbError;

      // 2. Delete from Storage (Optional but good practice)
      const bucket = item.media_type === 'image' ? 'Photos' : 'Videos';
      const path = item.file_path.split(`${bucket}/`).pop();
      if (path) {
        await supabase.storage.from(bucket).remove([path]);
      }

      toast.success("Item removed successfully");
      setItems(items.filter(i => i.id !== item.id));
    } catch (error) {
      toast.error("Failed to delete item");
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-serif text-gray-900 mb-2">Gallery Manager</h1>
          <p className="text-gray-500">Manage your portfolio images and videos</p>
        </div>
        
        <Link href="/admin/gallery/add">
          <Button className="luxury-button py-6 px-10 flex items-center gap-3">
            <Plus size={24} />
            <span className="text-lg">Add New Media</span>
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-[4/5] bg-gray-100 animate-pulse rounded-2xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="group relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src={item.media_type === 'video' ? item.thumbnail_path : item.file_path} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute top-4 left-4">
                {item.media_type === 'video' ? (
                  <div className="bg-black/50 backdrop-blur-md p-2 rounded-lg text-white">
                    <Film size={16} />
                  </div>
                ) : (
                  <div className="bg-white/50 backdrop-blur-md p-2 rounded-lg text-gold">
                    <ImageIcon size={16} />
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button 
                  onClick={() => handleDelete(item)}
                  className="bg-white text-red-500 p-4 rounded-full hover:scale-110 transition-transform"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && items.length === 0 && (
        <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-gray-100">
          <ImageIcon className="mx-auto text-gray-200 mb-6" size={64} />
          <h3 className="text-xl font-serif text-gray-400">Your gallery is currently empty</h3>
        </div>
      )}
    </div>
  );
}
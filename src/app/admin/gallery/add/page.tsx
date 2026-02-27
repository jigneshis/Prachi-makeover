'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/integrations/supabase/client';
import { Upload, ArrowLeft, Loader2, Image as ImageIcon, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function AddGalleryItem() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const [formData, setFormData] = useState({
    title: '',
    category: '',
  });
  const [files, setFiles] = useState<{
    main: File | null;
    thumbnail: File | null;
  }>({
    main: null,
    thumbnail: null,
  });

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!files.main || !formData.title || !formData.category) {
      toast.error("Please fill all fields and select a file");
      return;
    }

    if (mediaType === 'video' && !files.thumbnail) {
      toast.error("Please upload a thumbnail for the video");
      return;
    }

    setIsLoading(true);
    try {
      const mainBucket = mediaType === 'image' ? 'Photos' : 'Videos';
      const mainExt = files.main.name.split('.').pop();
      const mainPath = `${Date.now()}.${mainExt}`;
      
      const { error: mainError } = await supabase.storage
        .from(mainBucket)
        .upload(mainPath, files.main);

      if (mainError) throw mainError;

      const mainUrl = supabase.storage.from(mainBucket).getPublicUrl(mainPath).data.publicUrl;

      let thumbUrl = '';
      if (mediaType === 'video' && files.thumbnail) {
        const thumbPath = `thumbs/${Date.now()}.jpg`;
        const { error: thumbError } = await supabase.storage
          .from('Photos')
          .upload(thumbPath, files.thumbnail);
        
        if (thumbError) throw thumbError;
        thumbUrl = supabase.storage.from('Photos').getPublicUrl(thumbPath).data.publicUrl;
      }

      const { error: dbError } = await supabase.from('gallery_items').insert({
        title: formData.title,
        category: formData.category,
        media_type: mediaType,
        file_path: mainUrl,
        thumbnail_path: thumbUrl || mainUrl,
      });

      if (dbError) throw dbError;

      toast.success("Beautiful! New media added to gallery");
      router.push('/admin/gallery');
    } catch (error: any) {
      toast.error(error.message || "Something went wrong during upload");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors mb-12"
      >
        <ArrowLeft size={20} />
        <span className="font-bold text-xs uppercase tracking-widest">Back to Manager</span>
      </button>

      <div className="bg-white rounded-[2.5rem] p-10 shadow-luxury border border-gray-100">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">Add New Treasure</h1>

        <form onSubmit={handleUpload} className="space-y-8">
          <div className="flex p-1 bg-gray-50 rounded-2xl">
            <button
              type="button"
              onClick={() => setMediaType('image')}
              className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl transition-all duration-300 ${
                mediaType === 'image' ? 'bg-white shadow-md text-gold' : 'text-gray-400'
              }`}
            >
              <ImageIcon size={20} />
              <span className="font-bold uppercase text-xs tracking-widest">Image</span>
            </button>
            <button
              type="button"
              onClick={() => setMediaType('video')}
              className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl transition-all duration-300 ${
                mediaType === 'video' ? 'bg-white shadow-md text-gold' : 'text-gray-400'
              }`}
            >
              <Film size={20} />
              <span className="font-bold uppercase text-xs tracking-widest">Video</span>
            </button>
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">Title of Work</label>
            <input
              type="text"
              placeholder="e.g., Ethereal Bridal Look"
              className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">Collection (Category)</label>
            <input
              type="text"
              placeholder="e.g., Bridal, Party, Editorial"
              className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">
              {mediaType === 'image' ? 'Upload Image' : 'Upload Video'}
            </label>
            <div className="relative group">
              <input
                type="file"
                accept={mediaType === 'image' ? 'image/*' : 'video/*'}
                onChange={(e) => setFiles({ ...files, main: e.target.files?.[0] || null })}
                className="hidden"
                id="main-file"
              />
              <label 
                htmlFor="main-file"
                className="flex flex-col items-center justify-center w-full aspect-video bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100 group-hover:border-gold/30 transition-all cursor-pointer p-8 text-center"
              >
                {files.main ? (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-4">
                      <Upload size={32} />
                    </div>
                    <span className="text-gray-900 font-medium">{files.main.name}</span>
                    <span className="text-xs text-gray-400 mt-1">Click to change file</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="text-gray-200 mb-4" size={48} />
                    <span className="text-gray-400 font-medium">Click to upload your masterpiece</span>
                  </div>
                )}
              </label>
            </div>
          </div>

          {mediaType === 'video' && (
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">Video Preview Image</label>
              <div className="relative group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFiles({ ...files, thumbnail: e.target.files?.[0] || null })}
                  className="hidden"
                  id="thumb-file"
                />
                <label 
                  htmlFor="thumb-file"
                  className="flex flex-col items-center justify-center w-full aspect-video bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100 group-hover:border-gold/30 transition-all cursor-pointer p-8 text-center"
                >
                  {files.thumbnail ? (
                    <div className="flex flex-col items-center">
                      <ImageIcon className="text-gold mb-4" size={32} />
                      <span className="text-gray-900 font-medium">{files.thumbnail.name}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <ImageIcon className="text-gray-200 mb-4" size={32} />
                      <span className="text-gray-400 font-medium">Select a beautiful frame for the preview</span>
                    </div>
                  )}
                </label>
              </div>
            </div>
          )}

          <Button 
            type="submit" 
            disabled={isLoading}
            className="luxury-button w-full py-8 text-lg flex items-center justify-center gap-3 mt-12"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                <span>Publishing to Gallery...</span>
              </>
            ) : (
              <span>Publish Now</span>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
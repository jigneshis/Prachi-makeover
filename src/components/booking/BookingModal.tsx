"use client";

import React, { useEffect } from 'react';
import { X, MessageCircle, Phone } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-gold/10 animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl text-gray-900 mb-2">Book Your Session</h3>
            <p className="text-gray-500 text-sm">Please choose an option below</p>
          </div>

          <div className="space-y-4">
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/91874000798" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-[#25D366]/20 group active:scale-95"
            >
              <MessageCircle className="group-hover:scale-110 transition-transform" />
              <span>Message on WhatsApp</span>
            </a>

            {/* Call Button */}
            <a 
              href="tel:+91874000798" 
              className="flex items-center justify-center gap-3 w-full bg-[#007AFF] hover:bg-[#0066d6] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-[#007AFF]/20 group active:scale-95"
            >
              <Phone className="group-hover:scale-110 transition-transform" size={20} />
              <span>Call Direct</span>
            </a>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gold text-sm font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold-dark" />
      </div>
    </div>
  );
};

export default BookingModal;
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import BookingModal from '../booking/BookingModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-cream/80 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="font-serif text-2xl font-bold tracking-tighter text-gold">
                PRACHI <span className="text-gold-dark">MAKEOVER</span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-gold transition-colors">Services</Link>
                <Link href="#gallery" className="text-sm font-medium text-gray-700 hover:text-gold transition-colors">Gallery</Link>
                <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-gold transition-colors">About</Link>
                <Button 
                  onClick={() => setIsBookingOpen(true)}
                  className="luxury-button py-2 px-6 text-sm"
                >
                  Book Now
                </Button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gold p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-cream border-b border-gold/10 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700">Services</Link>
              <Link href="#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700">Gallery</Link>
              <Link href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700">About</Link>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="luxury-button w-full"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default Navbar;
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import BookingModal from '../booking/BookingModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    initial: {
      width: '100%',
      padding: '1.5rem 2rem',
      borderRadius: '0px',
      y: 0,
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    scrolled: {
      width: '90%',
      maxWidth: '1200px',
      padding: '0.75rem 1.5rem',
      borderRadius: '100px',
      y: 20,
      backgroundColor: 'rgba(250, 249, 246, 0.8)',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
      border: '1px solid rgba(212,175,55,0.2)',
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 pointer-events-none">
        <motion.div 
          className="h-full bg-gold origin-left"
          style={{ scaleX }}
        />
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.nav
          initial="initial"
          animate={isScrolled ? "scrolled" : "initial"}
          variants={navVariants}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1
          }}
          className="pointer-events-auto flex items-center justify-between"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-gold group">
              PRACHI <span className="text-gold-dark transition-colors group-hover:text-gold">MAKEOVER</span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-10">
            {['Services', 'Gallery', 'About'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-xs uppercase tracking-[0.2em] font-medium text-gray-800 hover:text-gold transition-colors nav-link-underline"
              >
                {item}
              </Link>
            ))}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="luxury-button py-2 px-8 text-xs tracking-widest uppercase"
              >
                Book Now
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-gold p-2 hover:bg-gold/5 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-xl md:hidden pt-32 px-6"
          >
            <div className="flex flex-col space-y-8 items-center">
              {['Services', 'Gallery', 'About'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-gray-900"
                >
                  {item}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="luxury-button w-full text-lg py-6"
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default Navbar;
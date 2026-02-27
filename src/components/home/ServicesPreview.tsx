"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Camera, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Bridal Makeover",
    description: "Complete bridal package including hair, makeup, and draping for your special day.",
    icon: <Heart className="text-gold" size={32} />,
    price: "Starting from ₹15,000"
  },
  {
    title: "Party Makeup",
    description: "Glamorous looks for weddings, parties, and special events that last all night.",
    icon: <Star className="text-gold" size={32} />,
    price: "Starting from ₹5,000"
  },
  {
    title: "Editorial & Fashion",
    description: "High-fashion makeup for shoots, runways, and commercial projects.",
    icon: <Camera className="text-gold" size={32} />,
    price: "Custom Quote"
  },
  {
    title: "Makeup Workshops",
    description: "Learn the art of makeup from Prachi herself in our exclusive masterclasses.",
    icon: <Sparkles className="text-gold" size={32} />,
    price: "Starting from ₹8,000"
  }
];

const ServicesPreview = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-medium tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-serif text-gray-900">Signature Services</h3>
          <div className="w-24 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="cream-card group hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif mb-3 text-gray-900">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-gold font-semibold text-sm">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
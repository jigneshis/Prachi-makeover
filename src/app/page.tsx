import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import { MadeWithDyad } from "../components/made-with-dyad";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-soft">
      <Navbar />
      <main>
        <Hero />
        <ServicesPreview />
        
        {/* About Section */}
        <section id="about" className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/5] bg-gold/10 rounded-2xl overflow-hidden border border-gold/20">
                  <img 
                    src="https://siyfuzjwhfhdxuyzelol.supabase.co/storage/v1/object/public/resoucres/headshot.png" 
                    alt="Prachi - Professional Makeup Artist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white p-4 rounded-2xl shadow-xl border border-gold/10 hidden md:block">
                  <div className="w-full h-full bg-gold/5 rounded-lg flex flex-col items-center justify-center text-center p-2">
                    <span className="text-3xl font-serif text-gold">10+</span>
                    <span className="text-xs text-gray-500 uppercase tracking-tighter">Years Experience</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-gold font-medium tracking-widest uppercase text-sm mb-3">The Artist</h2>
                <h3 className="text-4xl font-serif text-gray-900 mb-6">Meet Prachi</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With over a decade of experience in the beauty industry, Prachi has transformed thousands of faces, 
                  bringing out the natural radiance in every client. Her philosophy centers on "Enhancement, not Masking."
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Trained by international masters, she brings a global perspective to traditional Indian bridal makeup, 
                  creating looks that are both contemporary and timeless.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white border-t border-gold/10 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-serif text-xl text-gold mb-4">PRACHI MAKEOVER</p>
          <p className="text-gray-500 text-sm mb-2">© 2024 Luxury Makeup Artistry. All rights reserved.</p>
          <p className="text-gray-500 text-sm mb-8">
            Made by <a href="https://jigneshis.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline font-medium">Jignesh wadwani</a>
          </p>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
}
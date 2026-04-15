"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-sky-50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
              Smart Hotel Booking <span className="text-indigo-600">Made Simple</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Search, compare, and book the best hotels instantly with ZENO. Experience seamless travel planning at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/signup" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 text-center">
                Book Now
              </Link>
              <button className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all">
                Explore Hotels
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            {/* Abstract UI representation */}
            <div className="relative aspect-[4/3] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2670&auto=format&fit=crop" 
                alt="Luxury Hotel" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg border border-white/20">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900">Grand Resort & Spa</h3>
                    <p className="text-sm text-gray-500">Maldives</p>
                  </div>
                  <div className="text-right">
                    <p className="text-indigo-600 font-bold">$399</p>
                    <p className="text-xs text-gray-500">/ night</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

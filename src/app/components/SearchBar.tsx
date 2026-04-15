"use client";
import { MagnifyingGlassIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function SearchBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="max-w-5xl mx-auto px-6 -mt-10 relative z-20"
    >
      <div className="bg-white rounded-2xl md:rounded-full shadow-xl shadow-indigo-100/50 border border-gray-100 p-3 md:p-4">
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          <div className="flex-1 p-3 flex items-center gap-3">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
            <div className="flex flex-col w-full">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</label>
              <input 
                type="text" 
                placeholder="Where are you going?" 
                className="w-full outline-none text-gray-900 font-medium bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex-1 p-3 flex items-center gap-3">
            <CalendarIcon className="w-5 h-5 text-gray-400" />
            <div className="flex flex-col w-full">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Dates</label>
              <input 
                type="text" 
                placeholder="Check in - Check out" 
                className="w-full outline-none text-gray-900 font-medium bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex-1 p-3 flex items-center gap-3">
            <UserIcon className="w-5 h-5 text-gray-400" />
            <div className="flex flex-col w-full">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Guests</label>
              <input 
                type="text" 
                placeholder="2 adults, 1 room" 
                className="w-full outline-none text-gray-900 font-medium bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          <div className="p-2 md:p-1 flex items-center">
            <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl md:rounded-full px-8 py-3.5 font-semibold transition-colors">
              Search
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

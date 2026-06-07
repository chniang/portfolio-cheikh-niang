import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaStar, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { id: 'home', label: 'Accueil', icon: FaHome },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'projects', label: 'Projects', icon: FaCode },
  { id: 'skills', label: 'Skills', icon: FaStar },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="fixed top-0 left-0 w-64 h-screen bg-[#1A1F3A] border-r border-[#00D9FF]/30 flex flex-col py-8 px-4 z-50">
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#667EEA] mx-auto mb-3 flex items-center justify-center text-2xl font-black text-white">
            CN
          </div>
        </motion.div>
        <h2 className="text-white font-bold text-lg">Cheikh Niang</h2>
        <p className="text-[#00D9FF] text-sm">Data Scientist</p>
      </div>

      <div className="flex flex-col gap-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActivePage(item.id)}
              className={
                activePage === item.id
                  ? 'flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-left bg-gradient-to-r from-[#00D9FF] to-[#667EEA] text-white shadow-lg'
                  : 'flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-left text-gray-300 hover:bg-white/5 hover:text-[#00D9FF] transition-all duration-300'
              }
            >
              <Icon className="text-lg" />
              {item.label}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-auto text-center text-gray-500 text-xs">
        <p>2026 Cheikh Niang</p>
        <p>Dakar, Senegal</p>
      </div>
    </nav>
  );
}

export default Navbar;

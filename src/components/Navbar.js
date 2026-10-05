import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaStar, FaEnvelope, FaTools, FaAward } from 'react-icons/fa';

const navItems = [
  { id: 'home', label: 'Accueil', icon: FaHome },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'projects', label: 'Projects', icon: FaCode },
  { id: 'skills', label: 'Skills', icon: FaStar },
  { id: 'certifications', label: 'Certifications', icon: FaAward },
  { id: 'services', label: 'Services', icon: FaTools },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="w-64 h-screen bg-[#1A1F3A]/80 backdrop-blur-xl border-r border-[#00D9FF]/30 flex flex-col py-8 px-4 overflow-y-auto">
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-16 h-16 mx-auto mb-3"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#667EEA] blur-md opacity-60 animate-pulse" />
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#667EEA] flex items-center justify-center text-2xl font-black text-white font-display">
            CN
          </div>
        </motion.div>
        <h2 className="text-white font-bold text-lg font-display">Cheikh Niang</h2>
        <p className="text-[#00D9FF] text-sm font-mono">Data Scientist</p>
        <div className="flex items-center justify-center gap-1.5 mt-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B6FF3D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B6FF3D]"></span>
          </span>
          <span className="text-gray-400 text-xs">Ouvert aux opportunites</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActivePage(item.id)}
              className={
                isActive
                  ? 'relative flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-left text-white'
                  : 'relative flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-left text-gray-300 hover:bg-white/5 hover:text-[#00D9FF] transition-all duration-300'
              }
            >
              {isActive && (
                <motion.div
                  layoutId="navActivePill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#667EEA] shadow-lg shadow-[#00D9FF]/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <Icon className="relative text-lg" />
              <span className="relative">{item.label}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-auto text-center text-gray-500 text-xs font-mono">
        <p>2026 Cheikh Niang</p>
        <p>Dakar, Senegal</p>
      </div>
    </nav>
  );
}

export default Navbar;

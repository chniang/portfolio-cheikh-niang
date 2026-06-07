import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = {
    home: <Home setActivePage={setActivePage} />,
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
    services: <Services setActivePage={setActivePage} />,
    contact: <Contact />,
  };

  return (
    <div className="flex min-h-screen bg-[#0A0E27]">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 left-4 z-[60] md:hidden bg-gradient-to-r from-[#00D9FF] to-[#667EEA] p-3 rounded-xl shadow-lg"
      >
        <div className="w-5 h-0.5 bg-white mb-1"></div>
        <div className="w-5 h-0.5 bg-white mb-1"></div>
        <div className="w-5 h-0.5 bg-white"></div>
      </button>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[45] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className={menuOpen
        ? 'fixed top-0 left-0 h-full z-[50] translate-x-0 transition-transform duration-300'
        : 'fixed top-0 left-0 h-full z-[50] -translate-x-full md:translate-x-0 transition-transform duration-300'
      }>
        <Navbar
          activePage={activePage}
          setActivePage={(page) => {
            setActivePage(page);
            setMenuOpen(false);
          }}
        />
      </div>

      <main className="md:ml-64 flex-1 p-4 md:p-8 pt-16 md:pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {pages[activePage]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;

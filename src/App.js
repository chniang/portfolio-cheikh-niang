import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [activePage, setActivePage] = useState('home');

  const pages = {
    home: <Home setActivePage={setActivePage} />,
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
    contact: <Contact />,
  };

  return (
    <div className="flex min-h-screen bg-[#0A0E27]">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="ml-64 flex-1 p-8">
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

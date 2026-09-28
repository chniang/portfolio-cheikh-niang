import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import Dashboard from './Dashboard';
import RotatingText from './RotatingText';
import TiltCard from './TiltCard';
import SpotlightCard from './SpotlightCard';

const roles = ['Data Scientist', 'AI Engineer', 'NLP Engineer', 'Automatisation IA'];

const metrics = [
  { value: '12', label: 'Projets' },
  { value: '7', label: 'Apps deployees' },
  { value: '535K+', label: 'Donnees traitees' },
  { value: '0.87', label: 'AUC-ROC moyen' },
];

const recentProjects = [
  {
    title: 'GuindiMa AI',
    desc: 'Assistant vocal en wolof pour les bus de Dakar : ASR, extraction d\'intention par LLM et synthese vocale. 2e place Senegal (NVIDIA Brev Breakthrough Award), hackathon GOMYCODE x NVIDIA.',
    tech: ['Whisper', 'LLM', 'Gradio'],
    badge: '🏆 2e place',
    color: '#D4A017',
  },
  {
    title: 'AcademyOS - Xarala',
    desc: 'Plateforme de gestion de bootcamp (Django, Celery). Chef de Projet d\'une squad de 5, classee 2e du programme, plus de 400 tests automatises.',
    tech: ['Django', 'Celery', 'PostgreSQL'],
    badge: 'Chef de Projet',
    color: '#667EEA',
  },
  {
    title: 'Dakar Power Prediction',
    desc: 'Prediction des coupures electriques sur 8 quartiers de Dakar avec LightGBM + LSTM (AUC-ROC 0.87, recall 60% sur la classe minoritaire).',
    tech: ['LightGBM', 'TensorFlow', 'Streamlit'],
    badge: 'Deploye',
    color: '#10B981',
  },
];

function Home({ setActivePage }) {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="relative w-40 h-40 mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D9FF] via-[#667EEA] to-[#FF3DAE] blur-xl opacity-50 animate-pulse" />
          <img
            src="/photo.jpeg"
            alt="Cheikh Niang"
            className="relative w-40 h-40 rounded-full border-4 border-[#00D9FF] shadow-lg shadow-[#00D9FF]/40 object-cover"
          />
        </motion.div>
        <motion.h1
          className="text-5xl font-black text-white mb-3 font-display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Cheikh Niang
        </motion.h1>
        <motion.p
          className="text-2xl font-semibold mb-2 h-9 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <RotatingText words={roles} className="font-display" />
        </motion.p>
        <motion.p
          className="text-gray-400 italic text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Transformer les donnees en insights actionnables
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/chniang" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-[#1A1F3A] border border-[#00D9FF]/40 text-[#00D9FF] hover:bg-[#00D9FF]/10 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all text-sm sm:text-base">
            <FaGithub /> GitHub
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://www.linkedin.com/in/cheikh-niang-5370091b5/" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-[#1A1F3A] border border-[#667EEA]/40 text-[#667EEA] hover:bg-[#667EEA]/10 hover:shadow-lg hover:shadow-[#667EEA]/20 transition-all text-sm sm:text-base">
            <FaLinkedin /> LinkedIn
          </motion.a>
          <motion.button
            whileHover={{ y: -3 }}
            onClick={() => setActivePage('contact')}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#667EEA] text-white font-semibold hover:opacity-90 transition-all text-sm sm:text-base whitespace-nowrap">
            Me contacter <FaArrowRight className="text-sm" />
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {metrics.map((m, i) => (
          <SpotlightCard key={i} className="rounded-2xl">
            <motion.div
              className="bg-[#1A1F3A] rounded-2xl p-6 text-center border border-[#00D9FF]/20 hover:border-[#00D9FF] hover:-translate-y-2 transition-all duration-300 h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="text-3xl font-black text-[#00D9FF] font-display">{m.value}</div>
              <div className="text-gray-400 text-sm mt-1">{m.label}</div>
            </motion.div>
          </SpotlightCard>
        ))}
      </div>

      <Dashboard />

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#00D9FF] font-display">Projets Recents</h2>
        <button
          onClick={() => setActivePage('projects')}
          className="text-sm text-gray-400 hover:text-[#00D9FF] flex items-center gap-1 transition-colors"
        >
          Voir tout <FaArrowRight className="text-xs" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {recentProjects.map((p, i) => (
          <TiltCard key={i}>
            <SpotlightCard className="rounded-2xl h-full">
              <motion.div
                className="bg-[#1A1F3A] rounded-2xl p-6 border border-[#00D9FF]/20 hover:border-[#00D9FF] transition-all duration-300 cursor-pointer h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                onClick={() => setActivePage('projects')}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-bold text-sm leading-tight">{p.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full text-white ml-2 shrink-0" style={{ backgroundColor: p.color }}>
                    {p.badge}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, j) => (
                    <span key={j} className="text-xs px-2 py-1 rounded-full bg-[#667EEA]/20 text-[#667EEA]">{t}</span>
                  ))}
                </div>
              </motion.div>
            </SpotlightCard>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}

export default Home;

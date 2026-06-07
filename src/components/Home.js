import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const metrics = [
  { value: '6', label: 'Projets' },
  { value: '4', label: 'Apps deployees' },
  { value: '534K+', label: 'Donnees traitees' },
  { value: '90%', label: 'Precision ML' },
];

const recentProjects = [
  {
    title: 'Assistant vocal IA',
    desc: 'Pipeline vocal temps reel : appels sortants automatises avec IA conversationnelle, transcription Whisper et resume automatique par email.',
    tech: ['Python', 'Groq', 'Twilio', 'Flask'],
    badge: 'Livre',
    color: '#10B981',
  },
  {
    title: 'Event Classifier NLP Multilingue',
    desc: 'Module de classification EN/IT en 5 categories via sentence transformers. Accuracy 75.43%, livre a un client Fiverr.',
    tech: ['Python', 'NLP', 'Transformers', 'Scikit-learn'],
    badge: 'Client Fiverr',
    color: '#667EEA',
  },
  {
    title: 'Dakar Power Prediction',
    desc: 'Prediction des coupures electriques sur 8 quartiers de Dakar avec LightGBM (88%) et LSTM (90%).',
    tech: ['Python', 'LightGBM', 'TensorFlow', 'Streamlit'],
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
        <motion.img
          src="/photo.jpg"
          alt="Cheikh Niang"
          className="w-40 h-40 rounded-full border-4 border-[#00D9FF] shadow-lg shadow-[#00D9FF]/40 mx-auto mb-6 object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.h1
          className="text-5xl font-black text-white mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Cheikh Niang
        </motion.h1>
        <motion.p
          className="text-2xl text-[#00D9FF] font-semibold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Data Scientist | Automatisation et AI
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
          className="flex justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="https://github.com/chniang" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#1A1F3A] border border-[#00D9FF]/40 text-[#00D9FF] hover:bg-[#00D9FF]/10 transition-all">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/cheikh-niang-5370091b5/" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#1A1F3A] border border-[#667EEA]/40 text-[#667EEA] hover:bg-[#667EEA]/10 transition-all">
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            className="bg-[#1A1F3A] rounded-2xl p-6 text-center border border-[#00D9FF]/20 hover:border-[#00D9FF] hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <div className="text-3xl font-black text-[#00D9FF]">{m.value}</div>
            <div className="text-gray-400 text-sm mt-1">{m.label}</div>
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#00D9FF] mb-6">Projets Recents</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {recentProjects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-[#1A1F3A] rounded-2xl p-6 border border-[#00D9FF]/20 hover:border-[#00D9FF] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
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
        ))}
      </div>
    </div>
  );
}

export default Home;

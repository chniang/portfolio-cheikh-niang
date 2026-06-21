import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCog, FaChartLine, FaMicrophone, FaDatabase, FaCode } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: FaRobot,
    title: 'Machine Learning et Prediction',
    desc: 'Modeles predictifs sur mesure : classification, regression, forecasting. LightGBM, TensorFlow, Scikit-learn. Pipeline complet du preprocessing au deploiement.',
    tags: ['LightGBM', 'TensorFlow', 'Scikit-learn'],
  },
  {
    icon: FaMicrophone,
    title: 'Voice AI et Assistants Intelligents',
    desc: 'Systemes vocaux automatises : appels sortants, transcription Whisper, conversation LLM, resume automatique. Stack Twilio + Groq + Flask.',
    tags: ['Twilio', 'Whisper', 'Groq', 'Flask'],
  },
  {
    icon: FaCog,
    title: 'Automatisation et Integrations',
    desc: 'Automatisation de workflows metier via Make.com, APIs REST, Notion, Google Sheets. Zero intervention manuelle apres configuration.',
    tags: ['APIs REST'],
  },
  {
    icon: FaCode,
    title: 'NLP et Traitement de Texte',
    desc: 'Analyse de sentiments, classification de textes, extraction d information. Transformers HuggingFace, modeles multilingues EN/FR/IT.',
    tags: ['Transformers', 'TextBlob'],
  },
  {
    icon: FaChartLine,
    title: 'Analytics et Dashboards',
    desc: 'Tableaux de bord interactifs temps reel avec KPIs metier, segmentation clients, visualisations avancees. Streamlit, Plotly.',
    tags: ['Streamlit', 'Plotly'],
  },
  {
    icon: FaDatabase,
    title: 'Data Engineering et ETL',
    desc: 'Pipelines de donnees end-to-end : collecte, nettoyage, transformation, stockage. PostgreSQL, Supabase, SQLAlchemy.',
    tags: ['PostgreSQL', 'Supabase', 'SQLAlchemy'],
  },
];

function Services({ setActivePage }) {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-black text-white mb-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Services
      </motion.h1>
      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#667EEA] rounded mb-4"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.p
        className="text-gray-400 mb-10 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Solutions data et IA pour transformer vos donnees en decisions business
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <AnimatedSection key={i} delay={i * 0.1} direction="up">
              <div className="bg-[#1A1F3A] rounded-2xl p-6 border border-[#00D9FF]/20 hover:border-[#00D9FF] hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-[#667EEA]/20 flex items-center justify-center mb-4">
                  <Icon className="text-2xl text-[#00D9FF]" />
                </div>
                <h2 className="text-white font-bold text-lg mb-3">{s.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-2 py-1 rounded-full bg-[#667EEA]/20 text-[#667EEA]">{tag}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection direction="zoom">
        <div className="bg-gradient-to-r from-[#00D9FF]/10 to-[#667EEA]/10 rounded-2xl p-8 border border-[#00D9FF]/30 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Un projet en tete ?</h2>
          <p className="text-gray-400 mb-6">Discutons de vos besoins et trouvons la solution adaptee.</p>
          <button
            onClick={() => setActivePage('contact')}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#667EEA] text-white font-bold hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
          >
            Me contacter
          </button>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Services;

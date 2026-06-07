import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Assistant vocal IA - Appels automatises',
    desc: 'POC vocal IA pour appels sortants automatises. Pipeline complet : appel Twilio, transcription Whisper, conversation Llama 3.3 70B, resume structure par email. Livre et valide par le client.',
    tech: ['Python', 'Twilio', 'Groq', 'Whisper', 'Flask', 'ngrok'],
    badge: 'Livre Client',
    badgeColor: '#10B981',
    github: null, confidential: true,
    demo: null,
  },
  {
    title: 'Event Classifier - NLP Multilingue',
    desc: 'Module de classification EN/IT en 5 categories via sentence transformers. Accuracy 75.43%, F1 0.747. Livre a un client Fiverr.',
    tech: ['Python', 'Transformers', 'Scikit-learn', 'NLP'],
    badge: 'Livre Client',
    badgeColor: '#667EEA',
    github: 'https://github.com/chniang/event-classifier',
    demo: null,
  },
  {
    title: 'Dakar Power Prediction',
    desc: 'Prediction des risques de coupure electrique sur 8 quartiers de Dakar. LightGBM (88%) et LSTM (90%). Pipeline ETL, modelisation, dashboard interactif. 70 001 observations, historique Supabase.',
    tech: ['Python', 'LightGBM', 'TensorFlow', 'Streamlit', 'Supabase', 'Plotly'],
    badge: 'Deploye',
    badgeColor: '#10B981',
    github: 'https://github.com/chniang/dakar-power-prediction',
    demo: 'https://huggingface.co/spaces/TIJAANI/dakar-power-prediction',
  },
  {
    title: 'SentimentScope - Analyse NLP',
    desc: 'Classificateur de sentiments positif/negatif/neutre base sur Transformers HuggingFace - 82% de precision. 3 modes : texte libre, batch CSV (10 000+ textes), temps reel avec scores de confiance.',
    tech: ['Python', 'Transformers', 'NLTK', 'TextBlob', 'Streamlit', 'Plotly'],
    badge: 'Deploye',
    badgeColor: '#10B981',
    github: 'https://github.com/chniang/sentiment-analysis-nlp',
    demo: 'https://huggingface.co/spaces/TIJAANI/sentiment-scope',
  },
  {
    title: 'TidianeFlix - Gestion Cinema',
    desc: 'Application full-stack de gestion de billetterie avec dashboard analytics, KPIs financiers temps reel, segmentation clients ML et prediction des ventes. BDD relationnelle 6 tables.',
    tech: ['Python', 'Streamlit', 'SQLite', 'SQLAlchemy', 'Scikit-learn', 'Plotly'],
    badge: 'Deploye',
    badgeColor: '#10B981',
    github: 'https://github.com/chniang/TIDIANE_FLIX',
    demo: 'https://huggingface.co/spaces/TIJAANI/tidiane-flix',
  },
  {
    title: 'Analyse du Climat Africain',
    desc: '464 815 observations meteorologiques sur 43 ans (1980-2023), 5 pays africains. Hausse moyenne de +1.51F identifiee via analyse de series temporelles.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
    badge: 'Complet',
    badgeColor: '#F59E0B',
    github: 'https://github.com/chniang/Africa_climate_change_visualisation',
    demo: null,
  },
];

function Projects() {
  const [filter, setFilter] = useState('Tous');
  const filters = ['Tous', 'Livre Client', 'Deploye', 'Complet'];

  const filtered = filter === 'Tous' ? projects : projects.filter(p => p.badge === filter);

  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-black text-white mb-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Projets
      </motion.h1>
      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#667EEA] rounded mb-8"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      <div className="flex gap-3 mb-8 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={
              filter === f
                ? 'px-4 py-2 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#00D9FF] to-[#667EEA] text-white'
                : 'px-4 py-2 rounded-xl font-semibold text-sm bg-[#1A1F3A] text-gray-400 border border-[#00D9FF]/20 hover:border-[#00D9FF] hover:text-[#00D9FF] transition-all duration-300'
            }
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <motion.div
            key={i}
            className="bg-[#1A1F3A] rounded-2xl p-6 border border-[#00D9FF]/20 hover:border-[#00D9FF] hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-white font-bold text-lg leading-tight">{p.title}</h2>
              <span className="text-xs px-2 py-1 rounded-full text-white ml-2 shrink-0 font-semibold" style={{ backgroundColor: p.badgeColor }}>
                {p.badge}
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, j) => (
                <span key={j} className="text-xs px-2 py-1 rounded-full bg-[#667EEA]/20 text-[#667EEA]">{t}</span>
              ))}
            </div>

            <div className="flex gap-3">
              {p.confidential && (
                <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#667EEA] text-white text-sm cursor-default font-semibold">
                  Code confidentiel - Projet client
                </span>
              )}
              {!p.confidential && p.github && (
                <a href={p.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A0E27] border border-[#00D9FF]/40 text-[#00D9FF] text-sm hover:bg-[#00D9FF]/10 transition-all">
                  <FaGithub /> GitHub
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#667EEA] text-white text-sm hover:opacity-90 transition-all">
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

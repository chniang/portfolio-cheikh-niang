import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
import TiltCard from './TiltCard';
import SpotlightCard from './SpotlightCard';

const projects = [
  {
    title: 'LinguaScope',
    desc: 'Analyse de sentiment et de discours en français et anglais : détection de polarité, mots parasites, structure du discours et score de clarté, avec feedback automatique.',
    tech: ['Python', 'Gradio', 'TextBlob', 'NLP', 'langdetect'],
    badge: 'Deploye',
    badgeColor: '#10B981',
    github: 'https://github.com/chniang/linguascope',
    demo: 'https://huggingface.co/spaces/TIJAANI/linguascope',
    image: 'linguascope.jpg',
  },
  {
    title: 'Assistant vocal IA - Appels automatises',
    desc: 'POC vocal IA pour appels sortants automatises. Pipeline complet : appel Twilio, transcription Whisper, conversation Llama 3.3 70B, resume structure par email. Livre et valide par le client.',
    tech: ['Python', 'Twilio', 'Groq', 'Whisper', 'Flask', 'ngrok'],
    badge: 'Livre Client',
    badgeColor: '#10B981',
    github: null,
    confidential: true,
    demo: null,
  },
  {
    title: 'Event Classifier - NLP Multilingue',
    desc: 'Module de classification EN/IT en 5 categories via sentence transformers. Accuracy 75.43%, F1 0.747. Livre a un client Fiverr en 3 jours d\'avance.',
    tech: ['Python', 'Transformers', 'Scikit-learn', 'NLP'],
    badge: 'Livre Client',
    badgeColor: '#10B981',
    github: null,
    confidential: true,
    demo: null,
  },
  {
    title: 'GuindiMa AI',
    desc: 'Assistant vocal en wolof qui indique la ligne de bus entre deux lieux de Dakar (31 lignes reelles). Pipeline ASR wolof, extraction d\'intention par LLM, synthese vocale. Concu en une journee pour un hackathon GoMyCode x NVIDIA.',
    tech: ['Python', 'Whisper', 'Gradio', 'Hugging Face', 'NLP'],
    badge: 'Deploye',
    badgeColor: '#10B981',
    github: 'https://github.com/chniang/wolof-bus-assistant',
    demo: 'https://huggingface.co/spaces/TIJAANI/guindima-ai',
    image: 'guindima-ai.jpg',
  },
  {
    title: 'CarteViz',
    desc: 'SaaS de cartes de visite numeriques pour le marche africain : lien personnalise, QR code telechargeable, partage WhatsApp. MVP en ligne ; dashboard analytics et paiement Wave/Orange Money prevus en phase 2.',
    tech: ['JavaScript', 'Node.js', 'Firestore', 'Supabase', 'Vercel'],
    badge: 'Deploye',
    badgeColor: '#10B981',
    github: 'https://github.com/chniang/carte_visite',
    demo: 'https://chniang.github.io/carte_visite/index_saas.html',
    image: 'carteviz.jpg',
  },
  {
    title: 'AcademyOS - Xarala Talent Camp',
    desc: 'Plateforme de gestion de bootcamp (Django, Celery) developpee en squad de 5 : suivi des cohortes, certificats PDF verifiables par QR code, plus de 400 tests automatises. Chef de Projet ; squad classee 2e du programme.',
    tech: ['Django', 'Celery', 'WeasyPrint', 'Python'],
    badge: 'Complet',
    badgeColor: '#F59E0B',
    github: null,
    demo: 'https://academy-os-ten.vercel.app',
    image: 'academyos.jpg',
  },
  {
    title: 'Admito',
    desc: 'SaaS d\'aide a la preparation aux concours administratifs senegalais (Police, CREM, Douane, Gendarmerie) : algorithme d\'eligibilite deterministe, calendrier public, rappels de cloture par email automatises. MVP deploye en production ; paiement mobile money valide en sandbox, lancement commercial en attente (NINEA/RC, domaine).',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Resend'],
    badge: 'En Pause',
    badgeColor: '#94A3B8',
    github: 'https://github.com/chniang/admito',
    demo: 'https://admito-ivory.vercel.app',
    image: 'admito.jpg',
  },
  {
    title: 'AcademyOS Content Recommender',
    desc: 'Systeme de recommandation de contenu pedagogique pour les apprenants d\'AcademyOS : embeddings multilingues (sentence-transformers) et similarite cosinus sur un catalogue de 6 600+ cours Coursera, sans fine-tuning. Interface Streamlit avec selection d\'apprenant et liens directs vers les cours recommandes.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Data Analysis'],
    badge: 'Deploye',
    badgeColor: '#10B981',
    github: 'https://github.com/chniang/academyos-content-recommender',
    demo: 'https://academyos-content-recommender.streamlit.app',
  },
  {
    title: 'Dakar Power Prediction',
    desc: 'Prediction des risques de coupure electrique sur 8 quartiers de Dakar. LightGBM + LSTM, AUC-ROC 0.87, recall 60% sur la classe minoritaire. 70 000 observations, dashboard interactif.',
    tech: ['Python', 'LightGBM', 'TensorFlow', 'Streamlit', 'Supabase', 'Plotly'],
    badge: 'Deploye',
    badgeColor: '#10B981',
    github: 'https://github.com/chniang/dakar-power-prediction',
    demo: 'https://huggingface.co/spaces/TIJAANI/dakar-power-prediction',
    image: 'dakar-power-prediction.png',
  },
  {
    title: 'CineFlow',
    desc: 'Systeme complet de gestion de cinema : catalogue 15 films, planification 3 salles, reservations, KPIs financiers temps reel et prediction des ventes ML. BDD relationnelle 6 tables, interface Streamlit.',
    tech: ['Python', 'Streamlit', 'SQLite', 'SQLAlchemy', 'Scikit-learn', 'Plotly'],
    badge: 'Deploye',
    badgeColor: '#10B981',
    github: 'https://github.com/chniang/cineflow',
    demo: 'https://huggingface.co/spaces/TIJAANI/cineflow',
    image: 'cineflow.png',
  },
  {
    title: 'Analyse du Climat Africain',
    desc: '464 815 observations meteorologiques sur 43 ans (1980-2023), 5 pays africains. Hausse moyenne de +1.51F identifiee via analyse de series temporelles.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
    badge: 'Complet',
    badgeColor: '#F59E0B',
    github: 'https://github.com/chniang/Africa_climate_change_visualisation',
    demo: null,
    image: 'africa-climate.png',
  },
  {
    title: 'Smart Crowd Alert',
    desc: 'Surveillance intelligente de l\'affluence en temps reel pour les JOJ Dakar 2026. Dashboard Flask avec alertes par zone (Normal / Attention / Critique) pour 70 000+ spectateurs sur 10 sites.',
    tech: ['Flask', 'Python', 'JavaScript', 'HTML/CSS'],
    badge: 'Deploye',
    badgeColor: '#10B981',
    github: 'https://github.com/chniang/SMART_CROWD_ALERT',
    demo: 'https://smart-crowd-alert.onrender.com',
    image: 'dashboard_preview.png',
  },
];

function Projects() {
  const [filter, setFilter] = useState('Tous');
  const filters = ['Tous', 'Livre Client', 'Deploye', 'Complet', 'En Pause'];
  const filtered = filter === 'Tous' ? projects : projects.filter(p => p.badge === filter);

  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-black text-white mb-2 font-display"
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
                ? 'relative px-4 py-2 rounded-xl font-semibold text-sm text-white'
                : 'relative px-4 py-2 rounded-xl font-semibold text-sm bg-[#1A1F3A] text-gray-400 border border-[#00D9FF]/20 hover:border-[#00D9FF] hover:text-[#00D9FF] transition-all duration-300'
            }
          >
            {filter === f && (
              <motion.div
                layoutId="projectFilterPill"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#667EEA]"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.05} direction="up">
            <TiltCard className="h-full">
              <SpotlightCard className="rounded-2xl h-full">
                <div className="bg-[#1A1F3A] rounded-2xl border border-[#00D9FF]/20 hover:border-[#00D9FF] transition-all duration-300 h-full overflow-hidden flex flex-col">
                  {p.image && (
                    <img
                      src={`/images/projects/${p.image}`}
                      alt={p.title}
                      className="w-full aspect-video object-cover"
                    />
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-white font-bold text-lg leading-tight font-display">{p.title}</h2>
                      <span className="text-xs px-2 py-1 rounded-full text-white ml-2 shrink-0 font-semibold" style={{ backgroundColor: p.badgeColor }}>
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map((t, j) => (
                        <span key={j} className="text-xs px-2 py-1 rounded-full bg-[#667EEA]/20 text-[#667EEA] font-mono">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      {p.confidential && (
                        <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#667EEA] text-white text-sm font-semibold">
                          Code confidentiel - Projet client
                        </span>
                      )}
                      {!p.confidential && p.github && (
                        <motion.a whileHover={{ y: -2 }} href={p.github} target="_blank" rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A0E27] border border-[#00D9FF]/40 text-[#00D9FF] text-sm hover:bg-[#00D9FF]/10 transition-all">
                          <FaGithub /> GitHub
                        </motion.a>
                      )}
                      {p.demo && (
                        <motion.a whileHover={{ y: -2 }} href={p.demo} target="_blank" rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#667EEA] text-white text-sm hover:opacity-90 transition-all">
                          <FaExternalLinkAlt /> Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </TiltCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

export default Projects;

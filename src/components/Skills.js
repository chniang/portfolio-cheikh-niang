import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaMicrophone, FaCog, FaChartBar, FaDatabase, FaRocket } from 'react-icons/fa';

const skillGroups = [
  {
    title: 'Langages',
    icon: FaCode,
    skills: ['Python', 'SQL', 'Bash', 'HTML/CSS'],
  },
  {
    title: 'Machine Learning',
    icon: FaBrain,
    skills: ['Scikit-learn', 'LightGBM', 'TensorFlow', 'Keras', 'Regression', 'Classification', 'Feature Engineering'],
  },
  {
    title: 'NLP et Voice AI',
    icon: FaMicrophone,
    skills: ['Transformers HuggingFace', 'Whisper', 'Groq API', 'Prompt Engineering', 'NLTK', 'TextBlob', 'Voice AI'],
  },
  {
    title: 'APIs et Automatisation',
    icon: FaCog,
    skills: ['Twilio Voice API', 'Make.com', 'Notion API', 'Meta APIs', 'APIs REST', 'Google Sheets API'],
  },
  {
    title: 'Data et Visualisation',
    icon: FaChartBar,
    skills: ['Pandas', 'NumPy', 'Plotly', 'Matplotlib', 'Seaborn', 'Streamlit', 'Looker Studio', 'Tableau'],
  },
  {
    title: 'Bases de donnees',
    icon: FaDatabase,
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'SQLAlchemy'],
  },
  {
    title: 'DevOps et Deploiement',
    icon: FaRocket,
    skills: ['Git', 'GitHub', 'Vercel', 'HuggingFace Spaces', 'Flask', 'ngrok', 'VS Code', 'Jupyter'],
  },
];

function Skills() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-black text-white mb-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Competences
      </motion.h1>
      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#667EEA] rounded mb-10"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={i}
              className="bg-[#1A1F3A] rounded-2xl p-6 border border-[#00D9FF]/20 hover:border-[#00D9FF] hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Icon className="text-3xl text-[#00D9FF] mb-3" />
              <h2 className="text-white font-bold text-lg mb-4">{group.title}</h2>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full bg-[#667EEA]/20 text-[#667EEA] font-semibold hover:bg-[#00D9FF]/20 hover:text-[#00D9FF] transition-all cursor-default"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;

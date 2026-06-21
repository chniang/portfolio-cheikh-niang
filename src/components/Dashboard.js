import React from 'react';
import { motion } from 'framer-motion';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  PieChart, Pie, Cell, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';

const projectTechs = [
  ['Python', 'Gradio', 'TextBlob', 'NLP', 'langdetect'],
  ['Python', 'Twilio', 'Groq', 'Whisper', 'Flask', 'ngrok'],
  ['Python', 'Transformers', 'Scikit-learn', 'NLP'],
  ['Python', 'LightGBM', 'TensorFlow', 'Streamlit', 'Supabase', 'Plotly'],
  ['Python', 'Streamlit', 'SQLite', 'SQLAlchemy', 'Scikit-learn', 'Plotly'],
  ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
  ['Flask', 'Python', 'JavaScript', 'HTML/CSS'],
];

const domains = [
  { skill: 'Machine Learning', keywords: ['LightGBM', 'TensorFlow', 'Scikit-learn', 'Transformers'] },
  { skill: 'NLP',              keywords: ['NLP', 'Transformers', 'TextBlob', 'langdetect'] },
  { skill: 'Voice AI',         keywords: ['Twilio', 'Whisper', 'OpenAI API'] },
  { skill: 'Automatisation',   keywords: ['Flask', 'Make.com', 'APIs REST'] },
  { skill: 'Analytics',        keywords: ['Pandas', 'Plotly', 'Matplotlib', 'Streamlit', 'Dashboard'] },
  { skill: 'Data Eng.',        keywords: ['SQL', 'SQLAlchemy', 'Docker', 'ETL'] },
];

const _counts = domains.map(d => ({
  skill: d.skill,
  count: projectTechs.filter(techs =>
    techs.some(t => d.keywords.some(kw => t.toLowerCase().includes(kw.toLowerCase())))
  ).length,
}));

const _max = Math.max(..._counts.map(c => c.count));

const radarData = _counts.map(c => ({
  skill: c.skill,
  value: Math.round((c.count / _max) * 100),
}));

const donutData = [
  { name: 'Livre Client', value: 2 },
  { name: 'Deploye', value: 4 },
  { name: 'Complet', value: 1 },
];

const donutColors = ['#10B981', '#00D9FF', '#F59E0B'];

const timelineData = [
  { period: 'Oct 22', projets: 1 },
  { period: 'Mai 24', projets: 2 },
  { period: 'Jan 25', projets: 3 },
  { period: 'Avr 26', projets: 5 },
  { period: 'Mai 26', projets: 7 },
];

function Dashboard() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <motion.div
        className="bg-[#1A1F3A] rounded-2xl p-5 border border-[#00D9FF]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-[#00D9FF] font-bold text-sm mb-4 text-center">Competences</h3>
        <ResponsiveContainer width="100%" height={200}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="#667EEA20" />
            <PolarAngleAxis dataKey="skill" tick={{ fill: '#8B9DC3', fontSize: 10 }} />
            <Radar
              name="Skills"
              dataKey="value"
              stroke="#00D9FF"
              fill="#00D9FF"
              fillOpacity={0.2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        className="bg-[#1A1F3A] rounded-2xl p-5 border border-[#00D9FF]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-[#00D9FF] font-bold text-sm mb-4 text-center">Repartition Projets</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={donutData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {donutData.map((entry, index) => (
                <Cell key={index} fill={donutColors[index]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: '#1A1F3A', border: '1px solid #00D9FF33', borderRadius: '8px', color: '#fff' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-3 mt-2">
          {donutData.map((d, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: donutColors[i] }}></div>
              <span className="text-gray-400 text-xs">{d.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-[#1A1F3A] rounded-2xl p-5 border border-[#00D9FF]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-[#00D9FF] font-bold text-sm mb-4 text-center">Progression</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#667EEA20" />
            <XAxis dataKey="period" tick={{ fill: '#8B9DC3', fontSize: 10 }} />
            <YAxis tick={{ fill: '#8B9DC3', fontSize: 10 }} />
            <Tooltip
              contentStyle={{ background: '#1A1F3A', border: '1px solid #00D9FF33', borderRadius: '8px', color: '#fff' }}
            />
            <Bar dataKey="projets" fill="url(#gradient)" radius={[4, 4, 0, 0]} />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D9FF" />
                <stop offset="100%" stopColor="#667EEA" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}

export default Dashboard;

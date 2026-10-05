import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
import SpotlightCard from './SpotlightCard';

// Ajouter `date` ("Mois AAAA") et `url` (lien de verification) quand ils sont confirmes.
const certifications = [
  { title: 'Data Scientist Bootcamp - Certificate of Completion', issuer: 'GOMYCODE', topic: 'Data Science' },
  { title: 'Python', issuer: 'GOMYCODE', topic: 'Programmation' },
  { title: 'Python', issuer: 'DataCamp', topic: 'Programmation' },
  { title: 'Introduction to Data Analytics', issuer: 'IBM (Coursera)', topic: 'Data Analytics' },
  { title: 'What is Data Science?', issuer: 'IBM (Coursera)', topic: 'Data Science' },
  { title: 'Foundations: Data, Data, Everywhere', issuer: 'Google (Coursera)', topic: 'Data Analytics' },
];

function Certifications() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-black text-white mb-2 font-display"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Certifications
      </motion.h1>
      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#667EEA] rounded mb-10"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.1} direction="zoom">
            <SpotlightCard className="rounded-2xl h-full">
              <div className="bg-[#1A1F3A] rounded-2xl p-6 border border-[#00D9FF]/20 hover:border-[#00D9FF] hover:-translate-y-2 transition-all duration-300 h-full">
                <FaAward className="text-3xl text-[#00D9FF] mb-3" />
                <h2 className="text-white font-bold text-lg mb-1 font-display">{c.title}</h2>
                <p className="text-[#00D9FF] text-sm font-mono mb-3">{c.issuer}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#667EEA]/20 text-[#667EEA] font-semibold">{c.topic}</span>
                  {c.date && <span className="text-xs text-gray-400">{c.date}</span>}
                  {c.url && (
                    <a href={c.url} target="_blank" rel="noreferrer" className="text-xs text-[#00D9FF] hover:underline">
                      Verifier
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

export default Certifications;

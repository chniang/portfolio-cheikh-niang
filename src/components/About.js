import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaRocket, FaLanguage } from 'react-icons/fa';

const cards = [
  {
    Icon: FaGraduationCap,
    title: 'Formation',
    items: [
      'Certification Data Science - GOMYCODE (2024-2025)',
      'Certification Python - GOMYCODE (2024-2025)',
      'Licence Physique-Chimie et Sciences de la Matiere - UCAD (2017-2022)',
    ],
  },
  {
    Icon: FaBriefcase,
    title: 'Experience',
    items: [
      'AI and Automation Engineer - Martin Malo / Holding 1.2NET (Mai 2026 - present)',
      'Specialiste Automatisation et Data - Martin Malo inc. (Avr-Mai 2026)',
      'Consultant Commercial Freelance - Pikou Service (Oct 2022 - Dec 2023)',
    ],
  },
  {
    Icon: FaRocket,
    title: 'Objectifs',
    items: [
      'Concevoir des pipelines data et IA end-to-end pour des clients reels',
      'Specialisation NLP, Voice AI et automatisation multi-plateformes',
      'Contribuer a la transformation digitale en Afrique et a international',
    ],
  },
  {
    Icon: FaLanguage,
    title: 'Langues',
    items: [
      'Francais - C1 Courant',
      'Anglais - B1 Professionnel',
      'Wolof - Langue maternelle',
    ],
  },
];

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl font-black text-white mb-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        A Propos
      </motion.h1>
      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#667EEA] rounded mb-10"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, i) => {
          const Icon = card.Icon;
          return (
            <motion.div
              key={i}
              className="bg-[#1A1F3A] rounded-2xl p-8 border border-[#00D9FF]/20 hover:border-[#00D9FF] hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Icon className="text-3xl text-[#00D9FF] mb-4" />
              <h2 className="text-white font-bold text-xl mb-4">{card.title}</h2>
              <ul className="space-y-2">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                    <span className="text-[#00D9FF] mt-1 font-bold">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default About;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';

const contacts = [
  {
    icon: <FaEnvelope className="text-2xl text-[#00D9FF]" />,
    label: 'Email',
    value: 'cheikhniang159@gmail.com',
    href: 'mailto:cheikhniang159@gmail.com',
  },
  {
    icon: <FaPhone className="text-2xl text-[#00D9FF]" />,
    label: 'Telephone',
    value: '+221 77 636 27 14',
    href: 'tel:+221776362714',
  },
  {
    icon: <FaLinkedin className="text-2xl text-[#00D9FF]" />,
    label: 'LinkedIn',
    value: 'cheikh-niang-8b9418271',
    href: 'https://www.linkedin.com/in/cheikh-niang-5370091b5/',
  },
  {
    icon: <FaGithub className="text-2xl text-[#00D9FF]" />,
    label: 'GitHub',
    value: '@chniang',
    href: 'https://github.com/chniang',
  },
  {
    icon: <SiHuggingface className="text-2xl text-[#00D9FF]" />,
    label: 'Hugging Face',
    value: 'TIJAANI',
    href: 'https://huggingface.co/TIJAANI',
  },
];

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xnjqbrpa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-black text-white mb-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Contact
      </motion.h1>
      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#667EEA] rounded mb-10"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Envoyez-moi un message</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded-xl bg-[#1A1F3A] border border-[#00D9FF]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition-all"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className="w-full px-4 py-3 rounded-xl bg-[#1A1F3A] border border-[#00D9FF]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition-all"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Sujet"
              className="w-full px-4 py-3 rounded-xl bg-[#1A1F3A] border border-[#00D9FF]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition-all"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message..."
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-[#1A1F3A] border border-[#00D9FF]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition-all resize-none"
            />
            <button
              onClick={handleSubmit}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#667EEA] text-white font-bold hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
            >
              Envoyer le message
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-center font-semibold">Message envoye avec succes !</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center font-semibold">Erreur - reessayez ou contactez par email.</p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Autres moyens de contact</h2>
          <div className="flex flex-col gap-4">
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1F3A] border border-[#00D9FF]/20 hover:border-[#00D9FF] hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {c.icon}
                <div>
                  <p className="text-gray-400 text-xs">{c.label}</p>
                  <p className="text-white font-semibold text-sm">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;

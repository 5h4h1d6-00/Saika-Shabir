import React from 'react';
import { Github, Linkedin, Twitter, Globe, ArrowUp, Mail, Phone } from 'lucide-react';
import { resumeData } from '../data';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={16} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={16} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={16} />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Globe size={16} />, url: '#', label: 'Portfolio' }
  ];

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-slate-150 dark:border-slate-800/40 pt-16 pb-12 transition-colors duration-300 relative overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-r from-purple-100/30 to-pink-100/30 dark:from-purple-900/5 dark:to-pink-900/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* Col 1: Bio summary (5/12) */}
        <div className="md:col-span-5 flex flex-col items-start gap-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-black tracking-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent focus:outline-none cursor-pointer"
          >
            Saika.S
          </button>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm text-justify">
            A structured, single-view online resume built to showcase scholastic, programming, and technical expertise acquired during my Diploma in Computer Science Engineering.
          </p>
          <div className="flex gap-3.5 mt-2">
            {socialLinks.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-purple-100/50 dark:hover:bg-purple-950/40 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 border border-slate-100 dark:border-slate-850 flex items-center justify-center transition-all shadow-xs"
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Quick Links (3/12) */}
        <div className="md:col-span-3 flex flex-col items-start gap-4">
          <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer focus:outline-none"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Direct info (4/12) */}
        <div className="md:col-span-4 flex flex-col items-start gap-4">
          <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
            Direct Contact
          </h4>
          <div className="flex flex-col gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <a 
              href={`mailto:${resumeData.email}`} 
              className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Mail size={14} className="text-pink-500/80" />
              <span>{resumeData.email}</span>
            </a>
            <a 
              href={`tel:${resumeData.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Phone size={14} className="text-pink-500/80" />
              <span>{resumeData.phone}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Under footer copyright lines */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-100 dark:border-slate-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
        <p>© {currentYear} Saika Shabir. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          <span>Built with React, Vite & Tailwind CSS</span>
        </p>
      </div>

    </footer>
  );
};

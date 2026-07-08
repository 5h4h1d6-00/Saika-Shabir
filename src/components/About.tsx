import React from 'react';
import { User, Award, Flame, Star, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { resumeData } from '../data';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  };

  const features = [
    { icon: <Flame size={18} className="text-pink-500" />, label: "Dedicated", desc: "Committed to delivering high-quality, systematic work." },
    { icon: <Star size={18} className="text-purple-500" />, label: "Quick Learner", desc: "Passionate about exploring and picking up new skills." },
    { icon: <Award size={18} className="text-pink-500" />, label: "Team Player", desc: "Strong believer in collective effort and accountability." }
  ];

  return (
    <section 
      id="about" 
      className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-pink-100/35 dark:bg-pink-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100/35 dark:bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest font-mono mb-2"
          >
            Getting to Know Me
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight"
          >
            About Me & Career Goals
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Column 1: About Me (7/12) */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-7 artistic-card p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-2xl text-purple-600 dark:text-purple-400 border border-purple-100/50 dark:border-purple-800/30">
                <User size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                Professional Introduction
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-justify">
              {resumeData.aboutMe}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-150 dark:border-slate-800/40">
              {features.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="p-4 bg-white/40 dark:bg-slate-900/20 rounded-2xl border border-slate-100 dark:border-slate-800/40 hover:border-pink-200/50 dark:hover:border-purple-800/50 transition-colors"
                >
                  <div className="mb-2 bg-white dark:bg-slate-900 w-8 h-8 rounded-lg flex items-center justify-center shadow-xs border border-slate-100 dark:border-slate-800">
                    {feat.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-1">
                    {feat.label}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Career Objective & Meta (5/12) */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Career Objective Card */}
            <div className="artistic-card p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-pink-200/30 to-purple-200/30 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-2xl text-pink-600 dark:text-pink-400 border border-pink-100/50 dark:border-pink-800/30">
                  <Target size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  Career Objective
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify relative z-10">
                {resumeData.careerObjective}
              </p>
            </div>

            {/* Quick Summary Meta */}
            <div className="artistic-card p-6 shadow-sm">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono mb-4">
                Core Assets & Traits
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3.5 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-100/40 dark:border-purple-800/30 font-medium shadow-xs">
                  🎓 Computer Science Eng.
                </span>
                <span className="text-xs px-3.5 py-1.5 rounded-xl bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border border-pink-100/40 dark:border-pink-800/30 font-medium shadow-xs">
                  🤝 Strong Teamwork
                </span>
                <span className="text-xs px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/30 text-slate-700 dark:text-slate-300 border border-slate-150 dark:border-slate-800/40 font-medium shadow-xs">
                  🌱 Willingness to Learn
                </span>
                <span className="text-xs px-3.5 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-100/40 dark:border-purple-800/30 font-medium shadow-xs">
                  😇 Honest & Accountable
                </span>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

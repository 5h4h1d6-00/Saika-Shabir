import React from 'react';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { resumeData } from '../data';

export const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background blurs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-pink-200/20 dark:bg-pink-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest font-mono mb-2"
          >
            Academic Journey
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight"
          >
            Education History
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto">
          {resumeData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
              className="relative pl-8 sm:pl-12 pb-8 group"
            >
              {/* Timeline Connector Line */}
              <div className="absolute left-4 sm:left-6 top-10 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/55 to-pink-500/10 group-last:hidden" />

              {/* Timeline Node Icon Bubble */}
              <div className="absolute left-0 sm:left-2 top-0 w-8 sm:w-10 h-8 sm:h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-md shadow-purple-500/10 scale-95 group-hover:scale-105 transition-transform duration-300 z-10">
                <GraduationCap size={18} />
              </div>

              {/* Main Timeline Card */}
              <div className="artistic-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative group-hover:-translate-y-1">
                {/* Visual Top Decorative Trim */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-800 dark:text-white mb-1.5">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-purple-700 dark:text-purple-400">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Duration Badge */}
                  <div className="flex items-center gap-1.5 self-start sm:self-center px-3.5 py-1.5 rounded-full bg-pink-50 dark:bg-pink-950/20 text-pink-700 dark:text-pink-400 border border-pink-100/40 dark:border-pink-900/20 text-xs font-bold font-mono shadow-xs">
                    <Calendar size={13} />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-1.5">
                  <BookOpen size={13} className="text-pink-500/70" />
                  <span>{edu.location}</span>
                </p>

                {/* Academic accomplishments bullets */}
                {edu.details && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
                      Core Learnings & Focus
                    </h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {edu.details.map((detail, dIdx) => (
                        <li 
                          key={dIdx} 
                          className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                        >
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-pink-500/80 mt-1.5 shadow-xs shadow-pink-500/20" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Additional academic recognition footer details */}
                <div className="flex items-center gap-2 mt-8 pt-6 border-t border-slate-150 dark:border-slate-800/60 text-xs text-purple-600 dark:text-purple-400 font-semibold font-sans">
                  <Award size={14} className="text-pink-500 animate-bounce" />
                  <span>Syllabus covered core concepts, programming logic, networks, and databases.</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

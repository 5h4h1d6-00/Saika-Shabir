import React from 'react';
import { 
  Terminal, 
  Cpu, 
  Settings, 
  Heart, 
  Languages, 
  Globe, 
  UserCheck, 
  BrainCircuit, 
  Smile, 
  Users, 
  CheckCircle,
  CodeXml,
  Sparkle
} from 'lucide-react';
import { motion } from 'motion/react';
import { resumeData } from '../data';

export const Skills: React.FC = () => {
  // Map icons for Strengths
  const getStrengthIcon = (strength: string) => {
    switch (strength) {
      case 'Quick Learner':
        return <BrainCircuit size={18} className="text-purple-500" />;
      case 'Honest & Responsible':
        return <UserCheck size={18} className="text-pink-500" />;
      case 'Positive Attitude':
        return <Smile size={18} className="text-purple-500" />;
      case 'Good Communication Skills':
        return <Sparkle size={18} className="text-pink-500" />;
      case 'Team Player':
        return <Users size={18} className="text-purple-500" />;
      default:
        return <CheckCircle size={18} className="text-purple-500" />;
    }
  };

  const getStrengthDesc = (strength: string) => {
    switch (strength) {
      case 'Quick Learner':
        return 'Eagerly absorb complex technical theories and apply them to resolve coding issues.';
      case 'Honest & Responsible':
        return 'Honest execution and strict accountability for team responsibilities.';
      case 'Positive Attitude':
        return 'Approach challenging engineering obstacles with determination and positive solution-finding.';
      case 'Good Communication Skills':
        return 'Articulate thoughts and concepts clearly to team colleagues and stakeholders.';
      case 'Team Player':
        return 'Collaborate fluidly inside multi-disciplinary cohorts to deliver collective value.';
      default:
        return 'Strong professional conduct and work ethics.';
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 90, damping: 15 } 
    }
  };

  return (
    <section 
      id="skills" 
      className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative radial gradients */}
      <div className="absolute top-1/3 left-0 -translate-x-1/2 w-80 h-80 bg-purple-100/30 dark:bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 translate-x-1/2 w-80 h-80 bg-pink-100/30 dark:bg-pink-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest font-mono mb-2"
          >
            Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight"
          >
            Skills & Core Strengths
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Master Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Technical Skills & Languages (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Technical Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="artistic-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-150 dark:border-slate-800">
                <div className="p-2.5 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-600 dark:text-purple-400">
                  <Terminal size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">Technical Skills</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Software tools and engineering methodologies</p>
                </div>
              </div>

              {/* Progress bars split into two categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {/* Tech Skills */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-purple-700 dark:text-purple-400 uppercase tracking-widest font-mono mb-2">
                    Core Engineering
                  </h4>
                  {resumeData.skills
                    .filter(s => s.category === 'technical')
                    .map((skill, idx) => (
                      <div key={idx} className="group/progress">
                        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 mb-1.5 font-medium">
                          <span className="group-hover/progress:text-purple-600 dark:group-hover/progress:text-purple-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="font-mono text-purple-700 dark:text-purple-400 text-[10px]">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" 
                          />
                        </div>
                      </div>
                    ))}
                </div>

                {/* Software Tools */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-pink-700 dark:text-pink-400 uppercase tracking-widest font-mono mb-2">
                    Applications & Office
                  </h4>
                  {resumeData.skills
                    .filter(s => s.category === 'tool')
                    .map((skill, idx) => (
                      <div key={idx} className="group/progress">
                        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 mb-1.5 font-medium">
                          <span className="group-hover/progress:text-pink-600 dark:group-hover/progress:text-pink-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="font-mono text-pink-700 dark:text-pink-400 text-[10px]">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className="bg-gradient-to-r from-pink-500 to-purple-500 h-full rounded-full" 
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>

            {/* Languages Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="artistic-card p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-pink-50 dark:bg-pink-900/20 rounded-xl text-pink-600 dark:text-pink-400">
                  <Languages size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">Languages</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Linguistic abilities for professional engagement</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {resumeData.languages.map((lang, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-white/40 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800/60 shadow-xs text-center relative overflow-hidden group hover:border-purple-300 dark:hover:border-purple-800 transition-colors"
                  >
                    {/* Tiny decorative backdrop map icon */}
                    <Globe size={40} className="absolute -right-2 -bottom-2 text-purple-100/30 dark:text-slate-800/20 pointer-events-none group-hover:scale-110 transition-transform duration-300" />
                    
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono block mb-1">
                      {lang === 'English' ? 'Professional' : 'Native / Fluent'}
                    </span>
                    <h4 className="text-base font-extrabold text-slate-800 dark:text-white mb-2">
                      {lang}
                    </h4>
                    
                    {/* Graphical rating representation (dots) */}
                    <div className="flex justify-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div 
                          key={dot} 
                          className={`w-2 h-2 rounded-full ${
                            lang === 'English' && dot <= 4 ? 'bg-purple-600 shadow-xs shadow-purple-500/25' :
                            lang === 'Hindi' && dot <= 5 ? 'bg-purple-600 shadow-xs shadow-purple-500/25' :
                            lang === 'Urdu' && dot <= 5 ? 'bg-purple-600 shadow-xs shadow-purple-500/25' : 'bg-slate-200 dark:bg-slate-800'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Column 2: Strengths (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="artistic-card p-6 sm:p-8 shadow-sm flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-150 dark:border-slate-800">
                <div className="p-2.5 bg-pink-50 dark:bg-pink-900/20 rounded-xl text-pink-600 dark:text-pink-400">
                  <Heart size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">My Strengths</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Personal attributes that enhance productivity</p>
                </div>
              </div>

              {/* Strengths Grid Layout */}
              <div className="flex flex-col gap-4 flex-grow">
                {resumeData.strengths.map((str, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="p-4 bg-white/40 dark:bg-slate-900/20 rounded-2xl border border-slate-100 dark:border-slate-850 shadow-xs hover:border-pink-200/60 dark:hover:border-purple-800/50 hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-300 flex gap-3.5 group/strength"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-xs border border-slate-100 dark:border-slate-800 group-hover/strength:scale-105 transition-transform">
                      {getStrengthIcon(str)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-1">
                        {str}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                        {getStrengthDesc(str)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

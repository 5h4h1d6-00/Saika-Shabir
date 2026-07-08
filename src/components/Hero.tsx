import React, { useRef } from 'react';
import { Download, Mail, ArrowRight, Sparkles, MapPin, Camera, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { resumeData } from '../data';

interface HeroProps {
  imageError: boolean;
  setImageError: (val: boolean) => void;
  onDownloadPDF: () => void;
  isDownloading: boolean;
  profileImage: string | null;
  onImageUpload: (base64Data: string) => void;
  onImageReset: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  imageError,
  setImageError,
  onDownloadPDF,
  isDownloading,
  profileImage,
  onImageUpload,
  onImageReset
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          onImageUpload(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContactClick = () => {
    const element = document.getElementById('contact');
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

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Background soft pink/lavender blob circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-pink-200/30 dark:bg-pink-900/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-[6s]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Professional Summary */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-slate-900/40 border border-purple-200/30 dark:border-purple-800/20 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-6 shadow-sm backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-purple-500 animate-spin" style={{ animationDuration: '3s' }} />
            <span>Welcome to My Professional Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-white leading-[1.1] mb-4"
          >
            Hi, I'm <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] bg-clip-text text-transparent">{resumeData.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl font-medium text-purple-700 dark:text-purple-400 mb-6"
          >
            {resumeData.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-6 text-justify"
          >
            A dedicated and passionate Computer Science Engineering diploma graduate with solid theoretical knowledge, hands-on academic training, and an eager drive to solve complex real-world challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-mono mb-8"
          >
            <MapPin size={14} className="text-pink-500" />
            <span>{resumeData.address}</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onDownloadPDF}
              disabled={isDownloading}
              className="flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-full shadow-lg hover:shadow-purple-500/20 active:scale-98 transition-all duration-300 cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Preparing Resume...</span>
                </>
              ) : (
                <>
                  <Download size={16} />
                  <span>Download Resume</span>
                </>
              )}
            </button>

            <button
              onClick={handleContactClick}
              className="flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-900/60 border border-purple-100/50 dark:border-slate-800/50 hover:bg-white dark:hover:bg-slate-900 rounded-full shadow-sm hover:shadow-md active:scale-98 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              <span>Contact Me</span>
              <ArrowRight size={16} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Photo with elegant layout */}
        <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end lg:items-start order-1 lg:order-2 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="relative"
          >
            {/* Visual background shapes & glowing borders */}
            <div className="absolute inset-2 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-[2rem] blur-xl opacity-30 dark:opacity-40 animate-pulse duration-[6s] pointer-events-none" />
            
            {/* Main Image Frame with Artistic Card style */}
            <div className="relative p-3 artistic-card max-w-[260px] sm:max-w-[300px]">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                {!imageError ? (
                  <img 
                    src={profileImage || "/profile.jpg"} 
                    alt={resumeData.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    id="profile-img-hero"
                  />
                ) : (
                  <div className="text-center p-8">
                    <span className="text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent block mb-2 tracking-tighter">
                      SS
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium font-sans">
                      Saika Shabir
                    </p>
                  </div>
                )}

                {/* Hidden input */}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleFileChange} 
                />

                {/* Upload Action Button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute top-2.5 right-2.5 z-20 p-2 rounded-xl bg-white/95 dark:bg-slate-900/95 hover:bg-white dark:hover:bg-slate-800 border border-purple-100/50 dark:border-slate-800/60 text-purple-600 dark:text-purple-400 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                  title="Upload profile photo from gallery"
                  aria-label="Upload profile photo"
                >
                  <Camera size={14} className="text-purple-600 dark:text-purple-400" />
                </button>

                {/* Reset Action Button */}
                {profileImage && (
                  <button
                    type="button"
                    onClick={onImageReset}
                    className="absolute top-2.5 left-2.5 z-20 p-2 rounded-xl bg-white/95 dark:bg-slate-900/95 hover:bg-white dark:hover:bg-slate-800 border border-rose-100/50 dark:border-slate-800/60 text-rose-600 dark:text-rose-400 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                    title="Reset to default photo"
                    aria-label="Reset profile photo"
                  >
                    <RotateCcw size={14} className="text-rose-500 dark:text-rose-400" />
                  </button>
                )}
              </div>

              {/* Float floating details overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl border border-white/40 dark:border-slate-800/60 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-white font-mono uppercase tracking-wider">
                      Specialization
                    </h4>
                    <p className="text-[10px] font-semibold text-purple-700 dark:text-purple-400 mt-0.5">
                      CSE Graduate
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono font-medium">Ready to Work</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

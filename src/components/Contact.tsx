import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear errors when typing
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('sending');

    // Simulate sending progress
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-pink-200/20 dark:bg-pink-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest font-mono mb-2"
          >
            Get In Touch
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight"
          >
            Contact Information
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Double Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Contact Methods Details (5/12) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="artistic-card p-8 shadow-sm flex flex-col h-full gap-6"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Saika's Contacts</h3>
                <p className="text-xs text-slate-400 font-medium">Feel free to connect directly using the channels below.</p>
              </div>

              {/* Information Blocks */}
              <div className="flex flex-col gap-4">
                {/* Email card */}
                <a 
                  href={`mailto:${resumeData.email}`}
                  className="p-4 bg-white/40 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800/60 flex items-center gap-4 hover:border-purple-300 dark:hover:border-purple-800 hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shadow-xs border border-purple-100/30 dark:border-purple-900/40 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block">Email ID</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 break-all">{resumeData.email}</span>
                  </div>
                </a>

                {/* Phone card */}
                <a 
                  href={`tel:${resumeData.phone.replace(/\s+/g, '')}`}
                  className="p-4 bg-white/40 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800/60 flex items-center gap-4 hover:border-pink-300 dark:hover:border-pink-900 hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 flex items-center justify-center shadow-xs border border-pink-100/30 dark:border-pink-900/40 group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block">Phone Number</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{resumeData.phone}</span>
                  </div>
                </a>

                {/* Address card */}
                <div className="p-4 bg-white/40 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800/60 flex items-start gap-4 hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shadow-xs border border-purple-100/30 dark:border-purple-900/40 mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block">Postal Address</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">{resumeData.address}</span>
                  </div>
                </div>
              </div>

              {/* Direct invitation quote banner */}
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white text-xs font-medium leading-relaxed shadow-sm">
                "I am eager to hear about entry-level CSE opportunities where I can offer dedication and learn alongside seasoned engineering professionals."
              </div>
            </motion.div>
          </div>

          {/* Column 2: Interactive Contact Form (7/12) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="artistic-card p-8 shadow-sm h-full"
            >
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-emerald-550/10 dark:bg-emerald-550/20 text-emerald-550 flex items-center justify-center mb-6"
                    >
                      <CheckCircle size={36} className="text-emerald-500" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed mb-6">
                      Thank you for contacting me. I have received your message and will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="px-6 py-2.5 text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 rounded-xl transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5 justify-center h-full"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Send a Message</h3>
                      <p className="text-xs text-slate-400 font-medium">Have an inquiry or opportunity? Leave a note below.</p>
                    </div>

                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest font-mono">
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className={`w-full px-4 py-3 bg-slate-50/50 dark:bg-slate-900/30 border ${
                            errors.name ? 'border-red-400' : 'border-slate-150 dark:border-slate-800'
                          } hover:border-purple-200 dark:hover:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 rounded-xl text-slate-800 dark:text-white text-sm outline-none transition-all`}
                        />
                        {errors.name && (
                          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-red-500 flex items-center gap-1">
                            <AlertCircle size={14} />
                            <span className="text-[10px] font-semibold">{errors.name}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest font-mono">
                        Your Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className={`w-full px-4 py-3 bg-slate-50/50 dark:bg-slate-900/30 border ${
                            errors.email ? 'border-red-400' : 'border-slate-150 dark:border-slate-800'
                          } hover:border-purple-200 dark:hover:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 rounded-xl text-slate-800 dark:text-white text-sm outline-none transition-all`}
                        />
                        {errors.email && (
                          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-red-500 flex items-center gap-1">
                            <AlertCircle size={14} />
                            <span className="text-[10px] font-semibold">{errors.email}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest font-mono">
                        Your Message
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Type your message here..."
                          className={`w-full px-4 py-3 bg-slate-50/50 dark:bg-slate-900/30 border ${
                            errors.message ? 'border-red-400' : 'border-slate-150 dark:border-slate-800'
                          } hover:border-purple-200 dark:hover:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 rounded-xl text-slate-800 dark:text-white text-sm outline-none transition-all resize-none`}
                        />
                        {errors.message && (
                          <div className="absolute right-3.5 bottom-3 text-red-500 flex items-center gap-1">
                            <AlertCircle size={14} />
                            <span className="text-[10px] font-semibold">{errors.message}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formState === 'sending'}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 mt-2 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-xl shadow-md hover:shadow-purple-500/15 active:scale-98 transition-all cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
                    >
                      {formState === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

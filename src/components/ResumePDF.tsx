import React from 'react';
import { resumeData } from '../data';

interface ResumePDFProps {
  imageError: boolean;
  setImageError: (val: boolean) => void;
  profileImage: string | null;
}

export const ResumePDF: React.FC<ResumePDFProps> = ({ imageError, setImageError, profileImage }) => {
  return (
    <div 
      className="fixed pointer-events-none" 
      style={{ left: 0, top: 0, zIndex: -1000, opacity: 1 }}
    >
      {/* PAGE 1 */}
      <div 
        id="resume-page-1" 
        className="w-[794px] h-[1122px] p-12 flex flex-col justify-between font-sans relative"
        style={{ boxSizing: 'border-box', backgroundColor: '#ffffff', color: '#334155' }}
      >
        {/* Decorative corner accents */}
        <div 
          className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none"
          style={{ background: 'linear-gradient(135deg, #f3e8ff, #fbcfe8)', opacity: 0.4 }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-16 h-16 rounded-tr-full pointer-events-none"
          style={{ background: 'linear-gradient(45deg, #f3e8ff, #fbcfe8)', opacity: 0.4 }}
        ></div>

        <div>
          {/* Header Banner */}
          <div 
            className="pb-6 mb-6 flex items-start justify-between"
            style={{ borderBottom: '1px solid #fbcfe8' }}
          >
            <div className="max-w-[500px]">
              <h1 
                className="text-3xl font-bold tracking-tight leading-none mb-2"
                style={{ color: '#1e293b' }}
              >
                {resumeData.name}
              </h1>
              <p 
                className="font-medium text-sm"
                style={{ color: '#7e22ce' }}
              >
                {resumeData.title}
              </p>
            </div>
            
            {/* Contact details top-right */}
            <div 
              className="text-right text-[11px] leading-normal font-mono"
              style={{ color: '#64748b' }}
            >
              <p 
                className="font-semibold"
                style={{ color: '#475569' }}
              >
                Jammu & Kashmir, India
              </p>
              <p>{resumeData.email}</p>
              <p>{resumeData.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left Column (Narrow, 4/12) */}
            <div className="col-span-4 flex flex-col gap-6">
              {/* Profile Image with fail-safe initials */}
              <div className="flex justify-center mb-2">
                <div 
                  className="relative w-28 h-28 rounded-full border-4 overflow-hidden flex items-center justify-center shadow-sm"
                  style={{ borderColor: '#fbcfe8', background: 'linear-gradient(45deg, #fbcfe8, #f3e8ff)' }}
                >
                  {!imageError ? (
                    <img 
                      src={profileImage || "/profile.jpg"} 
                      alt={resumeData.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <span 
                      className="text-3xl font-bold"
                      style={{ color: '#7e22ce' }}
                    >
                      SS
                    </span>
                  )}
                </div>
              </div>

              {/* Personal Details Panel */}
              <div 
                className="rounded-xl p-4 border"
                style={{ backgroundColor: 'rgba(253, 242, 248, 0.5)', borderColor: 'rgba(251, 207, 232, 0.4)' }}
              >
                <h3 
                  className="text-xs font-semibold uppercase tracking-wider mb-3 font-mono"
                  style={{ color: '#6b21a8' }}
                >
                  Contact
                </h3>
                <div className="flex flex-col gap-2 text-xs leading-relaxed">
                  <div>
                    <span 
                      className="font-semibold block text-[10px] uppercase font-mono"
                      style={{ color: '#334155' }}
                    >
                      Email
                    </span>
                    <span className="break-all" style={{ color: '#475569' }}>{resumeData.email}</span>
                  </div>
                  <div>
                    <span 
                      className="font-semibold block text-[10px] uppercase font-mono"
                      style={{ color: '#334155' }}
                    >
                      Phone
                    </span>
                    <span style={{ color: '#475569' }}>{resumeData.phone}</span>
                  </div>
                  <div>
                    <span 
                      className="font-semibold block text-[10px] uppercase font-mono"
                      style={{ color: '#334155' }}
                    >
                      Address
                    </span>
                    <span style={{ color: '#475569' }}>{resumeData.address}</span>
                  </div>
                </div>
              </div>

              {/* Languages Panel */}
              <div 
                className="rounded-xl p-4 border"
                style={{ backgroundColor: 'rgba(250, 245, 255, 0.5)', borderColor: 'rgba(243, 232, 255, 0.4)' }}
              >
                <h3 
                  className="text-xs font-semibold uppercase tracking-wider mb-3 font-mono"
                  style={{ color: '#6b21a8' }}
                >
                  Languages
                </h3>
                <div className="flex flex-col gap-2">
                  {resumeData.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span 
                        className="text-xs font-medium"
                        style={{ color: '#334155' }}
                      >
                        {lang}
                      </span>
                      <div className="flex gap-1">
                        {/* Realistic proficiency markers */}
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <div 
                            key={dot} 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ 
                              backgroundColor: (
                                (lang === 'English' && dot <= 4) ||
                                (lang === 'Hindi' && dot <= 5) ||
                                (lang === 'Urdu' && dot <= 5)
                              ) ? '#9333ea' : '#e9d5ff'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Wide, 8/12) */}
            <div className="col-span-8 flex flex-col gap-6">
              {/* About Me / Profile Statement */}
              <div>
                <h2 
                  className="text-sm font-bold uppercase tracking-wider pb-1 mb-2 font-mono flex items-center gap-2"
                  style={{ color: '#1e293b', borderBottom: '1px solid #fbcfe8' }}
                >
                  <span 
                    className="w-1.5 h-3 rounded"
                    style={{ backgroundColor: '#9333ea' }}
                  ></span> Profile Statement
                </h2>
                <p 
                  className="text-xs leading-relaxed text-justify"
                  style={{ color: '#475569' }}
                >
                  {resumeData.aboutMe}
                </p>
              </div>

              {/* Career Objective */}
              <div>
                <h2 
                  className="text-sm font-bold uppercase tracking-wider pb-1 mb-2 font-mono flex items-center gap-2"
                  style={{ color: '#1e293b', borderBottom: '1px solid #fbcfe8' }}
                >
                  <span 
                    className="w-1.5 h-3 rounded"
                    style={{ backgroundColor: '#9333ea' }}
                  ></span> Career Objective
                </h2>
                <p 
                  className="text-xs leading-relaxed text-justify"
                  style={{ color: '#475569' }}
                >
                  {resumeData.careerObjective}
                </p>
              </div>

              {/* Education Section */}
              <div>
                <h2 
                  className="text-sm font-bold uppercase tracking-wider pb-1 mb-3 font-mono flex items-center gap-2"
                  style={{ color: '#1e293b', borderBottom: '1px solid #fbcfe8' }}
                >
                  <span 
                    className="w-1.5 h-3 rounded"
                    style={{ backgroundColor: '#9333ea' }}
                  ></span> Education History
                </h2>
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="mb-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 
                        className="text-xs font-semibold"
                        style={{ color: '#1e293b' }}
                      >
                        {edu.degree}
                      </h3>
                      <span 
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                        style={{ color: '#7e22ce', backgroundColor: '#faf5ff', borderColor: '#f3e8ff' }}
                      >
                        {edu.duration}
                      </span>
                    </div>
                    <div 
                      className="flex justify-between items-center text-[11px] font-mono mb-2"
                      style={{ color: '#64748b' }}
                    >
                      <span>{edu.institution}</span>
                      <span>{edu.location}</span>
                    </div>
                    {edu.details && (
                      <ul 
                        className="list-disc pl-4 text-[11px] space-y-1"
                        style={{ color: '#475569' }}
                      >
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="leading-normal">{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Page 1 Footer */}
        <div 
          className="text-center text-[10px] pt-3 flex justify-between font-mono"
          style={{ color: '#94a3b8', borderTop: '1px solid #f1f5f9' }}
        >
          <span>Saika Shabir — Resume Portfolio</span>
          <span>Page 1 of 2</span>
        </div>
      </div>

      {/* PAGE 2 */}
      <div 
        id="resume-page-2" 
        className="w-[794px] h-[1122px] p-12 flex flex-col justify-between font-sans relative"
        style={{ boxSizing: 'border-box', backgroundColor: '#ffffff', color: '#334155' }}
      >
        {/* Decorative corner accents */}
        <div 
          className="absolute top-0 left-0 w-24 h-24 rounded-br-full pointer-events-none"
          style={{ background: 'linear-gradient(135deg, #f3e8ff, #fbcfe8)', opacity: 0.4 }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full pointer-events-none"
          style={{ background: 'linear-gradient(45deg, #f3e8ff, #fbcfe8)', opacity: 0.4 }}
        ></div>

        <div>
          {/* Header Repeat */}
          <div 
            className="pb-4 mb-6 flex items-center justify-between"
            style={{ borderBottom: '1px solid #fbcfe8' }}
          >
            <div>
              <p 
                className="text-lg font-bold leading-none"
                style={{ color: '#1e293b' }}
              >
                Saika Shabir
              </p>
              <p 
                className="text-xs font-medium"
                style={{ color: '#7e22ce' }}
              >
                Diploma in Computer Science Engineering (CSE)
              </p>
            </div>
            <p className="text-[10px] font-mono" style={{ color: '#94a3b8' }}>
              Saika4772@gmail.com | +91 9906385131
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left Column (Narrow, 4/12) */}
            <div className="col-span-4 flex flex-col gap-6">
              {/* Strengths Panel */}
              <div 
                className="rounded-xl p-4 border"
                style={{ backgroundColor: 'rgba(253, 242, 248, 0.5)', borderColor: 'rgba(251, 207, 232, 0.4)' }}
              >
                <h3 
                  className="text-xs font-semibold uppercase tracking-wider mb-3 font-mono"
                  style={{ color: '#6b21a8' }}
                >
                  Strengths
                </h3>
                <ul className="flex flex-col gap-2">
                  {resumeData.strengths.map((str, idx) => (
                    <li 
                      key={idx} 
                      className="text-xs flex items-start gap-1.5"
                      style={{ color: '#334155' }}
                    >
                      <span className="font-bold mt-0.5" style={{ color: '#ec4899' }}>•</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reference details/Declaration text block */}
              <div 
                className="rounded-xl p-4 border"
                style={{ backgroundColor: 'rgba(250, 245, 255, 0.5)', borderColor: 'rgba(243, 232, 255, 0.4)' }}
              >
                <h3 
                  className="text-xs font-semibold uppercase tracking-wider mb-2 font-mono"
                  style={{ color: '#6b21a8' }}
                >
                  Declaration
                </h3>
                <p 
                  className="text-[10px] leading-relaxed text-justify"
                  style={{ color: '#475569' }}
                >
                  I hereby declare that all the information provided above is true, complete, and correct to the best of my knowledge and belief.
                </p>
                <div 
                  className="mt-8 pt-2 text-right"
                  style={{ borderTop: '1px solid rgba(233, 213, 255, 0.5)' }}
                >
                  <div className="h-6"></div> {/* Spacer for signature */}
                  <span 
                    className="text-[10px] font-semibold font-mono block"
                    style={{ color: '#6b21a8' }}
                  >
                    Saika Shabir
                  </span>
                  <span 
                    className="text-[9px] font-mono block"
                    style={{ color: '#94a3b8' }}
                  >
                    Signature
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (Wide, 8/12) */}
            <div className="col-span-8 flex flex-col gap-6">
              {/* Technical Skills Section */}
              <div>
                <h2 
                  className="text-sm font-bold uppercase tracking-wider pb-1 mb-3 font-mono flex items-center gap-2"
                  style={{ color: '#1e293b', borderBottom: '1px solid #fbcfe8' }}
                >
                  <span 
                    className="w-1.5 h-3 rounded"
                    style={{ backgroundColor: '#9333ea' }}
                  ></span> Technical & Soft Skills
                </h2>
                
                {/* Categorized Skills grids */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Category: Tech / Dev */}
                  <div>
                    <h3 
                      className="text-xs font-bold mb-2 font-mono pb-0.5"
                      style={{ color: '#6b21a8', borderBottom: '1px solid #faf5ff' }}
                    >
                      Technical Skills
                    </h3>
                    <div className="flex flex-col gap-2">
                      {resumeData.skills
                        .filter(s => s.category === 'technical')
                        .map((skill, idx) => (
                          <div key={idx}>
                            <div 
                              className="flex justify-between items-center text-[11px] mb-1"
                              style={{ color: '#475569' }}
                            >
                              <span>{skill.name}</span>
                              <span className="font-mono text-[9px]" style={{ color: '#7e22ce' }}>{skill.level}%</span>
                            </div>
                            <div 
                              className="w-full h-1 rounded-full overflow-hidden"
                              style={{ backgroundColor: '#f1f5f9' }}
                            >
                              <div 
                                className="h-full rounded-full" 
                                style={{ 
                                  width: `${skill.level}%`,
                                  background: 'linear-gradient(to right, #a855f7, #ec4899)'
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Category: Tools */}
                  <div>
                    <h3 
                      className="text-xs font-bold mb-2 font-mono pb-0.5"
                      style={{ color: '#6b21a8', borderBottom: '1px solid #faf5ff' }}
                    >
                      Software Tools
                    </h3>
                    <div className="flex flex-col gap-2">
                      {resumeData.skills
                        .filter(s => s.category === 'tool')
                        .map((skill, idx) => (
                          <div key={idx}>
                            <div 
                              className="flex justify-between items-center text-[11px] mb-1"
                              style={{ color: '#475569' }}
                            >
                              <span>{skill.name}</span>
                              <span className="font-mono text-[9px]" style={{ color: '#7e22ce' }}>{skill.level}%</span>
                            </div>
                            <div 
                              className="w-full h-1 rounded-full overflow-hidden"
                              style={{ backgroundColor: '#f1f5f9' }}
                            >
                              <div 
                                className="h-full rounded-full" 
                                style={{ 
                                  width: `${skill.level}%`,
                                  background: 'linear-gradient(to right, #a855f7, #ec4899)'
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Soft Skills badges */}
                <div className="mt-4">
                  <h3 
                    className="text-xs font-bold mb-2 font-mono pb-0.5"
                    style={{ color: '#6b21a8', borderBottom: '1px solid #faf5ff' }}
                  >
                    Professional Qualities
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {resumeData.skills
                      .filter(s => s.category === 'soft')
                      .map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="text-[10px] px-2 py-0.5 rounded-full font-mono border"
                          style={{ 
                            backgroundColor: '#fdf2f8', 
                            color: '#be185d', 
                            borderColor: '#fbcfe8' 
                          }}
                        >
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div>
                <h2 
                  className="text-sm font-bold uppercase tracking-wider pb-1 mb-3 font-mono flex items-center gap-2"
                  style={{ color: '#1e293b', borderBottom: '1px solid #fbcfe8' }}
                >
                  <span 
                    className="w-1.5 h-3 rounded"
                    style={{ backgroundColor: '#9333ea' }}
                  ></span> Academic Projects
                </h2>
                <div className="flex flex-col gap-4">
                  {resumeData.projects.map((proj, idx) => (
                    <div 
                      key={idx} 
                      className="border p-3 rounded-xl"
                      style={{ backgroundColor: 'rgba(248, 250, 252, 0.5)', borderColor: '#f1f5f9' }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <h3 
                          className="text-xs font-semibold"
                          style={{ color: '#1e293b' }}
                        >
                          {proj.title}
                        </h3>
                        <div className="flex gap-1">
                          {proj.techStack.map((tech, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-[8px] px-1.5 py-0.5 rounded-md font-mono border"
                              style={{ 
                                backgroundColor: '#f1f5f9', 
                                color: '#64748b', 
                                borderColor: '#e2e8f0' 
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p 
                        className="text-[10px] leading-normal text-justify"
                        style={{ color: '#475569' }}
                      >
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2 Footer */}
        <div 
          className="text-center text-[10px] pt-3 flex justify-between font-mono"
          style={{ color: '#94a3b8', borderTop: '1px solid #f1f5f9' }}
        >
          <span>Saika Shabir — Resume Portfolio</span>
          <span>Page 2 of 2</span>
        </div>
      </div>
    </div>
  );
};

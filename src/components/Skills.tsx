import { useState, useEffect, useRef } from 'react';
import {
  Zap,
  Wind,
  Terminal,
  Code,
  Cloud,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    name: "JavaScript",
    level: 90,
    icon: Zap,
    gradient: "from-yellow-500 to-yellow-600",
    color: "text-yellow-400",
  },
  {
    name: "React",
    level: 85,
    icon: Code,
    gradient: "from-cyan-500 to-blue-600",
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    level: 80,
    icon: Terminal,
    gradient: "from-green-500 to-green-700",
    color: "text-green-400",
  },
  {
    name: "Tailwind CSS",
    level: 75,
    icon: Wind,
    gradient: "from-teal-400 to-blue-500",
    color: "text-teal-400",
  },
  {
    name: "Git/Github",
    level: 90,
    icon: Zap,
    gradient: "from-yellow-500 to-yellow-600",
    color: "text-yellow-400",
  },
  {
    name: "SQL",
    level: 70,
    icon: Code,
    gradient: "from-cyan-500 to-blue-600",
    color: "text-cyan-400",
  },
  {
    name: "MongoDB",
    level: 80,
    icon: Terminal,
    gradient: "from-green-500 to-green-700",
    color: "text-green-400",
  },
  {
    name: "AWS",
    level: 50,
    icon: Cloud,
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-400",
  },
  {
    name: "Docker",
    level: 75,
    icon: Cloud,
    gradient: "from-teal-400 to-blue-500",
    color: "text-teal-400",
  },
];

const SkillCard = ({ skill, index }: { skill: any; index: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const cardRef = useRef(null);
  const Icon = skill.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bar after card appears
          setTimeout(() => {
            setProgressWidth(skill.level);
          }, 300 + index * 100);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [skill.level, index]);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="h-full bg-slate-900 border border-slate-700/50 rounded-lg shadow-2xl overflow-hidden relative group hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-slate-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="pb-4">
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`p-3 rounded-lg bg-gradient-to-r ${skill.gradient} shadow-lg transform transition-transform duration-300 group-hover:rotate-12`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {skill.name}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Proficiency: {skill.level}%
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-0">
            {/* Progress Bar */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300 font-medium">
                  Skill Level
                </span>
                <span className={`text-sm font-bold ${skill.color} transition-opacity duration-500 ${
                  progressWidth > 0 ? 'opacity-100' : 'opacity-0'
                }`}>
                  {skill.level}%
                </span>
              </div>
              
              <div className="relative">
                {/* Background bar */}
                <div className="w-full h-3 bg-slate-700/50 rounded-full overflow-hidden">
                  {/* Progress fill */}
                  <div
                    className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full relative transition-all duration-1000 ease-out`}
                    style={{ width: `${progressWidth}%` }}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 h-3 bg-gradient-to-r ${skill.gradient} rounded-full opacity-30 blur-sm transition-all duration-1000 ease-out`}
                  style={{ width: `${progressWidth}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observers:any = [];

    // Header observer
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    // Footer observer
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFooterVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
      observers.push(headerObserver);
    }

    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
      observers.push(footerObserver);
    }

    return () => (observers as any[]).forEach((observer: any) => observer.disconnect());
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden min-h-screen"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-slate-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-800 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-4 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">
              Technical Skills
            </h2>
            <Sparkles className="w-8 h-8 text-blue-400" />
          </div>
          <p className={`text-slate-400 text-lg transition-opacity duration-600 ${
            headerVisible ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            Technologies I master with passion and precision
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} index={idx} />
          ))}
        </div>

        {/* Bottom decoration */}
        <div 
          ref={footerRef}
          className={`text-center mt-16 transform transition-all duration-600 ease-out ${
            footerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="flex items-center justify-center gap-4 text-slate-500">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-20"></div>
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Continuously learning and growing</span>
            <Sparkles className="w-4 h-4" />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
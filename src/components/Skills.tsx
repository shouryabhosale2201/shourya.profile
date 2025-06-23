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
    icon: Zap,
    gradient: "from-yellow-500 to-yellow-600",
  },
  {
    name: "React",
    icon: Code,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Node.js",
    icon: Terminal,
    gradient: "from-green-500 to-green-700",
  },
  {
    name: "Tailwind CSS",
    icon: Wind,
    gradient: "from-teal-400 to-blue-500",
  },
  {
    name: "Git/Github",
    icon: Zap,
    gradient: "from-yellow-500 to-yellow-600",
  },
  {
    name: "SQL",
    icon: Code,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "MongoDB",
    icon: Terminal,
    gradient: "from-green-500 to-green-700",
  },
  {
    name: "AWS",
    icon: Cloud,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Docker",
    icon: Cloud,
    gradient: "from-teal-400 to-blue-500",
  },
];

const SkillCard = ({ skill, index }: { skill: any; index: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const Icon = skill.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-full bg-slate-900 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden relative group hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-slate-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 p-4">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg bg-gradient-to-r ${skill.gradient} shadow-lg transform transition-transform duration-300 group-hover:rotate-12`}
            >
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">
                {skill.name}
              </h3>
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
      className="py-16 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden"
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
          className={`text-center mb-12 transform transition-all duration-800 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-4 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-7 h-7 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">
              Technical Skills
            </h2>
            <Sparkles className="w-7 h-7 text-blue-400" />
          </div>
          <p className={`text-slate-400 text-base transition-opacity duration-600 ${
            headerVisible ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            Technologies I master with passion and precision
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} index={idx} />
          ))}
        </div>

        {/* Bottom decoration */}
        <div 
          ref={footerRef}
          className={`text-center mt-12 transform transition-all duration-600 ease-out ${
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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Globe, 
  ChefHat, 
  CreditCard, 
  ExternalLink,
  Code,
  Sparkles,
  Zap,
  Shield
} from "lucide-react";

const projects = [
  {
    title: "Avalara Partner Scraper",
    tech: "Node.js, React, Tailwind, AWS S3",
    description: "Scalable leads collecting tool with export to JSON/Excel with relevant filters",
    link: "#",
    icon: Globe,
    gradient: "from-blue-600 via-slate-700 to-blue-800",
    bgGradient: "from-blue-900/20 via-slate-800/30 to-blue-900/20",
    tags: ["Web Scraping", "Cloud", "Automation"]
  },
  {
    title: "Mealify",
    tech: "Express.js, React, MongoDB, Gemini AI",
    description: "Personalized meal planning using AI-generated recipes and secure authentication",
    link: "https://github.com/shouryabhosale2201/mealify",
    icon: ChefHat,
    gradient: "from-slate-600 via-blue-700 to-slate-800",
    bgGradient: "from-slate-900/20 via-blue-900/30 to-slate-900/20",
    tags: ["AI/ML", "Food Tech", "Personalization"]
  },
  {
    title: "TransferIt",
    tech: "Next.js, Express.js, PostgreSQL, Prisma",
    description: "Secure money transfer app with atomic transaction locks",
    link: "#",
    icon: CreditCard,
    gradient: "from-blue-800 via-slate-700 to-blue-900",
    bgGradient: "from-blue-900/20 via-slate-800/30 to-blue-900/20",
    tags: ["FinTech", "Security", "Transactions"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const iconVariants = {
  hover: {
    rotate: [0, -10, 10, -10, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const glowVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(139, 92, 246, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header with animated title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h2 className="text-5xl font-bold bg-clip-text">
              Featured Projects
            </h2>
            <Sparkles className="w-8 h-8 text-blue-400" />
          </motion.div>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore my latest creations - from AI-powered applications to scalable web solutions
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((proj, i) => {
            const IconComponent = proj.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={glowVariants}
                  className="relative h-full"
                >
                  <Card className={`h-full bg-slate-900 border border-slate-700/50 shadow-2xl overflow-hidden relative group-hover:shadow-blue-500/25 group-hover:border-blue-500/30 transition-all duration-500`}>
                    {/* Animated border gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${proj.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm`}></div>
                    <div className="relative z-10 h-full bg-slate-900 rounded-lg p-1">
                      <CardHeader className="relative z-10 pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <motion.div
                            variants={iconVariants}
                            className={`p-3 rounded-xl bg-gradient-to-r ${proj.gradient} shadow-lg`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </motion.div>
                          <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ rotate: 45 }}
                          >
                            <ExternalLink className="w-5 h-5 text-slate-400" />
                          </motion.div>
                        </div>
                        
                        <CardTitle className="text-2xl font-bold text-white mb-2">
                          {proj.title}
                        </CardTitle>
                        
                        <CardDescription className="text-slate-300 flex items-center gap-2">
                          <Code className="w-4 h-4 text-blue-400" />
                          {proj.tech}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="relative z-10 pb-6">
                        <p className="text-slate-200 leading-relaxed mb-4">
                          {proj.description}
                        </p>
                        
                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2">
                          {proj.tags.map((tag, tagIndex) => (
                            <motion.span 
                              key={tagIndex}
                              className="px-3 py-1 text-xs bg-gradient-to-r from-blue-600/20 to-slate-600/20 text-blue-200 rounded-full border border-blue-500/30"
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="relative z-10 pt-0">
                        <motion.a 
                          href={proj.link}
                          className={`w-full py-3 px-6 bg-gradient-to-r ${proj.gradient} text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          target="_blank"
                        >
                          <Zap className="w-4 h-4 group-hover/btn:animate-pulse" />
                          View Project
                          <motion.div
                            className="group-hover/btn:translate-x-1 transition-transform duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.div>
                        </motion.a>
                      </CardFooter>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 text-slate-400">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-24"></div>
            <Shield className="w-5 h-5" />
            <span className="text-sm">More projects coming soon</span>
            <Shield className="w-5 h-5" />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-24"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
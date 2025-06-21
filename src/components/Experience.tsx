import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Building2,
  Code2,
  TrendingUp,
  CheckCircle,
  Star,
  Zap,
} from "lucide-react";

const experiences = [
  {
    role: "Enterprise Application Engineer Intern",
    company: "Avalara Technologies Pvt. Ltd.",
    duration: "Jan – June 2025",
    details: [
      "Spearheaded development of a scalable leads collecting solution that automated data collection of 10,000+ partners.",
      "Accelerated marketing data pipelines by 80%, directly supporting customer acquisition efforts.",
      "Co-developed a Chrome extension during Avalara Global Hackathon, simplifying scheduling of Outlook meetings.",
      "Integrated an AI-driven agenda generator, cutting meeting scheduling time by 50%.",
    ],
    type: "Internship",
    skills: ["JavaScript", "React.js", "Node.js","AWS", "Tailwind CSS","Playwright", "Gitlab Runners"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold bg-clip-text">
              Professional Experience
            </h2>
            <TrendingUp className="w-8 h-8 text-slate-400" />
          </motion.div>
          <motion.p
            className="text-slate-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Building innovative solutions and driving technological excellence
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-slate-600/30 hidden md:block"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative mb-12 md:ml-20"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-[4.25rem] top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-slate-600 rounded-full border-4 border-slate-900 hidden md:block"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              ></motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="bg-slate-900 border border-slate-700/50 shadow-2xl overflow-hidden relative group hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-500">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-slate-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-slate-700 shadow-lg"
                            whileHover={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Code2 className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <motion.span
                              className="px-3 py-1 text-xs bg-blue-600/20 text-blue-200 rounded-full border border-blue-500/30"
                              whileHover={{ scale: 1.05 }}
                            >
                              {exp.type}
                            </motion.span>
                          </div>
                        </div>
                        <motion.div
                          className="flex items-center gap-2 text-slate-400"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {exp.duration}
                          </span>
                        </motion.div>
                      </div>

                      <CardTitle className="text-2xl font-bold text-white mb-2">
                        {exp.role}
                      </CardTitle>

                      <CardDescription className="text-slate-300 flex items-center gap-2 text-lg">
                        <Building2 className="w-5 h-5 text-blue-400" />
                        {exp.company}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Achievements */}
                      <div>
                        <h4 className="text-slate-200 font-medium mb-3 flex items-center gap-2">
                          <Star className="w-4 h-4 text-blue-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              custom={i}
                              variants={listItemVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className="flex items-start gap-3 text-slate-200 leading-relaxed"
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 180 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                              </motion.div>
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-slate-200 font-medium mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-blue-400" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              className="px-3 py-1 text-sm bg-gradient-to-r from-slate-700/50 to-blue-900/30 text-slate-200 rounded-lg border border-slate-600/30"
                              whileHover={{
                                scale: 1.05,
                                y: -2,
                                backgroundColor: "rgba(59, 130, 246, 0.1)",
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 text-slate-500">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-20"></div>
            <Briefcase className="w-4 h-4" />
            <span className="text-sm">Professional journey continues</span>
            <TrendingUp className="w-4 h-4" />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

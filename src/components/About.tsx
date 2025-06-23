import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Code2,
  Heart,
  MapPin,
  Calendar,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Pursuing ePGD in CSE from IIT Bombay",
    subdescription: "Computer Engineering Graduate from VIT Pune",
  },
  {
    icon: Code2,
    title: "Specialization",
    description: "React, Node.js, Tailwind CSS",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Building scalable web applications and immersive UX",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

const highlightVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function About() {
  return (
    <section
      id="about"
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
            <User className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold bg-clip-text">About Me</h2>
          </motion.div>
          <motion.p
            className="text-slate-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Get to know the person behind the code
          </motion.p>
        </motion.div>

        {/* Main About Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="bg-slate-900 border border-slate-700/50 shadow-2xl overflow-hidden relative group hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-500">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-slate-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-6">
                    {/* Profile Photo */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 border-blue-500/30 shadow-xl">
                        <img
                          src={`${import.meta.env.BASE_URL}/IMG_1132.jpg`}
                          alt="Shourya Bhosale"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-slate-500/20 animate-pulse"></div>
                    </motion.div>

                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-white">
                        Hello, I'm Shourya Bhosale
                      </CardTitle>
                      <p className="text-slate-400 mt-1">
                        Passionate about Software Development and building
                        impactful projects
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Main Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-slate-200 text-lg leading-relaxed"
                  >
                    I'm a Computer Engineering graduate from VIT Pune, currently
                    pursuing ePGD in CSE from IIT Bombay with hands on
                    experience in full-stack development, cloud-native tools and
                    cloud technologies. I love building scalable applications
                    and immersive user experiences that solve real-world
                    problems and delight users.
                  </motion.div>

                  {/* Highlights Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {highlights.map((highlight, index) => {
                      const Icon = highlight.icon;
                      return (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={highlightVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="p-4 rounded-lg bg-slate-800/50 border border-slate-600/30 hover:border-blue-500/30 transition-all duration-300"
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon className="w-8 h-8 text-blue-400 mb-3" />
                          </motion.div>
                          <h3 className="text-white font-semibold mb-2">
                            {highlight.title}
                          </h3>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {highlight.description}
                          </p>
                          {highlight.subdescription && (
                            <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                              {highlight.subdescription}
                            </p>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Personal Touch */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="pt-6 border-t border-slate-700/50"
                  >
                    <div className="flex items-center gap-6 text-slate-300">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">Pune, India</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">
                          Available for opportunities
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
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
            <User className="w-4 h-4" />
            <span className="text-sm">
              Let's build something amazing together
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

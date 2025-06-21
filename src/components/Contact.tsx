import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MessageCircle,
  Send,
  Copy,
  ExternalLink
} from 'lucide-react'
import { useState } from 'react'

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "shourya.bhosale123@gmail.com",
    description: "Drop me a line anytime",
    action: "mailto:shourya.bhosale123@gmail.com",
    copyValue: "shourya.bhosale123@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 70288 72456",
    description: "Available Mon-Fri 9AM-6PM",
    action: "tel:+917028872456",
    copyValue: "+917028872456"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
}

const contactCardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i:any) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}

export default function Contact() {
  const [copiedValue, setCopiedValue] = useState('')

  const handleCopy = async (value : any) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedValue(value)
      setTimeout(() => setCopiedValue(''), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-slate-700/5 rounded-full blur-3xl"></div>
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
            <MessageCircle className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold bg-clip-text">
              Get In Touch
            </h2>
            <Send className="w-8 h-8 text-blue-400" />
          </motion.div>
          <motion.p 
            className="text-slate-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Ready to collaborate? Let's start a conversation
          </motion.p>
        </motion.div>

        {/* Main Contact Card */}
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
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-slate-700 shadow-lg"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <MessageCircle className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-white">
                        Let's Connect
                      </CardTitle>
                      <p className="text-slate-400 mt-1">
                        Choose your preferred way to reach out
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Contact Methods */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {contactMethods.map((method, index) => {
                      const Icon = method.icon
                      const isCopied = copiedValue === method.copyValue
                      
                      return (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={contactCardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="p-6 rounded-lg bg-slate-800/50 border border-slate-600/30 hover:border-blue-500/30 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                              className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-slate-600 shadow-lg"
                            >
                              <Icon className="w-5 h-5 text-white" />
                            </motion.div>
                            
                            <div className="flex-1">
                              <h3 className="text-white font-semibold mb-1">
                                {method.title}
                              </h3>
                              <p className="text-blue-300 font-medium mb-2">
                                {method.value}
                              </p>
                              <p className="text-slate-400 text-sm mb-4">
                                {method.description}
                              </p>
                              
                              {/* Action Buttons */}
                              <div className="flex gap-2">
                                <Button
                                  asChild
                                  size="sm"
                                  className="bg-blue-600 hover:bg-blue-700 text-white"
                                >
                                  <a href={method.action}>
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Contact
                                  </a>
                                </Button>
                                
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleCopy(method.copyValue)}
                                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                                >
                                  {isCopied ? (
                                    <>
                                      <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-4 h-4 mr-2 text-green-400"
                                      >
                                        ✓
                                      </motion.div>
                                      Copied!
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-4 h-4 mr-2" />
                                      Copy
                                    </>
                                  )}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Additional Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="pt-6 border-t border-slate-700/50 text-center"
                  >
                    <p className="text-slate-300 mb-2">
                      ✨ Open to exciting opportunities and collaborations
                    </p>
                    <p className="text-slate-400 text-sm">
                      I typically respond within 24 hours
                    </p>
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
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">Looking forward to hearing from you</span>
            <Send className="w-4 h-4" />
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import {
  Briefcase,
  Calendar,
  MapPin,
  Code,
  Users,
  Zap,
  FileText,
  GitBranch,
  Globe,
  Database,
  Lightbulb,
  Target,
} from "lucide-react"

export default function Experience() {
  const responsibilities = [
    {
      icon: Code,
      title: "Frontend Development",
      text: "Developed and maintained responsive websites using HTML, CSS, JavaScript, and React.js with modern best practices",
      category: "development",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      text: "Collaborated with team members to build full-stack web applications, ensuring clean code and version control via GitHub",
      category: "teamwork",
    },
    {
      icon: Globe,
      title: "UI/UX Design",
      text: "Designed user interfaces with a focus on mobile-first design and cross-browser compatibility for optimal user experience",
      category: "design",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      text: "Optimized website performance and resolved front-end bugs to enhance user experience and loading speeds",
      category: "optimization",
    },
    {
      icon: Database,
      title: "API Integration",
      text: "Integrated APIs to fetch and display dynamic data in real-time web applications with proper error handling",
      category: "development",
    },
    {
      icon: Target,
      title: "Project Management",
      text: "Participated in regular code reviews and stand-up meetings to align with project goals and deadlines",
      category: "management",
    },
    {
      icon: Lightbulb,
      title: "Technology Research",
      text: "Explored modern web tools and frameworks to improve development efficiency and maintainability",
      category: "learning",
    },
    {
      icon: FileText,
      title: "Documentation",
      text: "Created comprehensive project documentation, user manuals, and reports for internal and client use",
      category: "documentation",
    },
    {
      icon: Users,
      title: "Continuous Learning",
      text: "Engaged in learning sessions and team workshops to expand knowledge of best practices in web development",
      category: "learning",
    },
    {
      icon: GitBranch,
      title: "Deployment & DevOps",
      text: "Managed and deployed projects on platforms like Vercel and Netlify for testing and live previews",
      category: "deployment",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      development: "from-blue-500 to-cyan-500",
      teamwork: "from-green-500 to-emerald-500",
      design: "from-purple-500 to-pink-500",
      optimization: "from-orange-500 to-red-500",
      management: "from-indigo-500 to-blue-500",
      learning: "from-yellow-500 to-orange-500",
      documentation: "from-gray-500 to-slate-500",
      deployment: "from-teal-500 to-cyan-500",
    }
    return colors[category as keyof typeof colors] || colors.development
  }

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Work{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
              Professional journey in web development with hands-on experience in modern technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10 hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-20 translate-x-20"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
              {/* Left - Company Info */}
              <div className="lg:w-1/3">
                <div className="sticky top-8">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Briefcase className="w-10 h-10 text-white" />
                  </motion.div>

                  <motion.h3
                    className="text-3xl md:text-4xl font-bold text-white mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Web Development Intern
                  </motion.h3>

                  <motion.h4
                    className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    CodSoft
                  </motion.h4>

                  <div className="space-y-6">
                    <motion.div
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Location</p>
                        <p className="text-gray-300 text-sm">Maharashtra, India</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="bg-purple-500 p-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Duration</p>
                        <p className="text-gray-300 text-sm">June 2024 - July 2024</p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -3 }}
                  >
                    <h5 className="font-bold text-white mb-3 text-lg">Impact</h5>
                    <div className="text-center">
                      <motion.div
                        className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        2 Months
                      </motion.div>
                      <p className="text-gray-300 text-sm">Intensive Learning & Development</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right - Responsibilities */}
              <div className="lg:w-2/3">
                <motion.h5
                  className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  Key Responsibilities & Achievements
                </motion.h5>

                <div className="grid gap-6">
                  {responsibilities.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -3 }}
                      >
                        <div className="flex items-start gap-6">
                          <motion.div
                            className={`w-14 h-14 bg-gradient-to-r ${getCategoryColor(item.category)} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <IconComponent className="w-7 h-7 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h6 className="font-bold text-white text-lg mb-2 group-hover:text-blue-300 transition-colors duration-300">
                              {item.title}
                            </h6>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Skills Gained */}
                <motion.div
                  className="mt-12 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01, y: -2 }}
                >
                  <h6 className="font-bold text-white text-lg mb-4 flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 text-white" />
                    </div>
                    Skills & Technologies Mastered
                  </h6>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "React.js",
                      "JavaScript",
                      "HTML5",
                      "CSS3",
                      "Node.js",
                      "Git",
                      "GitHub",
                      "Vercel",
                      "Netlify",
                      "API Integration",
                    ].map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 bg-white/10 text-gray-200 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

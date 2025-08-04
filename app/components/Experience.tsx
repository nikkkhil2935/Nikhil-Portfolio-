"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Code, Users, Zap, FileText, GitBranch, Globe } from "lucide-react"

export default function Experience() {
  const responsibilities = [
    {
      icon: Code,
      text: "Developed and maintained responsive websites using HTML, CSS, JavaScript, and React.js",
    },
    {
      icon: Users,
      text: "Collaborated with team members to build full-stack web applications, ensuring clean code and version control via GitHub",
    },
    {
      icon: Globe,
      text: "Designed user interfaces with a focus on mobile-first design and cross-browser compatibility",
    },
    {
      icon: Zap,
      text: "Optimized website performance and resolved front-end bugs to enhance user experience",
    },
    {
      icon: GitBranch,
      text: "Integrated APIs to fetch and display dynamic data in real-time web applications",
    },
    {
      icon: Users,
      text: "Participated in regular code reviews and stand-up meetings to align with project goals and deadlines",
    },
    {
      icon: Code,
      text: "Explored modern web tools and frameworks to improve development efficiency and maintainability",
    },
    {
      icon: FileText,
      text: "Created project documentation, user manuals, and reports for internal and client use",
    },
    {
      icon: Users,
      text: "Engaged in learning sessions and team workshops to expand knowledge of best practices in web development",
    },
    {
      icon: Globe,
      text: "Managed and deployed projects on platforms like Vercel and Netlify for testing and live previews",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Work{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left - Company Info */}
              <div className="lg:w-1/3">
                <div className="sticky top-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Web Development Intern</h3>
                  <h4 className="text-xl font-semibold text-blue-600 mb-6">CodSoft</h4>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span>Maharashtra, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-purple-500" />
                      <span>June 2024 - July 2024</span>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <h5 className="font-semibold text-gray-900 mb-2">Duration</h5>
                    <p className="text-2xl font-bold text-blue-600">2 Months</p>
                    <p className="text-sm text-gray-600 mt-1">Intensive Learning Experience</p>
                  </div>
                </div>
              </div>

              {/* Right - Responsibilities */}
              <div className="lg:w-2/3">
                <h5 className="text-xl font-semibold text-gray-900 mb-6">Key Responsibilities & Achievements</h5>
                <div className="space-y-4">
                  {responsibilities.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item.text}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

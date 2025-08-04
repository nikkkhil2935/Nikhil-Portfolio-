"use client"

import { motion } from "framer-motion"
import { Code, Server, GitBranch, Users } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "API Integration"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Tools & Platforms",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Vercel", "Netlify"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Communication", "Problem Solving", "Team Collaboration"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const languages = [
    { name: "English", level: "Fluent", percentage: 90 },
    { name: "Hindi", level: "Native", percentage: 100 },
    { name: "Marathi", level: "Native", percentage: 100 },
  ]

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
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
              My{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise in web development
            </p>
          </motion.div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Languages</h3>
              <p className="text-gray-600">Communication skills across multiple languages</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {language.percentage}%
                      </span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{language.name}</h4>
                  <p className="text-sm text-gray-600">{language.level}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

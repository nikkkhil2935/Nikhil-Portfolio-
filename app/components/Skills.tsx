"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="text-blue-600" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
      color: "blue",
    },
    {
      title: "Backend Development",
      icon: <Database className="text-green-600" size={24} />,
      skills: ["Node.js", "Express.js", "API Integration"],
      color: "green",
    },
    {
      title: "Development Tools",
      icon: <Wrench className="text-purple-600" size={24} />,
      skills: ["Git", "GitHub", "Vercel", "Netlify"],
      color: "purple",
    },
    {
      title: "Soft Skills",
      icon: <Code className="text-orange-600" size={24} />,
      skills: ["Communication", "Problem Solving", "Team Collaboration", "Project Management"],
      color: "orange",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      green: "bg-green-50 border-green-200 hover:bg-green-100",
      purple: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      orange: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`p-6 rounded-xl border-2 ${getColorClasses(category.color)} hover:shadow-lg transition-all duration-300`}
              >
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="font-bold text-gray-800">{category.title}</h3>
                </motion.div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: skillIndex * 0.2,
                        }}
                      />
                      <span className="text-gray-800 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

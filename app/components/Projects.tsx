"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Brain, ShoppingBag, ChefHat } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "ReviseAI",
      description: "AI-powered business idea validation platform using Lean Startup principles",
      features: [
        "Guides users through a structured funnel: free call → UI prototype → MVP testing",
        "Emphasizes impact + profitability, with features like mission statements, OKRs, user-testing, and landing-page creation",
      ],
      technologies: ["React.js", "AI Integration", "Node.js", "Lean Startup"],
      liveUrl: "https://reviseai.vercel.app/",
      githubUrl: "https://github.com/nikkkhil2935",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Maria Bakery",
      description: "E-commerce style bakery storefront with inventory, product listings, and stock statuses",
      features: [
        "Displays product details like prices, availability, and user reviews/ratings",
        "Includes order form and About section, with clean UI/UX",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://mariabakery.vercel.app/",
      githubUrl: "https://github.com/nikkkhil2935",
      icon: ShoppingBag,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Recipe Hub",
      description: "Modern recipe sharing platform with search and filtering capabilities",
      features: [
        "Comprehensive recipe database with advanced search functionality",
        "User-friendly interface with responsive design and filtering options",
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "API Integration"],
      liveUrl: "https://recipessssssss.vercel.app/",
      githubUrl: "https://github.com/nikkkhil2935",
      icon: ChefHat,
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in web development and problem-solving
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/90 text-sm">{project.description}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 group-hover:scale-105"
                      >
                        <Github className="w-5 h-5 text-gray-600" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

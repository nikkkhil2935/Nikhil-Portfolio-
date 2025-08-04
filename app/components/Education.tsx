"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Trophy, Users, Award, BookOpen } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Academic journey focused on Information Technology and continuous learning
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-20 bottom-8 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden md:block"></div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                {/* Left - Icon and Timeline */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Right - Content */}
                <div className="flex-1 space-y-8">
                  <div>
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      Bachelor of Engineering - Information Technology
                    </motion.h3>
                    <motion.h4
                      className="text-xl font-semibold text-blue-600 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Vidyavardhini College of Engineering And Technology
                    </motion.h4>
                  </div>

                  {/* Info Cards */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300"
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
                        <p className="font-semibold text-gray-900">Location</p>
                        <p className="text-gray-600 text-sm">Vasai, Maharashtra</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-md transition-all duration-300"
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
                        <p className="font-semibold text-gray-900">Duration</p>
                        <p className="text-gray-600 text-sm">Expected: June 2026</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Academic Achievement */}
                  <motion.div
                    className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.01, y: -3 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="bg-yellow-500 p-3 rounded-lg"
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <Trophy className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h5 className="font-bold text-gray-900 text-lg">Academic Excellence</h5>
                        <p className="text-gray-600">Consistent Performance</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <motion.div
                          className="text-3xl font-bold text-yellow-600 mb-1"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          7.08
                        </motion.div>
                        <p className="text-sm text-gray-600">CGPA</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">
                          Consistently maintained strong academic performance in B.E. Information Technology program
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Extracurricular Activities */}
                  <div className="space-y-6">
                    <motion.h5
                      className="font-bold text-gray-900 text-xl flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Users className="w-6 h-6 text-blue-500" />
                      Extracurricular Activities
                    </motion.h5>

                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -3 }}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="bg-blue-100 p-2 rounded-lg flex-shrink-0"
                            whileHover={{ rotate: 15 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <BookOpen className="w-5 h-5 text-blue-600" />
                          </motion.div>
                          <div>
                            <h6 className="font-semibold text-gray-900 mb-2">C3 Committee Member</h6>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Active contributor to technical events and student engagement activities, fostering
                              innovation and collaboration
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -3 }}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="bg-green-100 p-2 rounded-lg flex-shrink-0"
                            whileHover={{ rotate: -15 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Award className="w-5 h-5 text-green-600" />
                          </motion.div>
                          <div>
                            <h6 className="font-semibold text-gray-900 mb-2">Sports Representative</h6>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Represented college in badminton tournaments, demonstrating teamwork and balancing
                              academics with sports
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

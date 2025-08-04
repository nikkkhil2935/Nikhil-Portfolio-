"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Trophy, Users } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left - Icon and Timeline */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="hidden md:block w-1 h-32 bg-gradient-to-b from-blue-500 to-purple-600 ml-8 rounded-full"></div>
              </div>

              {/* Right - Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Bachelor of Engineering - Information Technology
                  </h3>
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">
                    Vidyavardhini College of Engineering And Technology
                  </h4>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>Vasai, Maharashtra</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5 text-purple-500" />
                    <span>Expected: June 2026</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                    <span className="font-semibold text-gray-900">Academic Achievement</span>
                  </div>
                  <p className="text-gray-700 mb-2">
                    <strong>CGPA: 7.08</strong> - Consistently maintained strong academic performance in B.E.
                    Information Technology
                  </p>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    Extracurricular Activities
                  </h5>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>Active member of the C3 Committee</strong> - Contributing to technical events and
                        student engagement activities
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>College Badminton Representative</strong> - Represented the college in badminton
                        tournaments, promoting sportsmanship and balancing academics with extracurriculars
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { ArrowDown, Github, Linkedin, Download } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect } from "react"

export default function Hero() {
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.39/build/spline-viewer.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = async () => {
    try {
      // Import jsPDF dynamically to avoid SSR issues
      const { jsPDF } = await import("jspdf")

      const doc = new jsPDF()

      // Set font
      doc.setFont("helvetica")

      // Header - Name and Contact
      doc.setFontSize(24)
      doc.setTextColor(0, 0, 0)
      doc.text("Nikhil Patil", 105, 25, { align: "center" })

      doc.setFontSize(11)
      doc.setTextColor(60, 60, 60)
      doc.text("+91 9373565412 | nikhilpatil29032005@gmail.com | MH", 105, 35, { align: "center" })

      // Add separator line
      doc.setDrawColor(200, 200, 200)
      doc.setLineWidth(0.5)
      doc.line(20, 42, 190, 42)

      // Summary Section
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text("Summary", 20, 55)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      const summaryText =
        "Dynamic web developer with hands-on experience at CodSoft, specializing in responsive design and full-stack applications. Proven problem-solver adept at optimizing performance and enhancing user experience. Strong collaborator with excellent communication skills, committed to delivering high-quality projects and continuously learning modern tools to drive development efficiency."
      const summaryLines = doc.splitTextToSize(summaryText, 170)
      doc.text(summaryLines, 20, 65)

      // Education Section
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text("Education", 20, 95)

      doc.setFontSize(11)
      doc.setTextColor(0, 0, 0)
      doc.text("Vidyavardhini College of Engineering And Technology | Vasai", 20, 107)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      doc.text("Information Technology | 06/2026", 20, 115)
      doc.text("Consistently maintained a 7.08 CGPA in B.E. Information Technology", 20, 123)
      doc.text(
        "Active member of the C3 Committee, contributing to technical events and student engagement activities.",
        20,
        131,
      )
      const educationText =
        "Represented the college in badminton tournaments, promoting sportsmanship and balancing academics with extracurriculars."
      const educationLines = doc.splitTextToSize(educationText, 170)
      doc.text(educationLines, 20, 139)

      // Experience Section
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text("Experience", 20, 160)

      doc.setFontSize(11)
      doc.setTextColor(0, 0, 0)
      doc.text("CodSoft | MH", 20, 172)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      doc.text("Intern | 06/2024 - 07/2024", 20, 180)

      const experiencePoints = [
        "Developed and maintained responsive websites using HTML, CSS, JavaScript, and React.js.",
        "Collaborated with team members to build full-stack web applications, ensuring clean code and version control via GitHub.",
        "Designed user interfaces with a focus on mobile-first design and cross-browser compatibility.",
        "Optimized website performance and resolved front-end bugs to enhance user experience.",
        "Integrated APIs to fetch and display dynamic data in real-time web applications.",
        "Participated in regular code reviews and stand-up meetings to align with project goals and deadlines.",
        "Explored modern web tools and frameworks to improve development efficiency and maintainability.",
        "Created project documentation, user manuals, and reports for internal and client use.",
        "Engaged in learning sessions and team workshops to expand knowledge of best practices in web development.",
        "Managed and deployed projects on platforms like Vercel and Netlify for testing and live previews.",
      ]

      let yPosition = 188
      experiencePoints.forEach((point) => {
        const lines = doc.splitTextToSize(point, 170)
        doc.text(lines, 20, yPosition)
        yPosition += lines.length * 5 + 2
      })

      // Add new page for Projects and Skills
      doc.addPage()

      // Projects Section
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text("Projects", 20, 25)

      // ReviseAI
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text("ReviseAI", 20, 37)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      doc.text("AI-powered business idea validation platform using Lean Startup principles", 20, 45)
      doc.text("Guides users through a structured funnel: free call → UI prototype → MVP testing.", 20, 53)
      const reviseText =
        "Emphasizes impact + profitability, with features like mission statements, OKRs, user-testing, and landing-page creation"
      const reviseLines = doc.splitTextToSize(reviseText, 170)
      doc.text(reviseLines, 20, 61)

      // Maria Bakery
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text("Maria Bakery", 20, 80)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      doc.text("E-commerce style bakery storefront with inventory, product listings, and stock statuses", 20, 88)
      doc.text("Displays product details like prices, availability, and user reviews/ratings", 20, 96)
      doc.text("Includes order form and About section, with clean UI/UX.", 20, 104)

      // Recipe Hub
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text("Recipe Hub", 20, 120)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      doc.text("Modern recipe sharing platform with search and filtering capabilities", 20, 128)
      doc.text("Comprehensive recipe database with advanced search functionality", 20, 136)
      doc.text("User-friendly interface with responsive design and filtering options", 20, 144)

      // Skills Section
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text("Skills", 20, 165)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      const skillsText =
        "Communication skills, HTML5, React.js, Tailwind CSS, Node.js, Express.js, Git, GitHub, Vercel, Netlify"
      const skillsLines = doc.splitTextToSize(skillsText, 170)
      doc.text(skillsLines, 20, 175)

      // Languages Section
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text("Languages", 20, 195)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      doc.text("English, Hindi, Marathi", 20, 205)

      // Save the PDF with proper filename
      doc.save("Nikhil_Patil_CV.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      // Fallback to text file if PDF generation fails
      const link = document.createElement("a")
      link.href = "/cv/Nikhil_Patil_CV.txt"
      link.download = "Nikhil_Patil_CV.txt"
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto min-h-screen">
          {/* Left Content */}
          <div className="text-center lg:text-left flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 lg:mb-8"
            >
              <motion.div
                className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 lg:mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-slate-900 px-4 lg:px-6 py-2 rounded-full">
                  <span className="text-xs lg:text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Available for opportunities
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6"
            >
              Hi, I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Nikhil
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 lg:mb-6 leading-relaxed font-medium"
            >
              Dynamic Web Developer specializing in responsive design and full-stack applications
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 lg:mb-8 leading-relaxed"
            >
              Proven problem-solver adept at optimizing performance and enhancing user experience. Strong collaborator
              committed to delivering high-quality projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 lg:mb-12"
            >
              <motion.button
                onClick={downloadCV}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 text-sm lg:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Download size={18} className="lg:w-5 lg:h-5" />
                Download CV (PDF)
                <motion.div
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </motion.button>

              <div className="flex gap-3 lg:gap-4">
                <motion.a
                  href="https://github.com/nikkkhil2935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 lg:p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Github size={18} className="lg:w-5 lg:h-5 text-white" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/nikhil-patil-139137258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 lg:p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Linkedin size={18} className="lg:w-5 lg:h-5 text-white" />
                </motion.a>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              onClick={scrollToAbout}
              className="text-white/60 hover:text-white transition-colors duration-200 lg:hidden"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowDown size={28} className="lg:w-8 lg:h-8" />
            </motion.button>
          </div>

          {/* Right 3D Model - Full Height */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen w-full flex items-center justify-center order-1 lg:order-2"
          >
            <div className="w-full h-full relative">
              <spline-viewer
                hint
                loading-anim-type="spinner-small-light"
                url="https://prod.spline.design/qssUnA6RhM0xDvpQ/scene.splinecode"
                className="w-full h-full"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAANCAYAAADISGwcAAAG1ElEQVR4AQCBAH7/ABouMBwaLjAZGi4wExouMAsaLjADGi4wABouMAAaLjAAGi4wABouMAAaLjAHGi4wEhouMB4aLjAoGi4wMBouMDQaLjA0Gi4wMBouMCgaLjAeGi4wEhouMAcaLjAAGi4wABouMAAaLjAAGi4wABouMAMaLjALGi4wExouMBkaLjAcAIEAfv8AGi4wFxouMBQaLjAPGi4wCBouMAAaLjAAGi4wABouMAAaLjAAGi4wARouMAsaLjAXGi4wIxouMC4aLjA2Gi4wOxouMDsaLjA2Gi4wLhouMCMaLjAXGi4wCxouMAEaLjAAGi4wABouMAAaLjAAGi4wARouMAkaLjAQGi4wFRouMBgAgQB+/wAaLjASGi4wEBouMAsaLjAFGi4wABouMAAaLjAAGi4wABouMAAaLjAJGi4wFRouMCIaLjAwGi4wPBouMEUaLjBJGi4wSRouMEUaLjA8Gi4wMBouMCIaLjAVGi4wCRouMAAaLjAAGi4wABouMAAaLjABGi4wBxouMA0aLjASGi4wFQCBAH7/ABouMBIaLjAQGi4wDBouMAcaLjADGi4wARouMAEaLjAFGi4wDRouMBgaLjAmGi4wNRouMEQaLjBRGi4wWxouMGAaLjBgGi4wWxouMFEaLjBEGi4wNBouMCUaLjAXGi4wDRouMAUaLjACGi4wAhouMAUaLjAKGi4wDxouMBMaLjAVAIEAfv8AGi4wFxouMBUaLjASGi4wDxouMAwaLjAMGi4wDhouMBQaLjAeGi4wKxouMDsaLjBMGi4wXRouMGsaLjB1Gi4wehouMHoaLjB0Gi4waRouMFoaLjBKGi4wORouMCkaLjAcGi4wEhouMA0aLjALGi4wDRouMBAaLjAUGi4wFxouMBkAgQB+/wAaLjAeGi4wHRouMBoaLjAYGi4wFhouMBcaLjAbGi4wIhouMC0aLjA8Gi4wTRouMF8aLjBwGi4wfxouMIkaLjCPGi4wjhouMIcaLjB8Gi4wbBouMFoaLjBHGi4wNhouMCgaLjAdGi4wFhouMBMaLjATGi4wFRouMBkaLjAbGi4wHQCBAH7/ABouMCEaLjAgGi4wHhouMBwaLjAbGi4wHBouMCAaLjAoGi4wMxouMEIaLjBUGi4wZhouMHcaLjCGGi4wkBouMJUaLjCUGi4wjRouMIAaLjBwGi4wXhouMEsaLjA5Gi4wKhouMB4aLjAXGi4wFBouMBMaLjAVGi4wGBouMBsaLjAdAIEAfv8AGi4wHhouMB0aLjAaGi4wGBouMBYaLjAXGi4wGxouMCIaLjAtGi4wOxouMEwaLjBdGi4wbhouMHwaLjCFGi4wihouMIgaLjCBGi4wdRouMGUaLjBSGi4wQBouMC4aLjAgGi4wFRouMA8aLjAMGi4wDBouMA8aLjASGi4wFRouMBcAgQB+/wAaLjAXGi4wFRouMBIaLjAPGi4wDRouMAwaLjAOGi4wFBouMB0aLjAqGi4wORouMEkaLjBYGi4wZRouMG4aLjByGi4wcBouMGkaLjBdGi4wThouMD0aLjArGi4wHBouMA8aLjAGGi4wARouMAAaLjACGi4wBhouMAoaLjAOGi4wEACBAH7/ABouMBIaLjAQGi4wDBouMAgaLjAEGi4wARouMAIaLjAFGi4wDRouMBcaLjAkGi4wMhouMEAaLjBMGi4wVBouMFcaLjBVGi4wTxouMEQaLjA2Gi4wJhouMBcaLjAJGi4wABouMAAaLjAAGi4wABouMAAaLjAAGi4wBhouMAsaLjANAIEAfv8AGi4wEhouMBAaLjALGi4wBhouMAAaLjAAGi4wABouMAAaLjABGi4wCRouMBQaLjAhGi4wLhouMDcaLjA/Gi4wQhouMEAaLjA6Gi4wMBouMCMaLjAVGi4wCBouMAAaLjAAGi4wABouMAAaLjAAGi4wABouMAIaLjAKGi4wEBouMBMAgQB+/wAaLjAXGi4wFBouMA8aLjAJGi4wAhouMAAaLjAAGi4wABouMAAaLjADGi4wDBouMBcaLjAiGi4wKxouMDIaLjA1Gi4wMxouMC4aLjAlGi4wGRouMA0aLjACGi4wABouMAAaLjAAGi4wABouMAAaLjABGi4wChouMBIaLjAZGi4wHQGBAH7/ABouMBwaLjAZGi4wExouMAwaLjAFGi4wABouMAAaLjAAGi4wABouMAEaLjAJGi4wFBouMB4aLjAnGi4wLRouMDAaLjAuGi4wKhouMCEaLjAWGi4wCxouMAAaLjAAGi4wABouMAAaLjAAGi4wABouMAYaLjAQGi4wGhouMCEaLjAka2P7ESdKGSsAAAAASUVORK5CYII="
                  alt="Spline preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
              </spline-viewer>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator for desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden lg:flex justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-white/60 hover:text-white transition-colors duration-200"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

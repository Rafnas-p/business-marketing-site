import { motion } from 'framer-motion'
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi'
import { useTheme } from '../contexts/ThemeContext'
import { cn } from '../utils/cn'

const Hero = () => {
  const { getAccentColorValue, animationsEnabled } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={animationsEnabled ? containerVariants : {}}
          initial={animationsEnabled ? 'hidden' : false}
          animate={animationsEnabled ? 'visible' : false}
        >
          <motion.div
            variants={animationsEnabled ? itemVariants : {}}
            className="mb-6"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: `${getAccentColorValue()}20`,
                color: getAccentColorValue(),
              }}
            >
              Strategic Web Development
            </span>
          </motion.div>

          <motion.h1
            variants={animationsEnabled ? itemVariants : {}}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            High-Performing Websites for{' '}
            <span style={{ color: getAccentColorValue() }}>Doctors, Clinics & Startups</span>
          </motion.h1>

          <motion.h2
            variants={animationsEnabled ? itemVariants : {}}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
          >
            Convert Visitors into Real Customers
          </motion.h2>

          <motion.p
            variants={animationsEnabled ? itemVariants : {}}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I build strategic, search-optimized platforms that improve visibility on Google, 
            generate leads, and establish trust with your clients.
          </motion.p>

          <motion.div
            variants={animationsEnabled ? itemVariants : {}}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={handleScrollToProjects}
              className={cn(
                'px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300'
              )}
              style={{ backgroundColor: getAccentColorValue() }}
              whileHover={animationsEnabled ? { scale: 1.05, y: -2 } : {}}
              whileTap={animationsEnabled ? { scale: 0.95 } : {}}
            >
              View Services
              <FiArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={handleScrollToContact}
              className={cn(
                'px-8 py-4 rounded-lg font-semibold border-2 flex items-center gap-2 transition-all duration-300'
              )}
              style={{
                borderColor: getAccentColorValue(),
                color: getAccentColorValue(),
              }}
              whileHover={animationsEnabled ? { scale: 1.05, y: -2 } : {}}
              whileTap={animationsEnabled ? { scale: 0.95 } : {}}
            >
              Book a Consultation
              <FiPhoneCall className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

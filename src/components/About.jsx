import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { cn } from '../utils/cn'

const About = () => {
  const { getAccentColorValue, animationsEnabled } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={animationsEnabled ? containerVariants : {}}
          initial={animationsEnabled ? 'hidden' : false}
          whileInView={animationsEnabled ? 'visible' : false}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={animationsEnabled ? itemVariants : {}}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6"
          >
            My <span style={{ color: getAccentColorValue() }}>Approach</span>
          </motion.h2>

          <motion.div
            variants={animationsEnabled ? itemVariants : {}}
            className="prose prose-lg dark:prose-invert max-w-none text-center"
          >
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a professional web developer focused on helping doctors, clinics, and startups build high-performing websites. Instead of just creating personal-style websites, I design strategic platforms that improve visibility on Google, generate leads, and establish trust with clients. My goal is to deliver websites that not only look professional but also rank well, communicate clearly, and convert visitors into real customers.
            </p>
          </motion.div>

          <motion.div
            variants={animationsEnabled ? itemVariants : {}}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: 'Focus', value: 'Healthcare & Startups' },
              { label: 'Location', value: 'Kerala, India' },
              { label: 'Strategy', value: 'SEO & Conversions' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg text-center"
                whileHover={animationsEnabled ? { y: -5, scale: 1.02 } : {}}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="text-2xl font-bold mb-2"
                  style={{ color: getAccentColorValue() }}
                >
                  {item.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

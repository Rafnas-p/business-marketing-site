import { motion } from 'framer-motion'
import { FiExternalLink, FiFileText } from 'react-icons/fi'
import { useTheme } from '../contexts/ThemeContext'
import { cn } from '../utils/cn'

const Projects = () => {
  const { getAccentColorValue, animationsEnabled } = useTheme()

  const projects = [
    {
      title: 'Pro Gamer Portfolio',
      description: 'Bold, highly customizable personal sites for gamers of all styles and aesthetics',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    },
    {
      title: 'Digital Marketer Site',
      description: 'Personal brand and high-converting lead-gen portfolio for a marketing expert',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      title: 'InnovateMD Telehealth',
      description: 'High-converting SaaS landing page and secure telemedicine dashboard',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop',
    },
    {
      title: 'NextGen Analytics Startup',
      description: 'Strategic B2B lead generation platform and dynamic web app',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      id="projects"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={animationsEnabled ? containerVariants : {}}
          initial={animationsEnabled ? 'hidden' : false}
          whileInView={animationsEnabled ? 'visible' : false}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={animationsEnabled ? itemVariants : {}}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          >
            My <span style={{ color: getAccentColorValue() }}>Projects</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={animationsEnabled ? itemVariants : {}}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg group"
                whileHover={animationsEnabled ? { y: -10, scale: 1.02 } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: getAccentColorValue() }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-white'
                      )}
                      style={{ backgroundColor: getAccentColorValue() }}
                      whileHover={animationsEnabled ? { scale: 1.05 } : {}}
                      whileTap={animationsEnabled ? { scale: 0.95 } : {}}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href="#"
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-lg font-medium border-2 transition-all duration-300'
                      )}
                      style={{
                        borderColor: getAccentColorValue(),
                        color: getAccentColorValue(),
                      }}
                      whileHover={animationsEnabled ? { scale: 1.05 } : {}}
                      whileTap={animationsEnabled ? { scale: 0.95 } : {}}
                    >
                      <FiFileText className="w-4 h-4" />
                      Case Study
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

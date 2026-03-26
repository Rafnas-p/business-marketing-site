import { motion } from 'framer-motion'
import { FiTarget, FiTrendingUp, FiGlobe, FiSearch, FiSmartphone } from 'react-icons/fi'
import { useTheme } from '../contexts/ThemeContext'
import { cn } from '../utils/cn'

const Services = () => {
  const { getAccentColorValue, animationsEnabled } = useTheme()

  const services = [
    {
      title: 'Healthcare Practice Websites',
      icon: FiGlobe,
    },
    {
      title: 'Startup Landing Pages',
      icon: FiTarget,
    },
    {
      title: 'Search Engine Optimization',
      icon: FiSearch,
    },
    {
      title: 'Lead Generation Systems',
      icon: FiTrendingUp,
    },
    {
      title: 'Responsive & Fast Design',
      icon: FiSmartphone,
    },
  ]

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
      id="services"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6"
          >
            My <span style={{ color: getAccentColorValue() }}>Services</span>
          </motion.h2>

          <motion.p
            variants={animationsEnabled ? itemVariants : {}}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          >
            I offer professional web development services to help businesses
            grow online.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={animationsEnabled ? itemVariants : {}}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={animationsEnabled ? { y: -5, scale: 1.02 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${getAccentColorValue()}20`,
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: getAccentColorValue() }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

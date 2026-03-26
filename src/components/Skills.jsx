import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiVercel } from 'react-icons/si'
import { useTheme } from '../contexts/ThemeContext'
import { cn } from '../utils/cn'

const Skills = () => {
  const { getAccentColorValue, animationsEnabled } = useTheme()

  const skills = {
    Frontend: [
      { name: 'React', icon: FaReact },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
    Backend: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
    ],
    Tools: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Vercel', icon: SiVercel },
    ],
  }

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
      id="skills"
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          >
            My <span style={{ color: getAccentColorValue() }}>Skills</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                variants={animationsEnabled ? itemVariants : {}}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3
                  className="text-xl font-bold mb-6 text-center"
                  style={{ color: getAccentColorValue() }}
                >
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {items.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-md transition-shadow"
                        whileHover={
                          animationsEnabled
                            ? {
                                scale: 1.1,
                                y: -5,
                              }
                            : {}
                        }
                        transition={{ duration: 0.2 }}
                      >
                        <Icon
                          className="w-8 h-8 mb-2"
                          style={{ color: getAccentColorValue() }}
                        />
                        <span className="text-sm font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

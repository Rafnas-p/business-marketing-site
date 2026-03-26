import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { useTheme } from '../contexts/ThemeContext'
import { cn } from '../utils/cn'

const Contact = () => {
  const { getAccentColorValue, animationsEnabled } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
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
      id="contact"
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
            Get In <span style={{ color: getAccentColorValue() }}>Touch</span>
          </motion.h2>

          <motion.p
            variants={animationsEnabled ? itemVariants : {}}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 text-center mb-12"
          >
            Looking for a professional website? Let's work together.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div variants={animationsEnabled ? itemVariants : {}}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${getAccentColorValue()}20`,
                    }}
                  >
                    <FiMail
                      className="w-6 h-6"
                      style={{ color: getAccentColorValue() }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contact@rafnas.dev"
                      className="text-gray-600 dark:text-gray-400 hover:opacity-80 transition-opacity"
                    >
                      contact@rafnas.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${getAccentColorValue()}20`,
                    }}
                  >
                    <FiPhone
                      className="w-6 h-6"
                      style={{ color: getAccentColorValue() }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:opacity-80 transition-opacity"
                    >
                      +91 1234567890
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={animationsEnabled ? itemVariants : {}}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 transition-all"
                    style={{
                      focusRingColor: getAccentColorValue(),
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = getAccentColorValue()
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = ''
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 transition-all"
                    onFocus={(e) => {
                      e.target.style.borderColor = getAccentColorValue()
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = ''
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 transition-all resize-none"
                    onFocus={(e) => {
                      e.target.style.borderColor = getAccentColorValue()
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = ''
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className={cn(
                    'w-full px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300'
                  )}
                  style={{ backgroundColor: getAccentColorValue() }}
                  whileHover={animationsEnabled ? { scale: 1.02 } : {}}
                  whileTap={animationsEnabled ? { scale: 0.98 } : {}}
                >
                  Send Message
                  <FiSend className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

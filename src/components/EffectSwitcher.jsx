import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSettings, FiX } from 'react-icons/fi'
import { useTheme } from '../contexts/ThemeContext'
import { cn } from '../utils/cn'

const EffectSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    accentColor,
    setAccentColor,
    animationsEnabled,
    setAnimationsEnabled,
    getAccentColorValue,
  } = useTheme()

  const accentColors = [
    { name: 'Blue', value: 'blue' },
    { name: 'Purple', value: 'purple' },
    { name: 'Green', value: 'green' },
  ]

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white"
        style={{ backgroundColor: getAccentColorValue() }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open settings"
      >
        <FiSettings className="w-6 h-6" />
      </motion.button>

      {/* Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Settings</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close settings"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Accent Color */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-4 text-gray-700 dark:text-gray-300">
                  Accent Color
                </h3>
                <div className="flex gap-3">
                  {accentColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setAccentColor(color.value)}
                      className={cn(
                        'flex-1 py-3 rounded-lg font-medium transition-all',
                        accentColor === color.value
                          ? 'text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                      )}
                      style={
                        accentColor === color.value
                          ? { backgroundColor: getAccentColorValue() }
                          : {}
                      }
                    >
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Animations Toggle */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-4 text-gray-700 dark:text-gray-300">
                  Animations
                </h3>
                <button
                  onClick={() => setAnimationsEnabled(!animationsEnabled)}
                  className={cn(
                    'w-full py-3 rounded-lg font-medium transition-all',
                    animationsEnabled
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  )}
                  style={
                    animationsEnabled
                      ? { backgroundColor: getAccentColorValue() }
                      : {}
                  }
                >
                  {animationsEnabled ? 'Enabled' : 'Disabled'}
                </button>
              </div>

              {/* Preview */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-sm font-semibold mb-4 text-gray-700 dark:text-gray-300">
                  Preview
                </h3>
                <div
                  className="w-full h-20 rounded-lg flex items-center justify-center text-white font-semibold"
                  style={{ backgroundColor: getAccentColorValue() }}
                >
                  Accent Color
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default EffectSwitcher

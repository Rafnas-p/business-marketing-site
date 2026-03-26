import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })

  const [accentColor, setAccentColor] = useState(() => {
    const saved = localStorage.getItem('accentColor')
    return saved || 'blue'
  })

  const [animationsEnabled, setAnimationsEnabled] = useState(() => {
    const saved = localStorage.getItem('animationsEnabled')
    return saved !== null ? saved === 'true' : true
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    localStorage.setItem('accentColor', accentColor)
  }, [accentColor])

  useEffect(() => {
    localStorage.setItem('animationsEnabled', animationsEnabled.toString())
  }, [animationsEnabled])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const getAccentColorClass = () => {
    return `accent-${accentColor}`
  }

  const getAccentColorValue = () => {
    const colors = {
      blue: '#3b82f6',
      purple: '#8b5cf6',
      green: '#10b981',
    }
    return colors[accentColor] || colors.blue
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        accentColor,
        setAccentColor,
        animationsEnabled,
        setAnimationsEnabled,
        getAccentColorClass,
        getAccentColorValue,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

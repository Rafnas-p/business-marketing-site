import { Helmet } from 'react-helmet-async'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Rafnas | Professional Web Development & Personal Portfolios</title>
        <meta
          name="description"
          content="Professional web development services for businesses, creators, gamers, and developers. Build high-performing websites and personal portfolios."
        />
        <meta
          name="keywords"
          content="Personal Portfolios, Gamer Websites, Developer Portfolios, Business Websites, SEO, Web Developer, Rafnas"
        />
        <meta name="author" content="Rafnas" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rafnas | Professional Web Development & Personal Portfolios"
        />
        <meta
          property="og:description"
          content="Custom websites and portfolios designed for gamers, developers, marketers, and businesses."
        />
        <meta property="og:url" content="https://rafnas.dev" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rafnas | Web Development & Portfolios"
        />
        <meta
          name="twitter:description"
          content="Custom websites and portfolios designed for gamers, developers, marketers, and businesses."
        />
        
        {/* Canonical */}
        <link rel="canonical" href="https://rafnas.dev" />
      </Helmet>
      <Home />
    </ThemeProvider>
  )
}

export default App

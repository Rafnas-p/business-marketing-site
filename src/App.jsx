import { Helmet } from 'react-helmet-async'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Rafnas | Premium Personal Portfolios & Business Websites</title>
        <meta
          name="description"
          content="Professional web development services specializing in premium personal portfolios for gamers, developers, and marketers, alongside high-performing business websites."
        />
        <meta
          name="keywords"
          content="Personal Portfolio Developer, Gamer Portfolio, Developer Portfolio, Business Websites, Startup Websites, Web Developer, Rafnas"
        />
        <meta name="author" content="Rafnas" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rafnas | Premium Personal Portfolios & Business Websites"
        />
        <meta
          property="og:description"
          content="Strategic, fast, and stunning websites for gamers, marketers, developers, and growing startups."
        />
        <meta property="og:url" content="https://rafnas.dev" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rafnas | Premium Web Development"
        />
        <meta
          name="twitter:description"
          content="Strategic, fast, and stunning websites for gamers, marketers, developers, and growing startups."
        />
        
        {/* Canonical */}
        <link rel="canonical" href="https://rafnas.dev" />
      </Helmet>
      <Home />
    </ThemeProvider>
  )
}

export default App

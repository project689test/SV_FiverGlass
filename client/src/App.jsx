import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Home />
        <Analytics />
      </div>
    </ThemeProvider>
  )
}

export default App

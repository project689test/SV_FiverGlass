import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App

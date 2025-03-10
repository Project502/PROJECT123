import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import './App.css'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Help from './pages/Help'
import Login from './pages/Login'
import Register from './pages/Register'
import WeatherForecast from "./pages/WeatherForecast"; // Import weather project

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const isAuthenticated = !!user

  if (loading) {
    return (
      <div className="loading-container">
        <div className="growing"></div>
        <p className="loading-text">Loading...</p>
      </div>
    )
  }
  

  return (
    <Router>
      {isAuthenticated && <Navbar user={user} />}
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <Home user={user} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/about" 
          element={isAuthenticated ? <About /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/services" 
          element={isAuthenticated ? <Services /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/help" 
          element={isAuthenticated ? <Help /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/login" 
          element={!isAuthenticated ? <Login /> : <Navigate to="/" />} 
        />
        <Route 
          path="/register" 
          element={!isAuthenticated ? <Register /> : <Navigate to="/" />} 
        />
        <Route 
          path="/weather" 
          element={<WeatherForecast />} 
        />
      </Routes>
      {isAuthenticated && <Footer />}
    </Router>
  )
}

export default App

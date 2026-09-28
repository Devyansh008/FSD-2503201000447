import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './routes/Dashboard.jsx'
import Login from './routes/Login.jsx'
import Signup from './routes/Signup.jsx'

const USERS_KEY = 'account-users'
const SESSION_KEY = 'account-session'

function readStoredValue(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [user, setUser] = useState(() => readStoredValue(SESSION_KEY, null))
  const [users, setUsers] = useState(() => readStoredValue(USERS_KEY, []))
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (nextPath, nextMessage = '') => {
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
    setMessage(nextMessage)
  }

  const handleLogin = (identifier, password) => {
    const matchedUser = users.find((account) =>
      [account.username, account.email].some((value) => value.toLowerCase() === identifier.trim().toLowerCase())
      && account.password === password,
    )

    if (!matchedUser) {
      setMessage('Those details did not match an account. Check them and try again.')
      return
    }

    localStorage.setItem(SESSION_KEY, JSON.stringify(matchedUser))
    setUser(matchedUser)
    navigate('/dashboard')
  }

  const handleSignup = (details) => {
    const duplicate = users.some((account) =>
      account.username.toLowerCase() === details.username.toLowerCase()
      || account.email.toLowerCase() === details.email.toLowerCase(),
    )

    if (duplicate) {
      setMessage('That username or email is already registered.')
      return
    }

    const nextUsers = [...users, details]
    localStorage.setItem(USERS_KEY, JSON.stringify(nextUsers))
    localStorage.setItem(SESSION_KEY, JSON.stringify(details))
    setUsers(nextUsers)
    setUser(details)
    navigate('/dashboard')
  }

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
    navigate('/login', 'You have been logged out.')
  }

  useEffect(() => {
    if (path === '/dashboard' && !user) navigate('/login')
    if ((path === '/login' || path === '/signup') && user) navigate('/dashboard')
  }, [path, user])

  if (path === '/dashboard' && user) {
    return <Dashboard user={user} onLogout={handleLogout} />
  }

  if (path === '/signup') {
    return <Signup onSignup={handleSignup} onNavigate={navigate} message={message} />
  }

  return <Login onLogin={handleLogin} onNavigate={navigate} message={message} />
}

export default App

import { createContext, useContext, useState, useEffect } from 'react'
import { getSession, setSession, getUsers, saveUsers } from '../utils/storage'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setUser(getSession())
    setLoading(false)
  }, [])

  const login = (email, password) => {
    const users = getUsers()
    const found = users.find((u) => u.email === email && u.password === password)
    if (!found) return { success: false, error: 'Invalid email or password' }
    const session = { id: found.id, email: found.email, fullName: found.fullName }
    setSession(session)
    setUser(session)
    return { success: true }
  }

  const register = (fullName, email, password) => {
    const users = getUsers()
    if (users.some((u) => u.email === email)) {
      return { success: false, error: 'An account with this email already exists' }
    }
    const newUser = {
      id: `user_${Date.now()}`,
      fullName,
      email,
      password,
    }
    users.push(newUser)
    saveUsers(users)
    const session = { id: newUser.id, email: newUser.email, fullName: newUser.fullName }
    setSession(session)
    setUser(session)
    return { success: true }
  }

  const logout = () => {
    setSession(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

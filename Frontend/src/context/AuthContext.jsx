import { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../services/api.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('workway_token');
      if (token) {
        try {
          const data = await authApi.getProfile();
          setUser(data.user);
        } catch (error) {
          console.error('Session expired or invalid:', error);
          localStorage.removeItem('workway_token');
          setUser(null);
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  async function login(credentials) {
    const data = await authApi.login(credentials);
    localStorage.setItem('workway_token', data.token);
    setUser(data.user);
    return data;
  }

  async function register(userData) {
    const data = await authApi.register(userData);
    localStorage.setItem('workway_token', data.token);
    setUser(data.user);
    return data;
  }

  function logout() {
    localStorage.removeItem('workway_token');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

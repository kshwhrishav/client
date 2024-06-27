import { useState, useEffect } from 'react';
import Router from 'next/router';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      validateToken(token); // Validate token on initial load
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      setUser(data.user);

      // Validate token after successful login
      await validateToken(data.token);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const validateToken = async (token) => {
    try {
      const response = await fetch('http://localhost:3002/api/validate-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
      });

      if (!response.ok) {
        throw new Error('Invalid token');
      }

      const data = await response.json();
      setUser(data.user);
      setLoading(false);

      // Redirect to /dashboard after successful validation
      Router.push('/dashboard');
    } catch (error) {
      console.error('Token validation failed:', error);
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    Router.push('/login');
  };

  return { user, loading, login, logout };
};

"use client";
import { createContext, useContext, useEffect, useState } from "react";
import "dotenv/config";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // logged-in user info
  const [token, setToken] = useState(null); // JWT token
  const [loading, setLoading] = useState(true);

  // Load from localStorage on first render
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchUser(storedToken);
    } else {
      setLoading(false);
    }
  }, []);

  // Fetch user from /api/auth/me using token
  const fetchUser = async (jwtToken) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch user");
      const data = await res.json();
      setUser(data); // backend already returns user object
    } catch (err) {
      console.error(err);
      logout();
    } finally {
      setLoading(false);
    }
  };

  // Login request
  const login = async (email, password) => {


    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      setToken(data.token);
      setUser(data.user);
      localStorage.setItem("token", data.token);

      return data;
    } catch (err) {
      throw err;
    }
  };

  // Signup request
  const signup = async (name, email, password, role) => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      setToken(data.token);
      setUser(data.user);
      localStorage.setItem("token", data.token);

      return data;
    } catch (err) {
      throw err;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy use
export const useAuth = () => useContext(AuthContext);

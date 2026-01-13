import { createContext, useContext, useEffect, useState } from "react";
import { executeBasicAuthenticationServices } from "../API/TodoAppService";
import { apiClient } from "../API/ApiClient";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  // ✅ Setup interceptor when token changes
  useEffect(() => {
  let interceptor;

  if (token) {
    interceptor = apiClient.interceptors.request.use((config) => {
      config.headers.Authorization = token;
      return config;
    });
  }

  return () => {
    if (interceptor !== undefined) {
      apiClient.interceptors.request.eject(interceptor);
    }
  };
}, [token]);

  // ✅ Login Function
  async function login(username, password) {
    const baToken = "Basic " + window.btoa(username + ":" + password);

    try {
      const response = await executeBasicAuthenticationServices(baToken);

      if (response.status === 200) {
        setAuthenticated(true);
        setUsername(username);
        setToken(baToken);
        return true;
      } else {
        setAuthenticated(false);
        setUsername(null);
        setToken(null);
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      setAuthenticated(false);
      setUsername(null);
      setToken(null);
      return false;
    }
  }

  // ✅ Logout Function
  function logout() {
    setAuthenticated(false);
    setUsername(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, username, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

import React, {createContext, useState, useContext, children} from "react";

// create context for the authentication state
const AuthContext = createContext();

// create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Corrected state variable names

  // Example function to log in
  const login = () => setIsAuthenticated(true)
  
  // Example function to log out
  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider value = {{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}
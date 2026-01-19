// contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Define valid credentials with roles
  const validCredentials = {
    "PM-MASTER-001": {
      password: "master123",
      role: "master",
      name: "Master Administrator",
      module: null,
      licenseNumber: "PM-MASTER-001",
    },
    "PM-PROC-001": {
      password: "process123",
      role: "user",
      name: "Process Automation",
      module: "process",
      licenseNumber: "PM-PROC-001",
    },
    "PM-ENRG-001": {
      password: "energy123",
      role: "user",
      name: "Energy Automation",
      module: "energy",
      licenseNumber: "PM-ENRG-001",
    },
    "PM-BLDG-001": {
      password: "building123",
      role: "user",
      name: "Building Automation",
      module: "building",
      licenseNumber: "PM-BLDG-001",
    },
    "PM-FACT-001": {
      password: "factory123",
      role: "user",
      name: "Factory Automation",
      module: "factory",
      licenseNumber: "PM-FACT-001",
    },
  };

  const login = (licenseNumber, password) => {
    const credential = validCredentials[licenseNumber];

    if (credential && credential.password === password) {
      const userData = {
        licenseNumber,
        name: credential.name,
        role: credential.role,
        module: credential.module,
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      // Redirect based on role
      if (credential.role === "master") {
        navigate("/modules");
      } else if (credential.module) {
        navigate(`/${credential.module}/dashboard`);
      }

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("selectedModule");
    navigate("/login");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const response = await fetch("/api/auth/check");
  //     const data = await response.json();
  //     setIsAuthenticated(true);
  //   };
  //   checkAuth();
  // }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }
  
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

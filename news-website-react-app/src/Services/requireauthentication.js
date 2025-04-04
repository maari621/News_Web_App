import React from "react";
import { useAuth } from "./auth.js";
import { Navigate } from "react-router-dom";
export const RequireAuthentication = ({ children }) => {
  const auth = useAuth();

  if (!localStorage.getItem('user_id')) {
    return <Navigate to="/" />;

  }
  return children;
};

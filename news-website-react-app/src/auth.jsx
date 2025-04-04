import { createContext, useState, useContext } from "react";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => { 
  const [id, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmailId, setUserEmailId] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const login = (id, userName, userEmailId, userRole) => {
    setUserId(id);
    setUserName(userName);
    setUserEmailId(userEmailId);
    setUserRole(userRole);
    localStorage.setItem('user_id', id);
  };

  const logout = () => {
    setUserId(null);
    setUserName(null);
    setUserEmailId(null);
    setUserRole(null);
    localStorage.removeItem('user_id');
  };

  return (
    <AuthContext.Provider
      value={{ id, userName, userEmailId, userRole, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};

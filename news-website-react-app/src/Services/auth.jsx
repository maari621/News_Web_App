import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => { 
  const [user, setUser] = useState({
    id: null,
    userName: null,
    userEmailId: null
  });

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (id, userName, userEmailId) => {
    const newUser = { id, userName, userEmailId };
    console.log(newUser);
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser({ id: null, userName: null, userEmailId: null });
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ ...user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

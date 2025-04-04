import Home from "./Components/Home/Home.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer.jsx";
import Body from "./Components/Body/Body.jsx";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import { AuthProvider } from "./Services/auth.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const location = useLocation();

  // Routes where Navbar and Footer should be hidden
  const hideNavbarFooter = ["/Login", "/Signup"].includes(location.pathname);
  return (
    <>
    <AuthProvider>
    {!hideNavbarFooter && (isLoggedIn ? <LoggedInNavbar /> : <Navbar />)}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Body />} />
      <Route path="/search/:id" element={<Body />} />
      <Route
        path="/login"
        element={<Login onLogin={() => setIsLoggedIn(true)} />} // Pass login handler
      />
      <Route path="/Signup" element={<Signup />} />
    </Routes>

    {!hideNavbarFooter && <Footer />}
    </AuthProvider>
    </>
  )
}
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
 
  const handleButtonClick = () => {
    navigate("/Signup");
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`); // Navigate to the search page with the query
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">THE NEWS+</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/national">National</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/sport">Sport</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/world">World</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/automobile">Automobile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/politics">Politics</Link>
            </li>
          </ul>
          <form className="d-flex ms-auto search-form" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button className="btn btn-primary sign-btn" onClick={handleButtonClick}>Sign In / Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

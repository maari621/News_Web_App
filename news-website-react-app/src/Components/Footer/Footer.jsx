import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="container py-4">
        <div className="row">
          {/* Logo and About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-logo">NewsPortal</h5>
            <p>
              Your trusted source for the latest news from around the world. Stay
              informed with accurate and up-to-date reporting.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} NewsPortal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

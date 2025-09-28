import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, username, cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="fa-solid fa-shop me-2" style={{ fontSize: "2rem" }}></i>
          <span style={{ fontWeight: "800" }}>ShopYours</span>
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Dynamic links */}
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">
                    <i className="fa-solid fa-user me-2"></i>
                    {username}
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fa-solid fa-user me-2"></i> Login
                </Link>
              </li>
            )}

            {/* Cart */}
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                <i className="fa-solid fa-cart-shopping" style={{ fontSize: "1.5rem" }}></i>
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

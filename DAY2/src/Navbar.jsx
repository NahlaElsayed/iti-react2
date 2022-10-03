import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          PlayStation
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/favorites"
            >
              Favorites
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/contactus"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

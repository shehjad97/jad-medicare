import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../logo.svg";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info fixed-top">
        <div className="container">
          <Link className="navbar-brand text-color" to="/home">
            <img
              className="img-fluid me-2 pb-1"
              width="45"
              src={logo}
              alt="Logo here"
            />
            Jad Medicare
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item my-auto">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item my-auto">
                <span className="nav-link">
                  {user?.displayName ? (
                    <span className=" border-2 border-bottom border-dark"><i class="fas fa-user"></i> {user?.displayName}</span>
                  ) : (
                    <span className="border-2 border-bottom border-dark">{user?.email}</span>
                  )}
                </span>
              </li>
              {user?.email ? (
                <li className="nav-item my-auto" onClick={logOut}>
                  <Link className="nav-link" to="/home">
                    <span className="btn btn-color">
                      Logout <i className="fas fa-sign-out-alt"></i>
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="nav-item my-auto">
                  <Link className="nav-link my-auto" to="/login">
                    <span className="btn btn-color">
                      Login <i className="fas fa-sign-in-alt"></i>
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-5 pb-4"></div>
    </div>
  );
};

export default Header;
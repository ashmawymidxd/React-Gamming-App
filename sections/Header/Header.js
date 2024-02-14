import React from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
// import li, { liDropDown } from "../../Components/li/li";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/browse" className="nav-link text-white">Browse</Link>
              </li>
              <li className="nav-item dropdown">
              <Link to="/details" className="nav-link text-white">Details</Link>
              </li>
              <li className="nav-item">
              <Link to="/streams" className="nav-link text-white">Streams</Link>
              </li>
            </ul>

            <ul className="navbar-nav d-flex flex-row me-1">
              <li className="nav-item me-3 me-lg-0">
                <div className="dropdown">
                  <a
                    className="link-white me-3 dropdown-toggle hidden-arrow"
                    href="/#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user mx-1 text-white"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link to="/profile" className="dropdown-item">Profile</Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Another news
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

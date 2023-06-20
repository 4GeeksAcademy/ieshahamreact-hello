import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ title, navLabel1, navLabel2, navLabel3, navLabel4 }) => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarText">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{navLabel1}</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">{navLabel2}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{navLabel3}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{navLabel4}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

NavBar.propTypes = {
  title: PropTypes.string,
  navLabel1: PropTypes.string,
  navLabel2: PropTypes.string,
  navLabel3: PropTypes.string,
  navLabel4: PropTypes.string,
};

export default NavBar;
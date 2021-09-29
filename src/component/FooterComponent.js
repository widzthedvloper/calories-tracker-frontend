import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/footer.css';

function FooterComponent() {
  return (
    <div className="footer-nav">
      <div className="nav-item">
        <NavLink className="footer-item" activeClassName="is-active" to="/new/food">
          Add Food
        </NavLink>
      </div>
      <div className="nav-item">
        <p className="footer-text">Trac It</p>
      </div>
      <div className="nav-item">
        <p className="footer-text">Your Health</p>
      </div>
      <div className="nav-item">
        <p className="footer-text">More</p>
      </div>
    </div>
  );
}

export default FooterComponent;
